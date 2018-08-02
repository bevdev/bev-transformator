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
        { id: constants.MERIDIAN_GREENWHICH, name: "Greenwhich"},
        { id: constants.MERIDIAN_FERRO, name: 'Ferro'}
    ],
    prjList : [
        { id: constants.PROJ_MGI_GK28, name: 'MGI_GK_M28'},
        { id: constants.PROJ_MGI_GK31, name: 'MGI_GK_M31'},
        { id: constants.PROJ_MGI_GK34, name: 'MGI_GK_M34'},
    ],
    heightSystemList: [
        { id: constants.HEIGHT_ELLPS, name: 'Ellipsoidic'},
        { id: constants.HEIGHT_ORTHO, name: 'Orthometric'},
        { id: constants.HEIGHT_USAGE, name: 'Common used'},
    ],
    transformationMethodList: [
        { id: constants.TM_GIS_GRID, name: 'GIS Grid (sigma: 0.15m)'},
        { id: constants.TM_SEVEN_PARAM, name: '7-Parameter (sigma: 1.50m)'},
    ]
}

const getFrameList = (state) => {
    const newList = [];
    // TODO ask API for frames ...
    return updateObject( state, {
        frameList: newList
    });
}

const getEllipsoidList = (state) => {
    const newList = [];
    // TODO ask API for ellipsoids ...
    return updateObject( state, {
        ellpsList: newList
    })
}

const getProjectionList = (state) => {
    const newList = [];
    // TODO ask API for projections ...
    return updateObject( state, {
        prjList: newList
    })
}

const getMerdianList = (state) => {
    const newList = [];
    // TODO ask API for merdians ...
    return updateObject( state, {
        merdianList: newList
    })
}

const reducer = ( state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.API_GET_FRAME_LIST: return getFrameList( state );
        case actionTypes.API_GET_ELLIPSOID_LIST: return getEllipsoidList( state );
        case actionTypes.API_GET_PROJECTION_LIST: return getProjectionList( state );
        case actionTypes.API_GET_MERIDIAN_LIST: return getMerdianList( state );
        
        default:
            return state;
    } 
}

export default reducer;