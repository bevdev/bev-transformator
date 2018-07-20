import * as actionTypes from '../actions/actionTypes';
import * as constants from '../../common/constants';
import { updateObject } from '../../shared/utility';

const initialState = {
    sourceCrs : constants.CRS_ETRS,
    sourcePrj : constants.PROJ_NONE,
    sourceHeightSystem : constants.HEIGHT_ELLPS,
    targetCrs : constants.CRS_MGI,
    targetPrj : constants.PROJ_MGI_AUTO,
    targetHeightSystem : constants.HEIGHT_USAGE,
}

const setTargetCoordinateSystem = (state, action) => {
    return updateObject( state, {
        targetCrs: action.targetCoordinateSystem
    });
}

const setTargetHeightSystem = (state, action) => {
    return updateObject( state, {
        targetHeightSystem: action.targetHeightSystem
    });
}

const setTargetProjection = (state, action) => {
    return updateObject( state, {
        targetProjection: action.targetProjection
    });
}

const setSourceCoordinateSystem = (state, action) => {
    return updateObject( state, {
        sourceCrs: action.sourceCoordinateSystem
    });
}

const setSourceHeightSystem = (state, action) => {
    return updateObject( state, {
        sourceHeightSystem: action.sourceHeightSystem
    });
}

const setSourceProjection = (state, action) => {
    return updateObject( state, {
        sourceProjection: action.sourceProjection
    });
}

const reducer = ( state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.AUT_SET_TARGET_CRS: return setTargetCoordinateSystem( state, action );
        case actionTypes.AUT_SET_TARGET_HS: return setTargetHeightSystem( state, action );
        case actionTypes.AUT_SET_TARGET_PRJ: return setTargetProjection( state, action );
        case actionTypes.AUT_SET_SOURCE_CRS: return setSourceCoordinateSystem( state, action );
        case actionTypes.AUT_SET_SOURCE_HS: return setSourceHeightSystem( state, action );
        case actionTypes.AUT_SET_SOURCE_PRJ: return setSourceProjection( state, action );
        default:
            return state;
    } 
}

export default reducer;