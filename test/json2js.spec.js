/*global describe, it */
'use strict';
(function () {
  describe('preprocessors json2js', function() {
    var File, expect, json2js, logger, process, removeSpacesFrom;
    expect = require('chai').expect;
    json2js = require('../lib/json2js');
    logger = {
      create: function() {
        return {
          debug: function() {}
        };
      }
    };
    process = null;
    
    File = function(path, mtime) {
      this.path = path;
      this.originalPath = path;
      this.contentPath = path;
      this.mtime = mtime;
      return this.isUrl = false;
    };
    
    removeSpacesFrom = function(str) {
      return str.replace(/[\s\n]/g, '');
    };
    
    beforeEach(function() {
      return process = json2js(logger, '/base');
    });
    
    it('should change path to *.js', function(done) {
      var file;
      file = new File('/base/path/file.json');
      return process('', file, function(processedContent) {
        expect(file.path).to.equal('/base/path/file.json.js');
        return done();
      });
    });
  });
})();