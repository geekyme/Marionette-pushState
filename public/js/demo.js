(function () {
var root = this, exports = {};

// The jade runtime:
var jade=function(exports){Array.isArray||(Array.isArray=function(arr){return"[object Array]"==Object.prototype.toString.call(arr)}),Object.keys||(Object.keys=function(obj){var arr=[];for(var key in obj)obj.hasOwnProperty(key)&&arr.push(key);return arr}),exports.merge=function merge(a,b){var ac=a["class"],bc=b["class"];if(ac||bc)ac=ac||[],bc=bc||[],Array.isArray(ac)||(ac=[ac]),Array.isArray(bc)||(bc=[bc]),ac=ac.filter(nulls),bc=bc.filter(nulls),a["class"]=ac.concat(bc).join(" ");for(var key in b)key!="class"&&(a[key]=b[key]);return a};function nulls(val){return val!=null}return exports.attrs=function attrs(obj,escaped){var buf=[],terse=obj.terse;delete obj.terse;var keys=Object.keys(obj),len=keys.length;if(len){buf.push("");for(var i=0;i<len;++i){var key=keys[i],val=obj[key];"boolean"==typeof val||null==val?val&&(terse?buf.push(key):buf.push(key+'="'+key+'"')):0==key.indexOf("data")&&"string"!=typeof val?buf.push(key+"='"+JSON.stringify(val)+"'"):"class"==key&&Array.isArray(val)?buf.push(key+'="'+exports.escape(val.join(" "))+'"'):escaped&&escaped[key]?buf.push(key+'="'+exports.escape(val)+'"'):buf.push(key+'="'+val+'"')}}return buf.join(" ")},exports.escape=function escape(html){return String(html).replace(/&(?!(\w+|\#\d+);)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},exports.rethrow=function rethrow(err,filename,lineno){if(!filename)throw err;var context=3,str=require("fs").readFileSync(filename,"utf8"),lines=str.split("\n"),start=Math.max(lineno-context,0),end=Math.min(lines.length,lineno+context),context=lines.slice(start,end).map(function(line,i){var curr=i+start+1;return(curr==lineno?"  > ":"    ")+curr+"| "+line}).join("\n");throw err.path=filename,err.message=(filename||"Jade")+":"+lineno+"\n"+context+"\n\n"+err.message,err},exports}({});

// create our folder objects

// browse.jade compiled template
exports.browse = function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html><html lang="en"><head><title>Stylus | The best place to flaunt your fashionable styles</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="keywords" content="style, design, shop, marketplace, inspiration"><meta name="description" content="Stylus is the one stop shop for people to easily put up their styles, sell their wares and connect with other hippies."><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300"><link rel="stylesheet" href="/lib/bootstrap-2.3.0/css/bootstrap.min.css"><link rel="stylesheet" href="/lib/bootstrap-2.3.0/css/bootstrap-responsive.min.css"><link rel="stylesheet" href="/lib/font-awesome-3.1.1/css/font-awesome.css"><link rel="stylesheet" href="/css/style.css"></head><body style="zoom:1;"><div class="container white-fade"><div id="top"><div id="navbar" class="navbar navbar-inverse navbar-fixed-top"><div class="navbar-inner"><div class="container"><button type="button" data-toggle="collapse" data-target=".nav-collapse" class="btn btn-navbar"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a href="#" class="brand">Stylus</a><div class="nav-collapse collapse"><ul class="nav"><li id="home" class="active"><a href="#">Home</a></li><li id="browse"><a href="#browse">Browse</a></li>');
        if (user) {
            buf.push('<li id="my-shop"><a href="#mine">Mine</a></li>');
        }
        buf.push('</ul><ul class="nav pull-right"><li>');
        if (!user) {
            buf.push("<a");
            buf.push(attrs({
                terse: true,
                href: "" + loginUrl + ""
            }, {
                href: true
            }));
            buf.push('>Login with  <i class="icon-facebook-sign"></i></a>');
        } else {
            buf.push('<a href="/logout">Logout  <i class="icon-signout"></i></a>');
        }
        buf.push('</li><li class="dropdown"><a href="" data-toggle="dropdown" class="dropdown-toggle">Resources<b class="caret"></b></a><ul class="dropdown-menu"><li><a href="http://marionettejs.com/" target="_blank">Backbone Marionette</a></li><li><a href="http://twitter.github.com/bootstrap/" target="_blank">Twitter Bootstrap</a></li><li><a href="http://nodejs.org/" target="_blank">Node.js</a></li><li><a href="http://expressjs.com/mongodb" target="_blank">Express</a></li><li><a href="http://www.orientdb.org/" target="_blank">OrientDB</a></li><li class="divider"></li><li class="nav-header">This App</li><li><a href="#" target="_blank">GitHub Repository</a></li><li><a href="https://twitter.com/shawnvoguewerks" target="_blank">Author\'s Twitter</a></li></ul></li></ul></div></div></div></div></div><div id="main-body"><div class="container"><div class="row-fluid"><div id="shop-category" class="span2"><ul class="nav nav-list affix categories">');
        (function() {
            if ("number" == typeof categories.length) {
                for (var $index = 0, $$l = categories.length; $index < $$l; $index++) {
                    var category = categories[$index];
                    buf.push("<li><a");
                    buf.push(attrs({
                        terse: true,
                        href: "#browse/categories/" + category.short + ""
                    }, {
                        href: true
                    }));
                    buf.push(">" + escape((interp = category.name) == null ? "" : interp) + '<i class="icon-chevron-right"></i></a></li>');
                }
            } else {
                var $$l = 0;
                for (var $index in categories) {
                    $$l++;
                    var category = categories[$index];
                    buf.push("<li><a");
                    buf.push(attrs({
                        terse: true,
                        href: "#browse/categories/" + category.short + ""
                    }, {
                        href: true
                    }));
                    buf.push(">" + escape((interp = category.name) == null ? "" : interp) + '<i class="icon-chevron-right"></i></a></li>');
                }
            }
        }).call(this);
        buf.push('</ul></div><div id="item-container" class="span10"><div class="thumbnails">');
        (function() {
            if ("number" == typeof items.length) {
                for (var $index = 0, $$l = items.length; $index < $$l; $index++) {
                    var item = items[$index];
                    buf.push("<li><a");
                    buf.push(attrs({
                        terse: true,
                        href: "#browse/" + item.id + "/detail",
                        "class": "thumbnail" + " " + "plain"
                    }, {
                        href: true
                    }));
                    buf.push(">");
                    if (item.imgSrc) {
                        buf.push("<img");
                        buf.push(attrs({
                            terse: true,
                            width: "260",
                            height: "260",
                            src: "/img/grey.gif",
                            "data-original": "/img/uploads/" + item.imgSrc + "",
                            "class": "lazy"
                        }, {
                            width: true,
                            height: true,
                            src: true,
                            "data-original": true
                        }));
                        buf.push(">");
                    } else {
                        buf.push('<img width="260" height="260" src="/img/grey.gif" data-original="http://placehold.it/260x260" class="lazy">');
                    }
                    buf.push('<div class="caption"><h3>');
                    var __val__ = item.label;
                    buf.push(escape(null == __val__ ? "" : __val__));
                    buf.push("</h3><i>");
                    var __val__ = item.incoming.length;
                    buf.push(escape(null == __val__ ? "" : __val__));
                    buf.push("</i><p>");
                    var __val__ = item.desc;
                    buf.push(escape(null == __val__ ? "" : __val__));
                    buf.push("</p></div></a></li>");
                }
            } else {
                var $$l = 0;
                for (var $index in items) {
                    $$l++;
                    var item = items[$index];
                    buf.push("<li><a");
                    buf.push(attrs({
                        terse: true,
                        href: "#browse/" + item.id + "/detail",
                        "class": "thumbnail" + " " + "plain"
                    }, {
                        href: true
                    }));
                    buf.push(">");
                    if (item.imgSrc) {
                        buf.push("<img");
                        buf.push(attrs({
                            terse: true,
                            width: "260",
                            height: "260",
                            src: "/img/grey.gif",
                            "data-original": "/img/uploads/" + item.imgSrc + "",
                            "class": "lazy"
                        }, {
                            width: true,
                            height: true,
                            src: true,
                            "data-original": true
                        }));
                        buf.push(">");
                    } else {
                        buf.push('<img width="260" height="260" src="/img/grey.gif" data-original="http://placehold.it/260x260" class="lazy">');
                    }
                    buf.push('<div class="caption"><h3>');
                    var __val__ = item.label;
                    buf.push(escape(null == __val__ ? "" : __val__));
                    buf.push("</h3><i>");
                    var __val__ = item.incoming.length;
                    buf.push(escape(null == __val__ ? "" : __val__));
                    buf.push("</i><p>");
                    var __val__ = item.desc;
                    buf.push(escape(null == __val__ ? "" : __val__));
                    buf.push("</p></div></a></li>");
                }
            }
        }).call(this);
        buf.push('</div></div></div></div></div><div id="footer"><footer class="footer"><p>Sample E-commerce platform built with  <a href="http://marionettejs.com/" target="_blank">Backbone Marionette</a>, <a href="http://twitter.github.com/bootstrap/" target="_blank">Twitter Bootstrap</a>, <a href="http://nodejs.org/" target="_blank">Node.js</a>, <a href="http://expressjs.com/" target="_blank">Express</a>, \nand <a href="http://www.orientdb.org/" target="_blank">OrientDB </a><br>By <a href="https://twitter.com/shawnvoguewerks" target="_blank">@shawnvoguewerks</a>.<br></p></footer></div><div id="modal"></div></div><script src="/lib/jquery-1.9.1.min.js"></script><script src="/lib/bootstrap-2.3.0/js/bootstrap.min.js"></script><script src="/lib/json2.js"></script><script src="/lib/underscore-min.js"></script><script src="/lib/backbone-min.js"></script><script src="/lib/backbone.marionette.min.js"></script><script src="/js/templates.js"></script><script src="/lib/jquery.lazyload.min.js"></script><script src="/lib/dropzone.js"></script><script>window.Backbone.CSRFToken = \'' + escape((interp = csrftoken) == null ? "" : interp) + '\'\nBackbone.ajax = function() {\nvar data = {};\nif (arguments[0].type && arguments[0].type !== "GET") {\narguments[0].contentType = "application/json";\nif (arguments[0].data) {\nif (typeof arguments[0].data === "string") {\ndata = JSON.parse(arguments[0].data);\n} else {\ndata = arguments[0].data;\n}\n}\ndata["_csrf"] = Backbone.CSRFToken;\narguments[0].data = JSON.stringify(data);\n}\nreturn Backbone.$.ajax.apply(Backbone.$, arguments);\n}</script><script src="/js/main.js"></script><script src="/js/item.js"></script><script src="/js/category.js"></script><script src="/js/static.js"></script><script src="/js/shop.js"></script><script src="/js/routers.js"></script></body></html>');
    }
    return buf.join("");
};

// categories.jade compiled template
exports.categories = function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push(" ");
    }
    return buf.join("");
};

// category.jade compiled template
exports.category = function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push("<a");
        buf.push(attrs({
            href: "#browse/categories/" + short + ""
        }, {
            href: true
        }));
        buf.push(">" + escape((interp = name) == null ? "" : interp) + '<i class="icon-chevron-right"></i></a>');
    }
    return buf.join("");
};

// footer.jade compiled template
exports.footer = function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<footer class="footer"><p>Sample E-commerce platform built with  <a href="http://marionettejs.com/" target="_blank">Backbone Marionette</a>, <a href="http://twitter.github.com/bootstrap/" target="_blank">Twitter Bootstrap</a>, <a href="http://nodejs.org/" target="_blank">Node.js</a>, <a href="http://expressjs.com/" target="_blank">Express</a>, \nand <a href="http://www.orientdb.org/" target="_blank">OrientDB </a><br/>By <a href="https://twitter.com/shawnvoguewerks" target="_blank">@shawnvoguewerks</a>.<br/></p></footer>');
    }
    return buf.join("");
};

