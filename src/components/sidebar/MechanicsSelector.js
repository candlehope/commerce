import React from "react";
import { Form, ListGroup } from "react-bootstrap";

class MechanicsSelector extends React.Component {
  onRadioClick = (event) => {
    if (this.props.selectedMechanics === event.target.value) {
      event.target.checked = false;
      this.props.onMechanicsSelected(undefined);
      return;
    }
    this.props.onMechanicsSelected(event.target.value);
  };

  render() {
    return (
      <div>
        <br />
        <ListGroup>
          <h5>Mechanics</h5>

          <ListGroup.Item>
            <Form.Check
              type="radio"
              name="mechanics"
              id={`default-radio`}
              value="Cooperative"
              onClick={this.onRadioClick}
              label={`Cooperative`}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <Form.Check
              type="radio"
              name="mechanics"
              id={`default-radio`}
              value="Family"
              onClick={this.onRadioClick}
              label={`Family`}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <Form.Check
              type="radio"
              name="mechanics"
              value="Deck Building"
              id={`default-radio`}
              onClick={this.onRadioClick}
              label={`Deck Building`}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <Form.Check
              type="radio"
              name="mechanics"
              value="Route Building"
              id={`default-radio`}
              onClick={this.onRadioClick}
              label={`Route Building`}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <Form.Check
              type="radio"
              name="mechanics"
              value="Set Collection"
              id={`default-radio`}
              onClick={this.onRadioClick}
              label={`Set Collection`}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <Form.Check
              type="radio"
              name="mechanics"
              value="Worker Placement"
              id={`default-radio`}
              onClick={this.onRadioClick}
              label={`Worker Placement`}
            />
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

export default MechanicsSelector;
