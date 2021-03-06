
module.exports = function(grunt) {

    grunt.initConfig({

        concat: {
          dist: {
            src: ['js/*.js'],
            dest: 'minjs/script.main.js',
          }
        },
        uglify: {
          js: {
            src: 'minjs/script.main.js',
            dest: 'minjs/script.main.min.js'
          }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat', 'uglify']);

};
