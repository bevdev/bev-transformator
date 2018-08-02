import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from '../../hoc/UI/Modal';
import '../../hoc/UI/Button.css';
import '../../hoc/UI/Table.css';

import ProjectedPointList from './ProjectedPointList';
import ProjectedPointFormAdd from './ProjectedPointFormAdd';
import ProjectedPointFormRem from './ProjectedPointFormRem';

function mapStateToProps(state) {
  return {
    pointsProjected: state.points.projectedPointList,
  };
}

class ProjectedPointManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isOpenProjectedAdd: false,
        isOpenProjectedRem: false,
    }
    this.addProjectedPointHandler = this.addProjectedPointHandler.bind(this);
    this.remProjectedPointHandler = this.remProjectedPointHandler.bind(this);
    this.toggleProjectedAddModal = this.toggleProjectedAddModal.bind(this);
    this.toggleProjectedRemModal = this.toggleProjectedRemModal.bind(this);
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
    const lenProjected = this.props.pointsProjected ? this.props.pointsProjected.length : 0;
   
    return (
      <div>
        
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
        <table className="TablePointListActions">
          <tbody>
            <tr>
              <td className='TablePointListActionsType'>Projected Point ({lenProjected})</td>
              <td className='TablePointListActionsButton'><button className={buttonGreen} onClick={this.addProjectedPointHandler}>+</button></td>
              <td className='TablePointListActionsButton'><button className={buttonRed}   onClick={this.remProjectedPointHandler}>-</button></td>
            </tr>
          </tbody>
        </table>
        <ProjectedPointList pointList={this.props.pointsProjected} />

      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(ProjectedPointManager);