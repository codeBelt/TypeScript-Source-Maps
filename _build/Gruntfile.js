module.exports = function(grunt) {

    // Load Grunt tasks declared in the package.json file
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({

        // This will load in our package.json file so we can have access
        // to the project name and version number.
        pkg: grunt.file.readJSON('package.json'),

        typescript: {
            base: {
                src: ['../ts/Man.ts'],
                dest: '../js/main.js',
                options: {
                    sourcemap: true,
                    declaration: false
                }
            }
        }

    });

    grunt.registerTask('default', ['typescript']);

};