import React from "react";

import { Form } from "react-bootstrap";
import SelectInput from "../Input/SelectInput";

import { curry } from "lodash";
import {
  AVAILABLE_GENUS_LIST,
  AVAILABLE_TEMPERAMENT_LIST
} from "../../taxonomies/fauna";

const handleFieldChange = curry((update, field, e) =>
  update({
    [field]: e.target.value
  })
);

const FaunaDetailsForm = ({ update, genus, temperament }) => (
  <Form horizontal>
    <SelectInput
      controlId="genus"
      label="Genus"
      options={AVAILABLE_GENUS_LIST}
      value={genus}
      onChange={handleFieldChange(update, "genus")}
    />
    <SelectInput
      controlId="temperament"
      label="Temperament"
      options={AVAILABLE_TEMPERAMENT_LIST}
      value={temperament}
      onChange={handleFieldChange(update, "temperament")}
    />
  </Form>
);

export default FaunaDetailsForm;
