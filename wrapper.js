// JSX (JS) wrapper for SocketStream 0.3

var fs = require('fs'),
    jsx = require('react-tools');

exports.init = function(root, config) {

  return {

    name: 'JSX',

    extensions: ['jsx'],

    assetType: 'js',

    contentType: 'text/javascript; charset=utf-8',

    compile: function(path, options, cb) {
      options = options || {};
      var input = fs.readFileSync(path, 'utf8');
      if (typeof options.additionalTransform == 'function') {
        input = options.additionalTransform(input);
      }
      try {
        cb( jsx.transform(input) );
      } catch (e) {
        var message = "! Error compiling " + path + " into JSX";
        console.log(String.prototype.hasOwnProperty('red') && message.red || message);
        cb("Error compiling to JSX: " + e.stack);
        throw new Error(e);
      }
    }
  };
};
