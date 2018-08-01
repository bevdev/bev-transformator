import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from '../hoc/UI/Modal';
import '../hoc/UI/Button.css';
import '../hoc/UI/Table.css';

import GeocentricPointList from '../components/points/GeocentricPointList';
import GeocentricPointFormAdd from '../components/points/GeocentricPointFormAdd';
import GeocentricPointFormRem from '../components/points/GeocentricPointFormRem';

import GeographicPointList from '../components/points/GeographicPointList';
import GeographicPointFormAdd from '../components/points/GeographicPointFormAdd';
import GeographicPointFormRem from '../components/points/GeographicPointFormRem';

import ProjectedPointList from '../components/points/ProjectedPointList';
import ProjectedPointFormAdd from '../components/points/ProjectedPointFormAdd';
import ProjectedPointFormRem from '../components/points/ProjectedPointFormRem';

class PointManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isOpenGeocentricAdd: false,
        isOpenGeocentricRem: false,
        isOpenGeographicAdd: false,
        isOpenGeographicRem: false,
        isOpenProjectedAdd: false,
        isOpenProjectedRem: false,
    }
    this.addGeocentricPointHandler = this.addGeocentricPointHandler.bind(this);
    this.remGeocentricPointHandler = this.remGeocentricPointHandler.bind(this);
    this.toggleGeocentricAddModal = this.toggleGeocentricAddModal.bind(this);
    this.toggleGeocentricRemModal = this.toggleGeocentricRemModal.bind(this);

    this.addGeographicPointHandler = this.addGeographicPointHandler.bind(this);
    this.remGeographicPointHandler = this.remGeographicPointHandler.bind(this);
    this.toggleGeographicAddModal = this.toggleGeographicAddModal.bind(this);
    this.toggleGeographicRemModal = this.toggleGeographicRemModal.bind(this);   

    this.addProjectedPointHandler = this.addProjectedPointHandler.bind(this);
    this.remProjectedPointHandler = this.remProjectedPointHandler.bind(this);
    this.toggleProjectedAddModal = this.toggleProjectedAddModal.bind(this);
    this.toggleProjectedRemModal = this.toggleProjectedRemModal.bind(this);   

  }

  toggleGeocentricAddModal = () => {
    this.setState({
        isOpenGeocentricAdd: !this.state.isOpenGeocentricAdd
    })
  }

  toggleGeocentricRemModal = () => {
    this.setState({
        isOpenGeocentricRem: !this.state.isOpenGeocentricRem
    })
  }

  addGeocentricPointHandler = () => {
    this.toggleGeocentricAddModal();
  }

  remGeocentricPointHandler = () => {
    if (this.props.pointsGeocentric && this.props.pointsGeocentric.length > 0) {
      this.toggleGeocentricRemModal();
    } else {
      alert("No Geocentric Points available");
    }
  }

  toggleGeographicAddModal = () => {
    this.setState({
        isOpenGeographicAdd: !this.state.isOpenGeographicAdd
    })
  }

  toggleGeographicRemModal = () => {
    this.setState({
        isOpenGeographicRem: !this.state.isOpenGeographicRem
    })
  }

  addGeographicPointHandler = () => {
    this.toggleGeographicAddModal();
  }

  remGeographicPointHandler = () => {
    if (this.props.pointsGeographic && this.props.pointsGeographic.length > 0) {
      this.toggleGeographicRemModal();
    } else {
      alert("No Geographic Points available");
    }
  }

  toggleProjectedAddModal = () => {
    this.setState({
        isOpenProjectedAdd: !this.state.isOpenProjectedAdd
    })
  }

  toggleProjectedRemModal = () => {
    this.setState({
        isOpenProjectedRem: !this.state.isOpenProjectedRem
    })
  }

  addProjectedPointHandler = () => {
    this.toggleProjectedAddModal();
  }

  remProjectedPointHandler = () => {
    if (this.props.pointsProjected && this.props.pointsProjected.length > 0) {
      this.toggleProjectedRemModal();
    } else {
      alert("No Projected Points available");
    }
  }

  render() { 

    const buttonGreen = 'ButtonDefault ButtonGreen';
    const buttonRed = 'ButtonDefault ButtonRed';

    const lenGeographic = this.props.pointsGeographic ? this.props.pointsGeographic.length : 0;
    const lenGeocentric = this.props.pointsGeocentric ? this.props.pointsGeocentric.length : 0;
    const lenProjected = this.props.pointsProjected ? this.props.pointsProjected.length : 0;
    return (<div>
      <table className="TablePointListActions">
        <tbody>
          <tr>
            <td className='TablePointListActionsType'>Geocentric Point ({lenGeocentric})</td>
            <td className='TablePointListActionsButton'><button className={buttonGreen} onClick={this.addGeocentricPointHandler}>+</button></td>
            <td className='TablePointListActionsButton'><button className={buttonRed}   onClick={this.remGeocentricPointHandler}>-</button></td>
          </tr>
          <tr>
            <td className='TablePointListActionsType'>Geographic Point ({lenGeographic})</td>
            <td className='TablePointListActionsButton'><button className={buttonGreen} onClick={this.addGeographicPointHandler}>+</button></td>
            <td className='TablePointListActionsButton'><button className={buttonRed}   onClick={this.remGeographicPointHandler}>-</button></td>
          </tr>
          <tr>
            <td className='TablePointListActionsType'>Projected Point ({lenProjected})</td>
            <td className='TablePointListActionsButton'><button className={buttonGreen} onClick={this.addProjectedPointHandler}>+</button></td>
            <td className='TablePointListActionsButton'><button className={buttonRed}   onClick={this.remProjectedPointHandler}>-</button></td>
          </tr>
        </tbody>
      </table>

      <br />


      <Modal 
        show={this.state.isOpenGeocentricAdd}
        onClose={this.toggleGeocentricAddModal}>
        <GeocentricPointFormAdd onSuccess={this.toggleGeocentricAddModal}/>
      </Modal>
      <Modal
        show={this.state.isOpenGeocentricRem}
        onClose={this.toggleGeocentricRemModal}>
        <GeocentricPointFormRem />
      </Modal>
      <GeocentricPointList pointList={this.props.pointsGeocentric} />

      <Modal 
        show={this.state.isOpenGeographicAdd}
        onClose={this.toggleGeographicAddModal}>
        <GeographicPointFormAdd onSuccess={this.toggleGeographicAddModal}/>
      </Modal>
      <Modal
        show={this.state.isOpenGeographicRem}
        onClose={this.toggleGeographicRemModal}>
        <GeographicPointFormRem />
      </Modal>
      <GeographicPointList pointList={this.props.pointsGeographic} />

      <Modal 
        show={this.state.isOpenProjectedAdd}
        onClose={this.toggleProjectedAddModal}>
        <ProjectedPointFormAdd onSuccess={this.toggleProjectedAddModal}/>
      </Modal>
      <Modal
        show={this.state.isOpenProjectedRem}
        onClose={this.toggleProjectedRemModal}>
        <ProjectedPointFormRem />
      </Modal>
      <ProjectedPointList pointList={this.props.pointsProjected} />
    </div>);
  }
}

const mapStateToProps = state => {
  return {
      pointsGeocentric: state.points.geocentricPointList,
      pointsGeographic: state.points.geographicPointList,
      pointsProjected: state.points.projectedPointList,
  };
}
 
export default connect(mapStateToProps)(PointManager);