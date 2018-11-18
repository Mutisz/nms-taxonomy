import { get } from "lodash";

import odinTaxonomy, { TAXONOMY_ID as ODIN_TAXONOMY_ID } from "./odinTaxonomy";

export const AVAILABLE_TAXONOMIES = { [ODIN_TAXONOMY_ID]: odinTaxonomy };

export const DEFAULT_TAXONOMY_ID = ODIN_TAXONOMY_ID;

export const getTaxonomy = taxonomyId => {
  const taxonomy = get(AVAILABLE_TAXONOMIES, taxonomyId);
  if (!taxonomy) {
    throw new Error(`Taxonomy ${taxonomyId} is not defined`);
  }

  return taxonomy;
};
