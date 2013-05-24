(function () {
var root = this, exports = {};

// The jade runtime:
var jade=function(exports){Array.isArray||(Array.isArray=function(arr){return"[object Array]"==Object.prototype.toString.call(arr)}),Object.keys||(Object.keys=function(obj){var arr=[];for(var key in obj)obj.hasOwnProperty(key)&&arr.push(key);return arr}),exports.merge=function merge(a,b){var ac=a["class"],bc=b["class"];if(ac||bc)ac=ac||[],bc=bc||[],Array.isArray(ac)||(ac=[ac]),Array.isArray(bc)||(bc=[bc]),ac=ac.filter(nulls),bc=bc.filter(nulls),a["class"]=ac.concat(bc).join(" ");for(var key in b)key!="class"&&(a[key]=b[key]);return a};function nulls(val){return val!=null}return exports.attrs=function attrs(obj,escaped){var buf=[],terse=obj.terse;delete obj.terse;var keys=Object.keys(obj),len=keys.length;if(len){buf.push("");for(var i=0;i<len;++i){var key=keys[i],val=obj[key];"boolean"==typeof val||null==val?val&&(terse?buf.push(key):buf.push(key+'="'+key+'"')):0==key.indexOf("data")&&"string"!=typeof val?buf.push(key+"='"+JSON.stringify(val)+"'"):"class"==key&&Array.isArray(val)?buf.push(key+'="'+exports.escape(val.join(" "))+'"'):escaped&&escaped[key]?buf.push(key+'="'+exports.escape(val)+'"'):buf.push(key+'="'+val+'"')}}return buf.join(" ")},exports.escape=function escape(html){return String(html).replace(/&(?!(\w+|\#\d+);)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},exports.rethrow=function rethrow(err,filename,lineno){if(!filename)throw err;var context=3,str=require("fs").readFileSync(filename,"utf8"),lines=str.split("\n"),start=Math.max(lineno-context,0),end=Math.min(lines.length,lineno+context),context=lines.slice(start,end).map(function(line,i){var curr=i+start+1;return(curr==lineno?"  > ":"    ")+curr+"| "+line}).join("\n");throw err.path=filename,err.message=(filename||"Jade")+":"+lineno+"\n"+context+"\n\n"+err.message,err},exports}({});

// create our folder objects

// home.jade compiled template
exports.home = function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html><html lang="en"><head><title>PushState example</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300"><link rel="stylesheet" href="/lib/bootstrap-2.3.0/css/bootstrap.min.css"><link rel="stylesheet" href="/lib/bootstrap-2.3.0/css/bootstrap-responsive.min.css"><link rel="stylesheet" href="/lib/font-awesome-3.1.1/css/font-awesome.css"></head><body style="zoom:1;"><h1>hello world</h1><div id="testPushState"><a href="#showItems">get list of items</a><ul id="items"></ul></div><script src="/lib/jquery-1.9.1.min.js"></script><script src="/lib/bootstrap-2.3.0/js/bootstrap.min.js"></script><script src="/lib/json2.js"></script><script src="/lib/underscore-min.js"></script><script src="/lib/backbone-min.js"></script><script src="/lib/backbone.marionette.min.js"></script><script src="/js/templates.js"></script><script>// empty\nModels = [];</script><script src="/js/testPushState.js"></script></body></html>');
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

// layout.jade compiled template
exports.layout = function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300"><link rel="stylesheet" href="/lib/bootstrap-2.3.0/css/bootstrap.min.css"><link rel="stylesheet" href="/lib/bootstrap-2.3.0/css/bootstrap-responsive.min.css"><link rel="stylesheet" href="/lib/font-awesome-3.1.1/css/font-awesome.css"></head><body style="zoom:1;"><script src="/lib/jquery-1.9.1.min.js"></script><script src="/lib/bootstrap-2.3.0/js/bootstrap.min.js"></script><script src="/lib/json2.js"></script><script src="/lib/underscore-min.js"></script><script src="/lib/backbone-min.js"></script><script src="/lib/backbone.marionette.min.js"></script></body></html>');
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
        buf.push('<!DOCTYPE html><html lang="en"><head><title>PushState example</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300"><link rel="stylesheet" href="/lib/bootstrap-2.3.0/css/bootstrap.min.css"><link rel="stylesheet" href="/lib/bootstrap-2.3.0/css/bootstrap-responsive.min.css"><link rel="stylesheet" href="/lib/font-awesome-3.1.1/css/font-awesome.css"></head><body style="zoom:1;"><h1>hello world</h1><div id="testPushState"><a href="#showItems">get list of items</a><ul id="items"><div>');
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


// attach to window or export with commonJS
if (typeof module !== "undefined") {
    module.exports = exports;
} else if (typeof define === "function" && define.amd) {
    define(exports);
} else {
    root.templatizer = exports;
}

})();