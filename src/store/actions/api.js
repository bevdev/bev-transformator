import * as actionTypes from './actionTypes';

/*
 * action creators
 */

export const getFrameList = (frameList) => {
    return {
        type: actionTypes.API_GET_FRAME_LIST,
        frameList: frameList
    }
}

export const getEllipsoids = (ellpsList) => {
    return {
        type: actionTypes.API_GET_ELLIPSOID_LIST,
        ellpsList: ellpsList
    }
}

export const getMeridianList = (merdianList) => {
    return {
        type: actionTypes.API_GET_MERIDIAN_LIST,
        merdianList: merdianList
    }
}

export const getProjectionList = (prjList) => {
    return {
        type: actionTypes.API_GET_PROJECTION_LIST,
        prjList: prjList
    }
}