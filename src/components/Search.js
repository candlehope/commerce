import React from "react";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";

import { fetchListings, searchFilter } from "../actions";

class Search extends React.Component {
  onSearch = (event) => {
    this.props.searchFilter(event.target.value);
  };

  render() {
    return (
      <div>
        <Form.Control type="text" onChange={this.onSearch} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    getlistings: state.listings.allListings,
    filteredResults: state.listings.filter,
  };
};

export default connect(mapStateToProps, { fetchListings, searchFilter })(
  Search
);
