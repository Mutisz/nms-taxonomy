import { get, map, upperFirst, join, indexOf } from "lodash";
import random from "random-seed";
import { validatePlanetDetails } from "./planetDetailsHelper";
import { generatePortmanteau } from "./portmanteauHelper";

import { AVAILABLE_GENUS_LIST } from "../taxonomies/fauna";

export const validateFaunaDetails = (taxonomy, data) => {
  const {
    faunaDetails: { genus, behaviour, gender }
  } = data;
  const validGenus = validateGenus(genus);
  const validBehaviour = validateDescriptor(behaviour);
  const validGender = validateDescriptor(gender);

  return (
    validatePlanetDetails(taxonomy, data) &&
    validGenus &&
    validBehaviour &&
    validGender
  );
};

export const validateGenus = genus => indexOf(AVAILABLE_GENUS_LIST, genus) >= 0;

export const validateDescriptor = descriptor => descriptor.length > 2;

export const generateFaunaName = (taxonomy, data) => {
  if (!validateFaunaDetails(taxonomy, data)) {
    throw new Error("Cannot generate name with given fauna data");
  }

  const { behaviourOptionList, genderOptionList } = taxonomy;
  const {
    systemDetails: { distanceFromCenter },
    faunaDetails: { genus, behaviour, gender }
  } = data;

  const behaviourOptionGenerator = random.create(behaviour);
  const behaviourOptionIndex = behaviourOptionGenerator.range(
    behaviourOptionList.length
  );

  const genderOptionGenerator = random.create(gender);
  const genderOptionIndex = genderOptionGenerator.range(
    genderOptionList.length
  );

  const faunaName = generatePortmanteau(
    [
      get(behaviourOptionList, behaviourOptionIndex),
      get(genderOptionList, genderOptionIndex)
    ],
    distanceFromCenter
  );

  return join(map([genus, faunaName], upperFirst), " ");
};
