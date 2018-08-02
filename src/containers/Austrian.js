import React, { Component } from 'react';
import GeocentricPointManager from '../components/points/GeocentricPointManager';
import GeographicPointManager from '../components/points/GeographicPointManager';
import * as constants from '../common/constants';
import * as actions from '../store/actions';
import CRS from '../components/CRS/CRS';
import { connect } from 'react-redux';
import CRSAdditions from '../components/CRS/CRSAdditions';

const mapStateToProps = (state) => {
  return {
    sourceFrame: state.austrian.sourceFrame,
    sourceEpoch: state.austrian.sourceEpoch,
    sourceEllps: state.austrian.sourceEllps,
    sourceMeridian: state.austrian.sourceMeridian,
    sourceHeightSystem: state.austrian.sourceHeightSystem,
    targetFrame: state.austrian.targetFrame,
    targetEpoch: state.austrian.targetEpoch,
    targetEllps: state.austrian.targetEllps,
    targetHeightSystem: state.austrian.targetHeightSystem,
    targetMeridian: state.austrian.targetMeridian,
    transformationMethod: state.austrian.transformationMethod,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      onChangeSourceFrame: (obj) => dispatch(actions.setAutSourceFrame(obj)),
      // onChangeSourceEpoch: (obj) => dispatch(actions.setAutSourceEpoch(obj)),
      onChangeSourceEllps: (obj) => dispatch(actions.setAutSourceEllps(obj)),
      onChangeSourceMeridian: (obj) => dispatch(actions.setAutSourceMeridian(obj)),
      onChangeSourceHeightSystem: (obj) => dispatch(actions.setAutSourceHeightSystem(obj)),
      onChangeSourceProjection: (obj) => dispatch(actions.setAutSourceProjection(obj)),

      onChangeTargetFrame: (obj) => dispatch(actions.setAutTargetFrame(obj)),
      // onChangeTargetEpoch: (obj) => dispatch(actions.setAutTargetEpoch(obj)),
      onChangeTargetEllps: (obj) => dispatch(actions.setAutTargetEllps(obj)),
      onChangeTargetMeridian: (obj) => dispatch(actions.setAutTargetMeridian(obj)),
      onChangeTargetHeightSystem: (obj) => dispatch(actions.setAutTargetHeightSystem(obj)),
      onChangeTargetProjection: (obj) => dispatch(actions.setAutTargetProjection(obj)),

      onChangeTransformationMethod: (obj) => dispatch(actions.setAutTransformationMethod(obj)),

      onInitHeight: () => dispatch(actions.apiUpdateHeightList()),
      onInitAut: () => dispatch(actions.apiUpdateAustrianLists()),
  }
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
  
  onHandleChange(event, side, attr) {
    const handlers = {
        target: {
            frame: this.props.onChangeTargetFrame,
            ellps: this.props.onChangeTargetEllps,
            meridian: this.props.onChangeTargetMeridian,
            heightSystem: this.props.onChangeTargetHeightSystem,
            projection: this.props.onChangeTargetProjection,
            // epoch: this.props.onChangeTargetEpoch,
        },
        source: {
            frame: this.props.onChangeSourceFrame,
            ellps: this.props.onChangeSourceEllps,
            meridian: this.props.onChangeSourceMeridian,
            heightSystem: this.props.onChangeSourceHeightSystem,
            projection: this.props.onChangeSourceProjection,
            // epoch: this.props.onChangeSourceEpoch,
        },
        transformation: {
          method: this.props.onChangeTransformationMethod,
        }
    }
    const handler = handlers[side][attr];
    if (!event.target.value) {
        if (side === "target") {
            if (this.props.targetProjection) {
                const pHandler = handlers[side]['projection']
                pHandler('');
            }
            if (this.props.targetMeridian) {
                const mHandler = handlers[side]['meridian'];
                mHandler('');
            }
            if (attr === "ellps" && !event.target.value) {
              const hHandler = handlers[side]['heightSystem'];
              hHandler('');
            }
        }
        if (side === "source") {
            if (this.props.sourceProjection) {
                const pHandler = handlers[side]['projection']
                pHandler('');
            }
            if (this.props.sourceMeridian) {
                const mHandler = handlers[side]['meridian'];
                mHandler('');
            }
            if (attr === "ellps" && !event.target.value) {
              const hHandler = handlers[side]['heightSystem'];
              hHandler('');
            }
        }
    }

    return handler(event.target.value)
  }

  render() {

    let pointManager = <GeocentricPointManager />;
    if (this.props.sourceEllps) {
      pointManager = <GeographicPointManager />;
    }
    const frameEtrs = {id: constants.FRAME_ETRS2000, name: 'ETRS'};
    const frameMgi = {id: constants.FRAME_MGI, name: 'MGI'}
    const frameChoices = [];
    frameChoices.push(frameEtrs);
    frameChoices.push(frameMgi);

    const meridianChoices = [];
    meridianChoices.push({id: constants.MERIDIAN_GREENWICH, name: 'Greenwhich'})

    const ellpsMgi = {id: constants.ELLPS_BESSEL, name: 'Bessel'};
    const ellpsEtrs = {id: constants.ELLPS_GRS80, name: 'GRS80'};

    // Prepare Source CRS data
    const sourceEllpsChoices = [];
    const eventSourceEllps = { target: { value: null } };
    const enableSourceHeightSystem = this.props.sourceEllps !== '';
    const enableSourceProjection = this.props.sourceEllps !== '';

    if (this.props.sourceFrame === constants.FRAME_ETRS2000) {
      sourceEllpsChoices.push(ellpsEtrs);
      if (this.props.sourceEllps && this.props.sourceEllps !== constants.ELLPS_GRS80) {
        eventSourceEllps.target.value = constants.ELLPS_GRS80;
        this.onHandleChange(eventSourceEllps, 'source', 'ellps')
      }
      if (this.props.sourceEllps && !this.props.sourceHeightSystem) {
        this.onHandleChange({target: {value: constants.HEIGHT_ELLPS}}, 'source', 'heightSystem')
      }
    }
    if (this.props.sourceFrame === constants.FRAME_MGI) {
      sourceEllpsChoices.push(ellpsMgi);
      if (this.props.sourceEllps && this.props.sourceEllps !== constants.ELLPS_BESSEL) {
        eventSourceEllps.target.value = constants.ELLPS_BESSEL;
        this.onHandleChange(eventSourceEllps, 'source', 'ellps') 
      }
      if (this.props.sourceEllps && !this.props.sourceHeightSystem) {
        this.onHandleChange({target: {value: constants.HEIGHT_USAGE}}, 'source', 'heightSystem')
      }
    }


    // prepare Target CRS data
    const targetEllpsChoices = [];
    const eventTargetEllps = { target: { value: null } };
    const enableTargetHeightSystem = this.props.targetEllps !== '';
    const enableTargetProjection = this.props.targetEllps !== '';

    if (this.props.targetFrame === constants.FRAME_ETRS2000) {
      targetEllpsChoices.push(ellpsEtrs);
      if (this.props.targetEllps && this.props.targetEllps !== constants.ELLPS_GRS80) {
        eventTargetEllps.target.value = constants.ELLPS_GRS80;
        this.onHandleChange(eventTargetEllps, 'target', 'ellps')
      }
      if (this.props.targetEllps && !this.props.targetHeightSystem) {
        this.onHandleChange({target: {value: constants.HEIGHT_ELLPS}}, 'target', 'heightSystem')
      }
    }
    if (this.props.targetFrame === constants.FRAME_MGI) {
      targetEllpsChoices.push(ellpsMgi);
      if (this.props.targetEllps && this.props.targetEllps !== constants.ELLPS_BESSEL) {
        eventTargetEllps.target.value = constants.ELLPS_BESSEL;
        this.onHandleChange(eventTargetEllps, 'target', 'ellps') 
      }
      if (this.props.targetEllps && !this.props.targetHeightSystem) {
        this.onHandleChange({target: {value: constants.HEIGHT_USAGE}}, 'target', 'heightSystem')
      }
    }

    if (this.props.sourceEllps && !this.props.sourceMeridian) {
      this.onHandleChange({target: {value: constants.MERIDIAN_GREENWICH}}, "source", "meridian");
    }
    if (this.props.targetEllps && !this.props.targetMeridian) {
      this.onHandleChange({target: {value: constants.MERIDIAN_GREENWICH}}, "target", "meridian");
    }

    return (
      <div>
        <h2>Source CRS</h2>
        <CRS 
          frame={this.props.sourceFrame} 
          frameChoices={frameChoices}
          ellps={this.props.sourceEllps}
          ellpsChoices={sourceEllpsChoices}
          meridian={this.props.sourceMeridian}
          meridianChoices={meridianChoices}
          enableMeridian={false}
          projection={this.props.sourceProjection}
          enableProjection={enableSourceProjection}
          epoch={this.props.sourceEpoch}
          enableEpoch={false}
          handleChangeFrame={event => this.onHandleChange(event, "source", "frame")}
          handleChangeEllps={event => this.onHandleChange(event, "source", "ellps")}
          handleChangeProjection={event => this.onHandleChange(event, "source", "projection")}
        />
        <CRSAdditions
          heightSystem={this.props.sourceHeightSystem}
          enableHeightSystem={enableSourceHeightSystem}
          handleChangeHeightSystem={event => this.onHandleChange(event, "source", "heightSystem")}
          transformationMethod={this.props.transformationMethod}
          handleChangeTransormationMethod={event => this.onHandleChange(event, "transformation", "method")}
        />
        <h2>Target CRS</h2>
        <CRS 
          frame={this.props.targetFrame} 
          frameChoices={frameChoices}
          ellps={this.props.targetEllps}
          ellpsChoices={targetEllpsChoices}
          meridian={this.props.targetMeridian}
          meridianChoices={meridianChoices}
          enableMeridian={false}
          projection={this.props.targetProjection}
          enableProjection={enableTargetProjection}
          epoch={this.props.targetEpoch}
          enableEpoch={false}
          handleChangeFrame={event => this.onHandleChange(event, "target", "frame")}
          handleChangeEllps={event => this.onHandleChange(event, "target", "ellps")}
          handleChangeProjection={event => this.onHandleChange(event, "target", "projection")}
        />    
        <CRSAdditions
          heightSystem={this.props.targetHeightSystem}
          enableHeightSystem={enableTargetHeightSystem}
          handleChangeHeightSystem={event => this.onHandleChange(event, "target", "heightSystem")}
          hideTransformationMethod={true}
        /> 
        <h2>Zu Transformierende Punkte</h2>   
        {pointManager}
        <br />
        <button>Transformiere</button>        
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Austrian);