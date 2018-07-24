import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class GeographicPointFormAdd extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            name: '', lon: '', lat: '', ele: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        let value = event.target.value;
        if (['lon', 'lat', 'ele'].indexOf(event.target.name) > -1) {
            value = parseFloat(event.target.value);
        }
        this.setState({
            [event.target.name]: value
        });
    }

    handleSubmit(event) {
        this.props.onAdd( this.state );
        event.preventDefault();
        // close Modal...
        this.props.onSuccess();
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Longitude (Lambda):
                    <input type="number" step="0.000001" name="lon" value={this.state.lon} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Latitude (Phi):
                    <input type="number" step="0.000001" name="lat" value={this.state.lat} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Elevation:
                    <input type="number" step="0.001" name="ele" value={this.state.ele} onChange={this.handleChange} />
                </label>
                <br />
                <input type="submit" value="Speichern" />
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAdd: (point) => dispatch(actions.addGeographicPoint(point)),
    }
}
 
export default connect(null, mapDispatchToProps)(GeographicPointFormAdd);