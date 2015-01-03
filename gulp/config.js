var
  distMode = (process.argv.slice(2).indexOf('--dist')>=0),
  dest = distMode ? './dist' : './build',
  assetsDest = dest + '/assets',
  src = './src',
  sassPath = src + '/sass',
  templatesPath = src + '/templates'
  ;


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
      dest: assetsDest + '/js',
      outputName: 'moonlight.js',
      outputNameMinified: 'moonlight.min.js'
    }]
  },
  browserSync: {
    server: {
      baseDir: dest,
      directory: true
    },
    files: [
      dest + '/**',
      // Exclude Map files
      '!' + dest + '/**.map'
    ]
  },
  sass: {
    path: sassPath,
    src: [
      sassPath + '/**/*.scss'
    ],
    outputName: 'moonlight.css',
    outputNameMinified: 'moonlight.min.css',
    dest: assetsDest + '/css'
  },
  templates: {
    path: templatesPath,
    src: [
      templatesPath + '/**/*.html',
      '!' + templatesPath + '/**/_*.html',
    ],
    dest: dest
  },
  vendors: {
    css: {
      src: [
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './node_modules/font-awesome/css/font-awesome.css'
      ],
      outputName: 'moonlight-vendors.css',
      outputNameMinified: 'moonlight-vendors.min.css',
      dest: assetsDest + '/css'
    },
    js: {
      src: [
        './node_modules/bootstrap/dist/js/bootstrap.js'
      ],
      outputName: 'moonlight-vendors.js',
      outputNameMinified: 'moonlight-vendors.min.js',
      dest: assetsDest + '/js'
    },
    fonts: {
      src: [
        './node_modules/bootstrap/dist/fonts/*',
        './node_modules/font-awesome/fonts/*'
      ],
      dest: assetsDest + '/fonts'
    }
  }
};
