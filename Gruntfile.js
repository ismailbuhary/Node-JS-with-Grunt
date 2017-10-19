'use strict';

module.exports= function(grunt){

  grunt.initConfig({
      pkg:grunt.file.readJSON('package.json'),
       clean:{
         output:['tobeCleaned/*']
       },
      jshint :{
          options:{
              //force:true
              '-W069':false,
              '-W004':false,
              '-W104':false,
              '-W119':false,
              ignores:['./Gruntfile.js']

          },
          files:['./*.js']

      },
      // uglify:{
      //     development:{
      //       files:[ './json.js']
      //     },
      //     option:{
      //         force:true
      //     },
      // },
  });
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask("default",['clean','jshint','uglify']);
};
