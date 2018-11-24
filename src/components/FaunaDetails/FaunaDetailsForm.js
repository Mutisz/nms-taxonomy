import React from "react";

import {
  Col,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Popover
} from "react-bootstrap";
import SelectInput from "../Input/SelectInput";

import { curry, map, get } from "lodash";

import {
  AVAILABLE_GENUS_LIST,
  AVAILABLE_GENUS_DESCRIPTION_LIST
} from "../../taxonomies/fauna";

const genusPopover = (
  <Popover id="generaDescription" title="Genera descriptions">
    <ul>
      {map(AVAILABLE_GENUS_LIST, genus => {
        const description = get(AVAILABLE_GENUS_DESCRIPTION_LIST, genus, null);
        const label = genus + (description ? ` - ${description}` : "");
        const link = `https://nomanssky.gamepedia.com/${genus}`;
        return (
          <li key={genus}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  </Popover>
);

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
      tooltip={genusPopover}
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
