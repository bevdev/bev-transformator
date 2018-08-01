import * as actionTypes from '../actions/actionTypes';
import * as constants from '../../common/constants';
import { updateObject } from '../../shared/utility';

const initialState = {
    sourceFrm : constants.FRM_ETRS,
    sourcePrj : constants.PROJ_NONE,
    sourceHeightSystem : constants.HEIGHT_ELLPS,
    sourceEllps : constants.ELLPS_GRS80,
    sourceMeridian: constants.MERIDIAN_GREENWHICH,
    targetFrm : constants.FRM_MGI,
    targetPrj : constants.PROJ_MGI_AUTO,
    targetHeightSystem : constants.HEIGHT_USAGE,
    targetEllps : constants.ELLPS_BESSEL,
    targetMeridian: constants.MERIDIAN_FERRO
}

const setTargetFrame = (state, action) => {
    return updateObject( state, {
        targetFrm: action.targetFrame
    });
}

const setTargetEllps = (state, action) => {
    return updateObject( state, {
        targetEllps: action.targetEllps
    })
}

const setTargetMeridian = (state, action) => {
    return updateObject( state, {
        targetMeridian: action.targetMeridian
    })
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

const setSourceFrame = (state, action) => {
    return updateObject( state, {
        sourceFrm: action.sourceFrame
    });
}

const setSourceEllps = (state, action) => {
    return updateObject( state, {
        sourceEllps: action.sourceEllps
    })
}

const setSourceMeridian = (state, action) => {
    return updateObject( state, {
        sourceMeridian: action.sourceMeridian
    })
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
        case actionTypes.ADV_SET_TARGET_FRM: return setTargetFrame( state, action );
        case actionTypes.ADV_SET_TARGET_ELL: return setTargetEllps( state, action );
        case actionTypes.ADV_SET_TARGET_MRD: return setTargetMeridian( state, action );
        case actionTypes.ADV_SET_TARGET_HS: return setTargetHeightSystem( state, action );
        case actionTypes.ADV_SET_TARGET_PRJ: return setTargetProjection( state, action );

        case actionTypes.ADV_SET_SOURCE_FRM: return setSourceFrame( state, action );
        case actionTypes.ADV_SET_SOURCE_ELL: return setSourceEllps( state, action );
        case actionTypes.ADV_SET_SOURCE_MRD: return setSourceMeridian( state, action );
        case actionTypes.ADV_SET_SOURCE_HS: return setSourceHeightSystem( state, action );
        case actionTypes.ADV_SET_SOURCE_PRJ: return setSourceProjection( state, action );

        default:
            return state;
    } 
}

export default reducer;