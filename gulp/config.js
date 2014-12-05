var distMode = (process.argv.slice(2).indexOf('--dist')>=0);
var dest = distMode ? "./dist" : "./build";
var src = './src';
var demoSrc = './demos';

module.exports = {
  buildMode: {
    dist: distMode
  },
  browserSync: {
    server: {
      baseDir: dest,
      directory: true
    },
    files: [
      dest + "/**",
      // Exclude Map files
      "!" + dest + "/**.map"
    ]
  },
  icons: {
    src: [
      './node_modules/font-awesome/fonts/*',
      './node_modules/bootstrap-sass/assets/fonts/bootstrap/*'
    ],
    dest: dest + '/fonts'
  },
  markup: {
    src: [
      demoSrc + "/*/*"
    ],
    base: './demos',
    dest: dest
  }
};
