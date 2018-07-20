import React from 'react';
import PropTypes from 'prop-types';

const GeocentricPoint = (props) => {
    return ( 
        <div>
            <h3>{props.name}</h3>
            <p>X: {props.x.toFixed(3)}, Y: {props.y.toFixed(3)}, Z: {props.z.toFixed(3)}</p>
        </div>
    );
}

GeocentricPoint.propTypes = {
    name: PropTypes.string.isRequired,
    x: PropTypes.number,
    y: PropTypes.number,
    z: PropTypes.number
}
 
export default GeocentricPoint;