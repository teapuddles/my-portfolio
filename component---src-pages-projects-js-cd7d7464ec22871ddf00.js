/*! For license information please see component---src-pages-projects-js-cd7d7464ec22871ddf00.js.LICENSE.txt */
(self.webpackChunkkevin_s_portfolio=self.webpackChunkkevin_s_portfolio||[]).push([[853],{5706:function(e,t,r){"use strict";var n=r(8812),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return n.isMemo(e)?o:s[e.$$typeof]||i}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=o;var l=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(h){var i=p(r);i&&i!==h&&e(t,i,n)}var o=u(r);f&&(o=o.concat(f(r)));for(var s=c(t),m=c(r),g=0;g<o.length;++g){var y=o[g];if(!(a[y]||n&&n[y]||m&&m[y]||s&&s[y])){var v=d(r,y);try{l(t,y,v)}catch(b){}}}}return t}},165:function(e,t){"use strict";var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,o=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,y=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,b=r?Symbol.for("react.responder"):60118,S=r?Symbol.for("react.scope"):60119;function k(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case u:case f:case a:case s:case o:case p:return e;default:switch(e=e&&e.$$typeof){case l:case d:case g:case m:case c:return e;default:return t}}case i:return t}}}function w(e){return k(e)===f}t.AsyncMode=u,t.ConcurrentMode=f,t.ContextConsumer=l,t.ContextProvider=c,t.Element=n,t.ForwardRef=d,t.Fragment=a,t.Lazy=g,t.Memo=m,t.Portal=i,t.Profiler=s,t.StrictMode=o,t.Suspense=p,t.isAsyncMode=function(e){return w(e)||k(e)===u},t.isConcurrentMode=w,t.isContextConsumer=function(e){return k(e)===l},t.isContextProvider=function(e){return k(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return k(e)===d},t.isFragment=function(e){return k(e)===a},t.isLazy=function(e){return k(e)===g},t.isMemo=function(e){return k(e)===m},t.isPortal=function(e){return k(e)===i},t.isProfiler=function(e){return k(e)===s},t.isStrictMode=function(e){return k(e)===o},t.isSuspense=function(e){return k(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===f||e===s||e===o||e===p||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===c||e.$$typeof===l||e.$$typeof===d||e.$$typeof===v||e.$$typeof===b||e.$$typeof===S||e.$$typeof===y)},t.typeOf=k},8812:function(e,t,r){"use strict";e.exports=r(165)},6872:function(e){e.exports=function(e,t,r,n){var i=r?r.call(n,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!s(l))return!1;var u=e[l],f=t[l];if(!1===(i=r?r.call(n,u,f,l):void 0)||void 0===i&&u!==f)return!1}return!0}},8870:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Be}});var n=r(7294),i=r(9254),a=function(e){var t=e.tech;return n.createElement("div",{className:"li-wrapper"},n.createElement("ul",{className:"tech-used-ul"},n.createElement("li",{className:"tech-used-li"},t)))},o=function(e){var t=e.projectProps;return n.createElement("div",{className:"modal-container"},n.createElement("div",{className:"close-out-box",onClick:function(){e.setMyModal(!1)}}," X "),n.createElement("div",{className:"modal-data-wrapper"},n.createElement("h2",{className:"modal-title"},t.title),n.createElement("img",{key:t.title,src:t.siteImage,alt:t.title,href:t.hostLink,className:"modal-image"}),n.createElement("div",{className:"modal-info-wrapper"},n.createElement("div",{className:"modal-description"},t.description),n.createElement("div",{className:"tech-used-li-container"},t.techUsed.map((function(e){return n.createElement(a,{key:e,tech:e})})))),n.createElement("a",{href:t.hostLink},t.linkMessage)))},s=r(8812),c=r(6872),l=r.n(c);var u=function(e){function t(e,n,c,l,d){for(var p,h,m,g,S,w=0,C=0,x=0,A=0,P=0,_=0,T=m=p=0,M=0,z=0,L=0,D=0,F=c.length,B=F-1,G="",H="",U="",W="";M<F;){if(h=c.charCodeAt(M),M===B&&0!==C+A+x+w&&(0!==C&&(h=47===C?10:47),A=x=w=0,F++,B++),0===C+A+x+w){if(M===B&&(0<z&&(G=G.replace(f,"")),0<G.trim().length)){switch(h){case 32:case 9:case 59:case 13:case 10:break;default:G+=c.charAt(M)}h=59}switch(h){case 123:for(p=(G=G.trim()).charCodeAt(0),m=1,D=++M;M<F;){switch(h=c.charCodeAt(M)){case 123:m++;break;case 125:m--;break;case 47:switch(h=c.charCodeAt(M+1)){case 42:case 47:e:{for(T=M+1;T<B;++T)switch(c.charCodeAt(T)){case 47:if(42===h&&42===c.charCodeAt(T-1)&&M+2!==T){M=T+1;break e}break;case 10:if(47===h){M=T+1;break e}}M=T}}break;case 91:h++;case 40:h++;case 34:case 39:for(;M++<B&&c.charCodeAt(M)!==h;);}if(0===m)break;M++}switch(m=c.substring(D,M),0===p&&(p=(G=G.replace(u,"").trim()).charCodeAt(0)),p){case 64:switch(0<z&&(G=G.replace(f,"")),h=G.charCodeAt(1)){case 100:case 109:case 115:case 45:z=n;break;default:z=R}if(D=(m=t(n,z,m,h,d+1)).length,0<N&&(S=s(3,m,z=r(R,G,L),n,I,E,D,h,d,l),G=z.join(""),void 0!==S&&0===(D=(m=S.trim()).length)&&(h=0,m="")),0<D)switch(h){case 115:G=G.replace(k,o);case 100:case 109:case 45:m=G+"{"+m+"}";break;case 107:m=(G=G.replace(y,"$1 $2"))+"{"+m+"}",m=1===j||2===j&&a("@"+m,3)?"@-webkit-"+m+"@"+m:"@"+m;break;default:m=G+m,112===l&&(H+=m,m="")}else m="";break;default:m=t(n,r(n,G,L),m,l,d+1)}U+=m,m=L=z=T=p=0,G="",h=c.charCodeAt(++M);break;case 125:case 59:if(1<(D=(G=(0<z?G.replace(f,""):G).trim()).length))switch(0===T&&(p=G.charCodeAt(0),45===p||96<p&&123>p)&&(D=(G=G.replace(" ",":")).length),0<N&&void 0!==(S=s(1,G,n,e,I,E,H.length,l,d,l))&&0===(D=(G=S.trim()).length)&&(G="\0\0"),p=G.charCodeAt(0),h=G.charCodeAt(1),p){case 0:break;case 64:if(105===h||99===h){W+=G+c.charAt(M);break}default:58!==G.charCodeAt(D-1)&&(H+=i(G,p,h,G.charCodeAt(2)))}L=z=T=p=0,G="",h=c.charCodeAt(++M)}}switch(h){case 13:case 10:47===C?C=0:0===1+p&&107!==l&&0<G.length&&(z=1,G+="\0"),0<N*$&&s(0,G,n,e,I,E,H.length,l,d,l),E=1,I++;break;case 59:case 125:if(0===C+A+x+w){E++;break}default:switch(E++,g=c.charAt(M),h){case 9:case 32:if(0===A+w+C)switch(P){case 44:case 58:case 9:case 32:g="";break;default:32!==h&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:0===A+C+w&&(z=L=1,g="\f"+g);break;case 108:if(0===A+C+w+O&&0<T)switch(M-T){case 2:112===P&&58===c.charCodeAt(M-3)&&(O=P);case 8:111===_&&(O=_)}break;case 58:0===A+C+w&&(T=M);break;case 44:0===C+x+A+w&&(z=1,g+="\r");break;case 34:case 39:0===C&&(A=A===h?0:0===A?h:A);break;case 91:0===A+C+x&&w++;break;case 93:0===A+C+x&&w--;break;case 41:0===A+C+w&&x--;break;case 40:if(0===A+C+w){if(0===p)switch(2*P+3*_){case 533:break;default:p=1}x++}break;case 64:0===C+x+A+w+T+m&&(m=1);break;case 42:case 47:if(!(0<A+w+x))switch(C){case 0:switch(2*h+3*c.charCodeAt(M+1)){case 235:C=47;break;case 220:D=M,C=42}break;case 42:47===h&&42===P&&D+2!==M&&(33===c.charCodeAt(D+2)&&(H+=c.substring(D,M+1)),g="",C=0)}}0===C&&(G+=g)}_=P,P=h,M++}if(0<(D=H.length)){if(z=n,0<N&&(void 0!==(S=s(2,H,z,e,I,E,D,l,d,l))&&0===(H=S).length))return W+H+U;if(H=z.join(",")+"{"+H+"}",0!=j*O){switch(2!==j||a(H,2)||(O=0),O){case 111:H=H.replace(b,":-moz-$1")+H;break;case 112:H=H.replace(v,"::-webkit-input-$1")+H.replace(v,"::-moz-$1")+H.replace(v,":-ms-input-$1")+H}O=0}}return W+H+U}function r(e,t,r){var i=t.trim().split(m);t=i;var a=i.length,o=e.length;switch(o){case 0:case 1:var s=0;for(e=0===o?"":e[0]+" ";s<a;++s)t[s]=n(e,t[s],r).trim();break;default:var c=s=0;for(t=[];s<a;++s)for(var l=0;l<o;++l)t[c++]=n(e[l]+" ",i[s],r).trim()}return t}function n(e,t,r){var n=t.charCodeAt(0);switch(33>n&&(n=(t=t.trim()).charCodeAt(0)),n){case 38:return t.replace(g,"$1"+e.trim());case 58:return e.trim()+t.replace(g,"$1"+e.trim());default:if(0<1*r&&0<t.indexOf("\f"))return t.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function i(e,t,r,n){var o=e+";",s=2*t+3*r+4*n;if(944===s){e=o.indexOf(":",9)+1;var c=o.substring(e,o.length-1).trim();return c=o.substring(0,e).trim()+c+";",1===j||2===j&&a(c,1)?"-webkit-"+c+c:c}if(0===j||2===j&&!a(o,1))return o;switch(s){case 1015:return 97===o.charCodeAt(10)?"-webkit-"+o+o:o;case 951:return 116===o.charCodeAt(3)?"-webkit-"+o+o:o;case 963:return 110===o.charCodeAt(5)?"-webkit-"+o+o:o;case 1009:if(100!==o.charCodeAt(4))break;case 969:case 942:return"-webkit-"+o+o;case 978:return"-webkit-"+o+"-moz-"+o+o;case 1019:case 983:return"-webkit-"+o+"-moz-"+o+"-ms-"+o+o;case 883:if(45===o.charCodeAt(8))return"-webkit-"+o+o;if(0<o.indexOf("image-set(",11))return o.replace(P,"$1-webkit-$2")+o;break;case 932:if(45===o.charCodeAt(4))switch(o.charCodeAt(5)){case 103:return"-webkit-box-"+o.replace("-grow","")+"-webkit-"+o+"-ms-"+o.replace("grow","positive")+o;case 115:return"-webkit-"+o+"-ms-"+o.replace("shrink","negative")+o;case 98:return"-webkit-"+o+"-ms-"+o.replace("basis","preferred-size")+o}return"-webkit-"+o+"-ms-"+o+o;case 964:return"-webkit-"+o+"-ms-flex-"+o+o;case 1023:if(99!==o.charCodeAt(8))break;return"-webkit-box-pack"+(c=o.substring(o.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+o+"-ms-flex-pack"+c+o;case 1005:return p.test(o)?o.replace(d,":-webkit-")+o.replace(d,":-moz-")+o:o;case 1e3:switch(t=(c=o.substring(13).trim()).indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(t)){case 226:c=o.replace(S,"tb");break;case 232:c=o.replace(S,"tb-rl");break;case 220:c=o.replace(S,"lr");break;default:return o}return"-webkit-"+o+"-ms-"+c+o;case 1017:if(-1===o.indexOf("sticky",9))break;case 975:switch(t=(o=e).length-10,s=(c=(33===o.charCodeAt(t)?o.substring(0,t):o).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(111>c.charCodeAt(8))break;case 115:o=o.replace(c,"-webkit-"+c)+";"+o;break;case 207:case 102:o=o.replace(c,"-webkit-"+(102<s?"inline-":"")+"box")+";"+o.replace(c,"-webkit-"+c)+";"+o.replace(c,"-ms-"+c+"box")+";"+o}return o+";";case 938:if(45===o.charCodeAt(5))switch(o.charCodeAt(6)){case 105:return c=o.replace("-items",""),"-webkit-"+o+"-webkit-box-"+c+"-ms-flex-"+c+o;case 115:return"-webkit-"+o+"-ms-flex-item-"+o.replace(C,"")+o;default:return"-webkit-"+o+"-ms-flex-line-pack"+o.replace("align-content","").replace(C,"")+o}break;case 973:case 989:if(45!==o.charCodeAt(3)||122===o.charCodeAt(4))break;case 931:case 953:if(!0===A.test(e))return 115===(c=e.substring(e.indexOf(":")+1)).charCodeAt(0)?i(e.replace("stretch","fill-available"),t,r,n).replace(":fill-available",":stretch"):o.replace(c,"-webkit-"+c)+o.replace(c,"-moz-"+c.replace("fill-",""))+o;break;case 962:if(o="-webkit-"+o+(102===o.charCodeAt(5)?"-ms-"+o:"")+o,211===r+n&&105===o.charCodeAt(13)&&0<o.indexOf("transform",10))return o.substring(0,o.indexOf(";",27)+1).replace(h,"$1-webkit-$2")+o}return o}function a(e,t){var r=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?r:10);return r=e.substring(r+1,e.length-1),T(2!==t?n:n.replace(x,"$1"),r,t)}function o(e,t){var r=i(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(w," or ($1)").substring(4):"("+t+")"}function s(e,t,r,n,i,a,o,s,c,u){for(var f,d=0,p=t;d<N;++d)switch(f=_[d].call(l,e,p,r,n,i,a,o,s,c,u)){case void 0:case!1:case!0:case null:break;default:p=f}if(p!==t)return p}function c(e){return void 0!==(e=e.prefix)&&(T=null,e?"function"!=typeof e?j=1:(j=2,T=e):j=0),c}function l(e,r){var n=e;if(33>n.charCodeAt(0)&&(n=n.trim()),n=[n],0<N){var i=s(-1,r,n,n,I,E,0,0,0,0);void 0!==i&&"string"==typeof i&&(r=i)}var a=t(R,n,r,0,0);return 0<N&&(void 0!==(i=s(-2,a,n,n,I,E,a.length,0,0,0))&&(a=i)),"",O=0,E=I=1,a}var u=/^\0+/g,f=/[\0\r\f]/g,d=/: */g,p=/zoo|gra/,h=/([,: ])(transform)/g,m=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,y=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,b=/:(read-only)/g,S=/[svh]\w+-[tblr]{2}/,k=/\(\s*(.*)\s*\)/g,w=/([\s\S]*?);/g,C=/-self|flex-/g,x=/[^]*?(:[rp][el]a[\w-]+)[^]*/,A=/stretch|:\s*\w+\-(?:conte|avail)/,P=/([^-])(image-set\()/,E=1,I=1,O=0,j=1,R=[],_=[],N=0,T=null,$=0;return l.use=function e(t){switch(t){case void 0:case null:N=_.length=0;break;default:if("function"==typeof t)_[N++]=t;else if("object"==typeof t)for(var r=0,n=t.length;r<n;++r)e(t[r]);else $=0|!!t}return e},l.set=c,void 0!==e&&c(e),l},f={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var d=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,p=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){return d.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),h=r(5706),m=r.n(h);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var y=function(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r},v=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!(0,s.typeOf)(e)},b=Object.freeze([]),S=Object.freeze({});function k(e){return"function"==typeof e}function w(e){return e.displayName||e.name||"Component"}function C(e){return e&&"string"==typeof e.styledComponentId}var x="undefined"!=typeof process&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",A="undefined"!=typeof window&&"HTMLElement"in window,P=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={}.REACT_APP_SC_DISABLE_SPEEDY&&{}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}.SC_DISABLE_SPEEDY&&""!=={}.SC_DISABLE_SPEEDY&&("false"!=={}.SC_DISABLE_SPEEDY&&{}.SC_DISABLE_SPEEDY));function E(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(r.length>0?" Args: "+r.join(", "):""))}var I=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,i=n;e>=i;)(i<<=1)<0&&E(16,""+e);this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var a=n;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=0,c=t.length;s<c;s++)this.tag.insertRule(o,t[s])&&(this.groupSizes[e]++,o++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var i=r;i<n;i++)this.tag.deleteRule(r)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),i=n+r,a=n;a<i;a++)t+=this.tag.getRule(a)+"/*!sc*/\n";return t},e}(),O=new Map,j=new Map,R=1,_=function(e){if(O.has(e))return O.get(e);for(;j.has(R);)R++;var t=R++;return O.set(e,t),j.set(t,e),t},N=function(e){return j.get(e)},T=function(e,t){O.set(e,t),j.set(t,e)},$="style["+x+'][data-styled-version="5.3.0"]',M=new RegExp("^"+x+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),z=function(e,t,r){for(var n,i=r.split(","),a=0,o=i.length;a<o;a++)(n=i[a])&&e.registerName(t,n)},L=function(e,t){for(var r=t.innerHTML.split("/*!sc*/\n"),n=[],i=0,a=r.length;i<a;i++){var o=r[i].trim();if(o){var s=o.match(M);if(s){var c=0|parseInt(s[1],10),l=s[2];0!==c&&(T(l,c),z(e,l,s[3]),e.getTag().insertRules(c,n)),n.length=0}else n.push(o)}}},D=function(){return"undefined"!=typeof window&&void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null},F=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(e){for(var t=e.childNodes,r=t.length;r>=0;r--){var n=t[r];if(n&&1===n.nodeType&&n.hasAttribute(x))return n}}(r),a=void 0!==i?i.nextSibling:null;n.setAttribute(x,"active"),n.setAttribute("data-styled-version","5.3.0");var o=D();return o&&n.setAttribute("nonce",o),r.insertBefore(n,a),n},B=function(){function e(e){var t=this.element=F(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var i=t[r];if(i.ownerNode===e)return i}E(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),G=function(){function e(e){var t=this.element=F(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t),n=this.nodes[e];return this.element.insertBefore(r,n||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),H=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),U=A,W={isServer:!A,useCSSOMInjection:!P},Y=function(){function e(e,t,r){void 0===e&&(e=S),void 0===t&&(t={}),this.options=g({},W,{},e),this.gs=t,this.names=new Map(r),!this.options.isServer&&A&&U&&(U=!1,function(e){for(var t=document.querySelectorAll($),r=0,n=t.length;r<n;r++){var i=t[r];i&&"active"!==i.getAttribute(x)&&(L(e,i),i.parentNode&&i.parentNode.removeChild(i))}}(this))}e.registerId=function(e){return _(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(g({},this.options,{},t),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(r=(t=this.options).isServer,n=t.useCSSOMInjection,i=t.target,e=r?new H(i):n?new B(i):new G(i),new I(e)));var e,t,r,n,i},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(_(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},t.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(_(e),r)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(_(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),r=t.length,n="",i=0;i<r;i++){var a=N(i);if(void 0!==a){var o=e.names.get(a),s=t.getGroup(i);if(void 0!==o&&0!==s.length){var c=x+".g"+i+'[id="'+a+'"]',l="";void 0!==o&&o.forEach((function(e){e.length>0&&(l+=e+",")})),n+=""+s+c+'{content:"'+l+'"}/*!sc*/\n'}}}return n}(this)},e}(),q=/(a)(d)/gi,V=function(e){return String.fromCharCode(e+(e>25?39:97))};function X(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=V(t%52)+r;return(V(t%52)+r).replace(q,"$1-$2")}var Z=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},K=function(e){return Z(5381,e)};function J(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(k(r)&&!C(r))return!1}return!0}var Q=K("5.3.0"),ee=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&J(e),this.componentId=t,this.baseHash=Z(Q,t),this.baseStyle=r,Y.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(e,t,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(n,this.staticRulesId))i.push(this.staticRulesId);else{var a=ve(this.rules,e,t,r).join(""),o=X(Z(this.baseHash,a.length)>>>0);if(!t.hasNameForId(n,o)){var s=r(a,"."+o,void 0,n);t.insertRules(n,o,s)}i.push(o),this.staticRulesId=o}else{for(var c=this.rules.length,l=Z(this.baseHash,r.hash),u="",f=0;f<c;f++){var d=this.rules[f];if("string"==typeof d)u+=d;else if(d){var p=ve(d,e,t,r),h=Array.isArray(p)?p.join(""):p;l=Z(l,h+f),u+=h}}if(u){var m=X(l>>>0);if(!t.hasNameForId(n,m)){var g=r(u,"."+m,void 0,n);t.insertRules(n,m,g)}i.push(m)}}return i.join(" ")},e}(),te=/^\s*\/\/.*$/gm,re=[":","[",".","#"];function ne(e){var t,r,n,i,a=void 0===e?S:e,o=a.options,s=void 0===o?S:o,c=a.plugins,l=void 0===c?b:c,f=new u(s),d=[],p=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(r,n,i,a,o,s,c,l,u,f){switch(r){case 1:if(0===u&&64===n.charCodeAt(0))return e(n+";"),"";break;case 2:if(0===l)return n+"/*|*/";break;case 3:switch(l){case 102:case 112:return e(i[0]+n),"";default:return n+(0===f?"/*|*/":"")}case-2:n.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),h=function(e,n,a){return 0===n&&-1!==re.indexOf(a[r.length])||a.match(i)?e:"."+t};function m(e,a,o,s){void 0===s&&(s="&");var c=e.replace(te,""),l=a&&o?o+" "+a+" { "+c+" }":c;return t=s,r=a,n=new RegExp("\\"+r+"\\b","g"),i=new RegExp("(\\"+r+"\\b){2,}"),f(o||!a?"":a,l)}return f.use([].concat(l,[function(e,t,i){2===e&&i.length&&i[0].lastIndexOf(r)>0&&(i[0]=i[0].replace(n,h))},p,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=l.length?l.reduce((function(e,t){return t.name||E(15),Z(e,t.name)}),5381).toString():"",m}var ie=n.createContext(),ae=(ie.Consumer,n.createContext()),oe=(ae.Consumer,new Y),se=ne();function ce(){return(0,n.useContext)(ie)||oe}function le(){return(0,n.useContext)(ae)||se}function ue(e){var t=(0,n.useState)(e.stylisPlugins),r=t[0],i=t[1],a=ce(),o=(0,n.useMemo)((function(){var t=a;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),s=(0,n.useMemo)((function(){return ne({options:{prefix:!e.disableVendorPrefixes},plugins:r})}),[e.disableVendorPrefixes,r]);return(0,n.useEffect)((function(){l()(r,e.stylisPlugins)||i(e.stylisPlugins)}),[e.stylisPlugins]),n.createElement(ie.Provider,{value:o},n.createElement(ae.Provider,{value:s},e.children))}var fe=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=se);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.toString=function(){return E(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=se),this.name+e.hash},e}(),de=/([A-Z])/,pe=/([A-Z])/g,he=/^ms-/,me=function(e){return"-"+e.toLowerCase()};function ge(e){return de.test(e)?e.replace(pe,me).replace(he,"-ms-"):e}var ye=function(e){return null==e||!1===e||""===e};function ve(e,t,r,n){if(Array.isArray(e)){for(var i,a=[],o=0,s=e.length;o<s;o+=1)""!==(i=ve(e[o],t,r,n))&&(Array.isArray(i)?a.push.apply(a,i):a.push(i));return a}return ye(e)?"":C(e)?"."+e.styledComponentId:k(e)?"function"!=typeof(c=e)||c.prototype&&c.prototype.isReactComponent||!t?e:ve(e(t),t,r,n):e instanceof fe?r?(e.inject(r,n),e.getName(n)):e:v(e)?function e(t,r){var n,i,a=[];for(var o in t)t.hasOwnProperty(o)&&!ye(t[o])&&(v(t[o])?a.push.apply(a,e(t[o],o)):k(t[o])?a.push(ge(o)+":",t[o],";"):a.push(ge(o)+": "+(n=o,(null==(i=t[o])||"boolean"==typeof i||""===i?"":"number"!=typeof i||0===i||n in f?String(i).trim():i+"px")+";")));return r?[r+" {"].concat(a,["}"]):a}(e):e.toString();var c}function be(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return k(e)||v(e)?ve(y(b,[e].concat(r))):0===r.length&&1===e.length&&"string"==typeof e[0]?e:ve(y(e,r))}new Set;var Se=function(e,t,r){return void 0===r&&(r=S),e.theme!==r.theme&&e.theme||t||r.theme},ke=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,we=/(^-|-$)/g;function Ce(e){return e.replace(ke,"-").replace(we,"")}var xe=function(e){return X(K(e)>>>0)};function Ae(e){return"string"==typeof e&&!0}var Pe=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Ee=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Ie(e,t,r){var n=e[r];Pe(t)&&Pe(n)?Oe(n,t):e[r]=t}function Oe(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(var i=0,a=r;i<a.length;i++){var o=a[i];if(Pe(o))for(var s in o)Ee(s)&&Ie(e,o[s],s)}return e}var je=n.createContext();je.Consumer;var Re={};function _e(e,t,r){var i=C(e),a=!Ae(e),o=t.attrs,s=void 0===o?b:o,c=t.componentId,l=void 0===c?function(e,t){var r="string"!=typeof e?"sc":Ce(e);Re[r]=(Re[r]||0)+1;var n=r+"-"+xe("5.3.0"+r+Re[r]);return t?t+"-"+n:n}(t.displayName,t.parentComponentId):c,u=t.displayName,f=void 0===u?function(e){return Ae(e)?"styled."+e:"Styled("+w(e)+")"}(e):u,d=t.displayName&&t.componentId?Ce(t.displayName)+"-"+t.componentId:t.componentId||l,h=i&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,y=t.shouldForwardProp;i&&e.shouldForwardProp&&(y=t.shouldForwardProp?function(r,n,i){return e.shouldForwardProp(r,n,i)&&t.shouldForwardProp(r,n,i)}:e.shouldForwardProp);var v,x=new ee(r,d,i?e.componentStyle:void 0),A=x.isStatic&&0===s.length,P=function(e,t){return function(e,t,r,i){var a=e.attrs,o=e.componentStyle,s=e.defaultProps,c=e.foldedComponentIds,l=e.shouldForwardProp,u=e.styledComponentId,f=e.target,d=function(e,t,r){void 0===e&&(e=S);var n=g({},t,{theme:e}),i={};return r.forEach((function(e){var t,r,a,o=e;for(t in k(o)&&(o=o(n)),o)n[t]=i[t]="className"===t?(r=i[t],a=o[t],r&&a?r+" "+a:r||a):o[t]})),[n,i]}(Se(t,(0,n.useContext)(je),s)||S,t,a),h=d[0],m=d[1],y=function(e,t,r,n){var i=ce(),a=le();return t?e.generateAndInjectStyles(S,i,a):e.generateAndInjectStyles(r,i,a)}(o,i,h),v=r,b=m.$as||t.$as||m.as||t.as||f,w=Ae(b),C=m!==t?g({},t,{},m):t,x={};for(var A in C)"$"!==A[0]&&"as"!==A&&("forwardedAs"===A?x.as=C[A]:(l?l(A,p,b):!w||p(A))&&(x[A]=C[A]));return t.style&&m.style!==t.style&&(x.style=g({},t.style,{},m.style)),x.className=Array.prototype.concat(c,u,y!==u?y:null,t.className,m.className).filter(Boolean).join(" "),x.ref=v,(0,n.createElement)(b,x)}(v,e,t,A)};return P.displayName=f,(v=n.forwardRef(P)).attrs=h,v.componentStyle=x,v.displayName=f,v.shouldForwardProp=y,v.foldedComponentIds=i?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):b,v.styledComponentId=d,v.target=i?e.target:e,v.withComponent=function(e){var n=t.componentId,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(t,["componentId"]),a=n&&n+"-"+(Ae(e)?e:Ce(w(e)));return _e(e,g({},i,{attrs:h,componentId:a}),r)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=i?Oe({},e.defaultProps,t):t}}),v.toString=function(){return"."+v.styledComponentId},a&&m()(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var Ne=function(e){return function e(t,r,n){if(void 0===n&&(n=S),!(0,s.isValidElementType)(r))return E(1,String(r));var i=function(){return t(r,n,be.apply(void 0,arguments))};return i.withConfig=function(i){return e(t,r,g({},n,{},i))},i.attrs=function(i){return e(t,r,g({},n,{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},i}(_e,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){Ne[e]=Ne(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=J(e),Y.registerId(this.componentId+1)}var t=e.prototype;t.createStyles=function(e,t,r,n){var i=n(ve(this.rules,t,r,n).join(""),""),a=this.componentId+e;r.insertRules(a,a,i)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,r,n){e>2&&Y.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)}}();!function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),r=D();return"<style "+[r&&'nonce="'+r+'"',x+'="true"','data-styled-version="5.3.0"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?E(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return E(2);var r=((t={})[x]="",t["data-styled-version"]="5.3.0",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),i=D();return i&&(r.nonce=i),[n.createElement("style",g({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Y({isServer:!0}),this.sealed=!1}var t=e.prototype;t.collectStyles=function(e){return this.sealed?E(2):n.createElement(ue,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return E(3)}}();var Te=Ne,$e=Te.div.withConfig({displayName:"StyledProjectListComponent__ProjectSlice",componentId:"sc-19nx3vb-0"})(["padding:10px;margin:25px;background-color:#B1B5BB;;border-radius:50%;width:200px;height:200px;"]),Me=Te.div.withConfig({displayName:"StyledProjectListComponent__ProjectSliceWrapper",componentId:"sc-19nx3vb-1"})(["box-shadow:5px 10px 5px #302F31;background-color:rgb(189,200,212);border-radius:50%;margin-left:30px;margin-right:30px;margin-top:20px;border:1px solid #302F31;;"]),ze=Te.div.withConfig({displayName:"StyledProjectListComponent__ProjectSliceContainer",componentId:"sc-19nx3vb-2"})(["height:100%;display:grid;grid-template-columns:repeat(2,minmax(200px,1fr));position:relative;z-index:10;justify-items:center;"]),Le=(Te.button.withConfig({displayName:"StyledProjectListComponent__ProjectButton",componentId:"sc-19nx3vb-3"})([""]),function(e){var t=(0,n.useState)(!1),r=t[0],i=t[1],a=e.singleProject,s=function(){i(!r)};return n.createElement(n.Fragment,null,r?n.createElement(o,{projectProps:a,setMyModal:i}):null,n.createElement(Me,null,n.createElement($e,null,n.createElement("img",{key:a.title,src:a.image,alt:a.title,className:"project-image",onClick:function(){s()}}),n.createElement("br",null),n.createElement("button",{className:"project-buttons",onClick:function(){s()}},a.title))))}),De=r(2702),Fe=r.p+"static/bigCloud-948c0a7b5c104ab9f89df26fce9639b6.png",Be=function(){return n.createElement(i.Z,{pageTitle:"Kevin's Projects"},n.createElement(ze,null,De.q.map((function(e){return n.createElement(Le,{key:e.title,singleProject:e})})),n.createElement("div",{className:"project-cloud-wrapper"},n.createElement("img",{key:Fe,src:Fe,alt:"big cloud",className:"project-cloud"}))))}}}]);
//# sourceMappingURL=component---src-pages-projects-js-cd7d7464ec22871ddf00.js.map