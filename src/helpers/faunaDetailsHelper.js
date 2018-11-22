import { get, map, upperFirst, join, indexOf } from "lodash";
import random from "random-seed";
import { generatePlanetNameShort } from "./planetDetailsHelper";

import { AVAILABLE_GENUS_LIST } from "../taxonomies/fauna";

export const validateFaunaDetails = ({ genus, behaviour }) => {
  const validGenus = validateGenus(genus);
  const validBehaviour = validateBehaviour(behaviour);

  return validGenus && validBehaviour;
};

export const validateGenus = genus => indexOf(AVAILABLE_GENUS_LIST, genus) >= 0;

export const validateBehaviour = behaviour => behaviour.length > 2;

export const generateFaunaName = (
  taxonomy,
  systemDetails,
  planetDetails,
  { genus, behaviour }
) => {
  const { behaviourOptionList } = taxonomy;

  const planetName = generatePlanetNameShort(
    taxonomy,
    systemDetails,
    planetDetails
  );

  const randomGenerator = random.create(behaviour);
  const behaviourOptionIndex = randomGenerator.range(
    behaviourOptionList.length
  );

  const behaviourName = get(behaviourOptionList, behaviourOptionIndex);

  return join(map([planetName, genus, behaviourName], upperFirst), "-");
};