// home.jade compiled template
exports.home = function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html><html lang="en"><head><title>PushState example</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300"><link rel="stylesheet" href="/lib/bootstrap-2.3.0/css/bootstrap.min.css"><link rel="stylesheet" href="/lib/bootstrap-2.3.0/css/bootstrap-responsive.min.css"><link rel="stylesheet" href="/lib/font-awesome-3.1.1/css/font-awesome.css"><link rel="stylesheet" href="/css/style.css"></head><body style="zoom:1;"><h1>hello world</h1><div id="testPushState"><a href="#showItems">get list of items</a><ul id="items"></ul></div><script src="/lib/jquery-1.9.1.min.js"></script><script src="/lib/bootstrap-2.3.0/js/bootstrap.min.js"></script><script src="/lib/json2.js"></script><script src="/lib/underscore-min.js"></script><script src="/lib/backbone-min.js"></script><script src="/lib/backbone.marionette.min.js"></script><script src="/js/templates.js"></script><script>// empty\nModels = [];</script><script src="/js/testPushState.js"></script></body></html>');
    }
    return buf.join("");
};

// index.jade compiled template
exports.index = function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html><html lang="en"><head><title>Stylus | The best place to flaunt your fashionable styles</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="keywords" content="style, design, shop, marketplace, inspiration"><meta name="description" content="Stylus is the one stop shop for people to easily put up their styles, sell their wares and connect with other hippies."><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300"><link rel="stylesheet" href="/lib/bootstrap-2.3.0/css/bootstrap.min.css"><link rel="stylesheet" href="/lib/bootstrap-2.3.0/css/bootstrap-responsive.min.css"><link rel="stylesheet" href="/lib/font-awesome-3.1.1/css/font-awesome.css"><link rel="stylesheet" href="/css/style.css"></head><body style="zoom:1;"><div class="container white-fade"><div id="top"><div id="navbar" class="navbar navbar-inverse navbar-fixed-top"><div class="navbar-inner"><div class="container"><button type="button" data-toggle="collapse" data-target=".nav-collapse" class="btn btn-navbar"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a href="#" class="brand">Stylus</a><div class="nav-collapse collapse"><ul class="nav"><li id="home" class="active"><a href="#">Home</a></li><li id="browse"><a href="#browse">Browse</a></li>');
        if (user) {
            buf.push('<li id="my-shop"><a href="#mine">Mine</a></li>');
        }
        buf.push('</ul><ul class="nav pull-right"><li>');
        if (!user) {
            buf.push("<a");
            buf.push(attrs({
                terse: true,
                href: "" + loginUrl + ""
            }, {
                href: true
            }));
            buf.push('>Login with  <i class="icon-facebook-sign"></i></a>');
        } else {
            buf.push('<a href="/logout">Logout  <i class="icon-signout"></i></a>');
        }
        buf.push('</li><li class="dropdown"><a href="" data-toggle="dropdown" class="dropdown-toggle">Resources<b class="caret"></b></a><ul class="dropdown-menu"><li><a href="http://marionettejs.com/" target="_blank">Backbone Marionette</a></li><li><a href="http://twitter.github.com/bootstrap/" target="_blank">Twitter Bootstrap</a></li><li><a href="http://nodejs.org/" target="_blank">Node.js</a></li><li><a href="http://expressjs.com/mongodb" target="_blank">Express</a></li><li><a href="http://www.orientdb.org/" target="_blank">OrientDB</a></li><li class="divider"></li><li class="nav-header">This App</li><li><a href="#" target="_blank">GitHub Repository</a></li><li><a href="https://twitter.com/shawnvoguewerks" target="_blank">Author\'s Twitter</a></li></ul></li></ul></div></div></div></div></div><div id="main-body"></div><div id="footer"><footer class="footer"><p>Sample E-commerce platform built with  <a href="http://marionettejs.com/" target="_blank">Backbone Marionette</a>, <a href="http://twitter.github.com/bootstrap/" target="_blank">Twitter Bootstrap</a>, <a href="http://nodejs.org/" target="_blank">Node.js</a>, <a href="http://expressjs.com/" target="_blank">Express</a>, \nand <a href="http://www.orientdb.org/" target="_blank">OrientDB </a><br>By <a href="https://twitter.com/shawnvoguewerks" target="_blank">@shawnvoguewerks</a>.<br></p></footer></div><div id="modal"></div></div><script src="/lib/jquery-1.9.1.min.js"></script><script src="/lib/bootstrap-2.3.0/js/bootstrap.min.js"></script><script src="/lib/json2.js"></script><script src="/lib/underscore-min.js"></script><script src="/lib/backbone-min.js"></script><script src="/lib/backbone.marionette.min.js"></script><script src="/js/templates.js"></script><script src="/lib/jquery.lazyload.min.js"></script><script src="/lib/dropzone.js"></script><script>window.Backbone.CSRFToken = \'' + escape((interp = csrftoken) == null ? "" : interp) + '\'\nBackbone.ajax = function() {\nvar data = {};\nif (arguments[0].type && arguments[0].type !== "GET") {\narguments[0].contentType = "application/json";\nif (arguments[0].data) {\nif (typeof arguments[0].data === "string") {\ndata = JSON.parse(arguments[0].data);\n} else {\ndata = arguments[0].data;\n}\n}\ndata["_csrf"] = Backbone.CSRFToken;\narguments[0].data = JSON.stringify(data);\n}\nreturn Backbone.$.ajax.apply(Backbone.$, arguments);\n}</script><script src="/js/main.js"></script><script src="/js/item.js"></script><script src="/js/category.js"></script><script src="/js/static.js"></script><script src="/js/shop.js"></script><script src="/js/routers.js"></script></body></html>');
    }
    return buf.join("");
};

