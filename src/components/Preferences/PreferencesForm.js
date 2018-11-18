import React from "react";

import { Form } from "react-bootstrap";
import SelectInput from "../Input/SelectInput";

import { curry } from "lodash";
import { AVAILABLE_TAXONOMIES } from "../../taxonomies";

const handleFieldChange = curry((update, field, e) =>
  update({
    [field]: e.target.value
  })
);

const PreferencesForm = ({ update, taxonomyId }) => (
  <Form>
    <SelectInput
      controlId="taxonomyId"
      label="Taxonomy"
      options={Object.keys(AVAILABLE_TAXONOMIES)}
      value={taxonomyId}
      onChange={handleFieldChange(update, "taxonomyId")}
    />
  </Form>
);

export default PreferencesForm;
