import * as actionTypes from './actionTypes';
import * as constants from '../../common/constants';

/*
 * action creators
 */

function changeCrs(crs, side) {
  return dispatch => {
  const crsSettings = () => {
    switch(crs) {
    case constants.CRS_MGI_GK_M28: return {
      frame: constants.FRAME_MGI, 
      ellps: constants.ELLPS_BESSEL,
      meridian: constants.MERIDIAN_GREENWICH,
      projection: constants.PROJ_MGI_GK28,
      heightSystem: constants.HEIGHT_USAGE,
    };
    case constants.CRS_MGI_GK_M31: return {
      frame: constants.FRAME_MGI, 
      ellps: constants.ELLPS_BESSEL,
      meridian: constants.MERIDIAN_GREENWICH,
      projection: constants.PROJ_MGI_GK31,
      heightSystem: constants.HEIGHT_USAGE,
    };
    case constants.CRS_MGI_GK_M34: return {
      frame: constants.FRAME_MGI, 
      ellps: constants.ELLPS_BESSEL,
      meridian: constants.MERIDIAN_GREENWICH,
      projection: constants.PROJ_MGI_GK34,
      heightSystem: constants.HEIGHT_USAGE,
    };
    case constants.CRS_MGI_GK_AUTO: return {
      frame: constants.FRAME_MGI,
      ellps: constants.ELLPS_BESSEL,
      meridian: constants.MERIDIAN_GREENWICH,
      projection: constants.PROJ_MGI_AUTO,
      heightSystem: constants.HEIGHT_USAGE,
    }
    case constants.CRS_MGI_LACC: return {
      frame: constants.FRAME_MGI,
      ellps: constants.ELLPS_BESSEL,
      meridian: constants.MERIDIAN_GREENWICH,
      projection: constants.PROJ_LAMBERT,
      heightSystem: constants.HEIGHT_USAGE,
    }
    case constants.CRS_ETRS_ECEF: return {
      frame: constants.FRAME_ETRS2000,
      ellps: constants.ELLPS_NONE,
      meridian: constants.MERIDIAN_NONE,
      projection: constants.PROJ_NONE,
      heightSystem: constants.HEIGHT_NONE,
    };
    case constants.CRS_ETRS_LPH: return {
      frame: constants.FRAME_ETRS2000,
      ellps: constants.ELLPS_GRS80,
      meridian: constants.MERIDIAN_GREENWICH,
      projection: constants.PROJ_NONE,
      heightSystem: constants.HEIGHT_ELLPS,
    }
    case constants.CRS_ETRS_UTM_32N: return {
      frame: constants.FRAME_ETRS2000,
      ellps: constants.ELLPS_GRS80,
      meridian: constants.MERIDIAN_GREENWICH,
      projection: constants.PROJ_UTM32N,
      heightSystem: constants.HEIGHT_USAGE,
    };
    case constants.CRS_ETRS_UTM_33N: return {
      frame: constants.FRAME_ETRS2000,
      ellps: constants.ELLPS_GRS80,
      meridian: constants.MERIDIAN_GREENWICH,
      projection: constants.PROJ_UTM33N,
      heightSystem: constants.HEIGHT_USAGE,
    };
    case constants.CRS_ETRS_LACC: return {
      frame: constants.FRAME_ETRS2000,
      ellps: constants.ELLPS_GRS80,
      meridian: constants.MERIDIAN_GREENWICH,
      projection: constants.PROJ_LAMBERT,
      heightSystem: constants.HEIGHT_USAGE,
    };
    default: return null;
    }
  }
  
  const handlers = {
    target: {
      frame: setAutTargetFrame,
      ellps: setAutTargetEllps,
      meridian: setAutTargetMeridian,
      heightSystem: setAutTargetHeightSystem,
      projection: setAutTargetProjection,
    },
    source: {
      frame: setAutSourceFrame,
      ellps: setAutSourceEllps,
      meridian: setAutSourceMeridian,
      heightSystem: setAutSourceHeightSystem,
      projection: setAutSourceProjection,
    }
  }

  const crsFinal = crsSettings();
  if (crsFinal) {
    for (let prop in crsFinal) {
      const handler = handlers[side][prop];
      dispatch(handler(crsFinal[prop]))
    }
  }
  }
}

export const setAutTargetCoordinateSystem = (crs) => {
  return dispatch => {
    dispatch(setAutTargetCrs(crs));
    dispatch(changeCrs(crs, "target"));
  }
}

export const setAutTargetCrs = (crs) => {
  return {
    type: actionTypes.AUT_SET_TARGET_CRS,
    targetCrs: crs
  }
}

export const setAutTargetFrame = (frm) => {
  return {
    type: actionTypes.AUT_SET_TARGET_FRAME,
    targetFrame: frm
  }
}

export const setAutTargetEllps = (ellps) => {
  return {
    type: actionTypes.AUT_SET_TARGET_ELLPS,
    targetEllps: ellps
  }
}

export const setAutTargetMeridian = (meridian) => {
  return {
    type: actionTypes.AUT_SET_TARGET_MRDN,
    targetMeridian: meridian
  }
}

export const setAutTargetCoordinateRepresentation = (tcr) => {
  return {
    type: actionTypes.AUT_SET_TARGET_CR,
    targetCoordinateRepresentation: tcr
  }
}

export const setAutTargetProjection = (tprj) => {
  return {
    type: actionTypes.AUT_SET_TARGET_PRJ,
    targetPrj: tprj
  }
}

export const setAutTargetHeightSystem = (ths) => {
  return {
    type: actionTypes.AUT_SET_TARGET_HS,
    targetHeightSystem: ths
  }
}

export const setAutTransformationMethod = (tm) => {
  return {
    type: actionTypes.AUT_SET_TM,
    transformationMethod: tm
  }
}

export const setAutSourceCoordinateSystem = (crs) => {
  return dispatch => {
    dispatch(setAutSourceCrs(crs));
    dispatch(changeCrs(crs, "source"));
  }
}

export const setAutSourceCrs = (crs) => {
  return {
    type: actionTypes.AUT_SET_SOURCE_CRS,
    sourceCrs: crs
  }
}

export const setAutSourceCoordinateRepresentation = (cr) => {
  return {
    type: actionTypes.AUT_SET_SOURCE_CR,
    sourceCoordinateRepresentation: cr
  }
}

export const setAutSourceFrame = (frm) => {
  return {
    type: actionTypes.AUT_SET_SOURCE_FRAME,
    sourceFrame: frm
  }
}

export const setAutSourceEllps = (ellps) => {
  return {
    type: actionTypes.AUT_SET_SOURCE_ELLPS,
    sourceEllps: ellps
  }
}

export const setAutSourceMeridian = (meridian) => {
  return {
    type: actionTypes.AUT_SET_SOURCE_MRDN,
    sourceMeridian: meridian
  }
}

export const setAutSourceProjection = (prj) => {
  return {
    type: actionTypes.AUT_SET_SOURCE_PRJ,
    sourcePrj: prj
  }
}

export const setAutSourceHeightSystem = (hs) => {
  return {
    type: actionTypes.AUT_SET_SOURCE_HS,
    sourceHeightSystem: hs
  }
}