// Generated on 2013-10-23 using generator-angular 0.5.1
'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    watch: {
      livereload: {
        options: {
          livereload: '<%= connect.livereload.options.livereload %>'
        },
        files: [
          'index.html',
          'app/{,*/}*.{html,js,css}',
          'lib/{,*/}*.js',
          'css/{,*/}*.css',
          'images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },
    connect: {
      options: {
        port: 9001,
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: '.',
          livereload: 35728
        }
      }
    }
  });

  grunt.registerTask('default', [
    'connect:livereload',
    'watch'
  ]);
};
