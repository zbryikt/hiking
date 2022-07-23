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
var type = "百岳";
var hills = [{"id":"001","name":"玉山","altitude":"3952","loation":"南投縣信義鄉.嘉義縣阿里山鄉.高雄縣桃源鄉","brief":"全峰為碎裂崩解的赤褐色頁岩構成。下堆流礫，上疊裸岩，半峰之上，草木皆無。南峙峭壁，北聳懸崖。東下陡坡，西闢曲徑。無風雪時，登頂匪艱。","feature":"五岳-1","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.470555555555553,"lng":120.94888888888889},{"id":"002","name":"雪山","altitude":"3886","loation":"台中縣和平鄉.苗栗縣泰安鄉","brief":"","feature":"五岳-2","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.385555555555555,"lng":121.22305555555556},{"id":"003","name":"玉山東峰","altitude":"3869","loation":"南投縣信義鄉.高雄縣桃源鄉","brief":"","feature":"十峻-1","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.472499999999997,"lng":120.9575},{"id":"004","name":"玉山北峰","altitude":"3858","loation":"南投縣信義鄉","brief":"","feature":"八秀-1","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.491666666666667,"lng":120.95138888888889},{"id":"005","name":"玉山南峰","altitude":"3844","loation":"高雄縣桃源鄉","brief":"","feature":"十峻-2","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.448055555555555,"lng":120.95055555555555},{"id":"006","name":"秀姑巒山","altitude":"3805","loation":"南投縣信義鄉.花蓮縣卓溪鄉","brief":"","feature":"五岳-3","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.498055555555556,"lng":121.05055555555555},{"id":"007","name":"馬博拉斯山","altitude":"3765","loation":"南投縣信義鄉.花蓮縣卓溪鄉","brief":"","feature":"十峻-3","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.522222222222222,"lng":121.05944444444444},{"id":"008","name":"南湖大山","altitude":"3742","loation":"台中縣和平鄉.花蓮縣秀林鄉","brief":"","feature":"五岳-4","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.363611111111112,"lng":121.42888888888889},{"id":"009","name":"東小南山","altitude":"3711","loation":"高雄縣桃源鄉","brief":"","feature":"九平-1","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.440555555555555,"lng":120.95527777777778},{"id":"010","name":"中央尖山","altitude":"3705","loation":"台中縣和平鄉.花蓮縣秀林鄉","brief":"","feature":"三尖-1","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.328611111111112,"lng":121.40777777777778},{"id":"011","name":"雪山北峰","altitude":"3703","loation":"台中縣和平鄉.苗栗縣泰安鄉","brief":"","feature":"十潤-2","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.41722222222222,"lng":121.23194444444445},{"id":"012","name":"關山","altitude":"3668","loation":"高雄縣桃源鄉.台東縣海端鄉","brief":"","feature":"十峻-4","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.230555555555554,"lng":120.90333333333334},{"id":"013","name":"南湖大山東峰","altitude":"3632","loation":"台中縣和平鄉.宜蘭縣南澳鄉.花蓮縣秀林鄉?","brief":"","feature":"十巖-1","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.36777777777778,"lng":121.44250000000001},{"id":"014","name":"大水窟山","altitude":"3630\n3642","loation":"南投縣信義鄉.花蓮縣卓溪鄉","brief":"","feature":"十潤-1","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.475555555555555,"lng":121.03055555555555},{"id":"015","name":"東郡大山","altitude":"3619","loation":"南投縣信義鄉","brief":"屬於中央山脈。東郡大山南方有無雙山，北邊連接東巒大山。其特色為山勢高聳不易攀登，山頂遼闊，間有香青，縱覽如錐橫觀如刃，壯麗遼闊，具有一等三角點。","feature":"十崇-4","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.628055555555555,"lng":121.08416666666666},{"id":"016","name":"奇萊主山北峰","altitude":"3607","loation":"花蓮縣秀林鄉","brief":"","feature":"十峻-5","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.121666666666666,"lng":121.32833333333333},{"id":"017","name":"向陽山","altitude":"3603","loation":"高雄縣桃源鄉.台東縣海端鄉","brief":"屬於中央山脈，行政區劃屬於高雄市、台東縣。向陽山 南方有關山嶺山，北邊連接三叉山 。其特色為山體廣大高聳，山峰北側有直落一千公尺的懸崖。","feature":"八秀-2","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.28638888888889,"lng":120.98444444444445},{"id":"018","name":"大劍山","altitude":"3594","loation":"台中縣和平鄉","brief":"位於台灣臺中市，隸屬雪霸國家公園管轄，為台灣百岳名山的「十峻」之一。","feature":"十峻-6","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.342499999999998,"lng":121.19222222222223},{"id":"019","name":"雲峰","altitude":"3564","loation":"高雄縣桃源鄉","brief":"屬於中央山脈，行政區劃屬於高雄市。雲峰南方有三叉山 ，北邊連接轆轆山。","feature":"九峨-1","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.355555555555558,"lng":120.96777777777778},{"id":"020","name":"奇萊主山","altitude":"3560","loation":"南投縣仁愛鄉.花蓮縣秀林鄉","brief":"地處中央山脈主陵北段。從合歡山 遠望奇萊稜脊，常因背對陽光而顯龐大、漆黑，山嶽氣勢懾人；再者，奇萊山 素以險峻著名，氣候錯綜複雜，雲霧變幻莫測，是台灣發生最多山難的山區，所以有「黑色奇萊」的稱號。","feature":"九峨-2","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.087777777777777,"lng":121.315},{"id":"021","name":"馬利加南山","altitude":"3546","loation":"南投縣信義鄉.花蓮縣卓溪鄉","brief":"屬於中央山脈，行政區劃屬於南投縣、花蓮縣。\n馬利加南山南方有秀姑巒山，北邊連接馬博拉斯山。","feature":"十巖-3","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.533055555555556,"lng":121.11027777777777},{"id":"022","name":"南湖北山","altitude":"3536","loation":"台中縣和平鄉.宜蘭縣南澳鄉.宜蘭縣大同鄉?","brief":"屬中央山脈。南方接續南湖大山 北峰、南湖大山 主峰，西南稜為審馬陣山，\n是中央山脈百岳位居最北者，山體崇闊，為台灣百岳十崇之首，\n頂平坡緩，淺竹稀疏，東有大崩崖，北脊多崩坡。","feature":"十崇-1","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.385833333333334,"lng":121.42861111111111},{"id":"023","name":"大雪山","altitude":"3530","loation":"台中縣和平鄉.苗栗縣泰安鄉","brief":"屬於雪山山脈，為台灣百岳名山的「十崇」之二。 \n以大草原風光吸引著山友的造訪。","feature":"十崇-2","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.3325,"lng":121.11277777777777},{"id":"024","name":"品田山","altitude":"3524","loation":"台中縣和平鄉.新竹縣尖石鄉","brief":"又名波秦西崙山(泰雅語Babo Pochin Siron，意為「最後的水池」)，\n武陵四秀之首。山頭巨大的岩脈縐褶露頭是品田山最大的特色，\n淡水河 亦發源於此山，視野開廣遼闊。\n品田山高名列四秀之冠。全山由硬砂岩斷層構成，四面皆為崖壁，山容險峻，\n名列台灣高山十峻之一，西側是鋸齒狀的凸岩懸崖，齒齒之間的斷層，\n使得山勢更加險惡，南面是面緊臨七家灣溪的垂直岩壁，\n北面則是臨塔克金溪的階層懸崖，地質特殊，並有冰河摺曲的圈谷地形。","feature":"十峻-7","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.43,"lng":121.25888888888889},{"id":"025","name":"玉山西峰","altitude":"3518\n3495","loation":"南投縣信義鄉.嘉義縣阿里山鄉","brief":"山體覆滿鐵杉林，蓊鬱蒼翠。玉山西峰山頂寬闊平緩，\n山頂於日治時期設有西山神祠，保留至今，\n是少數幾個保留完整的台灣高山神社遺址。","feature":"十翠-4","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.473888888888887,"lng":120.92583333333334},{"id":"026","name":"頭鷹山","altitude":"3510","loation":"台中縣和平鄉.苗栗縣泰安鄉","brief":"屬於雪山山脈。南方有大雪山，北邊連接火石山。\n山頂圓潤，遠望有如鷹頭，東有百丈懸岩，南有千丈垂壁，\n是雪山西稜線必經的百岳山頭。","feature":"九峨-3","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.361944444444447,"lng":121.13222222222221},{"id":"027","name":"三叉山","altitude":"3496","loation":"台東縣海端鄉.花蓮縣卓溪鄉.高雄縣桃源鄉?","brief":"屬於中央山脈 ，南方有向陽山，北邊連接雲峰。其特色為山體平緩且巨大，佈有廣闊玉山箭竹草原。嘉明湖 在三叉山 山坳處，另有嘉明妹池。","feature":"十崇-3","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.299444444444447,"lng":121.02055555555556},{"id":"028","name":"大霸尖山","altitude":"3492","loation":"苗栗縣泰安鄉.新竹縣尖石鄉","brief":"位於台灣的雪山山脈，聖稜線北端，其山勢突地拔起，危峰孤峙，遙望如同覆置的大酒桶，\n四面崖壁寸草不生，山形冷峻，令人生畏，素有「世紀奇峰」之稱。\n泰雅族與賽夏族原住民堅信大霸尖山是其祖先發祥地，視為聖山。\n附近山頭有：北邊的中霸尖山、西邊的小霸尖山 及東邊的東霸尖山，合稱為「大霸尖山 群峰」。\n\n在1927年，登上大霸尖山 紀錄的締造者是一位居台灣的日本學生瀨古喜三郎。\n","feature":"三尖-2","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.461111111111112,"lng":121.24972222222222},{"id":"029","name":"南湖大山南峰","altitude":"3475","loation":"台中縣和平鄉.花蓮縣秀林鄉","brief":"南湖大山 南峰南方有巴巴山，北邊連接南湖大山 。在某些角度望之峰尖尖銳異常，純粹由硬砂岩構成，形勢險惡，沿稜石塊磊磊，像極了豎起的大姆指。","feature":"十巖 - 5","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.349444444444444,"lng":121.42666666666668},{"id":"030","name":"東巒大山","altitude":"3468","loation":"南投縣信義鄉","brief":"東巒大山南方有東郡大山。其特色為北邊無三千公尺以上高山，視野遼闊。山頂寬平，淺竹無樹，沿稜有路抵郡大溪，山形秀麗，八秀-3。","feature":"八秀-3","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.65,"lng":121.0736111111111},{"id":"031","name":"無明山","altitude":"3451","loation":"台中縣和平鄉.花蓮縣秀林鄉","brief":"位於中央山脈北段主脊的背上，從無明西峰至無明山需經過無明斷崖，往北又有鬼門關斷崖，東有緩坡西有斷崖，碎石直落深谷，險惡至極。","feature":"十峻-8","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.2575,"lng":121.3786111111111},{"id":"032","name":"巴巴山","altitude":"3449","loation":"花蓮縣秀林鄉","brief":"","feature":"八小巒-1","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.345,"lng":121.43},{"id":"033","name":"馬西山","altitude":"3443\n3428","loation":"花蓮縣卓溪鄉","brief":"山頂平坦淺竹如茵，基盤廣大，南脊有嶙峋岩稜。十崇-4。","feature":"十崇-5","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.484722222222224,"lng":121.16611111111112},{"id":"034","name":"北合歡山","altitude":"3422","loation":"南投縣仁愛鄉","brief":"合歡群峰最高，因中橫公路支線經過，很容易攀爬。登頂途中高山草原綿延不絕，景色壯麗；山頂視野遼闊，可遠眺中央山脈與雪山山脈。南有西合歡山 ，北則連接畢祿山。","feature":"十崇-6","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.18305555555556,"lng":121.27333333333333},{"id":"035","name":"合歡山東峰","altitude":"3421","loation":"南投縣仁愛鄉.花蓮縣秀林鄉","brief":"位處中央山脈之北段，北接畢祿山，南連奇萊群峰，同時也是台灣主要河流大甲溪、濁水溪與立霧溪的分水嶺。峰頂相當寬闊，向北可遠眺中央山脈北脊與雪山山脈；向南可俯瞰濁水溪溪谷與玉山山塊；西側則可俯觀霧社、清境農場 一帶。","feature":"九峨-4","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.137777777777778,"lng":121.27305555555556},{"id":"036","name":"小霸尖山","altitude":"3418\n3416","loation":"苗栗縣泰安鄉","brief":"屬於中央山脈，行政區劃屬於苗栗縣。小霸尖山 南方有大霸尖山 ，北邊連接伊澤山。小霸尖山奇峰挺銳，崢嶸險峻，與大霸尖山 相對而立，狀亦奇峻，其特色為山型模樣狀似猴子。\n小霸尖山的形貌也受到岩性和節理之控制，因劇烈的風化作用使岩石崩落形成崖錐，唯其山形規模較大霸尖山 為小，但山形孤立挺拔的氣勢。在自然作用下，大霸尖山 會因侵蝕作用而逐漸崩塌縮小，形成類似現在所見的小霸尖山 。","feature":"八銳-2","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.455555555555556,"lng":121.24305555555556},{"id":"037","name":"合歡山","altitude":"3417","loation":"南投縣仁愛鄉","brief":"雖為主峰，並非合歡群峰中最高峰，但視野遼闊，原為軍事管制區，曾有軍隊駐紮，民眾無法進入；如今軍隊撤離，山頂除供電信業者設置無線通訊發射站，亦開放登山客登頂。\n\n在公路尚未闢建時，攀登合歡群峰原為需耗時至少三晝夜才能攻頂，隨著中橫公路的興建需要，便將霧社供應線循合歡越嶺古道 切過，如今自山腳埔里市區出發，駕車僅需2小時可達。","feature":"十潤-3","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.145,"lng":121.26305555555555},{"id":"038","name":"南玉山","altitude":"3383","loation":"高雄縣桃源鄉","brief":"位於玉山西南稜上最後一座標高3000公尺以上山頭，自塔塔加登山口望過去，南玉山連著小南山至玉山的稜線上，是極為險峻的斷崖地形，但是背面是極為緩美的箭竹草坡的單斜構造。","feature":"十潤-4","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.43138888888889,"lng":120.91694444444445},{"id":"039","name":"畢祿山","altitude":"3371","loation":"南投縣仁愛鄉.花蓮縣秀林鄉","brief":"屬於中央山脈北二段。畢祿山因山脊瘦長削立，故列名百岳的「八瘦」之一，山頂展望絕佳。\n\n中央山脈行至畢祿山後，分成三股，東向鋸齒連峰而接羊頭山，東南經黑岩山、加卑里山而降至碧綠，西南稜經卯木山自大禹嶺 後，接上合歡群峰。\n\n早年登頂途徑，從大禹嶺 經由西南稜而至，後來由中橫公路的合歡隧道口，利用820 林道，從山腹直接上切稜線，是可以當日往返的路線，遂成為主流路徑。畢祿與羊頭之間的鋸齒連峰，雖然不長但地形複雜，是長程縱走的試金石。","feature":"八瘦-2","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.21527777777778,"lng":121.33916666666666},{"id":"040","name":"卓社大山","altitude":"3369","loation":"南投縣信義鄉.南投縣仁愛鄉","brief":"峰巒橫亙，裸岩絕壁，自南仰望山崩地陷，險峻驚人，九峨-5。\n\n北邊連接牧山及干卓大山等，為干卓萬群峰裡的最高峰，路途遙遠，需通過十八連峰費時14 小時。\n\n是干卓萬山塊的最高峰，山勢巍峨聳立，西側是崖壁，南稜形成一面斷層的懸崖絕壁，深垂卡社溪底，由卓社大山到卓社大山東峰間，稜脈呈東北走向，稜脊狹瘦，鋸齒劍峰，山勢險峻，自南仰望險巇驚魂。","feature":"九峨-5","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.83611111111111,"lng":121.10444444444444},{"id":"041","name":"奇萊主山南峰","altitude":"3358","loation":"南投縣仁愛鄉","brief":"山體崇闊寬廣，為台灣高山「十崇」第七。奇萊南峰南方有南華山，北邊越過卡樓羅山斷崖，連接奇萊主峰。\n岳人多將奇萊南峰的行程與南華山搭配，合稱為「奇萊南華」，以能高越嶺古道西段為基礎，沿台14線廬山地區進入屯原山區，開始登山行程。","feature":"十崇-7","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.06388888888889,"lng":121.27166666666666},{"id":"042","name":"南雙頭山","altitude":"3356","loation":"花蓮縣卓溪鄉.高雄縣桃源鄉","brief":"","feature":"九峨-6","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.352500000000003,"lng":121.0111111111111},{"id":"043","name":"能高山南峰","altitude":"3349","loation":"南投縣仁愛鄉.花蓮縣秀林鄉","brief":"?嵬坡峻，氣概雄渾。無論北自奇萊，南自丹大遠眺均有巃嵷拔萃，威鎮??之感。稜脊三伸，西聳崖壁，直垂萬大北溪。北聳斷稜，竹木蒙茸，攀登甚苦。南斜陡脊，東則寬嶺平伸。","feature":"十峻-9","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.96722222222222,"lng":121.26833333333333},{"id":"044","name":"白姑大山","altitude":"3341","loation":"台中縣和平鄉","brief":"白姑大山屬於雪山山脈，為白姑山群最高峰。原屬雪山西南延伸支脈，因大甲溪水切割，成了隔著德基水庫 與雪山山脈遙遙相望的獨立山塊。山群南部為北港溪 源，溪谷是泰雅族賽考列克亞族福骨群（Xalut）的世居地。「Xalut」在泰雅語中意指「居住在深山中的人」；清代臺灣府志中記載為福骨社，日治時期，以日語轉換為「Hakku」，今譯作白狗或白姑，是為由來。\n\n白姑山群雖然擁有眾多高峰，但因山路繚繞，主稜之上又是高密箭竹橫阻，岳界迄今仍然沒有走出一條可以連峰縱走的明顯途徑，尤其是九二一大地震，更重創了本區僅有的幾條山徑，直到最近大地漸漸癒合，才又有愛山人陸續進出探訪，並開闢了一些新的登山途徑，讓山友們能夠重新投入白姑山群的懷抱。","feature":"十翠-6","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.204722222222223,"lng":121.10083333333333},{"id":"045","name":"八通關山","altitude":"3335","loation":"南投縣信義鄉","brief":"","feature":"八銳-3","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.492222222222225,"lng":121.00166666666667},{"id":"046","name":"新康山","altitude":"3331","loation":"花蓮縣卓溪鄉","brief":"","feature":"十峻-10","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.319444444444443,"lng":121.11944444444444},{"id":"047","name":"丹大山","altitude":"3325","loation":"花蓮縣卓溪鄉.花蓮縣萬榮鄉.南投縣信義鄉","brief":"","feature":"九幛-3","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.602222222222224,"lng":121.20555555555556},{"id":"048","name":"桃山","altitude":"3325","loation":"台中縣和平鄉.新竹縣尖石鄉","brief":"","feature":"八秀-5","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.434166666666666,"lng":121.29666666666667},{"id":"049","name":"佳陽山","altitude":"3314","loation":"台中縣和平鄉","brief":"","feature":"八銳-4","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.30888888888889,"lng":121.17972222222222},{"id":"050","name":"火石山","altitude":"3310","loation":"苗栗縣泰安鄉","brief":"","feature":"八銳-5","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.384166666666665,"lng":121.16944444444445},{"id":"051","name":"池有山","altitude":"3303","loation":"台中縣和平鄉.新竹縣尖石鄉","brief":"","feature":"六易-1","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.4325,"lng":121.28},{"id":"052","name":"伊澤山","altitude":"3297","loation":"新竹縣尖石鄉.苗栗縣泰安鄉","brief":"","feature":"六易-2","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.471944444444443,"lng":121.23555555555555},{"id":"053","name":"卑南主山","altitude":"3295","loation":"高雄縣桃源鄉.台東縣海端鄉","brief":"","feature":"十崇-8","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.053333333333335,"lng":120.86638888888888},{"id":"054","name":"郡大山","altitude":"3292\n3265","loation":"南投縣信義鄉","brief":"","feature":"八秀-6","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.590555555555554,"lng":120.94861111111112},{"id":"055","name":"志佳陽大山","altitude":"3289","loation":"台中縣和平鄉","brief":"","feature":"八秀-4","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.361666666666668,"lng":121.24055555555556},{"id":"056","name":"干卓萬山","altitude":"3284","loation":"南投縣仁愛鄉","brief":"","feature":"八瘦-4","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.87777777777778,"lng":121.13083333333333},{"id":"057","name":"太魯閣大山","altitude":"3283","loation":"花蓮縣秀林鄉","brief":"","feature":"十崇-9","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.08138888888889,"lng":121.41555555555556},{"id":"058","name":"轆轆山","altitude":"3279","loation":"高雄縣桃源鄉","brief":"","feature":"八銳-7","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.393055555555556,"lng":120.99055555555556},{"id":"059","name":"喀西帕南山","altitude":"3276","loation":"花蓮縣卓溪鄉","brief":"","feature":"九偏-5","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.466944444444444,"lng":121.17833333333334},{"id":"060","name":"內嶺爾山","altitude":"3275","loation":"花蓮縣卓溪鄉","brief":"","feature":"十崇-10","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.580833333333334,"lng":121.18583333333333},{"id":"061","name":"鈴鳴山","altitude":"3272","loation":"台中縣和平鄉.花蓮縣秀林鄉","brief":"","feature":"八秀-7","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.245833333333334,"lng":121.34305555555555},{"id":"062","name":"能高山","altitude":"3262","loation":"南投縣仁愛鄉.花蓮縣秀林鄉","brief":"","feature":"九峨-7","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.99388888888889,"lng":121.25194444444445},{"id":"063","name":"萬東山西峰","altitude":"3258","loation":"南投縣信義鄉.南投縣仁愛鄉","brief":"","feature":"九偏-6","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.853611111111114,"lng":121.17722222222223},{"id":"064","name":"劍山","altitude":"3253","loation":"台中縣和平鄉","brief":"","feature":"九幛-6","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.298055555555557,"lng":121.16055555555556},{"id":"065","name":"屏風山","altitude":"3250","loation":"花蓮縣秀林鄉","brief":"","feature":"九幛-5","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.151666666666664,"lng":121.33472222222221},{"id":"066","name":"小關山","altitude":"3249","loation":"高雄縣桃源鄉.台東縣海端鄉","brief":"","feature":"九峨-8","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.153333333333332,"lng":120.86833333333333},{"id":"067","name":"義西請馬至山","altitude":"3245","loation":"花蓮縣卓溪鄉.南投縣信義鄉","brief":"","feature":"七峭-5","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.58833333333333,"lng":121.14500000000001},{"id":"068","name":"牧山","altitude":"3241","loation":"南投縣信義鄉.南投縣仁愛鄉","brief":"","feature":"六易-4","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.864722222222223,"lng":121.15222222222222},{"id":"069","name":"玉山前峰","altitude":"3239","loation":"南投縣信義鄉.嘉義縣阿里山鄉","brief":"","feature":"六易-5","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.47722222222222,"lng":120.91027777777778},{"id":"070","name":"石門山","altitude":"3237","loation":"南投縣仁愛鄉.花蓮縣秀林鄉","brief":"","feature":"八小巒-2","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.154999999999998,"lng":121.27916666666667},{"id":"071","name":"無雙山","altitude":"3231\n3185","loation":"南投縣信義鄉","brief":"","feature":"九幛-7","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.594166666666666,"lng":121.04944444444445},{"id":"072","name":"塔關山","altitude":"3222","loation":"高雄縣桃源鄉.台東縣海端鄉","brief":"","feature":"七峭-4","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.254444444444445,"lng":120.93305555555555},{"id":"073","name":"馬比杉山","altitude":"3211","loation":"宜蘭縣南澳鄉.花蓮縣秀林鄉","brief":"","feature":"九平-7","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.35027777777778,"lng":121.47805555555556},{"id":"074","name":"達芬尖山","altitude":"3208\n3135","loation":"花蓮縣卓溪鄉.高雄縣桃源鄉.南投縣信義鄉","brief":"","feature":"三尖-3","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.43722222222222,"lng":121.005},{"id":"075","name":"雪山東峰","altitude":"3201","loation":"台中縣和平鄉","brief":"","feature":"八小巒-3","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.391111111111112,"lng":121.26333333333334},{"id":"076","name":"南華山","altitude":"3184","loation":"南投縣仁愛鄉.花蓮縣秀林鄉","brief":"","feature":"八瘦-6","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.04138888888889,"lng":121.27777777777777},{"id":"077","name":"關山嶺山","altitude":"3176","loation":"高雄縣桃源鄉.台東縣海端鄉","brief":"","feature":"八瘦-7","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.273055555555555,"lng":120.95111111111112},{"id":"078","name":"海諾南山","altitude":"3175","loation":"高雄縣桃源鄉.台東縣海端鄉","brief":"","feature":"十潤-6","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.18861111111111,"lng":120.90333333333334},{"id":"079","name":"中雪山","altitude":"3173","loation":"苗栗縣泰安鄉","brief":"","feature":"十翠-8","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.354722222222225,"lng":121.06944444444444},{"id":"080","name":"閂山","altitude":"3168","loation":"台中縣和平鄉","brief":"","feature":"八秀-8","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.260277777777777,"lng":121.30166666666666},{"id":"081","name":"甘藷峰","altitude":"3158","loation":"台中縣和平鄉.花蓮縣秀林鄉","brief":"","feature":"八小巒-5","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.292222222222225,"lng":121.38111111111111},{"id":"082","name":"西合歡山","altitude":"3145","loation":"南投縣仁愛鄉","brief":"","feature":"十翠-10","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.179444444444446,"lng":121.2363888888889},{"id":"083","name":"審馬陣山","altitude":"3141","loation":"宜蘭縣大同鄉.台中縣和平鄉","brief":"","feature":"六肩稜-1","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.3825,"lng":121.40916666666668},{"id":"084","name":"喀拉業山","altitude":"3133","loation":"宜蘭縣大同鄉.新竹縣尖石鄉","brief":"","feature":"六肩稜-2","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.451944444444443,"lng":121.31305555555555},{"id":"085","name":"庫哈諾辛山","altitude":"3115\n3116","loation":"高雄縣桃源鄉","brief":"","feature":"九偏-8","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.265,"lng":120.89},{"id":"086","name":"加利山","altitude":"3112","loation":"苗栗縣泰安鄉","brief":"","feature":"六肩稜-3","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.460277777777776,"lng":121.20777777777778},{"id":"087","name":"白石山","altitude":"3110","loation":"花蓮縣萬榮鄉.南投縣仁愛鄉","brief":"","feature":"七峭-6","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.909444444444443,"lng":121.26666666666667},{"id":"088","name":"磐石山","altitude":"3106","loation":"花蓮縣秀林鄉","brief":"","feature":"九偏-9","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.107222222222223,"lng":121.38},{"id":"089","name":"帕托魯山","altitude":"3101","loation":"花蓮縣秀林鄉","brief":"","feature":"十潤-8","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.101666666666667,"lng":121.45833333333334},{"id":"090","name":"北大武山","altitude":"3092","loation":"屏東縣泰武鄉.台東縣金峰鄉","brief":"","feature":"五岳-5","season":"","schedule":"","traffic":"","note":"","map":null,"lat":22.629166666666666,"lng":120.75194444444445},{"id":"091","name":"巒大山","altitude":"3081","loation":"南投縣信義鄉","brief":"","feature":"七峭-7","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.69527777777778,"lng":120.93916666666667},{"id":"092","name":"塔芬山","altitude":"3070","loation":"高雄縣桃源鄉.花蓮縣卓溪鄉","brief":"","feature":"八銳-8","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.4075,"lng":121.01916666666666},{"id":"093","name":"立霧主山","altitude":"3070","loation":"花蓮縣秀林鄉","brief":"","feature":"十巖9","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.12638888888889,"lng":121.43777777777778},{"id":"094","name":"安東軍山","altitude":"3068","loation":"花蓮縣萬榮鄉.南投縣仁愛鄉","brief":"","feature":"十潤-9","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.87388888888889,"lng":121.25777777777778},{"id":"095","name":"光頭山","altitude":"3060","loation":"南投縣仁愛鄉.花蓮縣秀林鄉","brief":"","feature":"九平-9","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.939722222222223,"lng":121.26277777777777},{"id":"096","name":"羊頭山","altitude":"3035","loation":"花蓮縣秀林鄉","brief":"","feature":"八瘦-8","season":"","schedule":"","traffic":"","note":"","map":null,"lat":24.21,"lng":121.37138888888889},{"id":"097","name":"駒盆山","altitude":"3022","loation":"南投縣信義鄉","brief":"","feature":"六肩稜-4","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.55,"lng":121.02555555555556},{"id":"098","name":"布拉克桑山","altitude":"3020","loation":"花蓮縣卓溪鄉.台東縣海端鄉","brief":"","feature":"九幛-8","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.235,"lng":121.07111111111111},{"id":"099","name":"六順山","altitude":"2999","loation":"花蓮縣萬榮鄉.南投縣信義鄉","brief":"","feature":"九平-8","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.72472222222222,"lng":121.23027777777779},{"id":"100","name":"鹿山","altitude":"2981","loation":"高雄縣桃源鄉","brief":"","feature":"六肩稜-5","season":"","schedule":"","traffic":"","note":"","map":null,"lat":23.452222222222222,"lng":120.98027777777779}]
pug_html = pug_html + "\u003Chead\u003E";
pug_mixins["css"]([
      {name: "bootstrap", path: "dist/css/bootstrap.min.css"},
      {name: "@loadingio/bootstrap.ext"},
      {name: "ldcover"}
    ]);
pug_html = pug_html + "\u003Cstyle type=\"text\u002Fcss\"\u003Ehtml,body{width:100%;height:100%;margin:0;padding:0}.hill{background:#eee;cursor:pointer;transition:order .35s ease-in-out;width:90px}.hill .id{color:red}.hill.active{background:#1b5;color:#fff;box-shadow:0 2px 4px rgba(0,0,0,0.3)}.hill.active .id{color:#fff}svg{width:100%;height:100%}path{fill:#eee;stroke:#ccc;stroke-width:.02}circle{fill:#999;fill-opacity:.3;stroke:#777;stroke-width:.02;stroke-opacity:.5}circle.active{fill:red;fill-opacity:.5;stroke:#d00;stroke-width:.02}\u003C\u002Fstyle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E";
var name = "雪倫";
var me = [
  {id: "075", year: 2008},
  {id: "072", year: 2022},
  {id: "070", year: 2010},
  {id: "035", year: 2010},
  {id: "034", year: 2010},
  {id: "037", year: 2018},
  {id: "002", year: 2008}
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
pug_html = pug_html + "\u003Cscript type=\"module\"\u003Ewindow.data = {\n  hills: " + (null == (pug_interp = JSON.stringify(hills)) ? "" : pug_interp) + ",\n  me: " + (null == (pug_interp = JSON.stringify(me)) ? "" : pug_interp) + "\n};\u003C\u002Fscript\u003E\u003Cscript type=\"module\"\u003Evar hills,me,hnodes,order,reorder,ldcv,lc,view,toggle,obj;hills=window.data.hills;me=window.data.me;hnodes=ld$.find(\".hill\");hnodes.map(function(e){var t;t=e.getAttribute(\"data-id\");if(me.filter(function(e){return e.id===t}).length){return e.classList.add(\"active\")}});order={};order.name=hills.map(function(e){return e.name}).sort();order.location=hills.map(function(e){return e.location}).sort();window.reorder=reorder=function(d){return hnodes.map(function(e){var t,r,n,i,o,l;t=e.getAttribute(\"data-id\");r=ld$.find(e,\"[ld=id]\",0);if(!(n=hills.filter(function(e){return e.id===t})[0])){return}if(d===\"id\"){e.style.order=Math.round(n.id);return r.innerText=n.id}else if(d===\"name\"){e.style.order=order.name.indexOf(n.name);return r.innerText=n.id}else if(d===\"location\"){e.style.order=order.location.indexOf(n.location);return r.innerText=n.location.substring(0,2)}else if(d===\"altitude\"){e.style.order=3e3-n.altitude;return r.innerText=n.id}else if(d===\"date\"){i=me.filter(function(e){return e.id===t})[0];e.style.order=!i?3e3:3e3-i.year;return r.innerText=i?i.year:\"-\"}else if(d===\"schedule\"){o=\u002F([0-9.]+)小時\u002F.exec(n.schedule);if(o){l=+o[1]*60}else{o=\u002F([0-9.]+)分鐘\u002F.exec(n.schedule);if(o){l=+o[1]}else{l=0}}r.innerText=(l?l:\"\")+\"\"+(o?\"分鐘\":\"-\");return e.style.order=o?600-Math.round(+l):600}})};ldcv=new ldcover({root:\".ldcv\",resident:true});lc={item:{}};console.log(ld$.find(\"[ld-scope='detail']\"));view=new ldview({root:\"[ld-scope=detail]\",handler:{name:function(e){var t;t=e.node;return t.innerText=lc.item.name},desc:function(e){var t;t=e.node;return t.innerText=lc.item.brief},location:function(e){var t;t=e.node;return t.innerText=lc.item.location},map:function(e){var t;t=e.node;if(lc.item.map){return t.setAttribute(\"src\",lc.item.map)}}}});window.toggle=toggle=function(t){lc.item=hills.filter(function(e){return e.id===t})[0]||{}||{};view.render();return ldcv.toggle()};obj=new pdmaptw({type:\"county\",root:\".map\"});obj.init().then(function(){obj.fit();console.log(pdmaptw.projection()([122,23]));return d3.select(\"svg g\").selectAll(\"circle\").data(hills).enter().append(\"circle\").attr(\"r\",.08).attr(\"cx\",function(e){return pdmaptw.projection()([e.lng,e.lat])[0]}).attr(\"cy\",function(e){return pdmaptw.projection()([e.lng,e.lat])[1]}).attr(\"class\",function(t){if(me.filter(function(e){return e.id===t.id}).length){return\"active\"}else{return\"\"}})});\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
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