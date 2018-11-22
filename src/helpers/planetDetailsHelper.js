import { get, map, upperFirst, join } from "lodash";
import random from "random-seed";
import { generateSystemNameShort } from "./systemDetailsHelper";
import { generatePortmanteau } from "./portmanteauHelper";

export const validatePlanetDetails = (
  { sentinelMap, faunaMap, floraMap },
  { weather, sentinels, fauna, flora }
) => {
  const validWeather = validateWeather(weather);
  const isSentinelsMapped = get(sentinelMap, sentinels, null) !== null;
  const isFaunaMapped = get(faunaMap, fauna, null) !== null;
  const isFloraMapped = get(floraMap, flora, null) !== null;

  return validWeather && isSentinelsMapped && isFaunaMapped && isFloraMapped;
};

export const validateWeather = weather => weather.length > 2;

export const generatePlanetNameShort = (
  taxonomy,
  systemDetails,
  { weather }
) => {
  const { weatherOptionList } = taxonomy;
  const { distanceFromCenter } = systemDetails;

  const randomGenerator = random.create(weather);
  const weatherOptionIndex = randomGenerator.range(weatherOptionList.length);

  const systemName = generateSystemNameShort(taxonomy, systemDetails);
  const weatherName = get(weatherOptionList, weatherOptionIndex);
  const nameShort = generatePortmanteau(
    [systemName, weatherName],
    distanceFromCenter
  );

  return nameShort;
};

export const generatePlanetName = (taxonomy, systemDetails, planetDetails) => {
  const { sentinelMap, faunaMap, floraMap } = taxonomy;
  const { distanceFromCenter } = systemDetails;
  const { sentinels, fauna, flora, isMoon } = planetDetails;

  const planetNameShort = generatePlanetNameShort(
    taxonomy,
    systemDetails,
    planetDetails
  );

  const planetNameOther = generatePortmanteau(
    [get(sentinelMap, sentinels), get(faunaMap, fauna), get(floraMap, flora)],
    distanceFromCenter
  );

  const moonName = isMoon ? ["M"] : [];
  const planetAndMoonName = join([planetNameOther, ...moonName], "-");

  return join(map([planetNameShort, planetAndMoonName], upperFirst), " ");
};
