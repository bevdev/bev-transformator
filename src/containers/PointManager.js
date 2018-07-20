import React, { Component } from 'react';
import { connect } from 'react-redux';

import GeocentricPointList from '../components/points/GeocentricPointList';
import Modal from '../hoc/UI/Modal';
import GeocentricPointFormAdd from '../components/points/GeocentricPointFormAdd';
import GeocentricPointFormRem from '../components/points/GeocentricPointFormRem';

class PointManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isOpenGeocentricAdd: false,
        isOpenGeocentricRem: false,
    }
    this.addGeocentricPointHandler = this.addGeocentricPointHandler.bind(this);
    this.remGeocentricPointHandler = this.remGeocentricPointHandler.bind(this);
    this.toggleGeocentricAddModal = this.toggleGeocentricAddModal.bind(this);
    this.toggleGeocentricRemModal = this.toggleGeocentricRemModal.bind(this);

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
    this.toggleGeocentricRemModal();
  }

  render() { 
    return (<div>
      <div>
        <button onClick={this.addGeocentricPointHandler}>Add Geocentric Point</button>
        <button onClick={this.remGeocentricPointHandler}>Remove Geocentric Point</button>
      </div>
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
    </div>);
  }
}

const mapStateToProps = state => {
  return {
      pointsGeocentric: state.points.geocentricPointList
  };
}
 
export default connect(mapStateToProps)(PointManager);