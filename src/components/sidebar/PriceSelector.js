import React from "react";
import { Form, ListGroup } from "react-bootstrap";

class PriceSelector extends React.Component {
  priceLookup = {
    "<10": [0, 10],
    "10-25": [10, 25],
    "25-50": [25, 50],
    "50-100": [50, 100],
    ">100": [100, Infinity],
  };

  onRadioClick = (event) => {
    console.log(event.target.value);
    console.log(this.props.selectedPrice);
    if (this.props.selectedPrice === this.priceLookup[event.target.value]) {
      event.target.checked = false;
      this.props.onPriceSelected(undefined);
      return;
    }
    this.props.onPriceSelected(this.priceLookup[event.target.value]);
  };

  render() {
    return (
      <div>
        <br />
        <ListGroup>
          <h5>Price</h5>

          <ListGroup.Item>
            <Form.Check
              type="radio"
              name="price"
              id={`default-radio`}
              value="<10"
              onClick={this.onRadioClick}
              label={`Under $10`}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <Form.Check
              type="radio"
              name="price"
              value="10-25"
              id={`default-radio`}
              onClick={this.onRadioClick}
              label={`$10 to $25`}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <Form.Check
              type="radio"
              name="price"
              value="25-50"
              id={`default-radio`}
              onClick={this.onRadioClick}
              label={`$25 to $50`}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <Form.Check
              type="radio"
              name="price"
              value="50-100"
              id={`default-radio`}
              onClick={this.onRadioClick}
              label={`$50 to $100`}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <Form.Check
              type="radio"
              name="price"
              value=">100"
              id={`default-radio`}
              onClick={this.onRadioClick}
              label={`Over $100`}
            />
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

export default PriceSelector;
