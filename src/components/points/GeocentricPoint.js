// import React from 'react';
import PropTypes from 'prop-types';
import { prepareNumber } from '../../shared/utility';
import { pointAsTableRow } from '../../shared/render';

const GeocentricPoint = (props) => {
    const x = prepareNumber(props.x, 3);
    const y = prepareNumber(props.y, 3);
    const z = prepareNumber(props.z, 3);
    return pointAsTableRow(props.name, x, y, z);
}

GeocentricPoint.propTypes = {
    name: PropTypes.string.isRequired,
    x: PropTypes.number,
    y: PropTypes.number,
    z: PropTypes.number
}
 
export default GeocentricPoint;