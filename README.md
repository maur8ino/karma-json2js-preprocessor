# karma-html2js-preprocessor

> Preprocessor for converting JSON files into a function.

## Installation

**This plugin ships with Karma by default, so you don't need to install it, it should just work ;-)**

The easiest way is to keep `karma-json2js-preprocessor` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "karma": "~0.10",
    "karma-json2js-preprocessor": "https://github.com/maur8ino/karma-json2js-preprocessor.git"
  }
}
```
## Configuration
Following code shows the default configuration...
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    preprocessors: {
      '**/*.json': ['json2js']
    },

    files: [
      '*.js',
      '*.json'
    ]
  });
};
```

## How does it work ?

This preprocessor converts JSON files into Javascript function (much like JSONP) and publishes them in the global `window.__json__`, so that you can use these for testing.

For instance this `somedata.json`...
```json
{
  "foo": "bar"
}
```
... will be served as `somedata.json.js`:
```js
window.__json__ = window.__json__ || {};
window.__json__['somedata.json.js'] = function() { return { "foo": "bar"}; };
```
