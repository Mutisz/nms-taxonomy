import React from "react";
import gql from "graphql-tag";

import CommonDetailsPanel from "../Common/CommonDetailsPanel";
import SystemDetailsForm from "./SystemDetailsForm";

import { curry } from "lodash";
import {
  validateSystemDetails,
  generateSystemName
} from "../../helpers/systemDetailsHelper";

const SYSTEM_DETAILS_QUERY = gql`
  {
    preferences @client {
      taxonomyId
    }
    systemDetails @client {
      regionName
      spectralClass
      distanceFromCenter
    }
  }
`;

const updateSystemDetails = curry((client, value) =>
  client.writeData({
    data: {
      systemDetails: {
        __typename: "SystemDetails",
        ...value
      }
    }
  })
);

const renderForm = (client, { systemDetails }) => (
  <SystemDetailsForm {...systemDetails} update={updateSystemDetails(client)} />
);

const SystemDetailsPanel = () => (
  <CommonDetailsPanel
    query={SYSTEM_DETAILS_QUERY}
    label="System"
    renderForm={renderForm}
    validateData={validateSystemDetails}
    generateName={generateSystemName}
  />
);

export default SystemDetailsPanel;
