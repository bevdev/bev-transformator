// import React from 'react';
import PropTypes from 'prop-types';
import { prepareNumber } from '../../shared/utility';
import { pointAsTableRow } from '../../shared/render';

const GeographicPoint = (props) => {
    const lat = prepareNumber(props.lat, 6);
    const lon = prepareNumber(props.lon, 6);
    const ele = prepareNumber(props.ele, 3);
    return pointAsTableRow(props.name, lat, lon, ele);
}

GeographicPoint.propTypes = {
    name: PropTypes.string.isRequired,
    lat: PropTypes.number,
    lon: PropTypes.number,
    ele: PropTypes.number
}
 
export default GeographicPoint;