import * as actionTypes from './actionTypes';

/*
 * action creators
 */

export const setAutTargetCoordinateSystem = (tcrs) => {
    return {
        type: actionTypes.AUT_SET_TARGET_CRS,
        targetCoordinateSystem: tcrs
    }
}

export const setAutTargetFrame = (frm) => {
    return {
        type: actionTypes.AUT_SET_TARGET_FRAME,
        targetFrame: frm
    }
}

export const setAutTargetEllps = (ellps) => {
    return {
        type: actionTypes.AUT_SET_TARGET_ELLPS,
        targetEllps: ellps
    }
}

export const setAutTargetMeridian = (meridian) => {
    return {
        type: actionTypes.AUT_SET_TARGET_MRDN,
        targetMeridian: meridian
    }
}

export const setAutAutTargetCoordinateRepresentation = (tcr) => {
    return {
        type: actionTypes.AUT_SET_TARGET_CR,
        targetCoordinateRepresentation: tcr
    }
}

export const setAutAutTargetProjection = (tprj) => {
    return {
        type: actionTypes.AUT_SET_TARGET_PRJ,
        targetProjection: tprj
    }
}

export const setAutTargetHeightSystem = (ths) => {
    return {
        type: actionTypes.AUT_SET_TARGET_HS,
        targetHeightSystem: ths
    }
}

export const setAutSourceCoordinateSystem = (scrs) => {
    return {
        type: actionTypes.AUT_SET_SOURCE_CRS,
        sourceCoordinateSystem: scrs
    }
}

export const setAutSourceCoordinateRepresentation = (scr) => {
    return {
        type: actionTypes.AUT_SET_SOURCE_CR,
        sourceCoordinateRepresentation: scr
    }
}

export const setAutSourceFrame = (frm) => {
    return {
        type: actionTypes.AUT_SET_SOURCE_FRAME,
        sourceFrame: frm
    }
}

export const setAutSourceEllps = (ellps) => {
    return {
        type: actionTypes.AUT_SET_SOURCE_ELLPS,
        sourceEllps: ellps
    }
}

export const setAutSourceMeridian = (meridian) => {
    return {
        type: actionTypes.AUT_SET_SOURCE_MRDN,
        sourceMeridian: meridian
    }
}

export const setAutSourceProjection = (sprj) => {
    return {
        type: actionTypes.AUT_SET_SOURCE_PRJ,
        sourceProjection: sprj
    }
}

export const setAutSourceHeightSystem = (shs) => {
    return {
        type: actionTypes.AUT_SET_SOURCE_HS,
        sourceHeightSystem: shs
    }
}