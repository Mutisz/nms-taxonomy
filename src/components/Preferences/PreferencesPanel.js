import React from "react";
import gql from "graphql-tag";
import { curry } from "lodash";

import { Query } from "react-apollo";
import { Panel } from "react-bootstrap";
import PreferencesForm from "./PreferencesForm";

const PREFERENCES_QUERY = gql`
  {
    preferences @client {
      taxonomyId
    }
  }
`;

const updatePreferences = curry((client, value) =>
  client.writeData({
    data: {
      preferences: {
        __typename: "Preferences",
        ...value
      }
    }
  })
);

const renderPanel = (client, { taxonomyId }) => (
  <Panel bsStyle="primary">
    <Panel.Heading>Preferences</Panel.Heading>
    <Panel.Body>
      <PreferencesForm
        taxonomyId={taxonomyId}
        update={updatePreferences(client)}
      />
    </Panel.Body>
  </Panel>
);

const PreferencesPanel = () => (
  <Query query={PREFERENCES_QUERY}>
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

export default PreferencesPanel;
