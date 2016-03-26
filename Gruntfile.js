module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    

    // Remove unused CSS across multiple files
    uncss: {
      dist: {
        options:{
          ignore: ['div.chapter-section > p:first-of-type:first-letter', 'nav.active', '.no-scroll', 'button.clicked > span.bar' ]
        },
        files: {
          'src/css/tidy.css': ['src/index.html']
        }
      }
    },

    cssmin: {
      target: {
        files: {
          'dist/css/main.css': ['src/css/tidy.css', 'src/css/normalize.css']
        }
      }
    },

    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'dist/index.html': 'src/index.html',     // 'destination': 'source'
        }
      }
    },

    ftpush: {
      azure: {
        auth: {
          host: 'waws-prod-ch1-013.ftp.azurewebsites.windows.net',
          authKey: 'azure-credentials'
        },
        src: 'dist/',
        dest: '/site/wwwroot/'
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-ftpush');

  // Default task(s).
  grunt.registerTask('default', [ 'uncss', 'cssmin', 'htmlmin']);
  grunt.registerTask('deploy', ['ftpush:azure']);


};