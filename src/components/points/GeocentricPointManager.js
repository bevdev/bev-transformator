import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from '../../hoc/UI/Modal';
import '../../hoc/UI/Button.css';
import '../../hoc/UI/Table.css';

import GeocentricPointList from './GeocentricPointList';
import GeocentricPointFormAdd from './GeocentricPointFormAdd';
import GeocentricPointFormRem from './GeocentricPointFormRem';

function mapStateToProps(state) {
  return {
    pointsGeocentric: state.points.geocentricPointList,
  };
}

class GeocentricPointManager extends Component {
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
    if (this.props.pointsGeocentric && this.props.pointsGeocentric.length > 0) {
      this.toggleGeocentricRemModal();
    } else {
      alert("No Geocentric Points available");
    }
  }
  
  render() {

    const buttonGreen = 'ButtonDefault ButtonGreen';
    const buttonRed = 'ButtonDefault ButtonRed';
    const lenGeocentric = this.props.pointsGeocentric ? this.props.pointsGeocentric.length : 0;
   
    return (
      <div>
        
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
        <table className="TablePointListActions">
          <tbody>
            <tr>
              <td className='TablePointListActionsType'>Geocentric Point ({lenGeocentric})</td>
              <td className='TablePointListActionsButton'><button className={buttonGreen} onClick={this.addGeocentricPointHandler}>+</button></td>
              <td className='TablePointListActionsButton'><button className={buttonRed}   onClick={this.remGeocentricPointHandler}>-</button></td>
            </tr>
          </tbody>
        </table>
        <GeocentricPointList pointList={this.props.pointsGeocentric} />

      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(GeocentricPointManager);