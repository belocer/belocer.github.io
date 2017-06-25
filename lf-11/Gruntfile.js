"use strict";

module.exports = function (grunt) {
    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        less: {
            style: {
                files: {
                    "css/style.css": "less/style.less"
                }
            }
        },

        postcss: {
            options: {
                processors: [
                  require("autoprefixer")({
                      browsers: [
                        "last 1 version",
                        "last 2 Chrome versions",
                        "last 2 Firefox versions",
                        "last 2 Opera versions",
                        "last 2 Edge versions"
                      ]
                  })
                ]
            },
            style: {
                src: "css/*.css"
            }
        },

        webpack: {
            a: {
                entry: "./js/src/main.js",
                output: {
                    path: "js",
                    filename: "script.js"
                }
            }
        },

        browserSync: {
            server: {
                bsFiles: {
                    src: [
                      "*.html",
                      "css/*.css",
                      "js/src/*.js"
                    ]
                },
                options: {
                    server: ".",
                    watchTask: true,
                    notify: false,
                    open: true,
                    ui: false
                }
            }
        },

        watch: {
            less: {
                files: ["less/**/*.less"],
                tasks: ["less", "postcss"],
                options: {
                    spawn: false
                }
            },

            scripts: {
                files: ["js/src/**/*.js"],
                tasks: ["webpack"],
                options: {
                    spawn: false
                }
            }

        }
    });

    grunt.registerTask("serve", ["browserSync", "watch"]);
};
