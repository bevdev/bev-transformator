import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../../hoc/UI/Table.css';

class CRS extends Component {

  constructor(props) {
    super(props);
    this.state = {
      frame: this.props.frame,
      ellps: this.props.ellps,
      meridian: this.props.meridian
    }
  }

  render() {

    const frameChoices = this.props.frameList.map( obj => {
      return <option key={obj.id} value={obj.id}>{obj.name}</option>
    })
    const ellpsChoices = this.props.ellpsList.map( obj => {
      return <option key={obj.id} value={obj.id}>{obj.name}</option>
    });
    ellpsChoices.unshift(<option key="NaN" value="">-- No Ellipsoid --</option>)

    const merdidianChoices = this.props.meridianList.map( obj => {
      return <option key={obj.id} value={obj.id}>{obj.name}</option>
    });
    merdidianChoices.unshift(<option key="NaN" value="">-- No Meridian --</option>)

    const projectionChoices = this.props.projectionList.map( obj => {
      return <option key={obj.id} value={obj.id}>{obj.name}</option>
    });
    projectionChoices.unshift(<option key="NaN" value="">-- No Projection --</option>)

    const choiceFrame = this.props.frame;
    const choiceEllps = this.props.ellps;
    const choiceMeridian = this.props.meridian;
    const choiceProjection = this.props.projection;
    const choiceEpoch = this.props.epoch;

    const enabledMeridian = this.props.ellps ? true : false;
    const enabledProjection = (this.props.meridian ? true : false) && enabledMeridian;

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
                <td className="ColumnChoiceField"> <input type="text" style={{width: "100%"}} value={choiceEpoch} name="epoch" onChange={this.props.handleChangeEpoch} required /> </td>
              </tr>
              <tr>
                <td className="ColumnPointName"> <label htmlFor="ellipsoid">Ellipsoid:</label> </td>
                <td className="ColumnChoiceField"> <select style={{width: "100%"}} value={choiceEllps} name="ellipsoid" onChange={this.props.handleChangeEllps}>{ellpsChoices}</select> </td>
              </tr>
              <tr>
                <td className="ColumnPointName"> <label htmlFor="merdian">Meridian:</label> </td>
                <td className="ColumnChoiceField"> <select disabled={!enabledMeridian} style={{width: "100%"}} value={choiceMeridian} name="meridian" onChange={this.props.handleChangeMeridian}>{merdidianChoices}</select> </td>
              </tr>
              <tr>
                <td className="ColumnPointName"> <label htmlFor="projection">Projection:</label> </td>
                <td className="ColumnChoiceField"> <select disabled={!enabledProjection} style={{width: "100%"}} value={choiceProjection} name="projection" onChange={this.props.handleChangeProjection}>{projectionChoices}</select> </td>
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

function mapStateToProps(state) {
  return {
    frameList: state.api.frameList,
    ellpsList: state.api.ellpsList,
    meridianList: state.api.meridianList,
    projectionList: state.api.prjList,
  };
}


export default connect(
  mapStateToProps,
)(CRS);