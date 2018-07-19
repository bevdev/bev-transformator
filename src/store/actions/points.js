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

export const remGeocentricPoint = (pointId) => {
    return {
        type: actionTypes.REM_GEOCENTRIC_POINT,
        pointId: pointId
    }
}

export const addGeographicPoint = (point) => {
    return {
        type: actionTypes.ADD_GEOGRAPHIC_POINT,
        point: point
    }
}

export const addProjectedPoint = (point) => {
    return {
        type: actionTypes.ADD_PROJECTED_POINT,
        point: point
    }
}