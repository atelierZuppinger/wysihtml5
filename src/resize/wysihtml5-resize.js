/*
---

name: resize
description: wysihtml5 resize ported on mootools
provides: resize
require
  - Core/Element
...
*/

Element.implement({
  getContent: function() {
    var iFrame =  this;
    var iFrameBody;
    if ( iFrame.contentDocument ) { // FF
      iFrameBody = iFrame.contentDocument.getElementsByTagName('body')[0];
    }
    else if ( iFrame.contentWindow ) { // IE
      iFrameBody = iFrame.contentWindow.document.getElementsByTagName('body')[0];
    }
    return iFrameBody;

  },
  autoResizeY: function() {
    var body = this.getContent();
    console.log( body.clientHeight, body.scrollHeight, body.offsetHeight);
    var bodyHeight = this.getContent().scrollHeight;
    this.setStyle('height', bodyHeight);
    return this;
  }
});