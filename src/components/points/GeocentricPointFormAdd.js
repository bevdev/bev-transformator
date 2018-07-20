import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class GeocentricPointFormAdd extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            name: '', x: '', y: '', z: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        let value = event.target.value;
        if (['x', 'y', 'z'].indexOf(event.target.name) > -1) {
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
                    X:
                    <input type="number" step="0.001" name="x" value={this.state.x} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Y:
                    <input type="number" step="0.001" name="y" value={this.state.y} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Z:
                    <input type="number" step="0.001" name="z" value={this.state.z} onChange={this.handleChange} />
                </label>
                <br />
                <input type="submit" value="Speichern" />
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAdd: (point) => dispatch(actions.addGeocentricPoint(point)),
    }
}
 
export default connect(null, mapDispatchToProps)(GeocentricPointFormAdd);