import React from 'react';
import PropTypes from 'prop-types';
import ProjectedPoint from './ProjectedPoint';

import '../../hoc/UI/Table.css';

const ProjectedPointList = (props) => {
  const { pointList } = props;
  let renderedPointList = (<tr><td colspan={4} style={{'textAlign': 'center'}}>-- No Points available --</td></tr>);
  if (pointList && pointList.length > 0) {
    renderedPointList = pointList.map( (point,idx) => {
      return <ProjectedPoint key={idx}
        name={point.name} 
        e={point.e} 
        n={point.n} 
        h={point.h} 
      />
    })
  }
  return ( 
    <div>
      {/* <h2>ProjectedPointList</h2> */}
      <table className="TableDefault">
        <thead>
          <tr>
            <th className="ColumnPointName">Name</th>
            <th className="ColumnPointValue">East</th>
            <th className="ColumnPointValue">North</th>
            <th className="ColumnPointValue">Height</th>
          </tr>
        </thead>
        <tbody>    
          {renderedPointList}
        </tbody>
      </table>
    </div>
  );
}

ProjectedPointList.propTypes = {
  pointList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      e: PropTypes.number,
      n: PropTypes.number,
      h: PropTypes.number
    })
  )
}
 
export default ProjectedPointList;