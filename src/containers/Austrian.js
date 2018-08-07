import React, { Component } from 'react';
import GeocentricPointManager from '../components/points/GeocentricPointManager';
import GeographicPointManager from '../components/points/GeographicPointManager';
import ProjectedPointManager from '../components/points/ProjectedPointManager';
import * as constants from '../common/constants';
import * as actions from '../store/actions';
import CRS from '../components/CRS/CRS';
import { connect } from 'react-redux';
import CRSAdditions from '../components/CRS/CRSAdditions';

import '../hoc/UI/Table.css';

const mapStateToProps = (state) => {
  return {
    sourceCrs: state.austrian.sourceCrs,
    sourceFrame: state.austrian.sourceFrame,
    sourceEpoch: state.austrian.sourceEpoch,
    sourceEllps: state.austrian.sourceEllps,
    sourceMeridian: state.austrian.sourceMeridian,
    sourcePrj: state.austrian.sourcePrj,
    sourceHeightSystem: state.austrian.sourceHeightSystem,

    targetCrs: state.austrian.targetCrs,
    targetFrame: state.austrian.targetFrame,
    targetEpoch: state.austrian.targetEpoch,
    targetEllps: state.austrian.targetEllps,
    targetMeridian: state.austrian.targetMeridian,
    targetPrj: state.austrian.targetPrj,
    targetHeightSystem: state.austrian.targetHeightSystem,

    transformationMethod: state.austrian.transformationMethod,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      onChangeSourceCrs: (obj) => dispatch(actions.setAutSourceCoordinateSystem(obj)),
      onChangeSourceFrame: (obj) => dispatch(actions.setAutSourceFrame(obj)),
      onChangeSourceEllps: (obj) => dispatch(actions.setAutSourceEllps(obj)),
      onChangeSourceMeridian: (obj) => dispatch(actions.setAutSourceMeridian(obj)),
      onChangeSourceHeightSystem: (obj) => dispatch(actions.setAutSourceHeightSystem(obj)),
      onChangeSourceProjection: (obj) => dispatch(actions.setAutSourceProjection(obj)),

      onChangeTargetCrs: (obj) => dispatch(actions.setAutTargetCoordinateSystem(obj)),
      onChangeTargetFrame: (obj) => dispatch(actions.setAutTargetFrame(obj)),
      onChangeTargetEllps: (obj) => dispatch(actions.setAutTargetEllps(obj)),
      onChangeTargetMeridian: (obj) => dispatch(actions.setAutTargetMeridian(obj)),
      onChangeTargetHeightSystem: (obj) => dispatch(actions.setAutTargetHeightSystem(obj)),
      onChangeTargetProjection: (obj) => dispatch(actions.setAutTargetProjection(obj)),

      onChangeTransformationMethod: (obj) => dispatch(actions.setAutTransformationMethod(obj)),

      onInitHeight: () => dispatch(actions.apiUpdateHeightList()),
      onInitAut: () => dispatch(actions.apiUpdateAustrianLists()),
  }
}

