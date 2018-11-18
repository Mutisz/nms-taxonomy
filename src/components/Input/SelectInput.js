import React from "react";

import { Col, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import { map } from "lodash";

const SelectInput = ({ controlId, label, options, value, onChange }) => (
  <FormGroup controlId={controlId}>
    <Col componentClass={ControlLabel} xs={4}>
      {label}
    </Col>
    <Col xs={8}>
      <FormControl componentClass="select" value={value} onChange={onChange}>
        {map(options, option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </FormControl>
    </Col>
  </FormGroup>
);

export default SelectInput;
