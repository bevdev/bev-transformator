import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CRS from '../components/CRS/CRS';
import * as actions from '../store/actions';

class Advanced extends Component {

    constructor(props) {
        super(props);
        this.onHandleChange = this.onHandleChange.bind(this);
    }

    onHandleChange(event, side, attr) {
        const handlers = {
            target: {
                frame: this.props.onChangeTargetFrame,
                ellps: this.props.onChangeTargetEllps,
                meridian: this.props.onChangeTargetMeridian,
                projection: this.props.onChangeTargetProjection,
                epoch: this.props.onChangeTargetEpoch,
            },
            source: {
                frame: this.props.onChangeSourceFrame,
                ellps: this.props.onChangeSourceEllps,
                meridian: this.props.onChangeSourceMeridian,
                projection: this.props.onChangeSourceProjection,
                epoch: this.props.onChangeSourceEpoch,
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
            }
        }

        return handler(event.target.value)
    }

    removeMeridian() {
        this.props.onChangeSourceMeridian(null)
    }

    render() {

        return (
            <div>
                <h2>Source CRS</h2>
                <CRS 
                  frame={this.props.sourceFrame} 
                  ellps={this.props.sourceEllps}
                  meridian={this.props.sourceMeridian}
                  projection={this.props.sourceProjection}
                  epoch={this.props.sourceEpoch}
                  handleChangeEpoch={event => this.onHandleChange(event, "source", "epoch")}
                  handleChangeFrame={event => this.onHandleChange(event, "source", "frame")}
                  handleChangeEllps={event => this.onHandleChange(event, "source", "ellps")}
                  handleChangeMeridian={event => this.onHandleChange(event, "source", "meridian")}
                  handleChangeProjection={event => this.onHandleChange(event, "source", "projection")}/>

                <h2>Target CRS</h2>
                <CRS 
                  frame={this.props.targetFrame} 
                  ellps={this.props.targetEllps}
                  meridian={this.props.targetMeridian}
                  projection={this.props.targetProjection}
                  epoch={this.props.targetEpoch}
                  handleChangeEpoch={event => this.onHandleChange(event, "target", "epoch")}
                  handleChangeFrame={event => this.onHandleChange(event, "target", "frame")}
                  handleChangeEllps={event => this.onHandleChange(event, "target", "ellps")}
                  handleChangeMeridian={event => this.onHandleChange(event, "target", "meridian")}
                  handleChangeProjection={event => this.onHandleChange(event, "target", "projection")}/>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        sourceFrame: state.advanced.sourceFrm,
        sourceEpoch: state.advanced.sourceEpoch,
        sourceEllps: state.advanced.sourceEllps,
        sourceMeridian: state.advanced.sourceMeridian,
        sourceProjection: state.advanced.sourcePrj,

        targetFrame: state.advanced.targetFrm,
        targetEpoch: state.advanced.targetEpoch,
        targetEllps: state.advanced.targetEllps,
        targetMeridian: state.advanced.targetMeridian,
        targetProjection: state.advanced.targetPrj,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChangeSourceFrame: (obj) => dispatch(actions.setSourceFrame(obj)),
        onChangeSourceEpoch: (obj) => dispatch(actions.setSourceEpoch(obj)),
        onChangeSourceEllps: (obj) => dispatch(actions.setSourceEllipsoid(obj)),
        onChangeSourceMeridian: (obj) => dispatch(actions.setSourceMeridian(obj)),
        onChangeSourceProjection: (obj) => dispatch(actions.setSourceProjection(obj)),

        onChangeTargetFrame: (obj) => dispatch(actions.setTargetFrame(obj)),
        onChangeTargetEpoch: (obj) => dispatch(actions.setTargetEpoch(obj)),
        onChangeTargetEllps: (obj) => dispatch(actions.setTargetEllipsoid(obj)),
        onChangeTargetMeridian: (obj) => dispatch(actions.setTargetMeridian(obj)),
        onChangeTargetProjection: (obj) => dispatch(actions.setTargetProjection(obj)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)( Advanced );