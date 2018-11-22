import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import { Panel } from "react-bootstrap";
import PlanetDetailsForm from "./PlanetDetailsForm";

import { curry } from "lodash";
import { getTaxonomy } from "../../taxonomies";
import { validateSystemDetails } from "../../helpers/systemDetailsHelper";
import {
  validatePlanetDetails,
  generatePlanetName
} from "../../helpers/planetDetailsHelper";

const PLANET_DETAILS_QUERY = gql`
  {
    preferences @client {
      taxonomyId
    }
    systemDetails @client {
      regionName
      spectralClass
      distanceFromCenter
    }
    planetDetails @client {
      weather
      sentinels
      fauna
      flora
      isMoon
    }
  }
`;

const updatePlanetDetails = curry((client, value) =>
  client.writeData({
    data: {
      planetDetails: {
        __typename: "SystemDetails",
        ...value
      }
    }
  })
);

const renderPanel = (client, { taxonomyId }, systemDetails, planetDetails) => {
  const taxonomy = getTaxonomy(taxonomyId);
  const isValid =
    validateSystemDetails(taxonomy, systemDetails) &&
    validatePlanetDetails(taxonomy, planetDetails);
  return (
    <Panel bsStyle={isValid ? "success" : "warning"}>
      <Panel.Heading>Planet</Panel.Heading>
      <Panel.Body>
        <PlanetDetailsForm
          {...planetDetails}
          update={updatePlanetDetails(client)}
        />
      </Panel.Body>
      <Panel.Footer>
        {isValid
          ? generatePlanetName(taxonomy, systemDetails, planetDetails)
          : "Cannot generate name using supplied information"}
      </Panel.Footer>
    </Panel>
  );
};

const PlanetDetailsPanel = () => (
  <Query query={PLANET_DETAILS_QUERY}>
    {({
      data: { preferences, systemDetails, planetDetails },
      client,
      loading,
      error
    }) => {
      if (loading) {
        return "Loading...";
      } else if (error) {
        return "Error!";
      }

      return renderPanel(client, preferences, systemDetails, planetDetails);
    }}
  </Query>
);

export default PlanetDetailsPanel;
