import React, { Component } from "react";

import {
  Col,
  Form,
  FormGroup,
  FormControl,
  InputGroup,
  ControlLabel
} from "react-bootstrap";

import { curry } from "lodash";

const handleFieldChange = curry((update, field, e) =>
  update({
    [field]: e.target.value
  })
);

class SystemDetailsForm extends Component {
  render() {
    const {
      update,
      regionName,
      spectralClass,
      distanceFromCenter
    } = this.props;
    return (
      <Form horizontal>
        <FormGroup controlId="regionName">
          <Col componentClass={ControlLabel} xs={3}>
            Region name
          </Col>
          <Col xs={9}>
            <FormControl
              type="text"
              value={regionName}
              placeholder="ex. Toswati Instability"
              onChange={handleFieldChange(update, "regionName")}
            />
          </Col>
        </FormGroup>
        <FormGroup controlId="spectralClass">
          <Col componentClass={ControlLabel} xs={3}>
            Spectral class
          </Col>
          <Col xs={9}>
            <FormControl
              type="text"
              value={spectralClass}
              placeholder="ex. F5p"
              onChange={handleFieldChange(update, "spectralClass")}
            />
          </Col>
        </FormGroup>
        <FormGroup controlId="distanceFromCenter">
          <Col componentClass={ControlLabel} xs={3}>
            Distance
          </Col>
          <Col xs={9}>
            <InputGroup>
              <InputGroup.Addon>ly</InputGroup.Addon>
              <FormControl
                type="text"
                value={distanceFromCenter}
                onChange={handleFieldChange(update, "distanceFromCenter")}
              />
            </InputGroup>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default SystemDetailsForm;
