'use strict';

var chai = require('chai');
global.expect = chai.expect
global.sinon = require('sinon');
chai.use(require('dirty-chai'));
chai.use(require('sinon-chai'));
global.assert = chai.assert;
