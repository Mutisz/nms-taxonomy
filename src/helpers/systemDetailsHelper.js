import { get, map, filter, upperFirst, replace, split, join } from "lodash";
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

export const validateSystemDetails = (
  taxonomy,
  { regionName, spectralClass }
) => {
  const validRegionName = validateRegionName(regionName);
  const validSpectralClass = validateSpectralClass(taxonomy, spectralClass);

  return validRegionName && validSpectralClass;
};

export const validateRegionName = regionName => regionName.length > 2;

export const validateSpectralClass = (
  { spectralClassMap, odditiesMap },
  spectralClass
) => {
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

export const generateSystemNameShort = (
  { spectralClassMap },
  { regionName, spectralClass, distanceFromCenter }
) => {
  const { starClass, starTemperature } = parseSpectralClass(spectralClass);

  const trimmedRegionName = replace(regionName, /\s/g, "");
  const classMappedTo = get(spectralClassMap, [starClass, starTemperature]);
  const nameShort = generatePortmanteau(
    [trimmedRegionName, classMappedTo],
    distanceFromCenter
  );

  return upperFirst(nameShort);
};

export const generateSystemName = (taxonomy, systemDetails) => {
  const { odditiesMap } = taxonomy;
  const { spectralClass } = systemDetails;
  const { oddities } = parseSpectralClass(spectralClass);

  const nameShort = generateSystemNameShort(taxonomy, systemDetails);
  const oddityNameParts = map(split(oddities, ""), oddity =>
    get(odditiesMap, oddity)
  );

  return join(map([nameShort, ...oddityNameParts], upperFirst), "-");
};
