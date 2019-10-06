# `robots.txt` - a language definition for highlight.js

For more about highlight.js, see https://highlightjs.org/

For more about robots.txt, see https://support.google.com/webmasters/answer/6062608?hl=en

### Usage

Simply include the `highlight.js` script package in your webpage or node app, load up this module and apply it to `hljs`.

If you're not using a build system and just want to embed this in your webpage:

```html
<script type="text/javascript" src="/path/to/highlight.pack.js"></script>
<script type="text/javascript" src="/path/to/highlightjs-robots-txt/robots-txt.js"></script>
<script type="text/javascript">
    hljs.registerLanguage('robots-txt', hljsDefineRobotsTxt);
    hljs.initHighlightingOnLoad();
</script>
```

If you're using webpack / rollup / browserify / node:

```javascript
var hljs = require('highlightjs');
var hljsDefineRobotsTxt = require('highlightjs-robots-txt');

hljsDefineRobotsTxt(hljs);
hljs.initHighlightingOnLoad();
```

### Advanced

This is a pretty simple package, the only thing you might want to do differently is name the language something other than `robots-txt`. If you want to do this, simply `import { definer } from 'highlightjs-robots-txt';` and use it like: `hljs.registerLanguage('othername', definer);`.

### Author

Thomas LÉVEIL <thomasleveil@gmail.com>

### Maintainer

Josh Goebel <hello@joshgoebel.com>


