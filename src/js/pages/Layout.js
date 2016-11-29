import React from "react";

import ModFlowMap from "../components/ModFlowMap";

export default class Layout extends React.Component {

  render() {
    return (
      <div className="page-wrapper">
        <ModFlowMap>
          {this.props.children}
        </ModFlowMap>
      </div>
    );
  }

}
