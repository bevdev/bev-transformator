import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class ProjectedPointFormAdd extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            name: '', e: '', n: '', h: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        let value = event.target.value;
        if (['e', 'n', 'h'].indexOf(event.target.name) > -1) {
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
                    East:
                    <input type="number" step="0.001" name="e" value={this.state.e} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    North:
                    <input type="number" step="0.001" name="n" value={this.state.n} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Height:
                    <input type="number" step="0.001" name="h" value={this.state.h} onChange={this.handleChange} />
                </label>
                <br />
                <input type="submit" value="Speichern" />
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAdd: (point) => dispatch(actions.addProjectedPoint(point)),
    }
}
 
export default connect(null, mapDispatchToProps)(ProjectedPointFormAdd);