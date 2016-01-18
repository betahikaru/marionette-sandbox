module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
        files: {
            // 元ファイルの指定。
            src : [
              'app/asset/js/app.js',
              'app/asset/js/model/*.js',
              'app/asset/js/collection/*.js',
              'app/asset/js/view/*.js',
              'app/asset/js/collection-view/*.js',
            ],
            // 出力ファイルの名前・パス指定
            dest: 'app/asset/js/build.js'
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['concat']);
};
