var karmaFileNames = Object.keys(window.__karma__.files);
var MODULE_RE = /\/base\/(tests\/[\w-_\/]+\.spec)\.js/;

var tests = karmaFileNames.reduce(function(z, file) {
  var match = MODULE_RE.exec(file);
  if (match) {
    z.push(match[1]);
  }
  return z;
}, []);

require.config({
  baseUrl: '/base',

  deps: tests,
  callback: window.__karma__.start
});