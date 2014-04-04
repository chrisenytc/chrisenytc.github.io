"use strict";

module.exports = function(grunt) {

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        // Define Directories
        dirs: {
            lib: "assets/lib",
            js: "assets/js",
            sjs: "src/js",
            coffee: "src/coffee",
            less: "src/less",
            css: "assets/css",
            img: "assets/images",
            html: "views",
            htmlsrc: "src/html",
            views: "views",
            viewssrc: "src/views"
        },

        // Metadata
        pkg: grunt.file.readJSON("package.json"),
        banner: "\n" + "/*\n" + " * -------------------------------------------------------\n" + " * Project: <%= pkg.title %>\n" + " * Version: <%= pkg.version %>\n" + " *\n" + " * Author:  <%= pkg.author.name %>\n" + " * Site:     <%= pkg.author.url %>\n" + " * Contact: <%= pkg.author.email %>\n" + " *\n" + " *\n" + " * Copyright (c) <%= grunt.template.today(\"yyyy\") %> <%= pkg.author.name %>\n" + " * -------------------------------------------------------\n" + " */\n" + "\n",

        clean: ['build'],

        // Connect
        connect: {
            server: {
                options: {
                    port: 3000,
                    base: ''
                }
            }
        },

        // Observe Changes
        watch: {
            livereload: {
                options: {
                    livereload: false
                },
                files: ['build/**/*'],
            },
            css: {
                files: ["<%= dirs.less %>/{,*/}*.less"],
                tasks: ["less", "concat"]
            },
            coffee: {
                files: ["<%= dirs.coffee %>/{,*/}*.coffee"],
                tasks: ["coffee", "uglify", "concat"]
            },
            js: {
                files: ["<%= dirs.sjs %>"],
                tasks: ["uglify"]
            },
            html: {
                files: ["<%= dirs.htmlsrc %>/**/*.html", "<%= dirs.viewssrc %>/**/*.html"],
                tasks: ["htmlmin"]
            }
        },

        coffee: {
            glob_to_multiple: {
                options: {
                    bare: true
                },
                expand: true,
                flatten: false,
                cwd: '<%= dirs.coffee %>',
                src: ['*.coffee'],
                dest: '<%= dirs.sjs %>',
                ext: '.js'
            }
        },

        // Minify and Concat archives
        uglify: {
            options: {
                mangle: false,
                banner: "<%= banner %>"
            },
            dist: {
                files: {
                    "<%= dirs.js %>/app.min.js": [
                        "<%= dirs.sjs %>/app.js"
                    ],
                    "<%= dirs.js %>/controllers.min.js": [
                        "<%= dirs.sjs %>/controllers.js"
                    ]
                }
            }
        },

        concat: {
            options: {
                separator: ';',
                mangle: false,
            },
            basic: {
                src: ['assets/lib/jquery/jquery.min.js', 'assets/lib/angular/angular.min.js'],
                dest: '<%= dirs.js %>/dependencies.min.js'
            },
            dep: {
                src: ['assets/js/app.min.js', 'assets/js/controllers.min.js'],
                dest: '<%= dirs.js %>/main.min.js'
            }
        },

        // Compile LESS to CSS
        less: {
            dist: {
                options: {
                    // ieCompat: true, // Compatible with IE8
                    // report: 'gzip' // Verify LESS performance
                    banner: "<%= banner %>",
                    yuicompress: true // Compress CSS with cssmin.js
                },
                files: {
                    "<%= dirs.css %>/style.min.css": [
                        "<%= dirs.less %>/*.less"
                    ]
                }
            }
        },

        // Optimize Images
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 9,
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: "<%= dirs.img %>/",
                    src: "<%= dirs.img %>/**",
                    dest: "<%= dirs.img %>/"
                }]
            }
        },
        //Minify Html files
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'index.html': '<%= dirs.htmlsrc %>/index.html',
                    '<%= dirs.views %>/404.html': '<%= dirs.viewssrc %>/404.html',
                    '<%= dirs.views %>/about.html': '<%= dirs.viewssrc %>/about.html',
                    '<%= dirs.views %>/blog.html': '<%= dirs.viewssrc %>/blog.html',
                    '<%= dirs.views %>/post.html': '<%= dirs.viewssrc %>/post.html',
                    '<%= dirs.views %>/contact.html': '<%= dirs.viewssrc %>/contact.html',
                    '<%= dirs.views %>/index.html': '<%= dirs.viewssrc %>/index.html',
                    '<%= dirs.views %>/portfolio.html': '<%= dirs.viewssrc %>/portfolio.html',
                    '<%= dirs.views %>/projects.html': '<%= dirs.viewssrc %>/projects.html'
                }
            },
        },
        // Build Project
        copy: {
            main: {
                files: [{
                    expand: true,
                    src: ['assets/**'],
                    dest: 'build/'
                }, {
                    expand: true,
                    src: ['views/**'],
                    dest: 'build/'
                }, {
                    expand: true,
                    src: ['index.html'],
                    dest: 'build/',
                    filter: 'isFile'
                }, {
                    expand: true,
                    src: ['humans.txt'],
                    dest: 'build/',
                    filter: 'isFile'
                }, {
                    expand: true,
                    src: ['robots.txt'],
                    dest: 'build/',
                    filter: 'isFile'
                }]
            }
        }
    });


    // Register Taks
    // --------------------------

    // Observe changes, concatenate, minify and validate files
    grunt.registerTask("default", ["coffee", "less", "uglify", "imagemin", "htmlmin", "concat", "copy"]);

    // Run Server
    grunt.registerTask("server", ["default", "connect", "watch"]);

    // Optimize Images
    grunt.registerTask("img", ["imagemin"]);

};
