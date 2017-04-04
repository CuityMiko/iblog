requirejs.config({
  baseUrl: '/',
  shim: {
  },
  map: {
    '*': {
      'iblog:': '/iblog/static/js'
    }
  },
  paths: {
    'zepto': 'iblog/static/js/lib/zepto.min',
    'reveal': 'iblog/static/js/lib/reveal/reveal',
    'head': 'iblog/static/js/lib/reveal/head.min',
    'marked': 'iblog/static/js/lib/reveal/marked',
    'highlight': 'common/static/js/lib/highlight.min',
    'simplemde': 'iblog/static/js/lib/simplemde.min'
  }
});
