import React from "react";
import { Form, ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import PriceSelector from "./PriceSelector";

class RefineSidebar extends React.Component {
  render() {
    return <PriceSelector onPriceSelected={this.props.onPriceSelected} />;
  }
}

export default RefineSidebar;
