// SYSTEM NAME PARTS

// Using Great Old Ones (mostly alphabetically)
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

// Same as in Odin's convention
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

// PLANET NAME PARTS

// Using location names
const weatherOptionList = [
  "R'lyeh",
  "Celephais",
  "Dylath Leen",
  "Serannian",
  "Oriab",
  "Ulthar",
  "Miskatonic",
  "Arkham",
  "Innsmouth",
  "Yuggoth"
];

// Using R'Lyehian translations
const sentinelMap = {
  1: "ehye", // None
  2: "fhtagn", // Sleeping
  3: "nafl ehyeeog", // Not many
  4: "nafl or'azath", // Not unusual
  5: "mgehye'bthnk", // Attack
  6: "mg'lloig" // Insane
};

// Using Welsh translations
const faunaMap = {
  1: "di osgoi", // Devoid
  2: "yn fras", // Sparse
  3: "cymedrol", // Moderate
  4: "uchel", // High
  5: "cyfoethog", // Rich
  6: "llawn" // Full
};

// Using Welsh translations
const floraMap = {
  1: "di osgoi", // Devoid
  2: "yn fras", // Sparse
  3: "cymedrol", // Moderate
  4: "uchel", // High
  5: "cyfoethog", // Rich
  6: "llawn" // Full
};

// FAUNA NAME PARTS

// Using Outer Gods
const behaviourOptionList = [
  "Abhoth",
  "Aletheia",
  "C'thalpa",
  "Azhorra-Tha",
  "Cxaxukluth",
  "Daoloth",
  "Darkness",
  "D’endrrah",
  "Ghroth",
  "Hydra",
  "Ialdagorth",
  "Kaajh'Kaalbh",
  "Lu Kthu",
  "Mh'ithrha",
  "Mlandoth",
  "Ngyr Korath",
  "Nyarlathotep",
  "Aiueb Gnshal",
  "Nyctelios",
  "Ny Rakath",
  "Shabbith Ka",
  "Shub Niggurath",
  "Suc'Naath",
  "Tru'nembra",
  "Tulzscha",
  "Ubbo Sathla",
  "Uvhash",
  "Xa'ligha",
  "Azathoth",
  "Xexanoth",
  "Yhoundeh",
  "Yibb Tstll",
  "Yidhra",
  "Yog Sothoth"
];

export const TAXONOMY_ID = "Antediluvian";

export default {
  spectralClassMap,
  odditiesMap,
  weatherOptionList,
  sentinelMap,
  faunaMap,
  floraMap,
  behaviourOptionList
};
