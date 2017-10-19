'use strict';var _no_disabled_tests;








function _load_no_disabled_tests() {return _no_disabled_tests = _interopRequireDefault(require('./rules/no_disabled_tests'));}var _no_focused_tests;
function _load_no_focused_tests() {return _no_focused_tests = _interopRequireDefault(require('./rules/no_focused_tests'));}var _no_identical_title;
function _load_no_identical_title() {return _no_identical_title = _interopRequireDefault(require('./rules/no_identical_title'));}var _valid_expect;
function _load_valid_expect() {return _valid_expect = _interopRequireDefault(require('./rules/valid_expect'));}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
                                                                                                                                                                                                              * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                                                                                                                                                                                              *
                                                                                                                                                                                                              * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                              * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                              *
                                                                                                                                                                                                              * 
                                                                                                                                                                                                              */module.exports = { configs: { recommended: { rules: { 'jest/no-disabled-tests': 'warn', 'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/valid-expect': 'error' } } },



  environments: {
    globals: {
      globals: {
        afterAll: false,
        afterEach: false,
        beforeAll: false,
        beforeEach: false,
        describe: false,
        expect: false,
        fit: false,
        it: false,
        jasmine: false,
        jest: false,
        pending: false,
        pit: false,
        require: false,
        test: false,
        xdescribe: false,
        xit: false,
        xtest: false } } },



  rules: {
    'no-disabled-tests': (_no_disabled_tests || _load_no_disabled_tests()).default,
    'no-focused-tests': (_no_focused_tests || _load_no_focused_tests()).default,
    'no-identical-title': (_no_identical_title || _load_no_identical_title()).default,
    'valid-expect': (_valid_expect || _load_valid_expect()).default } };