// item.jade compiled template
exports.item = function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push("<a");
        buf.push(attrs({
            href: "#browse/" + id + "/detail",
            "class": "thumbnail" + " " + "plain"
        }, {
            href: true
        }));
        buf.push(">");
        if (imgSrc) {
            buf.push("<img");
            buf.push(attrs({
                width: "260",
                height: "260",
                src: "/img/grey.gif",
                "data-original": "/img/uploads/" + imgSrc + "",
                "class": "lazy"
            }, {
                width: true,
                height: true,
                src: true,
                "data-original": true
            }));
            buf.push("/>");
        } else {
            buf.push('<img width="260" height="260" src="/img/grey.gif" data-original="http://placehold.it/260x260" class="lazy"/>');
        }
        buf.push('<div class="caption"><h3>');
        var __val__ = label;
        buf.push(escape(null == __val__ ? "" : __val__));
        buf.push("</h3><i>");
        var __val__ = incoming.length;
        buf.push(escape(null == __val__ ? "" : __val__));
        buf.push("</i><p>");
        var __val__ = desc;
        buf.push(escape(null == __val__ ? "" : __val__));
        buf.push("</p></div></a>");
    }
    return buf.join("");
};

// itemCreate.jade compiled template
exports.itemCreate = function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<form id="item-create-form" class="form-horizontal span12"><input');
        buf.push(attrs({
            id: "imgSrc",
            type: "hidden",
            name: "imgSrc",
            value: "" + imgSrc + ""
        }, {
            type: true,
            name: true,
            value: true
        }));
        buf.push('/><fieldset><legend>Create New Item</legend><br/><div class="row-fluid"><div class="span8"><div class="control-group"><label for="name" class="control-label">Name:</label><div class="controls"><input');
        buf.push(attrs({
            id: "name",
            type: "text",
            name: "label",
            value: "",
            placeholder: "" + label + ""
        }, {
            type: true,
            name: true,
            value: true,
            placeholder: true
        }));
        buf.push('/><span class="help-inline"></span></div></div><div class="control-group"><label for="desc" class="control-label">Description</label><div class="controls"><textarea');
        buf.push(attrs({
            id: "desc",
            name: "desc",
            style: "width: 90%;",
            rows: "6",
            placeholder: "" + desc + ""
        }, {
            name: true,
            style: true,
            rows: true,
            placeholder: true
        }));
        buf.push('></textarea></div></div></div><div class="span4"><div id="dropzone" style="width: 50%; text-align: center; margin: 0px auto;" class="well dropzone"></div></div></div></fieldset><div class="form-actions"><button type="button" href="" class="btn btn-primary save">Save</button><button type="button" href="" class="btn delete">Delete</button></div></form>');
    }
    return buf.join("");
};

