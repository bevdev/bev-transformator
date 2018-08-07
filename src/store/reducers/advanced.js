import * as actionTypes from '../actions/actionTypes';
import * as constants from '../../common/constants';
import { updateObject } from '../../shared/utility';

const initialState = {
    sourceFrm : constants.FRAME_ETRS89,
    sourcePrj : constants.PROJ_NONE,
    sourceHeightSystem : constants.HEIGHT_ELLPS,
    sourceEllps : constants.ELLPS_GRS80,
    sourceMeridian: constants.MERIDIAN_GREENWICH,
    sourceEpoch: constants.EPOCH_BEV,
    targetFrm : constants.FRAME_MGI,
    targetPrj : constants.PROJ_MGI_GK34,
    targetHeightSystem : constants.HEIGHT_USAGE,
    targetEllps : constants.ELLPS_BESSEL,
    targetMeridian: constants.MERIDIAN_FERRO,
    targetEpoch: constants.EPOCH_BEV,
}

const setTargetFrame = (state, action) => {
    return updateObject( state, {
        targetFrm: action.targetFrame
    });
}

const setTargetEpoch = (state, action) => {
    return updateObject( state, {
        targetEpoch: action.targetEpoch
    })
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
        targetPrj: action.targetPrj
    });
}

const setSourceFrame = (state, action) => {
    return updateObject( state, {
        sourceFrm: action.sourceFrame
    });
}

const setSourceEpoch = (state, action) => {
    return updateObject( state, {
        sourceEpoch: action.sourceEpoch
    })
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
        sourcePrj: action.sourcePrj
    });
}

const reducer = ( state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.ADV_SET_TARGET_FRM: return setTargetFrame( state, action );
        case actionTypes.ADV_SET_TARGET_EPOCH: return setTargetEpoch( state, action );
        case actionTypes.ADV_SET_TARGET_ELL: return setTargetEllps( state, action );
        case actionTypes.ADV_SET_TARGET_MRD: return setTargetMeridian( state, action );
        case actionTypes.ADV_SET_TARGET_HS: return setTargetHeightSystem( state, action );
        case actionTypes.ADV_SET_TARGET_PRJ: return setTargetProjection( state, action );

        case actionTypes.ADV_SET_SOURCE_FRM: return setSourceFrame( state, action );
        case actionTypes.ADV_SET_SOURCE_EPOCH: return setSourceEpoch( state, action );
        case actionTypes.ADV_SET_SOURCE_ELL: return setSourceEllps( state, action );
        case actionTypes.ADV_SET_SOURCE_MRD: return setSourceMeridian( state, action );
        case actionTypes.ADV_SET_SOURCE_HS: return setSourceHeightSystem( state, action );
        case actionTypes.ADV_SET_SOURCE_PRJ: return setSourceProjection( state, action );

        default:
            return state;
    } 
}

export default reducer;