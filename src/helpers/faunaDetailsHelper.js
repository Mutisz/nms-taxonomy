import { get, map, upperFirst, join, indexOf } from "lodash";
import { generatePlanetNameShort } from "./planetDetailsHelper";

import { AVAILABLE_GENUS_LIST } from "../taxonomies/fauna";

export const validateFaunaDetails = (
  { temperamentMap },
  { genus, temperament }
) => {
  const isGenusAvailable = indexOf(AVAILABLE_GENUS_LIST, genus) >= 0;
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

  const planetName = generatePlanetNameShort(
    taxonomy,
    systemDetails,
    planetDetails
  );

  const temperamentName = get(temperamentMap, temperament);

  return join(map([planetName, genus, temperamentName], upperFirst), "-");
};