// itemDetail.jade compiled template
exports.itemDetail = function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div class="modal-header"><button type="button" data-dismiss="modal" aria-hidden="true" class="close">&times;</button><h3>');
        var __val__ = label;
        buf.push(escape(null == __val__ ? "" : __val__));
        buf.push('</h3></div><div class="modal-body">');
        if (imgSrc) {
            buf.push("<img");
            buf.push(attrs({
                width: "260px",
                src: "/img/uploads/" + imgSrc + ""
            }, {
                width: true,
                src: true
            }));
            buf.push("/>");
        } else {
            buf.push('<img width="260px" src="http://placehold.it/260x260"/>');
        }
        buf.push("<p>");
        var __val__ = desc;
        buf.push(escape(null == __val__ ? "" : __val__));
        buf.push('</p></div><div class="modal-footer"><button type="button" data-dismiss="modal" aria-hidden="true" class="btn">Close</button><a href="#" class="btn btn-primary">Buy Now</a></div>');
    }
    return buf.join("");
};

// items.jade compiled template
exports.items = function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push(" ");
    }
    return buf.join("");
};

// landingPage.jade compiled template
exports.landingPage = function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div class="area"><div class="copy"><h1>Stylus.</h1><p>The best place to sell any stylish goods</p></div></div>');
    }
    return buf.join("");
};

