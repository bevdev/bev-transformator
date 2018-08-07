import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
import * as constants from '../../common/constants';

const initialState = {
    frameList : [
        { id: constants.FRAME_ITRS2014, name: 'ITRF2014' },
        { id: constants.FRAME_ETRS89, name: 'ETRS89' },
        { id: constants.FRAME_ETRS2000, name: 'ETRS2000' },
        { id: constants.FRAME_MGI, name: 'MGI' },
    ],
    ellpsList : [
        { id: constants.ELLPS_BESSEL, name: 'Bessel'},
        { id: constants.ELLPS_GRS80, name: 'GRS80'}
    ],
    meridianList : [
        { id: constants.MERIDIAN_GREENWICH, name: "Greenwich"},
        { id: constants.MERIDIAN_FERRO, name: 'Ferro'}
    ],
    prjList : [
        { id: constants.PROJ_MGI_GK28, name: 'MGI_GK_M28'},
        { id: constants.PROJ_MGI_GK31, name: 'MGI_GK_M31'},
        { id: constants.PROJ_MGI_GK34, name: 'MGI_GK_M34'},
    ],
    heightSystemList: [
        { id: constants.HEIGHT_ELLPS, name: 'Ellipsoidisch'},
        { id: constants.HEIGHT_ORTHO, name: 'Orthometrisch'},
        { id: constants.HEIGHT_USAGE, name: 'Gebrauchshöhe'},
    ],
    transformationMethodList: [
        { id: constants.TM_GIS_GRID, name: 'GIS Grid (sigma: 0.15m)'},
        { id: constants.TM_SEVEN_PARAM, name: '7-Parameter (sigma: 1.50m)'},
    ],
    verticalGridList: [
        // { id: constants.VG_GEOID_GRS80, name: 'Ell. -> Ortho. GRS80'},
        // { id: constants.VG_GEOID_BESSEL, name: 'Ell. -> Ortho. Bessel'},
        // { id: constants.VG_HEIGHT, name: 'Orth. -> Gebr. GRS80'},
        // { id: constants.VG_HEIGHT_PLUS, name: 'Ell. -> Gebr. GRS80'},
    ]
}

const apiUpdateFrameList = (state, action) => {
    return updateObject( state, {
        frameList: action.frameList
    });
}

const apiUpdateEllipsoidList = (state, action) => {
    return updateObject( state, {
        ellpsList: action.ellpsList
    });
}

const apiUpdateMeridianList = (state, action) => {
    return updateObject( state, {
        meridianList: action.meridianList
    })
}

const apiUpdateProjectionList = (state, action) => {
    return updateObject( state, {
        prjList: action.prjList
    })
}

const apiUpdateVerticalGridList = (state, action) => {
    return updateObject( state, {
        verticalGridList: action.verticalGridList
    })
}

const apiUpdateHeightSystemList = (state, action) => {
    return updateObject( state,  {
        heightSystemList: action.heightSystemList
    })
}

const reducer = ( state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.API_UPDATE_FRAME_LIST: return apiUpdateFrameList( state, action );
        case actionTypes.API_UPDATE_ELLPS_LIST: return apiUpdateEllipsoidList( state, action );
        case actionTypes.API_UPDATE_MERIDIAN_LIST: return apiUpdateMeridianList( state, action );
        case actionTypes.API_UPDATE_PROJECTION_LIST: return apiUpdateProjectionList( state, action );
        case actionTypes.API_UPDATE_VERTICAL_GRID_LIST: return apiUpdateVerticalGridList( state, action );
        case actionTypes.API_UPDATE_HEIGHT_SYSTEM_LIST: return apiUpdateHeightSystemList( state, action );
        
        default:
            return state;
    } 
}

export default reducer;