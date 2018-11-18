import { DEFAULT_TAXONOMY_ID } from "../taxonomies";
import { DEFAULT_GENUS, DEFAULT_TEMPERAMENT } from "../taxonomies/fauna";

export const defaults = {
  preferences: {
    __typename: "Preferences",
    taxonomyId: DEFAULT_TAXONOMY_ID
  },
  systemDetails: {
    __typename: "SystemDetails",
    regionName: "",
    spectralClass: "",
    distanceFromCenter: 0
  },
  planetDetails: {
    __typename: "PlanetDetails",
    biome: "Lush",
    sentinels: 1,
    fauna: 1,
    flora: 1,
    isMoon: false
  },
  faunaDetails: {
    __typename: "FaunaDetails",
    genus: DEFAULT_GENUS,
    temperament: DEFAULT_TEMPERAMENT
  },
  floraDetails: {
    __typename: "FloraDetails",
    genus: null
  },
  waypointDetails: {
    __typename: "WaypointDetails",
    structure: null
  }
};

export const typeDefs = `
  type Preferences {
    taxonomyId: String!
  }

  type SystemDetails {
    regionName: String!
    spectralClass: String!
    distanceFromCenter: Int!
  }

  type PlanetDetails {
    biome: String!
    sentinels: Int!
    fauna: Int!
    flora: Int!
    isMoon: Boolean!
  }

  type FaunaDetails {
    genus: String
    temperament: String
  }

  type FloraDetails {
    genus: String
  }

  type WaypointDetails {
    structure: String
  }

  type Query {
    preferences: Preferences!
    systemDetails: SystemDetails!
    planetDetails: PlanetDetails!
    faunaDetails: FaunaDetails!
    floraDetails: FloraDetails!
    waypointDetails: WaypointDetails!
  }
`;

export const resolvers = {};
