import React from "react";

import {
  Col,
  Form,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
import SelectInput from "../Input/SelectInput";

import { curry } from "lodash";
import { AVAILABLE_GENUS_LIST } from "../../taxonomies/fauna";

const handleFieldChange = curry((update, field, e) =>
  update({
    [field]: e.target.value
  })
);

const FaunaDetailsForm = ({ update, genus, behaviour }) => (
  <Form horizontal>
    <SelectInput
      controlId="genus"
      label="Genus"
      options={AVAILABLE_GENUS_LIST}
      value={genus}
      onChange={handleFieldChange(update, "genus")}
    />
    <FormGroup controlId="behaviour">
      <Col componentClass={ControlLabel} xs={4}>
        Behaviour
      </Col>
      <Col xs={8}>
        <FormControl
          type="text"
          value={behaviour}
          placeholder="ex. Indifferent"
          onChange={handleFieldChange(update, "behaviour")}
        />
      </Col>
    </FormGroup>
  </Form>
);

export default FaunaDetailsForm;
