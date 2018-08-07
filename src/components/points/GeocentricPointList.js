import React from 'react';
import PropTypes from 'prop-types';
import GeocentricPoint from './GeocentricPoint';

import '../../hoc/UI/Table.css';

const GeocentricPointList = (props) => {
  const { pointList } = props;
  let renderedPointList = (<tr><td colSpan={4} style={{'textAlign': 'center'}}>-- No Points available --</td></tr>);
  if (pointList && pointList.length > 0) {
    renderedPointList = pointList.map( (point,idx) => {
      return <GeocentricPoint key={idx}
        name={point.name} 
        x={point.x} 
        y={point.y} 
        z={point.z} 
      />
    })
  }
  return ( 
    <div>
      {/* <h2>GeocentricPointList</h2> */}
      <table className="TableDefault">
        <thead>
          <tr>
            <th className="ColumnPointName">Name</th>
            <th className="ColumnPointValue">X</th>
            <th className="ColumnPointValue">Y</th>
            <th className="ColumnPointValue">Z</th>
          </tr>
        </thead>
        <tbody>        
          {renderedPointList}
        </tbody>
      </table>
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