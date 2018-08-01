import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CRS extends Component {

    state = {
        frame: null,
        ellipsoid: null,
        meridian: null,
        projection: null,
        epoch: null
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

CRS.propTypes = {
    frame: PropTypes.string.isRequired,
    ellipsoid: PropTypes.string,
    meridian: PropTypes.string,
    projection: PropTypes.string,
    epoch: PropTypes.epoch,
};

export default CRS;