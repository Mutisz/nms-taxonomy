import { get, map, upperFirst, join } from "lodash";
import { generatePlanetNameShort } from "./planetDetailsHelper";
import { generatePortmanteau } from "./portmanteauHelper";

import { AVAILABLE_GENUS_LIST } from "../taxonomies/fauna";

export const validateFaunaDetails = (
  { temperamentMap },
  { genus, temperament }
) => {
  const isGenusAvailable = get(AVAILABLE_GENUS_LIST, genus, null) !== null;
  const isTemperamentMapped = get(temperamentMap, temperament, null) !== null;

  return isGenusAvailable && isTemperamentMapped;
};

export const generateFaunaName = (
  taxonomy,
  systemDetails,
  planetDetails,
  { genus, temperament }
) => {
  const { temperamentMap } = taxonomy;
  const { distanceFromCenter } = systemDetails;

  const planetName = generatePlanetNameShort(
    taxonomy,
    systemDetails,
    planetDetails
  );

  const planetAndGenusName = generatePortmanteau(
    [planetName, genus],
    distanceFromCenter
  );

  const temperamentNamePart = get(temperamentMap, temperament);

  return join(map([planetAndGenusName, temperamentNamePart], upperFirst), "-");
};
