import React from "react";
import { Form, ListGroup } from "react-bootstrap";

class PriceSelector extends React.Component {
    
  onRadioClick = (event) => {
    if (event.target.value === "<10") this.props.onPriceSelected([0, 10]);
    if (event.target.value === "10-25") this.props.onPriceSelected([10, 25]);
    if (event.target.value === "25-50") this.props.onPriceSelected([25, 50]);
    if (event.target.value === "50-100") this.props.onPriceSelected([50, 100]);
    if (event.target.value === ">100")
      this.props.onPriceSelected([100, Infinity]);
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
