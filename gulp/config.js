var distMode = (process.argv.slice(2).indexOf('--dist')>=0);
var dest = distMode ? "./dist" : "./build";
var assetsDest = dest + "/assets";
var src = './src';
var sassPath = src + "/sass";
var templatesPath = src + "/templates";


module.exports = {
  buildMode: {
    dist: distMode
  },
  browserify: {
    // Enable source maps
    debug: true,
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/js/module.js',
      dest: assetsDest + "/js",
      outputName: 'moonlight.js'
    }]
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
    dest: assetsDest + '/fonts'
  },
  sass: {
    path: sassPath,
    src: [
      sassPath + "/**/*.scss"
    ],
    outputName: 'moonlight.css',
    dest: assetsDest + "/css"
  },
  templates: {
    path: templatesPath,
    src: [
      templatesPath + "/**/*.html",
      "!" + templatesPath + "/**/_*.html",
    ],
    dest: dest
  },
  vendors: {
    outputName: 'moonlight-vendors.js',
    dest: assetsDest
  }
};
