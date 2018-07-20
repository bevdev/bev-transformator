import * as actionTypes from '../actions/actionTypes';
import { updateObject, removeObjectByIdx } from '../../shared/utility';

const initialState = {
    geocentricPointList: [
        {
            name: 'P1', x: 5644648.545, y: 915891.591, z: 8959819.581
        }
    ],
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
    console.log("points/reducers.js::remGeocentricPoint");
    console.log(action);
    const pointList = removeObjectByIdx(state.geocentricPointList, action.pointIdx);
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

const remGeographicPoint = (state, action) => {
    const pointList = removeObjectByIdx(state.geographicPointList, action.pointIdx);
    return updateObject( state, {
        geographicPointList: pointList
    })
}

const addProjectedPoint = (state, action) => {
    const pointList = state.projectedPointList;
    pointList.push( action.point);
    return updateObject( state, {
        projectedPointList: pointList
    });
}

const remProjectedPoint = (state, action) => {
    const pointList = removeObjectByIdx(state.projectedPointList, action.pointIdx);
    return updateObject( state, {
        projectedPointList: pointList
    })
}

const reducer = ( state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.ADD_GEOCENTRIC_POINT: return addGeocentricPoint( state, action );
        case actionTypes.REM_GEOCENTRIC_POINT: return remGeocentricPoint( state, action );
        case actionTypes.ADD_GEOGRAPHIC_POINT: return addGeographicPoint( state, action );
        case actionTypes.REM_GEOGRAPHIC_POINT: return remGeographicPoint( state, action );
        case actionTypes.ADD_PROJECTED_POINT: return addProjectedPoint( state, action );
        case actionTypes.REM_PROJECTED_POINT: return remProjectedPoint( state, action );
        default:
            return state;
    } 
}

export default reducer;