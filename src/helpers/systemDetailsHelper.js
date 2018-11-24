import { get, map, filter, upperFirst, split, join } from "lodash";
import { generatePortmanteau } from "./portmanteauHelper";

const SPECTRAL_CLASS_REGEXP = /^([OBAFGKMLTYE]{1})([0-9]{1})([efhkmnpqsvw]{0,2})$/;

const parseSpectralClass = spectralClass => {
  if (!SPECTRAL_CLASS_REGEXP.test(spectralClass)) {
    throw new Error(`Cannot parse invalid spectral class "${spectralClass}"`);
  }

  const [, starClass, starTemperature, oddities] = SPECTRAL_CLASS_REGEXP.exec(
    spectralClass
  );

  return {
    starClass,
    starTemperature,
    oddities
  };
};

export const validateSystemDetails = (taxonomy, data) => {
  const {
    systemDetails: { regionName, spectralClass }
  } = data;
  const validRegionName = validateRegionName(regionName);
  const validSpectralClass = validateSpectralClass(taxonomy, spectralClass);

  return validRegionName && validSpectralClass;
};

export const validateRegionName = regionName => regionName.length > 2;

export const validateSpectralClass = (taxonomy, spectralClass) => {
  const { spectralClassMap, odditiesMap } = taxonomy;
  if (!SPECTRAL_CLASS_REGEXP.test(spectralClass)) {
    return false;
  }

  const { starClass, starTemperature, oddities } = parseSpectralClass(
    spectralClass
  );

  const isClassValid =
    get(spectralClassMap, [starClass, starTemperature], null) !== null;

  const validOddities = filter(
    split(oddities, ""),
    oddity => get(odditiesMap, oddity, null) !== null
  );
  const areOdditiesValid = validOddities.length === oddities.length;

  return isClassValid && areOdditiesValid;
};

export const generateSystemNameShort = (taxonomy, data) => {
  if (!validateSystemDetails(taxonomy, data)) {
    throw new Error("Cannot generate name with given system data");
  }

  const { spectralClassMap } = taxonomy;
  const {
    systemDetails: { regionName, spectralClass, distanceFromCenter }
  } = data;

  const { starClass, starTemperature } = parseSpectralClass(spectralClass);
  const className = get(spectralClassMap, [starClass, starTemperature]);
  const nameShort = generatePortmanteau(
    [regionName, className],
    distanceFromCenter
  );

  return upperFirst(nameShort);
};

export const generateSystemName = (taxonomy, data) => {
  if (!validateSystemDetails(taxonomy, data)) {
    throw new Error("Cannot generate name with given system data");
  }

  const { odditiesMap } = taxonomy;
  const {
    systemDetails: { spectralClass }
  } = data;

  const systemNameShort = generateSystemNameShort(taxonomy, data);

  const { oddities } = parseSpectralClass(spectralClass);
  const oddityAffixList = map(split(oddities, ""), oddity =>
    get(odditiesMap, oddity, "")
  );

  return join(map([systemNameShort, ...oddityAffixList], upperFirst), "-");
};
