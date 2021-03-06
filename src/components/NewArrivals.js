import React from "react";
import listings from "../api/listings";
import { connect } from "react-redux";
import {
  fetchListings,
  priceFilter,
  mechanicsFilter,
  conditionFilter,
} from "../actions";
import RefineSidebar from "./sidebar/RefineSidebar";
import { Col, Row } from "react-bootstrap";

class NewArrivals extends React.Component {
  bySearch = (listing) => {
    if (this.props.userFilter === "") return true;
    if (typeof this.props.userFilter === "undefined") return true;
    return listing.title
      .toLowerCase()
      .includes(this.props.userFilter.toLowerCase());
  };

  byPrice = (listing) => {
    console.log(this.props.selectedPrice);
    if (this.props.selectedPrice === "") return true;
    if (typeof this.props.selectedPrice === "undefined") return true;
    if (
      this.props.selectedPrice[0] < parseInt(listing.price) &&
      this.props.selectedPrice[1] > parseInt(listing.price)
    )
      return true;
  };

  byMechanics = (listing) => {
    if (this.props.selectedMechanics === "") return true;
    if (typeof this.props.selectedMechanics === "undefined") return true;
    return listing.category.includes(this.props.selectedMechanics);
  };

  byCondition = (listing) => {
    if (this.props.selectedCondition === "") return true;
    if (typeof this.props.selectedCondition === "undefined") return true;
    return listing.condition.includes(this.props.selectedCondition);
  };

  renderList() {
    return this.props.listings
      .filter(this.bySearch)
      .filter(this.byPrice)
      .filter(this.byMechanics)
      .filter(this.byCondition)
      .slice(0)
      .reverse()
      .map((listing) => {
        return (
          <div>
            <h3>Title: {listing.title}</h3>
            <p>Seller: {listing.name}</p>
            <p>Price: {listing.price}</p>
            <p>Condition:{listing.condition}</p>
            <hr />
          </div>
        );
      });
  }

  render() {
    return (
      <container>
        <Row>
          <Col xs="2">
            <RefineSidebar
              onPriceSelected={this.props.priceFilter}
              selectedPrice={this.props.selectedPrice}
              onMechanicsSelected={this.props.mechanicsFilter}
              selectedMechanics={this.props.selectedMechanics}
              onConditionSelected={this.props.conditionFilter}
              selectedCondition={this.props.selectedCondition}
            />
          </Col>
          <Col>
            <div>{this.renderList()}</div>
            <button onClick={this.props.fetchListings}>fetchListings!</button>
          </Col>
        </Row>
      </container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listings: state.listings.allListings,
    userFilter: state.listings.searchFilter,
    selectedPrice: state.listings.priceFilter,
    selectedMechanics: state.listings.mechanicsFilter,
    selectedCondition: state.listings.conditionFilter,
  };
};

export default connect(mapStateToProps, {
  fetchListings,
  priceFilter,
  mechanicsFilter,
  conditionFilter,
})(NewArrivals);
