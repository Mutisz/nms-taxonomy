import { get, map, upperFirst, join, indexOf } from "lodash";
import random from "random-seed";
import {
  validatePlanetDetails,
  generatePlanetNameShort
} from "./planetDetailsHelper";
import { generatePortmanteau } from "./portmanteauHelper";

import { AVAILABLE_GENUS_LIST } from "../taxonomies/fauna";

export const validateFaunaDetails = (taxonomy, data) => {
  const {
    faunaDetails: { genus, behaviour }
  } = data;
  const validGenus = validateGenus(genus);
  const validBehaviour = validateBehaviour(behaviour);

  return validatePlanetDetails(taxonomy, data) && validGenus && validBehaviour;
};

export const validateGenus = genus => indexOf(AVAILABLE_GENUS_LIST, genus) >= 0;

export const validateBehaviour = behaviour => behaviour.length > 2;

export const generateFaunaName = (taxonomy, data) => {
  if (!validateFaunaDetails(taxonomy, data)) {
    throw new Error("Cannot generate name with given fauna data");
  }

  const { behaviourOptionList } = taxonomy;
  const {
    systemDetails: { distanceFromCenter },
    faunaDetails: { behaviour, genus }
  } = data;

  const planetName = generatePlanetNameShort(taxonomy, data);

  const randomGenerator = random.create(behaviour);
  const behaviourOptionIndex = randomGenerator.range(
    behaviourOptionList.length
  );

  const behaviourName = generatePortmanteau(
    [genus, get(behaviourOptionList, behaviourOptionIndex)],
    distanceFromCenter
  );

  return join(map([planetName, behaviourName], upperFirst), " ");
};
