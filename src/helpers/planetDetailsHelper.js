import { get, map, upperFirst, join } from "lodash";
import { generateSystemNameShort } from "./systemDetailsHelper";
import { generatePortmanteau } from "./portmanteauHelper";

export const validatePlanetDetails = (
  { biomeMap, sentinelMap, faunaMap, floraMap },
  { biome, sentinels, fauna, flora }
) => {
  const isBiomeMapped = get(biomeMap, biome, null) !== null;
  const isSentinelsMapped = get(sentinelMap, sentinels, null) !== null;
  const isFaunaMapped = get(faunaMap, fauna, null) !== null;
  const isFloraMapped = get(floraMap, flora, null) !== null;

  return isBiomeMapped && isSentinelsMapped && isFaunaMapped && isFloraMapped;
};

export const generatePlanetNameShort = (taxonomy, systemDetails, { biome }) => {
  const { biomeMap } = taxonomy;
  const { distanceFromCenter } = systemDetails;

  const systemName = generateSystemNameShort(taxonomy, systemDetails);
  const biomeName = get(biomeMap, biome);
  const nameShort = generatePortmanteau(
    [systemName, biomeName],
    distanceFromCenter
  );

  return nameShort;
};

export const generatePlanetName = (taxonomy, systemDetails, planetDetails) => {
  const { sentinelMap, faunaMap, floraMap } = taxonomy;
  const { distanceFromCenter } = systemDetails;
  const { sentinels, fauna, flora, isMoon } = planetDetails;

  const nameShort = generatePlanetNameShort(
    taxonomy,
    systemDetails,
    planetDetails
  );

  const planetNameOtherPart = generatePortmanteau(
    [get(sentinelMap, sentinels), get(faunaMap, fauna), get(floraMap, flora)],
    distanceFromCenter
  );

  const isMoonNamePart = isMoon ? ["M"] : [];

  return join(
    map([nameShort, planetNameOtherPart, ...isMoonNamePart], upperFirst),
    "-"
  );
};
