import * as actionTypes from './actionTypes';
import axios from 'axios';
// import * as constants from '../../common/constants';

const TRANSFORMATOR_API_URL_ADV = 'https://transformator.bev.gv.at/at.gv.bev.transformator/api/v1.0/advanced/';
const TRANSFORMATOR_API_URL_HGT = 'https://transformator.bev.gv.at/at.gv.bev.transformator/api/v1.0/height/';
const TRANSFORMATOR_API_URL_AUT = 'https://transformator.bev.gv.at/at.gv.bev.transformator/api/v1.0/austrian/etrs2mgi/';
const apiConfig = {
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
}
/*
 * action creators
 */

 const extractData = (data) => {
    const apiChoices = [...data];
    const choices = [];
    apiChoices.forEach( obj => {
        choices.push({id: obj.value, name: obj.display_name});
    })
    return choices;
 }

export const apiStart = () => {
    return {
        type: actionTypes.API_START
    }
}

export const apiFail = (err) => {
    return {
        type: actionTypes.API_FAIL,
        error: err
    }
}

export const apiSuccess = () => {
    return {
        type: actionTypes.API_SUCCESS,
    }
}

export const apiDone = () => {
    return {
        type: actionTypes.API_DONE,
    }
}

export const apiUpdateFrameList = (frameList) => {
    return {
        type: actionTypes.API_UPDATE_FRAME_LIST,
        frameList: frameList
    }
}

export const apiUpdateEllipsoidList = (ellpsList) => {
    return {
        type: actionTypes.API_UPDATE_ELLPS_LIST,
        ellpsList: ellpsList
    }
}

export const apiUpdateMeridianList = (meridianList) => {
    return {
        type: actionTypes.API_UPDATE_MERIDIAN_LIST,
        meridianList: meridianList
    }
}

export const apiUpdateProjectionList = (prjList) => {
    return {
        type: actionTypes.API_UPDATE_PROJECTION_LIST,
        prjList: prjList
    }
}

export const apiUpdateVerticalGridList = (vGridList) => {
    return {
        type: actionTypes.API_UPDATE_VERTICAL_GRID_LIST,
        verticalGridList: vGridList
    }
}

export const apiUpdateHeightSystemList = (hSysList) => {
    return {
        type: actionTypes.API_UPDATE_HEIGHT_SYSTEM_LIST,
        heightSystemList: hSysList
    }
}

export const apiUpdateAdvancedLists = () => {
    return dispatch => {
        dispatch(apiStart());
        axios.options(
            TRANSFORMATOR_API_URL_ADV, apiConfig
        ).then(res => {
            const choicesFrame = extractData(res.data.actions.POST.source_crs.children.frame.choices);
            const choicesEllps = extractData(res.data.actions.POST.source_crs.children.ellipsoid.choices);
            const choicesMrdns = extractData(res.data.actions.POST.source_crs.children.prime_meridian.choices);
            const choicesPrjs = extractData(res.data.actions.POST.source_crs.children.projection.choices);
            dispatch(apiUpdateFrameList(choicesFrame));
            dispatch(apiUpdateEllipsoidList(choicesEllps));
            dispatch(apiUpdateMeridianList(choicesMrdns));
            dispatch(apiUpdateProjectionList(choicesPrjs));
            dispatch(apiSuccess());  
        }).catch(err => {
            dispatch(apiFail(err));
        });
    }    
}

export const apiUpdateHeightList = () => {
    return dispatch => {
        dispatch(apiStart());
        axios.options(
            TRANSFORMATOR_API_URL_HGT, apiConfig
        ).then(res => {
            console.log(res.data.actions.POST)
            const choicesVerticalGrids = extractData(res.data.actions.POST.vertical_grid.choices);
            dispatch(apiUpdateVerticalGridList(choicesVerticalGrids));
            dispatch(apiSuccess());  
        }).catch(err => {
            dispatch(apiFail(err));
        });
    }
}

export const apiUpdateAustrianLists = () => {
    return dispatch => {
        dispatch(apiStart());
        axios.options(
            TRANSFORMATOR_API_URL_AUT, apiConfig
        ).then(res => {
            console.log(res.data.actions.POST)
            const choicesHeightSystem = extractData(res.data.actions.POST.height_out.choices);
            dispatch(apiUpdateHeightSystemList(choicesHeightSystem));
            dispatch(apiSuccess());  
        }).catch(err => {
            dispatch(apiFail(err));
        });
    }
}