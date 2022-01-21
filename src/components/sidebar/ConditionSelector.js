import React from "react";
import { Form, ListGroup } from "react-bootstrap";

class ConditionSelector extends React.Component {
  onRadioClick = (event) => {
    if (this.props.selectedCondition === event.target.value) {
      event.target.checked = false;
      this.props.onConditionSelected(undefined);
      return;
    }
    this.props.onConditionSelected(event.target.value);
  };

  render() {
    return (
      <div>
        <br />
        <ListGroup>
          <h5>Condition</h5>

          <ListGroup.Item>
            <Form.Check
              type="radio"
              name="condition"
              id={`default-radio`}
              value="New"
              onClick={this.onRadioClick}
              label={`New`}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <Form.Check
              type="radio"
              name="condition"
              value="Like New"
              id={`default-radio`}
              onClick={this.onRadioClick}
              label={`Like New`}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <Form.Check
              type="radio"
              name="condition"
              value="Good"
              id={`default-radio`}
              onClick={this.onRadioClick}
              label={`Good`}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <Form.Check
              type="radio"
              name="condition"
              value="Acceptable"
              id={`default-radio`}
              onClick={this.onRadioClick}
              label={`Acceptable`}
            />
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

export default ConditionSelector;
