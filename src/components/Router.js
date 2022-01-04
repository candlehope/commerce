import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListingForm from "./ListingForm";
import AboutUs from "./AboutUs";
import HomePage from "./HomePage";
import NewArrivals from "./NewArrivals";
import Layout from "./Layout";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Layout />}>
            <Route path="/ListingForm" element={<ListingForm />} />
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/NewArrivals" element={<NewArrivals />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Router;