// layout.jade compiled template
exports.layout = function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300"><link rel="stylesheet" href="/lib/bootstrap-2.3.0/css/bootstrap.min.css"><link rel="stylesheet" href="/lib/bootstrap-2.3.0/css/bootstrap-responsive.min.css"><link rel="stylesheet" href="/lib/font-awesome-3.1.1/css/font-awesome.css"><link rel="stylesheet" href="/css/style.css"></head><body style="zoom:1;"><script src="/lib/jquery-1.9.1.min.js"></script><script src="/lib/bootstrap-2.3.0/js/bootstrap.min.js"></script><script src="/lib/json2.js"></script><script src="/lib/underscore-min.js"></script><script src="/lib/backbone-min.js"></script><script src="/lib/backbone.marionette.min.js"></script></body></html>');
    }
    return buf.join("");
};

// login.jade compiled template
exports.login = function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300"><link rel="stylesheet" href="/lib/bootstrap-2.3.0/css/bootstrap.min.css"><link rel="stylesheet" href="/lib/bootstrap-2.3.0/css/bootstrap-responsive.min.css"><link rel="stylesheet" href="/lib/font-awesome-3.1.1/css/font-awesome.css"><link rel="stylesheet" href="/css/style.css"></head><body style="zoom:1;"><script src="/lib/jquery-1.9.1.min.js"></script><script src="/lib/bootstrap-2.3.0/js/bootstrap.min.js"></script><script src="/lib/json2.js"></script><script src="/lib/underscore-min.js"></script><script src="/lib/backbone-min.js"></script><script src="/lib/backbone.marionette.min.js"></script></body></html>');
    }
    return buf.join("");
};

