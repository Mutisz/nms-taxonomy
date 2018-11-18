import {
  BIOME_LUSH,
  BIOME_BARREN,
  BIOME_AIRLESS,
  BIOME_EXOTIC,
  BIOME_SCORCHED,
  BIOME_FROZEN,
  BIOME_TOXIC,
  BIOME_IRRADIATED
} from "./biomes";
import {
  TEMPERAMENT_ACTIVE,
  TEMPERAMENT_AMBULATORY,
  TEMPERAMENT_AGGRESIVE,
  TEMPERAMENT_AMENABLE,
  TEMPERAMENT_ANXIOUS,
  TEMPERAMENT_BOLD,
  TEMPERAMENT_CALM,
  TEMPERAMENT_CAUTIOUS,
  TEMPERAMENT_CRUEL,
  TEMPERAMENT_DANGEROUS,
  TEMPERAMENT_DEFENSIVE,
  TEMPERAMENT_DISTINCTIVE,
  TEMPERAMENT_DOCILE,
  TEMPERAMENT_ERRATIC,
  TEMPERAMENT_FEARFUL,
  TEMPERAMENT_HIBERNATOR,
  TEMPERAMENT_HOSTILE,
  TEMPERAMENT_HUNTER,
  TEMPERAMENT_MIGRATORY,
  TEMPERAMENT_PASSIVE,
  TEMPERAMENT_PREDATOR,
  TEMPERAMENT_PREY,
  TEMPERAMENT_SEDATE,
  TEMPERAMENT_SHY,
  TEMPERAMENT_SKITTISH,
  TEMPERAMENT_STALKING,
  TEMPERAMENT_SUBMISSIVE,
  TEMPERAMENT_TIMID,
  TEMPERAMENT_UNCONCERNED,
  TEMPERAMENT_UNINTELLIGENT,
  TEMPERAMENT_UNPREDICTABLE,
  TEMPERAMENT_VISCIOUS,
  TEMPERAMENT_VIOLENT,
  TEMPERAMENT_VOLATILE
} from "./fauna";

const spectralClassMap = {
  O: {
    0: "Quyagen",
    1: "Quyagen",
    2: "Ob'mbu",
    3: "Ob'mbu",
    4: "Oorn",
    5: "Oorn",
    6: "Othuum",
    7: "Othuum",
    8: "Othuyeg",
    9: "Othuyeg"
  },
  B: {
    0: "Baoht Z'uqqa Mogg",
    1: "Baoht Z'uqqa Mogg",
    2: "Basatan",
    3: "Basatan",
    4: "B'gnu Thun",
    5: "B'gnu Thun",
    6: "Bokrug",
    7: "Bokrug",
    8: "Bugg Shash",
    9: "Bugg Shash"
  },
  A: {
    0: "Abholos",
    1: "Alala",
    2: "Ammutseba",
    3: "Amon Gorloth",
    4: "Aphoom Zhah",
    5: "Arwassa",
    6: "Atlach Nacha",
    7: "Ayi'ig",
    8: "Aylith",
    9: "Axtlan"
  },
  F: {
    0: "Hastalyk",
    1: "Hastalyk",
    2: "Hastur",
    3: "Hastur",
    4: "H'chtelegoth",
    5: "H'chtelegoth",
    6: "Haiogh Yai",
    7: "Haiogh Yai",
    8: "Hnarqu",
    9: "Hnarqu"
  },
  G: {
    0: "Ghadamon",
    1: "Ghatanothoa",
    2: "Ghisguth",
    3: "Gi Hoveg",
    4: "Glaaki",
    5: "Gleeth",
    6: "Gloon",
    7: "Gobogeg",
    8: "Golothess",
    9: "Gtuhanai"
  },
  K: {
    0: "Kaalut",
    1: "Kag'Naru",
    2: "Kassogtha",
    3: "Kaunuzoth",
    4: "Khal'kru",
    5: "Klosmiebhyx",
    6: "K'nar'st",
    7: "Krang",
    8: "Kthaw'keth",
    9: "Kurpannga"
  },
  M: {
    0: "Mappo",
    1: "Mappo",
    2: "M'basui",
    3: "M'basui",
    4: "M'Nagalah",
    5: "M'Nagalah",
    6: "Mnomquah",
    7: "Mnomquah",
    8: "Mordiggian",
    9: "Mordiggian"
  },
  L: {
    0: "Lexur'iga",
    1: "Lexur'iga",
    2: "Lythalia",
    3: "Lythalia",
    4: "Xalafu",
    5: "Xalafu",
    6: "Xcthol",
    7: "Xcthol",
    8: "Xinlurgash",
    9: "Xinlurgash"
  },
  T: {
    0: "Thanaroa",
    1: "Tharapithia",
    2: "Thasaidon",
    3: "Th'rygh",
    4: "Tsathoggua",
    5: "Tulushuggua",
    6: "Tulush",
    7: "Turua",
    8: "Uitzilcapac",
    9: "Ut'Ulls Hr'Her"
  },
  Y: {
    0: "Yegg Ha",
    1: "Y'golonac",
    2: "Yhagni",
    3: "Yhashtur",
    4: "Y'lla",
    5: "Yog Sapha",
    6: "Yorith",
    7: "Ysbaddaden",
    8: "Ythogtha",
    9: "Yug Siturath"
  },
  E: {
    0: "Eihort",
    1: "Eihort",
    2: "Ei'lor",
    3: "Ei'lor",
    4: "Etepsed",
    5: "Etepsed",
    6: "Egnis",
    7: "Egnis",
    8: "Dhumin",
    9: "Dhumin"
  }
};

