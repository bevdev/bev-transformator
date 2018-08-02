import React from 'react';
import PropTypes from 'prop-types';
import GeographicPoint from './GeographicPoint';

import '../../hoc/UI/Table.css';

const GeographicPointList = (props) => {
  const { pointList } = props;
  let renderedPointList = (<tr><td colSpan={4} style={{'textAlign': 'center'}}>-- No Points available --</td></tr>);
  if (pointList && pointList.length > 0) {
    renderedPointList = pointList.map( (point,idx) => {
      return <GeographicPoint key={idx}
        name={point.name} 
        lon={point.lon} 
        lat={point.lat} 
        ele={point.ele} 
      />
    })
  }
  return ( 
    <div>
      {/* <h2>GeographicPointList</h2> */}
      <table className="TableDefault">
        <thead>
          <tr>
            <th className="ColumnPointName">Name</th>
            <th className="ColumnPointValue">Longitude</th>
            <th className="ColumnPointValue">Latitude</th>
            <th className="ColumnPointValue">Elevation</th>
          </tr>
        </thead>
        <tbody>    
          {renderedPointList}
        </tbody>
      </table>
    </div>
  );
}

GeographicPointList.propTypes = {
  pointList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      lon: PropTypes.number,
      lat: PropTypes.number,
      ele: PropTypes.number
    })
  )
}
 
export default GeographicPointList;