// navbar.jade compiled template
exports.navbar = function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div id="navbar" class="navbar navbar-inverse navbar-fixed-top"><div class="navbar-inner"><div class="container"><button type="button" data-toggle="collapse" data-target=".nav-collapse" class="btn btn-navbar"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a href="#" class="brand">Stylus</a><div class="nav-collapse collapse"><ul class="nav"><li id="home" class="active"><a href="#">Home</a></li><li id="browse"><a href="#browse">Browse</a></li>');
        if (user) {
            buf.push('<li id="my-shop"><a href="#mine">Mine</a></li>');
        }
        buf.push('</ul><ul class="nav pull-right"><li>');
        if (!user) {
            buf.push("<a");
            buf.push(attrs({
                href: "" + loginUrl + ""
            }, {
                href: true
            }));
            buf.push('>Login with  <i class="icon-facebook-sign"></i></a>');
        } else {
            buf.push('<a href="/logout">Logout  <i class="icon-signout"></i></a>');
        }
        buf.push('</li><li class="dropdown"><a href="" data-toggle="dropdown" class="dropdown-toggle">Resources<b class="caret"></b></a><ul class="dropdown-menu"><li><a href="http://marionettejs.com/" target="_blank">Backbone Marionette</a></li><li><a href="http://twitter.github.com/bootstrap/" target="_blank">Twitter Bootstrap</a></li><li><a href="http://nodejs.org/" target="_blank">Node.js</a></li><li><a href="http://expressjs.com/mongodb" target="_blank">Express</a></li><li><a href="http://www.orientdb.org/" target="_blank">OrientDB</a></li><li class="divider"></li><li class="nav-header">This App</li><li><a href="#" target="_blank">GitHub Repository</a></li><li><a href="https://twitter.com/shawnvoguewerks" target="_blank">Author\'s Twitter</a></li></ul></li></ul></div></div></div></div>');
    }
    return buf.join("");
};

