module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    "download-atom-shell": {
      version: "0.18.1",
      outputDir: "./atom-shell",
      rebuild: true
    },
    shell: {
      "start-tabs-server": {
        command: './atom-shell/Atom.app/Contents/MacOS/Atom tabs-server',
        options: {
          async: false,
          stdout: true,
          stderr: true
        }
      },
      "start-app-server": {
        command: 'vertx run app-server/main.js',
        options: {
          async: false,
          stdout: true,
          stderr: true
        }
      }
    },
    concurrent: {
      servers: ['shell:start-tabs-server', 'shell:start-app-server']
    }
  });

  grunt.registerTask('default', [
    'download-atom-shell',
    'concurrent:servers'
  ]);

  grunt.loadNpmTasks('grunt-download-atom-shell');
  grunt.loadNpmTasks('grunt-shell-spawn');
  grunt.loadNpmTasks('grunt-concurrent');

};
