import * as actionTypes from './actionTypes';

/*
 * action creators
 */

export const setTargetCoordinateSystem = (tcrs) => {
    return {
        type: actionTypes.AUT_SET_TARGET_CRS,
        targetCoordinateSystem: tcrs
    }
}

export const setTargetCoordinateRepresentation = (tcr) => {
    return {
        type: actionTypes.AUT_SET_TARGET_CR,
        targetCoordinateRepresentation: tcr
    }
}

export const setTargetProjection = (tprj) => {
    return {
        type: actionTypes.AUT_SET_TARGET_PRJ,
        targetProjection: tprj
    }
}

export const setTargetHeightSystem = (ths) => {
    return {
        type: actionTypes.AUT_SET_TARGET_HS,
        targetHeightSystem: ths
    }
}

export const setSourceCoordinateSystem = (scrs) => {
    return {
        type: actionTypes.AUT_SET_SOURCE_CRS,
        sourceCoordinateSystem: scrs
    }
}

export const setSourceCoordinateRepresentation = (scr) => {
    return {
        type: actionTypes.AUT_SET_SOURCE_CR,
        sourceCoordinateRepresentation: scr
    }
}

export const setSourceProjection = (sprj) => {
    return {
        type: actionTypes.AUT_SET_SOURCE_PRJ,
        sourceProjection: sprj
    }
}

export const setSourceHeightSystem = (shs) => {
    return {
        type: actionTypes.AUT_SET_SOURCE_HS,
        sourceHeightSystem: shs
    }
}