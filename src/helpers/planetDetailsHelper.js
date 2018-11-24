import { get, map, upperFirst, join } from "lodash";
import random from "random-seed";
import {
  validateSystemDetails,
  generateSystemNameShort
} from "./systemDetailsHelper";
import { generatePortmanteau } from "./portmanteauHelper";

export const validatePlanetDetails = (taxonomy, data) => {
  const { sentinelMap, faunaMap, floraMap } = taxonomy;
  const {
    planetDetails: { weather, sentinels, fauna, flora }
  } = data;

  const validWeather = validateWeather(weather);
  const isSentinelsMapped = get(sentinelMap, sentinels, null) !== null;
  const isFaunaMapped = get(faunaMap, fauna, null) !== null;
  const isFloraMapped = get(floraMap, flora, null) !== null;

  return (
    validateSystemDetails(taxonomy, data) &&
    validWeather &&
    isSentinelsMapped &&
    isFaunaMapped &&
    isFloraMapped
  );
};

export const validateWeather = weather => weather.length > 2;

export const generatePlanetNameShort = (taxonomy, data) => {
  if (!validatePlanetDetails(taxonomy, data)) {
    throw new Error("Cannot generate name with given system and planet data");
  }

  const { weatherOptionList } = taxonomy;
  const {
    systemDetails: { distanceFromCenter },
    planetDetails: { weather }
  } = data;

  const randomGenerator = random.create(weather);
  const weatherOptionIndex = randomGenerator.range(weatherOptionList.length);

  const systemName = generateSystemNameShort(taxonomy, data);
  const weatherName = get(weatherOptionList, weatherOptionIndex, weather);
  const nameShort = generatePortmanteau(
    [systemName, weatherName],
    distanceFromCenter
  );

  return nameShort;
};

export const generatePlanetName = (taxonomy, data) => {
  if (!validatePlanetDetails(taxonomy, data)) {
    throw new Error("Cannot generate name with given system and planet data");
  }

  const { sentinelMap, faunaMap, floraMap } = taxonomy;
  const {
    systemDetails: { distanceFromCenter },
    planetDetails: { sentinels, fauna, flora, isMoon }
  } = data;

  const planetNameShort = generatePlanetNameShort(taxonomy, data);

  const planetNameOther = generatePortmanteau(
    [get(sentinelMap, sentinels), get(faunaMap, fauna), get(floraMap, flora)],
    distanceFromCenter
  );

  const moonName = isMoon ? ["M"] : [];
  const planetAndMoonName = join([planetNameOther, ...moonName], "-");

  return join(map([planetNameShort, planetAndMoonName], upperFirst), " ");
};
