import * as actionTypes from '../actions/actionTypes';
import * as constants from '../../common/constants';
import { updateObject } from '../../shared/utility';

const initialState = {
    sourceCrs : constants.CRS_ETRS,
    sourceFrame : constants.FRAME_ETRS2000,
    sourceEllps: constants.ELLPS_GRS80,
    sourcePrj : constants.PROJ_NONE,
    sourceHeightSystem : constants.HEIGHT_ELLPS,
    sourceEpoch: 2002.56,
    sourceMeridian: constants.MERIDIAN_GREENWICH,
    targetCrs : constants.CRS_MGI,
    targetFrame : constants.FRAME_MGI,
    targetEllps: constants.ELLPS_BESSEL,
    targetPrj : constants.PROJ_MGI_AUTO,
    targetHeightSystem : constants.HEIGHT_USAGE,
    targetEpoch: 2002.56,
    targetMeridian: constants.MERIDIAN_GREENWICH,
    transformationMethod: constants.TM_GIS_GRID,
}

const setAutTargetCoordinateSystem = (state, action) => {
    return updateObject( state, {
        targetCrs: action.targetCoordinateSystem
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
        targetProjection: action.targetProjection
    });
}

const setAutTransformationMethod = (state, action) => {
    console.log(state)
    console.log(action)
    return updateObject( state, {
        transformationMethod: action.transformationMethod
    })
}

const setAutSourceCoordinateSystem = (state, action) => {
    return updateObject( state, {
        sourceCrs: action.sourceCoordinateSystem
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
        sourceProjection: action.sourceProjection
    });
}

const reducer = ( state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.AUT_SET_TARGET_CRS: return setAutTargetCoordinateSystem( state, action );
        case actionTypes.AUT_SET_TARGET_FRAME: return setAutTargetFrame( state, action );
        case actionTypes.AUT_SET_TARGET_ELLPS: return setAutTargetEllps( state, action );
        case actionTypes.AUT_SET_TARGET_MRDN: return setAutTargetMeridian( state, action );
        case actionTypes.AUT_SET_TARGET_HS: return setAutTargetHeightSystem( state, action );
        case actionTypes.AUT_SET_TARGET_PRJ: return setAutTargetProjection( state, action );

        case actionTypes.AUT_SET_SOURCE_CRS: return setAutSourceCoordinateSystem( state, action );
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