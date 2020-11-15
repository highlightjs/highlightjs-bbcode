# bbcode - a language grammar for highlight.js

## Usage

Simply include the Highlight.js library in your webpage or Node app, then load this module.

### Static website or simple usage

Simply load the module after loading Highlight.js.  You'll use the minified version found in the `dist` directory.  This module is just a CDN build of the language, so it will register itself as the Javascript is loaded.

```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script type="text/javascript" charset="UTF-8"
  src="/path/to/highlightjs-robots-txt/dist/robots-txt.min.js"></script>
<script type="text/javascript">
  hljs.initHighlightingOnLoad();
</script>
```

### Using directly from the jsDelivr CDN

```html
<script src="https://cdn.jsdelivr.net/gh/RedGuy12/highlightjs-bbcode/src/bbcode.min.js"></script>
```


## License

Highlight.js is released under the MIT License. See [LICENSE][1] file
for details.

### Author

Paul Reid <paul@reid-family.org>

## Links

- The official site for the Highlight.js library is <https://highlightjs.org/>.
- The Highlight.js GitHub project: <https://github.com/highlightjs/highlight.js>
- Learn more about bbcode: <https://www.bbcode.org>

[1]: https://github.com/RedGuy12/highlightjs-bbcode/blob/master/LICENSE
