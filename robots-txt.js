/*
Language: robots.txt
Author: Thomas LÉVEIL <thomasleveil@gmail.com>
Description: language definition for robots.txt files
Category: config
*/

var module = module ? module : {};     // shim for browser use

function hljsDefineRobotsTxt(hljs) {
  var HASH_COMMENT_MODE = hljs.COMMENT('(?:^|\\s+)#', '$');
  return {
    aliases: ['robotstxt', 'robots.txt'],
    case_insensitive: true,
    lexemes: '[a-z-]+',
    keywords: {
      section: 'user-agent',
      built_in: 'allow disallow',
      keyword: 'crawl-delay sitemap'
    },
    contains: [
      HASH_COMMENT_MODE,
      hljs.NUMBER_MODE,
      {
        className: 'string',
        begin: '^\\s*(?:user-agent|(?:dis)?allow)\\s*:\\s*',
        end: '$',
        excludeBegin: true,
        relevance: 10,
        contains: [
          HASH_COMMENT_MODE
        ]
      },
      {
        className: 'string',
        begin: '^\\s*sitemap\\s*:\\s*',
        end: '$',
        excludeBegin: true,
        contains: [
          HASH_COMMENT_MODE
        ]
      }
    ],
    illegal: '<(?:!DOCTYPE\\s+)?html>'
  }
}

module.exports = function(hljs) {
  hljs.registerLanguage('robots-txt', hljsDefineRobotsTxt);
};

module.exports.definer = hljsDefineRobotsTxt;
