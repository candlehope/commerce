import { Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Layout = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/HomePage">
            Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/NewArrivals">
                New Arrivals
              </Nav.Link>
              <Nav.Link as={Link} to="/ListingForm">
                Sell Your Stuff
              </Nav.Link>
              <Nav.Link as={Link} to="/AboutUs">
                About Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Layout;

{
  /* <>
      <nav>
        <ul>
          <li>
            <Link to="/HomePage">Home</Link>
          </li>
          <li>
            <Link to="/ListingForm">Sell your Stuff</Link>
          </li>
          <li>
            <Link to="/AboutUs">About Us</Link>
          </li>
          <li>
            <Link to="/NewArrivals">New Arrivals!</Link>
          </li>
        </ul>
      </nav> */
}
