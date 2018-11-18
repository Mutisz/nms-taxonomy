import { get } from "lodash";

import odinTaxonomy, { TAXONOMY_ID as ODIN_TAXONOMY_ID } from "./odinTaxonomy";
import antediluvianTaxonomy, {
  TAXONOMY_ID as ANTEDILUVIAN_TAXONOMY_ID
} from "./antediluvianTaxonomy";

export const AVAILABLE_TAXONOMIES = {
  [ODIN_TAXONOMY_ID]: odinTaxonomy,
  [ANTEDILUVIAN_TAXONOMY_ID]: antediluvianTaxonomy
};

export const DEFAULT_TAXONOMY_ID = ODIN_TAXONOMY_ID;

export const getTaxonomy = taxonomyId => {
  const taxonomy = get(AVAILABLE_TAXONOMIES, taxonomyId);
  if (!taxonomy) {
    throw new Error(`Taxonomy ${taxonomyId} is not defined`);
  }

  return taxonomy;
};
