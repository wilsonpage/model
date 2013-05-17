module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      build: {
        src: 'index.js',
        dest: 'build/<%= pkg.title %>.js',
        options: {
          standalone: '<%= pkg.title %>'
        }
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.title %> <%= pkg.version %> */\n'
      },
      build: {
        src: 'build/<%= pkg.title %>.js',
        dest: 'build/<%= pkg.title %>.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-buster');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browserify');

  // Default task.
  grunt.registerTask('default', ['browserify', 'uglify']);
};
