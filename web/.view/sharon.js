 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_attrs(t,r){var a="";for(var s in t)if(pug_has_own_property.call(t,s)){var u=t[s];if("class"===s){u=pug_classes(u),a=pug_attr(s,u,!1,r)+a;continue}"style"===s&&(u=pug_style(u)),a+=pug_attr(s,u,!1,r)}return a}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_merge(e,r){if(1===arguments.length){for(var t=e[0],g=1;g<e.length;g++)t=pug_merge(t,e[g]);return t}for(var l in r)if("class"===l){var n=e[l]||[];e[l]=(Array.isArray(n)?n:[n]).concat(r[l]||[])}else if("style"===l){var n=pug_style(e[l]);n=n&&";"!==n[n.length-1]?n+";":n;var a=pug_style(r[l]);a=a&&";"!==a[a.length-1]?a+";":a,e[l]=n+a}else e[l]=r[l];return e}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (Array, JSON, b64img, blockLoader, c, cssLoader, decache, defer, escape, hills, libLoader, me, name, parentName, prefix, scriptLoader, type, url, version) {
      pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
if(!libLoader) {
  libLoader = {
    js: {url: {}},
    css: {url: {}},
    root: function(r) { libLoader._r = r; },
    _r: "/assets/lib",
    _v: "",
    version: function(v) { libLoader._v = (v ? "?v=" + v : ""); }
  }
  if(version) { libLoader.version(version); }
}

pug_mixins["script"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if(!Array.isArray(os)) { os = [os]; }
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var o = $$obj[pug_index0];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
if (!libLoader.js.url[url]) {
libLoader.js.url[url] = true;
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + libLoader._v, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var o = $$obj[pug_index0];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
if (!libLoader.js.url[url]) {
libLoader.js.url[url] = true;
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + libLoader._v, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
    }
  }
}).call(this);

};
pug_mixins["css"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if(!Array.isArray(os)) { os = [os]; }
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var o = $$obj[pug_index1];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.css"); }
if (!libLoader.css.url[url]) {
libLoader.css.url[url] = true;
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + libLoader._v, true, true)) + "\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var o = $$obj[pug_index1];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.css"); }
if (!libLoader.css.url[url]) {
libLoader.css.url[url] = true;
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + libLoader._v, true, true)) + "\u003E";
}
    }
  }
}).call(this);

};
pug_html = pug_html + "\u003Chtml\u003E";
if (!(libLoader || scriptLoader)) {
if(!scriptLoader) { scriptLoader = {url: {}, config: {}}; }
if(!decache) { decache = (version? "?v=" + version : ""); }
pug_mixins["script"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
scriptLoader.config = (config ? config : {});
if (!scriptLoader.url[url]) {
scriptLoader.url[url] = true;
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + decache, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
};
if(!cssLoader) { cssLoader = {url: {}}; }
pug_mixins["css"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
cssLoader.config = (config ? config : {});
if (!cssLoader.url[url]) {
cssLoader.url[url] = true;
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + decache, true, true)) + "\u003E";
}
};
if(!blockLoader) { blockLoader = {name: {}, config: {}}; }







}
var escjson = function(obj) { return 'JSON.parse(unescape("' + escape(JSON.stringify(obj)) + '"))'; };
var eschtml = (function() { var MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&#34;', "'": '&#39;' }; var repl = function(c) { return MAP[c]; }; return function(s) { return s.replace(/[&<>'"]/g, repl); }; })();
function ellipsis(str, len) {
  return ((str || '').substring(0, len || 200) + (((str || '').length > (len || 200)) ? '...' : ''));
}














var b64img = {};
b64img.px1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEAAAAALAAAAAABAAEAAAIA"
var loremtext = {
  zh: "料何緊許團人受間口語日是藝一選去，得系目、再驗現表爸示片球法中轉國想我樹我，色生早都沒方上情精一廣發！能生運想毒一生人一身德接地，說張在未安人、否臺重壓車亞是我！終力邊技的大因全見起？切問去火極性現中府會行多他千時，來管表前理不開走於展長因，現多上我，工行他眼。總務離子方區面人話同下，這國當非視後得父能民觀基作影輕印度民雖主他是一，星月死較以太就而開後現：國這作有，他你地象的則，引管戰照十都是與行求證來亞電上地言裡先保。大去形上樹。計太風何不先歡的送但假河線己綠？計像因在……初人快政爭連合多考超的得麼此是間不跟代光離制不主政重造的想高據的意臺月飛可成可有時情乎為灣臺我養家小，叫轉於可！錢因其他節，物如盡男府我西上事是似個過孩而過要海？更神施一關王野久沒玩動一趣庭顧倒足要集我民雲能信爸合以物頭容戰度系士我多學一、區作一，過業手：大不結獨星科表小黨上千法值之兒聲價女去大著把己。",
  en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};













prefix = function(n) { return (!n?[]:(Array.isArray(n)?n:[n])).map(function(it){ return `${prefix.currentName}$${it}`; }).join(' ');}
pug_mixins["scope"] = pug_interp = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var prentName = prefix.currentName;
prefix.currentName = name;
if (attributes.class && /naked-scope/.exec(attributes.class)) {
block && block();
}
else {
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"ld-scope": pug_escape(name || '')},attributes]), true)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
prefix.currentName = parentName;
};
libLoader.root('../assets/lib')
pug_html = pug_html + "\u003Chead\u003E";
pug_mixins["css"]([
      {name: "bootstrap", path: "dist/css/bootstrap.min.css"},
      {name: "@loadingio/bootstrap.ext"}
    ]);
