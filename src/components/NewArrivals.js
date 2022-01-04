import React from "react";
import listings from "../api/listings";
import { connect } from "react-redux";
import { fetchListings, priceFilter } from "../actions";
import RefineSidebar from "./RefineSidebar";
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

  renderList() {
    return this.props.listings
      .filter(this.bySearch)
      .filter(this.byPrice)
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
            <RefineSidebar onPriceSelected={this.props.priceFilter} />
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
  };
};

export default connect(mapStateToProps, { fetchListings, priceFilter })(
  NewArrivals
);
