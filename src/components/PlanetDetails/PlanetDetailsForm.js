import React, { Component } from "react";

import {
  Col,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Checkbox
} from "react-bootstrap";
import SelectInput from "../Input/SelectInput";

import { curry } from "lodash";

const handleFieldChange = curry((update, field, e) =>
  update({
    [field]: e.target.value
  })
);

const handleCheckboxChange = curry((update, field, e) =>
  update({
    [field]: e.target.checked
  })
);

class PlanetDetailsForm extends Component {
  render() {
    const { update, weather, sentinels, fauna, flora, isMoon } = this.props;
    const levels = [1, 2, 3, 4, 5, 6];
    return (
      <Form horizontal>
        <FormGroup controlId="behaviour">
          <Col componentClass={ControlLabel} xs={4}>
            Weather
          </Col>
          <Col xs={8}>
            <FormControl
              type="text"
              value={weather}
              placeholder="ex. Stormy"
              onChange={handleFieldChange(update, "weather")}
            />
          </Col>
        </FormGroup>
        <SelectInput
          controlId="sentinels"
          label="Sentinels"
          options={levels}
          value={sentinels}
          onChange={handleFieldChange(update, "sentinels")}
        />
        <SelectInput
          controlId="fauna"
          label="Fauna"
          options={levels}
          value={fauna}
          onChange={handleFieldChange(update, "fauna")}
        />
        <SelectInput
          controlId="flora"
          label="Flora"
          options={levels}
          value={flora}
          onChange={handleFieldChange(update, "flora")}
        />
        <FormGroup controlId="isMoon">
          <Col componentClass={ControlLabel} xs={4}>
            Moon
          </Col>
          <Col xs={8}>
            <Checkbox
              checked={isMoon}
              onChange={handleCheckboxChange(update, "isMoon")}
            />
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default PlanetDetailsForm;
