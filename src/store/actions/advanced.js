import * as actionTypes from './actionTypes';

/*
 * action creators
 */

export const setTargetFrame = (tfrm) => {
    return {
        type: actionTypes.ADV_SET_TARGET_FRM,
        targetFrame: tfrm
    }
}

export const setTargetEllipsoid = (tellps) => {
    return {
        type: actionTypes.ADV_SET_TARGET_ELL,
        targetEllipsoid: tellps
    }
}

export const setTargetMeridian = (tmrd) => {
    return {
        type: actionTypes.ADV_SET_TARGET_MRD,
        targetMeridian: tmrd
    }
}

export const setTargetCoordinateRepresentation = (tcr) => {
    return {
        type: actionTypes.ADV_SET_TARGET_CR,
        targetCoordinateRepresentation: tcr
    }
}

export const setTargetProjection = (tprj) => {
    return {
        type: actionTypes.ADV_SET_TARGET_PRJ,
        targetProjection: tprj
    }
}

export const setTargetHeightSystem = (ths) => {
    return {
        type: actionTypes.ADV_SET_TARGET_HS,
        targetHeightSystem: ths
    }
}

export const setSourceFrame = (sfrm) => {
    return {
        type: actionTypes.ADV_SET_SOURCE_FRM,
        sourceFrame: sfrm
    }
}

export const setSourceEllipsoid = (sellps) => {
    return {
        type: actionTypes.ADV_SET_SOURCE_ELL,
        sourceEllipsoid: sellps
    }
}

export const setSourceMeridian = (smrd) => {
    return {
        type: actionTypes.ADV_SET_SOURCE_MRD,
        sourceMeridian: smrd
    }
}

export const setSourceCoordinateRepresentation = (scr) => {
    return {
        type: actionTypes.ADV_SET_SOURCE_CR,
        sourceCoordinateRepresentation: scr
    }
}

export const setSourceProjection = (sprj) => {
    return {
        type: actionTypes.ADV_SET_SOURCE_PRJ,
        sourceProjection: sprj
    }
}

export const setSourceHeightSystem = (shs) => {
    return {
        type: actionTypes.ADV_SET_SOURCE_HS,
        sourceHeightSystem: shs
    }
}