// partial.jade compiled template
exports.partial = function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push("<h4>test partial</h4>");
    }
    return buf.join("");
};

// shopLayout.jade compiled template
exports.shopLayout = function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div class="row-fluid"><div id="shop-category" class="span2"></div><div id="item-container" class="span10"></div></div>');
    }
    return buf.join("");
};

// showItems.jade compiled template
exports.showItems = function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html><html lang="en"><head><title>PushState example</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300"><link rel="stylesheet" href="/lib/bootstrap-2.3.0/css/bootstrap.min.css"><link rel="stylesheet" href="/lib/bootstrap-2.3.0/css/bootstrap-responsive.min.css"><link rel="stylesheet" href="/lib/font-awesome-3.1.1/css/font-awesome.css"><link rel="stylesheet" href="/css/style.css"></head><body style="zoom:1;"><h1>hello world</h1><div id="testPushState"><a href="#showItems">get list of items</a><ul id="items"><div>');
        (function() {
            if ("number" == typeof items.length) {
                for (var $index = 0, $$l = items.length; $index < $$l; $index++) {
                    var item = items[$index];
                    buf.push("<li");
                    buf.push(attrs({
                        terse: true,
                        "data-id": "" + item.id + ""
                    }, {
                        "data-id": true
                    }));
                    buf.push("><p>");
                    var __val__ = item.label;
                    buf.push(escape(null == __val__ ? "" : __val__));
                    buf.push("</p></li>");
                }
            } else {
                var $$l = 0;
                for (var $index in items) {
                    $$l++;
                    var item = items[$index];
                    buf.push("<li");
                    buf.push(attrs({
                        terse: true,
                        "data-id": "" + item.id + ""
                    }, {
                        "data-id": true
                    }));
                    buf.push("><p>");
                    var __val__ = item.label;
                    buf.push(escape(null == __val__ ? "" : __val__));
                    buf.push("</p></li>");
                }
            }
        }).call(this);
        buf.push('</div></ul></div><script src="/lib/jquery-1.9.1.min.js"></script><script src="/lib/bootstrap-2.3.0/js/bootstrap.min.js"></script><script src="/lib/json2.js"></script><script src="/lib/underscore-min.js"></script><script src="/lib/backbone-min.js"></script><script src="/lib/backbone.marionette.min.js"></script><script src="/js/templates.js"></script><script>Models=\'' + ((interp = JSON.stringify(items)) == null ? "" : interp) + '\';</script><script src="/js/testPushState.js"></script></body></html>');
    }
    return buf.join("");
};

// testitem.jade compiled template
exports.testitem = function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push("<li");
        buf.push(attrs({
            "data-id": "" + item.id + ""
        }, {
            "data-id": true
        }));
        buf.push("><p>");
        var __val__ = item.label;
        buf.push(escape(null == __val__ ? "" : __val__));
        buf.push("</p></li>");
    }
    return buf.join("");
};

// testitemcollection.jade compiled template
exports.testitemcollection = function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var buf = [];
    with (locals || {}) {
        var interp;
    }
    return buf.join("");
};


// attach to window or export with commonJS
if (typeof module !== "undefined") {
    module.exports = exports;
} else if (typeof define === "function" && define.amd) {
    define(exports);
} else {
    root.templatizer = exports;
}

})();