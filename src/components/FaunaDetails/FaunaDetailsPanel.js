import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import { Panel } from "react-bootstrap";
import FaunaDetailsForm from "./FaunaDetailsForm";

import { curry } from "lodash";
import { getTaxonomy } from "../../taxonomies";
import { validateSystemDetails } from "../../helpers/systemDetailsHelper";
import { validatePlanetDetails } from "../../helpers/planetDetailsHelper";
import {
  validateFaunaDetails,
  generateFaunaName
} from "../../helpers/faunaDetailsHelper";

const FAUNA_DETAILS_QUERY = gql`
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
    faunaDetails @client {
      genus
      behaviour
    }
  }
`;

const updateFaunaDetails = curry((client, value) =>
  client.writeData({
    data: {
      faunaDetails: {
        __typename: "FaunaDetails",
        ...value
      }
    }
  })
);

const renderPanel = (
  client,
  { taxonomyId },
  systemDetails,
  planetDetails,
  faunaDetails
) => {
  const taxonomy = getTaxonomy(taxonomyId);
  const isValid =
    validateSystemDetails(taxonomy, systemDetails) &&
    validatePlanetDetails(taxonomy, planetDetails) &&
    validateFaunaDetails(faunaDetails);
  return (
    <Panel bsStyle={isValid ? "success" : "warning"}>
      <Panel.Heading>Fauna</Panel.Heading>
      <Panel.Body>
        <FaunaDetailsForm
          {...faunaDetails}
          update={updateFaunaDetails(client)}
        />
      </Panel.Body>
      <Panel.Footer>
        {isValid
          ? generateFaunaName(
              taxonomy,
              systemDetails,
              planetDetails,
              faunaDetails
            )
          : "Cannot generate name using supplied information"}
      </Panel.Footer>
    </Panel>
  );
};

const FaunaDetailsPanel = () => (
  <Query query={FAUNA_DETAILS_QUERY}>
    {({
      data: { preferences, systemDetails, planetDetails, faunaDetails },
      client,
      loading,
      error
    }) => {
      if (loading) {
        return "Loading...";
      } else if (error) {
        return "Error!";
      }

      return renderPanel(
        client,
        preferences,
        systemDetails,
        planetDetails,
        faunaDetails
      );
    }}
  </Query>
);

export default FaunaDetailsPanel;
