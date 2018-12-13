// SYSTEM NAME PARTS

const spectralClassMap = {
  O: {
    0: "horus",
    1: "horus",
    2: "vishnu",
    3: "vishnu",
    4: "hera",
    5: "hera",
    6: "lir",
    7: "lir",
    8: "njord",
    9: "njord"
  },
  B: {
    0: "hathor",
    1: "hathor",
    2: "shiva",
    3: "shiva",
    4: "athena",
    5: "athena",
    6: "boann",
    7: "boann",
    8: "frigg",
    9: "frigg"
  },
  A: {
    0: "ptah",
    1: "ptah",
    2: "saraswati",
    3: "saraswati",
    4: "apollo",
    5: "apollo",
    6: "epona",
    7: "epona",
    8: "heimdall",
    9: "heimdall"
  },
  F: {
    0: "Khons",
    1: "Khons",
    2: "Krishna",
    3: "Krishna",
    4: "Hermes",
    5: "Hermes",
    6: "Cernunnos",
    7: "Cernunnos",
    8: "Baldur",
    9: "Baldur"
  },
  G: {
    0: "Ra",
    1: "Ra",
    2: "Ganesha",
    3: "Ganesha",
    4: "Aphrodite",
    5: "Aphrodite",
    6: "Lugh",
    7: "Lugh",
    8: "Mimir",
    9: "Mimir"
  },
  K: {
    0: "Bast",
    1: "Bast",
    2: "Agni",
    3: "Agni",
    4: "Hephaestus",
    5: "Hephaestus",
    6: "Teutates",
    7: "Teutates",
    8: "Tyr",
    9: "Tyr"
  },
  M: {
    0: "Sekhmet",
    1: "Sekhmet",
    2: "Durga",
    3: "Durga",
    4: "Hestia",
    5: "Hestia",
    6: "Aodh",
    7: "Aodh",
    8: "Thor",
    9: "Thor"
  },
  L: {
    0: "Thoth",
    1: "Thoth",
    2: "Nakul",
    3: "Nakul",
    4: "Ares",
    5: "Ares",
    6: "Morrigan",
    7: "Morrigan",
    8: "Sigyn",
    9: "Sigyn"
  },
  T: {
    0: "Amon",
    1: "Amon",
    2: "Parvati",
    3: "Parvati",
    4: "Poseidon",
    5: "Poseidon",
    6: "Druantia",
    7: "Druantia",
    8: "Nerthus",
    9: "Nerthus"
  },
  Y: {
    0: "Seth",
    1: "Seth",
    2: "Kali",
    3: "Kali",
    4: "Zeus",
    5: "Zeus",
    6: "Anu",
    7: "Anu",
    8: "Audhumla",
    9: "Audhumla"
  },
  E: {
    0: "Isis",
    1: "Isis",
    2: "Matangi",
    3: "Matangi",
    4: "Demeter",
    5: "Demeter",
    6: "Ce aehd",
    7: "Ce aehd",
    8: "Sif",
    9: "Sif"
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

// PLANET NAME PARTS

const weatherOptionList = [
  "himnariki",
  "proskadur",
  "yfirgefinn",
  "framandi",
  "brenndu",
  "fryst",
  "eiturefni",
  "geislad"
];

const sentinelMap = {
  1: "hlutlaus",
  2: "slaka",
  3: "stadall",
  4: "ahugavert",
  5: "aedi",
  6: "arasargjarn"
};

const faunaMap = {
  1: "fjarverandi",
  2: "oalgengt",
  3: "venjulegt",
  4: "tid",
  5: "nog",
  6: "fullt"
};

const floraMap = {
  1: "engin",
  2: "venjulegt",
  3: "milli",
  4: "naegur",
  5: "orlatur",
  6: "rikur"
};

// FAUNA NAME PARTS

const behaviourOptionList = [
  "ull",
  "freyja",
  "mani",
  "saga",
  "mimir",
  "meili",
  "bil",
  "sol",
  "fulla",
  "hretha",
  "eir",
  "magni",
  "irpa",
  "lofn",
  "narvi",
  "idun",
  "zisa",
  "odin",
  "rig",
  "day",
  "vor",
  "var",
  "saxnot",
  "hod",
  "freyr",
  "thor",
  "od",
  "balder",
  "syn",
  "dellingr",
  "loki",
  "hel",
  "rindr",
  "aegir"
];

const genderOptionList = [
  "ull",
  "freyja",
  "mani",
  "saga",
  "mimir",
  "meili",
  "bil",
  "sol",
  "fulla",
  "hretha",
  "eir",
  "magni",
  "irpa",
  "lofn",
  "narvi",
  "idun",
  "zisa",
  "odin",
  "rig",
  "day",
  "vor",
  "var",
  "saxnot",
  "hod",
  "freyr",
  "thor",
  "od",
  "balder",
  "syn",
  "dellingr",
  "loki",
  "hel",
  "rindr",
  "aegir"
];

export const TAXONOMY_ID = "Odin";

export default {
  spectralClassMap,
  odditiesMap,
  weatherOptionList,
  sentinelMap,
  faunaMap,
  floraMap,
  behaviourOptionList,
  genderOptionList
};
