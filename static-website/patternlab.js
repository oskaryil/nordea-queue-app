// NOTE: named arguments passed to npm scripts must be prefixed with '--'
//       e.g. npm run loadstarterkit -- --kit=some-kit-name --clean
const plConfig = require('./patternlab-config.json');
const patternlab = require('patternlab-node')(plConfig);
const fs = require('fs');
const sass = require('node-sass');

function getConfiguredCleanOption() {
  return plConfig.cleanPublic;
}

function build(done) {
  done = done || function(){};

  const buildResult = patternlab.build(() => {}, getConfiguredCleanOption());

  // handle async version of Pattern Lab
  if (buildResult instanceof Promise) {
    return buildResult.then(done);
  }

  return null;
}

function version() {
  console.log(process.argv);
  patternlab.version();
}

function help(){
  patternlab.help();
}

function patternsonly() {
  function noop(){}

  patternlab.patternsonly(noop, plConfig.cleanPublic);
}

function liststarterkits() {
  patternlab.liststarterkits()
}

function loadstarterkit(kit, clean) {
  patternlab.loadstarterkit(kit, clean);
}

function installplugin(plugin) {
  patternlab.installplugin(plugin);
}

const compileStyles = () => {
  sass.render({
      file: 'source/css/styles.scss',
      includePaths: [
          'node_modules/bootstrap/scss/',
          'node_modules/sassdash/scss/',
          'node_modules/font-awesome/scss/'
      ]
  }, (error, result) => {
      if(error) {
        console.log(error);
      }
      else {
        // No errors during the compilation, write this result on the disk
        fs.writeFile('source/css/styles.css', result.css);
      }
    });
};

var options = {}, // Key Value
    params = [], // Unamed Values
    arg = process.argv;

arg.shift();
arg.shift();

arg.forEach(function(element) {
  var split;

  if(element.includes(":")) {
    split = element.split(":");
  }
  if(element.includes("=")) {
    split = element.split("=");
  }
  if(split) {
    options[split[0].replace(/^-+/,"")] = split[1];
  } else {
    params.push(element);
  }

}, this);


for (var i=0; i < process.argv.length; i++) {
  switch (process.argv[i]) {
    case 'build':
      build();
      break;
    case 'version':
      version();
      break;
    case 'help':
      help();
      break;
    case 'patternsonly':
      patternsonly();
      break;
    case 'liststarterkits':
      liststarterkits();
      break;
    case 'loadstarterkit':
      loadstarterkit(options.kit, options.clean);
      break;
    case 'installplugin':
      installplugin(options.plugin);
      break;
      case 'styles':
        compileStyles();
        break;
  }
}
