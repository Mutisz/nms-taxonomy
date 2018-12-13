import React from "react";
import gql from "graphql-tag";

import FaunaDetailsForm from "./FaunaDetailsForm";

import { curry } from "lodash";
import {
  validateFaunaDetails,
  generateFaunaName
} from "../../helpers/faunaDetailsHelper";
import CommonDetailsPanel from "../Common/CommonDetailsPanel";

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
      gender
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

const renderForm = (client, { faunaDetails }) => (
  <FaunaDetailsForm {...faunaDetails} update={updateFaunaDetails(client)} />
);

const FaunaDetailsPanel = () => (
  <CommonDetailsPanel
    query={FAUNA_DETAILS_QUERY}
    label="Fauna"
    renderForm={renderForm}
    validateData={validateFaunaDetails}
    generateName={generateFaunaName}
  />
);

export default FaunaDetailsPanel;
