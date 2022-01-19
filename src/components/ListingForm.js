import { getByPlaceholderText } from "@testing-library/react";
import React from "react";
// import Dropdown from "react-dropdown";
import Select from "react-select";
import "react-dropdown/style.css";
import { connect } from "react-redux";
import { postListing } from "../actions";

class ListingForm extends React.Component {
  state = {
    selectedMechanics: [],
    title: "",
    price: 0,
    condition: "",
    min: "",
    max: "",
    image: "",
  };

  mapMechanicsToState = (e) => {
    // console.log(e);
    let object = e.map((value) => {
      return value.value;
    });
    this.setState({ selectedMechanics: object });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let user = { user: this.props.userId, name: this.props.name };
    this.props.postListing(Object.assign(user, this.state));
  };

  onChangeTitle = (event) => {
    this.setState({ title: event.target.value });
  };

  onChangePrice = (event) => {
    this.setState({ price: event.target.value });
  };

  onChangeCondition = (choice) => {
    this.setState({ condition: choice.value });
  };

  onChangeMin = (event) => {
    this.setState({ min: event.target.value });
  };

  onChangeMax = (event) => {
    this.setState({ max: event.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label for="title">Title:</label>
          <input onChange={this.onChangeTitle} />
          <br />
          price
          <input onChange={this.onChangePrice} type="number" />
          <br />
          condition
          <Select
            onChange={this.onChangeCondition}
            options={this.props.condition}
          />
          <br />
          mechanics
          <Select
            isMulti
            onChange={this.mapMechanicsToState}
            options={this.props.mechanics}
          />
          <br />
          min players
          <input onChange={this.onChangeMin} type="number" />
          <br />
          max players
          <input type="number" onChange={this.onChangeMax} />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mechanics: state.mechanics,
    userId: state.auth.userId,
    name: state.auth.name,
    condition: state.condition,
  };
};

export default connect(mapStateToProps, { postListing })(ListingForm);
