var markdown = require('markdown').markdown;
var monmodule = require('monmodule');

monmodule.direBonjour();

console.log(markdown.toHTML('Un paragraphe en **markdown** !'));
