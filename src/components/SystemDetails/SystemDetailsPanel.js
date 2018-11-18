import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import { Panel } from "react-bootstrap";
import SystemDetailsForm from "./SystemDetailsForm";

import { curry } from "lodash";
import { getTaxonomy } from "../../taxonomies";
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

const renderPanel = (client, { taxonomyId }, systemDetails) => {
  const taxonomy = getTaxonomy(taxonomyId);
  const isValid = validateSystemDetails(taxonomy, systemDetails);
  return (
    <Panel bsStyle={isValid ? "success" : "warning"}>
      <Panel.Heading>System</Panel.Heading>
      <Panel.Body>
        <SystemDetailsForm
          {...systemDetails}
          update={updateSystemDetails(client)}
        />
      </Panel.Body>
      <Panel.Footer>
        {isValid
          ? generateSystemName(taxonomy, systemDetails)
          : "Cannot generate name using supplied information"}
      </Panel.Footer>
    </Panel>
  );
};

const SystemDetailsPanel = () => (
  <Query query={SYSTEM_DETAILS_QUERY}>
    {({ data: { preferences, systemDetails }, client, loading, error }) => {
      if (loading) {
        return "Loading...";
      } else if (error) {
        return "Error!";
      }

      return renderPanel(client, preferences, systemDetails);
    }}
  </Query>
);

export default SystemDetailsPanel;