const FormCrs = (props) => {

  const frameEtrs = {id: constants.FRAME_ETRS2000, name: 'ETRF2000'};
  const frameMgi = {id: constants.FRAME_MGI, name: 'MGI'}
  const frameChoices = [];
  frameChoices.push(frameEtrs);
  frameChoices.push(frameMgi);

  const meridianChoices = [];
  meridianChoices.push({id: constants.MERIDIAN_GREENWICH, name: 'Greenwhich'})

  const ellpsMgi = {id: constants.ELLPS_BESSEL, name: 'Bessel'};
  const ellpsEtrs = {id: constants.ELLPS_GRS80, name: 'GRS80'};

  // prepare CRS data
  const choicesEllps = [];
  const choicesPrj = [];
  
  const enableFrame = false;
  const enableEllps = false;
  const enableProjection = false;
  const enableHeightSystem = props.ellps !== constants.ELLPS_NONE;
  const enableTransformationMethod = props.enableTransformationMethod !== undefined ? props.enableTransformationMethod : true;

  const allowNoHeight = props.crs === constants.CRS_ETRS_ECEF;

  // Updating Ellipsoid and HeightSystem for ETRS2000
  if (props.frame === constants.FRAME_ETRS2000) {
    choicesEllps.push(ellpsEtrs);
    if (props.ellps && props.ellps !== constants.ELLPS_GRS80) {
      props.onHandleChange(constants.ELLPS_GRS80, props.side, 'ellps')
    }
    if (props.ellps && !props.heightSystem) {
      props.onHandleChange(constants.HEIGHT_ELLPS, props.side, 'heightSystem')
    }
  }

  // Updating Ellipsoid and HeightSystem for MGI
  if (props.frame === constants.FRAME_MGI) {
    choicesEllps.push(ellpsMgi);
    if (props.ellps && props.ellps !== constants.ELLPS_BESSEL) {
      props.onHandleChange(constants.ELLPS_BESSEL, props.side, 'ellps') 
    }
    if (props.ellps && !props.heightSystem) {
      props.onHandleChange(constants.HEIGHT_USAGE, props.side, 'heightSystem')
    }
  }

  // Updating Meridian
  if (props.ellps && !props.meridian) {
    props.onHandleChange(constants.MERIDIAN_GREENWICH, props.side, "meridian");
  }

  switch(props.ellps) {
    case constants.ELLPS_BESSEL:
      choicesPrj.push({id: constants.PROJ_MGI_GK28, name: "MGI_GK_M28"});
      choicesPrj.push({id: constants.PROJ_MGI_GK31, name: "MGI_GK_M31"});
      choicesPrj.push({id: constants.PROJ_MGI_GK34, name: "MGI_GK_M34"});
      choicesPrj.push({id: constants.PROJ_LAMBERT, name: "MGI_GK_LAMBERT"});
      break;
    case constants.ELLPS_GRS80:
      choicesPrj.push({id: constants.PROJ_UTM32N, name: 'ETRS_UTM_32N'});
      choicesPrj.push({id: constants.PROJ_UTM33N, name: 'ETRS_UTM_33N'});
      choicesPrj.push({id: constants.PROJ_LAMBERT, name: 'ETRS_LAMBERT'});
      break;
    default: break;
  }

  const choicesCrsEtrf = [];
  choicesCrsEtrf.push({value: constants.CRS_ETRS_ECEF, text: 'X, Y, Z (ECEF)'});
  choicesCrsEtrf.push({value: constants.CRS_ETRS_LPH, text: 'Longitude, Latitude, Elevation (Greenwich)'});
  choicesCrsEtrf.push({value: constants.CRS_ETRS_UTM_32N, text: 'RW, HW, Hö (UTM 32N)'});
  choicesCrsEtrf.push({value: constants.CRS_ETRS_UTM_33N, text: 'RW, HW, Hö (UTM 33N)'});
  choicesCrsEtrf.push({value: constants.CRS_ETRS_LACC, text: 'RW, HW, Hö (Lambert)'});

  const choicesCrsMgi = [];
  choicesCrsMgi.push({value: constants.CRS_MGI_GK_M28, text: 'RW, HW, Hö (GK M28)'});
  choicesCrsMgi.push({value: constants.CRS_MGI_GK_M31, text: 'RW, HW, Hö (GK M31)'});
  choicesCrsMgi.push({value: constants.CRS_MGI_GK_M34, text: 'RW, HW, Hö (GK M34)'});
  choicesCrsMgi.push({value: constants.CRS_MGI_LACC, text: 'RW, HW, Hö (Lambert)'})
  if (props.side === 'target') {
    choicesCrsMgi.push({value: constants.CRS_MGI_GK_AUTO, text: 'RW, HW, Hö (GK AUTO)'});
  }

  return (
    <div>
      <form>
        <table className="TableDefault">
          <tbody>
            <tr>
              <td className="ColumnPointName"><label htmlFor="crs">CRS:</label> </td>
              <td className="ColumnChoiceField">
                <select style={{width: "100%"}} name="crs" value={props.crs} onChange={event => props.onHandleChange(event.target.value, props.side, "crs")}>
                  <optgroup label="ETRF2000">
                    {choicesCrsEtrf.map(opt => {
                      return <option key={opt.value} value={opt.value}>{opt.text}</option>
                    })}
                  </optgroup>
                  <optgroup label="MGI">
                    {choicesCrsMgi.map(opt => {
                      return <option key={opt.value} value={opt.value}>{opt.text}</option>
                    })}
                  </optgroup>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <br />
      <CRS 
        frame={props.frame} 
        frameChoices={frameChoices}
        enableFrame={enableFrame}
        ellps={props.ellps}
        ellpsChoices={choicesEllps}
        enableEllps={enableEllps}
        meridian={props.meridian}
        meridianChoices={meridianChoices}
        enableMeridian={false}
        projection={props.projection}
        projectionChoices={choicesPrj}
        enableProjection={enableProjection}
        epoch={props.epoch}
        enableEpoch={false}
        handleChangeFrame={event => props.onHandleChange(event.target.value, props.side, "frame")}
        handleChangeEllps={event => props.onHandleChange(event.target.value, props.side, "ellps")}
        handleChangeProjection={event => props.onHandleChange(event.target.value, props.side, "projection")}
      />  
      <br />  
      <CRSAdditions
        allowNoHeight={allowNoHeight}
        heightSystem={props.heightSystem}
        enableHeightSystem={enableHeightSystem}
        handleChangeHeightSystem={event => props.onHandleChange(event.target.value, props.side, "heightSystem")}
        transformationMethod={props.transformationMethod}
        handleChangeTransformationMethod={event => props.onHandleChange(event.target.value, "transformation", "method")}
        hideTransformationMethod={!enableTransformationMethod}
      />      
    </div>
  )
}

