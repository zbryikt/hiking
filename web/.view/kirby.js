 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_attrs(t,r){var a="";for(var s in t)if(pug_has_own_property.call(t,s)){var u=t[s];if("class"===s){u=pug_classes(u),a=pug_attr(s,u,!1,r)+a;continue}"style"===s&&(u=pug_style(u)),a+=pug_attr(s,u,!1,r)}return a}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_merge(e,r){if(1===arguments.length){for(var t=e[0],g=1;g<e.length;g++)t=pug_merge(t,e[g]);return t}for(var l in r)if("class"===l){var n=e[l]||[];e[l]=(Array.isArray(n)?n:[n]).concat(r[l]||[])}else if("style"===l){var n=pug_style(e[l]);n=n&&";"!==n[n.length-1]?n+";":n;var a=pug_style(r[l]);a=a&&";"!==a[a.length-1]?a+";":a,e[l]=n+a}else e[l]=r[l];return e}
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (Array, JSON, blockLoader, cssLoader, decache, escape, parentName, prefix, scriptLoader, version) {;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Chtml\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fldui.pug";
if(!ctrl) var ctrl = {};
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Fchevron-down.pug";





;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Fspinner.pug";





;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
var escjson = function(obj) { return 'JSON.parse(unescape("' + escape(JSON.stringify(obj)) + '"))'; };
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
var eschtml = (function() { var MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&#34;', "'": '&#39;' }; var repl = function(c) { return MAP[c]; }; return function(s) { return s.replace(/[&<>'"]/g, repl); }; })();
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";









;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if(!scriptLoader) { scriptLoader = {url: {}, config: {}}; }
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if(!decache) { decache = (version? "?v=" + version : ""); }
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
pug_mixins["script"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
scriptLoader.config = (config ? config : {});
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if (!scriptLoader.url[url]) {
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
scriptLoader.url[url] = true;
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if (/^https?:\/\/./.exec(url)) {
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + decache, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
};
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if(!cssLoader) { cssLoader = {url: {}}; }
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
pug_mixins["css"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
cssLoader.config = (config ? config : {});
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if (!cssLoader.url[url]) {
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
cssLoader.url[url] = true;
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + decache, true, true)) + "\u003E";
}
};
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if(!blockLoader) { blockLoader = {name: {}, config: {}}; }
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";










;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
var b64img = {};
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
b64img.px1 = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAAAAAAALAAAAAABAAEAQAICRAEAOw=="
;pug_debug_line = 39;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
var loremtext = {
  zh: "料何緊許團人受間口語日是藝一選去，得系目、再驗現表爸示片球法中轉國想我樹我，色生早都沒方上情精一廣發！能生運想毒一生人一身德接地，說張在未安人、否臺重壓車亞是我！終力邊技的大因全見起？切問去火極性現中府會行多他千時，來管表前理不開走於展長因，現多上我，工行他眼。總務離子方區面人話同下，這國當非視後得父能民觀基作影輕印度民雖主他是一，星月死較以太就而開後現：國這作有，他你地象的則，引管戰照十都是與行求證來亞電上地言裡先保。大去形上樹。計太風何不先歡的送但假河線己綠？計像因在……初人快政爭連合多考超的得麼此是間不跟代光離制不主政重造的想高據的意臺月飛可成可有時情乎為灣臺我養家小，叫轉於可！錢因其他節，物如盡男府我西上事是似個過孩而過要海？更神施一關王野久沒玩動一趣庭顧倒足要集我民雲能信爸合以物頭容戰度系士我多學一、區作一，過業手：大不結獨星科表小黨上千法值之兒聲價女去大著把己。",
  en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

;pug_debug_line = 45;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";







;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";













;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";















































;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_mixins["ldPaletteEditor"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ldp\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"name\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"colors\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"edit\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"inner\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-6\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ldColorPicker no-border no-palette\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-6\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"row mb-2\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-8\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cselect class=\"form-control form-control-local-sm\" value=\"rgb\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Coption value=\"rgb\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "RGB\u003C\u002Foption\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Coption value=\"hsl\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "HSL\u003C\u002Foption\u003E";
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Coption value=\"hcl\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "HCL\u003C\u002Foption\u003E\u003C\u002Fselect\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-4 pl-0\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control form-control-local-sm value\" placeholder=\"Hex Value\" data-tag=\"hex\" style=\"margin:0\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
var configs = [["Red", "Green", "Blue", "rgb", "active"], ["Hue", "Saturation", "Luminance", "hsl",""], ["Hue", "Chroma", "Luminance", "hcl",""]];
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
// iterate configs
;(function(){
  var $$obj = configs;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var config = $$obj[pug_index2];
;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["row","config",config[4]], [false,false,true]), false, true)+pug_attr("data-tag", config[3], true, true)) + "\u003E";
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-8\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[0]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[0][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[1]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[1][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[2]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 44;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[2][0].toLowerCase(), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-4\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[0][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[1][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 51;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[2][0].toLowerCase(), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var config = $$obj[pug_index2];
;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["row","config",config[4]], [false,false,true]), false, true)+pug_attr("data-tag", config[3], true, true)) + "\u003E";
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-8\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[0]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[0][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[1]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[1][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[2]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 44;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[2][0].toLowerCase(), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-4\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[0][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[1][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 51;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[2][0].toLowerCase(), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 55;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";





























































































































;pug_debug_line = 93;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";












;pug_debug_line = 97;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
var anikit = {"groupName":["No Animation","Popular Animation","Repeat Animation","Transition"],"members":[[["static","static"]],[["blink","blink"],["bounce","bounce"],["bounce-in","bounce-in"],["bounce-out","bounce-out"],["breath","breath"],["fade","fade"],["flip-h","flip (horizontally)"],["float-btt-in","float-in (bottom to top)"],["slide-ltr","slide (left to right)"],["spin","spin"],["tremble","tremble"]],[["beat","beat"],["blink","blink"],["blur","blur"],["bounce","bounce"],["bounceAlt","bounceAlt"],["breath","breath"],["clock","clock"],["coin-h","coin (horizontally)"],["coin-v","coin (vertically)"],["cycle","cycle"],["cycle-alt","cycle-alt"],["damage","damage"],["dim","dim"],["fade","fade"],["flip","flip"],["flip-h","flip (horizontally)"],["flip-v","flip (vertically)"],["float","float"],["heartbeat","heartbeat"],["hit","hit"],["jelly","jelly"],["jelly-alt","jelly-alt"],["jingle","jingle"],["jump","jump"],["measure","measure"],["metronome","metronome"],["move-btt","move (bottom to top)"],["move-fade-btt","move faded (bottom to top)"],["move-fade-ltr","move faded (left to right)"],["move-fade-rtl","move faded (right to left)"],["move-fade-ttb","move faded (top to bottom)"],["move-ltr","move (left to right)"],["move-rtl","move (right to left)"],["move-ttb","move (top to bottom)"],["orbit","orbit"],["pulse","pulse"],["rubber-h","rubber (horizontally)"],["rubber-v","rubber (vertically)"],["rush-btt","rush (bottom to top)"],["rush-ltr","rush (left to right)"],["rush-rtl","rush (right to left)"],["rush-ttb","rush (top to bottom)"],["shake-h","shake (horizontally)"],["shake-v","shake (vertically)"],["shiver","shiver"],["skew","skew"],["skew-alt","skew-alt"],["slide-btt","slide (bottom to top)"],["slide-ltr","slide (left to right)"],["slide-rtl","slide (right to left)"],["slide-ttb","slide (top to bottom)"],["smash","smash"],["spin","spin"],["spin-fast","spin-fast"],["squeeze","squeeze"],["surprise","surprise"],["swim","swim"],["swing","swing"],["tick","tick"],["tick-alt","tick-alt"],["tremble","tremble"],["vortex","vortex"],["vortex-alt","vortex-alt"],["wander-h","wander (horizontally)"],["wander-v","wander (vertically)"],["wrench","wrench"]],[["blur-in","blur-in"],["blur-out","blur-out"],["bounce-alt-in","bounce-alt-in"],["bounce-alt-out","bounce-alt-out"],["bounce-in","bounce-in"],["bounce-out","bounce-out"],["fade-in","fade-in"],["fade-out","fade-out"],["fall-btt-in","fall-in (bottom to top)"],["fall-ltr-in","fall-in (left to right)"],["fall-rtl-in","fall-in (right to left)"],["fall-ttb-in","fall-in (top to bottom)"],["flip-h-in","flip-in (horizontally)"],["flip-h-out","flip-out (horizontally)"],["flip-v-in","flip-in (vertically)"],["flip-v-out","flip-out (vertically)"],["float-btt-in","float-in (bottom to top)"],["float-btt-out","float-out (bottom to top)"],["float-ltr-in","float-in (left to right)"],["float-ltr-out","float-out (left to right)"],["float-rtl-in","float-in (right to left)"],["float-rtl-out","float-out (right to left)"],["float-ttb-in","float-in (top to bottom)"],["float-ttb-out","float-out (top to bottom)"],["grow-btt-in","grow-in (bottom to top)"],["grow-btt-out","grow-out (bottom to top)"],["grow-ltr-in","grow-in (left to right)"],["grow-ltr-out","grow-out (left to right)"],["grow-rtl-in","grow-in (right to left)"],["grow-rtl-out","grow-out (right to left)"],["grow-ttb-in","grow-in (top to bottom)"],["grow-ttb-out","grow-out (top to bottom)"],["jump-alt-in","jump-alt-in"],["jump-alt-out","jump-alt-out"],["jump-in","jump-in"],["jump-out","jump-out"],["power-off","power-off"],["power-on","power-on"],["rush-btt-in","rush-in (bottom to top)"],["rush-ltr-in","rush-in (left to right)"],["rush-rtl-in","rush-in (right to left)"],["rush-ttb-in","rush-in (top to bottom)"],["slide-btt-in","slide-in (bottom to top)"],["slide-btt-out","slide-out (bottom to top)"],["slide-ltr-in","slide-in (left to right)"],["slide-ltr-out","slide-out (left to right)"],["slide-rtl-in","slide-in (right to left)"],["slide-rtl-out","slide-out (right to left)"],["slide-ttb-in","slide-in (top to bottom)"],["slide-ttb-out","slide-out (top to bottom)"],["spring-btt-in","spring-in (bottom to top)"],["spring-ltr-in","spring-in (left to right)"],["spring-rtl-in","spring-in (right to left)"],["spring-ttb-in","spring-in (top to bottom)"],["throw-btt-in","throw-in (bottom to top)"],["throw-ltr-in","throw-in (left to right)"],["throw-rtl-in","throw-in (right to left)"],["throw-ttb-in","throw-in (top to bottom)"],["vortex-alt-in","vortex-alt-in"],["vortex-alt-out","vortex-alt-out"],["vortex-in","vortex-in"],["vortex-out","vortex-out"],["zoom-in","zoom-in"],["zoom-out","zoom-out"]]],"group":{"static":[["static","static"]],"popular":[["blink","blink"],["bounce","bounce"],["bounce-in","bounce-in"],["bounce-out","bounce-out"],["breath","breath"],["fade","fade"],["flip-h","flip (horizontally)"],["float-btt-in","float-in (bottom to top)"],["slide-ltr","slide (left to right)"],["spin","spin"],["tremble","tremble"]],"repeat":[["beat","beat"],["blink","blink"],["blur","blur"],["bounce","bounce"],["bounceAlt","bounceAlt"],["breath","breath"],["clock","clock"],["coin-h","coin (horizontally)"],["coin-v","coin (vertically)"],["cycle","cycle"],["cycle-alt","cycle-alt"],["damage","damage"],["dim","dim"],["fade","fade"],["flip","flip"],["flip-h","flip (horizontally)"],["flip-v","flip (vertically)"],["float","float"],["heartbeat","heartbeat"],["hit","hit"],["jelly","jelly"],["jelly-alt","jelly-alt"],["jingle","jingle"],["jump","jump"],["measure","measure"],["metronome","metronome"],["move-btt","move (bottom to top)"],["move-fade-btt","move faded (bottom to top)"],["move-fade-ltr","move faded (left to right)"],["move-fade-rtl","move faded (right to left)"],["move-fade-ttb","move faded (top to bottom)"],["move-ltr","move (left to right)"],["move-rtl","move (right to left)"],["move-ttb","move (top to bottom)"],["orbit","orbit"],["pulse","pulse"],["rubber-h","rubber (horizontally)"],["rubber-v","rubber (vertically)"],["rush-btt","rush (bottom to top)"],["rush-ltr","rush (left to right)"],["rush-rtl","rush (right to left)"],["rush-ttb","rush (top to bottom)"],["shake-h","shake (horizontally)"],["shake-v","shake (vertically)"],["shiver","shiver"],["skew","skew"],["skew-alt","skew-alt"],["slide-btt","slide (bottom to top)"],["slide-ltr","slide (left to right)"],["slide-rtl","slide (right to left)"],["slide-ttb","slide (top to bottom)"],["smash","smash"],["spin","spin"],["spin-fast","spin-fast"],["squeeze","squeeze"],["surprise","surprise"],["swim","swim"],["swing","swing"],["tick","tick"],["tick-alt","tick-alt"],["tremble","tremble"],["vortex","vortex"],["vortex-alt","vortex-alt"],["wander-h","wander (horizontally)"],["wander-v","wander (vertically)"],["wrench","wrench"]],"transition":[["blur-in","blur-in"],["blur-out","blur-out"],["bounce-alt-in","bounce-alt-in"],["bounce-alt-out","bounce-alt-out"],["bounce-in","bounce-in"],["bounce-out","bounce-out"],["fade-in","fade-in"],["fade-out","fade-out"],["fall-btt-in","fall-in (bottom to top)"],["fall-ltr-in","fall-in (left to right)"],["fall-rtl-in","fall-in (right to left)"],["fall-ttb-in","fall-in (top to bottom)"],["flip-h-in","flip-in (horizontally)"],["flip-h-out","flip-out (horizontally)"],["flip-v-in","flip-in (vertically)"],["flip-v-out","flip-out (vertically)"],["float-btt-in","float-in (bottom to top)"],["float-btt-out","float-out (bottom to top)"],["float-ltr-in","float-in (left to right)"],["float-ltr-out","float-out (left to right)"],["float-rtl-in","float-in (right to left)"],["float-rtl-out","float-out (right to left)"],["float-ttb-in","float-in (top to bottom)"],["float-ttb-out","float-out (top to bottom)"],["grow-btt-in","grow-in (bottom to top)"],["grow-btt-out","grow-out (bottom to top)"],["grow-ltr-in","grow-in (left to right)"],["grow-ltr-out","grow-out (left to right)"],["grow-rtl-in","grow-in (right to left)"],["grow-rtl-out","grow-out (right to left)"],["grow-ttb-in","grow-in (top to bottom)"],["grow-ttb-out","grow-out (top to bottom)"],["jump-alt-in","jump-alt-in"],["jump-alt-out","jump-alt-out"],["jump-in","jump-in"],["jump-out","jump-out"],["power-off","power-off"],["power-on","power-on"],["rush-btt-in","rush-in (bottom to top)"],["rush-ltr-in","rush-in (left to right)"],["rush-rtl-in","rush-in (right to left)"],["rush-ttb-in","rush-in (top to bottom)"],["slide-btt-in","slide-in (bottom to top)"],["slide-btt-out","slide-out (bottom to top)"],["slide-ltr-in","slide-in (left to right)"],["slide-ltr-out","slide-out (left to right)"],["slide-rtl-in","slide-in (right to left)"],["slide-rtl-out","slide-out (right to left)"],["slide-ttb-in","slide-in (top to bottom)"],["slide-ttb-out","slide-out (top to bottom)"],["spring-btt-in","spring-in (bottom to top)"],["spring-ltr-in","spring-in (left to right)"],["spring-rtl-in","spring-in (right to left)"],["spring-ttb-in","spring-in (top to bottom)"],["throw-btt-in","throw-in (bottom to top)"],["throw-ltr-in","throw-in (left to right)"],["throw-rtl-in","throw-in (right to left)"],["throw-ttb-in","throw-in (top to bottom)"],["vortex-alt-in","vortex-alt-in"],["vortex-alt-out","vortex-alt-out"],["vortex-in","vortex-in"],["vortex-out","vortex-out"],["zoom-in","zoom-in"],["zoom-out","zoom-out"]]}};
;pug_debug_line = 98;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";























































































;pug_debug_line = 111;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";














































;pug_debug_line = 117;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
prefix = function(n) { return (!n?[]:(Array.isArray(n)?n:[n])).map(function(it){ return `${prefix.currentName}$${it}`; }).join(' ');}
;pug_debug_line = 118;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_mixins["scope"] = pug_interp = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 119;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
var prentName = prefix.currentName;
;pug_debug_line = 120;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
prefix.currentName = name;
;pug_debug_line = 121;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
if (attributes.class && /naked-scope/.exec(attributes.class)) {
;pug_debug_line = 122;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
block && block();
}
else {
;pug_debug_line = 124;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"ld-scope": pug_escape(name || '')},attributes]), true)) + "\u003E";
;pug_debug_line = 125;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
;pug_debug_line = 126;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
prefix.currentName = parentName;
};
;pug_debug_line = 127;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";





;pug_debug_line = 131;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";












;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Chead\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css");
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("assets/lib/ldui/ldui.min.css");
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cstyle type=\"text\u002Fcss\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "html,\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n.hill {\n  background: #eee;\n  cursor: pointer;\n  transition: order 0.35s ease-in-out;\n  width: 90px;\n}\n.hill .id {\n  color: #f00;\n}\n.hill.active {\n  background: #1b5;\n  color: #fff;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.3);\n}\n.hill.active .id {\n  color: #fff;\n}\nsvg {\n  width: 100%;\n  height: 100%;\n}\npath {\n  fill: #eee;\n  stroke: #ccc;\n  stroke-width: 0.02;\n}\ncircle {\n  fill: #999;\n  fill-opacity: 0.3;\n  stroke: #777;\n  stroke-width: 0.02;\n  stroke-opacity: 0.5;\n}\ncircle.active {\n  fill: #f00;\n  fill-opacity: 0.5;\n  stroke: #d00;\n  stroke-width: 0.02;\n}\n\u003C\u002Fstyle\u003E\u003C\u002Fhead\u003E";
;pug_debug_line = 45;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cbody\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fdata.pug";
var hills = [{"id":"001","name":"大屯山","altitude":1092,"location":"臺北市北投區、新北市淡水區、三芝區","brief":"位列大屯火山群最西側一列群峰之主，大屯山山形呈長條狀，山勢圓潤、山基寬闊，雖不若竹子山、七星山那樣趾高氣昂，但連同其西側大屯南、西峰與面天、向天火山與其附屬火山菜公坑山一字排開，諸峰競立，並列台北盆地北天，氣勢非凡。","feature":"大屯山命名據說是來自山麓的凱達格蘭族舊社「大屯社」。大洞山社，原名為「大洞山」，似乎與山上有「洞」有關，漢人進住後，見山形似豬的背脊，故稱之「大豚山」，後改名為「大屯山」。可見此山與鄰近住民歷史淵源之久遠，清領時期，「大屯春色」為昔日台灣八景之一。一直到今日，山頂常年遊人如織。\n由於位偏大屯火山群西南，東北季風衝擊較小，四季皆可欣賞陽明山豐富生態。春天各類杜鵑與百花競放，初夏蝴蝶花廊覓飛仙，秋天的芒花海與冬天的楓紅甚至雪景，拜訪鄰近的蝴蝶花廊、大屯自然公園、二子坪，可以深入體驗大屯山生態的精采多變！由於位偏大屯火山群西南，東北季風衝擊較小，四季皆可欣賞陽明山豐富生態。","season":"四季皆宜；1-3月楓紅櫻花，4-5月蝴蝶花廊滿滿綠意春色無邊，4-10月蝶飛鳥鳴，11-12月秋芒似海，也是登高遠眺臺北市區夜景的最佳觀景點。","schedule":"1.大屯山車道可達民航局大屯山助航台。\n2.鞍部氣象站停車場／0.9K →大屯山主峰／0.7k→大屯山助航站／1.1K →二子坪遊憩區／1.7K →二子坪遊客中心／0.4K →鞍部氣象站停車場( 環型路線)，全程花費2.5-3小時。","traffic":"開車／自仰德大道上陽明山，過竹仔湖後於七星山站左轉入巴拉卡公路（01甲），過大屯鞍部後左側停車場有路可直通山頂。\n搭車／搭260公車或紅5公車至陽明山總站，轉搭國家公園108遊園專車，至大屯自然公園鞍部氣象站，至停車場沿步道上登。","note":"大屯山登山步道大都為柏油路或石階步道；大屯群峰步道大都為四通發達，但也有眾多小路易造成迷途，西峰南峰較為濕滑陡峭部分路段需拉繩。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/8c9b1136-39d0-499b-a4bb-f449be47d5ad.jpg","lat":25.17667147,"lng":121.52195728},{"id":"002","name":"七星山","altitude":1120,"location":"臺北市北投區","brief":"臺灣府志記載：「七星山七峰錯落，圓秀如星，故名。」，七星山位於大屯火山群核心區域，北有竹子- 小觀音連稜、西方大屯群、南方紗帽小草山坐鎮、東有磺嘴群峰護衛，主山為陽明山的王者。許多台北人曾多次登臨這座凱達格蘭族的聖山，一等三角點的氣勢引領周遭群峰。","feature":"七星山是大屯火山中噴發年代最晚，火山錐地形保留最完整的一座。最早的噴發活動在約150至130萬年前。後來火山活動靜止50 萬年後，又於80萬年前再次噴發，一直到22萬年前寄生火山紗帽山結束活動，形成現今七星山主要山體和周圍寄生火山群，是認識火山地形的絕佳處所。\n夢幻湖位於七星山東側山腰凹穴，因發現特有種寒帶蕨類「台灣水韭」而揚名全國，也是國家公園內三個生態保護區之一，有豐富的濕地演替生態特色。另外小油坑的硫氣爆裂孔地質景觀、忽隱忽現神秘的七星池，山腰的七星公園腹地廣大，都是七星山的著名吸睛場景。","season":"四季皆宜，最適合賞櫻（12~4月）、杜鵑（3~7月）、菅芒（10~11月），冬季賞雪（12~3月，視機遇）。可360度的全覽北市、北海岸等地。","schedule":"1.小油坑登山口／1.6k→七星山峰，約1小時登頂。\n2.冷水坑登山口／2.1k→七星山主峰，約1.5個小時登頂。\n3.苗圃登山口／2.27k→七星山主峰，約2個小時登頂。","traffic":"開車／自仰德大道上陽明山，續行陽金公路經竹子湖抵小油坑遊客中心。\n搭車／搭260公車或於士林捷運站搭紅5 公車至陽明山總站，轉搭108 遊園專車至小油坑站起登；或於台北車站搭皇家客運至小觀音山站起登。","note":"七星山除苗圃線，全線多在無大樹遮陰的步道且多石階路，應備齊防曬、防中暑與保護膝蓋的裝備。寒流來臨時容易下霰，步道易滑需有適當配備才能前往。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/072449bc-6bf0-42db-82c6-682b891fa740.jpg","lat":25.17069939,"lng":121.55344417},{"id":"003","name":"大武崙山","altitude":231,"location":"基隆市中山區、安樂區","brief":"位於基隆港西北方，山頂附近地勢渾圓，北面卻陡峭入海，清時被選為砲台所在，是所有基隆港周邊砲台位置最高、離港最遠的一座。公園入口右側上登五分鐘可抵達基點，周邊芒草圍繞，可安靜享用北海之水天一色。","feature":"大武崙砲台建於清光緒年間，但早在道光鴉片戰爭時期，姚瑩就已在附近駐守過。中法戰爭期間劉銘傳更派兵防守，抵抗法國人。砲台區規劃非常完整，4座大砲的絞盤區、地上營房、山洞營房、避彈坑、觀測台、彈藥坑、儲水池與廁所均在，不得不佩服古人的設計理念。\n大武崙西測山腰處有個二公頃Y 字型的天然湖泊「情人湖」，舊名五義埤，是基隆地區聞名已久的風景區，這的湖山之美，與大武崙砲台同為必遊景點，由此仰望大武崙，配合周圍蔥鬱樹林，水波時興，十分愜意逍遙。","season":"登大武崙砲台，既能眺望山海，兼賞古蹟，可說是一舉數得，秋冬之際為賞鳥勝地，尤其是賞鷹。建議秋天前往，視界清楚，北海特有的碧海藍天不可錯過。","schedule":"1.大武崙砲台停車場路線→砲台入口右側小徑，步行3分鐘即可登頂。\n2.情人湖站路線→沿基金一路208巷上山，步行約30分鐘即可登頂。","traffic":"開車／國道三號基金交流道下車，西北往萬里方向約500公尺後右轉208巷，先抵情人湖風景區的火車頭入口，再抵砲台公園入口。\n搭車／可搭往金山、萬里的基隆客運，在「情人湖」站下車，到208巷步行上山。","note":"全程為寬闊步道，登基點前為稍須鑽行的小徑；冬季東北季風較強時節海風凜冽，梅雨季節也避免前往以策安全，夏季前往則要注意防曬。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/09b33e33-bc5e-400a-8c6f-10f48ef0d40e.jpg","lat":25.15851206,"lng":121.70971536},{"id":"004","name":"槓子寮山","altitude":163,"location":"基隆市信義區、中正區","brief":"槓子寮位於基隆港東北側，山稜彎曲如月牙，面對海洋的一面峭壁陡崖連綿，形勢險要。基點位於西側饅頭山163公尺峰上，砲台區則在東側平坦區。從東光路旁產道登頂最快；自海洋大學方向雖攀爬較遠，五月卻有螢火蟲盛宴。","feature":"槓子寮之名源於馬賽語( 凱達格蘭系統)「陷阱」的意思。清光緒年間，在此建築砲台防守基隆港，有營房、廁所、砲絞盤、觀測台、庫房等設施，規模相當大，最特別的是觀測台與砲盤區之間有通話孔連絡用，這種設施在其他的砲台並未見到。\n攀登槓子寮基點，除了遊覽砲台遺跡，觀覽海天一色之美外，別忘了下山到碧砂漁港大啖海鮮，海堤上的日出日落之美也值得停留。另外八斗子的忘幽谷、和平島的千疊敷也可一同順遊。","season":"龍崗步道全長約2公里，具有自然、觀景、健行、賞蝶等多種休憩功能，夏季是賞螢的最佳地點，可俯瞰基隆嶼及八斗子漁港全貌，景色宜人。","schedule":"1.開車由祥豐街轉立德路、經二信中學後直達，登山口起登僅需3分鐘即可到達三角點。\n2.從海洋大學沿「龍崗步道」的環狀水泥小徑步行上山，步行約30-40分鐘即可登頂。","traffic":"開車／由中山高進入基隆市區後，循東北角濱海公路路標前進，可抵達海洋大學，停車後可由校內攀登。\n搭車／搭乘基隆客運往八斗子、瑞芳或福隆的公車，在海洋大學站下車。","note":"步行路況為傳統山徑以及水泥步道，原始生態豐富，夏秋季節須注意蜂蛇出沒；從海洋大學校內循步道攀登，環境潮濕，山徑不大，上產道前較為陡峭。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/f5f57732-cfd1-4c4a-a119-af7342ba0734.jpg","lat":25.1431125,"lng":121.77565839},{"id":"005","name":"觀音山","altitude":616,"location":"新北市八里區","brief":"在大屯雄姿襯托下，隔著淡水河對望的觀音山則顯婉約。觀音臥姿的輪廓，稜線轉折強有力卻不失優雅，穩立在大台北西緣。由於山容雅致，彷彿一橫臥之觀音像，因而得名。","feature":"觀音山同屬大屯火山群，奇峰林立，稱為十八連峰。噴發時間約為60萬至20萬年前，火山錐體多已不完整，僅占山（尖山）仍有精緻的對稱圓錐。火山作用形成的安山岩，質地細密堅硬，在當地稱為觀音石，作為建築石材之歷史悠久，可在當地古建築或古墓中見到其特有的色澤。\n1960年代開始，憲兵學校學員開闢由凌雲禪寺旁直上稜線的路徑，並在此訓練硬漢精神，從此硬漢嶺之名不脛而走，步道旁及山頂至今還留著石碑和牌樓。從這條硬漢坡以連續陡上著稱，平日體能狀況在此見真章！","season":"觀音山視野極佳，可俯瞰台灣海峽、淡水河、關渡生態平原，能見度極佳時可望見聖稜線、南湖群峰等。每年春秋兩季赤腹鷹及灰面鵟鷹過境是賞鷹時機，6、7月間盛產綠竹筍。惟冬季多雨，季風強襲，也別有一番風味。","schedule":"1.由凌雲禪寺旁進入，走硬漢嶺步道登觀音山，大約1小時的路程。\n2.從觀音山旅遊服務中心後方進入，登上硬漢嶺，大約1小時的路程。","traffic":"開車／台64線快速道路，在「觀音山」交流道下，沿凌雲路三段上山，至「觀音山」站牌即可起登，或再上至觀音山旅遊服務中心起登，較為容易。\n搭車／搭乘三重客運北門至觀音山班車，每40-50分一班。可抵觀音山各景點及遊客中心。","note":"觀音山有6條登山路線，各有不同特色。上登前先拉筋暖身，以穩定速度前進，腳步配合呼吸，登上稜線前步道稍微陡峭，可調整步伐，硬漢路石階陡上坡挑戰，記得多補充水分。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/32c3c881-9aed-4e3e-b708-ee8ea5b0ed31.jpg","lat":25.13602831,"lng":121.42672058},{"id":"006","name":"基隆山","altitude":588,"location":"新北市瑞芳區","brief":"基隆山佇立於瑞芳區之濱，為金、九一帶令人印象深刻的地標；也是九份、金瓜石地區的界山。因山形如舊日圓頂形的雞籠而被稱為「雞籠山」。","feature":"別名「大肚美人山」的基隆山雖是火山，但形成原因卻屬於入侵岩漿隆起而未噴發，再經外力侵蝕，而造就其獨特的山容。明、清航行台灣外海的船隻，都以其顯著的山型做為辨識與校正方位的依據，自古至今，都有其獨特的地位。\n攀登基隆山，當然不能不順遊全台代表性的黃金山城九份、金瓜石，從清末到日據的繁華，再到六、七十年代的沒落，而今搖身一變成為北部最夯的旅遊勝地。來越多次，你會發現越多祕境與感動。","season":"基隆山位於山海之交界，位置絕佳，視野遼闊，360度的環繞展望，可眺望八斗子、瑞濱的鋸齒狀海景及山下的九份、金瓜石聚落。最佳登臨季節以春秋為宜，尤其是春天登基隆山杜鵑花色繽紛。","schedule":"從登山口到山頂途中有三座涼亭可供休憩，山頂有天線基地台和觀景平台觀濤坪，路程約30至40分鐘。","traffic":"開車／從八堵交流道或萬瑞產業道路抵達瑞芳後，過基隆河右轉明燈路，上山經九份山城抵隔頂登山口。注意假日管制小車上山。\n搭車／可自瑞芳或基隆搭基隆客運往金瓜石線，在隔頂下車。或自中崙搭往金九的班車。","note":"基隆山區都是全台東北季風最旺盛的地區，每到冬日，淒風苦雨，寒冷終日。登山步道稜線為陡峭的階梯步道，春花秋芒季節，登頂可眺山海大景。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/b5caa039-f3e9-42b2-afde-d4fdc2398148.jpg","lat":25.11873969,"lng":121.84909203},{"id":"007","name":"紅淡山","altitude":210,"location":"基隆市仁愛區、信義區","brief":"紅淡山位於基隆港區南方，山頂展望十分優良，一般自三坑附近寶明寺攀登。紅淡山原名雙龍山，在清時亦設有砲台，日據時期因日人懷念故鄉，特別在此山附近廣植森氏紅淡比，而被稱紅淡山至今。","feature":"紅淡山在清時亦設有砲台，規模不及基隆五大砲台。全山林木蔥鬱，因此即使在盛夏時分攀登，也不覺得酷熱難耐。山嶺直逼基隆市最熱鬧的核心地區，卻又保留了鬱鬱蔥蔥的森林之美，是市民晨昏運動的自然公園，因此登山步道繁多如蛛網。\n登頂展望，俯瞰基隆港灣與繁華市景，讓人深深感動港都的活力與魅力。攀登完紅淡山後當然不可錯過遊覽這個充滿特色風情的基隆市區。廟口夜市、中正公園與海門天險，皆是可以順遊的知名景點。","season":"紅淡山區鳥類及昆蟲資源豐富，隨著季節的轉變，有不同的候鳥棲息，一年四季皆有花可賞，紅淡比樹花期為每年1至6月，2至4月山櫻花綻放，5、6月油桐花、杜鵑花，7至11月紫薇。","schedule":"1.北側劉銘傳路登山口：銘傳國中→幸福亭→好漢坡→紫薇亭→梅花亭→紅淡山，約30-40分鐘登頂。\n2.西北側南天宮登山口：入口牌樓→協安宮→高頻轉播台→觀景台→梅花亭→紅淡山，約1小時登頂。\n3.西南側寶明寺：佛光洞→紅淡山，約1小時登頂。","traffic":"開車／由八堵交流道下接南榮路往基隆市區的方向，行至463巷後由寶明寺牌樓下開始上登。\n搭車／在台鐵搭程往基隆的通勤電車，於三坑站下車，步行數分鐘即可抵達寶明寺牌樓上登。","note":"冬季東北季風盛行，注意天氣狀況再出發。\n步行路況：全程為水泥階梯步道。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/7132c51e-6aed-43bc-b4b0-65e810461f10.jpg","lat":25.11887197,"lng":121.75193283},{"id":"008","name":"大崙頭山","altitude":478,"location":"臺北市士林區、內湖區","brief":"大崙頭山位於內湖與士林交接的最高稜脈上，隔著「碧山路」與大崙尾山相望，由此登頂輕鬆愜意。由於交通便捷，與碧山嚴、雙溪風景區串連，常為鄰近居民晨昏運動的後山公園。大崙頭山頂廣闊，有瞭望台與涼亭，適合大團體活動。","feature":"從內湖前往大崙尾絕對不能錯過北台灣知名廟宇──碧山巖，供奉漳州信仰的「開漳聖王」陳元光，初建於康熙年間；乾隆年間曾發生供奉的山石爆裂為三塊，嚇走群聚山麓的土匪，自此香火鼎盛，成為號稱全台最大的開漳聖王廟。廟內雕刻精緻，建築雄偉壯麗，也是內湖區最大的廟宇。\n碧山巖廟前廣場展望一流，特別是晨昏與入夜時分，繁華台北夜景與盆地風光堪稱一絕，是攝影家挑戰夜景攝影必到景點。附近的白石湖農園區、最新的白石湖龍骨吊橋、碧山露營場也是闔家或團體旅遊的好去處。體力好的人，可一日連登南方的內湖三尖。\n","season":"大崙頭山是內湖區最高的山脈，登高望遠視野遼闊，密林蓊鬱，青青翠翠有濃密樹林可遮蔭，春夏秋冬都適合走的親山步道，秋芒迎風搖曳，也是觀看大冠鷲最佳位置。","schedule":"1.碧山產業道路：大崙頭山登山口→大崙頭山，約10分鐘登頂。\n2.中社區登山口：產業道路→大崙尾山→大崙頭山，約1小時登頂。","traffic":"開車／由內湖金龍路右轉接碧山路，經碧山巖、碧山露營場後，抵登山口，右轉至大崙湖可停車上登。\n搭車／內湖國小搭小2公車，過碧山巖後於恆光禪寺站下車，再選擇左側柏油路抵大崙湖後上登。","note":"有泥土路與石階路兩種選擇，建議下坡走泥土路，保護膝蓋；攀登前暖身，行進間適度休息；休息時記得補充水分與熱量。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/ca9ee6ec-a52e-4e2e-bb84-146c179ea162.jpg","lat":25.1087912,"lng":121.5853783},{"id":"009","name":"劍潭山","altitude":153,"location":"臺北市中山區、士林區","brief":"劍潭山位於五指山列西南延伸最末端小丘，如一把劍插入台北盆地北緣，直逼基隆河，因此這裡成為觀覽台北盆地的好去處。\n今日屬圓山風景區。相傳鄭成功曾經帶軍隊來到此處，因為缺水擲劍於地，竟冒出甘泉，故名劍潭。","feature":"戒嚴時期，劍潭山南北各有士林、七海官邸相臨，又位於市區制高點，雖然鄰近圓山風景區與士林繁華鬧區，卻被列為軍事管制區禁止民眾進入。如今沿途林蔭、展望優美坡緩易行的郊山步道，已使劍潭山成為附近居民的日常運動小丘了！\n劍潭山周邊是台北北區的重點旅遊區域，無論是金碧輝煌的圓山大飯店，低調神秘的圓山神社，還有號稱台北最大夜市的士林夜市，讓人無法在短時間內逛完。此外，士林官邸、忠烈祠、美術館、花博展館園區等，都是攀登劍潭山不可錯過的賞玩去處。","season":"劍潭山步道沿途可以欣賞圓山飯店、河濱公園景致，更可遠眺臺北市區，欣賞飛機起降、飽覽基隆河沿岸風光、圓山風景區夜景。全年皆適合攀登。","schedule":"1.中山北路四段公車劍潭站登山口→大忠宮→基石處，約30分鐘登頂。\n2.通北街165巷登山口→老地方→基石處，約1小時登頂。","traffic":"開車／循道路上圓山大飯店，於後方停車場停車，循步道上登，或在士林夜市停車場停車，過中山北路循步道上登。\n搭車／捷運劍潭站下車，出站後過中山北路往南行，即可抵圓山風景區步道入口。","note":"步道為水泥路與石階步道；夕陽美景吸引眾多遊客，如於黃昏時上登，劍潭站附近停車較困難，建議搭捷運前往攀登最為便捷！","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/d9d11d6c-f42e-467c-beef-1f0047b399a6.jpg","lat":25.08427306,"lng":121.52929889},{"id":"010","name":"五分山","altitude":757,"location":"新北市瑞芳區、平溪區","brief":"五分山是五分山列最東北的大山，是由瑞芳、平溪、基隆、汐止、石碇延伸到台北市漫長山列的最高峰，每年冬天面對惡劣的東北季風無情吹襲，讓山稜上成為白背芒與箭竹林的天下。","feature":"五分山步道西至頂子寮山附近，北可下暖東峽谷，南則經新平溪煤礦博物館至十分，是以前淡蘭古道「十分古道」的走法。清道光年間發展出這條越嶺道，之後入蘭道路系統又更往內陸發展，菁桐古道、外垵古道逐漸取而代之，十分古道因此漸趨沒落。山頂可欣賞北方的基隆山、開闊的港灣海濱，與基隆、瑞芳一帶市鎮。\n如果走完五分山整個步道，最終會抵達新平溪煤礦博物館，可以了解平溪與台灣煤礦發展輝煌的過往。山頂附近的圓頂雷達站是此山的鮮明標誌，西峰眺望亭可展望芒花翻飛景觀。下至平溪風景區，更別忘探訪附近的諸多瀑布與鐵道。","season":"由瞭望台遠望平溪方向，稜線步道有如萬里長城一般呈現於眼前。秋芒、雲海、夜景、夕照、晨光、山海景觀，秋冬健行舒適愜意。","schedule":"1.五分山登山口→五分山，約10分鐘登頂。(106縣道74.5K處往五分山氣象雷達站，車停登山口步道旁)\n2.新平溪煤礦博物園區→嶺頭福德宮→五分山西峰瞭望亭→五分山，約2小時登頂。","traffic":"開車／自八堵交流道循省2 丁往瑞芳，於魚桀魚坑右轉106縣道，於74k附近右轉五分山公路，到底前200公尺即通往山頂、西峰眺望亭與花崗岩萬里長程石階路口。\n搭車／於木柵搭乘台北客運1076線，於十分寮站下車，至新平溪煤礦博物館起登。","note":"建議於11月左右秋芒季節造訪，不但天氣舒爽，更可欣賞壯觀芒花翻飛！夏季宜注意防曬，但東北季風增強時，還要注意防風和保暖。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/a52bc4ec-b40a-4871-b8fb-f10c0c912e37.jpg","lat":25.07095197,"lng":121.78065475},{"id":"011","name":"姜子寮山","altitude":729,"location":"基隆市暖暖區、新北市汐止區、平溪區","brief":"姜子寮地名緣於西北側溪谷曾以獵捕(或說養殖) 山羌聞名。姜子寮山位於基隆、汐止、平溪交界，是姜子寮山列的第二高峰與基隆市的第一高峰，但非最高點。氣勢恢宏，主稜北緩南陡。","feature":"此山雖位於台北近郊，卻因山體廣大路途遙遠而成為北郊群山中有名的「折磨人」挑戰路線。2004 年基隆市政府闢建由泰安產道登頂的豪華枕木登山道，讓姜子寮一躍而為大眾化郊山，也因此晉身小百岳之列。從七堵泰安產業道路底，循枕木步道上登，不到一小時可愜意攻頂，山頂360度展望景觀絕佳。\n由充滿工業與貨櫃氣味的五堵- 七堵區進入泰安產業道路，好像進入了另一個世界，這裡青山層巒圍繞，古樸小屋偶爾出現，沿途還有規劃良好的泰安瀑布短程步道景致優美、座落山林間綠意舒爽，值得放慢腳步細細體驗。","season":"山頂360度的無敵展望，春櫻、秋芒和柳杉林，7、8月還可能看見稀有珍貴的的艷紅鹿子百合，附近還有瀑布和古道。","schedule":"姜子寮山登山口(泰安產業道路底停車場) →稜線叉路口→姜子寮山，約1小時登頂。","traffic":"開車／自台北走新台五線，經汐止過百福車站後注意七堵附近有指標右轉，過鐵路涵洞後即接上泰安產業道路，循產道至底即為登山口。\n搭車／搭程台汽或福和客運至汐止保長坑站下車後，開始步行泰安產業道路上山。","note":"除寬大土路枕木步道外，其他登姜子寮的山徑步道均屬困難健腳路線，非經驗豐富者請勿輕易嘗試！","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/5e92f555-c447-433f-9abb-1d8ec08d394f.jpg","lat":25.05226142,"lng":121.71248367},{"id":"012","name":"大尖山","altitude":460,"location":"新北市汐止區","brief":"由汐止市區南望，一突兀尖山直指天際，這就是北部遠近馳名的汐止大尖山。大尖乃四份尾山北伸肩狀微起伏的山峰，從東西方向望去山形盡失。","feature":"大尖山周邊名寺古剎特多，除了登山口的道教天秀宮，山腳的慈航堂更是聞名全台的佛教寺廟。這裡供奉著全台第一位肉身菩薩慈航法師的金身，法師於民國43 年圓寂於此，封缸後化為不爛金身，因此全台香客絡繹慕名前來，大尖山名聲也因此遠播。\n大尖山頂可俯瞰基隆河中游繁華都會，天寬地闊解放心靈。同時，西側山腰陡峭險峻的地形中秘藏娟秀可愛的秀峰瀑布，由公路探訪不消十分鐘可到，瀑布在乾季時雖然只剩滴水貼壁，但通往瀑布這段穿梭岩壁崖洞的步道幽靜美妙，絕對不可錯過。","season":"汐止熱門步道，可欣賞汐止、南港、內湖街景，以及台北101大樓，亦可遠觀基隆山、七星、大屯、觀音等名山，天氣好時可望至基隆嶼。花草扶疏，依季節變換嬌艷花朵接力綻放。","schedule":"天秀宮(新台五路轉勤進路至天秀宮) →大尖山，約30分鐘登頂。","traffic":"開車／由汐止新台五線南轉秀峰路，再右轉勤進路，過世運村後抵達天秀宮，側階梯即為登山口。\n搭車／搭乘台鐵於汐止站下車，出站左轉大同路再右轉秀峰路，再循勤進路至天秀宮登山口。","note":"步道為階梯及寬闊土路；假日或黃昏由天秀宮攀登人潮眾多，建議可從秀峰瀑布或天道修道院攀登，不失為清靜宜人的悠遊路線。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/5de9d073-0dc9-4da3-94a1-4cef85d237b9.jpg","lat":23.07175078,"lng":120.46288758},{"id":"013","name":"南港山","altitude":375,"location":"臺北市信義區、南港區","brief":"南港山系是信義與南港的自然疆界；從台北市區向東望，屏障般的山勢非常顯眼，改由垂直角度觀之，西陡東緩的單面山姿態，傲拔於高樓群外圍，小百岳之名當之無愧。","feature":"南港山最高峰為九五峰，擁有開闊無遮蔽的展望，與步程差2分鐘的基點峰幾乎同高。南港山系除了主峰、南峰最容易辨認，「拇指山」亦為稜線上著名山峰。傳說鄭成功行軍至六張犁一帶，東方山稜伸出一隻魔爪，鄭軍予以砲擊，最後留下大拇指矗立於嶺上。\n步道由台北市政府保養，路況佳，主峰至松山慈惠堂路線因電視轉播站的需要，因而有路燈照明。主峰附近有5條難易不等攀岩路線，是小試身手的入門場地。南港山因與四獸山等支稜相連，而成為熱門的登山健行路線。沿線林相以相思林為主，可串連象山、虎山，及麗山橋口親山步道。","season":"稜線上眺望台北市景及四週群山，夜幕低垂時，還可俯瞰大台北和桃園地區的景色。清晨及黃昏皆有山友絡繹於山徑間。","schedule":"1.虎山忠義山登山口→經虎山步道接四獸山步道→九五峰→南港山，約1小時登頂。\n2.信義路五段150巷22弄登山口→六巨石→逸賢亭(象山頂) →拇指山→南港山，約2小時登頂。","traffic":"開車／信義快速道路下信義路（右側），往松山、南港方向，至松山商職右轉往慈惠堂，即四獸山口。\n搭車／搭台北市聯營公車在「松山商職」、「吳興國小」等站下車，均可步行至登山口。","note":"登山口多，步道為寬闊步道，可變換多種行程，因此須注意指標與方向。拇指山為裸岩，注意通過安全。難易不同的攀岩路線，是攀岩入門地。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/8d86ca3b-7c9d-496f-a080-6f3dde685bab.jpg","lat":25.02557411,"lng":121.58621081},{"id":"014","name":"土庫岳","altitude":389,"location":"臺北市南港區、新北市深坑區","brief":"土庫岳的地理位置在測量上極為重要，除了設有一等三角點，同時也是一等天文點、重力點、衛星點，另外還有一顆1134號的三等三角點。山頂呈一大平台狀，當地人稱之為大坪。","feature":"土庫岳是防守盜匪的望高寮，清政府、日本政府都曾在山頂興建瞭望台或高射炮，越嶺的更寮古道和土庫尖古道如今已成往事，國道5 號石碇隧道也直直穿越，幸好北側留有稱為槍孔屋的土角厝，見證了古道歷史。\n鹿窟位於南港與汐止、石碇交界處，1952年底，國民黨軍隊動用萬人大舉包圍，受牽連村民有數百人，幾乎滅村，是白色恐怖代表事件。時至2000年，台北縣政府在當年受難者被嚴刑拷打的鹿窟菜廟（今光明禪寺）旁立碑紀念。","season":"土庫岳登高望遠、百年古道、槍孔宅及望高寮的歷史風情細細品味，每年4月下旬到5月上旬是更寮古道百合花盛開，螢火蟲求偶繁殖季節。","schedule":"1.望高寮土雞城→土庫岳，約30分鐘登頂。\n2.舊莊街二段122巷登山口→產業道路→南深路91巷底→椿萱農場→土庫岳，約1.5小時登頂。","traffic":"開車／國道3「深坑」交流道下，106縣道往深坑方向，過老街左轉109縣道，至風格街右轉。前行取左，往大坪街即有相關指標。\n搭車／捷運動物園或內湖站，轉679路公車，在「崩山一」站牌下車，由風格街前往登山口，約兩小時1班。","note":"土庫岳登山路線眾多，要注意山徑岔路、支線多。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/91a49ab8-390f-4672-9d2b-d7ef8902d95b.jpg","lat":25.02313783,"lng":121.63552361},{"id":"015","name":"大棟山","altitude":405,"location":"新北市樹林區、桃園市龜山區","brief":"大棟山是林口台地稜脈的最高峰，山頂空間開闊，有一個圖根點和一等三角點。大棟山是台北盆地周遭五個一等三角點之一，另四個是七星山、新店獅子頭山、汐止土庫岳，以及瑞芳燦光寮山。","feature":"大棟山的攀登路線眾多，和樹林、山佳、鶯歌火車站皆相距不遠，可從樹林連登大同、青龍、大棟三座山，然後下山至山佳，再搭火車返回樹林，走一圈完美的Ｏ形路線。沿途展望佳，尤其青龍嶺的視野最為遼闊，可俯瞰樹林、新莊及有如長龍一般的高鐵和大漢溪，是樹林一帶熱門的健行路線，且吸引不少民眾來此欣賞夜景。\n大棟山至青龍嶺的森林小徑，並不輸給陽明山國家公園的步道，下山後還能順遊古蹟，三峽和鶯歌老街，是許多登山客、自行車騎士、鐵道迷和攝影者的最愛。每年5 月，登山路徑可欣賞油桐花景，沿途桐花散落蜿蜒，使原本單調無趣的產業道路變得浪漫清新。","season":"春賞櫻、賞桐，夏賞蝶，秋賞芒，冬賞楓；日登山、夜觀景。","schedule":"1.德和街17巷沿產業道路直達山頂。\n2.樹林火車站→大安路312巷登山口→樹林山→大同山→青龍嶺→大棟山，約2~2.5小時登頂。","traffic":"開車／走國道3號於三鶯交流道下往鶯歌，經鶯歌火車站，穿過左側平交道，右轉直行中正一路與中山路三段，遇佳園路對面為山佳車站，從車站後方的山佳地下道即可進入德和街。\n搭車／搭台鐵至山佳火車站下車，出站後穿越右邊地下道至登山口。","note":"青龍嶺至大棟山路標較不清楚，中途遇叉路，大致循著主要步道，多注意登山條方向即可。大棟山至山佳車站，無正式路標，遇叉路時，注意路面漆字指標或依登山條導引。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/392df5ad-c0ef-4ac1-8cc5-26e8054c1414.jpg","lat":23.31132933,"lng":120.52265136},{"id":"016","name":"南勢角山","altitude":302,"location":"新北市新店區、中和區","brief":"南勢角山又稱「烘爐地山」，由於山勢左右突出，而成鼎狀似烘爐型，為地名的由來。南勢角山屬天上山系，天上山系位於大台北盆地的西南方，分隔新店三峽與中和土城。","feature":"烘爐地位於台北都會區南緣，北接台北盆地，東側為新店溪，東南臨安坑通谷，山頂平坦開闊、視野遼闊，山中有許多寺廟，經常吸引許多登山健行客來此遊歷，為拜佛、登山、休閒之好地方。稜線步道，又稱「青春步道」，泥土山路，起伏不大，山頂有一座「忘憂亭」，視野展望佳，隔著山谷與國旗嶺、長壽山遙遙相望。\n烘爐地地區有許多登山口，步道四通八達，若時間充裕，可越嶺至圓通寺。南山福德宮前廣場，也是觀看夜景的著名勝地，天氣好時可俯瞰整個台北盆地、大漢、新店二溪，還可遠眺觀音、大屯火山群及淡水出海口。","season":"南山福德宮昆蟲種類繁多，是夜間觀察昆蟲生態的好地點，也是大台北地區觀看夜景的著名旅遊勝地，2月可賞櫻，5月觀賞油桐花。","schedule":"福德宮停車場→福德宮→南勢角山三角點，約30分鐘登頂。","traffic":"開車／由中和區興南路前行，穿越北二高後，左轉興南路二段399巷至登山步道入口起登，亦即抵達烘爐地風景區範圍。\n搭車／搭北市聯營公車249、670，於烘爐地站(山下)下車，或搭中和區免費捷運接駁公車，於烘爐地站(山上)下車。","note":"烘爐地步道四通八達，路線眾多，亦可規劃至圓通寺越嶺健行；周遭山徑多泥土鋪面，雨後易濕滑，須注意安全。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/fbab9ea2-abb6-435f-9d10-6abb440725d5.jpg","lat":24.96927978,"lng":121.49574792},{"id":"017","name":"二格山","altitude":678,"location":"臺北市文山區、新北市石碇區","brief":"二格山又名石尖山，是二格山系的最高峰，也是新店溪和景美溪的分水嶺。二格山屬於台北地區南麓郊山，山系稜線發達，西邊有猴王岳、東接筆架連峰，聯繫木柵、深坑、石碇及北宜公路。","feature":"從二格山到筆架連峰，山勢險峻，若從栳寮上登，沿途地形較單純，一小時內可往返。二格山西邊位於阿柔洋產業道路上，亦有入口。阿柔洋即阿柔村，據說是安溪人的聚居地，他們把平原或平地統稱為洋，因其有海洋平闊之意。可連接深坑阿柔村與木柵貓空地區。\n二格山主峰山頂展望極佳，北邊猴山岳，東北方的筆架連峰、皇帝殿群峰，南側的翡翠水庫，均一覽無遺；極目眺望西北方光方閃爍之處，就是淡水河的出海口。","season":"山頂觀景台展望極佳；2~3月可欣賞山櫻花。","schedule":"北宜公路栳寮站／1.3K→第一登山口／0.3K→第二登山口／0.6K→第三登山口／0.45K→二格山，第三登山口上登約10分鐘登頂。","traffic":"開車／由國道3號下木柵交流道往深坑接106乙縣道後，右轉阿柔洋產業道路，上行至天南宮，登山口位於天南宮南側。搭車／搭捷運木柵線動物園站後，搭貓空纜車至貓空站，再轉乘欣欣客運至草楠，循產業道路步行至天南宮登山口。","note":"登山口有多處，且緊鄰筆架連峰，主稜山路陡峭，路線難易不同；建議使用GPS輔助定位。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/ff241e14-f703-4a3f-adaf-e05dd75e7f72.jpg","lat":24.96723219,"lng":121.61963556},{"id":"018","name":"天上山","altitude":430,"location":"新北市土城區、三峽區","brief":"天上山又名內坡山，為天上山系最高峰，傲視附近群山（大尖山、二尖山、五城山、石門內尖山等），且位居山列中央，頗具領袖帝王之勢，故稱為黃帝山，可俯瞰土城市區、亦可遠眺台北盆地西半部及大屯山、觀音山一帶。","feature":"天上山，因山勢雄偉，給人有如高高在天上的感覺，位於臺北盆地南緣，介於林口台地與雪山支脈新店山系之間的獨立丘陵。天上山山路四通八達，有多條登山步道可以登頂，「承天禪寺」路線，也是天上山最大眾化的一條步道，有著佛門莊嚴的承天禪寺，讓信徒或登山客到此，也能進入禪寺禮佛參拜。\n桐花公園是天上山主要的賞桐地點，佔地約一公頃，每到四、五月間，既是賞桐季，也是賞螢季，是最熱鬧的季節。近年來因舉辦「桐花節」而聲名大噪，成為台北近郊著名的賞桐景點。每年四五月左右桐花綻放，走在桐花公園裡，能欣賞到如雪紛飛的桐花美景。\n","season":"熱門的攀登季是4~5月間，是賞油桐花季，也是賞螢季。","schedule":"承天路桐花公園→天上山，約30分鐘登頂。","traffic":"開車／由國道3號下土城交流道，右轉中央路往臺北方向，於大安寮左轉入承天路直行上山至登山口。\n搭車／承天禪寺登山，搭藍44公車於登山口站或藍天母廣場站下車，由甘露寺上登，搭231、656、657公車於四海站下車上山。","note":"附近山路四通八達，可依個人體力，選擇各種路線組合；路程不長，難度亦不高，但因路徑多，須小心辨認方向。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/b9614e09-a77f-4ccd-91de-2f995de74797.jpg","lat":24.946076,"lng":121.456066},{"id":"019","name":"鳶山","altitude":321,"location":"新北市三峽區、鶯歌區","brief":"鳶山位於三峽市區西側，其山頂由岩石組成，似鳥嘴般向天挺立，兩翼的山列如蓄勢待發的老應，故名之，鳶山是雪山山脈被大漢溪切斷的餘脈，山頂遍布沈積裸岩，可遙望七星山系、觀音山等。","feature":"鳶山臨大漢溪，名列三峽十名山之一，站在山頂的大石頭上，可一覽大漢溪沖積平原及桃園台地，居高臨下，福爾摩沙高速公路南來北往車流皆清晰可見，這裡也是觀賞落日晚霞和萬家燈火夜景的絕佳景點。開車至「光復紀念鐘」，步行5~10分鐘即可登上鳶山觀景。\n鳶山步道全段步道長度合宜，難易適中，老少咸宜，近能觀花賞螢、遠可攻頂賞景，路線可長可短，任君選擇，還能同時逛老街、遊古蹟、嘗美食，走一趟鳶山登山步道，肯定不虛此行！桐花盛開季節，也可觀賞五月雪；是個集登山、騎車、賞桐、賞螢、觀景、攝影、朝聖的最佳地點。","season":"三峽鳶山是觀賞大台北地區晨昏美景的最佳地點，生態豐富，尤其春夏交替正是螢火蟲繁殖的高峰期，鳶山步道為觀賞五月雪的熱門景點。","schedule":"光復紀念鐘→鳶山，約10分鐘登頂。","traffic":"開車／由國道3 號三鶯交流道下，三峽復興路，右轉大智路，左轉中山路直行，續於仁愛街右轉即可抵達入口。\n搭車／捷運永寧站搭812號公車於三峽區公所站下車(仁愛街)抵登山口。或於中園國小站下車，由大同路240巷中埔生態步道上山。","note":"鳶山山頂為裸露巨岩，有暴露感，美景當前；行走其上、攝影取景和夜拍時需特別注意自身安全。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/d3265af7-1541-46ea-be8b-eaee45bf37ee.jpg","lat":23.82399992,"lng":121.18921367},{"id":"020","name":"獅仔頭山","altitude":858,"location":"新北市新店區、三峽區","brief":"台北南方的天際，山巒疊嶂，有座方形山峰，雄踞在大漢溪與新店溪的分水嶺上，山頂有顆一等三角點。渾圓山巒如雄獅昂首，近觀彷如雄獅伏臥，泰雅語Piyasann Marai則是歷史人名，山前有觀獅坪，山後有獅尾格坪，山腰有獅腰古道。","feature":"日據時代，日人在烏來山區，最早從獅仔頭山至平廣坑設置隘勇線，主要為了保護樟腦造林；隘勇線每一次的「推進」，都意味著番界的重新調整，以及血腥的殺戮。擁有豐富的歷史人文隘勇線、隘寮、古碑、戰壕、古井、土匪洞等遺跡，新設的隘路與原有的社路，形成完整的道路網絡。\n從獅頭登山口沿木梯上行至觀獅坪欣賞獅仔頭山，山形如雄獅伏臥，氣勢非凡！位於「獅面」上的山徑，由數段登天梯構成，需手腳並用上攀；獅頭附近的防蕃古碑、隘寮遺址都是必遊景點。續行山徑到了獅尾，變成平坦高原，可以俯覽整個北盆地，菁礐遺址值得一觀。","season":"四季皆宜，3、4月間可賞金毛杜鵑紅映山頭，5月賞桐花，夏季綠樹遮蔭，深秋芒花搖曳，新店當藥夢幻綻放，隆冬雲霧繚繞、山櫻緋紅。","schedule":"獅頭登山口→觀獅坪→崖梯→大樟樹→最高點→叉路口／取左→金毛杜鵑林→防蕃古碑→石寮(隘寮)遺址→古井→戰壕遺址→獅仔頭山一等三角點，約35~40分鐘登頂。","traffic":"開車／國道3號下新店安坑交流道，循北100號縣道(環河路)右轉碧潭大橋，循新潭路至登山口。\n搭車／捷運新店市公所站，轉乘公車至登山口，班次不多(早上6點40分至下午4點20分)。","note":"從獅頭到獅尾的山徑錯綜複雜，但多彼此相通，大致取直行及往下坡方向走即可。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/d4dfc518-f292-4cfc-97e5-66fdb2202b42.jpg","lat":24.90471011,"lng":121.49116794},{"id":"021","name":"金面山","altitude":667,"location":"桃園市大溪區","brief":"金面山又名鳥嘴山，是由五寮尖向南沿伸至溪洲山稜間的最高峰，雖然地理位置位於主稜上分出的支稜，距離主稜不遠，卻有喧賓奪主，臨駕於主稜之上的氣勢，使得附近一帶山區唯一的二等三角點埋設於此。","feature":"在晨曦及黃昏時分，頂峰附近常有一抹白雲圍繞，自古即是文人雅士歌頌的自然景觀，西元1924年成立的崁津吟社，創設之初即是以有名的「大溪八景」歌詠，替大溪的名勝古蹟留下珍貴的記錄。葉文樞創作的鳥嘴含煙：「留住閒身未出山，鳴聲從不和關關，慢嗤飲酌渾無力，霖雨權操口吻間。」\n金面山俗稱剪刀石山，是大溪第一高山，其山頂的巨岩含石英細顆， 在陽光下閃閃發亮，因此被稱為金面山。山頂為眺望大溪鴻禧山莊的最佳展望台，平日難以一睹神祕面紗的名流住宅，在此一覽無遺。阮家莊土雞城以純正放養土雞料理著名，招牌菜有三杯、白斬、麻油、竹筍雞等。\n","season":"金面山峰頂巨岩疊錯，氣勢雄峻，山頂視野極佳，可俯瞰大溪、龍潭，山林美景盡收眼底，是處值得登高俯瞰的好地方，尤其是桐花盛開時，緩步健行其間，可讓人體會到花落繽紛的意境之美。","schedule":"阮家山莊土雞城第三登山口→竹林→上稜(取右往金面山)→攀岩稜→岔路取左往金面山→金面山，約1.5小時登頂。","traffic":"開車／國道3號大溪交流道下，銜接台7線經大溪市區轉桃58線，經美華國小可抵阮家土雞城附近起登，有三個登山口。\n搭車／無公車抵達，須於大溪轉搭計程車前往。","note":"原始山林、竹林密徑，沿途山路陡峭且均為泥土小徑，雨後溼滑需注意安全。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/5def99d5-1410-4ff7-b082-bcfa636ae647.jpg","lat":24.86649861,"lng":121.33545294},{"id":"022","name":"東眼山","altitude":1212,"location":"新北市三峽區、桃園市復興區","brief":"在北郊的群山之中，三峽一帶的山區往往給人一種森林茂密、原始氣氛濃厚的感覺。所謂的三峽三大名山，其中的東眼山，無論在山勢、標高、路線、景觀與名氣皆勝出，因此擁有三大名山之王的頭銜。","feature":"民國83年元旦，林務局新竹林管區將東眼山整理開放為森林遊樂園區之用，開闢相關登山步道，修築東眼山公路，如今無須再循漫長的山路迂迴登峰，一般遊客可沿著規劃完善的登山步道直上頂峰，三峽三山之王也有平易近人的一天！\n東眼山幅員廣大，山勢雄渾，登臨其上，自然會產生一種君臨天下之感。此外，還擁有豐富的景觀資源，其中最著名的就是三千萬年前的生痕化石，以及縱橫交錯於山區的木馬道遺跡。","season":"東眼山擁有數百公頃的柳杉林，山頂旁瞭望台，天氣晴朗時，桃園、三峽、觀音山、林口台地、淡水河、七星山系及大台北地區盡收眼底；是一條全年皆適宜的登山健行路線，可森林浴、觀景、賞鳥、生態與地質觀察。","schedule":"1.東眼山遊客中心→木炭窯→東眼山三角點，約1小時登頂。\n2.志繼山登山口(桃119線)→志繼山→東眼山森林步道→東眼山三角點，約1.5-2小時登頂。","traffic":"開車／國道3號自大溪交流道下，循台7線經大溪、慈湖進入北橫山區，過「復興」後見東眼山森林遊樂區指標，左行13公里即至遊樂區收費站入口，由此處起登。\n搭車／目前蜈蚣車可抵達，桃園客運大溪站有20人以上之團體專車服務，需先洽詢。","note":"主要步道為枕木步道；步道叉路多，請確認方向與目的地再前進。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/aab10047-8ff0-41f0-bb4d-c3d4b2079b11.jpg","lat":24.82512811,"lng":121.41745925},{"id":"023","name":"溪洲山","altitude":577,"location":"桃園市大溪區","brief":"溪洲山的稜線是桃園山地與臺地地形的分界，東南山地山形是泰雅族活動頻繁的區域；西北為較平緩的臺地，分屬林口、桃園及湖口臺地三部份，是平地住民較早屯墾區域，自古就是進入山區的第一道防線。","feature":"清朝乾隆年間，平地住民開墾荒地的風氣日盛，逐漸向內山地區延伸，為了防備山區原住民騷擾，於是在平地與山區交界之沿山險要處，開始設置隘寮，並招募隘丁防守。時至今日，隘寮已消失在荒煙漫草之中，而昔時翻山越嶺進入內山地區的山路，卻成為愛好登山人士尋幽探險的古道。\n溪洲山稜脈昔日有清朝設置的溪州隘設施，沿著稜線行走，還可能發現當初隘寮的遺跡。而「大艽宮古道」保存往日先民就地取材所建構的古道石階，細心研究，可以發現古人的巧思與昔時的生態工法。古道旁另闢有新的健行步道，成為新舊山道並陳的景緻。","season":"溪洲山步道，舊名「福山巖登山步道」，居高臨下有極佳展望，可俯瞰石門水庫及桃園台地，天氣好時，能看到龜山及林口地區，沿途大多為相思樹及闊葉林，一年四季皆適宜，6-8月可見開花的白鶴蘭，12月賞楓。","schedule":"1.溪洲山福山巖登山口→經時鐘尾→溪洲山，約1.5小時登頂。\n2.坪林收費站登山口→愚公亭→新溪州山→竹林十字路口→觀景平台(電塔旁)→殖產局三角補點→溪洲山，約2-2.5小時登頂。","traffic":"開車／自國道3號下大溪交流道，左轉112A線道再左轉台3線往大溪，與台4線(即康莊路)會合後往石門水庫方向，於36.7K處即福山巖登山口起登。\n搭車／桃園客運中壢總站搭乘台灣好行慈湖線班車，於收費站下車，抵坪林登山口。","note":"登山步道之登山口與叉路多，步道為泥土山徑、原始林；雖條條大路通羅馬，但須認清方位再前行。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/36e9630d-49de-4d51-a0af-174eb9317766.jpg","lat":24.82448353,"lng":121.27725794},{"id":"024","name":"石門山","altitude":551,"location":"桃園市龍潭區","brief":"石門山是位於桃園新竹縣界稜線的尾稜山峰，擁有一等三角點，又名小竹坑山。位於大漢溪上游的石門水庫，因溪口兩側有雙峰對峙、狀如石門而得名，其中的雙峰就是溪洲山與石門山。","feature":"歷歷史悠久的石門水庫，完工於1964年，集防洪、發電、灌溉、給水、觀光等效益於一身，曾是許多人兒時校外教學的重要回憶，由勞工育樂中心及收費站，都有步道可登上山頂，石門山堪稱是桃園龍潭的郊山人氣王，街道旁攤販雲集、家家都有活魚料理。\n石門山旁的白色觀音聖像，是由陳氏兄弟闢發登山步道時所建。天氣晴朗時，可以極目馳騁大台北及桃園地區的風光，連101大樓都能清晰可辨。假日時，此地還有供應稀飯及素菜，讓遊客自助隨喜，在旁邊的景觀餐廳用餐，是攀登石門山最理想的休憩地點。","season":"石門山又名小竹坑山，因位處石門水庫西側而得此名，山頂視野遼闊，天氣晴朗時可看到台北的101大樓。步道平緩坡度不大，兩側林木蓊鬱，可接小粗坑古道。4、5月可賞油桐花、夏天可賞相思樹。","schedule":"1.勞工育樂中心→觀音聖像→龍穴崗→景陽崗→石門山，約1小時登頂。\n2.石門山南端登山口→石門山，約5-10分鐘登頂。","traffic":"開車／國道3號大溪交流道下，循台3乙往石門水庫方向，轉接民治路可抵水庫收費站附近的登山口；而聖觀音像附近的登山口，可循「勞工育樂中心指標」前往。\n搭車／中壢總站搭乘桃園客運「5050中壢－石門水庫」班車，於石門山登山口站下車。","note":"步道大部分為泥土山徑，步道路線錯綜複雜，必須認清方向前行。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/4685c602-6a76-4d6a-b640-861b69644988.jpg","lat":24.15243561,"lng":121.28459122},{"id":"025","name":"石牛山","altitude":671,"location":"新竹縣關西鎮、桃園市復興區","brief":"站在石門水庫大壩上往對岸看，主峰頂上有一塊巨岩形似石牛而得名。根據《復興鄉誌》記載：復興鄉的位置最西為東經121度14分，正好是石牛山的北北東角。","feature":"戴振金先生世居於石牛山南側，曾於2001年整修三條石牛山的登山路線，又集資在登山口附近蓋了土地廟，廟前的匾額保留中土客家人的傳統，將宮字寫在正中間；附近並設停車場、洗手間等設施，方便遊客使用。石牛山位於新竹與桃園的交界，因峰頂的巨岩似一頭巨牛之臥姿而得名，山頂平台寬大有巨石，360度的視野。\n沿途登山路線驚險刺激，溪谷線須沿著景致優美的小溪谷溯源而上，經過峭壁、石洞、棧橋，附近還有石龍仙洞的峭壁景觀。石牛山山頂展望極佳，視野良好，可眺望關西一帶的山景，山下石門水庫風光明媚，湖光山色令人驚艷。\n","season":"石牛山可遠眺石門水庫、大溪、龍潭、三峽等地區，亦可見鳥嘴山以及蜿蜒山道，馬武督風光一覽無遺。多變的地形、巨石、溪潭等，全年皆適宜攀登，5月可賞桐花。","schedule":"1.石福宮登山口(右上)→戴宅→岩洞→石牛山，約1.5-2小時登頂。\n2.石福宮登山口(左上)→錦山72號呂宅→石牛山，約1小時登頂。","traffic":"開車／國道3號自關西交流道下，銜接118縣道於34.5K處附近，見石牛山民宿指示牌左轉，200公尺後遇叉路取直行，經過石牛山民宿後續行即至石福宮登山口。\n搭車／於關西站搭乘新竹客運金鳥線班車，在李樹下站下車，循上述路線即抵登山口。","note":"步道大部分為泥土山徑；溪谷攀爬石壁拉繩路段，務必要小心行走。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/c4a6c3d1-190e-4f35-8ab0-0aa8f9fa0cc8.jpg","lat":24.79350789,"lng":121.25330236},{"id":"026","name":"十八尖山","altitude":132,"location":"新竹市新竹市","brief":"十八尖山位於新竹市東南郊區，由十八個山頭組成一彎新月的特殊山形景緻；東邊與清華大學校區為鄰，西邊學府路上亦有諸多學校，如交通大學、新竹高中、新竹高商等。","feature":"昭和二年( 民國16年)，新竹州知事永山止米郎，為紀念日本昭和天皇登基，以官民合作方式，共同規劃提議建為森林公園。如今則是台灣半導體科技重鎮新竹科學園區，大家所仰賴維生的新鮮空氣來源，所以很多人都稱她為新竹之肺。\n許多新竹人的童年往事，就是來此尋訪日據時代設立的石佛蹤跡，以及神秘的地下坑道和碉堡。攀登此山有鄰近學府路的東入口與位於寶山路的西入口，自前者啟登，尚有環山柏油路、石板路及登山石階可供選擇。","season":"十八尖山是新竹市區內最大的郊山森林公園，近年來新竹市政府極力將十八尖山營造為北台灣第二個陽明山，每年3月份都舉辦為期一個月的「賞花月」。全年都適合攀登健行。","schedule":"1. 東入口(博愛街5巷)→幸福亭→介壽亭→國父百年誕辰紀念亭→十八尖山主峰，約15分鐘登頂。\n2. 寶山路145巷登山口→桂花巷→梅花亭→十八尖山主峰，約30分鐘登頂。","traffic":"開車／國道1號新竹交流道下，沿光復路往市區方向，於學府路前左轉，循指標抵東側登山口停車場。\n搭車／搭乘新竹市20路公車至萬佛寺站，由寶山路上登；或搭1、 2、5、31線公車至新竹高商站，由博愛街5巷進入。","note":"十八尖山山區石階步道四通八達，產業道路；但停車不便，最好搭乘大眾運輸工具。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/dc120d06-a09f-4149-a472-05fc3b27c467.jpg","lat":24.79249797,"lng":120.98462414},{"id":"027","name":"飛鳳山","altitude":462,"location":"新竹縣芎林鄉","brief":"飛鳳山因山勢形似飛鳳伸頸而得名，擁有百年寺廟「代勸堂」及「雲谷寺」，可俯視頭前溪河谷平原，遠眺角板山、酒桶山、五指山、鵝公髻山等。在第一涼亭可俯瞰芎林地區，觀日亭向東北方眺望，甚至可以看見台北101大樓。","feature":"早年即以「飛鳳探梅」入選為新竹縣的八景十二勝之一，新竹縣誌上記載：「山路石磴盤屈，夾岸梅林數頃。春來萬樹怒放，暗香疏影，最宜曳杖林下逍遙。」往昔農業社會，鄉民每逢重要節慶假日，多會結伴攀登飛鳳山，觀賞滿山遍野的梅花及飛鳳夕照等景觀。\n代勸堂、雲谷寺是山中的兩座百年古剎，一釋一道毗臨而居，前者一般稱之為「下堂」，後者為「上堂」。立於殿前，新竹、竹東街景及頭前溪的風光盡入眼簾，也是欣賞夕照的最佳地點之一，故贏得「飛鳳夕照」美譽。","season":"飛鳳山展望良好，第一涼亭可俯瞰芎林地區，觀日亭向東北方眺望，甚至可以看見台北101大樓。全年均適合攀登。","schedule":"第一停車場→石壁潭山→觀日亭→飛鳳山基石，約1.5~2小時登頂。","traffic":"開車／北二高下竹東芎林交流道，沿120縣道往竹東方向，順飛鳳山牌樓停車場指標方向即抵登山口。\n搭車／台北轉運站搭國光客運竹東線班車，於「芎林站」下車。或搭新竹客運往芎林的路線，在芎林國中下車再步行前往。","note":"山徑時而陡峭時而平緩，偶有裸露樹根及石塊，須小心；石階步道下坡宜緩行，以避免膝蓋受傷。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/e00ea1e9-80d4-4075-a12a-275fa7d11e59.jpg","lat":25.13600336,"lng":121.73614108},{"id":"028","name":"李棟山","altitude":1914,"location":"新竹縣尖石鄉、桃園市復興區","brief":"李棟山又稱李崠山，行政區域隸屬尖石鄉。屬加裡山山脈，山稜北連鳥嘴山、那結山，東稜伸至泰平山、馬望僧侶山，南稜連烏來山，西稜接大混山，山容盛大。展望則須立於古堡城牆上，以南望大霸尖山，南湖中央尖為最佳。","feature":"李崠為清朝駐守該山頭有功將領，故後人將該山稱做李崠山。古堡則是日據時期日軍於山頂所建之要塞城堡，在此駐重兵以鎮壓泰雅族人。佈局成方型，佔地兩百餘坪，城牆四周築有32 個槍孔及兩個突出牆外的砲台。在台灣近代史上，李棟山和馬拉邦山是鼎鼎有名的古戰場。\n寒冬的李棟山雪景最吸引人，夏季則清涼爽，春季水蜜桃花盛開，八角蓮、金線蓮、台灣馬鞭蘭也跟著綻放。夏日是溯溪好時光，秋天的芒白楓紅相當引人入勝。如今列入小百岳及百名山之林，成為吸睛的觀光登山勝地。","season":"李棟山步道沿線是觀察昆蟲的好地點，秋、冬季可賞台灣紅榨楓。","schedule":"李棟山莊→李棟山古堡，約80分鐘登頂。","traffic":"開車／北二高竹林交流道下竹東，走120縣道至尖石附近右轉過尖石大橋，接竹60鄉道經那羅至宇老派出所，再左轉上宇老，走馬美產道至李棟山莊。\n搭車／竹東站搭新竹客運那羅線班車至那羅站下車，循上述路線即抵登山口。","note":"步道為山徑土路以及碎石子路；午後濃霧大、視野差，建議早上登頂最好。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/b7794f8e-751d-4d8e-9d4c-c44248868928.jpg","lat":24.69265842,"lng":121.30363236},{"id":"029","name":"獅頭山","altitude":492,"location":"苗栗縣三灣鄉、南庄鄉","brief":"獅頭山是位於苗栗縣南庄與三灣交界的名山，以巨岩高踞山巔，狀如獅頭而得名，南隔中港溪與象山相望。中港溪發源於樂山，由南往北流，碰到獅頭山竟呈90度大轉彎往西流，一獅當關，更顯其雄偉。","feature":"清末大溪人邱太公晉捷到南庄來抽藤製腦，赴獅頭山獅岩洞結草為庵，可說是獅頭山岩洞開山祖。日據後，黃開郎選現今勸化堂岩洞為避難之處；明治30年(1897年) 黃炳三來此修行求道，歷經30 年完成勸化堂、輔天宮、開善寺等建設，並舉辦仁濟、育英兩社會事業，完成獅頭山五大事業。\n獅頭山有橫貫頭尾的獅山古道及新闢建完成的六寮古道。獅山古道全線有輔天宮、勸化堂、獅巖洞、海會庵、金剛寺、萬佛庵等佛道教寺廟，古道古樸有致，沿途廟寺建築各具特色；而六寮古道則有七星神木、古石橋等勝景。","season":"獅頭山是著名的寺廟聖地。步道旁望月亭可遠眺中港溪流域及南庄一帶的景色，每年四、五月間是賞桐花旺季。","schedule":"1.獅頭山停車場→道德門→觀日亭→獅山大石壁→望月亭→獅頭山三角點，約一個多小時登頂。\n2.望月亭→獅頭山三角點，約10分鐘登頂。","traffic":"開車／由中山高下頭份交流道，接台3省道右轉，經三灣接124縣道至獅山村獅頭山牌樓，左轉上苗20鄉道的獅山道至停車場。\n搭車／搭台汽客運至頭份站，再轉搭苗栗客運往南庄的班車，在龍門口站下車循步道上登。","note":"獅頭山由獅頭上登較近，但落差較大、石階多，步道山徑旁休憩涼亭可眺丘陵山景。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/39803311-f674-4a8e-ad58-3d27972b20b6.jpg","lat":25.1091437,"lng":121.5687623},{"id":"030","name":"五指山","altitude":1062,"location":"新竹縣竹東鎮、五峰鄉、北埔鄉","brief":"五指山為台灣十二名勝之一，是一處以晨曦雲海聞名的宗教勝地。其中小指峰和無名指峰位竹東鎮和五峰鄉交界，而拇指峰和食指峰位北埔鄉和五峰鄉交界，五峰並列形如掌指而得名，山頂有顆二等1116號基石。","feature":"在康熙年間的竹東及道光年間的北埔，曾是賽夏族和部份泰雅族的故鄉，如今均成客家聚落，賽夏族則避居五峰、南庄後山。就在今五指山西北側，從北埔經內大坪到南庄東河部落的美麗鄉道，是賽夏族人含淚逃入山區的避難古道。因五指峰全在新竹縣內故稱新竹五指山。\n五指山是條可五指連峰縱走的健腳路線，5 月上中旬在拇指峰一帶可見油桐花開，是台灣春天最晚開油桐花的地方。山麓有一廟宇，以天然岩穴開鑿而成，稱觀音禪寺。五指山下並有五峰寺、雲光寺、灶君堂、盤古廟、玉皇宮等名剎，和獅頭山並列新竹縣兩大佛門聖地。\n","season":"五指山山頂視野展望極佳，可遠眺峨眉、北埔、竹東、新竹、竹北。山上常可見到雲海洶湧翻騰的景觀，每年5月上中旬拇指峰賞油桐花，4月下旬至5月初，是欣賞螢火蟲生態的好去處。","schedule":"1.山居歲月登山口→中指峰三角點，約10分鐘登頂。\n2.竹林禪苑登山口→拇指峰→食指峰→中指峰三角點，約1.5-2小時登頂。","traffic":"開車／北二高竹林交流道下竹東，走122縣道，於30.1公里瑞穗橋前叉路右轉上山，此路即五指山觀光大道，接內大坪冷泉上來的竹37-4鄉道後左轉，遇叉路取左抵玉皇宮前轉角處為新登山口。\n搭車／由竹東站搭乘新竹客運五峰清泉線班車於五指山口站下車，循上述路線抵新登山口。","note":"登山步道為崎嶇山徑與階梯；建議由新登山口直上中指峰，再由食指峰、拇指峰下山，如此對腳膝蓋較好。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/3acc1742-bebd-4231-b0b8-fcae813f9dd4.jpg","lat":24.64131811,"lng":121.09616381},{"id":"031","name":"鵝公髻山","altitude":1579,"location":"新竹縣五峰鄉、苗栗縣南庄鄉","brief":"由南庄一帶眺望鵝公髻山，山勢雄偉壯麗；由五指山南望，山形卻像鵝頭頂上的肉冠，因而得名。北有五指山連峰，南稜有鳥嘴山、大窩山、比林山，山頂西南側有展望可眺加里山。","feature":"在鵝公髻山與橫屏背山稜，界分南北賽夏族群，北賽夏位新竹縣五峰鄉的大隘村與花園村；南賽夏則位在苗栗縣南庄鄉的東河村及蓬萊村。北有泰雅族混居，南有客家人鄰居。矮靈祭每十年一大祭，兩年一小祭，分南北兩祭同時舉行。\n每年冬春變天之際，鵝公髻山的雲海最引人入勝，尤其「山上人家」位鵝公髻山東麓山腰，是欣賞山嵐雲海最佳景點，假日常門庭若市。此山有兩登山口，第一登山口上登，可回望壯麗的五指連峰；第二登山口上登，則有高大、壯觀的杉仔林，這些均是鵝公髻山值得觀看的場景！","season":"鵝公髻山是賽夏族人心目中的聖山，步道開闊處可見五指山，沿途可見筆直的柳杉，全年皆適宜攀登。","schedule":"1.山上人家→岔路→攀繩區→鵝公髻山，約2小時登頂。\n2.第一登山口→林徑→三岔路→路中石→鵝公髻山，約2小時登頂。第二登山口→水泥路→路中石→鵝公髻山，約1.5小時登頂。\n3.金鵝橋旁登山口→401至406救援樁→大岩壁→拉繩→第二大岩壁→鵝公髻山，約2.5-3小時登頂。","traffic":"開車／由北二高竹林交流道下竹東，走122縣道於37K處右轉，再行2.8K遇叉路取左，經大隘檢查站抵茅圃產道叉路口，左行700公尺抵第一登山口。\n搭車／由竹東站搭乘新竹客運五峰線於大隘站下車，取右轉茅圃產道至登山口。","note":"由第一登山口上登，要走一大段產道，接第二登山口上來步道前叉路，有小徑可往登鵝公髻山東北峰，下山取南稜出山上人家喝杯咖啡賞景是不錯選擇！","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/6ae0c96f-85fc-466a-ba89-04196f011926.jpg","lat":24.61005067,"lng":121.07557539},{"id":"032","name":"向天湖山","altitude":1225,"location":"苗栗縣南庄鄉","brief":"向天湖是一座群山環繞的山谷盆地，東有三角湖山，南有向天湖山，西有光天高山及其山稜，北有向天湖瞭望台。因南庄鄉深山中，有一賽夏族聖地「向天湖」，位向天湖山北側山谷而得名。","feature":"向天湖發源於向天湖山北側凹谷，早期大東河支流加拉灣溪向源侵蝕切穿湖岸，使得湖水盡流失，卻留下湖底肥沃的土壤，賽夏族人移居於此，得小矮人協助，開墾為農耕地，過著與世無爭的生活。直到數年前南庄鄉公所在向源侵蝕的溪谷築堤蓄水，向天湖再度重回群山懷抱中。\n向天湖流傳著賽夏族和小矮人的矮靈祭盛典，極富歷史意義及神秘氣息。湖畔有矮靈祭的祭場、賽夏族民俗文物館、湖畔咖啡、成排苦茶樹，還有山嵐雲霧的變化，簡直是台灣版的「普羅旺斯」。","season":"向天湖是著名的原住民部落，是賽夏族矮靈祭的祭場，山頂可向東北遠眺鵝公髻山。山區林相優美，遍植柳杉林，是極佳的避暑森林浴場。全年皆適宜攀登。","schedule":"向天湖停車場→向天湖山/光天高山登山口→巨石→三角湖山叉路→向天湖山三角點，約1.5小時登頂。","traffic":"開車／中山高下頭份交流道，經三灣接台3線，左轉124縣道至南庄，過南庄橋左轉苗21鄉道往鹿場，循指標右轉至向天湖停車場。\n搭車／搭台汽客運至頭份站，再轉搭往南庄班車，於南庄站轉乘向天湖線班車至登山口。","note":"如欲向天湖山連走光天高山，建議由登山口上登遇叉路，先登右側光天高山。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/6826ce40-f8ac-4244-a1d5-082b9d96fcb6.jpg","lat":24.66811653,"lng":121.1661895},{"id":"033","name":"仙山","altitude":967,"location":"苗栗縣獅潭鄉","brief":"仙山原名紅毛館山，位苗栗縣獅潭鄉和南庄鄉界稜的西側，行政區域屬獅潭鄉永興村和新店村的交界。仙山北稜到神桌山的稜線，是獅潭和南庄的界稜，須走危嶺和鑽密林茅草，是極富挑戰的神仙聖稜線縱走。","feature":"仙山不像關刀山有海上仙上之稱，卻流傳著許多神仙的傳奇故事，雖無仙人，卻有著仙水的傳奇，再加上終年雲霧繚繞，而有霧中仙山美稱。所謂「山不在高，有仙則靈；水不在深，有龍則靈。」也因此仙山始能成為苗栗地區的名山。\n仙山因名山而有寺廟，最有名當屬靈洞宮，創建於1941年，供奉儒道釋三教聖人。更高一點有「協靈宮」供奉九天玄女娘娘。山腰還有一個仙洞，一定要去探。有條仙山古道卻不在仙山上，而在隔124縣道對面的山群中。","season":"仙山步道多巨石、岩壁等地形。山頂視野極佳，可眺望「神仙縱走」綿延的山峰及獅潭鄉溪谷。全年皆適宜攀登。","schedule":"靈洞宮停車場→協靈亭→仙山，約50分鐘登頂。","traffic":"開車／中山高下頭份交流道，接124縣道再右轉台3省道，南下經三灣至獅潭，再左轉124縣道至仙山靈洞宮登山口。\n搭車／搭乘台汽客運至頭份，再轉搭苗栗客運往南庄，於南庄轉乘往仙山班車。","note":"仙山登山口至望陽亭皆是石階步道，爾後至山頂是一段陡峭地形，須援繩索攀爬，小心點就好。稜上神仙縱走路線路途遙遠，勿輕易嘗試。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/dff0b1f1-d26e-4129-bde6-e64448aaea2c.jpg","lat":24.54253594,"lng":120.95294875},{"id":"034","name":"加里山","altitude":2220,"location":"苗栗縣南庄鄉、泰安鄉","brief":"加里山有一等三角點基石，北有向天湖山、鵝公髻山，東有哈堪尼山、鹿場大山(樂山)，南有虎山、東洗水山，西有仙山、八卦力山，可謂群山環抱。除鹿場大山外，其餘皆比加里山低，頗有登加里山而小天下之慨。","feature":"早年加里山因是一等三角點峰，又是名山，逢甲大學萬里登山社曾在此舉辦六路大會師。近年列入小百岳及百名山之林，往登之山友及社團比以往更多，連帶使得南庄鄉的鹿場成為登加里山的門戶，帶動南庄一帶的登山風氣。另一處登山口位於大坪林道上。\n加里山每年4月10日前後會有一場花祭，在山頂前山稜有4處台灣一葉蘭族群及沿稜整片的台灣杜鵑，尤其加里山一處岩壁上，開滿近千株的一葉蘭，令人驚艷再驚艷！而台灣杜鵑粉紅、白色相間的花瓣滿樹梢，又是另一番驚奇！山下風美一帶則有神仙谷和石門古道可順遊。","season":"加里山山勢雄峻挺拔，堪稱苗栗地區第一中級名山，舊有的伐木鐵道令人發思古之幽情，山頂可眺望樂山、大霸群峰、聖稜線等。每年4月可見珍貴特有的台灣一葉蘭，加上山頂杜鵑綻放，11月可看飄落的白色木荷花鋪滿山徑。","schedule":"1.登山口→哈勘尼山步道岔路→風美溪→鐵道→小木屋→九號救援椿→加里山，約3-3.5小時登頂。\n2.大坪林道登山口→上稜線鞍部取左→舊台車鐵軌十四號救援樁取右→風美溪→九號救援樁叉路取右→加里山，約3-3.5小時登頂。","traffic":"開車／中山高下頭份交流道，接124縣道右轉台3省道，南下經三灣左轉124縣道至南庄，過南庄橋左轉經石門至鹿場，續上遇叉路取左直上抵登山口。\n搭車／自苗栗搭乘新竹客運南庄班車，再由南庄轉乘東河、向天湖線班車或搭乘計程車至登山口。","note":"登山口有停車場與洗手間，建議前一晚在此過夜，隔天還可連走哈堪尼山。路況不太熟者單攻為宜。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/cb7e52c5-33a2-438b-83c7-950921b4add7.jpg","lat":24.51079536,"lng":121.01242692},{"id":"035","name":"火炎山","altitude":596,"location":"苗栗縣苑裡鎮、三義鄉","brief":"火炎山有一顆三等三角點159 號基石，並非山稜最高峰，最高峰為614 公尺，位主峰北偏東稜上。狹長稜脈成為苗栗縣三義鄉和苑里鎮的界山。裸露的紅土台地堆積層，烈陽高照下，宛似熊熊火焰籠罩山嶺，此為山名的由來。","feature":"火炎山因屬更新世頭嵙山層，由礫石、紅土、砂土所組成，土質粗鬆易受豪雨沖蝕，形成有名的卵石河流及惡地景觀。民國75 年為保護本區的地形景觀，成立「三義火炎山自然保留區」。此山區由北而南已開拓出苑裡火炎山古道、火炎山北鞍古道及南鞍古道、苗栗南橫古道，成為熱絡的火炎山。\n火炎山有三奇，一是卵石河流峽谷地形，二是生長在陡峭惡地上的馬尾松，三是4到5月間滿山油桐花。此外，秋天的楓紅、冬天的山芙蓉和油菜花，再加上石棚、三義木雕村，均是吸睛場景。","season":"火炎山因地質特殊，列為自然保留地。走在步道上，可眺望大安溪谷，及幾乎垂直由礫石和砂土所組成的礫質惡地。每年4、5月可賞油桐花。","schedule":"1.台13線55.3公里→岔路直行→第六座山頭→火炎山三角點，約2小時登頂。\n2.三義垃圾掩埋場(南鞍古道入口)→火炎山三角點，約1小時登頂。","traffic":"開車／中山高下三義交流道，接台13省道左轉南下，經裕隆三義廠，抵伯公坑垃圾掩埋場道路口，路口側有高壓電塔及鐵柵門起登。\n搭車／三義搭新竹客運往后里或三櫃、鯉魚口班車，至伯公坑下車，班次不多須先查詢。","note":"進入山區步道大都為卵石地區，請穿抓地力強的登山鞋，可由北鞍古道上火炎山，再從南鞍古道下。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/a5eb5bf0-deb3-48e6-ac0d-81cf78bc7a63.jpg","lat":24.37734033,"lng":120.73018183},{"id":"036","name":"關刀山","altitude":889,"location":"苗栗縣大湖鄉、三義鄉","brief":"關刀山在苗栗縣境內，台3省道貫穿其間，公路以東地勢較高，多為1000公尺以上山岳；公路以西則為1000公尺以下丘陵地帶，關刀山便是這片丘陵的盟主，猶如鶴立雞群，相當突出，有顆三等三角點125號基石。","feature":"昭和10年(1935年) 曾發生一次空前大地震，震央位於新竹州的關刀山附近，故又稱「關刀山大地震」。如今關刀山西連勝興車站遊憩區，再加東北側整建好的出關古道出聖衡宮，成為一座交通便捷的名山。關刀山因山形似刀口朝天之關刀而得名，峰頂昔日有軍營，展望並不是很好。\n關刀山冬春雲海飄渺，從馬拉邦山天然湖西眺關刀山，雲海翻滾在山腰，「海上仙山」稱謂名符其實。除雲海之外，山下的勝興車站、魚藤坪斷橋、挑柴古道，以及被選為台灣世界遺產潛力點之一的苗栗舊山線鐵路，均是不可錯過的景緻，尤其油桐花季更是人山人海！\n","season":"關刀山山頂寬廣，展望普通，可順遊舊山線的勝興車站、龍騰斷橋、薑麻園休閒園區等，4、5月可賞油桐花，冬季可採草莓。","schedule":"1.關刀山第一登山口(茶亭) →第二登山口(出關古道關聖段)→關刀山三角點，約30分鐘登頂。\n2.聖衡宮登山口(出關古道關聖段)→關刀山三角點，約1小時登頂。","traffic":"開車／由勝興車站遇叉路，左轉苗56鄉道至產道最高點關刀山南稜四叉路登山口。或由130縣道到聖衡宮，循出關古道上山。\n搭車／苗栗大湖搭乘新竹客運往卓蘭班車，在八份下車，再搭計程車至聖衡宮，至出關古道登山口。","note":"出關古道係主要山徑，前往關刀山以開車最便捷，可直接至南稜登山口來回。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/01dd1273-2278-4633-82eb-b5edbe2eb8d1.jpg","lat":24.37536994,"lng":120.81080392},{"id":"037","name":"馬拉邦山","altitude":1407,"location":"苗栗縣大湖鄉、泰安鄉","brief":"馬拉邦山又稱馬那邦山，東臨大安溪，是東北季風的界限，主稜北連細道邦山，南連大克山，形成有名的馬克山稜。由中興山延伸過來的東稜，形成馬拉邦山東側山稜險峻溪谷，北有中興溪，南有蘇魯溪。","feature":"馬拉邦山是一處極具歷史意義的抗日古戰場，在先民對抗異族的聖戰中扮演壯烈的角色。第一次聖戰於1884至1886年對抗清軍入侵，第二次聖戰是1895年對抗日軍佔台，第三次聖戰為1902年反抗日人壓迫。如今在馬拉邦山北稜有古戰場紀念碑，山頂則有「馬那邦山戰諸地」紀念碑。\n馬拉邦山以楓紅著稱，但僅北稜有些青楓，其餘則是櫸樹；深冬初春桂竹黃葉在陽光輝映下，滿山金黃奇景不讓楓紅專美於前；山腹的李花和山頂的櫻花亦互別苗頭。每年12月至翌年3月，下雨過後常形成壯麗廣闊的雲海，其變化無窮令人拍案叫絕！","season":"馬拉邦山是昔日的古戰場，日治時代闢為隘勇路，步道四季各有特色，春天的桃花、夏季的綠竹、秋天的楓紅，冬日的寒梅，尤以楓紅著稱。山頂可遠眺蜿蜒群山的大安溪、大霸尖山及雪山之間的聖稜線開濶景致。","schedule":"1.南線／天然湖→杉木林→櫸木林→桂竹林→階梯步道→大石壁→馬拉邦山，約1-1.5小時登頂。\n2.北線／上湖桂竹林→叉路口→古戰場→石門→馬拉邦山，約1-1.5小時登頂。或由中興村長橋珠湖登山口→果園→叉路口→古戰場→石門上山。","traffic":"開車／由南湖之南昌路左入富民巷，於武榮國小前左轉東興產道至第一停車場，小車續上遇叉路取右往天然湖登山口。\n搭車／苗栗大湖搭乘食水坑線往坪林、武榮班車抵淋漓坪下車，再步行至登山口。","note":"建議於第一停車場停車，轉接駁車至隆基湖登山口上北稜登馬拉邦山，再下天然湖登山口轉接駁車回第一停車場。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/7a4ee912-4ede-403a-898d-20984d699bdc.jpg","lat":24.368944,"lng":120.913833},{"id":"039","name":"稍來山","altitude":2307,"location":"臺中市和平區","brief":"小百岳海拔2000公尺以上的山峰共有六座，稍來山排行老四，小雪山、鞍馬山、稍來山、鳶嘴山、橫嶺山，五座高度兩千米以上的連綿高峰，自台中市區仰望，彷如天際綠色長城，激起岳友強烈的造訪欲望。","feature":"大雪山林道於民國47年全線竣工，主、支線全長214公里，1922年開闢的北坑溪古道，南支線由象鼻經雪山坑翻越稜脊，再由屋我尾山久良栖古道下到麗陽接大甲溪警備道路。大雪山林場昔日設有七處測候站，復於稍來山搭建高約五層樓鋼構瞭望台，每年十月至羿年四月乾燥季節，必須日夜守望防範森林火災，登臨視野遼闊。\n稍來山位於大雪山森林遊樂區內，為大甲溪支流稍來溪、東卯溪與大安溪支流烏石坑溪的分水嶺；大雪山森林遊樂區必遊景點甚多，天池、小雪山莊、大雪山神木、41K步道小神木、鞍馬山莊(遊客中心)、船型山苗圃、47.6K觀景台都是賞景首選。","season":"稍來山頂瞭望台上視野良好，可俯瞰西側的鳶嘴山、橫嶺山連稜；2~4月可賞山胡椒，3~6月台灣杜鵑、森氏杜鵑及西施花；春、夏之際可觀水晶蘭，秋天是觀賞台灣特有種「台灣紅榨楓」的絕佳景點。","schedule":"1.橫嶺山隧道口旁27K→鳶嘴山→稍來山三角點，約3.5-4小時登頂。\n2.大雪山200林道30.5K→稍來山，約2小時登頂。\n3.大雪山森林遊樂區收費處35K→稍來山三角點，約1小時登頂。","traffic":"開車／國道1號、3號轉國道4 號往東行，於豐原終端接台3省道左轉到東勢，由東勢區東坑路(大雪山200林道)進入，於標示35K 收費站旁上登。\n搭車／可利用豐原客運之東勢線，例假日有公車抵達收費站，班次詳洽東勢站04-2587-2043。","note":"收費站旁登山口上行稍來山為傳統主要路線，主要為階梯及小徑，上登約60分鐘，惟須收入園費。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/cc694fe5-ab28-4af7-ae5d-adc3065fc653.jpg","lat":24.23759567,"lng":120.97144172},{"id":"040","name":"聚興山","altitude":500,"location":"臺中市潭子區","brief":"聚興山位處台中盆地東緣，距離潭子市區東方約3公里，主峰與副峰相距約100公尺，遠望狀似天邊的巨大筆架，西北方連稜處有座尖銳的林牛山，921地震震出大片光禿崩壁直瀉谷底，因此只要先定位出此山，再往東南一點即是聚興山位置。","feature":"新田步道闢建於聚興山西麓，是台中大坑地區步道群之一，路徑規劃完善，途中有多處觀景台與休憩涼亭。早期聚興山芒草閉塞，因位處都會區邊緣，交通便利，如今晨昏之際已是登山運動人潮不絕，假日更是熱鬧非凡，登頂可眺望台中市高樓櫛比鱗次，暗影山、馬拉邦山、頭嵙山、鳶嘴山、稍來山、小雪山等名山盡覽。\n豐原區東陽路山壽巷有棵台灣最大的玉蘭花老樹，樹齡近200年，芳香濃郁。另豐原區南陽路123巷內有棵樹齡250年的老芒果樹，原受菌害現已搶救恢復生機。","season":"聚興山位於台中市潭子區新田里龍興巷內聚興山區，為旱溪支流刀石坑溪與馬牛欄溪的分水嶺，峰頂向東可眺望新社台地及其後的遠山。步道設備完善有彩虹亭、觀景平台、六角亭、觀鷹台、許願池與許多休憩涼亭；全年適宜攀登。","schedule":"新田登山步道停車場→一號步道登山口→涼亭→聚興觀景台→第一水塔→聚興山三角點，約1-1.5小時登頂。","traffic":"開車／中山高南下豐原交流道下、北上大雅交流道下，於潭子區新田里豐興路二段(中89線) 龍興巷進入約1.95公里，即抵左側登山口。\n搭車／台中搭乘豐原客運往豐原經新田、慈濟醫院的班車，「新田」站下車步行至登山口。","note":"步道為階梯步道以及山徑，步道雖然寬廣，但仍有多處臨崖要小心。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/af97f983-73e0-4328-a0ba-86e2d5c6285b.jpg","lat":24.22014828,"lng":120.74274075},{"id":"041","name":"頭嵙山","altitude":859,"location":"臺中市北屯區、新社區","brief":"頭嵙山聳立於台中市區最東緣，為改制前的台中市最高峰，頭拒山與樟普寮山對測線被金字凍山阻擋，於是在頭嵙山補設一等三角點內補003號引測，日據時代另有埋設一顆二等三角點1120號，是台灣唯一有一等與二等雙顆基點的山峰。","feature":"頭嵙山為台中大坑山區的霸主，歷經數十萬年的地殼推升、雨水沖刷、河川侵蝕，形成今日的礫石層地質，由於惡地形不利耕作，也因此得以保留完整的生態系，自中興嶺5-1號步道起登，經二嵙山、頭嵙山續往南行，從右(西)側4號步道下抵中正露營區，最能完整全覽風光與生態景觀。\n頭嵙山稜頂有棵數百年五葉松老樹、農委會新社種苗改良繁殖場內老樟樹、新社水頭巷老樟樹、新社水尾巷老樟樹都是老樹迷的最愛，新社花海節約於每年10到11月展開，面積廣達30甲以上。","season":"頭嵙山步道以幾乎是縱橫全山的圓木步道聞名，素有台中萬里長城之稱。山頂極佳的視野，可俯瞰台中市區、太平區、新社區、東勢區一帶。全年適宜攀登，唯須小心常有小黑蚊出沒。","schedule":"1.中正露營區停車場→登山口→沁心亭→望幽亭→清涼亭→頭嵙山三角點，約2-2.5小時登頂。\n2.新社聖普宮後方山徑登山口→上五號步道→頭嵙山三角點，約10分鐘登頂。","traffic":"開車／中山高南下大雅(中清路)交流道下，北上南屯(五權西路)交流道下，行經市區到大坑，由1到4號步道登臨。\n搭車／於台中火車站前，搭公車到大坑或中興嶺5號步道起登。","note":"頭嵙山懸崖深陡，名列小百岳九嶂之一，須注意安全。夏日炎熱隨時補充水分，更須小心防範小黑蚊。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/f46c725b-815c-4ca4-b4ff-3cc2ecbc22f9.jpg","lat":24.17935875,"lng":120.80014494},{"id":"042","name":"南觀音山","altitude":318,"location":"臺中市北屯區","brief":"南觀音山為台中大坑山群之一，矗立於大里溪東畔，北臨橫坑溪與大山母山(260M、圖根點) 相望，南踞苧園坑、廍子溪和三汀山對峙，遠觀蒼茫獨立，山型尖銳，氣勢非凡，綠蔭蔥蘢掩去裸露的崩崖危稜，但登臨安全無慮，且不覺驚險。","feature":"聳立於南觀音山山巔的玉佛寺，開創者為水里鄉頂崁村蓮因寺後方人釋常瑛法師，主祀觀世音菩薩，山頂建有金色阿彌陀佛、白色觀音菩薩、黑色地藏菩薩等三尊巨大雕像，於眾山林中非常醒目，入寺前需穿過巨大觀音妙掌塑像。峰頂高大的觀景台，可眺望市區大樓。\n大坑圓環250年楓香老樹，遭蟲害已枯萎挖除，原地重植一棵巨大的茄冬樹，是由大坑山區移植。另太原路200年的老芒果樹，生長於大里溪畔，曾遭颱風拗斷粗壯枝幹，現已恢復榮茂。","season":"南觀音山又稱為觀音山，因山頂有座玉佛寺而得其名，巨大觀音像莊嚴肅穆，環境寧靜優雅，登上釋迦太子樓瞭望台，一望無際，可俯瞰大坑溪溪谷，晨昏運動人群熙來攘往，全年適宜攀登。","schedule":"1.開車直上：中台科大前彎進廍子巷→苧園巷→美國學校大門前左側佛手即入口，陡上直達玉佛寺。\n2.大坑橋登山口(玉佛寺步道) →南觀音山三角點，約20分鐘登頂。\n3.觀音小徑→南觀音山，約30分鐘登頂。","traffic":"開車／中山高南下大雅交流道下、北上南屯交流道下，均經市區到大坑，自中台科技大學旁登山口起登，國道4號下豐原交流道轉往大坑。\n搭車／於台中車站搭公車到大坑起登，班次非常密集。","note":"從苧園巷上登，產道坡度較陡，玉佛寺為佛門淨地，請勿帶葷食上山。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/70c3436c-b5c0-4f8f-af8d-2290ceca33ad.jpg","lat":24.172935,"lng":120.741183},{"id":"043","name":"三汀山","altitude":480,"location":"臺中市太平區","brief":"頭汴坑溪以180度環流於三汀山西面，向源侵襲量大，峰頂崩塌嚴重，遠觀彷如天際巨大虎頭凝望，其西支稜有座標高167公尺(圖根點)的小峰頭稱為虎頭山，這便是三汀山又稱虎頭山的由來。","feature":"三汀山西麓原為預定校區，因此廢園區大都為庭園樹，因位於車籠埔斷層帶，西麓山坳出水口被921地震震落土方圍堵，形成一座風光絕美的堰塞湖，長約400公尺，寬約100公尺，自山頂眺望狀似台灣地圖故又名台灣湖，山頂有座兩層樓瞭望台，登臨視野遠及中彰投，八卦山脈就像綠色長城橫亙於台中盆地西側。\n太平車籠埔靶場的330年老樟樹，是太平區近郊七星樹之一；此外，太平福利社250年老芒果樹，兩處皆設有福德祠，也都是聞名全國的神木；太平內城300年老樟樹則是較少被提及的私房景點。","season":"三汀山位於台中盆地東側，為烏溪支流廍子溪、頭汴溪的分水嶺，望高寮設有瞭望台，可俯瞰頭汴坑溪、大潭仔(台灣潭)，遠可眺望台中盆地、大肚台地、鐵砧山及八卦山台地等，全年適宜攀登。","schedule":"一江橋堤防道路登山口→大潭仔→第一步道叉路→第三步道叉路→第五步道叉路→長青運動公園→枕木步道→老鼠崎步道叉路→三汀山望高寮，約2~2.5小時登頂。","traffic":"開車／南下大雅交流道下、北上霧峰交流道下，開車到太平一江橋北側，有數條路線可交會上登，或由坪林國小旁開小型車到達峰頂附近。\n搭車／台中火車站前搭豐原客運，往修平科技大學或蝙蝠洞線班車，在「一江橋」站下車。","note":"自一江橋沿河堤邊起登落差最大，上登約30分鐘後即可接上步道路線。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/3a2acdc0-e69b-470e-8634-ef8a7762de4a.jpg","lat":24.13854319,"lng":120.75272664},{"id":"044","name":"暗影山","altitude":997,"location":"臺中市太平區","brief":"暗影山為台灣海拔一千公尺以下、有三等以上基點的最高峰，自台中市區遠望山形尖銳，與大橫屏山連稜彷如天險屏障，故列名小百岳九嶂之一，自從中部有登山歷史開始，本山就是最熱門山岳，這是其入選小百岳主要因素。","feature":"話說當年鄭成功帶兵從東勢欲往國姓，途中於此山腰處紮營夜宿，深夜天寒地凍，眾官兵苦無良策，忽然出現一位老伯挑了兩桶酒來讓官兵飲用袪寒，安然渡過危險，羿晨國姓爺欲當面致謝，卻找不到人，向村內耆老探聽方知這是土地公顯靈襄助；然此山自北面近觀，山型酷似酒桶，是以山名具有雙重典故。\n仙女瀑布為頭汴坑溪上游大湖桶坑水系，瀑高約10公尺，屬於簾幕型瀑布，兩岸峭壁高聳，河谷巨石羅列，仙靈匯聚，蝶影飛舞，群山環抱；溪水終年不絕，而山蘇及崖薑蕨等蕨類植物，以及冬日盛開的紫紅色油點草點綴，彷彿走進世外桃源。","season":"暗影山因山型酷似火箭，又似熬酒的木桶，又名酒桶山，山頂可遠眺中部五縣市之奇峰山巒及大臺中盆地，全年適宜攀登，每年三、四月為太平枇杷節。","schedule":"登山口(進入1403號保安林地告示)→暗影山三角點，約20分鐘登頂。","traffic":"開車／國道4號豐原終端接台3省道左轉到東勢，於台8省道(中橫公路)標示10.45K處取右龍安橋起算，經中和國小到910鞍部右側登山口共計7.7公里。\n搭車／豐原客運東勢搭車到中和村，步行上山約120分鐘。","note":"太平的法蝶餐廳附近有路可上暗影山，但陡峭難行。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/3773c709-204b-42bb-9a3a-237453e6f1a3.jpg","lat":24.13798183,"lng":120.81784447},{"id":"045","name":"大橫屏山","altitude":1206,"location":"臺中市太平區、南投縣國姓鄉","brief":"大橫屏山列橫亙台中市東方天際，稜脈綿延近12公里，稜脊瘦如鋒刃，「橫看成嶺側成峰」係本山最佳寫照；尤其西側險巇斷崖為啟動921地震的大茅埔雙冬斷層，地景獨特，極具研究觀賞價值。","feature":"50年代，大橫屏山多循鹽菜甕山農路，逼近主稜再循稜登頂返降國姓；民國66年後則以中埔公路清景橋登山路線引領風騷；921震後此徑坍毀，基石亦震落深谷，山友改自後角寮闢路攻頂，並重埋花崗岩基點。\n大橫屏山東側峭壁高百餘公尺，寬達1公里、傾斜約70度，為層岩和砂、頁岩互層結構，渾然天成，細水長流溪源，亦是地質教育鮮活教材，其鄰近槍櫃文化園區、國姓糯米橋、埔尾神木與少年土地公皆屬特殊文化景點。","season":"大橫屏山山勢雄偉，似一巨大屏風，是為“大橫屏山”之由來，是水流東溪、猴洞坑溪、東汴坑溪等河川的發源地，山頂可展望九九峰、台中市街景、國道6號。全年適宜攀登，唯路況較差，芒草、刺藤多。","schedule":"農投16農路第二柵欄(後角寮分195號電桿)→210號電桿→產業道路叉→登山口叉→1170峰→大橫屏山三角點，約3小時登頂。","traffic":"開車／國道6號國姓交流道下，經省道14號至柑子林，轉133縣道接省道21號；抵長流村大長路476號民宅旁，循後角寮農路指標進入行車盡頭即登山口。\n搭車／自草屯搭乘南投客運大坪線，抵水長流下車，轉後角寮農路前往。","note":"山徑有陡坡、峭壁；沿途茅草深密處，偶有崩壁危崖，需小心慢行。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/73482a20-9ebc-4931-af6d-426fd7110b86.jpg","lat":24.07492667,"lng":120.82894286},{"id":"046","name":"阿罩霧山","altitude":249,"location":"臺中市霧峰區","brief":"阿罩霧山海拔雖不高，但遠離高峰昂首千丘，以霸主之態聳立於台中盆地東緣，峰頂可近觀三大惡地形之一嶮巇的九九峰，以及國道3、4 號交匯的複雜環線，可遠眺玉山、合歡山、奇萊山、能高山、干卓萬等百岳群峰，隆冬可見山頭白雪皚皚。","feature":"霧峰早期因晨霧迷濛故稱阿罩霧，阿罩霧山依偎於霧峰市區東側，因此阿罩霧山又名阿罩峰，如今氣候雖難見青山朦朧美景，但因此山位處都會近郊，交通便捷，中部登山社團經常在此舉辦新春團拜。國家二級古蹟霧峰林家萊園位於阿罩霧山腳下，921 地震後已修復泰半，可順遊參訪。\n霧峰樟公巷300年老樟樹、霧峰峰谷路250年老茄苳，都是庇佑鄉里的神木，九二一地震教育園區係為光復國中改建而成，是戶外教學的最佳場所。台灣省議會紀念園區林木蓊鬱，夏日幽靜清涼，適合親子同遊。","season":"位於台中市霧峰林家花園及朝陽科大的後山，山頂附近遍植鳳梨及龍眼樹，沿途的產業道路視野佳，全年適宜攀登，尤以3至7月鳳梨盛產期。","schedule":"樟公廟停車場→阿罩霧山登山口(朝陽高枝43分3分4電桿)→阿罩霧山三角點，約30分鐘登頂。","traffic":"開車／中二高霧峰交流道下左轉，即達台灣省議會紀念園區，續行中正路約1公里，轉右入萊園路，可達林家花園後方，再約0.2公里，即抵成功路與樟公巷口的登山口。搭車／台中火車站前搭公車到霧峰，經林家花園抵登山口。","note":"因路窄坡陡，建議將車停在成功路，步行上山細細欣賞美景。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/5bd85106-090f-408f-a5fe-86967ee06ba2.jpg","lat":24.06122622,"lng":120.71353919},{"id":"047","name":"九份二山","altitude":1174,"location":"南投縣中寮鄉、國姓鄉","brief":"九份二山俗稱九份二尖，以雙峰並峙山形得名；地震浩劫令此山一夕爆紅，卻也遺留崢嶸殘破大地影像，更造就澀子坑和韭菜湖溪，水岸相連、湖光瀲灩的堰塞湖絕色，展現大地蛻變後，奇妙動人的新生之美。","feature":"1999年9月21日凌晨，雙冬斷層和車籠埔斷層連續錯動，引發震撼國際的九二一大地震，百年浩劫令九份二山名聞遐邇，嚴重的崩塌走山，還有澀仔坑湖及韭菜湖二座堰塞湖；留下令人驚心動魄的瑰麗奇景，為當地增添意外地繽紛風采。\n國家地震紀念園區見證了921震波的猛烈衝擊，九份二山北側順向坡土石整片滑落深谷，釀成重大傷亡事件；園區並納入水色蒼茫的堰塞湖、峭岩參差的險峻崩壁、震災紀念碑、震央驚爆點與磁場屋，建構成獨具特色的震災自然遺跡公園。","season":"九份二山位於南投縣國姓鄉與中寮鄉交界處，是南港溪支流韭菜湖溪與貓羅溪支流平林溪的分水嶺，沿途可遠眺埔里盆地、日月潭風景區、水社大山，全年適宜攀登，尤以冬季梅花盛開更佳。","schedule":"步道導覽圖登山口→九份二山三角點，約30分鐘登頂。","traffic":"開車／國道6號國姓交流道下，轉台14省道東行，抵北山坑再右轉147縣道，經南港村長石口上山抵達工寮登山口。\n搭車／自埔里搭乘南投客運往三合橋班車，於長石口下車。","note":"小車可直抵登山口，惟山路陡峭彎曲，行車當心。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/a5198e97-8c31-430d-b64b-943d90454efa.jpg","lat":23.934569,"lng":120.84164792},{"id":"048","name":"橫山","altitude":443,"location":"南投縣名間鄉","brief":"橫山，別名尖山湖山，兩顆基石相距約1百公尺，係八卦山台地最高峰；橫山南緣急坡落差近70公尺，俗稱橫山斷崖，據學者研究應為古濁水溪河道侵蝕面。橫山以縣道分隔，東端宜單車、健行觀賞日出，西側為賞鷹平台。","feature":"橫山位於南投市與名間鄉交界處，近彰化縣社頭鄉界境，為八卦山脈最高峰，橫山賞鷹平台為灰面鵟鷹北返西伯利亞短暫棲息之地，也有大冠鷲、鳳頭蒼鷹及松雀鷹，頻繁出沒山域；每年3、4月間，鷹群過境，遼闊視野，便成為旅人欣賞猛禽盤旋翱翔的絕佳展望台。\n猴探井，乃欣賞高鐵奔馳及夕陽、夜景的熱門據點；此外，清水嚴寺起程的十八彎古道，走來輕鬆愜意，中央嶺步道則可感受驚險刺激氛圍，而長青自行車道則為喜歡挑戰體能極限的單車族最愛。而自松柏坑俯瞰濁水溪，閃爍波光相當璀璨迷人。","season":"橫山觀日平台展望極佳，可俯瞰彰化平原，天氣晴朗時能遠眺玉山群峰，每年三月春分前後，可觀賞到灰面鵟鷹遨翔天際的英姿，其餘季節也可賞鷹。","schedule":"橫山步道口(139乙縣道)→橫山三角點，約20分鐘登頂。","traffic":"開車／國道3號轉台76線於林厝交流道下接137縣道至清水巖寺上登；或自南投市永興里橫山登山口啟程。\n搭車／員林搭乘彰化客運往田中、社頭班車到清水國小，或於南投市搭彰化客運往員林經樟普寮班車於橫山站下車。","note":"古道縱橫，茶壟果園盤據，適合親子共遊。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/91962734-7aae-4155-9c5c-b611dda59d64.jpg","lat":23.88920525,"lng":120.63157042},{"id":"049","name":"貓囒山","altitude":1016,"location":"南投縣魚池鄉","brief":"貓囒山是日月潭湖光山色最佳展望台，為台灣四座高山氣象站之一，山頂裝置有罕見的風力塔；山腰是阿薩姆紅茶主要產地，並設紅茶試驗所，沿途杉林、茶園及紅葉夾道，清幽浪漫。","feature":"1929年日人經營的「蓮華池試驗所」，將阿薩姆大葉茶種與台灣野生山茶配種育苗，再移植貓囒山；並於昭和11年成立「魚池紅茶試驗支所」。據說當時焙製的台灣紅茶是日本天皇最愛。這裡還有民國27年的仿英設計的典雅製茶場，及日本昭和時代的檜木宿舍，俱為珍貴之歷史建築。\n豎井溢水口當地人稱為「天井」，建於民國23年，是維持日月潭水位穩定的功臣。建於民國60年的耶穌堂，屬列柱式建築，展露歐式風情，乃蔣介石出資興建並親題堂額，深具歷史價值。","season":"貓囒山位於大林溪上游，在日月潭的西北方，沿途展望佳，可欣賞滿山遍谷的阿薩姆紅茶園、柳杉及日月潭全景，登頂時更可遠眺九份二山及集集大山，是觀賞日出雲海的絕佳位置，每年四、五月的夜晚可賞螢。","schedule":"貓囒山步道口→木造宿舍區→茶葉改良場→日月潭氣象站→貓囒山大石處，約1小時登頂。","traffic":"開車／南下自國道6號愛蘭交流道下，經省道14號轉省道21號到日月潭；北上從中二高名間交流道下，轉省道16號於水里轉省道21號抵日月潭，自明潭國中旁上登。\n搭車／自埔里搭乘南投客運往日月潭、頭社班車，於日月潭站下車，步行至明潭國中。","note":"紅茶試驗所管制進入時，可從新井技師碑亭旁的步道登頂。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/fb27e016-9683-4ec3-b03c-b98dc8d2b00b.jpg","lat":23.88136717,"lng":120.90801783},{"id":"050","name":"集集大山","altitude":1392,"location":"南投縣中寮鄉、集集鎮","brief":"集集大山昔稱大崙山，山勢聳拔基盤寬闊，緊鄰清代古鎮集集街，為鎮護地方之山，且山容龐大，辨識度高，自台中市郊即可輕易發現此山蹤影，也是中台灣海拔最低的「大山」；山名因商人喚此收購山產之地為「集集那邊大山」而得名。","feature":"集集早年盛產樟腦，清乾隆時期即建立柴橋頭庄，為水沙連和八通關古道支線必經之地，也留下一段綠色隧道傳奇；而近年的「集集金蕉」則為當地攢取不少財富；集集921地震雖造成山城損害，但集集鐵道復駛，更為古鎮帶來持續繁榮。\n集集大山北麓粗坑溪上游銀穗瀑布，仍是罕為人知的祕境之瀑；近郊佛陀世界和平塔珍藏佛陀真身舍利，居高臨下視野浩瀚；鎮上的特有生物中心為研究試驗單位，主要為台灣特有種、珍稀及稀有生物的研究工作，規劃有台灣特有生態園區可前往參觀。","season":"集集大山位於集集、中寮、水里三個鄉鎮交界處，為集集鎮最高峰，視野遼闊，可見日月潭、濁水溪沿岸水裡、集集，最遠可眺望玉山山脈、中央山脈等名山，也是看日出的好地方，全年適宜攀登。","schedule":"1.開車直上山頂電視轉播站→集集大山三角點，約2分鐘登頂。\n2.孟宗竹林區停車場→車埕步道入口(產道終點)→電塔(明潭-中寮010) →大山巷產道→右轉階梯捷徑→電視轉播站→集集大山，約1小時登頂。","traffic":"開車／國道3號名間交流道下，左轉台3省道於名間接台16省道到集集，轉投27線於富山國小旁左轉大坪巷富山產業道路，共約14.35公里直達山頂。\n搭車／搭乘員林客運或總達客運至集集油車坑站，再步行上登。","note":"周邊風情獨具值得一遊，如山麓之集集車站、明新書院等。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071017/c0595e22-ac61-47d3-b167-a7c3e15f1e2d.jpg","lat":23.85511111,"lng":120.83819444},{"id":"051","name":"松柏坑山","altitude":431,"location":"彰化縣二水鄉、南投縣名間鄉","brief":"松柏坑山座落八卦山脈尾稜台地，另名獅子頭山、松嶺，曾以「松嶺遠眺」名列南投八景；豐柏步道沿途生態豐腴，適合進行知性探索。登頂後可遠眺二水、田中翠色滿山，沃野無際；濁水溪之夕陽晚霞閃爍波光，特別風光迷人。","feature":"松嶺之上，矗立金碧輝煌的受天宮古廟，初創於西元1846年，奉祀玄天上帝，歷經多次修建，於1973年將古樸廟貌改建成鋼筋水泥四層廟殿；921震後殿宇受損，次年6月一場大火，殿內全遭焚毀，2008年再度以傳統廟貌重享香火；成為名間鄉道教聖地，也是全國最大的玄天上帝聖廟。\n七星陣地公園，為軍事碉堡群變身而來，其方位分布恰似北斗七星，可以農路串連，並順訪百年歷史的二八彎古道；松柏嶺茶香步道，最適晨昏漫步，尚可遠眺橫山斷崖，視野清爽。此地紅土層富含礦物質，讓生薑的獨特風味成為松柏坑山一帶特產。","season":"松柏坑山又稱松柏嶺山，為八卦台地最末端一座突出山丘，自二水街上東望，山容龐大如臥獅，又名獅子頭山，山頂平緩，已闢為茶園；全年適宜攀登。","schedule":"1.開車至埔中社區活動中心→松柏坑山三角點，約3分鐘登頂。\n2.豐柏廣場→觀山亭(第1涼亭)→賞猿台(第3涼亭)→第4涼亭→松柏嶺受天宮→松柏坑山三角點，約1小時30分鐘登頂。","traffic":"開車／下國道1號北斗交流道，接150縣道，經田中轉137縣道，抵豐柏停車場登山口；或中二高名間交流道到名間鄉，自埔中社區活動中心旁進入。\n搭車／搭火車到二水站，循豐柏步道約100分鐘到達，或自南投市搭彰化客運到松柏嶺站步行前往。","note":"松柏坑山步道臨崖處，拍照賞景應留意安全。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/93470bcf-70b3-4a08-a22d-dced6a448693.jpg","lat":23.82002197,"lng":120.64204994},{"id":"052","name":"後尖山","altitude":1008,"location":"南投縣水里鄉、魚池鄉","brief":"後尖山，位在魚池鄉最南端山岳，座落蒼翠平坦的深山盆地，令山形更顯尖聳突出。自日月潭或四周高地，皆能輕易欣賞它獨特風采；步道景致清爽，登頂後視野遼闊，能盡覽濁水溪沿岸名山與日月潭湖光山色。","feature":"後尖山座落「頭社盆地」邊隅，為清代水沙連六社之一，昔日古道即穿越六社，串連大埔城的文化時空，入山解禁後，漢人陸續移墾頭社，造就當地豐富的人文特色。頭社活盆地表層舖滿了青草，並鋪設浮動棧道，方便遊人感受腳下土地似水床般彈性搖晃現象，充滿新奇趣味。\n頭社水庫是全國最迷你水庫，以「大舌滿溪生態步道」、「環湖步道」、「山龍坑吊橋」吸引遊客造訪。頭社壁畫村利用傳統農舍外牆，將農村風光趣味入畫，洋溢文化之美。最特殊的水上金針花，可搭乘水搖船欣賞，山上油桐花映照水面金針花海，美景如畫。","season":"後尖山位於魚池鄉最南端的山岳，是頭社村的最高點，山頂展望良好，可眺望頭社盆地及日月潭等地區，被當地人稱為「望高寮」，亦為日月潭四兄妹之一。5-10月是麻竹筍生產的旺季，5月也可欣賞油桐花。","schedule":"1.頭社佛堂登山口：頭社佛堂停車場→涼亭→急陡坡公告牌→後尖山，約50分鐘登頂。\n2.塘湖路登山口：塘湖路口站→電塔(大觀－鳳林線015) →後尖山，約1.5小時登頂。\n3.逐鹿古道登山口：台21線73K龍德堂→雨社山→後尖山三角點，約2.5-3小時登頂。","traffic":"開車／中二高名間交流道下左轉台3省道，於名間轉台16省道，於水里轉台21省道往日月潭方向北行，於魚池鄉頭社村再右轉投62線到達登山口。\n搭車／埔里搭乘南投客運至頭社站下車，再步行往武登社區登山口。","note":"登頂前步道之陡峭崎嶇，且產道路線濕滑，行進需要當心。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/638f1f15-ff83-4023-be46-f9ec469b3fa3.jpg","lat":23.81401461,"lng":120.89819789},{"id":"053","name":"鳳凰山","altitude":1698,"location":"南投縣鹿谷鄉","brief":"鳳凰山雄峙鹿谷鄉東方，形似飛鳳展翼，加以朝暉夕陰氤氳繚繞，氣象萬千，為南投八景之一；登山道自溪頭停車場1到14停車格後方入山，經主稜鞍部，北行登1720峰，再下降低鞍陡上鳳凰山。","feature":"溪頭生態教育園區，前身為日本東京帝大台灣演習林，於1902年創設，為台灣最早大學演習林；光復後改組第一模範林場，隨後歸併嘉義和台中山林管理所，民國38年由省府核撥臺大農學院成立實驗林。鳳凰山位於南投縣鹿谷鄉的溪頭森林遊樂區東北方，是阿里山山脈北端的一座山峰，也是「溪頭四珠」之一。\n溪頭「松林町妖怪村」以日式商店街營造浪漫東洋風情，每樣元素均充滿卡哇依風格與獨特創意趣味，緊緊抓住年輕人的心，成為最潮、最夯的中部新景點！鄰近的內湖國小被譽為台灣最美森林小學，校園被蒼翠森林圍繞，木構校舍設計融合美、日鄉村風格，流露淡雅色彩。","season":"鳳凰山山勢由麒麟山方向觀看，猶如一隻展翅鳳凰，終年雲霧繚繞，是夏季避暑勝地。全年適宜攀登，安全起見最好避開雨季。","schedule":"1.溪頭露營區：溪頭露營區→土地公叉路→稜線岔路涼亭→鳳凰山三角點，約3小時登頂。\n2.鹿谷線(隆田產業道路)：5.25K登山口→三岔路取右→鳳凰山，約50∼60分鐘登頂。","traffic":"開車／國道3號竹山交流道下接台3省道往南行，於台3省道230.4K處，左轉接151號甲線，行約2公里再接151號縣道抵溪頭第一停車場。\n搭車／自員林客運台中站搭乘杉林溪線，或自南投彰化客運站搭乘杉林溪班車，或自台中搭乘台灣好行專車。","note":"步道石階偶有鬆動濕滑，宜放慢步伐，林間山徑小心慢行。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/91c1e6fc-1bd4-476a-b2ef-8ffce87fcfa9.jpg","lat":23.69168881,"lng":120.80616683},{"id":"054","name":"金柑樹山","altitude":2091,"location":"南投縣信義鄉、竹山鎮","brief":"金柑樹山別名崩壁頭山，溪頭四珠排行第二，全山林相豐富，古木參天，放眼皆是醉人綠意，山徑穿梭其間，屬絕佳森林浴步道，且沿途多寬稜緩坡，路徑明顯，回程尚可順遊杉林溪遊樂區，近年來已成中台灣最熱門山岳。","feature":"金柑樹山原取溪頭神木附近陡峭山徑攀升，單程4小時始能登頂；民國69年杉林溪開放後，改經聚英村旅舍旁山道往返；忘憂森林公開後，留龍頭附近茶園農路和森林小徑成為入山首選，亦讓攀登金柑樹山變身為一舉兩得美事。\n「忘憂森林」係921震後形成的淤積沼澤，靜止湖水像面鏡子，底下是綠意盎然的水草森林，晨光裡氤氳蒸騰，形成光與色交織的奇幻世界，吸引不少新人前往取景。此外，竹溪神木、一葉蘭及瀑布群亦是獨特景緻。","season":"「溪頭四珠」中排行第二，山頂腹地廣而平坦，可遠眺玉山、西巒大山、郡大山，俯瞰陳有蘭溪、東埔等，全年適宜攀登，三至四月可賞牡丹花。","schedule":"留龍頭→忘憂森林→金柑樹山西北峰→金柑樹山三角點，約2.5-3小時登頂。","traffic":"開車／自國道3號竹山交流道，經鹿谷、溪頭轉往杉林溪方向共約35公里，於溪杉公路13.2K「留龍頭」啟登，或自杉林溪園區內上登。\n搭車／自員林客運台中站，或南投彰化客運站搭乘聯營公車往杉林溪。","note":"寬稜山徑分歧複雜，且午後常見濃霧，應仔細判斷決定行止。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/05793735-5f43-4147-a049-6890d1c7ff01.jpg","lat":23.641281,"lng":120.813978},{"id":"055","name":"石壁山","altitude":1751,"location":"嘉義縣阿里山鄉、雲林縣古坑鄉","brief":"石壁山位雲嘉縣界清水溪支流竹篙水溪上游的石壁山山區。區內有石壁山、嘉南雲峰、番仔田山等雲林縣數一數二高峰，均屬於阿里山山脈。山頂標高1751公尺，有一顆三等三角點4192號基石。","feature":"早期熱門景點在草嶺風景區，近年成立石壁風景區後，更開闢出石壁山南北側步道、蓮心池石壁仙谷步道、楓葉林杉仔林步道，再加茶園、咖啡園、日出、夕陽及雲海美景，美得讓遊客留連忘返！石壁山是雲林縣第一高峰，稜線步道可連走雲嘉南峰。\n石壁山除步道外，尚有太極峽谷及太極茶園，太極峽谷有天梯吊橋、人面石、青龍瀑布、飛來石、化石區等景點，石壁與太極峽谷間尚有竹亭及「石壁鷴橋」的竹橋，再加石壁山下豐山石盤谷瀑布的步道已打通，增添旅遊深度和廣度。","season":"石壁山是雲林縣第一高峰，山頂為一平坦地，天氣晴朗時，可以遠眺草嶺、石壁聚落；全年適宜攀登，更是避暑勝地，但因長年雲霧籠罩，濕氣很重，夏季螞蝗甚多。","schedule":"1.九芎神木停車場：登山口→稜線觀景台→石壁山三角點，約1.5-2小時登頂。\n2.嘉南雲峰停車場(北側登山口)：木製步道→嘉南雲峰→石壁山三角點，約2小時登頂。","traffic":"開車／由中二高下竹山交流道，走149縣道再接149乙縣道，於桶頭接149甲縣道至33.6K指示牌叉路左轉經草嶺國小至石壁大飯店，亦可直行達九芎神木登山口，如欲走石壁山南北側步道可洽請飯店安排接駁。\n搭車／由斗六搭台西客運往草嶺，在龍頭站下車再步行至登山口。","note":"建議由南側步道上登石壁山，再連走嘉南雲峰，由北側步道下來。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/d18330be-e167-4e53-bbcc-53ac8340e970.jpg","lat":23.60370497,"lng":120.72453086},{"id":"056","name":"大尖山","altitude":1305,"location":"嘉義縣梅山鄉、雲林縣古坑鄉","brief":"由於全台大尖山很多，所以岳界稱此山為雲嘉大尖山，俗名尖山母山，簡稱大尖山，又稱華山尖山、太平尖山。山頂有一顆一等三角點及一等衛星控制點，雖座落於雲嘉兩縣界，在行政區域上則隸屬梅山鄉龍眼村。","feature":"雲嘉大尖山為阿里山山脈西北稜，延伸至清水溪西側的最高峰，是小百岳五嶽的西嶽名山。最大特色是雲嘉一帶著名茶山的故鄉，媲美南投縣的鹿谷鄉，由於烏龍茶的外銷美名，遂有今日大尖山沿稜至梨子腳山一帶滿山遍野的茶園。\n雲嘉大尖山除滿山茶園外，當屬西北側山腳下的華山咖啡園區最吸引人，古坑鄉公所在此整建了14條步道，條條各有特色，如文學步道、咖啡步道、音樂步道、汗路步道、柿子步道、瀑布步道等。","season":"位於雲林古坑及嘉義梅山交界處，故大尖山又稱為「雲嘉大尖山」，位於阿里山山脈西端，視野極佳，近可觀賞茶園景觀，遠可眺望玉山、台灣海峽，是觀賞日出、夕陽及雲海的好去處，全年適宜攀登。","schedule":"1.華山教育農園10-5步道口→六角涼亭→大尖山三角點，約1.5-2小時登頂。\n2.龜仔頭：4-1號步道→ 4-2號步道→二尖山→大尖山三角點，約2小時登頂。\n3.竹仔苓(龍眼村竹仔苓)：茶園產道終點→大尖山三角點，約5分鐘登頂。","traffic":"開車／南二高梅山交流道下，經梅山轉162甲縣道至太平國小前，左轉經龍興宮叉路取右抵龍眼國小，往回走250M右側小徑即為登山口；或續直行抵遮棚所(最近的登山口)。\n搭車／斗六市或斗南搭台西客運在華山站下車，再包計程車至步道口。","note":"建議由10-5號步道上雲嘉大尖山，再連走二尖山，右下龜仔頭回華山。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/47f4c95c-3c65-41bc-876e-3af35a504fb1.jpg","lat":23.07175078,"lng":120.46288758},{"id":"057","name":"梨子腳山","altitude":1176,"location":"嘉義縣梅山鄉","brief":"梨子腳山和大坪山、鞍馬山、二尖山、大尖山連成一片大橫屏，極為壯闊。梨子腳山和鞍馬山屬嘉義縣梅山鄉，東南側有出水溪溪合，西側遍植孟宗竹，山稜滿佈茶園，南側有太平村聚落，是進出梨子腳山的重鎮。山頂有一顆三等三角點編號228號。","feature":"早期登山社團曾在此山祝賀當年體委會主委楊森將軍壽辰，故此山又名祝壽山。從前因烏龍茶外銷不錯，當地人看準此沿稜標高均在1000公尺以上，且地勢較緩、山嵐露水重等特色，紛紛闢為大茶園，所生產的茶稱「霧裡茶」，是梅山鄉特產的高山茶。\n梨子腳山除茶園阡陌映入眼簾，亦是賞日出朝霧、落日晚霞及山嵐雲海的好場所。而山腳下的梅山36彎，山勢險要、峰迴路轉，且景色迷人，更有汗路古道、空中廊道、旋轉梯觀景平台等景點。","season":"梨子腳山北面極為陡峭，是太平村最高峰，沿途視野遼闊，俯瞰太平老街，眺望太平山等，是有名的觀日景點，有「祝壽山觀日」的稱號，全年適宜攀登。","schedule":"三元宮→四岔路口(登山口)→石階小徑→梨子腳山三角點，約0.5-1小時登頂。","traffic":"開車／由南二高梅山交流道下至梅山，轉入162甲縣道，經過梅山36彎於標示13K處，取左入太平老街至太平國小。\n搭車／嘉義火車站搭公車至梅山，或搭瑞峰線班車太平站下轉往登山口，班車稀少，洽詢(05)2788177。","note":"開車者可由登山口直接開上梨子腳山鞍部約1公里，再右上步行山徑登頂。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/c804c146-9144-4625-8d38-c5ca277e2062.jpg","lat":23.56718433,"lng":120.60809933},{"id":"058","name":"獨立山","altitude":840,"location":"嘉義縣竹崎鄉","brief":"獨立山屬嘉義縣竹崎鄉緞繻村，從樟腦寮車站附近隔相思腳溪谷，往東北方望去圓渾的山頭就是獨立山。屹立山頂，北眺梨園山與東側大坪山所夾的Ｃ型谷，阿里山鐵道就是從獨立山北繞梨園山出交力坪，而這凹谷就是牛稠溪谷。","feature":"大正元年(1912年)阿里山森林鐵道通車，因迴圈型路線與螺旋型路線穿過獨立山，克服鐵道高度和坡度，使獨立山一夕成名。從樟腦寮站上登，以三次順時針螺旋型路線穿越獨立山，到獨立山站後，再以逆8字迴圈型上山，此為世界登山鐵路五大工法之一。\n早年樟腦寮站和獨立山站只是森林鐵道的過站，甚少遊客。直至古道熱潮發酵，林務局在兩站之間興建獨立山國家步道，爾後更花了八百多萬元整建樟腦寮直上獨立山的木棧道，加上樟腦寮站鐵道已修復，未來會更見熱絡。","season":"位於嘉義縣竹崎鄉緞繻村，以阿里山森林鐵道螺旋上山而聞名，為全台獨一無二與鐵道相依的登山步道，登上獨立山頂，即可環顧四周的青翠高山，俯瞰文峰山、金獅山與竹崎的風貌，全年適宜攀登。","schedule":"奉天岩停車處→取右下階梯往獨立山→獨立山山頂，約30分鐘登頂。","traffic":"開車／南二高下中埔交流道，往中埔方向接台3線，左轉至竹崎接嘉120縣道，右轉東行至松腳的文光國小，或續左上至樟腦寮福德祠前抵步道口。\n搭車／嘉義火車站前搭乘嘉義縣營松腳線班車，於松腳站起登。","note":"建議由樟腦寮站過2號吊橋上登獨立山，再循獨立山步道由1號吊橋回來。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/49a50914-78d0-4ec0-8228-30e8a0ac6ebe.jpg","lat":23.53691,"lng":120.607898},{"id":"059","name":"大塔山","altitude":2664,"location":"嘉義縣阿里山鄉","brief":"大塔山屬阿里山山脈，是小百岳五嶽的中嶽名山及小百岳最高峰。由阿里山或二萬坪隔阿里山溪向北觀望，塔山山列東西橫亙，猶如一道屏障。塔山岩屬排列水平，層理明顯，層層上疊，猶如塔狀，故稱塔山，主峰海拔2663公尺，卻無基點。","feature":"大正4年(1915年)，完成眠月線鐵路穿越大塔山鞍部；光復後，民國36年修復至石猴段，成為觀光鐵道路線，921大地震時路基崩壤而停駛。鄒族稱此山為「hotsubu」，意指靈魂歸宿之地，可能與塔山因斷層作用所形成之陡直斷崖，鄒人極難翻越此山而產生敬畏心理。\n大塔山位雲霧帶之上，是欣賞山嵐雲海日出落日的好所在，沿途並可欣賞祝山線火車行駛光景，而登山口的阿里山森林遊樂區更是熱門風景區，尤其櫻花季更是人山人海，多留些時間把大塔山、祝山和阿里山一併瀏覽，將不虛此行。","season":"位於嘉義縣阿里山森林遊樂區後方，與小塔山在內的數座山峰合稱作塔山山系，是台灣原住民鄒族人心目中的聖山，視野極佳，可眺望玉山群峰與俯瞰阿里山國家森林遊樂區全貌，全年適宜攀登，3至4月可賞櫻。","schedule":"阿里山國家森林遊樂區收費站→沼平車站→塔山步道入口→塔山步道→大塔山觀景台，約3至3.5小時登頂。","traffic":"開車／南二高下中埔交流道，接台18省道上阿里山公路，經觸口、十字路至阿里山森林遊樂區，再轉往姊妹潭旁登山口。\n搭車／嘉義火車站搭阿里山線公車，至阿里山新站下車，再步行前往登山口。","note":"上大塔山中途嚴禁走鐵道；欲走鐵道責任須自負，要注意祝山線火車的行駛。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/2b946d3a-a037-44c7-8cd7-63a1d522659c.jpg","lat":23.535794,"lng":120.807886},{"id":"060","name":"大凍山","altitude":1976,"location":"嘉義縣阿里山鄉","brief":"大凍山位奮起湖東側，無基點。屬阿里山山脈，行政區域在阿里山鄉十字村。1912年，因奮起湖位於嘉義到阿里山二萬坪的森林鐵道中繼點，被譽為南台灣的九份。隨著大凍山國家步道的設立，成為奮起湖遊憩重心。","feature":"奮起湖因東有大凍山、北為光崙山、西是牛山等三面環山，形如畚箕，雲霧環擁如湖，故舊稱畚箕湖，為八掌溪源頭。最高點在東北側大凍山，亦稱畚箕山；早期熱絡區在奮起湖老街、神社古道、南北側步道、糕仔崁古道；大凍山越嶺古道為昔時畚箕湖和湖底的聯絡道。\n大凍山山頂建有一座觀景台和涼亭，是中南部觀日出最美的山峰，其日出時間長達3分20秒，祝山僅4秒。大凍山分南北兩區環形連接步道，北區以樹石盟及大凍山為主，南區則以流星巖、明月窟、十八羅漢洞、回頭嶺及石獅象為主。","season":"奮起湖大凍山，臨近竹崎鄉，即阿里山森林鐵路中途大站奮起湖站東南東方2.5公里處，為奮起湖風景區一帶最高峰，其上有觀景坪，360度的環狀視野，可觀賞日出奇景，亦可遍覽玉山、大塔山、小塔山等群峰，全年適宜攀登。","schedule":"1.多林登山口(北)：樹石盟→石階步道岔路→大凍山，約1-1.5小時登頂。\n2.頂湖登山口(南)：觀音石→三叉路取右→石獅象石→涼亭叉路取右→大凍山，約1小時登頂。","traffic":"開車／南二高下中埔交流道，接台18省道上阿里山公路，到石卓左轉169縣道，於太和、來吉叉路口右轉嘉155縣道到多林檢查哨登山口。\n搭車／搭阿里山線火車或奮起湖線公車，於石卓站或奮起湖站下車，轉搭計程車前往。","note":"欲走大凍山國家步道全程者，建議先走流星巖明月窟，再逆時針經石獅象上大凍山樹石盟回登山口，能慢慢欣賞大凍山森林全貌。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/443701bf-b1ca-4b42-b443-0f620d858773.jpg","lat":23.497829,"lng":120.71982},{"id":"061","name":"大湖尖山","altitude":1316,"location":"嘉義縣番路鄉、竹崎鄉","brief":"大湖尖山位於嘉義縣番路鄉大湖村，為四天王山、火焰山迤邐稜脊，其尖突山峰相當搶眼，在地人稱「尖山」。大湖如同奮起湖不是湖，大湖尖山和文峰山、尖凍山、三寶山連成Ｕ字形山谷，大湖溪經此山谷流入八掌溪，幾乎和奮起湖、八掌溪如出一轍。","feature":"在159甲縣道未開通前，它是個封閉山區，幾乎沒有遊客。2003年推出台灣小百岳後，大湖村一下冒出三寶山、文峰山和大湖尖山3 座小百岳，讓人開始注意這小村落；而159甲與嘉124縣道的興建打開此地的交通。如今新小百岳摒除三寶山和文峰山，雖有同質性和山況考量，卻無損大湖尖山的地位。\n大湖尖山最大特色就是滿山滿谷架高的龍鬚菜，其結的佛手瓜，炒起來相當好吃！步道中途有一株少見的梧桐樹6至8月開花，非油桐樹哦！大湖國小附近的鳳凰瀑布、三寶山前的黑心石山步道及紫雲寺步道均值得一遊！","season":"又名尖山、尖崠仔山，為牛稠溪與八掌溪的源頭，為阿里山山脈光崙山突出的支稜，遠望山峰，三角型的座山，非常明顯，全年適宜攀登。","schedule":"產道涼亭→尖山步道起點→涼亭（指標800m）→涼亭（指標400m）→大湖尖山，約1小時登頂。","traffic":"開車／由南二高中埔交流道下接台18省道，至觸口村九寮左轉嘉124縣道，再接159甲縣道右轉至興湖寮，過興隆橋後約50公尺左轉前行1.4公里抵涼亭登山口。\n搭車／由嘉義搭大湖線公車，於終點站大湖站下車再步行至登山口，公車班次少。","note":"大湖尖山有二處登山口，建議由西稜第一個涼亭登山口起登。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/b77be0e3-936e-4a95-8890-27a4f11a24ee.jpg","lat":23.49124703,"lng":120.64237561},{"id":"062","name":"紅毛埤山","altitude":150,"location":"嘉義市嘉義市","brief":"紅毛埤山緊臨蘭潭水庫，為嘉義市第一高峰，海拔低僅150公尺，卻有一顆二等三角點編號1096號基石。嘉義市多平原，僅東側有阿里山逶迆至嘉南平原的一小段尾稜，那就是紅毛埤山丘陵，南二高在東側開鑿蘭潭隧道。","feature":"據說荷蘭人(又稱紅毛人) 佔據台灣時，在今嘉義市東郊挖儲水池，故此地名稱為「紅毛埤」，這也正是今日山名的由來。紅毛埤山全山遍植闊葉林，市府建有完善登山步道，稱二漢坡步道及好漢坡步道，步道林木茂盛幾無展望。\n紅毛埤山最大賣點不在山頭而是在山腰的蘭潭水庫，蘭潭水庫昔為紅毛埤，現闢有環潭道路，環潭的東西側是欣賞湖面日出和落日的好所在，正如山水相映一年四季可親，是晨昏運動好去處，湖畔東側的嘉義大學，環境清幽美麗！","season":"位於嘉義市蘭潭水庫旁，是阿里山山脈延往嘉南平原的最後山稜，過紅毛埤山後即是嘉南平原。蘭潭水庫舊稱紅毛埤，為荷蘭人所建，此山因而得名，全年適宜攀登。","schedule":"1.由嘉義市大雅路直接開車進入紅毛埤巷→紅毛埤山三角點，約3分鐘登頂。\n2.濟福宮→蘭潭步道登山口→筍寮→新樂園→小公園映像桃園→都界79樁→紅毛埤山叉路→紅毛埤山三角點，約1小時登頂。","traffic":"開車／由嘉義市區走159甲縣道的大雅路一段，從東洋蘭潭別墅對面的產道進去約200公尺，即抵北側登山口，往南不到100公尺便到紅毛埤山。\n搭車／搭嘉義縣公車大湖線抵崇仁護校站，若由東洋新村站下車約10分鐘可登頂。","note":"由二漢坡步道上登主稜後要接紅毛埤山，須特別留意地圖定位才能找到基點。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/a01d571e-16ce-478a-bcc5-aa9468d643d9.jpg","lat":23.47999928,"lng":120.49196628},{"id":"063","name":"大棟山","altitude":1241,"location":"嘉義縣大埔鄉、臺南市白河區","brief":"大棟山位於關子嶺溫泉區，「關」字在閩南語與「高」字是諧音，舊稱高嶺，由關仔嶺地區仰望，彷若一隻雄獅之頭，故又稱之獅子頭山。與鄰近的九龍、崩山、李子園、園墩仔等山，形成台南白河與嘉義大埔的天然屏障，有綠色長城之稱。","feature":"大棟山是台南市最高峰，以睥睨群山之姿，矗立在嘉南平原的東緣，由厚層塊狀砂岩所組成，其西壁峭崖壯麗無比。屬阿里山系向西延伸的支脈，其主脊為關子嶺山區各支脈的主幹，向北延伸至嘉義中埔的凍仔頂山，南北縱列綿亙，因高低差超過600M，且山徑坡度大，是高山縱走的體能訓練場。\n步道為低海拔闊葉林，溫暖潮濕的氣候使植物高大茂盛，沿途可遠眺白河、鹿寮水庫及嘉義縣仁義潭、蘭潭水庫等，山頂視野廣闊，關仔嶺溫泉區及廣大的嘉南平原一覽無遺，假日是南部地區熱門登山健行路線。","season":"為台南市白河區與嘉義縣大埔鄉交界處，為台南的第一高峰，山頂瞭望台可觀賞關仔嶺溫泉區及嘉南平原，夏季須做好防曬，冬季可賞梅花。","schedule":"1.關嶺國小→土地公廟→第一涼亭(橫石亭)→大棟山三角點，約2小時登頂。\n2.土地公廟→第一涼亭(橫石亭)→大棟山三角點，約1.5小時登頂。","traffic":"開車／國道三號白河交流道東接172號縣道，再右轉接175號縣道進入關子嶺風景區，見大棟山指示牌小路左轉，仙祖廟前停車。\n搭車／搭嘉義客運或新營客運至關子嶺站，後循大棟山指示牌步行約40~60分鐘抵達仙祖廟。","note":"沿途都是上坡路段，部分有大石頭路，較不好走易滑跤扭傷，建議攜帶登山杖，沿途較無遮蔭，夏季來此要做好防曬。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/c6088cd3-e3f2-4db5-8c99-f98d03d1002b.jpg","lat":23.31132933,"lng":120.52265136},{"id":"064","name":"崁頭山","altitude":844,"location":"臺南市東山區","brief":"位居曾文水庫集水區週邊群山之內，地處急水溪支流鹿寮溪與曾文溪的分水嶺上。崁頭山聳立於孚佑宮後方，屬於西烏山嶺山脈沿伸的山頭，狀若觀音座石；是台南市大眾化的登山路線之一。","feature":"崁頭山步道全程約為3.2公里，入口位於山腳下孚佑宮旁，孚佑宮仙公廟依山建於西北邊山腰，供奉主祀八仙之一的呂洞賓，相傳於明末清初時，先民進入大埔墾殖，有感於此地山靈水氣，便設祠於此，有400年的歷史，宮內有全國唯一奉祀齊全的八仙神像，靈山毓秀。\n情人石為崁頭山山頂的巨石，視野展望佳，可眺望東山之聚落景觀、嘉南平原，天氣晴朗時還可看到嘉南的濱海地區，雨後常有雲海、雲瀑，登山步道旁是低海拔闊葉林，林蔭茂密，植披生態豐富，美不勝收。","season":"崁頭山是屬於西烏山嶺山脈，東背曾文水庫，南臨烏山頭水庫、尖山埤，北有白河水庫環繞，西向坡地迎向臺灣海峽上升氣流，秋冬午後常是雲霧繚繞。全年適宜攀登，每年11月有咖啡節活動。","schedule":"孚佑宮右側登山口→情人石小公園→崁頭山三角點，約30分鐘登頂。","traffic":"開車／國道3號下白河交流道，接172縣道東行再右轉接175縣道往南，遇孚佑宮牌樓左轉至登山口。北上由六甲交流道下接174縣道往東，至南元農場後左轉175縣道，右轉往孚佑宮。搭車／新營或白河搭乘新營客運至青山，再步行約1小時至仙公廟。","note":"走此步道最好避開下雨時段，上下情人石需謹慎小心，注意安全，避免滑落。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/f4a19c22-a023-47f1-8cce-5e4e4598615c.jpg","lat":23.09022789,"lng":120.43383247},{"id":"065","name":"三腳南山","altitude":1186,"location":"嘉義縣大埔鄉、臺南市南化區","brief":"位於嘉義縣大埔鄉與台南南化區交界，地處大埔溪與後堀溪的分水嶺上，從遠處望去，在山頂、山中央、山尾等3 處形成狀似三座並排的山，故名之，三腳南山隔著曾文水庫與關仔嶺大棟山遙遙相望，山頂可眺望嘉義農場紅瓦綠野景色，及曾文水庫湖光山色。","feature":"三腳南山或稱三角南山，位於嘉義大埔跳跳農場上方，為台南市第二高峰（第一高峰為關子嶺大棟山）。攀爬三腳南山，一般都由跳跳農場出發，西稜攀登最為便捷，但山勢陡峭險峻，尤以後段陡坡峭壁為最，沿途潮濕，並夾雜次生林相，行走其中並不輕鬆。\n三腳南山最著名的景點地標「太師椅」巨石，此處視野極佳，可俯瞰整個曾文水庫景緻，連對岸的大棟山連脈均清楚可辨。昔日由三腳南山到竹仔尖山，是台南地區有名的縱走路線之一，但如今此路段已不通。","season":"位於台灣嘉義縣大埔鄉西興村、茄苳村與臺南市南化區關山里交界處，全年適宜攀登，唯山勢陡峭險峻，須小心攀爬。","schedule":"跳跳農場停車場→梅園步道→登山口→南稜西稜叉路口→太師椅→三腳南山，約2.5~3小時登頂。","traffic":"開車／南二高接台84快速公路到玉井，轉台3線往北經楠西、嘉義農場，於347.3K處跳跳農場牌樓上山。\n搭車／玉井區公所搭興南義客運往大埔或嘉義市搭往嘉義農場班車，在「第六莊」下車。","note":"雨天不宜造訪，路徑濕滑、多刺黃籐及芒草擋道，山勢陡峭險峻，部分陡坡路段須拉繩，是一座不容易親近的小百岳。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/7b11cfc4-5e2e-4b8d-922a-c1b6141baab8.jpg","lat":23.24059783,"lng":120.59246247},{"id":"066","name":"西阿里關山","altitude":973,"location":"臺南市南化區、高雄市甲仙區","brief":"西阿里關山又名小林山，屬阿里山山脈餘脈，東隔旗山溪與玉山山脈餘脈對望，清朝時期即修築古道，聯絡南化區及甲仙區，稱為「小林古道」，西阿里關山為小林古道的最高點。","feature":"西阿里關山地處後堀溪與楠梓仙溪的分水嶺上，原登山步道係由甲仙起登，88風災後已坍方不通，現一般都改由台南南化區進入。「小林古道」，是台南市南化區關山村往來高雄市甲仙區小林村的越嶺道，西邊的叫西阿里關，就是現今的南化關山里，東邊則是東阿里關，包含甲仙、小林一帶。\n「阿里」是漢人稱「山番」為「傀儡」之意，關就是關口，此地自古就是漢人防堵原住民入侵的重要據點。山徑原始不難走，沿途生態豐富，可眺望仔尖山、老籐湖山，途經八八風災造成的崩壁，山頂有廢棄瞭望台，林間可展望甲仙新小林村、白雲山。","season":"西阿里關的四季景色為春螢、夏瀑、秋林、冬谷，回程可順登茅山南峰，登山口處還有出火奇景，以及瑞峰國小附近的千層巖瀑布獨特地形；全年適宜攀登，四、五月可賞螢火蟲。","schedule":"出火仔叉路→五叉路口→茅山南峰登山口→展望點崩坍處→西阿里關山三角點，約1小時登頂。","traffic":"開車／台84線至玉井接台20線省道，於52.5K處左轉南179縣道，行經三叉路直行179線，後取右179-1線前行，至水泥路後取右往出火仔，經三界𡊨廟爬升至五叉路口停車步行。往左前方之泥土路上登西阿里關山，注意布條或標誌。","note":"小林古道現多已闢為採筍的產業道路，崩壁旁山徑土石細滑，距離雖短，但仍是大意不得。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/a7a1371c-0f35-41b0-8972-6577c883d268.jpg","lat":23.18296086,"lng":120.64119136},{"id":"067","name":"竹子尖山","altitude":1110,"location":"臺南市楠西區、南化區","brief":"竹子尖山係後堀溪與灣丘溪分水嶺，屬阿里山脈南段，西南稜支脈；是台南市的第三高峰，為楠西梅嶺風景區的最高峰，頗佳的展望與適中的高度，是南部熱門郊山，也是有名的賞梅勝地。","feature":"竹子尖山座落在梅嶺風景區上方，與三腳南山、花瓣山為同一稜脈，登頂途中可俯瞰大棟山脈、嘉南平原、曾文水庫和南化水庫，天氣晴朗時甚至能遠眺玉山群峰，由梅嶺的二層坪出發，有四條步道可前往，由北至南分別是：梅峰、伍龍、觀音和梅龍步道，經由稜線步道抵達山頂。\n山頂的氣象局雨量測報站是最醒目的地標，上下山可選擇不同的步道，走一圈環狀路線，沿途瀏覽不一樣的景致；稜線可東觀日出，西看日落，隆冬梅花盛開時和四五月間的螢火蟲季，是賞花賞螢的最佳地點。","season":"梅花開放時節，滿山遍野的梅花，雪白迷人，曾以「嶺梅映雪」名列新南瀛八景之一；全年適宜攀登，每年十二月至一月可賞梅，四月可賞螢火蟲。","schedule":"二層坪停車場→觀音寺（經觀音步道）→稜線→竹子尖山三角點，約1小時登頂。","traffic":"開車／南二高接84號東西快速道路至玉井，走3號省道至楠西市區外環道路往梅嶺方向，於台三367.4K右轉約5公里抵達下梅嶺上登。\n搭車／在玉井搭乘興南客運往梅嶺班車。","note":"梅嶺道路狹窄、蜿蜒有陡坡，大客車只能通行至梅嶺資訊站；梅龍步道前半段的水泥農路易長青苔，路面濕滑，請特別小心留意。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/d3df8944-513f-437f-9731-6af46643f88a.jpg","lat":23.17586031,"lng":120.56551733},{"id":"068","name":"藤枝山","altitude":1565,"location":"高雄市桃源區","brief":"屬於中央山脈南段支稜，北面寶來溪切割，南側邦腹北溪盤踞，東北與東藤枝山(1806M)連稜，西南迤邐至頭剪山(1528M)，峰頂有二等三角點1664號、臺灣省政府圖根補點各一顆，距離藤枝林道僅約0.25公里。","feature":"藤枝山位於東藤枝山西南方直線距離約3.1公里處，雙峰連稜，東藤枝山雖然海拔比藤枝山高，但因埋設的是三等三角點而屈就稱為東藤枝山。基點處展望良好，可遠眺高山百岳南一段連稜，基點旁有數棵杜鵑花，若逢花季令人賞心悅目。\n登山口附近二集團，又稱為松濤，是臺南市以南海拔最高社區，日治時期分批開發林地，目前尚有二十幾戶住家，這裡的布農族人原居寶來溪上游，光復後遷居至此，百餘年來與南鄒族沙魯阿群、下三社魯凱族萬山社通婚融合，與傳統已顯差異。","season":"終年適合造訪，颱風季節須注意林道是否暢通。","schedule":"登山口→途中墾殖區、竹林、原始林交替上場→藤枝山三角點，約20∼ 30分鐘登頂。","traffic":"開車／國道3號接台84快速公路至終端玉井，再接台20省道經甲仙到荖濃轉台27省道南下，於「邦腹溪橋」前左入藤枝(荖濃溪) 林道至18.1K登山口。\n搭車／無公車行駛。","note":"登山口有16.9K、17.1K、18.1K三處，山友大都從18.1K循稜往西方向徐登較緩坡。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/7e3ef472-db50-4f87-a59e-3b2f5e8b1d15.jpg","lat":23.06204658,"lng":120.73848461},{"id":"069","name":"白雲山","altitude":1044,"location":"高雄市甲仙區","brief":"白雲山位於高雄市甲仙區和六龜區交界處，行政區域上屬甲仙區西安里。主稜源自玉山山脈，稜尾經大貢占山、龜山沒入荖濃溪。西隔楠梓仙溪與阿里山山脈對峙，東隔荖濃溪與中央山脈卑南主山遙遙相望。","feature":"白雲山原名廓亭山或廍亭山，因前省主席黃杰將軍巡視南橫公路時，經過直瀨附近，因望見朵朵白雲繚繞，遂將此山更名為白雲山。原屬偏遠山峰，因國道及快速道路的開通，成為可一日往返的郊山，為南部頗具悠久歷史的名山。\n八八風災重創南台灣，南橫道上柔腸寸斷，白雲山有些路段崩毀，登臨者漸少，唯一不變的就是它那個圓渾山型。然白雲山入口的重鎮甲仙，山產出名，其中卻以芋頭馳名，有餅、冰、麻糬可品嚐。附近有百步道之一的六義山步道，可順道健行一番！","season":"白雲山地處旗山溪與荖濃溪的分水嶺上，可俯瞰荖濃溪和六龜聚落，遠眺南橫諸峰，天氣好時能遙見北大武山；全年適宜攀登。","schedule":"1.台20線64.7K登山口→土地公廟叉路口→白雲山登山口→白雲山，約1.5小時登頂。\n2.白雲山登山口(四驅車直上電桿186右50)→白雲山三角點，30分鐘登頂。","traffic":"開車／由甲仙進入台20線(南橫公路)，行至約64.6K處叉路口，即為登山口。\n搭車／可由台南市搭乘興南客運甲仙線，或搭乘高雄客運至甲仙，再轉計程車前往登山口。","note":"除非四輪傳動車，否則車子停於64.6K登山口，循產道步行至主稜叉路，再左轉產道經崩壁至白雲山西南稜步道入口，此為正確路線，中途有左叉路勿入。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/966efe3d-747c-46a0-bf93-f2d926033316.jpg","lat":25.12775278,"lng":121.54657356},{"id":"070","name":"刣牛湖山","altitude":798,"location":"臺南市南化區、高雄市杉林區","brief":"刣牛湖山地處曾文溪支流後堀溪與高屏溪支流旗山溪的分水嶺上，位阿里山山脈南段的主稜線上，為臨近山區最高峰，如往北續行可縱走至烏山嶺、噍吧哖抗日英雄紀念碑、風空子山、雲仙寺、下歸林。","feature":"刣牛湖山位於台南南化烏山步道上，刣牛湖山為步道最高點，步道北從下歸林為起點，途中經過風空子山、噍吧哖抗日英雄紀念碑、烏山、刣牛湖山、金光山財神爺、金光山、石松子山、王爺崙、長青嶺等，直至台3 線的金馬寮，屬南化、甲仙及內門等地區的自然屏障。\n烏山步道全長12公里，為南台灣著名的縱走路線，林木蓊鬱、巨石林立，也是旅遊勝地，山腰上各大寺廟，香火鼎盛，信眾如織，假日更是登山客常造訪的地方；視野極佳，鏡面水庫、南化水庫一覽無遺，縱走一趟約需九至十個小時。","season":"烏山位在高雄市和台南市的交界，烏山步道為日據時代防火線，是南台灣著名的中海拔縱走健行線；全年適宜攀登，夏季縱走需補充水份和防曬。","schedule":"NCC監測站→接烏山步道→廢棄貨櫃屋→曾文溪水源保護區界樁→刣牛湖山三角點，30分鐘登頂。","traffic":"開車／1.中山高仁德交流道循182縣道至內門，接台3線左轉抵金馬寮起登。2.國道8號於新化下台20線，經左鎮接台20乙至南化，轉台3線至紫竹寺登山口。3.快速道路84號往玉井南化，接台20線到下歸林登山口。\n搭車／搭乘興南客運台南往南化，或搭興南客運甲仙線至下歸林站。","note":"步道只一小段稜線陡升且是碎石子路須小心外，其他都是緩坡而上，走在稜線上視野極佳且路徑明顯不難走，唯叉路多請小心。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/6288768f-6d74-47de-867f-085b8ef21513.jpg","lat":23.04803922,"lng":120.52354681},{"id":"071","name":"鳴海山","altitude":1411,"location":"高雄市茂林區","brief":"鳴海山，日治時期為扇平警備道的制高點，為高雄市十大名山之一。鳴海山北側約2公里處即為扇平聚落，有林業試驗所設立的工作站，內有扇平森林生態科學園。","feature":"鳴海山為高雄市十大名山之一，地處荖濃溪支流扇平溪與濁口溪的分水嶺上，從扇平向南仰望，連稜山峰的最高點即鳴海山，稜脈向東轉北往南鳳山，向西至網子山轉南延伸，至真我山後垂降至大津濁口溪，鳴海山正位於這段稜線的轉折點上。\n攀登鳴海山，大都經由茂林的美雅商店左上接舊茂林聯絡道路，四輪傳動車可至7.5K，叉路直行岔路往五公廟，右後方即為鳴海山登山口。沿途步道擁有豐富的歷史遺跡、濃密參天的林木、和緩寬暢的山徑，除了時時見到遺址之外，也有不少駁坎、浮築橋。","season":"位於高雄市茂林區北境，途可見駁坎及駐在所遺跡，往北能遠眺森山、御油山和森山氣象站等地；全年適宜攀登，唯夏季螞蝗超多。","schedule":"鳴海山、網子山登山口→石藥師遺址→網子山(四日市遺址)→網子山東北峰(桑名遺址)→鳴海下山(宮遺址)→鳴海山(鳴海遺址)三角點，2-2.5小時登頂。","traffic":"開車／由茂林高132線7.2K處美雅商店進入→舊茂林聯絡道→3.8K處→四輪傳動可至7.5K附近→直行岔路往五公廟→右側後方即為鳴海山、網子山的登山口。\n搭車／搭乘屏東往大津或旗山往茂林多納的公車，再轉往登山口。","note":"舊茂林聯絡道前往四叉路口之登山口，因路幅狹窄、坡陡彎急，須高底盤四輪傳動車才可開抵；夏季螞蝗超多，要有防護準備。八八風災後扇平林道整修中。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/3875ea2a-0c80-4636-8aa9-c01785e08d93.jpg","lat":22.95531003,"lng":120.69037017},{"id":"072","name":"旗尾山","altitude":315,"location":"高雄市旗山區","brief":"旗尾山位於高雄市旗山區，為玉山山脈南餘脈，山勢呈東北往西南走向，坡度呈西陡南緩。東鄰美濃平原，西臨旗山溪及旗山街區。旗山因地理位置重要，是公路起點與交會點。","feature":"從旗山街望向旗山溪東岸的山稜，其橫斷面成左高右低的三角形，外緣又有起伏的山頭，恰似蛟龍旗，故稱旗尾山；旗尾山山下的旗尾庄，為清代屏東平原閩客械鬥的對峙前哨站。由於是重要交通樞紐，反倒使得前往南橫、甲仙、寶來和美濃旅遊者，常過站而未停留觀賞旗山之美。\n山頂可遍覽旗山溪壯麗山河及美濃沃野平原阡陌交錯，是一座展望極佳的郊山。山腳下的旗山市區則古蹟點點，昔日的旗山神社今為孔廟，還有旗山老街、旗山天后宮、旗山車站、旗山天主堂、旗山角樓及武德殿等等。","season":"旗尾山山勢直立挺拔，山頂的旗尾山祠，有360度的展望景觀，可遠眺南大武山、北大武山、霧頭山、大母母山、大小岡山等，是「高雄市十大名山」；全年適宜攀登。","schedule":"1.第一登山口→旗尾山三角點，約1.5小時登頂。\n2.第二登山口→旗尾山三角點，約1小時登頂。\n3.第三登山口→旗尾山三角點，約45分鐘登頂。","traffic":"開車／南二高燕巢交流道下接國道10號至旗山，轉台28省道左轉於旗山橋前右轉高113縣道抵登山口。\n搭車／自高雄搭乘往美濃、六龜方向之高雄客運，至旗山糖廠下車，再步行1.9公里至登山口。","note":"旗尾山計有3個登山口，建議從高113縣道的1.8K第三登山口上登，登頂旗尾山後再循南稜下至第一登山口，如此有較好的視野展望。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/8de43173-5056-419f-8d07-a757ea806739.jpg","lat":22.89673969,"lng":120.4966765},{"id":"073","name":"尾寮山","altitude":1427,"location":"高雄市茂林區、屏東縣三地門鄉","brief":"「尾寮」的由來是早期居住此地的平埔族人，為了要防止原住民下山侵擾設有隘勇線，而此處正是隘勇線防守最後端所以稱之為「尾寮」。屬大武地壘之邊緣山地，是大津一帶山區最高峰。","feature":"尾寮山位在屏東三地門及高雄茂林交界，濁口溪與荖濃溪在此山麓會合，直行進入茂林國家風景區，左轉亦可前往扇平風景區，有東、西兩側登山入口，另還有一條直攻路線是由大津瀑布直上尾寮山。登高可遠眺茂林、高樹、美濃等地，是山友們前進百岳的訓練場所。\n攀登路線較多人走的是西側，由大津橋前上登，前半段約6公里的產業道路，一路之字形緩坡，後半段則為較原始之山徑，約行3公里，路徑長、坡度陡，偶有需拉繩攀登地形，落差約1300公尺，步道全程幾乎都在林間樹蔭下，生態豐富好健行。","season":"尾寮山可遠眺茂林、高樹、美濃等地，是攀登大山行前訓練的好地方。全年適宜攀登，4-5月賞油桐花，6月賞相思樹。","schedule":"1.西側登山口→集義亭→活水源休息區→觀景亭→觀雲台→尾寮山三角點，約4小時登頂。\n2.東側登山口→沙溪林道23.5公里→尾寮山三角點，約1小時登頂。","traffic":"車／南二高下九如交流道，左轉接台3線往里港方向，右轉接台22線至高樹，沿台27線往茂林，至大津橋前即可見登山口指標。搭車／搭乘屏東客運至大津站下車步行至登山口。","note":"登山路徑過了前段產業道路後，幾乎全程走在林蔭處，越行至高處越陡峭，但卻更能激發登山者的潛能與鬥志。4-6月夏季悶熱注意午後雷陣雨，春秋兩季最適合。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/e106b0ea-8e82-46c1-816b-601e1134af59.jpg","lat":22.85705358,"lng":120.67626133},{"id":"074","name":"大崗山","altitude":312,"location":"高雄市阿蓮區、田寮區","brief":"在高雄市阿蓮區、田寮區和岡山區的一片平原中，有座隴起的平頂山稜，山勢不高卻猶如一座大屏障。平頂山稜屬新化丘陵，因珊瑚礁石灰岩裸露，岩洞極發達，曾入選為台灣的地景百選之一。南端雷達站捍衛台海安全。","feature":"大崗山西南部的隆起珊瑚礁形成方山狀台地，岩洞成著名地景，如北側有盤龍峽谷，東側有一線天、石母乳、情人洞和減肥洞，中央有天靈洞，成為洞穴探秘的好去處。前山西側下，則有超峰寺、龍湖庵、福全佛堂、華山聖堂和靜修寺等禮佛聖地。\n大崗山立有木牌的山峰，位大崗山中心地帶，由北側走產道可先至盤龍峽谷，觀賞長300公尺的珊瑚礁峽谷。行經2.2公里處叉路再右上小徑約30公尺即可登頂，續前行可至天靈洞，再往前至直昇機場為終點。","season":"大崗山為高雄十大名山之一，大崗山風景區分為前山與後山，前山稱宗教區，後山為生態區，是觀賞夕照、夜景、石灰岩地質與校外教學的好去處；全年適宜攀登。","schedule":"意象園區入口停車場→菩提大道→龍湖庵→十方涼亭→十八羅漢洞→天靈洞→三角公園→大崗山，約2小時登頂。","traffic":"開車／國道1號下路竹交流道接台28省道，經阿蓮至中油大崗山站改走高139縣道，於峰南再走高37線道約350公尺遇叉路，右轉為大崗山登山口。\n搭車／高雄客運岡山站往岡山頭線於九鬮站下車，再步行約30分鐘抵西側登山口。","note":"建議開車較方便，走南二高最快。夏日或雨季前往注意防蟲蛇、午後雷雨，記得多補充水分。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/9c064fe6-8f5d-44f7-8093-58820703cb96.jpg","lat":22.84122928,"lng":120.34499419},{"id":"075","name":"觀音山","altitude":177,"location":"高雄市大社區","brief":"觀音山位於高雄市大社區神農里，故稱大社觀音山。在綿延丘陵中，狀如端坐觀音之小峰，因而得名。原有一顆圖根點已遺失，另立內補三等055號基石。為全區最高峰，亦是大社區居民晨昏健身休閒好去處。","feature":"五、六百萬年前的造山運動擠出今日的觀音山系，柔細的「南勢崙砂岩」，經風化後因富含鐵質略呈黃色，又無尖銳之石塊，上山可赤腳行走，高雄市政府遂成立全台第一個赤腳自然公園，讓大伙赤腳登觀音山來健身。山下的大覺寺，建於清康熙28 年，香火鼎盛，登山後可參訪。\n觀音山赤腳自然公園面積廣達42公頃，涵蓋4條主稜，計有觀音山、尖山、駱駝山及猴子山；尖山隔翠屏路與觀音山相望。此處屬大眾化休閒路線，有天洞朝暾岩壁、濟公湖等景點。","season":"大社觀音山，因主峰形似觀音端坐、諸峰拱峙而得名，為高雄十大名山之一，岩層質感柔細，適合赤足登山。登高可遠眺高雄港及安平港；全年均適宜攀登。","schedule":"1.大覺寺登山口→0.4K／5分鐘→翠湖→0.7K／15分鐘→陳家墓園→0.7K／35分鐘→尖山亭→1.2K／40分鐘→觀音山，約1.5小時登頂。\n2.鳳儀宮→天洞→觀音山三角點，約20分鐘登頂。","traffic":"開車／國道1號下楠梓交流道即抵楠梓區興楠路，接市道186甲，看到觀音山指標，右轉高48鄉道的翠屏路至鳳儀宮停車場。\n搭車／楠梓火車站乘高雄客運，抵大社三民路搭計程車至登山口","note":"登觀音山由鳳儀宮上登最便捷，可體驗赤腳登山健身，探訪洞穴記得攜帶手電筒。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/0dae1f0a-e2c4-4d3e-ad5a-19e6e9fc25cc.jpg","lat":25.13602831,"lng":121.42672058},{"id":"076","name":"笠頂山","altitude":659,"location":"屏東縣瑪家鄉","brief":"位於屏東縣瑪家鄉佳義村，又稱笠置山，笠置的日文發音為kasa-gi，推測山名應來自日治時代地圖的笠置山。北大武是排灣族與魯凱族的聖山，而笠頂山源於北大武分支稜脈尾稜，因此也稱為「小聖山」。","feature":"位於屏東平原東緣、大武山西稜支脈的盡頭，因闊葉林、灌木叢、地表植物完整，動植物景觀美麗，是良好的生態保育登山步道，且因為登山客的職業以上班族為主，故有「公教山」之稱。有多條登山步道可抵達笠頂山，大部分會選擇從佳義國小的後門開始登山，是高屏地區最具代表性的郊山。\n雖然是高度不高的郊山，但由於靠近屏東平原邊緣，居高臨下，視野開闊處可俯瞰整個屏東平原，天氣好時可眺望高雄市區，沿途有許多自行搭建的「山友亭」，為此地的一大特色；可與真笠山、白賓山連成一C 形縱走，為高屏山區經典縱走路線。","season":"笠頂山雖非高峻大山，但雲霧繚繞時亦有高山氣勢，置身其間，如入仙境，美景令人沉醉，是屏東地區假日登山人數最多的山岳之一；全年適宜攀登。","schedule":"1.土拉你山之味休閒棧→笠頂山約30分鐘登頂。\n2.第3號步道：佳義國小→ 3號登山口→稜線休息站→笠頂山三角點，約1-1.5小時登頂。\n3.第4號步道：佳義派出所→直線攻頂→笠頂山三角點，約40分鐘-1小時登頂。","traffic":"開車／國道3號下長治交流道，接省道24往三地門，經水門轉縣道187，再接縣道185往涼山至佳義村；或國道88號下潮州，接省道1往內埔，接縣道187，轉接縣道185至33.2km佳義村。","note":"路程不長，但路徑多需小心，林相茂密，須以電台訊號塔為登山指標。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/3e94b0ac-a4b4-4a95-aa97-1f4fa251fb61.jpg","lat":22.65014881,"lng":120.64392075},{"id":"077","name":"壽山","altitude":356,"location":"高雄市鼓山區","brief":"位高雄市西側沿海，南隔高雄港與旗后山相對，有旗鼓相當之謂。壽山又稱柴山，乃早期居民從柴山上撿拾九芎、白榕等薪材，至旗后、哈瑪星一帶販售謀生而稱之；大正12年日皇太子來台巡視，又逢其生日將屆而改名為壽山。","feature":"壽山長久以來在軍區管制及台泥採礦下，既封閉又破壞，直至民國81 年台泥停止採礦，經高雄柴山會等保育團體力爭而規劃為自然公園，且規劃中山大學線、壽山公園線及龍泉寺線，但中山大學線多人為開發及軍事設施，壽山公園線多為採礦區，僅東北側的龍泉寺線為自然公園所在。\n壽山名稱從最早的打狗山經柴山至現今的壽山，分北壽山及南壽山，現僅北壽山可至山頂基石處。壽山自然公園為台灣獼猴棲息地，並保有珊瑚礁與鐘乳石，蘊含豐碩的生態與人文景觀，如榕樹鬚根、石厝、泰國谷。","season":"壽山又稱柴山，地質以珊瑚礁石灰岩地形為主，山頂可遠眺高雄港及欣賞西子灣落日及高雄市的夜景；全年適宜攀登。","schedule":"壽山動物園登山口→觀林亭→思相亭→良友亭→七蔓亭→好漢坡→好漢亭，約1小時登頂。","traffic":"開車／高雄市鼓山區內惟國小，對面的內惟路，叉路取左後的青泉街直行，至142巷口右轉至龍泉寺旁登山口。\n搭車／高雄火車站搭公車或高捷至鹽埕埔後，轉219號公車到龍泉寺站。","note":"壽山步道複雜眾多，稜線上偶有危稜，需多加注意！另外台灣獼猴多，不要餵食，不落單，避免過大動作或聲音，鎮靜經過。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/bc3ad87d-f124-4d7e-956b-ca81bd627a21.jpg","lat":23.86980397,"lng":121.49163456},{"id":"078","name":"棚集山","altitude":899,"location":"屏東縣來義鄉","brief":"棚集山位於屏東縣來義鄉丹林村，棚集山的名字是取它山腳的丹林村，前名為「扎拉秀」，而扎拉秀的日文漢音便為「棚集」，和里龍山、笠頂山並稱為屏東三大熱門路線。順訪來義鄉，一覽排灣族人生活態樣，以及特別的原民人文風情。","feature":"棚集山位於屏東縣來義鄉丹林部落後山，登山步道規劃非常完善，假日前來登山健行的遊客總是絡繹不絕，可由前山或後山攀登，沿途山友休息的布帆帳篷群集，棚集山林相以相思林為首，沿途空曠處，美麗的屏東平原一望無際，更遠可瞭望高雄市最高樓，後山則可見蜿蜒的林邊溪。\n前段緩坡好走，臨近登頂陡坡而上，縱走一圈約4至5小時，可順道造訪久集山約6小時，是一條休閒兼具鍛鍊體力的登山路線。丹林村為排灣族部落，擅長雕刻石塊及木頭，其中最常見的圖像為百步蛇，村內到處可見彩繪著傳統鮮艷美麗的圖案，非常具有特色。","season":"棚集山是林邊溪支流來義溪與尖刀尾溪的分水嶺，最大特色是涼棚特別多，為屏東三大名山之一。山頂腹地廣闊，可從林間眺望久集山北稜，全年適宜攀登。","schedule":"丹林第二登山口→第一座涼亭→高壓電塔→第二座涼亭→四叉路取最左往棚集下山→大家亭(取左)→靜心園→棚集下山→棚集山三角點，約2-2.5小時登頂。","traffic":"開車／國道88號下潮州， 接台1線至415.9K處左轉入縣道110，直行過縣道185經來義國中後，遇丹林大橋右轉續行至丹林村。\n搭車／屏東客運的8208萬丹潮州線、8209屏東來義線或8235屏東西勢佳佐線至丹林村。","note":"夏季悶熱，行動水要攜帶足夠，攻頂路線有拉繩，可攜帶手套保護，午後注意雷雨。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/0133c73f-2343-4718-94b5-23f573117f51.jpg","lat":22.50801653,"lng":120.65756222},{"id":"079","name":"女仍山","altitude":804,"location":"屏東縣獅子鄉","brief":"女仍山位於屏東牡丹鄉與獅子頭鄉交界處，因地處恆春半島迎風面，環境相對潮濕。步道前半段先順著密林下的溪谷溯溪而上，步道間嘩嘩流水聲不絕於耳，伴隨著林間的蟬鳴鳥叫，合奏著大自然交響曲，令人心曠神怡。","feature":"女仍山因山形貌似女人乳房，故當地老一輩的人都叫它女奶山，後來又將奶字的女字旁去掉稱之「女乃山」。只是後人覺得此名聽起來不雅，故又在乃字邊多加個人字，於是就成了現在的「女仍山」。登頂遠眺山海遼闊景致，風光迷人！\n溪谷間，蝴蝶、蜻蜓隨處飛舞，青蛙跳躍。離開溪谷開始上坡，步徑旁皆有繩索攀附，途中一處長有檳榔樹的開闊地可供休息。攻頂之路是一連串急陡坡，部份幾呈70 度。走到反射板鐵架表示三角點已近，此處展望佳，可望見太平洋及台灣海峽。續行約十分鐘可抵三角點。","season":"又名女乃山，位於屏東縣獅子鄉雙流國家森林遊樂區附近，山頂可俯瞰楓港溪出海口，建議春、冬季攀登較適宜，雨季造訪需注意螞蝗、硬蜱及蛇類出沒。","schedule":"伊屯橋登山口→乾溪溝→廢棄反射板→女仍山三角點，約2.5小時登頂。","traffic":"開車／國道3號至南州交流道下，接台1線南下至楓港左轉走台九線往台東，至463.4K經伊屯橋後，右側民宅即登山口。\n搭車／由高雄站搭往台東的國光客運，在南迴公路伊屯站下車。","note":"前段水泥石板及溪谷步徑濕滑，行走須小心。山頂稜線上草木茂密，應留意路跡，攻頂前陡坡留心踏穩。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/8fc93b26-db77-4161-9d1a-696a98e5a5c7.jpg","lat":22.19525408,"lng":120.78479447},{"id":"080","name":"里龍山","altitude":1062,"location":"屏東縣獅子鄉、牡丹鄉","brief":"里龍山位於獅子鄉及牡丹鄉交界的里龍山，山勢雄偉峻拔，為恆春半島最高峰，也是國家森林步道之一。車行枋山、獅子鄉屏鵝公路上，大老遠就可以看到它峻拔插天的山容。","feature":"從竹坑登山口起登，大致沿苦苓溪上登，沿途流水潺潺，彩蝶翩翩飛舞，偶爾還會碰上黃灰澤蟹，運氣好的話，還會與藍腹鷴不期而遇！休息區綠蔭蔽天，清澈甘甜的流水終年不竭，讓里龍山休息區成了南部山友登山踏青首選。\n體力可以的話，一定要去峰頂看看。從休息區開始，一路近45度陡上。登上三角點，立於峰頂巨石睥睨四方。向北遠眺北大武山，往南見到墾丁龍鑾潭一帶及巴士海峽，東看太平洋，西瞰台灣海峽，有時連小琉球也清楚可見。","season":"里龍山為恆春半島唯一海拔超過1000公尺的高山，山頂視野展望佳，遠眺牡丹水庫及恆春半島等，全年適宜攀登，唯竹坑步道有幾處過溪點，雨季較不宜前往，三、四月可賞杜鵑花，五、六月賞相思樹。","schedule":"1.北登山口：龍峰寺停車場→里龍山登山口→第一溪流→第二溪流→第三溪流→休息區→里龍山，約2.5小時登頂。\n2.竹坑登山口：登山口→吊橋→休息區→里龍山三角點，約3-3.5小時登頂。","traffic":"開車／國道3號至南州交流道下，接台1線南下至楓港，接台26線往墾丁方向，登山口位於6.6K處的竹坑。\n搭車／搭往恆春的國光客運，過楓港後，龍峰寺登山口在圓東庵站下車，竹坑登山口在古苓溪站下車。","note":"靠近三角點前的步徑濕滑，行走須小心，避免在雨季或午後前往，陡上路段較辛苦。受尼莎颱風及海棠颱風風災影響，里龍山步道南北路段坍塌嚴重，2017.08.01林務局已全線封閉。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/d566a56e-2456-45ad-8960-f9cfb0758662.jpg","lat":22.164374,"lng":120.732879},{"id":"081","name":"大山母山","altitude":325,"location":"屏東縣恆春鎮","brief":"屬於中央山脈最南稜，恆春半島南端隆起的高大山峰，山型壯闊故稱之為大山母山，基點距離南灣海洋僅約1.7公里，距東南方墾丁地標大尖山(319M)約2.25公里，遠觀一圓一尖，形成強烈對比，煞是有趣！","feature":"大山母山一等三角點兼具一等天文點、衛星點、重力點，是臺灣緯度最南的一等三角點。基點採用大型水泥做護罩，並於下端四個方位各開一個拱門形狀的小孔，供人摸點與拍照，設想非常週到，山頂另有圖根點一顆，是基石迷的聖山。山徑前小段雖無樹蔭遮陽，但展望山海壯麗景觀卻令人震撼。\n進入樹林後路徑清涼，南台灣特有的灌木林中百花齊放，約60分鐘後登頂。山頂可俯瞰台灣尾端鯉魚尾地形，通常我們只能在地圖上瀏覽，實際觀賞令人感動。陣陣涼風吹拂，夾雜著鹹鹹的海洋氣味，充滿豪邁野趣。眺望船帆石彷如進港的船隻，景色迷人。","season":"終年適合造訪，但南台灣夏季酷熱難當，午後易有雷陣雨，以晨昏較適合。","schedule":"停車後先行左側廢產道，進入銀合歡樹林、灌木林，共約60分鐘登頂。","traffic":"開車／國道3號林邊交流道下，轉台17省道南下，經楓港、恆春、南灣到達台26省道29.45K左側水泥路進入約0.8K登山口。\n搭車／高鐵左營站、台鐵高雄站有公車或攬客共乘計程車可達。","note":"伸手進入水泥罩中摸點，需注意內有無危險動物，夏季正中午要注意防曬補充水分。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/d5c3ec1e-2ec5-4e50-9551-5f03909466ed.jpg","lat":21.96835058,"lng":120.77890311},{"id":"082","name":"灣坑頭山","altitude":616,"location":"新北市貢寮區、宜蘭縣頭城鎮","brief":"灣坑頭山位於鷹子嘴嶺東北端，屬於雪山山脈的起點。站在高崗上可飽覽鄰山群峰爭艷，壯闊太平洋海岬，隨緣海風兜來似棉白雲，貼在桃源谷翠綠大草原，美景更勝人間仙境，連海上龜島彷彿都想轉身登臨幻化成仙。","feature":"東北季風強勢的吹拂，使桃源谷的植物硬是小了一號，好似小人國一般，但適合綠草滋生，讓今日的桃源谷成了水牛的天堂。草嶺古道開闢約200 年前，是理番、商務要道，今成登山熱門路線，尤以虎字碑、雄鎮蠻煙摩碣碑最具特色。最後於盧家客棧遺址駐足，同感古人肩卸疲憊的喜悅。\n晨曦時分夜幕未啟，大里火車站如同閃耀的音符，似在邀請流竄漁船燈火共譜；日初、薄霧中雞籠山與鶯子嶺群峰，與逆光中草坡綠毯，沿稜線的灣坑頭山，優雅的伸入反光海平面中。挑一個晴朗的日子，漫步在桃源谷無盡的蜿蜒草原，越過水牛橫臥的涼亭，展望海中龜山島，山、海、藍天如此美好！","season":"灣坑頭山是雪山山脈起點最高的一座山峰，可俯瞰太平洋，眺望龜山島，全程無遮蔭，在秋風涼爽季節來走最適宜，順可賞芒。","schedule":"1.草嶺古道埡口→涼亭→灣坑頭山，約1.5小時登頂。\n2.大里天公廟→土地公廟→埡口→虎字碑→草嶺山→灣坑頭山，約2.5小時登頂。\n3.貢寮車站→德心宮→遠望坑親水公園→跌死馬橋→雄鎮蠻煙→虎字碑→灣頭坑山，約3小時登頂。","traffic":"開車／由國道5號下礁溪交流道，轉台9省道北上接台2庚省道，直行接台2省道，於118.4K處轉入大里天公廟起登。\n搭車／可搭北迴鐵路於大里站下，或搭「台北- 羅東線」國光客運至大里站，再步行至大里天公廟。","note":"登山路線除涼亭外幾乎均無遮陰，桃源谷稜線靠海邊無護欄，須小心斷崖，並請攜帶足量飲水。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/3e08aaea-d071-48cd-8287-986b95cb599e.jpg","lat":24.97456408,"lng":121.91042258},{"id":"083","name":"三角崙山","altitude":1029,"location":"新北市坪林區、宜蘭縣礁溪鄉","brief":"三角崙山位於礁溪鬧區西北方，為屏障蘭陽平原畚箕的北端。由西南往上可達雪山山脈主稜，東北下接鶯子嶺，為蘭陽五大名山之老四，步道始於溪邊攔砂壩形成天然泳池。","feature":"三角崙山有展望，可一覽蘭陽八景之一西峰爽氣。昔日為偷牛行走之山路，早期由北宜路越嶺到礁溪，後來巴瑞士修士築巴唐古道靈修，方有步道的勝景。約30年前自強登山隊迷路，蒙聖母顯靈解救，廣為登山客傳頌，今又有礁溪溫泉名湯加持，更成登遊首選。\n三角崙山稜線遠眺聖母峰，雪山支稜層疊，劍竹林植被的翠綠線條，配以藍天碧海。天主堂悠遊還可欣賞五峰旗第一瀑布；沿途遠眺蘭陽平原海灣奇景最為經典。賀山友登頂數千次的創舉，也歡迎大家來挑戰。","season":"三角崙山是宜蘭與新北界線；三角崙山與鶯子嶺山、烘爐地山、大礁溪山及阿玉山並列為蘭陽五大名山；全年適宜攀登，唯雨天較難走。","schedule":"五峰旗風景區→一水休息站→通天橋→700公尺涼亭→箭竹林→聖母山莊→三角崙山東南峰→三角崙山，約3-3.5小時登頂。","traffic":"開車／由國道5 號下礁溪交流道，轉台9省道往南，於大忠路右轉接宜2縣道，約1.2K處接五峰路，約1.5K處達五峰旗風景區停車場起登。\n搭車／搭首都、葛瑪蘭客運或火車於礁溪站下，轉搭台灣好行公車抵五峰旗風景區起登。","note":"聖母峰至三角崙山箭竹林茂密，陡坡也多，須小心路徑及地基掏空，避免迷路及跌倒，預留返程時間。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/20398231-24ed-4148-a77b-80262d7d2526.jpg","lat":23.97272847,"lng":120.89053592},{"id":"084","name":"鵲子山","altitude":679,"location":"宜蘭縣礁溪鄉","brief":"鵲子山位於宜蘭礁溪，由於山形渾圓獨立，山雖不高卻比北側雪山山脈主脊更引人注目。無論自頭城、礁溪宜蘭方向望去，因兩翼對稱山容，被日人稱為「礁溪富士山」；蘭陽先民則稱之為鵠仔(古代官帽)、帽子山，後來轉為鴻子山、擴子山等等。","feature":"鵲子山位於北宜公路九拐十八彎的西南側，因此公路前身「淡蘭便道」最南段「跑馬古道」，也從最高點金面大觀側繞鵲子山緩下蘭陽平原。跑馬古道最早成形於清光緒年間，在日治時期成為往返台北的交通要道，並利用木馬托運貨物木材。大戰期間日軍常在此騎馬，因而有「跑馬路」、「陸軍路」的稱呼。\n鵲子山又名鴻子山，是宜蘭名山之一，登臨其上展望山海靜景致宜人。除了可以探訪礁溪溫泉風景區、頭城烏石港外，2010年落成的蘭陽博物館，造形特殊屢獲建築大獎，無論館內外環境與規劃皆良好，是來北宜蘭不可錯過的精采新景點。","season":"山頂的展望不錯，可見蘭陽平原及龜山島一帶景觀，全年適宜攀登，但宜避開雨天。","schedule":"1.北登山口：圓通寺→登山口→林地→芒草地→鵲子山三角點，約1小時登頂。\n2.南登山口：清修宮→鵲子山三角點→圓通寺→跑馬古道，約2-2.5小時登頂。","traffic":"開車／台九9線北宜公路58.9K處，有岔路通往上新花園，約500公尺後取左轉圓通寺停車起登。\n搭車／搭客運或火車抵礁溪，循宜二線至跑馬古道起點，步行至上新花園，接圓通寺起登。","note":"春夏之際芒草高密，路徑較複雜，較無經驗者建議不要走從清修宮上登的路線，雨天則建議不要前往。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/a0d8d717-a97d-420b-819d-5340b46589d6.jpg","lat":24.85022594,"lng":121.76749506},{"id":"085","name":"三星山","altitude":2352,"location":"宜蘭縣大同鄉、南澳鄉","brief":"三星山為太平山遊樂區最高峰，位於中央山脈北端尾稜大元山西南方，鄰近東邊的翠峰湖是台灣最大高山湖泊。西南方茂興懷舊步道曾生產過萬石檜木，鐵杉林步道更有人間仙境之美稱。","feature":"看過賽德克巴萊，就知道台灣檜木有多珍貴，而有眠腦之稱的太平山，更因擁有質最好、量最多的檜木，而歷經約70年的砍伐。1906年起日本人經10年理蕃，1915年起歷經舊太平、新太平山時代，三星軌道線也因三星山命名，而成為今日最熱門之翠峰景觀道路。\n三星山擁有雲霧飄渺變幻迷濛的景緻，千年飄香的檜木群，日光暈染的翠峰湖，900公頃的山毛櫸純林步道，更為冰河時期孓遺珍寶，加上百年前覬覦這片山林的開發史蹟，因而人潮不絕。進入三星山，可享受幽靜的杉木林道，尋找一等三角點有如走迷宮般的喜悅。","season":"三星山位於太平山森林遊樂區內，蘭陽溪支流田古爾溪發源於此，登山可順遊翠峰湖及太平山森林遊樂區內步道健行；全年均適宜攀登。","schedule":"三星山登山口(翠峰景觀道路5.9K)→三星山三角點，約1小時登頂。","traffic":"開車／走台7號公路後接台7甲線往西南方至土場，遇叉路走宜專一線抵檢查哨續行，循翠峰景觀道路約5.9K處可達登山口。\n搭車／周末每日一班國光客運，洽詢宜蘭站、羅東站。","note":"步道多芒草箭竹，午後即多霧應儘早起登返程，切勿摸黑。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/95c92d47-8a19-4624-8ed6-5f01c526e002.jpg","lat":24.50922122,"lng":121.56394058},{"id":"086","name":"卡拉寶山","altitude":2397,"location":"花蓮縣秀林鄉","brief":"屬於中央山脈，因山腰處卡拉寶部落而得名，畢祿山南峰東南支稜經黑岩山、加卑里山(2903M)迤邐而來，北隔慈恩溪(魯翁溪)與羊頭山(3035M)相望，南臨塔次基里溪(立霧溪)與磐石山(3106M)對峙。","feature":"卡拉寶山，又稱空巴尾山，二等三角點1448號，基石完整，展望特佳，山型壯麗，滿山翠綠，海拔雖高，但登臨升高僅約200公尺，山徑明顯，走來輕鬆愜意，山徑鋪滿厚實落葉，走來非常舒服，基石旁經常開滿豔麗花朵，讓登山客驚豔莫名。\n南麓約500公尺處台地有昔日卡拉寶(Kalapao) 部落遺址，附近尚有托博闊(Topoqo) 部落遺址，都是合歡越嶺古道旁太魯閣族昔日大部落。登山口為「碧綠神木」，樹種為香杉(巒大杉)，樹齡超過三千年，樹高約50公尺，樹圍超過3.5公尺，是中橫公路沿途最巨大的神木。","season":"終年適合造訪，是夏季避暑聖地，但西部自合歡山下大禹嶺，需注意隆冬積雪管制。","schedule":"登山口(入口有一咖啡小販)→卡拉寶山三角點，約30∼ 40分鐘登頂。","traffic":"開車／西部：國道3號轉國道6號，自埔里終端行台14線，經霧社、合歡山、大禹嶺到登山口。東部：從太魯閣行台8 省道(中橫公路)127.6K處登山口。\n搭車／無公車行駛。","note":"升高雖不多，但森林原始，下山容易誤入森林，宜注意正確路徑小心辨明。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/2e0db1bb-318c-4479-8661-d67bd138a0ca.jpg","lat":24.16167344,"lng":121.41137381},{"id":"087","name":"立霧山","altitude":1274,"location":"花蓮縣秀林鄉","brief":"立霧山北接千里眼山，南迫立霧溪口，遙對新城、丹錐、塔山連稜；東面臨海斷崖如削，蘇花公路穿切其下；往西則隔砂卡礑溪對望白髮、三角錐山，山高水深，景觀天成。","feature":"立霧山區大同(砂卡礑社)、大禮(赫赫斯社) 為太魯閣族部落所在。日據理番政策族人被迫遷居，大禮、大同因係種植區得以倖免。民國68 年政府輔導遷居秀林鄉富世村，近年來族民成立「同禮部落自然生態自治協進會」，積極推展「護溪」及「尋根之旅」，並提供部落體驗活動。\n立霧山地處立霧溪與其支流砂卡噹溪的分水嶺上，周邊名山環伺，巃嵷秀麗，俯瞰立霧溪潺潺流水蜿蜓於青翠山巒，自也薰染了一股悠閒傭懶的飄然，尤於陽光彩照下，大禮、大同部落舖陳其間，悠悠然恍如走入畫境。","season":"攀登立霧山，由於交通及停車非常方便，加之景觀優美自然，濃厚的人文歷史，四時皆宜。大同大禮部落均有族民居住，步道維護良好，惟前段山路較陡，行進中仍應注意安全。","schedule":"太魯閣國家公園遊客中心→得卡倫步道→測雨具→立霧山登山口→立霧山三角點，約3.5-4小時登頂。","traffic":"開車／台9線經蘇花公路過崇德抵太魯閣國家公園管理處。登山口有三處，一由砂卡礑步道進入，一沿立霧電廠水管路上山，目前山友大都皆由停車場旁得卡倫步道循梯而上。\n搭車／新城火車站，轉搭花蓮客運或搭計程車至太管處。","note":"路程較長，後段山徑滿佈枯葉腐植有點溼滑，行前宜先評估體力，木棧階梯陡坡以及錯綜的粗大樹根盤繞路段，需要小心慢行。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/56bcca21-8355-4717-89fc-bcc137e184da.jpg","lat":24.1781205,"lng":121.64189222},{"id":"088","name":"初音山","altitude":906,"location":"花蓮縣吉安鄉","brief":"初音山居中央山脈中段脊嶺之奇萊連峰支脈尾稜，自白葉山、吉安山迄至初音山連稜迤邐而下，垂降縱谷西緣，山勢緩和，行政區隸屬花蓮縣吉安鄉。","feature":"初音山榕樹部落屬太魯族族部落，兩百多年前翻越中央山脈，定居木瓜溪沿岸。今以慕谷慕魚(Mukumugi)深具豐厚自然及人文資源，民國93年成立「慕谷慕魚旅遊諮詢中心」，積極加強保育及觀光發展。初音山面海而立，視野無礙，攀走時無論天候如何變化，雲、雨、陰、晴，尤於海風直撲時的泌涼舒爽，更是本路線才有的特別招待。\n後段山徑穿梭密林，林間蓊鬱，草木葳蕤，樹影婆娑，枝椏間山風悄悄穿透，山路明顯好走。惟每於登頂後俯瞰花蓮港內商輪點點，似仍沉醉於昨夜綺麗幽夢；港外花蓮溪口，夾雜河砂略呈黃濁的海面上，晨起的漁船刻劃道道水痕；海岸山脈翠綠如玉，遠天一線如畫。","season":"初音山視野無礙，是俯瞰花蓮、吉安，遠眺太平洋、海岸山脈、花東縱谷等絕佳觀景地點。山勢緩和，適合親子健行，四時皆宜。","schedule":"榕樹部落4.9K工寮→5.5K登山口→初音山三角點，約30-40分鐘登頂。(新近花蓮山友另循茶子步道上山至柏油路盡頭約4.6K停車，由新登山口至初音山三角點，亦約30-40分鐘登頂。)","traffic":"開車／台9線經花蓮市至台9丙13K，於「慕谷慕魚旅遊諮詢中心」右進榕樹部落，循產道行約5.5K路邊即登山口。南部山友沿台1線轉台9線，經台東續北上，經壽豐鄉轉台9丙13K，餘如上。\n搭車／搭乘火車至花蓮站轉搭計程車至登山口。","note":"榕樹部落至登山口前之山路崎嶇，務必注意行車安全，登頂前主稜上仍為密林，小心蚊蟲，夏日悶熱多補充水分， 注意午後雷雨。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/2dc3d2d5-7aef-4351-a0fa-ba500fa281ab.jpg","lat":23.97075883,"lng":121.53138972},{"id":"089","name":"鯉魚山","altitude":601,"location":"花蓮縣壽豐鄉","brief":"鯉魚山俊秀獨立，山脊自西北折南走，狀似鯉魚蜷臥，故名之。屬中央山脈中段脊嶺向東延伸之一的知亞干山支脈稜端；矗立於縱谷西向。山腳下的鯉魚潭因緊臨本山而得名，潭水終年清澈，為東部最大的內陸湖泊，以「澄潭躍鯉」名列花蓮八景之一。","feature":"鯉魚山與鯉魚潭，「山」「潭」結合，常年以來陪伴著大多數花蓮人一起成長，也牽繫著兒時記憶。每於潭邊閒坐或健行山中，恍遇老友般懷著深濃的鄉情。鯉魚山登山步道規劃完善，結合「澄潭躍鯉」及「池南森林遊樂區」，共構成完整的山水組合，假日遊人如織。\n日近黃昏，俯瞰潭水滉漾，波光粼粼中垂掛著白葉、吉安、初音山迤邐翠綠的山巒倒影，美崙山則悠閒地倘佯在海風下，靜待西方嵐影漸去，俟燈火通明，再次釋放絢麗風情。行走鯉魚山，賞心悅目。伴著一壺好茶，一絲清風⋯醺然間，青山彷彿薰染了層層浪漫與詩意。","season":"鯉魚山步道維護非常良好，森林蒼翠原始，芬多精自然芬芳，隨著季節更迭展現多姿風貌，春櫻、夏螢、秋蟬、冬陽，皆是攀登良辰。","schedule":"鯉魚山登山觀景平台→野餐觀景步道→養心亭→賞鳥步道→鯉魚山，約1.5小時登頂。","traffic":"開車／台9線往南，經花蓮轉台9丙往鯉魚潭方向，經潭南至觀音亭停車，再步行約500公尺即登山口。北上沿台1線轉台9線，過臺東續北上經壽豐轉台9丙往鯉魚潭，餘如上。\n搭車／花蓮客運往壽豐班車，約1~2小時一班，在池南站下車。","note":"後段階梯路稍陡，沿路均置身森林之中，行進時應小心蟲蛇、獼猴、蚊蟲大軍。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/48a063b5-e871-407e-9a8b-acdbca27c458.jpg","lat":22.55375311,"lng":120.45016547},{"id":"090","name":"月眉山","altitude":614,"location":"花蓮縣壽豐鄉","brief":"月眉山又名米棧山，隸屬花蓮縣壽豐鄉，位於月眉部落，西隔花蓮溪與中央山脈相望，東臨太平洋，是海岸山脈最北端的一等三角點，山頂視野良好。","feature":"據說月眉乃漢人蘇阿通於遷居之初，夜來巧見「星月如眉」而名之。本山原攀登者寡，緣於花蓮縣體育會健行委員會帶動山友陸續登臨，及至林務局建置月眉山步道漸成熱門山區。步道後段森林中低海拔多樣性的植被，蓊鬱蘢蔥，綠意盎然，藤蔓交錯，瀰漫著濃郁的寧和與安詳。\n稜上視野奇佳，遠眺中央山脈群山巍峨，南北雄峙，英姿煥發，層層雲靄由山麓繞至山巔，互通著山與山之間的靈氣。縱谷平原茵綠如畫，知亞干溪則像一輪大彎月，細長的水流又像一串銀絲鍊，勾串著中央山脈直臨山腳下的花蓮溪。","season":"月眉山有南北二處登山口，步道總長4.8公里，月眉山約於途中2.4公里處。攀登本山可選擇由北向南，或由南而北，沿海岸山脈稜線臨山海而行，景觀旖旎，目不暇給，全段波緩好走，適合親子健行。","schedule":"北登山口→30分／1.3K休息台→30分／月眉山基點→30分／觀景台→30分／南登山口，約2小時縱走南北登山口。","traffic":"開車／台9線往南，經花蓮轉台11線，過花蓮大橋左彎後約500公尺右上，約13公里抵北登山口；南部山友沿台1線轉台9線北上，至溪口村接台11丙至12K處右彎過米棧大橋，左彎37.4K處，循指標右上產道，5.1公里至南登山口。","note":"登頂前主稜上仍為密林，小心蚊蟲侵擾，夏日雷雨及注意防曬，備妥充足飲水。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/a4f41f23-cb71-458f-b03a-68bac67d6659.jpg","lat":23.8254815,"lng":121.55203906},{"id":"091","name":"八里灣山","altitude":924,"location":"花蓮縣豐濱鄉","brief":"八里灣山是阿美族聖山，原名貓公山，據台日人以其貌似日本富士山，又稱貓公富士山，族人則稱聖山為吉拉雅山，海岸山脈北段最高峰。","feature":"八里灣山尖峭壯麗，獨聳海岸山脈北段，因此視野特佳，東眺太平洋碧波萬頃，南北遠見磯崎、新社、石梯坪、三仙台，往西則可跨越海岸山脈遠及知亞干溪迄至舞鶴、奇美、瑞穗、玉里景觀。居高臨下，觀山、看海、撫雲、攬風無所不能。\n沿線動植物生態豐富，沿途常見山豬、獼猴、山羌、赤尾青竹絲、穿山甲及各種鳥類、昆蟲蹤跡，植物方面尤以老榕及藤蔓著稱，但當適值華八仙、杜鵑花、月桃花盛開時，則更令人目不暇給。慢行其間除可切身感受先民篳路藍縷的懷古幽情，也是一條豐盛的生態饗宴。","season":"林務局新闢八里灣步道後，原登山路徑幾盡荒蕪，但新建步道每於雨後(如春雨、梅雨、颱風等)山徑則陷泥濘不良於行，因此以秋、冬兩季枯水期較宜攀登。","schedule":"八里灣分校(已廢棄)→攔沙壩登山口→水泥柱→解說牌→八里灣山三角點，約4小時登頂。","traffic":"開車／南下走台9線，經花蓮接台11線至豐濱後，循花51縣道往八里灣部落約8公里，車停廢棄國小，越過貓公溪堤防，對岸溪邊小路即為登山口。北上者由南迴公路經台東市接台11線北上，抵豐濱後，餘如上。","note":"雖為小百岳，但是屬中級山陡峭險峻路線，行前宜先評估體力，原始山徑路段雨季泥濘，建議於枯水期前往。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/4263f27c-beee-4fe3-8dfe-3c5374649537.jpg","lat":23.54472411,"lng":121.4889735},{"id":"092","name":"萬人山","altitude":886,"location":"花蓮縣富里鄉","brief":"六十石山位居海岸山脈之成廣澳山脈中段，與阿眉山、萬人山、頭人埔山合成橢圓獨立山塊。萬人山位於六十石山園區北隅，地形突聳於縱谷東緣，地處秀姑巒溪支流馬加祿溪、阿眉溪分水嶺，山頭是一處廢耕金針花的山頭。","feature":"居民多為八七水災西部農民遷徙而來，以山頂平坦，氣候土壤適合金針栽植。金針別名黃花、忘憂、療愁、春萱、宜男、蘆蔥、諼草，原產中國大陸，西元1661年引進栽種。萬人山(六十石山)區，以地形特殊，天象朝夕多變，或雲淡風清，或煙霧朦朧，或滿天星斗銀河高懸。\n賞花時回望海岸山巒雲濤澎湃、俯瞰縱谷旖旎風光、仰瞻中央群山壯麗磅礡。尤以午後山嵐悄然擁抱，瞬間渲染成一幅幅飄逸的山水潑墨，最是令人激賞。三角點置身花叢，金針盛開時，黃花綴地，萬人山獨賞芳華，勘稱全島最幸福的基石。","season":"六十石山以賞金針聞名，每年8、9月花開盛況，大地如彩，賞花人士趨之若鶩，置身花叢，花癡人醉。萬人山位於六十石山園區北隅，地形突聳於縱谷東緣，展望特佳，山區步道完善，適合親子賞花健行。","schedule":"萬人山(車停六十石山20號門牌前院)→登山口→萬人山三角點，約20分鐘登頂。","traffic":"開車／台9線308.5K處，依牌示進入產業道路，約10公里抵六十石山金針園區。過小瑞士景觀臺遇岔路，右上為往忘憂亭，取左下經龍安製茶廠至台電「雲閩高支243E」電桿，路左小路即登山口。","note":"忘憂亭左下至萬人山登山口前產業道路窄小曲折不好會車，宜小心駕駛。萬人山登頂前有一小段芒草區，小心防止割傷。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/7d77c3b6-83ec-4166-b14d-3fdfc2ba00fa.jpg","lat":23.23252322,"lng":121.31671528},{"id":"093","name":"都蘭山","altitude":1190,"location":"臺東縣東河鄉","brief":"都蘭山，海岸山脈南段最高峰，行政區域隸屬台東縣東河鄉。地質上則屬海岸山脈的都巒山層，大部分由火山集塊岩、凝灰岩或凝灰質沉積物組成，在台灣地質上是一個非常特殊的地區。山勢挺拔呈東北西南走向，台東市民又稱美人山。","feature":"傳說中，都蘭山是卑南族南王(puyuma)的聖山，是祖先最早登陸與居住的地方；也是阿美族都蘭部落(Malatan)的聖山，紀念祖先從馬蘭遷移至此開荒拓土的艱辛。都蘭山也是藍寶石的故鄉，民國50、60年代的採礦風雲，曾經帶來無數淘金客與觀光人潮。\n攀登都蘭山最能近身體驗深入森林的樂趣與植物生命的脈動，登頂前大石壁頂上，俯瞰縱谷綠野平疇、阡陌交錯，中央山脈峰巒疊翠，每於午後雲霧飄繞，天幕雲彩的虛幻變化，顯現的又是另一番壯闊的磅礡氣勢。都蘭山的高潮在這裡，都蘭山無法抵擋的魅力也在這裡。","season":"攀登都蘭山四時皆宜，尤以春花爭奇競豔，夏日蟬鳥交鳴，秋山雲飄繾綣之際，更是不錯的攀登季節。","schedule":"都蘭山步道觀景平台停車場→獵寮→上稜→普悠瑪遺址→叉路口→大石壁→都蘭山三角點，約3小時登頂。","traffic":"開車／台9線接台11線南下至151.5K路邊刻著「都蘭山」石塊，即都蘭山入山口。沿山路上約4.5公里至觀景台停車場，即為登山口。\n搭車／火車至台東站，再轉搭計程車前往。","note":"登頂前主稜上山路較顯崎嶇，宜小心行進，且為密林，小心蚊蟲，盡量避開雨季螞蝗。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/6ad6701e-f4a3-4138-b3ac-ad3123a890d2.jpg","lat":22.8950995,"lng":121.18832044},{"id":"094","name":"太麻里山","altitude":1340,"location":"臺東縣金峰鄉","brief":"太麻里山位於台東縣金峰鄉內，太麻里的西北方，擁有360度極佳視野的一等三角點，和赤科山、六十石山並列為台灣三大金針花產地。","feature":"太麻里山是台東地區最具知名度的聖山，當地居民稱為雙乳山，山友習稱金針山。台灣最早種植金針花首推台東金針山，金針山泛指太麻里鄉與金鋒鄉交界一帶海拔700到1100公尺間的山區，是夏末初秋賞金針花海的好去處之一。\n太麻里山每年8 到9月間可賞金針花，冬末賞櫻花及杏花，春賞杜鵑及百合；太麻里山亦是日出之鄉，佇立山頂可迎接太平洋第一道曙光。峰頂建有千禧亭，晴空萬里時可眺望中央山脈的南北大武山、海岸山脈的都蘭山、山下的台東平原，以及外海的蘭嶼、綠島。","season":"金針山擁有360度的視野，全年適宜攀登，8至9月是賞金針花最佳時期，另1-2月可賞櫻、3-4月賞野百合、5-7月賞繡球花，11-12月則可觀賞杏花。","schedule":"1.太麻里山的登山入口處(雙乳峰)→千禧亭→太麻里山三角點，約5分鐘登頂。\n2.秀峰亭→忘憂亭→晨曦亭→曙光亭→雙乳峰→千禧亭→太麻里山，約1.5小時登頂。","traffic":"開車／由台東走台9省道往南，至中油太麻里站右轉西北上佳崙產道，於15K叉路左轉，遇15.6K環形道路再左轉，續行至19K的雙乳峰鞍部登山口。\n搭車／搭乘南迴線火車至太麻里，再包計程車或租機車上山，或洽民宿接送。","note":"小車可直接開到19K雙乳峰鞍部登山口，唯中途叉路多，請多留意指標。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/33045f17-9d47-4493-b815-169f11927a6d.jpg","lat":22.6430935,"lng":120.95248103},{"id":"095","name":"加奈美山","altitude":780,"location":"臺東縣大武鄉","brief":"加奈美山位於台東縣大武鄉大竹村，由西側較高的勝林山主稜延伸而來。山頂有顆視野不佳的一等三角點基石，依山面海，僅能由加奈美山北側溪谷與愛國埔產道交會處仰看山容，峰頂距離太平洋東岸僅約2.5公里。","feature":"加奈美山又稱加拿美山或甘那壁山，早年登此山均由富南林道或富山林道仰攻直上，如今林道崩壞久無人跡；改由加津林林道先登勝林山，再循林道往東至加奈美山，成為迂迴繞後登頂的小百岳。由南迴公路上不易窺其山容，稱其為隱藏山峰不為過。\n加奈美山最大吸引力就是峰頂的一等三角點基石，它與孤懸在太平洋中的綠島火燒山、蘭嶼紅頭山及大森山對測，在岳界知名度頗高。此外，其山稜西側的勝林山，是高底盤車可開上山頂的另一座一等內補056號基石的山峰，獨立明顯，很多人錯將此山當加奈美山。","season":"加奈美山峰頂距離太平洋東岸近，沿途可見壯闊的太平洋；全年適宜攀登，4-6月夏季悶熱有午後雷陣雨，冬季有東北季風。","schedule":"勝林山與加奈美山產道叉路口→鐵皮屋→加奈美山三角點，約50分鐘登頂。","traffic":"開車／台9線428.6K處轉入加津林部落林道，行約8.2K叉路口，先左上勝林山，再取右下坡步行約2公里抵加奈美山鞍部登山口。\n搭車／於台東搭乘南迴線或鼎東客運至大溪站(瀧溪站)或大武站下車，再轉搭計程車。","note":"勝林山基點在山頂角落邊，折回右下林道2公里留意左邊有很多布條，即為加奈美山鞍部登山口。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/6d6ae12c-cb3f-4b51-9f23-8e2ee759506b.jpg","lat":22.43214544,"lng":120.91002981},{"id":"096","name":"巴塱衛山","altitude":325,"location":"臺東縣大武鄉","brief":"巴塱衛山位台東縣大武鄉南興村，因位於台9線海岸旁，距離海岸比加奈美山更近約1.45公里，沿途視野極為開闊，可俯瞰台東大武附近的海岸線，尚有豐富植被生態。","feature":"巴塱衛之名由排灣族語音譯而來，意味要在此沼澤之地生活必須為生活打拼。日據初期設置巴塱衛區役場，1920年更名為大武庄役場。清代及日據時期為巴塱衛社所在地，如今巴塱衛山為觀光旅遊勝地，真可謂天壤之別！\n從台9線北隆宮到巴塱衛山、山豬寮、西勢湖、古庄、金龍湖間有一條環山道路，結合林務局的大武觀海步道及大武神社，成為一條連貫的吸睛路線。巴塱衛山頂寬闊，二等三角點1177號基石旁建有忘憂亭，登臨其上可觀賞太平洋及大武海岸，令人忘卻世俗塵囂。","season":"大武鄉最南端的村落，大武原稱「巴塱衛」，為「拿棒子打」之意，位於台9線海岸旁，距離海岸僅約1.45公里，山頂設有忘憂亭、解愁亭，可眺望大武海岸線、太平洋風光；全年適宜攀登。","schedule":"巴塱衛山停車場→巴塱衛山三角點，可開車直達三角點旁。","traffic":"開車／台9線439.05K處右轉，經路口的北隆宮約2.8K至巴塱衛山的忘憂亭旁基點。\n搭車／搭乘南迴線火車在古莊站下車，或自搭乘鼎東客運大武、安朔線班車，於尚武村下車轉計程車上山。","note":"由台9省道439.05K右側產道上去，留意沿途道路指標指引，便可抵達基點處；環山道路複雜最好預先詳閱路線資訊。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/73027a70-b91a-4a01-bbea-93dc40ae010c.jpg","lat":22.32253783,"lng":120.87887975},{"id":"097","name":"紅頭山","altitude":552,"location":"臺東縣蘭嶼鄉","brief":"紅頭山位蘭嶼北半部中央地帶，計有五條稜脈，如飯山、山田山、尖禿山、殺蛇山及相愛山都在其延伸之稜脈上。山頂有兩顆基石，即一等三角點和三等三角點696號。","feature":"蘭嶼舊稱紅頭嶼，後因盛產蝴蝶蘭，光復後更名為蘭嶼。蘭嶼原住民為雅美族，其祖先大約在500到1000年前由菲律賓巴丹群島的雅美島遷居於此。1998年原住民委員會將雅美族改為達悟族，而雅美族聖山紅頭山依舊是達悟族聖山。\n登臨紅頭山除循稜或縱走外，以前須兼採溯溪方式上山，挑戰力十足，是小百岳中最獨特的。此山擁有台灣少見的近似熱帶雨林生態，動植物繁多。東南山腳下的野銀部落保存了最完整的雅美傳統聚落屋舍，這正是蘭嶼列入世界遺產潛力點的精華所在。","season":"紅頭山是達悟族聖山，也是全台所有離島中海拔最高的山丘，山頂可遠望東南方的大森山與小蘭嶼，全年適宜攀登。大小天池及越嶺古道、蘭嶼角鴞棲息地、蘭嶼燈塔均值得一遊！","schedule":"椰油國小側椰油幹線59號電線桿旁登山口→循山間小徑上登→稜線鞍部→紅頭山三角點，約2小時登頂。","traffic":"騎車／搭船或飛機至蘭嶼，再於紅頭村或椰油村租機車，前往椰油國小登山口。\n搭車／請住宿旅館幫忙載送，或搭乘計程車至椰油國小登山口。","note":"由椰油國小側椰油幹線59號電線桿旁登山口上登，循山間小徑，切上主稜右轉登上峰頂，須有十足定位能力及攀爬能力。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/b74803f4-de1a-47a6-acb1-ddee31e57fb9.jpg","lat":22.05299953,"lng":121.53458169},{"id":"098","name":"雲台山","altitude":248,"location":"連江縣南竿鄉","brief":"雲台山在南竿島，為南竿島最高峰，而馬祖最高峰在北竿的壁山，比雲台山高50公尺。雲台山是全南竿視野最佳的地方，天晴時還可西眺對岸大陸的北茭半島。","feature":"雲台山舊名煙台山，清朝道光年間，由於東南沿海有海盜劫掠，鄉人便在山上興築煙台，以為示警；後來在戰地政務時期才更名。自民國88年馬祖成為第六處國家風景區開放觀光，軍事據點及風景點解禁，雲台山也對外開放。\n南竿除了視野極佳的雲台山外，尚有鐵板聚落官帽山步道可賞日出日落、蛙人部隊重要據點「鐵堡」、北海坑道、大漢據點、最大漁村的津沙聚落、香火最盛的馬港天后宮、馬祖民俗文物館、遠近馳名的馬祖酒廠及八八坑道等景點。近年則以藍眼淚景緻吸引觀光客。","season":"原名煙台山，是南竿島上的最高峰，也是視野最佳之處，可遙望北竿島及大陸北茭半島的景觀，全年適宜攀登，但冬季易起霧，海風強勁溼冷，須注意保暖。每年4~6月是觀賞藍眼淚最佳時機。","schedule":"1.可騎車直達雲台山。\n2.中央、津沙路交叉口→雲台山，約15分鐘登頂。","traffic":"騎車／搭飛機或於基隆搭船前往馬祖南竿，在當地租機車走環島公路山線往仁愛村方向，依雲台山指標可達山頂。\n搭車／公車總站在連江縣政府旁山隴菜市場邊，或搭乘計程車前往。","note":"島上最便捷的交通工具是機車，山路坡度大，騎車上下坡請注意安全。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/838a8d79-de18-41ff-bbce-805372e100d3.jpg","lat":26.15023678,"lng":119.9233282},{"id":"099","name":"太武山","altitude":253,"location":"金門縣金湖鎮","brief":"金門本島的中心在太武山山頂，島嶼以東西兩端較寬約20公里，中段狹窄最窄為3公里，東半島面積較西半島大；島上丘陵起伏，最高為北太武山。","feature":"明延平郡王鄭成功曾在太武山稜觀兵奕棋，民國38年大陸撤退，金門頓成反共前哨站，先後爆發多次戰爭，如古寧頭戰役、八二三砲戰等，以及長達二十餘年的「單打雙停」。民國81 年金門解除戰地政務，84年成立金門國家公園，太武山遂成遊客及山友朝拜聖地。\n「毋忘在莒」勒石在太武山頂西南側250公尺峰下，不能登頂，只能造訪山腰的海印寺。沿稜可見金門的原生植物如潺槁樹、羊角拗、鹽膚木、六月雪、郁李、豆梨等，旅遊重心則以文史取勝，如馬山觀測站、民俗文化村、水頭的黃氏酉堂別業及日月池、金水國小及得月樓。","season":"又稱仙山、大山，是金門第一高峰，可南眺台灣海峽及料羅灣，觀賞日出及日落美景；全年適宜攀登。","schedule":"太武山公墓停車場→玉章路牌坊→思源亭→倒影塔→毋忘在莒石碑，約1小時登頂。","traffic":"開車／由尚義機場往北經環島南路至伯玉路口右轉，經柳營至玉章路的太武山公墓牌樓，步行上玉章路上登。\n搭車／可由尚義機場搭計程車直抵太武山牌樓，或搭乘市區觀光公車至太武公園站下車。","note":"島上最便捷的交通工具是機車，上下坡請注意安全！離島飛機常因霧而無法起飛下降，最好預留等待時間。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/fba0c610-5b26-466d-818b-57440a7ab470.jpg","lat":23.57526274,"lng":119.63999551},{"id":"100","name":"蛇頭山","altitude":20,"location":"澎湖縣馬公市","brief":"蛇頭山位馬公市風櫃里北側，與對岸新復里的金龍頭隔海相望，共同箝制馬公港的咽喉。傳說蛇頭山與金龍頭兩者，為扼守馬公港航道的蛇神與龍神，地理位置突出且極重要。","feature":"蛇頭山一帶昔時是個古戰場，明末荷蘭曾佔領澎湖，在登陸點蛇頭山構築紅毛古城，後被明將俞咨皋打敗退出。日、法亦曾來攻，死傷人眾。因此今日蛇頭山遊憩區可見法軍陣亡將士碑、日本松島軍艦紀念碑、荷蘭軍登陸碑、松島軍艦殉職將兵慰靈塔及風櫃尾荷蘭城堡遺址。\n大自然聲光據場澎湖群島為玄武岩台地狀火山，到處是方形台地。蛇頭山有一日晷儀，此處最高點視野極佳，可遠眺馬公市區，北望澎湖灣及跨海大橋，西賞落日霞光及四角嶼，南觀虎井嶼、桶盤嶼等南海諸島；附近更有一處風櫃洞口可聆聽「風櫃濤聲」！","season":"又名風櫃尾，位於澎湖縣馬公市風櫃里，因山頭酷似蛇頭伸入澎湖內灣海域而得名，視野遼闊，向北可眺望馬公港及測天島，向西則可遠眺四角嶼、西嶼等，昔日為軍事要地，目前為蛇頭山遊憩區；全年適宜攀登。","schedule":"可騎車直達澎湖國家風景區蛇頭山標示點。","traffic":"騎車／搭飛機或搭船前往澎湖馬公，在當地租機車由馬公市區沿 204 縣道，於興仁十字路右轉，進入201 縣道經五德、井垵、蒔裡至風櫃東漁港，港檢所旁左轉抵蛇頭山標示點。搭車／由公車總站搭乘馬公往風櫃公車，於風櫃社區前下車。","note":"澎湖島上最便捷的交通工具是機車，騎車上下坡請注意安全！","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071018/ea1703d3-7368-4484-91d3-82c454297b42.jpg","lat":23.553882,"lng":119.547636},{"id":"038","name":"鐵砧山","altitude":236,"location":"臺中市外埔區","brief":"鐵砧山由河流沖積、造山運動推升隆起，遠望彷如一塊巨大砧板，全山均為紅土壤夾雜礫石層地質，山頂平坦遼闊，面積廣達50甲以上，大安溪悼、懸崖聽水、砧頂嘯月、孔碑夕照、半嶺梅花、延平劍井、農場香圃、木笛樵歌共列為「鐵砧八景」。","feature":"鐵砧山風景優美，曾列台中縣八景之一，大片崩壁紅土壤日照之下閃閃發亮，遠望山容彷如巨大銀錠，故又稱銀錠山、崩山。明永曆16年(西元1662年) 農曆5月4日，鄭成功曾於此遭道卡斯平埔族圍勦，面臨斷炊危機，帶領所有士兵向天祈禱，舉劍往地面刺出一井，後人稱之為「國姓井」，端午節之午時，井水據聞有癒疾療效。\n高美濕地夾峙於大甲溪與大安溪出海口之間，遼闊似無邊際，豐腴膏地蘊育出豐富動植物，許多都是台灣特有種，也是台灣少數幾處雁鴨集體繁殖區之一；是賞鳥、觀察自然生態的好地方，擁有國際級的自然美景。","season":"鐵砧山山頂地勢平坦，遠望形似一座鐵匠打鐵用的鐵砧。鐵砧山與火炎山連成一線，是台灣氣候南北的分界線，亦是候鳥回歸北地重要之轉折處。全年皆適合攀登。","schedule":"日光牧場大門→三角點，約5分鐘登頂。","traffic":"開車／南下自國道3號苑裡交流道下、北上從國道4號西向終端下。均由台中市大甲區中山路一段1410號民宅旁轉入成功路到日光牧場。搭車／台中火車站前搭乘巨業交通公司台中往通霄的班車，於「鐵砧山」站下車。","note":"鐵砧山山徑為牧場草原內小徑；北面為大安溪陡峭山壁，要小心勿靠近。","map":"https://fileshare.sa.gov.tw/TIS/55/50/1071121/6553adb5-91ae-48c1-829b-13cbc8a118cf.jpg","lat":24.35633972,"lng":120.65511664}];
;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fpug\u002Fdata\u002Fkirby.pug";
var me = [
  {id: "026", year: 2008},
  {id: "009", year: 2007},
  {id: "016", year: 2008},
  {id: "019", year: 2008},
  {id: "013", year: 2008},
  {id: "014", year: 2008},
  {id: "015", year: 2008},
  {id: "018", year: 2008},
  {id: "051", year: 2012},
  {id: "048", year: 2008},
  {id: "012", year: 2008},
  {id: "027", year: 2009},
  {id: "008", year: 2009},
  {id: "006", year: 2008},
  {id: "005", year: 2007},
  {id: "017", year: 2008},
  {id: "010", year: 2009},
  {id: "058", year: 2020},
  {id: "030", year: 2014},
  {id: "001", year: 2007},
  {id: "002", year: 2008},
  {id: "047", year: 2017},
  {id: "022", year: 2010},
  {id: "037", year: 2020},
  {id: "028", year: 2009},
  {id: "034", year: 2019},
  {id: "003", year: 2010},
  {id: "039", year: 2008}
]
;pug_debug_line = 48;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-100 h-75 border-bottom border-secondary\" style=\"background:linear-gradient(45deg,#eee,#fdfeff)\"\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"row h-100\"\u003E";
;pug_debug_line = 50;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-5 h-100\"\u003E";
;pug_debug_line = 51;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"vertical-center\"\u003E";
;pug_debug_line = 51;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-100 text-right\"\u003E";
;pug_debug_line = 52;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Ch1\u003E";
;pug_debug_line = 52;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "小百岳履歷\u003C\u002Fh1\u003E";
;pug_debug_line = 53;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cp class=\"text-muted\"\u003E";
;pug_debug_line = 53;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "個人專屬的小百岳完登紀錄表\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 54;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-6\"\u003E";
;pug_debug_line = 54;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"py-4 h-100\"\u003E";
;pug_debug_line = 55;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"map w-100 h-100 mx-auto rwd mb-4\" id=\"map\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 56;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 57;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-block text-center sticky z-fixed\" style=\"margin-top:-1.25em;top:10px\"\u003E";
;pug_debug_line = 58;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn-group bg-white shadow-sm mr-2\"\u003E";
;pug_debug_line = 59;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-secondary\" onclick=\"reorder('id')\"\u003E";
;pug_debug_line = 59;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "依編號\u003C\u002Fdiv\u003E";
;pug_debug_line = 60;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-secondary\" onclick=\"reorder('location')\"\u003E";
;pug_debug_line = 60;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "依區域\u003C\u002Fdiv\u003E";
;pug_debug_line = 61;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-secondary\" onclick=\"reorder('altitude')\"\u003E";
;pug_debug_line = 61;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "依海拔\u003C\u002Fdiv\u003E";
;pug_debug_line = 62;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-secondary\" onclick=\"reorder('name')\"\u003E";
;pug_debug_line = 62;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "依名稱\u003C\u002Fdiv\u003E";
;pug_debug_line = 63;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-secondary\" onclick=\"reorder('schedule')\"\u003E";
;pug_debug_line = 63;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "依費時\u003C\u002Fdiv\u003E";
;pug_debug_line = 64;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-secondary\" onclick=\"reorder('date')\"\u003E";
;pug_debug_line = 64;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "依完登日\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 65;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-secondary bg-white shadow-sm text-secondary\"\u003E";
;pug_debug_line = 65;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "關於\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 66;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex flex-wrap w-1024 mx-auto rwd my-4 justify-content-center\"\u003E";
;pug_debug_line = 67;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
// iterate hills
;(function(){
  var $$obj = hills;
  if ('number' == typeof $$obj.length) {
      for (var pug_index9 = 0, $$l = $$obj.length; pug_index9 < $$l; pug_index9++) {
        var hill = $$obj[pug_index9];
;pug_debug_line = 68;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"hill m-1\""+pug_attr("data-id", `${hill.id}`, true, true)+pug_attr("style", pug_style(`order:${3000 - hill.altitude}`), true, true)+pug_attr("onclick", `toggle('${hill.id}')`, true, true)) + "\u003E";
;pug_debug_line = 69;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"aspect-ratio ratio-1by1 position-relative\"\u003E";
;pug_debug_line = 69;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"vertical-center\"\u003E";
;pug_debug_line = 69;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-100 text-center\"\u003E";
;pug_debug_line = 71;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-sm id\" ld=\"id\"\u003E";
;pug_debug_line = 71;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = hill.id) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 72;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 72;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = hill.name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 73;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-sm\"\u003E";
;pug_debug_line = 73;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = hill.altitude) ? "" : pug_interp));
;pug_debug_line = 73;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "m\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index9 in $$obj) {
      $$l++;
      var hill = $$obj[pug_index9];
;pug_debug_line = 68;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"hill m-1\""+pug_attr("data-id", `${hill.id}`, true, true)+pug_attr("style", pug_style(`order:${3000 - hill.altitude}`), true, true)+pug_attr("onclick", `toggle('${hill.id}')`, true, true)) + "\u003E";
;pug_debug_line = 69;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"aspect-ratio ratio-1by1 position-relative\"\u003E";
;pug_debug_line = 69;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"vertical-center\"\u003E";
;pug_debug_line = 69;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-100 text-center\"\u003E";
;pug_debug_line = 71;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-sm id\" ld=\"id\"\u003E";
;pug_debug_line = 71;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = hill.id) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 72;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 72;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = hill.name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 73;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-sm\"\u003E";
;pug_debug_line = 73;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = hill.altitude) ? "" : pug_interp));
;pug_debug_line = 73;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "m\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 75;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"ldcv scroll\"\u003E";
;pug_debug_line = 75;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"base w-480\"\u003E";
;pug_debug_line = 75;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"inner card\"\u003E";
;pug_debug_line = 75;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["scope"].call({
block: function(){
;pug_debug_line = 76;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex align-items-end mb-3\"\u003E";
;pug_debug_line = 77;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Ch3 class=\"mb-0\" ld=\"name\"\u003E\u003C\u002Fh3\u003E";
;pug_debug_line = 78;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 79;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cspan class=\"text-muted mx-2\"\u003E";
;pug_debug_line = 79;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u002F\u003C\u002Fspan\u003E";
;pug_debug_line = 80;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cspan class=\"text-muted\" ld=\"location\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 81;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cp ld=\"desc\"\u003E\u003C\u002Fp\u003E";
;pug_debug_line = 82;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-100 px-4\"\u003E";
;pug_debug_line = 82;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cimg class=\"w-100\" ld=\"map\"\u003E\u003C\u002Fdiv\u003E";
},
attributes: {"class": "card-body"}
}, "detail");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 84;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("https://d3js.org/d3.v4.js");
;pug_debug_line = 85;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("https://d3js.org/topojson.v2.min.js");
;pug_debug_line = 86;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("https://d3js.org/d3-color.v1.min.js");
;pug_debug_line = 87;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("https://d3js.org/d3-interpolate.v1.min.js");
;pug_debug_line = 88;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("https://d3js.org/d3-scale-chromatic.v1.min.js");
;pug_debug_line = 89;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/pdmap.tw/pdmaptw.min.js");
;pug_debug_line = 90;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/ldui/ldui.min.js");
;pug_debug_line = 91;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cscript\u003E";
;pug_debug_line = 92;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "var hills = ";
;pug_debug_line = 92;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + (null == (pug_interp = JSON.stringify(hills)) ? "" : pug_interp);
;pug_debug_line = 92;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + ";";
;pug_debug_line = 93;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 93;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "var me = ";
;pug_debug_line = 93;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + (null == (pug_interp = JSON.stringify(me)) ? "" : pug_interp);
;pug_debug_line = 93;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + ";\u003C\u002Fscript\u003E";
;pug_debug_line = 94;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cscript\u003E";
;pug_debug_line = 94;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fhiking\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u002F\u002F Generated by LiveScript 1.3.1\nvar hnodes, order, reorder, ldcv, lc, view, toggle, obj;\nsmoothScroll();\nhnodes = ld$.find('.hill');\nhnodes.map(function(n){\n  var id;\n  id = n.getAttribute('data-id');\n  if (me.filter(function(it){\n    return it.id === id;\n  }).length) {\n    return n.classList.add('active');\n  }\n});\norder = {};\norder.name = hills.map(function(it){\n  return it.name;\n}).sort();\norder.location = hills.map(function(it){\n  return it.location;\n}).sort();\nreorder = function(k){\n  return hnodes.map(function(n){\n    var id, m, ret, mret, r, v;\n    id = n.getAttribute('data-id');\n    m = ld$.find(n, '[ld=id]', 0);\n    if (!(ret = hills.filter(function(it){\n      return it.id === id;\n    })[0])) {\n      return;\n    }\n    if (k === 'id') {\n      n.style.order = Math.round(ret.id);\n      return m.innerText = ret.id;\n    } else if (k === 'name') {\n      n.style.order = order.name.indexOf(ret.name);\n      return m.innerText = ret.id;\n    } else if (k === 'location') {\n      n.style.order = order.location.indexOf(ret.location);\n      return m.innerText = ret.location.substring(0, 2);\n    } else if (k === 'altitude') {\n      n.style.order = 3000 - ret.altitude;\n      return m.innerText = ret.id;\n    } else if (k === 'date') {\n      mret = me.filter(function(it){\n        return it.id === id;\n      })[0];\n      n.style.order = !mret\n        ? 3000\n        : 3000 - mret.year;\n      return m.innerText = mret ? mret.year : '-';\n    } else if (k === 'schedule') {\n      r = \u002F([0-9.]+)小時\u002F.exec(ret.schedule);\n      if (r) {\n        v = +r[1] * 60;\n      } else {\n        r = \u002F([0-9.]+)分鐘\u002F.exec(ret.schedule);\n        if (r) {\n          v = +r[1];\n        } else {\n          v = 0;\n        }\n      }\n      m.innerText = (v ? v : '') + \"\" + (r ? '分鐘' : '-');\n      return n.style.order = r ? 600 - Math.round(+v) : 600;\n    }\n  });\n};\nldcv = new ldCover({\n  root: '.ldcv'\n});\nlc = {\n  item: {}\n};\nview = new ldView({\n  root: \"[ld-scope=detail]\",\n  handler: {\n    name: function(arg$){\n      var node;\n      node = arg$.node;\n      return node.innerText = lc.item.name;\n    },\n    desc: function(arg$){\n      var node;\n      node = arg$.node;\n      return node.innerText = lc.item.brief;\n    },\n    location: function(arg$){\n      var node;\n      node = arg$.node;\n      return node.innerText = lc.item.location;\n    },\n    map: function(arg$){\n      var node;\n      node = arg$.node;\n      if (lc.item.map) {\n        return node.setAttribute('src', lc.item.map);\n      }\n    }\n  }\n});\ntoggle = function(id){\n  lc.item = (hills.filter(function(it){\n    return it.id === id;\n  })[0] || {}) || {};\n  view.render();\n  return ldcv.toggle();\n};\nobj = pdmaptw.create({\n  type: 'county',\n  root: '.map'\n});\nobj.init().then(function(){\n  d3.select('svg g').selectAll('circle').data(hills).enter().append('circle').attr('r', 0.08).attr('cx', function(it){\n    return pdmaptw.projection([it.lng, it.lat])[0];\n  }).attr('cy', function(it){\n    return pdmaptw.projection([it.lng, it.lat])[1];\n  }).attr('class', function(d){\n    if (me.filter(function(it){\n      return it.id === d.id;\n    }).length) {\n      return 'active';\n    } else {\n      return '';\n    }\n  });\n  return obj.fit();\n});\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";}.call(this,"Array" in locals_for_with?locals_for_with.Array:typeof Array!=="undefined"?Array:undefined,"JSON" in locals_for_with?locals_for_with.JSON:typeof JSON!=="undefined"?JSON:undefined,"blockLoader" in locals_for_with?locals_for_with.blockLoader:typeof blockLoader!=="undefined"?blockLoader:undefined,"cssLoader" in locals_for_with?locals_for_with.cssLoader:typeof cssLoader!=="undefined"?cssLoader:undefined,"decache" in locals_for_with?locals_for_with.decache:typeof decache!=="undefined"?decache:undefined,"escape" in locals_for_with?locals_for_with.escape:typeof escape!=="undefined"?escape:undefined,"parentName" in locals_for_with?locals_for_with.parentName:typeof parentName!=="undefined"?parentName:undefined,"prefix" in locals_for_with?locals_for_with.prefix:typeof prefix!=="undefined"?prefix:undefined,"scriptLoader" in locals_for_with?locals_for_with.scriptLoader:typeof scriptLoader!=="undefined"?scriptLoader:undefined,"version" in locals_for_with?locals_for_with.version:typeof version!=="undefined"?version:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}; module.exports = template; })() 