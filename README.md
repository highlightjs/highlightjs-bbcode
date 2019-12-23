# robots.txt - a language grammar for highlight.js

![install size](https://badgen.net/packagephobia/install/highlightjs-robots-txt) ![minified size](https://badgen.net/bundlephobia/min/highlightjs-robots-txt)

## Usage

Simply include the `highlight.js` library in your webpage or Node app, then load this module.

### Static website or simple usage

Simply load the module after loading Highlight.js.  You'll use the minified version found in the `dist` directory.  This module is just a CDN build of the language, so it will register itself as the Javascript is loaded.

```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script type="text/javascript" charset="UTF-8" src="/path/to/highlightjs-robots-txt/dist/robots-txt.min.js"></script>
<script type="text/javascript">
  hljs.initHighlightingOnLoad();
</script>
```


### With Node or another build system

If you're using Node / Webpack / Rollup / Browserify, etc, simply require the language module, then register it with Highlight.js.

```javascript
var hljs = require('highlightjs');
var hljsRobotsTxt = require('highlightjs-robots-txt');

hljs.registerLanguage("robots-txt", hljsRobotsTxt)
hljs.initHighlightingOnLoad();
```


## License

Highlight.js is released under the MIT License. See [LICENSE][1] file
for details.

### Author

Thomas LÉVEIL <thomasleveil@gmail.com>

### Maintainer

Josh Goebel <hello@joshgoebel.com>


## Links

- The official site for the Highlight.js library is <https://highlightjs.org/>.
- The Highlight.js GitHub project: <https://github.com/highlightjs/highlight.js>
- Learn more about robots.txt: <https://support.google.com/webmasters/answer/6062608?hl=en>

[1]: https://github.com/highlightjs/highlightjs-robots-txt/blob/master/LICENSE
