import React from "react";

import {
  Col,
  FormGroup,
  FormControl,
  ControlLabel,
  OverlayTrigger,
  InputGroup,
  Button,
  Glyphicon
} from "react-bootstrap";

import { map } from "lodash";

const renderFormControl = (options, value, onChange) => (
  <FormControl componentClass="select" value={value} onChange={onChange}>
    {map(options, option => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </FormControl>
);

const renderFormControlWithOverlay = (options, value, onChange, tooltip) => (
  <InputGroup>
    <InputGroup.Button>
      <OverlayTrigger
        rootClose
        trigger="click"
        placement="bottom"
        overlay={tooltip}
      >
        <Button aria-label="Help">
          <Glyphicon glyph="question-sign" />
        </Button>
      </OverlayTrigger>
    </InputGroup.Button>
    {renderFormControl(options, value, onChange)}
  </InputGroup>
);

const SelectInput = ({
  controlId,
  label,
  options,
  value,
  tooltip,
  onChange
}) => (
  <FormGroup controlId={controlId}>
    <Col componentClass={ControlLabel} xs={4}>
      {label}
    </Col>
    <Col xs={8}>
      {tooltip
        ? renderFormControlWithOverlay(options, value, onChange, tooltip)
        : renderFormControl(options, value, onChange)}
    </Col>
  </FormGroup>
);

export default SelectInput;
