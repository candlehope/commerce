import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ListingForm from "./ListingForm";
// import { Redirect } from "react-router";
import AboutUs from "./AboutUs";
import HomePage from "./HomePage";
import NewArrivals from "./NewArrivals";
import Layout from "./Layout";
import { connect } from "react-redux";

function ListingRedirect() {
  return <Navigate to="/HomePage" />;
}

class Router extends React.Component {
  renderListingFormPage() {
    if (this.props.isSignedIn) {
      return <Route path="/ListingForm" element={<ListingForm />} />;
    }
    return <Route path="/ListingForm" element={<ListingRedirect />} />;
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Layout />}>
            {this.renderListingFormPage()}
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/NewArrivals" element={<NewArrivals />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps)(Router);
