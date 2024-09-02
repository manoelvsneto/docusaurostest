"use strict";
/* ============================================================================
 * Copyright (c) Palo Alto Networks
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCodeSampleSourceFromLanguage =
  exports.mergeArraysbyLanguage =
  exports.mergeCodeSampleLanguage =
    void 0;
const find_1 = __importDefault(require("lodash/find"));
const isArray_1 = __importDefault(require("lodash/isArray"));
const mergeWith_1 = __importDefault(require("lodash/mergeWith"));
const unionBy_1 = __importDefault(require("lodash/unionBy"));
function mergeCodeSampleLanguage(languages, codeSamples) {
  return languages.map((language) => {
    const languageCodeSamples = codeSamples.filter(
      ({ lang }) => lang === language.codeSampleLanguage
    );
    if (languageCodeSamples.length) {
      const samples = languageCodeSamples.map(({ lang }) => lang);
      const samplesLabels = languageCodeSamples.map(
        ({ label, lang }) => label || lang
      );
      const samplesSources = languageCodeSamples.map(({ source }) => source);
      return {
        ...language,
        sample: samples[0],
        samples,
        samplesSources,
        samplesLabels,
      };
    }
    return language;
  });
}
exports.mergeCodeSampleLanguage = mergeCodeSampleLanguage;
const mergeArraysbyLanguage = (arr1, arr2) => {
  const mergedArray = (0, unionBy_1.default)(arr1, arr2, "language");
  return mergedArray.map((item) => {
    const matchingItems = [
      (0, find_1.default)(arr1, ["language", item["language"]]),
      (0, find_1.default)(arr2, ["language", item["language"]]),
    ];
    return (0, mergeWith_1.default)({}, ...matchingItems, (objValue) => {
      if ((0, isArray_1.default)(objValue)) {
        return objValue;
      }
      return undefined;
    });
  });
};
exports.mergeArraysbyLanguage = mergeArraysbyLanguage;
function getCodeSampleSourceFromLanguage(language) {
  if (
    language &&
    language.sample &&
    language.samples &&
    language.samplesSources
  ) {
    const sampleIndex = language.samples.findIndex(
      (smp) => smp === language.sample
    );
    return language.samplesSources[sampleIndex];
  }
  return "";
}
exports.getCodeSampleSourceFromLanguage = getCodeSampleSourceFromLanguage;
