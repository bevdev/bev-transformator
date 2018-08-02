import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../../hoc/UI/Table.css';

const mapStateToProps = (state) => {
  return {
    frameList: state.api.frameList,
    ellpsList: state.api.ellpsList,
    meridianList: state.api.meridianList,
    projectionList: state.api.prjList,
  };
}

class CRS extends Component {

  render() {

    const frameChoiceArray = this.props.frameChoices ? this.props.frameChoices : this.props.frameList
    const frameChoices = frameChoiceArray.map( obj => {
      return <option key={obj.id} value={obj.id}>{obj.name}</option>
    })

    const ellpsChoiceArray = this.props.ellpsChoices ? this.props.ellpsChoices : this.props.ellpsList;
    const ellpsChoices = ellpsChoiceArray.map( obj => {
      return <option key={obj.id} value={obj.id}>{obj.name}</option>
    });
    ellpsChoices.unshift(<option key="NaN" value="">-- No Ellipsoid --</option>)

    const meridianChoiceArray = this.props.meridianChoices ? this.props.meridianChoices : this.props.meridianList;
    const meridianChoices = meridianChoiceArray.map( obj => {
      return <option key={obj.id} value={obj.id}>{obj.name}</option>
    });
    meridianChoices.unshift(<option key="NaN" value="">-- No Meridian --</option>)

    const projectionChoiceArray = this.props.projectionChoices ? this.props.projectionChoices : this.props.projectionList;
    const projectionChoices = projectionChoiceArray.map( obj => {
      return <option key={obj.id} value={obj.id}>{obj.name}</option>
    });
    projectionChoices.unshift(<option key="NaN" value="">-- No Projection --</option>)

    const choiceFrame = this.props.frame;
    const choiceEllps = this.props.ellps;
    const choiceMeridian = this.props.meridian;
    const choiceProjection = this.props.projection;
    const choiceEpoch = this.props.epoch;

    const enableEpoch = this.props.enableEpoch !== undefined ? this.props.enableEpoch : true;

    let enableMeridian = this.props.enableMeridian !== undefined ? this.props.enableMeridian : true;
    enableMeridian = (enableMeridian && this.props.ellps) ? true : false;

    const enableProjection = ((this.props.meridian ? true : false) && enableMeridian) || this.props.enableProjection;

    return (
      <div>
        <form>
          <table className="TableDefault">
            <tbody>
              <tr>
                <td className="ColumnPointName"> <label htmlFor="frame">Frame:</label> </td>
                <td className="ColumnChoiceField"> <select style={{width: "100%"}} value={choiceFrame} name="frame" onChange={this.props.handleChangeFrame} required>{frameChoices}</select> </td>
              </tr>
              <tr>
                <td className="ColumnPointName"> <label htmlFor="epoch">Epoch:</label> </td>
                <td className="ColumnChoiceField"> <input type="text" style={{width: "100%"}} value={choiceEpoch} name="epoch" onChange={this.props.handleChangeEpoch} required disabled={!enableEpoch} /> </td>
              </tr>
              <tr>
                <td className="ColumnPointName"> <label htmlFor="ellipsoid">Ellipsoid:</label> </td>
                <td className="ColumnChoiceField"> <select style={{width: "100%"}} value={choiceEllps} name="ellipsoid" onChange={this.props.handleChangeEllps}>{ellpsChoices}</select> </td>
              </tr>
              <tr>
                <td className="ColumnPointName"> <label htmlFor="merdian">Meridian:</label> </td>
                <td className="ColumnChoiceField"> <select disabled={!enableMeridian} style={{width: "100%"}} value={choiceMeridian} name="meridian" onChange={this.props.handleChangeMeridian}>{meridianChoices}</select> </td>
              </tr>
              <tr>
                <td className="ColumnPointName"> <label htmlFor="projection">Projection:</label> </td>
                <td className="ColumnChoiceField"> <select disabled={!enableProjection} style={{width: "100%"}} value={choiceProjection} name="projection" onChange={this.props.handleChangeProjection}>{projectionChoices}</select> </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

CRS.propTypes = {
  frame: PropTypes.string.isRequired,
  ellipsoid: PropTypes.string,
  meridian: PropTypes.string,
  projection: PropTypes.string,
  // epoch: PropTypes.epoch,
};

export default connect(mapStateToProps, null)(CRS);