const odditiesMap = {
  e: "ei",
  f: "ef",
  h: "ah",
  k: "ak",
  m: "im",
  n: "in",
  p: "op",
  q: "oq",
  s: "us",
  v: "yv",
  w: "uw"
};

const biomeMap = {
  [BIOME_LUSH]: "ehyeeog",
  [BIOME_BARREN]: "ehyenah",
  [BIOME_AIRLESS]: "soth",
  [BIOME_EXOTIC]: "r'luh",
  [BIOME_SCORCHED]: "fm'latgh",
  [BIOME_FROZEN]: "mgfm'latghnah",
  [BIOME_TOXIC]: "n'ghanglui",
  [BIOME_IRRADIATED]: "zhro shuggog"
};

const sentinelMap = {
  1: "ehye",
  2: "ehyee",
  3: "yeeogng",
  4: "yeeognge",
  5: "yeeognor",
  6: "yeeogngn"
};

const faunaMap = {
  1: "ehye",
  2: "ehyee",
  3: "yeeogng",
  4: "yeeognge",
  5: "yeeognor",
  6: "yeeogngn"
};

const floraMap = {
  1: "ehye",
  2: "ehyee",
  3: "yeeogng",
  4: "yeeognge",
  5: "yeeognor",
  6: "yeeogngn"
};

const temperamentMap = {
  [TEMPERAMENT_ACTIVE]: "Abhoth",
  [TEMPERAMENT_AMBULATORY]: "Aletheia",
  [TEMPERAMENT_AGGRESIVE]: "C'thalpa",
  [TEMPERAMENT_AMENABLE]: "Azhorra-Tha",
  [TEMPERAMENT_ANXIOUS]: "Cxaxukluth",
  [TEMPERAMENT_BOLD]: "Daoloth",
  [TEMPERAMENT_CALM]: "Darkness",
  [TEMPERAMENT_CAUTIOUS]: "D’endrrah",
  [TEMPERAMENT_CRUEL]: "Ghroth",
  [TEMPERAMENT_DANGEROUS]: "Hydra",
  [TEMPERAMENT_DEFENSIVE]: "Ialdagorth",
  [TEMPERAMENT_DISTINCTIVE]: "Kaajh'Kaalbh",
  [TEMPERAMENT_DOCILE]: "Lu Kthu",
  [TEMPERAMENT_ERRATIC]: "Mh'ithrha",
  [TEMPERAMENT_FEARFUL]: "Mlandoth",
  [TEMPERAMENT_HIBERNATOR]: "Ngyr Korath",
  [TEMPERAMENT_HOSTILE]: "Nyarlathotep",
  [TEMPERAMENT_HUNTER]: "Aiueb Gnshal",
  [TEMPERAMENT_MIGRATORY]: "Nyctelios",
  [TEMPERAMENT_PASSIVE]: "Ny Rakath",
  [TEMPERAMENT_PREDATOR]: "Shabbith Ka",
  [TEMPERAMENT_PREY]: "Shub Niggurath",
  [TEMPERAMENT_SEDATE]: "Suc'Naath",
  [TEMPERAMENT_SHY]: "Tru'nembra",
  [TEMPERAMENT_SKITTISH]: "Tulzscha",
  [TEMPERAMENT_STALKING]: "Ubbo Sathla",
  [TEMPERAMENT_SUBMISSIVE]: "Uvhash",
  [TEMPERAMENT_TIMID]: "Xa'ligha",
  [TEMPERAMENT_UNCONCERNED]: "Azathoth",
  [TEMPERAMENT_UNINTELLIGENT]: "Xexanoth",
  [TEMPERAMENT_UNPREDICTABLE]: "Yhoundeh",
  [TEMPERAMENT_VISCIOUS]: "Yibb Tstll",
  [TEMPERAMENT_VIOLENT]: "Yidhra",
  [TEMPERAMENT_VOLATILE]: "Yog Sothoth"
};

export const TAXONOMY_ID = "Antediluvian";

export default {
  spectralClassMap,
  odditiesMap,
  biomeMap,
  sentinelMap,
  faunaMap,
  floraMap,
  temperamentMap
};
