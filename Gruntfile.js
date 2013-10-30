'use strict';

module.exports = function (grunt) {
  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);
  
  grunt.initConfig({
    pkgFile: 'package.json',

    files: {
      source: ['lib/**/*.js']
    },

    simplemocha: {
      options: {
        ui: 'bdd',
        reporter: 'dot'
      },
      unit: {
        src: [
          'test/mocha-common.js',
          'test/**/*.js'
        ]
      }
    },

    //JSHint options
    //http://www.jshint.com/options/
    jshint: {
      source: {
        files: {
          src: '<%= files.source %>'
        },
        options: {
          node: true,
          strict: false
        }
      },

      options: {
        quotmark: 'single',
        camelcase: true,
        strict: true,
        trailing: true,
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        globals: {}
      }
    }
  });

  grunt.registerTask('default', ['jshint', 'test']);
  grunt.registerTask('test', ['simplemocha:unit']);

};