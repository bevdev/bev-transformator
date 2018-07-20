import * as actionTypes from './actionTypes';

/*
 * action creators
 */

export const addGeocentricPoint = (point) => {
    return {
        type: actionTypes.ADD_GEOCENTRIC_POINT,
        point: point
    }
}

export const remGeocentricPoint = (pointIdx) => {
    return {
        type: actionTypes.REM_GEOCENTRIC_POINT,
        pointIdx: pointIdx
    }
}

export const addGeographicPoint = (point) => {
    return {
        type: actionTypes.ADD_GEOGRAPHIC_POINT,
        point: point
    }
}

export const remGeographicPoint = (pointIdx) => {
    return {
        type: actionTypes.REM_GEOGRAPHIC_POINT,
        pointIdx: pointIdx
    }
}

export const addProjectedPoint = (point) => {
    return {
        type: actionTypes.ADD_PROJECTED_POINT,
        point: point
    }
}

export const remProjectedPoint = (pointIdx) => {
    return {
        type: actionTypes.REM_PROJECTED_POINT,
        pointIdx: pointIdx
    }
}