import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    listHeightSystem: state.api.heightSystemList,
    listTransformationMethod: state.api.transformationMethodList,
  };
}

class CRSAdditions extends Component {
  render() {

    const enableHeightSystem = this.props.enableHeightSystem !== undefined ? this.props.enableHeightSystem : true;
    const arrayChoicesHeightSystem = this.props.choicesHeightSystem ? this.props.choiceHeightSystem : this.props.listHeightSystem;
    const choicesHeightSystem = arrayChoicesHeightSystem.map( obj => {
      return <option key={obj.id} value={obj.id}>{obj.name}</option>
    });
    const allowNoHeight = this.props.allowNoHeight !== undefined ? this.props.allowNoHeight : true;
    if (allowNoHeight) choicesHeightSystem.unshift(<option key="NaN" value="">-- No Height System --</option>);
    const choiceHeightSystem = this.props.heightSystem;

    const enableTransformationMethod = this.props.enableTransformationMethod !== undefined ? this.props.enableTransformationMethod : true;
    const arrayChoicesTransformationMethod = this.props.choicesTransformationMethod ? this.props.choicesTransformationMethod : this.props.listTransformationMethod;
    const choicesTransformationMethod = arrayChoicesTransformationMethod.map( obj => {
      return <option key={obj.id} value={obj.id}>{obj.name}</option>
    });
    // choicesTransformationMethod.unshift(<option key="NaN" value="">-- No Transformation method --</option>)
    const choiceTransformationMethod = this.props.transformationMethod;
    let rowTransformationMethod = null;
    if (!this.props.hideTransformationMethod) {
      rowTransformationMethod = (<tr>
        <td className="ColumnPointName"> <label htmlFor="transformationMethod">Transformation Method:</label> </td>
        <td className="ColumnChoiceField"> <select style={{width: "100%"}} value={choiceTransformationMethod} name="transformationMethod" onChange={this.props.handleChangeTransformationMethod} disabled={!enableTransformationMethod}>{choicesTransformationMethod}</select> </td>
      </tr>);
    }

    return (
      <div>
        <form>
          <table className="TableDefault">
            <tbody>
              <tr>
                <td className="ColumnPointName"> <label htmlFor="heightSystem">Height System:</label> </td>
                <td className="ColumnChoiceField"> <select style={{width: "100%"}} value={choiceHeightSystem} name="heightSystem" onChange={this.props.handleChangeHeightSystem} disabled={!enableHeightSystem}>{choicesHeightSystem}</select> </td>
              </tr>
              {rowTransformationMethod}
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(CRSAdditions);