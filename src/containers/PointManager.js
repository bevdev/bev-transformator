import React, { Component } from 'react';

import GeocentricPointManager from '../components/points/GeocentricPointManager';
import GeographicPointManager from '../components/points/GeographicPointManager';
import ProjectedPointManager from '../components/points/ProjectedPointManager';

class PointManager extends Component {

  render() { 

    return (<div>

      <h1>Punkte X, Y, Z</h1>
      <GeocentricPointManager />
      <br />
      <h1>Punkte Lambda, Phi, Elevation</h1>
      <GeographicPointManager />
      <br />
      <h1>Punkte RW, HW, Höhe</h1>
      <ProjectedPointManager />
      <br />

    </div>);
  }
}
 
export default PointManager;