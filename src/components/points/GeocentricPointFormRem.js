import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';



class GeocentricPointFormRem extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onRem( event.target[0].value )
    }

    render() { 
        let selectPointList = this.props.pointList.map( (point, idx) => {
            return <option key={idx} value={idx}>{point.name}</option>
        });

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Zu löschender Punkt:
                    <select name="pointId">
                        {selectPointList}
                    </select>
                </label>
                <br />
                <input type="submit" value="Löschen" />
            </form>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        pointList: state.points.geocentricPointList
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onRem: (idx) => dispatch(actions.remGeocentricPoint(idx))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeocentricPointFormRem);