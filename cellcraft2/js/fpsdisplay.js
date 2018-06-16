/*
 * @author mrdoob / http://mrdoob.com/
 * stats.js - http://github.com/mrdoob/stats.js
 */
var Stats = function () {
  var d = (self.performance && self.performance.now) ? self.performance.now.bind(performance)  : Date.now;
  var e = d(),
  c = e;
  var k = 0,
  j = 0;
  function g(p, s, r) {
    var q = document.createElement(p);
    q.id = s;
    q.style.cssText = r;
    return q
  }
  function a(r) {
    var q = b.children;
    for (var p = 0; p < q.length; p++) {
      q[p].style.display = p === 0 ? 'block' : 'none'
    }
    j = 0
  }
  var b = g('div', 'graphfps', 'width:80px;opacity:0.2');
  var f = 0,
  o = Infinity,
  h = 0;
  a();
  return {
    REVISION: 14,
    domElement: b,
    setMode: a,
    begin: function () {
      e = d()
    },
    end: function () {
      var p = d();
      k++;
      if (p > c + 1000) {
        f = Math.round((k * 1000) / (p - c));
        o = Math.min(o, f);
        h = Math.max(h, f);
        // n.textContent = f + ' FPS (' + o + '-' + h + ')';
        jQuery('#fps').html(':: ' + f + ' FPS (' + o + '-' + h + ')');
        c = p;
        k = 0
      }
      return p
    },
    update: function () {
      e = this.end()
    }
  }
};
if (typeof module === 'object') {
  module.exports = Stats
};