module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'tests/**/*.js']
        },

        jasmine: {
            spec:{
                src: "src/**/*.js",
                options: {
                    specs: "tests/**/*.js",
                    vendor: [
                        "vendor/test/lib/*.js",
                        "node_modules/z-schema/dist/ZSchema-browser-min.js"
                    ],
                    keepRunner: true,
                    outfile: "generated/_SpecRunner.html",
                    template: "vendor/test/lib/SpecRunner.html",
                    templateOptions:{
                        jsonSchema: grunt.file.read(process.cwd() + '/tests/schema.json'),
                        draft4: grunt.file.read(process.cwd() + '/tests/draft4.json')
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

};