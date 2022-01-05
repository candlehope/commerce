import React from "react";
import { Form, ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import PriceSelector from "./PriceSelector";
import MechanicsSelector from "./MechanicsSelector";

class RefineSidebar extends React.Component {
  render() {
    return (
      <div>
        <PriceSelector onPriceSelected={this.props.onPriceSelected} />
        <MechanicsSelector
          onMechanicsSelected={this.props.onMechanicsSelected}
        />
      </div>
    );
  }
}

export default RefineSidebar;
