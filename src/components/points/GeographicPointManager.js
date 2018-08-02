import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from '../../hoc/UI/Modal';
import '../../hoc/UI/Button.css';
import '../../hoc/UI/Table.css';

import GeographicPointList from './GeographicPointList';
import GeographicPointFormAdd from './GeographicPointFormAdd';
import GeographicPointFormRem from './GeographicPointFormRem';

function mapStateToProps(state) {
  return {
    pointsGeographic: state.points.geographicPointList,
  };
}

class GeographicPointManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isOpenGeographicAdd: false,
        isOpenGeographicRem: false,
    }
    this.addGeographicPointHandler = this.addGeographicPointHandler.bind(this);
    this.remGeographicPointHandler = this.remGeographicPointHandler.bind(this);
    this.toggleGeographicAddModal = this.toggleGeographicAddModal.bind(this);
    this.toggleGeographicRemModal = this.toggleGeographicRemModal.bind(this);
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
  
  render() {

    const buttonGreen = 'ButtonDefault ButtonGreen';
    const buttonRed = 'ButtonDefault ButtonRed';
    const lenGeographic = this.props.pointsGeographic ? this.props.pointsGeographic.length : 0;
   
    return (
      <div>
        
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
        <table className="TablePointListActions">
          <tbody>
            <tr>
              <td className='TablePointListActionsType'>Geographic Point ({lenGeographic})</td>
              <td className='TablePointListActionsButton'><button className={buttonGreen} onClick={this.addGeographicPointHandler}>+</button></td>
              <td className='TablePointListActionsButton'><button className={buttonRed}   onClick={this.remGeographicPointHandler}>-</button></td>
            </tr>
          </tbody>
        </table>
        <GeographicPointList pointList={this.props.pointsGeographic} />

      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(GeographicPointManager);