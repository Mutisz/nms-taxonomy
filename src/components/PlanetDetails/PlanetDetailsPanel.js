import React from "react";
import gql from "graphql-tag";

import PlanetDetailsForm from "./PlanetDetailsForm";

import { curry } from "lodash";
import {
  generatePlanetName,
  validatePlanetDetails
} from "../../helpers/planetDetailsHelper";
import CommonDetailsPanel from "../Common/CommonDetailsPanel";

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

const renderForm = (client, { planetDetails }) => (
  <PlanetDetailsForm {...planetDetails} update={updatePlanetDetails(client)} />
);

const PlanetDetailsPanel = () => (
  <CommonDetailsPanel
    query={PLANET_DETAILS_QUERY}
    label="Planet"
    renderForm={renderForm}
    validateData={validatePlanetDetails}
    generateName={generatePlanetName}
  />
);

export default PlanetDetailsPanel;
