import * as actionTypes from '../actions/actionTypes';
import * as constants from '../../common/constants';
import { updateObject } from '../../shared/utility';

const initialState = {
    geocentricPointList: [],
    geographicPointList: [],
    projectedPointList: []
}

const addGeocentricPoint = (state, action) => {
    const pointList = state.geocentricPointList;
    pointList.push( action.point);
    return updateObject( state, {
        geocentricPointList: pointList
    });
}

const remGeocentricPoint = (state, action) => {
    const pointList = state.geocentricPointList;
    // TODO remove point action.pointId
    return updateObject( state, {
        geocentricPointList: pointList
    })
}

const addGeographicPoint = (state, action) => {
    const pointList = state.geographicPointList;
    pointList.push( action.point);
    return updateObject( state, {
        geographicPointList: pointList
    });
}

const addProjectedPoint = (state, action) => {
    const pointList = state.projectedPointList;
    pointList.push( action.point);
    return updateObject( state, {
        projectedPointList: pointList
    });
}

const reducer = ( state = initialState, action) => {
    switch ( actoin.type ) {
        case actionTypes.ADD_GEOCENTRIC_POINT: return addGeocentricPoint( state, action );
        case actionTypes.REM_GEOCENTRIC_POINT: return remGeocentricPoint( state, aciton );
        case actionTypes.ADD_GEOGRAPHIC_POINT: return addGeographicPoint( state, action );
        case actionTypes.ADD_PROJECTED_POINT: return addProjectedPoint( state, action );
        default:
            return state;
    } 
}

export default reducer;