import React from "react";
import { Form, ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import PriceSelector from "./PriceSelector";
import MechanicsSelector from "./MechanicsSelector";
import ConditionSelector from "./ConditionSelector";

class RefineSidebar extends React.Component {
  render() {
    return (
      <div>
        <PriceSelector
          onPriceSelected={this.props.onPriceSelected}
          selectedPrice={this.props.selectedPrice}
        />
        <MechanicsSelector
          onMechanicsSelected={this.props.onMechanicsSelected}
          selectedMechanics={this.props.selectedMechanics}
        />
        <ConditionSelector
          onConditionSelected={this.props.onConditionSelected}
          selectedCondition={this.props.selectedCondition}
        />
      </div>
    );
  }
}

export default RefineSidebar;
