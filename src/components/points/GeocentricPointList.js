import React from 'react';
import PropTypes from 'prop-types';
import GeocentricPoint from './GeocentricPoint';

const GeocentricPointList = (props) => {
    const { pointList } = props;
    const renderedPointList = pointList.map( (point,idx) => {
        return <GeocentricPoint key={idx}
            name={point.name} 
            x={point.x} 
            y={point.y} 
            z={point.z} 
        />
    })
    return ( 
        <div>
            <h2>GeocentricPointList</h2>
            {renderedPointList}
        </div>
    );
}

GeocentricPointList.propTypes = {
    pointList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            x: PropTypes.number,
            y: PropTypes.number,
            z: PropTypes.number
        })
    )
}
 
export default GeocentricPointList;