pug_html = pug_html + "\u003Cstyle type=\"text\u002Fcss\"\u003Ehtml,body{width:100%;height:100%;margin:0;padding:0}.hill{background:#eee;cursor:pointer;transition:order .35s ease-in-out;width:90px}.hill .id{color:red}.hill.active{background:#1b5;color:#fff;box-shadow:0 2px 4px rgba(0,0,0,0.3)}.hill.active .id{color:#fff}svg{width:100%;height:100%}path{fill:#eee;stroke:#ccc;stroke-width:.02}circle{fill:#999;fill-opacity:.3;stroke:#777;stroke-width:.02;stroke-opacity:.5}circle.active{fill:red;fill-opacity:.5;stroke:#d00;stroke-width:.02}\u003C\u002Fstyle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E";
var name = "雪倫";
var me = [
  {id: "001", year: 2008},
  {id: "002", year: 2009},
  {id: "003", year: 2010},
  {id: "005", year: 2009},
  {id: "006", year: 1996},
  {id: "008", year: 2009},
  {id: "009", year: 2012},
  {id: "010", year: 2009},
  {id: "012", year: 2008},
  {id: "013", year: 2008},
  {id: "016", year: 2008},
  {id: "017", year: 2009},
  {id: "018", year: 2008},
  {id: "022", year: 2010},
  {id: "027", year: 2009},
  {id: "028", year: 2009},
  {id: "034", year: 2019},
  {id: "037", year: 2020},
  {id: "039", year: 2009},
  {id: "047", year: 2017},
  {id: "051", year: 2012},
  {id: "058", year: 2020}
]
pug_html = pug_html + "\u003Cdiv class=\"w-100 h-75 border-bottom border-secondary\" style=\"background:linear-gradient(45deg,#eee,#fdfeff)\"\u003E\u003Cdiv class=\"row h-100\"\u003E\u003Cdiv class=\"col-md-5 h-100\"\u003E\u003Cdiv class=\"vertical-center\"\u003E\u003Cdiv class=\"w-100 text-right\"\u003E\u003Ch1\u003E" + (pug_escape(null == (pug_interp = type) ? "" : pug_interp)) + "履歷\u003C\u002Fh1\u003E\u003Cp class=\"text-muted\"\u003E" + (pug_escape(null == (pug_interp = name) ? "" : pug_interp)) + "專屬的" + (pug_escape(null == (pug_interp = type) ? "" : pug_interp)) + "完登紀錄表\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-md-6\"\u003E\u003Cdiv class=\"py-4 h-100\"\u003E\u003Cdiv class=\"map w-100 h-100 mx-auto rwd mb-4\" id=\"map\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Cdiv class=\"d-block text-center sticky z-fixed\" style=\"margin-top:-1.25em;top:10px\"\u003E\u003Cdiv class=\"btn-group bg-white shadow-sm mr-2\"\u003E\u003Cdiv class=\"btn btn-outline-secondary\" onclick=\"reorder('id')\"\u003E依編號\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn btn-outline-secondary\" onclick=\"reorder('location')\"\u003E依區域\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn btn-outline-secondary\" onclick=\"reorder('altitude')\"\u003E依海拔\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn btn-outline-secondary\" onclick=\"reorder('name')\"\u003E依名稱\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn btn-outline-secondary\" onclick=\"reorder('schedule')\"\u003E依費時\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn btn-outline-secondary\" onclick=\"reorder('date')\"\u003E依完登日\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn btn-outline-secondary bg-white shadow-sm text-secondary\"\u003E關於\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-flex flex-wrap w-1024 mx-auto rwd my-4 justify-content-center\"\u003E";
// iterate hills
;(function(){
  var $$obj = hills;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var hill = $$obj[pug_index2];
pug_html = pug_html + "\u003Cdiv" + (" class=\"hill m-1\""+pug_attr("data-id", `${hill.id}`, true, true)+pug_attr("style", pug_style(`order:${3000 - hill.altitude}`), true, true)+pug_attr("onclick", `toggle('${hill.id}')`, true, true)) + "\u003E\u003Cdiv class=\"aspect-ratio ratio-1by1 position-relative\"\u003E\u003Cdiv class=\"vertical-center\"\u003E\u003Cdiv class=\"w-100 text-center\"\u003E\u003Cdiv class=\"text-sm id\" ld=\"id\"\u003E" + (pug_escape(null == (pug_interp = hill.id) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv\u003E" + (pug_escape(null == (pug_interp = hill.name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"text-sm\"\u003E" + (pug_escape(null == (pug_interp = hill.altitude) ? "" : pug_interp)) + "m\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var hill = $$obj[pug_index2];
pug_html = pug_html + "\u003Cdiv" + (" class=\"hill m-1\""+pug_attr("data-id", `${hill.id}`, true, true)+pug_attr("style", pug_style(`order:${3000 - hill.altitude}`), true, true)+pug_attr("onclick", `toggle('${hill.id}')`, true, true)) + "\u003E\u003Cdiv class=\"aspect-ratio ratio-1by1 position-relative\"\u003E\u003Cdiv class=\"vertical-center\"\u003E\u003Cdiv class=\"w-100 text-center\"\u003E\u003Cdiv class=\"text-sm id\" ld=\"id\"\u003E" + (pug_escape(null == (pug_interp = hill.id) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv\u003E" + (pug_escape(null == (pug_interp = hill.name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"text-sm\"\u003E" + (pug_escape(null == (pug_interp = hill.altitude) ? "" : pug_interp)) + "m\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"ldcv scroll\"\u003E\u003Cdiv class=\"base w-480\"\u003E\u003Cdiv class=\"inner card\"\u003E";
pug_mixins["scope"].call({
block: function(){
pug_html = pug_html + "\u003Cdiv class=\"d-flex align-items-end mb-3\"\u003E\u003Ch3 class=\"mb-0\" ld=\"name\"\u003E\u003C\u002Fh3\u003E\u003Cdiv\u003E\u003Cspan class=\"text-muted mx-2\"\u003E\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"text-muted\" ld=\"location\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cp ld=\"desc\"\u003E\u003C\u002Fp\u003E\u003Cdiv class=\"w-100 px-4\"\u003E\u003Cimg class=\"w-100\" ld=\"map\"\u003E\u003C\u002Fdiv\u003E";
},
attributes: {"class": "card-body"}
}, "detail");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
pug_mixins["script"]([
      {name: "d3", version: "main", path: "build/d3.min.js"},
      {name: "d3-color", version: "main", path: "build/d3-color.min.js"},
      {name: "d3-interpolate", version: "main", path: "build/d3-interpolate.min.js"},
      {name: "d3-scale-chromatic", version: "main", path: "build/d3-scale-chromatic.min.js"},
      {name: "d3-geo", version: "main", path: "dist/d3-geo.min.js"},
      {name: "d3-geo-projection", version: "main", path: "dist/d3-geo-projection.min.js"},
      {name: "topojson", version: "main", path: "dist/topojson.min.js"},
      {name: "@loadingio/ldquery"},
      {name: "ldview"},
      {name: "ldcover"},
      {name: "pdmaptw"},
      {name: "pdmaptw", path: "county.map.js"}
    ]);
pug_html = pug_html + "\u003Cscript type=\"module\"\u003Ewindow.data = {\n  hills: " + (null == (pug_interp = JSON.stringify(hills)) ? "" : pug_interp) + ",\n  me: " + (null == (pug_interp = JSON.stringify(me)) ? "" : pug_interp) + "\n};\u003C\u002Fscript\u003E\u003Cscript type=\"module\"\u003Evar hills,me,hnodes,order,reorder,ldcv,lc,view,toggle,obj;hills=window.data.hills;me=window.data.me;hnodes=ld$.find(\".hill\");hnodes.map(function(e){var t;t=e.getAttribute(\"data-id\");if(me.filter(function(e){return e.id===t}).length){return e.classList.add(\"active\")}});order={};order.name=hills.map(function(e){return e.name}).sort();order.location=hills.map(function(e){return e.location}).sort();window.reorder=reorder=function(d){return hnodes.map(function(e){var t,r,n,i,l,o;t=e.getAttribute(\"data-id\");r=ld$.find(e,\"[ld=id]\",0);if(!(n=hills.filter(function(e){return e.id===t})[0])){return}if(d===\"id\"){e.style.order=Math.round(n.id);return r.innerText=n.id}else if(d===\"name\"){e.style.order=order.name.indexOf(n.name);return r.innerText=n.id}else if(d===\"location\"){e.style.order=order.location.indexOf(n.location);return r.innerText=n.location.substring(0,2)}else if(d===\"altitude\"){e.style.order=3e3-n.altitude;return r.innerText=n.id}else if(d===\"date\"){i=me.filter(function(e){return e.id===t})[0];e.style.order=!i?3e3:3e3-i.year;return r.innerText=i?i.year:\"-\"}else if(d===\"schedule\"){l=\u002F([0-9.]+)小時\u002F.exec(n.schedule);if(l){o=+l[1]*60}else{l=\u002F([0-9.]+)分鐘\u002F.exec(n.schedule);if(l){o=+l[1]}else{o=0}}r.innerText=(o?o:\"\")+\"\"+(l?\"分鐘\":\"-\");return e.style.order=l?600-Math.round(+o):600}})};ldcv=new ldcover({root:\".ldcv\",resident:true});lc={item:{}};console.log(ld$.find(\"[ld-scope='detail']\"));view=new ldview({root:\"[ld-scope=detail]\",handler:{name:function(e){var t;t=e.node;return t.innerText=lc.item.name},desc:function(e){var t;t=e.node;return t.innerText=lc.item.brief},location:function(e){var t;t=e.node;return t.innerText=lc.item.location},map:function(e){var t;t=e.node;if(lc.item.map){return t.setAttribute(\"src\",lc.item.map)}}}});toggle=function(t){lc.item=hills.filter(function(e){return e.id===t})[0]||{}||{};view.render();return ldcv.toggle()};obj=new pdmaptw({type:\"county\",root:\".map\"});obj.init().then(function(){obj.fit();console.log(pdmaptw.projection()([122,23]));return d3.select(\"svg g\").selectAll(\"circle\").data(hills).enter().append(\"circle\").attr(\"r\",.08).attr(\"cx\",function(e){return pdmaptw.projection()([e.lng,e.lat])[0]}).attr(\"cy\",function(e){return pdmaptw.projection()([e.lng,e.lat])[1]}).attr(\"class\",function(t){if(me.filter(function(e){return e.id===t.id}).length){return\"active\"}else{return\"\"}})});\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
    }.call(this, "Array" in locals_for_with ?
        locals_for_with.Array :
        typeof Array !== 'undefined' ? Array : undefined, "JSON" in locals_for_with ?
        locals_for_with.JSON :
        typeof JSON !== 'undefined' ? JSON : undefined, "b64img" in locals_for_with ?
        locals_for_with.b64img :
        typeof b64img !== 'undefined' ? b64img : undefined, "blockLoader" in locals_for_with ?
        locals_for_with.blockLoader :
        typeof blockLoader !== 'undefined' ? blockLoader : undefined, "c" in locals_for_with ?
        locals_for_with.c :
        typeof c !== 'undefined' ? c : undefined, "cssLoader" in locals_for_with ?
        locals_for_with.cssLoader :
        typeof cssLoader !== 'undefined' ? cssLoader : undefined, "decache" in locals_for_with ?
        locals_for_with.decache :
        typeof decache !== 'undefined' ? decache : undefined, "defer" in locals_for_with ?
        locals_for_with.defer :
        typeof defer !== 'undefined' ? defer : undefined, "escape" in locals_for_with ?
        locals_for_with.escape :
        typeof escape !== 'undefined' ? escape : undefined, "hills" in locals_for_with ?
        locals_for_with.hills :
        typeof hills !== 'undefined' ? hills : undefined, "libLoader" in locals_for_with ?
        locals_for_with.libLoader :
        typeof libLoader !== 'undefined' ? libLoader : undefined, "me" in locals_for_with ?
        locals_for_with.me :
        typeof me !== 'undefined' ? me : undefined, "name" in locals_for_with ?
        locals_for_with.name :
        typeof name !== 'undefined' ? name : undefined, "parentName" in locals_for_with ?
        locals_for_with.parentName :
        typeof parentName !== 'undefined' ? parentName : undefined, "prefix" in locals_for_with ?
        locals_for_with.prefix :
        typeof prefix !== 'undefined' ? prefix : undefined, "scriptLoader" in locals_for_with ?
        locals_for_with.scriptLoader :
        typeof scriptLoader !== 'undefined' ? scriptLoader : undefined, "type" in locals_for_with ?
        locals_for_with.type :
        typeof type !== 'undefined' ? type : undefined, "url" in locals_for_with ?
        locals_for_with.url :
        typeof url !== 'undefined' ? url : undefined, "version" in locals_for_with ?
        locals_for_with.version :
        typeof version !== 'undefined' ? version : undefined));
    ;;return pug_html;}; module.exports = template; })() 