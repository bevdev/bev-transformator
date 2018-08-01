import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Advanced extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

Advanced.propTypes = {
    sourceFrame: PropTypes.string.isRequired,
    sourceEllipsoid: PropTypes.string,
    sourceProjection: PropTypes.string,
    targetTrame: PropTypes.string.isRequired,
    targetEllipsoid: PropTypes.string,
    targetProjection: PropTypes.string,
};

export default Advanced;