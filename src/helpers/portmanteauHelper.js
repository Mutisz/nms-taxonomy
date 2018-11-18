import {
  curry,
  flow,
  identity,
  get,
  filter,
  map,
  reduce,
  flattenDepth,
  uniq,
  split,
  toLower
} from "lodash";
import isVowel from "is-vowel";
import combinations from "combinations";
import random from "random-seed";

const isFirstWord = wordIndex => wordIndex === 0;

const isMiddleWord = (words, wordIndex) =>
  !isFirstWord(wordIndex) && !isLastWord(words, wordIndex);

const isLastWord = (words, wordIndex) => wordIndex === words.length - 1;

const toCharacterList = word => split(word, "");

const filterCloseToStart = indexList => filter(indexList, index => index >= 2);

const filterCloseToEnd = curry((word, indexList) =>
  filter(indexList, index => index < word.length - 2)
);

const appendIfVowel = (vowelList, character, index) => [
  ...vowelList,
  ...(isVowel(character) ? [index] : [])
];

const findVowelList = characterList => reduce(characterList, appendIfVowel, []);

const findPossibleBreakpointLists = flow(
  toCharacterList,
  findVowelList
);

const findValidBreakpointLists = (word, wordIndex, wordList) =>
  flow(
    findPossibleBreakpointLists,
    isFirstWord(wordIndex) ? filterCloseToStart : identity,
    isLastWord(wordList, wordIndex) ? filterCloseToEnd(word) : identity
  )(word);

const generateWordPartListForMiddleWord = flow(
  combinations,
  combinationList =>
    filter(combinationList, combination => combination.length <= 2),
  filteredCombinationList =>
    map(filteredCombinationList, combination => {
      const combinationStart = get(combination, 0, 0);
      return [combinationStart, get(combination, 1, combinationStart)];
    })
);

const generateWordPartLists = breakpointLists =>
  map(breakpointLists, (breakpointList, breakpointListIndex) => {
    if (isFirstWord(breakpointListIndex)) {
      return map(breakpointList, breakpoint => [0, breakpoint]);
    } else if (isMiddleWord(breakpointLists, breakpointListIndex)) {
      return generateWordPartListForMiddleWord(breakpointList);
    } else {
      return map(breakpointList, breakpoint => [breakpoint, Infinity]);
    }
  });

const generateCombinationListNested = (
  [list, ...otherLists],
  combination = []
) =>
  list
    ? map(list, breakpoint =>
        generateCombinationListNested(otherLists, [...combination, breakpoint])
      )
    : combination;

const generateCombinationList = lists => {
  const combinationListNested = generateCombinationListNested(lists);
  return flattenDepth(combinationListNested, lists.length - 1);
};

const appendToPortmanteau = curry(
  (
    wordList,
    portmanteau,
    [wordPartStartIndex, wordPartEndIndex],
    wordIndex
  ) => {
    const word = wordList[wordIndex];
    const wordPart = word.substring(wordPartStartIndex, wordPartEndIndex);

    return `${portmanteau}${wordPart}`;
  }
);

const appendTrimmedWord = (wordList, word) => [
  ...wordList,
  ...split(word, /\s/g)
];

export const generatePortmanteauList = wordList => {
  const wordListPrepared = map(
    reduce(wordList, appendTrimmedWord, []),
    toLower
  );

  const breakpointLists = map(
    map(wordListPrepared, findValidBreakpointLists),
    breakpointList => (breakpointList.length === 0 ? [1] : breakpointList)
  );

  const wordPartLists = generateWordPartLists(breakpointLists);
  const wordPartCombinationList = generateCombinationList(wordPartLists);
  const portmanteauList = map(wordPartCombinationList, wordPartCombination =>
    reduce(wordPartCombination, appendToPortmanteau(wordListPrepared), "")
  );

  return uniq(portmanteauList);
};

export const generatePortmanteau = (wordList, seed = null) => {
  const randomGenerator = seed !== null ? random.create(seed) : random.create();
  const portmanteauList = generatePortmanteauList(wordList);
  const portmanteauIndex = randomGenerator.range(portmanteauList.length);

  return portmanteauList[portmanteauIndex];
};
