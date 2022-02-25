![](https://badgen.net/badge/status/seeking%20maintainer/orange)

This project is currently unmaintained and could use a new maintainer.  If interested, please open an issue.

---

# bbcode - a language grammar for highlight.js


## Usage

Simply include the Highlight.js library in your webpage or Node app, then load this module.

### Static website or simple usage

Simply load the module after loading Highlight.js.  The file you want is `bbcode.js` in the root directory.  This module is just a CDN build of the language, so it will register itself as the Javascript is loaded.

```html
<link rel="stylesheet" href="/path/to/styles/default.css">
<script src="/path/to/highlight.min.js"></script>
<script src="/path/to/highlightjs-bbcode/bbcode.js"></script>
<script type="text/javascript">
  hljs.highlightAll();
</script>
```

### Using directly from the jsDelivr CDN

```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release/build/styles/default.min.css">
<script src="//cdn.jsdelivr.net/gh/highlightjs/cdn-release/build/highlight.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/RedGuy12/highlightjs-bbcode/src/bbcode.min.js"></script>
```


## License

Released under the MIT License. See [LICENSE][1] file for details.

### Author

Paul Reid <paul@reid-family.org>

## Links

- The official site for the Highlight.js library is <https://highlightjs.org/>.
- The Highlight.js GitHub project: <https://github.com/highlightjs/highlight.js>
- Learn more about bbcode: <https://www.bbcode.org>

[1]: https://github.com/RedGuy12/highlightjs-bbcode/blob/master/LICENSE
