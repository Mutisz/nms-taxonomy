import React from "react";
import { useQuery, useApolloClient } from "react-apollo-hooks";

import { Panel } from "react-bootstrap";
import { getTaxonomy } from "../../taxonomies";

const CommonDetailsPanel = ({
  query,
  label,
  renderForm,
  validateData,
  generateName
}) => {
  const client = useApolloClient();
  const { data, loading, error } = useQuery(query, { suspend: false });
  if (loading) {
    return "Loading...";
  } else if (error) {
    return "Error!";
  }

  const {
    preferences: { taxonomyId }
  } = data;
  const taxonomy = getTaxonomy(taxonomyId);
  const isValid = validateData(taxonomy, data);
  return (
    <Panel bsStyle={isValid ? "success" : "warning"}>
      <Panel.Heading>{label}</Panel.Heading>
      <Panel.Body>{renderForm(client, data)}</Panel.Body>
      <Panel.Footer>
        {isValid
          ? generateName(taxonomy, data)
          : "Cannot generate name using supplied information"}
      </Panel.Footer>
    </Panel>
  );
};

export default CommonDetailsPanel;