class Austrian extends Component {

  constructor(props) {
    super(props);
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  componentDidMount() {
      this.props.onInitHeight();
      this.props.onInitAut();
  }
  
  onHandleChange(value, side, attr) {
    const handlers = {
        target: {
            frame: this.props.onChangeTargetFrame,
            ellps: this.props.onChangeTargetEllps,
            meridian: this.props.onChangeTargetMeridian,
            heightSystem: this.props.onChangeTargetHeightSystem,
            projection: this.props.onChangeTargetProjection,
            crs: this.props.onChangeTargetCrs,
        },
        source: {
            frame: this.props.onChangeSourceFrame,
            ellps: this.props.onChangeSourceEllps,
            meridian: this.props.onChangeSourceMeridian,
            heightSystem: this.props.onChangeSourceHeightSystem,
            projection: this.props.onChangeSourceProjection,
            crs: this.props.onChangeSourceCrs,
        },
        transformation: {
          method: this.props.onChangeTransformationMethod,
        }
    }
    const handler = handlers[side][attr];
    return handler(value)
  }

  render() {

    let pointManager = <GeocentricPointManager />;
    if (this.props.sourceEllps) {
      pointManager = <GeographicPointManager />;
    }
    if (this.props.sourcePrj) {
      pointManager = <ProjectedPointManager />;
    }

    // Finally do render that thing

    const formSourceCrs = <FormCrs 
      side="source"
      crs={this.props.sourceCrs}
      frame={this.props.sourceFrame}
      epoch={this.props.sourceEpoch}
      ellps={this.props.sourceEllps}
      meridian={this.props.sourceMeridian}
      projection={this.props.sourcePrj}
      heightSystem={this.props.sourceHeightSystem}
      onHandleChange={this.onHandleChange}
    />

    const formTargetCrs = <FormCrs
      side="target"
      crs={this.props.targetCrs}
      frame={this.props.targetFrame}
      epoch={this.props.targetEpoch}
      ellps={this.props.targetEllps}
      meridian={this.props.sourceMeridian}
      projection={this.props.targetPrj}
      heightSystem={this.props.targetHeightSystem}
      onHandleChange={this.onHandleChange}
      enableTransformationMethod={false}
    />

    return (
      <div>
        <h2>Source CRS</h2>
        {formSourceCrs}
        <h2>Target CRS</h2>
        {formTargetCrs}
        <h2>Zu Transformierende Punkte</h2>
        {pointManager}
        <br />
        <button>Transformiere</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Austrian);