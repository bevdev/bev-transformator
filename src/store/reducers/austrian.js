import * as actionTypes from '../actions/actionTypes';
import * as constants from '../../common/constants';
import { updateObject } from '../../shared/utility';

const initialState = {
    
    sourceCrs : constants.CRS_ETRS_UTM_32N,
    sourceFrame : constants.FRAME_ETRS2000,
    sourceEpoch: constants.EPOCH_BEV,
    sourceEllps: constants.ELLPS_GRS80,
    sourceMeridian: constants.MERIDIAN_GREENWICH,
    sourcePrj : constants.PROJ_UTM32N,
    sourceHeightSystem : constants.HEIGHT_ELLPS,

    targetCrs : constants.CRS_MGI_GK_M28,
    targetFrame : constants.FRAME_MGI,
    targetEpoch: constants.EPOCH_BEV,
    targetEllps: constants.ELLPS_BESSEL,
    targetHeightSystem : constants.HEIGHT_USAGE,
    targetPrj : constants.PROJ_MGI_AUTO,
    targetMeridian: constants.MERIDIAN_GREENWICH,

    transformationMethod: constants.TM_GIS_GRID,
}

const setAutTargetCrs = (state, action) => {
    return updateObject( state, {
        targetCrs: action.targetCrs
    });
}

const setAutTargetFrame = (state, action) => {
    return updateObject( state, {
        targetFrame: action.targetFrame
    });
}

const setAutTargetEllps = (state, action) => {
    return updateObject( state, {
        targetEllps: action.targetEllps
    })
}

const setAutTargetMeridian = (state, action) => {
    return updateObject( state, {
        targetMeridian: action.targetMeridian
    })
}

const setAutTargetHeightSystem = (state, action) => {
    return updateObject( state, {
        targetHeightSystem: action.targetHeightSystem
    });
}

const setAutTargetProjection = (state, action) => {
    return updateObject( state, {
        targetPrj: action.targetPrj
    });
}

const setAutTransformationMethod = (state, action) => {
    return updateObject( state, {
        transformationMethod: action.transformationMethod
    })
}

const setAutSourceCrs = (state, action) => {
    return updateObject( state, {
        sourceCrs: action.sourceCrs
    });
}

const setAutSourceFrame = (state, action) => {
    return updateObject( state, {
        sourceFrame: action.sourceFrame
    });
}

const setAutSourceEllps = (state, action) => {
    return updateObject( state, {
        sourceEllps: action.sourceEllps
    })
}

const setAutSourceMeridian = (state, action) => {
    return updateObject( state, {
        sourceMeridian: action.sourceMeridian
    })
}

const setAutSourceHeightSystem = (state, action) => {
    return updateObject( state, {
        sourceHeightSystem: action.sourceHeightSystem
    });
}

const setAutSourceProjection = (state, action) => {
    return updateObject( state, {
        sourcePrj: action.sourcePrj
    });
}

const reducer = ( state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.AUT_SET_TARGET_CRS: return setAutTargetCrs( state, action );
        case actionTypes.AUT_SET_TARGET_FRAME: return setAutTargetFrame( state, action );
        case actionTypes.AUT_SET_TARGET_ELLPS: return setAutTargetEllps( state, action );
        case actionTypes.AUT_SET_TARGET_MRDN: return setAutTargetMeridian( state, action );
        case actionTypes.AUT_SET_TARGET_HS: return setAutTargetHeightSystem( state, action );
        case actionTypes.AUT_SET_TARGET_PRJ: return setAutTargetProjection( state, action );

        case actionTypes.AUT_SET_SOURCE_CRS: return setAutSourceCrs( state, action );
        case actionTypes.AUT_SET_SOURCE_FRAME: return setAutSourceFrame( state, action );
        case actionTypes.AUT_SET_SOURCE_ELLPS: return setAutSourceEllps( state, action );
        case actionTypes.AUT_SET_SOURCE_MRDN: return setAutSourceMeridian( state, action );
        case actionTypes.AUT_SET_SOURCE_HS: return setAutSourceHeightSystem( state, action );
        case actionTypes.AUT_SET_SOURCE_PRJ: return setAutSourceProjection( state, action );

        case actionTypes.AUT_SET_TM: return setAutTransformationMethod( state, action );

        default:
            return state;
    } 
}

export default reducer;