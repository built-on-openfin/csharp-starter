/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@openfin/workspace/notifications.js":
/*!**********************************************************!*\
  !*** ./node_modules/@openfin/workspace/notifications.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(()=>{var e={847:(e,t)=>{var a={2346:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getMostReadable=t.darkenColor=t.lightenColor=void 0;const r=n(a(6535));t.lightenColor=(e,t)=>o(e,"lighten",t),t.darkenColor=(e,t)=>o(e,"darken",t);const o=(e,t,a)=>{if(a&&(a<0||a>100))throw new Error(`${a} must be a number between 0 and 100`);return(0,r.default)(e)[t](a).toString()};t.getMostReadable=(e,t)=>r.default.mostReadable(e,t).toHexString()},2317:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.IconSize=t.Transition=t.LineHeight=t.FontWeight=t.FontSize=t.FontFamily=t.Shadow=t.Radius=t.UnitPx=t.Unit=t.SizeName=t.Size=t.Color=void 0,t.Color={white:"#FFFFFF",lightGray1:"#FAFBFE",lightGray2:"#F3F5F8",lightGray3:"#ECEEF1",lightGray4:"#DDDFE4",lightGray5:"#C9CBD2",neutralGray:"#7D808A",neutralGray80:"rgba(125,128,138,0.8)",silverGray:"#C0C1C2",darkGray1:"#53565F",darkGray2:"#383A40",darkGray3:"#2F3136",darkGray4:"#24262B",darkGray5:"#1E1F23",darkGray6:"#111214",openFinDarkest:"#3D39CD",openFinDarker:"#4642E0",openFin:"#504CFF",openFinLight:"#5254FB",openFinLighter:"#5C5EFE",openFinLightest:"#6864FF",functional1:"#207735",functional2:"#46C8F1",functional3:"#0A76D3",functional4:"#6CADE5",functional5:"#0A76D3",functional6:"#882BFE",functional7:"#F31818",functional8:"#C93400",functional9:"#FF5E60",functional10:"#F48F00",purple:"#8C61FF",lightblue:"#36C3FE",aqua:"#00CC88",yellow:"#FFEB00",salmon:"#FF8C4C",pink:"#FF5E60",lightpink:"#FF8FB8",white00:"rgba(255,255,255,0.0)",white10:"rgba(255,255,255,0.1)",white20:"rgba(255,255,255,0.2)",white30:"rgba(255,255,255,0.3)",white40:"rgba(255,255,255,0.4)",white50:"rgba(255,255,255,0.5)",white60:"rgba(255,255,255,0.6)",white70:"rgba(255,255,255,0.7)",white80:"rgba(255,255,255,0.8)",white90:"rgba(255,255,255,0.9)",black00:"rgba(0,0,0,0.0)",black10:"rgba(0,0,0,0.1)",black20:"rgba(0,0,0,0.2)",black30:"rgba(0,0,0,0.3)",black40:"rgba(0,0,0,0.4)",black50:"rgba(0,0,0,0.5)",black60:"rgba(0,0,0,0.6)",black70:"rgba(0,0,0,0.7)",black80:"rgba(0,0,0,0.8)",black90:"rgba(0,0,0,0.9)",transparent:"transparent"},t.Size={xsmall:"xsmall",small:"small",base:"base",large:"large",xlarge:"xlarge",xxlarge:"xxlarge",xxxlarge:"xxxlarge",xxxxlarge:"xxxxlarge"},t.SizeName={[t.Size.xsmall]:"Extra Small",[t.Size.small]:"Small",[t.Size.base]:"Base",[t.Size.large]:"Large",[t.Size.xlarge]:"Extra Large",[t.Size.xxlarge]:"2X Large",[t.Size.xxxlarge]:"3X Large",[t.Size.xxxxlarge]:"4X Large"},t.Unit={[t.Size.xsmall]:4,[t.Size.small]:8,[t.Size.base]:12,[t.Size.large]:16,[t.Size.xlarge]:20,[t.Size.xxlarge]:24,[t.Size.xxxlarge]:32,[t.Size.xxxxlarge]:48},t.UnitPx={[t.Size.xsmall]:"4px",[t.Size.small]:"8px",[t.Size.base]:"12px",[t.Size.large]:"16px",[t.Size.xlarge]:"20px",[t.Size.xxlarge]:"24px",[t.Size.xxxlarge]:"32px",[t.Size.xxxxlarge]:"48px"},t.Radius={[t.Size.xsmall]:"2px",[t.Size.small]:"4px",[t.Size.base]:"8px",[t.Size.large]:"24px",pill:"100vh",round:"50%",none:"0"},t.Shadow={[t.Size.base]:"0 4px 4px rgba(0, 0, 0, 0.25)"},t.FontFamily=["Inter","system-ui","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue","sans-serif"].join(","),t.FontSize={[t.Size.xsmall]:"8px",[t.Size.small]:"10px",[t.Size.base]:"12px",[t.Size.large]:"14px",[t.Size.xlarge]:"16px",[t.Size.xxlarge]:"18px",[t.Size.xxxlarge]:"20px",[t.Size.xxxxlarge]:"40px"},t.FontWeight={normal:400,bold:600},t.LineHeight={ui:1,heading:1.2,text:1.5},t.Transition={base:"200ms cubic-bezier(0.16, 1, 0.3, 1)",none:"0ms"},t.IconSize={[t.Size.xsmall]:t.UnitPx.small,[t.Size.small]:t.UnitPx.base,[t.Size.base]:"15px",[t.Size.large]:t.UnitPx.xlarge,[t.Size.xlarge]:t.UnitPx.xxlarge,[t.Size.xxlarge]:t.UnitPx.xxxlarge,[t.Size.xxxlarge]:t.UnitPx.xxxxlarge}},6893:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createTheme=void 0;const n=a(2317),r=a(2346),o=a(5939),i={fontFamily:n.FontFamily,fontSize:n.FontSize,fontWeight:n.FontWeight,lineHeight:n.LineHeight,iconSize:n.IconSize,radius:n.Radius,shadow:n.Shadow,transition:n.Transition,unit:n.Unit,px:n.UnitPx},s=(e,t)=>({[`${e}Active`]:(0,r.darkenColor)(t,2),[`${e}Hover`]:(0,r.lightenColor)(t,5),[`${e}Focused`]:(0,r.getMostReadable)(t,[n.Color.white,n.Color.darkGray5]),[`${e}Text`]:(0,r.getMostReadable)(t,[n.Color.white,n.Color.darkGray5])});t.createTheme=e=>Object.assign(Object.assign({},i),{palette:Object.assign(Object.assign(Object.assign({},e),s(o.Palette.brandPrimary,e.brandPrimary)),s(o.Palette.brandSecondary,e.brandSecondary))})},5939:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Palette=void 0,t.Palette={background1:"background1",background2:"background2",background3:"background3",background4:"background4",background5:"background5",background6:"background6",brandPrimary:"brandPrimary",brandSecondary:"brandSecondary",brandPrimaryActive:"brandPrimaryActive",brandPrimaryHover:"brandPrimaryHover",brandPrimaryFocused:"brandPrimaryFocused",brandPrimaryText:"brandPrimaryText",brandSecondaryActive:"brandSecondaryActive",brandSecondaryHover:"brandSecondaryHover",brandSecondaryFocused:"brandSecondaryFocused",brandSecondaryText:"brandSecondaryText",inputBackground:"inputBackground",inputColor:"inputColor",inputPlaceholder:"inputPlaceholder",inputDisabled:"inputDisabled",inputFocused:"inputFocused",inputBorder:"inputBorder",statusSuccess:"statusSuccess",statusWarning:"statusWarning",statusCritical:"statusCritical",statusActive:"statusActive",textDefault:"textDefault",textHelp:"textHelp",textInactive:"textInactive",borderNeutral:"borderNeutral",contentBackground1:"contentBackground1",contentBackground2:"contentBackground2",contentBackground3:"contentBackground3",contentBackground4:"contentBackground4",contentBackground5:"contentBackground5",linkDefault:"linkDefault",linkHover:"linkHover"}},6535:function(e){e.exports=function(){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}var t=/^\s+/,a=/\s+$/;function n(r,o){if(o=o||{},(r=r||"")instanceof n)return r;if(!(this instanceof n))return new n(r,o);var i=function(n){var r,o,i,s={r:0,g:0,b:0},c=1,l=null,d=null,u=null,h=!1,g=!1;return"string"==typeof n&&(n=function(e){e=e.replace(t,"").replace(a,"").toLowerCase();var n,r=!1;if(k[e])e=k[e],r=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};return(n=D.rgb.exec(e))?{r:n[1],g:n[2],b:n[3]}:(n=D.rgba.exec(e))?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=D.hsl.exec(e))?{h:n[1],s:n[2],l:n[3]}:(n=D.hsla.exec(e))?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=D.hsv.exec(e))?{h:n[1],s:n[2],v:n[3]}:(n=D.hsva.exec(e))?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=D.hex8.exec(e))?{r:x(n[1]),g:x(n[2]),b:x(n[3]),a:M(n[4]),format:r?"name":"hex8"}:(n=D.hex6.exec(e))?{r:x(n[1]),g:x(n[2]),b:x(n[3]),format:r?"name":"hex"}:(n=D.hex4.exec(e))?{r:x(n[1]+""+n[1]),g:x(n[2]+""+n[2]),b:x(n[3]+""+n[3]),a:M(n[4]+""+n[4]),format:r?"name":"hex8"}:!!(n=D.hex3.exec(e))&&{r:x(n[1]+""+n[1]),g:x(n[2]+""+n[2]),b:x(n[3]+""+n[3]),format:r?"name":"hex"}}(n)),"object"==e(n)&&(B(n.r)&&B(n.g)&&B(n.b)?(r=n.r,o=n.g,i=n.b,s={r:255*P(r,255),g:255*P(o,255),b:255*P(i,255)},h=!0,g="%"===String(n.r).substr(-1)?"prgb":"rgb"):B(n.h)&&B(n.s)&&B(n.v)?(l=F(n.s),d=F(n.v),s=function(e,t,a){e=6*P(e,360),t=P(t,100),a=P(a,100);var n=Math.floor(e),r=e-n,o=a*(1-t),i=a*(1-r*t),s=a*(1-(1-r)*t),c=n%6;return{r:255*[a,i,o,o,s,a][c],g:255*[s,a,a,i,o,o][c],b:255*[o,o,s,a,a,i][c]}}(n.h,l,d),h=!0,g="hsv"):B(n.h)&&B(n.s)&&B(n.l)&&(l=F(n.s),u=F(n.l),s=function(e,t,a){var n,r,o;function i(e,t,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?e+6*(t-e)*a:a<.5?t:a<2/3?e+(t-e)*(2/3-a)*6:e}if(e=P(e,360),t=P(t,100),a=P(a,100),0===t)n=r=o=a;else{var s=a<.5?a*(1+t):a+t-a*t,c=2*a-s;n=i(c,s,e+1/3),r=i(c,s,e),o=i(c,s,e-1/3)}return{r:255*n,g:255*r,b:255*o}}(n.h,l,u),h=!0,g="hsl"),n.hasOwnProperty("a")&&(c=n.a)),c=v(c),{ok:h,format:n.format||g,r:Math.min(255,Math.max(s.r,0)),g:Math.min(255,Math.max(s.g,0)),b:Math.min(255,Math.max(s.b,0)),a:c}}(r);this._originalInput=r,this._r=i.r,this._g=i.g,this._b=i.b,this._a=i.a,this._roundA=Math.round(100*this._a)/100,this._format=o.format||i.format,this._gradientType=o.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=i.ok}function r(e,t,a){e=P(e,255),t=P(t,255),a=P(a,255);var n,r,o=Math.max(e,t,a),i=Math.min(e,t,a),s=(o+i)/2;if(o==i)n=r=0;else{var c=o-i;switch(r=s>.5?c/(2-o-i):c/(o+i),o){case e:n=(t-a)/c+(t<a?6:0);break;case t:n=(a-e)/c+2;break;case a:n=(e-t)/c+4}n/=6}return{h:n,s:r,l:s}}function o(e,t,a){e=P(e,255),t=P(t,255),a=P(a,255);var n,r,o=Math.max(e,t,a),i=Math.min(e,t,a),s=o,c=o-i;if(r=0===o?0:c/o,o==i)n=0;else{switch(o){case e:n=(t-a)/c+(t<a?6:0);break;case t:n=(a-e)/c+2;break;case a:n=(e-t)/c+4}n/=6}return{h:n,s:r,v:s}}function i(e,t,a,n){var r=[A(Math.round(e).toString(16)),A(Math.round(t).toString(16)),A(Math.round(a).toString(16))];return n&&r[0].charAt(0)==r[0].charAt(1)&&r[1].charAt(0)==r[1].charAt(1)&&r[2].charAt(0)==r[2].charAt(1)?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function s(e,t,a,n){return[A(_(n)),A(Math.round(e).toString(16)),A(Math.round(t).toString(16)),A(Math.round(a).toString(16))].join("")}function c(e,t){t=0===t?0:t||10;var a=n(e).toHsl();return a.s-=t/100,a.s=C(a.s),n(a)}function l(e,t){t=0===t?0:t||10;var a=n(e).toHsl();return a.s+=t/100,a.s=C(a.s),n(a)}function d(e){return n(e).desaturate(100)}function u(e,t){t=0===t?0:t||10;var a=n(e).toHsl();return a.l+=t/100,a.l=C(a.l),n(a)}function h(e,t){t=0===t?0:t||10;var a=n(e).toRgb();return a.r=Math.max(0,Math.min(255,a.r-Math.round(-t/100*255))),a.g=Math.max(0,Math.min(255,a.g-Math.round(-t/100*255))),a.b=Math.max(0,Math.min(255,a.b-Math.round(-t/100*255))),n(a)}function g(e,t){t=0===t?0:t||10;var a=n(e).toHsl();return a.l-=t/100,a.l=C(a.l),n(a)}function p(e,t){var a=n(e).toHsl(),r=(a.h+t)%360;return a.h=r<0?360+r:r,n(a)}function f(e){var t=n(e).toHsl();return t.h=(t.h+180)%360,n(t)}function m(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var a=n(e).toHsl(),r=[n(e)],o=360/t,i=1;i<t;i++)r.push(n({h:(a.h+i*o)%360,s:a.s,l:a.l}));return r}function w(e){var t=n(e).toHsl(),a=t.h;return[n(e),n({h:(a+72)%360,s:t.s,l:t.l}),n({h:(a+216)%360,s:t.s,l:t.l})]}function y(e,t,a){t=t||6,a=a||30;var r=n(e).toHsl(),o=360/a,i=[n(e)];for(r.h=(r.h-(o*t>>1)+720)%360;--t;)r.h=(r.h+o)%360,i.push(n(r));return i}function b(e,t){t=t||6;for(var a=n(e).toHsv(),r=a.h,o=a.s,i=a.v,s=[],c=1/t;t--;)s.push(n({h:r,s:o,v:i})),i=(i+c)%1;return s}n.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,a,n=this.toRgb();return e=n.r/255,t=n.g/255,a=n.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))},setAlpha:function(e){return this._a=v(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=o(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=o(this._r,this._g,this._b),t=Math.round(360*e.h),a=Math.round(100*e.s),n=Math.round(100*e.v);return 1==this._a?"hsv("+t+", "+a+"%, "+n+"%)":"hsva("+t+", "+a+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var e=r(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=r(this._r,this._g,this._b),t=Math.round(360*e.h),a=Math.round(100*e.s),n=Math.round(100*e.l);return 1==this._a?"hsl("+t+", "+a+"%, "+n+"%)":"hsla("+t+", "+a+"%, "+n+"%, "+this._roundA+")"},toHex:function(e){return i(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(e,t,a,n,r){var o=[A(Math.round(e).toString(16)),A(Math.round(t).toString(16)),A(Math.round(a).toString(16)),A(_(n))];return r&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*P(this._r,255))+"%",g:Math.round(100*P(this._g,255))+"%",b:Math.round(100*P(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+Math.round(100*P(this._r,255))+"%, "+Math.round(100*P(this._g,255))+"%, "+Math.round(100*P(this._b,255))+"%)":"rgba("+Math.round(100*P(this._r,255))+"%, "+Math.round(100*P(this._g,255))+"%, "+Math.round(100*P(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(S[i(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+s(this._r,this._g,this._b,this._a),a=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var o=n(e);a="#"+s(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+a+")"},toString:function(e){var t=!!e;e=e||this._format;var a=!1,n=this._a<1&&this._a>=0;return t||!n||"hex"!==e&&"hex6"!==e&&"hex3"!==e&&"hex4"!==e&&"hex8"!==e&&"name"!==e?("rgb"===e&&(a=this.toRgbString()),"prgb"===e&&(a=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(a=this.toHexString()),"hex3"===e&&(a=this.toHexString(!0)),"hex4"===e&&(a=this.toHex8String(!0)),"hex8"===e&&(a=this.toHex8String()),"name"===e&&(a=this.toName()),"hsl"===e&&(a=this.toHslString()),"hsv"===e&&(a=this.toHsvString()),a||this.toHexString()):"name"===e&&0===this._a?this.toName():this.toRgbString()},clone:function(){return n(this.toString())},_applyModification:function(e,t){var a=e.apply(null,[this].concat([].slice.call(t)));return this._r=a._r,this._g=a._g,this._b=a._b,this.setAlpha(a._a),this},lighten:function(){return this._applyModification(u,arguments)},brighten:function(){return this._applyModification(h,arguments)},darken:function(){return this._applyModification(g,arguments)},desaturate:function(){return this._applyModification(c,arguments)},saturate:function(){return this._applyModification(l,arguments)},greyscale:function(){return this._applyModification(d,arguments)},spin:function(){return this._applyModification(p,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(y,arguments)},complement:function(){return this._applyCombination(f,arguments)},monochromatic:function(){return this._applyCombination(b,arguments)},splitcomplement:function(){return this._applyCombination(w,arguments)},triad:function(){return this._applyCombination(m,[3])},tetrad:function(){return this._applyCombination(m,[4])}},n.fromRatio=function(t,a){if("object"==e(t)){var r={};for(var o in t)t.hasOwnProperty(o)&&(r[o]="a"===o?t[o]:F(t[o]));t=r}return n(t,a)},n.equals=function(e,t){return!(!e||!t)&&n(e).toRgbString()==n(t).toRgbString()},n.random=function(){return n.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},n.mix=function(e,t,a){a=0===a?0:a||50;var r=n(e).toRgb(),o=n(t).toRgb(),i=a/100;return n({r:(o.r-r.r)*i+r.r,g:(o.g-r.g)*i+r.g,b:(o.b-r.b)*i+r.b,a:(o.a-r.a)*i+r.a})},n.readability=function(e,t){var a=n(e),r=n(t);return(Math.max(a.getLuminance(),r.getLuminance())+.05)/(Math.min(a.getLuminance(),r.getLuminance())+.05)},n.isReadable=function(e,t,a){var r,o,i,s,c,l=n.readability(e,t);switch(o=!1,(i=a,"AA"!==(s=((i=i||{level:"AA",size:"small"}).level||"AA").toUpperCase())&&"AAA"!==s&&(s="AA"),"small"!==(c=(i.size||"small").toLowerCase())&&"large"!==c&&(c="small"),r={level:s,size:c}).level+r.size){case"AAsmall":case"AAAlarge":o=l>=4.5;break;case"AAlarge":o=l>=3;break;case"AAAsmall":o=l>=7}return o},n.mostReadable=function(e,t,a){var r,o,i,s,c=null,l=0;o=(a=a||{}).includeFallbackColors,i=a.level,s=a.size;for(var d=0;d<t.length;d++)(r=n.readability(e,t[d]))>l&&(l=r,c=n(t[d]));return n.isReadable(e,c,{level:i,size:s})||!o?c:(a.includeFallbackColors=!1,n.mostReadable(e,["#fff","#000"],a))};var k=n.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},S=n.hexNames=function(e){var t={};for(var a in e)e.hasOwnProperty(a)&&(t[e[a]]=a);return t}(k);function v(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function P(e,t){(function(e){return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)})(e)&&(e="100%");var a=function(e){return"string"==typeof e&&-1!=e.indexOf("%")}(e);return e=Math.min(t,Math.max(0,parseFloat(e))),a&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function C(e){return Math.min(1,Math.max(0,e))}function x(e){return parseInt(e,16)}function A(e){return 1==e.length?"0"+e:""+e}function F(e){return e<=1&&(e=100*e+"%"),e}function _(e){return Math.round(255*parseFloat(e)).toString(16)}function M(e){return x(e)/255}var I,W,O,D=(W="[\\s|\\(]+("+(I="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+I+")[,|\\s]+("+I+")\\s*\\)?",O="[\\s|\\(]+("+I+")[,|\\s]+("+I+")[,|\\s]+("+I+")[,|\\s]+("+I+")\\s*\\)?",{CSS_UNIT:new RegExp(I),rgb:new RegExp("rgb"+W),rgba:new RegExp("rgba"+O),hsl:new RegExp("hsl"+W),hsla:new RegExp("hsla"+O),hsv:new RegExp("hsv"+W),hsva:new RegExp("hsva"+O),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function B(e){return!!D.CSS_UNIT.exec(e)}return n}()}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={exports:{}};return a[e].call(o.exports,o,o.exports,r),o.exports}var o={};(()=>{var e=o;Object.defineProperty(e,"__esModule",{value:!0}),e.createTheme=e.Palette=e.Color=void 0;var t=r(2317);Object.defineProperty(e,"Color",{enumerable:!0,get:function(){return t.Color}});var a=r(5939);Object.defineProperty(e,"Palette",{enumerable:!0,get:function(){return a.Palette}});var n=r(6893);Object.defineProperty(e,"createTheme",{enumerable:!0,get:function(){return n.createTheme}})})();var i=t;for(var s in o)i[s]=o[s];o.__esModule&&Object.defineProperty(i,"__esModule",{value:!0})},877:()=>{},67:()=>{},317:(e,t,a)=>{"use strict";var n=a(189),r=a(141);const o=a(675).qT.System,i=e=>Object.entries(e).reduce(((e,[t,a])=>`${e}--workspace-palette-${t}: ${a};`),""),s=(e,t)=>({selectedTab:"dark"===t?e.background3:e.background1});new class{constructor(e){this.providerStorage=e,this.getVarsByScheme=e=>"dark"===e?this.darkPaletteVars:this.lightPaletteVars,this.setWorkspaceStorageProxy=e=>{this.workspaceStorage=e},this.trySynchronizeWorkspaceStorage=async()=>{if(this.workspaceStorage){const e=this.getScheme();if(await this.workspaceStorage.setItem(r.A.SelectedColorScheme,e),this.darkPaletteVars&&this.lightPaletteVars)if("dark"===e||"light"===e)await this.workspaceStorage.setItem(r.A.ThemePaletteSheet,`:root{${this.getVarsByScheme(e)}}`);else{const e=`@media (prefers-color-scheme: dark){:root {${this.getVarsByScheme("dark")}}}`,t=`@media (prefers-color-scheme: light){:root{${this.getVarsByScheme("light")}}}`;await this.workspaceStorage.setItem(r.A.ThemePaletteSheet,`${t}${e}`)}}},this.setPalettes=async({light:e,dark:t})=>{this.lightPaletteVars=i({...e,...s(e,"light")}),this.darkPaletteVars=i({...t,...s(t,"dark")})}}setScheme(e){this.providerStorage.setItem(r.A.SelectedColorScheme,e)}getScheme(){return null===this.providerStorage.getItem(r.A.SelectedColorScheme)&&this.providerStorage.setItem(r.A.SelectedColorScheme,o),this.providerStorage.getItem(r.A.SelectedColorScheme)}}(n)},367:(e,t,a)=>{"use strict";a.d(t,{N:()=>w,A:()=>m});var n=a(723),r=a(79),o=a(675),i=a(70),s=a(786),c=a(333);var l=a(326);const d=(0,a(102).A)(`${"undefined"!=typeof fin&&fin?.me.identity.uuid}-enterprise-bookmarks`);var u=a(13);const h=e=>({identity:e,openfinWindow:fin.Window.wrapSync(e),_bookmarks:{_createBookmarkNode:async e=>(async e=>(await d()).dispatch(l.Hc.CreateBookmarkNode,e))(e),_getBookmarkNode:async e=>(async e=>(await d()).dispatch(l.Hc.GetBookmarkNode,e))(e),_searchBookmarkNodes:async e=>(async e=>(await d()).dispatch(l.Hc.SearchBookmarkNodes,e))(e),_updateBookmarkNode:async e=>(async e=>(await d()).dispatch(l.Hc.UpdateBookmarkNode,e))(e),_deleteBookmarkNode:async e=>(async e=>(await d()).dispatch(l.Hc.DeleteBookmarkNode,e))(e)},getPages:async()=>(await(0,r.bW)(e)).dispatch(r.OF.GetPagesForWindow,e),getPage:async t=>(await(0,r.bW)(e)).dispatch(r.OF.GetPageForWindow,{identity:e,pageId:t}),addPage:async t=>(0,u.Nt)().Browser.wrapSync(e)._addPage(t),_addPage:async(t,a)=>{const n=await(0,r.bW)(e),o={identity:e,page:t,insertionIndex:a?.index};return n.dispatch(r.OF.AddPage,o)},removePage:async t=>(await(0,r.bW)(e)).dispatch(r.OF.DetachPagesFromWindow,{identity:e,pageIds:[t]}),reparentPage:async t=>(0,u.Nt)().Browser.wrapSync(e)._reparentPage(t),_reparentPage:async t=>{const{pageId:a}=t,n=await(0,r.bW)(e),o=(await n.dispatch(r.OF.GetAllAttachedPages,void 0)).find((({pageId:e})=>e===a));if(!o)throw new Error(`Reparent Page Error: Target page with pageId ${a} not found`);o.multiInstanceViewBehavior="reparent";const i={identity:e,pages:[o],insertionIndex:t.index};return n.dispatch(r.OF.AttachPagesToWindow,i)},setActivePage:async t=>(await(0,r.bW)(e)).dispatch(r.OF.SetActivePage,{identity:e,pageId:t}),updatePage:async t=>{const a=await(0,r.bW)(e);return t.identity=e,a.dispatch(r.OF.UpdatePageForWindow,t)},reorderPages:async t=>{const a=await(0,r.bW)(e);return t.identity=e,a.dispatch(r.OF.ReorderPagesForWindow,t)},_openGlobalContextMenu:async t=>{const a=await(0,r.bW)(e);return t.identity=e,a.dispatch(r.OF.OpenGlobalContextMenuInternal,t)},replaceToolbarOptions:async t=>{await(0,r.bW)(e);const a=fin.Window.wrapSync(e);await a.updateOptions({workspacePlatform:{toolbarOptions:t}})},replaceWindowStateButtonOptions:async t=>{await(0,r.bW)(e);const a=fin.Window.wrapSync(e);await a.updateOptions({workspacePlatform:{windowStateButtonOptions:t}})},updateBrowserWindowTitle:async t=>{const a=fin.Window.wrapSync(e);"string"!=typeof t?await a.updateOptions({workspacePlatform:{title:t}}):console.warn("Type string for window title is deprecated, please use WindowTitle type instead",t)},_openViewTabContextMenu:async t=>{const a=await(0,r.bW)(e);return t.identity=e,a.dispatch(r.OF.OpenViewTabContextMenuInternal,t)},_openPageTabContextMenu:async t=>{const a=await(0,r.bW)(e);return t.identity=e,a.dispatch(r.OF.OpenPageTabContextMenuInternal,t)},_openSaveModal:async t=>{await(0,r.bW)(e);return(await(0,l.p4)(e)).dispatch(l.aQ.OpenSaveModalInternal,t)},_getLayoutsWithSelectedViews:async()=>(await(0,l.p4)(e)).dispatch(l.aQ.GetLayoutsWithSelectedViewsInternal,e),_openSaveButtonContextMenu:async t=>{const a=await(0,r.bW)(e);return t.identity=e,a.dispatch(r.OF.OpenSaveButtonContextMenuInternal,t)},_addDefaultPage:async t=>{const a=await(0,r.bW)(e);return t.identity=e,a.dispatch(r.OF.AddDefaultPage,t)},_trackRemovedTab:async t=>(await(0,r.bW)(e)).dispatch(r.OF.TrackRemovedTabInternal,t),_restoreRemovedTab:async t=>(await(0,r.bW)(e)).dispatch(r.OF.RestoreRemovedTabInternal,t),_trackVisitedSite:async t=>(await(0,r.bW)(e)).dispatch(r.OF.TrackVisitedSiteInternal,t),_getRecentlyVisitedSites:async t=>(await(0,r.bW)(e)).dispatch(r.OF.GetRecentlyVisitedSitesInternal,t),_getFrequentlyVisitedSites:async t=>(await(0,r.bW)(e)).dispatch(r.OF.GetFrequentlyVisitedSitesInternal,t),_searchSites:async t=>(await(0,r.bW)(e)).dispatch(r.OF.SearchSitesInternal,{identity:e,req:t}),_getSearchProviders:async()=>(await(0,r.bW)(e)).dispatch(r.OF.GetSearchProvidersInternal,{identity:e}),_getCuratedContent:async t=>(await(0,r.bW)(e)).dispatch(r.OF.GetCuratedContentInternal,{identity:e,req:t}),_handleRequestNavigation:async t=>(await(0,r.bW)(e)).dispatch(r.OF.HandleRequestNavigationInternal,t)}),g=e=>{const t=fin.Platform.wrapSync(e);return{wrapSync:e=>h(e),createWindow:async a=>{const n=(()=>{const e=`browser-window-startup-${(0,c.N)()}`;return s.A.markStart(e),e})();(e=>{fin.Application.wrapSync({uuid:fin.me.identity.uuid}).once("window-shown",(()=>{s.A.markAndMeasure("browser-window-shown",e)}))})(n),await(0,r.bW)(e);const o=await t.createWindow(a);return(e=>{s.A.markAndMeasure("browser-window-started",e)})(n),h(o.identity)},getAllAttachedPages:async()=>(await(0,r.bW)(e)).dispatch(r.OF.GetAllAttachedPages,void 0),getAllWindows:async()=>{await(0,r.bW)(e);return(await(0,i.Io)()).map((e=>h(e.identity)))},getUniquePageTitle:async t=>(await(0,r.bW)(e)).dispatch(r.OF.GetUniquePageTitle,t),getLastFocusedWindow:async()=>(await(0,r.bW)(e)).dispatch(r.OF.GetLastFocusedBrowserWindow,void 0)}},p=e=>({createPage:async t=>(await(0,r.bW)(e)).dispatch(r.OF.CreateSavedPageInternal,t),deletePage:async t=>(await(0,r.bW)(e)).dispatch(r.OF.DeleteSavedPageInternal,t),updatePage:async t=>(await(0,r.bW)(e)).dispatch(r.OF.UpdateSavedPageInternal,t),getPage:async t=>(await(0,r.bW)(e)).dispatch(r.OF.GetSavedPage,t),getPages:async t=>(await(0,r.bW)(e)).dispatch(r.OF.GetSavedPages,t),savePage:async t=>(await(0,r.bW)(e)).dispatch(r.OF.SavePage,t),createWorkspace:async t=>(await(0,r.N)(e)).dispatch(r.OF.CreateSavedWorkspace,t),deleteWorkspace:async t=>{const a=w(),n=await a.getCurrentWorkspace();if(n.workspaceId===t)throw new Error(`Cannot delete current active workspace ${n.title}`);return(await(0,r.N)(e)).dispatch(r.OF.DeleteSavedWorkspace,t)},updateWorkspace:async t=>(await(0,r.N)(e)).dispatch(r.OF.UpdateSavedWorkspace,t),getWorkspace:async t=>(await(0,r.N)(e)).dispatch(r.OF.GetSavedWorkspace,t),getWorkspaces:async t=>(await(0,r.N)(e)).dispatch(r.OF.GetSavedWorkspaces,t),saveWorkspace:async t=>(await(0,r.N)(e)).dispatch(r.OF.SaveWorkspace,t),getDockProviderConfig:async t=>(await(0,r.N)(e)).dispatch(r.OF.GetDockProviderConfig,t),saveDockProviderConfig:async t=>(await(0,r.N)(e)).dispatch(r.OF.SaveDockProviderConfig,t)});var f=a(396);const m=e=>{const t=fin.Platform.wrapSync(e);let a;return Object.assign(t,{applySnapshot:async(t,a)=>{if("string"!=typeof t&&!t?.windows)throw new Error("Not a valid browser snapshot");return fin.Platform.wrapSync(e).applySnapshot(t,a)},getSnapshot:()=>fin.Platform.wrapSync(e).getSnapshot().then((e=>e)),getViewSnapshot:t=>fin.Platform.wrapSync(e).getViewSnapshot(t),createView:(t,a,n)=>fin.Platform.wrapSync(e).createView(t,a,n),launchApp:async t=>{console.warn("launchApp method is deprecated. It is recommended to use createView - https://developers.openfin.co/of-docs/docs/platform-getting-started#add-a-view-to-an-existing-window or  createWindow - https://developers.openfin.co/of-docs/docs/platform-getting-started#create-a-platform-window instead."),t.target||(t.target={uuid:n.$h,name:n.vL,entityType:n.fT||"unknown"});return(await(0,r.N)(e)).dispatch(r.OF.LaunchApp,t)},_invokeCustomAction:async(t,a)=>{const n=await(0,r.N)(e),i={actionId:t,payload:{...a,callerType:a.callerType||o.vc.API}};return n.dispatch(r.OF.InvokeCustomActionInternal,i)},_requestQuitPlatformDialog:async t=>(await(0,r.N)(e)).dispatch(r.OF.RequestQuitPlatformDialogInternal,t),getCurrentWorkspace:async()=>(await(0,r.N)(e)).dispatch(r.OF.GetCurrentWorkspace,void 0),applyWorkspace:async(t,a)=>(await(0,r.N)(e)).dispatch(r.OF.ApplyWorkspace,{...t,options:a}),setActiveWorkspace:async t=>(await(0,r.N)(e)).dispatch(r.OF.SetActiveWorkspace,t),getLanguage:async()=>(await(0,r.N)(e)).dispatch(r.OF.GetLanguage),_getLanguageResources:async()=>(await(0,r.N)(e)).dispatch(r.OF.GetLanguageResourcesInternal),setLanguage:async t=>(await(0,r.N)(e)).dispatch(r.OF.SetLanguage,t),_raiseAnalytics:async t=>{if(a||(a=await(0,r.KZ)(e)),"object"==typeof a&&a?.analytics?.isSupported){return(await(0,r.N)(e)).dispatch(r.OF.Analytics,t)}e.uuid},getNotificationsConfig:async()=>(await(0,r.N)(e)).dispatch(r.OF.GetNotificationsConfig),_refreshBookmarksInternal:async()=>(await(0,r.N)(e)).dispatch(r.OF.RefreshBookmarksInternal),_launchBookmarkInternal:async t=>(await(0,r.N)(e)).dispatch(r.OF.LaunchBookmarkInternal,t),_updateDockFavoritesInternal:async t=>(await(0,r.N)(e)).dispatch(r.OF.UpdateDockFavoritesInternal,t),_updateContentMenuInternal:async t=>(await(0,r.N)(e)).dispatch(r.OF.UpdateContentMenuInternal,t),_launchDockEntryInternal:async t=>(await(0,r.N)(e)).dispatch(r.OF.LaunchDockEntryInternal,t),_setDockFavoritesInternal:async t=>(await(0,r.N)(e)).dispatch(r.OF.SetDockFavoritesOrderInternal,t),_setDockWorkspaceButtonsOrderInternal:async t=>(await(0,r.N)(e)).dispatch(r.OF.SetDockWorkspaceButtonsOrderInternal,t),_removeDockFavoriteInternal:async t=>(await(0,r.N)(e)).dispatch(r.OF.RemoveDockFavoriteInternal,t),_addDockFavoriteInternal:async t=>(await(0,r.N)(e)).dispatch(r.OF.AddDockFavoriteInternal,t),_navigateContentMenuInternal:async t=>(await(0,r.N)(e)).dispatch(r.OF.NavigateContentMenuInternal,t),_openDockWorkspacesContextMenuInternal:async()=>(await(0,r.N)(e)).dispatch(r.OF.GetDockWorkspacesContextMenuInternal),_handleDockWorkspacesMenuResponseInternal:async t=>(await(0,r.N)(e)).dispatch(r.OF.HandleDockWorkspacesMenuResponseInternal,t),Theme:(0,f.NA)(e),Browser:g(e),Storage:p(e)})},w=()=>m(fin.me.identity)},396:(e,t,a)=>{"use strict";a.d(t,{NA:()=>i});a(181),a(70),a(326);var n=a(102);var r;!function(e){e.UpdatePlatformThemeScheme="update-platform-theme-scheme"}(r||(r={}));(0,n.A)("of-workspace-notifications-sync");a(695);var o=a(79);a(317);const i=e=>({getThemes:async()=>(await(0,o.N)(e)).dispatch(o.OF.GetThemes,void 0),setSelectedScheme:async t=>(await(0,o.N)(e)).dispatch(o.OF.SetSelectedScheme,t),getSelectedScheme:async()=>(await(0,o.N)(e)).dispatch(o.OF.GetSelectedScheme,void 0)})},13:(e,t,a)=>{"use strict";a.d(t,{Nt:()=>u.N,Ag:()=>u.A});a(675);var n=a(723);a(181);var r=a(70);a(365);const o=(e,t=0)=>{let a,n,r=!1;const o=async n=>{const i=await e(...n);if(r){await new Promise((e=>setTimeout(e,t)));const e=a;return a=void 0,r=!1,o(e)}return i};return(...e)=>(n?(r=!0,a=e):n=o(e).catch((e=>{throw console.error("makeDebouncedFunc",e),e})).finally((()=>{n=void 0})),n)};var i;!function(e){e.Top="top",e.Below="below"}(i||(i={}));const s=async(e,t)=>{try{return e?await e.getBounds():t}catch(e){return console.warn("getParentWindowBounds - Failed to get parent window bounds",e),t}},c=async e=>{try{return!!e&&"maximized"===await e.getState()}catch(e){return console.warn("parentWindowMaximized - Failed to get parent window state",e),!1}};o((async function(e,t,a,n,o){const l=t.getBoundingClientRect(),d=await async function(e,t,a,n,o,l){const d=!!e&&(0,r.Iq)(e),u=await s(d,l);if(n===i.Below){if(!d||await c(d)){const e=d?(await(0,r.ur)(u)).availableRect:(await fin.System.getMonitorInfo()).primaryMonitor.availableRect;return{left:(0,r.V1)(e).left-t/2,top:o?e.bottom-128:e.bottom+12,width:t,height:a}}return{left:(0,r.V1)(u).left-t/2,top:o?u.bottom-128:u.bottom+12,width:t,height:a}}if(!d||await c(d)){const e=d?(await(0,r.ur)(u)).availableRect:(await fin.System.getMonitorInfo()).primaryMonitor.availableRect;return{left:(0,r.V1)(e).left-t/2,top:e.top+20,width:t,height:a}}return{left:(0,r.V1)(u).left-t/2,top:u.top+20,width:t,height:a}}(e,l.width,l.height,a,n,o);if(0===d.width||0===d.height)return;const u=(0,r.Tv)();await u.setBounds(d),await u.show();const h=setTimeout((()=>u.close()),n?5e3:3e3),g=()=>{clearTimeout(h),u.close()};if(e){const t=(0,r.Iq)(e);t.on("bounds-changing",(()=>g())),t.on("blurred",(()=>g())),t.on("maximized",(()=>g())),t.on("minimized",(()=>g())),t.on("restored",(()=>g()))}}),10);a(277),a(957);var l=a(438);a(940);__webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");const d=__webpack_require__(/*! i18next */ "./node_modules/i18next/dist/cjs/i18next.js");a.n(d)().t;a(678),a(326);a(79);var u=a(367);new class{constructor(){this.queue=[],this.locked=!1}lock(){return new Promise((e=>{this.locked?this.queue.push(e):(this.locked=!0,e())}))}unlock(){if(this.queue.length>0){const e=this.queue.shift();e&&e()}else this.locked=!1}};new Map;const h=((e,t)=>{const a=e;return a.workspacePlatform||(a.workspacePlatform={}),a.workspacePlatform._internalDeferShowOptions={setAsForeground:!!t,deferShowEnabled:!0,autoShow:a.workspacePlatform?._internalAutoShow||a.workspacePlatform?._internalDeferShowOptions?.autoShow||void 0===a.autoShow||a.autoShow},a.autoShow=!1,a})({alwaysOnTop:!0,autoShow:!1,frame:!1,resizable:!1,showTaskbarIcon:!1});!function(e=h){const t=new Map}();var g=a(141),p=a(189);a(523);function f(e,t){return async(a,...n)=>{e.has(a)&&e.get(a).forEach((e=>e(...n))),t&&await t({event:a,payload:n})}}function m(e,t){return t&&t((t=>{const{event:a,payload:n}=t;e.has(a)&&e.get(a).forEach((e=>e(...n)))})),(t,a)=>{e.has(t)||e.set(t,new Set),e.get(t).add(a)}}function w(e){return(t,a)=>{e.has(t)||e.set(t,new Set);const n=e.get(t),r=(...e)=>{a(...e),n.delete(r)};n.add(r)}}function y(e){return(t,a)=>{e.has(t)&&e.get(t).delete(a)}}r.Q.BrowserMenu;(function(e){const t=new Map;f(t,(t=>n.cI&&fin.InterApplicationBus.publish(e,t))),m(t,(t=>n.cI&&fin.InterApplicationBus.subscribe({uuid:fin.me.uuid},e,t))),y(t),w(t)})("window.menu"),o((()=>(0,l.v1)().getChildWindows()),500);new Map;a(317);var b=a(236);a.n(b)()((async()=>{const e=await fin.Platform.getCurrentSync().Application.getChildWindows();let t,a=!1;for(const n of e)if(n.identity.name===r.Q.BrowserMenu||n.identity.name===r.Q.BrowserSaveMenu?t=n:await(0,r.hb)(n.identity)&&(a=!0),a)break;!a&&t&&t.close()}),100,{leading:!1,trailing:!0});var k,S;!function(e){e.Save="Save",e.SaveAs="SaveAs"}(k||(k={})),function(e){e.GlobalMenu="global-menu",e.ContextMenu="context-menu",e.RenameSupertab="rename-supertab",e.AddEditBookmark="add-edit-bookmark",e.DropdownMenu="dropdown-menu"}(S||(S={}));a(862);const v=__webpack_require__(/*! idb-keyval */ "./node_modules/idb-keyval/dist/index.js"),P=(e,t)=>(0,v.createStore)(e+"-"+fin.me.uuid,t),C=(e,t)=>{const a=P(e,t);return(async(e,t,a)=>{const n=p.getItem(g.A.HasMovedStore),r=n?JSON.parse(n):{};if(r&&r[a])return;r[a]=!0,p.setItem(g.A.HasMovedStore,JSON.stringify(r));const o=await(0,v.entries)(e);await(0,v.setMany)(o,t)})((0,v.createStore)(e,t),a,e),a};n.AT&&n.cI&&C("openfin-home-pages","pages");n.AT&&n.cI&&P("openfin-enterprise-tab-history","removed-tab-stack"),n.AT&&n.cI&&P("openfin-enterprise-site-history","visited-sites");var x;!function(e){e.Label="normal",e.Separator="separator",e.Submenu="submenu",e.Checkbox="checkbox"}(x||(x={}));x.Separator;a(257);var A;!function(e){e[e.TopLeft=0]="TopLeft",e[e.TopRight=1]="TopRight",e[e.BottomLeft=2]="BottomLeft",e[e.BottomRight=3]="BottomRight",e[e.Center=4]="Center"}(A||(A={}));var F=a(102);(0,F.A)(`${"undefined"!=typeof fin&&fin?.me.identity.uuid}-enterprise-dock`),n.AT&&n.cI&&P("dock-provider-configs","dock-provider-configs");a(396);n.AT&&n.cI&&C("openfin-workspace-platform-workspaces","workspaces");a(250);r.$p.uuid,r.Q.BrowserAddressSearchPrefix;a(413),a(179)},413:(e,t,a)=>{"use strict"},675:(e,t,a)=>{"use strict";a.d(t,{qT:()=>o,vc:()=>g});var n,r,o,i,s,c,l,d,u,h,g;a(179),a(250);!function(e){e.UrlChange="URL_CHANGE",e.ViewAdded="VIEW_ADDED",e.ViewRemoved="VIEW_REMOVED",e.PageContextAdded="PAGE_CONTEXT_ADDED",e.PageContextRemoved="PAGE_CONTEXT_REMOVED"}(n||(n={})),function(e){e.NewWindow="NewWindow",e.NewPage="NewPage",e.SavePage="SavePage",e.SavePageAs="SavePageAs",e.Print="Print",e.PrintAll="PrintAll",e.PrintScreen="PrintScreen",e.CloseWindow="CloseWindow",e.RestoreChanges="RestoreChanges",e.SaveWorkspace="SaveWorkspace",e.SaveWorkspaceAs="SaveWorkspaceAs",e.RenameWorkspace="RenameWorkspace",e.SwitchWorkspace="SwitchWorkspace",e.DeleteWorkspace="DeleteWorkspace",e.Downloads="Downloads",e.OpenStorefront="OpenStorefront",e.Appearance="Appearance",e.Quit="Quit",e.Custom="Custom"}(r||(r={})),function(e){e.Light="light",e.Dark="dark",e.System="system"}(o||(o={})),function(e){e.Close="Close",e.Duplicate="Duplicate",e.Rename="Rename",e.Save="Save",e.SaveAs="Save As",e.NewPage="New Page",e.DeletePage="Delete Page",e.SaveWorkspaceAs="SaveWorkspaceAs",e.Refresh="Refresh",e.CloseOthers="Close others",e.Delete="Delete",e.Print="Print",e.PrintAll="PrintAll",e.PrintScreen="PrintScreen",e.Custom="Custom"}(i||(i={})),function(e){e.Lock="Lock",e.ShowHideTabs="ShowHideTabs",e.AddToChanel="AddToChannel",e.Print="Print",e.Pin="Pin"}(s||(s={})),function(e){e.EditName="Edit Name",e.Move="Move",e.Delete="Delete"}(c||(c={})),function(e){e.NewView="NewView",e.DuplicateViews="DuplicateView",e.OpenWithDefaultBrowser="OpenWithDefaultBrowser",e.ReloadViews="ReloadTab",e.CloseViews="CloseTab",e.AddToChannel="AddToChannel",e.RemoveFromChannel="RemoveFromChannel",e.Back="Back",e.Forward="Forward",e.Print="Print",e.PrintAll="PrintAll",e.PrintScreen="PrintScreen",e.Custom="Custom"}(l||(l={})),function(e){e.ShowHideTabs="ShowHideTabs",e.ColorLinking="ColorLinking",e.PresetLayouts="PresetLayouts",e.LockUnlockPage="LockUnlockPage",e.SaveMenu="SaveMenu",e.SavePage="SavePage",e.Minimise="Minimise",e.Maximise="Maximise",e.Close="Close",e.Custom="Custom"}(d||(d={})),function(e){e.SavePage="SavePage",e.SaveWorkspace="SaveWorkspace",e.SavePageAs="SavePageAs",e.SaveWorkspaceAs="SaveWorkspaceAs",e.Custom="Custom"}(u||(u={})),function(e){e.Browser="browser",e.Platform="platform"}(h||(h={})),function(e){e.CustomButton="CustomButton",e.StoreCustomButton="StoreCustomButton",e.CustomDropdownItem="CustomDropdownItem",e.GlobalContextMenu="GlobalContextMenu",e.ViewTabContextMenu="ViewTabContextMenu",e.PageTabContextMenu="PageTabContextMenu",e.SaveButtonContextMenu="SaveButtonContextMenu",e.API="API"}(g||(g={}));var p;!function(e){e.SAVE_PAGE="SAVE_PAGE",e.SAVE_WORKSPACE="SAVE_WORKSPACE",e.SAVE_PAGE_AS="SAVE_PAGE_AS",e.SAVE_WORKSPACE_AS="SAVE_WORKSPACE_AS",e.RENAME_PAGE="RENAME_PAGE",e.RENAME_WORKSPACE="RENAME_WORKSPACE"}(p||(p={}))},129:()=>{"use strict";var e,t,a;!function(e){e.Fetching="fetching",e.Fetched="fetched",e.Complete="complete"}(e||(e={})),function(e){e.UserAction="user-action",e.FocusChange="focus-change",e.Reload="reload"}(t||(t={})),function(e){e.Active="active",e.Default="default"}(a||(a={}))},600:(e,t,a)=>{"use strict";var n;!function(e){e.ActionButton="ActionButton",e.DropdownButton="DropdownButton"}(n||(n={}))},872:(e,t,a)=>{"use strict";var n,r,o;!function(e){e.Suggestion="suggestion"}(n||(n={})),function(e){e.Contact="Contact",e.Custom="Custom",e.List="List",e.Plain="Plain",e.SimpleText="SimpleText",e.Loading="Loading",e.Error="Error"}(r||(r={})),function(e){e.MultiSelect="MultiSelect"}(o||(o={}))},179:(e,t,a)=>{"use strict";a(129),a(872),a(710),a(184),a(600)},710:(e,t,a)=>{"use strict";var n,r;!function(e){e.Snapshot="snapshot",e.Manifest="manifest",e.View="view",e.External="external"}(n||(n={})),function(e){e.LandingPage="landingPage",e.AppGrid="appGrid"}(r||(r={}))},184:(e,t,a)=>{"use strict";var n;!function(e){e.Primary="primary",e.Secondary="secondary",e.TextOnly="textOnly"}(n||(n={}))},678:(e,t,a)=>{"use strict";a.d(t,{BG:()=>s});var n=a(940),r=a(862),o=a(333);a(695);const i=async e=>({...e,layoutDetails:{machineId:await(0,r.D1)(),machineName:(0,r.fC)()}}),s=async e=>{const t=await(async(e,t)=>({pageId:(0,o.N)(),title:e,layout:await i(t),isReadOnly:!1}))(e.title,(0,n.xP)(e.layout));return e.panels&&(t.panels=e.panels.map((e=>({...e,viewOptions:(0,n.fh)(e.viewOptions)})))),{...e,...t}}},250:(e,t,a)=>{"use strict";var n;!function(e){e.Left="Left",e.Right="Right",e.Top="Top",e.Bottom="Bottom"}(n||(n={}))},326:(e,t,a)=>{"use strict";a.d(t,{Hc:()=>d,aQ:()=>h,p4:()=>i});var n=a(102);a(70);const r=(e,t)=>t?`${t}-${e.uuid}-${e.name}`:`__browser_window__-${e.uuid}-${e.name}`,o=new Map,i=(e,t)=>{const a=r(e,t);return i=a,o.has(i)||o.set(i,(0,n.A)(i)),o.get(i)();var i};var s,c,l,d,u;!function(e){e.CloseBrowserWindow="close-browser-window",e.QuitPlatform="quit-platform",e.ClosePage="close-page",e.AddToChannel="add-to-channel",e.RemoveFromChannel="remove-from-channel",e.OpenSaveModalInternal="open-save-modal-internal",e.DuplicatePage="duplicate-page",e.SetSelectedScheme="set-selected-scheme",e.ShowBrowserIndicator="show-browser-indicator",e.SetSelectedLanguage="set-selected-language",e.RefreshBookmarksInternal="refresh-bookmarks",e.GetLayoutsWithSelectedViewsInternal="get-layouts-with-selected-views"}(s||(s={})),function(e){e.GetPages="get-pages",e.GetActivePageForWindow="get-active-page-for-window",e.AttachPagesToWindow="attach-pages-to-window",e.DetachPagesFromWindow="detach-pages-from-window",e.SetActivePageForWindow="set-active-page-for-window",e.RenamePage="rename-page",e.ReorderPagesForWindow="reorder-pages-for-window",e.UpdatePageForWindow="update-page-for-window",e.UpdatePagesWindowOptions="update-pages-window-options",e.IsDetachingPages="is-detaching-pages",e.IsActivePageChanging="is-active-page-changing"}(c||(c={})),function(e){e.GetApps="get-apps",e.GetCuratedContent="get-curated-content",e.GetRecentlyVisited="get-recently-visited",e.GetSearchProviders="get-search-providers"}(l||(l={})),function(e){e.CreateBookmarkNode="create-bookmark-node",e.GetBookmarkNode="get-bookmark-node",e.SearchBookmarkNodes="search-bookmark-nodes",e.UpdateBookmarkNode="update-bookmark-node",e.DeleteBookmarkNode="delete-bookmark-node"}(d||(d={})),function(e){e.UpdateFavoriteEntries="update-favorite-entries",e.UpdateContentMenu="update-content-menu",e.NavigateContentMenu="navigate-content-menu"}(u||(u={}));const h={...s,...c,...u}},79:(e,t,a)=>{"use strict";var n;a.d(t,{KZ:()=>o,N:()=>i,OF:()=>n,bW:()=>s}),function(e){e.LaunchApp="launchApp",e.SavePage="savePage",e.GetSavedPage="getSavedPage",e.CreateSavedPage="createSavedPage",e.UpdateSavedPage="updateSavedPage",e.DeleteSavedPage="deleteSavedPage",e.GetSavedPages="getSavedPages",e.CreateSavedPageInternal="createSavedPageInternal",e.UpdateSavedPageInternal="updateSavedPageInternal",e.DeleteSavedPageInternal="deleteSavedPageInternal",e.UpdatePageForWindow="updatePageForWindow",e.AttachPagesToWindow="attachPagesToWindow",e.DetachPagesFromWindow="detachPagesFromWindow",e.ReorderPagesForWindow="reorderPagesForWindow",e.SetActivePage="setActivePage",e.AddPage="addPage",e.AddDefaultPage="addDefaultPage",e.GetAllAttachedPages="getAllAttachedPages",e.GetActivePageIdForWindow="getActivePageIdForWindow",e.GetPagesForWindow="getPagesForWindow",e.GetPageForWindow="getPageForWindow",e.GetSavedPageMetadata="getSavedPageMetadata",e.GetUniquePageTitle="getUniquePageTitle",e.GetLastFocusedBrowserWindow="getLastFocusedBrowserWindow",e.GetThemes="getThemes",e.GetSelectedScheme="getSelectedScheme",e.SetSelectedScheme="setSelectedScheme",e.OpenGlobalContextMenuInternal="openGlobalContextMenuInternal",e.OpenViewTabContextMenuInternal="openViewTabContextMenuInternal",e.OpenPageTabContextMenuInternal="openPageTabContextMenuInternal",e.OpenSaveButtonContextMenuInternal="openSaveButtonContextMenuInternal",e.InvokeCustomActionInternal="invokeCustomActionInternal",e.RequestQuitPlatformDialogInternal="requestQuitPlatformDialogInternal",e.GetSavedWorkspace="getSavedWorkspace",e.CreateSavedWorkspace="createSavedWorkspace",e.UpdateSavedWorkspace="updateSavedWorkspace",e.DeleteSavedWorkspace="deleteSavedWorkspace",e.GetSavedWorkspaces="getSavedWorkspaces",e.SaveWorkspace="saveWorkspace",e.GetCurrentWorkspace="getCurrentWorkspace",e.ApplyWorkspace="applyWorkspace",e.SetActiveWorkspace="setActiveWorkspace",e.IsBrowserInitialized="isBrowserInitialized",e.Analytics="analyticsInternal",e.GetLanguage="getLanguage",e.GetLanguageResourcesInternal="getLanguageResourcesInternal",e.SetLanguage="setLanguage",e.GetDockProviderConfig="getDockProviderConfig",e.SaveDockProviderConfig="saveDockProviderConfig",e.HandleSaveModalOnPageClose="handleSaveModalOnPageClose",e.ShouldPageClose="shouldPageClose",e.ShouldWindowClose="shouldWindowClose",e.CopyPage="copyPage",e.HandlePageChanges="handlePageChanges",e.MarkUnsavedPagesAsSavedInternal="markUnsavedPagesAsSavedInternal",e.TrackRemovedTabInternal="trackRemovedTabInternal",e.RestoreRemovedTabInternal="restoreRemovedTabInternal",e.TrackVisitedSiteInternal="trackVisitedSiteInternal",e.GetRecentlyVisitedSitesInternal="getRecentlyVisitedSitesInternal",e.GetFrequentlyVisitedSitesInternal="getFrequentlyVisitedSitesInternal",e.SearchSitesInternal="searchSitesInternal",e.GetSearchProvidersInternal="getSearchProvidersInternal",e.GetCuratedContentInternal="getCuratedContentInternal",e.HandleRequestNavigationInternal="handleRequestNavigationInternal",e.RefreshBookmarksInternal="refreshBookmarksInternal",e.LaunchBookmarkInternal="launchBookmarkInternal",e.GetNotificationsConfig="getNotificationsConfig",e.UpdateDockFavoritesInternal="updateDockFavoritesInternal",e.UpdateContentMenuInternal="updateContentMenuInternal",e.LaunchDockEntryInternal="launchDockEntryInternal",e.SetDockFavoritesOrderInternal="setDockFavoritesOrderInternal",e.NavigateContentMenuInternal="navigateContentMenuInternal",e.SetDockWorkspaceButtonsOrderInternal="setDockWorkspaceButtonsOrderInternal",e.GetDockWorkspacesContextMenuInternal="getDockWorkspacesContextMenuInternal",e.HandleDockWorkspacesMenuResponseInternal="handleDockWorkspacesMenuResponseInternal",e.RemoveDockFavoriteInternal="removeDockFavoriteInternal",e.AddDockFavoriteInternal="addDockFavoriteInternal"}(n||(n={}));const r=async e=>fin.Platform.wrapSync(e).getClient(),o=async e=>{const t=await r(e),a="Target is not a Workspace Platform. Target must call WorkspacePlatform.init";let n;try{n=await t.dispatch("isWorkspacePlatform")}catch(e){throw new Error(a)}if("boolean"==typeof n&&n)return console.warn("You are using an older version of the workspace platform. Please update your workspace platform."),n;if("object"==typeof n&&n.isWorkspacePlatform)return n;throw new Error(a)},i=async e=>(await o(e),r(e)),s=async e=>{const t=await o(e);if("object"==typeof t&&!0!==t?.isBrowserInitialized)throw new Error("Target is not a Browser-enabled Workspace Platform.");return r(e)}},695:(e,t,a)=>{"use strict";var n=a(102),r=(a(723),a(70),a(905));(0,n.A)("__of_workspace_protocol__"),(0,n.A)(r.BT)},905:(e,t,a)=>{"use strict";a.d(t,{BT:()=>n});const n="__search-openfin-browser-home-topic__";var r,o;!function(e){e.Fetching="fetching",e.Fetched="fetched",e.Complete="complete"}(r||(r={})),function(e){e[e.Initial=0]="Initial",e[e.Open=1]="Open",e[e.Close=2]="Close"}(o||(o={}))},257:(e,t,a)=>{"use strict";a.d(t,{F:()=>r});var n=a(365);const r=e=>{const t=fin.Platform.Layout.wrapSync(e);return{show:async()=>{const a=await t.getConfig(),{settings:r,dimensions:o}=a,i=await(0,n.Ae)(e);await t.replace({...a,settings:{...r,hasHeaders:!0,reorderEnabled:!0},dimensions:{...o,headerHeight:i?28:30}})},hide:async e=>{const a=await t.getConfig(),{settings:n,dimensions:r}=await a;await t.replace({...a,settings:{...n,hasHeaders:!1,reorderEnabled:e?.settings?.reorderEnabled??!1},dimensions:{...r,headerHeight:0}})},isShowingTabs:async()=>{try{const e=await t.getConfig(),{settings:a}=await e;return a.hasHeaders}catch(e){return console.error("failed to get layout config: ",e),!0}}}}},957:(e,t,a)=>{"use strict";a.d(t,{qq:()=>k});var n=a(847),r=a(898),o=a(70),i=a(13),s=(a(675),a(877)),c=a.n(s),l=a(67),d=a.n(l);const u={light:{symbol:d()?.src||""},dark:{symbol:c()?.src||""}};a(695),a(79);const h="dark",g={[n.Palette.brandPrimary]:"#0A76D3",[n.Palette.statusSuccess]:n.Color.functional1,[n.Palette.statusWarning]:n.Color.functional10,[n.Palette.statusCritical]:n.Color.functional7,[n.Palette.statusActive]:n.Color.functional3,[n.Palette.contentBackground1]:"#0A76D3",[n.Palette.contentBackground2]:"#000000",[n.Palette.contentBackground3]:"#000000",[n.Palette.contentBackground4]:"#000000",[n.Palette.contentBackground5]:"#000000"},p={...g,[n.Palette.background1]:n.Color.white,[n.Palette.background2]:n.Color.lightGray1,[n.Palette.background3]:n.Color.lightGray2,[n.Palette.background4]:n.Color.lightGray3,[n.Palette.background5]:n.Color.lightGray4,[n.Palette.background6]:n.Color.lightGray5,[n.Palette.brandSecondary]:n.Color.lightGray4,[n.Palette.inputBackground]:n.Color.lightGray3,[n.Palette.inputColor]:n.Color.darkGray5,[n.Palette.inputPlaceholder]:n.Color.darkGray2,[n.Palette.inputDisabled]:n.Color.neutralGray,[n.Palette.inputFocused]:n.Color.lightGray5,[n.Palette.inputBorder]:n.Color.neutralGray,[n.Palette.textDefault]:n.Color.darkGray5,[n.Palette.textHelp]:n.Color.darkGray3,[n.Palette.textInactive]:n.Color.neutralGray},f={...g,[n.Palette.background1]:n.Color.darkGray6,[n.Palette.background2]:n.Color.darkGray5,[n.Palette.background3]:n.Color.darkGray4,[n.Palette.background4]:n.Color.darkGray3,[n.Palette.background5]:n.Color.darkGray2,[n.Palette.background6]:n.Color.darkGray1,[n.Palette.brandSecondary]:n.Color.darkGray2,[n.Palette.inputBackground]:n.Color.darkGray1,[n.Palette.inputColor]:n.Color.white,[n.Palette.inputPlaceholder]:n.Color.lightGray5,[n.Palette.inputDisabled]:n.Color.neutralGray,[n.Palette.inputFocused]:n.Color.lightGray5,[n.Palette.inputBorder]:n.Color.neutralGray,[n.Palette.textDefault]:n.Color.white,[n.Palette.textHelp]:n.Color.lightGray5,[n.Palette.textInactive]:n.Color.neutralGray},m=[{label:"OpenFin Default Light and Dark Theme",palettes:{light:{...p,brandPrimary:"#0A76D3",brandSecondary:n.Color.lightGray4,backgroundPrimary:n.Color.darkGray5},dark:{...f,brandPrimary:"#0A76D3",brandSecondary:n.Color.darkGray2,backgroundPrimary:n.Color.darkGray5}}}],w=e=>{const{background:t,foreground:a}=e;return{background:t,foreground:a??"#FFFFFF"}},y=(e,t)=>({icons:{symbol:e.brand?.icons?.[t]?.symbol||u[t].symbol}}),b=e=>{const{light:t,dark:a}="palettes"in e?e.palettes:{light:e.palette,dark:e.palette},o=(0,r.KD)(f,a),i=(0,r.KD)(p,t),s=((e,t)=>{const a={...e},n={...t};let o=t.backgroundPrimary?(0,r.pu)(t.backgroundPrimary,!0):{},i=e.backgroundPrimary?(0,r.pu)(e.backgroundPrimary):{};return o={...o,...n},i={...i,...a},{light:{...t,...o},dark:{...e,...i}}})(a,t),c={...(0,n.createTheme)({...o,...s?.dark}),brand:y(e,"dark")},l={...(0,n.createTheme)({...i,...s?.light}),brand:y(e,"light")},{light:d,dark:u}=(e=>{const t=Object.keys(e.notificationIndicatorColors??{});if(t?.length){const a={},n={};return t.forEach((t=>{const r=e.notificationIndicatorColors[t];"background"in r?(a[t]=w(r),n[t]=w(r)):(a[t]=w(r.dark??r.light),n[t]=w(r.light??r.dark))})),{light:n,dark:a}}return{light:null,dark:null}})(e);return c.notificationIndicatorColors=u,l.notificationIndicatorColors=d,{dark:c,light:l}},k=async e=>{const{themes:t,selectedScheme:a}=await(async e=>{const t=fin?.__internal_?.initialOptions?.workspacePlatform?._themeData;if(!t||e.uuid!==o.$p.uuid)return{themes:await(0,i.Ag)(e).Theme.getThemes(),selectedScheme:await(0,i.Ag)(e).Theme.getSelectedScheme()};return t})(e);var n,r;return(n=t?.length?t:m,r=a,n.map((e=>{const t="palettes"in e?e.default:h,{light:a,dark:n}=b(e);return{label:e.label,logoUrl:e.logoUrl,theme:{dark:n,light:a},defaultScheme:r??t}})))[0]}},438:(e,t,a)=>{"use strict";a.d(t,{MW:()=>n,v1:()=>c});var n,r,o=a(723);!function(e){e.Workspace="openfin-workspace",e.OldWorkspace="openfin-browser"}(n||(n={})),function(e){e.FinProtocol="fin-protocol"}(r||(r={}));const i={uuid:o.$h},s=(n.Workspace,e=>{if(!o.cI)throw new Error("getApplication cannot be used in a non OpenFin env. Avoid using this during pre-rendering.");return fin.Application.wrapSync(e)}),c=()=>s(i)},102:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});var n=a(723);const r=n.YY&&"complete"!==document.readyState&&new Promise((e=>document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&e()}))));function o(e){let t;const a=new Set;return()=>{if(!n.cI)throw new Error("getChannelClient cannot be used outside an OpenFin env. Avoid using this method during pre-rendering.");return t||(t=(async()=>{await r;const o={clientAPIVersion:n.et},i=await fin.InterApplicationBus.Channel.connect(e,{payload:o});return i.onDisconnection((async()=>{a.forEach((e=>e())),a.clear(),console.warn(`disconnected from channel provider ${e}`),t=void 0})),i})().then((e=>(e.addDisconnectionListener=e=>{a.add(e)},e))).catch((a=>{throw t=void 0,new Error(`failed to connect to channel provider ${e}: ${a}`)}))),t}}},365:(e,t,a)=>{"use strict";a.d(t,{Ae:()=>n});a(181),a(70);const n=async e=>{const t=e?fin.Window.wrapSync(e):fin.Window.getCurrentSync(),a=await t.getOptions();return a.workspacePlatform?.windowType&&"enterprise"===a.workspacePlatform.windowType}},723:(e,t,a)=>{"use strict";var n;a.d(t,{$h:()=>c,AT:()=>i,YY:()=>o,cI:()=>r,et:()=>h,fT:()=>d,vL:()=>l}),function(e){e.Local="local",e.Dev="dev",e.Staging="staging",e.Prod="prod"}(n||(n={}));const r="undefined"!=typeof window&&"undefined"!=typeof fin,o=("undefined"==typeof process||process.env,"undefined"!=typeof window),i=o&&"undefined"!=typeof indexedDB,s=o?window.origin:n.Local,c=r&&fin.me.uuid,l=r&&fin.me.name,d=r&&fin.me.entityType,u=(n.Local,n.Dev,n.Staging,n.Prod,e=>e.startsWith("http://")||e.startsWith("https://")?e:s+e),h=(u("https://workspace.openfin.co/workspace/20.4.0"),u("https://workspace.openfin.co/workspace/20.4.0"),"undefined"!=typeof WORKSPACE_DOCS_PLATFORM_URL&&u(WORKSPACE_DOCS_PLATFORM_URL),"undefined"!=typeof WORKSPACE_DOCS_CLIENT_URL&&u(WORKSPACE_DOCS_CLIENT_URL),"20.4.0");"undefined"!=typeof WORKSPACE_BUILD_SHA&&WORKSPACE_BUILD_SHA},940:(e,t,a)=>{"use strict";a.d(t,{fh:()=>d,xP:()=>u});var n=a(236),r=a.n(n),o=(a(365),a(723),a(70)),i=a(678),s=a(257),c=a(367);a(413);const l=(e,t)=>e.content?{...e,content:e.content.map((e=>l(e,t)))}:{...e,componentState:t(e.componentState)},d=e=>({...e,name:void 0}),u=e=>{const t={...e};return l(t,d)},h=e=>{const t=[];return(e&&Array.isArray(e)?e:[]).forEach((e=>{if("component"===e.type)return t.push(e.componentState);const a=h(e.content);t.push(...a)})),t};new Map,new Map;r()((async e=>{try{const t=await(async e=>fin.Platform.Layout.wrapSync({...fin.me.identity,layoutName:e}).getConfig())(e.layoutContainerKey),a=t.content?h(t.content):[],n=a.length;n>1?(e=>{"multiView"!==e.attachedPageType&&(0,c.N)().Browser.wrapSync(o.$p).updatePage({pageId:e.pageId,page:{singleViewName:null,attachedPageType:"multiView"}})})(e):1===n&&(async(e,t)=>{const a=(0,c.N)().Browser.wrapSync(o.$p);if("singleView"!==e.attachedPageType){const n=await(0,i.BG)(e),r=await(0,c.N)().Browser.getUniquePageTitle();delete n.layout;const o={...n,singleViewName:t,title:r,hasUnsavedChanges:!1,attachedPageType:"singleView"};await a.updatePage({pageId:e.pageId,page:o})}})(e,a[0].name),await(async(e,t)=>{const a=(0,s.F)({...o.$p,layoutName:e.layoutContainerKey}),n=await a.isShowingTabs();t>1?n||await a.show():1===t&&n&&await a.hide({settings:{reorderEnabled:!0}})})(e,n)}catch(e){}}),50,{leading:!1,trailing:!0})},141:(e,t,a)=>{"use strict";var n;a.d(t,{A:()=>r}),function(e){e.CurrentWorkspaceId="currentWorkspaceId",e.LastFocusedBrowserWindow="lastFocusedBrowserWindow",e.MachineName="machineName",e.NewTabPageLayout="NewTabPageLayout",e.NewTabPageSort="NewTabPageSort",e.DockPosition="DockPosition",e.SelectedColorScheme="SelectedColorScheme",e.ThemePaletteSheet="ThemePaletteSheet",e.HasMovedStore="HasMovedStore",e.PageDragState="BrowserPageDragState"}(n||(n={}));const r=n},189:(e,t,a)=>{"use strict";a.r(t),a.d(t,{getItem:()=>o,removeItem:()=>i,setItem:()=>r});var n=a(723);const r=(e,t)=>{localStorage.setItem(`${n.$h}-${e}`,t)},o=e=>localStorage.getItem(`${n.$h}-${e}`),i=e=>localStorage.removeItem(`${n.$h}-${e}`)},786:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});const n="of-workspace-";const r=new class{mark(e){performance.mark(`${n}${e}`)}markStart(e){performance.mark(`${n}${e}-start`)}markEnd(e){performance.mark(`${n}${e}-end`)}markEndAndMeasure(e){performance.mark(`${n}${e}-end`);try{return performance.measure(`${n}${e}`,`${n}${e}-start`,`${n}${e}-end`)}catch(e){0}}markAndMeasure(e,t){performance.mark(`${n}${e}`);try{return performance.measure(`${n}${e}-measure`,`${n}${t}-start`,`${n}${e}`)}catch(e){0}}reportWorkspacePerformanceEntries(){return performance.getEntriesByType("measure").filter((e=>e.name.startsWith(n)))}reportWorkspacePerformance(){return this.reportWorkspacePerformanceEntries().map((e=>({name:e.name.replace(`${n}`,"").replace("-measure",""),duration:e.duration})))}}},181:(e,t,a)=>{"use strict";var n,r;!function(e){e.Home="/home/",e.HomeSearch="/home/?deeplink=search",e.HomePagesRename="/home/pages/rename/",e.Dock="/dock/",e.Docs="/provider/docs/",e.Storefront="/storefront/",e.DeprecatedAlert="/provider/deprecated-alert/",e.Analytics="/provider/analytics/",e.Provider="/provider/"}(n||(n={})),function(e){e.Browser="/browser/",e.BrowserPopupMenu="/popup-menu/",e.BrowserPopupMenuSaveModal="/popup-menu/save-modal/",e.BrowserPopupMenuLayouts="/popup-menu/layouts/layouts/",e.BrowserPopupMenuColorLinking="/popup-menu/color-linking/color-linking/",e.BrowserIndicator="/indicator/",e.BrowserPopupMenuAddressSearchResultsView="/popup-menu/address-search-results-view/",e.ResponseModal="/popup-menu/response-modal/",e.CloseConfirmationModal="/popup-menu/close-confirmation-modal/",e.EnterpriseBrowser="/enterprise/",e.EnterpriseContextMenu="/context-menu/",e.EnterpriseBookmarkDialog="/bookmark-dialog/",e.EnterpriseStorageProxy="/enterprise/storage-proxy",e.DropdownMenu="/dropdown-menu/",e.EnterpriseDock="/dock/"}(r||(r={}));var o;!function(e){e.Search="search"}(o||(o={}))},523:(e,t,a)=>{"use strict";var n;a(723);!function(e){e.Home="/home",e.Browser="/browser",e.Enterprise="/enterprise",e.Provider="/provider",e.Storefront="/storefront",e.Dock="/dock"}(n||(n={}))},862:(e,t,a)=>{"use strict";a.d(t,{D1:()=>i,fC:()=>r});a(940);var n=a(141);function r(){return localStorage.getItem(n.A.MachineName)??"unknown"}let o;async function i(){return o||(o=await fin.System.getMachineId()),o}},898:(e,t,a)=>{"use strict";a.d(t,{KD:()=>s,pu:()=>i});const n=e=>e.replace(/[^\d,]/g,"").split(","),r=e=>{if(e.length<2)throw new Error("Invalid color object, cannot convert to HSL.");const t=e[0]/255,a=e[1]/255,n=e[2]/255,r=Math.min(t,a,n),o=Math.max(t,a,n),i=o-r;let s=0,c=0,l=0;return s=0===i?0:o===t?(a-n)/i%6:o===a?(n-t)/i+2:(t-a)/i+4,s=Math.round(60*s),s<0&&(s+=360),l=(o+r)/2,c=0==i?0:i/(1-Math.abs(2*l-1)),c=+(100*c).toFixed(1),l=+(100*l).toFixed(1),{hsl:`hsl(${s}, ${c}%, ${l}%)`,hsla:`hsl(${s}, ${c}%, ${l}%, 1)`,hue:s,lightness:l,saturation:c}},o=e=>{if(!e)throw new Error("Color is not defined");const t=e.toLowerCase();let a;if(t.includes("rgb")){const e=n(t);e.length>3&&e.pop(),a=r(e).hue}if(t.includes("#")){const e=(e=>{if(!e.includes("#"))throw new Error("Invalid hex value, cannot convert to RGB. Hex value begins with a hashtag.");let t=0,a=0,n=0;if(4===e.length)t=`0x${e[1]}${e[1]}`,a=`0x${e[2]}${e[2]}`,n=`0x${e[3]}${e[3]}`;else{if(7!==e.length)throw new Error("Invalid hex string length, cannot convert to RGB.");t=`0x${e[1]}${e[2]}`,a=`0x${e[3]}${e[4]}`,n=`0x${e[5]}${e[6]}`}return[+t,+a,+n]})(t);a=r(e).hue}if(t.includes("hsl")){a=n(t)[0]}const o=a?.toString();if(!o)throw new Error(`Hue was unable to be extracted from "${t}", check color format. Accepted formats are: rgb(), rgba(), hex, hsl(), and hsla()`);return o},i=(e,t=!1)=>{const a=o(e);return t?{background1:`hsla(${a}, 0%, 100%, 1)`,background2:`hsla(${a}, 67%, 99%, 1)`,background3:`hsla(${a}, 26%, 96%, 1)`,background4:`hsla(${a}, 15%, 94%, 1)`,background5:`hsla(${a}, 10%, 88%, 1)`,background6:`hsla(${a}, 80%, 80%, 1)`}:{background1:`hsla(${a}, 8%, 7%, 1)`,background2:`hsla(${a}, 8%, 13%, 1)`,background3:`hsla(${a}, 9%, 15%, 1)`,background4:`hsla(${a}, 6%, 23%, 1)`,background5:`hsla(${a}, 21%, 28%, 1)`,background6:`hsla(${a}, 5%, 51%, 1)`}},s=(e,t)=>{const a={};return Object.keys(e).forEach((n=>{a[n]=t[n]?t[n]:e[n]})),a}},277:(e,t,a)=>{"use strict";a.d(t,{os:()=>i});var n,r=a(723);a(70),a(13);!function(e){e.Browser="Browser",e.Dock="Dock",e.EnterpriseDock="EnterpriseDock",e.Home="Home",e.Notification="Notification",e.Storefront="Storefront",e.Platform="Platform",e.Theming="Theming",e.Microflow="Microflow"}(n||(n={}));const o=async(e,t,a="workspace-licensing")=>{const n={apiVersion:t.apiVersion||r.et,componentName:e,componentVersion:t.componentVersion||r.et,allowed:t.allowed,rejectionCode:t.rejectionCode};fin.System.registerUsage({type:a,data:n})};const i=e=>{o(n.Notification,e)};new Map},333:(e,t,a)=>{"use strict";function n(){return void 0!==typeof crypto&&"randomUUID"in crypto&&"function"==typeof crypto.randomUUID?crypto.randomUUID():"10000000-1000-4000-8000-100000000000".replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))}a.d(t,{N:()=>n})},70:(e,t,a)=>{"use strict";a.d(t,{$p:()=>c,Io:()=>u,Iq:()=>s,Q:()=>n,Tv:()=>l,V1:()=>i,hb:()=>d,ur:()=>h});var n,r=a(438),o=a(723);!function(e){e.Home="openfin-home",e.Dock="openfin-dock",e.Storefront="openfin-storefront",e.HomeInternal="openfin-home-internal",e.BrowserMenu="openfin-browser-menu",e.BrowserSaveMenu="openfin-browser-save-menu",e.BrowserIndicator="openfin-browser-indicator",e.BrowserWindow="internal-generated-window",e.ClassicWindow="internal-generated-classic-window",e.EnterpriseContextMenu="openfin-enterprise-context-menu",e.BrowserAddressSearchPrefix="openfin-browser-menu-address-search-",e.EnterpriseBookmarkDialogWindow="openfin-enterprise-bookmark-dialog",e.DropdownMenu="openfin-enterprise-dropdown-menu",e.DockCompanion="openfin-dock-companion"}(n||(n={}));const i=e=>({left:(e.left+(e.right??e.left+e.width))/2,top:(e.top+(e.bottom??e.top+e.height))/2});function s(e){if(!o.cI)throw new Error("getOFWindow can only be used in an OpenFin env. Avoid calling this method during pre-rendering.");return fin.Window.wrapSync(e)}const c={name:o.vL,uuid:o.$h};function l(){return s(c)}n.Home,r.MW.Workspace,n.Dock,r.MW.Workspace,n.Storefront,r.MW.Workspace,r.MW.Workspace,r.MW.Workspace;const d=async e=>{try{const t=await fin.Window.wrapSync({name:e.name,uuid:e.uuid??fin.me.uuid}).getOptions();return("browser"===t.workspacePlatform?.windowType||"enterprise"===t.workspacePlatform?.windowType)&&t.workspacePlatform?.pages}catch(e){return console.warn("isBrowserWindow error: ",e),!1}};async function u(){const e=await fin.Application.getCurrentSync().getChildWindows(),t=await Promise.all(e.map((async e=>d(e.identity))));return e.filter(((e,a)=>t[a]))}async function h(e){const t=await fin.System.getMonitorInfo();return[t.primaryMonitor,...t.nonPrimaryMonitors].reduce(((t,a)=>{const n=function(e,t){const a=e.top,n=e.left,r=e.top+e.height,o=e.left+e.width,i=t.monitorRect.top,s=t.monitorRect.left,c=t.monitorRect.bottom,l=t.monitorRect.right;if(a>c||r<i||n>l||o<s)return 0;const d=Math.max(a,i),u=Math.max(n,s);return(Math.min(r,c)-d)*(Math.min(o,l)-u)/(e.height*e.width)}(e,a);return n>t.percentage?{percentage:n,monitor:a}:t}),{percentage:0,monitor:t.primaryMonitor}).monitor}},236:e=>{"use strict";e.exports=__webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js")},432:e=>{"use strict";e.exports=__webpack_require__(/*! openfin-notifications/dist/client/without-auto-launch */ "./node_modules/openfin-notifications/dist/client/without-auto-launch.js")}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,a),o.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";a.r(n),a.d(n,{deregister:()=>g,register:()=>h});var e=a(432),t=a(277),r=a(957),o={};for(const t in e)["default","register","deregister"].indexOf(t)<0&&(o[t]=()=>e[t]);a.d(n,o);const i=async t=>{if(t instanceof Error){let a=t.message;if(t.message.includes("register-notifications-platform")){if(a="Notifications platforms are not supported in versions below 1.13.0, try updating your notifications-service.",e?.provider?.getStatus){const{version:t}=await e.provider.getStatus();a+=` Your version is: ${t}`}return a}return t.message}return"string"==typeof t?t:"unknown error registering Notifications"},s=async e=>{if(e instanceof Error&&e.message.includes("register-notifications-platform"))throw new Error(await i(e));throw e},c="of-notifications-service-v1",l="of-workspace-notifications-sync",d={channelName:l},u=async(e,t)=>{const a=t.notificationsVersion.startsWith("2")?d.channelName:c,n=await fin.InterApplicationBus.Channel.connect(a,{wait:!1}),r=t.notificationsVersion.startsWith("2")?"register-platform":"register-notifications-platform";await n.dispatch(r,e)};async function h(a){try{const n=a&&"notificationsCustomManifest"in a?{customManifest:a.notificationsCustomManifest}:void 0;n&&n.customManifest?.manifestUuid&&(d.channelName=`${n.customManifest.manifestUuid}-${l}`);const o=await e.register(n);if(a){const e=await(0,r.qq)(fin.me.identity),t="notificationsPlatformOptions"in a?a.notificationsPlatformOptions:a;await u({theme:e.theme,scheme:e.defaultScheme,...t,workspacePlatform:{identity:fin.Platform.getCurrentSync().identity,analytics:{isSupported:!0}}},{notificationsVersion:o.notificationsVersion})}return(0,t.os)({allowed:!0,apiVersion:e.VERSION,componentVersion:o.notificationsVersion}),o}catch(a){(0,t.os)({allowed:!1,rejectionCode:await i(a),apiVersion:e.VERSION}),await s(a)}}const g=async t=>{try{const{version:a}=await e.provider.getStatus();if(null===a)throw new Error("Notifications service is not currently running.");await(async(e,t)=>{const a=t.notificationsVersion.startsWith("2")?d.channelName:c,n=await fin.InterApplicationBus.Channel.connect(a,{wait:!1}),r=t.notificationsVersion.startsWith("2")?"deregister-platform":"deregister-notifications-platform";await n.dispatch(r,e)})({id:t},{notificationsVersion:a})}catch(e){await s(e)}}})(),module.exports=n})();
//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ "./node_modules/html-parse-stringify/dist/html-parse-stringify.module.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/html-parse-stringify/dist/html-parse-stringify.module.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var void_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! void-elements */ "./node_modules/void-elements/index.js");
/* harmony import */ var void_elements__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(void_elements__WEBPACK_IMPORTED_MODULE_0__);
var t=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function n(n){var r={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},i=n.match(/<\/?([^\s]+?)[/\s>]/);if(i&&(r.name=i[1],((void_elements__WEBPACK_IMPORTED_MODULE_0___default())[i[1]]||"/"===n.charAt(n.length-2))&&(r.voidElement=!0),r.name.startsWith("!--"))){var s=n.indexOf("--\x3e");return{type:"comment",comment:-1!==s?n.slice(4,s):""}}for(var a=new RegExp(t),c=null;null!==(c=a.exec(n));)if(c[0].trim())if(c[1]){var o=c[1].trim(),l=[o,""];o.indexOf("=")>-1&&(l=o.split("=")),r.attrs[l[0]]=l[1],a.lastIndex--}else c[2]&&(r.attrs[c[2]]=c[3].trim().substring(1,c[3].length-1));return r}var r=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,i=/^\s*$/,s=Object.create(null);function a(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(a,"")+"</"+t.name+">";case"comment":return e+"\x3c!--"+t.comment+"--\x3e"}}var c={parse:function(e,t){t||(t={}),t.components||(t.components=s);var a,c=[],o=[],l=-1,m=!1;if(0!==e.indexOf("<")){var u=e.indexOf("<");c.push({type:"text",content:-1===u?e:e.substring(0,u)})}return e.replace(r,function(r,s){if(m){if(r!=="</"+a.name+">")return;m=!1}var u,f="/"!==r.charAt(1),h=r.startsWith("\x3c!--"),p=s+r.length,d=e.charAt(p);if(h){var v=n(r);return l<0?(c.push(v),c):((u=o[l]).children.push(v),c)}if(f&&(l++,"tag"===(a=n(r)).type&&t.components[a.name]&&(a.type="component",m=!0),a.voidElement||m||!d||"<"===d||a.children.push({type:"text",content:e.slice(p,e.indexOf("<",p))}),0===l&&c.push(a),(u=o[l-1])&&u.children.push(a),o[l]=a),(!f||a.voidElement)&&(l>-1&&(a.voidElement||a.name===r.slice(2,-1))&&(l--,a=-1===l?c:o[l]),!m&&"<"!==d&&d)){u=-1===l?c:o[l].children;var x=e.indexOf("<",p),g=e.slice(p,-1===x?void 0:x);i.test(g)&&(g=" "),(x>-1&&l+u.length>=0||" "!==g)&&u.push({type:"text",content:g})}}),c},stringify:function(e){return e.reduce(function(e,t){return e+a("",t)},"")}};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (c);
//# sourceMappingURL=html-parse-stringify.module.js.map


/***/ }),

/***/ "./node_modules/i18next/dist/cjs/i18next.js":
/*!**************************************************!*\
  !*** ./node_modules/i18next/dist/cjs/i18next.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


const isString = obj => typeof obj === 'string';
const defer = () => {
  let res;
  let rej;
  const promise = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
};
const makeString = object => {
  if (object == null) return '';
  return '' + object;
};
const copy = (a, s, t) => {
  a.forEach(m => {
    if (s[m]) t[m] = s[m];
  });
};
const lastOfPathSeparatorRegExp = /###/g;
const cleanKey = key => key && key.indexOf('###') > -1 ? key.replace(lastOfPathSeparatorRegExp, '.') : key;
const canNotTraverseDeeper = object => !object || isString(object);
const getLastOfPath = (object, path, Empty) => {
  const stack = !isString(path) ? path : path.split('.');
  let stackIndex = 0;
  while (stackIndex < stack.length - 1) {
    if (canNotTraverseDeeper(object)) return {};
    const key = cleanKey(stack[stackIndex]);
    if (!object[key] && Empty) object[key] = new Empty();
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      object = object[key];
    } else {
      object = {};
    }
    ++stackIndex;
  }
  if (canNotTraverseDeeper(object)) return {};
  return {
    obj: object,
    k: cleanKey(stack[stackIndex])
  };
};
const setPath = (object, path, newValue) => {
  const {
    obj,
    k
  } = getLastOfPath(object, path, Object);
  if (obj !== undefined || path.length === 1) {
    obj[k] = newValue;
    return;
  }
  let e = path[path.length - 1];
  let p = path.slice(0, path.length - 1);
  let last = getLastOfPath(object, p, Object);
  while (last.obj === undefined && p.length) {
    e = `${p[p.length - 1]}.${e}`;
    p = p.slice(0, p.length - 1);
    last = getLastOfPath(object, p, Object);
    if (last && last.obj && typeof last.obj[`${last.k}.${e}`] !== 'undefined') {
      last.obj = undefined;
    }
  }
  last.obj[`${last.k}.${e}`] = newValue;
};
const pushPath = (object, path, newValue, concat) => {
  const {
    obj,
    k
  } = getLastOfPath(object, path, Object);
  obj[k] = obj[k] || [];
  obj[k].push(newValue);
};
const getPath = (object, path) => {
  const {
    obj,
    k
  } = getLastOfPath(object, path);
  if (!obj) return undefined;
  return obj[k];
};
const getPathWithDefaults = (data, defaultData, key) => {
  const value = getPath(data, key);
  if (value !== undefined) {
    return value;
  }
  return getPath(defaultData, key);
};
const deepExtend = (target, source, overwrite) => {
  for (const prop in source) {
    if (prop !== '__proto__' && prop !== 'constructor') {
      if (prop in target) {
        if (isString(target[prop]) || target[prop] instanceof String || isString(source[prop]) || source[prop] instanceof String) {
          if (overwrite) target[prop] = source[prop];
        } else {
          deepExtend(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }
  return target;
};
const regexEscape = str => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
var _entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;'
};
const escape = data => {
  if (isString(data)) {
    return data.replace(/[&<>"'\/]/g, s => _entityMap[s]);
  }
  return data;
};
class RegExpCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.regExpMap = new Map();
    this.regExpQueue = [];
  }
  getRegExp(pattern) {
    const regExpFromCache = this.regExpMap.get(pattern);
    if (regExpFromCache !== undefined) {
      return regExpFromCache;
    }
    const regExpNew = new RegExp(pattern);
    if (this.regExpQueue.length === this.capacity) {
      this.regExpMap.delete(this.regExpQueue.shift());
    }
    this.regExpMap.set(pattern, regExpNew);
    this.regExpQueue.push(pattern);
    return regExpNew;
  }
}
const chars = [' ', ',', '?', '!', ';'];
const looksLikeObjectPathRegExpCache = new RegExpCache(20);
const looksLikeObjectPath = (key, nsSeparator, keySeparator) => {
  nsSeparator = nsSeparator || '';
  keySeparator = keySeparator || '';
  const possibleChars = chars.filter(c => nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0);
  if (possibleChars.length === 0) return true;
  const r = looksLikeObjectPathRegExpCache.getRegExp(`(${possibleChars.map(c => c === '?' ? '\\?' : c).join('|')})`);
  let matched = !r.test(key);
  if (!matched) {
    const ki = key.indexOf(keySeparator);
    if (ki > 0 && !r.test(key.substring(0, ki))) {
      matched = true;
    }
  }
  return matched;
};
const deepFind = function (obj, path) {
  let keySeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
  if (!obj) return undefined;
  if (obj[path]) return obj[path];
  const tokens = path.split(keySeparator);
  let current = obj;
  for (let i = 0; i < tokens.length;) {
    if (!current || typeof current !== 'object') {
      return undefined;
    }
    let next;
    let nextPath = '';
    for (let j = i; j < tokens.length; ++j) {
      if (j !== i) {
        nextPath += keySeparator;
      }
      nextPath += tokens[j];
      next = current[nextPath];
      if (next !== undefined) {
        if (['string', 'number', 'boolean'].indexOf(typeof next) > -1 && j < tokens.length - 1) {
          continue;
        }
        i += j - i + 1;
        break;
      }
    }
    current = next;
  }
  return current;
};
const getCleanedCode = code => code && code.replace('_', '-');

const consoleLogger = {
  type: 'logger',
  log(args) {
    this.output('log', args);
  },
  warn(args) {
    this.output('warn', args);
  },
  error(args) {
    this.output('error', args);
  },
  output(type, args) {
    if (console && console[type]) console[type].apply(console, args);
  }
};
class Logger {
  constructor(concreteLogger) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.init(concreteLogger, options);
  }
  init(concreteLogger) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.prefix = options.prefix || 'i18next:';
    this.logger = concreteLogger || consoleLogger;
    this.options = options;
    this.debug = options.debug;
  }
  log() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.forward(args, 'log', '', true);
  }
  warn() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return this.forward(args, 'warn', '', true);
  }
  error() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    return this.forward(args, 'error', '');
  }
  deprecate() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
  }
  forward(args, lvl, prefix, debugOnly) {
    if (debugOnly && !this.debug) return null;
    if (isString(args[0])) args[0] = `${prefix}${this.prefix} ${args[0]}`;
    return this.logger[lvl](args);
  }
  create(moduleName) {
    return new Logger(this.logger, {
      ...{
        prefix: `${this.prefix}:${moduleName}:`
      },
      ...this.options
    });
  }
  clone(options) {
    options = options || this.options;
    options.prefix = options.prefix || this.prefix;
    return new Logger(this.logger, options);
  }
}
var baseLogger = new Logger();

class EventEmitter {
  constructor() {
    this.observers = {};
  }
  on(events, listener) {
    events.split(' ').forEach(event => {
      if (!this.observers[event]) this.observers[event] = new Map();
      const numListeners = this.observers[event].get(listener) || 0;
      this.observers[event].set(listener, numListeners + 1);
    });
    return this;
  }
  off(event, listener) {
    if (!this.observers[event]) return;
    if (!listener) {
      delete this.observers[event];
      return;
    }
    this.observers[event].delete(listener);
  }
  emit(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (this.observers[event]) {
      const cloned = Array.from(this.observers[event].entries());
      cloned.forEach(_ref => {
        let [observer, numTimesAdded] = _ref;
        for (let i = 0; i < numTimesAdded; i++) {
          observer(...args);
        }
      });
    }
    if (this.observers['*']) {
      const cloned = Array.from(this.observers['*'].entries());
      cloned.forEach(_ref2 => {
        let [observer, numTimesAdded] = _ref2;
        for (let i = 0; i < numTimesAdded; i++) {
          observer.apply(observer, [event, ...args]);
        }
      });
    }
  }
}

class ResourceStore extends EventEmitter {
  constructor(data) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      ns: ['translation'],
      defaultNS: 'translation'
    };
    super();
    this.data = data || {};
    this.options = options;
    if (this.options.keySeparator === undefined) {
      this.options.keySeparator = '.';
    }
    if (this.options.ignoreJSONStructure === undefined) {
      this.options.ignoreJSONStructure = true;
    }
  }
  addNamespaces(ns) {
    if (this.options.ns.indexOf(ns) < 0) {
      this.options.ns.push(ns);
    }
  }
  removeNamespaces(ns) {
    const index = this.options.ns.indexOf(ns);
    if (index > -1) {
      this.options.ns.splice(index, 1);
    }
  }
  getResource(lng, ns, key) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    const keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
    const ignoreJSONStructure = options.ignoreJSONStructure !== undefined ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let path;
    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
    } else {
      path = [lng, ns];
      if (key) {
        if (Array.isArray(key)) {
          path.push(...key);
        } else if (isString(key) && keySeparator) {
          path.push(...key.split(keySeparator));
        } else {
          path.push(key);
        }
      }
    }
    const result = getPath(this.data, path);
    if (!result && !ns && !key && lng.indexOf('.') > -1) {
      lng = path[0];
      ns = path[1];
      key = path.slice(2).join('.');
    }
    if (result || !ignoreJSONStructure || !isString(key)) return result;
    return deepFind(this.data && this.data[lng] && this.data[lng][ns], key, keySeparator);
  }
  addResource(lng, ns, key, value) {
    let options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
      silent: false
    };
    const keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
    let path = [lng, ns];
    if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);
    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
      value = ns;
      ns = path[1];
    }
    this.addNamespaces(ns);
    setPath(this.data, path, value);
    if (!options.silent) this.emit('added', lng, ns, key, value);
  }
  addResources(lng, ns, resources) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
      silent: false
    };
    for (const m in resources) {
      if (isString(resources[m]) || Array.isArray(resources[m])) this.addResource(lng, ns, m, resources[m], {
        silent: true
      });
    }
    if (!options.silent) this.emit('added', lng, ns, resources);
  }
  addResourceBundle(lng, ns, resources, deep, overwrite) {
    let options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
      silent: false,
      skipCopy: false
    };
    let path = [lng, ns];
    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
      deep = resources;
      resources = ns;
      ns = path[1];
    }
    this.addNamespaces(ns);
    let pack = getPath(this.data, path) || {};
    if (!options.skipCopy) resources = JSON.parse(JSON.stringify(resources));
    if (deep) {
      deepExtend(pack, resources, overwrite);
    } else {
      pack = {
        ...pack,
        ...resources
      };
    }
    setPath(this.data, path, pack);
    if (!options.silent) this.emit('added', lng, ns, resources);
  }
  removeResourceBundle(lng, ns) {
    if (this.hasResourceBundle(lng, ns)) {
      delete this.data[lng][ns];
    }
    this.removeNamespaces(ns);
    this.emit('removed', lng, ns);
  }
  hasResourceBundle(lng, ns) {
    return this.getResource(lng, ns) !== undefined;
  }
  getResourceBundle(lng, ns) {
    if (!ns) ns = this.options.defaultNS;
    if (this.options.compatibilityAPI === 'v1') return {
      ...{},
      ...this.getResource(lng, ns)
    };
    return this.getResource(lng, ns);
  }
  getDataByLanguage(lng) {
    return this.data[lng];
  }
  hasLanguageSomeTranslations(lng) {
    const data = this.getDataByLanguage(lng);
    const n = data && Object.keys(data) || [];
    return !!n.find(v => data[v] && Object.keys(data[v]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}

var postProcessor = {
  processors: {},
  addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle(processors, value, key, options, translator) {
    processors.forEach(processor => {
      if (this.processors[processor]) value = this.processors[processor].process(value, key, options, translator);
    });
    return value;
  }
};

const checkedLoadedFor = {};
class Translator extends EventEmitter {
  constructor(services) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    super();
    copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'], services, this);
    this.options = options;
    if (this.options.keySeparator === undefined) {
      this.options.keySeparator = '.';
    }
    this.logger = baseLogger.create('translator');
  }
  changeLanguage(lng) {
    if (lng) this.language = lng;
  }
  exists(key) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      interpolation: {}
    };
    if (key === undefined || key === null) {
      return false;
    }
    const resolved = this.resolve(key, options);
    return resolved && resolved.res !== undefined;
  }
  extractFromKey(key, options) {
    let nsSeparator = options.nsSeparator !== undefined ? options.nsSeparator : this.options.nsSeparator;
    if (nsSeparator === undefined) nsSeparator = ':';
    const keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
    let namespaces = options.ns || this.options.defaultNS || [];
    const wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
    const seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
    if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
      const m = key.match(this.interpolator.nestingRegexp);
      if (m && m.length > 0) {
        return {
          key,
          namespaces: isString(namespaces) ? [namespaces] : namespaces
        };
      }
      const parts = key.split(nsSeparator);
      if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
      key = parts.join(keySeparator);
    }
    return {
      key,
      namespaces: isString(namespaces) ? [namespaces] : namespaces
    };
  }
  translate(keys, options, lastKey) {
    if (typeof options !== 'object' && this.options.overloadTranslationOptionHandler) {
      options = this.options.overloadTranslationOptionHandler(arguments);
    }
    if (typeof options === 'object') options = {
      ...options
    };
    if (!options) options = {};
    if (keys === undefined || keys === null) return '';
    if (!Array.isArray(keys)) keys = [String(keys)];
    const returnDetails = options.returnDetails !== undefined ? options.returnDetails : this.options.returnDetails;
    const keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
    const {
      key,
      namespaces
    } = this.extractFromKey(keys[keys.length - 1], options);
    const namespace = namespaces[namespaces.length - 1];
    const lng = options.lng || this.language;
    const appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (lng && lng.toLowerCase() === 'cimode') {
      if (appendNamespaceToCIMode) {
        const nsSeparator = options.nsSeparator || this.options.nsSeparator;
        if (returnDetails) {
          return {
            res: `${namespace}${nsSeparator}${key}`,
            usedKey: key,
            exactUsedKey: key,
            usedLng: lng,
            usedNS: namespace,
            usedParams: this.getUsedParamsDetails(options)
          };
        }
        return `${namespace}${nsSeparator}${key}`;
      }
      if (returnDetails) {
        return {
          res: key,
          usedKey: key,
          exactUsedKey: key,
          usedLng: lng,
          usedNS: namespace,
          usedParams: this.getUsedParamsDetails(options)
        };
      }
      return key;
    }
    const resolved = this.resolve(keys, options);
    let res = resolved && resolved.res;
    const resUsedKey = resolved && resolved.usedKey || key;
    const resExactUsedKey = resolved && resolved.exactUsedKey || key;
    const resType = Object.prototype.toString.apply(res);
    const noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
    const joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays;
    const handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
    const handleAsObject = !isString(res) && typeof res !== 'boolean' && typeof res !== 'number';
    if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(isString(joinArrays) && Array.isArray(res))) {
      if (!options.returnObjects && !this.options.returnObjects) {
        if (!this.options.returnedObjectHandler) {
          this.logger.warn('accessing an object - but returnObjects options is not enabled!');
        }
        const r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, {
          ...options,
          ns: namespaces
        }) : `key '${key} (${this.language})' returned an object instead of string.`;
        if (returnDetails) {
          resolved.res = r;
          resolved.usedParams = this.getUsedParamsDetails(options);
          return resolved;
        }
        return r;
      }
      if (keySeparator) {
        const resTypeIsArray = Array.isArray(res);
        const copy = resTypeIsArray ? [] : {};
        const newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
        for (const m in res) {
          if (Object.prototype.hasOwnProperty.call(res, m)) {
            const deepKey = `${newKeyToUse}${keySeparator}${m}`;
            copy[m] = this.translate(deepKey, {
              ...options,
              ...{
                joinArrays: false,
                ns: namespaces
              }
            });
            if (copy[m] === deepKey) copy[m] = res[m];
          }
        }
        res = copy;
      }
    } else if (handleAsObjectInI18nFormat && isString(joinArrays) && Array.isArray(res)) {
      res = res.join(joinArrays);
      if (res) res = this.extendTranslation(res, keys, options, lastKey);
    } else {
      let usedDefault = false;
      let usedKey = false;
      const needsPluralHandling = options.count !== undefined && !isString(options.count);
      const hasDefaultValue = Translator.hasDefaultValue(options);
      const defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : '';
      const defaultValueSuffixOrdinalFallback = options.ordinal && needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, {
        ordinal: false
      }) : '';
      const needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && this.pluralResolver.shouldUseIntlApi();
      const defaultValue = needsZeroSuffixLookup && options[`defaultValue${this.options.pluralSeparator}zero`] || options[`defaultValue${defaultValueSuffix}`] || options[`defaultValue${defaultValueSuffixOrdinalFallback}`] || options.defaultValue;
      if (!this.isValidLookup(res) && hasDefaultValue) {
        usedDefault = true;
        res = defaultValue;
      }
      if (!this.isValidLookup(res)) {
        usedKey = true;
        res = key;
      }
      const missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
      const resForMissing = missingKeyNoValueFallbackToKey && usedKey ? undefined : res;
      const updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
      if (usedKey || usedDefault || updateMissing) {
        this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? defaultValue : res);
        if (keySeparator) {
          const fk = this.resolve(key, {
            ...options,
            keySeparator: false
          });
          if (fk && fk.res) this.logger.warn('Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.');
        }
        let lngs = [];
        const fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
        if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
          for (let i = 0; i < fallbackLngs.length; i++) {
            lngs.push(fallbackLngs[i]);
          }
        } else if (this.options.saveMissingTo === 'all') {
          lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
        } else {
          lngs.push(options.lng || this.language);
        }
        const send = (l, k, specificDefaultValue) => {
          const defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
          if (this.options.missingKeyHandler) {
            this.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, options);
          } else if (this.backendConnector && this.backendConnector.saveMissing) {
            this.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, options);
          }
          this.emit('missingKey', l, namespace, k, res);
        };
        if (this.options.saveMissing) {
          if (this.options.saveMissingPlurals && needsPluralHandling) {
            lngs.forEach(language => {
              const suffixes = this.pluralResolver.getSuffixes(language, options);
              if (needsZeroSuffixLookup && options[`defaultValue${this.options.pluralSeparator}zero`] && suffixes.indexOf(`${this.options.pluralSeparator}zero`) < 0) {
                suffixes.push(`${this.options.pluralSeparator}zero`);
              }
              suffixes.forEach(suffix => {
                send([language], key + suffix, options[`defaultValue${suffix}`] || defaultValue);
              });
            });
          } else {
            send(lngs, key, defaultValue);
          }
        }
      }
      res = this.extendTranslation(res, keys, options, resolved, lastKey);
      if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = `${namespace}:${key}`;
      if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
        if (this.options.compatibilityAPI !== 'v1') {
          res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${namespace}:${key}` : key, usedDefault ? res : undefined);
        } else {
          res = this.options.parseMissingKeyHandler(res);
        }
      }
    }
    if (returnDetails) {
      resolved.res = res;
      resolved.usedParams = this.getUsedParamsDetails(options);
      return resolved;
    }
    return res;
  }
  extendTranslation(res, key, options, resolved, lastKey) {
    var _this = this;
    if (this.i18nFormat && this.i18nFormat.parse) {
      res = this.i18nFormat.parse(res, {
        ...this.options.interpolation.defaultVariables,
        ...options
      }, options.lng || this.language || resolved.usedLng, resolved.usedNS, resolved.usedKey, {
        resolved
      });
    } else if (!options.skipInterpolation) {
      if (options.interpolation) this.interpolator.init({
        ...options,
        ...{
          interpolation: {
            ...this.options.interpolation,
            ...options.interpolation
          }
        }
      });
      const skipOnVariables = isString(res) && (options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let nestBef;
      if (skipOnVariables) {
        const nb = res.match(this.interpolator.nestingRegexp);
        nestBef = nb && nb.length;
      }
      let data = options.replace && !isString(options.replace) ? options.replace : options;
      if (this.options.interpolation.defaultVariables) data = {
        ...this.options.interpolation.defaultVariables,
        ...data
      };
      res = this.interpolator.interpolate(res, data, options.lng || this.language || resolved.usedLng, options);
      if (skipOnVariables) {
        const na = res.match(this.interpolator.nestingRegexp);
        const nestAft = na && na.length;
        if (nestBef < nestAft) options.nest = false;
      }
      if (!options.lng && this.options.compatibilityAPI !== 'v1' && resolved && resolved.res) options.lng = this.language || resolved.usedLng;
      if (options.nest !== false) res = this.interpolator.nest(res, function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (lastKey && lastKey[0] === args[0] && !options.context) {
          _this.logger.warn(`It seems you are nesting recursively key: ${args[0]} in key: ${key[0]}`);
          return null;
        }
        return _this.translate(...args, key);
      }, options);
      if (options.interpolation) this.interpolator.reset();
    }
    const postProcess = options.postProcess || this.options.postProcess;
    const postProcessorNames = isString(postProcess) ? [postProcess] : postProcess;
    if (res !== undefined && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
      res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? {
        i18nResolved: {
          ...resolved,
          usedParams: this.getUsedParamsDetails(options)
        },
        ...options
      } : options, this);
    }
    return res;
  }
  resolve(keys) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let found;
    let usedKey;
    let exactUsedKey;
    let usedLng;
    let usedNS;
    if (isString(keys)) keys = [keys];
    keys.forEach(k => {
      if (this.isValidLookup(found)) return;
      const extracted = this.extractFromKey(k, options);
      const key = extracted.key;
      usedKey = key;
      let namespaces = extracted.namespaces;
      if (this.options.fallbackNS) namespaces = namespaces.concat(this.options.fallbackNS);
      const needsPluralHandling = options.count !== undefined && !isString(options.count);
      const needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && this.pluralResolver.shouldUseIntlApi();
      const needsContextHandling = options.context !== undefined && (isString(options.context) || typeof options.context === 'number') && options.context !== '';
      const codes = options.lngs ? options.lngs : this.languageUtils.toResolveHierarchy(options.lng || this.language, options.fallbackLng);
      namespaces.forEach(ns => {
        if (this.isValidLookup(found)) return;
        usedNS = ns;
        if (!checkedLoadedFor[`${codes[0]}-${ns}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(usedNS)) {
          checkedLoadedFor[`${codes[0]}-${ns}`] = true;
          this.logger.warn(`key "${usedKey}" for languages "${codes.join(', ')}" won't get resolved as namespace "${usedNS}" was not yet loaded`, 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
        }
        codes.forEach(code => {
          if (this.isValidLookup(found)) return;
          usedLng = code;
          const finalKeys = [key];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys) {
            this.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
          } else {
            let pluralSuffix;
            if (needsPluralHandling) pluralSuffix = this.pluralResolver.getSuffix(code, options.count, options);
            const zeroSuffix = `${this.options.pluralSeparator}zero`;
            const ordinalPrefix = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (needsPluralHandling) {
              finalKeys.push(key + pluralSuffix);
              if (options.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                finalKeys.push(key + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
              }
              if (needsZeroSuffixLookup) {
                finalKeys.push(key + zeroSuffix);
              }
            }
            if (needsContextHandling) {
              const contextKey = `${key}${this.options.contextSeparator}${options.context}`;
              finalKeys.push(contextKey);
              if (needsPluralHandling) {
                finalKeys.push(contextKey + pluralSuffix);
                if (options.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                  finalKeys.push(contextKey + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
                }
                if (needsZeroSuffixLookup) {
                  finalKeys.push(contextKey + zeroSuffix);
                }
              }
            }
          }
          let possibleKey;
          while (possibleKey = finalKeys.pop()) {
            if (!this.isValidLookup(found)) {
              exactUsedKey = possibleKey;
              found = this.getResource(code, ns, possibleKey, options);
            }
          }
        });
      });
    });
    return {
      res: found,
      usedKey,
      exactUsedKey,
      usedLng,
      usedNS
    };
  }
  isValidLookup(res) {
    return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
  }
  getResource(code, ns, key) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    if (this.i18nFormat && this.i18nFormat.getResource) return this.i18nFormat.getResource(code, ns, key, options);
    return this.resourceStore.getResource(code, ns, key, options);
  }
  getUsedParamsDetails() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const optionsKeys = ['defaultValue', 'ordinal', 'context', 'replace', 'lng', 'lngs', 'fallbackLng', 'ns', 'keySeparator', 'nsSeparator', 'returnObjects', 'returnDetails', 'joinArrays', 'postProcess', 'interpolation'];
    const useOptionsReplaceForData = options.replace && !isString(options.replace);
    let data = useOptionsReplaceForData ? options.replace : options;
    if (useOptionsReplaceForData && typeof options.count !== 'undefined') {
      data.count = options.count;
    }
    if (this.options.interpolation.defaultVariables) {
      data = {
        ...this.options.interpolation.defaultVariables,
        ...data
      };
    }
    if (!useOptionsReplaceForData) {
      data = {
        ...data
      };
      for (const key of optionsKeys) {
        delete data[key];
      }
    }
    return data;
  }
  static hasDefaultValue(options) {
    const prefix = 'defaultValue';
    for (const option in options) {
      if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && undefined !== options[option]) {
        return true;
      }
    }
    return false;
  }
}

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);
class LanguageUtil {
  constructor(options) {
    this.options = options;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = baseLogger.create('languageUtils');
  }
  getScriptPartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf('-') < 0) return null;
    const p = code.split('-');
    if (p.length === 2) return null;
    p.pop();
    if (p[p.length - 1].toLowerCase() === 'x') return null;
    return this.formatLanguageCode(p.join('-'));
  }
  getLanguagePartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf('-') < 0) return code;
    const p = code.split('-');
    return this.formatLanguageCode(p[0]);
  }
  formatLanguageCode(code) {
    if (isString(code) && code.indexOf('-') > -1) {
      if (typeof Intl !== 'undefined' && typeof Intl.getCanonicalLocales !== 'undefined') {
        try {
          let formattedCode = Intl.getCanonicalLocales(code)[0];
          if (formattedCode && this.options.lowerCaseLng) {
            formattedCode = formattedCode.toLowerCase();
          }
          if (formattedCode) return formattedCode;
        } catch (e) {}
      }
      const specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
      let p = code.split('-');
      if (this.options.lowerCaseLng) {
        p = p.map(part => part.toLowerCase());
      } else if (p.length === 2) {
        p[0] = p[0].toLowerCase();
        p[1] = p[1].toUpperCase();
        if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
      } else if (p.length === 3) {
        p[0] = p[0].toLowerCase();
        if (p[1].length === 2) p[1] = p[1].toUpperCase();
        if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();
        if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
        if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
      }
      return p.join('-');
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
  }
  isSupportedCode(code) {
    if (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) {
      code = this.getLanguagePartFromCode(code);
    }
    return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
  }
  getBestMatchFromCodes(codes) {
    if (!codes) return null;
    let found;
    codes.forEach(code => {
      if (found) return;
      const cleanedLng = this.formatLanguageCode(code);
      if (!this.options.supportedLngs || this.isSupportedCode(cleanedLng)) found = cleanedLng;
    });
    if (!found && this.options.supportedLngs) {
      codes.forEach(code => {
        if (found) return;
        const lngOnly = this.getLanguagePartFromCode(code);
        if (this.isSupportedCode(lngOnly)) return found = lngOnly;
        found = this.options.supportedLngs.find(supportedLng => {
          if (supportedLng === lngOnly) return supportedLng;
          if (supportedLng.indexOf('-') < 0 && lngOnly.indexOf('-') < 0) return;
          if (supportedLng.indexOf('-') > 0 && lngOnly.indexOf('-') < 0 && supportedLng.substring(0, supportedLng.indexOf('-')) === lngOnly) return supportedLng;
          if (supportedLng.indexOf(lngOnly) === 0 && lngOnly.length > 1) return supportedLng;
        });
      });
    }
    if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
    return found;
  }
  getFallbackCodes(fallbacks, code) {
    if (!fallbacks) return [];
    if (typeof fallbacks === 'function') fallbacks = fallbacks(code);
    if (isString(fallbacks)) fallbacks = [fallbacks];
    if (Array.isArray(fallbacks)) return fallbacks;
    if (!code) return fallbacks.default || [];
    let found = fallbacks[code];
    if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
    if (!found) found = fallbacks[this.formatLanguageCode(code)];
    if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
    if (!found) found = fallbacks.default;
    return found || [];
  }
  toResolveHierarchy(code, fallbackCode) {
    const fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
    const codes = [];
    const addCode = c => {
      if (!c) return;
      if (this.isSupportedCode(c)) {
        codes.push(c);
      } else {
        this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`);
      }
    };
    if (isString(code) && (code.indexOf('-') > -1 || code.indexOf('_') > -1)) {
      if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
      if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
      if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
    } else if (isString(code)) {
      addCode(this.formatLanguageCode(code));
    }
    fallbackCodes.forEach(fc => {
      if (codes.indexOf(fc) < 0) addCode(this.formatLanguageCode(fc));
    });
    return codes;
  }
}

let sets = [{
  lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'pt', 'pt-BR', 'tg', 'tl', 'ti', 'tr', 'uz', 'wa'],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'hi', 'hu', 'hy', 'ia', 'it', 'kk', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt-PT', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ['ay', 'bo', 'cgg', 'fa', 'ht', 'id', 'ja', 'jbo', 'ka', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'],
  nr: [1],
  fc: 3
}, {
  lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ['ar'],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ['cs', 'sk'],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ['csb', 'pl'],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ['cy'],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ['fr'],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ['ga'],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ['gd'],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ['is'],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ['jv'],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ['kw'],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ['lt'],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ['lv'],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ['mk'],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ['mnk'],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ['mt'],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ['or'],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ['ro'],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ['sl'],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ['he', 'iw'],
  nr: [1, 2, 20, 21],
  fc: 22
}];
let _rulesPluralsTypes = {
  1: n => Number(n > 1),
  2: n => Number(n != 1),
  3: n => 0,
  4: n => Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2),
  5: n => Number(n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5),
  6: n => Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2),
  7: n => Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2),
  8: n => Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3),
  9: n => Number(n >= 2),
  10: n => Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4),
  11: n => Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3),
  12: n => Number(n % 10 != 1 || n % 100 == 11),
  13: n => Number(n !== 0),
  14: n => Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3),
  15: n => Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2),
  16: n => Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2),
  17: n => Number(n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1),
  18: n => Number(n == 0 ? 0 : n == 1 ? 1 : 2),
  19: n => Number(n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3),
  20: n => Number(n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2),
  21: n => Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0),
  22: n => Number(n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3)
};
const nonIntlVersions = ['v1', 'v2', 'v3'];
const intlVersions = ['v4'];
const suffixesOrder = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
const createRules = () => {
  const rules = {};
  sets.forEach(set => {
    set.lngs.forEach(l => {
      rules[l] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes[set.fc]
      };
    });
  });
  return rules;
};
class PluralResolver {
  constructor(languageUtils) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create('pluralResolver');
    if ((!this.options.compatibilityJSON || intlVersions.includes(this.options.compatibilityJSON)) && (typeof Intl === 'undefined' || !Intl.PluralRules)) {
      this.options.compatibilityJSON = 'v3';
      this.logger.error('Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.');
    }
    this.rules = createRules();
    this.pluralRulesCache = {};
  }
  addRule(lng, obj) {
    this.rules[lng] = obj;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(code) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (this.shouldUseIntlApi()) {
      const cleanedCode = getCleanedCode(code === 'dev' ? 'en' : code);
      const type = options.ordinal ? 'ordinal' : 'cardinal';
      const cacheKey = JSON.stringify({
        cleanedCode,
        type
      });
      if (cacheKey in this.pluralRulesCache) {
        return this.pluralRulesCache[cacheKey];
      }
      let rule;
      try {
        rule = new Intl.PluralRules(cleanedCode, {
          type
        });
      } catch (err) {
        if (!code.match(/-|_/)) return;
        const lngPart = this.languageUtils.getLanguagePartFromCode(code);
        rule = this.getRule(lngPart, options);
      }
      this.pluralRulesCache[cacheKey] = rule;
      return rule;
    }
    return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
  }
  needsPlural(code) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const rule = this.getRule(code, options);
    if (this.shouldUseIntlApi()) {
      return rule && rule.resolvedOptions().pluralCategories.length > 1;
    }
    return rule && rule.numbers.length > 1;
  }
  getPluralFormsOfKey(code, key) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return this.getSuffixes(code, options).map(suffix => `${key}${suffix}`);
  }
  getSuffixes(code) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const rule = this.getRule(code, options);
    if (!rule) {
      return [];
    }
    if (this.shouldUseIntlApi()) {
      return rule.resolvedOptions().pluralCategories.sort((pluralCategory1, pluralCategory2) => suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2]).map(pluralCategory => `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ''}${pluralCategory}`);
    }
    return rule.numbers.map(number => this.getSuffix(code, number, options));
  }
  getSuffix(code, count) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const rule = this.getRule(code, options);
    if (rule) {
      if (this.shouldUseIntlApi()) {
        return `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ''}${rule.select(count)}`;
      }
      return this.getSuffixRetroCompatible(rule, count);
    }
    this.logger.warn(`no plural rule found for: ${code}`);
    return '';
  }
  getSuffixRetroCompatible(rule, count) {
    const idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
    let suffix = rule.numbers[idx];
    if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
      if (suffix === 2) {
        suffix = 'plural';
      } else if (suffix === 1) {
        suffix = '';
      }
    }
    const returnSuffix = () => this.options.prepend && suffix.toString() ? this.options.prepend + suffix.toString() : suffix.toString();
    if (this.options.compatibilityJSON === 'v1') {
      if (suffix === 1) return '';
      if (typeof suffix === 'number') return `_plural_${suffix.toString()}`;
      return returnSuffix();
    } else if (this.options.compatibilityJSON === 'v2') {
      return returnSuffix();
    } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
      return returnSuffix();
    }
    return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
  }
  shouldUseIntlApi() {
    return !nonIntlVersions.includes(this.options.compatibilityJSON);
  }
}

const deepFindWithDefaults = function (data, defaultData, key) {
  let keySeparator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.';
  let ignoreJSONStructure = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  let path = getPathWithDefaults(data, defaultData, key);
  if (!path && ignoreJSONStructure && isString(key)) {
    path = deepFind(data, key, keySeparator);
    if (path === undefined) path = deepFind(defaultData, key, keySeparator);
  }
  return path;
};
const regexSafe = val => val.replace(/\$/g, '$$$$');
class Interpolator {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.logger = baseLogger.create('interpolator');
    this.options = options;
    this.format = options.interpolation && options.interpolation.format || (value => value);
    this.init(options);
  }
  init() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (!options.interpolation) options.interpolation = {
      escapeValue: true
    };
    const {
      escape: escape$1,
      escapeValue,
      useRawValueToEscape,
      prefix,
      prefixEscaped,
      suffix,
      suffixEscaped,
      formatSeparator,
      unescapeSuffix,
      unescapePrefix,
      nestingPrefix,
      nestingPrefixEscaped,
      nestingSuffix,
      nestingSuffixEscaped,
      nestingOptionsSeparator,
      maxReplaces,
      alwaysFormat
    } = options.interpolation;
    this.escape = escape$1 !== undefined ? escape$1 : escape;
    this.escapeValue = escapeValue !== undefined ? escapeValue : true;
    this.useRawValueToEscape = useRawValueToEscape !== undefined ? useRawValueToEscape : false;
    this.prefix = prefix ? regexEscape(prefix) : prefixEscaped || '{{';
    this.suffix = suffix ? regexEscape(suffix) : suffixEscaped || '}}';
    this.formatSeparator = formatSeparator || ',';
    this.unescapePrefix = unescapeSuffix ? '' : unescapePrefix || '-';
    this.unescapeSuffix = this.unescapePrefix ? '' : unescapeSuffix || '';
    this.nestingPrefix = nestingPrefix ? regexEscape(nestingPrefix) : nestingPrefixEscaped || regexEscape('$t(');
    this.nestingSuffix = nestingSuffix ? regexEscape(nestingSuffix) : nestingSuffixEscaped || regexEscape(')');
    this.nestingOptionsSeparator = nestingOptionsSeparator || ',';
    this.maxReplaces = maxReplaces || 1000;
    this.alwaysFormat = alwaysFormat !== undefined ? alwaysFormat : false;
    this.resetRegExp();
  }
  reset() {
    if (this.options) this.init(this.options);
  }
  resetRegExp() {
    const getOrResetRegExp = (existingRegExp, pattern) => {
      if (existingRegExp && existingRegExp.source === pattern) {
        existingRegExp.lastIndex = 0;
        return existingRegExp;
      }
      return new RegExp(pattern, 'g');
    };
    this.regexp = getOrResetRegExp(this.regexp, `${this.prefix}(.+?)${this.suffix}`);
    this.regexpUnescape = getOrResetRegExp(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`);
    this.nestingRegexp = getOrResetRegExp(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(str, data, lng, options) {
    let match;
    let value;
    let replaces;
    const defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    const handleFormat = key => {
      if (key.indexOf(this.formatSeparator) < 0) {
        const path = deepFindWithDefaults(data, defaultData, key, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(path, undefined, lng, {
          ...options,
          ...data,
          interpolationkey: key
        }) : path;
      }
      const p = key.split(this.formatSeparator);
      const k = p.shift().trim();
      const f = p.join(this.formatSeparator).trim();
      return this.format(deepFindWithDefaults(data, defaultData, k, this.options.keySeparator, this.options.ignoreJSONStructure), f, lng, {
        ...options,
        ...data,
        interpolationkey: k
      });
    };
    this.resetRegExp();
    const missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
    const skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    const todos = [{
      regex: this.regexpUnescape,
      safeValue: val => regexSafe(val)
    }, {
      regex: this.regexp,
      safeValue: val => this.escapeValue ? regexSafe(this.escape(val)) : regexSafe(val)
    }];
    todos.forEach(todo => {
      replaces = 0;
      while (match = todo.regex.exec(str)) {
        const matchedVar = match[1].trim();
        value = handleFormat(matchedVar);
        if (value === undefined) {
          if (typeof missingInterpolationHandler === 'function') {
            const temp = missingInterpolationHandler(str, match, options);
            value = isString(temp) ? temp : '';
          } else if (options && Object.prototype.hasOwnProperty.call(options, matchedVar)) {
            value = '';
          } else if (skipOnVariables) {
            value = match[0];
            continue;
          } else {
            this.logger.warn(`missed to pass in variable ${matchedVar} for interpolating ${str}`);
            value = '';
          }
        } else if (!isString(value) && !this.useRawValueToEscape) {
          value = makeString(value);
        }
        const safeValue = todo.safeValue(value);
        str = str.replace(match[0], safeValue);
        if (skipOnVariables) {
          todo.regex.lastIndex += value.length;
          todo.regex.lastIndex -= match[0].length;
        } else {
          todo.regex.lastIndex = 0;
        }
        replaces++;
        if (replaces >= this.maxReplaces) {
          break;
        }
      }
    });
    return str;
  }
  nest(str, fc) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let match;
    let value;
    let clonedOptions;
    const handleHasOptions = (key, inheritedOptions) => {
      const sep = this.nestingOptionsSeparator;
      if (key.indexOf(sep) < 0) return key;
      const c = key.split(new RegExp(`${sep}[ ]*{`));
      let optionsString = `{${c[1]}`;
      key = c[0];
      optionsString = this.interpolate(optionsString, clonedOptions);
      const matchedSingleQuotes = optionsString.match(/'/g);
      const matchedDoubleQuotes = optionsString.match(/"/g);
      if (matchedSingleQuotes && matchedSingleQuotes.length % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
        optionsString = optionsString.replace(/'/g, '"');
      }
      try {
        clonedOptions = JSON.parse(optionsString);
        if (inheritedOptions) clonedOptions = {
          ...inheritedOptions,
          ...clonedOptions
        };
      } catch (e) {
        this.logger.warn(`failed parsing options string in nesting for key ${key}`, e);
        return `${key}${sep}${optionsString}`;
      }
      if (clonedOptions.defaultValue && clonedOptions.defaultValue.indexOf(this.prefix) > -1) delete clonedOptions.defaultValue;
      return key;
    };
    while (match = this.nestingRegexp.exec(str)) {
      let formatters = [];
      clonedOptions = {
        ...options
      };
      clonedOptions = clonedOptions.replace && !isString(clonedOptions.replace) ? clonedOptions.replace : clonedOptions;
      clonedOptions.applyPostProcessor = false;
      delete clonedOptions.defaultValue;
      let doReduce = false;
      if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
        const r = match[1].split(this.formatSeparator).map(elem => elem.trim());
        match[1] = r.shift();
        formatters = r;
        doReduce = true;
      }
      value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
      if (value && match[0] === str && !isString(value)) return value;
      if (!isString(value)) value = makeString(value);
      if (!value) {
        this.logger.warn(`missed to resolve ${match[1]} for nesting ${str}`);
        value = '';
      }
      if (doReduce) {
        value = formatters.reduce((v, f) => this.format(v, f, options.lng, {
          ...options,
          interpolationkey: match[1].trim()
        }), value.trim());
      }
      str = str.replace(match[0], value);
      this.regexp.lastIndex = 0;
    }
    return str;
  }
}

const parseFormatStr = formatStr => {
  let formatName = formatStr.toLowerCase().trim();
  const formatOptions = {};
  if (formatStr.indexOf('(') > -1) {
    const p = formatStr.split('(');
    formatName = p[0].toLowerCase().trim();
    const optStr = p[1].substring(0, p[1].length - 1);
    if (formatName === 'currency' && optStr.indexOf(':') < 0) {
      if (!formatOptions.currency) formatOptions.currency = optStr.trim();
    } else if (formatName === 'relativetime' && optStr.indexOf(':') < 0) {
      if (!formatOptions.range) formatOptions.range = optStr.trim();
    } else {
      const opts = optStr.split(';');
      opts.forEach(opt => {
        if (opt) {
          const [key, ...rest] = opt.split(':');
          const val = rest.join(':').trim().replace(/^'+|'+$/g, '');
          const trimmedKey = key.trim();
          if (!formatOptions[trimmedKey]) formatOptions[trimmedKey] = val;
          if (val === 'false') formatOptions[trimmedKey] = false;
          if (val === 'true') formatOptions[trimmedKey] = true;
          if (!isNaN(val)) formatOptions[trimmedKey] = parseInt(val, 10);
        }
      });
    }
  }
  return {
    formatName,
    formatOptions
  };
};
const createCachedFormatter = fn => {
  const cache = {};
  return (val, lng, options) => {
    let optForCache = options;
    if (options && options.interpolationkey && options.formatParams && options.formatParams[options.interpolationkey] && options[options.interpolationkey]) {
      optForCache = {
        ...optForCache,
        [options.interpolationkey]: undefined
      };
    }
    const key = lng + JSON.stringify(optForCache);
    let formatter = cache[key];
    if (!formatter) {
      formatter = fn(getCleanedCode(lng), options);
      cache[key] = formatter;
    }
    return formatter(val);
  };
};
class Formatter {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.logger = baseLogger.create('formatter');
    this.options = options;
    this.formats = {
      number: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt
        });
        return val => formatter.format(val);
      }),
      currency: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt,
          style: 'currency'
        });
        return val => formatter.format(val);
      }),
      datetime: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.DateTimeFormat(lng, {
          ...opt
        });
        return val => formatter.format(val);
      }),
      relativetime: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.RelativeTimeFormat(lng, {
          ...opt
        });
        return val => formatter.format(val, opt.range || 'day');
      }),
      list: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.ListFormat(lng, {
          ...opt
        });
        return val => formatter.format(val);
      })
    };
    this.init(options);
  }
  init(services) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      interpolation: {}
    };
    this.formatSeparator = options.interpolation.formatSeparator || ',';
  }
  add(name, fc) {
    this.formats[name.toLowerCase().trim()] = fc;
  }
  addCached(name, fc) {
    this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
  }
  format(value, format, lng) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    const formats = format.split(this.formatSeparator);
    if (formats.length > 1 && formats[0].indexOf('(') > 1 && formats[0].indexOf(')') < 0 && formats.find(f => f.indexOf(')') > -1)) {
      const lastIndex = formats.findIndex(f => f.indexOf(')') > -1);
      formats[0] = [formats[0], ...formats.splice(1, lastIndex)].join(this.formatSeparator);
    }
    const result = formats.reduce((mem, f) => {
      const {
        formatName,
        formatOptions
      } = parseFormatStr(f);
      if (this.formats[formatName]) {
        let formatted = mem;
        try {
          const valOptions = options && options.formatParams && options.formatParams[options.interpolationkey] || {};
          const l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
          formatted = this.formats[formatName](mem, l, {
            ...formatOptions,
            ...options,
            ...valOptions
          });
        } catch (error) {
          this.logger.warn(error);
        }
        return formatted;
      } else {
        this.logger.warn(`there was no format function for ${formatName}`);
      }
      return mem;
    }, value);
    return result;
  }
}

const removePending = (q, name) => {
  if (q.pending[name] !== undefined) {
    delete q.pending[name];
    q.pendingCount--;
  }
};
class Connector extends EventEmitter {
  constructor(backend, store, services) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    super();
    this.backend = backend;
    this.store = store;
    this.services = services;
    this.languageUtils = services.languageUtils;
    this.options = options;
    this.logger = baseLogger.create('backendConnector');
    this.waitingReads = [];
    this.maxParallelReads = options.maxParallelReads || 10;
    this.readingCalls = 0;
    this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
    this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
    this.state = {};
    this.queue = [];
    if (this.backend && this.backend.init) {
      this.backend.init(services, options.backend, options);
    }
  }
  queueLoad(languages, namespaces, options, callback) {
    const toLoad = {};
    const pending = {};
    const toLoadLanguages = {};
    const toLoadNamespaces = {};
    languages.forEach(lng => {
      let hasAllNamespaces = true;
      namespaces.forEach(ns => {
        const name = `${lng}|${ns}`;
        if (!options.reload && this.store.hasResourceBundle(lng, ns)) {
          this.state[name] = 2;
        } else if (this.state[name] < 0) ; else if (this.state[name] === 1) {
          if (pending[name] === undefined) pending[name] = true;
        } else {
          this.state[name] = 1;
          hasAllNamespaces = false;
          if (pending[name] === undefined) pending[name] = true;
          if (toLoad[name] === undefined) toLoad[name] = true;
          if (toLoadNamespaces[ns] === undefined) toLoadNamespaces[ns] = true;
        }
      });
      if (!hasAllNamespaces) toLoadLanguages[lng] = true;
    });
    if (Object.keys(toLoad).length || Object.keys(pending).length) {
      this.queue.push({
        pending,
        pendingCount: Object.keys(pending).length,
        loaded: {},
        errors: [],
        callback
      });
    }
    return {
      toLoad: Object.keys(toLoad),
      pending: Object.keys(pending),
      toLoadLanguages: Object.keys(toLoadLanguages),
      toLoadNamespaces: Object.keys(toLoadNamespaces)
    };
  }
  loaded(name, err, data) {
    const s = name.split('|');
    const lng = s[0];
    const ns = s[1];
    if (err) this.emit('failedLoading', lng, ns, err);
    if (!err && data) {
      this.store.addResourceBundle(lng, ns, data, undefined, undefined, {
        skipCopy: true
      });
    }
    this.state[name] = err ? -1 : 2;
    if (err && data) this.state[name] = 0;
    const loaded = {};
    this.queue.forEach(q => {
      pushPath(q.loaded, [lng], ns);
      removePending(q, name);
      if (err) q.errors.push(err);
      if (q.pendingCount === 0 && !q.done) {
        Object.keys(q.loaded).forEach(l => {
          if (!loaded[l]) loaded[l] = {};
          const loadedKeys = q.loaded[l];
          if (loadedKeys.length) {
            loadedKeys.forEach(n => {
              if (loaded[l][n] === undefined) loaded[l][n] = true;
            });
          }
        });
        q.done = true;
        if (q.errors.length) {
          q.callback(q.errors);
        } else {
          q.callback();
        }
      }
    });
    this.emit('loaded', loaded);
    this.queue = this.queue.filter(q => !q.done);
  }
  read(lng, ns, fcName) {
    let tried = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    let wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.retryTimeout;
    let callback = arguments.length > 5 ? arguments[5] : undefined;
    if (!lng.length) return callback(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng,
        ns,
        fcName,
        tried,
        wait,
        callback
      });
      return;
    }
    this.readingCalls++;
    const resolver = (err, data) => {
      this.readingCalls--;
      if (this.waitingReads.length > 0) {
        const next = this.waitingReads.shift();
        this.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
      }
      if (err && data && tried < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, lng, ns, fcName, tried + 1, wait * 2, callback);
        }, wait);
        return;
      }
      callback(err, data);
    };
    const fc = this.backend[fcName].bind(this.backend);
    if (fc.length === 2) {
      try {
        const r = fc(lng, ns);
        if (r && typeof r.then === 'function') {
          r.then(data => resolver(null, data)).catch(resolver);
        } else {
          resolver(null, r);
        }
      } catch (err) {
        resolver(err);
      }
      return;
    }
    return fc(lng, ns, resolver);
  }
  prepareLoading(languages, namespaces) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let callback = arguments.length > 3 ? arguments[3] : undefined;
    if (!this.backend) {
      this.logger.warn('No backend was added via i18next.use. Will not load resources.');
      return callback && callback();
    }
    if (isString(languages)) languages = this.languageUtils.toResolveHierarchy(languages);
    if (isString(namespaces)) namespaces = [namespaces];
    const toLoad = this.queueLoad(languages, namespaces, options, callback);
    if (!toLoad.toLoad.length) {
      if (!toLoad.pending.length) callback();
      return null;
    }
    toLoad.toLoad.forEach(name => {
      this.loadOne(name);
    });
  }
  load(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {}, callback);
  }
  reload(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {
      reload: true
    }, callback);
  }
  loadOne(name) {
    let prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    const s = name.split('|');
    const lng = s[0];
    const ns = s[1];
    this.read(lng, ns, 'read', undefined, undefined, (err, data) => {
      if (err) this.logger.warn(`${prefix}loading namespace ${ns} for language ${lng} failed`, err);
      if (!err && data) this.logger.log(`${prefix}loaded namespace ${ns} for language ${lng}`, data);
      this.loaded(name, err, data);
    });
  }
  saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
    let options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
    let clb = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : () => {};
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
      this.logger.warn(`did not save key "${key}" as the namespace "${namespace}" was not yet loaded`, 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
      return;
    }
    if (key === undefined || key === null || key === '') return;
    if (this.backend && this.backend.create) {
      const opts = {
        ...options,
        isUpdate
      };
      const fc = this.backend.create.bind(this.backend);
      if (fc.length < 6) {
        try {
          let r;
          if (fc.length === 5) {
            r = fc(languages, namespace, key, fallbackValue, opts);
          } else {
            r = fc(languages, namespace, key, fallbackValue);
          }
          if (r && typeof r.then === 'function') {
            r.then(data => clb(null, data)).catch(clb);
          } else {
            clb(null, r);
          }
        } catch (err) {
          clb(err);
        }
      } else {
        fc(languages, namespace, key, fallbackValue, clb, opts);
      }
    }
    if (!languages || !languages[0]) return;
    this.store.addResource(languages[0], namespace, key, fallbackValue);
  }
}

const get = () => ({
  debug: false,
  initImmediate: true,
  ns: ['translation'],
  defaultNS: ['translation'],
  fallbackLng: ['dev'],
  fallbackNS: false,
  supportedLngs: false,
  nonExplicitSupportedLngs: false,
  load: 'all',
  preload: false,
  simplifyPluralSuffix: true,
  keySeparator: '.',
  nsSeparator: ':',
  pluralSeparator: '_',
  contextSeparator: '_',
  partialBundledLanguages: false,
  saveMissing: false,
  updateMissing: false,
  saveMissingTo: 'fallback',
  saveMissingPlurals: true,
  missingKeyHandler: false,
  missingInterpolationHandler: false,
  postProcess: false,
  postProcessPassResolved: false,
  returnNull: false,
  returnEmptyString: true,
  returnObjects: false,
  joinArrays: false,
  returnedObjectHandler: false,
  parseMissingKeyHandler: false,
  appendNamespaceToMissingKey: false,
  appendNamespaceToCIMode: false,
  overloadTranslationOptionHandler: args => {
    let ret = {};
    if (typeof args[1] === 'object') ret = args[1];
    if (isString(args[1])) ret.defaultValue = args[1];
    if (isString(args[2])) ret.tDescription = args[2];
    if (typeof args[2] === 'object' || typeof args[3] === 'object') {
      const options = args[3] || args[2];
      Object.keys(options).forEach(key => {
        ret[key] = options[key];
      });
    }
    return ret;
  },
  interpolation: {
    escapeValue: true,
    format: value => value,
    prefix: '{{',
    suffix: '}}',
    formatSeparator: ',',
    unescapePrefix: '-',
    nestingPrefix: '$t(',
    nestingSuffix: ')',
    nestingOptionsSeparator: ',',
    maxReplaces: 1000,
    skipOnVariables: true
  }
});
const transformOptions = options => {
  if (isString(options.ns)) options.ns = [options.ns];
  if (isString(options.fallbackLng)) options.fallbackLng = [options.fallbackLng];
  if (isString(options.fallbackNS)) options.fallbackNS = [options.fallbackNS];
  if (options.supportedLngs && options.supportedLngs.indexOf('cimode') < 0) {
    options.supportedLngs = options.supportedLngs.concat(['cimode']);
  }
  return options;
};

const noop = () => {};
const bindMemberFunctions = inst => {
  const mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
  mems.forEach(mem => {
    if (typeof inst[mem] === 'function') {
      inst[mem] = inst[mem].bind(inst);
    }
  });
};
class I18n extends EventEmitter {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : undefined;
    super();
    this.options = transformOptions(options);
    this.services = {};
    this.logger = baseLogger;
    this.modules = {
      external: []
    };
    bindMemberFunctions(this);
    if (callback && !this.isInitialized && !options.isClone) {
      if (!this.options.initImmediate) {
        this.init(options, callback);
        return this;
      }
      setTimeout(() => {
        this.init(options, callback);
      }, 0);
    }
  }
  init() {
    var _this = this;
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : undefined;
    this.isInitializing = true;
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (!options.defaultNS && options.defaultNS !== false && options.ns) {
      if (isString(options.ns)) {
        options.defaultNS = options.ns;
      } else if (options.ns.indexOf('translation') < 0) {
        options.defaultNS = options.ns[0];
      }
    }
    const defOpts = get();
    this.options = {
      ...defOpts,
      ...this.options,
      ...transformOptions(options)
    };
    if (this.options.compatibilityAPI !== 'v1') {
      this.options.interpolation = {
        ...defOpts.interpolation,
        ...this.options.interpolation
      };
    }
    if (options.keySeparator !== undefined) {
      this.options.userDefinedKeySeparator = options.keySeparator;
    }
    if (options.nsSeparator !== undefined) {
      this.options.userDefinedNsSeparator = options.nsSeparator;
    }
    const createClassOnDemand = ClassOrObject => {
      if (!ClassOrObject) return null;
      if (typeof ClassOrObject === 'function') return new ClassOrObject();
      return ClassOrObject;
    };
    if (!this.options.isClone) {
      if (this.modules.logger) {
        baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
      } else {
        baseLogger.init(null, this.options);
      }
      let formatter;
      if (this.modules.formatter) {
        formatter = this.modules.formatter;
      } else if (typeof Intl !== 'undefined') {
        formatter = Formatter;
      }
      const lu = new LanguageUtil(this.options);
      this.store = new ResourceStore(this.options.resources, this.options);
      const s = this.services;
      s.logger = baseLogger;
      s.resourceStore = this.store;
      s.languageUtils = lu;
      s.pluralResolver = new PluralResolver(lu, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      });
      if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
        s.formatter = createClassOnDemand(formatter);
        s.formatter.init(s, this.options);
        this.options.interpolation.format = s.formatter.format.bind(s.formatter);
      }
      s.interpolator = new Interpolator(this.options);
      s.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      };
      s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
      s.backendConnector.on('*', function (event) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        _this.emit(event, ...args);
      });
      if (this.modules.languageDetector) {
        s.languageDetector = createClassOnDemand(this.modules.languageDetector);
        if (s.languageDetector.init) s.languageDetector.init(s, this.options.detection, this.options);
      }
      if (this.modules.i18nFormat) {
        s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
        if (s.i18nFormat.init) s.i18nFormat.init(this);
      }
      this.translator = new Translator(this.services, this.options);
      this.translator.on('*', function (event) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        _this.emit(event, ...args);
      });
      this.modules.external.forEach(m => {
        if (m.init) m.init(this);
      });
    }
    this.format = this.options.interpolation.format;
    if (!callback) callback = noop;
    if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      if (codes.length > 0 && codes[0] !== 'dev') this.options.lng = codes[0];
    }
    if (!this.services.languageDetector && !this.options.lng) {
      this.logger.warn('init: no languageDetector is used and no lng is defined');
    }
    const storeApi = ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
    storeApi.forEach(fcName => {
      this[fcName] = function () {
        return _this.store[fcName](...arguments);
      };
    });
    const storeApiChained = ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'];
    storeApiChained.forEach(fcName => {
      this[fcName] = function () {
        _this.store[fcName](...arguments);
        return _this;
      };
    });
    const deferred = defer();
    const load = () => {
      const finish = (err, t) => {
        this.isInitializing = false;
        if (this.isInitialized && !this.initializedStoreOnce) this.logger.warn('init: i18next is already initialized. You should call init just once!');
        this.isInitialized = true;
        if (!this.options.isClone) this.logger.log('initialized', this.options);
        this.emit('initialized', this.options);
        deferred.resolve(t);
        callback(err, t);
      };
      if (this.languages && this.options.compatibilityAPI !== 'v1' && !this.isInitialized) return finish(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, finish);
    };
    if (this.options.resources || !this.options.initImmediate) {
      load();
    } else {
      setTimeout(load, 0);
    }
    return deferred;
  }
  loadResources(language) {
    let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
    let usedCallback = callback;
    const usedLng = isString(language) ? language : this.language;
    if (typeof language === 'function') usedCallback = language;
    if (!this.options.resources || this.options.partialBundledLanguages) {
      if (usedLng && usedLng.toLowerCase() === 'cimode' && (!this.options.preload || this.options.preload.length === 0)) return usedCallback();
      const toLoad = [];
      const append = lng => {
        if (!lng) return;
        if (lng === 'cimode') return;
        const lngs = this.services.languageUtils.toResolveHierarchy(lng);
        lngs.forEach(l => {
          if (l === 'cimode') return;
          if (toLoad.indexOf(l) < 0) toLoad.push(l);
        });
      };
      if (!usedLng) {
        const fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        fallbacks.forEach(l => append(l));
      } else {
        append(usedLng);
      }
      if (this.options.preload) {
        this.options.preload.forEach(l => append(l));
      }
      this.services.backendConnector.load(toLoad, this.options.ns, e => {
        if (!e && !this.resolvedLanguage && this.language) this.setResolvedLanguage(this.language);
        usedCallback(e);
      });
    } else {
      usedCallback(null);
    }
  }
  reloadResources(lngs, ns, callback) {
    const deferred = defer();
    if (typeof lngs === 'function') {
      callback = lngs;
      lngs = undefined;
    }
    if (typeof ns === 'function') {
      callback = ns;
      ns = undefined;
    }
    if (!lngs) lngs = this.languages;
    if (!ns) ns = this.options.ns;
    if (!callback) callback = noop;
    this.services.backendConnector.reload(lngs, ns, err => {
      deferred.resolve();
      callback(err);
    });
    return deferred;
  }
  use(module) {
    if (!module) throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
    if (!module.type) throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');
    if (module.type === 'backend') {
      this.modules.backend = module;
    }
    if (module.type === 'logger' || module.log && module.warn && module.error) {
      this.modules.logger = module;
    }
    if (module.type === 'languageDetector') {
      this.modules.languageDetector = module;
    }
    if (module.type === 'i18nFormat') {
      this.modules.i18nFormat = module;
    }
    if (module.type === 'postProcessor') {
      postProcessor.addPostProcessor(module);
    }
    if (module.type === 'formatter') {
      this.modules.formatter = module;
    }
    if (module.type === '3rdParty') {
      this.modules.external.push(module);
    }
    return this;
  }
  setResolvedLanguage(l) {
    if (!l || !this.languages) return;
    if (['cimode', 'dev'].indexOf(l) > -1) return;
    for (let li = 0; li < this.languages.length; li++) {
      const lngInLngs = this.languages[li];
      if (['cimode', 'dev'].indexOf(lngInLngs) > -1) continue;
      if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
        this.resolvedLanguage = lngInLngs;
        break;
      }
    }
  }
  changeLanguage(lng, callback) {
    var _this2 = this;
    this.isLanguageChangingTo = lng;
    const deferred = defer();
    this.emit('languageChanging', lng);
    const setLngProps = l => {
      this.language = l;
      this.languages = this.services.languageUtils.toResolveHierarchy(l);
      this.resolvedLanguage = undefined;
      this.setResolvedLanguage(l);
    };
    const done = (err, l) => {
      if (l) {
        setLngProps(l);
        this.translator.changeLanguage(l);
        this.isLanguageChangingTo = undefined;
        this.emit('languageChanged', l);
        this.logger.log('languageChanged', l);
      } else {
        this.isLanguageChangingTo = undefined;
      }
      deferred.resolve(function () {
        return _this2.t(...arguments);
      });
      if (callback) callback(err, function () {
        return _this2.t(...arguments);
      });
    };
    const setLng = lngs => {
      if (!lng && !lngs && this.services.languageDetector) lngs = [];
      const l = isString(lngs) ? lngs : this.services.languageUtils.getBestMatchFromCodes(lngs);
      if (l) {
        if (!this.language) {
          setLngProps(l);
        }
        if (!this.translator.language) this.translator.changeLanguage(l);
        if (this.services.languageDetector && this.services.languageDetector.cacheUserLanguage) this.services.languageDetector.cacheUserLanguage(l);
      }
      this.loadResources(l, err => {
        done(err, l);
      });
    };
    if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
      setLng(this.services.languageDetector.detect());
    } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
      if (this.services.languageDetector.detect.length === 0) {
        this.services.languageDetector.detect().then(setLng);
      } else {
        this.services.languageDetector.detect(setLng);
      }
    } else {
      setLng(lng);
    }
    return deferred;
  }
  getFixedT(lng, ns, keyPrefix) {
    var _this3 = this;
    const fixedT = function (key, opts) {
      let options;
      if (typeof opts !== 'object') {
        for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
          rest[_key3 - 2] = arguments[_key3];
        }
        options = _this3.options.overloadTranslationOptionHandler([key, opts].concat(rest));
      } else {
        options = {
          ...opts
        };
      }
      options.lng = options.lng || fixedT.lng;
      options.lngs = options.lngs || fixedT.lngs;
      options.ns = options.ns || fixedT.ns;
      if (options.keyPrefix !== '') options.keyPrefix = options.keyPrefix || keyPrefix || fixedT.keyPrefix;
      const keySeparator = _this3.options.keySeparator || '.';
      let resultKey;
      if (options.keyPrefix && Array.isArray(key)) {
        resultKey = key.map(k => `${options.keyPrefix}${keySeparator}${k}`);
      } else {
        resultKey = options.keyPrefix ? `${options.keyPrefix}${keySeparator}${key}` : key;
      }
      return _this3.t(resultKey, options);
    };
    if (isString(lng)) {
      fixedT.lng = lng;
    } else {
      fixedT.lngs = lng;
    }
    fixedT.ns = ns;
    fixedT.keyPrefix = keyPrefix;
    return fixedT;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(ns) {
    this.options.defaultNS = ns;
  }
  hasLoadedNamespace(ns) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!this.isInitialized) {
      this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages);
      return false;
    }
    if (!this.languages || !this.languages.length) {
      this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages);
      return false;
    }
    const lng = options.lng || this.resolvedLanguage || this.languages[0];
    const fallbackLng = this.options ? this.options.fallbackLng : false;
    const lastLng = this.languages[this.languages.length - 1];
    if (lng.toLowerCase() === 'cimode') return true;
    const loadNotPending = (l, n) => {
      const loadState = this.services.backendConnector.state[`${l}|${n}`];
      return loadState === -1 || loadState === 0 || loadState === 2;
    };
    if (options.precheck) {
      const preResult = options.precheck(this, loadNotPending);
      if (preResult !== undefined) return preResult;
    }
    if (this.hasResourceBundle(lng, ns)) return true;
    if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages) return true;
    if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
    return false;
  }
  loadNamespaces(ns, callback) {
    const deferred = defer();
    if (!this.options.ns) {
      if (callback) callback();
      return Promise.resolve();
    }
    if (isString(ns)) ns = [ns];
    ns.forEach(n => {
      if (this.options.ns.indexOf(n) < 0) this.options.ns.push(n);
    });
    this.loadResources(err => {
      deferred.resolve();
      if (callback) callback(err);
    });
    return deferred;
  }
  loadLanguages(lngs, callback) {
    const deferred = defer();
    if (isString(lngs)) lngs = [lngs];
    const preloaded = this.options.preload || [];
    const newLngs = lngs.filter(lng => preloaded.indexOf(lng) < 0 && this.services.languageUtils.isSupportedCode(lng));
    if (!newLngs.length) {
      if (callback) callback();
      return Promise.resolve();
    }
    this.options.preload = preloaded.concat(newLngs);
    this.loadResources(err => {
      deferred.resolve();
      if (callback) callback(err);
    });
    return deferred;
  }
  dir(lng) {
    if (!lng) lng = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language);
    if (!lng) return 'rtl';
    const rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ug', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam', 'ckb'];
    const languageUtils = this.services && this.services.languageUtils || new LanguageUtil(get());
    return rtlLngs.indexOf(languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf('-arab') > 1 ? 'rtl' : 'ltr';
  }
  static createInstance() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : undefined;
    return new I18n(options, callback);
  }
  cloneInstance() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
    const forkResourceStore = options.forkResourceStore;
    if (forkResourceStore) delete options.forkResourceStore;
    const mergedOptions = {
      ...this.options,
      ...options,
      ...{
        isClone: true
      }
    };
    const clone = new I18n(mergedOptions);
    if (options.debug !== undefined || options.prefix !== undefined) {
      clone.logger = clone.logger.clone(options);
    }
    const membersToCopy = ['store', 'services', 'language'];
    membersToCopy.forEach(m => {
      clone[m] = this[m];
    });
    clone.services = {
      ...this.services
    };
    clone.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    if (forkResourceStore) {
      clone.store = new ResourceStore(this.store.data, mergedOptions);
      clone.services.resourceStore = clone.store;
    }
    clone.translator = new Translator(clone.services, mergedOptions);
    clone.translator.on('*', function (event) {
      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }
      clone.emit(event, ...args);
    });
    clone.init(mergedOptions, callback);
    clone.translator.options = mergedOptions;
    clone.translator.backendConnector.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    return clone;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const instance = I18n.createInstance();
instance.createInstance = I18n.createInstance;

module.exports = instance;


/***/ }),

/***/ "./node_modules/lodash.debounce/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.debounce/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/openfin-notifications/dist/client/without-auto-launch.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/openfin-notifications/dist/client/without-auto-launch.js ***!
  \*******************************************************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(()=>{return e={37007:e=>{"use strict";var t,n="object"==typeof Reflect?Reflect:null,i=n&&"function"==typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var r=Number.isNaN||function(e){return e!=e};function o(){o.init.call(this)}e.exports=o,e.exports.once=function(e,t){return new Promise((function(n,i){function r(n){e.removeListener(t,o),i(n)}function o(){"function"==typeof e.removeListener&&e.removeListener("error",r),n([].slice.call(arguments))}m(e,t,o,{once:!0}),"error"!==t&&function(e,t,n){"function"==typeof e.on&&m(e,"error",t,{once:!0})}(e,r)}))},o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var s=10;function a(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function c(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function l(e,t,n,i){var r,o,s,l;if(a(n),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),s=o[t]),void 0===s)s=o[t]=n,++e._eventsCount;else if("function"==typeof s?s=o[t]=i?[n,s]:[s,n]:i?s.unshift(n):s.push(n),(r=c(e))>0&&s.length>r&&!s.warned){s.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=e,u.type=t,u.count=s.length,l=u,console&&console.warn&&console.warn(l)}return e}function u(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function f(e,t,n){var i={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},r=u.bind(i);return r.listener=n,i.wrapFn=r,r}function d(e,t,n){var i=e._events;if(void 0===i)return[];var r=i[t];return void 0===r?[]:"function"==typeof r?n?[r.listener||r]:[r]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(r):v(r,r.length)}function p(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function v(e,t){for(var n=new Array(t),i=0;i<t;++i)n[i]=e[i];return n}function m(e,t,n,i){if("function"==typeof e.on)i.once?e.once(t,n):e.on(t,n);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function r(o){i.once&&e.removeEventListener(t,r),n(o)}))}}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!=typeof e||e<0||r(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||r(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return c(this)},o.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,o=this._events;if(void 0!==o)r=r&&void 0===o.error;else if(!r)return!1;if(r){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var a=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a}var c=o[e];if(void 0===c)return!1;if("function"==typeof c)i(c,this,t);else{var l=c.length,u=v(c,l);for(n=0;n<l;++n)i(u[n],this,t)}return!0},o.prototype.addListener=function(e,t){return l(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return l(this,e,t,!0)},o.prototype.once=function(e,t){return a(t),this.on(e,f(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){return a(t),this.prependListener(e,f(this,e,t)),this},o.prototype.removeListener=function(e,t){var n,i,r,o,s;if(a(t),void 0===(i=this._events))return this;if(void 0===(n=i[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(r=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){s=n[o].listener,r=o;break}if(r<0)return this;0===r?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,r),1===n.length&&(i[e]=n[0]),void 0!==i.removeListener&&this.emit("removeListener",e,s||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,n,i;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var r,o=Object.keys(n);for(i=0;i<o.length;++i)"removeListener"!==(r=o[i])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this},o.prototype.listeners=function(e){return d(this,e,!0)},o.prototype.rawListeners=function(e){return d(this,e,!1)},o.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):p.call(e,t)},o.prototype.listenerCount=p,o.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}},3089:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DeferredPromise=class{constructor(){const e=new Promise(((e,t)=>{this._resolve=e,this._reject=t}));this._promise=e}get promise(){return this._promise}get resolve(){return this._resolve}get reject(){return this._reject}}},22777:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(3089);async function r(e,t){let n=0;for(const i of e)await t(i,n,e),n++}async function o(e,t){await Promise.all(e.map(t))}function s(e,t,n){const r=new i.DeferredPromise,o=e.add(((...e)=>{t(...e)&&(o.remove(),r.resolve())}));return n&&n.catch((e=>{o.remove(),r.reject(e)})),a(r.promise)}function a(e){return e.catch((()=>{})),e}t.serialForEach=r,t.serialMap=async function(e,t){const n=[];return await r(e,(async(e,i,r)=>{n.push(await t(e,i,r))})),n},t.serialFilter=async function(e,t){const n=[];return await r(e,(async(e,i,r)=>{await t(e,i,r)&&n.push(e)})),n},t.parallelForEach=o,t.parallelMap=async function(e,t){const n=[];return await o(e,(async(e,i,r)=>{n[i]=await t(e,i,r)})),n},t.parallelFilter=async function(e,t){const n=[];return await o(e,(async(e,i,r)=>{n[i]=await t(e,i,r)})),e.filter(((e,t)=>n[t]))},t.withStrictTimeout=function(e,t,n){const i=new Promise(((t,i)=>setTimeout((()=>i(new Error(n))),e)));return a(Promise.race([i,t]))},t.withTimeout=function(e,t){const n=new Promise((t=>setTimeout((()=>t([!0,void 0])),e))),i=t.then((e=>[!1,e]));return Promise.race([n,i])},t.untilTrue=function(e,t,n){return t()?Promise.resolve():s(e,t,n)},t.untilSignal=s,t.allowReject=a},95785:(e,t,n)=>{"use strict";function i(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),i(n(22777)),i(n(3089))},40651:e=>{e.exports=function(e,t){for(var n=e.split("."),i=t.split("."),r=0;r<3;r++){var o=Number(n[r]),s=Number(i[r]);if(o>s)return 1;if(s>o)return-1;if(!isNaN(o)&&isNaN(s))return 1;if(isNaN(o)&&!isNaN(s))return-1}return 0}},33657:function(e,t,n){"use strict";var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.getEventRouter=t.eventEmitter=t.EventRouter=void 0;const r=n(37007),o=n(11154),s=n(59603);class a{constructor(e){this._emitterProviders={},this._deserializers={},this._defaultEmitter=e}registerEmitterProvider(e,t){this._emitterProviders[e]=t}registerDeserializer(e,t){this._deserializers[e]=t}dispatchEvent(e){const{type:t,target:n}=e,r=i(e,["type","target"]);let a;if(!n)throw new Error("Invalid event, no target specified");if("default"===n)a=this._defaultEmitter;else{if(!this._emitterProviders[n.type])throw new Error(`Invalid target, no provider registered for '${n.type}'`);a=this._emitterProviders[n.type](n.id)}const c=Object.assign({type:t},r),l=this._deserializers[t];l?a.emit(t,l(c)):"notification-form-submitted"===t?function(e,t){let n=!1;e.preventDefault=()=>n=!0,t.emit("notification-form-submitted",e),n||(0,o.tryServiceDispatch)(s.APITopic.SET_FORM_STATUS_OPTIONS,{formStatus:"submitted",_notificationId:e.notification.id})}(c,a):a.emit(t,c)}}let c;t.EventRouter=a,t.eventEmitter=new r.EventEmitter,t.getEventRouter=function(){return c||(c=new a(t.eventEmitter)),c}},86455:(e,t)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.ActionBodyClickType=t.ActionNoopType=t.ActionTrigger=void 0,(n=t.ActionTrigger||(t.ActionTrigger={})).CONTROL="control",n.SELECT="select",n.CLOSE="close",n.EXPIRE="expire",n.PROGRAMMATIC="programmatic",(t.ActionNoopType||(t.ActionNoopType={})).EVENT_DISMISS="event_dismiss",(t.ActionBodyClickType||(t.ActionBodyClickType={})).DISMISS_EVENT="dismiss_event"},27167:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getChannelClient=t.clearAwaitedChannelClient=t.initAwaitedChannelClient=t.ChannelClientConfig=void 0;const i=n(59603),r=n(75762);t.ChannelClientConfig={serviceChannel:i.SERVICE_CHANNEL};const o=async({wait:e})=>{await r.Log.info("Connecting to Notifications...");const n=await fin.InterApplicationBus.Channel.connect(t.ChannelClientConfig.serviceChannel,{wait:e,payload:{version:"2.9.1-alpha-3787"}});return await r.Log.info("Successfully connected to Notifications."),n};let s,a;t.initAwaitedChannelClient=()=>s?{channelClientPromise:s,isInit:!1}:(s=o({wait:!0}),s.catch((e=>(0,t.clearAwaitedChannelClient)())),{channelClientPromise:s,isInit:!0}),t.clearAwaitedChannelClient=()=>{s=null},t.getChannelClient=async()=>s||(async()=>{if(!a){try{a=await o({wait:!1}),a.setDefaultAction((()=>!1))}catch(e){throw await r.Log.error('Could not find channel provider. Did you call "notifications.register()"?'),e}a.onDisconnection((()=>{a=null}))}return a})()},11154:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.tryServiceDispatch=t.getServicePromise=t.launchSystemApp=t.connectToNotifications=void 0;const i=n(95785),r=n(59603),o=n(33657),s=n(27167);let a;const c=new i.DeferredPromise;let l=!1;async function u(){if(window.navigator.appVersion.includes("Windows"))try{const e=await fin.System.getRvmInfo();parseInt(e.version.split(".")[0])>=6&&(fin.System.launchManifest?fin.System.launchManifest("fins://system-apps/notification-center",{noUi:!0}).catch((e=>{console.error("Unable to launch the Notification Center as a system app",e)})):fin.System.openUrlWithBrowser("fins://system-apps/notification-center").catch((()=>{})))}catch(e){}else fin.System.openUrlWithBrowser("fins://system-apps/notification-center")}async function f(){var e;if(await c.promise,!a){if("undefined"==typeof fin){const e="fin is not defined. The openfin-notifications module is only intended for use in an OpenFin application.";return a=Promise.reject(new Error(e)),a}fin.System.getVersion().then((e=>{const t=parseInt(e.split(".")[2]);t<53&&console.warn(`API version ${t} of OpenFin version ${e} is less than 53. Please upgrade the runtime version.`)}));const{name:t,uuid:n}=null!==(e=fin.me.identity)&&void 0!==e?e:fin.Window.me;if(n===r.SERVICE_IDENTITY.uuid&&t===r.SERVICE_IDENTITY.name)a=Promise.reject(new Error("Trying to connect to provider from provider"));else{const e=window.setTimeout((()=>{console.warn("Taking a long time to connect to Notifications service. Is the Notifications service running?")}),5e3);a=(0,s.initAwaitedChannelClient)().channelClientPromise.then((t=>{window.clearTimeout(e);const n=(0,o.getEventRouter)();return t.register("WARN",(e=>console.warn(e))),t.register("event",(e=>{n.dispatchEvent(e)})),t.setDefaultAction((()=>!1)),t.onDisconnection((()=>{console.warn("Disconnected from Notifications service"),(0,s.clearAwaitedChannelClient)(),l=!0,a=null,u(),setTimeout((()=>{console.log("Attempting to reconnect to Notifications service"),f()}),300)})),l?console.log("Reconnected to Notifications service"):console.log("Connected to Notifications service"),t}))}}return a}t.connectToNotifications=function(){"undefined"!=typeof fin&&"undefined"!=typeof window?(u(),f(),"loading"!==document.readyState?c.resolve():(window.addEventListener("DOMContentLoaded",(()=>{c.resolve()})),document.addEventListener("DOMContentLoaded",(()=>{c.resolve()})))):console.warn("Could not connect to notifications, `fin` is not defined")},t.launchSystemApp=u,t.getServicePromise=f,t.tryServiceDispatch=async function(e,t){return(await(0,s.getChannelClient)()).dispatch(e,t)}},87204:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},93955:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FieldType=void 0,t.FieldType={string:"string",number:"number",boolean:"boolean",date:"date",checkboxGroup:"checkboxGroup",radioGroup:"radioGroup",time:"time"}},68912:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,r)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(93955),t),r(n(33713),t)},33713:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WidgetType=t.TimeWidgetType=t.DateWidgetType=t.RadioGroupWidgetType=t.CheckboxGroupWidgetType=t.BooleanWidgetType=t.NumberWidgetType=t.StringWidgetType=void 0,t.StringWidgetType={Text:"Text",Dropdown:"Dropdown"},t.NumberWidgetType={Number:"Number"},t.BooleanWidgetType={Toggle:"Toggle",Checkbox:"Checkbox"},t.CheckboxGroupWidgetType={CheckboxGroup:"CheckboxGroup"},t.RadioGroupWidgetType={RadioGroup:"RadioGroup"},t.DateWidgetType={Date:"Date"},t.TimeWidgetType={Time:"Time"},t.WidgetType=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},t.StringWidgetType),t.NumberWidgetType),t.BooleanWidgetType),t.CheckboxGroupWidgetType),t.RadioGroupWidgetType),t.DateWidgetType),t.TimeWidgetType)},46865:(e,t)=>{"use strict";var n,i;Object.defineProperty(t,"__esModule",{value:!0}),t.IndicatorColor=t.IndicatorType=void 0,(i=t.IndicatorType||(t.IndicatorType={})).FAILURE="failure",i.WARNING="warning",i.SUCCESS="success",(n=t.IndicatorColor||(t.IndicatorColor={})).RED="red",n.GREEN="green",n.YELLOW="yellow",n.BLUE="blue",n.PURPLE="purple",n.GRAY="gray",n.ORANGE="orange",n.MAGENTA="magenta",n.TEAL="teal"},59603:(e,t)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.APITopic=t.getChannelName=t.SERVICE_CHANNEL=t.SERVICE_IDENTITY=void 0,t.SERVICE_IDENTITY={uuid:"notifications-service",name:"notifications-service"},t.SERVICE_CHANNEL="of-notifications-service-v1",t.getChannelName=e=>e===t.SERVICE_IDENTITY.uuid?t.SERVICE_CHANNEL:`${e}-${t.SERVICE_CHANNEL}`,(n=t.APITopic||(t.APITopic={})).CREATE_NOTIFICATION="create-notification",n.UPDATE_NOTIFICATION="update-notification",n.CLEAR_NOTIFICATION="clear-notification",n.GET_APP_NOTIFICATIONS="fetch-app-notifications",n.CLEAR_APP_NOTIFICATIONS="clear-app-notifications",n.TOGGLE_NOTIFICATION_CENTER="toggle-notification-center",n.ADD_EVENT_LISTENER="add-event-listener",n.REMOVE_EVENT_LISTENER="remove-event-listener",n.GET_PROVIDER_STATUS="get-provider-status",n.GET_NOTIFICATIONS_COUNT="get-notifications-count",n.SHOW_NOTIFICATION_CENTER="show-notification-center",n.HIDE_NOTIFICATION_CENTER="hide-notification-center",n.REGISTER_PLATFORM="register-notifications-platform",n.DEREGISTER_PLATFORM="deregister-notifications-platform",n.SET_FORM_STATUS_OPTIONS="set-form-status-options",n.SET_FORM_VALIDATION_ERRORS="set-form-validation-errors",n.GET_USER_SETTINGS_STATUS="get-user-settings-status",n.SET_DEFAULT_PLATFORM_SHORTCUT="set-default-platform-shortcut",n.SET_NOTIFICATION_SECURITY_RULE="set-notification-security-rule"},75762:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Log=void 0;class n{static async error(e){try{const t=n.getPrefixedMessage(e);console.error(t),await fin.System.log("error",t)}catch(e){n.handleError(e,"Failed to log error")}}static async warn(e){try{const t=n.getPrefixedMessage(e);console.warn(t),await fin.System.log("warning",t)}catch(e){n.handleError(e,"Failed to log warning")}}static async info(e){try{const t=n.getPrefixedMessage(e);console.info(t),await fin.System.log("info",t)}catch(e){n.handleError(e,"Failed to log info")}}static getPrefixedMessage(e){return`${n.LOG_PREFIX} ${e}`}static handleError(e,t){e instanceof Error?console.error(`${t} - ${e.name}: ${e.message}`):console.error(`${t} - ${JSON.stringify(e)}`)}}t.Log=n,n.LOG_PREFIX="[openfin-notifications]"},40707:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,r)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return r(t,e),t},s=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)},a=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.setAllowedOrigins=t.getUserSettingStatus=t.UserSettings=t.getNotificationsCount=t.hide=t.show=t.setDefaultPlatformShortcut=t.toggleNotificationCenter=t.clearAll=t.getAll=t.clear=t.update=t.create=t.removeEventListener=t.addEventListener=t.VERSION=t.NotificationIndicatorType=t.IndicatorColor=t.NotificationIndicatorWithCustomColor=t.NotificationIndicator=t.NotificationOptions=t.provider=t.actions=void 0;const c=n(86455),l=n(11154),u=n(59603),f=n(33657),d=o(n(46451));t.provider=d;const p=n(28173),v=n(46865);Object.defineProperty(t,"NotificationIndicator",{enumerable:!0,get:function(){return v.NotificationIndicator}}),Object.defineProperty(t,"NotificationIndicatorWithCustomColor",{enumerable:!0,get:function(){return v.NotificationIndicatorWithCustomColor}}),Object.defineProperty(t,"NotificationIndicatorType",{enumerable:!0,get:function(){return v.IndicatorType}}),Object.defineProperty(t,"IndicatorColor",{enumerable:!0,get:function(){return v.IndicatorColor}});const m=n(44415);Object.defineProperty(t,"NotificationOptions",{enumerable:!0,get:function(){return m.NotificationOptions}});const g=o(n(86455));t.actions=g,s(n(86455),t),s(n(87204),t),s(n(50295),t),s(n(68912),t),s(n(13154),t),s(n(75050),t),s(n(90512),t),t.VERSION="2.9.1-alpha-3787";const y=(0,f.getEventRouter)();function h(e){const{notification:t}=e;return Object.assign(Object.assign({},e),{notification:Object.assign(Object.assign({},t),{date:new Date(t.date),expires:null!==t.expires?new Date(t.expires):null})})}y.registerDeserializer("notification-created",(e=>h(e))),y.registerDeserializer("notification-toast-dismissed",(e=>h(e))),y.registerDeserializer("notification-closed",(e=>h(e))),y.registerDeserializer("notification-action",(e=>{var t;const n=h(e),{controlSource:i,controlIndex:r}=n,o=a(n,["controlSource","controlIndex"]);return e.trigger===c.ActionTrigger.CONTROL?Object.assign(Object.assign({},o),{control:null===(t=e.notification[i])||void 0===t?void 0:t[r]}):o})),y.registerDeserializer("notifications-count-changed",(e=>e)),y.registerDeserializer("notification-reminder-created",(e=>{const t=h(e),{reminderDate:n}=t,i=a(t,["reminderDate"]);return Object.assign(Object.assign({},i),{reminderDate:new Date(n)})})),y.registerDeserializer("notification-reminder-removed",(e=>h(e))),y.registerDeserializer("notification-sound-toggled",(e=>e)),t.addEventListener=async function(e,t){(0,p.validateEnvironment)(),e=(0,p.sanitizeEventType)(e),t=(0,p.sanitizeFunction)(t);const n=f.eventEmitter.listenerCount(e);"notification-form-submitted"===e&&(t=function(e){return t=>{const n=t.notification.id;t.setFormStatus=e=>(0,l.tryServiceDispatch)(u.APITopic.SET_FORM_STATUS_OPTIONS,Object.assign(Object.assign({},e),{_notificationId:n})),e(t)}}(t)),"notification-form-values-changed"===e&&(t=function(e){return t=>{t.setErrors=e=>(0,l.tryServiceDispatch)(u.APITopic.SET_FORM_VALIDATION_ERRORS,{errors:e,notificationId:t.notification.id}),e(t)}}(t)),f.eventEmitter.addListener(e,t),0===n&&1===f.eventEmitter.listenerCount(e)&&await(0,l.tryServiceDispatch)(u.APITopic.ADD_EVENT_LISTENER,e)},t.removeEventListener=async function(e,t){(0,p.validateEnvironment)(),e=(0,p.sanitizeEventType)(e),t=(0,p.sanitizeFunction)(t),1===f.eventEmitter.listenerCount(e)&&f.eventEmitter.listeners(e)[0]===t&&await(0,l.tryServiceDispatch)(u.APITopic.REMOVE_EVENT_LISTENER,e),f.eventEmitter.removeListener(e,t)},t.create=async function(e,t){if("object"!=typeof e||null===e)throw new Error("Invalid argument passed to create: argument must be an object and must not be null");if(void 0!==e.date&&!(e.date instanceof Date))throw new Error('Invalid argument passed to create: "date" must be a valid Date object');if(void 0!==e.expires&&null!==e.expires&&!(e.expires instanceof Date))throw new Error('Invalid argument passed to create: "expires" must be null or a valid Date object');if(t&&t.reminderDate){if(!1===e.allowReminder)throw new Error('You must not specify a reminder date for a notification with "allowReminder" option set to false.');if(!(t.reminderDate instanceof Date))throw new Error('Invalid argument passed to reminder Options: "date" must a valid Date object');if(e.expires&&e.expires.getTime()<t.reminderDate.getTime())throw new Error("Expiration date must not be earlier than reminder date.")}void 0!==e.category&&null!==e.category||(e.category="default");const n=await(0,l.tryServiceDispatch)(u.APITopic.CREATE_NOTIFICATION,Object.assign(Object.assign({},e),{date:e.date&&e.date.valueOf(),expires:e.expires&&e.expires.valueOf(),reminder:(null==t?void 0:t.reminderDate)&&t.reminderDate.valueOf()}));return Object.assign(Object.assign({},n),{date:new Date(n.date),expires:null!==n.expires?new Date(n.expires):null})},t.update=async function(e){if("object"!=typeof e||null===e)throw new Error("Invalid argument passed to create: argument must be an object and must not be null");if(!e.id)throw new Error('Invalid argument passed to create: "id" must be Id of previously created Notification');const t=await(0,l.tryServiceDispatch)(u.APITopic.UPDATE_NOTIFICATION,Object.assign({},e));return Object.assign({},t)},t.clear=async function(e){return(0,l.tryServiceDispatch)(u.APITopic.CLEAR_NOTIFICATION,{id:e})},t.getAll=async function(){return(await(0,l.tryServiceDispatch)(u.APITopic.GET_APP_NOTIFICATIONS,void 0)).map((e=>Object.assign(Object.assign({},e),{indicator:e.indicator||null,date:new Date(e.date),expires:null!==e.expires?new Date(e.expires):null})))},t.clearAll=async function(){return(0,l.tryServiceDispatch)(u.APITopic.CLEAR_APP_NOTIFICATIONS,void 0)},t.toggleNotificationCenter=async function(){return(0,l.tryServiceDispatch)(u.APITopic.TOGGLE_NOTIFICATION_CENTER,void 0)},t.setDefaultPlatformShortcut=function(e){return(0,l.tryServiceDispatch)(u.APITopic.SET_DEFAULT_PLATFORM_SHORTCUT,e)},t.show=async function(e){return(0,l.tryServiceDispatch)(u.APITopic.SHOW_NOTIFICATION_CENTER,e)},t.hide=async function(){return(0,l.tryServiceDispatch)(u.APITopic.HIDE_NOTIFICATION_CENTER,void 0)},t.getNotificationsCount=async function(){return(0,l.tryServiceDispatch)(u.APITopic.GET_NOTIFICATIONS_COUNT,void 0)},(t.UserSettings||(t.UserSettings={})).SOUND_ENABLED="soundEnabled",t.getUserSettingStatus=async function(e){return(0,l.tryServiceDispatch)(u.APITopic.GET_USER_SETTINGS_STATUS,e)},t.setAllowedOrigins=async e=>(0,l.tryServiceDispatch)(u.APITopic.SET_NOTIFICATION_SECURITY_RULE,{allowedOrigins:e})},46451:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.isConnectedToAtLeast=t.getStatus=void 0;const r=i(n(40651)),o=n(95785),s=n(11154),a=n(59603);function c(){return(0,o.withStrictTimeout)(500,(0,s.tryServiceDispatch)(a.APITopic.GET_PROVIDER_STATUS,void 0),"").catch((()=>({connected:!1,version:null,templateAPIVersion:null})))}t.getStatus=c,t.isConnectedToAtLeast=async function(e){const t=await c();if(t.connected&&null!==t.version){const n=(0,r.default)(t.version,e);if(0===n||1===n)return!0}return!1}},5879:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.register=t.ChannelClientHandlers=void 0;const i=n(59603),r=n(33657),o=n(75762),s=n(27167),a=n(46451);class c{}t.ChannelClientHandlers=c,c.handleDefaultAction=()=>!1,c.handleEventAction=e=>{(0,r.getEventRouter)().dispatchEvent(e)},c.handleWarnAction=async e=>{await o.Log.warn(e)},c.handleDisconnection=async()=>{(0,s.getChannelClient)()&&(await o.Log.warn("Disconnected from Notifications. Reconnecting..."),(0,s.clearAwaitedChannelClient)(),await f(),await d())};let l=null;t.register=async e=>{if(l)return l;try{return l=u(e),await l}finally{l=null}};const u=async e=>{if(null==e?void 0:e.customManifest){if(!e.customManifest.manifestUrl)throw new Error("manifestUrl must be provided.");if(!e.customManifest.manifestUuid)throw new Error("manifestUuid must be provided and must not be an empty string.");if(e.customManifest.manifestUuid===i.SERVICE_CHANNEL)throw new Error(`manifestUuid must not be ${i.SERVICE_CHANNEL}`);s.ChannelClientConfig.serviceChannel=`${e.customManifest.manifestUuid}-${i.SERVICE_CHANNEL}`,await f(e.customManifest.manifestUrl)}else s.ChannelClientConfig.serviceChannel=i.SERVICE_CHANNEL,await f();return await d(),{clientAPIVersion:"2.9.1-alpha-3787",notificationsVersion:(await(0,a.getStatus)()).version||"unknown"}},f=async e=>{try{const t=window.navigator.userAgent.toLowerCase().includes("windows"),n=e||"fins://system-apps/notification-center";t?(await o.Log.info("Launching Notifications via fin.System.launchManifest..."),await fin.System.launchManifest(n,{noUi:!0})):(await o.Log.info("Launching Notifications via fin.System.openUrlWithBrowser..."),await fin.System.openUrlWithBrowser(n))}catch(e){throw e instanceof Error?await o.Log.error(`Failed to launch Notifications - ${e.name}: ${e.message}`):await o.Log.error(`Failed to launch Notifications - ${JSON.stringify(e)}`),e}},d=async()=>{try{const{channelClientPromise:e,isInit:t}=(0,s.initAwaitedChannelClient)(),n=await e;t&&(n.setDefaultAction(c.handleDefaultAction),n.register("event",c.handleEventAction),n.register("WARN",c.handleWarnAction),n.onDisconnection(c.handleDisconnection),fin.Window.wrapSync(i.SERVICE_IDENTITY).once("closed",c.handleDisconnection))}catch(e){throw e instanceof Error?await o.Log.error(`Failed to connect to Notifications - ${e.name}: ${e.message}`):await o.Log.error(`Failed to connect to Notifications - ${JSON.stringify(e)}`),e}}},13154:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},50295:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},75050:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},78364:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},71474:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},90512:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,r)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(78364),t),r(n(71474),t),r(n(44415),t),r(n(15915),t)},44415:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateFragmentNames=t.PresentationTemplateFragmentNames=t.ContainerTemplateFragmentNames=t.TemplateNames=void 0,t.TemplateNames={markdown:"markdown",list:"list",custom:"custom"},t.ContainerTemplateFragmentNames={container:"container"},t.PresentationTemplateFragmentNames={text:"text",image:"image",list:"list",actionableText:"actionableText"},t.TemplateFragmentNames=Object.assign(Object.assign({},t.ContainerTemplateFragmentNames),t.PresentationTemplateFragmentNames)},15915:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},28173:(e,t)=>{"use strict";function n(e,t){let n;try{n=JSON.stringify(e)}catch(e){n=t}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.safeStringify=t.validateEnvironment=t.sanitizeEventType=t.sanitizeFunction=void 0,t.sanitizeFunction=function(e){if("function"!=typeof e)throw new Error(`Invalid argument passed: ${n(e,"The provided value")} is not a valid function`);return e},t.sanitizeEventType=function(e){if("notification-action"===e||"notification-created"===e||"notification-toast-dismissed"===e||"notification-closed"===e||"notifications-count-changed"===e||"notification-form-submitted"===e||"notification-reminder-created"===e||"notification-reminder-removed"===e||"notification-form-values-changed"===e||"notification-sound-toggled"===e)return e;throw new Error(`Invalid argument passed: ${n(e,"The provided event type")} is not a valid Notifications event type`)},t.validateEnvironment=function(){if("undefined"==typeof fin)throw new Error("fin is not defined. The openfin-notifications module is only intended for use in an OpenFin application.")},t.safeStringify=n},80664:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,r)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),t.NotificationsRegistration=t.register=void 0,r(n(40707),t);var o=n(5879);Object.defineProperty(t,"register",{enumerable:!0,get:function(){return o.register}}),Object.defineProperty(t,"NotificationsRegistration",{enumerable:!0,get:function(){return o.NotificationsRegistration}})}},t={},function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,n),o.exports}(80664);var e,t}));

/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


 true &&
  (function () {
    function defineDeprecationWarning(methodName, info) {
      Object.defineProperty(Component.prototype, methodName, {
        get: function () {
          console.warn(
            "%s(...) is deprecated in plain JavaScript React classes. %s",
            info[0],
            info[1]
          );
        }
      });
    }
    function getIteratorFn(maybeIterable) {
      if (null === maybeIterable || "object" !== typeof maybeIterable)
        return null;
      maybeIterable =
        (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
        maybeIterable["@@iterator"];
      return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    function warnNoop(publicInstance, callerName) {
      publicInstance =
        ((publicInstance = publicInstance.constructor) &&
          (publicInstance.displayName || publicInstance.name)) ||
        "ReactClass";
      var warningKey = publicInstance + "." + callerName;
      didWarnStateUpdateForUnmountedComponent[warningKey] ||
        (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          callerName,
          publicInstance
        ),
        (didWarnStateUpdateForUnmountedComponent[warningKey] = !0));
    }
    function Component(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    function ComponentDummy() {}
    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      try {
        testStringCoercion(value);
        var JSCompiler_inline_result = !1;
      } catch (e) {
        JSCompiler_inline_result = !0;
      }
      if (JSCompiler_inline_result) {
        JSCompiler_inline_result = console;
        var JSCompiler_temp_const = JSCompiler_inline_result.error;
        var JSCompiler_inline_result$jscomp$0 =
          ("function" === typeof Symbol &&
            Symbol.toStringTag &&
            value[Symbol.toStringTag]) ||
          value.constructor.name ||
          "Object";
        JSCompiler_temp_const.call(
          JSCompiler_inline_result,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          JSCompiler_inline_result$jscomp$0
        );
        return testStringCoercion(value);
      }
    }
    function getComponentNameFromType(type) {
      if (null == type) return null;
      if ("function" === typeof type)
        return type.$$typeof === REACT_CLIENT_REFERENCE
          ? null
          : type.displayName || type.name || null;
      if ("string" === typeof type) return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
        case REACT_ACTIVITY_TYPE:
          return "Activity";
      }
      if ("object" === typeof type)
        switch (
          ("number" === typeof type.tag &&
            console.error(
              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
            ),
          type.$$typeof)
        ) {
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_CONTEXT_TYPE:
            return (type.displayName || "Context") + ".Provider";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type ||
              ((type = innerType.displayName || innerType.name || ""),
              (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
            return type;
          case REACT_MEMO_TYPE:
            return (
              (innerType = type.displayName || null),
              null !== innerType
                ? innerType
                : getComponentNameFromType(type.type) || "Memo"
            );
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {}
        }
      return null;
    }
    function getTaskName(type) {
      if (type === REACT_FRAGMENT_TYPE) return "<>";
      if (
        "object" === typeof type &&
        null !== type &&
        type.$$typeof === REACT_LAZY_TYPE
      )
        return "<...>";
      try {
        var name = getComponentNameFromType(type);
        return name ? "<" + name + ">" : "<...>";
      } catch (x) {
        return "<...>";
      }
    }
    function getOwner() {
      var dispatcher = ReactSharedInternals.A;
      return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
      return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
      if (hasOwnProperty.call(config, "key")) {
        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
        if (getter && getter.isReactWarning) return !1;
      }
      return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      function warnAboutAccessingKey() {
        specialPropKeyWarningShown ||
          ((specialPropKeyWarningShown = !0),
          console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
      }
      warnAboutAccessingKey.isReactWarning = !0;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: !0
      });
    }
    function elementRefGetterWithDeprecationWarning() {
      var componentName = getComponentNameFromType(this.type);
      didWarnAboutElementRef[componentName] ||
        ((didWarnAboutElementRef[componentName] = !0),
        console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
      componentName = this.props.ref;
      return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(
      type,
      key,
      self,
      source,
      owner,
      props,
      debugStack,
      debugTask
    ) {
      self = props.ref;
      type = {
        $$typeof: REACT_ELEMENT_TYPE,
        type: type,
        key: key,
        props: props,
        _owner: owner
      };
      null !== (void 0 !== self ? self : null)
        ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
          })
        : Object.defineProperty(type, "ref", { enumerable: !1, value: null });
      type._store = {};
      Object.defineProperty(type._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      });
      Object.defineProperty(type, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      });
      Object.defineProperty(type, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: debugStack
      });
      Object.defineProperty(type, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: debugTask
      });
      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
      return type;
    }
    function cloneAndReplaceKey(oldElement, newKey) {
      newKey = ReactElement(
        oldElement.type,
        newKey,
        void 0,
        void 0,
        oldElement._owner,
        oldElement.props,
        oldElement._debugStack,
        oldElement._debugTask
      );
      oldElement._store &&
        (newKey._store.validated = oldElement._store.validated);
      return newKey;
    }
    function isValidElement(object) {
      return (
        "object" === typeof object &&
        null !== object &&
        object.$$typeof === REACT_ELEMENT_TYPE
      );
    }
    function escape(key) {
      var escaperLookup = { "=": "=0", ":": "=2" };
      return (
        "$" +
        key.replace(/[=:]/g, function (match) {
          return escaperLookup[match];
        })
      );
    }
    function getElementKey(element, index) {
      return "object" === typeof element &&
        null !== element &&
        null != element.key
        ? (checkKeyStringCoercion(element.key), escape("" + element.key))
        : index.toString(36);
    }
    function noop$1() {}
    function resolveThenable(thenable) {
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
        default:
          switch (
            ("string" === typeof thenable.status
              ? thenable.then(noop$1, noop$1)
              : ((thenable.status = "pending"),
                thenable.then(
                  function (fulfilledValue) {
                    "pending" === thenable.status &&
                      ((thenable.status = "fulfilled"),
                      (thenable.value = fulfilledValue));
                  },
                  function (error) {
                    "pending" === thenable.status &&
                      ((thenable.status = "rejected"),
                      (thenable.reason = error));
                  }
                )),
            thenable.status)
          ) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
          }
      }
      throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
      var type = typeof children;
      if ("undefined" === type || "boolean" === type) children = null;
      var invokeCallback = !1;
      if (null === children) invokeCallback = !0;
      else
        switch (type) {
          case "bigint":
          case "string":
          case "number":
            invokeCallback = !0;
            break;
          case "object":
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = !0;
                break;
              case REACT_LAZY_TYPE:
                return (
                  (invokeCallback = children._init),
                  mapIntoArray(
                    invokeCallback(children._payload),
                    array,
                    escapedPrefix,
                    nameSoFar,
                    callback
                  )
                );
            }
        }
      if (invokeCallback) {
        invokeCallback = children;
        callback = callback(invokeCallback);
        var childKey =
          "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
        isArrayImpl(callback)
          ? ((escapedPrefix = ""),
            null != childKey &&
              (escapedPrefix =
                childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"),
            mapIntoArray(callback, array, escapedPrefix, "", function (c) {
              return c;
            }))
          : null != callback &&
            (isValidElement(callback) &&
              (null != callback.key &&
                ((invokeCallback && invokeCallback.key === callback.key) ||
                  checkKeyStringCoercion(callback.key)),
              (escapedPrefix = cloneAndReplaceKey(
                callback,
                escapedPrefix +
                  (null == callback.key ||
                  (invokeCallback && invokeCallback.key === callback.key)
                    ? ""
                    : ("" + callback.key).replace(
                        userProvidedKeyEscapeRegex,
                        "$&/"
                      ) + "/") +
                  childKey
              )),
              "" !== nameSoFar &&
                null != invokeCallback &&
                isValidElement(invokeCallback) &&
                null == invokeCallback.key &&
                invokeCallback._store &&
                !invokeCallback._store.validated &&
                (escapedPrefix._store.validated = 2),
              (callback = escapedPrefix)),
            array.push(callback));
        return 1;
      }
      invokeCallback = 0;
      childKey = "" === nameSoFar ? "." : nameSoFar + ":";
      if (isArrayImpl(children))
        for (var i = 0; i < children.length; i++)
          (nameSoFar = children[i]),
            (type = childKey + getElementKey(nameSoFar, i)),
            (invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            ));
      else if (((i = getIteratorFn(children)), "function" === typeof i))
        for (
          i === children.entries &&
            (didWarnAboutMaps ||
              console.warn(
                "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
              ),
            (didWarnAboutMaps = !0)),
            children = i.call(children),
            i = 0;
          !(nameSoFar = children.next()).done;

        )
          (nameSoFar = nameSoFar.value),
            (type = childKey + getElementKey(nameSoFar, i++)),
            (invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            ));
      else if ("object" === type) {
        if ("function" === typeof children.then)
          return mapIntoArray(
            resolveThenable(children),
            array,
            escapedPrefix,
            nameSoFar,
            callback
          );
        array = String(children);
        throw Error(
          "Objects are not valid as a React child (found: " +
            ("[object Object]" === array
              ? "object with keys {" + Object.keys(children).join(", ") + "}"
              : array) +
            "). If you meant to render a collection of children, use an array instead."
        );
      }
      return invokeCallback;
    }
    function mapChildren(children, func, context) {
      if (null == children) return children;
      var result = [],
        count = 0;
      mapIntoArray(children, result, "", "", function (child) {
        return func.call(context, child, count++);
      });
      return result;
    }
    function lazyInitializer(payload) {
      if (-1 === payload._status) {
        var ctor = payload._result;
        ctor = ctor();
        ctor.then(
          function (moduleObject) {
            if (0 === payload._status || -1 === payload._status)
              (payload._status = 1), (payload._result = moduleObject);
          },
          function (error) {
            if (0 === payload._status || -1 === payload._status)
              (payload._status = 2), (payload._result = error);
          }
        );
        -1 === payload._status &&
          ((payload._status = 0), (payload._result = ctor));
      }
      if (1 === payload._status)
        return (
          (ctor = payload._result),
          void 0 === ctor &&
            console.error(
              "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
              ctor
            ),
          "default" in ctor ||
            console.error(
              "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
              ctor
            ),
          ctor.default
        );
      throw payload._result;
    }
    function resolveDispatcher() {
      var dispatcher = ReactSharedInternals.H;
      null === dispatcher &&
        console.error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
        );
      return dispatcher;
    }
    function noop() {}
    function enqueueTask(task) {
      if (null === enqueueTaskImpl)
        try {
          var requireString = ("require" + Math.random()).slice(0, 7);
          enqueueTaskImpl = (module && module[requireString]).call(
            module,
            "timers"
          ).setImmediate;
        } catch (_err) {
          enqueueTaskImpl = function (callback) {
            !1 === didWarnAboutMessageChannel &&
              ((didWarnAboutMessageChannel = !0),
              "undefined" === typeof MessageChannel &&
                console.error(
                  "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
                ));
            var channel = new MessageChannel();
            channel.port1.onmessage = callback;
            channel.port2.postMessage(void 0);
          };
        }
      return enqueueTaskImpl(task);
    }
    function aggregateErrors(errors) {
      return 1 < errors.length && "function" === typeof AggregateError
        ? new AggregateError(errors)
        : errors[0];
    }
    function popActScope(prevActQueue, prevActScopeDepth) {
      prevActScopeDepth !== actScopeDepth - 1 &&
        console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        );
      actScopeDepth = prevActScopeDepth;
    }
    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
      var queue = ReactSharedInternals.actQueue;
      if (null !== queue)
        if (0 !== queue.length)
          try {
            flushActQueue(queue);
            enqueueTask(function () {
              return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            });
            return;
          } catch (error) {
            ReactSharedInternals.thrownErrors.push(error);
          }
        else ReactSharedInternals.actQueue = null;
      0 < ReactSharedInternals.thrownErrors.length
        ? ((queue = aggregateErrors(ReactSharedInternals.thrownErrors)),
          (ReactSharedInternals.thrownErrors.length = 0),
          reject(queue))
        : resolve(returnValue);
    }
    function flushActQueue(queue) {
      if (!isFlushing) {
        isFlushing = !0;
        var i = 0;
        try {
          for (; i < queue.length; i++) {
            var callback = queue[i];
            do {
              ReactSharedInternals.didUsePromise = !1;
              var continuation = callback(!1);
              if (null !== continuation) {
                if (ReactSharedInternals.didUsePromise) {
                  queue[i] = callback;
                  queue.splice(0, i);
                  return;
                }
                callback = continuation;
              } else break;
            } while (1);
          }
          queue.length = 0;
        } catch (error) {
          queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
        } finally {
          isFlushing = !1;
        }
      }
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      "function" ===
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
      REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
      REACT_MEMO_TYPE = Symbol.for("react.memo"),
      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
      REACT_ACTIVITY_TYPE = Symbol.for("react.activity"),
      MAYBE_ITERATOR_SYMBOL = Symbol.iterator,
      didWarnStateUpdateForUnmountedComponent = {},
      ReactNoopUpdateQueue = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function (publicInstance) {
          warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function (publicInstance) {
          warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function (publicInstance) {
          warnNoop(publicInstance, "setState");
        }
      },
      assign = Object.assign,
      emptyObject = {};
    Object.freeze(emptyObject);
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function (partialState, callback) {
      if (
        "object" !== typeof partialState &&
        "function" !== typeof partialState &&
        null != partialState
      )
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function (callback) {
      this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    var deprecatedAPIs = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      },
      fnName;
    for (fnName in deprecatedAPIs)
      deprecatedAPIs.hasOwnProperty(fnName) &&
        defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    ComponentDummy.prototype = Component.prototype;
    deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
    deprecatedAPIs.constructor = PureComponent;
    assign(deprecatedAPIs, Component.prototype);
    deprecatedAPIs.isPureReactComponent = !0;
    var isArrayImpl = Array.isArray,
      REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"),
      ReactSharedInternals = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      },
      hasOwnProperty = Object.prototype.hasOwnProperty,
      createTask = console.createTask
        ? console.createTask
        : function () {
            return null;
          };
    deprecatedAPIs = {
      react_stack_bottom_frame: function (callStackForError) {
        return callStackForError();
      }
    };
    var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = deprecatedAPIs.react_stack_bottom_frame.bind(
      deprecatedAPIs,
      UnknownOwner
    )();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutMaps = !1,
      userProvidedKeyEscapeRegex = /\/+/g,
      reportGlobalError =
        "function" === typeof reportError
          ? reportError
          : function (error) {
              if (
                "object" === typeof window &&
                "function" === typeof window.ErrorEvent
              ) {
                var event = new window.ErrorEvent("error", {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    "object" === typeof error &&
                    null !== error &&
                    "string" === typeof error.message
                      ? String(error.message)
                      : String(error),
                  error: error
                });
                if (!window.dispatchEvent(event)) return;
              } else if (
                "object" === typeof process &&
                "function" === typeof process.emit
              ) {
                process.emit("uncaughtException", error);
                return;
              }
              console.error(error);
            },
      didWarnAboutMessageChannel = !1,
      enqueueTaskImpl = null,
      actScopeDepth = 0,
      didWarnNoAwaitAct = !1,
      isFlushing = !1,
      queueSeveralMicrotasks =
        "function" === typeof queueMicrotask
          ? function (callback) {
              queueMicrotask(function () {
                return queueMicrotask(callback);
              });
            }
          : enqueueTask;
    deprecatedAPIs = Object.freeze({
      __proto__: null,
      c: function (size) {
        return resolveDispatcher().useMemoCache(size);
      }
    });
    exports.Children = {
      map: mapChildren,
      forEach: function (children, forEachFunc, forEachContext) {
        mapChildren(
          children,
          function () {
            forEachFunc.apply(this, arguments);
          },
          forEachContext
        );
      },
      count: function (children) {
        var n = 0;
        mapChildren(children, function () {
          n++;
        });
        return n;
      },
      toArray: function (children) {
        return (
          mapChildren(children, function (child) {
            return child;
          }) || []
        );
      },
      only: function (children) {
        if (!isValidElement(children))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return children;
      }
    };
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
      ReactSharedInternals;
    exports.__COMPILER_RUNTIME = deprecatedAPIs;
    exports.act = function (callback) {
      var prevActQueue = ReactSharedInternals.actQueue,
        prevActScopeDepth = actScopeDepth;
      actScopeDepth++;
      var queue = (ReactSharedInternals.actQueue =
          null !== prevActQueue ? prevActQueue : []),
        didAwaitActCall = !1;
      try {
        var result = callback();
      } catch (error) {
        ReactSharedInternals.thrownErrors.push(error);
      }
      if (0 < ReactSharedInternals.thrownErrors.length)
        throw (
          (popActScope(prevActQueue, prevActScopeDepth),
          (callback = aggregateErrors(ReactSharedInternals.thrownErrors)),
          (ReactSharedInternals.thrownErrors.length = 0),
          callback)
        );
      if (
        null !== result &&
        "object" === typeof result &&
        "function" === typeof result.then
      ) {
        var thenable = result;
        queueSeveralMicrotasks(function () {
          didAwaitActCall ||
            didWarnNoAwaitAct ||
            ((didWarnNoAwaitAct = !0),
            console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
        });
        return {
          then: function (resolve, reject) {
            didAwaitActCall = !0;
            thenable.then(
              function (returnValue) {
                popActScope(prevActQueue, prevActScopeDepth);
                if (0 === prevActScopeDepth) {
                  try {
                    flushActQueue(queue),
                      enqueueTask(function () {
                        return recursivelyFlushAsyncActWork(
                          returnValue,
                          resolve,
                          reject
                        );
                      });
                  } catch (error$0) {
                    ReactSharedInternals.thrownErrors.push(error$0);
                  }
                  if (0 < ReactSharedInternals.thrownErrors.length) {
                    var _thrownError = aggregateErrors(
                      ReactSharedInternals.thrownErrors
                    );
                    ReactSharedInternals.thrownErrors.length = 0;
                    reject(_thrownError);
                  }
                } else resolve(returnValue);
              },
              function (error) {
                popActScope(prevActQueue, prevActScopeDepth);
                0 < ReactSharedInternals.thrownErrors.length
                  ? ((error = aggregateErrors(
                      ReactSharedInternals.thrownErrors
                    )),
                    (ReactSharedInternals.thrownErrors.length = 0),
                    reject(error))
                  : reject(error);
              }
            );
          }
        };
      }
      var returnValue$jscomp$0 = result;
      popActScope(prevActQueue, prevActScopeDepth);
      0 === prevActScopeDepth &&
        (flushActQueue(queue),
        0 !== queue.length &&
          queueSeveralMicrotasks(function () {
            didAwaitActCall ||
              didWarnNoAwaitAct ||
              ((didWarnNoAwaitAct = !0),
              console.error(
                "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
              ));
          }),
        (ReactSharedInternals.actQueue = null));
      if (0 < ReactSharedInternals.thrownErrors.length)
        throw (
          ((callback = aggregateErrors(ReactSharedInternals.thrownErrors)),
          (ReactSharedInternals.thrownErrors.length = 0),
          callback)
        );
      return {
        then: function (resolve, reject) {
          didAwaitActCall = !0;
          0 === prevActScopeDepth
            ? ((ReactSharedInternals.actQueue = queue),
              enqueueTask(function () {
                return recursivelyFlushAsyncActWork(
                  returnValue$jscomp$0,
                  resolve,
                  reject
                );
              }))
            : resolve(returnValue$jscomp$0);
        }
      };
    };
    exports.cache = function (fn) {
      return function () {
        return fn.apply(null, arguments);
      };
    };
    exports.captureOwnerStack = function () {
      var getCurrentStack = ReactSharedInternals.getCurrentStack;
      return null === getCurrentStack ? null : getCurrentStack();
    };
    exports.cloneElement = function (element, config, children) {
      if (null === element || void 0 === element)
        throw Error(
          "The argument must be a React element, but you passed " +
            element +
            "."
        );
      var props = assign({}, element.props),
        key = element.key,
        owner = element._owner;
      if (null != config) {
        var JSCompiler_inline_result;
        a: {
          if (
            hasOwnProperty.call(config, "ref") &&
            (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
              config,
              "ref"
            ).get) &&
            JSCompiler_inline_result.isReactWarning
          ) {
            JSCompiler_inline_result = !1;
            break a;
          }
          JSCompiler_inline_result = void 0 !== config.ref;
        }
        JSCompiler_inline_result && (owner = getOwner());
        hasValidKey(config) &&
          (checkKeyStringCoercion(config.key), (key = "" + config.key));
        for (propName in config)
          !hasOwnProperty.call(config, propName) ||
            "key" === propName ||
            "__self" === propName ||
            "__source" === propName ||
            ("ref" === propName && void 0 === config.ref) ||
            (props[propName] = config[propName]);
      }
      var propName = arguments.length - 2;
      if (1 === propName) props.children = children;
      else if (1 < propName) {
        JSCompiler_inline_result = Array(propName);
        for (var i = 0; i < propName; i++)
          JSCompiler_inline_result[i] = arguments[i + 2];
        props.children = JSCompiler_inline_result;
      }
      props = ReactElement(
        element.type,
        key,
        void 0,
        void 0,
        owner,
        props,
        element._debugStack,
        element._debugTask
      );
      for (key = 2; key < arguments.length; key++)
        (owner = arguments[key]),
          isValidElement(owner) && owner._store && (owner._store.validated = 1);
      return props;
    };
    exports.createContext = function (defaultValue) {
      defaultValue = {
        $$typeof: REACT_CONTEXT_TYPE,
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      };
      defaultValue.Provider = defaultValue;
      defaultValue.Consumer = {
        $$typeof: REACT_CONSUMER_TYPE,
        _context: defaultValue
      };
      defaultValue._currentRenderer = null;
      defaultValue._currentRenderer2 = null;
      return defaultValue;
    };
    exports.createElement = function (type, config, children) {
      for (var i = 2; i < arguments.length; i++) {
        var node = arguments[i];
        isValidElement(node) && node._store && (node._store.validated = 1);
      }
      i = {};
      node = null;
      if (null != config)
        for (propName in (didWarnAboutOldJSXRuntime ||
          !("__self" in config) ||
          "key" in config ||
          ((didWarnAboutOldJSXRuntime = !0),
          console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )),
        hasValidKey(config) &&
          (checkKeyStringCoercion(config.key), (node = "" + config.key)),
        config))
          hasOwnProperty.call(config, propName) &&
            "key" !== propName &&
            "__self" !== propName &&
            "__source" !== propName &&
            (i[propName] = config[propName]);
      var childrenLength = arguments.length - 2;
      if (1 === childrenLength) i.children = children;
      else if (1 < childrenLength) {
        for (
          var childArray = Array(childrenLength), _i = 0;
          _i < childrenLength;
          _i++
        )
          childArray[_i] = arguments[_i + 2];
        Object.freeze && Object.freeze(childArray);
        i.children = childArray;
      }
      if (type && type.defaultProps)
        for (propName in ((childrenLength = type.defaultProps), childrenLength))
          void 0 === i[propName] && (i[propName] = childrenLength[propName]);
      node &&
        defineKeyPropWarningGetter(
          i,
          "function" === typeof type
            ? type.displayName || type.name || "Unknown"
            : type
        );
      var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
      return ReactElement(
        type,
        node,
        void 0,
        void 0,
        getOwner(),
        i,
        propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
        propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask
      );
    };
    exports.createRef = function () {
      var refObject = { current: null };
      Object.seal(refObject);
      return refObject;
    };
    exports.forwardRef = function (render) {
      null != render && render.$$typeof === REACT_MEMO_TYPE
        ? console.error(
            "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
          )
        : "function" !== typeof render
          ? console.error(
              "forwardRef requires a render function but was given %s.",
              null === render ? "null" : typeof render
            )
          : 0 !== render.length &&
            2 !== render.length &&
            console.error(
              "forwardRef render functions accept exactly two parameters: props and ref. %s",
              1 === render.length
                ? "Did you forget to use the ref parameter?"
                : "Any additional parameter will be undefined."
            );
      null != render &&
        null != render.defaultProps &&
        console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
      var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render: render },
        ownName;
      Object.defineProperty(elementType, "displayName", {
        enumerable: !1,
        configurable: !0,
        get: function () {
          return ownName;
        },
        set: function (name) {
          ownName = name;
          render.name ||
            render.displayName ||
            (Object.defineProperty(render, "name", { value: name }),
            (render.displayName = name));
        }
      });
      return elementType;
    };
    exports.isValidElement = isValidElement;
    exports.lazy = function (ctor) {
      return {
        $$typeof: REACT_LAZY_TYPE,
        _payload: { _status: -1, _result: ctor },
        _init: lazyInitializer
      };
    };
    exports.memo = function (type, compare) {
      null == type &&
        console.error(
          "memo: The first argument must be a component. Instead received: %s",
          null === type ? "null" : typeof type
        );
      compare = {
        $$typeof: REACT_MEMO_TYPE,
        type: type,
        compare: void 0 === compare ? null : compare
      };
      var ownName;
      Object.defineProperty(compare, "displayName", {
        enumerable: !1,
        configurable: !0,
        get: function () {
          return ownName;
        },
        set: function (name) {
          ownName = name;
          type.name ||
            type.displayName ||
            (Object.defineProperty(type, "name", { value: name }),
            (type.displayName = name));
        }
      });
      return compare;
    };
    exports.startTransition = function (scope) {
      var prevTransition = ReactSharedInternals.T,
        currentTransition = {};
      ReactSharedInternals.T = currentTransition;
      currentTransition._updatedFibers = new Set();
      try {
        var returnValue = scope(),
          onStartTransitionFinish = ReactSharedInternals.S;
        null !== onStartTransitionFinish &&
          onStartTransitionFinish(currentTransition, returnValue);
        "object" === typeof returnValue &&
          null !== returnValue &&
          "function" === typeof returnValue.then &&
          returnValue.then(noop, reportGlobalError);
      } catch (error) {
        reportGlobalError(error);
      } finally {
        null === prevTransition &&
          currentTransition._updatedFibers &&
          ((scope = currentTransition._updatedFibers.size),
          currentTransition._updatedFibers.clear(),
          10 < scope &&
            console.warn(
              "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
            )),
          (ReactSharedInternals.T = prevTransition);
      }
    };
    exports.unstable_useCacheRefresh = function () {
      return resolveDispatcher().useCacheRefresh();
    };
    exports.use = function (usable) {
      return resolveDispatcher().use(usable);
    };
    exports.useActionState = function (action, initialState, permalink) {
      return resolveDispatcher().useActionState(
        action,
        initialState,
        permalink
      );
    };
    exports.useCallback = function (callback, deps) {
      return resolveDispatcher().useCallback(callback, deps);
    };
    exports.useContext = function (Context) {
      var dispatcher = resolveDispatcher();
      Context.$$typeof === REACT_CONSUMER_TYPE &&
        console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        );
      return dispatcher.useContext(Context);
    };
    exports.useDebugValue = function (value, formatterFn) {
      return resolveDispatcher().useDebugValue(value, formatterFn);
    };
    exports.useDeferredValue = function (value, initialValue) {
      return resolveDispatcher().useDeferredValue(value, initialValue);
    };
    exports.useEffect = function (create, createDeps, update) {
      null == create &&
        console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
      var dispatcher = resolveDispatcher();
      if ("function" === typeof update)
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return dispatcher.useEffect(create, createDeps);
    };
    exports.useId = function () {
      return resolveDispatcher().useId();
    };
    exports.useImperativeHandle = function (ref, create, deps) {
      return resolveDispatcher().useImperativeHandle(ref, create, deps);
    };
    exports.useInsertionEffect = function (create, deps) {
      null == create &&
        console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
      return resolveDispatcher().useInsertionEffect(create, deps);
    };
    exports.useLayoutEffect = function (create, deps) {
      null == create &&
        console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
      return resolveDispatcher().useLayoutEffect(create, deps);
    };
    exports.useMemo = function (create, deps) {
      return resolveDispatcher().useMemo(create, deps);
    };
    exports.useOptimistic = function (passthrough, reducer) {
      return resolveDispatcher().useOptimistic(passthrough, reducer);
    };
    exports.useReducer = function (reducer, initialArg, init) {
      return resolveDispatcher().useReducer(reducer, initialArg, init);
    };
    exports.useRef = function (initialValue) {
      return resolveDispatcher().useRef(initialValue);
    };
    exports.useState = function (initialState) {
      return resolveDispatcher().useState(initialState);
    };
    exports.useSyncExternalStore = function (
      subscribe,
      getSnapshot,
      getServerSnapshot
    ) {
      return resolveDispatcher().useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot
      );
    };
    exports.useTransition = function () {
      return resolveDispatcher().useTransition();
    };
    exports.version = "19.1.1";
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      "function" ===
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })();


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/void-elements/index.js":
/*!*********************************************!*\
  !*** ./node_modules/void-elements/index.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * This file automatically generated from `pre-publish.js`.
 * Do not manually edit.
 */

module.exports = {
  "area": true,
  "base": true,
  "br": true,
  "col": true,
  "embed": true,
  "hr": true,
  "img": true,
  "input": true,
  "link": true,
  "meta": true,
  "param": true,
  "source": true,
  "track": true,
  "wbr": true
};


/***/ }),

/***/ "./node_modules/idb-keyval/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/idb-keyval/dist/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clear: () => (/* binding */ clear),
/* harmony export */   createStore: () => (/* binding */ createStore),
/* harmony export */   del: () => (/* binding */ del),
/* harmony export */   delMany: () => (/* binding */ delMany),
/* harmony export */   entries: () => (/* binding */ entries),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   getMany: () => (/* binding */ getMany),
/* harmony export */   keys: () => (/* binding */ keys),
/* harmony export */   promisifyRequest: () => (/* binding */ promisifyRequest),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   setMany: () => (/* binding */ setMany),
/* harmony export */   update: () => (/* binding */ update),
/* harmony export */   values: () => (/* binding */ values)
/* harmony export */ });
function promisifyRequest(request) {
    return new Promise((resolve, reject) => {
        // @ts-ignore - file size hacks
        request.oncomplete = request.onsuccess = () => resolve(request.result);
        // @ts-ignore - file size hacks
        request.onabort = request.onerror = () => reject(request.error);
    });
}
function createStore(dbName, storeName) {
    const request = indexedDB.open(dbName);
    request.onupgradeneeded = () => request.result.createObjectStore(storeName);
    const dbp = promisifyRequest(request);
    return (txMode, callback) => dbp.then((db) => callback(db.transaction(storeName, txMode).objectStore(storeName)));
}
let defaultGetStoreFunc;
function defaultGetStore() {
    if (!defaultGetStoreFunc) {
        defaultGetStoreFunc = createStore('keyval-store', 'keyval');
    }
    return defaultGetStoreFunc;
}
/**
 * Get a value by its key.
 *
 * @param key
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function get(key, customStore = defaultGetStore()) {
    return customStore('readonly', (store) => promisifyRequest(store.get(key)));
}
/**
 * Set a value with a key.
 *
 * @param key
 * @param value
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function set(key, value, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.put(value, key);
        return promisifyRequest(store.transaction);
    });
}
/**
 * Set multiple values at once. This is faster than calling set() multiple times.
 * It's also atomic – if one of the pairs can't be added, none will be added.
 *
 * @param entries Array of entries, where each entry is an array of `[key, value]`.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function setMany(entries, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        entries.forEach((entry) => store.put(entry[1], entry[0]));
        return promisifyRequest(store.transaction);
    });
}
/**
 * Get multiple values by their keys
 *
 * @param keys
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function getMany(keys, customStore = defaultGetStore()) {
    return customStore('readonly', (store) => Promise.all(keys.map((key) => promisifyRequest(store.get(key)))));
}
/**
 * Update a value. This lets you see the old value and update it as an atomic operation.
 *
 * @param key
 * @param updater A callback that takes the old value and returns a new value.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function update(key, updater, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => 
    // Need to create the promise manually.
    // If I try to chain promises, the transaction closes in browsers
    // that use a promise polyfill (IE10/11).
    new Promise((resolve, reject) => {
        store.get(key).onsuccess = function () {
            try {
                store.put(updater(this.result), key);
                resolve(promisifyRequest(store.transaction));
            }
            catch (err) {
                reject(err);
            }
        };
    }));
}
/**
 * Delete a particular key from the store.
 *
 * @param key
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function del(key, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.delete(key);
        return promisifyRequest(store.transaction);
    });
}
/**
 * Delete multiple keys at once.
 *
 * @param keys List of keys to delete.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function delMany(keys, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        keys.forEach((key) => store.delete(key));
        return promisifyRequest(store.transaction);
    });
}
/**
 * Clear all values in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function clear(customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.clear();
        return promisifyRequest(store.transaction);
    });
}
function eachCursor(store, callback) {
    store.openCursor().onsuccess = function () {
        if (!this.result)
            return;
        callback(this.result);
        this.result.continue();
    };
    return promisifyRequest(store.transaction);
}
/**
 * Get all keys in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function keys(customStore = defaultGetStore()) {
    return customStore('readonly', (store) => {
        // Fast path for modern browsers
        if (store.getAllKeys) {
            return promisifyRequest(store.getAllKeys());
        }
        const items = [];
        return eachCursor(store, (cursor) => items.push(cursor.key)).then(() => items);
    });
}
/**
 * Get all values in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function values(customStore = defaultGetStore()) {
    return customStore('readonly', (store) => {
        // Fast path for modern browsers
        if (store.getAll) {
            return promisifyRequest(store.getAll());
        }
        const items = [];
        return eachCursor(store, (cursor) => items.push(cursor.value)).then(() => items);
    });
}
/**
 * Get all entries in the store. Each entry is an array of `[key, value]`.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function entries(customStore = defaultGetStore()) {
    return customStore('readonly', (store) => {
        // Fast path for modern browsers
        // (although, hopefully we'll get a simpler path some day)
        if (store.getAll && store.getAllKeys) {
            return Promise.all([
                promisifyRequest(store.getAllKeys()),
                promisifyRequest(store.getAll()),
            ]).then(([keys, values]) => keys.map((key, i) => [key, values[i]]));
        }
        const items = [];
        return customStore('readonly', (store) => eachCursor(store, (cursor) => items.push([cursor.key, cursor.value])).then(() => items));
    });
}




/***/ }),

/***/ "./node_modules/react-i18next/dist/es/I18nextProvider.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-i18next/dist/es/I18nextProvider.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I18nextProvider: () => (/* binding */ I18nextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context.js */ "./node_modules/react-i18next/dist/es/context.js");


function I18nextProvider(_ref) {
  let {
    i18n,
    defaultNS,
    children
  } = _ref;
  const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    i18n,
    defaultNS
  }), [i18n, defaultNS]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_context_js__WEBPACK_IMPORTED_MODULE_1__.I18nContext.Provider, {
    value
  }, children);
}

/***/ }),

/***/ "./node_modules/react-i18next/dist/es/Trans.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-i18next/dist/es/Trans.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Trans: () => (/* binding */ Trans),
/* harmony export */   nodesToString: () => (/* reexport safe */ _TransWithoutContext_js__WEBPACK_IMPORTED_MODULE_1__.nodesToString)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _TransWithoutContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransWithoutContext.js */ "./node_modules/react-i18next/dist/es/TransWithoutContext.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context.js */ "./node_modules/react-i18next/dist/es/context.js");




function Trans(_ref) {
  let {
    children,
    count,
    parent,
    i18nKey,
    context,
    tOptions = {},
    values,
    defaults,
    components,
    ns,
    i18n: i18nFromProps,
    t: tFromProps,
    shouldUnescape,
    ...additionalProps
  } = _ref;
  const {
    i18n: i18nFromContext,
    defaultNS: defaultNSFromContext
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_js__WEBPACK_IMPORTED_MODULE_2__.I18nContext) || {};
  const i18n = i18nFromProps || i18nFromContext || (0,_context_js__WEBPACK_IMPORTED_MODULE_2__.getI18n)();
  const t = tFromProps || i18n && i18n.t.bind(i18n);
  return (0,_TransWithoutContext_js__WEBPACK_IMPORTED_MODULE_1__.Trans)({
    children,
    count,
    parent,
    i18nKey,
    context,
    tOptions,
    values,
    defaults,
    components,
    ns: ns || t && t.ns || defaultNSFromContext || i18n && i18n.options && i18n.options.defaultNS,
    i18n,
    t: tFromProps,
    shouldUnescape,
    ...additionalProps
  });
}

/***/ }),

/***/ "./node_modules/react-i18next/dist/es/TransWithoutContext.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-i18next/dist/es/TransWithoutContext.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Trans: () => (/* binding */ Trans),
/* harmony export */   nodesToString: () => (/* binding */ nodesToString)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var html_parse_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-parse-stringify */ "./node_modules/html-parse-stringify/dist/html-parse-stringify.module.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/react-i18next/dist/es/utils.js");
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaults.js */ "./node_modules/react-i18next/dist/es/defaults.js");
/* harmony import */ var _i18nInstance_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./i18nInstance.js */ "./node_modules/react-i18next/dist/es/i18nInstance.js");





const hasChildren = (node, checkLength) => {
  if (!node) return false;
  const base = node.props ? node.props.children : node.children;
  if (checkLength) return base.length > 0;
  return !!base;
};
const getChildren = node => {
  if (!node) return [];
  const children = node.props ? node.props.children : node.children;
  return node.props && node.props.i18nIsDynamicList ? getAsArray(children) : children;
};
const hasValidReactChildren = children => Array.isArray(children) && children.every(react__WEBPACK_IMPORTED_MODULE_0__.isValidElement);
const getAsArray = data => Array.isArray(data) ? data : [data];
const mergeProps = (source, target) => {
  const newTarget = {
    ...target
  };
  newTarget.props = Object.assign(source.props, target.props);
  return newTarget;
};
const nodesToString = (children, i18nOptions) => {
  if (!children) return '';
  let stringNode = '';
  const childrenArray = getAsArray(children);
  const keepArray = i18nOptions.transSupportBasicHtmlNodes && i18nOptions.transKeepBasicHtmlNodesFor ? i18nOptions.transKeepBasicHtmlNodesFor : [];
  childrenArray.forEach((child, childIndex) => {
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isString)(child)) {
      stringNode += `${child}`;
    } else if ((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)) {
      const {
        props,
        type
      } = child;
      const childPropsCount = Object.keys(props).length;
      const shouldKeepChild = keepArray.indexOf(type) > -1;
      const childChildren = props.children;
      if (!childChildren && shouldKeepChild && !childPropsCount) {
        stringNode += `<${type}/>`;
      } else if (!childChildren && (!shouldKeepChild || childPropsCount) || props.i18nIsDynamicList) {
        stringNode += `<${childIndex}></${childIndex}>`;
      } else if (shouldKeepChild && childPropsCount === 1 && (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isString)(childChildren)) {
        stringNode += `<${type}>${childChildren}</${type}>`;
      } else {
        const content = nodesToString(childChildren, i18nOptions);
        stringNode += `<${childIndex}>${content}</${childIndex}>`;
      }
    } else if (child === null) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.warn)(`Trans: the passed in value is invalid - seems you passed in a null child.`);
    } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isObject)(child)) {
      const {
        format,
        ...clone
      } = child;
      const keys = Object.keys(clone);
      if (keys.length === 1) {
        const value = format ? `${keys[0]}, ${format}` : keys[0];
        stringNode += `{{${value}}}`;
      } else {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.warn)(`react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.`, child);
      }
    } else {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.warn)(`Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.`, child);
    }
  });
  return stringNode;
};
const renderNodes = (children, targetString, i18n, i18nOptions, combinedTOpts, shouldUnescape) => {
  if (targetString === '') return [];
  const keepArray = i18nOptions.transKeepBasicHtmlNodesFor || [];
  const emptyChildrenButNeedsHandling = targetString && new RegExp(keepArray.map(keep => `<${keep}`).join('|')).test(targetString);
  if (!children && !emptyChildrenButNeedsHandling && !shouldUnescape) return [targetString];
  const data = {};
  const getData = childs => {
    const childrenArray = getAsArray(childs);
    childrenArray.forEach(child => {
      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isString)(child)) return;
      if (hasChildren(child)) getData(getChildren(child));else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isObject)(child) && !(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)) Object.assign(data, child);
    });
  };
  getData(children);
  const ast = html_parse_stringify__WEBPACK_IMPORTED_MODULE_1__["default"].parse(`<0>${targetString}</0>`);
  const opts = {
    ...data,
    ...combinedTOpts
  };
  const renderInner = (child, node, rootReactNode) => {
    const childs = getChildren(child);
    const mappedChildren = mapAST(childs, node.children, rootReactNode);
    return hasValidReactChildren(childs) && mappedChildren.length === 0 || child.props && child.props.i18nIsDynamicList ? childs : mappedChildren;
  };
  const pushTranslatedJSX = (child, inner, mem, i, isVoid) => {
    if (child.dummy) {
      child.children = inner;
      mem.push((0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {
        key: i
      }, isVoid ? undefined : inner));
    } else {
      mem.push(...react__WEBPACK_IMPORTED_MODULE_0__.Children.map([child], c => {
        const props = {
          ...c.props
        };
        delete props.i18nIsDynamicList;
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(c.type, {
          ...props,
          key: i,
          ref: c.ref
        }, isVoid ? null : inner);
      }));
    }
  };
  const mapAST = (reactNode, astNode, rootReactNode) => {
    const reactNodes = getAsArray(reactNode);
    const astNodes = getAsArray(astNode);
    return astNodes.reduce((mem, node, i) => {
      const translationContent = node.children && node.children[0] && node.children[0].content && i18n.services.interpolator.interpolate(node.children[0].content, opts, i18n.language);
      if (node.type === 'tag') {
        let tmp = reactNodes[parseInt(node.name, 10)];
        if (rootReactNode.length === 1 && !tmp) tmp = rootReactNode[0][node.name];
        if (!tmp) tmp = {};
        const child = Object.keys(node.attrs).length !== 0 ? mergeProps({
          props: node.attrs
        }, tmp) : tmp;
        const isElement = (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child);
        const isValidTranslationWithChildren = isElement && hasChildren(node, true) && !node.voidElement;
        const isEmptyTransWithHTML = emptyChildrenButNeedsHandling && (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isObject)(child) && child.dummy && !isElement;
        const isKnownComponent = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isObject)(children) && Object.hasOwnProperty.call(children, node.name);
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isString)(child)) {
          const value = i18n.services.interpolator.interpolate(child, opts, i18n.language);
          mem.push(value);
        } else if (hasChildren(child) || isValidTranslationWithChildren) {
          const inner = renderInner(child, node, rootReactNode);
          pushTranslatedJSX(child, inner, mem, i);
        } else if (isEmptyTransWithHTML) {
          const inner = mapAST(reactNodes, node.children, rootReactNode);
          pushTranslatedJSX(child, inner, mem, i);
        } else if (Number.isNaN(parseFloat(node.name))) {
          if (isKnownComponent) {
            const inner = renderInner(child, node, rootReactNode);
            pushTranslatedJSX(child, inner, mem, i, node.voidElement);
          } else if (i18nOptions.transSupportBasicHtmlNodes && keepArray.indexOf(node.name) > -1) {
            if (node.voidElement) {
              mem.push((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(node.name, {
                key: `${node.name}-${i}`
              }));
            } else {
              const inner = mapAST(reactNodes, node.children, rootReactNode);
              mem.push((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(node.name, {
                key: `${node.name}-${i}`
              }, inner));
            }
          } else if (node.voidElement) {
            mem.push(`<${node.name} />`);
          } else {
            const inner = mapAST(reactNodes, node.children, rootReactNode);
            mem.push(`<${node.name}>${inner}</${node.name}>`);
          }
        } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isObject)(child) && !isElement) {
          const content = node.children[0] ? translationContent : null;
          if (content) mem.push(content);
        } else {
          pushTranslatedJSX(child, translationContent, mem, i, node.children.length !== 1 || !translationContent);
        }
      } else if (node.type === 'text') {
        const wrapTextNodes = i18nOptions.transWrapTextNodes;
        const content = shouldUnescape ? i18nOptions.unescape(i18n.services.interpolator.interpolate(node.content, opts, i18n.language)) : i18n.services.interpolator.interpolate(node.content, opts, i18n.language);
        if (wrapTextNodes) {
          mem.push((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(wrapTextNodes, {
            key: `${node.name}-${i}`
          }, content));
        } else {
          mem.push(content);
        }
      }
      return mem;
    }, []);
  };
  const result = mapAST([{
    dummy: true,
    children: children || []
  }], ast, getAsArray(children || []));
  return getChildren(result[0]);
};
function Trans(_ref) {
  let {
    children,
    count,
    parent,
    i18nKey,
    context,
    tOptions = {},
    values,
    defaults,
    components,
    ns,
    i18n: i18nFromProps,
    t: tFromProps,
    shouldUnescape,
    ...additionalProps
  } = _ref;
  const i18n = i18nFromProps || (0,_i18nInstance_js__WEBPACK_IMPORTED_MODULE_4__.getI18n)();
  if (!i18n) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.warnOnce)('You will need to pass in an i18next instance by using i18nextReactModule');
    return children;
  }
  const t = tFromProps || i18n.t.bind(i18n) || (k => k);
  const reactI18nextOptions = {
    ...(0,_defaults_js__WEBPACK_IMPORTED_MODULE_3__.getDefaults)(),
    ...(i18n.options && i18n.options.react)
  };
  let namespaces = ns || t.ns || i18n.options && i18n.options.defaultNS;
  namespaces = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isString)(namespaces) ? [namespaces] : namespaces || ['translation'];
  const nodeAsString = nodesToString(children, reactI18nextOptions);
  const defaultValue = defaults || nodeAsString || reactI18nextOptions.transEmptyNodeValue || i18nKey;
  const {
    hashTransKey
  } = reactI18nextOptions;
  const key = i18nKey || (hashTransKey ? hashTransKey(nodeAsString || defaultValue) : nodeAsString || defaultValue);
  if (i18n.options && i18n.options.interpolation && i18n.options.interpolation.defaultVariables) {
    values = values && Object.keys(values).length > 0 ? {
      ...values,
      ...i18n.options.interpolation.defaultVariables
    } : {
      ...i18n.options.interpolation.defaultVariables
    };
  }
  const interpolationOverride = values || count !== undefined || !children ? tOptions.interpolation : {
    interpolation: {
      ...tOptions.interpolation,
      prefix: '#$?',
      suffix: '?$#'
    }
  };
  const combinedTOpts = {
    ...tOptions,
    context: context || tOptions.context,
    count,
    ...values,
    ...interpolationOverride,
    defaultValue,
    ns: namespaces
  };
  const translation = key ? t(key, combinedTOpts) : defaultValue;
  if (components) {
    Object.keys(components).forEach(c => {
      const comp = components[c];
      if (typeof comp.type === 'function' || !comp.props || !comp.props.children || translation.indexOf(`${c}/>`) < 0 && translation.indexOf(`${c} />`) < 0) return;
      function Componentized() {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, comp);
      }
      components[c] = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Componentized);
    });
  }
  const content = renderNodes(components || children, translation, i18n, reactI18nextOptions, combinedTOpts, shouldUnescape);
  const useAsParent = parent !== undefined ? parent : reactI18nextOptions.defaultTransParent;
  return useAsParent ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(useAsParent, additionalProps, content) : content;
}

/***/ }),

/***/ "./node_modules/react-i18next/dist/es/Translation.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-i18next/dist/es/Translation.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Translation: () => (/* binding */ Translation)
/* harmony export */ });
/* harmony import */ var _useTranslation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useTranslation.js */ "./node_modules/react-i18next/dist/es/useTranslation.js");

function Translation(props) {
  const {
    ns,
    children,
    ...options
  } = props;
  const [t, i18n, ready] = (0,_useTranslation_js__WEBPACK_IMPORTED_MODULE_0__.useTranslation)(ns, options);
  return children(t, {
    i18n,
    lng: i18n.language
  }, ready);
}

/***/ }),

/***/ "./node_modules/react-i18next/dist/es/context.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-i18next/dist/es/context.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I18nContext: () => (/* binding */ I18nContext),
/* harmony export */   ReportNamespaces: () => (/* binding */ ReportNamespaces),
/* harmony export */   composeInitialProps: () => (/* binding */ composeInitialProps),
/* harmony export */   getDefaults: () => (/* reexport safe */ _defaults_js__WEBPACK_IMPORTED_MODULE_1__.getDefaults),
/* harmony export */   getI18n: () => (/* reexport safe */ _i18nInstance_js__WEBPACK_IMPORTED_MODULE_2__.getI18n),
/* harmony export */   getInitialProps: () => (/* binding */ getInitialProps),
/* harmony export */   initReactI18next: () => (/* reexport safe */ _initReactI18next_js__WEBPACK_IMPORTED_MODULE_3__.initReactI18next),
/* harmony export */   setDefaults: () => (/* reexport safe */ _defaults_js__WEBPACK_IMPORTED_MODULE_1__.setDefaults),
/* harmony export */   setI18n: () => (/* reexport safe */ _i18nInstance_js__WEBPACK_IMPORTED_MODULE_2__.setI18n)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaults.js */ "./node_modules/react-i18next/dist/es/defaults.js");
/* harmony import */ var _i18nInstance_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18nInstance.js */ "./node_modules/react-i18next/dist/es/i18nInstance.js");
/* harmony import */ var _initReactI18next_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initReactI18next.js */ "./node_modules/react-i18next/dist/es/initReactI18next.js");





const I18nContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
class ReportNamespaces {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(namespaces) {
    namespaces.forEach(ns => {
      if (!this.usedNamespaces[ns]) this.usedNamespaces[ns] = true;
    });
  }
  getUsedNamespaces = () => Object.keys(this.usedNamespaces);
}
const composeInitialProps = ForComponent => async ctx => {
  const componentsInitialProps = ForComponent.getInitialProps ? await ForComponent.getInitialProps(ctx) : {};
  const i18nInitialProps = getInitialProps();
  return {
    ...componentsInitialProps,
    ...i18nInitialProps
  };
};
const getInitialProps = () => {
  const i18n = (0,_i18nInstance_js__WEBPACK_IMPORTED_MODULE_2__.getI18n)();
  const namespaces = i18n.reportNamespaces ? i18n.reportNamespaces.getUsedNamespaces() : [];
  const ret = {};
  const initialI18nStore = {};
  i18n.languages.forEach(l => {
    initialI18nStore[l] = {};
    namespaces.forEach(ns => {
      initialI18nStore[l][ns] = i18n.getResourceBundle(l, ns) || {};
    });
  });
  ret.initialI18nStore = initialI18nStore;
  ret.initialLanguage = i18n.language;
  return ret;
};

/***/ }),

/***/ "./node_modules/react-i18next/dist/es/defaults.js":
/*!********************************************************!*\
  !*** ./node_modules/react-i18next/dist/es/defaults.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaults: () => (/* binding */ getDefaults),
/* harmony export */   setDefaults: () => (/* binding */ setDefaults)
/* harmony export */ });
/* harmony import */ var _unescape_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unescape.js */ "./node_modules/react-i18next/dist/es/unescape.js");

let defaultOptions = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: true,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: true,
  unescape: _unescape_js__WEBPACK_IMPORTED_MODULE_0__.unescape
};
const setDefaults = function () {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  defaultOptions = {
    ...defaultOptions,
    ...options
  };
};
const getDefaults = () => defaultOptions;

/***/ }),

/***/ "./node_modules/react-i18next/dist/es/i18nInstance.js":
/*!************************************************************!*\
  !*** ./node_modules/react-i18next/dist/es/i18nInstance.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getI18n: () => (/* binding */ getI18n),
/* harmony export */   setI18n: () => (/* binding */ setI18n)
/* harmony export */ });
let i18nInstance;
const setI18n = instance => {
  i18nInstance = instance;
};
const getI18n = () => i18nInstance;

/***/ }),

/***/ "./node_modules/react-i18next/dist/es/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-i18next/dist/es/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I18nContext: () => (/* reexport safe */ _context_js__WEBPACK_IMPORTED_MODULE_11__.I18nContext),
/* harmony export */   I18nextProvider: () => (/* reexport safe */ _I18nextProvider_js__WEBPACK_IMPORTED_MODULE_5__.I18nextProvider),
/* harmony export */   Trans: () => (/* reexport safe */ _Trans_js__WEBPACK_IMPORTED_MODULE_0__.Trans),
/* harmony export */   TransWithoutContext: () => (/* reexport safe */ _TransWithoutContext_js__WEBPACK_IMPORTED_MODULE_1__.Trans),
/* harmony export */   Translation: () => (/* reexport safe */ _Translation_js__WEBPACK_IMPORTED_MODULE_4__.Translation),
/* harmony export */   composeInitialProps: () => (/* reexport safe */ _context_js__WEBPACK_IMPORTED_MODULE_11__.composeInitialProps),
/* harmony export */   date: () => (/* binding */ date),
/* harmony export */   getDefaults: () => (/* reexport safe */ _defaults_js__WEBPACK_IMPORTED_MODULE_9__.getDefaults),
/* harmony export */   getI18n: () => (/* reexport safe */ _i18nInstance_js__WEBPACK_IMPORTED_MODULE_10__.getI18n),
/* harmony export */   getInitialProps: () => (/* reexport safe */ _context_js__WEBPACK_IMPORTED_MODULE_11__.getInitialProps),
/* harmony export */   initReactI18next: () => (/* reexport safe */ _initReactI18next_js__WEBPACK_IMPORTED_MODULE_8__.initReactI18next),
/* harmony export */   number: () => (/* binding */ number),
/* harmony export */   plural: () => (/* binding */ plural),
/* harmony export */   select: () => (/* binding */ select),
/* harmony export */   selectOrdinal: () => (/* binding */ selectOrdinal),
/* harmony export */   setDefaults: () => (/* reexport safe */ _defaults_js__WEBPACK_IMPORTED_MODULE_9__.setDefaults),
/* harmony export */   setI18n: () => (/* reexport safe */ _i18nInstance_js__WEBPACK_IMPORTED_MODULE_10__.setI18n),
/* harmony export */   time: () => (/* binding */ time),
/* harmony export */   useSSR: () => (/* reexport safe */ _useSSR_js__WEBPACK_IMPORTED_MODULE_7__.useSSR),
/* harmony export */   useTranslation: () => (/* reexport safe */ _useTranslation_js__WEBPACK_IMPORTED_MODULE_2__.useTranslation),
/* harmony export */   withSSR: () => (/* reexport safe */ _withSSR_js__WEBPACK_IMPORTED_MODULE_6__.withSSR),
/* harmony export */   withTranslation: () => (/* reexport safe */ _withTranslation_js__WEBPACK_IMPORTED_MODULE_3__.withTranslation)
/* harmony export */ });
/* harmony import */ var _Trans_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Trans.js */ "./node_modules/react-i18next/dist/es/Trans.js");
/* harmony import */ var _TransWithoutContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransWithoutContext.js */ "./node_modules/react-i18next/dist/es/TransWithoutContext.js");
/* harmony import */ var _useTranslation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useTranslation.js */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _withTranslation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withTranslation.js */ "./node_modules/react-i18next/dist/es/withTranslation.js");
/* harmony import */ var _Translation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translation.js */ "./node_modules/react-i18next/dist/es/Translation.js");
/* harmony import */ var _I18nextProvider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./I18nextProvider.js */ "./node_modules/react-i18next/dist/es/I18nextProvider.js");
/* harmony import */ var _withSSR_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./withSSR.js */ "./node_modules/react-i18next/dist/es/withSSR.js");
/* harmony import */ var _useSSR_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useSSR.js */ "./node_modules/react-i18next/dist/es/useSSR.js");
/* harmony import */ var _initReactI18next_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./initReactI18next.js */ "./node_modules/react-i18next/dist/es/initReactI18next.js");
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./defaults.js */ "./node_modules/react-i18next/dist/es/defaults.js");
/* harmony import */ var _i18nInstance_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./i18nInstance.js */ "./node_modules/react-i18next/dist/es/i18nInstance.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./context.js */ "./node_modules/react-i18next/dist/es/context.js");












const date = () => '';
const time = () => '';
const number = () => '';
const select = () => '';
const plural = () => '';
const selectOrdinal = () => '';

/***/ }),

/***/ "./node_modules/react-i18next/dist/es/initReactI18next.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-i18next/dist/es/initReactI18next.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initReactI18next: () => (/* binding */ initReactI18next)
/* harmony export */ });
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults.js */ "./node_modules/react-i18next/dist/es/defaults.js");
/* harmony import */ var _i18nInstance_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18nInstance.js */ "./node_modules/react-i18next/dist/es/i18nInstance.js");


const initReactI18next = {
  type: '3rdParty',
  init(instance) {
    (0,_defaults_js__WEBPACK_IMPORTED_MODULE_0__.setDefaults)(instance.options.react);
    (0,_i18nInstance_js__WEBPACK_IMPORTED_MODULE_1__.setI18n)(instance);
  }
};

/***/ }),

/***/ "./node_modules/react-i18next/dist/es/unescape.js":
/*!********************************************************!*\
  !*** ./node_modules/react-i18next/dist/es/unescape.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   unescape: () => (/* binding */ unescape)
/* harmony export */ });
const matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
const htmlEntities = {
  '&amp;': '&',
  '&#38;': '&',
  '&lt;': '<',
  '&#60;': '<',
  '&gt;': '>',
  '&#62;': '>',
  '&apos;': "'",
  '&#39;': "'",
  '&quot;': '"',
  '&#34;': '"',
  '&nbsp;': ' ',
  '&#160;': ' ',
  '&copy;': '©',
  '&#169;': '©',
  '&reg;': '®',
  '&#174;': '®',
  '&hellip;': '…',
  '&#8230;': '…',
  '&#x2F;': '/',
  '&#47;': '/'
};
const unescapeHtmlEntity = m => htmlEntities[m];
const unescape = text => text.replace(matchHtmlEntity, unescapeHtmlEntity);

/***/ }),

/***/ "./node_modules/react-i18next/dist/es/useSSR.js":
/*!******************************************************!*\
  !*** ./node_modules/react-i18next/dist/es/useSSR.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSSR: () => (/* binding */ useSSR)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context.js */ "./node_modules/react-i18next/dist/es/context.js");


const useSSR = function (initialI18nStore, initialLanguage) {
  let props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const {
    i18n: i18nFromProps
  } = props;
  const {
    i18n: i18nFromContext
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_js__WEBPACK_IMPORTED_MODULE_1__.I18nContext) || {};
  const i18n = i18nFromProps || i18nFromContext || (0,_context_js__WEBPACK_IMPORTED_MODULE_1__.getI18n)();
  if (i18n.options && i18n.options.isClone) return;
  if (initialI18nStore && !i18n.initializedStoreOnce) {
    i18n.services.resourceStore.data = initialI18nStore;
    i18n.options.ns = Object.values(initialI18nStore).reduce((mem, lngResources) => {
      Object.keys(lngResources).forEach(ns => {
        if (mem.indexOf(ns) < 0) mem.push(ns);
      });
      return mem;
    }, i18n.options.ns);
    i18n.initializedStoreOnce = true;
    i18n.isInitialized = true;
  }
  if (initialLanguage && !i18n.initializedLanguageOnce) {
    i18n.changeLanguage(initialLanguage);
    i18n.initializedLanguageOnce = true;
  }
};

/***/ }),

/***/ "./node_modules/react-i18next/dist/es/useTranslation.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-i18next/dist/es/useTranslation.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTranslation: () => (/* binding */ useTranslation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context.js */ "./node_modules/react-i18next/dist/es/context.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/react-i18next/dist/es/utils.js");



const usePrevious = (value, ignore) => {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ref.current = ignore ? ref.current : value;
  }, [value, ignore]);
  return ref.current;
};
const alwaysNewT = (i18n, language, namespace, keyPrefix) => i18n.getFixedT(language, namespace, keyPrefix);
const useMemoizedT = (i18n, language, namespace, keyPrefix) => (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(alwaysNewT(i18n, language, namespace, keyPrefix), [i18n, language, namespace, keyPrefix]);
const useTranslation = function (ns) {
  let props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    i18n: i18nFromProps
  } = props;
  const {
    i18n: i18nFromContext,
    defaultNS: defaultNSFromContext
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_js__WEBPACK_IMPORTED_MODULE_1__.I18nContext) || {};
  const i18n = i18nFromProps || i18nFromContext || (0,_context_js__WEBPACK_IMPORTED_MODULE_1__.getI18n)();
  if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new _context_js__WEBPACK_IMPORTED_MODULE_1__.ReportNamespaces();
  if (!i18n) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.warnOnce)('You will need to pass in an i18next instance by using initReactI18next');
    const notReadyT = (k, optsOrDefaultValue) => {
      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isString)(optsOrDefaultValue)) return optsOrDefaultValue;
      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isObject)(optsOrDefaultValue) && (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isString)(optsOrDefaultValue.defaultValue)) return optsOrDefaultValue.defaultValue;
      return Array.isArray(k) ? k[k.length - 1] : k;
    };
    const retNotReady = [notReadyT, {}, false];
    retNotReady.t = notReadyT;
    retNotReady.i18n = {};
    retNotReady.ready = false;
    return retNotReady;
  }
  if (i18n.options.react && i18n.options.react.wait !== undefined) (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.warnOnce)('It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.');
  const i18nOptions = {
    ...(0,_context_js__WEBPACK_IMPORTED_MODULE_1__.getDefaults)(),
    ...i18n.options.react,
    ...props
  };
  const {
    useSuspense,
    keyPrefix
  } = i18nOptions;
  let namespaces = ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
  namespaces = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isString)(namespaces) ? [namespaces] : namespaces || ['translation'];
  if (i18n.reportNamespaces.addUsedNamespaces) i18n.reportNamespaces.addUsedNamespaces(namespaces);
  const ready = (i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every(n => (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.hasLoadedNamespace)(n, i18n, i18nOptions));
  const memoGetT = useMemoizedT(i18n, props.lng || null, i18nOptions.nsMode === 'fallback' ? namespaces : namespaces[0], keyPrefix);
  const getT = () => memoGetT;
  const getNewT = () => alwaysNewT(i18n, props.lng || null, i18nOptions.nsMode === 'fallback' ? namespaces : namespaces[0], keyPrefix);
  const [t, setT] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getT);
  let joinedNS = namespaces.join();
  if (props.lng) joinedNS = `${props.lng}${joinedNS}`;
  const previousJoinedNS = usePrevious(joinedNS);
  const isMounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const {
      bindI18n,
      bindI18nStore
    } = i18nOptions;
    isMounted.current = true;
    if (!ready && !useSuspense) {
      if (props.lng) {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.loadLanguages)(i18n, props.lng, namespaces, () => {
          if (isMounted.current) setT(getNewT);
        });
      } else {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.loadNamespaces)(i18n, namespaces, () => {
          if (isMounted.current) setT(getNewT);
        });
      }
    }
    if (ready && previousJoinedNS && previousJoinedNS !== joinedNS && isMounted.current) {
      setT(getNewT);
    }
    const boundReset = () => {
      if (isMounted.current) setT(getNewT);
    };
    if (bindI18n && i18n) i18n.on(bindI18n, boundReset);
    if (bindI18nStore && i18n) i18n.store.on(bindI18nStore, boundReset);
    return () => {
      isMounted.current = false;
      if (bindI18n && i18n) bindI18n.split(' ').forEach(e => i18n.off(e, boundReset));
      if (bindI18nStore && i18n) bindI18nStore.split(' ').forEach(e => i18n.store.off(e, boundReset));
    };
  }, [i18n, joinedNS]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isMounted.current && ready) {
      setT(getT);
    }
  }, [i18n, keyPrefix, ready]);
  const ret = [t, i18n, ready];
  ret.t = t;
  ret.i18n = i18n;
  ret.ready = ready;
  if (ready) return ret;
  if (!ready && !useSuspense) return ret;
  throw new Promise(resolve => {
    if (props.lng) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.loadLanguages)(i18n, props.lng, namespaces, () => resolve());
    } else {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.loadNamespaces)(i18n, namespaces, () => resolve());
    }
  });
};

/***/ }),

/***/ "./node_modules/react-i18next/dist/es/utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-i18next/dist/es/utils.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDisplayName: () => (/* binding */ getDisplayName),
/* harmony export */   hasLoadedNamespace: () => (/* binding */ hasLoadedNamespace),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   loadLanguages: () => (/* binding */ loadLanguages),
/* harmony export */   loadNamespaces: () => (/* binding */ loadNamespaces),
/* harmony export */   warn: () => (/* binding */ warn),
/* harmony export */   warnOnce: () => (/* binding */ warnOnce)
/* harmony export */ });
function warn() {
  if (console && console.warn) {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (isString(args[0])) args[0] = `react-i18next:: ${args[0]}`;
    console.warn(...args);
  }
}
const alreadyWarned = {};
function warnOnce() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  if (isString(args[0]) && alreadyWarned[args[0]]) return;
  if (isString(args[0])) alreadyWarned[args[0]] = new Date();
  warn(...args);
}
const loadedClb = (i18n, cb) => () => {
  if (i18n.isInitialized) {
    cb();
  } else {
    const initialized = () => {
      setTimeout(() => {
        i18n.off('initialized', initialized);
      }, 0);
      cb();
    };
    i18n.on('initialized', initialized);
  }
};
const loadNamespaces = (i18n, ns, cb) => {
  i18n.loadNamespaces(ns, loadedClb(i18n, cb));
};
const loadLanguages = (i18n, lng, ns, cb) => {
  if (isString(ns)) ns = [ns];
  ns.forEach(n => {
    if (i18n.options.ns.indexOf(n) < 0) i18n.options.ns.push(n);
  });
  i18n.loadLanguages(lng, loadedClb(i18n, cb));
};
const oldI18nextHasLoadedNamespace = function (ns, i18n) {
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const lng = i18n.languages[0];
  const fallbackLng = i18n.options ? i18n.options.fallbackLng : false;
  const lastLng = i18n.languages[i18n.languages.length - 1];
  if (lng.toLowerCase() === 'cimode') return true;
  const loadNotPending = (l, n) => {
    const loadState = i18n.services.backendConnector.state[`${l}|${n}`];
    return loadState === -1 || loadState === 2;
  };
  if (options.bindI18n && options.bindI18n.indexOf('languageChanging') > -1 && i18n.services.backendConnector.backend && i18n.isLanguageChangingTo && !loadNotPending(i18n.isLanguageChangingTo, ns)) return false;
  if (i18n.hasResourceBundle(lng, ns)) return true;
  if (!i18n.services.backendConnector.backend || i18n.options.resources && !i18n.options.partialBundledLanguages) return true;
  if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
  return false;
};
const hasLoadedNamespace = function (ns, i18n) {
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (!i18n.languages || !i18n.languages.length) {
    warnOnce('i18n.languages were undefined or empty', i18n.languages);
    return true;
  }
  const isNewerI18next = i18n.options.ignoreJSONStructure !== undefined;
  if (!isNewerI18next) {
    return oldI18nextHasLoadedNamespace(ns, i18n, options);
  }
  return i18n.hasLoadedNamespace(ns, {
    lng: options.lng,
    precheck: (i18nInstance, loadNotPending) => {
      if (options.bindI18n && options.bindI18n.indexOf('languageChanging') > -1 && i18nInstance.services.backendConnector.backend && i18nInstance.isLanguageChangingTo && !loadNotPending(i18nInstance.isLanguageChangingTo, ns)) return false;
    }
  });
};
const getDisplayName = Component => Component.displayName || Component.name || (isString(Component) && Component.length > 0 ? Component : 'Unknown');
const isString = obj => typeof obj === 'string';
const isObject = obj => typeof obj === 'object' && obj !== null;

/***/ }),

/***/ "./node_modules/react-i18next/dist/es/withSSR.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-i18next/dist/es/withSSR.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withSSR: () => (/* binding */ withSSR)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _useSSR_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useSSR.js */ "./node_modules/react-i18next/dist/es/useSSR.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context.js */ "./node_modules/react-i18next/dist/es/context.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./node_modules/react-i18next/dist/es/utils.js");




const withSSR = () => function Extend(WrappedComponent) {
  function I18nextWithSSR(_ref) {
    let {
      initialI18nStore,
      initialLanguage,
      ...rest
    } = _ref;
    (0,_useSSR_js__WEBPACK_IMPORTED_MODULE_1__.useSSR)(initialI18nStore, initialLanguage);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrappedComponent, {
      ...rest
    });
  }
  I18nextWithSSR.getInitialProps = (0,_context_js__WEBPACK_IMPORTED_MODULE_2__.composeInitialProps)(WrappedComponent);
  I18nextWithSSR.displayName = `withI18nextSSR(${(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.getDisplayName)(WrappedComponent)})`;
  I18nextWithSSR.WrappedComponent = WrappedComponent;
  return I18nextWithSSR;
};

/***/ }),

/***/ "./node_modules/react-i18next/dist/es/withTranslation.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-i18next/dist/es/withTranslation.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withTranslation: () => (/* binding */ withTranslation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _useTranslation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useTranslation.js */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/react-i18next/dist/es/utils.js");



const withTranslation = function (ns) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function Extend(WrappedComponent) {
    function I18nextWithTranslation(_ref) {
      let {
        forwardedRef,
        ...rest
      } = _ref;
      const [t, i18n, ready] = (0,_useTranslation_js__WEBPACK_IMPORTED_MODULE_1__.useTranslation)(ns, {
        ...rest,
        keyPrefix: options.keyPrefix
      });
      const passDownProps = {
        ...rest,
        t,
        i18n,
        tReady: ready
      };
      if (options.withRef && forwardedRef) {
        passDownProps.ref = forwardedRef;
      } else if (!options.withRef && forwardedRef) {
        passDownProps.forwardedRef = forwardedRef;
      }
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrappedComponent, passDownProps);
    }
    I18nextWithTranslation.displayName = `withI18nextTranslation(${(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getDisplayName)(WrappedComponent)})`;
    I18nextWithTranslation.WrappedComponent = WrappedComponent;
    const forwardRef = (props, ref) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(I18nextWithTranslation, Object.assign({}, props, {
      forwardedRef: ref
    }));
    return options.withRef ? (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(forwardRef) : I18nextWithTranslation;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************************!*\
  !*** ./client/src/provider.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/workspace/notifications */ "./node_modules/@openfin/workspace/notifications.js");
/* harmony import */ var _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__);

const PLATFORM_ID = "nodejs-notifications";
const PLATFORM_ICON = "http://localhost:8080/images/icon-dot.png";
const PLATFORM_TITLE = "Notifications Proxy";
const NOTIFICATION_SOUND_URL = "http://localhost:8080/assets/notification.mp3";
// Keep track of notifications we are updating
const updatableNotifications = {};
let updatableNotificationTimer;
let loggingElement;
let clearLogsElement;
let activePlatform;
let connected = false;
let connectedVersion;
let statusIntervalId;
let lastConnectionStatus;
let channel;
/**
 * Wait for the DOM to have been loaded before we connect the UI elements and listeners.
 */
window.addEventListener("DOMContentLoaded", async () => {
    await initializeDom();
    await initializeListeners();
    await createChannelAndRegisterListeners();
    // Delay platform initialization to allow notifications service to fully start
    setTimeout(async () => {
        await initializePlatform();
    }, 2000);
});
/**
 * Initialize the DOM elements.
 */
async function initializeDom() {
    loggingElement = document.querySelector("#logging");
    const loggingContainer = document.querySelector("#logging-container");
    if (!loggingElement || !loggingContainer) {
        return;
    }
    loggingAddEntry(`Library Version: ${_openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.VERSION}`);
    loggingContainer.style.display = "flex";
    clearLogsElement = document.querySelector("#btnClear");
    clearLogsElement?.addEventListener("click", () => loggingElement ? loggingElement.textContent = "" : null);
}
async function initializePlatform() {
    try {
        await (0,_openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.register)({
            notificationsPlatformOptions: {
                id: PLATFORM_ID,
                icon: PLATFORM_ICON,
                title: PLATFORM_TITLE
            }
        });
        loggingAddEntry("Platform registered");
        activePlatform = PLATFORM_ID;
    }
    catch (error) {
        loggingAddEntry(`Platform registration failed: ${error}`);
        // Continue without platform registration - notifications may still work
        activePlatform = PLATFORM_ID;
    }
    // Get initial notification count
    try {
        const notificationsCount = await (0,_openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.getNotificationsCount)();
        loggingAddEntry(`Number of notifications in the Notification Center is ${notificationsCount}`);
    }
    catch (error) {
        loggingAddEntry(`Error getting notifications count: ${error}`);
    }
}
/**
 * Initialize the listeners for the events from the notification center.
 */
async function initializeListeners() {
    // Listen for new notifications being created
    (0,_openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.addEventListener)("notification-created", (event) => {
        loggingAddEntry(`Created: ${event.notification.id}`);
    });
    (0,_openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.addEventListener)("notification-closed", (event) => {
        loggingAddEntry(`Closed: ${event.notification.id}`);
        if (updatableNotifications[event.notification.id]) {
            delete updatableNotifications[event.notification.id];
            if (Object.keys(updatableNotifications).length === 0) {
                window.clearInterval(updatableNotificationTimer);
                updatableNotificationTimer = undefined;
            }
        }
    });
    (0,_openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.addEventListener)("notification-action", (event) => {
        if (event?.result?.BODY_CLICK === "dismiss_event") {
            if (event.notification?.customData?.action) {
                loggingAddEntry(`\tData: ${event?.notification?.customData ? JSON.stringify(event.notification.customData) : "None"}`);
            }
            else {
                loggingAddEntry("\tNo action");
            }
            loggingAddEntry("\tBody click dismiss");
        }
        else {
            loggingAddEntry(`\tData: ${event?.result?.customData ? JSON.stringify(event.result.customData) : "None"}`);
            loggingAddEntry(`\tTask: ${event?.result?.task ?? "None"}`);
            loggingAddEntry(`Action: ${event.notification.id}`);
        }
        console.log(event);
    });
    (0,_openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.addEventListener)("notification-toast-dismissed", (event) => {
        loggingAddEntry(`Toast Dismissed: ${event.notification.id}`);
    });
    // Event listener that tracks when input form notification is submitted
    (0,_openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.addEventListener)("notification-form-submitted", (event) => {
        loggingAddEntry(`\tData: ${event?.form ? JSON.stringify(event.form) : "None"}`);
        loggingAddEntry(`Form submitted: ${event.notification.id}`);
        console.log(event);
        // Send data back to the client
        channel.publish('form-notification-response', JSON.stringify(event?.form));
    });
    (0,_openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.addEventListener)("notifications-count-changed", (event) => {
        loggingAddEntry(`Number of notifications in the Notification Center is ${event.count}`);
    });
    addConnectionChangedEventListener((status) => {
        if (status.connected !== connected) {
            connected = status.connected;
            connectedVersion = status.version;
            updateConnectedState();
        }
    });
}
async function createChannelAndRegisterListeners() {
    channel = await createChannel();
    if (channel !== null) {
        channel.onConnection((identity, payload) => {
            console.log('onConnection identity: ', JSON.stringify(identity));
            console.log('onConnection payload: ', JSON.stringify(payload));
            loggingAddEntry('onConnection identity: ' + JSON.stringify(identity));
        });
        channel.onDisconnection((identity) => {
            console.log('onDisconnection identity: ', JSON.stringify(identity));
            loggingAddEntry('onDisconnection identity: ' + JSON.stringify(identity));
        });
        // received request over channel to display simple notification
        channel.register('send-simple-notification', async (payload) => {
            if (payload) {
                createNotification(payload);
            }
            else {
                loggingAddEntry(`Error : No payload received with Notification request\n\n`);
            }
        });
        // received request over channel to display input form notification
        channel.register('show-form-notification', async (payload) => {
            if (payload) {
                createNotification(payload);
            }
            else {
                if (loggingElement)
                    loggingAddEntry(`Error : No payload received with Notification request`);
            }
        });
        channel.register('throwError', (err) => {
            loggingAddEntry(`Error in channelProvider - ${err}`);
            throw new Error(`Error in channelProvider - ${err}`);
        });
    }
}
async function createNotification(payload) {
    try {
        loggingAddEntry(`Received notification payload from client: \n\n\t${JSON.stringify(payload, null, 2)}`);
        const notificationOptions = payload;
        await (0,_openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.create)(notificationOptions);
    }
    catch (error) {
        console.log(error);
        loggingAddEntry(`Error parsing payload:  \n\n\t${error}`);
    }
}
async function createChannel() {
    const channelName = 'notification-channel';
    const provider = await fin.InterApplicationBus.Channel.create(channelName);
    loggingAddEntry(`New channel provider created: ${channelName}`);
    return provider;
}
/**
 * Add a new entry in to the logging window.
 * @param entry The entry to add.
 */
function loggingAddEntry(entry) {
    if (loggingElement) {
        loggingElement.textContent = `${entry}\n\n${loggingElement.textContent}`;
    }
}
/**
 * Update the connected state on the view.
 */
function updateConnectedState() {
    loggingAddEntry(`Is Connected: ${connected}`);
    if (connected) {
        loggingAddEntry(`Connected Version: ${connectedVersion}`);
    }
    const buttons = document.querySelectorAll("button");
    for (const button of buttons) {
        button.disabled = !connected;
    }
}
/**
 * Update the notification count on the view.
 * @param count The new count to display.
 */
function showNotificationCount(count) {
    const btnNotificationsCenterShow = document.querySelector("#btnNotificationsCenterShow");
    if (btnNotificationsCenterShow) {
        btnNotificationsCenterShow.textContent = `Show [${count}]`;
    }
}
async function showNotification(payload) {
    const notification = payload;
    await (0,_openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.create)(notification);
}
/**
 * Add a listener which checks for the connection changed event.
 * @param callback The callback to call when the connection state changes.
 */
function addConnectionChangedEventListener(callback) {
    if (statusIntervalId === undefined) {
        statusIntervalId = window.setInterval(async () => {
            const status = await _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.provider.getStatus();
            if (status.connected !== lastConnectionStatus) {
                lastConnectionStatus = status.connected;
                callback(status);
            }
        }, 1000);
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9C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eEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsSUFBSSxFQUFFLDhCQUE4QixFQUFFLGdCQUFnQjtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLGdGQUFnRixFQUFFO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRkFBK0YsYUFBYTtBQUM1RztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtR0FBbUcsZUFBZTtBQUNsSDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDRCQUE0QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtB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LFdBQVc7QUFDOUIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLCtDQUErQyw2QkFBNkI7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFCQUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMseUNBQXlDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixjQUFjO0FBQ2Q7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLGdCQUFnQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpQkFBaUI7QUFDckIsSUFBSSxnQkFBZ0I7QUFDcEIsSUFBSSxnQkFBZ0I7QUFDcEIsSUFBSSxxQkFBcUI7QUFDekIsSUFBSSxrQkFBa0I7QUFDdEIsSUFBSSxnQkFBZ0I7QUFDcEIsSUFBSSx1RUFBdUU7QUFDM0U7QUFDQSxJQUFJLDBCQUEwQjtBQUM5QixJQUFJLFdBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnTkFBZ047QUFDaE47QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5QkFBeUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvQkFBb0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixjQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscUJBQXFCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFCQUFxQjtBQUN6QixzQkFBc0Isc0JBQXNCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpQkFBaUI7QUFDckIsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLElBQUksa0JBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGtEQUFrRDtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsYUFBYTtBQUNsRTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxJQUFJLHNCQUFzQjtBQUMxQixJQUFJLFlBQVk7QUFDaEI7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSxZQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELGFBQWE7QUFDaEU7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsSUFBSSx1QkFBdUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0NBQWdDO0FBQ3BDO0FBQ0E7QUFDQSxJQUFJLFdBQVc7QUFDZjtBQUNBO0FBQ0EsSUFBSSxzQkFBc0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtQkFBbUI7QUFDdkI7QUFDQTtBQUNBLElBQUksa0JBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxQkFBcUI7QUFDekI7QUFDQTtBQUNBLElBQUksd0JBQXdCO0FBQzVCO0FBQ0E7QUFDQSxJQUFJLGlCQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFhO0FBQ2pCO0FBQ0E7QUFDQSxJQUFJLDJCQUEyQjtBQUMvQjtBQUNBO0FBQ0EsSUFBSSwwQkFBMEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1QkFBdUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxlQUFlO0FBQ25CO0FBQ0E7QUFDQSxJQUFJLHFCQUFxQjtBQUN6QjtBQUNBO0FBQ0EsSUFBSSxrQkFBa0I7QUFDdEI7QUFDQTtBQUNBLElBQUksY0FBYztBQUNsQjtBQUNBO0FBQ0EsSUFBSSxnQkFBZ0I7QUFDcEI7QUFDQTtBQUNBLElBQUksNEJBQTRCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxQkFBcUI7QUFDekI7QUFDQTtBQUNBLElBQUksZUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7Ozs7Ozs7Ozs7OztBQzF0Q1U7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDLENBQUM7QUFDRixFQUFFLHVIQUFzRDtBQUN4RDs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QztBQUVELEtBQUssVUFBVSxnQkFBZ0IsQ0FBQyxPQUE0QjtJQUMzRCxNQUFNLFlBQVksR0FBd0IsT0FBTyxDQUFDO0lBQ2xELE1BQU0sd0VBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUM1QixDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBUyxpQ0FBaUMsQ0FBQyxRQUFtRDtJQUM3RixJQUFJLGdCQUFnQixLQUFLLFNBQVMsRUFBRTtRQUNuQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ2hELE1BQU0sTUFBTSxHQUFHLE1BQU0sc0VBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUMxQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssb0JBQW9CLEVBQUU7Z0JBQzlDLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7Z0JBQ3hDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNqQjtRQUNGLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUNUO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1ub3RpZmljYXRpb25zLXByb3h5Ly4vbm9kZV9tb2R1bGVzL0BvcGVuZmluL3dvcmtzcGFjZS9ub3RpZmljYXRpb25zLmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1ub3RpZmljYXRpb25zLXByb3h5Ly4vbm9kZV9tb2R1bGVzL2h0bWwtcGFyc2Utc3RyaW5naWZ5L2Rpc3QvaHRtbC1wYXJzZS1zdHJpbmdpZnkubW9kdWxlLmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1ub3RpZmljYXRpb25zLXByb3h5Ly4vbm9kZV9tb2R1bGVzL2kxOG5leHQvZGlzdC9janMvaTE4bmV4dC5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tbm90aWZpY2F0aW9ucy1wcm94eS8uL25vZGVfbW9kdWxlcy9sb2Rhc2guZGVib3VuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLW5vdGlmaWNhdGlvbnMtcHJveHkvLi9ub2RlX21vZHVsZXMvb3BlbmZpbi1ub3RpZmljYXRpb25zL2Rpc3QvY2xpZW50L3dpdGhvdXQtYXV0by1sYXVuY2guanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLW5vdGlmaWNhdGlvbnMtcHJveHkvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1ub3RpZmljYXRpb25zLXByb3h5Ly4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1ub3RpZmljYXRpb25zLXByb3h5Ly4vbm9kZV9tb2R1bGVzL3ZvaWQtZWxlbWVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLW5vdGlmaWNhdGlvbnMtcHJveHkvLi9ub2RlX21vZHVsZXMvaWRiLWtleXZhbC9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1ub3RpZmljYXRpb25zLXByb3h5Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LWkxOG5leHQvZGlzdC9lcy9JMThuZXh0UHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLW5vdGlmaWNhdGlvbnMtcHJveHkvLi9ub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9kaXN0L2VzL1RyYW5zLmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1ub3RpZmljYXRpb25zLXByb3h5Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LWkxOG5leHQvZGlzdC9lcy9UcmFuc1dpdGhvdXRDb250ZXh0LmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1ub3RpZmljYXRpb25zLXByb3h5Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LWkxOG5leHQvZGlzdC9lcy9UcmFuc2xhdGlvbi5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tbm90aWZpY2F0aW9ucy1wcm94eS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L2Rpc3QvZXMvY29udGV4dC5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tbm90aWZpY2F0aW9ucy1wcm94eS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L2Rpc3QvZXMvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLW5vdGlmaWNhdGlvbnMtcHJveHkvLi9ub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9kaXN0L2VzL2kxOG5JbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tbm90aWZpY2F0aW9ucy1wcm94eS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L2Rpc3QvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLW5vdGlmaWNhdGlvbnMtcHJveHkvLi9ub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9kaXN0L2VzL2luaXRSZWFjdEkxOG5leHQuanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLW5vdGlmaWNhdGlvbnMtcHJveHkvLi9ub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9kaXN0L2VzL3VuZXNjYXBlLmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1ub3RpZmljYXRpb25zLXByb3h5Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LWkxOG5leHQvZGlzdC9lcy91c2VTU1IuanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLW5vdGlmaWNhdGlvbnMtcHJveHkvLi9ub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9kaXN0L2VzL3VzZVRyYW5zbGF0aW9uLmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1ub3RpZmljYXRpb25zLXByb3h5Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LWkxOG5leHQvZGlzdC9lcy91dGlscy5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tbm90aWZpY2F0aW9ucy1wcm94eS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L2Rpc3QvZXMvd2l0aFNTUi5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tbm90aWZpY2F0aW9ucy1wcm94eS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L2Rpc3QvZXMvd2l0aFRyYW5zbGF0aW9uLmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1ub3RpZmljYXRpb25zLXByb3h5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1ub3RpZmljYXRpb25zLXByb3h5L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1ub3RpZmljYXRpb25zLXByb3h5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tbm90aWZpY2F0aW9ucy1wcm94eS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1ub3RpZmljYXRpb25zLXByb3h5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLW5vdGlmaWNhdGlvbnMtcHJveHkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tbm90aWZpY2F0aW9ucy1wcm94eS93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1ub3RpZmljYXRpb25zLXByb3h5Ly4vY2xpZW50L3NyYy9wcm92aWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoKCk9Pnt2YXIgZT17ODQ3OihlLHQpPT57dmFyIGE9ezIzNDY6ZnVuY3Rpb24oZSx0LGEpe3ZhciBuPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuZ2V0TW9zdFJlYWRhYmxlPXQuZGFya2VuQ29sb3I9dC5saWdodGVuQ29sb3I9dm9pZCAwO2NvbnN0IHI9bihhKDY1MzUpKTt0LmxpZ2h0ZW5Db2xvcj0oZSx0KT0+byhlLFwibGlnaHRlblwiLHQpLHQuZGFya2VuQ29sb3I9KGUsdCk9Pm8oZSxcImRhcmtlblwiLHQpO2NvbnN0IG89KGUsdCxhKT0+e2lmKGEmJihhPDB8fGE+MTAwKSl0aHJvdyBuZXcgRXJyb3IoYCR7YX0gbXVzdCBiZSBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEwMGApO3JldHVybigwLHIuZGVmYXVsdCkoZSlbdF0oYSkudG9TdHJpbmcoKX07dC5nZXRNb3N0UmVhZGFibGU9KGUsdCk9PnIuZGVmYXVsdC5tb3N0UmVhZGFibGUoZSx0KS50b0hleFN0cmluZygpfSwyMzE3OihlLHQpPT57T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5JY29uU2l6ZT10LlRyYW5zaXRpb249dC5MaW5lSGVpZ2h0PXQuRm9udFdlaWdodD10LkZvbnRTaXplPXQuRm9udEZhbWlseT10LlNoYWRvdz10LlJhZGl1cz10LlVuaXRQeD10LlVuaXQ9dC5TaXplTmFtZT10LlNpemU9dC5Db2xvcj12b2lkIDAsdC5Db2xvcj17d2hpdGU6XCIjRkZGRkZGXCIsbGlnaHRHcmF5MTpcIiNGQUZCRkVcIixsaWdodEdyYXkyOlwiI0YzRjVGOFwiLGxpZ2h0R3JheTM6XCIjRUNFRUYxXCIsbGlnaHRHcmF5NDpcIiNERERGRTRcIixsaWdodEdyYXk1OlwiI0M5Q0JEMlwiLG5ldXRyYWxHcmF5OlwiIzdEODA4QVwiLG5ldXRyYWxHcmF5ODA6XCJyZ2JhKDEyNSwxMjgsMTM4LDAuOClcIixzaWx2ZXJHcmF5OlwiI0MwQzFDMlwiLGRhcmtHcmF5MTpcIiM1MzU2NUZcIixkYXJrR3JheTI6XCIjMzgzQTQwXCIsZGFya0dyYXkzOlwiIzJGMzEzNlwiLGRhcmtHcmF5NDpcIiMyNDI2MkJcIixkYXJrR3JheTU6XCIjMUUxRjIzXCIsZGFya0dyYXk2OlwiIzExMTIxNFwiLG9wZW5GaW5EYXJrZXN0OlwiIzNEMzlDRFwiLG9wZW5GaW5EYXJrZXI6XCIjNDY0MkUwXCIsb3BlbkZpbjpcIiM1MDRDRkZcIixvcGVuRmluTGlnaHQ6XCIjNTI1NEZCXCIsb3BlbkZpbkxpZ2h0ZXI6XCIjNUM1RUZFXCIsb3BlbkZpbkxpZ2h0ZXN0OlwiIzY4NjRGRlwiLGZ1bmN0aW9uYWwxOlwiIzIwNzczNVwiLGZ1bmN0aW9uYWwyOlwiIzQ2QzhGMVwiLGZ1bmN0aW9uYWwzOlwiIzBBNzZEM1wiLGZ1bmN0aW9uYWw0OlwiIzZDQURFNVwiLGZ1bmN0aW9uYWw1OlwiIzBBNzZEM1wiLGZ1bmN0aW9uYWw2OlwiIzg4MkJGRVwiLGZ1bmN0aW9uYWw3OlwiI0YzMTgxOFwiLGZ1bmN0aW9uYWw4OlwiI0M5MzQwMFwiLGZ1bmN0aW9uYWw5OlwiI0ZGNUU2MFwiLGZ1bmN0aW9uYWwxMDpcIiNGNDhGMDBcIixwdXJwbGU6XCIjOEM2MUZGXCIsbGlnaHRibHVlOlwiIzM2QzNGRVwiLGFxdWE6XCIjMDBDQzg4XCIseWVsbG93OlwiI0ZGRUIwMFwiLHNhbG1vbjpcIiNGRjhDNENcIixwaW5rOlwiI0ZGNUU2MFwiLGxpZ2h0cGluazpcIiNGRjhGQjhcIix3aGl0ZTAwOlwicmdiYSgyNTUsMjU1LDI1NSwwLjApXCIsd2hpdGUxMDpcInJnYmEoMjU1LDI1NSwyNTUsMC4xKVwiLHdoaXRlMjA6XCJyZ2JhKDI1NSwyNTUsMjU1LDAuMilcIix3aGl0ZTMwOlwicmdiYSgyNTUsMjU1LDI1NSwwLjMpXCIsd2hpdGU0MDpcInJnYmEoMjU1LDI1NSwyNTUsMC40KVwiLHdoaXRlNTA6XCJyZ2JhKDI1NSwyNTUsMjU1LDAuNSlcIix3aGl0ZTYwOlwicmdiYSgyNTUsMjU1LDI1NSwwLjYpXCIsd2hpdGU3MDpcInJnYmEoMjU1LDI1NSwyNTUsMC43KVwiLHdoaXRlODA6XCJyZ2JhKDI1NSwyNTUsMjU1LDAuOClcIix3aGl0ZTkwOlwicmdiYSgyNTUsMjU1LDI1NSwwLjkpXCIsYmxhY2swMDpcInJnYmEoMCwwLDAsMC4wKVwiLGJsYWNrMTA6XCJyZ2JhKDAsMCwwLDAuMSlcIixibGFjazIwOlwicmdiYSgwLDAsMCwwLjIpXCIsYmxhY2szMDpcInJnYmEoMCwwLDAsMC4zKVwiLGJsYWNrNDA6XCJyZ2JhKDAsMCwwLDAuNClcIixibGFjazUwOlwicmdiYSgwLDAsMCwwLjUpXCIsYmxhY2s2MDpcInJnYmEoMCwwLDAsMC42KVwiLGJsYWNrNzA6XCJyZ2JhKDAsMCwwLDAuNylcIixibGFjazgwOlwicmdiYSgwLDAsMCwwLjgpXCIsYmxhY2s5MDpcInJnYmEoMCwwLDAsMC45KVwiLHRyYW5zcGFyZW50OlwidHJhbnNwYXJlbnRcIn0sdC5TaXplPXt4c21hbGw6XCJ4c21hbGxcIixzbWFsbDpcInNtYWxsXCIsYmFzZTpcImJhc2VcIixsYXJnZTpcImxhcmdlXCIseGxhcmdlOlwieGxhcmdlXCIseHhsYXJnZTpcInh4bGFyZ2VcIix4eHhsYXJnZTpcInh4eGxhcmdlXCIseHh4eGxhcmdlOlwieHh4eGxhcmdlXCJ9LHQuU2l6ZU5hbWU9e1t0LlNpemUueHNtYWxsXTpcIkV4dHJhIFNtYWxsXCIsW3QuU2l6ZS5zbWFsbF06XCJTbWFsbFwiLFt0LlNpemUuYmFzZV06XCJCYXNlXCIsW3QuU2l6ZS5sYXJnZV06XCJMYXJnZVwiLFt0LlNpemUueGxhcmdlXTpcIkV4dHJhIExhcmdlXCIsW3QuU2l6ZS54eGxhcmdlXTpcIjJYIExhcmdlXCIsW3QuU2l6ZS54eHhsYXJnZV06XCIzWCBMYXJnZVwiLFt0LlNpemUueHh4eGxhcmdlXTpcIjRYIExhcmdlXCJ9LHQuVW5pdD17W3QuU2l6ZS54c21hbGxdOjQsW3QuU2l6ZS5zbWFsbF06OCxbdC5TaXplLmJhc2VdOjEyLFt0LlNpemUubGFyZ2VdOjE2LFt0LlNpemUueGxhcmdlXToyMCxbdC5TaXplLnh4bGFyZ2VdOjI0LFt0LlNpemUueHh4bGFyZ2VdOjMyLFt0LlNpemUueHh4eGxhcmdlXTo0OH0sdC5Vbml0UHg9e1t0LlNpemUueHNtYWxsXTpcIjRweFwiLFt0LlNpemUuc21hbGxdOlwiOHB4XCIsW3QuU2l6ZS5iYXNlXTpcIjEycHhcIixbdC5TaXplLmxhcmdlXTpcIjE2cHhcIixbdC5TaXplLnhsYXJnZV06XCIyMHB4XCIsW3QuU2l6ZS54eGxhcmdlXTpcIjI0cHhcIixbdC5TaXplLnh4eGxhcmdlXTpcIjMycHhcIixbdC5TaXplLnh4eHhsYXJnZV06XCI0OHB4XCJ9LHQuUmFkaXVzPXtbdC5TaXplLnhzbWFsbF06XCIycHhcIixbdC5TaXplLnNtYWxsXTpcIjRweFwiLFt0LlNpemUuYmFzZV06XCI4cHhcIixbdC5TaXplLmxhcmdlXTpcIjI0cHhcIixwaWxsOlwiMTAwdmhcIixyb3VuZDpcIjUwJVwiLG5vbmU6XCIwXCJ9LHQuU2hhZG93PXtbdC5TaXplLmJhc2VdOlwiMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSlcIn0sdC5Gb250RmFtaWx5PVtcIkludGVyXCIsXCJzeXN0ZW0tdWlcIixcIkJsaW5rTWFjU3lzdGVtRm9udFwiLFwiU2Vnb2UgVUlcIixcIlJvYm90b1wiLFwiT3h5Z2VuLVNhbnNcIixcIlVidW50dVwiLFwiQ2FudGFyZWxsXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLFwic2Fucy1zZXJpZlwiXS5qb2luKFwiLFwiKSx0LkZvbnRTaXplPXtbdC5TaXplLnhzbWFsbF06XCI4cHhcIixbdC5TaXplLnNtYWxsXTpcIjEwcHhcIixbdC5TaXplLmJhc2VdOlwiMTJweFwiLFt0LlNpemUubGFyZ2VdOlwiMTRweFwiLFt0LlNpemUueGxhcmdlXTpcIjE2cHhcIixbdC5TaXplLnh4bGFyZ2VdOlwiMThweFwiLFt0LlNpemUueHh4bGFyZ2VdOlwiMjBweFwiLFt0LlNpemUueHh4eGxhcmdlXTpcIjQwcHhcIn0sdC5Gb250V2VpZ2h0PXtub3JtYWw6NDAwLGJvbGQ6NjAwfSx0LkxpbmVIZWlnaHQ9e3VpOjEsaGVhZGluZzoxLjIsdGV4dDoxLjV9LHQuVHJhbnNpdGlvbj17YmFzZTpcIjIwMG1zIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpXCIsbm9uZTpcIjBtc1wifSx0Lkljb25TaXplPXtbdC5TaXplLnhzbWFsbF06dC5Vbml0UHguc21hbGwsW3QuU2l6ZS5zbWFsbF06dC5Vbml0UHguYmFzZSxbdC5TaXplLmJhc2VdOlwiMTVweFwiLFt0LlNpemUubGFyZ2VdOnQuVW5pdFB4LnhsYXJnZSxbdC5TaXplLnhsYXJnZV06dC5Vbml0UHgueHhsYXJnZSxbdC5TaXplLnh4bGFyZ2VdOnQuVW5pdFB4Lnh4eGxhcmdlLFt0LlNpemUueHh4bGFyZ2VdOnQuVW5pdFB4Lnh4eHhsYXJnZX19LDY4OTM6KGUsdCxhKT0+e09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuY3JlYXRlVGhlbWU9dm9pZCAwO2NvbnN0IG49YSgyMzE3KSxyPWEoMjM0Niksbz1hKDU5MzkpLGk9e2ZvbnRGYW1pbHk6bi5Gb250RmFtaWx5LGZvbnRTaXplOm4uRm9udFNpemUsZm9udFdlaWdodDpuLkZvbnRXZWlnaHQsbGluZUhlaWdodDpuLkxpbmVIZWlnaHQsaWNvblNpemU6bi5JY29uU2l6ZSxyYWRpdXM6bi5SYWRpdXMsc2hhZG93Om4uU2hhZG93LHRyYW5zaXRpb246bi5UcmFuc2l0aW9uLHVuaXQ6bi5Vbml0LHB4Om4uVW5pdFB4fSxzPShlLHQpPT4oe1tgJHtlfUFjdGl2ZWBdOigwLHIuZGFya2VuQ29sb3IpKHQsMiksW2Ake2V9SG92ZXJgXTooMCxyLmxpZ2h0ZW5Db2xvcikodCw1KSxbYCR7ZX1Gb2N1c2VkYF06KDAsci5nZXRNb3N0UmVhZGFibGUpKHQsW24uQ29sb3Iud2hpdGUsbi5Db2xvci5kYXJrR3JheTVdKSxbYCR7ZX1UZXh0YF06KDAsci5nZXRNb3N0UmVhZGFibGUpKHQsW24uQ29sb3Iud2hpdGUsbi5Db2xvci5kYXJrR3JheTVdKX0pO3QuY3JlYXRlVGhlbWU9ZT0+T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LGkpLHtwYWxldHRlOk9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LGUpLHMoby5QYWxldHRlLmJyYW5kUHJpbWFyeSxlLmJyYW5kUHJpbWFyeSkpLHMoby5QYWxldHRlLmJyYW5kU2Vjb25kYXJ5LGUuYnJhbmRTZWNvbmRhcnkpKX0pfSw1OTM5OihlLHQpPT57T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5QYWxldHRlPXZvaWQgMCx0LlBhbGV0dGU9e2JhY2tncm91bmQxOlwiYmFja2dyb3VuZDFcIixiYWNrZ3JvdW5kMjpcImJhY2tncm91bmQyXCIsYmFja2dyb3VuZDM6XCJiYWNrZ3JvdW5kM1wiLGJhY2tncm91bmQ0OlwiYmFja2dyb3VuZDRcIixiYWNrZ3JvdW5kNTpcImJhY2tncm91bmQ1XCIsYmFja2dyb3VuZDY6XCJiYWNrZ3JvdW5kNlwiLGJyYW5kUHJpbWFyeTpcImJyYW5kUHJpbWFyeVwiLGJyYW5kU2Vjb25kYXJ5OlwiYnJhbmRTZWNvbmRhcnlcIixicmFuZFByaW1hcnlBY3RpdmU6XCJicmFuZFByaW1hcnlBY3RpdmVcIixicmFuZFByaW1hcnlIb3ZlcjpcImJyYW5kUHJpbWFyeUhvdmVyXCIsYnJhbmRQcmltYXJ5Rm9jdXNlZDpcImJyYW5kUHJpbWFyeUZvY3VzZWRcIixicmFuZFByaW1hcnlUZXh0OlwiYnJhbmRQcmltYXJ5VGV4dFwiLGJyYW5kU2Vjb25kYXJ5QWN0aXZlOlwiYnJhbmRTZWNvbmRhcnlBY3RpdmVcIixicmFuZFNlY29uZGFyeUhvdmVyOlwiYnJhbmRTZWNvbmRhcnlIb3ZlclwiLGJyYW5kU2Vjb25kYXJ5Rm9jdXNlZDpcImJyYW5kU2Vjb25kYXJ5Rm9jdXNlZFwiLGJyYW5kU2Vjb25kYXJ5VGV4dDpcImJyYW5kU2Vjb25kYXJ5VGV4dFwiLGlucHV0QmFja2dyb3VuZDpcImlucHV0QmFja2dyb3VuZFwiLGlucHV0Q29sb3I6XCJpbnB1dENvbG9yXCIsaW5wdXRQbGFjZWhvbGRlcjpcImlucHV0UGxhY2Vob2xkZXJcIixpbnB1dERpc2FibGVkOlwiaW5wdXREaXNhYmxlZFwiLGlucHV0Rm9jdXNlZDpcImlucHV0Rm9jdXNlZFwiLGlucHV0Qm9yZGVyOlwiaW5wdXRCb3JkZXJcIixzdGF0dXNTdWNjZXNzOlwic3RhdHVzU3VjY2Vzc1wiLHN0YXR1c1dhcm5pbmc6XCJzdGF0dXNXYXJuaW5nXCIsc3RhdHVzQ3JpdGljYWw6XCJzdGF0dXNDcml0aWNhbFwiLHN0YXR1c0FjdGl2ZTpcInN0YXR1c0FjdGl2ZVwiLHRleHREZWZhdWx0OlwidGV4dERlZmF1bHRcIix0ZXh0SGVscDpcInRleHRIZWxwXCIsdGV4dEluYWN0aXZlOlwidGV4dEluYWN0aXZlXCIsYm9yZGVyTmV1dHJhbDpcImJvcmRlck5ldXRyYWxcIixjb250ZW50QmFja2dyb3VuZDE6XCJjb250ZW50QmFja2dyb3VuZDFcIixjb250ZW50QmFja2dyb3VuZDI6XCJjb250ZW50QmFja2dyb3VuZDJcIixjb250ZW50QmFja2dyb3VuZDM6XCJjb250ZW50QmFja2dyb3VuZDNcIixjb250ZW50QmFja2dyb3VuZDQ6XCJjb250ZW50QmFja2dyb3VuZDRcIixjb250ZW50QmFja2dyb3VuZDU6XCJjb250ZW50QmFja2dyb3VuZDVcIixsaW5rRGVmYXVsdDpcImxpbmtEZWZhdWx0XCIsbGlua0hvdmVyOlwibGlua0hvdmVyXCJ9fSw2NTM1OmZ1bmN0aW9uKGUpe2UuZXhwb3J0cz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7cmV0dXJuKGU9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0pKHQpfXZhciB0PS9eXFxzKy8sYT0vXFxzKyQvO2Z1bmN0aW9uIG4ocixvKXtpZihvPW98fHt9LChyPXJ8fFwiXCIpaW5zdGFuY2VvZiBuKXJldHVybiByO2lmKCEodGhpcyBpbnN0YW5jZW9mIG4pKXJldHVybiBuZXcgbihyLG8pO3ZhciBpPWZ1bmN0aW9uKG4pe3ZhciByLG8saSxzPXtyOjAsZzowLGI6MH0sYz0xLGw9bnVsbCxkPW51bGwsdT1udWxsLGg9ITEsZz0hMTtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgbiYmKG49ZnVuY3Rpb24oZSl7ZT1lLnJlcGxhY2UodCxcIlwiKS5yZXBsYWNlKGEsXCJcIikudG9Mb3dlckNhc2UoKTt2YXIgbixyPSExO2lmKGtbZV0pZT1rW2VdLHI9ITA7ZWxzZSBpZihcInRyYW5zcGFyZW50XCI9PWUpcmV0dXJue3I6MCxnOjAsYjowLGE6MCxmb3JtYXQ6XCJuYW1lXCJ9O3JldHVybihuPUQucmdiLmV4ZWMoZSkpP3tyOm5bMV0sZzpuWzJdLGI6blszXX06KG49RC5yZ2JhLmV4ZWMoZSkpP3tyOm5bMV0sZzpuWzJdLGI6blszXSxhOm5bNF19OihuPUQuaHNsLmV4ZWMoZSkpP3toOm5bMV0sczpuWzJdLGw6blszXX06KG49RC5oc2xhLmV4ZWMoZSkpP3toOm5bMV0sczpuWzJdLGw6blszXSxhOm5bNF19OihuPUQuaHN2LmV4ZWMoZSkpP3toOm5bMV0sczpuWzJdLHY6blszXX06KG49RC5oc3ZhLmV4ZWMoZSkpP3toOm5bMV0sczpuWzJdLHY6blszXSxhOm5bNF19OihuPUQuaGV4OC5leGVjKGUpKT97cjp4KG5bMV0pLGc6eChuWzJdKSxiOngoblszXSksYTpNKG5bNF0pLGZvcm1hdDpyP1wibmFtZVwiOlwiaGV4OFwifToobj1ELmhleDYuZXhlYyhlKSk/e3I6eChuWzFdKSxnOngoblsyXSksYjp4KG5bM10pLGZvcm1hdDpyP1wibmFtZVwiOlwiaGV4XCJ9OihuPUQuaGV4NC5leGVjKGUpKT97cjp4KG5bMV0rXCJcIituWzFdKSxnOngoblsyXStcIlwiK25bMl0pLGI6eChuWzNdK1wiXCIrblszXSksYTpNKG5bNF0rXCJcIituWzRdKSxmb3JtYXQ6cj9cIm5hbWVcIjpcImhleDhcIn06ISEobj1ELmhleDMuZXhlYyhlKSkmJntyOngoblsxXStcIlwiK25bMV0pLGc6eChuWzJdK1wiXCIrblsyXSksYjp4KG5bM10rXCJcIituWzNdKSxmb3JtYXQ6cj9cIm5hbWVcIjpcImhleFwifX0obikpLFwib2JqZWN0XCI9PWUobikmJihCKG4ucikmJkIobi5nKSYmQihuLmIpPyhyPW4ucixvPW4uZyxpPW4uYixzPXtyOjI1NSpQKHIsMjU1KSxnOjI1NSpQKG8sMjU1KSxiOjI1NSpQKGksMjU1KX0saD0hMCxnPVwiJVwiPT09U3RyaW5nKG4ucikuc3Vic3RyKC0xKT9cInByZ2JcIjpcInJnYlwiKTpCKG4uaCkmJkIobi5zKSYmQihuLnYpPyhsPUYobi5zKSxkPUYobi52KSxzPWZ1bmN0aW9uKGUsdCxhKXtlPTYqUChlLDM2MCksdD1QKHQsMTAwKSxhPVAoYSwxMDApO3ZhciBuPU1hdGguZmxvb3IoZSkscj1lLW4sbz1hKigxLXQpLGk9YSooMS1yKnQpLHM9YSooMS0oMS1yKSp0KSxjPW4lNjtyZXR1cm57cjoyNTUqW2EsaSxvLG8scyxhXVtjXSxnOjI1NSpbcyxhLGEsaSxvLG9dW2NdLGI6MjU1KltvLG8scyxhLGEsaV1bY119fShuLmgsbCxkKSxoPSEwLGc9XCJoc3ZcIik6QihuLmgpJiZCKG4ucykmJkIobi5sKSYmKGw9RihuLnMpLHU9RihuLmwpLHM9ZnVuY3Rpb24oZSx0LGEpe3ZhciBuLHIsbztmdW5jdGlvbiBpKGUsdCxhKXtyZXR1cm4gYTwwJiYoYSs9MSksYT4xJiYoYS09MSksYTwxLzY/ZSs2Kih0LWUpKmE6YTwuNT90OmE8Mi8zP2UrKHQtZSkqKDIvMy1hKSo2OmV9aWYoZT1QKGUsMzYwKSx0PVAodCwxMDApLGE9UChhLDEwMCksMD09PXQpbj1yPW89YTtlbHNle3ZhciBzPWE8LjU/YSooMSt0KTphK3QtYSp0LGM9MiphLXM7bj1pKGMscyxlKzEvMykscj1pKGMscyxlKSxvPWkoYyxzLGUtMS8zKX1yZXR1cm57cjoyNTUqbixnOjI1NSpyLGI6MjU1Km99fShuLmgsbCx1KSxoPSEwLGc9XCJoc2xcIiksbi5oYXNPd25Qcm9wZXJ0eShcImFcIikmJihjPW4uYSkpLGM9dihjKSx7b2s6aCxmb3JtYXQ6bi5mb3JtYXR8fGcscjpNYXRoLm1pbigyNTUsTWF0aC5tYXgocy5yLDApKSxnOk1hdGgubWluKDI1NSxNYXRoLm1heChzLmcsMCkpLGI6TWF0aC5taW4oMjU1LE1hdGgubWF4KHMuYiwwKSksYTpjfX0ocik7dGhpcy5fb3JpZ2luYWxJbnB1dD1yLHRoaXMuX3I9aS5yLHRoaXMuX2c9aS5nLHRoaXMuX2I9aS5iLHRoaXMuX2E9aS5hLHRoaXMuX3JvdW5kQT1NYXRoLnJvdW5kKDEwMCp0aGlzLl9hKS8xMDAsdGhpcy5fZm9ybWF0PW8uZm9ybWF0fHxpLmZvcm1hdCx0aGlzLl9ncmFkaWVudFR5cGU9by5ncmFkaWVudFR5cGUsdGhpcy5fcjwxJiYodGhpcy5fcj1NYXRoLnJvdW5kKHRoaXMuX3IpKSx0aGlzLl9nPDEmJih0aGlzLl9nPU1hdGgucm91bmQodGhpcy5fZykpLHRoaXMuX2I8MSYmKHRoaXMuX2I9TWF0aC5yb3VuZCh0aGlzLl9iKSksdGhpcy5fb2s9aS5va31mdW5jdGlvbiByKGUsdCxhKXtlPVAoZSwyNTUpLHQ9UCh0LDI1NSksYT1QKGEsMjU1KTt2YXIgbixyLG89TWF0aC5tYXgoZSx0LGEpLGk9TWF0aC5taW4oZSx0LGEpLHM9KG8raSkvMjtpZihvPT1pKW49cj0wO2Vsc2V7dmFyIGM9by1pO3N3aXRjaChyPXM+LjU/Yy8oMi1vLWkpOmMvKG8raSksbyl7Y2FzZSBlOm49KHQtYSkvYysodDxhPzY6MCk7YnJlYWs7Y2FzZSB0Om49KGEtZSkvYysyO2JyZWFrO2Nhc2UgYTpuPShlLXQpL2MrNH1uLz02fXJldHVybntoOm4sczpyLGw6c319ZnVuY3Rpb24gbyhlLHQsYSl7ZT1QKGUsMjU1KSx0PVAodCwyNTUpLGE9UChhLDI1NSk7dmFyIG4scixvPU1hdGgubWF4KGUsdCxhKSxpPU1hdGgubWluKGUsdCxhKSxzPW8sYz1vLWk7aWYocj0wPT09bz8wOmMvbyxvPT1pKW49MDtlbHNle3N3aXRjaChvKXtjYXNlIGU6bj0odC1hKS9jKyh0PGE/NjowKTticmVhaztjYXNlIHQ6bj0oYS1lKS9jKzI7YnJlYWs7Y2FzZSBhOm49KGUtdCkvYys0fW4vPTZ9cmV0dXJue2g6bixzOnIsdjpzfX1mdW5jdGlvbiBpKGUsdCxhLG4pe3ZhciByPVtBKE1hdGgucm91bmQoZSkudG9TdHJpbmcoMTYpKSxBKE1hdGgucm91bmQodCkudG9TdHJpbmcoMTYpKSxBKE1hdGgucm91bmQoYSkudG9TdHJpbmcoMTYpKV07cmV0dXJuIG4mJnJbMF0uY2hhckF0KDApPT1yWzBdLmNoYXJBdCgxKSYmclsxXS5jaGFyQXQoMCk9PXJbMV0uY2hhckF0KDEpJiZyWzJdLmNoYXJBdCgwKT09clsyXS5jaGFyQXQoMSk/clswXS5jaGFyQXQoMCkrclsxXS5jaGFyQXQoMCkrclsyXS5jaGFyQXQoMCk6ci5qb2luKFwiXCIpfWZ1bmN0aW9uIHMoZSx0LGEsbil7cmV0dXJuW0EoXyhuKSksQShNYXRoLnJvdW5kKGUpLnRvU3RyaW5nKDE2KSksQShNYXRoLnJvdW5kKHQpLnRvU3RyaW5nKDE2KSksQShNYXRoLnJvdW5kKGEpLnRvU3RyaW5nKDE2KSldLmpvaW4oXCJcIil9ZnVuY3Rpb24gYyhlLHQpe3Q9MD09PXQ/MDp0fHwxMDt2YXIgYT1uKGUpLnRvSHNsKCk7cmV0dXJuIGEucy09dC8xMDAsYS5zPUMoYS5zKSxuKGEpfWZ1bmN0aW9uIGwoZSx0KXt0PTA9PT10PzA6dHx8MTA7dmFyIGE9bihlKS50b0hzbCgpO3JldHVybiBhLnMrPXQvMTAwLGEucz1DKGEucyksbihhKX1mdW5jdGlvbiBkKGUpe3JldHVybiBuKGUpLmRlc2F0dXJhdGUoMTAwKX1mdW5jdGlvbiB1KGUsdCl7dD0wPT09dD8wOnR8fDEwO3ZhciBhPW4oZSkudG9Ic2woKTtyZXR1cm4gYS5sKz10LzEwMCxhLmw9QyhhLmwpLG4oYSl9ZnVuY3Rpb24gaChlLHQpe3Q9MD09PXQ/MDp0fHwxMDt2YXIgYT1uKGUpLnRvUmdiKCk7cmV0dXJuIGEucj1NYXRoLm1heCgwLE1hdGgubWluKDI1NSxhLnItTWF0aC5yb3VuZCgtdC8xMDAqMjU1KSkpLGEuZz1NYXRoLm1heCgwLE1hdGgubWluKDI1NSxhLmctTWF0aC5yb3VuZCgtdC8xMDAqMjU1KSkpLGEuYj1NYXRoLm1heCgwLE1hdGgubWluKDI1NSxhLmItTWF0aC5yb3VuZCgtdC8xMDAqMjU1KSkpLG4oYSl9ZnVuY3Rpb24gZyhlLHQpe3Q9MD09PXQ/MDp0fHwxMDt2YXIgYT1uKGUpLnRvSHNsKCk7cmV0dXJuIGEubC09dC8xMDAsYS5sPUMoYS5sKSxuKGEpfWZ1bmN0aW9uIHAoZSx0KXt2YXIgYT1uKGUpLnRvSHNsKCkscj0oYS5oK3QpJTM2MDtyZXR1cm4gYS5oPXI8MD8zNjArcjpyLG4oYSl9ZnVuY3Rpb24gZihlKXt2YXIgdD1uKGUpLnRvSHNsKCk7cmV0dXJuIHQuaD0odC5oKzE4MCklMzYwLG4odCl9ZnVuY3Rpb24gbShlLHQpe2lmKGlzTmFOKHQpfHx0PD0wKXRocm93IG5ldyBFcnJvcihcIkFyZ3VtZW50IHRvIHBvbHlhZCBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyXCIpO2Zvcih2YXIgYT1uKGUpLnRvSHNsKCkscj1bbihlKV0sbz0zNjAvdCxpPTE7aTx0O2krKylyLnB1c2gobih7aDooYS5oK2kqbyklMzYwLHM6YS5zLGw6YS5sfSkpO3JldHVybiByfWZ1bmN0aW9uIHcoZSl7dmFyIHQ9bihlKS50b0hzbCgpLGE9dC5oO3JldHVybltuKGUpLG4oe2g6KGErNzIpJTM2MCxzOnQucyxsOnQubH0pLG4oe2g6KGErMjE2KSUzNjAsczp0LnMsbDp0Lmx9KV19ZnVuY3Rpb24geShlLHQsYSl7dD10fHw2LGE9YXx8MzA7dmFyIHI9bihlKS50b0hzbCgpLG89MzYwL2EsaT1bbihlKV07Zm9yKHIuaD0oci5oLShvKnQ+PjEpKzcyMCklMzYwOy0tdDspci5oPShyLmgrbyklMzYwLGkucHVzaChuKHIpKTtyZXR1cm4gaX1mdW5jdGlvbiBiKGUsdCl7dD10fHw2O2Zvcih2YXIgYT1uKGUpLnRvSHN2KCkscj1hLmgsbz1hLnMsaT1hLnYscz1bXSxjPTEvdDt0LS07KXMucHVzaChuKHtoOnIsczpvLHY6aX0pKSxpPShpK2MpJTE7cmV0dXJuIHN9bi5wcm90b3R5cGU9e2lzRGFyazpmdW5jdGlvbigpe3JldHVybiB0aGlzLmdldEJyaWdodG5lc3MoKTwxMjh9LGlzTGlnaHQ6ZnVuY3Rpb24oKXtyZXR1cm4hdGhpcy5pc0RhcmsoKX0saXNWYWxpZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9va30sZ2V0T3JpZ2luYWxJbnB1dDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9vcmlnaW5hbElucHV0fSxnZXRGb3JtYXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZm9ybWF0fSxnZXRBbHBoYTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hfSxnZXRCcmlnaHRuZXNzOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy50b1JnYigpO3JldHVybigyOTkqZS5yKzU4NyplLmcrMTE0KmUuYikvMWUzfSxnZXRMdW1pbmFuY2U6ZnVuY3Rpb24oKXt2YXIgZSx0LGEsbj10aGlzLnRvUmdiKCk7cmV0dXJuIGU9bi5yLzI1NSx0PW4uZy8yNTUsYT1uLmIvMjU1LC4yMTI2KihlPD0uMDM5Mjg/ZS8xMi45MjpNYXRoLnBvdygoZSsuMDU1KS8xLjA1NSwyLjQpKSsuNzE1MioodDw9LjAzOTI4P3QvMTIuOTI6TWF0aC5wb3coKHQrLjA1NSkvMS4wNTUsMi40KSkrLjA3MjIqKGE8PS4wMzkyOD9hLzEyLjkyOk1hdGgucG93KChhKy4wNTUpLzEuMDU1LDIuNCkpfSxzZXRBbHBoYTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5fYT12KGUpLHRoaXMuX3JvdW5kQT1NYXRoLnJvdW5kKDEwMCp0aGlzLl9hKS8xMDAsdGhpc30sdG9Ic3Y6ZnVuY3Rpb24oKXt2YXIgZT1vKHRoaXMuX3IsdGhpcy5fZyx0aGlzLl9iKTtyZXR1cm57aDozNjAqZS5oLHM6ZS5zLHY6ZS52LGE6dGhpcy5fYX19LHRvSHN2U3RyaW5nOmZ1bmN0aW9uKCl7dmFyIGU9byh0aGlzLl9yLHRoaXMuX2csdGhpcy5fYiksdD1NYXRoLnJvdW5kKDM2MCplLmgpLGE9TWF0aC5yb3VuZCgxMDAqZS5zKSxuPU1hdGgucm91bmQoMTAwKmUudik7cmV0dXJuIDE9PXRoaXMuX2E/XCJoc3YoXCIrdCtcIiwgXCIrYStcIiUsIFwiK24rXCIlKVwiOlwiaHN2YShcIit0K1wiLCBcIithK1wiJSwgXCIrbitcIiUsIFwiK3RoaXMuX3JvdW5kQStcIilcIn0sdG9Ic2w6ZnVuY3Rpb24oKXt2YXIgZT1yKHRoaXMuX3IsdGhpcy5fZyx0aGlzLl9iKTtyZXR1cm57aDozNjAqZS5oLHM6ZS5zLGw6ZS5sLGE6dGhpcy5fYX19LHRvSHNsU3RyaW5nOmZ1bmN0aW9uKCl7dmFyIGU9cih0aGlzLl9yLHRoaXMuX2csdGhpcy5fYiksdD1NYXRoLnJvdW5kKDM2MCplLmgpLGE9TWF0aC5yb3VuZCgxMDAqZS5zKSxuPU1hdGgucm91bmQoMTAwKmUubCk7cmV0dXJuIDE9PXRoaXMuX2E/XCJoc2woXCIrdCtcIiwgXCIrYStcIiUsIFwiK24rXCIlKVwiOlwiaHNsYShcIit0K1wiLCBcIithK1wiJSwgXCIrbitcIiUsIFwiK3RoaXMuX3JvdW5kQStcIilcIn0sdG9IZXg6ZnVuY3Rpb24oZSl7cmV0dXJuIGkodGhpcy5fcix0aGlzLl9nLHRoaXMuX2IsZSl9LHRvSGV4U3RyaW5nOmZ1bmN0aW9uKGUpe3JldHVyblwiI1wiK3RoaXMudG9IZXgoZSl9LHRvSGV4ODpmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oZSx0LGEsbixyKXt2YXIgbz1bQShNYXRoLnJvdW5kKGUpLnRvU3RyaW5nKDE2KSksQShNYXRoLnJvdW5kKHQpLnRvU3RyaW5nKDE2KSksQShNYXRoLnJvdW5kKGEpLnRvU3RyaW5nKDE2KSksQShfKG4pKV07cmV0dXJuIHImJm9bMF0uY2hhckF0KDApPT1vWzBdLmNoYXJBdCgxKSYmb1sxXS5jaGFyQXQoMCk9PW9bMV0uY2hhckF0KDEpJiZvWzJdLmNoYXJBdCgwKT09b1syXS5jaGFyQXQoMSkmJm9bM10uY2hhckF0KDApPT1vWzNdLmNoYXJBdCgxKT9vWzBdLmNoYXJBdCgwKStvWzFdLmNoYXJBdCgwKStvWzJdLmNoYXJBdCgwKStvWzNdLmNoYXJBdCgwKTpvLmpvaW4oXCJcIil9KHRoaXMuX3IsdGhpcy5fZyx0aGlzLl9iLHRoaXMuX2EsZSl9LHRvSGV4OFN0cmluZzpmdW5jdGlvbihlKXtyZXR1cm5cIiNcIit0aGlzLnRvSGV4OChlKX0sdG9SZ2I6ZnVuY3Rpb24oKXtyZXR1cm57cjpNYXRoLnJvdW5kKHRoaXMuX3IpLGc6TWF0aC5yb3VuZCh0aGlzLl9nKSxiOk1hdGgucm91bmQodGhpcy5fYiksYTp0aGlzLl9hfX0sdG9SZ2JTdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gMT09dGhpcy5fYT9cInJnYihcIitNYXRoLnJvdW5kKHRoaXMuX3IpK1wiLCBcIitNYXRoLnJvdW5kKHRoaXMuX2cpK1wiLCBcIitNYXRoLnJvdW5kKHRoaXMuX2IpK1wiKVwiOlwicmdiYShcIitNYXRoLnJvdW5kKHRoaXMuX3IpK1wiLCBcIitNYXRoLnJvdW5kKHRoaXMuX2cpK1wiLCBcIitNYXRoLnJvdW5kKHRoaXMuX2IpK1wiLCBcIit0aGlzLl9yb3VuZEErXCIpXCJ9LHRvUGVyY2VudGFnZVJnYjpmdW5jdGlvbigpe3JldHVybntyOk1hdGgucm91bmQoMTAwKlAodGhpcy5fciwyNTUpKStcIiVcIixnOk1hdGgucm91bmQoMTAwKlAodGhpcy5fZywyNTUpKStcIiVcIixiOk1hdGgucm91bmQoMTAwKlAodGhpcy5fYiwyNTUpKStcIiVcIixhOnRoaXMuX2F9fSx0b1BlcmNlbnRhZ2VSZ2JTdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gMT09dGhpcy5fYT9cInJnYihcIitNYXRoLnJvdW5kKDEwMCpQKHRoaXMuX3IsMjU1KSkrXCIlLCBcIitNYXRoLnJvdW5kKDEwMCpQKHRoaXMuX2csMjU1KSkrXCIlLCBcIitNYXRoLnJvdW5kKDEwMCpQKHRoaXMuX2IsMjU1KSkrXCIlKVwiOlwicmdiYShcIitNYXRoLnJvdW5kKDEwMCpQKHRoaXMuX3IsMjU1KSkrXCIlLCBcIitNYXRoLnJvdW5kKDEwMCpQKHRoaXMuX2csMjU1KSkrXCIlLCBcIitNYXRoLnJvdW5kKDEwMCpQKHRoaXMuX2IsMjU1KSkrXCIlLCBcIit0aGlzLl9yb3VuZEErXCIpXCJ9LHRvTmFtZTpmdW5jdGlvbigpe3JldHVybiAwPT09dGhpcy5fYT9cInRyYW5zcGFyZW50XCI6ISh0aGlzLl9hPDEpJiYoU1tpKHRoaXMuX3IsdGhpcy5fZyx0aGlzLl9iLCEwKV18fCExKX0sdG9GaWx0ZXI6ZnVuY3Rpb24oZSl7dmFyIHQ9XCIjXCIrcyh0aGlzLl9yLHRoaXMuX2csdGhpcy5fYix0aGlzLl9hKSxhPXQscj10aGlzLl9ncmFkaWVudFR5cGU/XCJHcmFkaWVudFR5cGUgPSAxLCBcIjpcIlwiO2lmKGUpe3ZhciBvPW4oZSk7YT1cIiNcIitzKG8uX3Isby5fZyxvLl9iLG8uX2EpfXJldHVyblwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KFwiK3IrXCJzdGFydENvbG9yc3RyPVwiK3QrXCIsZW5kQ29sb3JzdHI9XCIrYStcIilcIn0sdG9TdHJpbmc6ZnVuY3Rpb24oZSl7dmFyIHQ9ISFlO2U9ZXx8dGhpcy5fZm9ybWF0O3ZhciBhPSExLG49dGhpcy5fYTwxJiZ0aGlzLl9hPj0wO3JldHVybiB0fHwhbnx8XCJoZXhcIiE9PWUmJlwiaGV4NlwiIT09ZSYmXCJoZXgzXCIhPT1lJiZcImhleDRcIiE9PWUmJlwiaGV4OFwiIT09ZSYmXCJuYW1lXCIhPT1lPyhcInJnYlwiPT09ZSYmKGE9dGhpcy50b1JnYlN0cmluZygpKSxcInByZ2JcIj09PWUmJihhPXRoaXMudG9QZXJjZW50YWdlUmdiU3RyaW5nKCkpLFwiaGV4XCIhPT1lJiZcImhleDZcIiE9PWV8fChhPXRoaXMudG9IZXhTdHJpbmcoKSksXCJoZXgzXCI9PT1lJiYoYT10aGlzLnRvSGV4U3RyaW5nKCEwKSksXCJoZXg0XCI9PT1lJiYoYT10aGlzLnRvSGV4OFN0cmluZyghMCkpLFwiaGV4OFwiPT09ZSYmKGE9dGhpcy50b0hleDhTdHJpbmcoKSksXCJuYW1lXCI9PT1lJiYoYT10aGlzLnRvTmFtZSgpKSxcImhzbFwiPT09ZSYmKGE9dGhpcy50b0hzbFN0cmluZygpKSxcImhzdlwiPT09ZSYmKGE9dGhpcy50b0hzdlN0cmluZygpKSxhfHx0aGlzLnRvSGV4U3RyaW5nKCkpOlwibmFtZVwiPT09ZSYmMD09PXRoaXMuX2E/dGhpcy50b05hbWUoKTp0aGlzLnRvUmdiU3RyaW5nKCl9LGNsb25lOmZ1bmN0aW9uKCl7cmV0dXJuIG4odGhpcy50b1N0cmluZygpKX0sX2FwcGx5TW9kaWZpY2F0aW9uOmZ1bmN0aW9uKGUsdCl7dmFyIGE9ZS5hcHBseShudWxsLFt0aGlzXS5jb25jYXQoW10uc2xpY2UuY2FsbCh0KSkpO3JldHVybiB0aGlzLl9yPWEuX3IsdGhpcy5fZz1hLl9nLHRoaXMuX2I9YS5fYix0aGlzLnNldEFscGhhKGEuX2EpLHRoaXN9LGxpZ2h0ZW46ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24odSxhcmd1bWVudHMpfSxicmlnaHRlbjpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbihoLGFyZ3VtZW50cyl9LGRhcmtlbjpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbihnLGFyZ3VtZW50cyl9LGRlc2F0dXJhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oYyxhcmd1bWVudHMpfSxzYXR1cmF0ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbihsLGFyZ3VtZW50cyl9LGdyZXlzY2FsZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbihkLGFyZ3VtZW50cyl9LHNwaW46ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24ocCxhcmd1bWVudHMpfSxfYXBwbHlDb21iaW5hdGlvbjpmdW5jdGlvbihlLHQpe3JldHVybiBlLmFwcGx5KG51bGwsW3RoaXNdLmNvbmNhdChbXS5zbGljZS5jYWxsKHQpKSl9LGFuYWxvZ291czpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKHksYXJndW1lbnRzKX0sY29tcGxlbWVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKGYsYXJndW1lbnRzKX0sbW9ub2Nocm9tYXRpYzpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKGIsYXJndW1lbnRzKX0sc3BsaXRjb21wbGVtZW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FwcGx5Q29tYmluYXRpb24odyxhcmd1bWVudHMpfSx0cmlhZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKG0sWzNdKX0sdGV0cmFkOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FwcGx5Q29tYmluYXRpb24obSxbNF0pfX0sbi5mcm9tUmF0aW89ZnVuY3Rpb24odCxhKXtpZihcIm9iamVjdFwiPT1lKHQpKXt2YXIgcj17fTtmb3IodmFyIG8gaW4gdCl0Lmhhc093blByb3BlcnR5KG8pJiYocltvXT1cImFcIj09PW8/dFtvXTpGKHRbb10pKTt0PXJ9cmV0dXJuIG4odCxhKX0sbi5lcXVhbHM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4hKCFlfHwhdCkmJm4oZSkudG9SZ2JTdHJpbmcoKT09bih0KS50b1JnYlN0cmluZygpfSxuLnJhbmRvbT1mdW5jdGlvbigpe3JldHVybiBuLmZyb21SYXRpbyh7cjpNYXRoLnJhbmRvbSgpLGc6TWF0aC5yYW5kb20oKSxiOk1hdGgucmFuZG9tKCl9KX0sbi5taXg9ZnVuY3Rpb24oZSx0LGEpe2E9MD09PWE/MDphfHw1MDt2YXIgcj1uKGUpLnRvUmdiKCksbz1uKHQpLnRvUmdiKCksaT1hLzEwMDtyZXR1cm4gbih7cjooby5yLXIucikqaStyLnIsZzooby5nLXIuZykqaStyLmcsYjooby5iLXIuYikqaStyLmIsYTooby5hLXIuYSkqaStyLmF9KX0sbi5yZWFkYWJpbGl0eT1mdW5jdGlvbihlLHQpe3ZhciBhPW4oZSkscj1uKHQpO3JldHVybihNYXRoLm1heChhLmdldEx1bWluYW5jZSgpLHIuZ2V0THVtaW5hbmNlKCkpKy4wNSkvKE1hdGgubWluKGEuZ2V0THVtaW5hbmNlKCksci5nZXRMdW1pbmFuY2UoKSkrLjA1KX0sbi5pc1JlYWRhYmxlPWZ1bmN0aW9uKGUsdCxhKXt2YXIgcixvLGkscyxjLGw9bi5yZWFkYWJpbGl0eShlLHQpO3N3aXRjaChvPSExLChpPWEsXCJBQVwiIT09KHM9KChpPWl8fHtsZXZlbDpcIkFBXCIsc2l6ZTpcInNtYWxsXCJ9KS5sZXZlbHx8XCJBQVwiKS50b1VwcGVyQ2FzZSgpKSYmXCJBQUFcIiE9PXMmJihzPVwiQUFcIiksXCJzbWFsbFwiIT09KGM9KGkuc2l6ZXx8XCJzbWFsbFwiKS50b0xvd2VyQ2FzZSgpKSYmXCJsYXJnZVwiIT09YyYmKGM9XCJzbWFsbFwiKSxyPXtsZXZlbDpzLHNpemU6Y30pLmxldmVsK3Iuc2l6ZSl7Y2FzZVwiQUFzbWFsbFwiOmNhc2VcIkFBQWxhcmdlXCI6bz1sPj00LjU7YnJlYWs7Y2FzZVwiQUFsYXJnZVwiOm89bD49MzticmVhaztjYXNlXCJBQUFzbWFsbFwiOm89bD49N31yZXR1cm4gb30sbi5tb3N0UmVhZGFibGU9ZnVuY3Rpb24oZSx0LGEpe3ZhciByLG8saSxzLGM9bnVsbCxsPTA7bz0oYT1hfHx7fSkuaW5jbHVkZUZhbGxiYWNrQ29sb3JzLGk9YS5sZXZlbCxzPWEuc2l6ZTtmb3IodmFyIGQ9MDtkPHQubGVuZ3RoO2QrKykocj1uLnJlYWRhYmlsaXR5KGUsdFtkXSkpPmwmJihsPXIsYz1uKHRbZF0pKTtyZXR1cm4gbi5pc1JlYWRhYmxlKGUsYyx7bGV2ZWw6aSxzaXplOnN9KXx8IW8/YzooYS5pbmNsdWRlRmFsbGJhY2tDb2xvcnM9ITEsbi5tb3N0UmVhZGFibGUoZSxbXCIjZmZmXCIsXCIjMDAwXCJdLGEpKX07dmFyIGs9bi5uYW1lcz17YWxpY2VibHVlOlwiZjBmOGZmXCIsYW50aXF1ZXdoaXRlOlwiZmFlYmQ3XCIsYXF1YTpcIjBmZlwiLGFxdWFtYXJpbmU6XCI3ZmZmZDRcIixhenVyZTpcImYwZmZmZlwiLGJlaWdlOlwiZjVmNWRjXCIsYmlzcXVlOlwiZmZlNGM0XCIsYmxhY2s6XCIwMDBcIixibGFuY2hlZGFsbW9uZDpcImZmZWJjZFwiLGJsdWU6XCIwMGZcIixibHVldmlvbGV0OlwiOGEyYmUyXCIsYnJvd246XCJhNTJhMmFcIixidXJseXdvb2Q6XCJkZWI4ODdcIixidXJudHNpZW5uYTpcImVhN2U1ZFwiLGNhZGV0Ymx1ZTpcIjVmOWVhMFwiLGNoYXJ0cmV1c2U6XCI3ZmZmMDBcIixjaG9jb2xhdGU6XCJkMjY5MWVcIixjb3JhbDpcImZmN2Y1MFwiLGNvcm5mbG93ZXJibHVlOlwiNjQ5NWVkXCIsY29ybnNpbGs6XCJmZmY4ZGNcIixjcmltc29uOlwiZGMxNDNjXCIsY3lhbjpcIjBmZlwiLGRhcmtibHVlOlwiMDAwMDhiXCIsZGFya2N5YW46XCIwMDhiOGJcIixkYXJrZ29sZGVucm9kOlwiYjg4NjBiXCIsZGFya2dyYXk6XCJhOWE5YTlcIixkYXJrZ3JlZW46XCIwMDY0MDBcIixkYXJrZ3JleTpcImE5YTlhOVwiLGRhcmtraGFraTpcImJkYjc2YlwiLGRhcmttYWdlbnRhOlwiOGIwMDhiXCIsZGFya29saXZlZ3JlZW46XCI1NTZiMmZcIixkYXJrb3JhbmdlOlwiZmY4YzAwXCIsZGFya29yY2hpZDpcIjk5MzJjY1wiLGRhcmtyZWQ6XCI4YjAwMDBcIixkYXJrc2FsbW9uOlwiZTk5NjdhXCIsZGFya3NlYWdyZWVuOlwiOGZiYzhmXCIsZGFya3NsYXRlYmx1ZTpcIjQ4M2Q4YlwiLGRhcmtzbGF0ZWdyYXk6XCIyZjRmNGZcIixkYXJrc2xhdGVncmV5OlwiMmY0ZjRmXCIsZGFya3R1cnF1b2lzZTpcIjAwY2VkMVwiLGRhcmt2aW9sZXQ6XCI5NDAwZDNcIixkZWVwcGluazpcImZmMTQ5M1wiLGRlZXBza3libHVlOlwiMDBiZmZmXCIsZGltZ3JheTpcIjY5Njk2OVwiLGRpbWdyZXk6XCI2OTY5NjlcIixkb2RnZXJibHVlOlwiMWU5MGZmXCIsZmlyZWJyaWNrOlwiYjIyMjIyXCIsZmxvcmFsd2hpdGU6XCJmZmZhZjBcIixmb3Jlc3RncmVlbjpcIjIyOGIyMlwiLGZ1Y2hzaWE6XCJmMGZcIixnYWluc2Jvcm86XCJkY2RjZGNcIixnaG9zdHdoaXRlOlwiZjhmOGZmXCIsZ29sZDpcImZmZDcwMFwiLGdvbGRlbnJvZDpcImRhYTUyMFwiLGdyYXk6XCI4MDgwODBcIixncmVlbjpcIjAwODAwMFwiLGdyZWVueWVsbG93OlwiYWRmZjJmXCIsZ3JleTpcIjgwODA4MFwiLGhvbmV5ZGV3OlwiZjBmZmYwXCIsaG90cGluazpcImZmNjliNFwiLGluZGlhbnJlZDpcImNkNWM1Y1wiLGluZGlnbzpcIjRiMDA4MlwiLGl2b3J5OlwiZmZmZmYwXCIsa2hha2k6XCJmMGU2OGNcIixsYXZlbmRlcjpcImU2ZTZmYVwiLGxhdmVuZGVyYmx1c2g6XCJmZmYwZjVcIixsYXduZ3JlZW46XCI3Y2ZjMDBcIixsZW1vbmNoaWZmb246XCJmZmZhY2RcIixsaWdodGJsdWU6XCJhZGQ4ZTZcIixsaWdodGNvcmFsOlwiZjA4MDgwXCIsbGlnaHRjeWFuOlwiZTBmZmZmXCIsbGlnaHRnb2xkZW5yb2R5ZWxsb3c6XCJmYWZhZDJcIixsaWdodGdyYXk6XCJkM2QzZDNcIixsaWdodGdyZWVuOlwiOTBlZTkwXCIsbGlnaHRncmV5OlwiZDNkM2QzXCIsbGlnaHRwaW5rOlwiZmZiNmMxXCIsbGlnaHRzYWxtb246XCJmZmEwN2FcIixsaWdodHNlYWdyZWVuOlwiMjBiMmFhXCIsbGlnaHRza3libHVlOlwiODdjZWZhXCIsbGlnaHRzbGF0ZWdyYXk6XCI3ODlcIixsaWdodHNsYXRlZ3JleTpcIjc4OVwiLGxpZ2h0c3RlZWxibHVlOlwiYjBjNGRlXCIsbGlnaHR5ZWxsb3c6XCJmZmZmZTBcIixsaW1lOlwiMGYwXCIsbGltZWdyZWVuOlwiMzJjZDMyXCIsbGluZW46XCJmYWYwZTZcIixtYWdlbnRhOlwiZjBmXCIsbWFyb29uOlwiODAwMDAwXCIsbWVkaXVtYXF1YW1hcmluZTpcIjY2Y2RhYVwiLG1lZGl1bWJsdWU6XCIwMDAwY2RcIixtZWRpdW1vcmNoaWQ6XCJiYTU1ZDNcIixtZWRpdW1wdXJwbGU6XCI5MzcwZGJcIixtZWRpdW1zZWFncmVlbjpcIjNjYjM3MVwiLG1lZGl1bXNsYXRlYmx1ZTpcIjdiNjhlZVwiLG1lZGl1bXNwcmluZ2dyZWVuOlwiMDBmYTlhXCIsbWVkaXVtdHVycXVvaXNlOlwiNDhkMWNjXCIsbWVkaXVtdmlvbGV0cmVkOlwiYzcxNTg1XCIsbWlkbmlnaHRibHVlOlwiMTkxOTcwXCIsbWludGNyZWFtOlwiZjVmZmZhXCIsbWlzdHlyb3NlOlwiZmZlNGUxXCIsbW9jY2FzaW46XCJmZmU0YjVcIixuYXZham93aGl0ZTpcImZmZGVhZFwiLG5hdnk6XCIwMDAwODBcIixvbGRsYWNlOlwiZmRmNWU2XCIsb2xpdmU6XCI4MDgwMDBcIixvbGl2ZWRyYWI6XCI2YjhlMjNcIixvcmFuZ2U6XCJmZmE1MDBcIixvcmFuZ2VyZWQ6XCJmZjQ1MDBcIixvcmNoaWQ6XCJkYTcwZDZcIixwYWxlZ29sZGVucm9kOlwiZWVlOGFhXCIscGFsZWdyZWVuOlwiOThmYjk4XCIscGFsZXR1cnF1b2lzZTpcImFmZWVlZVwiLHBhbGV2aW9sZXRyZWQ6XCJkYjcwOTNcIixwYXBheWF3aGlwOlwiZmZlZmQ1XCIscGVhY2hwdWZmOlwiZmZkYWI5XCIscGVydTpcImNkODUzZlwiLHBpbms6XCJmZmMwY2JcIixwbHVtOlwiZGRhMGRkXCIscG93ZGVyYmx1ZTpcImIwZTBlNlwiLHB1cnBsZTpcIjgwMDA4MFwiLHJlYmVjY2FwdXJwbGU6XCI2NjMzOTlcIixyZWQ6XCJmMDBcIixyb3N5YnJvd246XCJiYzhmOGZcIixyb3lhbGJsdWU6XCI0MTY5ZTFcIixzYWRkbGVicm93bjpcIjhiNDUxM1wiLHNhbG1vbjpcImZhODA3MlwiLHNhbmR5YnJvd246XCJmNGE0NjBcIixzZWFncmVlbjpcIjJlOGI1N1wiLHNlYXNoZWxsOlwiZmZmNWVlXCIsc2llbm5hOlwiYTA1MjJkXCIsc2lsdmVyOlwiYzBjMGMwXCIsc2t5Ymx1ZTpcIjg3Y2VlYlwiLHNsYXRlYmx1ZTpcIjZhNWFjZFwiLHNsYXRlZ3JheTpcIjcwODA5MFwiLHNsYXRlZ3JleTpcIjcwODA5MFwiLHNub3c6XCJmZmZhZmFcIixzcHJpbmdncmVlbjpcIjAwZmY3ZlwiLHN0ZWVsYmx1ZTpcIjQ2ODJiNFwiLHRhbjpcImQyYjQ4Y1wiLHRlYWw6XCIwMDgwODBcIix0aGlzdGxlOlwiZDhiZmQ4XCIsdG9tYXRvOlwiZmY2MzQ3XCIsdHVycXVvaXNlOlwiNDBlMGQwXCIsdmlvbGV0OlwiZWU4MmVlXCIsd2hlYXQ6XCJmNWRlYjNcIix3aGl0ZTpcImZmZlwiLHdoaXRlc21va2U6XCJmNWY1ZjVcIix5ZWxsb3c6XCJmZjBcIix5ZWxsb3dncmVlbjpcIjlhY2QzMlwifSxTPW4uaGV4TmFtZXM9ZnVuY3Rpb24oZSl7dmFyIHQ9e307Zm9yKHZhciBhIGluIGUpZS5oYXNPd25Qcm9wZXJ0eShhKSYmKHRbZVthXV09YSk7cmV0dXJuIHR9KGspO2Z1bmN0aW9uIHYoZSl7cmV0dXJuIGU9cGFyc2VGbG9hdChlKSwoaXNOYU4oZSl8fGU8MHx8ZT4xKSYmKGU9MSksZX1mdW5jdGlvbiBQKGUsdCl7KGZ1bmN0aW9uKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlJiYtMSE9ZS5pbmRleE9mKFwiLlwiKSYmMT09PXBhcnNlRmxvYXQoZSl9KShlKSYmKGU9XCIxMDAlXCIpO3ZhciBhPWZ1bmN0aW9uKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlJiYtMSE9ZS5pbmRleE9mKFwiJVwiKX0oZSk7cmV0dXJuIGU9TWF0aC5taW4odCxNYXRoLm1heCgwLHBhcnNlRmxvYXQoZSkpKSxhJiYoZT1wYXJzZUludChlKnQsMTApLzEwMCksTWF0aC5hYnMoZS10KTwxZS02PzE6ZSV0L3BhcnNlRmxvYXQodCl9ZnVuY3Rpb24gQyhlKXtyZXR1cm4gTWF0aC5taW4oMSxNYXRoLm1heCgwLGUpKX1mdW5jdGlvbiB4KGUpe3JldHVybiBwYXJzZUludChlLDE2KX1mdW5jdGlvbiBBKGUpe3JldHVybiAxPT1lLmxlbmd0aD9cIjBcIitlOlwiXCIrZX1mdW5jdGlvbiBGKGUpe3JldHVybiBlPD0xJiYoZT0xMDAqZStcIiVcIiksZX1mdW5jdGlvbiBfKGUpe3JldHVybiBNYXRoLnJvdW5kKDI1NSpwYXJzZUZsb2F0KGUpKS50b1N0cmluZygxNil9ZnVuY3Rpb24gTShlKXtyZXR1cm4geChlKS8yNTV9dmFyIEksVyxPLEQ9KFc9XCJbXFxcXHN8XFxcXChdKyhcIisoST1cIig/OlstXFxcXCtdP1xcXFxkKlxcXFwuXFxcXGQrJT8pfCg/OlstXFxcXCtdP1xcXFxkKyU/KVwiKStcIilbLHxcXFxcc10rKFwiK0krXCIpWyx8XFxcXHNdKyhcIitJK1wiKVxcXFxzKlxcXFwpP1wiLE89XCJbXFxcXHN8XFxcXChdKyhcIitJK1wiKVssfFxcXFxzXSsoXCIrSStcIilbLHxcXFxcc10rKFwiK0krXCIpWyx8XFxcXHNdKyhcIitJK1wiKVxcXFxzKlxcXFwpP1wiLHtDU1NfVU5JVDpuZXcgUmVnRXhwKEkpLHJnYjpuZXcgUmVnRXhwKFwicmdiXCIrVykscmdiYTpuZXcgUmVnRXhwKFwicmdiYVwiK08pLGhzbDpuZXcgUmVnRXhwKFwiaHNsXCIrVyksaHNsYTpuZXcgUmVnRXhwKFwiaHNsYVwiK08pLGhzdjpuZXcgUmVnRXhwKFwiaHN2XCIrVyksaHN2YTpuZXcgUmVnRXhwKFwiaHN2YVwiK08pLGhleDM6L14jPyhbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KSQvLGhleDY6L14jPyhbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KSQvLGhleDQ6L14jPyhbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkkLyxoZXg4Oi9eIz8oWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pJC99KTtmdW5jdGlvbiBCKGUpe3JldHVybiEhRC5DU1NfVU5JVC5leGVjKGUpfXJldHVybiBufSgpfX0sbj17fTtmdW5jdGlvbiByKGUpe3ZhciB0PW5bZV07aWYodm9pZCAwIT09dClyZXR1cm4gdC5leHBvcnRzO3ZhciBvPW5bZV09e2V4cG9ydHM6e319O3JldHVybiBhW2VdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLHIpLG8uZXhwb3J0c312YXIgbz17fTsoKCk9Pnt2YXIgZT1vO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUuY3JlYXRlVGhlbWU9ZS5QYWxldHRlPWUuQ29sb3I9dm9pZCAwO3ZhciB0PXIoMjMxNyk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJDb2xvclwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0LkNvbG9yfX0pO3ZhciBhPXIoNTkzOSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJQYWxldHRlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGEuUGFsZXR0ZX19KTt2YXIgbj1yKDY4OTMpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiY3JlYXRlVGhlbWVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gbi5jcmVhdGVUaGVtZX19KX0pKCk7dmFyIGk9dDtmb3IodmFyIHMgaW4gbylpW3NdPW9bc107by5fX2VzTW9kdWxlJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoaSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sODc3OigpPT57fSw2NzooKT0+e30sMzE3OihlLHQsYSk9PntcInVzZSBzdHJpY3RcIjt2YXIgbj1hKDE4OSkscj1hKDE0MSk7Y29uc3Qgbz1hKDY3NSkucVQuU3lzdGVtLGk9ZT0+T2JqZWN0LmVudHJpZXMoZSkucmVkdWNlKCgoZSxbdCxhXSk9PmAke2V9LS13b3Jrc3BhY2UtcGFsZXR0ZS0ke3R9OiAke2F9O2ApLFwiXCIpLHM9KGUsdCk9Pih7c2VsZWN0ZWRUYWI6XCJkYXJrXCI9PT10P2UuYmFja2dyb3VuZDM6ZS5iYWNrZ3JvdW5kMX0pO25ldyBjbGFzc3tjb25zdHJ1Y3RvcihlKXt0aGlzLnByb3ZpZGVyU3RvcmFnZT1lLHRoaXMuZ2V0VmFyc0J5U2NoZW1lPWU9PlwiZGFya1wiPT09ZT90aGlzLmRhcmtQYWxldHRlVmFyczp0aGlzLmxpZ2h0UGFsZXR0ZVZhcnMsdGhpcy5zZXRXb3Jrc3BhY2VTdG9yYWdlUHJveHk9ZT0+e3RoaXMud29ya3NwYWNlU3RvcmFnZT1lfSx0aGlzLnRyeVN5bmNocm9uaXplV29ya3NwYWNlU3RvcmFnZT1hc3luYygpPT57aWYodGhpcy53b3Jrc3BhY2VTdG9yYWdlKXtjb25zdCBlPXRoaXMuZ2V0U2NoZW1lKCk7aWYoYXdhaXQgdGhpcy53b3Jrc3BhY2VTdG9yYWdlLnNldEl0ZW0oci5BLlNlbGVjdGVkQ29sb3JTY2hlbWUsZSksdGhpcy5kYXJrUGFsZXR0ZVZhcnMmJnRoaXMubGlnaHRQYWxldHRlVmFycylpZihcImRhcmtcIj09PWV8fFwibGlnaHRcIj09PWUpYXdhaXQgdGhpcy53b3Jrc3BhY2VTdG9yYWdlLnNldEl0ZW0oci5BLlRoZW1lUGFsZXR0ZVNoZWV0LGA6cm9vdHske3RoaXMuZ2V0VmFyc0J5U2NoZW1lKGUpfX1gKTtlbHNle2NvbnN0IGU9YEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspezpyb290IHske3RoaXMuZ2V0VmFyc0J5U2NoZW1lKFwiZGFya1wiKX19fWAsdD1gQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpezpyb290eyR7dGhpcy5nZXRWYXJzQnlTY2hlbWUoXCJsaWdodFwiKX19fWA7YXdhaXQgdGhpcy53b3Jrc3BhY2VTdG9yYWdlLnNldEl0ZW0oci5BLlRoZW1lUGFsZXR0ZVNoZWV0LGAke3R9JHtlfWApfX19LHRoaXMuc2V0UGFsZXR0ZXM9YXN5bmMoe2xpZ2h0OmUsZGFyazp0fSk9Pnt0aGlzLmxpZ2h0UGFsZXR0ZVZhcnM9aSh7Li4uZSwuLi5zKGUsXCJsaWdodFwiKX0pLHRoaXMuZGFya1BhbGV0dGVWYXJzPWkoey4uLnQsLi4ucyh0LFwiZGFya1wiKX0pfX1zZXRTY2hlbWUoZSl7dGhpcy5wcm92aWRlclN0b3JhZ2Uuc2V0SXRlbShyLkEuU2VsZWN0ZWRDb2xvclNjaGVtZSxlKX1nZXRTY2hlbWUoKXtyZXR1cm4gbnVsbD09PXRoaXMucHJvdmlkZXJTdG9yYWdlLmdldEl0ZW0oci5BLlNlbGVjdGVkQ29sb3JTY2hlbWUpJiZ0aGlzLnByb3ZpZGVyU3RvcmFnZS5zZXRJdGVtKHIuQS5TZWxlY3RlZENvbG9yU2NoZW1lLG8pLHRoaXMucHJvdmlkZXJTdG9yYWdlLmdldEl0ZW0oci5BLlNlbGVjdGVkQ29sb3JTY2hlbWUpfX0obil9LDM2NzooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7YS5kKHQse046KCk9PncsQTooKT0+bX0pO3ZhciBuPWEoNzIzKSxyPWEoNzkpLG89YSg2NzUpLGk9YSg3MCkscz1hKDc4NiksYz1hKDMzMyk7dmFyIGw9YSgzMjYpO2NvbnN0IGQ9KDAsYSgxMDIpLkEpKGAke1widW5kZWZpbmVkXCIhPXR5cGVvZiBmaW4mJmZpbj8ubWUuaWRlbnRpdHkudXVpZH0tZW50ZXJwcmlzZS1ib29rbWFya3NgKTt2YXIgdT1hKDEzKTtjb25zdCBoPWU9Pih7aWRlbnRpdHk6ZSxvcGVuZmluV2luZG93OmZpbi5XaW5kb3cud3JhcFN5bmMoZSksX2Jvb2ttYXJrczp7X2NyZWF0ZUJvb2ttYXJrTm9kZTphc3luYyBlPT4oYXN5bmMgZT0+KGF3YWl0IGQoKSkuZGlzcGF0Y2gobC5IYy5DcmVhdGVCb29rbWFya05vZGUsZSkpKGUpLF9nZXRCb29rbWFya05vZGU6YXN5bmMgZT0+KGFzeW5jIGU9Pihhd2FpdCBkKCkpLmRpc3BhdGNoKGwuSGMuR2V0Qm9va21hcmtOb2RlLGUpKShlKSxfc2VhcmNoQm9va21hcmtOb2Rlczphc3luYyBlPT4oYXN5bmMgZT0+KGF3YWl0IGQoKSkuZGlzcGF0Y2gobC5IYy5TZWFyY2hCb29rbWFya05vZGVzLGUpKShlKSxfdXBkYXRlQm9va21hcmtOb2RlOmFzeW5jIGU9Pihhc3luYyBlPT4oYXdhaXQgZCgpKS5kaXNwYXRjaChsLkhjLlVwZGF0ZUJvb2ttYXJrTm9kZSxlKSkoZSksX2RlbGV0ZUJvb2ttYXJrTm9kZTphc3luYyBlPT4oYXN5bmMgZT0+KGF3YWl0IGQoKSkuZGlzcGF0Y2gobC5IYy5EZWxldGVCb29rbWFya05vZGUsZSkpKGUpfSxnZXRQYWdlczphc3luYygpPT4oYXdhaXQoMCxyLmJXKShlKSkuZGlzcGF0Y2goci5PRi5HZXRQYWdlc0ZvcldpbmRvdyxlKSxnZXRQYWdlOmFzeW5jIHQ9Pihhd2FpdCgwLHIuYlcpKGUpKS5kaXNwYXRjaChyLk9GLkdldFBhZ2VGb3JXaW5kb3cse2lkZW50aXR5OmUscGFnZUlkOnR9KSxhZGRQYWdlOmFzeW5jIHQ9PigwLHUuTnQpKCkuQnJvd3Nlci53cmFwU3luYyhlKS5fYWRkUGFnZSh0KSxfYWRkUGFnZTphc3luYyh0LGEpPT57Y29uc3Qgbj1hd2FpdCgwLHIuYlcpKGUpLG89e2lkZW50aXR5OmUscGFnZTp0LGluc2VydGlvbkluZGV4OmE/LmluZGV4fTtyZXR1cm4gbi5kaXNwYXRjaChyLk9GLkFkZFBhZ2Usbyl9LHJlbW92ZVBhZ2U6YXN5bmMgdD0+KGF3YWl0KDAsci5iVykoZSkpLmRpc3BhdGNoKHIuT0YuRGV0YWNoUGFnZXNGcm9tV2luZG93LHtpZGVudGl0eTplLHBhZ2VJZHM6W3RdfSkscmVwYXJlbnRQYWdlOmFzeW5jIHQ9PigwLHUuTnQpKCkuQnJvd3Nlci53cmFwU3luYyhlKS5fcmVwYXJlbnRQYWdlKHQpLF9yZXBhcmVudFBhZ2U6YXN5bmMgdD0+e2NvbnN0e3BhZ2VJZDphfT10LG49YXdhaXQoMCxyLmJXKShlKSxvPShhd2FpdCBuLmRpc3BhdGNoKHIuT0YuR2V0QWxsQXR0YWNoZWRQYWdlcyx2b2lkIDApKS5maW5kKCgoe3BhZ2VJZDplfSk9PmU9PT1hKSk7aWYoIW8pdGhyb3cgbmV3IEVycm9yKGBSZXBhcmVudCBQYWdlIEVycm9yOiBUYXJnZXQgcGFnZSB3aXRoIHBhZ2VJZCAke2F9IG5vdCBmb3VuZGApO28ubXVsdGlJbnN0YW5jZVZpZXdCZWhhdmlvcj1cInJlcGFyZW50XCI7Y29uc3QgaT17aWRlbnRpdHk6ZSxwYWdlczpbb10saW5zZXJ0aW9uSW5kZXg6dC5pbmRleH07cmV0dXJuIG4uZGlzcGF0Y2goci5PRi5BdHRhY2hQYWdlc1RvV2luZG93LGkpfSxzZXRBY3RpdmVQYWdlOmFzeW5jIHQ9Pihhd2FpdCgwLHIuYlcpKGUpKS5kaXNwYXRjaChyLk9GLlNldEFjdGl2ZVBhZ2Use2lkZW50aXR5OmUscGFnZUlkOnR9KSx1cGRhdGVQYWdlOmFzeW5jIHQ9Pntjb25zdCBhPWF3YWl0KDAsci5iVykoZSk7cmV0dXJuIHQuaWRlbnRpdHk9ZSxhLmRpc3BhdGNoKHIuT0YuVXBkYXRlUGFnZUZvcldpbmRvdyx0KX0scmVvcmRlclBhZ2VzOmFzeW5jIHQ9Pntjb25zdCBhPWF3YWl0KDAsci5iVykoZSk7cmV0dXJuIHQuaWRlbnRpdHk9ZSxhLmRpc3BhdGNoKHIuT0YuUmVvcmRlclBhZ2VzRm9yV2luZG93LHQpfSxfb3Blbkdsb2JhbENvbnRleHRNZW51OmFzeW5jIHQ9Pntjb25zdCBhPWF3YWl0KDAsci5iVykoZSk7cmV0dXJuIHQuaWRlbnRpdHk9ZSxhLmRpc3BhdGNoKHIuT0YuT3Blbkdsb2JhbENvbnRleHRNZW51SW50ZXJuYWwsdCl9LHJlcGxhY2VUb29sYmFyT3B0aW9uczphc3luYyB0PT57YXdhaXQoMCxyLmJXKShlKTtjb25zdCBhPWZpbi5XaW5kb3cud3JhcFN5bmMoZSk7YXdhaXQgYS51cGRhdGVPcHRpb25zKHt3b3Jrc3BhY2VQbGF0Zm9ybTp7dG9vbGJhck9wdGlvbnM6dH19KX0scmVwbGFjZVdpbmRvd1N0YXRlQnV0dG9uT3B0aW9uczphc3luYyB0PT57YXdhaXQoMCxyLmJXKShlKTtjb25zdCBhPWZpbi5XaW5kb3cud3JhcFN5bmMoZSk7YXdhaXQgYS51cGRhdGVPcHRpb25zKHt3b3Jrc3BhY2VQbGF0Zm9ybTp7d2luZG93U3RhdGVCdXR0b25PcHRpb25zOnR9fSl9LHVwZGF0ZUJyb3dzZXJXaW5kb3dUaXRsZTphc3luYyB0PT57Y29uc3QgYT1maW4uV2luZG93LndyYXBTeW5jKGUpO1wic3RyaW5nXCIhPXR5cGVvZiB0P2F3YWl0IGEudXBkYXRlT3B0aW9ucyh7d29ya3NwYWNlUGxhdGZvcm06e3RpdGxlOnR9fSk6Y29uc29sZS53YXJuKFwiVHlwZSBzdHJpbmcgZm9yIHdpbmRvdyB0aXRsZSBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIFdpbmRvd1RpdGxlIHR5cGUgaW5zdGVhZFwiLHQpfSxfb3BlblZpZXdUYWJDb250ZXh0TWVudTphc3luYyB0PT57Y29uc3QgYT1hd2FpdCgwLHIuYlcpKGUpO3JldHVybiB0LmlkZW50aXR5PWUsYS5kaXNwYXRjaChyLk9GLk9wZW5WaWV3VGFiQ29udGV4dE1lbnVJbnRlcm5hbCx0KX0sX29wZW5QYWdlVGFiQ29udGV4dE1lbnU6YXN5bmMgdD0+e2NvbnN0IGE9YXdhaXQoMCxyLmJXKShlKTtyZXR1cm4gdC5pZGVudGl0eT1lLGEuZGlzcGF0Y2goci5PRi5PcGVuUGFnZVRhYkNvbnRleHRNZW51SW50ZXJuYWwsdCl9LF9vcGVuU2F2ZU1vZGFsOmFzeW5jIHQ9Pnthd2FpdCgwLHIuYlcpKGUpO3JldHVybihhd2FpdCgwLGwucDQpKGUpKS5kaXNwYXRjaChsLmFRLk9wZW5TYXZlTW9kYWxJbnRlcm5hbCx0KX0sX2dldExheW91dHNXaXRoU2VsZWN0ZWRWaWV3czphc3luYygpPT4oYXdhaXQoMCxsLnA0KShlKSkuZGlzcGF0Y2gobC5hUS5HZXRMYXlvdXRzV2l0aFNlbGVjdGVkVmlld3NJbnRlcm5hbCxlKSxfb3BlblNhdmVCdXR0b25Db250ZXh0TWVudTphc3luYyB0PT57Y29uc3QgYT1hd2FpdCgwLHIuYlcpKGUpO3JldHVybiB0LmlkZW50aXR5PWUsYS5kaXNwYXRjaChyLk9GLk9wZW5TYXZlQnV0dG9uQ29udGV4dE1lbnVJbnRlcm5hbCx0KX0sX2FkZERlZmF1bHRQYWdlOmFzeW5jIHQ9Pntjb25zdCBhPWF3YWl0KDAsci5iVykoZSk7cmV0dXJuIHQuaWRlbnRpdHk9ZSxhLmRpc3BhdGNoKHIuT0YuQWRkRGVmYXVsdFBhZ2UsdCl9LF90cmFja1JlbW92ZWRUYWI6YXN5bmMgdD0+KGF3YWl0KDAsci5iVykoZSkpLmRpc3BhdGNoKHIuT0YuVHJhY2tSZW1vdmVkVGFiSW50ZXJuYWwsdCksX3Jlc3RvcmVSZW1vdmVkVGFiOmFzeW5jIHQ9Pihhd2FpdCgwLHIuYlcpKGUpKS5kaXNwYXRjaChyLk9GLlJlc3RvcmVSZW1vdmVkVGFiSW50ZXJuYWwsdCksX3RyYWNrVmlzaXRlZFNpdGU6YXN5bmMgdD0+KGF3YWl0KDAsci5iVykoZSkpLmRpc3BhdGNoKHIuT0YuVHJhY2tWaXNpdGVkU2l0ZUludGVybmFsLHQpLF9nZXRSZWNlbnRseVZpc2l0ZWRTaXRlczphc3luYyB0PT4oYXdhaXQoMCxyLmJXKShlKSkuZGlzcGF0Y2goci5PRi5HZXRSZWNlbnRseVZpc2l0ZWRTaXRlc0ludGVybmFsLHQpLF9nZXRGcmVxdWVudGx5VmlzaXRlZFNpdGVzOmFzeW5jIHQ9Pihhd2FpdCgwLHIuYlcpKGUpKS5kaXNwYXRjaChyLk9GLkdldEZyZXF1ZW50bHlWaXNpdGVkU2l0ZXNJbnRlcm5hbCx0KSxfc2VhcmNoU2l0ZXM6YXN5bmMgdD0+KGF3YWl0KDAsci5iVykoZSkpLmRpc3BhdGNoKHIuT0YuU2VhcmNoU2l0ZXNJbnRlcm5hbCx7aWRlbnRpdHk6ZSxyZXE6dH0pLF9nZXRTZWFyY2hQcm92aWRlcnM6YXN5bmMoKT0+KGF3YWl0KDAsci5iVykoZSkpLmRpc3BhdGNoKHIuT0YuR2V0U2VhcmNoUHJvdmlkZXJzSW50ZXJuYWwse2lkZW50aXR5OmV9KSxfZ2V0Q3VyYXRlZENvbnRlbnQ6YXN5bmMgdD0+KGF3YWl0KDAsci5iVykoZSkpLmRpc3BhdGNoKHIuT0YuR2V0Q3VyYXRlZENvbnRlbnRJbnRlcm5hbCx7aWRlbnRpdHk6ZSxyZXE6dH0pLF9oYW5kbGVSZXF1ZXN0TmF2aWdhdGlvbjphc3luYyB0PT4oYXdhaXQoMCxyLmJXKShlKSkuZGlzcGF0Y2goci5PRi5IYW5kbGVSZXF1ZXN0TmF2aWdhdGlvbkludGVybmFsLHQpfSksZz1lPT57Y29uc3QgdD1maW4uUGxhdGZvcm0ud3JhcFN5bmMoZSk7cmV0dXJue3dyYXBTeW5jOmU9PmgoZSksY3JlYXRlV2luZG93OmFzeW5jIGE9Pntjb25zdCBuPSgoKT0+e2NvbnN0IGU9YGJyb3dzZXItd2luZG93LXN0YXJ0dXAtJHsoMCxjLk4pKCl9YDtyZXR1cm4gcy5BLm1hcmtTdGFydChlKSxlfSkoKTsoZT0+e2Zpbi5BcHBsaWNhdGlvbi53cmFwU3luYyh7dXVpZDpmaW4ubWUuaWRlbnRpdHkudXVpZH0pLm9uY2UoXCJ3aW5kb3ctc2hvd25cIiwoKCk9PntzLkEubWFya0FuZE1lYXN1cmUoXCJicm93c2VyLXdpbmRvdy1zaG93blwiLGUpfSkpfSkobiksYXdhaXQoMCxyLmJXKShlKTtjb25zdCBvPWF3YWl0IHQuY3JlYXRlV2luZG93KGEpO3JldHVybihlPT57cy5BLm1hcmtBbmRNZWFzdXJlKFwiYnJvd3Nlci13aW5kb3ctc3RhcnRlZFwiLGUpfSkobiksaChvLmlkZW50aXR5KX0sZ2V0QWxsQXR0YWNoZWRQYWdlczphc3luYygpPT4oYXdhaXQoMCxyLmJXKShlKSkuZGlzcGF0Y2goci5PRi5HZXRBbGxBdHRhY2hlZFBhZ2VzLHZvaWQgMCksZ2V0QWxsV2luZG93czphc3luYygpPT57YXdhaXQoMCxyLmJXKShlKTtyZXR1cm4oYXdhaXQoMCxpLklvKSgpKS5tYXAoKGU9PmgoZS5pZGVudGl0eSkpKX0sZ2V0VW5pcXVlUGFnZVRpdGxlOmFzeW5jIHQ9Pihhd2FpdCgwLHIuYlcpKGUpKS5kaXNwYXRjaChyLk9GLkdldFVuaXF1ZVBhZ2VUaXRsZSx0KSxnZXRMYXN0Rm9jdXNlZFdpbmRvdzphc3luYygpPT4oYXdhaXQoMCxyLmJXKShlKSkuZGlzcGF0Y2goci5PRi5HZXRMYXN0Rm9jdXNlZEJyb3dzZXJXaW5kb3csdm9pZCAwKX19LHA9ZT0+KHtjcmVhdGVQYWdlOmFzeW5jIHQ9Pihhd2FpdCgwLHIuYlcpKGUpKS5kaXNwYXRjaChyLk9GLkNyZWF0ZVNhdmVkUGFnZUludGVybmFsLHQpLGRlbGV0ZVBhZ2U6YXN5bmMgdD0+KGF3YWl0KDAsci5iVykoZSkpLmRpc3BhdGNoKHIuT0YuRGVsZXRlU2F2ZWRQYWdlSW50ZXJuYWwsdCksdXBkYXRlUGFnZTphc3luYyB0PT4oYXdhaXQoMCxyLmJXKShlKSkuZGlzcGF0Y2goci5PRi5VcGRhdGVTYXZlZFBhZ2VJbnRlcm5hbCx0KSxnZXRQYWdlOmFzeW5jIHQ9Pihhd2FpdCgwLHIuYlcpKGUpKS5kaXNwYXRjaChyLk9GLkdldFNhdmVkUGFnZSx0KSxnZXRQYWdlczphc3luYyB0PT4oYXdhaXQoMCxyLmJXKShlKSkuZGlzcGF0Y2goci5PRi5HZXRTYXZlZFBhZ2VzLHQpLHNhdmVQYWdlOmFzeW5jIHQ9Pihhd2FpdCgwLHIuYlcpKGUpKS5kaXNwYXRjaChyLk9GLlNhdmVQYWdlLHQpLGNyZWF0ZVdvcmtzcGFjZTphc3luYyB0PT4oYXdhaXQoMCxyLk4pKGUpKS5kaXNwYXRjaChyLk9GLkNyZWF0ZVNhdmVkV29ya3NwYWNlLHQpLGRlbGV0ZVdvcmtzcGFjZTphc3luYyB0PT57Y29uc3QgYT13KCksbj1hd2FpdCBhLmdldEN1cnJlbnRXb3Jrc3BhY2UoKTtpZihuLndvcmtzcGFjZUlkPT09dCl0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBkZWxldGUgY3VycmVudCBhY3RpdmUgd29ya3NwYWNlICR7bi50aXRsZX1gKTtyZXR1cm4oYXdhaXQoMCxyLk4pKGUpKS5kaXNwYXRjaChyLk9GLkRlbGV0ZVNhdmVkV29ya3NwYWNlLHQpfSx1cGRhdGVXb3Jrc3BhY2U6YXN5bmMgdD0+KGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5VcGRhdGVTYXZlZFdvcmtzcGFjZSx0KSxnZXRXb3Jrc3BhY2U6YXN5bmMgdD0+KGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5HZXRTYXZlZFdvcmtzcGFjZSx0KSxnZXRXb3Jrc3BhY2VzOmFzeW5jIHQ9Pihhd2FpdCgwLHIuTikoZSkpLmRpc3BhdGNoKHIuT0YuR2V0U2F2ZWRXb3Jrc3BhY2VzLHQpLHNhdmVXb3Jrc3BhY2U6YXN5bmMgdD0+KGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5TYXZlV29ya3NwYWNlLHQpLGdldERvY2tQcm92aWRlckNvbmZpZzphc3luYyB0PT4oYXdhaXQoMCxyLk4pKGUpKS5kaXNwYXRjaChyLk9GLkdldERvY2tQcm92aWRlckNvbmZpZyx0KSxzYXZlRG9ja1Byb3ZpZGVyQ29uZmlnOmFzeW5jIHQ9Pihhd2FpdCgwLHIuTikoZSkpLmRpc3BhdGNoKHIuT0YuU2F2ZURvY2tQcm92aWRlckNvbmZpZyx0KX0pO3ZhciBmPWEoMzk2KTtjb25zdCBtPWU9Pntjb25zdCB0PWZpbi5QbGF0Zm9ybS53cmFwU3luYyhlKTtsZXQgYTtyZXR1cm4gT2JqZWN0LmFzc2lnbih0LHthcHBseVNuYXBzaG90OmFzeW5jKHQsYSk9PntpZihcInN0cmluZ1wiIT10eXBlb2YgdCYmIXQ/LndpbmRvd3MpdGhyb3cgbmV3IEVycm9yKFwiTm90IGEgdmFsaWQgYnJvd3NlciBzbmFwc2hvdFwiKTtyZXR1cm4gZmluLlBsYXRmb3JtLndyYXBTeW5jKGUpLmFwcGx5U25hcHNob3QodCxhKX0sZ2V0U25hcHNob3Q6KCk9PmZpbi5QbGF0Zm9ybS53cmFwU3luYyhlKS5nZXRTbmFwc2hvdCgpLnRoZW4oKGU9PmUpKSxnZXRWaWV3U25hcHNob3Q6dD0+ZmluLlBsYXRmb3JtLndyYXBTeW5jKGUpLmdldFZpZXdTbmFwc2hvdCh0KSxjcmVhdGVWaWV3Oih0LGEsbik9PmZpbi5QbGF0Zm9ybS53cmFwU3luYyhlKS5jcmVhdGVWaWV3KHQsYSxuKSxsYXVuY2hBcHA6YXN5bmMgdD0+e2NvbnNvbGUud2FybihcImxhdW5jaEFwcCBtZXRob2QgaXMgZGVwcmVjYXRlZC4gSXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIGNyZWF0ZVZpZXcgLSBodHRwczovL2RldmVsb3BlcnMub3BlbmZpbi5jby9vZi1kb2NzL2RvY3MvcGxhdGZvcm0tZ2V0dGluZy1zdGFydGVkI2FkZC1hLXZpZXctdG8tYW4tZXhpc3Rpbmctd2luZG93IG9yICBjcmVhdGVXaW5kb3cgLSBodHRwczovL2RldmVsb3BlcnMub3BlbmZpbi5jby9vZi1kb2NzL2RvY3MvcGxhdGZvcm0tZ2V0dGluZy1zdGFydGVkI2NyZWF0ZS1hLXBsYXRmb3JtLXdpbmRvdyBpbnN0ZWFkLlwiKSx0LnRhcmdldHx8KHQudGFyZ2V0PXt1dWlkOm4uJGgsbmFtZTpuLnZMLGVudGl0eVR5cGU6bi5mVHx8XCJ1bmtub3duXCJ9KTtyZXR1cm4oYXdhaXQoMCxyLk4pKGUpKS5kaXNwYXRjaChyLk9GLkxhdW5jaEFwcCx0KX0sX2ludm9rZUN1c3RvbUFjdGlvbjphc3luYyh0LGEpPT57Y29uc3Qgbj1hd2FpdCgwLHIuTikoZSksaT17YWN0aW9uSWQ6dCxwYXlsb2FkOnsuLi5hLGNhbGxlclR5cGU6YS5jYWxsZXJUeXBlfHxvLnZjLkFQSX19O3JldHVybiBuLmRpc3BhdGNoKHIuT0YuSW52b2tlQ3VzdG9tQWN0aW9uSW50ZXJuYWwsaSl9LF9yZXF1ZXN0UXVpdFBsYXRmb3JtRGlhbG9nOmFzeW5jIHQ9Pihhd2FpdCgwLHIuTikoZSkpLmRpc3BhdGNoKHIuT0YuUmVxdWVzdFF1aXRQbGF0Zm9ybURpYWxvZ0ludGVybmFsLHQpLGdldEN1cnJlbnRXb3Jrc3BhY2U6YXN5bmMoKT0+KGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5HZXRDdXJyZW50V29ya3NwYWNlLHZvaWQgMCksYXBwbHlXb3Jrc3BhY2U6YXN5bmModCxhKT0+KGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5BcHBseVdvcmtzcGFjZSx7Li4udCxvcHRpb25zOmF9KSxzZXRBY3RpdmVXb3Jrc3BhY2U6YXN5bmMgdD0+KGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5TZXRBY3RpdmVXb3Jrc3BhY2UsdCksZ2V0TGFuZ3VhZ2U6YXN5bmMoKT0+KGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5HZXRMYW5ndWFnZSksX2dldExhbmd1YWdlUmVzb3VyY2VzOmFzeW5jKCk9Pihhd2FpdCgwLHIuTikoZSkpLmRpc3BhdGNoKHIuT0YuR2V0TGFuZ3VhZ2VSZXNvdXJjZXNJbnRlcm5hbCksc2V0TGFuZ3VhZ2U6YXN5bmMgdD0+KGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5TZXRMYW5ndWFnZSx0KSxfcmFpc2VBbmFseXRpY3M6YXN5bmMgdD0+e2lmKGF8fChhPWF3YWl0KDAsci5LWikoZSkpLFwib2JqZWN0XCI9PXR5cGVvZiBhJiZhPy5hbmFseXRpY3M/LmlzU3VwcG9ydGVkKXtyZXR1cm4oYXdhaXQoMCxyLk4pKGUpKS5kaXNwYXRjaChyLk9GLkFuYWx5dGljcyx0KX1lLnV1aWR9LGdldE5vdGlmaWNhdGlvbnNDb25maWc6YXN5bmMoKT0+KGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5HZXROb3RpZmljYXRpb25zQ29uZmlnKSxfcmVmcmVzaEJvb2ttYXJrc0ludGVybmFsOmFzeW5jKCk9Pihhd2FpdCgwLHIuTikoZSkpLmRpc3BhdGNoKHIuT0YuUmVmcmVzaEJvb2ttYXJrc0ludGVybmFsKSxfbGF1bmNoQm9va21hcmtJbnRlcm5hbDphc3luYyB0PT4oYXdhaXQoMCxyLk4pKGUpKS5kaXNwYXRjaChyLk9GLkxhdW5jaEJvb2ttYXJrSW50ZXJuYWwsdCksX3VwZGF0ZURvY2tGYXZvcml0ZXNJbnRlcm5hbDphc3luYyB0PT4oYXdhaXQoMCxyLk4pKGUpKS5kaXNwYXRjaChyLk9GLlVwZGF0ZURvY2tGYXZvcml0ZXNJbnRlcm5hbCx0KSxfdXBkYXRlQ29udGVudE1lbnVJbnRlcm5hbDphc3luYyB0PT4oYXdhaXQoMCxyLk4pKGUpKS5kaXNwYXRjaChyLk9GLlVwZGF0ZUNvbnRlbnRNZW51SW50ZXJuYWwsdCksX2xhdW5jaERvY2tFbnRyeUludGVybmFsOmFzeW5jIHQ9Pihhd2FpdCgwLHIuTikoZSkpLmRpc3BhdGNoKHIuT0YuTGF1bmNoRG9ja0VudHJ5SW50ZXJuYWwsdCksX3NldERvY2tGYXZvcml0ZXNJbnRlcm5hbDphc3luYyB0PT4oYXdhaXQoMCxyLk4pKGUpKS5kaXNwYXRjaChyLk9GLlNldERvY2tGYXZvcml0ZXNPcmRlckludGVybmFsLHQpLF9zZXREb2NrV29ya3NwYWNlQnV0dG9uc09yZGVySW50ZXJuYWw6YXN5bmMgdD0+KGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5TZXREb2NrV29ya3NwYWNlQnV0dG9uc09yZGVySW50ZXJuYWwsdCksX3JlbW92ZURvY2tGYXZvcml0ZUludGVybmFsOmFzeW5jIHQ9Pihhd2FpdCgwLHIuTikoZSkpLmRpc3BhdGNoKHIuT0YuUmVtb3ZlRG9ja0Zhdm9yaXRlSW50ZXJuYWwsdCksX2FkZERvY2tGYXZvcml0ZUludGVybmFsOmFzeW5jIHQ9Pihhd2FpdCgwLHIuTikoZSkpLmRpc3BhdGNoKHIuT0YuQWRkRG9ja0Zhdm9yaXRlSW50ZXJuYWwsdCksX25hdmlnYXRlQ29udGVudE1lbnVJbnRlcm5hbDphc3luYyB0PT4oYXdhaXQoMCxyLk4pKGUpKS5kaXNwYXRjaChyLk9GLk5hdmlnYXRlQ29udGVudE1lbnVJbnRlcm5hbCx0KSxfb3BlbkRvY2tXb3Jrc3BhY2VzQ29udGV4dE1lbnVJbnRlcm5hbDphc3luYygpPT4oYXdhaXQoMCxyLk4pKGUpKS5kaXNwYXRjaChyLk9GLkdldERvY2tXb3Jrc3BhY2VzQ29udGV4dE1lbnVJbnRlcm5hbCksX2hhbmRsZURvY2tXb3Jrc3BhY2VzTWVudVJlc3BvbnNlSW50ZXJuYWw6YXN5bmMgdD0+KGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5IYW5kbGVEb2NrV29ya3NwYWNlc01lbnVSZXNwb25zZUludGVybmFsLHQpLFRoZW1lOigwLGYuTkEpKGUpLEJyb3dzZXI6ZyhlKSxTdG9yYWdlOnAoZSl9KX0sdz0oKT0+bShmaW4ubWUuaWRlbnRpdHkpfSwzOTY6KGUsdCxhKT0+e1widXNlIHN0cmljdFwiO2EuZCh0LHtOQTooKT0+aX0pO2EoMTgxKSxhKDcwKSxhKDMyNik7dmFyIG49YSgxMDIpO3ZhciByOyFmdW5jdGlvbihlKXtlLlVwZGF0ZVBsYXRmb3JtVGhlbWVTY2hlbWU9XCJ1cGRhdGUtcGxhdGZvcm0tdGhlbWUtc2NoZW1lXCJ9KHJ8fChyPXt9KSk7KDAsbi5BKShcIm9mLXdvcmtzcGFjZS1ub3RpZmljYXRpb25zLXN5bmNcIik7YSg2OTUpO3ZhciBvPWEoNzkpO2EoMzE3KTtjb25zdCBpPWU9Pih7Z2V0VGhlbWVzOmFzeW5jKCk9Pihhd2FpdCgwLG8uTikoZSkpLmRpc3BhdGNoKG8uT0YuR2V0VGhlbWVzLHZvaWQgMCksc2V0U2VsZWN0ZWRTY2hlbWU6YXN5bmMgdD0+KGF3YWl0KDAsby5OKShlKSkuZGlzcGF0Y2goby5PRi5TZXRTZWxlY3RlZFNjaGVtZSx0KSxnZXRTZWxlY3RlZFNjaGVtZTphc3luYygpPT4oYXdhaXQoMCxvLk4pKGUpKS5kaXNwYXRjaChvLk9GLkdldFNlbGVjdGVkU2NoZW1lLHZvaWQgMCl9KX0sMTM6KGUsdCxhKT0+e1widXNlIHN0cmljdFwiO2EuZCh0LHtOdDooKT0+dS5OLEFnOigpPT51LkF9KTthKDY3NSk7dmFyIG49YSg3MjMpO2EoMTgxKTt2YXIgcj1hKDcwKTthKDM2NSk7Y29uc3Qgbz0oZSx0PTApPT57bGV0IGEsbixyPSExO2NvbnN0IG89YXN5bmMgbj0+e2NvbnN0IGk9YXdhaXQgZSguLi5uKTtpZihyKXthd2FpdCBuZXcgUHJvbWlzZSgoZT0+c2V0VGltZW91dChlLHQpKSk7Y29uc3QgZT1hO3JldHVybiBhPXZvaWQgMCxyPSExLG8oZSl9cmV0dXJuIGl9O3JldHVybiguLi5lKT0+KG4/KHI9ITAsYT1lKTpuPW8oZSkuY2F0Y2goKGU9Pnt0aHJvdyBjb25zb2xlLmVycm9yKFwibWFrZURlYm91bmNlZEZ1bmNcIixlKSxlfSkpLmZpbmFsbHkoKCgpPT57bj12b2lkIDB9KSksbil9O3ZhciBpOyFmdW5jdGlvbihlKXtlLlRvcD1cInRvcFwiLGUuQmVsb3c9XCJiZWxvd1wifShpfHwoaT17fSkpO2NvbnN0IHM9YXN5bmMoZSx0KT0+e3RyeXtyZXR1cm4gZT9hd2FpdCBlLmdldEJvdW5kcygpOnR9Y2F0Y2goZSl7cmV0dXJuIGNvbnNvbGUud2FybihcImdldFBhcmVudFdpbmRvd0JvdW5kcyAtIEZhaWxlZCB0byBnZXQgcGFyZW50IHdpbmRvdyBib3VuZHNcIixlKSx0fX0sYz1hc3luYyBlPT57dHJ5e3JldHVybiEhZSYmXCJtYXhpbWl6ZWRcIj09PWF3YWl0IGUuZ2V0U3RhdGUoKX1jYXRjaChlKXtyZXR1cm4gY29uc29sZS53YXJuKFwicGFyZW50V2luZG93TWF4aW1pemVkIC0gRmFpbGVkIHRvIGdldCBwYXJlbnQgd2luZG93IHN0YXRlXCIsZSksITF9fTtvKChhc3luYyBmdW5jdGlvbihlLHQsYSxuLG8pe2NvbnN0IGw9dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxkPWF3YWl0IGFzeW5jIGZ1bmN0aW9uKGUsdCxhLG4sbyxsKXtjb25zdCBkPSEhZSYmKDAsci5JcSkoZSksdT1hd2FpdCBzKGQsbCk7aWYobj09PWkuQmVsb3cpe2lmKCFkfHxhd2FpdCBjKGQpKXtjb25zdCBlPWQ/KGF3YWl0KDAsci51cikodSkpLmF2YWlsYWJsZVJlY3Q6KGF3YWl0IGZpbi5TeXN0ZW0uZ2V0TW9uaXRvckluZm8oKSkucHJpbWFyeU1vbml0b3IuYXZhaWxhYmxlUmVjdDtyZXR1cm57bGVmdDooMCxyLlYxKShlKS5sZWZ0LXQvMix0b3A6bz9lLmJvdHRvbS0xMjg6ZS5ib3R0b20rMTIsd2lkdGg6dCxoZWlnaHQ6YX19cmV0dXJue2xlZnQ6KDAsci5WMSkodSkubGVmdC10LzIsdG9wOm8/dS5ib3R0b20tMTI4OnUuYm90dG9tKzEyLHdpZHRoOnQsaGVpZ2h0OmF9fWlmKCFkfHxhd2FpdCBjKGQpKXtjb25zdCBlPWQ/KGF3YWl0KDAsci51cikodSkpLmF2YWlsYWJsZVJlY3Q6KGF3YWl0IGZpbi5TeXN0ZW0uZ2V0TW9uaXRvckluZm8oKSkucHJpbWFyeU1vbml0b3IuYXZhaWxhYmxlUmVjdDtyZXR1cm57bGVmdDooMCxyLlYxKShlKS5sZWZ0LXQvMix0b3A6ZS50b3ArMjAsd2lkdGg6dCxoZWlnaHQ6YX19cmV0dXJue2xlZnQ6KDAsci5WMSkodSkubGVmdC10LzIsdG9wOnUudG9wKzIwLHdpZHRoOnQsaGVpZ2h0OmF9fShlLGwud2lkdGgsbC5oZWlnaHQsYSxuLG8pO2lmKDA9PT1kLndpZHRofHwwPT09ZC5oZWlnaHQpcmV0dXJuO2NvbnN0IHU9KDAsci5UdikoKTthd2FpdCB1LnNldEJvdW5kcyhkKSxhd2FpdCB1LnNob3coKTtjb25zdCBoPXNldFRpbWVvdXQoKCgpPT51LmNsb3NlKCkpLG4/NWUzOjNlMyksZz0oKT0+e2NsZWFyVGltZW91dChoKSx1LmNsb3NlKCl9O2lmKGUpe2NvbnN0IHQ9KDAsci5JcSkoZSk7dC5vbihcImJvdW5kcy1jaGFuZ2luZ1wiLCgoKT0+ZygpKSksdC5vbihcImJsdXJyZWRcIiwoKCk9PmcoKSkpLHQub24oXCJtYXhpbWl6ZWRcIiwoKCk9PmcoKSkpLHQub24oXCJtaW5pbWl6ZWRcIiwoKCk9PmcoKSkpLHQub24oXCJyZXN0b3JlZFwiLCgoKT0+ZygpKSl9fSksMTApO2EoMjc3KSxhKDk1Nyk7dmFyIGw9YSg0MzgpO2EoOTQwKTtyZXF1aXJlKFwicmVhY3QtaTE4bmV4dFwiKTtjb25zdCBkPXJlcXVpcmUoXCJpMThuZXh0XCIpO2EubihkKSgpLnQ7YSg2NzgpLGEoMzI2KTthKDc5KTt2YXIgdT1hKDM2Nyk7bmV3IGNsYXNze2NvbnN0cnVjdG9yKCl7dGhpcy5xdWV1ZT1bXSx0aGlzLmxvY2tlZD0hMX1sb2NrKCl7cmV0dXJuIG5ldyBQcm9taXNlKChlPT57dGhpcy5sb2NrZWQ/dGhpcy5xdWV1ZS5wdXNoKGUpOih0aGlzLmxvY2tlZD0hMCxlKCkpfSkpfXVubG9jaygpe2lmKHRoaXMucXVldWUubGVuZ3RoPjApe2NvbnN0IGU9dGhpcy5xdWV1ZS5zaGlmdCgpO2UmJmUoKX1lbHNlIHRoaXMubG9ja2VkPSExfX07bmV3IE1hcDtjb25zdCBoPSgoZSx0KT0+e2NvbnN0IGE9ZTtyZXR1cm4gYS53b3Jrc3BhY2VQbGF0Zm9ybXx8KGEud29ya3NwYWNlUGxhdGZvcm09e30pLGEud29ya3NwYWNlUGxhdGZvcm0uX2ludGVybmFsRGVmZXJTaG93T3B0aW9ucz17c2V0QXNGb3JlZ3JvdW5kOiEhdCxkZWZlclNob3dFbmFibGVkOiEwLGF1dG9TaG93OmEud29ya3NwYWNlUGxhdGZvcm0/Ll9pbnRlcm5hbEF1dG9TaG93fHxhLndvcmtzcGFjZVBsYXRmb3JtPy5faW50ZXJuYWxEZWZlclNob3dPcHRpb25zPy5hdXRvU2hvd3x8dm9pZCAwPT09YS5hdXRvU2hvd3x8YS5hdXRvU2hvd30sYS5hdXRvU2hvdz0hMSxhfSkoe2Fsd2F5c09uVG9wOiEwLGF1dG9TaG93OiExLGZyYW1lOiExLHJlc2l6YWJsZTohMSxzaG93VGFza2Jhckljb246ITF9KTshZnVuY3Rpb24oZT1oKXtjb25zdCB0PW5ldyBNYXB9KCk7dmFyIGc9YSgxNDEpLHA9YSgxODkpO2EoNTIzKTtmdW5jdGlvbiBmKGUsdCl7cmV0dXJuIGFzeW5jKGEsLi4ubik9PntlLmhhcyhhKSYmZS5nZXQoYSkuZm9yRWFjaCgoZT0+ZSguLi5uKSkpLHQmJmF3YWl0IHQoe2V2ZW50OmEscGF5bG9hZDpufSl9fWZ1bmN0aW9uIG0oZSx0KXtyZXR1cm4gdCYmdCgodD0+e2NvbnN0e2V2ZW50OmEscGF5bG9hZDpufT10O2UuaGFzKGEpJiZlLmdldChhKS5mb3JFYWNoKChlPT5lKC4uLm4pKSl9KSksKHQsYSk9PntlLmhhcyh0KXx8ZS5zZXQodCxuZXcgU2V0KSxlLmdldCh0KS5hZGQoYSl9fWZ1bmN0aW9uIHcoZSl7cmV0dXJuKHQsYSk9PntlLmhhcyh0KXx8ZS5zZXQodCxuZXcgU2V0KTtjb25zdCBuPWUuZ2V0KHQpLHI9KC4uLmUpPT57YSguLi5lKSxuLmRlbGV0ZShyKX07bi5hZGQocil9fWZ1bmN0aW9uIHkoZSl7cmV0dXJuKHQsYSk9PntlLmhhcyh0KSYmZS5nZXQodCkuZGVsZXRlKGEpfX1yLlEuQnJvd3Nlck1lbnU7KGZ1bmN0aW9uKGUpe2NvbnN0IHQ9bmV3IE1hcDtmKHQsKHQ9Pm4uY0kmJmZpbi5JbnRlckFwcGxpY2F0aW9uQnVzLnB1Ymxpc2goZSx0KSkpLG0odCwodD0+bi5jSSYmZmluLkludGVyQXBwbGljYXRpb25CdXMuc3Vic2NyaWJlKHt1dWlkOmZpbi5tZS51dWlkfSxlLHQpKSkseSh0KSx3KHQpfSkoXCJ3aW5kb3cubWVudVwiKSxvKCgoKT0+KDAsbC52MSkoKS5nZXRDaGlsZFdpbmRvd3MoKSksNTAwKTtuZXcgTWFwO2EoMzE3KTt2YXIgYj1hKDIzNik7YS5uKGIpKCkoKGFzeW5jKCk9Pntjb25zdCBlPWF3YWl0IGZpbi5QbGF0Zm9ybS5nZXRDdXJyZW50U3luYygpLkFwcGxpY2F0aW9uLmdldENoaWxkV2luZG93cygpO2xldCB0LGE9ITE7Zm9yKGNvbnN0IG4gb2YgZSlpZihuLmlkZW50aXR5Lm5hbWU9PT1yLlEuQnJvd3Nlck1lbnV8fG4uaWRlbnRpdHkubmFtZT09PXIuUS5Ccm93c2VyU2F2ZU1lbnU/dD1uOmF3YWl0KDAsci5oYikobi5pZGVudGl0eSkmJihhPSEwKSxhKWJyZWFrOyFhJiZ0JiZ0LmNsb3NlKCl9KSwxMDAse2xlYWRpbmc6ITEsdHJhaWxpbmc6ITB9KTt2YXIgayxTOyFmdW5jdGlvbihlKXtlLlNhdmU9XCJTYXZlXCIsZS5TYXZlQXM9XCJTYXZlQXNcIn0oa3x8KGs9e30pKSxmdW5jdGlvbihlKXtlLkdsb2JhbE1lbnU9XCJnbG9iYWwtbWVudVwiLGUuQ29udGV4dE1lbnU9XCJjb250ZXh0LW1lbnVcIixlLlJlbmFtZVN1cGVydGFiPVwicmVuYW1lLXN1cGVydGFiXCIsZS5BZGRFZGl0Qm9va21hcms9XCJhZGQtZWRpdC1ib29rbWFya1wiLGUuRHJvcGRvd25NZW51PVwiZHJvcGRvd24tbWVudVwifShTfHwoUz17fSkpO2EoODYyKTtjb25zdCB2PXJlcXVpcmUoXCJpZGIta2V5dmFsXCIpLFA9KGUsdCk9PigwLHYuY3JlYXRlU3RvcmUpKGUrXCItXCIrZmluLm1lLnV1aWQsdCksQz0oZSx0KT0+e2NvbnN0IGE9UChlLHQpO3JldHVybihhc3luYyhlLHQsYSk9Pntjb25zdCBuPXAuZ2V0SXRlbShnLkEuSGFzTW92ZWRTdG9yZSkscj1uP0pTT04ucGFyc2Uobik6e307aWYociYmclthXSlyZXR1cm47clthXT0hMCxwLnNldEl0ZW0oZy5BLkhhc01vdmVkU3RvcmUsSlNPTi5zdHJpbmdpZnkocikpO2NvbnN0IG89YXdhaXQoMCx2LmVudHJpZXMpKGUpO2F3YWl0KDAsdi5zZXRNYW55KShvLHQpfSkoKDAsdi5jcmVhdGVTdG9yZSkoZSx0KSxhLGUpLGF9O24uQVQmJm4uY0kmJkMoXCJvcGVuZmluLWhvbWUtcGFnZXNcIixcInBhZ2VzXCIpO24uQVQmJm4uY0kmJlAoXCJvcGVuZmluLWVudGVycHJpc2UtdGFiLWhpc3RvcnlcIixcInJlbW92ZWQtdGFiLXN0YWNrXCIpLG4uQVQmJm4uY0kmJlAoXCJvcGVuZmluLWVudGVycHJpc2Utc2l0ZS1oaXN0b3J5XCIsXCJ2aXNpdGVkLXNpdGVzXCIpO3ZhciB4OyFmdW5jdGlvbihlKXtlLkxhYmVsPVwibm9ybWFsXCIsZS5TZXBhcmF0b3I9XCJzZXBhcmF0b3JcIixlLlN1Ym1lbnU9XCJzdWJtZW51XCIsZS5DaGVja2JveD1cImNoZWNrYm94XCJ9KHh8fCh4PXt9KSk7eC5TZXBhcmF0b3I7YSgyNTcpO3ZhciBBOyFmdW5jdGlvbihlKXtlW2UuVG9wTGVmdD0wXT1cIlRvcExlZnRcIixlW2UuVG9wUmlnaHQ9MV09XCJUb3BSaWdodFwiLGVbZS5Cb3R0b21MZWZ0PTJdPVwiQm90dG9tTGVmdFwiLGVbZS5Cb3R0b21SaWdodD0zXT1cIkJvdHRvbVJpZ2h0XCIsZVtlLkNlbnRlcj00XT1cIkNlbnRlclwifShBfHwoQT17fSkpO3ZhciBGPWEoMTAyKTsoMCxGLkEpKGAke1widW5kZWZpbmVkXCIhPXR5cGVvZiBmaW4mJmZpbj8ubWUuaWRlbnRpdHkudXVpZH0tZW50ZXJwcmlzZS1kb2NrYCksbi5BVCYmbi5jSSYmUChcImRvY2stcHJvdmlkZXItY29uZmlnc1wiLFwiZG9jay1wcm92aWRlci1jb25maWdzXCIpO2EoMzk2KTtuLkFUJiZuLmNJJiZDKFwib3BlbmZpbi13b3Jrc3BhY2UtcGxhdGZvcm0td29ya3NwYWNlc1wiLFwid29ya3NwYWNlc1wiKTthKDI1MCk7ci4kcC51dWlkLHIuUS5Ccm93c2VyQWRkcmVzc1NlYXJjaFByZWZpeDthKDQxMyksYSgxNzkpfSw0MTM6KGUsdCxhKT0+e1widXNlIHN0cmljdFwifSw2NzU6KGUsdCxhKT0+e1widXNlIHN0cmljdFwiO2EuZCh0LHtxVDooKT0+byx2YzooKT0+Z30pO3ZhciBuLHIsbyxpLHMsYyxsLGQsdSxoLGc7YSgxNzkpLGEoMjUwKTshZnVuY3Rpb24oZSl7ZS5VcmxDaGFuZ2U9XCJVUkxfQ0hBTkdFXCIsZS5WaWV3QWRkZWQ9XCJWSUVXX0FEREVEXCIsZS5WaWV3UmVtb3ZlZD1cIlZJRVdfUkVNT1ZFRFwiLGUuUGFnZUNvbnRleHRBZGRlZD1cIlBBR0VfQ09OVEVYVF9BRERFRFwiLGUuUGFnZUNvbnRleHRSZW1vdmVkPVwiUEFHRV9DT05URVhUX1JFTU9WRURcIn0obnx8KG49e30pKSxmdW5jdGlvbihlKXtlLk5ld1dpbmRvdz1cIk5ld1dpbmRvd1wiLGUuTmV3UGFnZT1cIk5ld1BhZ2VcIixlLlNhdmVQYWdlPVwiU2F2ZVBhZ2VcIixlLlNhdmVQYWdlQXM9XCJTYXZlUGFnZUFzXCIsZS5QcmludD1cIlByaW50XCIsZS5QcmludEFsbD1cIlByaW50QWxsXCIsZS5QcmludFNjcmVlbj1cIlByaW50U2NyZWVuXCIsZS5DbG9zZVdpbmRvdz1cIkNsb3NlV2luZG93XCIsZS5SZXN0b3JlQ2hhbmdlcz1cIlJlc3RvcmVDaGFuZ2VzXCIsZS5TYXZlV29ya3NwYWNlPVwiU2F2ZVdvcmtzcGFjZVwiLGUuU2F2ZVdvcmtzcGFjZUFzPVwiU2F2ZVdvcmtzcGFjZUFzXCIsZS5SZW5hbWVXb3Jrc3BhY2U9XCJSZW5hbWVXb3Jrc3BhY2VcIixlLlN3aXRjaFdvcmtzcGFjZT1cIlN3aXRjaFdvcmtzcGFjZVwiLGUuRGVsZXRlV29ya3NwYWNlPVwiRGVsZXRlV29ya3NwYWNlXCIsZS5Eb3dubG9hZHM9XCJEb3dubG9hZHNcIixlLk9wZW5TdG9yZWZyb250PVwiT3BlblN0b3JlZnJvbnRcIixlLkFwcGVhcmFuY2U9XCJBcHBlYXJhbmNlXCIsZS5RdWl0PVwiUXVpdFwiLGUuQ3VzdG9tPVwiQ3VzdG9tXCJ9KHJ8fChyPXt9KSksZnVuY3Rpb24oZSl7ZS5MaWdodD1cImxpZ2h0XCIsZS5EYXJrPVwiZGFya1wiLGUuU3lzdGVtPVwic3lzdGVtXCJ9KG98fChvPXt9KSksZnVuY3Rpb24oZSl7ZS5DbG9zZT1cIkNsb3NlXCIsZS5EdXBsaWNhdGU9XCJEdXBsaWNhdGVcIixlLlJlbmFtZT1cIlJlbmFtZVwiLGUuU2F2ZT1cIlNhdmVcIixlLlNhdmVBcz1cIlNhdmUgQXNcIixlLk5ld1BhZ2U9XCJOZXcgUGFnZVwiLGUuRGVsZXRlUGFnZT1cIkRlbGV0ZSBQYWdlXCIsZS5TYXZlV29ya3NwYWNlQXM9XCJTYXZlV29ya3NwYWNlQXNcIixlLlJlZnJlc2g9XCJSZWZyZXNoXCIsZS5DbG9zZU90aGVycz1cIkNsb3NlIG90aGVyc1wiLGUuRGVsZXRlPVwiRGVsZXRlXCIsZS5QcmludD1cIlByaW50XCIsZS5QcmludEFsbD1cIlByaW50QWxsXCIsZS5QcmludFNjcmVlbj1cIlByaW50U2NyZWVuXCIsZS5DdXN0b209XCJDdXN0b21cIn0oaXx8KGk9e30pKSxmdW5jdGlvbihlKXtlLkxvY2s9XCJMb2NrXCIsZS5TaG93SGlkZVRhYnM9XCJTaG93SGlkZVRhYnNcIixlLkFkZFRvQ2hhbmVsPVwiQWRkVG9DaGFubmVsXCIsZS5QcmludD1cIlByaW50XCIsZS5QaW49XCJQaW5cIn0oc3x8KHM9e30pKSxmdW5jdGlvbihlKXtlLkVkaXROYW1lPVwiRWRpdCBOYW1lXCIsZS5Nb3ZlPVwiTW92ZVwiLGUuRGVsZXRlPVwiRGVsZXRlXCJ9KGN8fChjPXt9KSksZnVuY3Rpb24oZSl7ZS5OZXdWaWV3PVwiTmV3Vmlld1wiLGUuRHVwbGljYXRlVmlld3M9XCJEdXBsaWNhdGVWaWV3XCIsZS5PcGVuV2l0aERlZmF1bHRCcm93c2VyPVwiT3BlbldpdGhEZWZhdWx0QnJvd3NlclwiLGUuUmVsb2FkVmlld3M9XCJSZWxvYWRUYWJcIixlLkNsb3NlVmlld3M9XCJDbG9zZVRhYlwiLGUuQWRkVG9DaGFubmVsPVwiQWRkVG9DaGFubmVsXCIsZS5SZW1vdmVGcm9tQ2hhbm5lbD1cIlJlbW92ZUZyb21DaGFubmVsXCIsZS5CYWNrPVwiQmFja1wiLGUuRm9yd2FyZD1cIkZvcndhcmRcIixlLlByaW50PVwiUHJpbnRcIixlLlByaW50QWxsPVwiUHJpbnRBbGxcIixlLlByaW50U2NyZWVuPVwiUHJpbnRTY3JlZW5cIixlLkN1c3RvbT1cIkN1c3RvbVwifShsfHwobD17fSkpLGZ1bmN0aW9uKGUpe2UuU2hvd0hpZGVUYWJzPVwiU2hvd0hpZGVUYWJzXCIsZS5Db2xvckxpbmtpbmc9XCJDb2xvckxpbmtpbmdcIixlLlByZXNldExheW91dHM9XCJQcmVzZXRMYXlvdXRzXCIsZS5Mb2NrVW5sb2NrUGFnZT1cIkxvY2tVbmxvY2tQYWdlXCIsZS5TYXZlTWVudT1cIlNhdmVNZW51XCIsZS5TYXZlUGFnZT1cIlNhdmVQYWdlXCIsZS5NaW5pbWlzZT1cIk1pbmltaXNlXCIsZS5NYXhpbWlzZT1cIk1heGltaXNlXCIsZS5DbG9zZT1cIkNsb3NlXCIsZS5DdXN0b209XCJDdXN0b21cIn0oZHx8KGQ9e30pKSxmdW5jdGlvbihlKXtlLlNhdmVQYWdlPVwiU2F2ZVBhZ2VcIixlLlNhdmVXb3Jrc3BhY2U9XCJTYXZlV29ya3NwYWNlXCIsZS5TYXZlUGFnZUFzPVwiU2F2ZVBhZ2VBc1wiLGUuU2F2ZVdvcmtzcGFjZUFzPVwiU2F2ZVdvcmtzcGFjZUFzXCIsZS5DdXN0b209XCJDdXN0b21cIn0odXx8KHU9e30pKSxmdW5jdGlvbihlKXtlLkJyb3dzZXI9XCJicm93c2VyXCIsZS5QbGF0Zm9ybT1cInBsYXRmb3JtXCJ9KGh8fChoPXt9KSksZnVuY3Rpb24oZSl7ZS5DdXN0b21CdXR0b249XCJDdXN0b21CdXR0b25cIixlLlN0b3JlQ3VzdG9tQnV0dG9uPVwiU3RvcmVDdXN0b21CdXR0b25cIixlLkN1c3RvbURyb3Bkb3duSXRlbT1cIkN1c3RvbURyb3Bkb3duSXRlbVwiLGUuR2xvYmFsQ29udGV4dE1lbnU9XCJHbG9iYWxDb250ZXh0TWVudVwiLGUuVmlld1RhYkNvbnRleHRNZW51PVwiVmlld1RhYkNvbnRleHRNZW51XCIsZS5QYWdlVGFiQ29udGV4dE1lbnU9XCJQYWdlVGFiQ29udGV4dE1lbnVcIixlLlNhdmVCdXR0b25Db250ZXh0TWVudT1cIlNhdmVCdXR0b25Db250ZXh0TWVudVwiLGUuQVBJPVwiQVBJXCJ9KGd8fChnPXt9KSk7dmFyIHA7IWZ1bmN0aW9uKGUpe2UuU0FWRV9QQUdFPVwiU0FWRV9QQUdFXCIsZS5TQVZFX1dPUktTUEFDRT1cIlNBVkVfV09SS1NQQUNFXCIsZS5TQVZFX1BBR0VfQVM9XCJTQVZFX1BBR0VfQVNcIixlLlNBVkVfV09SS1NQQUNFX0FTPVwiU0FWRV9XT1JLU1BBQ0VfQVNcIixlLlJFTkFNRV9QQUdFPVwiUkVOQU1FX1BBR0VcIixlLlJFTkFNRV9XT1JLU1BBQ0U9XCJSRU5BTUVfV09SS1NQQUNFXCJ9KHB8fChwPXt9KSl9LDEyOTooKT0+e1widXNlIHN0cmljdFwiO3ZhciBlLHQsYTshZnVuY3Rpb24oZSl7ZS5GZXRjaGluZz1cImZldGNoaW5nXCIsZS5GZXRjaGVkPVwiZmV0Y2hlZFwiLGUuQ29tcGxldGU9XCJjb21wbGV0ZVwifShlfHwoZT17fSkpLGZ1bmN0aW9uKGUpe2UuVXNlckFjdGlvbj1cInVzZXItYWN0aW9uXCIsZS5Gb2N1c0NoYW5nZT1cImZvY3VzLWNoYW5nZVwiLGUuUmVsb2FkPVwicmVsb2FkXCJ9KHR8fCh0PXt9KSksZnVuY3Rpb24oZSl7ZS5BY3RpdmU9XCJhY3RpdmVcIixlLkRlZmF1bHQ9XCJkZWZhdWx0XCJ9KGF8fChhPXt9KSl9LDYwMDooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIG47IWZ1bmN0aW9uKGUpe2UuQWN0aW9uQnV0dG9uPVwiQWN0aW9uQnV0dG9uXCIsZS5Ecm9wZG93bkJ1dHRvbj1cIkRyb3Bkb3duQnV0dG9uXCJ9KG58fChuPXt9KSl9LDg3MjooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIG4scixvOyFmdW5jdGlvbihlKXtlLlN1Z2dlc3Rpb249XCJzdWdnZXN0aW9uXCJ9KG58fChuPXt9KSksZnVuY3Rpb24oZSl7ZS5Db250YWN0PVwiQ29udGFjdFwiLGUuQ3VzdG9tPVwiQ3VzdG9tXCIsZS5MaXN0PVwiTGlzdFwiLGUuUGxhaW49XCJQbGFpblwiLGUuU2ltcGxlVGV4dD1cIlNpbXBsZVRleHRcIixlLkxvYWRpbmc9XCJMb2FkaW5nXCIsZS5FcnJvcj1cIkVycm9yXCJ9KHJ8fChyPXt9KSksZnVuY3Rpb24oZSl7ZS5NdWx0aVNlbGVjdD1cIk11bHRpU2VsZWN0XCJ9KG98fChvPXt9KSl9LDE3OTooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7YSgxMjkpLGEoODcyKSxhKDcxMCksYSgxODQpLGEoNjAwKX0sNzEwOihlLHQsYSk9PntcInVzZSBzdHJpY3RcIjt2YXIgbixyOyFmdW5jdGlvbihlKXtlLlNuYXBzaG90PVwic25hcHNob3RcIixlLk1hbmlmZXN0PVwibWFuaWZlc3RcIixlLlZpZXc9XCJ2aWV3XCIsZS5FeHRlcm5hbD1cImV4dGVybmFsXCJ9KG58fChuPXt9KSksZnVuY3Rpb24oZSl7ZS5MYW5kaW5nUGFnZT1cImxhbmRpbmdQYWdlXCIsZS5BcHBHcmlkPVwiYXBwR3JpZFwifShyfHwocj17fSkpfSwxODQ6KGUsdCxhKT0+e1widXNlIHN0cmljdFwiO3ZhciBuOyFmdW5jdGlvbihlKXtlLlByaW1hcnk9XCJwcmltYXJ5XCIsZS5TZWNvbmRhcnk9XCJzZWNvbmRhcnlcIixlLlRleHRPbmx5PVwidGV4dE9ubHlcIn0obnx8KG49e30pKX0sNjc4OihlLHQsYSk9PntcInVzZSBzdHJpY3RcIjthLmQodCx7Qkc6KCk9PnN9KTt2YXIgbj1hKDk0MCkscj1hKDg2Miksbz1hKDMzMyk7YSg2OTUpO2NvbnN0IGk9YXN5bmMgZT0+KHsuLi5lLGxheW91dERldGFpbHM6e21hY2hpbmVJZDphd2FpdCgwLHIuRDEpKCksbWFjaGluZU5hbWU6KDAsci5mQykoKX19KSxzPWFzeW5jIGU9Pntjb25zdCB0PWF3YWl0KGFzeW5jKGUsdCk9Pih7cGFnZUlkOigwLG8uTikoKSx0aXRsZTplLGxheW91dDphd2FpdCBpKHQpLGlzUmVhZE9ubHk6ITF9KSkoZS50aXRsZSwoMCxuLnhQKShlLmxheW91dCkpO3JldHVybiBlLnBhbmVscyYmKHQucGFuZWxzPWUucGFuZWxzLm1hcCgoZT0+KHsuLi5lLHZpZXdPcHRpb25zOigwLG4uZmgpKGUudmlld09wdGlvbnMpfSkpKSksey4uLmUsLi4udH19fSwyNTA6KGUsdCxhKT0+e1widXNlIHN0cmljdFwiO3ZhciBuOyFmdW5jdGlvbihlKXtlLkxlZnQ9XCJMZWZ0XCIsZS5SaWdodD1cIlJpZ2h0XCIsZS5Ub3A9XCJUb3BcIixlLkJvdHRvbT1cIkJvdHRvbVwifShufHwobj17fSkpfSwzMjY6KGUsdCxhKT0+e1widXNlIHN0cmljdFwiO2EuZCh0LHtIYzooKT0+ZCxhUTooKT0+aCxwNDooKT0+aX0pO3ZhciBuPWEoMTAyKTthKDcwKTtjb25zdCByPShlLHQpPT50P2Ake3R9LSR7ZS51dWlkfS0ke2UubmFtZX1gOmBfX2Jyb3dzZXJfd2luZG93X18tJHtlLnV1aWR9LSR7ZS5uYW1lfWAsbz1uZXcgTWFwLGk9KGUsdCk9Pntjb25zdCBhPXIoZSx0KTtyZXR1cm4gaT1hLG8uaGFzKGkpfHxvLnNldChpLCgwLG4uQSkoaSkpLG8uZ2V0KGkpKCk7dmFyIGl9O3ZhciBzLGMsbCxkLHU7IWZ1bmN0aW9uKGUpe2UuQ2xvc2VCcm93c2VyV2luZG93PVwiY2xvc2UtYnJvd3Nlci13aW5kb3dcIixlLlF1aXRQbGF0Zm9ybT1cInF1aXQtcGxhdGZvcm1cIixlLkNsb3NlUGFnZT1cImNsb3NlLXBhZ2VcIixlLkFkZFRvQ2hhbm5lbD1cImFkZC10by1jaGFubmVsXCIsZS5SZW1vdmVGcm9tQ2hhbm5lbD1cInJlbW92ZS1mcm9tLWNoYW5uZWxcIixlLk9wZW5TYXZlTW9kYWxJbnRlcm5hbD1cIm9wZW4tc2F2ZS1tb2RhbC1pbnRlcm5hbFwiLGUuRHVwbGljYXRlUGFnZT1cImR1cGxpY2F0ZS1wYWdlXCIsZS5TZXRTZWxlY3RlZFNjaGVtZT1cInNldC1zZWxlY3RlZC1zY2hlbWVcIixlLlNob3dCcm93c2VySW5kaWNhdG9yPVwic2hvdy1icm93c2VyLWluZGljYXRvclwiLGUuU2V0U2VsZWN0ZWRMYW5ndWFnZT1cInNldC1zZWxlY3RlZC1sYW5ndWFnZVwiLGUuUmVmcmVzaEJvb2ttYXJrc0ludGVybmFsPVwicmVmcmVzaC1ib29rbWFya3NcIixlLkdldExheW91dHNXaXRoU2VsZWN0ZWRWaWV3c0ludGVybmFsPVwiZ2V0LWxheW91dHMtd2l0aC1zZWxlY3RlZC12aWV3c1wifShzfHwocz17fSkpLGZ1bmN0aW9uKGUpe2UuR2V0UGFnZXM9XCJnZXQtcGFnZXNcIixlLkdldEFjdGl2ZVBhZ2VGb3JXaW5kb3c9XCJnZXQtYWN0aXZlLXBhZ2UtZm9yLXdpbmRvd1wiLGUuQXR0YWNoUGFnZXNUb1dpbmRvdz1cImF0dGFjaC1wYWdlcy10by13aW5kb3dcIixlLkRldGFjaFBhZ2VzRnJvbVdpbmRvdz1cImRldGFjaC1wYWdlcy1mcm9tLXdpbmRvd1wiLGUuU2V0QWN0aXZlUGFnZUZvcldpbmRvdz1cInNldC1hY3RpdmUtcGFnZS1mb3Itd2luZG93XCIsZS5SZW5hbWVQYWdlPVwicmVuYW1lLXBhZ2VcIixlLlJlb3JkZXJQYWdlc0ZvcldpbmRvdz1cInJlb3JkZXItcGFnZXMtZm9yLXdpbmRvd1wiLGUuVXBkYXRlUGFnZUZvcldpbmRvdz1cInVwZGF0ZS1wYWdlLWZvci13aW5kb3dcIixlLlVwZGF0ZVBhZ2VzV2luZG93T3B0aW9ucz1cInVwZGF0ZS1wYWdlcy13aW5kb3ctb3B0aW9uc1wiLGUuSXNEZXRhY2hpbmdQYWdlcz1cImlzLWRldGFjaGluZy1wYWdlc1wiLGUuSXNBY3RpdmVQYWdlQ2hhbmdpbmc9XCJpcy1hY3RpdmUtcGFnZS1jaGFuZ2luZ1wifShjfHwoYz17fSkpLGZ1bmN0aW9uKGUpe2UuR2V0QXBwcz1cImdldC1hcHBzXCIsZS5HZXRDdXJhdGVkQ29udGVudD1cImdldC1jdXJhdGVkLWNvbnRlbnRcIixlLkdldFJlY2VudGx5VmlzaXRlZD1cImdldC1yZWNlbnRseS12aXNpdGVkXCIsZS5HZXRTZWFyY2hQcm92aWRlcnM9XCJnZXQtc2VhcmNoLXByb3ZpZGVyc1wifShsfHwobD17fSkpLGZ1bmN0aW9uKGUpe2UuQ3JlYXRlQm9va21hcmtOb2RlPVwiY3JlYXRlLWJvb2ttYXJrLW5vZGVcIixlLkdldEJvb2ttYXJrTm9kZT1cImdldC1ib29rbWFyay1ub2RlXCIsZS5TZWFyY2hCb29rbWFya05vZGVzPVwic2VhcmNoLWJvb2ttYXJrLW5vZGVzXCIsZS5VcGRhdGVCb29rbWFya05vZGU9XCJ1cGRhdGUtYm9va21hcmstbm9kZVwiLGUuRGVsZXRlQm9va21hcmtOb2RlPVwiZGVsZXRlLWJvb2ttYXJrLW5vZGVcIn0oZHx8KGQ9e30pKSxmdW5jdGlvbihlKXtlLlVwZGF0ZUZhdm9yaXRlRW50cmllcz1cInVwZGF0ZS1mYXZvcml0ZS1lbnRyaWVzXCIsZS5VcGRhdGVDb250ZW50TWVudT1cInVwZGF0ZS1jb250ZW50LW1lbnVcIixlLk5hdmlnYXRlQ29udGVudE1lbnU9XCJuYXZpZ2F0ZS1jb250ZW50LW1lbnVcIn0odXx8KHU9e30pKTtjb25zdCBoPXsuLi5zLC4uLmMsLi4udX19LDc5OihlLHQsYSk9PntcInVzZSBzdHJpY3RcIjt2YXIgbjthLmQodCx7S1o6KCk9Pm8sTjooKT0+aSxPRjooKT0+bixiVzooKT0+c30pLGZ1bmN0aW9uKGUpe2UuTGF1bmNoQXBwPVwibGF1bmNoQXBwXCIsZS5TYXZlUGFnZT1cInNhdmVQYWdlXCIsZS5HZXRTYXZlZFBhZ2U9XCJnZXRTYXZlZFBhZ2VcIixlLkNyZWF0ZVNhdmVkUGFnZT1cImNyZWF0ZVNhdmVkUGFnZVwiLGUuVXBkYXRlU2F2ZWRQYWdlPVwidXBkYXRlU2F2ZWRQYWdlXCIsZS5EZWxldGVTYXZlZFBhZ2U9XCJkZWxldGVTYXZlZFBhZ2VcIixlLkdldFNhdmVkUGFnZXM9XCJnZXRTYXZlZFBhZ2VzXCIsZS5DcmVhdGVTYXZlZFBhZ2VJbnRlcm5hbD1cImNyZWF0ZVNhdmVkUGFnZUludGVybmFsXCIsZS5VcGRhdGVTYXZlZFBhZ2VJbnRlcm5hbD1cInVwZGF0ZVNhdmVkUGFnZUludGVybmFsXCIsZS5EZWxldGVTYXZlZFBhZ2VJbnRlcm5hbD1cImRlbGV0ZVNhdmVkUGFnZUludGVybmFsXCIsZS5VcGRhdGVQYWdlRm9yV2luZG93PVwidXBkYXRlUGFnZUZvcldpbmRvd1wiLGUuQXR0YWNoUGFnZXNUb1dpbmRvdz1cImF0dGFjaFBhZ2VzVG9XaW5kb3dcIixlLkRldGFjaFBhZ2VzRnJvbVdpbmRvdz1cImRldGFjaFBhZ2VzRnJvbVdpbmRvd1wiLGUuUmVvcmRlclBhZ2VzRm9yV2luZG93PVwicmVvcmRlclBhZ2VzRm9yV2luZG93XCIsZS5TZXRBY3RpdmVQYWdlPVwic2V0QWN0aXZlUGFnZVwiLGUuQWRkUGFnZT1cImFkZFBhZ2VcIixlLkFkZERlZmF1bHRQYWdlPVwiYWRkRGVmYXVsdFBhZ2VcIixlLkdldEFsbEF0dGFjaGVkUGFnZXM9XCJnZXRBbGxBdHRhY2hlZFBhZ2VzXCIsZS5HZXRBY3RpdmVQYWdlSWRGb3JXaW5kb3c9XCJnZXRBY3RpdmVQYWdlSWRGb3JXaW5kb3dcIixlLkdldFBhZ2VzRm9yV2luZG93PVwiZ2V0UGFnZXNGb3JXaW5kb3dcIixlLkdldFBhZ2VGb3JXaW5kb3c9XCJnZXRQYWdlRm9yV2luZG93XCIsZS5HZXRTYXZlZFBhZ2VNZXRhZGF0YT1cImdldFNhdmVkUGFnZU1ldGFkYXRhXCIsZS5HZXRVbmlxdWVQYWdlVGl0bGU9XCJnZXRVbmlxdWVQYWdlVGl0bGVcIixlLkdldExhc3RGb2N1c2VkQnJvd3NlcldpbmRvdz1cImdldExhc3RGb2N1c2VkQnJvd3NlcldpbmRvd1wiLGUuR2V0VGhlbWVzPVwiZ2V0VGhlbWVzXCIsZS5HZXRTZWxlY3RlZFNjaGVtZT1cImdldFNlbGVjdGVkU2NoZW1lXCIsZS5TZXRTZWxlY3RlZFNjaGVtZT1cInNldFNlbGVjdGVkU2NoZW1lXCIsZS5PcGVuR2xvYmFsQ29udGV4dE1lbnVJbnRlcm5hbD1cIm9wZW5HbG9iYWxDb250ZXh0TWVudUludGVybmFsXCIsZS5PcGVuVmlld1RhYkNvbnRleHRNZW51SW50ZXJuYWw9XCJvcGVuVmlld1RhYkNvbnRleHRNZW51SW50ZXJuYWxcIixlLk9wZW5QYWdlVGFiQ29udGV4dE1lbnVJbnRlcm5hbD1cIm9wZW5QYWdlVGFiQ29udGV4dE1lbnVJbnRlcm5hbFwiLGUuT3BlblNhdmVCdXR0b25Db250ZXh0TWVudUludGVybmFsPVwib3BlblNhdmVCdXR0b25Db250ZXh0TWVudUludGVybmFsXCIsZS5JbnZva2VDdXN0b21BY3Rpb25JbnRlcm5hbD1cImludm9rZUN1c3RvbUFjdGlvbkludGVybmFsXCIsZS5SZXF1ZXN0UXVpdFBsYXRmb3JtRGlhbG9nSW50ZXJuYWw9XCJyZXF1ZXN0UXVpdFBsYXRmb3JtRGlhbG9nSW50ZXJuYWxcIixlLkdldFNhdmVkV29ya3NwYWNlPVwiZ2V0U2F2ZWRXb3Jrc3BhY2VcIixlLkNyZWF0ZVNhdmVkV29ya3NwYWNlPVwiY3JlYXRlU2F2ZWRXb3Jrc3BhY2VcIixlLlVwZGF0ZVNhdmVkV29ya3NwYWNlPVwidXBkYXRlU2F2ZWRXb3Jrc3BhY2VcIixlLkRlbGV0ZVNhdmVkV29ya3NwYWNlPVwiZGVsZXRlU2F2ZWRXb3Jrc3BhY2VcIixlLkdldFNhdmVkV29ya3NwYWNlcz1cImdldFNhdmVkV29ya3NwYWNlc1wiLGUuU2F2ZVdvcmtzcGFjZT1cInNhdmVXb3Jrc3BhY2VcIixlLkdldEN1cnJlbnRXb3Jrc3BhY2U9XCJnZXRDdXJyZW50V29ya3NwYWNlXCIsZS5BcHBseVdvcmtzcGFjZT1cImFwcGx5V29ya3NwYWNlXCIsZS5TZXRBY3RpdmVXb3Jrc3BhY2U9XCJzZXRBY3RpdmVXb3Jrc3BhY2VcIixlLklzQnJvd3NlckluaXRpYWxpemVkPVwiaXNCcm93c2VySW5pdGlhbGl6ZWRcIixlLkFuYWx5dGljcz1cImFuYWx5dGljc0ludGVybmFsXCIsZS5HZXRMYW5ndWFnZT1cImdldExhbmd1YWdlXCIsZS5HZXRMYW5ndWFnZVJlc291cmNlc0ludGVybmFsPVwiZ2V0TGFuZ3VhZ2VSZXNvdXJjZXNJbnRlcm5hbFwiLGUuU2V0TGFuZ3VhZ2U9XCJzZXRMYW5ndWFnZVwiLGUuR2V0RG9ja1Byb3ZpZGVyQ29uZmlnPVwiZ2V0RG9ja1Byb3ZpZGVyQ29uZmlnXCIsZS5TYXZlRG9ja1Byb3ZpZGVyQ29uZmlnPVwic2F2ZURvY2tQcm92aWRlckNvbmZpZ1wiLGUuSGFuZGxlU2F2ZU1vZGFsT25QYWdlQ2xvc2U9XCJoYW5kbGVTYXZlTW9kYWxPblBhZ2VDbG9zZVwiLGUuU2hvdWxkUGFnZUNsb3NlPVwic2hvdWxkUGFnZUNsb3NlXCIsZS5TaG91bGRXaW5kb3dDbG9zZT1cInNob3VsZFdpbmRvd0Nsb3NlXCIsZS5Db3B5UGFnZT1cImNvcHlQYWdlXCIsZS5IYW5kbGVQYWdlQ2hhbmdlcz1cImhhbmRsZVBhZ2VDaGFuZ2VzXCIsZS5NYXJrVW5zYXZlZFBhZ2VzQXNTYXZlZEludGVybmFsPVwibWFya1Vuc2F2ZWRQYWdlc0FzU2F2ZWRJbnRlcm5hbFwiLGUuVHJhY2tSZW1vdmVkVGFiSW50ZXJuYWw9XCJ0cmFja1JlbW92ZWRUYWJJbnRlcm5hbFwiLGUuUmVzdG9yZVJlbW92ZWRUYWJJbnRlcm5hbD1cInJlc3RvcmVSZW1vdmVkVGFiSW50ZXJuYWxcIixlLlRyYWNrVmlzaXRlZFNpdGVJbnRlcm5hbD1cInRyYWNrVmlzaXRlZFNpdGVJbnRlcm5hbFwiLGUuR2V0UmVjZW50bHlWaXNpdGVkU2l0ZXNJbnRlcm5hbD1cImdldFJlY2VudGx5VmlzaXRlZFNpdGVzSW50ZXJuYWxcIixlLkdldEZyZXF1ZW50bHlWaXNpdGVkU2l0ZXNJbnRlcm5hbD1cImdldEZyZXF1ZW50bHlWaXNpdGVkU2l0ZXNJbnRlcm5hbFwiLGUuU2VhcmNoU2l0ZXNJbnRlcm5hbD1cInNlYXJjaFNpdGVzSW50ZXJuYWxcIixlLkdldFNlYXJjaFByb3ZpZGVyc0ludGVybmFsPVwiZ2V0U2VhcmNoUHJvdmlkZXJzSW50ZXJuYWxcIixlLkdldEN1cmF0ZWRDb250ZW50SW50ZXJuYWw9XCJnZXRDdXJhdGVkQ29udGVudEludGVybmFsXCIsZS5IYW5kbGVSZXF1ZXN0TmF2aWdhdGlvbkludGVybmFsPVwiaGFuZGxlUmVxdWVzdE5hdmlnYXRpb25JbnRlcm5hbFwiLGUuUmVmcmVzaEJvb2ttYXJrc0ludGVybmFsPVwicmVmcmVzaEJvb2ttYXJrc0ludGVybmFsXCIsZS5MYXVuY2hCb29rbWFya0ludGVybmFsPVwibGF1bmNoQm9va21hcmtJbnRlcm5hbFwiLGUuR2V0Tm90aWZpY2F0aW9uc0NvbmZpZz1cImdldE5vdGlmaWNhdGlvbnNDb25maWdcIixlLlVwZGF0ZURvY2tGYXZvcml0ZXNJbnRlcm5hbD1cInVwZGF0ZURvY2tGYXZvcml0ZXNJbnRlcm5hbFwiLGUuVXBkYXRlQ29udGVudE1lbnVJbnRlcm5hbD1cInVwZGF0ZUNvbnRlbnRNZW51SW50ZXJuYWxcIixlLkxhdW5jaERvY2tFbnRyeUludGVybmFsPVwibGF1bmNoRG9ja0VudHJ5SW50ZXJuYWxcIixlLlNldERvY2tGYXZvcml0ZXNPcmRlckludGVybmFsPVwic2V0RG9ja0Zhdm9yaXRlc09yZGVySW50ZXJuYWxcIixlLk5hdmlnYXRlQ29udGVudE1lbnVJbnRlcm5hbD1cIm5hdmlnYXRlQ29udGVudE1lbnVJbnRlcm5hbFwiLGUuU2V0RG9ja1dvcmtzcGFjZUJ1dHRvbnNPcmRlckludGVybmFsPVwic2V0RG9ja1dvcmtzcGFjZUJ1dHRvbnNPcmRlckludGVybmFsXCIsZS5HZXREb2NrV29ya3NwYWNlc0NvbnRleHRNZW51SW50ZXJuYWw9XCJnZXREb2NrV29ya3NwYWNlc0NvbnRleHRNZW51SW50ZXJuYWxcIixlLkhhbmRsZURvY2tXb3Jrc3BhY2VzTWVudVJlc3BvbnNlSW50ZXJuYWw9XCJoYW5kbGVEb2NrV29ya3NwYWNlc01lbnVSZXNwb25zZUludGVybmFsXCIsZS5SZW1vdmVEb2NrRmF2b3JpdGVJbnRlcm5hbD1cInJlbW92ZURvY2tGYXZvcml0ZUludGVybmFsXCIsZS5BZGREb2NrRmF2b3JpdGVJbnRlcm5hbD1cImFkZERvY2tGYXZvcml0ZUludGVybmFsXCJ9KG58fChuPXt9KSk7Y29uc3Qgcj1hc3luYyBlPT5maW4uUGxhdGZvcm0ud3JhcFN5bmMoZSkuZ2V0Q2xpZW50KCksbz1hc3luYyBlPT57Y29uc3QgdD1hd2FpdCByKGUpLGE9XCJUYXJnZXQgaXMgbm90IGEgV29ya3NwYWNlIFBsYXRmb3JtLiBUYXJnZXQgbXVzdCBjYWxsIFdvcmtzcGFjZVBsYXRmb3JtLmluaXRcIjtsZXQgbjt0cnl7bj1hd2FpdCB0LmRpc3BhdGNoKFwiaXNXb3Jrc3BhY2VQbGF0Zm9ybVwiKX1jYXRjaChlKXt0aHJvdyBuZXcgRXJyb3IoYSl9aWYoXCJib29sZWFuXCI9PXR5cGVvZiBuJiZuKXJldHVybiBjb25zb2xlLndhcm4oXCJZb3UgYXJlIHVzaW5nIGFuIG9sZGVyIHZlcnNpb24gb2YgdGhlIHdvcmtzcGFjZSBwbGF0Zm9ybS4gUGxlYXNlIHVwZGF0ZSB5b3VyIHdvcmtzcGFjZSBwbGF0Zm9ybS5cIiksbjtpZihcIm9iamVjdFwiPT10eXBlb2YgbiYmbi5pc1dvcmtzcGFjZVBsYXRmb3JtKXJldHVybiBuO3Rocm93IG5ldyBFcnJvcihhKX0saT1hc3luYyBlPT4oYXdhaXQgbyhlKSxyKGUpKSxzPWFzeW5jIGU9Pntjb25zdCB0PWF3YWl0IG8oZSk7aWYoXCJvYmplY3RcIj09dHlwZW9mIHQmJiEwIT09dD8uaXNCcm93c2VySW5pdGlhbGl6ZWQpdGhyb3cgbmV3IEVycm9yKFwiVGFyZ2V0IGlzIG5vdCBhIEJyb3dzZXItZW5hYmxlZCBXb3Jrc3BhY2UgUGxhdGZvcm0uXCIpO3JldHVybiByKGUpfX0sNjk1OihlLHQsYSk9PntcInVzZSBzdHJpY3RcIjt2YXIgbj1hKDEwMikscj0oYSg3MjMpLGEoNzApLGEoOTA1KSk7KDAsbi5BKShcIl9fb2Zfd29ya3NwYWNlX3Byb3RvY29sX19cIiksKDAsbi5BKShyLkJUKX0sOTA1OihlLHQsYSk9PntcInVzZSBzdHJpY3RcIjthLmQodCx7QlQ6KCk9Pm59KTtjb25zdCBuPVwiX19zZWFyY2gtb3BlbmZpbi1icm93c2VyLWhvbWUtdG9waWNfX1wiO3ZhciByLG87IWZ1bmN0aW9uKGUpe2UuRmV0Y2hpbmc9XCJmZXRjaGluZ1wiLGUuRmV0Y2hlZD1cImZldGNoZWRcIixlLkNvbXBsZXRlPVwiY29tcGxldGVcIn0ocnx8KHI9e30pKSxmdW5jdGlvbihlKXtlW2UuSW5pdGlhbD0wXT1cIkluaXRpYWxcIixlW2UuT3Blbj0xXT1cIk9wZW5cIixlW2UuQ2xvc2U9Ml09XCJDbG9zZVwifShvfHwobz17fSkpfSwyNTc6KGUsdCxhKT0+e1widXNlIHN0cmljdFwiO2EuZCh0LHtGOigpPT5yfSk7dmFyIG49YSgzNjUpO2NvbnN0IHI9ZT0+e2NvbnN0IHQ9ZmluLlBsYXRmb3JtLkxheW91dC53cmFwU3luYyhlKTtyZXR1cm57c2hvdzphc3luYygpPT57Y29uc3QgYT1hd2FpdCB0LmdldENvbmZpZygpLHtzZXR0aW5nczpyLGRpbWVuc2lvbnM6b309YSxpPWF3YWl0KDAsbi5BZSkoZSk7YXdhaXQgdC5yZXBsYWNlKHsuLi5hLHNldHRpbmdzOnsuLi5yLGhhc0hlYWRlcnM6ITAscmVvcmRlckVuYWJsZWQ6ITB9LGRpbWVuc2lvbnM6ey4uLm8saGVhZGVySGVpZ2h0Omk/Mjg6MzB9fSl9LGhpZGU6YXN5bmMgZT0+e2NvbnN0IGE9YXdhaXQgdC5nZXRDb25maWcoKSx7c2V0dGluZ3M6bixkaW1lbnNpb25zOnJ9PWF3YWl0IGE7YXdhaXQgdC5yZXBsYWNlKHsuLi5hLHNldHRpbmdzOnsuLi5uLGhhc0hlYWRlcnM6ITEscmVvcmRlckVuYWJsZWQ6ZT8uc2V0dGluZ3M/LnJlb3JkZXJFbmFibGVkPz8hMX0sZGltZW5zaW9uczp7Li4ucixoZWFkZXJIZWlnaHQ6MH19KX0saXNTaG93aW5nVGFiczphc3luYygpPT57dHJ5e2NvbnN0IGU9YXdhaXQgdC5nZXRDb25maWcoKSx7c2V0dGluZ3M6YX09YXdhaXQgZTtyZXR1cm4gYS5oYXNIZWFkZXJzfWNhdGNoKGUpe3JldHVybiBjb25zb2xlLmVycm9yKFwiZmFpbGVkIHRvIGdldCBsYXlvdXQgY29uZmlnOiBcIixlKSwhMH19fX19LDk1NzooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7YS5kKHQse3FxOigpPT5rfSk7dmFyIG49YSg4NDcpLHI9YSg4OTgpLG89YSg3MCksaT1hKDEzKSxzPShhKDY3NSksYSg4NzcpKSxjPWEubihzKSxsPWEoNjcpLGQ9YS5uKGwpO2NvbnN0IHU9e2xpZ2h0OntzeW1ib2w6ZCgpPy5zcmN8fFwiXCJ9LGRhcms6e3N5bWJvbDpjKCk/LnNyY3x8XCJcIn19O2EoNjk1KSxhKDc5KTtjb25zdCBoPVwiZGFya1wiLGc9e1tuLlBhbGV0dGUuYnJhbmRQcmltYXJ5XTpcIiMwQTc2RDNcIixbbi5QYWxldHRlLnN0YXR1c1N1Y2Nlc3NdOm4uQ29sb3IuZnVuY3Rpb25hbDEsW24uUGFsZXR0ZS5zdGF0dXNXYXJuaW5nXTpuLkNvbG9yLmZ1bmN0aW9uYWwxMCxbbi5QYWxldHRlLnN0YXR1c0NyaXRpY2FsXTpuLkNvbG9yLmZ1bmN0aW9uYWw3LFtuLlBhbGV0dGUuc3RhdHVzQWN0aXZlXTpuLkNvbG9yLmZ1bmN0aW9uYWwzLFtuLlBhbGV0dGUuY29udGVudEJhY2tncm91bmQxXTpcIiMwQTc2RDNcIixbbi5QYWxldHRlLmNvbnRlbnRCYWNrZ3JvdW5kMl06XCIjMDAwMDAwXCIsW24uUGFsZXR0ZS5jb250ZW50QmFja2dyb3VuZDNdOlwiIzAwMDAwMFwiLFtuLlBhbGV0dGUuY29udGVudEJhY2tncm91bmQ0XTpcIiMwMDAwMDBcIixbbi5QYWxldHRlLmNvbnRlbnRCYWNrZ3JvdW5kNV06XCIjMDAwMDAwXCJ9LHA9ey4uLmcsW24uUGFsZXR0ZS5iYWNrZ3JvdW5kMV06bi5Db2xvci53aGl0ZSxbbi5QYWxldHRlLmJhY2tncm91bmQyXTpuLkNvbG9yLmxpZ2h0R3JheTEsW24uUGFsZXR0ZS5iYWNrZ3JvdW5kM106bi5Db2xvci5saWdodEdyYXkyLFtuLlBhbGV0dGUuYmFja2dyb3VuZDRdOm4uQ29sb3IubGlnaHRHcmF5Myxbbi5QYWxldHRlLmJhY2tncm91bmQ1XTpuLkNvbG9yLmxpZ2h0R3JheTQsW24uUGFsZXR0ZS5iYWNrZ3JvdW5kNl06bi5Db2xvci5saWdodEdyYXk1LFtuLlBhbGV0dGUuYnJhbmRTZWNvbmRhcnldOm4uQ29sb3IubGlnaHRHcmF5NCxbbi5QYWxldHRlLmlucHV0QmFja2dyb3VuZF06bi5Db2xvci5saWdodEdyYXkzLFtuLlBhbGV0dGUuaW5wdXRDb2xvcl06bi5Db2xvci5kYXJrR3JheTUsW24uUGFsZXR0ZS5pbnB1dFBsYWNlaG9sZGVyXTpuLkNvbG9yLmRhcmtHcmF5Mixbbi5QYWxldHRlLmlucHV0RGlzYWJsZWRdOm4uQ29sb3IubmV1dHJhbEdyYXksW24uUGFsZXR0ZS5pbnB1dEZvY3VzZWRdOm4uQ29sb3IubGlnaHRHcmF5NSxbbi5QYWxldHRlLmlucHV0Qm9yZGVyXTpuLkNvbG9yLm5ldXRyYWxHcmF5LFtuLlBhbGV0dGUudGV4dERlZmF1bHRdOm4uQ29sb3IuZGFya0dyYXk1LFtuLlBhbGV0dGUudGV4dEhlbHBdOm4uQ29sb3IuZGFya0dyYXkzLFtuLlBhbGV0dGUudGV4dEluYWN0aXZlXTpuLkNvbG9yLm5ldXRyYWxHcmF5fSxmPXsuLi5nLFtuLlBhbGV0dGUuYmFja2dyb3VuZDFdOm4uQ29sb3IuZGFya0dyYXk2LFtuLlBhbGV0dGUuYmFja2dyb3VuZDJdOm4uQ29sb3IuZGFya0dyYXk1LFtuLlBhbGV0dGUuYmFja2dyb3VuZDNdOm4uQ29sb3IuZGFya0dyYXk0LFtuLlBhbGV0dGUuYmFja2dyb3VuZDRdOm4uQ29sb3IuZGFya0dyYXkzLFtuLlBhbGV0dGUuYmFja2dyb3VuZDVdOm4uQ29sb3IuZGFya0dyYXkyLFtuLlBhbGV0dGUuYmFja2dyb3VuZDZdOm4uQ29sb3IuZGFya0dyYXkxLFtuLlBhbGV0dGUuYnJhbmRTZWNvbmRhcnldOm4uQ29sb3IuZGFya0dyYXkyLFtuLlBhbGV0dGUuaW5wdXRCYWNrZ3JvdW5kXTpuLkNvbG9yLmRhcmtHcmF5MSxbbi5QYWxldHRlLmlucHV0Q29sb3JdOm4uQ29sb3Iud2hpdGUsW24uUGFsZXR0ZS5pbnB1dFBsYWNlaG9sZGVyXTpuLkNvbG9yLmxpZ2h0R3JheTUsW24uUGFsZXR0ZS5pbnB1dERpc2FibGVkXTpuLkNvbG9yLm5ldXRyYWxHcmF5LFtuLlBhbGV0dGUuaW5wdXRGb2N1c2VkXTpuLkNvbG9yLmxpZ2h0R3JheTUsW24uUGFsZXR0ZS5pbnB1dEJvcmRlcl06bi5Db2xvci5uZXV0cmFsR3JheSxbbi5QYWxldHRlLnRleHREZWZhdWx0XTpuLkNvbG9yLndoaXRlLFtuLlBhbGV0dGUudGV4dEhlbHBdOm4uQ29sb3IubGlnaHRHcmF5NSxbbi5QYWxldHRlLnRleHRJbmFjdGl2ZV06bi5Db2xvci5uZXV0cmFsR3JheX0sbT1be2xhYmVsOlwiT3BlbkZpbiBEZWZhdWx0IExpZ2h0IGFuZCBEYXJrIFRoZW1lXCIscGFsZXR0ZXM6e2xpZ2h0OnsuLi5wLGJyYW5kUHJpbWFyeTpcIiMwQTc2RDNcIixicmFuZFNlY29uZGFyeTpuLkNvbG9yLmxpZ2h0R3JheTQsYmFja2dyb3VuZFByaW1hcnk6bi5Db2xvci5kYXJrR3JheTV9LGRhcms6ey4uLmYsYnJhbmRQcmltYXJ5OlwiIzBBNzZEM1wiLGJyYW5kU2Vjb25kYXJ5Om4uQ29sb3IuZGFya0dyYXkyLGJhY2tncm91bmRQcmltYXJ5Om4uQ29sb3IuZGFya0dyYXk1fX19XSx3PWU9Pntjb25zdHtiYWNrZ3JvdW5kOnQsZm9yZWdyb3VuZDphfT1lO3JldHVybntiYWNrZ3JvdW5kOnQsZm9yZWdyb3VuZDphPz9cIiNGRkZGRkZcIn19LHk9KGUsdCk9Pih7aWNvbnM6e3N5bWJvbDplLmJyYW5kPy5pY29ucz8uW3RdPy5zeW1ib2x8fHVbdF0uc3ltYm9sfX0pLGI9ZT0+e2NvbnN0e2xpZ2h0OnQsZGFyazphfT1cInBhbGV0dGVzXCJpbiBlP2UucGFsZXR0ZXM6e2xpZ2h0OmUucGFsZXR0ZSxkYXJrOmUucGFsZXR0ZX0sbz0oMCxyLktEKShmLGEpLGk9KDAsci5LRCkocCx0KSxzPSgoZSx0KT0+e2NvbnN0IGE9ey4uLmV9LG49ey4uLnR9O2xldCBvPXQuYmFja2dyb3VuZFByaW1hcnk/KDAsci5wdSkodC5iYWNrZ3JvdW5kUHJpbWFyeSwhMCk6e30saT1lLmJhY2tncm91bmRQcmltYXJ5PygwLHIucHUpKGUuYmFja2dyb3VuZFByaW1hcnkpOnt9O3JldHVybiBvPXsuLi5vLC4uLm59LGk9ey4uLmksLi4uYX0se2xpZ2h0OnsuLi50LC4uLm99LGRhcms6ey4uLmUsLi4uaX19fSkoYSx0KSxjPXsuLi4oMCxuLmNyZWF0ZVRoZW1lKSh7Li4ubywuLi5zPy5kYXJrfSksYnJhbmQ6eShlLFwiZGFya1wiKX0sbD17Li4uKDAsbi5jcmVhdGVUaGVtZSkoey4uLmksLi4ucz8ubGlnaHR9KSxicmFuZDp5KGUsXCJsaWdodFwiKX0se2xpZ2h0OmQsZGFyazp1fT0oZT0+e2NvbnN0IHQ9T2JqZWN0LmtleXMoZS5ub3RpZmljYXRpb25JbmRpY2F0b3JDb2xvcnM/P3t9KTtpZih0Py5sZW5ndGgpe2NvbnN0IGE9e30sbj17fTtyZXR1cm4gdC5mb3JFYWNoKCh0PT57Y29uc3Qgcj1lLm5vdGlmaWNhdGlvbkluZGljYXRvckNvbG9yc1t0XTtcImJhY2tncm91bmRcImluIHI/KGFbdF09dyhyKSxuW3RdPXcocikpOihhW3RdPXcoci5kYXJrPz9yLmxpZ2h0KSxuW3RdPXcoci5saWdodD8/ci5kYXJrKSl9KSkse2xpZ2h0Om4sZGFyazphfX1yZXR1cm57bGlnaHQ6bnVsbCxkYXJrOm51bGx9fSkoZSk7cmV0dXJuIGMubm90aWZpY2F0aW9uSW5kaWNhdG9yQ29sb3JzPXUsbC5ub3RpZmljYXRpb25JbmRpY2F0b3JDb2xvcnM9ZCx7ZGFyazpjLGxpZ2h0Omx9fSxrPWFzeW5jIGU9Pntjb25zdHt0aGVtZXM6dCxzZWxlY3RlZFNjaGVtZTphfT1hd2FpdChhc3luYyBlPT57Y29uc3QgdD1maW4/Ll9faW50ZXJuYWxfPy5pbml0aWFsT3B0aW9ucz8ud29ya3NwYWNlUGxhdGZvcm0/Ll90aGVtZURhdGE7aWYoIXR8fGUudXVpZCE9PW8uJHAudXVpZClyZXR1cm57dGhlbWVzOmF3YWl0KDAsaS5BZykoZSkuVGhlbWUuZ2V0VGhlbWVzKCksc2VsZWN0ZWRTY2hlbWU6YXdhaXQoMCxpLkFnKShlKS5UaGVtZS5nZXRTZWxlY3RlZFNjaGVtZSgpfTtyZXR1cm4gdH0pKGUpO3ZhciBuLHI7cmV0dXJuKG49dD8ubGVuZ3RoP3Q6bSxyPWEsbi5tYXAoKGU9Pntjb25zdCB0PVwicGFsZXR0ZXNcImluIGU/ZS5kZWZhdWx0Omgse2xpZ2h0OmEsZGFyazpufT1iKGUpO3JldHVybntsYWJlbDplLmxhYmVsLGxvZ29Vcmw6ZS5sb2dvVXJsLHRoZW1lOntkYXJrOm4sbGlnaHQ6YX0sZGVmYXVsdFNjaGVtZTpyPz90fX0pKSlbMF19fSw0Mzg6KGUsdCxhKT0+e1widXNlIHN0cmljdFwiO2EuZCh0LHtNVzooKT0+bix2MTooKT0+Y30pO3ZhciBuLHIsbz1hKDcyMyk7IWZ1bmN0aW9uKGUpe2UuV29ya3NwYWNlPVwib3BlbmZpbi13b3Jrc3BhY2VcIixlLk9sZFdvcmtzcGFjZT1cIm9wZW5maW4tYnJvd3NlclwifShufHwobj17fSkpLGZ1bmN0aW9uKGUpe2UuRmluUHJvdG9jb2w9XCJmaW4tcHJvdG9jb2xcIn0ocnx8KHI9e30pKTtjb25zdCBpPXt1dWlkOm8uJGh9LHM9KG4uV29ya3NwYWNlLGU9PntpZighby5jSSl0aHJvdyBuZXcgRXJyb3IoXCJnZXRBcHBsaWNhdGlvbiBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbiBPcGVuRmluIGVudi4gQXZvaWQgdXNpbmcgdGhpcyBkdXJpbmcgcHJlLXJlbmRlcmluZy5cIik7cmV0dXJuIGZpbi5BcHBsaWNhdGlvbi53cmFwU3luYyhlKX0pLGM9KCk9PnMoaSl9LDEwMjooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7YS5kKHQse0E6KCk9Pm99KTt2YXIgbj1hKDcyMyk7Y29uc3Qgcj1uLllZJiZcImNvbXBsZXRlXCIhPT1kb2N1bWVudC5yZWFkeVN0YXRlJiZuZXcgUHJvbWlzZSgoZT0+ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwoKCk9PntcImNvbXBsZXRlXCI9PT1kb2N1bWVudC5yZWFkeVN0YXRlJiZlKCl9KSkpKTtmdW5jdGlvbiBvKGUpe2xldCB0O2NvbnN0IGE9bmV3IFNldDtyZXR1cm4oKT0+e2lmKCFuLmNJKXRocm93IG5ldyBFcnJvcihcImdldENoYW5uZWxDbGllbnQgY2Fubm90IGJlIHVzZWQgb3V0c2lkZSBhbiBPcGVuRmluIGVudi4gQXZvaWQgdXNpbmcgdGhpcyBtZXRob2QgZHVyaW5nIHByZS1yZW5kZXJpbmcuXCIpO3JldHVybiB0fHwodD0oYXN5bmMoKT0+e2F3YWl0IHI7Y29uc3Qgbz17Y2xpZW50QVBJVmVyc2lvbjpuLmV0fSxpPWF3YWl0IGZpbi5JbnRlckFwcGxpY2F0aW9uQnVzLkNoYW5uZWwuY29ubmVjdChlLHtwYXlsb2FkOm99KTtyZXR1cm4gaS5vbkRpc2Nvbm5lY3Rpb24oKGFzeW5jKCk9PnthLmZvckVhY2goKGU9PmUoKSkpLGEuY2xlYXIoKSxjb25zb2xlLndhcm4oYGRpc2Nvbm5lY3RlZCBmcm9tIGNoYW5uZWwgcHJvdmlkZXIgJHtlfWApLHQ9dm9pZCAwfSkpLGl9KSgpLnRoZW4oKGU9PihlLmFkZERpc2Nvbm5lY3Rpb25MaXN0ZW5lcj1lPT57YS5hZGQoZSl9LGUpKSkuY2F0Y2goKGE9Pnt0aHJvdyB0PXZvaWQgMCxuZXcgRXJyb3IoYGZhaWxlZCB0byBjb25uZWN0IHRvIGNoYW5uZWwgcHJvdmlkZXIgJHtlfTogJHthfWApfSkpKSx0fX19LDM2NTooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7YS5kKHQse0FlOigpPT5ufSk7YSgxODEpLGEoNzApO2NvbnN0IG49YXN5bmMgZT0+e2NvbnN0IHQ9ZT9maW4uV2luZG93LndyYXBTeW5jKGUpOmZpbi5XaW5kb3cuZ2V0Q3VycmVudFN5bmMoKSxhPWF3YWl0IHQuZ2V0T3B0aW9ucygpO3JldHVybiBhLndvcmtzcGFjZVBsYXRmb3JtPy53aW5kb3dUeXBlJiZcImVudGVycHJpc2VcIj09PWEud29ya3NwYWNlUGxhdGZvcm0ud2luZG93VHlwZX19LDcyMzooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIG47YS5kKHQseyRoOigpPT5jLEFUOigpPT5pLFlZOigpPT5vLGNJOigpPT5yLGV0OigpPT5oLGZUOigpPT5kLHZMOigpPT5sfSksZnVuY3Rpb24oZSl7ZS5Mb2NhbD1cImxvY2FsXCIsZS5EZXY9XCJkZXZcIixlLlN0YWdpbmc9XCJzdGFnaW5nXCIsZS5Qcm9kPVwicHJvZFwifShufHwobj17fSkpO2NvbnN0IHI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGZpbixvPShcInVuZGVmaW5lZFwiPT10eXBlb2YgcHJvY2Vzc3x8cHJvY2Vzcy5lbnYsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyksaT1vJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgaW5kZXhlZERCLHM9bz93aW5kb3cub3JpZ2luOm4uTG9jYWwsYz1yJiZmaW4ubWUudXVpZCxsPXImJmZpbi5tZS5uYW1lLGQ9ciYmZmluLm1lLmVudGl0eVR5cGUsdT0obi5Mb2NhbCxuLkRldixuLlN0YWdpbmcsbi5Qcm9kLGU9PmUuc3RhcnRzV2l0aChcImh0dHA6Ly9cIil8fGUuc3RhcnRzV2l0aChcImh0dHBzOi8vXCIpP2U6cytlKSxoPSh1KFwiaHR0cHM6Ly93b3Jrc3BhY2Uub3BlbmZpbi5jby93b3Jrc3BhY2UvMjAuNC4wXCIpLHUoXCJodHRwczovL3dvcmtzcGFjZS5vcGVuZmluLmNvL3dvcmtzcGFjZS8yMC40LjBcIiksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFdPUktTUEFDRV9ET0NTX1BMQVRGT1JNX1VSTCYmdShXT1JLU1BBQ0VfRE9DU19QTEFURk9STV9VUkwpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBXT1JLU1BBQ0VfRE9DU19DTElFTlRfVVJMJiZ1KFdPUktTUEFDRV9ET0NTX0NMSUVOVF9VUkwpLFwiMjAuNC4wXCIpO1widW5kZWZpbmVkXCIhPXR5cGVvZiBXT1JLU1BBQ0VfQlVJTERfU0hBJiZXT1JLU1BBQ0VfQlVJTERfU0hBfSw5NDA6KGUsdCxhKT0+e1widXNlIHN0cmljdFwiO2EuZCh0LHtmaDooKT0+ZCx4UDooKT0+dX0pO3ZhciBuPWEoMjM2KSxyPWEubihuKSxvPShhKDM2NSksYSg3MjMpLGEoNzApKSxpPWEoNjc4KSxzPWEoMjU3KSxjPWEoMzY3KTthKDQxMyk7Y29uc3QgbD0oZSx0KT0+ZS5jb250ZW50P3suLi5lLGNvbnRlbnQ6ZS5jb250ZW50Lm1hcCgoZT0+bChlLHQpKSl9OnsuLi5lLGNvbXBvbmVudFN0YXRlOnQoZS5jb21wb25lbnRTdGF0ZSl9LGQ9ZT0+KHsuLi5lLG5hbWU6dm9pZCAwfSksdT1lPT57Y29uc3QgdD17Li4uZX07cmV0dXJuIGwodCxkKX0saD1lPT57Y29uc3QgdD1bXTtyZXR1cm4oZSYmQXJyYXkuaXNBcnJheShlKT9lOltdKS5mb3JFYWNoKChlPT57aWYoXCJjb21wb25lbnRcIj09PWUudHlwZSlyZXR1cm4gdC5wdXNoKGUuY29tcG9uZW50U3RhdGUpO2NvbnN0IGE9aChlLmNvbnRlbnQpO3QucHVzaCguLi5hKX0pKSx0fTtuZXcgTWFwLG5ldyBNYXA7cigpKChhc3luYyBlPT57dHJ5e2NvbnN0IHQ9YXdhaXQoYXN5bmMgZT0+ZmluLlBsYXRmb3JtLkxheW91dC53cmFwU3luYyh7Li4uZmluLm1lLmlkZW50aXR5LGxheW91dE5hbWU6ZX0pLmdldENvbmZpZygpKShlLmxheW91dENvbnRhaW5lcktleSksYT10LmNvbnRlbnQ/aCh0LmNvbnRlbnQpOltdLG49YS5sZW5ndGg7bj4xPyhlPT57XCJtdWx0aVZpZXdcIiE9PWUuYXR0YWNoZWRQYWdlVHlwZSYmKDAsYy5OKSgpLkJyb3dzZXIud3JhcFN5bmMoby4kcCkudXBkYXRlUGFnZSh7cGFnZUlkOmUucGFnZUlkLHBhZ2U6e3NpbmdsZVZpZXdOYW1lOm51bGwsYXR0YWNoZWRQYWdlVHlwZTpcIm11bHRpVmlld1wifX0pfSkoZSk6MT09PW4mJihhc3luYyhlLHQpPT57Y29uc3QgYT0oMCxjLk4pKCkuQnJvd3Nlci53cmFwU3luYyhvLiRwKTtpZihcInNpbmdsZVZpZXdcIiE9PWUuYXR0YWNoZWRQYWdlVHlwZSl7Y29uc3Qgbj1hd2FpdCgwLGkuQkcpKGUpLHI9YXdhaXQoMCxjLk4pKCkuQnJvd3Nlci5nZXRVbmlxdWVQYWdlVGl0bGUoKTtkZWxldGUgbi5sYXlvdXQ7Y29uc3Qgbz17Li4ubixzaW5nbGVWaWV3TmFtZTp0LHRpdGxlOnIsaGFzVW5zYXZlZENoYW5nZXM6ITEsYXR0YWNoZWRQYWdlVHlwZTpcInNpbmdsZVZpZXdcIn07YXdhaXQgYS51cGRhdGVQYWdlKHtwYWdlSWQ6ZS5wYWdlSWQscGFnZTpvfSl9fSkoZSxhWzBdLm5hbWUpLGF3YWl0KGFzeW5jKGUsdCk9Pntjb25zdCBhPSgwLHMuRikoey4uLm8uJHAsbGF5b3V0TmFtZTplLmxheW91dENvbnRhaW5lcktleX0pLG49YXdhaXQgYS5pc1Nob3dpbmdUYWJzKCk7dD4xP258fGF3YWl0IGEuc2hvdygpOjE9PT10JiZuJiZhd2FpdCBhLmhpZGUoe3NldHRpbmdzOntyZW9yZGVyRW5hYmxlZDohMH19KX0pKGUsbil9Y2F0Y2goZSl7fX0pLDUwLHtsZWFkaW5nOiExLHRyYWlsaW5nOiEwfSl9LDE0MTooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIG47YS5kKHQse0E6KCk9PnJ9KSxmdW5jdGlvbihlKXtlLkN1cnJlbnRXb3Jrc3BhY2VJZD1cImN1cnJlbnRXb3Jrc3BhY2VJZFwiLGUuTGFzdEZvY3VzZWRCcm93c2VyV2luZG93PVwibGFzdEZvY3VzZWRCcm93c2VyV2luZG93XCIsZS5NYWNoaW5lTmFtZT1cIm1hY2hpbmVOYW1lXCIsZS5OZXdUYWJQYWdlTGF5b3V0PVwiTmV3VGFiUGFnZUxheW91dFwiLGUuTmV3VGFiUGFnZVNvcnQ9XCJOZXdUYWJQYWdlU29ydFwiLGUuRG9ja1Bvc2l0aW9uPVwiRG9ja1Bvc2l0aW9uXCIsZS5TZWxlY3RlZENvbG9yU2NoZW1lPVwiU2VsZWN0ZWRDb2xvclNjaGVtZVwiLGUuVGhlbWVQYWxldHRlU2hlZXQ9XCJUaGVtZVBhbGV0dGVTaGVldFwiLGUuSGFzTW92ZWRTdG9yZT1cIkhhc01vdmVkU3RvcmVcIixlLlBhZ2VEcmFnU3RhdGU9XCJCcm93c2VyUGFnZURyYWdTdGF0ZVwifShufHwobj17fSkpO2NvbnN0IHI9bn0sMTg5OihlLHQsYSk9PntcInVzZSBzdHJpY3RcIjthLnIodCksYS5kKHQse2dldEl0ZW06KCk9Pm8scmVtb3ZlSXRlbTooKT0+aSxzZXRJdGVtOigpPT5yfSk7dmFyIG49YSg3MjMpO2NvbnN0IHI9KGUsdCk9Pntsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtuLiRofS0ke2V9YCx0KX0sbz1lPT5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtuLiRofS0ke2V9YCksaT1lPT5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgJHtuLiRofS0ke2V9YCl9LDc4NjooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7YS5kKHQse0E6KCk9PnJ9KTtjb25zdCBuPVwib2Ytd29ya3NwYWNlLVwiO2NvbnN0IHI9bmV3IGNsYXNze21hcmsoZSl7cGVyZm9ybWFuY2UubWFyayhgJHtufSR7ZX1gKX1tYXJrU3RhcnQoZSl7cGVyZm9ybWFuY2UubWFyayhgJHtufSR7ZX0tc3RhcnRgKX1tYXJrRW5kKGUpe3BlcmZvcm1hbmNlLm1hcmsoYCR7bn0ke2V9LWVuZGApfW1hcmtFbmRBbmRNZWFzdXJlKGUpe3BlcmZvcm1hbmNlLm1hcmsoYCR7bn0ke2V9LWVuZGApO3RyeXtyZXR1cm4gcGVyZm9ybWFuY2UubWVhc3VyZShgJHtufSR7ZX1gLGAke259JHtlfS1zdGFydGAsYCR7bn0ke2V9LWVuZGApfWNhdGNoKGUpezB9fW1hcmtBbmRNZWFzdXJlKGUsdCl7cGVyZm9ybWFuY2UubWFyayhgJHtufSR7ZX1gKTt0cnl7cmV0dXJuIHBlcmZvcm1hbmNlLm1lYXN1cmUoYCR7bn0ke2V9LW1lYXN1cmVgLGAke259JHt0fS1zdGFydGAsYCR7bn0ke2V9YCl9Y2F0Y2goZSl7MH19cmVwb3J0V29ya3NwYWNlUGVyZm9ybWFuY2VFbnRyaWVzKCl7cmV0dXJuIHBlcmZvcm1hbmNlLmdldEVudHJpZXNCeVR5cGUoXCJtZWFzdXJlXCIpLmZpbHRlcigoZT0+ZS5uYW1lLnN0YXJ0c1dpdGgobikpKX1yZXBvcnRXb3Jrc3BhY2VQZXJmb3JtYW5jZSgpe3JldHVybiB0aGlzLnJlcG9ydFdvcmtzcGFjZVBlcmZvcm1hbmNlRW50cmllcygpLm1hcCgoZT0+KHtuYW1lOmUubmFtZS5yZXBsYWNlKGAke259YCxcIlwiKS5yZXBsYWNlKFwiLW1lYXN1cmVcIixcIlwiKSxkdXJhdGlvbjplLmR1cmF0aW9ufSkpKX19fSwxODE6KGUsdCxhKT0+e1widXNlIHN0cmljdFwiO3ZhciBuLHI7IWZ1bmN0aW9uKGUpe2UuSG9tZT1cIi9ob21lL1wiLGUuSG9tZVNlYXJjaD1cIi9ob21lLz9kZWVwbGluaz1zZWFyY2hcIixlLkhvbWVQYWdlc1JlbmFtZT1cIi9ob21lL3BhZ2VzL3JlbmFtZS9cIixlLkRvY2s9XCIvZG9jay9cIixlLkRvY3M9XCIvcHJvdmlkZXIvZG9jcy9cIixlLlN0b3JlZnJvbnQ9XCIvc3RvcmVmcm9udC9cIixlLkRlcHJlY2F0ZWRBbGVydD1cIi9wcm92aWRlci9kZXByZWNhdGVkLWFsZXJ0L1wiLGUuQW5hbHl0aWNzPVwiL3Byb3ZpZGVyL2FuYWx5dGljcy9cIixlLlByb3ZpZGVyPVwiL3Byb3ZpZGVyL1wifShufHwobj17fSkpLGZ1bmN0aW9uKGUpe2UuQnJvd3Nlcj1cIi9icm93c2VyL1wiLGUuQnJvd3NlclBvcHVwTWVudT1cIi9wb3B1cC1tZW51L1wiLGUuQnJvd3NlclBvcHVwTWVudVNhdmVNb2RhbD1cIi9wb3B1cC1tZW51L3NhdmUtbW9kYWwvXCIsZS5Ccm93c2VyUG9wdXBNZW51TGF5b3V0cz1cIi9wb3B1cC1tZW51L2xheW91dHMvbGF5b3V0cy9cIixlLkJyb3dzZXJQb3B1cE1lbnVDb2xvckxpbmtpbmc9XCIvcG9wdXAtbWVudS9jb2xvci1saW5raW5nL2NvbG9yLWxpbmtpbmcvXCIsZS5Ccm93c2VySW5kaWNhdG9yPVwiL2luZGljYXRvci9cIixlLkJyb3dzZXJQb3B1cE1lbnVBZGRyZXNzU2VhcmNoUmVzdWx0c1ZpZXc9XCIvcG9wdXAtbWVudS9hZGRyZXNzLXNlYXJjaC1yZXN1bHRzLXZpZXcvXCIsZS5SZXNwb25zZU1vZGFsPVwiL3BvcHVwLW1lbnUvcmVzcG9uc2UtbW9kYWwvXCIsZS5DbG9zZUNvbmZpcm1hdGlvbk1vZGFsPVwiL3BvcHVwLW1lbnUvY2xvc2UtY29uZmlybWF0aW9uLW1vZGFsL1wiLGUuRW50ZXJwcmlzZUJyb3dzZXI9XCIvZW50ZXJwcmlzZS9cIixlLkVudGVycHJpc2VDb250ZXh0TWVudT1cIi9jb250ZXh0LW1lbnUvXCIsZS5FbnRlcnByaXNlQm9va21hcmtEaWFsb2c9XCIvYm9va21hcmstZGlhbG9nL1wiLGUuRW50ZXJwcmlzZVN0b3JhZ2VQcm94eT1cIi9lbnRlcnByaXNlL3N0b3JhZ2UtcHJveHlcIixlLkRyb3Bkb3duTWVudT1cIi9kcm9wZG93bi1tZW51L1wiLGUuRW50ZXJwcmlzZURvY2s9XCIvZG9jay9cIn0ocnx8KHI9e30pKTt2YXIgbzshZnVuY3Rpb24oZSl7ZS5TZWFyY2g9XCJzZWFyY2hcIn0ob3x8KG89e30pKX0sNTIzOihlLHQsYSk9PntcInVzZSBzdHJpY3RcIjt2YXIgbjthKDcyMyk7IWZ1bmN0aW9uKGUpe2UuSG9tZT1cIi9ob21lXCIsZS5Ccm93c2VyPVwiL2Jyb3dzZXJcIixlLkVudGVycHJpc2U9XCIvZW50ZXJwcmlzZVwiLGUuUHJvdmlkZXI9XCIvcHJvdmlkZXJcIixlLlN0b3JlZnJvbnQ9XCIvc3RvcmVmcm9udFwiLGUuRG9jaz1cIi9kb2NrXCJ9KG58fChuPXt9KSl9LDg2MjooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7YS5kKHQse0QxOigpPT5pLGZDOigpPT5yfSk7YSg5NDApO3ZhciBuPWEoMTQxKTtmdW5jdGlvbiByKCl7cmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKG4uQS5NYWNoaW5lTmFtZSk/P1widW5rbm93blwifWxldCBvO2FzeW5jIGZ1bmN0aW9uIGkoKXtyZXR1cm4gb3x8KG89YXdhaXQgZmluLlN5c3RlbS5nZXRNYWNoaW5lSWQoKSksb319LDg5ODooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7YS5kKHQse0tEOigpPT5zLHB1OigpPT5pfSk7Y29uc3Qgbj1lPT5lLnJlcGxhY2UoL1teXFxkLF0vZyxcIlwiKS5zcGxpdChcIixcIikscj1lPT57aWYoZS5sZW5ndGg8Mil0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yIG9iamVjdCwgY2Fubm90IGNvbnZlcnQgdG8gSFNMLlwiKTtjb25zdCB0PWVbMF0vMjU1LGE9ZVsxXS8yNTUsbj1lWzJdLzI1NSxyPU1hdGgubWluKHQsYSxuKSxvPU1hdGgubWF4KHQsYSxuKSxpPW8tcjtsZXQgcz0wLGM9MCxsPTA7cmV0dXJuIHM9MD09PWk/MDpvPT09dD8oYS1uKS9pJTY6bz09PWE/KG4tdCkvaSsyOih0LWEpL2krNCxzPU1hdGgucm91bmQoNjAqcyksczwwJiYocys9MzYwKSxsPShvK3IpLzIsYz0wPT1pPzA6aS8oMS1NYXRoLmFicygyKmwtMSkpLGM9KygxMDAqYykudG9GaXhlZCgxKSxsPSsoMTAwKmwpLnRvRml4ZWQoMSkse2hzbDpgaHNsKCR7c30sICR7Y30lLCAke2x9JSlgLGhzbGE6YGhzbCgke3N9LCAke2N9JSwgJHtsfSUsIDEpYCxodWU6cyxsaWdodG5lc3M6bCxzYXR1cmF0aW9uOmN9fSxvPWU9PntpZighZSl0aHJvdyBuZXcgRXJyb3IoXCJDb2xvciBpcyBub3QgZGVmaW5lZFwiKTtjb25zdCB0PWUudG9Mb3dlckNhc2UoKTtsZXQgYTtpZih0LmluY2x1ZGVzKFwicmdiXCIpKXtjb25zdCBlPW4odCk7ZS5sZW5ndGg+MyYmZS5wb3AoKSxhPXIoZSkuaHVlfWlmKHQuaW5jbHVkZXMoXCIjXCIpKXtjb25zdCBlPShlPT57aWYoIWUuaW5jbHVkZXMoXCIjXCIpKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaGV4IHZhbHVlLCBjYW5ub3QgY29udmVydCB0byBSR0IuIEhleCB2YWx1ZSBiZWdpbnMgd2l0aCBhIGhhc2h0YWcuXCIpO2xldCB0PTAsYT0wLG49MDtpZig0PT09ZS5sZW5ndGgpdD1gMHgke2VbMV19JHtlWzFdfWAsYT1gMHgke2VbMl19JHtlWzJdfWAsbj1gMHgke2VbM119JHtlWzNdfWA7ZWxzZXtpZig3IT09ZS5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBoZXggc3RyaW5nIGxlbmd0aCwgY2Fubm90IGNvbnZlcnQgdG8gUkdCLlwiKTt0PWAweCR7ZVsxXX0ke2VbMl19YCxhPWAweCR7ZVszXX0ke2VbNF19YCxuPWAweCR7ZVs1XX0ke2VbNl19YH1yZXR1cm5bK3QsK2EsK25dfSkodCk7YT1yKGUpLmh1ZX1pZih0LmluY2x1ZGVzKFwiaHNsXCIpKXthPW4odClbMF19Y29uc3Qgbz1hPy50b1N0cmluZygpO2lmKCFvKXRocm93IG5ldyBFcnJvcihgSHVlIHdhcyB1bmFibGUgdG8gYmUgZXh0cmFjdGVkIGZyb20gXCIke3R9XCIsIGNoZWNrIGNvbG9yIGZvcm1hdC4gQWNjZXB0ZWQgZm9ybWF0cyBhcmU6IHJnYigpLCByZ2JhKCksIGhleCwgaHNsKCksIGFuZCBoc2xhKClgKTtyZXR1cm4gb30saT0oZSx0PSExKT0+e2NvbnN0IGE9byhlKTtyZXR1cm4gdD97YmFja2dyb3VuZDE6YGhzbGEoJHthfSwgMCUsIDEwMCUsIDEpYCxiYWNrZ3JvdW5kMjpgaHNsYSgke2F9LCA2NyUsIDk5JSwgMSlgLGJhY2tncm91bmQzOmBoc2xhKCR7YX0sIDI2JSwgOTYlLCAxKWAsYmFja2dyb3VuZDQ6YGhzbGEoJHthfSwgMTUlLCA5NCUsIDEpYCxiYWNrZ3JvdW5kNTpgaHNsYSgke2F9LCAxMCUsIDg4JSwgMSlgLGJhY2tncm91bmQ2OmBoc2xhKCR7YX0sIDgwJSwgODAlLCAxKWB9OntiYWNrZ3JvdW5kMTpgaHNsYSgke2F9LCA4JSwgNyUsIDEpYCxiYWNrZ3JvdW5kMjpgaHNsYSgke2F9LCA4JSwgMTMlLCAxKWAsYmFja2dyb3VuZDM6YGhzbGEoJHthfSwgOSUsIDE1JSwgMSlgLGJhY2tncm91bmQ0OmBoc2xhKCR7YX0sIDYlLCAyMyUsIDEpYCxiYWNrZ3JvdW5kNTpgaHNsYSgke2F9LCAyMSUsIDI4JSwgMSlgLGJhY2tncm91bmQ2OmBoc2xhKCR7YX0sIDUlLCA1MSUsIDEpYH19LHM9KGUsdCk9Pntjb25zdCBhPXt9O3JldHVybiBPYmplY3Qua2V5cyhlKS5mb3JFYWNoKChuPT57YVtuXT10W25dP3Rbbl06ZVtuXX0pKSxhfX0sMjc3OihlLHQsYSk9PntcInVzZSBzdHJpY3RcIjthLmQodCx7b3M6KCk9Pml9KTt2YXIgbixyPWEoNzIzKTthKDcwKSxhKDEzKTshZnVuY3Rpb24oZSl7ZS5Ccm93c2VyPVwiQnJvd3NlclwiLGUuRG9jaz1cIkRvY2tcIixlLkVudGVycHJpc2VEb2NrPVwiRW50ZXJwcmlzZURvY2tcIixlLkhvbWU9XCJIb21lXCIsZS5Ob3RpZmljYXRpb249XCJOb3RpZmljYXRpb25cIixlLlN0b3JlZnJvbnQ9XCJTdG9yZWZyb250XCIsZS5QbGF0Zm9ybT1cIlBsYXRmb3JtXCIsZS5UaGVtaW5nPVwiVGhlbWluZ1wiLGUuTWljcm9mbG93PVwiTWljcm9mbG93XCJ9KG58fChuPXt9KSk7Y29uc3Qgbz1hc3luYyhlLHQsYT1cIndvcmtzcGFjZS1saWNlbnNpbmdcIik9Pntjb25zdCBuPXthcGlWZXJzaW9uOnQuYXBpVmVyc2lvbnx8ci5ldCxjb21wb25lbnROYW1lOmUsY29tcG9uZW50VmVyc2lvbjp0LmNvbXBvbmVudFZlcnNpb258fHIuZXQsYWxsb3dlZDp0LmFsbG93ZWQscmVqZWN0aW9uQ29kZTp0LnJlamVjdGlvbkNvZGV9O2Zpbi5TeXN0ZW0ucmVnaXN0ZXJVc2FnZSh7dHlwZTphLGRhdGE6bn0pfTtjb25zdCBpPWU9PntvKG4uTm90aWZpY2F0aW9uLGUpfTtuZXcgTWFwfSwzMzM6KGUsdCxhKT0+e1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oKXtyZXR1cm4gdm9pZCAwIT09dHlwZW9mIGNyeXB0byYmXCJyYW5kb21VVUlEXCJpbiBjcnlwdG8mJlwiZnVuY3Rpb25cIj09dHlwZW9mIGNyeXB0by5yYW5kb21VVUlEP2NyeXB0by5yYW5kb21VVUlEKCk6XCIxMDAwMDAwMC0xMDAwLTQwMDAtODAwMC0xMDAwMDAwMDAwMDBcIi5yZXBsYWNlKC9bMDE4XS9nLChlPT4oZV5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDEpKVswXSYxNT4+ZS80KS50b1N0cmluZygxNikpKX1hLmQodCx7TjooKT0+bn0pfSw3MDooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7YS5kKHQseyRwOigpPT5jLElvOigpPT51LElxOigpPT5zLFE6KCk9Pm4sVHY6KCk9PmwsVjE6KCk9PmksaGI6KCk9PmQsdXI6KCk9Pmh9KTt2YXIgbixyPWEoNDM4KSxvPWEoNzIzKTshZnVuY3Rpb24oZSl7ZS5Ib21lPVwib3BlbmZpbi1ob21lXCIsZS5Eb2NrPVwib3BlbmZpbi1kb2NrXCIsZS5TdG9yZWZyb250PVwib3BlbmZpbi1zdG9yZWZyb250XCIsZS5Ib21lSW50ZXJuYWw9XCJvcGVuZmluLWhvbWUtaW50ZXJuYWxcIixlLkJyb3dzZXJNZW51PVwib3BlbmZpbi1icm93c2VyLW1lbnVcIixlLkJyb3dzZXJTYXZlTWVudT1cIm9wZW5maW4tYnJvd3Nlci1zYXZlLW1lbnVcIixlLkJyb3dzZXJJbmRpY2F0b3I9XCJvcGVuZmluLWJyb3dzZXItaW5kaWNhdG9yXCIsZS5Ccm93c2VyV2luZG93PVwiaW50ZXJuYWwtZ2VuZXJhdGVkLXdpbmRvd1wiLGUuQ2xhc3NpY1dpbmRvdz1cImludGVybmFsLWdlbmVyYXRlZC1jbGFzc2ljLXdpbmRvd1wiLGUuRW50ZXJwcmlzZUNvbnRleHRNZW51PVwib3BlbmZpbi1lbnRlcnByaXNlLWNvbnRleHQtbWVudVwiLGUuQnJvd3NlckFkZHJlc3NTZWFyY2hQcmVmaXg9XCJvcGVuZmluLWJyb3dzZXItbWVudS1hZGRyZXNzLXNlYXJjaC1cIixlLkVudGVycHJpc2VCb29rbWFya0RpYWxvZ1dpbmRvdz1cIm9wZW5maW4tZW50ZXJwcmlzZS1ib29rbWFyay1kaWFsb2dcIixlLkRyb3Bkb3duTWVudT1cIm9wZW5maW4tZW50ZXJwcmlzZS1kcm9wZG93bi1tZW51XCIsZS5Eb2NrQ29tcGFuaW9uPVwib3BlbmZpbi1kb2NrLWNvbXBhbmlvblwifShufHwobj17fSkpO2NvbnN0IGk9ZT0+KHtsZWZ0OihlLmxlZnQrKGUucmlnaHQ/P2UubGVmdCtlLndpZHRoKSkvMix0b3A6KGUudG9wKyhlLmJvdHRvbT8/ZS50b3ArZS5oZWlnaHQpKS8yfSk7ZnVuY3Rpb24gcyhlKXtpZighby5jSSl0aHJvdyBuZXcgRXJyb3IoXCJnZXRPRldpbmRvdyBjYW4gb25seSBiZSB1c2VkIGluIGFuIE9wZW5GaW4gZW52LiBBdm9pZCBjYWxsaW5nIHRoaXMgbWV0aG9kIGR1cmluZyBwcmUtcmVuZGVyaW5nLlwiKTtyZXR1cm4gZmluLldpbmRvdy53cmFwU3luYyhlKX1jb25zdCBjPXtuYW1lOm8udkwsdXVpZDpvLiRofTtmdW5jdGlvbiBsKCl7cmV0dXJuIHMoYyl9bi5Ib21lLHIuTVcuV29ya3NwYWNlLG4uRG9jayxyLk1XLldvcmtzcGFjZSxuLlN0b3JlZnJvbnQsci5NVy5Xb3Jrc3BhY2Usci5NVy5Xb3Jrc3BhY2Usci5NVy5Xb3Jrc3BhY2U7Y29uc3QgZD1hc3luYyBlPT57dHJ5e2NvbnN0IHQ9YXdhaXQgZmluLldpbmRvdy53cmFwU3luYyh7bmFtZTplLm5hbWUsdXVpZDplLnV1aWQ/P2Zpbi5tZS51dWlkfSkuZ2V0T3B0aW9ucygpO3JldHVybihcImJyb3dzZXJcIj09PXQud29ya3NwYWNlUGxhdGZvcm0/LndpbmRvd1R5cGV8fFwiZW50ZXJwcmlzZVwiPT09dC53b3Jrc3BhY2VQbGF0Zm9ybT8ud2luZG93VHlwZSkmJnQud29ya3NwYWNlUGxhdGZvcm0/LnBhZ2VzfWNhdGNoKGUpe3JldHVybiBjb25zb2xlLndhcm4oXCJpc0Jyb3dzZXJXaW5kb3cgZXJyb3I6IFwiLGUpLCExfX07YXN5bmMgZnVuY3Rpb24gdSgpe2NvbnN0IGU9YXdhaXQgZmluLkFwcGxpY2F0aW9uLmdldEN1cnJlbnRTeW5jKCkuZ2V0Q2hpbGRXaW5kb3dzKCksdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcCgoYXN5bmMgZT0+ZChlLmlkZW50aXR5KSkpKTtyZXR1cm4gZS5maWx0ZXIoKChlLGEpPT50W2FdKSl9YXN5bmMgZnVuY3Rpb24gaChlKXtjb25zdCB0PWF3YWl0IGZpbi5TeXN0ZW0uZ2V0TW9uaXRvckluZm8oKTtyZXR1cm5bdC5wcmltYXJ5TW9uaXRvciwuLi50Lm5vblByaW1hcnlNb25pdG9yc10ucmVkdWNlKCgodCxhKT0+e2NvbnN0IG49ZnVuY3Rpb24oZSx0KXtjb25zdCBhPWUudG9wLG49ZS5sZWZ0LHI9ZS50b3ArZS5oZWlnaHQsbz1lLmxlZnQrZS53aWR0aCxpPXQubW9uaXRvclJlY3QudG9wLHM9dC5tb25pdG9yUmVjdC5sZWZ0LGM9dC5tb25pdG9yUmVjdC5ib3R0b20sbD10Lm1vbml0b3JSZWN0LnJpZ2h0O2lmKGE+Y3x8cjxpfHxuPmx8fG88cylyZXR1cm4gMDtjb25zdCBkPU1hdGgubWF4KGEsaSksdT1NYXRoLm1heChuLHMpO3JldHVybihNYXRoLm1pbihyLGMpLWQpKihNYXRoLm1pbihvLGwpLXUpLyhlLmhlaWdodCplLndpZHRoKX0oZSxhKTtyZXR1cm4gbj50LnBlcmNlbnRhZ2U/e3BlcmNlbnRhZ2U6bixtb25pdG9yOmF9OnR9KSx7cGVyY2VudGFnZTowLG1vbml0b3I6dC5wcmltYXJ5TW9uaXRvcn0pLm1vbml0b3J9fSwyMzY6ZT0+e1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1yZXF1aXJlKFwibG9kYXNoLmRlYm91bmNlXCIpfSw0MzI6ZT0+e1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1yZXF1aXJlKFwib3BlbmZpbi1ub3RpZmljYXRpb25zL2Rpc3QvY2xpZW50L3dpdGhvdXQtYXV0by1sYXVuY2hcIil9fSx0PXt9O2Z1bmN0aW9uIGEobil7dmFyIHI9dFtuXTtpZih2b2lkIDAhPT1yKXJldHVybiByLmV4cG9ydHM7dmFyIG89dFtuXT17ZXhwb3J0czp7fX07cmV0dXJuIGVbbl0obyxvLmV4cG9ydHMsYSksby5leHBvcnRzfWEubj1lPT57dmFyIHQ9ZSYmZS5fX2VzTW9kdWxlPygpPT5lLmRlZmF1bHQ6KCk9PmU7cmV0dXJuIGEuZCh0LHthOnR9KSx0fSxhLmQ9KGUsdCk9Pntmb3IodmFyIG4gaW4gdClhLm8odCxuKSYmIWEubyhlLG4pJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLHtlbnVtZXJhYmxlOiEwLGdldDp0W25dfSl9LGEubz0oZSx0KT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCksYS5yPWU9PntcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfTt2YXIgbj17fTsoKCk9PntcInVzZSBzdHJpY3RcIjthLnIobiksYS5kKG4se2RlcmVnaXN0ZXI6KCk9PmcscmVnaXN0ZXI6KCk9Pmh9KTt2YXIgZT1hKDQzMiksdD1hKDI3Nykscj1hKDk1Nyksbz17fTtmb3IoY29uc3QgdCBpbiBlKVtcImRlZmF1bHRcIixcInJlZ2lzdGVyXCIsXCJkZXJlZ2lzdGVyXCJdLmluZGV4T2YodCk8MCYmKG9bdF09KCk9PmVbdF0pO2EuZChuLG8pO2NvbnN0IGk9YXN5bmMgdD0+e2lmKHQgaW5zdGFuY2VvZiBFcnJvcil7bGV0IGE9dC5tZXNzYWdlO2lmKHQubWVzc2FnZS5pbmNsdWRlcyhcInJlZ2lzdGVyLW5vdGlmaWNhdGlvbnMtcGxhdGZvcm1cIikpe2lmKGE9XCJOb3RpZmljYXRpb25zIHBsYXRmb3JtcyBhcmUgbm90IHN1cHBvcnRlZCBpbiB2ZXJzaW9ucyBiZWxvdyAxLjEzLjAsIHRyeSB1cGRhdGluZyB5b3VyIG5vdGlmaWNhdGlvbnMtc2VydmljZS5cIixlPy5wcm92aWRlcj8uZ2V0U3RhdHVzKXtjb25zdHt2ZXJzaW9uOnR9PWF3YWl0IGUucHJvdmlkZXIuZ2V0U3RhdHVzKCk7YSs9YCBZb3VyIHZlcnNpb24gaXM6ICR7dH1gfXJldHVybiBhfXJldHVybiB0Lm1lc3NhZ2V9cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQ/dDpcInVua25vd24gZXJyb3IgcmVnaXN0ZXJpbmcgTm90aWZpY2F0aW9uc1wifSxzPWFzeW5jIGU9PntpZihlIGluc3RhbmNlb2YgRXJyb3ImJmUubWVzc2FnZS5pbmNsdWRlcyhcInJlZ2lzdGVyLW5vdGlmaWNhdGlvbnMtcGxhdGZvcm1cIikpdGhyb3cgbmV3IEVycm9yKGF3YWl0IGkoZSkpO3Rocm93IGV9LGM9XCJvZi1ub3RpZmljYXRpb25zLXNlcnZpY2UtdjFcIixsPVwib2Ytd29ya3NwYWNlLW5vdGlmaWNhdGlvbnMtc3luY1wiLGQ9e2NoYW5uZWxOYW1lOmx9LHU9YXN5bmMoZSx0KT0+e2NvbnN0IGE9dC5ub3RpZmljYXRpb25zVmVyc2lvbi5zdGFydHNXaXRoKFwiMlwiKT9kLmNoYW5uZWxOYW1lOmMsbj1hd2FpdCBmaW4uSW50ZXJBcHBsaWNhdGlvbkJ1cy5DaGFubmVsLmNvbm5lY3QoYSx7d2FpdDohMX0pLHI9dC5ub3RpZmljYXRpb25zVmVyc2lvbi5zdGFydHNXaXRoKFwiMlwiKT9cInJlZ2lzdGVyLXBsYXRmb3JtXCI6XCJyZWdpc3Rlci1ub3RpZmljYXRpb25zLXBsYXRmb3JtXCI7YXdhaXQgbi5kaXNwYXRjaChyLGUpfTthc3luYyBmdW5jdGlvbiBoKGEpe3RyeXtjb25zdCBuPWEmJlwibm90aWZpY2F0aW9uc0N1c3RvbU1hbmlmZXN0XCJpbiBhP3tjdXN0b21NYW5pZmVzdDphLm5vdGlmaWNhdGlvbnNDdXN0b21NYW5pZmVzdH06dm9pZCAwO24mJm4uY3VzdG9tTWFuaWZlc3Q/Lm1hbmlmZXN0VXVpZCYmKGQuY2hhbm5lbE5hbWU9YCR7bi5jdXN0b21NYW5pZmVzdC5tYW5pZmVzdFV1aWR9LSR7bH1gKTtjb25zdCBvPWF3YWl0IGUucmVnaXN0ZXIobik7aWYoYSl7Y29uc3QgZT1hd2FpdCgwLHIucXEpKGZpbi5tZS5pZGVudGl0eSksdD1cIm5vdGlmaWNhdGlvbnNQbGF0Zm9ybU9wdGlvbnNcImluIGE/YS5ub3RpZmljYXRpb25zUGxhdGZvcm1PcHRpb25zOmE7YXdhaXQgdSh7dGhlbWU6ZS50aGVtZSxzY2hlbWU6ZS5kZWZhdWx0U2NoZW1lLC4uLnQsd29ya3NwYWNlUGxhdGZvcm06e2lkZW50aXR5OmZpbi5QbGF0Zm9ybS5nZXRDdXJyZW50U3luYygpLmlkZW50aXR5LGFuYWx5dGljczp7aXNTdXBwb3J0ZWQ6ITB9fX0se25vdGlmaWNhdGlvbnNWZXJzaW9uOm8ubm90aWZpY2F0aW9uc1ZlcnNpb259KX1yZXR1cm4oMCx0Lm9zKSh7YWxsb3dlZDohMCxhcGlWZXJzaW9uOmUuVkVSU0lPTixjb21wb25lbnRWZXJzaW9uOm8ubm90aWZpY2F0aW9uc1ZlcnNpb259KSxvfWNhdGNoKGEpeygwLHQub3MpKHthbGxvd2VkOiExLHJlamVjdGlvbkNvZGU6YXdhaXQgaShhKSxhcGlWZXJzaW9uOmUuVkVSU0lPTn0pLGF3YWl0IHMoYSl9fWNvbnN0IGc9YXN5bmMgdD0+e3RyeXtjb25zdHt2ZXJzaW9uOmF9PWF3YWl0IGUucHJvdmlkZXIuZ2V0U3RhdHVzKCk7aWYobnVsbD09PWEpdGhyb3cgbmV3IEVycm9yKFwiTm90aWZpY2F0aW9ucyBzZXJ2aWNlIGlzIG5vdCBjdXJyZW50bHkgcnVubmluZy5cIik7YXdhaXQoYXN5bmMoZSx0KT0+e2NvbnN0IGE9dC5ub3RpZmljYXRpb25zVmVyc2lvbi5zdGFydHNXaXRoKFwiMlwiKT9kLmNoYW5uZWxOYW1lOmMsbj1hd2FpdCBmaW4uSW50ZXJBcHBsaWNhdGlvbkJ1cy5DaGFubmVsLmNvbm5lY3QoYSx7d2FpdDohMX0pLHI9dC5ub3RpZmljYXRpb25zVmVyc2lvbi5zdGFydHNXaXRoKFwiMlwiKT9cImRlcmVnaXN0ZXItcGxhdGZvcm1cIjpcImRlcmVnaXN0ZXItbm90aWZpY2F0aW9ucy1wbGF0Zm9ybVwiO2F3YWl0IG4uZGlzcGF0Y2gocixlKX0pKHtpZDp0fSx7bm90aWZpY2F0aW9uc1ZlcnNpb246YX0pfWNhdGNoKGUpe2F3YWl0IHMoZSl9fX0pKCksbW9kdWxlLmV4cG9ydHM9bn0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3RpZmljYXRpb25zLmpzLm1hcCIsImltcG9ydCBlIGZyb21cInZvaWQtZWxlbWVudHNcIjt2YXIgdD0vXFxzKFteJ1wiL1xccz48XSs/KVtcXHMvPl18KFteXFxzPV0rKT1cXHM/KFwiLio/XCJ8Jy4qPycpL2c7ZnVuY3Rpb24gbihuKXt2YXIgcj17dHlwZTpcInRhZ1wiLG5hbWU6XCJcIix2b2lkRWxlbWVudDohMSxhdHRyczp7fSxjaGlsZHJlbjpbXX0saT1uLm1hdGNoKC88XFwvPyhbXlxcc10rPylbL1xccz5dLyk7aWYoaSYmKHIubmFtZT1pWzFdLChlW2lbMV1dfHxcIi9cIj09PW4uY2hhckF0KG4ubGVuZ3RoLTIpKSYmKHIudm9pZEVsZW1lbnQ9ITApLHIubmFtZS5zdGFydHNXaXRoKFwiIS0tXCIpKSl7dmFyIHM9bi5pbmRleE9mKFwiLS1cXHgzZVwiKTtyZXR1cm57dHlwZTpcImNvbW1lbnRcIixjb21tZW50Oi0xIT09cz9uLnNsaWNlKDQscyk6XCJcIn19Zm9yKHZhciBhPW5ldyBSZWdFeHAodCksYz1udWxsO251bGwhPT0oYz1hLmV4ZWMobikpOylpZihjWzBdLnRyaW0oKSlpZihjWzFdKXt2YXIgbz1jWzFdLnRyaW0oKSxsPVtvLFwiXCJdO28uaW5kZXhPZihcIj1cIik+LTEmJihsPW8uc3BsaXQoXCI9XCIpKSxyLmF0dHJzW2xbMF1dPWxbMV0sYS5sYXN0SW5kZXgtLX1lbHNlIGNbMl0mJihyLmF0dHJzW2NbMl1dPWNbM10udHJpbSgpLnN1YnN0cmluZygxLGNbM10ubGVuZ3RoLTEpKTtyZXR1cm4gcn12YXIgcj0vPFthLXpBLVowLTlcXC1cXCFcXC9dKD86XCJbXlwiXSpcInwnW14nXSonfFteJ1wiPl0pKj4vZyxpPS9eXFxzKiQvLHM9T2JqZWN0LmNyZWF0ZShudWxsKTtmdW5jdGlvbiBhKGUsdCl7c3dpdGNoKHQudHlwZSl7Y2FzZVwidGV4dFwiOnJldHVybiBlK3QuY29udGVudDtjYXNlXCJ0YWdcIjpyZXR1cm4gZSs9XCI8XCIrdC5uYW1lKyh0LmF0dHJzP2Z1bmN0aW9uKGUpe3ZhciB0PVtdO2Zvcih2YXIgbiBpbiBlKXQucHVzaChuKyc9XCInK2Vbbl0rJ1wiJyk7cmV0dXJuIHQubGVuZ3RoP1wiIFwiK3Quam9pbihcIiBcIik6XCJcIn0odC5hdHRycyk6XCJcIikrKHQudm9pZEVsZW1lbnQ/XCIvPlwiOlwiPlwiKSx0LnZvaWRFbGVtZW50P2U6ZSt0LmNoaWxkcmVuLnJlZHVjZShhLFwiXCIpK1wiPC9cIit0Lm5hbWUrXCI+XCI7Y2FzZVwiY29tbWVudFwiOnJldHVybiBlK1wiXFx4M2MhLS1cIit0LmNvbW1lbnQrXCItLVxceDNlXCJ9fXZhciBjPXtwYXJzZTpmdW5jdGlvbihlLHQpe3R8fCh0PXt9KSx0LmNvbXBvbmVudHN8fCh0LmNvbXBvbmVudHM9cyk7dmFyIGEsYz1bXSxvPVtdLGw9LTEsbT0hMTtpZigwIT09ZS5pbmRleE9mKFwiPFwiKSl7dmFyIHU9ZS5pbmRleE9mKFwiPFwiKTtjLnB1c2goe3R5cGU6XCJ0ZXh0XCIsY29udGVudDotMT09PXU/ZTplLnN1YnN0cmluZygwLHUpfSl9cmV0dXJuIGUucmVwbGFjZShyLGZ1bmN0aW9uKHIscyl7aWYobSl7aWYociE9PVwiPC9cIithLm5hbWUrXCI+XCIpcmV0dXJuO209ITF9dmFyIHUsZj1cIi9cIiE9PXIuY2hhckF0KDEpLGg9ci5zdGFydHNXaXRoKFwiXFx4M2MhLS1cIikscD1zK3IubGVuZ3RoLGQ9ZS5jaGFyQXQocCk7aWYoaCl7dmFyIHY9bihyKTtyZXR1cm4gbDwwPyhjLnB1c2godiksYyk6KCh1PW9bbF0pLmNoaWxkcmVuLnB1c2godiksYyl9aWYoZiYmKGwrKyxcInRhZ1wiPT09KGE9bihyKSkudHlwZSYmdC5jb21wb25lbnRzW2EubmFtZV0mJihhLnR5cGU9XCJjb21wb25lbnRcIixtPSEwKSxhLnZvaWRFbGVtZW50fHxtfHwhZHx8XCI8XCI9PT1kfHxhLmNoaWxkcmVuLnB1c2goe3R5cGU6XCJ0ZXh0XCIsY29udGVudDplLnNsaWNlKHAsZS5pbmRleE9mKFwiPFwiLHApKX0pLDA9PT1sJiZjLnB1c2goYSksKHU9b1tsLTFdKSYmdS5jaGlsZHJlbi5wdXNoKGEpLG9bbF09YSksKCFmfHxhLnZvaWRFbGVtZW50KSYmKGw+LTEmJihhLnZvaWRFbGVtZW50fHxhLm5hbWU9PT1yLnNsaWNlKDIsLTEpKSYmKGwtLSxhPS0xPT09bD9jOm9bbF0pLCFtJiZcIjxcIiE9PWQmJmQpKXt1PS0xPT09bD9jOm9bbF0uY2hpbGRyZW47dmFyIHg9ZS5pbmRleE9mKFwiPFwiLHApLGc9ZS5zbGljZShwLC0xPT09eD92b2lkIDA6eCk7aS50ZXN0KGcpJiYoZz1cIiBcIiksKHg+LTEmJmwrdS5sZW5ndGg+PTB8fFwiIFwiIT09ZykmJnUucHVzaCh7dHlwZTpcInRleHRcIixjb250ZW50Omd9KX19KSxjfSxzdHJpbmdpZnk6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVkdWNlKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUrYShcIlwiLHQpfSxcIlwiKX19O2V4cG9ydCBkZWZhdWx0IGM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odG1sLXBhcnNlLXN0cmluZ2lmeS5tb2R1bGUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGlzU3RyaW5nID0gb2JqID0+IHR5cGVvZiBvYmogPT09ICdzdHJpbmcnO1xuY29uc3QgZGVmZXIgPSAoKSA9PiB7XG4gIGxldCByZXM7XG4gIGxldCByZWo7XG4gIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcmVzID0gcmVzb2x2ZTtcbiAgICByZWogPSByZWplY3Q7XG4gIH0pO1xuICBwcm9taXNlLnJlc29sdmUgPSByZXM7XG4gIHByb21pc2UucmVqZWN0ID0gcmVqO1xuICByZXR1cm4gcHJvbWlzZTtcbn07XG5jb25zdCBtYWtlU3RyaW5nID0gb2JqZWN0ID0+IHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSByZXR1cm4gJyc7XG4gIHJldHVybiAnJyArIG9iamVjdDtcbn07XG5jb25zdCBjb3B5ID0gKGEsIHMsIHQpID0+IHtcbiAgYS5mb3JFYWNoKG0gPT4ge1xuICAgIGlmIChzW21dKSB0W21dID0gc1ttXTtcbiAgfSk7XG59O1xuY29uc3QgbGFzdE9mUGF0aFNlcGFyYXRvclJlZ0V4cCA9IC8jIyMvZztcbmNvbnN0IGNsZWFuS2V5ID0ga2V5ID0+IGtleSAmJiBrZXkuaW5kZXhPZignIyMjJykgPiAtMSA/IGtleS5yZXBsYWNlKGxhc3RPZlBhdGhTZXBhcmF0b3JSZWdFeHAsICcuJykgOiBrZXk7XG5jb25zdCBjYW5Ob3RUcmF2ZXJzZURlZXBlciA9IG9iamVjdCA9PiAhb2JqZWN0IHx8IGlzU3RyaW5nKG9iamVjdCk7XG5jb25zdCBnZXRMYXN0T2ZQYXRoID0gKG9iamVjdCwgcGF0aCwgRW1wdHkpID0+IHtcbiAgY29uc3Qgc3RhY2sgPSAhaXNTdHJpbmcocGF0aCkgPyBwYXRoIDogcGF0aC5zcGxpdCgnLicpO1xuICBsZXQgc3RhY2tJbmRleCA9IDA7XG4gIHdoaWxlIChzdGFja0luZGV4IDwgc3RhY2subGVuZ3RoIC0gMSkge1xuICAgIGlmIChjYW5Ob3RUcmF2ZXJzZURlZXBlcihvYmplY3QpKSByZXR1cm4ge307XG4gICAgY29uc3Qga2V5ID0gY2xlYW5LZXkoc3RhY2tbc3RhY2tJbmRleF0pO1xuICAgIGlmICghb2JqZWN0W2tleV0gJiYgRW1wdHkpIG9iamVjdFtrZXldID0gbmV3IEVtcHR5KCk7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpIHtcbiAgICAgIG9iamVjdCA9IG9iamVjdFtrZXldO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmplY3QgPSB7fTtcbiAgICB9XG4gICAgKytzdGFja0luZGV4O1xuICB9XG4gIGlmIChjYW5Ob3RUcmF2ZXJzZURlZXBlcihvYmplY3QpKSByZXR1cm4ge307XG4gIHJldHVybiB7XG4gICAgb2JqOiBvYmplY3QsXG4gICAgazogY2xlYW5LZXkoc3RhY2tbc3RhY2tJbmRleF0pXG4gIH07XG59O1xuY29uc3Qgc2V0UGF0aCA9IChvYmplY3QsIHBhdGgsIG5ld1ZhbHVlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBvYmosXG4gICAga1xuICB9ID0gZ2V0TGFzdE9mUGF0aChvYmplY3QsIHBhdGgsIE9iamVjdCk7XG4gIGlmIChvYmogIT09IHVuZGVmaW5lZCB8fCBwYXRoLmxlbmd0aCA9PT0gMSkge1xuICAgIG9ialtrXSA9IG5ld1ZhbHVlO1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgZSA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgbGV0IHAgPSBwYXRoLnNsaWNlKDAsIHBhdGgubGVuZ3RoIC0gMSk7XG4gIGxldCBsYXN0ID0gZ2V0TGFzdE9mUGF0aChvYmplY3QsIHAsIE9iamVjdCk7XG4gIHdoaWxlIChsYXN0Lm9iaiA9PT0gdW5kZWZpbmVkICYmIHAubGVuZ3RoKSB7XG4gICAgZSA9IGAke3BbcC5sZW5ndGggLSAxXX0uJHtlfWA7XG4gICAgcCA9IHAuc2xpY2UoMCwgcC5sZW5ndGggLSAxKTtcbiAgICBsYXN0ID0gZ2V0TGFzdE9mUGF0aChvYmplY3QsIHAsIE9iamVjdCk7XG4gICAgaWYgKGxhc3QgJiYgbGFzdC5vYmogJiYgdHlwZW9mIGxhc3Qub2JqW2Ake2xhc3Qua30uJHtlfWBdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgbGFzdC5vYmogPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIGxhc3Qub2JqW2Ake2xhc3Qua30uJHtlfWBdID0gbmV3VmFsdWU7XG59O1xuY29uc3QgcHVzaFBhdGggPSAob2JqZWN0LCBwYXRoLCBuZXdWYWx1ZSwgY29uY2F0KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBvYmosXG4gICAga1xuICB9ID0gZ2V0TGFzdE9mUGF0aChvYmplY3QsIHBhdGgsIE9iamVjdCk7XG4gIG9ialtrXSA9IG9ialtrXSB8fCBbXTtcbiAgb2JqW2tdLnB1c2gobmV3VmFsdWUpO1xufTtcbmNvbnN0IGdldFBhdGggPSAob2JqZWN0LCBwYXRoKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBvYmosXG4gICAga1xuICB9ID0gZ2V0TGFzdE9mUGF0aChvYmplY3QsIHBhdGgpO1xuICBpZiAoIW9iaikgcmV0dXJuIHVuZGVmaW5lZDtcbiAgcmV0dXJuIG9ialtrXTtcbn07XG5jb25zdCBnZXRQYXRoV2l0aERlZmF1bHRzID0gKGRhdGEsIGRlZmF1bHREYXRhLCBrZXkpID0+IHtcbiAgY29uc3QgdmFsdWUgPSBnZXRQYXRoKGRhdGEsIGtleSk7XG4gIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiBnZXRQYXRoKGRlZmF1bHREYXRhLCBrZXkpO1xufTtcbmNvbnN0IGRlZXBFeHRlbmQgPSAodGFyZ2V0LCBzb3VyY2UsIG92ZXJ3cml0ZSkgPT4ge1xuICBmb3IgKGNvbnN0IHByb3AgaW4gc291cmNlKSB7XG4gICAgaWYgKHByb3AgIT09ICdfX3Byb3RvX18nICYmIHByb3AgIT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIGlmIChwcm9wIGluIHRhcmdldCkge1xuICAgICAgICBpZiAoaXNTdHJpbmcodGFyZ2V0W3Byb3BdKSB8fCB0YXJnZXRbcHJvcF0gaW5zdGFuY2VvZiBTdHJpbmcgfHwgaXNTdHJpbmcoc291cmNlW3Byb3BdKSB8fCBzb3VyY2VbcHJvcF0gaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgICAgICBpZiAob3ZlcndyaXRlKSB0YXJnZXRbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVlcEV4dGVuZCh0YXJnZXRbcHJvcF0sIHNvdXJjZVtwcm9wXSwgb3ZlcndyaXRlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufTtcbmNvbnN0IHJlZ2V4RXNjYXBlID0gc3RyID0+IHN0ci5yZXBsYWNlKC9bXFwtXFxbXFxdXFwvXFx7XFx9XFwoXFwpXFwqXFwrXFw/XFwuXFxcXFxcXlxcJFxcfF0vZywgJ1xcXFwkJicpO1xudmFyIF9lbnRpdHlNYXAgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7JyxcbiAgXCInXCI6ICcmIzM5OycsXG4gICcvJzogJyYjeDJGOydcbn07XG5jb25zdCBlc2NhcGUgPSBkYXRhID0+IHtcbiAgaWYgKGlzU3RyaW5nKGRhdGEpKSB7XG4gICAgcmV0dXJuIGRhdGEucmVwbGFjZSgvWyY8PlwiJ1xcL10vZywgcyA9PiBfZW50aXR5TWFwW3NdKTtcbiAgfVxuICByZXR1cm4gZGF0YTtcbn07XG5jbGFzcyBSZWdFeHBDYWNoZSB7XG4gIGNvbnN0cnVjdG9yKGNhcGFjaXR5KSB7XG4gICAgdGhpcy5jYXBhY2l0eSA9IGNhcGFjaXR5O1xuICAgIHRoaXMucmVnRXhwTWFwID0gbmV3IE1hcCgpO1xuICAgIHRoaXMucmVnRXhwUXVldWUgPSBbXTtcbiAgfVxuICBnZXRSZWdFeHAocGF0dGVybikge1xuICAgIGNvbnN0IHJlZ0V4cEZyb21DYWNoZSA9IHRoaXMucmVnRXhwTWFwLmdldChwYXR0ZXJuKTtcbiAgICBpZiAocmVnRXhwRnJvbUNhY2hlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiByZWdFeHBGcm9tQ2FjaGU7XG4gICAgfVxuICAgIGNvbnN0IHJlZ0V4cE5ldyA9IG5ldyBSZWdFeHAocGF0dGVybik7XG4gICAgaWYgKHRoaXMucmVnRXhwUXVldWUubGVuZ3RoID09PSB0aGlzLmNhcGFjaXR5KSB7XG4gICAgICB0aGlzLnJlZ0V4cE1hcC5kZWxldGUodGhpcy5yZWdFeHBRdWV1ZS5zaGlmdCgpKTtcbiAgICB9XG4gICAgdGhpcy5yZWdFeHBNYXAuc2V0KHBhdHRlcm4sIHJlZ0V4cE5ldyk7XG4gICAgdGhpcy5yZWdFeHBRdWV1ZS5wdXNoKHBhdHRlcm4pO1xuICAgIHJldHVybiByZWdFeHBOZXc7XG4gIH1cbn1cbmNvbnN0IGNoYXJzID0gWycgJywgJywnLCAnPycsICchJywgJzsnXTtcbmNvbnN0IGxvb2tzTGlrZU9iamVjdFBhdGhSZWdFeHBDYWNoZSA9IG5ldyBSZWdFeHBDYWNoZSgyMCk7XG5jb25zdCBsb29rc0xpa2VPYmplY3RQYXRoID0gKGtleSwgbnNTZXBhcmF0b3IsIGtleVNlcGFyYXRvcikgPT4ge1xuICBuc1NlcGFyYXRvciA9IG5zU2VwYXJhdG9yIHx8ICcnO1xuICBrZXlTZXBhcmF0b3IgPSBrZXlTZXBhcmF0b3IgfHwgJyc7XG4gIGNvbnN0IHBvc3NpYmxlQ2hhcnMgPSBjaGFycy5maWx0ZXIoYyA9PiBuc1NlcGFyYXRvci5pbmRleE9mKGMpIDwgMCAmJiBrZXlTZXBhcmF0b3IuaW5kZXhPZihjKSA8IDApO1xuICBpZiAocG9zc2libGVDaGFycy5sZW5ndGggPT09IDApIHJldHVybiB0cnVlO1xuICBjb25zdCByID0gbG9va3NMaWtlT2JqZWN0UGF0aFJlZ0V4cENhY2hlLmdldFJlZ0V4cChgKCR7cG9zc2libGVDaGFycy5tYXAoYyA9PiBjID09PSAnPycgPyAnXFxcXD8nIDogYykuam9pbignfCcpfSlgKTtcbiAgbGV0IG1hdGNoZWQgPSAhci50ZXN0KGtleSk7XG4gIGlmICghbWF0Y2hlZCkge1xuICAgIGNvbnN0IGtpID0ga2V5LmluZGV4T2Yoa2V5U2VwYXJhdG9yKTtcbiAgICBpZiAoa2kgPiAwICYmICFyLnRlc3Qoa2V5LnN1YnN0cmluZygwLCBraSkpKSB7XG4gICAgICBtYXRjaGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1hdGNoZWQ7XG59O1xuY29uc3QgZGVlcEZpbmQgPSBmdW5jdGlvbiAob2JqLCBwYXRoKSB7XG4gIGxldCBrZXlTZXBhcmF0b3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6ICcuJztcbiAgaWYgKCFvYmopIHJldHVybiB1bmRlZmluZWQ7XG4gIGlmIChvYmpbcGF0aF0pIHJldHVybiBvYmpbcGF0aF07XG4gIGNvbnN0IHRva2VucyA9IHBhdGguc3BsaXQoa2V5U2VwYXJhdG9yKTtcbiAgbGV0IGN1cnJlbnQgPSBvYmo7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDspIHtcbiAgICBpZiAoIWN1cnJlbnQgfHwgdHlwZW9mIGN1cnJlbnQgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBsZXQgbmV4dDtcbiAgICBsZXQgbmV4dFBhdGggPSAnJztcbiAgICBmb3IgKGxldCBqID0gaTsgaiA8IHRva2Vucy5sZW5ndGg7ICsraikge1xuICAgICAgaWYgKGogIT09IGkpIHtcbiAgICAgICAgbmV4dFBhdGggKz0ga2V5U2VwYXJhdG9yO1xuICAgICAgfVxuICAgICAgbmV4dFBhdGggKz0gdG9rZW5zW2pdO1xuICAgICAgbmV4dCA9IGN1cnJlbnRbbmV4dFBhdGhdO1xuICAgICAgaWYgKG5leHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoWydzdHJpbmcnLCAnbnVtYmVyJywgJ2Jvb2xlYW4nXS5pbmRleE9mKHR5cGVvZiBuZXh0KSA+IC0xICYmIGogPCB0b2tlbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGkgKz0gaiAtIGkgKyAxO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgY3VycmVudCA9IG5leHQ7XG4gIH1cbiAgcmV0dXJuIGN1cnJlbnQ7XG59O1xuY29uc3QgZ2V0Q2xlYW5lZENvZGUgPSBjb2RlID0+IGNvZGUgJiYgY29kZS5yZXBsYWNlKCdfJywgJy0nKTtcblxuY29uc3QgY29uc29sZUxvZ2dlciA9IHtcbiAgdHlwZTogJ2xvZ2dlcicsXG4gIGxvZyhhcmdzKSB7XG4gICAgdGhpcy5vdXRwdXQoJ2xvZycsIGFyZ3MpO1xuICB9LFxuICB3YXJuKGFyZ3MpIHtcbiAgICB0aGlzLm91dHB1dCgnd2FybicsIGFyZ3MpO1xuICB9LFxuICBlcnJvcihhcmdzKSB7XG4gICAgdGhpcy5vdXRwdXQoJ2Vycm9yJywgYXJncyk7XG4gIH0sXG4gIG91dHB1dCh0eXBlLCBhcmdzKSB7XG4gICAgaWYgKGNvbnNvbGUgJiYgY29uc29sZVt0eXBlXSkgY29uc29sZVt0eXBlXS5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgfVxufTtcbmNsYXNzIExvZ2dlciB7XG4gIGNvbnN0cnVjdG9yKGNvbmNyZXRlTG9nZ2VyKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHRoaXMuaW5pdChjb25jcmV0ZUxvZ2dlciwgb3B0aW9ucyk7XG4gIH1cbiAgaW5pdChjb25jcmV0ZUxvZ2dlcikge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB0aGlzLnByZWZpeCA9IG9wdGlvbnMucHJlZml4IHx8ICdpMThuZXh0Oic7XG4gICAgdGhpcy5sb2dnZXIgPSBjb25jcmV0ZUxvZ2dlciB8fCBjb25zb2xlTG9nZ2VyO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5kZWJ1ZyA9IG9wdGlvbnMuZGVidWc7XG4gIH1cbiAgbG9nKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZm9yd2FyZChhcmdzLCAnbG9nJywgJycsIHRydWUpO1xuICB9XG4gIHdhcm4oKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZvcndhcmQoYXJncywgJ3dhcm4nLCAnJywgdHJ1ZSk7XG4gIH1cbiAgZXJyb3IoKSB7XG4gICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZvcndhcmQoYXJncywgJ2Vycm9yJywgJycpO1xuICB9XG4gIGRlcHJlY2F0ZSgpIHtcbiAgICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjQpLCBfa2V5NCA9IDA7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICAgIGFyZ3NbX2tleTRdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZm9yd2FyZChhcmdzLCAnd2FybicsICdXQVJOSU5HIERFUFJFQ0FURUQ6ICcsIHRydWUpO1xuICB9XG4gIGZvcndhcmQoYXJncywgbHZsLCBwcmVmaXgsIGRlYnVnT25seSkge1xuICAgIGlmIChkZWJ1Z09ubHkgJiYgIXRoaXMuZGVidWcpIHJldHVybiBudWxsO1xuICAgIGlmIChpc1N0cmluZyhhcmdzWzBdKSkgYXJnc1swXSA9IGAke3ByZWZpeH0ke3RoaXMucHJlZml4fSAke2FyZ3NbMF19YDtcbiAgICByZXR1cm4gdGhpcy5sb2dnZXJbbHZsXShhcmdzKTtcbiAgfVxuICBjcmVhdGUobW9kdWxlTmFtZSkge1xuICAgIHJldHVybiBuZXcgTG9nZ2VyKHRoaXMubG9nZ2VyLCB7XG4gICAgICAuLi57XG4gICAgICAgIHByZWZpeDogYCR7dGhpcy5wcmVmaXh9OiR7bW9kdWxlTmFtZX06YFxuICAgICAgfSxcbiAgICAgIC4uLnRoaXMub3B0aW9uc1xuICAgIH0pO1xuICB9XG4gIGNsb25lKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB0aGlzLm9wdGlvbnM7XG4gICAgb3B0aW9ucy5wcmVmaXggPSBvcHRpb25zLnByZWZpeCB8fCB0aGlzLnByZWZpeDtcbiAgICByZXR1cm4gbmV3IExvZ2dlcih0aGlzLmxvZ2dlciwgb3B0aW9ucyk7XG4gIH1cbn1cbnZhciBiYXNlTG9nZ2VyID0gbmV3IExvZ2dlcigpO1xuXG5jbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm9ic2VydmVycyA9IHt9O1xuICB9XG4gIG9uKGV2ZW50cywgbGlzdGVuZXIpIHtcbiAgICBldmVudHMuc3BsaXQoJyAnKS5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgIGlmICghdGhpcy5vYnNlcnZlcnNbZXZlbnRdKSB0aGlzLm9ic2VydmVyc1tldmVudF0gPSBuZXcgTWFwKCk7XG4gICAgICBjb25zdCBudW1MaXN0ZW5lcnMgPSB0aGlzLm9ic2VydmVyc1tldmVudF0uZ2V0KGxpc3RlbmVyKSB8fCAwO1xuICAgICAgdGhpcy5vYnNlcnZlcnNbZXZlbnRdLnNldChsaXN0ZW5lciwgbnVtTGlzdGVuZXJzICsgMSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgb2ZmKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIGlmICghdGhpcy5vYnNlcnZlcnNbZXZlbnRdKSByZXR1cm47XG4gICAgaWYgKCFsaXN0ZW5lcikge1xuICAgICAgZGVsZXRlIHRoaXMub2JzZXJ2ZXJzW2V2ZW50XTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vYnNlcnZlcnNbZXZlbnRdLmRlbGV0ZShsaXN0ZW5lcik7XG4gIH1cbiAgZW1pdChldmVudCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cbiAgICBpZiAodGhpcy5vYnNlcnZlcnNbZXZlbnRdKSB7XG4gICAgICBjb25zdCBjbG9uZWQgPSBBcnJheS5mcm9tKHRoaXMub2JzZXJ2ZXJzW2V2ZW50XS5lbnRyaWVzKCkpO1xuICAgICAgY2xvbmVkLmZvckVhY2goX3JlZiA9PiB7XG4gICAgICAgIGxldCBbb2JzZXJ2ZXIsIG51bVRpbWVzQWRkZWRdID0gX3JlZjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1UaW1lc0FkZGVkOyBpKyspIHtcbiAgICAgICAgICBvYnNlcnZlciguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm9ic2VydmVyc1snKiddKSB7XG4gICAgICBjb25zdCBjbG9uZWQgPSBBcnJheS5mcm9tKHRoaXMub2JzZXJ2ZXJzWycqJ10uZW50cmllcygpKTtcbiAgICAgIGNsb25lZC5mb3JFYWNoKF9yZWYyID0+IHtcbiAgICAgICAgbGV0IFtvYnNlcnZlciwgbnVtVGltZXNBZGRlZF0gPSBfcmVmMjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1UaW1lc0FkZGVkOyBpKyspIHtcbiAgICAgICAgICBvYnNlcnZlci5hcHBseShvYnNlcnZlciwgW2V2ZW50LCAuLi5hcmdzXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBSZXNvdXJjZVN0b3JlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7XG4gICAgICBuczogWyd0cmFuc2xhdGlvbiddLFxuICAgICAgZGVmYXVsdE5TOiAndHJhbnNsYXRpb24nXG4gICAgfTtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZGF0YSA9IGRhdGEgfHwge307XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICBpZiAodGhpcy5vcHRpb25zLmtleVNlcGFyYXRvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9wdGlvbnMua2V5U2VwYXJhdG9yID0gJy4nO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLmlnbm9yZUpTT05TdHJ1Y3R1cmUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vcHRpb25zLmlnbm9yZUpTT05TdHJ1Y3R1cmUgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBhZGROYW1lc3BhY2VzKG5zKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5ucy5pbmRleE9mKG5zKSA8IDApIHtcbiAgICAgIHRoaXMub3B0aW9ucy5ucy5wdXNoKG5zKTtcbiAgICB9XG4gIH1cbiAgcmVtb3ZlTmFtZXNwYWNlcyhucykge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5vcHRpb25zLm5zLmluZGV4T2YobnMpO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLm9wdGlvbnMubnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cbiAgZ2V0UmVzb3VyY2UobG5nLCBucywga2V5KSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuICAgIGNvbnN0IGtleVNlcGFyYXRvciA9IG9wdGlvbnMua2V5U2VwYXJhdG9yICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmtleVNlcGFyYXRvciA6IHRoaXMub3B0aW9ucy5rZXlTZXBhcmF0b3I7XG4gICAgY29uc3QgaWdub3JlSlNPTlN0cnVjdHVyZSA9IG9wdGlvbnMuaWdub3JlSlNPTlN0cnVjdHVyZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5pZ25vcmVKU09OU3RydWN0dXJlIDogdGhpcy5vcHRpb25zLmlnbm9yZUpTT05TdHJ1Y3R1cmU7XG4gICAgbGV0IHBhdGg7XG4gICAgaWYgKGxuZy5pbmRleE9mKCcuJykgPiAtMSkge1xuICAgICAgcGF0aCA9IGxuZy5zcGxpdCgnLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXRoID0gW2xuZywgbnNdO1xuICAgICAgaWYgKGtleSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShrZXkpKSB7XG4gICAgICAgICAgcGF0aC5wdXNoKC4uLmtleSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNTdHJpbmcoa2V5KSAmJiBrZXlTZXBhcmF0b3IpIHtcbiAgICAgICAgICBwYXRoLnB1c2goLi4ua2V5LnNwbGl0KGtleVNlcGFyYXRvcikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhdGgucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IGdldFBhdGgodGhpcy5kYXRhLCBwYXRoKTtcbiAgICBpZiAoIXJlc3VsdCAmJiAhbnMgJiYgIWtleSAmJiBsbmcuaW5kZXhPZignLicpID4gLTEpIHtcbiAgICAgIGxuZyA9IHBhdGhbMF07XG4gICAgICBucyA9IHBhdGhbMV07XG4gICAgICBrZXkgPSBwYXRoLnNsaWNlKDIpLmpvaW4oJy4nKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCB8fCAhaWdub3JlSlNPTlN0cnVjdHVyZSB8fCAhaXNTdHJpbmcoa2V5KSkgcmV0dXJuIHJlc3VsdDtcbiAgICByZXR1cm4gZGVlcEZpbmQodGhpcy5kYXRhICYmIHRoaXMuZGF0YVtsbmddICYmIHRoaXMuZGF0YVtsbmddW25zXSwga2V5LCBrZXlTZXBhcmF0b3IpO1xuICB9XG4gIGFkZFJlc291cmNlKGxuZywgbnMsIGtleSwgdmFsdWUpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDoge1xuICAgICAgc2lsZW50OiBmYWxzZVxuICAgIH07XG4gICAgY29uc3Qga2V5U2VwYXJhdG9yID0gb3B0aW9ucy5rZXlTZXBhcmF0b3IgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMua2V5U2VwYXJhdG9yIDogdGhpcy5vcHRpb25zLmtleVNlcGFyYXRvcjtcbiAgICBsZXQgcGF0aCA9IFtsbmcsIG5zXTtcbiAgICBpZiAoa2V5KSBwYXRoID0gcGF0aC5jb25jYXQoa2V5U2VwYXJhdG9yID8ga2V5LnNwbGl0KGtleVNlcGFyYXRvcikgOiBrZXkpO1xuICAgIGlmIChsbmcuaW5kZXhPZignLicpID4gLTEpIHtcbiAgICAgIHBhdGggPSBsbmcuc3BsaXQoJy4nKTtcbiAgICAgIHZhbHVlID0gbnM7XG4gICAgICBucyA9IHBhdGhbMV07XG4gICAgfVxuICAgIHRoaXMuYWRkTmFtZXNwYWNlcyhucyk7XG4gICAgc2V0UGF0aCh0aGlzLmRhdGEsIHBhdGgsIHZhbHVlKTtcbiAgICBpZiAoIW9wdGlvbnMuc2lsZW50KSB0aGlzLmVtaXQoJ2FkZGVkJywgbG5nLCBucywga2V5LCB2YWx1ZSk7XG4gIH1cbiAgYWRkUmVzb3VyY2VzKGxuZywgbnMsIHJlc291cmNlcykge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7XG4gICAgICBzaWxlbnQ6IGZhbHNlXG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IG0gaW4gcmVzb3VyY2VzKSB7XG4gICAgICBpZiAoaXNTdHJpbmcocmVzb3VyY2VzW21dKSB8fCBBcnJheS5pc0FycmF5KHJlc291cmNlc1ttXSkpIHRoaXMuYWRkUmVzb3VyY2UobG5nLCBucywgbSwgcmVzb3VyY2VzW21dLCB7XG4gICAgICAgIHNpbGVudDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICghb3B0aW9ucy5zaWxlbnQpIHRoaXMuZW1pdCgnYWRkZWQnLCBsbmcsIG5zLCByZXNvdXJjZXMpO1xuICB9XG4gIGFkZFJlc291cmNlQnVuZGxlKGxuZywgbnMsIHJlc291cmNlcywgZGVlcCwgb3ZlcndyaXRlKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gNSAmJiBhcmd1bWVudHNbNV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s1XSA6IHtcbiAgICAgIHNpbGVudDogZmFsc2UsXG4gICAgICBza2lwQ29weTogZmFsc2VcbiAgICB9O1xuICAgIGxldCBwYXRoID0gW2xuZywgbnNdO1xuICAgIGlmIChsbmcuaW5kZXhPZignLicpID4gLTEpIHtcbiAgICAgIHBhdGggPSBsbmcuc3BsaXQoJy4nKTtcbiAgICAgIGRlZXAgPSByZXNvdXJjZXM7XG4gICAgICByZXNvdXJjZXMgPSBucztcbiAgICAgIG5zID0gcGF0aFsxXTtcbiAgICB9XG4gICAgdGhpcy5hZGROYW1lc3BhY2VzKG5zKTtcbiAgICBsZXQgcGFjayA9IGdldFBhdGgodGhpcy5kYXRhLCBwYXRoKSB8fCB7fTtcbiAgICBpZiAoIW9wdGlvbnMuc2tpcENvcHkpIHJlc291cmNlcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVzb3VyY2VzKSk7XG4gICAgaWYgKGRlZXApIHtcbiAgICAgIGRlZXBFeHRlbmQocGFjaywgcmVzb3VyY2VzLCBvdmVyd3JpdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYWNrID0ge1xuICAgICAgICAuLi5wYWNrLFxuICAgICAgICAuLi5yZXNvdXJjZXNcbiAgICAgIH07XG4gICAgfVxuICAgIHNldFBhdGgodGhpcy5kYXRhLCBwYXRoLCBwYWNrKTtcbiAgICBpZiAoIW9wdGlvbnMuc2lsZW50KSB0aGlzLmVtaXQoJ2FkZGVkJywgbG5nLCBucywgcmVzb3VyY2VzKTtcbiAgfVxuICByZW1vdmVSZXNvdXJjZUJ1bmRsZShsbmcsIG5zKSB7XG4gICAgaWYgKHRoaXMuaGFzUmVzb3VyY2VCdW5kbGUobG5nLCBucykpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmRhdGFbbG5nXVtuc107XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlTmFtZXNwYWNlcyhucyk7XG4gICAgdGhpcy5lbWl0KCdyZW1vdmVkJywgbG5nLCBucyk7XG4gIH1cbiAgaGFzUmVzb3VyY2VCdW5kbGUobG5nLCBucykge1xuICAgIHJldHVybiB0aGlzLmdldFJlc291cmNlKGxuZywgbnMpICE9PSB1bmRlZmluZWQ7XG4gIH1cbiAgZ2V0UmVzb3VyY2VCdW5kbGUobG5nLCBucykge1xuICAgIGlmICghbnMpIG5zID0gdGhpcy5vcHRpb25zLmRlZmF1bHROUztcbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlBUEkgPT09ICd2MScpIHJldHVybiB7XG4gICAgICAuLi57fSxcbiAgICAgIC4uLnRoaXMuZ2V0UmVzb3VyY2UobG5nLCBucylcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmdldFJlc291cmNlKGxuZywgbnMpO1xuICB9XG4gIGdldERhdGFCeUxhbmd1YWdlKGxuZykge1xuICAgIHJldHVybiB0aGlzLmRhdGFbbG5nXTtcbiAgfVxuICBoYXNMYW5ndWFnZVNvbWVUcmFuc2xhdGlvbnMobG5nKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0RGF0YUJ5TGFuZ3VhZ2UobG5nKTtcbiAgICBjb25zdCBuID0gZGF0YSAmJiBPYmplY3Qua2V5cyhkYXRhKSB8fCBbXTtcbiAgICByZXR1cm4gISFuLmZpbmQodiA9PiBkYXRhW3ZdICYmIE9iamVjdC5rZXlzKGRhdGFbdl0pLmxlbmd0aCA+IDApO1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG59XG5cbnZhciBwb3N0UHJvY2Vzc29yID0ge1xuICBwcm9jZXNzb3JzOiB7fSxcbiAgYWRkUG9zdFByb2Nlc3Nvcihtb2R1bGUpIHtcbiAgICB0aGlzLnByb2Nlc3NvcnNbbW9kdWxlLm5hbWVdID0gbW9kdWxlO1xuICB9LFxuICBoYW5kbGUocHJvY2Vzc29ycywgdmFsdWUsIGtleSwgb3B0aW9ucywgdHJhbnNsYXRvcikge1xuICAgIHByb2Nlc3NvcnMuZm9yRWFjaChwcm9jZXNzb3IgPT4ge1xuICAgICAgaWYgKHRoaXMucHJvY2Vzc29yc1twcm9jZXNzb3JdKSB2YWx1ZSA9IHRoaXMucHJvY2Vzc29yc1twcm9jZXNzb3JdLnByb2Nlc3ModmFsdWUsIGtleSwgb3B0aW9ucywgdHJhbnNsYXRvcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59O1xuXG5jb25zdCBjaGVja2VkTG9hZGVkRm9yID0ge307XG5jbGFzcyBUcmFuc2xhdG9yIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3Ioc2VydmljZXMpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgc3VwZXIoKTtcbiAgICBjb3B5KFsncmVzb3VyY2VTdG9yZScsICdsYW5ndWFnZVV0aWxzJywgJ3BsdXJhbFJlc29sdmVyJywgJ2ludGVycG9sYXRvcicsICdiYWNrZW5kQ29ubmVjdG9yJywgJ2kxOG5Gb3JtYXQnLCAndXRpbHMnXSwgc2VydmljZXMsIHRoaXMpO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5rZXlTZXBhcmF0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vcHRpb25zLmtleVNlcGFyYXRvciA9ICcuJztcbiAgICB9XG4gICAgdGhpcy5sb2dnZXIgPSBiYXNlTG9nZ2VyLmNyZWF0ZSgndHJhbnNsYXRvcicpO1xuICB9XG4gIGNoYW5nZUxhbmd1YWdlKGxuZykge1xuICAgIGlmIChsbmcpIHRoaXMubGFuZ3VhZ2UgPSBsbmc7XG4gIH1cbiAgZXhpc3RzKGtleSkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7XG4gICAgICBpbnRlcnBvbGF0aW9uOiB7fVxuICAgIH07XG4gICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkIHx8IGtleSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCByZXNvbHZlZCA9IHRoaXMucmVzb2x2ZShrZXksIG9wdGlvbnMpO1xuICAgIHJldHVybiByZXNvbHZlZCAmJiByZXNvbHZlZC5yZXMgIT09IHVuZGVmaW5lZDtcbiAgfVxuICBleHRyYWN0RnJvbUtleShrZXksIG9wdGlvbnMpIHtcbiAgICBsZXQgbnNTZXBhcmF0b3IgPSBvcHRpb25zLm5zU2VwYXJhdG9yICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zU2VwYXJhdG9yIDogdGhpcy5vcHRpb25zLm5zU2VwYXJhdG9yO1xuICAgIGlmIChuc1NlcGFyYXRvciA9PT0gdW5kZWZpbmVkKSBuc1NlcGFyYXRvciA9ICc6JztcbiAgICBjb25zdCBrZXlTZXBhcmF0b3IgPSBvcHRpb25zLmtleVNlcGFyYXRvciAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5rZXlTZXBhcmF0b3IgOiB0aGlzLm9wdGlvbnMua2V5U2VwYXJhdG9yO1xuICAgIGxldCBuYW1lc3BhY2VzID0gb3B0aW9ucy5ucyB8fCB0aGlzLm9wdGlvbnMuZGVmYXVsdE5TIHx8IFtdO1xuICAgIGNvbnN0IHdvdWxkQ2hlY2tGb3JOc0luS2V5ID0gbnNTZXBhcmF0b3IgJiYga2V5LmluZGV4T2YobnNTZXBhcmF0b3IpID4gLTE7XG4gICAgY29uc3Qgc2VlbXNOYXR1cmFsTGFuZ3VhZ2UgPSAhdGhpcy5vcHRpb25zLnVzZXJEZWZpbmVkS2V5U2VwYXJhdG9yICYmICFvcHRpb25zLmtleVNlcGFyYXRvciAmJiAhdGhpcy5vcHRpb25zLnVzZXJEZWZpbmVkTnNTZXBhcmF0b3IgJiYgIW9wdGlvbnMubnNTZXBhcmF0b3IgJiYgIWxvb2tzTGlrZU9iamVjdFBhdGgoa2V5LCBuc1NlcGFyYXRvciwga2V5U2VwYXJhdG9yKTtcbiAgICBpZiAod291bGRDaGVja0Zvck5zSW5LZXkgJiYgIXNlZW1zTmF0dXJhbExhbmd1YWdlKSB7XG4gICAgICBjb25zdCBtID0ga2V5Lm1hdGNoKHRoaXMuaW50ZXJwb2xhdG9yLm5lc3RpbmdSZWdleHApO1xuICAgICAgaWYgKG0gJiYgbS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2V5LFxuICAgICAgICAgIG5hbWVzcGFjZXM6IGlzU3RyaW5nKG5hbWVzcGFjZXMpID8gW25hbWVzcGFjZXNdIDogbmFtZXNwYWNlc1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgY29uc3QgcGFydHMgPSBrZXkuc3BsaXQobnNTZXBhcmF0b3IpO1xuICAgICAgaWYgKG5zU2VwYXJhdG9yICE9PSBrZXlTZXBhcmF0b3IgfHwgbnNTZXBhcmF0b3IgPT09IGtleVNlcGFyYXRvciAmJiB0aGlzLm9wdGlvbnMubnMuaW5kZXhPZihwYXJ0c1swXSkgPiAtMSkgbmFtZXNwYWNlcyA9IHBhcnRzLnNoaWZ0KCk7XG4gICAgICBrZXkgPSBwYXJ0cy5qb2luKGtleVNlcGFyYXRvcik7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBrZXksXG4gICAgICBuYW1lc3BhY2VzOiBpc1N0cmluZyhuYW1lc3BhY2VzKSA/IFtuYW1lc3BhY2VzXSA6IG5hbWVzcGFjZXNcbiAgICB9O1xuICB9XG4gIHRyYW5zbGF0ZShrZXlzLCBvcHRpb25zLCBsYXN0S2V5KSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0JyAmJiB0aGlzLm9wdGlvbnMub3ZlcmxvYWRUcmFuc2xhdGlvbk9wdGlvbkhhbmRsZXIpIHtcbiAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMub3ZlcmxvYWRUcmFuc2xhdGlvbk9wdGlvbkhhbmRsZXIoYXJndW1lbnRzKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykgb3B0aW9ucyA9IHtcbiAgICAgIC4uLm9wdGlvbnNcbiAgICB9O1xuICAgIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuICAgIGlmIChrZXlzID09PSB1bmRlZmluZWQgfHwga2V5cyA9PT0gbnVsbCkgcmV0dXJuICcnO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkga2V5cyA9IFtTdHJpbmcoa2V5cyldO1xuICAgIGNvbnN0IHJldHVybkRldGFpbHMgPSBvcHRpb25zLnJldHVybkRldGFpbHMgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMucmV0dXJuRGV0YWlscyA6IHRoaXMub3B0aW9ucy5yZXR1cm5EZXRhaWxzO1xuICAgIGNvbnN0IGtleVNlcGFyYXRvciA9IG9wdGlvbnMua2V5U2VwYXJhdG9yICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmtleVNlcGFyYXRvciA6IHRoaXMub3B0aW9ucy5rZXlTZXBhcmF0b3I7XG4gICAgY29uc3Qge1xuICAgICAga2V5LFxuICAgICAgbmFtZXNwYWNlc1xuICAgIH0gPSB0aGlzLmV4dHJhY3RGcm9tS2V5KGtleXNba2V5cy5sZW5ndGggLSAxXSwgb3B0aW9ucyk7XG4gICAgY29uc3QgbmFtZXNwYWNlID0gbmFtZXNwYWNlc1tuYW1lc3BhY2VzLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGxuZyA9IG9wdGlvbnMubG5nIHx8IHRoaXMubGFuZ3VhZ2U7XG4gICAgY29uc3QgYXBwZW5kTmFtZXNwYWNlVG9DSU1vZGUgPSBvcHRpb25zLmFwcGVuZE5hbWVzcGFjZVRvQ0lNb2RlIHx8IHRoaXMub3B0aW9ucy5hcHBlbmROYW1lc3BhY2VUb0NJTW9kZTtcbiAgICBpZiAobG5nICYmIGxuZy50b0xvd2VyQ2FzZSgpID09PSAnY2ltb2RlJykge1xuICAgICAgaWYgKGFwcGVuZE5hbWVzcGFjZVRvQ0lNb2RlKSB7XG4gICAgICAgIGNvbnN0IG5zU2VwYXJhdG9yID0gb3B0aW9ucy5uc1NlcGFyYXRvciB8fCB0aGlzLm9wdGlvbnMubnNTZXBhcmF0b3I7XG4gICAgICAgIGlmIChyZXR1cm5EZXRhaWxzKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlczogYCR7bmFtZXNwYWNlfSR7bnNTZXBhcmF0b3J9JHtrZXl9YCxcbiAgICAgICAgICAgIHVzZWRLZXk6IGtleSxcbiAgICAgICAgICAgIGV4YWN0VXNlZEtleToga2V5LFxuICAgICAgICAgICAgdXNlZExuZzogbG5nLFxuICAgICAgICAgICAgdXNlZE5TOiBuYW1lc3BhY2UsXG4gICAgICAgICAgICB1c2VkUGFyYW1zOiB0aGlzLmdldFVzZWRQYXJhbXNEZXRhaWxzKG9wdGlvbnMpXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7bmFtZXNwYWNlfSR7bnNTZXBhcmF0b3J9JHtrZXl9YDtcbiAgICAgIH1cbiAgICAgIGlmIChyZXR1cm5EZXRhaWxzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcmVzOiBrZXksXG4gICAgICAgICAgdXNlZEtleToga2V5LFxuICAgICAgICAgIGV4YWN0VXNlZEtleToga2V5LFxuICAgICAgICAgIHVzZWRMbmc6IGxuZyxcbiAgICAgICAgICB1c2VkTlM6IG5hbWVzcGFjZSxcbiAgICAgICAgICB1c2VkUGFyYW1zOiB0aGlzLmdldFVzZWRQYXJhbXNEZXRhaWxzKG9wdGlvbnMpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgICBjb25zdCByZXNvbHZlZCA9IHRoaXMucmVzb2x2ZShrZXlzLCBvcHRpb25zKTtcbiAgICBsZXQgcmVzID0gcmVzb2x2ZWQgJiYgcmVzb2x2ZWQucmVzO1xuICAgIGNvbnN0IHJlc1VzZWRLZXkgPSByZXNvbHZlZCAmJiByZXNvbHZlZC51c2VkS2V5IHx8IGtleTtcbiAgICBjb25zdCByZXNFeGFjdFVzZWRLZXkgPSByZXNvbHZlZCAmJiByZXNvbHZlZC5leGFjdFVzZWRLZXkgfHwga2V5O1xuICAgIGNvbnN0IHJlc1R5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmFwcGx5KHJlcyk7XG4gICAgY29uc3Qgbm9PYmplY3QgPSBbJ1tvYmplY3QgTnVtYmVyXScsICdbb2JqZWN0IEZ1bmN0aW9uXScsICdbb2JqZWN0IFJlZ0V4cF0nXTtcbiAgICBjb25zdCBqb2luQXJyYXlzID0gb3B0aW9ucy5qb2luQXJyYXlzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmpvaW5BcnJheXMgOiB0aGlzLm9wdGlvbnMuam9pbkFycmF5cztcbiAgICBjb25zdCBoYW5kbGVBc09iamVjdEluSTE4bkZvcm1hdCA9ICF0aGlzLmkxOG5Gb3JtYXQgfHwgdGhpcy5pMThuRm9ybWF0LmhhbmRsZUFzT2JqZWN0O1xuICAgIGNvbnN0IGhhbmRsZUFzT2JqZWN0ID0gIWlzU3RyaW5nKHJlcykgJiYgdHlwZW9mIHJlcyAhPT0gJ2Jvb2xlYW4nICYmIHR5cGVvZiByZXMgIT09ICdudW1iZXInO1xuICAgIGlmIChoYW5kbGVBc09iamVjdEluSTE4bkZvcm1hdCAmJiByZXMgJiYgaGFuZGxlQXNPYmplY3QgJiYgbm9PYmplY3QuaW5kZXhPZihyZXNUeXBlKSA8IDAgJiYgIShpc1N0cmluZyhqb2luQXJyYXlzKSAmJiBBcnJheS5pc0FycmF5KHJlcykpKSB7XG4gICAgICBpZiAoIW9wdGlvbnMucmV0dXJuT2JqZWN0cyAmJiAhdGhpcy5vcHRpb25zLnJldHVybk9iamVjdHMpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMucmV0dXJuZWRPYmplY3RIYW5kbGVyKSB7XG4gICAgICAgICAgdGhpcy5sb2dnZXIud2FybignYWNjZXNzaW5nIGFuIG9iamVjdCAtIGJ1dCByZXR1cm5PYmplY3RzIG9wdGlvbnMgaXMgbm90IGVuYWJsZWQhJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgciA9IHRoaXMub3B0aW9ucy5yZXR1cm5lZE9iamVjdEhhbmRsZXIgPyB0aGlzLm9wdGlvbnMucmV0dXJuZWRPYmplY3RIYW5kbGVyKHJlc1VzZWRLZXksIHJlcywge1xuICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgbnM6IG5hbWVzcGFjZXNcbiAgICAgICAgfSkgOiBga2V5ICcke2tleX0gKCR7dGhpcy5sYW5ndWFnZX0pJyByZXR1cm5lZCBhbiBvYmplY3QgaW5zdGVhZCBvZiBzdHJpbmcuYDtcbiAgICAgICAgaWYgKHJldHVybkRldGFpbHMpIHtcbiAgICAgICAgICByZXNvbHZlZC5yZXMgPSByO1xuICAgICAgICAgIHJlc29sdmVkLnVzZWRQYXJhbXMgPSB0aGlzLmdldFVzZWRQYXJhbXNEZXRhaWxzKG9wdGlvbnMpO1xuICAgICAgICAgIHJldHVybiByZXNvbHZlZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXlTZXBhcmF0b3IpIHtcbiAgICAgICAgY29uc3QgcmVzVHlwZUlzQXJyYXkgPSBBcnJheS5pc0FycmF5KHJlcyk7XG4gICAgICAgIGNvbnN0IGNvcHkgPSByZXNUeXBlSXNBcnJheSA/IFtdIDoge307XG4gICAgICAgIGNvbnN0IG5ld0tleVRvVXNlID0gcmVzVHlwZUlzQXJyYXkgPyByZXNFeGFjdFVzZWRLZXkgOiByZXNVc2VkS2V5O1xuICAgICAgICBmb3IgKGNvbnN0IG0gaW4gcmVzKSB7XG4gICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZXMsIG0pKSB7XG4gICAgICAgICAgICBjb25zdCBkZWVwS2V5ID0gYCR7bmV3S2V5VG9Vc2V9JHtrZXlTZXBhcmF0b3J9JHttfWA7XG4gICAgICAgICAgICBjb3B5W21dID0gdGhpcy50cmFuc2xhdGUoZGVlcEtleSwge1xuICAgICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgICAgICAuLi57XG4gICAgICAgICAgICAgICAgam9pbkFycmF5czogZmFsc2UsXG4gICAgICAgICAgICAgICAgbnM6IG5hbWVzcGFjZXNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoY29weVttXSA9PT0gZGVlcEtleSkgY29weVttXSA9IHJlc1ttXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzID0gY29weTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGhhbmRsZUFzT2JqZWN0SW5JMThuRm9ybWF0ICYmIGlzU3RyaW5nKGpvaW5BcnJheXMpICYmIEFycmF5LmlzQXJyYXkocmVzKSkge1xuICAgICAgcmVzID0gcmVzLmpvaW4oam9pbkFycmF5cyk7XG4gICAgICBpZiAocmVzKSByZXMgPSB0aGlzLmV4dGVuZFRyYW5zbGF0aW9uKHJlcywga2V5cywgb3B0aW9ucywgbGFzdEtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB1c2VkRGVmYXVsdCA9IGZhbHNlO1xuICAgICAgbGV0IHVzZWRLZXkgPSBmYWxzZTtcbiAgICAgIGNvbnN0IG5lZWRzUGx1cmFsSGFuZGxpbmcgPSBvcHRpb25zLmNvdW50ICE9PSB1bmRlZmluZWQgJiYgIWlzU3RyaW5nKG9wdGlvbnMuY291bnQpO1xuICAgICAgY29uc3QgaGFzRGVmYXVsdFZhbHVlID0gVHJhbnNsYXRvci5oYXNEZWZhdWx0VmFsdWUob3B0aW9ucyk7XG4gICAgICBjb25zdCBkZWZhdWx0VmFsdWVTdWZmaXggPSBuZWVkc1BsdXJhbEhhbmRsaW5nID8gdGhpcy5wbHVyYWxSZXNvbHZlci5nZXRTdWZmaXgobG5nLCBvcHRpb25zLmNvdW50LCBvcHRpb25zKSA6ICcnO1xuICAgICAgY29uc3QgZGVmYXVsdFZhbHVlU3VmZml4T3JkaW5hbEZhbGxiYWNrID0gb3B0aW9ucy5vcmRpbmFsICYmIG5lZWRzUGx1cmFsSGFuZGxpbmcgPyB0aGlzLnBsdXJhbFJlc29sdmVyLmdldFN1ZmZpeChsbmcsIG9wdGlvbnMuY291bnQsIHtcbiAgICAgICAgb3JkaW5hbDogZmFsc2VcbiAgICAgIH0pIDogJyc7XG4gICAgICBjb25zdCBuZWVkc1plcm9TdWZmaXhMb29rdXAgPSBuZWVkc1BsdXJhbEhhbmRsaW5nICYmICFvcHRpb25zLm9yZGluYWwgJiYgb3B0aW9ucy5jb3VudCA9PT0gMCAmJiB0aGlzLnBsdXJhbFJlc29sdmVyLnNob3VsZFVzZUludGxBcGkoKTtcbiAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IG5lZWRzWmVyb1N1ZmZpeExvb2t1cCAmJiBvcHRpb25zW2BkZWZhdWx0VmFsdWUke3RoaXMub3B0aW9ucy5wbHVyYWxTZXBhcmF0b3J9emVyb2BdIHx8IG9wdGlvbnNbYGRlZmF1bHRWYWx1ZSR7ZGVmYXVsdFZhbHVlU3VmZml4fWBdIHx8IG9wdGlvbnNbYGRlZmF1bHRWYWx1ZSR7ZGVmYXVsdFZhbHVlU3VmZml4T3JkaW5hbEZhbGxiYWNrfWBdIHx8IG9wdGlvbnMuZGVmYXVsdFZhbHVlO1xuICAgICAgaWYgKCF0aGlzLmlzVmFsaWRMb29rdXAocmVzKSAmJiBoYXNEZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgdXNlZERlZmF1bHQgPSB0cnVlO1xuICAgICAgICByZXMgPSBkZWZhdWx0VmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuaXNWYWxpZExvb2t1cChyZXMpKSB7XG4gICAgICAgIHVzZWRLZXkgPSB0cnVlO1xuICAgICAgICByZXMgPSBrZXk7XG4gICAgICB9XG4gICAgICBjb25zdCBtaXNzaW5nS2V5Tm9WYWx1ZUZhbGxiYWNrVG9LZXkgPSBvcHRpb25zLm1pc3NpbmdLZXlOb1ZhbHVlRmFsbGJhY2tUb0tleSB8fCB0aGlzLm9wdGlvbnMubWlzc2luZ0tleU5vVmFsdWVGYWxsYmFja1RvS2V5O1xuICAgICAgY29uc3QgcmVzRm9yTWlzc2luZyA9IG1pc3NpbmdLZXlOb1ZhbHVlRmFsbGJhY2tUb0tleSAmJiB1c2VkS2V5ID8gdW5kZWZpbmVkIDogcmVzO1xuICAgICAgY29uc3QgdXBkYXRlTWlzc2luZyA9IGhhc0RlZmF1bHRWYWx1ZSAmJiBkZWZhdWx0VmFsdWUgIT09IHJlcyAmJiB0aGlzLm9wdGlvbnMudXBkYXRlTWlzc2luZztcbiAgICAgIGlmICh1c2VkS2V5IHx8IHVzZWREZWZhdWx0IHx8IHVwZGF0ZU1pc3NpbmcpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKHVwZGF0ZU1pc3NpbmcgPyAndXBkYXRlS2V5JyA6ICdtaXNzaW5nS2V5JywgbG5nLCBuYW1lc3BhY2UsIGtleSwgdXBkYXRlTWlzc2luZyA/IGRlZmF1bHRWYWx1ZSA6IHJlcyk7XG4gICAgICAgIGlmIChrZXlTZXBhcmF0b3IpIHtcbiAgICAgICAgICBjb25zdCBmayA9IHRoaXMucmVzb2x2ZShrZXksIHtcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICBrZXlTZXBhcmF0b3I6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGZrICYmIGZrLnJlcykgdGhpcy5sb2dnZXIud2FybignU2VlbXMgdGhlIGxvYWRlZCB0cmFuc2xhdGlvbnMgd2VyZSBpbiBmbGF0IEpTT04gZm9ybWF0IGluc3RlYWQgb2YgbmVzdGVkLiBFaXRoZXIgc2V0IGtleVNlcGFyYXRvcjogZmFsc2Ugb24gaW5pdCBvciBtYWtlIHN1cmUgeW91ciB0cmFuc2xhdGlvbnMgYXJlIHB1Ymxpc2hlZCBpbiBuZXN0ZWQgZm9ybWF0LicpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBsbmdzID0gW107XG4gICAgICAgIGNvbnN0IGZhbGxiYWNrTG5ncyA9IHRoaXMubGFuZ3VhZ2VVdGlscy5nZXRGYWxsYmFja0NvZGVzKHRoaXMub3B0aW9ucy5mYWxsYmFja0xuZywgb3B0aW9ucy5sbmcgfHwgdGhpcy5sYW5ndWFnZSk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2F2ZU1pc3NpbmdUbyA9PT0gJ2ZhbGxiYWNrJyAmJiBmYWxsYmFja0xuZ3MgJiYgZmFsbGJhY2tMbmdzWzBdKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmYWxsYmFja0xuZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxuZ3MucHVzaChmYWxsYmFja0xuZ3NbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuc2F2ZU1pc3NpbmdUbyA9PT0gJ2FsbCcpIHtcbiAgICAgICAgICBsbmdzID0gdGhpcy5sYW5ndWFnZVV0aWxzLnRvUmVzb2x2ZUhpZXJhcmNoeShvcHRpb25zLmxuZyB8fCB0aGlzLmxhbmd1YWdlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsbmdzLnB1c2gob3B0aW9ucy5sbmcgfHwgdGhpcy5sYW5ndWFnZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2VuZCA9IChsLCBrLCBzcGVjaWZpY0RlZmF1bHRWYWx1ZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRlZmF1bHRGb3JNaXNzaW5nID0gaGFzRGVmYXVsdFZhbHVlICYmIHNwZWNpZmljRGVmYXVsdFZhbHVlICE9PSByZXMgPyBzcGVjaWZpY0RlZmF1bHRWYWx1ZSA6IHJlc0Zvck1pc3Npbmc7XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5taXNzaW5nS2V5SGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1pc3NpbmdLZXlIYW5kbGVyKGwsIG5hbWVzcGFjZSwgaywgZGVmYXVsdEZvck1pc3NpbmcsIHVwZGF0ZU1pc3NpbmcsIG9wdGlvbnMpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5iYWNrZW5kQ29ubmVjdG9yICYmIHRoaXMuYmFja2VuZENvbm5lY3Rvci5zYXZlTWlzc2luZykge1xuICAgICAgICAgICAgdGhpcy5iYWNrZW5kQ29ubmVjdG9yLnNhdmVNaXNzaW5nKGwsIG5hbWVzcGFjZSwgaywgZGVmYXVsdEZvck1pc3NpbmcsIHVwZGF0ZU1pc3NpbmcsIG9wdGlvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmVtaXQoJ21pc3NpbmdLZXknLCBsLCBuYW1lc3BhY2UsIGssIHJlcyk7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2F2ZU1pc3NpbmcpIHtcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNhdmVNaXNzaW5nUGx1cmFscyAmJiBuZWVkc1BsdXJhbEhhbmRsaW5nKSB7XG4gICAgICAgICAgICBsbmdzLmZvckVhY2gobGFuZ3VhZ2UgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdWZmaXhlcyA9IHRoaXMucGx1cmFsUmVzb2x2ZXIuZ2V0U3VmZml4ZXMobGFuZ3VhZ2UsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICBpZiAobmVlZHNaZXJvU3VmZml4TG9va3VwICYmIG9wdGlvbnNbYGRlZmF1bHRWYWx1ZSR7dGhpcy5vcHRpb25zLnBsdXJhbFNlcGFyYXRvcn16ZXJvYF0gJiYgc3VmZml4ZXMuaW5kZXhPZihgJHt0aGlzLm9wdGlvbnMucGx1cmFsU2VwYXJhdG9yfXplcm9gKSA8IDApIHtcbiAgICAgICAgICAgICAgICBzdWZmaXhlcy5wdXNoKGAke3RoaXMub3B0aW9ucy5wbHVyYWxTZXBhcmF0b3J9emVyb2ApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHN1ZmZpeGVzLmZvckVhY2goc3VmZml4ID0+IHtcbiAgICAgICAgICAgICAgICBzZW5kKFtsYW5ndWFnZV0sIGtleSArIHN1ZmZpeCwgb3B0aW9uc1tgZGVmYXVsdFZhbHVlJHtzdWZmaXh9YF0gfHwgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VuZChsbmdzLCBrZXksIGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXMgPSB0aGlzLmV4dGVuZFRyYW5zbGF0aW9uKHJlcywga2V5cywgb3B0aW9ucywgcmVzb2x2ZWQsIGxhc3RLZXkpO1xuICAgICAgaWYgKHVzZWRLZXkgJiYgcmVzID09PSBrZXkgJiYgdGhpcy5vcHRpb25zLmFwcGVuZE5hbWVzcGFjZVRvTWlzc2luZ0tleSkgcmVzID0gYCR7bmFtZXNwYWNlfToke2tleX1gO1xuICAgICAgaWYgKCh1c2VkS2V5IHx8IHVzZWREZWZhdWx0KSAmJiB0aGlzLm9wdGlvbnMucGFyc2VNaXNzaW5nS2V5SGFuZGxlcikge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlBUEkgIT09ICd2MScpIHtcbiAgICAgICAgICByZXMgPSB0aGlzLm9wdGlvbnMucGFyc2VNaXNzaW5nS2V5SGFuZGxlcih0aGlzLm9wdGlvbnMuYXBwZW5kTmFtZXNwYWNlVG9NaXNzaW5nS2V5ID8gYCR7bmFtZXNwYWNlfToke2tleX1gIDoga2V5LCB1c2VkRGVmYXVsdCA/IHJlcyA6IHVuZGVmaW5lZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzID0gdGhpcy5vcHRpb25zLnBhcnNlTWlzc2luZ0tleUhhbmRsZXIocmVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocmV0dXJuRGV0YWlscykge1xuICAgICAgcmVzb2x2ZWQucmVzID0gcmVzO1xuICAgICAgcmVzb2x2ZWQudXNlZFBhcmFtcyA9IHRoaXMuZ2V0VXNlZFBhcmFtc0RldGFpbHMob3B0aW9ucyk7XG4gICAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cbiAgZXh0ZW5kVHJhbnNsYXRpb24ocmVzLCBrZXksIG9wdGlvbnMsIHJlc29sdmVkLCBsYXN0S2V5KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBpZiAodGhpcy5pMThuRm9ybWF0ICYmIHRoaXMuaTE4bkZvcm1hdC5wYXJzZSkge1xuICAgICAgcmVzID0gdGhpcy5pMThuRm9ybWF0LnBhcnNlKHJlcywge1xuICAgICAgICAuLi50aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5kZWZhdWx0VmFyaWFibGVzLFxuICAgICAgICAuLi5vcHRpb25zXG4gICAgICB9LCBvcHRpb25zLmxuZyB8fCB0aGlzLmxhbmd1YWdlIHx8IHJlc29sdmVkLnVzZWRMbmcsIHJlc29sdmVkLnVzZWROUywgcmVzb2x2ZWQudXNlZEtleSwge1xuICAgICAgICByZXNvbHZlZFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICghb3B0aW9ucy5za2lwSW50ZXJwb2xhdGlvbikge1xuICAgICAgaWYgKG9wdGlvbnMuaW50ZXJwb2xhdGlvbikgdGhpcy5pbnRlcnBvbGF0b3IuaW5pdCh7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIC4uLntcbiAgICAgICAgICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgICAgICAgICAuLi50aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbixcbiAgICAgICAgICAgIC4uLm9wdGlvbnMuaW50ZXJwb2xhdGlvblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCBza2lwT25WYXJpYWJsZXMgPSBpc1N0cmluZyhyZXMpICYmIChvcHRpb25zICYmIG9wdGlvbnMuaW50ZXJwb2xhdGlvbiAmJiBvcHRpb25zLmludGVycG9sYXRpb24uc2tpcE9uVmFyaWFibGVzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmludGVycG9sYXRpb24uc2tpcE9uVmFyaWFibGVzIDogdGhpcy5vcHRpb25zLmludGVycG9sYXRpb24uc2tpcE9uVmFyaWFibGVzKTtcbiAgICAgIGxldCBuZXN0QmVmO1xuICAgICAgaWYgKHNraXBPblZhcmlhYmxlcykge1xuICAgICAgICBjb25zdCBuYiA9IHJlcy5tYXRjaCh0aGlzLmludGVycG9sYXRvci5uZXN0aW5nUmVnZXhwKTtcbiAgICAgICAgbmVzdEJlZiA9IG5iICYmIG5iLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIGxldCBkYXRhID0gb3B0aW9ucy5yZXBsYWNlICYmICFpc1N0cmluZyhvcHRpb25zLnJlcGxhY2UpID8gb3B0aW9ucy5yZXBsYWNlIDogb3B0aW9ucztcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5kZWZhdWx0VmFyaWFibGVzKSBkYXRhID0ge1xuICAgICAgICAuLi50aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5kZWZhdWx0VmFyaWFibGVzLFxuICAgICAgICAuLi5kYXRhXG4gICAgICB9O1xuICAgICAgcmVzID0gdGhpcy5pbnRlcnBvbGF0b3IuaW50ZXJwb2xhdGUocmVzLCBkYXRhLCBvcHRpb25zLmxuZyB8fCB0aGlzLmxhbmd1YWdlIHx8IHJlc29sdmVkLnVzZWRMbmcsIG9wdGlvbnMpO1xuICAgICAgaWYgKHNraXBPblZhcmlhYmxlcykge1xuICAgICAgICBjb25zdCBuYSA9IHJlcy5tYXRjaCh0aGlzLmludGVycG9sYXRvci5uZXN0aW5nUmVnZXhwKTtcbiAgICAgICAgY29uc3QgbmVzdEFmdCA9IG5hICYmIG5hLmxlbmd0aDtcbiAgICAgICAgaWYgKG5lc3RCZWYgPCBuZXN0QWZ0KSBvcHRpb25zLm5lc3QgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICghb3B0aW9ucy5sbmcgJiYgdGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlBUEkgIT09ICd2MScgJiYgcmVzb2x2ZWQgJiYgcmVzb2x2ZWQucmVzKSBvcHRpb25zLmxuZyA9IHRoaXMubGFuZ3VhZ2UgfHwgcmVzb2x2ZWQudXNlZExuZztcbiAgICAgIGlmIChvcHRpb25zLm5lc3QgIT09IGZhbHNlKSByZXMgPSB0aGlzLmludGVycG9sYXRvci5uZXN0KHJlcywgZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXN0S2V5ICYmIGxhc3RLZXlbMF0gPT09IGFyZ3NbMF0gJiYgIW9wdGlvbnMuY29udGV4dCkge1xuICAgICAgICAgIF90aGlzLmxvZ2dlci53YXJuKGBJdCBzZWVtcyB5b3UgYXJlIG5lc3RpbmcgcmVjdXJzaXZlbHkga2V5OiAke2FyZ3NbMF19IGluIGtleTogJHtrZXlbMF19YCk7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzLnRyYW5zbGF0ZSguLi5hcmdzLCBrZXkpO1xuICAgICAgfSwgb3B0aW9ucyk7XG4gICAgICBpZiAob3B0aW9ucy5pbnRlcnBvbGF0aW9uKSB0aGlzLmludGVycG9sYXRvci5yZXNldCgpO1xuICAgIH1cbiAgICBjb25zdCBwb3N0UHJvY2VzcyA9IG9wdGlvbnMucG9zdFByb2Nlc3MgfHwgdGhpcy5vcHRpb25zLnBvc3RQcm9jZXNzO1xuICAgIGNvbnN0IHBvc3RQcm9jZXNzb3JOYW1lcyA9IGlzU3RyaW5nKHBvc3RQcm9jZXNzKSA/IFtwb3N0UHJvY2Vzc10gOiBwb3N0UHJvY2VzcztcbiAgICBpZiAocmVzICE9PSB1bmRlZmluZWQgJiYgcmVzICE9PSBudWxsICYmIHBvc3RQcm9jZXNzb3JOYW1lcyAmJiBwb3N0UHJvY2Vzc29yTmFtZXMubGVuZ3RoICYmIG9wdGlvbnMuYXBwbHlQb3N0UHJvY2Vzc29yICE9PSBmYWxzZSkge1xuICAgICAgcmVzID0gcG9zdFByb2Nlc3Nvci5oYW5kbGUocG9zdFByb2Nlc3Nvck5hbWVzLCByZXMsIGtleSwgdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5wb3N0UHJvY2Vzc1Bhc3NSZXNvbHZlZCA/IHtcbiAgICAgICAgaTE4blJlc29sdmVkOiB7XG4gICAgICAgICAgLi4ucmVzb2x2ZWQsXG4gICAgICAgICAgdXNlZFBhcmFtczogdGhpcy5nZXRVc2VkUGFyYW1zRGV0YWlscyhvcHRpb25zKVxuICAgICAgICB9LFxuICAgICAgICAuLi5vcHRpb25zXG4gICAgICB9IDogb3B0aW9ucywgdGhpcyk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cbiAgcmVzb2x2ZShrZXlzKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIGxldCBmb3VuZDtcbiAgICBsZXQgdXNlZEtleTtcbiAgICBsZXQgZXhhY3RVc2VkS2V5O1xuICAgIGxldCB1c2VkTG5nO1xuICAgIGxldCB1c2VkTlM7XG4gICAgaWYgKGlzU3RyaW5nKGtleXMpKSBrZXlzID0gW2tleXNdO1xuICAgIGtleXMuZm9yRWFjaChrID0+IHtcbiAgICAgIGlmICh0aGlzLmlzVmFsaWRMb29rdXAoZm91bmQpKSByZXR1cm47XG4gICAgICBjb25zdCBleHRyYWN0ZWQgPSB0aGlzLmV4dHJhY3RGcm9tS2V5KGssIG9wdGlvbnMpO1xuICAgICAgY29uc3Qga2V5ID0gZXh0cmFjdGVkLmtleTtcbiAgICAgIHVzZWRLZXkgPSBrZXk7XG4gICAgICBsZXQgbmFtZXNwYWNlcyA9IGV4dHJhY3RlZC5uYW1lc3BhY2VzO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5mYWxsYmFja05TKSBuYW1lc3BhY2VzID0gbmFtZXNwYWNlcy5jb25jYXQodGhpcy5vcHRpb25zLmZhbGxiYWNrTlMpO1xuICAgICAgY29uc3QgbmVlZHNQbHVyYWxIYW5kbGluZyA9IG9wdGlvbnMuY291bnQgIT09IHVuZGVmaW5lZCAmJiAhaXNTdHJpbmcob3B0aW9ucy5jb3VudCk7XG4gICAgICBjb25zdCBuZWVkc1plcm9TdWZmaXhMb29rdXAgPSBuZWVkc1BsdXJhbEhhbmRsaW5nICYmICFvcHRpb25zLm9yZGluYWwgJiYgb3B0aW9ucy5jb3VudCA9PT0gMCAmJiB0aGlzLnBsdXJhbFJlc29sdmVyLnNob3VsZFVzZUludGxBcGkoKTtcbiAgICAgIGNvbnN0IG5lZWRzQ29udGV4dEhhbmRsaW5nID0gb3B0aW9ucy5jb250ZXh0ICE9PSB1bmRlZmluZWQgJiYgKGlzU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgfHwgdHlwZW9mIG9wdGlvbnMuY29udGV4dCA9PT0gJ251bWJlcicpICYmIG9wdGlvbnMuY29udGV4dCAhPT0gJyc7XG4gICAgICBjb25zdCBjb2RlcyA9IG9wdGlvbnMubG5ncyA/IG9wdGlvbnMubG5ncyA6IHRoaXMubGFuZ3VhZ2VVdGlscy50b1Jlc29sdmVIaWVyYXJjaHkob3B0aW9ucy5sbmcgfHwgdGhpcy5sYW5ndWFnZSwgb3B0aW9ucy5mYWxsYmFja0xuZyk7XG4gICAgICBuYW1lc3BhY2VzLmZvckVhY2gobnMgPT4ge1xuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkTG9va3VwKGZvdW5kKSkgcmV0dXJuO1xuICAgICAgICB1c2VkTlMgPSBucztcbiAgICAgICAgaWYgKCFjaGVja2VkTG9hZGVkRm9yW2Ake2NvZGVzWzBdfS0ke25zfWBdICYmIHRoaXMudXRpbHMgJiYgdGhpcy51dGlscy5oYXNMb2FkZWROYW1lc3BhY2UgJiYgIXRoaXMudXRpbHMuaGFzTG9hZGVkTmFtZXNwYWNlKHVzZWROUykpIHtcbiAgICAgICAgICBjaGVja2VkTG9hZGVkRm9yW2Ake2NvZGVzWzBdfS0ke25zfWBdID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmxvZ2dlci53YXJuKGBrZXkgXCIke3VzZWRLZXl9XCIgZm9yIGxhbmd1YWdlcyBcIiR7Y29kZXMuam9pbignLCAnKX1cIiB3b24ndCBnZXQgcmVzb2x2ZWQgYXMgbmFtZXNwYWNlIFwiJHt1c2VkTlN9XCIgd2FzIG5vdCB5ZXQgbG9hZGVkYCwgJ1RoaXMgbWVhbnMgc29tZXRoaW5nIElTIFdST05HIGluIHlvdXIgc2V0dXAuIFlvdSBhY2Nlc3MgdGhlIHQgZnVuY3Rpb24gYmVmb3JlIGkxOG5leHQuaW5pdCAvIGkxOG5leHQubG9hZE5hbWVzcGFjZSAvIGkxOG5leHQuY2hhbmdlTGFuZ3VhZ2Ugd2FzIGRvbmUuIFdhaXQgZm9yIHRoZSBjYWxsYmFjayBvciBQcm9taXNlIHRvIHJlc29sdmUgYmVmb3JlIGFjY2Vzc2luZyBpdCEhIScpO1xuICAgICAgICB9XG4gICAgICAgIGNvZGVzLmZvckVhY2goY29kZSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZExvb2t1cChmb3VuZCkpIHJldHVybjtcbiAgICAgICAgICB1c2VkTG5nID0gY29kZTtcbiAgICAgICAgICBjb25zdCBmaW5hbEtleXMgPSBba2V5XTtcbiAgICAgICAgICBpZiAodGhpcy5pMThuRm9ybWF0ICYmIHRoaXMuaTE4bkZvcm1hdC5hZGRMb29rdXBLZXlzKSB7XG4gICAgICAgICAgICB0aGlzLmkxOG5Gb3JtYXQuYWRkTG9va3VwS2V5cyhmaW5hbEtleXMsIGtleSwgY29kZSwgbnMsIG9wdGlvbnMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcGx1cmFsU3VmZml4O1xuICAgICAgICAgICAgaWYgKG5lZWRzUGx1cmFsSGFuZGxpbmcpIHBsdXJhbFN1ZmZpeCA9IHRoaXMucGx1cmFsUmVzb2x2ZXIuZ2V0U3VmZml4KGNvZGUsIG9wdGlvbnMuY291bnQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgY29uc3QgemVyb1N1ZmZpeCA9IGAke3RoaXMub3B0aW9ucy5wbHVyYWxTZXBhcmF0b3J9emVyb2A7XG4gICAgICAgICAgICBjb25zdCBvcmRpbmFsUHJlZml4ID0gYCR7dGhpcy5vcHRpb25zLnBsdXJhbFNlcGFyYXRvcn1vcmRpbmFsJHt0aGlzLm9wdGlvbnMucGx1cmFsU2VwYXJhdG9yfWA7XG4gICAgICAgICAgICBpZiAobmVlZHNQbHVyYWxIYW5kbGluZykge1xuICAgICAgICAgICAgICBmaW5hbEtleXMucHVzaChrZXkgKyBwbHVyYWxTdWZmaXgpO1xuICAgICAgICAgICAgICBpZiAob3B0aW9ucy5vcmRpbmFsICYmIHBsdXJhbFN1ZmZpeC5pbmRleE9mKG9yZGluYWxQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZmluYWxLZXlzLnB1c2goa2V5ICsgcGx1cmFsU3VmZml4LnJlcGxhY2Uob3JkaW5hbFByZWZpeCwgdGhpcy5vcHRpb25zLnBsdXJhbFNlcGFyYXRvcikpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChuZWVkc1plcm9TdWZmaXhMb29rdXApIHtcbiAgICAgICAgICAgICAgICBmaW5hbEtleXMucHVzaChrZXkgKyB6ZXJvU3VmZml4KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5lZWRzQ29udGV4dEhhbmRsaW5nKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbnRleHRLZXkgPSBgJHtrZXl9JHt0aGlzLm9wdGlvbnMuY29udGV4dFNlcGFyYXRvcn0ke29wdGlvbnMuY29udGV4dH1gO1xuICAgICAgICAgICAgICBmaW5hbEtleXMucHVzaChjb250ZXh0S2V5KTtcbiAgICAgICAgICAgICAgaWYgKG5lZWRzUGx1cmFsSGFuZGxpbmcpIHtcbiAgICAgICAgICAgICAgICBmaW5hbEtleXMucHVzaChjb250ZXh0S2V5ICsgcGx1cmFsU3VmZml4KTtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5vcmRpbmFsICYmIHBsdXJhbFN1ZmZpeC5pbmRleE9mKG9yZGluYWxQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICBmaW5hbEtleXMucHVzaChjb250ZXh0S2V5ICsgcGx1cmFsU3VmZml4LnJlcGxhY2Uob3JkaW5hbFByZWZpeCwgdGhpcy5vcHRpb25zLnBsdXJhbFNlcGFyYXRvcikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobmVlZHNaZXJvU3VmZml4TG9va3VwKSB7XG4gICAgICAgICAgICAgICAgICBmaW5hbEtleXMucHVzaChjb250ZXh0S2V5ICsgemVyb1N1ZmZpeCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBwb3NzaWJsZUtleTtcbiAgICAgICAgICB3aGlsZSAocG9zc2libGVLZXkgPSBmaW5hbEtleXMucG9wKCkpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1ZhbGlkTG9va3VwKGZvdW5kKSkge1xuICAgICAgICAgICAgICBleGFjdFVzZWRLZXkgPSBwb3NzaWJsZUtleTtcbiAgICAgICAgICAgICAgZm91bmQgPSB0aGlzLmdldFJlc291cmNlKGNvZGUsIG5zLCBwb3NzaWJsZUtleSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICByZXM6IGZvdW5kLFxuICAgICAgdXNlZEtleSxcbiAgICAgIGV4YWN0VXNlZEtleSxcbiAgICAgIHVzZWRMbmcsXG4gICAgICB1c2VkTlNcbiAgICB9O1xuICB9XG4gIGlzVmFsaWRMb29rdXAocmVzKSB7XG4gICAgcmV0dXJuIHJlcyAhPT0gdW5kZWZpbmVkICYmICEoIXRoaXMub3B0aW9ucy5yZXR1cm5OdWxsICYmIHJlcyA9PT0gbnVsbCkgJiYgISghdGhpcy5vcHRpb25zLnJldHVybkVtcHR5U3RyaW5nICYmIHJlcyA9PT0gJycpO1xuICB9XG4gIGdldFJlc291cmNlKGNvZGUsIG5zLCBrZXkpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gICAgaWYgKHRoaXMuaTE4bkZvcm1hdCAmJiB0aGlzLmkxOG5Gb3JtYXQuZ2V0UmVzb3VyY2UpIHJldHVybiB0aGlzLmkxOG5Gb3JtYXQuZ2V0UmVzb3VyY2UoY29kZSwgbnMsIGtleSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXMucmVzb3VyY2VTdG9yZS5nZXRSZXNvdXJjZShjb2RlLCBucywga2V5LCBvcHRpb25zKTtcbiAgfVxuICBnZXRVc2VkUGFyYW1zRGV0YWlscygpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgY29uc3Qgb3B0aW9uc0tleXMgPSBbJ2RlZmF1bHRWYWx1ZScsICdvcmRpbmFsJywgJ2NvbnRleHQnLCAncmVwbGFjZScsICdsbmcnLCAnbG5ncycsICdmYWxsYmFja0xuZycsICducycsICdrZXlTZXBhcmF0b3InLCAnbnNTZXBhcmF0b3InLCAncmV0dXJuT2JqZWN0cycsICdyZXR1cm5EZXRhaWxzJywgJ2pvaW5BcnJheXMnLCAncG9zdFByb2Nlc3MnLCAnaW50ZXJwb2xhdGlvbiddO1xuICAgIGNvbnN0IHVzZU9wdGlvbnNSZXBsYWNlRm9yRGF0YSA9IG9wdGlvbnMucmVwbGFjZSAmJiAhaXNTdHJpbmcob3B0aW9ucy5yZXBsYWNlKTtcbiAgICBsZXQgZGF0YSA9IHVzZU9wdGlvbnNSZXBsYWNlRm9yRGF0YSA/IG9wdGlvbnMucmVwbGFjZSA6IG9wdGlvbnM7XG4gICAgaWYgKHVzZU9wdGlvbnNSZXBsYWNlRm9yRGF0YSAmJiB0eXBlb2Ygb3B0aW9ucy5jb3VudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGRhdGEuY291bnQgPSBvcHRpb25zLmNvdW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLmludGVycG9sYXRpb24uZGVmYXVsdFZhcmlhYmxlcykge1xuICAgICAgZGF0YSA9IHtcbiAgICAgICAgLi4udGhpcy5vcHRpb25zLmludGVycG9sYXRpb24uZGVmYXVsdFZhcmlhYmxlcyxcbiAgICAgICAgLi4uZGF0YVxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKCF1c2VPcHRpb25zUmVwbGFjZUZvckRhdGEpIHtcbiAgICAgIGRhdGEgPSB7XG4gICAgICAgIC4uLmRhdGFcbiAgICAgIH07XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBvcHRpb25zS2V5cykge1xuICAgICAgICBkZWxldGUgZGF0YVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuICBzdGF0aWMgaGFzRGVmYXVsdFZhbHVlKG9wdGlvbnMpIHtcbiAgICBjb25zdCBwcmVmaXggPSAnZGVmYXVsdFZhbHVlJztcbiAgICBmb3IgKGNvbnN0IG9wdGlvbiBpbiBvcHRpb25zKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9wdGlvbnMsIG9wdGlvbikgJiYgcHJlZml4ID09PSBvcHRpb24uc3Vic3RyaW5nKDAsIHByZWZpeC5sZW5ndGgpICYmIHVuZGVmaW5lZCAhPT0gb3B0aW9uc1tvcHRpb25dKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuY29uc3QgY2FwaXRhbGl6ZSA9IHN0cmluZyA9PiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG5jbGFzcyBMYW5ndWFnZVV0aWwge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnN1cHBvcnRlZExuZ3MgPSB0aGlzLm9wdGlvbnMuc3VwcG9ydGVkTG5ncyB8fCBmYWxzZTtcbiAgICB0aGlzLmxvZ2dlciA9IGJhc2VMb2dnZXIuY3JlYXRlKCdsYW5ndWFnZVV0aWxzJyk7XG4gIH1cbiAgZ2V0U2NyaXB0UGFydEZyb21Db2RlKGNvZGUpIHtcbiAgICBjb2RlID0gZ2V0Q2xlYW5lZENvZGUoY29kZSk7XG4gICAgaWYgKCFjb2RlIHx8IGNvZGUuaW5kZXhPZignLScpIDwgMCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgcCA9IGNvZGUuc3BsaXQoJy0nKTtcbiAgICBpZiAocC5sZW5ndGggPT09IDIpIHJldHVybiBudWxsO1xuICAgIHAucG9wKCk7XG4gICAgaWYgKHBbcC5sZW5ndGggLSAxXS50b0xvd2VyQ2FzZSgpID09PSAneCcpIHJldHVybiBudWxsO1xuICAgIHJldHVybiB0aGlzLmZvcm1hdExhbmd1YWdlQ29kZShwLmpvaW4oJy0nKSk7XG4gIH1cbiAgZ2V0TGFuZ3VhZ2VQYXJ0RnJvbUNvZGUoY29kZSkge1xuICAgIGNvZGUgPSBnZXRDbGVhbmVkQ29kZShjb2RlKTtcbiAgICBpZiAoIWNvZGUgfHwgY29kZS5pbmRleE9mKCctJykgPCAwKSByZXR1cm4gY29kZTtcbiAgICBjb25zdCBwID0gY29kZS5zcGxpdCgnLScpO1xuICAgIHJldHVybiB0aGlzLmZvcm1hdExhbmd1YWdlQ29kZShwWzBdKTtcbiAgfVxuICBmb3JtYXRMYW5ndWFnZUNvZGUoY29kZSkge1xuICAgIGlmIChpc1N0cmluZyhjb2RlKSAmJiBjb2RlLmluZGV4T2YoJy0nKSA+IC0xKSB7XG4gICAgICBpZiAodHlwZW9mIEludGwgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBJbnRsLmdldENhbm9uaWNhbExvY2FsZXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbGV0IGZvcm1hdHRlZENvZGUgPSBJbnRsLmdldENhbm9uaWNhbExvY2FsZXMoY29kZSlbMF07XG4gICAgICAgICAgaWYgKGZvcm1hdHRlZENvZGUgJiYgdGhpcy5vcHRpb25zLmxvd2VyQ2FzZUxuZykge1xuICAgICAgICAgICAgZm9ybWF0dGVkQ29kZSA9IGZvcm1hdHRlZENvZGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGZvcm1hdHRlZENvZGUpIHJldHVybiBmb3JtYXR0ZWRDb2RlO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuICAgICAgY29uc3Qgc3BlY2lhbENhc2VzID0gWydoYW5zJywgJ2hhbnQnLCAnbGF0bicsICdjeXJsJywgJ2NhbnMnLCAnbW9uZycsICdhcmFiJ107XG4gICAgICBsZXQgcCA9IGNvZGUuc3BsaXQoJy0nKTtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMubG93ZXJDYXNlTG5nKSB7XG4gICAgICAgIHAgPSBwLm1hcChwYXJ0ID0+IHBhcnQudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9IGVsc2UgaWYgKHAubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHBbMF0gPSBwWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHBbMV0gPSBwWzFdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGlmIChzcGVjaWFsQ2FzZXMuaW5kZXhPZihwWzFdLnRvTG93ZXJDYXNlKCkpID4gLTEpIHBbMV0gPSBjYXBpdGFsaXplKHBbMV0udG9Mb3dlckNhc2UoKSk7XG4gICAgICB9IGVsc2UgaWYgKHAubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIHBbMF0gPSBwWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChwWzFdLmxlbmd0aCA9PT0gMikgcFsxXSA9IHBbMV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgaWYgKHBbMF0gIT09ICdzZ24nICYmIHBbMl0ubGVuZ3RoID09PSAyKSBwWzJdID0gcFsyXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBpZiAoc3BlY2lhbENhc2VzLmluZGV4T2YocFsxXS50b0xvd2VyQ2FzZSgpKSA+IC0xKSBwWzFdID0gY2FwaXRhbGl6ZShwWzFdLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICBpZiAoc3BlY2lhbENhc2VzLmluZGV4T2YocFsyXS50b0xvd2VyQ2FzZSgpKSA+IC0xKSBwWzJdID0gY2FwaXRhbGl6ZShwWzJdLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHAuam9pbignLScpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNsZWFuQ29kZSB8fCB0aGlzLm9wdGlvbnMubG93ZXJDYXNlTG5nID8gY29kZS50b0xvd2VyQ2FzZSgpIDogY29kZTtcbiAgfVxuICBpc1N1cHBvcnRlZENvZGUoY29kZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMubG9hZCA9PT0gJ2xhbmd1YWdlT25seScgfHwgdGhpcy5vcHRpb25zLm5vbkV4cGxpY2l0U3VwcG9ydGVkTG5ncykge1xuICAgICAgY29kZSA9IHRoaXMuZ2V0TGFuZ3VhZ2VQYXJ0RnJvbUNvZGUoY29kZSk7XG4gICAgfVxuICAgIHJldHVybiAhdGhpcy5zdXBwb3J0ZWRMbmdzIHx8ICF0aGlzLnN1cHBvcnRlZExuZ3MubGVuZ3RoIHx8IHRoaXMuc3VwcG9ydGVkTG5ncy5pbmRleE9mKGNvZGUpID4gLTE7XG4gIH1cbiAgZ2V0QmVzdE1hdGNoRnJvbUNvZGVzKGNvZGVzKSB7XG4gICAgaWYgKCFjb2RlcykgcmV0dXJuIG51bGw7XG4gICAgbGV0IGZvdW5kO1xuICAgIGNvZGVzLmZvckVhY2goY29kZSA9PiB7XG4gICAgICBpZiAoZm91bmQpIHJldHVybjtcbiAgICAgIGNvbnN0IGNsZWFuZWRMbmcgPSB0aGlzLmZvcm1hdExhbmd1YWdlQ29kZShjb2RlKTtcbiAgICAgIGlmICghdGhpcy5vcHRpb25zLnN1cHBvcnRlZExuZ3MgfHwgdGhpcy5pc1N1cHBvcnRlZENvZGUoY2xlYW5lZExuZykpIGZvdW5kID0gY2xlYW5lZExuZztcbiAgICB9KTtcbiAgICBpZiAoIWZvdW5kICYmIHRoaXMub3B0aW9ucy5zdXBwb3J0ZWRMbmdzKSB7XG4gICAgICBjb2Rlcy5mb3JFYWNoKGNvZGUgPT4ge1xuICAgICAgICBpZiAoZm91bmQpIHJldHVybjtcbiAgICAgICAgY29uc3QgbG5nT25seSA9IHRoaXMuZ2V0TGFuZ3VhZ2VQYXJ0RnJvbUNvZGUoY29kZSk7XG4gICAgICAgIGlmICh0aGlzLmlzU3VwcG9ydGVkQ29kZShsbmdPbmx5KSkgcmV0dXJuIGZvdW5kID0gbG5nT25seTtcbiAgICAgICAgZm91bmQgPSB0aGlzLm9wdGlvbnMuc3VwcG9ydGVkTG5ncy5maW5kKHN1cHBvcnRlZExuZyA9PiB7XG4gICAgICAgICAgaWYgKHN1cHBvcnRlZExuZyA9PT0gbG5nT25seSkgcmV0dXJuIHN1cHBvcnRlZExuZztcbiAgICAgICAgICBpZiAoc3VwcG9ydGVkTG5nLmluZGV4T2YoJy0nKSA8IDAgJiYgbG5nT25seS5pbmRleE9mKCctJykgPCAwKSByZXR1cm47XG4gICAgICAgICAgaWYgKHN1cHBvcnRlZExuZy5pbmRleE9mKCctJykgPiAwICYmIGxuZ09ubHkuaW5kZXhPZignLScpIDwgMCAmJiBzdXBwb3J0ZWRMbmcuc3Vic3RyaW5nKDAsIHN1cHBvcnRlZExuZy5pbmRleE9mKCctJykpID09PSBsbmdPbmx5KSByZXR1cm4gc3VwcG9ydGVkTG5nO1xuICAgICAgICAgIGlmIChzdXBwb3J0ZWRMbmcuaW5kZXhPZihsbmdPbmx5KSA9PT0gMCAmJiBsbmdPbmx5Lmxlbmd0aCA+IDEpIHJldHVybiBzdXBwb3J0ZWRMbmc7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICghZm91bmQpIGZvdW5kID0gdGhpcy5nZXRGYWxsYmFja0NvZGVzKHRoaXMub3B0aW9ucy5mYWxsYmFja0xuZylbMF07XG4gICAgcmV0dXJuIGZvdW5kO1xuICB9XG4gIGdldEZhbGxiYWNrQ29kZXMoZmFsbGJhY2tzLCBjb2RlKSB7XG4gICAgaWYgKCFmYWxsYmFja3MpIHJldHVybiBbXTtcbiAgICBpZiAodHlwZW9mIGZhbGxiYWNrcyA9PT0gJ2Z1bmN0aW9uJykgZmFsbGJhY2tzID0gZmFsbGJhY2tzKGNvZGUpO1xuICAgIGlmIChpc1N0cmluZyhmYWxsYmFja3MpKSBmYWxsYmFja3MgPSBbZmFsbGJhY2tzXTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmYWxsYmFja3MpKSByZXR1cm4gZmFsbGJhY2tzO1xuICAgIGlmICghY29kZSkgcmV0dXJuIGZhbGxiYWNrcy5kZWZhdWx0IHx8IFtdO1xuICAgIGxldCBmb3VuZCA9IGZhbGxiYWNrc1tjb2RlXTtcbiAgICBpZiAoIWZvdW5kKSBmb3VuZCA9IGZhbGxiYWNrc1t0aGlzLmdldFNjcmlwdFBhcnRGcm9tQ29kZShjb2RlKV07XG4gICAgaWYgKCFmb3VuZCkgZm91bmQgPSBmYWxsYmFja3NbdGhpcy5mb3JtYXRMYW5ndWFnZUNvZGUoY29kZSldO1xuICAgIGlmICghZm91bmQpIGZvdW5kID0gZmFsbGJhY2tzW3RoaXMuZ2V0TGFuZ3VhZ2VQYXJ0RnJvbUNvZGUoY29kZSldO1xuICAgIGlmICghZm91bmQpIGZvdW5kID0gZmFsbGJhY2tzLmRlZmF1bHQ7XG4gICAgcmV0dXJuIGZvdW5kIHx8IFtdO1xuICB9XG4gIHRvUmVzb2x2ZUhpZXJhcmNoeShjb2RlLCBmYWxsYmFja0NvZGUpIHtcbiAgICBjb25zdCBmYWxsYmFja0NvZGVzID0gdGhpcy5nZXRGYWxsYmFja0NvZGVzKGZhbGxiYWNrQ29kZSB8fCB0aGlzLm9wdGlvbnMuZmFsbGJhY2tMbmcgfHwgW10sIGNvZGUpO1xuICAgIGNvbnN0IGNvZGVzID0gW107XG4gICAgY29uc3QgYWRkQ29kZSA9IGMgPT4ge1xuICAgICAgaWYgKCFjKSByZXR1cm47XG4gICAgICBpZiAodGhpcy5pc1N1cHBvcnRlZENvZGUoYykpIHtcbiAgICAgICAgY29kZXMucHVzaChjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLndhcm4oYHJlamVjdGluZyBsYW5ndWFnZSBjb2RlIG5vdCBmb3VuZCBpbiBzdXBwb3J0ZWRMbmdzOiAke2N9YCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAoaXNTdHJpbmcoY29kZSkgJiYgKGNvZGUuaW5kZXhPZignLScpID4gLTEgfHwgY29kZS5pbmRleE9mKCdfJykgPiAtMSkpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMubG9hZCAhPT0gJ2xhbmd1YWdlT25seScpIGFkZENvZGUodGhpcy5mb3JtYXRMYW5ndWFnZUNvZGUoY29kZSkpO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5sb2FkICE9PSAnbGFuZ3VhZ2VPbmx5JyAmJiB0aGlzLm9wdGlvbnMubG9hZCAhPT0gJ2N1cnJlbnRPbmx5JykgYWRkQ29kZSh0aGlzLmdldFNjcmlwdFBhcnRGcm9tQ29kZShjb2RlKSk7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmxvYWQgIT09ICdjdXJyZW50T25seScpIGFkZENvZGUodGhpcy5nZXRMYW5ndWFnZVBhcnRGcm9tQ29kZShjb2RlKSk7XG4gICAgfSBlbHNlIGlmIChpc1N0cmluZyhjb2RlKSkge1xuICAgICAgYWRkQ29kZSh0aGlzLmZvcm1hdExhbmd1YWdlQ29kZShjb2RlKSk7XG4gICAgfVxuICAgIGZhbGxiYWNrQ29kZXMuZm9yRWFjaChmYyA9PiB7XG4gICAgICBpZiAoY29kZXMuaW5kZXhPZihmYykgPCAwKSBhZGRDb2RlKHRoaXMuZm9ybWF0TGFuZ3VhZ2VDb2RlKGZjKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvZGVzO1xuICB9XG59XG5cbmxldCBzZXRzID0gW3tcbiAgbG5nczogWydhY2gnLCAnYWsnLCAnYW0nLCAnYXJuJywgJ2JyJywgJ2ZpbCcsICdndW4nLCAnbG4nLCAnbWZlJywgJ21nJywgJ21pJywgJ29jJywgJ3B0JywgJ3B0LUJSJywgJ3RnJywgJ3RsJywgJ3RpJywgJ3RyJywgJ3V6JywgJ3dhJ10sXG4gIG5yOiBbMSwgMl0sXG4gIGZjOiAxXG59LCB7XG4gIGxuZ3M6IFsnYWYnLCAnYW4nLCAnYXN0JywgJ2F6JywgJ2JnJywgJ2JuJywgJ2NhJywgJ2RhJywgJ2RlJywgJ2RldicsICdlbCcsICdlbicsICdlbycsICdlcycsICdldCcsICdldScsICdmaScsICdmbycsICdmdXInLCAnZnknLCAnZ2wnLCAnZ3UnLCAnaGEnLCAnaGknLCAnaHUnLCAnaHknLCAnaWEnLCAnaXQnLCAna2snLCAna24nLCAna3UnLCAnbGInLCAnbWFpJywgJ21sJywgJ21uJywgJ21yJywgJ25haCcsICduYXAnLCAnbmInLCAnbmUnLCAnbmwnLCAnbm4nLCAnbm8nLCAnbnNvJywgJ3BhJywgJ3BhcCcsICdwbXMnLCAncHMnLCAncHQtUFQnLCAncm0nLCAnc2NvJywgJ3NlJywgJ3NpJywgJ3NvJywgJ3NvbicsICdzcScsICdzdicsICdzdycsICd0YScsICd0ZScsICd0aycsICd1cicsICd5byddLFxuICBucjogWzEsIDJdLFxuICBmYzogMlxufSwge1xuICBsbmdzOiBbJ2F5JywgJ2JvJywgJ2NnZycsICdmYScsICdodCcsICdpZCcsICdqYScsICdqYm8nLCAna2EnLCAna20nLCAna28nLCAna3knLCAnbG8nLCAnbXMnLCAnc2FoJywgJ3N1JywgJ3RoJywgJ3R0JywgJ3VnJywgJ3ZpJywgJ3dvJywgJ3poJ10sXG4gIG5yOiBbMV0sXG4gIGZjOiAzXG59LCB7XG4gIGxuZ3M6IFsnYmUnLCAnYnMnLCAnY25yJywgJ2R6JywgJ2hyJywgJ3J1JywgJ3NyJywgJ3VrJ10sXG4gIG5yOiBbMSwgMiwgNV0sXG4gIGZjOiA0XG59LCB7XG4gIGxuZ3M6IFsnYXInXSxcbiAgbnI6IFswLCAxLCAyLCAzLCAxMSwgMTAwXSxcbiAgZmM6IDVcbn0sIHtcbiAgbG5nczogWydjcycsICdzayddLFxuICBucjogWzEsIDIsIDVdLFxuICBmYzogNlxufSwge1xuICBsbmdzOiBbJ2NzYicsICdwbCddLFxuICBucjogWzEsIDIsIDVdLFxuICBmYzogN1xufSwge1xuICBsbmdzOiBbJ2N5J10sXG4gIG5yOiBbMSwgMiwgMywgOF0sXG4gIGZjOiA4XG59LCB7XG4gIGxuZ3M6IFsnZnInXSxcbiAgbnI6IFsxLCAyXSxcbiAgZmM6IDlcbn0sIHtcbiAgbG5nczogWydnYSddLFxuICBucjogWzEsIDIsIDMsIDcsIDExXSxcbiAgZmM6IDEwXG59LCB7XG4gIGxuZ3M6IFsnZ2QnXSxcbiAgbnI6IFsxLCAyLCAzLCAyMF0sXG4gIGZjOiAxMVxufSwge1xuICBsbmdzOiBbJ2lzJ10sXG4gIG5yOiBbMSwgMl0sXG4gIGZjOiAxMlxufSwge1xuICBsbmdzOiBbJ2p2J10sXG4gIG5yOiBbMCwgMV0sXG4gIGZjOiAxM1xufSwge1xuICBsbmdzOiBbJ2t3J10sXG4gIG5yOiBbMSwgMiwgMywgNF0sXG4gIGZjOiAxNFxufSwge1xuICBsbmdzOiBbJ2x0J10sXG4gIG5yOiBbMSwgMiwgMTBdLFxuICBmYzogMTVcbn0sIHtcbiAgbG5nczogWydsdiddLFxuICBucjogWzEsIDIsIDBdLFxuICBmYzogMTZcbn0sIHtcbiAgbG5nczogWydtayddLFxuICBucjogWzEsIDJdLFxuICBmYzogMTdcbn0sIHtcbiAgbG5nczogWydtbmsnXSxcbiAgbnI6IFswLCAxLCAyXSxcbiAgZmM6IDE4XG59LCB7XG4gIGxuZ3M6IFsnbXQnXSxcbiAgbnI6IFsxLCAyLCAxMSwgMjBdLFxuICBmYzogMTlcbn0sIHtcbiAgbG5nczogWydvciddLFxuICBucjogWzIsIDFdLFxuICBmYzogMlxufSwge1xuICBsbmdzOiBbJ3JvJ10sXG4gIG5yOiBbMSwgMiwgMjBdLFxuICBmYzogMjBcbn0sIHtcbiAgbG5nczogWydzbCddLFxuICBucjogWzUsIDEsIDIsIDNdLFxuICBmYzogMjFcbn0sIHtcbiAgbG5nczogWydoZScsICdpdyddLFxuICBucjogWzEsIDIsIDIwLCAyMV0sXG4gIGZjOiAyMlxufV07XG5sZXQgX3J1bGVzUGx1cmFsc1R5cGVzID0ge1xuICAxOiBuID0+IE51bWJlcihuID4gMSksXG4gIDI6IG4gPT4gTnVtYmVyKG4gIT0gMSksXG4gIDM6IG4gPT4gMCxcbiAgNDogbiA9PiBOdW1iZXIobiAlIDEwID09IDEgJiYgbiAlIDEwMCAhPSAxMSA/IDAgOiBuICUgMTAgPj0gMiAmJiBuICUgMTAgPD0gNCAmJiAobiAlIDEwMCA8IDEwIHx8IG4gJSAxMDAgPj0gMjApID8gMSA6IDIpLFxuICA1OiBuID0+IE51bWJlcihuID09IDAgPyAwIDogbiA9PSAxID8gMSA6IG4gPT0gMiA/IDIgOiBuICUgMTAwID49IDMgJiYgbiAlIDEwMCA8PSAxMCA/IDMgOiBuICUgMTAwID49IDExID8gNCA6IDUpLFxuICA2OiBuID0+IE51bWJlcihuID09IDEgPyAwIDogbiA+PSAyICYmIG4gPD0gNCA/IDEgOiAyKSxcbiAgNzogbiA9PiBOdW1iZXIobiA9PSAxID8gMCA6IG4gJSAxMCA+PSAyICYmIG4gJSAxMCA8PSA0ICYmIChuICUgMTAwIDwgMTAgfHwgbiAlIDEwMCA+PSAyMCkgPyAxIDogMiksXG4gIDg6IG4gPT4gTnVtYmVyKG4gPT0gMSA/IDAgOiBuID09IDIgPyAxIDogbiAhPSA4ICYmIG4gIT0gMTEgPyAyIDogMyksXG4gIDk6IG4gPT4gTnVtYmVyKG4gPj0gMiksXG4gIDEwOiBuID0+IE51bWJlcihuID09IDEgPyAwIDogbiA9PSAyID8gMSA6IG4gPCA3ID8gMiA6IG4gPCAxMSA/IDMgOiA0KSxcbiAgMTE6IG4gPT4gTnVtYmVyKG4gPT0gMSB8fCBuID09IDExID8gMCA6IG4gPT0gMiB8fCBuID09IDEyID8gMSA6IG4gPiAyICYmIG4gPCAyMCA/IDIgOiAzKSxcbiAgMTI6IG4gPT4gTnVtYmVyKG4gJSAxMCAhPSAxIHx8IG4gJSAxMDAgPT0gMTEpLFxuICAxMzogbiA9PiBOdW1iZXIobiAhPT0gMCksXG4gIDE0OiBuID0+IE51bWJlcihuID09IDEgPyAwIDogbiA9PSAyID8gMSA6IG4gPT0gMyA/IDIgOiAzKSxcbiAgMTU6IG4gPT4gTnVtYmVyKG4gJSAxMCA9PSAxICYmIG4gJSAxMDAgIT0gMTEgPyAwIDogbiAlIDEwID49IDIgJiYgKG4gJSAxMDAgPCAxMCB8fCBuICUgMTAwID49IDIwKSA/IDEgOiAyKSxcbiAgMTY6IG4gPT4gTnVtYmVyKG4gJSAxMCA9PSAxICYmIG4gJSAxMDAgIT0gMTEgPyAwIDogbiAhPT0gMCA/IDEgOiAyKSxcbiAgMTc6IG4gPT4gTnVtYmVyKG4gPT0gMSB8fCBuICUgMTAgPT0gMSAmJiBuICUgMTAwICE9IDExID8gMCA6IDEpLFxuICAxODogbiA9PiBOdW1iZXIobiA9PSAwID8gMCA6IG4gPT0gMSA/IDEgOiAyKSxcbiAgMTk6IG4gPT4gTnVtYmVyKG4gPT0gMSA/IDAgOiBuID09IDAgfHwgbiAlIDEwMCA+IDEgJiYgbiAlIDEwMCA8IDExID8gMSA6IG4gJSAxMDAgPiAxMCAmJiBuICUgMTAwIDwgMjAgPyAyIDogMyksXG4gIDIwOiBuID0+IE51bWJlcihuID09IDEgPyAwIDogbiA9PSAwIHx8IG4gJSAxMDAgPiAwICYmIG4gJSAxMDAgPCAyMCA/IDEgOiAyKSxcbiAgMjE6IG4gPT4gTnVtYmVyKG4gJSAxMDAgPT0gMSA/IDEgOiBuICUgMTAwID09IDIgPyAyIDogbiAlIDEwMCA9PSAzIHx8IG4gJSAxMDAgPT0gNCA/IDMgOiAwKSxcbiAgMjI6IG4gPT4gTnVtYmVyKG4gPT0gMSA/IDAgOiBuID09IDIgPyAxIDogKG4gPCAwIHx8IG4gPiAxMCkgJiYgbiAlIDEwID09IDAgPyAyIDogMylcbn07XG5jb25zdCBub25JbnRsVmVyc2lvbnMgPSBbJ3YxJywgJ3YyJywgJ3YzJ107XG5jb25zdCBpbnRsVmVyc2lvbnMgPSBbJ3Y0J107XG5jb25zdCBzdWZmaXhlc09yZGVyID0ge1xuICB6ZXJvOiAwLFxuICBvbmU6IDEsXG4gIHR3bzogMixcbiAgZmV3OiAzLFxuICBtYW55OiA0LFxuICBvdGhlcjogNVxufTtcbmNvbnN0IGNyZWF0ZVJ1bGVzID0gKCkgPT4ge1xuICBjb25zdCBydWxlcyA9IHt9O1xuICBzZXRzLmZvckVhY2goc2V0ID0+IHtcbiAgICBzZXQubG5ncy5mb3JFYWNoKGwgPT4ge1xuICAgICAgcnVsZXNbbF0gPSB7XG4gICAgICAgIG51bWJlcnM6IHNldC5ucixcbiAgICAgICAgcGx1cmFsczogX3J1bGVzUGx1cmFsc1R5cGVzW3NldC5mY11cbiAgICAgIH07XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gcnVsZXM7XG59O1xuY2xhc3MgUGx1cmFsUmVzb2x2ZXIge1xuICBjb25zdHJ1Y3RvcihsYW5ndWFnZVV0aWxzKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHRoaXMubGFuZ3VhZ2VVdGlscyA9IGxhbmd1YWdlVXRpbHM7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLmxvZ2dlciA9IGJhc2VMb2dnZXIuY3JlYXRlKCdwbHVyYWxSZXNvbHZlcicpO1xuICAgIGlmICgoIXRoaXMub3B0aW9ucy5jb21wYXRpYmlsaXR5SlNPTiB8fCBpbnRsVmVyc2lvbnMuaW5jbHVkZXModGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlKU09OKSkgJiYgKHR5cGVvZiBJbnRsID09PSAndW5kZWZpbmVkJyB8fCAhSW50bC5QbHVyYWxSdWxlcykpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5jb21wYXRpYmlsaXR5SlNPTiA9ICd2Myc7XG4gICAgICB0aGlzLmxvZ2dlci5lcnJvcignWW91ciBlbnZpcm9ubWVudCBzZWVtcyBub3QgdG8gYmUgSW50bCBBUEkgY29tcGF0aWJsZSwgdXNlIGFuIEludGwuUGx1cmFsUnVsZXMgcG9seWZpbGwuIFdpbGwgZmFsbGJhY2sgdG8gdGhlIGNvbXBhdGliaWxpdHlKU09OIHYzIGZvcm1hdCBoYW5kbGluZy4nKTtcbiAgICB9XG4gICAgdGhpcy5ydWxlcyA9IGNyZWF0ZVJ1bGVzKCk7XG4gICAgdGhpcy5wbHVyYWxSdWxlc0NhY2hlID0ge307XG4gIH1cbiAgYWRkUnVsZShsbmcsIG9iaikge1xuICAgIHRoaXMucnVsZXNbbG5nXSA9IG9iajtcbiAgfVxuICBjbGVhckNhY2hlKCkge1xuICAgIHRoaXMucGx1cmFsUnVsZXNDYWNoZSA9IHt9O1xuICB9XG4gIGdldFJ1bGUoY29kZSkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICBpZiAodGhpcy5zaG91bGRVc2VJbnRsQXBpKCkpIHtcbiAgICAgIGNvbnN0IGNsZWFuZWRDb2RlID0gZ2V0Q2xlYW5lZENvZGUoY29kZSA9PT0gJ2RldicgPyAnZW4nIDogY29kZSk7XG4gICAgICBjb25zdCB0eXBlID0gb3B0aW9ucy5vcmRpbmFsID8gJ29yZGluYWwnIDogJ2NhcmRpbmFsJztcbiAgICAgIGNvbnN0IGNhY2hlS2V5ID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBjbGVhbmVkQ29kZSxcbiAgICAgICAgdHlwZVxuICAgICAgfSk7XG4gICAgICBpZiAoY2FjaGVLZXkgaW4gdGhpcy5wbHVyYWxSdWxlc0NhY2hlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsdXJhbFJ1bGVzQ2FjaGVbY2FjaGVLZXldO1xuICAgICAgfVxuICAgICAgbGV0IHJ1bGU7XG4gICAgICB0cnkge1xuICAgICAgICBydWxlID0gbmV3IEludGwuUGx1cmFsUnVsZXMoY2xlYW5lZENvZGUsIHtcbiAgICAgICAgICB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmICghY29kZS5tYXRjaCgvLXxfLykpIHJldHVybjtcbiAgICAgICAgY29uc3QgbG5nUGFydCA9IHRoaXMubGFuZ3VhZ2VVdGlscy5nZXRMYW5ndWFnZVBhcnRGcm9tQ29kZShjb2RlKTtcbiAgICAgICAgcnVsZSA9IHRoaXMuZ2V0UnVsZShsbmdQYXJ0LCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGx1cmFsUnVsZXNDYWNoZVtjYWNoZUtleV0gPSBydWxlO1xuICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJ1bGVzW2NvZGVdIHx8IHRoaXMucnVsZXNbdGhpcy5sYW5ndWFnZVV0aWxzLmdldExhbmd1YWdlUGFydEZyb21Db2RlKGNvZGUpXTtcbiAgfVxuICBuZWVkc1BsdXJhbChjb2RlKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIGNvbnN0IHJ1bGUgPSB0aGlzLmdldFJ1bGUoY29kZSwgb3B0aW9ucyk7XG4gICAgaWYgKHRoaXMuc2hvdWxkVXNlSW50bEFwaSgpKSB7XG4gICAgICByZXR1cm4gcnVsZSAmJiBydWxlLnJlc29sdmVkT3B0aW9ucygpLnBsdXJhbENhdGVnb3JpZXMubGVuZ3RoID4gMTtcbiAgICB9XG4gICAgcmV0dXJuIHJ1bGUgJiYgcnVsZS5udW1iZXJzLmxlbmd0aCA+IDE7XG4gIH1cbiAgZ2V0UGx1cmFsRm9ybXNPZktleShjb2RlLCBrZXkpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3VmZml4ZXMoY29kZSwgb3B0aW9ucykubWFwKHN1ZmZpeCA9PiBgJHtrZXl9JHtzdWZmaXh9YCk7XG4gIH1cbiAgZ2V0U3VmZml4ZXMoY29kZSkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICBjb25zdCBydWxlID0gdGhpcy5nZXRSdWxlKGNvZGUsIG9wdGlvbnMpO1xuICAgIGlmICghcnVsZSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBpZiAodGhpcy5zaG91bGRVc2VJbnRsQXBpKCkpIHtcbiAgICAgIHJldHVybiBydWxlLnJlc29sdmVkT3B0aW9ucygpLnBsdXJhbENhdGVnb3JpZXMuc29ydCgocGx1cmFsQ2F0ZWdvcnkxLCBwbHVyYWxDYXRlZ29yeTIpID0+IHN1ZmZpeGVzT3JkZXJbcGx1cmFsQ2F0ZWdvcnkxXSAtIHN1ZmZpeGVzT3JkZXJbcGx1cmFsQ2F0ZWdvcnkyXSkubWFwKHBsdXJhbENhdGVnb3J5ID0+IGAke3RoaXMub3B0aW9ucy5wcmVwZW5kfSR7b3B0aW9ucy5vcmRpbmFsID8gYG9yZGluYWwke3RoaXMub3B0aW9ucy5wcmVwZW5kfWAgOiAnJ30ke3BsdXJhbENhdGVnb3J5fWApO1xuICAgIH1cbiAgICByZXR1cm4gcnVsZS5udW1iZXJzLm1hcChudW1iZXIgPT4gdGhpcy5nZXRTdWZmaXgoY29kZSwgbnVtYmVyLCBvcHRpb25zKSk7XG4gIH1cbiAgZ2V0U3VmZml4KGNvZGUsIGNvdW50KSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIGNvbnN0IHJ1bGUgPSB0aGlzLmdldFJ1bGUoY29kZSwgb3B0aW9ucyk7XG4gICAgaWYgKHJ1bGUpIHtcbiAgICAgIGlmICh0aGlzLnNob3VsZFVzZUludGxBcGkoKSkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLnByZXBlbmR9JHtvcHRpb25zLm9yZGluYWwgPyBgb3JkaW5hbCR7dGhpcy5vcHRpb25zLnByZXBlbmR9YCA6ICcnfSR7cnVsZS5zZWxlY3QoY291bnQpfWA7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5nZXRTdWZmaXhSZXRyb0NvbXBhdGlibGUocnVsZSwgY291bnQpO1xuICAgIH1cbiAgICB0aGlzLmxvZ2dlci53YXJuKGBubyBwbHVyYWwgcnVsZSBmb3VuZCBmb3I6ICR7Y29kZX1gKTtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgZ2V0U3VmZml4UmV0cm9Db21wYXRpYmxlKHJ1bGUsIGNvdW50KSB7XG4gICAgY29uc3QgaWR4ID0gcnVsZS5ub0FicyA/IHJ1bGUucGx1cmFscyhjb3VudCkgOiBydWxlLnBsdXJhbHMoTWF0aC5hYnMoY291bnQpKTtcbiAgICBsZXQgc3VmZml4ID0gcnVsZS5udW1iZXJzW2lkeF07XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zaW1wbGlmeVBsdXJhbFN1ZmZpeCAmJiBydWxlLm51bWJlcnMubGVuZ3RoID09PSAyICYmIHJ1bGUubnVtYmVyc1swXSA9PT0gMSkge1xuICAgICAgaWYgKHN1ZmZpeCA9PT0gMikge1xuICAgICAgICBzdWZmaXggPSAncGx1cmFsJztcbiAgICAgIH0gZWxzZSBpZiAoc3VmZml4ID09PSAxKSB7XG4gICAgICAgIHN1ZmZpeCA9ICcnO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByZXR1cm5TdWZmaXggPSAoKSA9PiB0aGlzLm9wdGlvbnMucHJlcGVuZCAmJiBzdWZmaXgudG9TdHJpbmcoKSA/IHRoaXMub3B0aW9ucy5wcmVwZW5kICsgc3VmZml4LnRvU3RyaW5nKCkgOiBzdWZmaXgudG9TdHJpbmcoKTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlKU09OID09PSAndjEnKSB7XG4gICAgICBpZiAoc3VmZml4ID09PSAxKSByZXR1cm4gJyc7XG4gICAgICBpZiAodHlwZW9mIHN1ZmZpeCA9PT0gJ251bWJlcicpIHJldHVybiBgX3BsdXJhbF8ke3N1ZmZpeC50b1N0cmluZygpfWA7XG4gICAgICByZXR1cm4gcmV0dXJuU3VmZml4KCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuY29tcGF0aWJpbGl0eUpTT04gPT09ICd2MicpIHtcbiAgICAgIHJldHVybiByZXR1cm5TdWZmaXgoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5zaW1wbGlmeVBsdXJhbFN1ZmZpeCAmJiBydWxlLm51bWJlcnMubGVuZ3RoID09PSAyICYmIHJ1bGUubnVtYmVyc1swXSA9PT0gMSkge1xuICAgICAgcmV0dXJuIHJldHVyblN1ZmZpeCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnByZXBlbmQgJiYgaWR4LnRvU3RyaW5nKCkgPyB0aGlzLm9wdGlvbnMucHJlcGVuZCArIGlkeC50b1N0cmluZygpIDogaWR4LnRvU3RyaW5nKCk7XG4gIH1cbiAgc2hvdWxkVXNlSW50bEFwaSgpIHtcbiAgICByZXR1cm4gIW5vbkludGxWZXJzaW9ucy5pbmNsdWRlcyh0aGlzLm9wdGlvbnMuY29tcGF0aWJpbGl0eUpTT04pO1xuICB9XG59XG5cbmNvbnN0IGRlZXBGaW5kV2l0aERlZmF1bHRzID0gZnVuY3Rpb24gKGRhdGEsIGRlZmF1bHREYXRhLCBrZXkpIHtcbiAgbGV0IGtleVNlcGFyYXRvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogJy4nO1xuICBsZXQgaWdub3JlSlNPTlN0cnVjdHVyZSA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDogdHJ1ZTtcbiAgbGV0IHBhdGggPSBnZXRQYXRoV2l0aERlZmF1bHRzKGRhdGEsIGRlZmF1bHREYXRhLCBrZXkpO1xuICBpZiAoIXBhdGggJiYgaWdub3JlSlNPTlN0cnVjdHVyZSAmJiBpc1N0cmluZyhrZXkpKSB7XG4gICAgcGF0aCA9IGRlZXBGaW5kKGRhdGEsIGtleSwga2V5U2VwYXJhdG9yKTtcbiAgICBpZiAocGF0aCA9PT0gdW5kZWZpbmVkKSBwYXRoID0gZGVlcEZpbmQoZGVmYXVsdERhdGEsIGtleSwga2V5U2VwYXJhdG9yKTtcbiAgfVxuICByZXR1cm4gcGF0aDtcbn07XG5jb25zdCByZWdleFNhZmUgPSB2YWwgPT4gdmFsLnJlcGxhY2UoL1xcJC9nLCAnJCQkJCcpO1xuY2xhc3MgSW50ZXJwb2xhdG9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIHRoaXMubG9nZ2VyID0gYmFzZUxvZ2dlci5jcmVhdGUoJ2ludGVycG9sYXRvcicpO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5mb3JtYXQgPSBvcHRpb25zLmludGVycG9sYXRpb24gJiYgb3B0aW9ucy5pbnRlcnBvbGF0aW9uLmZvcm1hdCB8fCAodmFsdWUgPT4gdmFsdWUpO1xuICAgIHRoaXMuaW5pdChvcHRpb25zKTtcbiAgfVxuICBpbml0KCkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICBpZiAoIW9wdGlvbnMuaW50ZXJwb2xhdGlvbikgb3B0aW9ucy5pbnRlcnBvbGF0aW9uID0ge1xuICAgICAgZXNjYXBlVmFsdWU6IHRydWVcbiAgICB9O1xuICAgIGNvbnN0IHtcbiAgICAgIGVzY2FwZTogZXNjYXBlJDEsXG4gICAgICBlc2NhcGVWYWx1ZSxcbiAgICAgIHVzZVJhd1ZhbHVlVG9Fc2NhcGUsXG4gICAgICBwcmVmaXgsXG4gICAgICBwcmVmaXhFc2NhcGVkLFxuICAgICAgc3VmZml4LFxuICAgICAgc3VmZml4RXNjYXBlZCxcbiAgICAgIGZvcm1hdFNlcGFyYXRvcixcbiAgICAgIHVuZXNjYXBlU3VmZml4LFxuICAgICAgdW5lc2NhcGVQcmVmaXgsXG4gICAgICBuZXN0aW5nUHJlZml4LFxuICAgICAgbmVzdGluZ1ByZWZpeEVzY2FwZWQsXG4gICAgICBuZXN0aW5nU3VmZml4LFxuICAgICAgbmVzdGluZ1N1ZmZpeEVzY2FwZWQsXG4gICAgICBuZXN0aW5nT3B0aW9uc1NlcGFyYXRvcixcbiAgICAgIG1heFJlcGxhY2VzLFxuICAgICAgYWx3YXlzRm9ybWF0XG4gICAgfSA9IG9wdGlvbnMuaW50ZXJwb2xhdGlvbjtcbiAgICB0aGlzLmVzY2FwZSA9IGVzY2FwZSQxICE9PSB1bmRlZmluZWQgPyBlc2NhcGUkMSA6IGVzY2FwZTtcbiAgICB0aGlzLmVzY2FwZVZhbHVlID0gZXNjYXBlVmFsdWUgIT09IHVuZGVmaW5lZCA/IGVzY2FwZVZhbHVlIDogdHJ1ZTtcbiAgICB0aGlzLnVzZVJhd1ZhbHVlVG9Fc2NhcGUgPSB1c2VSYXdWYWx1ZVRvRXNjYXBlICE9PSB1bmRlZmluZWQgPyB1c2VSYXdWYWx1ZVRvRXNjYXBlIDogZmFsc2U7XG4gICAgdGhpcy5wcmVmaXggPSBwcmVmaXggPyByZWdleEVzY2FwZShwcmVmaXgpIDogcHJlZml4RXNjYXBlZCB8fCAne3snO1xuICAgIHRoaXMuc3VmZml4ID0gc3VmZml4ID8gcmVnZXhFc2NhcGUoc3VmZml4KSA6IHN1ZmZpeEVzY2FwZWQgfHwgJ319JztcbiAgICB0aGlzLmZvcm1hdFNlcGFyYXRvciA9IGZvcm1hdFNlcGFyYXRvciB8fCAnLCc7XG4gICAgdGhpcy51bmVzY2FwZVByZWZpeCA9IHVuZXNjYXBlU3VmZml4ID8gJycgOiB1bmVzY2FwZVByZWZpeCB8fCAnLSc7XG4gICAgdGhpcy51bmVzY2FwZVN1ZmZpeCA9IHRoaXMudW5lc2NhcGVQcmVmaXggPyAnJyA6IHVuZXNjYXBlU3VmZml4IHx8ICcnO1xuICAgIHRoaXMubmVzdGluZ1ByZWZpeCA9IG5lc3RpbmdQcmVmaXggPyByZWdleEVzY2FwZShuZXN0aW5nUHJlZml4KSA6IG5lc3RpbmdQcmVmaXhFc2NhcGVkIHx8IHJlZ2V4RXNjYXBlKCckdCgnKTtcbiAgICB0aGlzLm5lc3RpbmdTdWZmaXggPSBuZXN0aW5nU3VmZml4ID8gcmVnZXhFc2NhcGUobmVzdGluZ1N1ZmZpeCkgOiBuZXN0aW5nU3VmZml4RXNjYXBlZCB8fCByZWdleEVzY2FwZSgnKScpO1xuICAgIHRoaXMubmVzdGluZ09wdGlvbnNTZXBhcmF0b3IgPSBuZXN0aW5nT3B0aW9uc1NlcGFyYXRvciB8fCAnLCc7XG4gICAgdGhpcy5tYXhSZXBsYWNlcyA9IG1heFJlcGxhY2VzIHx8IDEwMDA7XG4gICAgdGhpcy5hbHdheXNGb3JtYXQgPSBhbHdheXNGb3JtYXQgIT09IHVuZGVmaW5lZCA/IGFsd2F5c0Zvcm1hdCA6IGZhbHNlO1xuICAgIHRoaXMucmVzZXRSZWdFeHAoKTtcbiAgfVxuICByZXNldCgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zKSB0aGlzLmluaXQodGhpcy5vcHRpb25zKTtcbiAgfVxuICByZXNldFJlZ0V4cCgpIHtcbiAgICBjb25zdCBnZXRPclJlc2V0UmVnRXhwID0gKGV4aXN0aW5nUmVnRXhwLCBwYXR0ZXJuKSA9PiB7XG4gICAgICBpZiAoZXhpc3RpbmdSZWdFeHAgJiYgZXhpc3RpbmdSZWdFeHAuc291cmNlID09PSBwYXR0ZXJuKSB7XG4gICAgICAgIGV4aXN0aW5nUmVnRXhwLmxhc3RJbmRleCA9IDA7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JlZ0V4cDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgUmVnRXhwKHBhdHRlcm4sICdnJyk7XG4gICAgfTtcbiAgICB0aGlzLnJlZ2V4cCA9IGdldE9yUmVzZXRSZWdFeHAodGhpcy5yZWdleHAsIGAke3RoaXMucHJlZml4fSguKz8pJHt0aGlzLnN1ZmZpeH1gKTtcbiAgICB0aGlzLnJlZ2V4cFVuZXNjYXBlID0gZ2V0T3JSZXNldFJlZ0V4cCh0aGlzLnJlZ2V4cFVuZXNjYXBlLCBgJHt0aGlzLnByZWZpeH0ke3RoaXMudW5lc2NhcGVQcmVmaXh9KC4rPykke3RoaXMudW5lc2NhcGVTdWZmaXh9JHt0aGlzLnN1ZmZpeH1gKTtcbiAgICB0aGlzLm5lc3RpbmdSZWdleHAgPSBnZXRPclJlc2V0UmVnRXhwKHRoaXMubmVzdGluZ1JlZ2V4cCwgYCR7dGhpcy5uZXN0aW5nUHJlZml4fSguKz8pJHt0aGlzLm5lc3RpbmdTdWZmaXh9YCk7XG4gIH1cbiAgaW50ZXJwb2xhdGUoc3RyLCBkYXRhLCBsbmcsIG9wdGlvbnMpIHtcbiAgICBsZXQgbWF0Y2g7XG4gICAgbGV0IHZhbHVlO1xuICAgIGxldCByZXBsYWNlcztcbiAgICBjb25zdCBkZWZhdWx0RGF0YSA9IHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbiAmJiB0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5kZWZhdWx0VmFyaWFibGVzIHx8IHt9O1xuICAgIGNvbnN0IGhhbmRsZUZvcm1hdCA9IGtleSA9PiB7XG4gICAgICBpZiAoa2V5LmluZGV4T2YodGhpcy5mb3JtYXRTZXBhcmF0b3IpIDwgMCkge1xuICAgICAgICBjb25zdCBwYXRoID0gZGVlcEZpbmRXaXRoRGVmYXVsdHMoZGF0YSwgZGVmYXVsdERhdGEsIGtleSwgdGhpcy5vcHRpb25zLmtleVNlcGFyYXRvciwgdGhpcy5vcHRpb25zLmlnbm9yZUpTT05TdHJ1Y3R1cmUpO1xuICAgICAgICByZXR1cm4gdGhpcy5hbHdheXNGb3JtYXQgPyB0aGlzLmZvcm1hdChwYXRoLCB1bmRlZmluZWQsIGxuZywge1xuICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICBpbnRlcnBvbGF0aW9ua2V5OiBrZXlcbiAgICAgICAgfSkgOiBwYXRoO1xuICAgICAgfVxuICAgICAgY29uc3QgcCA9IGtleS5zcGxpdCh0aGlzLmZvcm1hdFNlcGFyYXRvcik7XG4gICAgICBjb25zdCBrID0gcC5zaGlmdCgpLnRyaW0oKTtcbiAgICAgIGNvbnN0IGYgPSBwLmpvaW4odGhpcy5mb3JtYXRTZXBhcmF0b3IpLnRyaW0oKTtcbiAgICAgIHJldHVybiB0aGlzLmZvcm1hdChkZWVwRmluZFdpdGhEZWZhdWx0cyhkYXRhLCBkZWZhdWx0RGF0YSwgaywgdGhpcy5vcHRpb25zLmtleVNlcGFyYXRvciwgdGhpcy5vcHRpb25zLmlnbm9yZUpTT05TdHJ1Y3R1cmUpLCBmLCBsbmcsIHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgaW50ZXJwb2xhdGlvbmtleToga1xuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLnJlc2V0UmVnRXhwKCk7XG4gICAgY29uc3QgbWlzc2luZ0ludGVycG9sYXRpb25IYW5kbGVyID0gb3B0aW9ucyAmJiBvcHRpb25zLm1pc3NpbmdJbnRlcnBvbGF0aW9uSGFuZGxlciB8fCB0aGlzLm9wdGlvbnMubWlzc2luZ0ludGVycG9sYXRpb25IYW5kbGVyO1xuICAgIGNvbnN0IHNraXBPblZhcmlhYmxlcyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5pbnRlcnBvbGF0aW9uICYmIG9wdGlvbnMuaW50ZXJwb2xhdGlvbi5za2lwT25WYXJpYWJsZXMgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuaW50ZXJwb2xhdGlvbi5za2lwT25WYXJpYWJsZXMgOiB0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5za2lwT25WYXJpYWJsZXM7XG4gICAgY29uc3QgdG9kb3MgPSBbe1xuICAgICAgcmVnZXg6IHRoaXMucmVnZXhwVW5lc2NhcGUsXG4gICAgICBzYWZlVmFsdWU6IHZhbCA9PiByZWdleFNhZmUodmFsKVxuICAgIH0sIHtcbiAgICAgIHJlZ2V4OiB0aGlzLnJlZ2V4cCxcbiAgICAgIHNhZmVWYWx1ZTogdmFsID0+IHRoaXMuZXNjYXBlVmFsdWUgPyByZWdleFNhZmUodGhpcy5lc2NhcGUodmFsKSkgOiByZWdleFNhZmUodmFsKVxuICAgIH1dO1xuICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICByZXBsYWNlcyA9IDA7XG4gICAgICB3aGlsZSAobWF0Y2ggPSB0b2RvLnJlZ2V4LmV4ZWMoc3RyKSkge1xuICAgICAgICBjb25zdCBtYXRjaGVkVmFyID0gbWF0Y2hbMV0udHJpbSgpO1xuICAgICAgICB2YWx1ZSA9IGhhbmRsZUZvcm1hdChtYXRjaGVkVmFyKTtcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIG1pc3NpbmdJbnRlcnBvbGF0aW9uSGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IG1pc3NpbmdJbnRlcnBvbGF0aW9uSGFuZGxlcihzdHIsIG1hdGNoLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHZhbHVlID0gaXNTdHJpbmcodGVtcCkgPyB0ZW1wIDogJyc7XG4gICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvcHRpb25zLCBtYXRjaGVkVmFyKSkge1xuICAgICAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgICAgICB9IGVsc2UgaWYgKHNraXBPblZhcmlhYmxlcykge1xuICAgICAgICAgICAgdmFsdWUgPSBtYXRjaFswXTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci53YXJuKGBtaXNzZWQgdG8gcGFzcyBpbiB2YXJpYWJsZSAke21hdGNoZWRWYXJ9IGZvciBpbnRlcnBvbGF0aW5nICR7c3RyfWApO1xuICAgICAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzU3RyaW5nKHZhbHVlKSAmJiAhdGhpcy51c2VSYXdWYWx1ZVRvRXNjYXBlKSB7XG4gICAgICAgICAgdmFsdWUgPSBtYWtlU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzYWZlVmFsdWUgPSB0b2RvLnNhZmVWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKG1hdGNoWzBdLCBzYWZlVmFsdWUpO1xuICAgICAgICBpZiAoc2tpcE9uVmFyaWFibGVzKSB7XG4gICAgICAgICAgdG9kby5yZWdleC5sYXN0SW5kZXggKz0gdmFsdWUubGVuZ3RoO1xuICAgICAgICAgIHRvZG8ucmVnZXgubGFzdEluZGV4IC09IG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b2RvLnJlZ2V4Lmxhc3RJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmVwbGFjZXMrKztcbiAgICAgICAgaWYgKHJlcGxhY2VzID49IHRoaXMubWF4UmVwbGFjZXMpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzdHI7XG4gIH1cbiAgbmVzdChzdHIsIGZjKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIGxldCBtYXRjaDtcbiAgICBsZXQgdmFsdWU7XG4gICAgbGV0IGNsb25lZE9wdGlvbnM7XG4gICAgY29uc3QgaGFuZGxlSGFzT3B0aW9ucyA9IChrZXksIGluaGVyaXRlZE9wdGlvbnMpID0+IHtcbiAgICAgIGNvbnN0IHNlcCA9IHRoaXMubmVzdGluZ09wdGlvbnNTZXBhcmF0b3I7XG4gICAgICBpZiAoa2V5LmluZGV4T2Yoc2VwKSA8IDApIHJldHVybiBrZXk7XG4gICAgICBjb25zdCBjID0ga2V5LnNwbGl0KG5ldyBSZWdFeHAoYCR7c2VwfVsgXSp7YCkpO1xuICAgICAgbGV0IG9wdGlvbnNTdHJpbmcgPSBgeyR7Y1sxXX1gO1xuICAgICAga2V5ID0gY1swXTtcbiAgICAgIG9wdGlvbnNTdHJpbmcgPSB0aGlzLmludGVycG9sYXRlKG9wdGlvbnNTdHJpbmcsIGNsb25lZE9wdGlvbnMpO1xuICAgICAgY29uc3QgbWF0Y2hlZFNpbmdsZVF1b3RlcyA9IG9wdGlvbnNTdHJpbmcubWF0Y2goLycvZyk7XG4gICAgICBjb25zdCBtYXRjaGVkRG91YmxlUXVvdGVzID0gb3B0aW9uc1N0cmluZy5tYXRjaCgvXCIvZyk7XG4gICAgICBpZiAobWF0Y2hlZFNpbmdsZVF1b3RlcyAmJiBtYXRjaGVkU2luZ2xlUXVvdGVzLmxlbmd0aCAlIDIgPT09IDAgJiYgIW1hdGNoZWREb3VibGVRdW90ZXMgfHwgbWF0Y2hlZERvdWJsZVF1b3Rlcy5sZW5ndGggJSAyICE9PSAwKSB7XG4gICAgICAgIG9wdGlvbnNTdHJpbmcgPSBvcHRpb25zU3RyaW5nLnJlcGxhY2UoLycvZywgJ1wiJyk7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICBjbG9uZWRPcHRpb25zID0gSlNPTi5wYXJzZShvcHRpb25zU3RyaW5nKTtcbiAgICAgICAgaWYgKGluaGVyaXRlZE9wdGlvbnMpIGNsb25lZE9wdGlvbnMgPSB7XG4gICAgICAgICAgLi4uaW5oZXJpdGVkT3B0aW9ucyxcbiAgICAgICAgICAuLi5jbG9uZWRPcHRpb25zXG4gICAgICAgIH07XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLndhcm4oYGZhaWxlZCBwYXJzaW5nIG9wdGlvbnMgc3RyaW5nIGluIG5lc3RpbmcgZm9yIGtleSAke2tleX1gLCBlKTtcbiAgICAgICAgcmV0dXJuIGAke2tleX0ke3NlcH0ke29wdGlvbnNTdHJpbmd9YDtcbiAgICAgIH1cbiAgICAgIGlmIChjbG9uZWRPcHRpb25zLmRlZmF1bHRWYWx1ZSAmJiBjbG9uZWRPcHRpb25zLmRlZmF1bHRWYWx1ZS5pbmRleE9mKHRoaXMucHJlZml4KSA+IC0xKSBkZWxldGUgY2xvbmVkT3B0aW9ucy5kZWZhdWx0VmFsdWU7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH07XG4gICAgd2hpbGUgKG1hdGNoID0gdGhpcy5uZXN0aW5nUmVnZXhwLmV4ZWMoc3RyKSkge1xuICAgICAgbGV0IGZvcm1hdHRlcnMgPSBbXTtcbiAgICAgIGNsb25lZE9wdGlvbnMgPSB7XG4gICAgICAgIC4uLm9wdGlvbnNcbiAgICAgIH07XG4gICAgICBjbG9uZWRPcHRpb25zID0gY2xvbmVkT3B0aW9ucy5yZXBsYWNlICYmICFpc1N0cmluZyhjbG9uZWRPcHRpb25zLnJlcGxhY2UpID8gY2xvbmVkT3B0aW9ucy5yZXBsYWNlIDogY2xvbmVkT3B0aW9ucztcbiAgICAgIGNsb25lZE9wdGlvbnMuYXBwbHlQb3N0UHJvY2Vzc29yID0gZmFsc2U7XG4gICAgICBkZWxldGUgY2xvbmVkT3B0aW9ucy5kZWZhdWx0VmFsdWU7XG4gICAgICBsZXQgZG9SZWR1Y2UgPSBmYWxzZTtcbiAgICAgIGlmIChtYXRjaFswXS5pbmRleE9mKHRoaXMuZm9ybWF0U2VwYXJhdG9yKSAhPT0gLTEgJiYgIS97Lip9Ly50ZXN0KG1hdGNoWzFdKSkge1xuICAgICAgICBjb25zdCByID0gbWF0Y2hbMV0uc3BsaXQodGhpcy5mb3JtYXRTZXBhcmF0b3IpLm1hcChlbGVtID0+IGVsZW0udHJpbSgpKTtcbiAgICAgICAgbWF0Y2hbMV0gPSByLnNoaWZ0KCk7XG4gICAgICAgIGZvcm1hdHRlcnMgPSByO1xuICAgICAgICBkb1JlZHVjZSA9IHRydWU7XG4gICAgICB9XG4gICAgICB2YWx1ZSA9IGZjKGhhbmRsZUhhc09wdGlvbnMuY2FsbCh0aGlzLCBtYXRjaFsxXS50cmltKCksIGNsb25lZE9wdGlvbnMpLCBjbG9uZWRPcHRpb25zKTtcbiAgICAgIGlmICh2YWx1ZSAmJiBtYXRjaFswXSA9PT0gc3RyICYmICFpc1N0cmluZyh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICAgIGlmICghaXNTdHJpbmcodmFsdWUpKSB2YWx1ZSA9IG1ha2VTdHJpbmcodmFsdWUpO1xuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICB0aGlzLmxvZ2dlci53YXJuKGBtaXNzZWQgdG8gcmVzb2x2ZSAke21hdGNoWzFdfSBmb3IgbmVzdGluZyAke3N0cn1gKTtcbiAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICAgIGlmIChkb1JlZHVjZSkge1xuICAgICAgICB2YWx1ZSA9IGZvcm1hdHRlcnMucmVkdWNlKCh2LCBmKSA9PiB0aGlzLmZvcm1hdCh2LCBmLCBvcHRpb25zLmxuZywge1xuICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgaW50ZXJwb2xhdGlvbmtleTogbWF0Y2hbMV0udHJpbSgpXG4gICAgICAgIH0pLCB2YWx1ZS50cmltKCkpO1xuICAgICAgfVxuICAgICAgc3RyID0gc3RyLnJlcGxhY2UobWF0Y2hbMF0sIHZhbHVlKTtcbiAgICAgIHRoaXMucmVnZXhwLmxhc3RJbmRleCA9IDA7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cblxuY29uc3QgcGFyc2VGb3JtYXRTdHIgPSBmb3JtYXRTdHIgPT4ge1xuICBsZXQgZm9ybWF0TmFtZSA9IGZvcm1hdFN0ci50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgY29uc3QgZm9ybWF0T3B0aW9ucyA9IHt9O1xuICBpZiAoZm9ybWF0U3RyLmluZGV4T2YoJygnKSA+IC0xKSB7XG4gICAgY29uc3QgcCA9IGZvcm1hdFN0ci5zcGxpdCgnKCcpO1xuICAgIGZvcm1hdE5hbWUgPSBwWzBdLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuICAgIGNvbnN0IG9wdFN0ciA9IHBbMV0uc3Vic3RyaW5nKDAsIHBbMV0ubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGZvcm1hdE5hbWUgPT09ICdjdXJyZW5jeScgJiYgb3B0U3RyLmluZGV4T2YoJzonKSA8IDApIHtcbiAgICAgIGlmICghZm9ybWF0T3B0aW9ucy5jdXJyZW5jeSkgZm9ybWF0T3B0aW9ucy5jdXJyZW5jeSA9IG9wdFN0ci50cmltKCk7XG4gICAgfSBlbHNlIGlmIChmb3JtYXROYW1lID09PSAncmVsYXRpdmV0aW1lJyAmJiBvcHRTdHIuaW5kZXhPZignOicpIDwgMCkge1xuICAgICAgaWYgKCFmb3JtYXRPcHRpb25zLnJhbmdlKSBmb3JtYXRPcHRpb25zLnJhbmdlID0gb3B0U3RyLnRyaW0oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb3B0cyA9IG9wdFN0ci5zcGxpdCgnOycpO1xuICAgICAgb3B0cy5mb3JFYWNoKG9wdCA9PiB7XG4gICAgICAgIGlmIChvcHQpIHtcbiAgICAgICAgICBjb25zdCBba2V5LCAuLi5yZXN0XSA9IG9wdC5zcGxpdCgnOicpO1xuICAgICAgICAgIGNvbnN0IHZhbCA9IHJlc3Quam9pbignOicpLnRyaW0oKS5yZXBsYWNlKC9eJyt8JyskL2csICcnKTtcbiAgICAgICAgICBjb25zdCB0cmltbWVkS2V5ID0ga2V5LnRyaW0oKTtcbiAgICAgICAgICBpZiAoIWZvcm1hdE9wdGlvbnNbdHJpbW1lZEtleV0pIGZvcm1hdE9wdGlvbnNbdHJpbW1lZEtleV0gPSB2YWw7XG4gICAgICAgICAgaWYgKHZhbCA9PT0gJ2ZhbHNlJykgZm9ybWF0T3B0aW9uc1t0cmltbWVkS2V5XSA9IGZhbHNlO1xuICAgICAgICAgIGlmICh2YWwgPT09ICd0cnVlJykgZm9ybWF0T3B0aW9uc1t0cmltbWVkS2V5XSA9IHRydWU7XG4gICAgICAgICAgaWYgKCFpc05hTih2YWwpKSBmb3JtYXRPcHRpb25zW3RyaW1tZWRLZXldID0gcGFyc2VJbnQodmFsLCAxMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIGZvcm1hdE5hbWUsXG4gICAgZm9ybWF0T3B0aW9uc1xuICB9O1xufTtcbmNvbnN0IGNyZWF0ZUNhY2hlZEZvcm1hdHRlciA9IGZuID0+IHtcbiAgY29uc3QgY2FjaGUgPSB7fTtcbiAgcmV0dXJuICh2YWwsIGxuZywgb3B0aW9ucykgPT4ge1xuICAgIGxldCBvcHRGb3JDYWNoZSA9IG9wdGlvbnM7XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5pbnRlcnBvbGF0aW9ua2V5ICYmIG9wdGlvbnMuZm9ybWF0UGFyYW1zICYmIG9wdGlvbnMuZm9ybWF0UGFyYW1zW29wdGlvbnMuaW50ZXJwb2xhdGlvbmtleV0gJiYgb3B0aW9uc1tvcHRpb25zLmludGVycG9sYXRpb25rZXldKSB7XG4gICAgICBvcHRGb3JDYWNoZSA9IHtcbiAgICAgICAgLi4ub3B0Rm9yQ2FjaGUsXG4gICAgICAgIFtvcHRpb25zLmludGVycG9sYXRpb25rZXldOiB1bmRlZmluZWRcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGtleSA9IGxuZyArIEpTT04uc3RyaW5naWZ5KG9wdEZvckNhY2hlKTtcbiAgICBsZXQgZm9ybWF0dGVyID0gY2FjaGVba2V5XTtcbiAgICBpZiAoIWZvcm1hdHRlcikge1xuICAgICAgZm9ybWF0dGVyID0gZm4oZ2V0Q2xlYW5lZENvZGUobG5nKSwgb3B0aW9ucyk7XG4gICAgICBjYWNoZVtrZXldID0gZm9ybWF0dGVyO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0dGVyKHZhbCk7XG4gIH07XG59O1xuY2xhc3MgRm9ybWF0dGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIHRoaXMubG9nZ2VyID0gYmFzZUxvZ2dlci5jcmVhdGUoJ2Zvcm1hdHRlcicpO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5mb3JtYXRzID0ge1xuICAgICAgbnVtYmVyOiBjcmVhdGVDYWNoZWRGb3JtYXR0ZXIoKGxuZywgb3B0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChsbmcsIHtcbiAgICAgICAgICAuLi5vcHRcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2YWwgPT4gZm9ybWF0dGVyLmZvcm1hdCh2YWwpO1xuICAgICAgfSksXG4gICAgICBjdXJyZW5jeTogY3JlYXRlQ2FjaGVkRm9ybWF0dGVyKChsbmcsIG9wdCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQobG5nLCB7XG4gICAgICAgICAgLi4ub3B0LFxuICAgICAgICAgIHN0eWxlOiAnY3VycmVuY3knXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmFsID0+IGZvcm1hdHRlci5mb3JtYXQodmFsKTtcbiAgICAgIH0pLFxuICAgICAgZGF0ZXRpbWU6IGNyZWF0ZUNhY2hlZEZvcm1hdHRlcigobG5nLCBvcHQpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG5nLCB7XG4gICAgICAgICAgLi4ub3B0XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmFsID0+IGZvcm1hdHRlci5mb3JtYXQodmFsKTtcbiAgICAgIH0pLFxuICAgICAgcmVsYXRpdmV0aW1lOiBjcmVhdGVDYWNoZWRGb3JtYXR0ZXIoKGxuZywgb3B0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdChsbmcsIHtcbiAgICAgICAgICAuLi5vcHRcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2YWwgPT4gZm9ybWF0dGVyLmZvcm1hdCh2YWwsIG9wdC5yYW5nZSB8fCAnZGF5Jyk7XG4gICAgICB9KSxcbiAgICAgIGxpc3Q6IGNyZWF0ZUNhY2hlZEZvcm1hdHRlcigobG5nLCBvcHQpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTGlzdEZvcm1hdChsbmcsIHtcbiAgICAgICAgICAuLi5vcHRcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2YWwgPT4gZm9ybWF0dGVyLmZvcm1hdCh2YWwpO1xuICAgICAgfSlcbiAgICB9O1xuICAgIHRoaXMuaW5pdChvcHRpb25zKTtcbiAgfVxuICBpbml0KHNlcnZpY2VzKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHtcbiAgICAgIGludGVycG9sYXRpb246IHt9XG4gICAgfTtcbiAgICB0aGlzLmZvcm1hdFNlcGFyYXRvciA9IG9wdGlvbnMuaW50ZXJwb2xhdGlvbi5mb3JtYXRTZXBhcmF0b3IgfHwgJywnO1xuICB9XG4gIGFkZChuYW1lLCBmYykge1xuICAgIHRoaXMuZm9ybWF0c1tuYW1lLnRvTG93ZXJDYXNlKCkudHJpbSgpXSA9IGZjO1xuICB9XG4gIGFkZENhY2hlZChuYW1lLCBmYykge1xuICAgIHRoaXMuZm9ybWF0c1tuYW1lLnRvTG93ZXJDYXNlKCkudHJpbSgpXSA9IGNyZWF0ZUNhY2hlZEZvcm1hdHRlcihmYyk7XG4gIH1cbiAgZm9ybWF0KHZhbHVlLCBmb3JtYXQsIGxuZykge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcbiAgICBjb25zdCBmb3JtYXRzID0gZm9ybWF0LnNwbGl0KHRoaXMuZm9ybWF0U2VwYXJhdG9yKTtcbiAgICBpZiAoZm9ybWF0cy5sZW5ndGggPiAxICYmIGZvcm1hdHNbMF0uaW5kZXhPZignKCcpID4gMSAmJiBmb3JtYXRzWzBdLmluZGV4T2YoJyknKSA8IDAgJiYgZm9ybWF0cy5maW5kKGYgPT4gZi5pbmRleE9mKCcpJykgPiAtMSkpIHtcbiAgICAgIGNvbnN0IGxhc3RJbmRleCA9IGZvcm1hdHMuZmluZEluZGV4KGYgPT4gZi5pbmRleE9mKCcpJykgPiAtMSk7XG4gICAgICBmb3JtYXRzWzBdID0gW2Zvcm1hdHNbMF0sIC4uLmZvcm1hdHMuc3BsaWNlKDEsIGxhc3RJbmRleCldLmpvaW4odGhpcy5mb3JtYXRTZXBhcmF0b3IpO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBmb3JtYXRzLnJlZHVjZSgobWVtLCBmKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGZvcm1hdE5hbWUsXG4gICAgICAgIGZvcm1hdE9wdGlvbnNcbiAgICAgIH0gPSBwYXJzZUZvcm1hdFN0cihmKTtcbiAgICAgIGlmICh0aGlzLmZvcm1hdHNbZm9ybWF0TmFtZV0pIHtcbiAgICAgICAgbGV0IGZvcm1hdHRlZCA9IG1lbTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB2YWxPcHRpb25zID0gb3B0aW9ucyAmJiBvcHRpb25zLmZvcm1hdFBhcmFtcyAmJiBvcHRpb25zLmZvcm1hdFBhcmFtc1tvcHRpb25zLmludGVycG9sYXRpb25rZXldIHx8IHt9O1xuICAgICAgICAgIGNvbnN0IGwgPSB2YWxPcHRpb25zLmxvY2FsZSB8fCB2YWxPcHRpb25zLmxuZyB8fCBvcHRpb25zLmxvY2FsZSB8fCBvcHRpb25zLmxuZyB8fCBsbmc7XG4gICAgICAgICAgZm9ybWF0dGVkID0gdGhpcy5mb3JtYXRzW2Zvcm1hdE5hbWVdKG1lbSwgbCwge1xuICAgICAgICAgICAgLi4uZm9ybWF0T3B0aW9ucyxcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICAuLi52YWxPcHRpb25zXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgdGhpcy5sb2dnZXIud2FybihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLndhcm4oYHRoZXJlIHdhcyBubyBmb3JtYXQgZnVuY3Rpb24gZm9yICR7Zm9ybWF0TmFtZX1gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtZW07XG4gICAgfSwgdmFsdWUpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuY29uc3QgcmVtb3ZlUGVuZGluZyA9IChxLCBuYW1lKSA9PiB7XG4gIGlmIChxLnBlbmRpbmdbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgIGRlbGV0ZSBxLnBlbmRpbmdbbmFtZV07XG4gICAgcS5wZW5kaW5nQ291bnQtLTtcbiAgfVxufTtcbmNsYXNzIENvbm5lY3RvciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGJhY2tlbmQsIHN0b3JlLCBzZXJ2aWNlcykge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYmFja2VuZCA9IGJhY2tlbmQ7XG4gICAgdGhpcy5zdG9yZSA9IHN0b3JlO1xuICAgIHRoaXMuc2VydmljZXMgPSBzZXJ2aWNlcztcbiAgICB0aGlzLmxhbmd1YWdlVXRpbHMgPSBzZXJ2aWNlcy5sYW5ndWFnZVV0aWxzO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5sb2dnZXIgPSBiYXNlTG9nZ2VyLmNyZWF0ZSgnYmFja2VuZENvbm5lY3RvcicpO1xuICAgIHRoaXMud2FpdGluZ1JlYWRzID0gW107XG4gICAgdGhpcy5tYXhQYXJhbGxlbFJlYWRzID0gb3B0aW9ucy5tYXhQYXJhbGxlbFJlYWRzIHx8IDEwO1xuICAgIHRoaXMucmVhZGluZ0NhbGxzID0gMDtcbiAgICB0aGlzLm1heFJldHJpZXMgPSBvcHRpb25zLm1heFJldHJpZXMgPj0gMCA/IG9wdGlvbnMubWF4UmV0cmllcyA6IDU7XG4gICAgdGhpcy5yZXRyeVRpbWVvdXQgPSBvcHRpb25zLnJldHJ5VGltZW91dCA+PSAxID8gb3B0aW9ucy5yZXRyeVRpbWVvdXQgOiAzNTA7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICBpZiAodGhpcy5iYWNrZW5kICYmIHRoaXMuYmFja2VuZC5pbml0KSB7XG4gICAgICB0aGlzLmJhY2tlbmQuaW5pdChzZXJ2aWNlcywgb3B0aW9ucy5iYWNrZW5kLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cbiAgcXVldWVMb2FkKGxhbmd1YWdlcywgbmFtZXNwYWNlcywgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICBjb25zdCB0b0xvYWQgPSB7fTtcbiAgICBjb25zdCBwZW5kaW5nID0ge307XG4gICAgY29uc3QgdG9Mb2FkTGFuZ3VhZ2VzID0ge307XG4gICAgY29uc3QgdG9Mb2FkTmFtZXNwYWNlcyA9IHt9O1xuICAgIGxhbmd1YWdlcy5mb3JFYWNoKGxuZyA9PiB7XG4gICAgICBsZXQgaGFzQWxsTmFtZXNwYWNlcyA9IHRydWU7XG4gICAgICBuYW1lc3BhY2VzLmZvckVhY2gobnMgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gYCR7bG5nfXwke25zfWA7XG4gICAgICAgIGlmICghb3B0aW9ucy5yZWxvYWQgJiYgdGhpcy5zdG9yZS5oYXNSZXNvdXJjZUJ1bmRsZShsbmcsIG5zKSkge1xuICAgICAgICAgIHRoaXMuc3RhdGVbbmFtZV0gPSAyO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGVbbmFtZV0gPCAwKSA7IGVsc2UgaWYgKHRoaXMuc3RhdGVbbmFtZV0gPT09IDEpIHtcbiAgICAgICAgICBpZiAocGVuZGluZ1tuYW1lXSA9PT0gdW5kZWZpbmVkKSBwZW5kaW5nW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnN0YXRlW25hbWVdID0gMTtcbiAgICAgICAgICBoYXNBbGxOYW1lc3BhY2VzID0gZmFsc2U7XG4gICAgICAgICAgaWYgKHBlbmRpbmdbbmFtZV0gPT09IHVuZGVmaW5lZCkgcGVuZGluZ1tuYW1lXSA9IHRydWU7XG4gICAgICAgICAgaWYgKHRvTG9hZFtuYW1lXSA9PT0gdW5kZWZpbmVkKSB0b0xvYWRbbmFtZV0gPSB0cnVlO1xuICAgICAgICAgIGlmICh0b0xvYWROYW1lc3BhY2VzW25zXSA9PT0gdW5kZWZpbmVkKSB0b0xvYWROYW1lc3BhY2VzW25zXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKCFoYXNBbGxOYW1lc3BhY2VzKSB0b0xvYWRMYW5ndWFnZXNbbG5nXSA9IHRydWU7XG4gICAgfSk7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRvTG9hZCkubGVuZ3RoIHx8IE9iamVjdC5rZXlzKHBlbmRpbmcpLmxlbmd0aCkge1xuICAgICAgdGhpcy5xdWV1ZS5wdXNoKHtcbiAgICAgICAgcGVuZGluZyxcbiAgICAgICAgcGVuZGluZ0NvdW50OiBPYmplY3Qua2V5cyhwZW5kaW5nKS5sZW5ndGgsXG4gICAgICAgIGxvYWRlZDoge30sXG4gICAgICAgIGVycm9yczogW10sXG4gICAgICAgIGNhbGxiYWNrXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvTG9hZDogT2JqZWN0LmtleXModG9Mb2FkKSxcbiAgICAgIHBlbmRpbmc6IE9iamVjdC5rZXlzKHBlbmRpbmcpLFxuICAgICAgdG9Mb2FkTGFuZ3VhZ2VzOiBPYmplY3Qua2V5cyh0b0xvYWRMYW5ndWFnZXMpLFxuICAgICAgdG9Mb2FkTmFtZXNwYWNlczogT2JqZWN0LmtleXModG9Mb2FkTmFtZXNwYWNlcylcbiAgICB9O1xuICB9XG4gIGxvYWRlZChuYW1lLCBlcnIsIGRhdGEpIHtcbiAgICBjb25zdCBzID0gbmFtZS5zcGxpdCgnfCcpO1xuICAgIGNvbnN0IGxuZyA9IHNbMF07XG4gICAgY29uc3QgbnMgPSBzWzFdO1xuICAgIGlmIChlcnIpIHRoaXMuZW1pdCgnZmFpbGVkTG9hZGluZycsIGxuZywgbnMsIGVycik7XG4gICAgaWYgKCFlcnIgJiYgZGF0YSkge1xuICAgICAgdGhpcy5zdG9yZS5hZGRSZXNvdXJjZUJ1bmRsZShsbmcsIG5zLCBkYXRhLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwge1xuICAgICAgICBza2lwQ29weTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc3RhdGVbbmFtZV0gPSBlcnIgPyAtMSA6IDI7XG4gICAgaWYgKGVyciAmJiBkYXRhKSB0aGlzLnN0YXRlW25hbWVdID0gMDtcbiAgICBjb25zdCBsb2FkZWQgPSB7fTtcbiAgICB0aGlzLnF1ZXVlLmZvckVhY2gocSA9PiB7XG4gICAgICBwdXNoUGF0aChxLmxvYWRlZCwgW2xuZ10sIG5zKTtcbiAgICAgIHJlbW92ZVBlbmRpbmcocSwgbmFtZSk7XG4gICAgICBpZiAoZXJyKSBxLmVycm9ycy5wdXNoKGVycik7XG4gICAgICBpZiAocS5wZW5kaW5nQ291bnQgPT09IDAgJiYgIXEuZG9uZSkge1xuICAgICAgICBPYmplY3Qua2V5cyhxLmxvYWRlZCkuZm9yRWFjaChsID0+IHtcbiAgICAgICAgICBpZiAoIWxvYWRlZFtsXSkgbG9hZGVkW2xdID0ge307XG4gICAgICAgICAgY29uc3QgbG9hZGVkS2V5cyA9IHEubG9hZGVkW2xdO1xuICAgICAgICAgIGlmIChsb2FkZWRLZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgbG9hZGVkS2V5cy5mb3JFYWNoKG4gPT4ge1xuICAgICAgICAgICAgICBpZiAobG9hZGVkW2xdW25dID09PSB1bmRlZmluZWQpIGxvYWRlZFtsXVtuXSA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBxLmRvbmUgPSB0cnVlO1xuICAgICAgICBpZiAocS5lcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgcS5jYWxsYmFjayhxLmVycm9ycyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcS5jYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5lbWl0KCdsb2FkZWQnLCBsb2FkZWQpO1xuICAgIHRoaXMucXVldWUgPSB0aGlzLnF1ZXVlLmZpbHRlcihxID0+ICFxLmRvbmUpO1xuICB9XG4gIHJlYWQobG5nLCBucywgZmNOYW1lKSB7XG4gICAgbGV0IHRyaWVkID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAwO1xuICAgIGxldCB3YWl0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgJiYgYXJndW1lbnRzWzRdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNF0gOiB0aGlzLnJldHJ5VGltZW91dDtcbiAgICBsZXQgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gNSA/IGFyZ3VtZW50c1s1XSA6IHVuZGVmaW5lZDtcbiAgICBpZiAoIWxuZy5sZW5ndGgpIHJldHVybiBjYWxsYmFjayhudWxsLCB7fSk7XG4gICAgaWYgKHRoaXMucmVhZGluZ0NhbGxzID49IHRoaXMubWF4UGFyYWxsZWxSZWFkcykge1xuICAgICAgdGhpcy53YWl0aW5nUmVhZHMucHVzaCh7XG4gICAgICAgIGxuZyxcbiAgICAgICAgbnMsXG4gICAgICAgIGZjTmFtZSxcbiAgICAgICAgdHJpZWQsXG4gICAgICAgIHdhaXQsXG4gICAgICAgIGNhbGxiYWNrXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yZWFkaW5nQ2FsbHMrKztcbiAgICBjb25zdCByZXNvbHZlciA9IChlcnIsIGRhdGEpID0+IHtcbiAgICAgIHRoaXMucmVhZGluZ0NhbGxzLS07XG4gICAgICBpZiAodGhpcy53YWl0aW5nUmVhZHMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBuZXh0ID0gdGhpcy53YWl0aW5nUmVhZHMuc2hpZnQoKTtcbiAgICAgICAgdGhpcy5yZWFkKG5leHQubG5nLCBuZXh0Lm5zLCBuZXh0LmZjTmFtZSwgbmV4dC50cmllZCwgbmV4dC53YWl0LCBuZXh0LmNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIGlmIChlcnIgJiYgZGF0YSAmJiB0cmllZCA8IHRoaXMubWF4UmV0cmllcykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlYWQuY2FsbCh0aGlzLCBsbmcsIG5zLCBmY05hbWUsIHRyaWVkICsgMSwgd2FpdCAqIDIsIGNhbGxiYWNrKTtcbiAgICAgICAgfSwgd2FpdCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNhbGxiYWNrKGVyciwgZGF0YSk7XG4gICAgfTtcbiAgICBjb25zdCBmYyA9IHRoaXMuYmFja2VuZFtmY05hbWVdLmJpbmQodGhpcy5iYWNrZW5kKTtcbiAgICBpZiAoZmMubGVuZ3RoID09PSAyKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByID0gZmMobG5nLCBucyk7XG4gICAgICAgIGlmIChyICYmIHR5cGVvZiByLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByLnRoZW4oZGF0YSA9PiByZXNvbHZlcihudWxsLCBkYXRhKSkuY2F0Y2gocmVzb2x2ZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmVyKG51bGwsIHIpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmVzb2x2ZXIoZXJyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGZjKGxuZywgbnMsIHJlc29sdmVyKTtcbiAgfVxuICBwcmVwYXJlTG9hZGluZyhsYW5ndWFnZXMsIG5hbWVzcGFjZXMpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgbGV0IGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgPyBhcmd1bWVudHNbM10gOiB1bmRlZmluZWQ7XG4gICAgaWYgKCF0aGlzLmJhY2tlbmQpIHtcbiAgICAgIHRoaXMubG9nZ2VyLndhcm4oJ05vIGJhY2tlbmQgd2FzIGFkZGVkIHZpYSBpMThuZXh0LnVzZS4gV2lsbCBub3QgbG9hZCByZXNvdXJjZXMuJyk7XG4gICAgICByZXR1cm4gY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcbiAgICB9XG4gICAgaWYgKGlzU3RyaW5nKGxhbmd1YWdlcykpIGxhbmd1YWdlcyA9IHRoaXMubGFuZ3VhZ2VVdGlscy50b1Jlc29sdmVIaWVyYXJjaHkobGFuZ3VhZ2VzKTtcbiAgICBpZiAoaXNTdHJpbmcobmFtZXNwYWNlcykpIG5hbWVzcGFjZXMgPSBbbmFtZXNwYWNlc107XG4gICAgY29uc3QgdG9Mb2FkID0gdGhpcy5xdWV1ZUxvYWQobGFuZ3VhZ2VzLCBuYW1lc3BhY2VzLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gICAgaWYgKCF0b0xvYWQudG9Mb2FkLmxlbmd0aCkge1xuICAgICAgaWYgKCF0b0xvYWQucGVuZGluZy5sZW5ndGgpIGNhbGxiYWNrKCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdG9Mb2FkLnRvTG9hZC5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgdGhpcy5sb2FkT25lKG5hbWUpO1xuICAgIH0pO1xuICB9XG4gIGxvYWQobGFuZ3VhZ2VzLCBuYW1lc3BhY2VzLCBjYWxsYmFjaykge1xuICAgIHRoaXMucHJlcGFyZUxvYWRpbmcobGFuZ3VhZ2VzLCBuYW1lc3BhY2VzLCB7fSwgY2FsbGJhY2spO1xuICB9XG4gIHJlbG9hZChsYW5ndWFnZXMsIG5hbWVzcGFjZXMsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5wcmVwYXJlTG9hZGluZyhsYW5ndWFnZXMsIG5hbWVzcGFjZXMsIHtcbiAgICAgIHJlbG9hZDogdHJ1ZVxuICAgIH0sIGNhbGxiYWNrKTtcbiAgfVxuICBsb2FkT25lKG5hbWUpIHtcbiAgICBsZXQgcHJlZml4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnJztcbiAgICBjb25zdCBzID0gbmFtZS5zcGxpdCgnfCcpO1xuICAgIGNvbnN0IGxuZyA9IHNbMF07XG4gICAgY29uc3QgbnMgPSBzWzFdO1xuICAgIHRoaXMucmVhZChsbmcsIG5zLCAncmVhZCcsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICBpZiAoZXJyKSB0aGlzLmxvZ2dlci53YXJuKGAke3ByZWZpeH1sb2FkaW5nIG5hbWVzcGFjZSAke25zfSBmb3IgbGFuZ3VhZ2UgJHtsbmd9IGZhaWxlZGAsIGVycik7XG4gICAgICBpZiAoIWVyciAmJiBkYXRhKSB0aGlzLmxvZ2dlci5sb2coYCR7cHJlZml4fWxvYWRlZCBuYW1lc3BhY2UgJHtuc30gZm9yIGxhbmd1YWdlICR7bG5nfWAsIGRhdGEpO1xuICAgICAgdGhpcy5sb2FkZWQobmFtZSwgZXJyLCBkYXRhKTtcbiAgICB9KTtcbiAgfVxuICBzYXZlTWlzc2luZyhsYW5ndWFnZXMsIG5hbWVzcGFjZSwga2V5LCBmYWxsYmFja1ZhbHVlLCBpc1VwZGF0ZSkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgJiYgYXJndW1lbnRzWzVdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNV0gOiB7fTtcbiAgICBsZXQgY2xiID0gYXJndW1lbnRzLmxlbmd0aCA+IDYgJiYgYXJndW1lbnRzWzZdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNl0gOiAoKSA9PiB7fTtcbiAgICBpZiAodGhpcy5zZXJ2aWNlcy51dGlscyAmJiB0aGlzLnNlcnZpY2VzLnV0aWxzLmhhc0xvYWRlZE5hbWVzcGFjZSAmJiAhdGhpcy5zZXJ2aWNlcy51dGlscy5oYXNMb2FkZWROYW1lc3BhY2UobmFtZXNwYWNlKSkge1xuICAgICAgdGhpcy5sb2dnZXIud2FybihgZGlkIG5vdCBzYXZlIGtleSBcIiR7a2V5fVwiIGFzIHRoZSBuYW1lc3BhY2UgXCIke25hbWVzcGFjZX1cIiB3YXMgbm90IHlldCBsb2FkZWRgLCAnVGhpcyBtZWFucyBzb21ldGhpbmcgSVMgV1JPTkcgaW4geW91ciBzZXR1cC4gWW91IGFjY2VzcyB0aGUgdCBmdW5jdGlvbiBiZWZvcmUgaTE4bmV4dC5pbml0IC8gaTE4bmV4dC5sb2FkTmFtZXNwYWNlIC8gaTE4bmV4dC5jaGFuZ2VMYW5ndWFnZSB3YXMgZG9uZS4gV2FpdCBmb3IgdGhlIGNhbGxiYWNrIG9yIFByb21pc2UgdG8gcmVzb2x2ZSBiZWZvcmUgYWNjZXNzaW5nIGl0ISEhJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCB8fCBrZXkgPT09IG51bGwgfHwga2V5ID09PSAnJykgcmV0dXJuO1xuICAgIGlmICh0aGlzLmJhY2tlbmQgJiYgdGhpcy5iYWNrZW5kLmNyZWF0ZSkge1xuICAgICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgaXNVcGRhdGVcbiAgICAgIH07XG4gICAgICBjb25zdCBmYyA9IHRoaXMuYmFja2VuZC5jcmVhdGUuYmluZCh0aGlzLmJhY2tlbmQpO1xuICAgICAgaWYgKGZjLmxlbmd0aCA8IDYpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsZXQgcjtcbiAgICAgICAgICBpZiAoZmMubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICByID0gZmMobGFuZ3VhZ2VzLCBuYW1lc3BhY2UsIGtleSwgZmFsbGJhY2tWYWx1ZSwgb3B0cyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHIgPSBmYyhsYW5ndWFnZXMsIG5hbWVzcGFjZSwga2V5LCBmYWxsYmFja1ZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHIgJiYgdHlwZW9mIHIudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgci50aGVuKGRhdGEgPT4gY2xiKG51bGwsIGRhdGEpKS5jYXRjaChjbGIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbGIobnVsbCwgcik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjbGIoZXJyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmMobGFuZ3VhZ2VzLCBuYW1lc3BhY2UsIGtleSwgZmFsbGJhY2tWYWx1ZSwgY2xiLCBvcHRzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFsYW5ndWFnZXMgfHwgIWxhbmd1YWdlc1swXSkgcmV0dXJuO1xuICAgIHRoaXMuc3RvcmUuYWRkUmVzb3VyY2UobGFuZ3VhZ2VzWzBdLCBuYW1lc3BhY2UsIGtleSwgZmFsbGJhY2tWYWx1ZSk7XG4gIH1cbn1cblxuY29uc3QgZ2V0ID0gKCkgPT4gKHtcbiAgZGVidWc6IGZhbHNlLFxuICBpbml0SW1tZWRpYXRlOiB0cnVlLFxuICBuczogWyd0cmFuc2xhdGlvbiddLFxuICBkZWZhdWx0TlM6IFsndHJhbnNsYXRpb24nXSxcbiAgZmFsbGJhY2tMbmc6IFsnZGV2J10sXG4gIGZhbGxiYWNrTlM6IGZhbHNlLFxuICBzdXBwb3J0ZWRMbmdzOiBmYWxzZSxcbiAgbm9uRXhwbGljaXRTdXBwb3J0ZWRMbmdzOiBmYWxzZSxcbiAgbG9hZDogJ2FsbCcsXG4gIHByZWxvYWQ6IGZhbHNlLFxuICBzaW1wbGlmeVBsdXJhbFN1ZmZpeDogdHJ1ZSxcbiAga2V5U2VwYXJhdG9yOiAnLicsXG4gIG5zU2VwYXJhdG9yOiAnOicsXG4gIHBsdXJhbFNlcGFyYXRvcjogJ18nLFxuICBjb250ZXh0U2VwYXJhdG9yOiAnXycsXG4gIHBhcnRpYWxCdW5kbGVkTGFuZ3VhZ2VzOiBmYWxzZSxcbiAgc2F2ZU1pc3Npbmc6IGZhbHNlLFxuICB1cGRhdGVNaXNzaW5nOiBmYWxzZSxcbiAgc2F2ZU1pc3NpbmdUbzogJ2ZhbGxiYWNrJyxcbiAgc2F2ZU1pc3NpbmdQbHVyYWxzOiB0cnVlLFxuICBtaXNzaW5nS2V5SGFuZGxlcjogZmFsc2UsXG4gIG1pc3NpbmdJbnRlcnBvbGF0aW9uSGFuZGxlcjogZmFsc2UsXG4gIHBvc3RQcm9jZXNzOiBmYWxzZSxcbiAgcG9zdFByb2Nlc3NQYXNzUmVzb2x2ZWQ6IGZhbHNlLFxuICByZXR1cm5OdWxsOiBmYWxzZSxcbiAgcmV0dXJuRW1wdHlTdHJpbmc6IHRydWUsXG4gIHJldHVybk9iamVjdHM6IGZhbHNlLFxuICBqb2luQXJyYXlzOiBmYWxzZSxcbiAgcmV0dXJuZWRPYmplY3RIYW5kbGVyOiBmYWxzZSxcbiAgcGFyc2VNaXNzaW5nS2V5SGFuZGxlcjogZmFsc2UsXG4gIGFwcGVuZE5hbWVzcGFjZVRvTWlzc2luZ0tleTogZmFsc2UsXG4gIGFwcGVuZE5hbWVzcGFjZVRvQ0lNb2RlOiBmYWxzZSxcbiAgb3ZlcmxvYWRUcmFuc2xhdGlvbk9wdGlvbkhhbmRsZXI6IGFyZ3MgPT4ge1xuICAgIGxldCByZXQgPSB7fTtcbiAgICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICdvYmplY3QnKSByZXQgPSBhcmdzWzFdO1xuICAgIGlmIChpc1N0cmluZyhhcmdzWzFdKSkgcmV0LmRlZmF1bHRWYWx1ZSA9IGFyZ3NbMV07XG4gICAgaWYgKGlzU3RyaW5nKGFyZ3NbMl0pKSByZXQudERlc2NyaXB0aW9uID0gYXJnc1syXTtcbiAgICBpZiAodHlwZW9mIGFyZ3NbMl0gPT09ICdvYmplY3QnIHx8IHR5cGVvZiBhcmdzWzNdID09PSAnb2JqZWN0Jykge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IGFyZ3NbM10gfHwgYXJnc1syXTtcbiAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgcmV0W2tleV0gPSBvcHRpb25zW2tleV07XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfSxcbiAgaW50ZXJwb2xhdGlvbjoge1xuICAgIGVzY2FwZVZhbHVlOiB0cnVlLFxuICAgIGZvcm1hdDogdmFsdWUgPT4gdmFsdWUsXG4gICAgcHJlZml4OiAne3snLFxuICAgIHN1ZmZpeDogJ319JyxcbiAgICBmb3JtYXRTZXBhcmF0b3I6ICcsJyxcbiAgICB1bmVzY2FwZVByZWZpeDogJy0nLFxuICAgIG5lc3RpbmdQcmVmaXg6ICckdCgnLFxuICAgIG5lc3RpbmdTdWZmaXg6ICcpJyxcbiAgICBuZXN0aW5nT3B0aW9uc1NlcGFyYXRvcjogJywnLFxuICAgIG1heFJlcGxhY2VzOiAxMDAwLFxuICAgIHNraXBPblZhcmlhYmxlczogdHJ1ZVxuICB9XG59KTtcbmNvbnN0IHRyYW5zZm9ybU9wdGlvbnMgPSBvcHRpb25zID0+IHtcbiAgaWYgKGlzU3RyaW5nKG9wdGlvbnMubnMpKSBvcHRpb25zLm5zID0gW29wdGlvbnMubnNdO1xuICBpZiAoaXNTdHJpbmcob3B0aW9ucy5mYWxsYmFja0xuZykpIG9wdGlvbnMuZmFsbGJhY2tMbmcgPSBbb3B0aW9ucy5mYWxsYmFja0xuZ107XG4gIGlmIChpc1N0cmluZyhvcHRpb25zLmZhbGxiYWNrTlMpKSBvcHRpb25zLmZhbGxiYWNrTlMgPSBbb3B0aW9ucy5mYWxsYmFja05TXTtcbiAgaWYgKG9wdGlvbnMuc3VwcG9ydGVkTG5ncyAmJiBvcHRpb25zLnN1cHBvcnRlZExuZ3MuaW5kZXhPZignY2ltb2RlJykgPCAwKSB7XG4gICAgb3B0aW9ucy5zdXBwb3J0ZWRMbmdzID0gb3B0aW9ucy5zdXBwb3J0ZWRMbmdzLmNvbmNhdChbJ2NpbW9kZSddKTtcbiAgfVxuICByZXR1cm4gb3B0aW9ucztcbn07XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcbmNvbnN0IGJpbmRNZW1iZXJGdW5jdGlvbnMgPSBpbnN0ID0+IHtcbiAgY29uc3QgbWVtcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE9iamVjdC5nZXRQcm90b3R5cGVPZihpbnN0KSk7XG4gIG1lbXMuZm9yRWFjaChtZW0gPT4ge1xuICAgIGlmICh0eXBlb2YgaW5zdFttZW1dID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpbnN0W21lbV0gPSBpbnN0W21lbV0uYmluZChpbnN0KTtcbiAgICB9XG4gIH0pO1xufTtcbmNsYXNzIEkxOG4gZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgbGV0IGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm9wdGlvbnMgPSB0cmFuc2Zvcm1PcHRpb25zKG9wdGlvbnMpO1xuICAgIHRoaXMuc2VydmljZXMgPSB7fTtcbiAgICB0aGlzLmxvZ2dlciA9IGJhc2VMb2dnZXI7XG4gICAgdGhpcy5tb2R1bGVzID0ge1xuICAgICAgZXh0ZXJuYWw6IFtdXG4gICAgfTtcbiAgICBiaW5kTWVtYmVyRnVuY3Rpb25zKHRoaXMpO1xuICAgIGlmIChjYWxsYmFjayAmJiAhdGhpcy5pc0luaXRpYWxpemVkICYmICFvcHRpb25zLmlzQ2xvbmUpIHtcbiAgICAgIGlmICghdGhpcy5vcHRpb25zLmluaXRJbW1lZGlhdGUpIHtcbiAgICAgICAgdGhpcy5pbml0KG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5pbml0KG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuICBpbml0KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIGxldCBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuaXNJbml0aWFsaXppbmcgPSB0cnVlO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSBvcHRpb25zO1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMuZGVmYXVsdE5TICYmIG9wdGlvbnMuZGVmYXVsdE5TICE9PSBmYWxzZSAmJiBvcHRpb25zLm5zKSB7XG4gICAgICBpZiAoaXNTdHJpbmcob3B0aW9ucy5ucykpIHtcbiAgICAgICAgb3B0aW9ucy5kZWZhdWx0TlMgPSBvcHRpb25zLm5zO1xuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLm5zLmluZGV4T2YoJ3RyYW5zbGF0aW9uJykgPCAwKSB7XG4gICAgICAgIG9wdGlvbnMuZGVmYXVsdE5TID0gb3B0aW9ucy5uc1swXTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZGVmT3B0cyA9IGdldCgpO1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIC4uLmRlZk9wdHMsXG4gICAgICAuLi50aGlzLm9wdGlvbnMsXG4gICAgICAuLi50cmFuc2Zvcm1PcHRpb25zKG9wdGlvbnMpXG4gICAgfTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlBUEkgIT09ICd2MScpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uID0ge1xuICAgICAgICAuLi5kZWZPcHRzLmludGVycG9sYXRpb24sXG4gICAgICAgIC4uLnRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5rZXlTZXBhcmF0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vcHRpb25zLnVzZXJEZWZpbmVkS2V5U2VwYXJhdG9yID0gb3B0aW9ucy5rZXlTZXBhcmF0b3I7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLm5zU2VwYXJhdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub3B0aW9ucy51c2VyRGVmaW5lZE5zU2VwYXJhdG9yID0gb3B0aW9ucy5uc1NlcGFyYXRvcjtcbiAgICB9XG4gICAgY29uc3QgY3JlYXRlQ2xhc3NPbkRlbWFuZCA9IENsYXNzT3JPYmplY3QgPT4ge1xuICAgICAgaWYgKCFDbGFzc09yT2JqZWN0KSByZXR1cm4gbnVsbDtcbiAgICAgIGlmICh0eXBlb2YgQ2xhc3NPck9iamVjdCA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIG5ldyBDbGFzc09yT2JqZWN0KCk7XG4gICAgICByZXR1cm4gQ2xhc3NPck9iamVjdDtcbiAgICB9O1xuICAgIGlmICghdGhpcy5vcHRpb25zLmlzQ2xvbmUpIHtcbiAgICAgIGlmICh0aGlzLm1vZHVsZXMubG9nZ2VyKSB7XG4gICAgICAgIGJhc2VMb2dnZXIuaW5pdChjcmVhdGVDbGFzc09uRGVtYW5kKHRoaXMubW9kdWxlcy5sb2dnZXIpLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmFzZUxvZ2dlci5pbml0KG51bGwsIHRoaXMub3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBsZXQgZm9ybWF0dGVyO1xuICAgICAgaWYgKHRoaXMubW9kdWxlcy5mb3JtYXR0ZXIpIHtcbiAgICAgICAgZm9ybWF0dGVyID0gdGhpcy5tb2R1bGVzLmZvcm1hdHRlcjtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIEludGwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGZvcm1hdHRlciA9IEZvcm1hdHRlcjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGx1ID0gbmV3IExhbmd1YWdlVXRpbCh0aGlzLm9wdGlvbnMpO1xuICAgICAgdGhpcy5zdG9yZSA9IG5ldyBSZXNvdXJjZVN0b3JlKHRoaXMub3B0aW9ucy5yZXNvdXJjZXMsIHRoaXMub3B0aW9ucyk7XG4gICAgICBjb25zdCBzID0gdGhpcy5zZXJ2aWNlcztcbiAgICAgIHMubG9nZ2VyID0gYmFzZUxvZ2dlcjtcbiAgICAgIHMucmVzb3VyY2VTdG9yZSA9IHRoaXMuc3RvcmU7XG4gICAgICBzLmxhbmd1YWdlVXRpbHMgPSBsdTtcbiAgICAgIHMucGx1cmFsUmVzb2x2ZXIgPSBuZXcgUGx1cmFsUmVzb2x2ZXIobHUsIHtcbiAgICAgICAgcHJlcGVuZDogdGhpcy5vcHRpb25zLnBsdXJhbFNlcGFyYXRvcixcbiAgICAgICAgY29tcGF0aWJpbGl0eUpTT046IHRoaXMub3B0aW9ucy5jb21wYXRpYmlsaXR5SlNPTixcbiAgICAgICAgc2ltcGxpZnlQbHVyYWxTdWZmaXg6IHRoaXMub3B0aW9ucy5zaW1wbGlmeVBsdXJhbFN1ZmZpeFxuICAgICAgfSk7XG4gICAgICBpZiAoZm9ybWF0dGVyICYmICghdGhpcy5vcHRpb25zLmludGVycG9sYXRpb24uZm9ybWF0IHx8IHRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uLmZvcm1hdCA9PT0gZGVmT3B0cy5pbnRlcnBvbGF0aW9uLmZvcm1hdCkpIHtcbiAgICAgICAgcy5mb3JtYXR0ZXIgPSBjcmVhdGVDbGFzc09uRGVtYW5kKGZvcm1hdHRlcik7XG4gICAgICAgIHMuZm9ybWF0dGVyLmluaXQocywgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLmludGVycG9sYXRpb24uZm9ybWF0ID0gcy5mb3JtYXR0ZXIuZm9ybWF0LmJpbmQocy5mb3JtYXR0ZXIpO1xuICAgICAgfVxuICAgICAgcy5pbnRlcnBvbGF0b3IgPSBuZXcgSW50ZXJwb2xhdG9yKHRoaXMub3B0aW9ucyk7XG4gICAgICBzLnV0aWxzID0ge1xuICAgICAgICBoYXNMb2FkZWROYW1lc3BhY2U6IHRoaXMuaGFzTG9hZGVkTmFtZXNwYWNlLmJpbmQodGhpcylcbiAgICAgIH07XG4gICAgICBzLmJhY2tlbmRDb25uZWN0b3IgPSBuZXcgQ29ubmVjdG9yKGNyZWF0ZUNsYXNzT25EZW1hbmQodGhpcy5tb2R1bGVzLmJhY2tlbmQpLCBzLnJlc291cmNlU3RvcmUsIHMsIHRoaXMub3B0aW9ucyk7XG4gICAgICBzLmJhY2tlbmRDb25uZWN0b3Iub24oJyonLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLmVtaXQoZXZlbnQsIC4uLmFyZ3MpO1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5tb2R1bGVzLmxhbmd1YWdlRGV0ZWN0b3IpIHtcbiAgICAgICAgcy5sYW5ndWFnZURldGVjdG9yID0gY3JlYXRlQ2xhc3NPbkRlbWFuZCh0aGlzLm1vZHVsZXMubGFuZ3VhZ2VEZXRlY3Rvcik7XG4gICAgICAgIGlmIChzLmxhbmd1YWdlRGV0ZWN0b3IuaW5pdCkgcy5sYW5ndWFnZURldGVjdG9yLmluaXQocywgdGhpcy5vcHRpb25zLmRldGVjdGlvbiwgdGhpcy5vcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm1vZHVsZXMuaTE4bkZvcm1hdCkge1xuICAgICAgICBzLmkxOG5Gb3JtYXQgPSBjcmVhdGVDbGFzc09uRGVtYW5kKHRoaXMubW9kdWxlcy5pMThuRm9ybWF0KTtcbiAgICAgICAgaWYgKHMuaTE4bkZvcm1hdC5pbml0KSBzLmkxOG5Gb3JtYXQuaW5pdCh0aGlzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudHJhbnNsYXRvciA9IG5ldyBUcmFuc2xhdG9yKHRoaXMuc2VydmljZXMsIHRoaXMub3B0aW9ucyk7XG4gICAgICB0aGlzLnRyYW5zbGF0b3Iub24oJyonLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLmVtaXQoZXZlbnQsIC4uLmFyZ3MpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLm1vZHVsZXMuZXh0ZXJuYWwuZm9yRWFjaChtID0+IHtcbiAgICAgICAgaWYgKG0uaW5pdCkgbS5pbml0KHRoaXMpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuZm9ybWF0ID0gdGhpcy5vcHRpb25zLmludGVycG9sYXRpb24uZm9ybWF0O1xuICAgIGlmICghY2FsbGJhY2spIGNhbGxiYWNrID0gbm9vcDtcbiAgICBpZiAodGhpcy5vcHRpb25zLmZhbGxiYWNrTG5nICYmICF0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IgJiYgIXRoaXMub3B0aW9ucy5sbmcpIHtcbiAgICAgIGNvbnN0IGNvZGVzID0gdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZVV0aWxzLmdldEZhbGxiYWNrQ29kZXModGhpcy5vcHRpb25zLmZhbGxiYWNrTG5nKTtcbiAgICAgIGlmIChjb2Rlcy5sZW5ndGggPiAwICYmIGNvZGVzWzBdICE9PSAnZGV2JykgdGhpcy5vcHRpb25zLmxuZyA9IGNvZGVzWzBdO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3RvciAmJiAhdGhpcy5vcHRpb25zLmxuZykge1xuICAgICAgdGhpcy5sb2dnZXIud2FybignaW5pdDogbm8gbGFuZ3VhZ2VEZXRlY3RvciBpcyB1c2VkIGFuZCBubyBsbmcgaXMgZGVmaW5lZCcpO1xuICAgIH1cbiAgICBjb25zdCBzdG9yZUFwaSA9IFsnZ2V0UmVzb3VyY2UnLCAnaGFzUmVzb3VyY2VCdW5kbGUnLCAnZ2V0UmVzb3VyY2VCdW5kbGUnLCAnZ2V0RGF0YUJ5TGFuZ3VhZ2UnXTtcbiAgICBzdG9yZUFwaS5mb3JFYWNoKGZjTmFtZSA9PiB7XG4gICAgICB0aGlzW2ZjTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zdG9yZVtmY05hbWVdKC4uLmFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH0pO1xuICAgIGNvbnN0IHN0b3JlQXBpQ2hhaW5lZCA9IFsnYWRkUmVzb3VyY2UnLCAnYWRkUmVzb3VyY2VzJywgJ2FkZFJlc291cmNlQnVuZGxlJywgJ3JlbW92ZVJlc291cmNlQnVuZGxlJ107XG4gICAgc3RvcmVBcGlDaGFpbmVkLmZvckVhY2goZmNOYW1lID0+IHtcbiAgICAgIHRoaXNbZmNOYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuc3RvcmVbZmNOYW1lXSguLi5hcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICB9O1xuICAgIH0pO1xuICAgIGNvbnN0IGRlZmVycmVkID0gZGVmZXIoKTtcbiAgICBjb25zdCBsb2FkID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmluaXNoID0gKGVyciwgdCkgPT4ge1xuICAgICAgICB0aGlzLmlzSW5pdGlhbGl6aW5nID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmlzSW5pdGlhbGl6ZWQgJiYgIXRoaXMuaW5pdGlhbGl6ZWRTdG9yZU9uY2UpIHRoaXMubG9nZ2VyLndhcm4oJ2luaXQ6IGkxOG5leHQgaXMgYWxyZWFkeSBpbml0aWFsaXplZC4gWW91IHNob3VsZCBjYWxsIGluaXQganVzdCBvbmNlIScpO1xuICAgICAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5pc0Nsb25lKSB0aGlzLmxvZ2dlci5sb2coJ2luaXRpYWxpemVkJywgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgdGhpcy5lbWl0KCdpbml0aWFsaXplZCcsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUodCk7XG4gICAgICAgIGNhbGxiYWNrKGVyciwgdCk7XG4gICAgICB9O1xuICAgICAgaWYgKHRoaXMubGFuZ3VhZ2VzICYmIHRoaXMub3B0aW9ucy5jb21wYXRpYmlsaXR5QVBJICE9PSAndjEnICYmICF0aGlzLmlzSW5pdGlhbGl6ZWQpIHJldHVybiBmaW5pc2gobnVsbCwgdGhpcy50LmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5jaGFuZ2VMYW5ndWFnZSh0aGlzLm9wdGlvbnMubG5nLCBmaW5pc2gpO1xuICAgIH07XG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZXNvdXJjZXMgfHwgIXRoaXMub3B0aW9ucy5pbml0SW1tZWRpYXRlKSB7XG4gICAgICBsb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQobG9hZCwgMCk7XG4gICAgfVxuICAgIHJldHVybiBkZWZlcnJlZDtcbiAgfVxuICBsb2FkUmVzb3VyY2VzKGxhbmd1YWdlKSB7XG4gICAgbGV0IGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBub29wO1xuICAgIGxldCB1c2VkQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICBjb25zdCB1c2VkTG5nID0gaXNTdHJpbmcobGFuZ3VhZ2UpID8gbGFuZ3VhZ2UgOiB0aGlzLmxhbmd1YWdlO1xuICAgIGlmICh0eXBlb2YgbGFuZ3VhZ2UgPT09ICdmdW5jdGlvbicpIHVzZWRDYWxsYmFjayA9IGxhbmd1YWdlO1xuICAgIGlmICghdGhpcy5vcHRpb25zLnJlc291cmNlcyB8fCB0aGlzLm9wdGlvbnMucGFydGlhbEJ1bmRsZWRMYW5ndWFnZXMpIHtcbiAgICAgIGlmICh1c2VkTG5nICYmIHVzZWRMbmcudG9Mb3dlckNhc2UoKSA9PT0gJ2NpbW9kZScgJiYgKCF0aGlzLm9wdGlvbnMucHJlbG9hZCB8fCB0aGlzLm9wdGlvbnMucHJlbG9hZC5sZW5ndGggPT09IDApKSByZXR1cm4gdXNlZENhbGxiYWNrKCk7XG4gICAgICBjb25zdCB0b0xvYWQgPSBbXTtcbiAgICAgIGNvbnN0IGFwcGVuZCA9IGxuZyA9PiB7XG4gICAgICAgIGlmICghbG5nKSByZXR1cm47XG4gICAgICAgIGlmIChsbmcgPT09ICdjaW1vZGUnKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGxuZ3MgPSB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlVXRpbHMudG9SZXNvbHZlSGllcmFyY2h5KGxuZyk7XG4gICAgICAgIGxuZ3MuZm9yRWFjaChsID0+IHtcbiAgICAgICAgICBpZiAobCA9PT0gJ2NpbW9kZScpIHJldHVybjtcbiAgICAgICAgICBpZiAodG9Mb2FkLmluZGV4T2YobCkgPCAwKSB0b0xvYWQucHVzaChsKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgaWYgKCF1c2VkTG5nKSB7XG4gICAgICAgIGNvbnN0IGZhbGxiYWNrcyA9IHRoaXMuc2VydmljZXMubGFuZ3VhZ2VVdGlscy5nZXRGYWxsYmFja0NvZGVzKHRoaXMub3B0aW9ucy5mYWxsYmFja0xuZyk7XG4gICAgICAgIGZhbGxiYWNrcy5mb3JFYWNoKGwgPT4gYXBwZW5kKGwpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFwcGVuZCh1c2VkTG5nKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucHJlbG9hZCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMucHJlbG9hZC5mb3JFYWNoKGwgPT4gYXBwZW5kKGwpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VydmljZXMuYmFja2VuZENvbm5lY3Rvci5sb2FkKHRvTG9hZCwgdGhpcy5vcHRpb25zLm5zLCBlID0+IHtcbiAgICAgICAgaWYgKCFlICYmICF0aGlzLnJlc29sdmVkTGFuZ3VhZ2UgJiYgdGhpcy5sYW5ndWFnZSkgdGhpcy5zZXRSZXNvbHZlZExhbmd1YWdlKHRoaXMubGFuZ3VhZ2UpO1xuICAgICAgICB1c2VkQ2FsbGJhY2soZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXNlZENhbGxiYWNrKG51bGwpO1xuICAgIH1cbiAgfVxuICByZWxvYWRSZXNvdXJjZXMobG5ncywgbnMsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZGVmZXJyZWQgPSBkZWZlcigpO1xuICAgIGlmICh0eXBlb2YgbG5ncyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSBsbmdzO1xuICAgICAgbG5ncyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSBucztcbiAgICAgIG5zID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoIWxuZ3MpIGxuZ3MgPSB0aGlzLmxhbmd1YWdlcztcbiAgICBpZiAoIW5zKSBucyA9IHRoaXMub3B0aW9ucy5ucztcbiAgICBpZiAoIWNhbGxiYWNrKSBjYWxsYmFjayA9IG5vb3A7XG4gICAgdGhpcy5zZXJ2aWNlcy5iYWNrZW5kQ29ubmVjdG9yLnJlbG9hZChsbmdzLCBucywgZXJyID0+IHtcbiAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlZmVycmVkO1xuICB9XG4gIHVzZShtb2R1bGUpIHtcbiAgICBpZiAoIW1vZHVsZSkgdGhyb3cgbmV3IEVycm9yKCdZb3UgYXJlIHBhc3NpbmcgYW4gdW5kZWZpbmVkIG1vZHVsZSEgUGxlYXNlIGNoZWNrIHRoZSBvYmplY3QgeW91IGFyZSBwYXNzaW5nIHRvIGkxOG5leHQudXNlKCknKTtcbiAgICBpZiAoIW1vZHVsZS50eXBlKSB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBhcmUgcGFzc2luZyBhIHdyb25nIG1vZHVsZSEgUGxlYXNlIGNoZWNrIHRoZSBvYmplY3QgeW91IGFyZSBwYXNzaW5nIHRvIGkxOG5leHQudXNlKCknKTtcbiAgICBpZiAobW9kdWxlLnR5cGUgPT09ICdiYWNrZW5kJykge1xuICAgICAgdGhpcy5tb2R1bGVzLmJhY2tlbmQgPSBtb2R1bGU7XG4gICAgfVxuICAgIGlmIChtb2R1bGUudHlwZSA9PT0gJ2xvZ2dlcicgfHwgbW9kdWxlLmxvZyAmJiBtb2R1bGUud2FybiAmJiBtb2R1bGUuZXJyb3IpIHtcbiAgICAgIHRoaXMubW9kdWxlcy5sb2dnZXIgPSBtb2R1bGU7XG4gICAgfVxuICAgIGlmIChtb2R1bGUudHlwZSA9PT0gJ2xhbmd1YWdlRGV0ZWN0b3InKSB7XG4gICAgICB0aGlzLm1vZHVsZXMubGFuZ3VhZ2VEZXRlY3RvciA9IG1vZHVsZTtcbiAgICB9XG4gICAgaWYgKG1vZHVsZS50eXBlID09PSAnaTE4bkZvcm1hdCcpIHtcbiAgICAgIHRoaXMubW9kdWxlcy5pMThuRm9ybWF0ID0gbW9kdWxlO1xuICAgIH1cbiAgICBpZiAobW9kdWxlLnR5cGUgPT09ICdwb3N0UHJvY2Vzc29yJykge1xuICAgICAgcG9zdFByb2Nlc3Nvci5hZGRQb3N0UHJvY2Vzc29yKG1vZHVsZSk7XG4gICAgfVxuICAgIGlmIChtb2R1bGUudHlwZSA9PT0gJ2Zvcm1hdHRlcicpIHtcbiAgICAgIHRoaXMubW9kdWxlcy5mb3JtYXR0ZXIgPSBtb2R1bGU7XG4gICAgfVxuICAgIGlmIChtb2R1bGUudHlwZSA9PT0gJzNyZFBhcnR5Jykge1xuICAgICAgdGhpcy5tb2R1bGVzLmV4dGVybmFsLnB1c2gobW9kdWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0UmVzb2x2ZWRMYW5ndWFnZShsKSB7XG4gICAgaWYgKCFsIHx8ICF0aGlzLmxhbmd1YWdlcykgcmV0dXJuO1xuICAgIGlmIChbJ2NpbW9kZScsICdkZXYnXS5pbmRleE9mKGwpID4gLTEpIHJldHVybjtcbiAgICBmb3IgKGxldCBsaSA9IDA7IGxpIDwgdGhpcy5sYW5ndWFnZXMubGVuZ3RoOyBsaSsrKSB7XG4gICAgICBjb25zdCBsbmdJbkxuZ3MgPSB0aGlzLmxhbmd1YWdlc1tsaV07XG4gICAgICBpZiAoWydjaW1vZGUnLCAnZGV2J10uaW5kZXhPZihsbmdJbkxuZ3MpID4gLTEpIGNvbnRpbnVlO1xuICAgICAgaWYgKHRoaXMuc3RvcmUuaGFzTGFuZ3VhZ2VTb21lVHJhbnNsYXRpb25zKGxuZ0luTG5ncykpIHtcbiAgICAgICAgdGhpcy5yZXNvbHZlZExhbmd1YWdlID0gbG5nSW5MbmdzO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY2hhbmdlTGFuZ3VhZ2UobG5nLCBjYWxsYmFjaykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuICAgIHRoaXMuaXNMYW5ndWFnZUNoYW5naW5nVG8gPSBsbmc7XG4gICAgY29uc3QgZGVmZXJyZWQgPSBkZWZlcigpO1xuICAgIHRoaXMuZW1pdCgnbGFuZ3VhZ2VDaGFuZ2luZycsIGxuZyk7XG4gICAgY29uc3Qgc2V0TG5nUHJvcHMgPSBsID0+IHtcbiAgICAgIHRoaXMubGFuZ3VhZ2UgPSBsO1xuICAgICAgdGhpcy5sYW5ndWFnZXMgPSB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlVXRpbHMudG9SZXNvbHZlSGllcmFyY2h5KGwpO1xuICAgICAgdGhpcy5yZXNvbHZlZExhbmd1YWdlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5zZXRSZXNvbHZlZExhbmd1YWdlKGwpO1xuICAgIH07XG4gICAgY29uc3QgZG9uZSA9IChlcnIsIGwpID0+IHtcbiAgICAgIGlmIChsKSB7XG4gICAgICAgIHNldExuZ1Byb3BzKGwpO1xuICAgICAgICB0aGlzLnRyYW5zbGF0b3IuY2hhbmdlTGFuZ3VhZ2UobCk7XG4gICAgICAgIHRoaXMuaXNMYW5ndWFnZUNoYW5naW5nVG8gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZW1pdCgnbGFuZ3VhZ2VDaGFuZ2VkJywgbCk7XG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZygnbGFuZ3VhZ2VDaGFuZ2VkJywgbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzTGFuZ3VhZ2VDaGFuZ2luZ1RvID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgZGVmZXJyZWQucmVzb2x2ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIudCguLi5hcmd1bWVudHMpO1xuICAgICAgfSk7XG4gICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVyciwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLnQoLi4uYXJndW1lbnRzKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3Qgc2V0TG5nID0gbG5ncyA9PiB7XG4gICAgICBpZiAoIWxuZyAmJiAhbG5ncyAmJiB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IpIGxuZ3MgPSBbXTtcbiAgICAgIGNvbnN0IGwgPSBpc1N0cmluZyhsbmdzKSA/IGxuZ3MgOiB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlVXRpbHMuZ2V0QmVzdE1hdGNoRnJvbUNvZGVzKGxuZ3MpO1xuICAgICAgaWYgKGwpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxhbmd1YWdlKSB7XG4gICAgICAgICAgc2V0TG5nUHJvcHMobCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnRyYW5zbGF0b3IubGFuZ3VhZ2UpIHRoaXMudHJhbnNsYXRvci5jaGFuZ2VMYW5ndWFnZShsKTtcbiAgICAgICAgaWYgKHRoaXMuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3RvciAmJiB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IuY2FjaGVVc2VyTGFuZ3VhZ2UpIHRoaXMuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3Rvci5jYWNoZVVzZXJMYW5ndWFnZShsKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubG9hZFJlc291cmNlcyhsLCBlcnIgPT4ge1xuICAgICAgICBkb25lKGVyciwgbCk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGlmICghbG5nICYmIHRoaXMuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3RvciAmJiAhdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZURldGVjdG9yLmFzeW5jKSB7XG4gICAgICBzZXRMbmcodGhpcy5zZXJ2aWNlcy5sYW5ndWFnZURldGVjdG9yLmRldGVjdCgpKTtcbiAgICB9IGVsc2UgaWYgKCFsbmcgJiYgdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZURldGVjdG9yICYmIHRoaXMuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3Rvci5hc3luYykge1xuICAgICAgaWYgKHRoaXMuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3Rvci5kZXRlY3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3Rvci5kZXRlY3QoKS50aGVuKHNldExuZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IuZGV0ZWN0KHNldExuZyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldExuZyhsbmcpO1xuICAgIH1cbiAgICByZXR1cm4gZGVmZXJyZWQ7XG4gIH1cbiAgZ2V0Rml4ZWRUKGxuZywgbnMsIGtleVByZWZpeCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuICAgIGNvbnN0IGZpeGVkVCA9IGZ1bmN0aW9uIChrZXksIG9wdHMpIHtcbiAgICAgIGxldCBvcHRpb25zO1xuICAgICAgaWYgKHR5cGVvZiBvcHRzICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBuZXcgQXJyYXkoX2xlbjMgPiAyID8gX2xlbjMgLSAyIDogMCksIF9rZXkzID0gMjsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgICAgIHJlc3RbX2tleTMgLSAyXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucyA9IF90aGlzMy5vcHRpb25zLm92ZXJsb2FkVHJhbnNsYXRpb25PcHRpb25IYW5kbGVyKFtrZXksIG9wdHNdLmNvbmNhdChyZXN0KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgIC4uLm9wdHNcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIG9wdGlvbnMubG5nID0gb3B0aW9ucy5sbmcgfHwgZml4ZWRULmxuZztcbiAgICAgIG9wdGlvbnMubG5ncyA9IG9wdGlvbnMubG5ncyB8fCBmaXhlZFQubG5ncztcbiAgICAgIG9wdGlvbnMubnMgPSBvcHRpb25zLm5zIHx8IGZpeGVkVC5ucztcbiAgICAgIGlmIChvcHRpb25zLmtleVByZWZpeCAhPT0gJycpIG9wdGlvbnMua2V5UHJlZml4ID0gb3B0aW9ucy5rZXlQcmVmaXggfHwga2V5UHJlZml4IHx8IGZpeGVkVC5rZXlQcmVmaXg7XG4gICAgICBjb25zdCBrZXlTZXBhcmF0b3IgPSBfdGhpczMub3B0aW9ucy5rZXlTZXBhcmF0b3IgfHwgJy4nO1xuICAgICAgbGV0IHJlc3VsdEtleTtcbiAgICAgIGlmIChvcHRpb25zLmtleVByZWZpeCAmJiBBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICAgICAgcmVzdWx0S2V5ID0ga2V5Lm1hcChrID0+IGAke29wdGlvbnMua2V5UHJlZml4fSR7a2V5U2VwYXJhdG9yfSR7a31gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdEtleSA9IG9wdGlvbnMua2V5UHJlZml4ID8gYCR7b3B0aW9ucy5rZXlQcmVmaXh9JHtrZXlTZXBhcmF0b3J9JHtrZXl9YCA6IGtleTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfdGhpczMudChyZXN1bHRLZXksIG9wdGlvbnMpO1xuICAgIH07XG4gICAgaWYgKGlzU3RyaW5nKGxuZykpIHtcbiAgICAgIGZpeGVkVC5sbmcgPSBsbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpeGVkVC5sbmdzID0gbG5nO1xuICAgIH1cbiAgICBmaXhlZFQubnMgPSBucztcbiAgICBmaXhlZFQua2V5UHJlZml4ID0ga2V5UHJlZml4O1xuICAgIHJldHVybiBmaXhlZFQ7XG4gIH1cbiAgdCgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdG9yICYmIHRoaXMudHJhbnNsYXRvci50cmFuc2xhdGUoLi4uYXJndW1lbnRzKTtcbiAgfVxuICBleGlzdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRvciAmJiB0aGlzLnRyYW5zbGF0b3IuZXhpc3RzKC4uLmFyZ3VtZW50cyk7XG4gIH1cbiAgc2V0RGVmYXVsdE5hbWVzcGFjZShucykge1xuICAgIHRoaXMub3B0aW9ucy5kZWZhdWx0TlMgPSBucztcbiAgfVxuICBoYXNMb2FkZWROYW1lc3BhY2UobnMpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMubG9nZ2VyLndhcm4oJ2hhc0xvYWRlZE5hbWVzcGFjZTogaTE4bmV4dCB3YXMgbm90IGluaXRpYWxpemVkJywgdGhpcy5sYW5ndWFnZXMpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIXRoaXMubGFuZ3VhZ2VzIHx8ICF0aGlzLmxhbmd1YWdlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubG9nZ2VyLndhcm4oJ2hhc0xvYWRlZE5hbWVzcGFjZTogaTE4bi5sYW5ndWFnZXMgd2VyZSB1bmRlZmluZWQgb3IgZW1wdHknLCB0aGlzLmxhbmd1YWdlcyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGxuZyA9IG9wdGlvbnMubG5nIHx8IHRoaXMucmVzb2x2ZWRMYW5ndWFnZSB8fCB0aGlzLmxhbmd1YWdlc1swXTtcbiAgICBjb25zdCBmYWxsYmFja0xuZyA9IHRoaXMub3B0aW9ucyA/IHRoaXMub3B0aW9ucy5mYWxsYmFja0xuZyA6IGZhbHNlO1xuICAgIGNvbnN0IGxhc3RMbmcgPSB0aGlzLmxhbmd1YWdlc1t0aGlzLmxhbmd1YWdlcy5sZW5ndGggLSAxXTtcbiAgICBpZiAobG5nLnRvTG93ZXJDYXNlKCkgPT09ICdjaW1vZGUnKSByZXR1cm4gdHJ1ZTtcbiAgICBjb25zdCBsb2FkTm90UGVuZGluZyA9IChsLCBuKSA9PiB7XG4gICAgICBjb25zdCBsb2FkU3RhdGUgPSB0aGlzLnNlcnZpY2VzLmJhY2tlbmRDb25uZWN0b3Iuc3RhdGVbYCR7bH18JHtufWBdO1xuICAgICAgcmV0dXJuIGxvYWRTdGF0ZSA9PT0gLTEgfHwgbG9hZFN0YXRlID09PSAwIHx8IGxvYWRTdGF0ZSA9PT0gMjtcbiAgICB9O1xuICAgIGlmIChvcHRpb25zLnByZWNoZWNrKSB7XG4gICAgICBjb25zdCBwcmVSZXN1bHQgPSBvcHRpb25zLnByZWNoZWNrKHRoaXMsIGxvYWROb3RQZW5kaW5nKTtcbiAgICAgIGlmIChwcmVSZXN1bHQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHByZVJlc3VsdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuaGFzUmVzb3VyY2VCdW5kbGUobG5nLCBucykpIHJldHVybiB0cnVlO1xuICAgIGlmICghdGhpcy5zZXJ2aWNlcy5iYWNrZW5kQ29ubmVjdG9yLmJhY2tlbmQgfHwgdGhpcy5vcHRpb25zLnJlc291cmNlcyAmJiAhdGhpcy5vcHRpb25zLnBhcnRpYWxCdW5kbGVkTGFuZ3VhZ2VzKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAobG9hZE5vdFBlbmRpbmcobG5nLCBucykgJiYgKCFmYWxsYmFja0xuZyB8fCBsb2FkTm90UGVuZGluZyhsYXN0TG5nLCBucykpKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgbG9hZE5hbWVzcGFjZXMobnMsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZGVmZXJyZWQgPSBkZWZlcigpO1xuICAgIGlmICghdGhpcy5vcHRpb25zLm5zKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuICAgIGlmIChpc1N0cmluZyhucykpIG5zID0gW25zXTtcbiAgICBucy5mb3JFYWNoKG4gPT4ge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5ucy5pbmRleE9mKG4pIDwgMCkgdGhpcy5vcHRpb25zLm5zLnB1c2gobik7XG4gICAgfSk7XG4gICAgdGhpcy5sb2FkUmVzb3VyY2VzKGVyciA9PiB7XG4gICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XG4gICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlZmVycmVkO1xuICB9XG4gIGxvYWRMYW5ndWFnZXMobG5ncywgY2FsbGJhY2spIHtcbiAgICBjb25zdCBkZWZlcnJlZCA9IGRlZmVyKCk7XG4gICAgaWYgKGlzU3RyaW5nKGxuZ3MpKSBsbmdzID0gW2xuZ3NdO1xuICAgIGNvbnN0IHByZWxvYWRlZCA9IHRoaXMub3B0aW9ucy5wcmVsb2FkIHx8IFtdO1xuICAgIGNvbnN0IG5ld0xuZ3MgPSBsbmdzLmZpbHRlcihsbmcgPT4gcHJlbG9hZGVkLmluZGV4T2YobG5nKSA8IDAgJiYgdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZVV0aWxzLmlzU3VwcG9ydGVkQ29kZShsbmcpKTtcbiAgICBpZiAoIW5ld0xuZ3MubGVuZ3RoKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucy5wcmVsb2FkID0gcHJlbG9hZGVkLmNvbmNhdChuZXdMbmdzKTtcbiAgICB0aGlzLmxvYWRSZXNvdXJjZXMoZXJyID0+IHtcbiAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGVmZXJyZWQ7XG4gIH1cbiAgZGlyKGxuZykge1xuICAgIGlmICghbG5nKSBsbmcgPSB0aGlzLnJlc29sdmVkTGFuZ3VhZ2UgfHwgKHRoaXMubGFuZ3VhZ2VzICYmIHRoaXMubGFuZ3VhZ2VzLmxlbmd0aCA+IDAgPyB0aGlzLmxhbmd1YWdlc1swXSA6IHRoaXMubGFuZ3VhZ2UpO1xuICAgIGlmICghbG5nKSByZXR1cm4gJ3J0bCc7XG4gICAgY29uc3QgcnRsTG5ncyA9IFsnYXInLCAnc2h1JywgJ3NxcicsICdzc2gnLCAneGFhJywgJ3loZCcsICd5dWQnLCAnYWFvJywgJ2FiaCcsICdhYnYnLCAnYWNtJywgJ2FjcScsICdhY3cnLCAnYWN4JywgJ2FjeScsICdhZGYnLCAnYWRzJywgJ2FlYicsICdhZWMnLCAnYWZiJywgJ2FqcCcsICdhcGMnLCAnYXBkJywgJ2FyYicsICdhcnEnLCAnYXJzJywgJ2FyeScsICdhcnonLCAnYXV6JywgJ2F2bCcsICdheWgnLCAnYXlsJywgJ2F5bicsICdheXAnLCAnYmJ6JywgJ3BnYScsICdoZScsICdpdycsICdwcycsICdwYnQnLCAncGJ1JywgJ3BzdCcsICdwcnAnLCAncHJkJywgJ3VnJywgJ3VyJywgJ3lkZCcsICd5ZHMnLCAneWloJywgJ2ppJywgJ3lpJywgJ2hibycsICdtZW4nLCAneG1uJywgJ2ZhJywgJ2pwcicsICdwZW8nLCAncGVzJywgJ3BycycsICdkdicsICdzYW0nLCAnY2tiJ107XG4gICAgY29uc3QgbGFuZ3VhZ2VVdGlscyA9IHRoaXMuc2VydmljZXMgJiYgdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZVV0aWxzIHx8IG5ldyBMYW5ndWFnZVV0aWwoZ2V0KCkpO1xuICAgIHJldHVybiBydGxMbmdzLmluZGV4T2YobGFuZ3VhZ2VVdGlscy5nZXRMYW5ndWFnZVBhcnRGcm9tQ29kZShsbmcpKSA+IC0xIHx8IGxuZy50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJy1hcmFiJykgPiAxID8gJ3J0bCcgOiAnbHRyJztcbiAgfVxuICBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIGxldCBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBuZXcgSTE4bihvcHRpb25zLCBjYWxsYmFjayk7XG4gIH1cbiAgY2xvbmVJbnN0YW5jZSgpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgbGV0IGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBub29wO1xuICAgIGNvbnN0IGZvcmtSZXNvdXJjZVN0b3JlID0gb3B0aW9ucy5mb3JrUmVzb3VyY2VTdG9yZTtcbiAgICBpZiAoZm9ya1Jlc291cmNlU3RvcmUpIGRlbGV0ZSBvcHRpb25zLmZvcmtSZXNvdXJjZVN0b3JlO1xuICAgIGNvbnN0IG1lcmdlZE9wdGlvbnMgPSB7XG4gICAgICAuLi50aGlzLm9wdGlvbnMsXG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgLi4ue1xuICAgICAgICBpc0Nsb25lOiB0cnVlXG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBjbG9uZSA9IG5ldyBJMThuKG1lcmdlZE9wdGlvbnMpO1xuICAgIGlmIChvcHRpb25zLmRlYnVnICE9PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5wcmVmaXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xvbmUubG9nZ2VyID0gY2xvbmUubG9nZ2VyLmNsb25lKG9wdGlvbnMpO1xuICAgIH1cbiAgICBjb25zdCBtZW1iZXJzVG9Db3B5ID0gWydzdG9yZScsICdzZXJ2aWNlcycsICdsYW5ndWFnZSddO1xuICAgIG1lbWJlcnNUb0NvcHkuZm9yRWFjaChtID0+IHtcbiAgICAgIGNsb25lW21dID0gdGhpc1ttXTtcbiAgICB9KTtcbiAgICBjbG9uZS5zZXJ2aWNlcyA9IHtcbiAgICAgIC4uLnRoaXMuc2VydmljZXNcbiAgICB9O1xuICAgIGNsb25lLnNlcnZpY2VzLnV0aWxzID0ge1xuICAgICAgaGFzTG9hZGVkTmFtZXNwYWNlOiBjbG9uZS5oYXNMb2FkZWROYW1lc3BhY2UuYmluZChjbG9uZSlcbiAgICB9O1xuICAgIGlmIChmb3JrUmVzb3VyY2VTdG9yZSkge1xuICAgICAgY2xvbmUuc3RvcmUgPSBuZXcgUmVzb3VyY2VTdG9yZSh0aGlzLnN0b3JlLmRhdGEsIG1lcmdlZE9wdGlvbnMpO1xuICAgICAgY2xvbmUuc2VydmljZXMucmVzb3VyY2VTdG9yZSA9IGNsb25lLnN0b3JlO1xuICAgIH1cbiAgICBjbG9uZS50cmFuc2xhdG9yID0gbmV3IFRyYW5zbGF0b3IoY2xvbmUuc2VydmljZXMsIG1lcmdlZE9wdGlvbnMpO1xuICAgIGNsb25lLnRyYW5zbGF0b3Iub24oJyonLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNCA+IDEgPyBfbGVuNCAtIDEgOiAwKSwgX2tleTQgPSAxOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgICAgIGFyZ3NbX2tleTQgLSAxXSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gICAgICB9XG4gICAgICBjbG9uZS5lbWl0KGV2ZW50LCAuLi5hcmdzKTtcbiAgICB9KTtcbiAgICBjbG9uZS5pbml0KG1lcmdlZE9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgICBjbG9uZS50cmFuc2xhdG9yLm9wdGlvbnMgPSBtZXJnZWRPcHRpb25zO1xuICAgIGNsb25lLnRyYW5zbGF0b3IuYmFja2VuZENvbm5lY3Rvci5zZXJ2aWNlcy51dGlscyA9IHtcbiAgICAgIGhhc0xvYWRlZE5hbWVzcGFjZTogY2xvbmUuaGFzTG9hZGVkTmFtZXNwYWNlLmJpbmQoY2xvbmUpXG4gICAgfTtcbiAgICByZXR1cm4gY2xvbmU7XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICBzdG9yZTogdGhpcy5zdG9yZSxcbiAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlLFxuICAgICAgbGFuZ3VhZ2VzOiB0aGlzLmxhbmd1YWdlcyxcbiAgICAgIHJlc29sdmVkTGFuZ3VhZ2U6IHRoaXMucmVzb2x2ZWRMYW5ndWFnZVxuICAgIH07XG4gIH1cbn1cbmNvbnN0IGluc3RhbmNlID0gSTE4bi5jcmVhdGVJbnN0YW5jZSgpO1xuaW5zdGFuY2UuY3JlYXRlSW5zdGFuY2UgPSBJMThuLmNyZWF0ZUluc3RhbmNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGluc3RhbmNlO1xuIiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbSA9IC9eXFxzK3xcXHMrJC9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgcm9vdGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICByZXN1bHQgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nID8gbmF0aXZlTWluKHJlc3VsdCwgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlO1xuIiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5ub3RpZmljYXRpb25zPXQoKTplLm5vdGlmaWNhdGlvbnM9dCgpfSh0aGlzLCgoKT0+e3JldHVybiBlPXszNzAwNzplPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIHQsbj1cIm9iamVjdFwiPT10eXBlb2YgUmVmbGVjdD9SZWZsZWN0Om51bGwsaT1uJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLmFwcGx5P24uYXBwbHk6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChlLHQsbil9O3Q9biYmXCJmdW5jdGlvblwiPT10eXBlb2Ygbi5vd25LZXlzP24ub3duS2V5czpPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzP2Z1bmN0aW9uKGUpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlKS5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKSl9OmZ1bmN0aW9uKGUpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlKX07dmFyIHI9TnVtYmVyLmlzTmFOfHxmdW5jdGlvbihlKXtyZXR1cm4gZSE9ZX07ZnVuY3Rpb24gbygpe28uaW5pdC5jYWxsKHRoaXMpfWUuZXhwb3J0cz1vLGUuZXhwb3J0cy5vbmNlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbihuLGkpe2Z1bmN0aW9uIHIobil7ZS5yZW1vdmVMaXN0ZW5lcih0LG8pLGkobil9ZnVuY3Rpb24gbygpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGUucmVtb3ZlTGlzdGVuZXImJmUucmVtb3ZlTGlzdGVuZXIoXCJlcnJvclwiLHIpLG4oW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKX1tKGUsdCxvLHtvbmNlOiEwfSksXCJlcnJvclwiIT09dCYmZnVuY3Rpb24oZSx0LG4pe1wiZnVuY3Rpb25cIj09dHlwZW9mIGUub24mJm0oZSxcImVycm9yXCIsdCx7b25jZTohMH0pfShlLHIpfSkpfSxvLkV2ZW50RW1pdHRlcj1vLG8ucHJvdG90eXBlLl9ldmVudHM9dm9pZCAwLG8ucHJvdG90eXBlLl9ldmVudHNDb3VudD0wLG8ucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnM9dm9pZCAwO3ZhciBzPTEwO2Z1bmN0aW9uIGEoZSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnK3R5cGVvZiBlKX1mdW5jdGlvbiBjKGUpe3JldHVybiB2b2lkIDA9PT1lLl9tYXhMaXN0ZW5lcnM/by5kZWZhdWx0TWF4TGlzdGVuZXJzOmUuX21heExpc3RlbmVyc31mdW5jdGlvbiBsKGUsdCxuLGkpe3ZhciByLG8scyxsO2lmKGEobiksdm9pZCAwPT09KG89ZS5fZXZlbnRzKT8obz1lLl9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKSxlLl9ldmVudHNDb3VudD0wKToodm9pZCAwIT09by5uZXdMaXN0ZW5lciYmKGUuZW1pdChcIm5ld0xpc3RlbmVyXCIsdCxuLmxpc3RlbmVyP24ubGlzdGVuZXI6biksbz1lLl9ldmVudHMpLHM9b1t0XSksdm9pZCAwPT09cylzPW9bdF09biwrK2UuX2V2ZW50c0NvdW50O2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2Ygcz9zPW9bdF09aT9bbixzXTpbcyxuXTppP3MudW5zaGlmdChuKTpzLnB1c2gobiksKHI9YyhlKSk+MCYmcy5sZW5ndGg+ciYmIXMud2FybmVkKXtzLndhcm5lZD0hMDt2YXIgdT1uZXcgRXJyb3IoXCJQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuIFwiK3MubGVuZ3RoK1wiIFwiK1N0cmluZyh0KStcIiBsaXN0ZW5lcnMgYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvIGluY3JlYXNlIGxpbWl0XCIpO3UubmFtZT1cIk1heExpc3RlbmVyc0V4Y2VlZGVkV2FybmluZ1wiLHUuZW1pdHRlcj1lLHUudHlwZT10LHUuY291bnQ9cy5sZW5ndGgsbD11LGNvbnNvbGUmJmNvbnNvbGUud2FybiYmY29uc29sZS53YXJuKGwpfXJldHVybiBlfWZ1bmN0aW9uIHUoKXtpZighdGhpcy5maXJlZClyZXR1cm4gdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLHRoaXMud3JhcEZuKSx0aGlzLmZpcmVkPSEwLDA9PT1hcmd1bWVudHMubGVuZ3RoP3RoaXMubGlzdGVuZXIuY2FsbCh0aGlzLnRhcmdldCk6dGhpcy5saXN0ZW5lci5hcHBseSh0aGlzLnRhcmdldCxhcmd1bWVudHMpfWZ1bmN0aW9uIGYoZSx0LG4pe3ZhciBpPXtmaXJlZDohMSx3cmFwRm46dm9pZCAwLHRhcmdldDplLHR5cGU6dCxsaXN0ZW5lcjpufSxyPXUuYmluZChpKTtyZXR1cm4gci5saXN0ZW5lcj1uLGkud3JhcEZuPXIscn1mdW5jdGlvbiBkKGUsdCxuKXt2YXIgaT1lLl9ldmVudHM7aWYodm9pZCAwPT09aSlyZXR1cm5bXTt2YXIgcj1pW3RdO3JldHVybiB2b2lkIDA9PT1yP1tdOlwiZnVuY3Rpb25cIj09dHlwZW9mIHI/bj9bci5saXN0ZW5lcnx8cl06W3JdOm4/ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PW5ldyBBcnJheShlLmxlbmd0aCksbj0wO248dC5sZW5ndGg7KytuKXRbbl09ZVtuXS5saXN0ZW5lcnx8ZVtuXTtyZXR1cm4gdH0ocik6dihyLHIubGVuZ3RoKX1mdW5jdGlvbiBwKGUpe3ZhciB0PXRoaXMuX2V2ZW50cztpZih2b2lkIDAhPT10KXt2YXIgbj10W2VdO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG4pcmV0dXJuIDE7aWYodm9pZCAwIT09bilyZXR1cm4gbi5sZW5ndGh9cmV0dXJuIDB9ZnVuY3Rpb24gdihlLHQpe2Zvcih2YXIgbj1uZXcgQXJyYXkodCksaT0wO2k8dDsrK2kpbltpXT1lW2ldO3JldHVybiBufWZ1bmN0aW9uIG0oZSx0LG4saSl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZS5vbilpLm9uY2U/ZS5vbmNlKHQsbik6ZS5vbih0LG4pO2Vsc2V7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZS5hZGRFdmVudExpc3RlbmVyKXRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImVtaXR0ZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRXZlbnRFbWl0dGVyLiBSZWNlaXZlZCB0eXBlICcrdHlwZW9mIGUpO2UuYWRkRXZlbnRMaXN0ZW5lcih0LChmdW5jdGlvbiByKG8pe2kub25jZSYmZS5yZW1vdmVFdmVudExpc3RlbmVyKHQsciksbihvKX0pKX19T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHN9LHNldDpmdW5jdGlvbihlKXtpZihcIm51bWJlclwiIT10eXBlb2YgZXx8ZTwwfHxyKGUpKXRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJytlK1wiLlwiKTtzPWV9fSksby5pbml0PWZ1bmN0aW9uKCl7dm9pZCAwIT09dGhpcy5fZXZlbnRzJiZ0aGlzLl9ldmVudHMhPT1PYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50c3x8KHRoaXMuX2V2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpLHRoaXMuX2V2ZW50c0NvdW50PTApLHRoaXMuX21heExpc3RlbmVycz10aGlzLl9tYXhMaXN0ZW5lcnN8fHZvaWQgMH0sby5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzPWZ1bmN0aW9uKGUpe2lmKFwibnVtYmVyXCIhPXR5cGVvZiBlfHxlPDB8fHIoZSkpdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcIm5cIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnK2UrXCIuXCIpO3JldHVybiB0aGlzLl9tYXhMaXN0ZW5lcnM9ZSx0aGlzfSxvLnByb3RvdHlwZS5nZXRNYXhMaXN0ZW5lcnM9ZnVuY3Rpb24oKXtyZXR1cm4gYyh0aGlzKX0sby5wcm90b3R5cGUuZW1pdD1mdW5jdGlvbihlKXtmb3IodmFyIHQ9W10sbj0xO248YXJndW1lbnRzLmxlbmd0aDtuKyspdC5wdXNoKGFyZ3VtZW50c1tuXSk7dmFyIHI9XCJlcnJvclwiPT09ZSxvPXRoaXMuX2V2ZW50cztpZih2b2lkIDAhPT1vKXI9ciYmdm9pZCAwPT09by5lcnJvcjtlbHNlIGlmKCFyKXJldHVybiExO2lmKHIpe3ZhciBzO2lmKHQubGVuZ3RoPjAmJihzPXRbMF0pLHMgaW5zdGFuY2VvZiBFcnJvcil0aHJvdyBzO3ZhciBhPW5ldyBFcnJvcihcIlVuaGFuZGxlZCBlcnJvci5cIisocz9cIiAoXCIrcy5tZXNzYWdlK1wiKVwiOlwiXCIpKTt0aHJvdyBhLmNvbnRleHQ9cyxhfXZhciBjPW9bZV07aWYodm9pZCAwPT09YylyZXR1cm4hMTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBjKWkoYyx0aGlzLHQpO2Vsc2V7dmFyIGw9Yy5sZW5ndGgsdT12KGMsbCk7Zm9yKG49MDtuPGw7KytuKWkodVtuXSx0aGlzLHQpfXJldHVybiEwfSxvLnByb3RvdHlwZS5hZGRMaXN0ZW5lcj1mdW5jdGlvbihlLHQpe3JldHVybiBsKHRoaXMsZSx0LCExKX0sby5wcm90b3R5cGUub249by5wcm90b3R5cGUuYWRkTGlzdGVuZXIsby5wcm90b3R5cGUucHJlcGVuZExpc3RlbmVyPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGwodGhpcyxlLHQsITApfSxvLnByb3RvdHlwZS5vbmNlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGEodCksdGhpcy5vbihlLGYodGhpcyxlLHQpKSx0aGlzfSxvLnByb3RvdHlwZS5wcmVwZW5kT25jZUxpc3RlbmVyPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGEodCksdGhpcy5wcmVwZW5kTGlzdGVuZXIoZSxmKHRoaXMsZSx0KSksdGhpc30sby5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI9ZnVuY3Rpb24oZSx0KXt2YXIgbixpLHIsbyxzO2lmKGEodCksdm9pZCAwPT09KGk9dGhpcy5fZXZlbnRzKSlyZXR1cm4gdGhpcztpZih2b2lkIDA9PT0obj1pW2VdKSlyZXR1cm4gdGhpcztpZihuPT09dHx8bi5saXN0ZW5lcj09PXQpMD09LS10aGlzLl9ldmVudHNDb3VudD90aGlzLl9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKTooZGVsZXRlIGlbZV0saS5yZW1vdmVMaXN0ZW5lciYmdGhpcy5lbWl0KFwicmVtb3ZlTGlzdGVuZXJcIixlLG4ubGlzdGVuZXJ8fHQpKTtlbHNlIGlmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4pe2ZvcihyPS0xLG89bi5sZW5ndGgtMTtvPj0wO28tLSlpZihuW29dPT09dHx8bltvXS5saXN0ZW5lcj09PXQpe3M9bltvXS5saXN0ZW5lcixyPW87YnJlYWt9aWYocjwwKXJldHVybiB0aGlzOzA9PT1yP24uc2hpZnQoKTpmdW5jdGlvbihlLHQpe2Zvcig7dCsxPGUubGVuZ3RoO3QrKyllW3RdPWVbdCsxXTtlLnBvcCgpfShuLHIpLDE9PT1uLmxlbmd0aCYmKGlbZV09blswXSksdm9pZCAwIT09aS5yZW1vdmVMaXN0ZW5lciYmdGhpcy5lbWl0KFwicmVtb3ZlTGlzdGVuZXJcIixlLHN8fHQpfXJldHVybiB0aGlzfSxvLnByb3RvdHlwZS5vZmY9by5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIsby5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzPWZ1bmN0aW9uKGUpe3ZhciB0LG4saTtpZih2b2lkIDA9PT0obj10aGlzLl9ldmVudHMpKXJldHVybiB0aGlzO2lmKHZvaWQgMD09PW4ucmVtb3ZlTGlzdGVuZXIpcmV0dXJuIDA9PT1hcmd1bWVudHMubGVuZ3RoPyh0aGlzLl9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKSx0aGlzLl9ldmVudHNDb3VudD0wKTp2b2lkIDAhPT1uW2VdJiYoMD09LS10aGlzLl9ldmVudHNDb3VudD90aGlzLl9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKTpkZWxldGUgbltlXSksdGhpcztpZigwPT09YXJndW1lbnRzLmxlbmd0aCl7dmFyIHIsbz1PYmplY3Qua2V5cyhuKTtmb3IoaT0wO2k8by5sZW5ndGg7KytpKVwicmVtb3ZlTGlzdGVuZXJcIiE9PShyPW9baV0pJiZ0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhyKTtyZXR1cm4gdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoXCJyZW1vdmVMaXN0ZW5lclwiKSx0aGlzLl9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKSx0aGlzLl9ldmVudHNDb3VudD0wLHRoaXN9aWYoXCJmdW5jdGlvblwiPT10eXBlb2YodD1uW2VdKSl0aGlzLnJlbW92ZUxpc3RlbmVyKGUsdCk7ZWxzZSBpZih2b2lkIDAhPT10KWZvcihpPXQubGVuZ3RoLTE7aT49MDtpLS0pdGhpcy5yZW1vdmVMaXN0ZW5lcihlLHRbaV0pO3JldHVybiB0aGlzfSxvLnByb3RvdHlwZS5saXN0ZW5lcnM9ZnVuY3Rpb24oZSl7cmV0dXJuIGQodGhpcyxlLCEwKX0sby5wcm90b3R5cGUucmF3TGlzdGVuZXJzPWZ1bmN0aW9uKGUpe3JldHVybiBkKHRoaXMsZSwhMSl9LG8ubGlzdGVuZXJDb3VudD1mdW5jdGlvbihlLHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGUubGlzdGVuZXJDb3VudD9lLmxpc3RlbmVyQ291bnQodCk6cC5jYWxsKGUsdCl9LG8ucHJvdG90eXBlLmxpc3RlbmVyQ291bnQ9cCxvLnByb3RvdHlwZS5ldmVudE5hbWVzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50PjA/dCh0aGlzLl9ldmVudHMpOltdfX0sMzA4OTooZSx0KT0+e1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuRGVmZXJyZWRQcm9taXNlPWNsYXNze2NvbnN0cnVjdG9yKCl7Y29uc3QgZT1uZXcgUHJvbWlzZSgoKGUsdCk9Pnt0aGlzLl9yZXNvbHZlPWUsdGhpcy5fcmVqZWN0PXR9KSk7dGhpcy5fcHJvbWlzZT1lfWdldCBwcm9taXNlKCl7cmV0dXJuIHRoaXMuX3Byb21pc2V9Z2V0IHJlc29sdmUoKXtyZXR1cm4gdGhpcy5fcmVzb2x2ZX1nZXQgcmVqZWN0KCl7cmV0dXJuIHRoaXMuX3JlamVjdH19fSwyMjc3NzooZSx0LG4pPT57XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7Y29uc3QgaT1uKDMwODkpO2FzeW5jIGZ1bmN0aW9uIHIoZSx0KXtsZXQgbj0wO2Zvcihjb25zdCBpIG9mIGUpYXdhaXQgdChpLG4sZSksbisrfWFzeW5jIGZ1bmN0aW9uIG8oZSx0KXthd2FpdCBQcm9taXNlLmFsbChlLm1hcCh0KSl9ZnVuY3Rpb24gcyhlLHQsbil7Y29uc3Qgcj1uZXcgaS5EZWZlcnJlZFByb21pc2Usbz1lLmFkZCgoKC4uLmUpPT57dCguLi5lKSYmKG8ucmVtb3ZlKCksci5yZXNvbHZlKCkpfSkpO3JldHVybiBuJiZuLmNhdGNoKChlPT57by5yZW1vdmUoKSxyLnJlamVjdChlKX0pKSxhKHIucHJvbWlzZSl9ZnVuY3Rpb24gYShlKXtyZXR1cm4gZS5jYXRjaCgoKCk9Pnt9KSksZX10LnNlcmlhbEZvckVhY2g9cix0LnNlcmlhbE1hcD1hc3luYyBmdW5jdGlvbihlLHQpe2NvbnN0IG49W107cmV0dXJuIGF3YWl0IHIoZSwoYXN5bmMoZSxpLHIpPT57bi5wdXNoKGF3YWl0IHQoZSxpLHIpKX0pKSxufSx0LnNlcmlhbEZpbHRlcj1hc3luYyBmdW5jdGlvbihlLHQpe2NvbnN0IG49W107cmV0dXJuIGF3YWl0IHIoZSwoYXN5bmMoZSxpLHIpPT57YXdhaXQgdChlLGkscikmJm4ucHVzaChlKX0pKSxufSx0LnBhcmFsbGVsRm9yRWFjaD1vLHQucGFyYWxsZWxNYXA9YXN5bmMgZnVuY3Rpb24oZSx0KXtjb25zdCBuPVtdO3JldHVybiBhd2FpdCBvKGUsKGFzeW5jKGUsaSxyKT0+e25baV09YXdhaXQgdChlLGkscil9KSksbn0sdC5wYXJhbGxlbEZpbHRlcj1hc3luYyBmdW5jdGlvbihlLHQpe2NvbnN0IG49W107cmV0dXJuIGF3YWl0IG8oZSwoYXN5bmMoZSxpLHIpPT57bltpXT1hd2FpdCB0KGUsaSxyKX0pKSxlLmZpbHRlcigoKGUsdCk9Pm5bdF0pKX0sdC53aXRoU3RyaWN0VGltZW91dD1mdW5jdGlvbihlLHQsbil7Y29uc3QgaT1uZXcgUHJvbWlzZSgoKHQsaSk9PnNldFRpbWVvdXQoKCgpPT5pKG5ldyBFcnJvcihuKSkpLGUpKSk7cmV0dXJuIGEoUHJvbWlzZS5yYWNlKFtpLHRdKSl9LHQud2l0aFRpbWVvdXQ9ZnVuY3Rpb24oZSx0KXtjb25zdCBuPW5ldyBQcm9taXNlKCh0PT5zZXRUaW1lb3V0KCgoKT0+dChbITAsdm9pZCAwXSkpLGUpKSksaT10LnRoZW4oKGU9PlshMSxlXSkpO3JldHVybiBQcm9taXNlLnJhY2UoW24saV0pfSx0LnVudGlsVHJ1ZT1mdW5jdGlvbihlLHQsbil7cmV0dXJuIHQoKT9Qcm9taXNlLnJlc29sdmUoKTpzKGUsdCxuKX0sdC51bnRpbFNpZ25hbD1zLHQuYWxsb3dSZWplY3Q9YX0sOTU3ODU6KGUsdCxuKT0+e1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGkoZSl7Zm9yKHZhciBuIGluIGUpdC5oYXNPd25Qcm9wZXJ0eShuKXx8KHRbbl09ZVtuXSl9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksaShuKDIyNzc3KSksaShuKDMwODkpKX0sNDA2NTE6ZT0+e2UuZXhwb3J0cz1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj1lLnNwbGl0KFwiLlwiKSxpPXQuc3BsaXQoXCIuXCIpLHI9MDtyPDM7cisrKXt2YXIgbz1OdW1iZXIobltyXSkscz1OdW1iZXIoaVtyXSk7aWYobz5zKXJldHVybiAxO2lmKHM+bylyZXR1cm4tMTtpZighaXNOYU4obykmJmlzTmFOKHMpKXJldHVybiAxO2lmKGlzTmFOKG8pJiYhaXNOYU4ocykpcmV0dXJuLTF9cmV0dXJuIDB9fSwzMzY1NzpmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dGhpcyYmdGhpcy5fX3Jlc3R8fGZ1bmN0aW9uKGUsdCl7dmFyIG49e307Zm9yKHZhciBpIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsaSkmJnQuaW5kZXhPZihpKTwwJiYobltpXT1lW2ldKTtpZihudWxsIT1lJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgcj0wO2ZvcihpPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7cjxpLmxlbmd0aDtyKyspdC5pbmRleE9mKGlbcl0pPDAmJk9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLGlbcl0pJiYobltpW3JdXT1lW2lbcl1dKX1yZXR1cm4gbn07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5nZXRFdmVudFJvdXRlcj10LmV2ZW50RW1pdHRlcj10LkV2ZW50Um91dGVyPXZvaWQgMDtjb25zdCByPW4oMzcwMDcpLG89bigxMTE1NCkscz1uKDU5NjAzKTtjbGFzcyBhe2NvbnN0cnVjdG9yKGUpe3RoaXMuX2VtaXR0ZXJQcm92aWRlcnM9e30sdGhpcy5fZGVzZXJpYWxpemVycz17fSx0aGlzLl9kZWZhdWx0RW1pdHRlcj1lfXJlZ2lzdGVyRW1pdHRlclByb3ZpZGVyKGUsdCl7dGhpcy5fZW1pdHRlclByb3ZpZGVyc1tlXT10fXJlZ2lzdGVyRGVzZXJpYWxpemVyKGUsdCl7dGhpcy5fZGVzZXJpYWxpemVyc1tlXT10fWRpc3BhdGNoRXZlbnQoZSl7Y29uc3R7dHlwZTp0LHRhcmdldDpufT1lLHI9aShlLFtcInR5cGVcIixcInRhcmdldFwiXSk7bGV0IGE7aWYoIW4pdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBldmVudCwgbm8gdGFyZ2V0IHNwZWNpZmllZFwiKTtpZihcImRlZmF1bHRcIj09PW4pYT10aGlzLl9kZWZhdWx0RW1pdHRlcjtlbHNle2lmKCF0aGlzLl9lbWl0dGVyUHJvdmlkZXJzW24udHlwZV0pdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHRhcmdldCwgbm8gcHJvdmlkZXIgcmVnaXN0ZXJlZCBmb3IgJyR7bi50eXBlfSdgKTthPXRoaXMuX2VtaXR0ZXJQcm92aWRlcnNbbi50eXBlXShuLmlkKX1jb25zdCBjPU9iamVjdC5hc3NpZ24oe3R5cGU6dH0sciksbD10aGlzLl9kZXNlcmlhbGl6ZXJzW3RdO2w/YS5lbWl0KHQsbChjKSk6XCJub3RpZmljYXRpb24tZm9ybS1zdWJtaXR0ZWRcIj09PXQ/ZnVuY3Rpb24oZSx0KXtsZXQgbj0hMTtlLnByZXZlbnREZWZhdWx0PSgpPT5uPSEwLHQuZW1pdChcIm5vdGlmaWNhdGlvbi1mb3JtLXN1Ym1pdHRlZFwiLGUpLG58fCgwLG8udHJ5U2VydmljZURpc3BhdGNoKShzLkFQSVRvcGljLlNFVF9GT1JNX1NUQVRVU19PUFRJT05TLHtmb3JtU3RhdHVzOlwic3VibWl0dGVkXCIsX25vdGlmaWNhdGlvbklkOmUubm90aWZpY2F0aW9uLmlkfSl9KGMsYSk6YS5lbWl0KHQsYyl9fWxldCBjO3QuRXZlbnRSb3V0ZXI9YSx0LmV2ZW50RW1pdHRlcj1uZXcgci5FdmVudEVtaXR0ZXIsdC5nZXRFdmVudFJvdXRlcj1mdW5jdGlvbigpe3JldHVybiBjfHwoYz1uZXcgYSh0LmV2ZW50RW1pdHRlcikpLGN9fSw4NjQ1NTooZSx0KT0+e1widXNlIHN0cmljdFwiO3ZhciBuO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuQWN0aW9uQm9keUNsaWNrVHlwZT10LkFjdGlvbk5vb3BUeXBlPXQuQWN0aW9uVHJpZ2dlcj12b2lkIDAsKG49dC5BY3Rpb25UcmlnZ2VyfHwodC5BY3Rpb25UcmlnZ2VyPXt9KSkuQ09OVFJPTD1cImNvbnRyb2xcIixuLlNFTEVDVD1cInNlbGVjdFwiLG4uQ0xPU0U9XCJjbG9zZVwiLG4uRVhQSVJFPVwiZXhwaXJlXCIsbi5QUk9HUkFNTUFUSUM9XCJwcm9ncmFtbWF0aWNcIiwodC5BY3Rpb25Ob29wVHlwZXx8KHQuQWN0aW9uTm9vcFR5cGU9e30pKS5FVkVOVF9ESVNNSVNTPVwiZXZlbnRfZGlzbWlzc1wiLCh0LkFjdGlvbkJvZHlDbGlja1R5cGV8fCh0LkFjdGlvbkJvZHlDbGlja1R5cGU9e30pKS5ESVNNSVNTX0VWRU5UPVwiZGlzbWlzc19ldmVudFwifSwyNzE2NzooZSx0LG4pPT57XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5nZXRDaGFubmVsQ2xpZW50PXQuY2xlYXJBd2FpdGVkQ2hhbm5lbENsaWVudD10LmluaXRBd2FpdGVkQ2hhbm5lbENsaWVudD10LkNoYW5uZWxDbGllbnRDb25maWc9dm9pZCAwO2NvbnN0IGk9big1OTYwMykscj1uKDc1NzYyKTt0LkNoYW5uZWxDbGllbnRDb25maWc9e3NlcnZpY2VDaGFubmVsOmkuU0VSVklDRV9DSEFOTkVMfTtjb25zdCBvPWFzeW5jKHt3YWl0OmV9KT0+e2F3YWl0IHIuTG9nLmluZm8oXCJDb25uZWN0aW5nIHRvIE5vdGlmaWNhdGlvbnMuLi5cIik7Y29uc3Qgbj1hd2FpdCBmaW4uSW50ZXJBcHBsaWNhdGlvbkJ1cy5DaGFubmVsLmNvbm5lY3QodC5DaGFubmVsQ2xpZW50Q29uZmlnLnNlcnZpY2VDaGFubmVsLHt3YWl0OmUscGF5bG9hZDp7dmVyc2lvbjpcIjIuOS4xLWFscGhhLTM3ODdcIn19KTtyZXR1cm4gYXdhaXQgci5Mb2cuaW5mbyhcIlN1Y2Nlc3NmdWxseSBjb25uZWN0ZWQgdG8gTm90aWZpY2F0aW9ucy5cIiksbn07bGV0IHMsYTt0LmluaXRBd2FpdGVkQ2hhbm5lbENsaWVudD0oKT0+cz97Y2hhbm5lbENsaWVudFByb21pc2U6cyxpc0luaXQ6ITF9OihzPW8oe3dhaXQ6ITB9KSxzLmNhdGNoKChlPT4oMCx0LmNsZWFyQXdhaXRlZENoYW5uZWxDbGllbnQpKCkpKSx7Y2hhbm5lbENsaWVudFByb21pc2U6cyxpc0luaXQ6ITB9KSx0LmNsZWFyQXdhaXRlZENoYW5uZWxDbGllbnQ9KCk9PntzPW51bGx9LHQuZ2V0Q2hhbm5lbENsaWVudD1hc3luYygpPT5zfHwoYXN5bmMoKT0+e2lmKCFhKXt0cnl7YT1hd2FpdCBvKHt3YWl0OiExfSksYS5zZXREZWZhdWx0QWN0aW9uKCgoKT0+ITEpKX1jYXRjaChlKXt0aHJvdyBhd2FpdCByLkxvZy5lcnJvcignQ291bGQgbm90IGZpbmQgY2hhbm5lbCBwcm92aWRlci4gRGlkIHlvdSBjYWxsIFwibm90aWZpY2F0aW9ucy5yZWdpc3RlcigpXCI/JyksZX1hLm9uRGlzY29ubmVjdGlvbigoKCk9PnthPW51bGx9KSl9cmV0dXJuIGF9KSgpfSwxMTE1NDooZSx0LG4pPT57XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC50cnlTZXJ2aWNlRGlzcGF0Y2g9dC5nZXRTZXJ2aWNlUHJvbWlzZT10LmxhdW5jaFN5c3RlbUFwcD10LmNvbm5lY3RUb05vdGlmaWNhdGlvbnM9dm9pZCAwO2NvbnN0IGk9big5NTc4NSkscj1uKDU5NjAzKSxvPW4oMzM2NTcpLHM9bigyNzE2Nyk7bGV0IGE7Y29uc3QgYz1uZXcgaS5EZWZlcnJlZFByb21pc2U7bGV0IGw9ITE7YXN5bmMgZnVuY3Rpb24gdSgpe2lmKHdpbmRvdy5uYXZpZ2F0b3IuYXBwVmVyc2lvbi5pbmNsdWRlcyhcIldpbmRvd3NcIikpdHJ5e2NvbnN0IGU9YXdhaXQgZmluLlN5c3RlbS5nZXRSdm1JbmZvKCk7cGFyc2VJbnQoZS52ZXJzaW9uLnNwbGl0KFwiLlwiKVswXSk+PTYmJihmaW4uU3lzdGVtLmxhdW5jaE1hbmlmZXN0P2Zpbi5TeXN0ZW0ubGF1bmNoTWFuaWZlc3QoXCJmaW5zOi8vc3lzdGVtLWFwcHMvbm90aWZpY2F0aW9uLWNlbnRlclwiLHtub1VpOiEwfSkuY2F0Y2goKGU9Pntjb25zb2xlLmVycm9yKFwiVW5hYmxlIHRvIGxhdW5jaCB0aGUgTm90aWZpY2F0aW9uIENlbnRlciBhcyBhIHN5c3RlbSBhcHBcIixlKX0pKTpmaW4uU3lzdGVtLm9wZW5VcmxXaXRoQnJvd3NlcihcImZpbnM6Ly9zeXN0ZW0tYXBwcy9ub3RpZmljYXRpb24tY2VudGVyXCIpLmNhdGNoKCgoKT0+e30pKSl9Y2F0Y2goZSl7fWVsc2UgZmluLlN5c3RlbS5vcGVuVXJsV2l0aEJyb3dzZXIoXCJmaW5zOi8vc3lzdGVtLWFwcHMvbm90aWZpY2F0aW9uLWNlbnRlclwiKX1hc3luYyBmdW5jdGlvbiBmKCl7dmFyIGU7aWYoYXdhaXQgYy5wcm9taXNlLCFhKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgZmluKXtjb25zdCBlPVwiZmluIGlzIG5vdCBkZWZpbmVkLiBUaGUgb3BlbmZpbi1ub3RpZmljYXRpb25zIG1vZHVsZSBpcyBvbmx5IGludGVuZGVkIGZvciB1c2UgaW4gYW4gT3BlbkZpbiBhcHBsaWNhdGlvbi5cIjtyZXR1cm4gYT1Qcm9taXNlLnJlamVjdChuZXcgRXJyb3IoZSkpLGF9ZmluLlN5c3RlbS5nZXRWZXJzaW9uKCkudGhlbigoZT0+e2NvbnN0IHQ9cGFyc2VJbnQoZS5zcGxpdChcIi5cIilbMl0pO3Q8NTMmJmNvbnNvbGUud2FybihgQVBJIHZlcnNpb24gJHt0fSBvZiBPcGVuRmluIHZlcnNpb24gJHtlfSBpcyBsZXNzIHRoYW4gNTMuIFBsZWFzZSB1cGdyYWRlIHRoZSBydW50aW1lIHZlcnNpb24uYCl9KSk7Y29uc3R7bmFtZTp0LHV1aWQ6bn09bnVsbCE9PShlPWZpbi5tZS5pZGVudGl0eSkmJnZvaWQgMCE9PWU/ZTpmaW4uV2luZG93Lm1lO2lmKG49PT1yLlNFUlZJQ0VfSURFTlRJVFkudXVpZCYmdD09PXIuU0VSVklDRV9JREVOVElUWS5uYW1lKWE9UHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVHJ5aW5nIHRvIGNvbm5lY3QgdG8gcHJvdmlkZXIgZnJvbSBwcm92aWRlclwiKSk7ZWxzZXtjb25zdCBlPXdpbmRvdy5zZXRUaW1lb3V0KCgoKT0+e2NvbnNvbGUud2FybihcIlRha2luZyBhIGxvbmcgdGltZSB0byBjb25uZWN0IHRvIE5vdGlmaWNhdGlvbnMgc2VydmljZS4gSXMgdGhlIE5vdGlmaWNhdGlvbnMgc2VydmljZSBydW5uaW5nP1wiKX0pLDVlMyk7YT0oMCxzLmluaXRBd2FpdGVkQ2hhbm5lbENsaWVudCkoKS5jaGFubmVsQ2xpZW50UHJvbWlzZS50aGVuKCh0PT57d2luZG93LmNsZWFyVGltZW91dChlKTtjb25zdCBuPSgwLG8uZ2V0RXZlbnRSb3V0ZXIpKCk7cmV0dXJuIHQucmVnaXN0ZXIoXCJXQVJOXCIsKGU9PmNvbnNvbGUud2FybihlKSkpLHQucmVnaXN0ZXIoXCJldmVudFwiLChlPT57bi5kaXNwYXRjaEV2ZW50KGUpfSkpLHQuc2V0RGVmYXVsdEFjdGlvbigoKCk9PiExKSksdC5vbkRpc2Nvbm5lY3Rpb24oKCgpPT57Y29uc29sZS53YXJuKFwiRGlzY29ubmVjdGVkIGZyb20gTm90aWZpY2F0aW9ucyBzZXJ2aWNlXCIpLCgwLHMuY2xlYXJBd2FpdGVkQ2hhbm5lbENsaWVudCkoKSxsPSEwLGE9bnVsbCx1KCksc2V0VGltZW91dCgoKCk9Pntjb25zb2xlLmxvZyhcIkF0dGVtcHRpbmcgdG8gcmVjb25uZWN0IHRvIE5vdGlmaWNhdGlvbnMgc2VydmljZVwiKSxmKCl9KSwzMDApfSkpLGw/Y29uc29sZS5sb2coXCJSZWNvbm5lY3RlZCB0byBOb3RpZmljYXRpb25zIHNlcnZpY2VcIik6Y29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gTm90aWZpY2F0aW9ucyBzZXJ2aWNlXCIpLHR9KSl9fXJldHVybiBhfXQuY29ubmVjdFRvTm90aWZpY2F0aW9ucz1mdW5jdGlvbigpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBmaW4mJlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/KHUoKSxmKCksXCJsb2FkaW5nXCIhPT1kb2N1bWVudC5yZWFkeVN0YXRlP2MucmVzb2x2ZSgpOih3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwoKCk9PntjLnJlc29sdmUoKX0pKSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCgoKT0+e2MucmVzb2x2ZSgpfSkpKSk6Y29uc29sZS53YXJuKFwiQ291bGQgbm90IGNvbm5lY3QgdG8gbm90aWZpY2F0aW9ucywgYGZpbmAgaXMgbm90IGRlZmluZWRcIil9LHQubGF1bmNoU3lzdGVtQXBwPXUsdC5nZXRTZXJ2aWNlUHJvbWlzZT1mLHQudHJ5U2VydmljZURpc3BhdGNoPWFzeW5jIGZ1bmN0aW9uKGUsdCl7cmV0dXJuKGF3YWl0KDAscy5nZXRDaGFubmVsQ2xpZW50KSgpKS5kaXNwYXRjaChlLHQpfX0sODcyMDQ6KGUsdCk9PntcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sOTM5NTU6KGUsdCk9PntcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkZpZWxkVHlwZT12b2lkIDAsdC5GaWVsZFR5cGU9e3N0cmluZzpcInN0cmluZ1wiLG51bWJlcjpcIm51bWJlclwiLGJvb2xlYW46XCJib29sZWFuXCIsZGF0ZTpcImRhdGVcIixjaGVja2JveEdyb3VwOlwiY2hlY2tib3hHcm91cFwiLHJhZGlvR3JvdXA6XCJyYWRpb0dyb3VwXCIsdGltZTpcInRpbWVcIn19LDY4OTEyOmZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10aGlzJiZ0aGlzLl9fY3JlYXRlQmluZGluZ3x8KE9iamVjdC5jcmVhdGU/ZnVuY3Rpb24oZSx0LG4saSl7dm9pZCAwPT09aSYmKGk9bik7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LG4pO3ImJiEoXCJnZXRcImluIHI/IXQuX19lc01vZHVsZTpyLndyaXRhYmxlfHxyLmNvbmZpZ3VyYWJsZSl8fChyPXtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0W25dfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLGkscil9OmZ1bmN0aW9uKGUsdCxuLGkpe3ZvaWQgMD09PWkmJihpPW4pLGVbaV09dFtuXX0pLHI9dGhpcyYmdGhpcy5fX2V4cG9ydFN0YXJ8fGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuIGluIGUpXCJkZWZhdWx0XCI9PT1ufHxPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxuKXx8aSh0LGUsbil9O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHIobig5Mzk1NSksdCkscihuKDMzNzEzKSx0KX0sMzM3MTM6KGUsdCk9PntcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LldpZGdldFR5cGU9dC5UaW1lV2lkZ2V0VHlwZT10LkRhdGVXaWRnZXRUeXBlPXQuUmFkaW9Hcm91cFdpZGdldFR5cGU9dC5DaGVja2JveEdyb3VwV2lkZ2V0VHlwZT10LkJvb2xlYW5XaWRnZXRUeXBlPXQuTnVtYmVyV2lkZ2V0VHlwZT10LlN0cmluZ1dpZGdldFR5cGU9dm9pZCAwLHQuU3RyaW5nV2lkZ2V0VHlwZT17VGV4dDpcIlRleHRcIixEcm9wZG93bjpcIkRyb3Bkb3duXCJ9LHQuTnVtYmVyV2lkZ2V0VHlwZT17TnVtYmVyOlwiTnVtYmVyXCJ9LHQuQm9vbGVhbldpZGdldFR5cGU9e1RvZ2dsZTpcIlRvZ2dsZVwiLENoZWNrYm94OlwiQ2hlY2tib3hcIn0sdC5DaGVja2JveEdyb3VwV2lkZ2V0VHlwZT17Q2hlY2tib3hHcm91cDpcIkNoZWNrYm94R3JvdXBcIn0sdC5SYWRpb0dyb3VwV2lkZ2V0VHlwZT17UmFkaW9Hcm91cDpcIlJhZGlvR3JvdXBcIn0sdC5EYXRlV2lkZ2V0VHlwZT17RGF0ZTpcIkRhdGVcIn0sdC5UaW1lV2lkZ2V0VHlwZT17VGltZTpcIlRpbWVcIn0sdC5XaWRnZXRUeXBlPU9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sdC5TdHJpbmdXaWRnZXRUeXBlKSx0Lk51bWJlcldpZGdldFR5cGUpLHQuQm9vbGVhbldpZGdldFR5cGUpLHQuQ2hlY2tib3hHcm91cFdpZGdldFR5cGUpLHQuUmFkaW9Hcm91cFdpZGdldFR5cGUpLHQuRGF0ZVdpZGdldFR5cGUpLHQuVGltZVdpZGdldFR5cGUpfSw0Njg2NTooZSx0KT0+e1widXNlIHN0cmljdFwiO3ZhciBuLGk7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5JbmRpY2F0b3JDb2xvcj10LkluZGljYXRvclR5cGU9dm9pZCAwLChpPXQuSW5kaWNhdG9yVHlwZXx8KHQuSW5kaWNhdG9yVHlwZT17fSkpLkZBSUxVUkU9XCJmYWlsdXJlXCIsaS5XQVJOSU5HPVwid2FybmluZ1wiLGkuU1VDQ0VTUz1cInN1Y2Nlc3NcIiwobj10LkluZGljYXRvckNvbG9yfHwodC5JbmRpY2F0b3JDb2xvcj17fSkpLlJFRD1cInJlZFwiLG4uR1JFRU49XCJncmVlblwiLG4uWUVMTE9XPVwieWVsbG93XCIsbi5CTFVFPVwiYmx1ZVwiLG4uUFVSUExFPVwicHVycGxlXCIsbi5HUkFZPVwiZ3JheVwiLG4uT1JBTkdFPVwib3JhbmdlXCIsbi5NQUdFTlRBPVwibWFnZW50YVwiLG4uVEVBTD1cInRlYWxcIn0sNTk2MDM6KGUsdCk9PntcInVzZSBzdHJpY3RcIjt2YXIgbjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkFQSVRvcGljPXQuZ2V0Q2hhbm5lbE5hbWU9dC5TRVJWSUNFX0NIQU5ORUw9dC5TRVJWSUNFX0lERU5USVRZPXZvaWQgMCx0LlNFUlZJQ0VfSURFTlRJVFk9e3V1aWQ6XCJub3RpZmljYXRpb25zLXNlcnZpY2VcIixuYW1lOlwibm90aWZpY2F0aW9ucy1zZXJ2aWNlXCJ9LHQuU0VSVklDRV9DSEFOTkVMPVwib2Ytbm90aWZpY2F0aW9ucy1zZXJ2aWNlLXYxXCIsdC5nZXRDaGFubmVsTmFtZT1lPT5lPT09dC5TRVJWSUNFX0lERU5USVRZLnV1aWQ/dC5TRVJWSUNFX0NIQU5ORUw6YCR7ZX0tJHt0LlNFUlZJQ0VfQ0hBTk5FTH1gLChuPXQuQVBJVG9waWN8fCh0LkFQSVRvcGljPXt9KSkuQ1JFQVRFX05PVElGSUNBVElPTj1cImNyZWF0ZS1ub3RpZmljYXRpb25cIixuLlVQREFURV9OT1RJRklDQVRJT049XCJ1cGRhdGUtbm90aWZpY2F0aW9uXCIsbi5DTEVBUl9OT1RJRklDQVRJT049XCJjbGVhci1ub3RpZmljYXRpb25cIixuLkdFVF9BUFBfTk9USUZJQ0FUSU9OUz1cImZldGNoLWFwcC1ub3RpZmljYXRpb25zXCIsbi5DTEVBUl9BUFBfTk9USUZJQ0FUSU9OUz1cImNsZWFyLWFwcC1ub3RpZmljYXRpb25zXCIsbi5UT0dHTEVfTk9USUZJQ0FUSU9OX0NFTlRFUj1cInRvZ2dsZS1ub3RpZmljYXRpb24tY2VudGVyXCIsbi5BRERfRVZFTlRfTElTVEVORVI9XCJhZGQtZXZlbnQtbGlzdGVuZXJcIixuLlJFTU9WRV9FVkVOVF9MSVNURU5FUj1cInJlbW92ZS1ldmVudC1saXN0ZW5lclwiLG4uR0VUX1BST1ZJREVSX1NUQVRVUz1cImdldC1wcm92aWRlci1zdGF0dXNcIixuLkdFVF9OT1RJRklDQVRJT05TX0NPVU5UPVwiZ2V0LW5vdGlmaWNhdGlvbnMtY291bnRcIixuLlNIT1dfTk9USUZJQ0FUSU9OX0NFTlRFUj1cInNob3ctbm90aWZpY2F0aW9uLWNlbnRlclwiLG4uSElERV9OT1RJRklDQVRJT05fQ0VOVEVSPVwiaGlkZS1ub3RpZmljYXRpb24tY2VudGVyXCIsbi5SRUdJU1RFUl9QTEFURk9STT1cInJlZ2lzdGVyLW5vdGlmaWNhdGlvbnMtcGxhdGZvcm1cIixuLkRFUkVHSVNURVJfUExBVEZPUk09XCJkZXJlZ2lzdGVyLW5vdGlmaWNhdGlvbnMtcGxhdGZvcm1cIixuLlNFVF9GT1JNX1NUQVRVU19PUFRJT05TPVwic2V0LWZvcm0tc3RhdHVzLW9wdGlvbnNcIixuLlNFVF9GT1JNX1ZBTElEQVRJT05fRVJST1JTPVwic2V0LWZvcm0tdmFsaWRhdGlvbi1lcnJvcnNcIixuLkdFVF9VU0VSX1NFVFRJTkdTX1NUQVRVUz1cImdldC11c2VyLXNldHRpbmdzLXN0YXR1c1wiLG4uU0VUX0RFRkFVTFRfUExBVEZPUk1fU0hPUlRDVVQ9XCJzZXQtZGVmYXVsdC1wbGF0Zm9ybS1zaG9ydGN1dFwiLG4uU0VUX05PVElGSUNBVElPTl9TRUNVUklUWV9SVUxFPVwic2V0LW5vdGlmaWNhdGlvbi1zZWN1cml0eS1ydWxlXCJ9LDc1NzYyOihlLHQpPT57XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5Mb2c9dm9pZCAwO2NsYXNzIG57c3RhdGljIGFzeW5jIGVycm9yKGUpe3RyeXtjb25zdCB0PW4uZ2V0UHJlZml4ZWRNZXNzYWdlKGUpO2NvbnNvbGUuZXJyb3IodCksYXdhaXQgZmluLlN5c3RlbS5sb2coXCJlcnJvclwiLHQpfWNhdGNoKGUpe24uaGFuZGxlRXJyb3IoZSxcIkZhaWxlZCB0byBsb2cgZXJyb3JcIil9fXN0YXRpYyBhc3luYyB3YXJuKGUpe3RyeXtjb25zdCB0PW4uZ2V0UHJlZml4ZWRNZXNzYWdlKGUpO2NvbnNvbGUud2Fybih0KSxhd2FpdCBmaW4uU3lzdGVtLmxvZyhcIndhcm5pbmdcIix0KX1jYXRjaChlKXtuLmhhbmRsZUVycm9yKGUsXCJGYWlsZWQgdG8gbG9nIHdhcm5pbmdcIil9fXN0YXRpYyBhc3luYyBpbmZvKGUpe3RyeXtjb25zdCB0PW4uZ2V0UHJlZml4ZWRNZXNzYWdlKGUpO2NvbnNvbGUuaW5mbyh0KSxhd2FpdCBmaW4uU3lzdGVtLmxvZyhcImluZm9cIix0KX1jYXRjaChlKXtuLmhhbmRsZUVycm9yKGUsXCJGYWlsZWQgdG8gbG9nIGluZm9cIil9fXN0YXRpYyBnZXRQcmVmaXhlZE1lc3NhZ2UoZSl7cmV0dXJuYCR7bi5MT0dfUFJFRklYfSAke2V9YH1zdGF0aWMgaGFuZGxlRXJyb3IoZSx0KXtlIGluc3RhbmNlb2YgRXJyb3I/Y29uc29sZS5lcnJvcihgJHt0fSAtICR7ZS5uYW1lfTogJHtlLm1lc3NhZ2V9YCk6Y29uc29sZS5lcnJvcihgJHt0fSAtICR7SlNPTi5zdHJpbmdpZnkoZSl9YCl9fXQuTG9nPW4sbi5MT0dfUFJFRklYPVwiW29wZW5maW4tbm90aWZpY2F0aW9uc11cIn0sNDA3MDc6ZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO3ZhciBpPXRoaXMmJnRoaXMuX19jcmVhdGVCaW5kaW5nfHwoT2JqZWN0LmNyZWF0ZT9mdW5jdGlvbihlLHQsbixpKXt2b2lkIDA9PT1pJiYoaT1uKTt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsbik7ciYmIShcImdldFwiaW4gcj8hdC5fX2VzTW9kdWxlOnIud3JpdGFibGV8fHIuY29uZmlndXJhYmxlKXx8KHI9e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRbbl19fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsaSxyKX06ZnVuY3Rpb24oZSx0LG4saSl7dm9pZCAwPT09aSYmKGk9biksZVtpXT10W25dfSkscj10aGlzJiZ0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdHx8KE9iamVjdC5jcmVhdGU/ZnVuY3Rpb24oZSx0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTp0fSl9OmZ1bmN0aW9uKGUsdCl7ZS5kZWZhdWx0PXR9KSxvPXRoaXMmJnRoaXMuX19pbXBvcnRTdGFyfHxmdW5jdGlvbihlKXtpZihlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIHQ9e307aWYobnVsbCE9ZSlmb3IodmFyIG4gaW4gZSlcImRlZmF1bHRcIiE9PW4mJk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG4pJiZpKHQsZSxuKTtyZXR1cm4gcih0LGUpLHR9LHM9dGhpcyYmdGhpcy5fX2V4cG9ydFN0YXJ8fGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuIGluIGUpXCJkZWZhdWx0XCI9PT1ufHxPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxuKXx8aSh0LGUsbil9LGE9dGhpcyYmdGhpcy5fX3Jlc3R8fGZ1bmN0aW9uKGUsdCl7dmFyIG49e307Zm9yKHZhciBpIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsaSkmJnQuaW5kZXhPZihpKTwwJiYobltpXT1lW2ldKTtpZihudWxsIT1lJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgcj0wO2ZvcihpPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7cjxpLmxlbmd0aDtyKyspdC5pbmRleE9mKGlbcl0pPDAmJk9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLGlbcl0pJiYobltpW3JdXT1lW2lbcl1dKX1yZXR1cm4gbn07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5zZXRBbGxvd2VkT3JpZ2lucz10LmdldFVzZXJTZXR0aW5nU3RhdHVzPXQuVXNlclNldHRpbmdzPXQuZ2V0Tm90aWZpY2F0aW9uc0NvdW50PXQuaGlkZT10LnNob3c9dC5zZXREZWZhdWx0UGxhdGZvcm1TaG9ydGN1dD10LnRvZ2dsZU5vdGlmaWNhdGlvbkNlbnRlcj10LmNsZWFyQWxsPXQuZ2V0QWxsPXQuY2xlYXI9dC51cGRhdGU9dC5jcmVhdGU9dC5yZW1vdmVFdmVudExpc3RlbmVyPXQuYWRkRXZlbnRMaXN0ZW5lcj10LlZFUlNJT049dC5Ob3RpZmljYXRpb25JbmRpY2F0b3JUeXBlPXQuSW5kaWNhdG9yQ29sb3I9dC5Ob3RpZmljYXRpb25JbmRpY2F0b3JXaXRoQ3VzdG9tQ29sb3I9dC5Ob3RpZmljYXRpb25JbmRpY2F0b3I9dC5Ob3RpZmljYXRpb25PcHRpb25zPXQucHJvdmlkZXI9dC5hY3Rpb25zPXZvaWQgMDtjb25zdCBjPW4oODY0NTUpLGw9bigxMTE1NCksdT1uKDU5NjAzKSxmPW4oMzM2NTcpLGQ9byhuKDQ2NDUxKSk7dC5wcm92aWRlcj1kO2NvbnN0IHA9bigyODE3Myksdj1uKDQ2ODY1KTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIk5vdGlmaWNhdGlvbkluZGljYXRvclwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB2Lk5vdGlmaWNhdGlvbkluZGljYXRvcn19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIk5vdGlmaWNhdGlvbkluZGljYXRvcldpdGhDdXN0b21Db2xvclwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB2Lk5vdGlmaWNhdGlvbkluZGljYXRvcldpdGhDdXN0b21Db2xvcn19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIk5vdGlmaWNhdGlvbkluZGljYXRvclR5cGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdi5JbmRpY2F0b3JUeXBlfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiSW5kaWNhdG9yQ29sb3JcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdi5JbmRpY2F0b3JDb2xvcn19KTtjb25zdCBtPW4oNDQ0MTUpO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiTm90aWZpY2F0aW9uT3B0aW9uc1wiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBtLk5vdGlmaWNhdGlvbk9wdGlvbnN9fSk7Y29uc3QgZz1vKG4oODY0NTUpKTt0LmFjdGlvbnM9ZyxzKG4oODY0NTUpLHQpLHMobig4NzIwNCksdCkscyhuKDUwMjk1KSx0KSxzKG4oNjg5MTIpLHQpLHMobigxMzE1NCksdCkscyhuKDc1MDUwKSx0KSxzKG4oOTA1MTIpLHQpLHQuVkVSU0lPTj1cIjIuOS4xLWFscGhhLTM3ODdcIjtjb25zdCB5PSgwLGYuZ2V0RXZlbnRSb3V0ZXIpKCk7ZnVuY3Rpb24gaChlKXtjb25zdHtub3RpZmljYXRpb246dH09ZTtyZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LGUpLHtub3RpZmljYXRpb246T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LHQpLHtkYXRlOm5ldyBEYXRlKHQuZGF0ZSksZXhwaXJlczpudWxsIT09dC5leHBpcmVzP25ldyBEYXRlKHQuZXhwaXJlcyk6bnVsbH0pfSl9eS5yZWdpc3RlckRlc2VyaWFsaXplcihcIm5vdGlmaWNhdGlvbi1jcmVhdGVkXCIsKGU9PmgoZSkpKSx5LnJlZ2lzdGVyRGVzZXJpYWxpemVyKFwibm90aWZpY2F0aW9uLXRvYXN0LWRpc21pc3NlZFwiLChlPT5oKGUpKSkseS5yZWdpc3RlckRlc2VyaWFsaXplcihcIm5vdGlmaWNhdGlvbi1jbG9zZWRcIiwoZT0+aChlKSkpLHkucmVnaXN0ZXJEZXNlcmlhbGl6ZXIoXCJub3RpZmljYXRpb24tYWN0aW9uXCIsKGU9Pnt2YXIgdDtjb25zdCBuPWgoZSkse2NvbnRyb2xTb3VyY2U6aSxjb250cm9sSW5kZXg6cn09bixvPWEobixbXCJjb250cm9sU291cmNlXCIsXCJjb250cm9sSW5kZXhcIl0pO3JldHVybiBlLnRyaWdnZXI9PT1jLkFjdGlvblRyaWdnZXIuQ09OVFJPTD9PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sbykse2NvbnRyb2w6bnVsbD09PSh0PWUubm90aWZpY2F0aW9uW2ldKXx8dm9pZCAwPT09dD92b2lkIDA6dFtyXX0pOm99KSkseS5yZWdpc3RlckRlc2VyaWFsaXplcihcIm5vdGlmaWNhdGlvbnMtY291bnQtY2hhbmdlZFwiLChlPT5lKSkseS5yZWdpc3RlckRlc2VyaWFsaXplcihcIm5vdGlmaWNhdGlvbi1yZW1pbmRlci1jcmVhdGVkXCIsKGU9Pntjb25zdCB0PWgoZSkse3JlbWluZGVyRGF0ZTpufT10LGk9YSh0LFtcInJlbWluZGVyRGF0ZVwiXSk7cmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxpKSx7cmVtaW5kZXJEYXRlOm5ldyBEYXRlKG4pfSl9KSkseS5yZWdpc3RlckRlc2VyaWFsaXplcihcIm5vdGlmaWNhdGlvbi1yZW1pbmRlci1yZW1vdmVkXCIsKGU9PmgoZSkpKSx5LnJlZ2lzdGVyRGVzZXJpYWxpemVyKFwibm90aWZpY2F0aW9uLXNvdW5kLXRvZ2dsZWRcIiwoZT0+ZSkpLHQuYWRkRXZlbnRMaXN0ZW5lcj1hc3luYyBmdW5jdGlvbihlLHQpeygwLHAudmFsaWRhdGVFbnZpcm9ubWVudCkoKSxlPSgwLHAuc2FuaXRpemVFdmVudFR5cGUpKGUpLHQ9KDAscC5zYW5pdGl6ZUZ1bmN0aW9uKSh0KTtjb25zdCBuPWYuZXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQoZSk7XCJub3RpZmljYXRpb24tZm9ybS1zdWJtaXR0ZWRcIj09PWUmJih0PWZ1bmN0aW9uKGUpe3JldHVybiB0PT57Y29uc3Qgbj10Lm5vdGlmaWNhdGlvbi5pZDt0LnNldEZvcm1TdGF0dXM9ZT0+KDAsbC50cnlTZXJ2aWNlRGlzcGF0Y2gpKHUuQVBJVG9waWMuU0VUX0ZPUk1fU1RBVFVTX09QVElPTlMsT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LGUpLHtfbm90aWZpY2F0aW9uSWQ6bn0pKSxlKHQpfX0odCkpLFwibm90aWZpY2F0aW9uLWZvcm0tdmFsdWVzLWNoYW5nZWRcIj09PWUmJih0PWZ1bmN0aW9uKGUpe3JldHVybiB0PT57dC5zZXRFcnJvcnM9ZT0+KDAsbC50cnlTZXJ2aWNlRGlzcGF0Y2gpKHUuQVBJVG9waWMuU0VUX0ZPUk1fVkFMSURBVElPTl9FUlJPUlMse2Vycm9yczplLG5vdGlmaWNhdGlvbklkOnQubm90aWZpY2F0aW9uLmlkfSksZSh0KX19KHQpKSxmLmV2ZW50RW1pdHRlci5hZGRMaXN0ZW5lcihlLHQpLDA9PT1uJiYxPT09Zi5ldmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudChlKSYmYXdhaXQoMCxsLnRyeVNlcnZpY2VEaXNwYXRjaCkodS5BUElUb3BpYy5BRERfRVZFTlRfTElTVEVORVIsZSl9LHQucmVtb3ZlRXZlbnRMaXN0ZW5lcj1hc3luYyBmdW5jdGlvbihlLHQpeygwLHAudmFsaWRhdGVFbnZpcm9ubWVudCkoKSxlPSgwLHAuc2FuaXRpemVFdmVudFR5cGUpKGUpLHQ9KDAscC5zYW5pdGl6ZUZ1bmN0aW9uKSh0KSwxPT09Zi5ldmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudChlKSYmZi5ldmVudEVtaXR0ZXIubGlzdGVuZXJzKGUpWzBdPT09dCYmYXdhaXQoMCxsLnRyeVNlcnZpY2VEaXNwYXRjaCkodS5BUElUb3BpYy5SRU1PVkVfRVZFTlRfTElTVEVORVIsZSksZi5ldmVudEVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIoZSx0KX0sdC5jcmVhdGU9YXN5bmMgZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiIT10eXBlb2YgZXx8bnVsbD09PWUpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBhcmd1bWVudCBwYXNzZWQgdG8gY3JlYXRlOiBhcmd1bWVudCBtdXN0IGJlIGFuIG9iamVjdCBhbmQgbXVzdCBub3QgYmUgbnVsbFwiKTtpZih2b2lkIDAhPT1lLmRhdGUmJiEoZS5kYXRlIGluc3RhbmNlb2YgRGF0ZSkpdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFyZ3VtZW50IHBhc3NlZCB0byBjcmVhdGU6IFwiZGF0ZVwiIG11c3QgYmUgYSB2YWxpZCBEYXRlIG9iamVjdCcpO2lmKHZvaWQgMCE9PWUuZXhwaXJlcyYmbnVsbCE9PWUuZXhwaXJlcyYmIShlLmV4cGlyZXMgaW5zdGFuY2VvZiBEYXRlKSl0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJndW1lbnQgcGFzc2VkIHRvIGNyZWF0ZTogXCJleHBpcmVzXCIgbXVzdCBiZSBudWxsIG9yIGEgdmFsaWQgRGF0ZSBvYmplY3QnKTtpZih0JiZ0LnJlbWluZGVyRGF0ZSl7aWYoITE9PT1lLmFsbG93UmVtaW5kZXIpdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBub3Qgc3BlY2lmeSBhIHJlbWluZGVyIGRhdGUgZm9yIGEgbm90aWZpY2F0aW9uIHdpdGggXCJhbGxvd1JlbWluZGVyXCIgb3B0aW9uIHNldCB0byBmYWxzZS4nKTtpZighKHQucmVtaW5kZXJEYXRlIGluc3RhbmNlb2YgRGF0ZSkpdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFyZ3VtZW50IHBhc3NlZCB0byByZW1pbmRlciBPcHRpb25zOiBcImRhdGVcIiBtdXN0IGEgdmFsaWQgRGF0ZSBvYmplY3QnKTtpZihlLmV4cGlyZXMmJmUuZXhwaXJlcy5nZXRUaW1lKCk8dC5yZW1pbmRlckRhdGUuZ2V0VGltZSgpKXRocm93IG5ldyBFcnJvcihcIkV4cGlyYXRpb24gZGF0ZSBtdXN0IG5vdCBiZSBlYXJsaWVyIHRoYW4gcmVtaW5kZXIgZGF0ZS5cIil9dm9pZCAwIT09ZS5jYXRlZ29yeSYmbnVsbCE9PWUuY2F0ZWdvcnl8fChlLmNhdGVnb3J5PVwiZGVmYXVsdFwiKTtjb25zdCBuPWF3YWl0KDAsbC50cnlTZXJ2aWNlRGlzcGF0Y2gpKHUuQVBJVG9waWMuQ1JFQVRFX05PVElGSUNBVElPTixPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sZSkse2RhdGU6ZS5kYXRlJiZlLmRhdGUudmFsdWVPZigpLGV4cGlyZXM6ZS5leHBpcmVzJiZlLmV4cGlyZXMudmFsdWVPZigpLHJlbWluZGVyOihudWxsPT10P3ZvaWQgMDp0LnJlbWluZGVyRGF0ZSkmJnQucmVtaW5kZXJEYXRlLnZhbHVlT2YoKX0pKTtyZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LG4pLHtkYXRlOm5ldyBEYXRlKG4uZGF0ZSksZXhwaXJlczpudWxsIT09bi5leHBpcmVzP25ldyBEYXRlKG4uZXhwaXJlcyk6bnVsbH0pfSx0LnVwZGF0ZT1hc3luYyBmdW5jdGlvbihlKXtpZihcIm9iamVjdFwiIT10eXBlb2YgZXx8bnVsbD09PWUpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBhcmd1bWVudCBwYXNzZWQgdG8gY3JlYXRlOiBhcmd1bWVudCBtdXN0IGJlIGFuIG9iamVjdCBhbmQgbXVzdCBub3QgYmUgbnVsbFwiKTtpZighZS5pZCl0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJndW1lbnQgcGFzc2VkIHRvIGNyZWF0ZTogXCJpZFwiIG11c3QgYmUgSWQgb2YgcHJldmlvdXNseSBjcmVhdGVkIE5vdGlmaWNhdGlvbicpO2NvbnN0IHQ9YXdhaXQoMCxsLnRyeVNlcnZpY2VEaXNwYXRjaCkodS5BUElUb3BpYy5VUERBVEVfTk9USUZJQ0FUSU9OLE9iamVjdC5hc3NpZ24oe30sZSkpO3JldHVybiBPYmplY3QuYXNzaWduKHt9LHQpfSx0LmNsZWFyPWFzeW5jIGZ1bmN0aW9uKGUpe3JldHVybigwLGwudHJ5U2VydmljZURpc3BhdGNoKSh1LkFQSVRvcGljLkNMRUFSX05PVElGSUNBVElPTix7aWQ6ZX0pfSx0LmdldEFsbD1hc3luYyBmdW5jdGlvbigpe3JldHVybihhd2FpdCgwLGwudHJ5U2VydmljZURpc3BhdGNoKSh1LkFQSVRvcGljLkdFVF9BUFBfTk9USUZJQ0FUSU9OUyx2b2lkIDApKS5tYXAoKGU9Pk9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxlKSx7aW5kaWNhdG9yOmUuaW5kaWNhdG9yfHxudWxsLGRhdGU6bmV3IERhdGUoZS5kYXRlKSxleHBpcmVzOm51bGwhPT1lLmV4cGlyZXM/bmV3IERhdGUoZS5leHBpcmVzKTpudWxsfSkpKX0sdC5jbGVhckFsbD1hc3luYyBmdW5jdGlvbigpe3JldHVybigwLGwudHJ5U2VydmljZURpc3BhdGNoKSh1LkFQSVRvcGljLkNMRUFSX0FQUF9OT1RJRklDQVRJT05TLHZvaWQgMCl9LHQudG9nZ2xlTm90aWZpY2F0aW9uQ2VudGVyPWFzeW5jIGZ1bmN0aW9uKCl7cmV0dXJuKDAsbC50cnlTZXJ2aWNlRGlzcGF0Y2gpKHUuQVBJVG9waWMuVE9HR0xFX05PVElGSUNBVElPTl9DRU5URVIsdm9pZCAwKX0sdC5zZXREZWZhdWx0UGxhdGZvcm1TaG9ydGN1dD1mdW5jdGlvbihlKXtyZXR1cm4oMCxsLnRyeVNlcnZpY2VEaXNwYXRjaCkodS5BUElUb3BpYy5TRVRfREVGQVVMVF9QTEFURk9STV9TSE9SVENVVCxlKX0sdC5zaG93PWFzeW5jIGZ1bmN0aW9uKGUpe3JldHVybigwLGwudHJ5U2VydmljZURpc3BhdGNoKSh1LkFQSVRvcGljLlNIT1dfTk9USUZJQ0FUSU9OX0NFTlRFUixlKX0sdC5oaWRlPWFzeW5jIGZ1bmN0aW9uKCl7cmV0dXJuKDAsbC50cnlTZXJ2aWNlRGlzcGF0Y2gpKHUuQVBJVG9waWMuSElERV9OT1RJRklDQVRJT05fQ0VOVEVSLHZvaWQgMCl9LHQuZ2V0Tm90aWZpY2F0aW9uc0NvdW50PWFzeW5jIGZ1bmN0aW9uKCl7cmV0dXJuKDAsbC50cnlTZXJ2aWNlRGlzcGF0Y2gpKHUuQVBJVG9waWMuR0VUX05PVElGSUNBVElPTlNfQ09VTlQsdm9pZCAwKX0sKHQuVXNlclNldHRpbmdzfHwodC5Vc2VyU2V0dGluZ3M9e30pKS5TT1VORF9FTkFCTEVEPVwic291bmRFbmFibGVkXCIsdC5nZXRVc2VyU2V0dGluZ1N0YXR1cz1hc3luYyBmdW5jdGlvbihlKXtyZXR1cm4oMCxsLnRyeVNlcnZpY2VEaXNwYXRjaCkodS5BUElUb3BpYy5HRVRfVVNFUl9TRVRUSU5HU19TVEFUVVMsZSl9LHQuc2V0QWxsb3dlZE9yaWdpbnM9YXN5bmMgZT0+KDAsbC50cnlTZXJ2aWNlRGlzcGF0Y2gpKHUuQVBJVG9waWMuU0VUX05PVElGSUNBVElPTl9TRUNVUklUWV9SVUxFLHthbGxvd2VkT3JpZ2luczplfSl9LDQ2NDUxOmZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10aGlzJiZ0aGlzLl9faW1wb3J0RGVmYXVsdHx8ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmlzQ29ubmVjdGVkVG9BdExlYXN0PXQuZ2V0U3RhdHVzPXZvaWQgMDtjb25zdCByPWkobig0MDY1MSkpLG89big5NTc4NSkscz1uKDExMTU0KSxhPW4oNTk2MDMpO2Z1bmN0aW9uIGMoKXtyZXR1cm4oMCxvLndpdGhTdHJpY3RUaW1lb3V0KSg1MDAsKDAscy50cnlTZXJ2aWNlRGlzcGF0Y2gpKGEuQVBJVG9waWMuR0VUX1BST1ZJREVSX1NUQVRVUyx2b2lkIDApLFwiXCIpLmNhdGNoKCgoKT0+KHtjb25uZWN0ZWQ6ITEsdmVyc2lvbjpudWxsLHRlbXBsYXRlQVBJVmVyc2lvbjpudWxsfSkpKX10LmdldFN0YXR1cz1jLHQuaXNDb25uZWN0ZWRUb0F0TGVhc3Q9YXN5bmMgZnVuY3Rpb24oZSl7Y29uc3QgdD1hd2FpdCBjKCk7aWYodC5jb25uZWN0ZWQmJm51bGwhPT10LnZlcnNpb24pe2NvbnN0IG49KDAsci5kZWZhdWx0KSh0LnZlcnNpb24sZSk7aWYoMD09PW58fDE9PT1uKXJldHVybiEwfXJldHVybiExfX0sNTg3OTooZSx0LG4pPT57XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5yZWdpc3Rlcj10LkNoYW5uZWxDbGllbnRIYW5kbGVycz12b2lkIDA7Y29uc3QgaT1uKDU5NjAzKSxyPW4oMzM2NTcpLG89big3NTc2Mikscz1uKDI3MTY3KSxhPW4oNDY0NTEpO2NsYXNzIGN7fXQuQ2hhbm5lbENsaWVudEhhbmRsZXJzPWMsYy5oYW5kbGVEZWZhdWx0QWN0aW9uPSgpPT4hMSxjLmhhbmRsZUV2ZW50QWN0aW9uPWU9PnsoMCxyLmdldEV2ZW50Um91dGVyKSgpLmRpc3BhdGNoRXZlbnQoZSl9LGMuaGFuZGxlV2FybkFjdGlvbj1hc3luYyBlPT57YXdhaXQgby5Mb2cud2FybihlKX0sYy5oYW5kbGVEaXNjb25uZWN0aW9uPWFzeW5jKCk9PnsoMCxzLmdldENoYW5uZWxDbGllbnQpKCkmJihhd2FpdCBvLkxvZy53YXJuKFwiRGlzY29ubmVjdGVkIGZyb20gTm90aWZpY2F0aW9ucy4gUmVjb25uZWN0aW5nLi4uXCIpLCgwLHMuY2xlYXJBd2FpdGVkQ2hhbm5lbENsaWVudCkoKSxhd2FpdCBmKCksYXdhaXQgZCgpKX07bGV0IGw9bnVsbDt0LnJlZ2lzdGVyPWFzeW5jIGU9PntpZihsKXJldHVybiBsO3RyeXtyZXR1cm4gbD11KGUpLGF3YWl0IGx9ZmluYWxseXtsPW51bGx9fTtjb25zdCB1PWFzeW5jIGU9PntpZihudWxsPT1lP3ZvaWQgMDplLmN1c3RvbU1hbmlmZXN0KXtpZighZS5jdXN0b21NYW5pZmVzdC5tYW5pZmVzdFVybCl0aHJvdyBuZXcgRXJyb3IoXCJtYW5pZmVzdFVybCBtdXN0IGJlIHByb3ZpZGVkLlwiKTtpZighZS5jdXN0b21NYW5pZmVzdC5tYW5pZmVzdFV1aWQpdGhyb3cgbmV3IEVycm9yKFwibWFuaWZlc3RVdWlkIG11c3QgYmUgcHJvdmlkZWQgYW5kIG11c3Qgbm90IGJlIGFuIGVtcHR5IHN0cmluZy5cIik7aWYoZS5jdXN0b21NYW5pZmVzdC5tYW5pZmVzdFV1aWQ9PT1pLlNFUlZJQ0VfQ0hBTk5FTCl0aHJvdyBuZXcgRXJyb3IoYG1hbmlmZXN0VXVpZCBtdXN0IG5vdCBiZSAke2kuU0VSVklDRV9DSEFOTkVMfWApO3MuQ2hhbm5lbENsaWVudENvbmZpZy5zZXJ2aWNlQ2hhbm5lbD1gJHtlLmN1c3RvbU1hbmlmZXN0Lm1hbmlmZXN0VXVpZH0tJHtpLlNFUlZJQ0VfQ0hBTk5FTH1gLGF3YWl0IGYoZS5jdXN0b21NYW5pZmVzdC5tYW5pZmVzdFVybCl9ZWxzZSBzLkNoYW5uZWxDbGllbnRDb25maWcuc2VydmljZUNoYW5uZWw9aS5TRVJWSUNFX0NIQU5ORUwsYXdhaXQgZigpO3JldHVybiBhd2FpdCBkKCkse2NsaWVudEFQSVZlcnNpb246XCIyLjkuMS1hbHBoYS0zNzg3XCIsbm90aWZpY2F0aW9uc1ZlcnNpb246KGF3YWl0KDAsYS5nZXRTdGF0dXMpKCkpLnZlcnNpb258fFwidW5rbm93blwifX0sZj1hc3luYyBlPT57dHJ5e2NvbnN0IHQ9d2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcIndpbmRvd3NcIiksbj1lfHxcImZpbnM6Ly9zeXN0ZW0tYXBwcy9ub3RpZmljYXRpb24tY2VudGVyXCI7dD8oYXdhaXQgby5Mb2cuaW5mbyhcIkxhdW5jaGluZyBOb3RpZmljYXRpb25zIHZpYSBmaW4uU3lzdGVtLmxhdW5jaE1hbmlmZXN0Li4uXCIpLGF3YWl0IGZpbi5TeXN0ZW0ubGF1bmNoTWFuaWZlc3Qobix7bm9VaTohMH0pKTooYXdhaXQgby5Mb2cuaW5mbyhcIkxhdW5jaGluZyBOb3RpZmljYXRpb25zIHZpYSBmaW4uU3lzdGVtLm9wZW5VcmxXaXRoQnJvd3Nlci4uLlwiKSxhd2FpdCBmaW4uU3lzdGVtLm9wZW5VcmxXaXRoQnJvd3NlcihuKSl9Y2F0Y2goZSl7dGhyb3cgZSBpbnN0YW5jZW9mIEVycm9yP2F3YWl0IG8uTG9nLmVycm9yKGBGYWlsZWQgdG8gbGF1bmNoIE5vdGlmaWNhdGlvbnMgLSAke2UubmFtZX06ICR7ZS5tZXNzYWdlfWApOmF3YWl0IG8uTG9nLmVycm9yKGBGYWlsZWQgdG8gbGF1bmNoIE5vdGlmaWNhdGlvbnMgLSAke0pTT04uc3RyaW5naWZ5KGUpfWApLGV9fSxkPWFzeW5jKCk9Pnt0cnl7Y29uc3R7Y2hhbm5lbENsaWVudFByb21pc2U6ZSxpc0luaXQ6dH09KDAscy5pbml0QXdhaXRlZENoYW5uZWxDbGllbnQpKCksbj1hd2FpdCBlO3QmJihuLnNldERlZmF1bHRBY3Rpb24oYy5oYW5kbGVEZWZhdWx0QWN0aW9uKSxuLnJlZ2lzdGVyKFwiZXZlbnRcIixjLmhhbmRsZUV2ZW50QWN0aW9uKSxuLnJlZ2lzdGVyKFwiV0FSTlwiLGMuaGFuZGxlV2FybkFjdGlvbiksbi5vbkRpc2Nvbm5lY3Rpb24oYy5oYW5kbGVEaXNjb25uZWN0aW9uKSxmaW4uV2luZG93LndyYXBTeW5jKGkuU0VSVklDRV9JREVOVElUWSkub25jZShcImNsb3NlZFwiLGMuaGFuZGxlRGlzY29ubmVjdGlvbikpfWNhdGNoKGUpe3Rocm93IGUgaW5zdGFuY2VvZiBFcnJvcj9hd2FpdCBvLkxvZy5lcnJvcihgRmFpbGVkIHRvIGNvbm5lY3QgdG8gTm90aWZpY2F0aW9ucyAtICR7ZS5uYW1lfTogJHtlLm1lc3NhZ2V9YCk6YXdhaXQgby5Mb2cuZXJyb3IoYEZhaWxlZCB0byBjb25uZWN0IHRvIE5vdGlmaWNhdGlvbnMgLSAke0pTT04uc3RyaW5naWZ5KGUpfWApLGV9fX0sMTMxNTQ6KGUsdCk9PntcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sNTAyOTU6KGUsdCk9PntcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sNzUwNTA6KGUsdCk9PntcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sNzgzNjQ6KGUsdCk9PntcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sNzE0NzQ6KGUsdCk9PntcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sOTA1MTI6ZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO3ZhciBpPXRoaXMmJnRoaXMuX19jcmVhdGVCaW5kaW5nfHwoT2JqZWN0LmNyZWF0ZT9mdW5jdGlvbihlLHQsbixpKXt2b2lkIDA9PT1pJiYoaT1uKTt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsbik7ciYmIShcImdldFwiaW4gcj8hdC5fX2VzTW9kdWxlOnIud3JpdGFibGV8fHIuY29uZmlndXJhYmxlKXx8KHI9e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRbbl19fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsaSxyKX06ZnVuY3Rpb24oZSx0LG4saSl7dm9pZCAwPT09aSYmKGk9biksZVtpXT10W25dfSkscj10aGlzJiZ0aGlzLl9fZXhwb3J0U3Rhcnx8ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG4gaW4gZSlcImRlZmF1bHRcIj09PW58fE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LG4pfHxpKHQsZSxuKX07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSkscihuKDc4MzY0KSx0KSxyKG4oNzE0NzQpLHQpLHIobig0NDQxNSksdCkscihuKDE1OTE1KSx0KX0sNDQ0MTU6KGUsdCk9PntcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LlRlbXBsYXRlRnJhZ21lbnROYW1lcz10LlByZXNlbnRhdGlvblRlbXBsYXRlRnJhZ21lbnROYW1lcz10LkNvbnRhaW5lclRlbXBsYXRlRnJhZ21lbnROYW1lcz10LlRlbXBsYXRlTmFtZXM9dm9pZCAwLHQuVGVtcGxhdGVOYW1lcz17bWFya2Rvd246XCJtYXJrZG93blwiLGxpc3Q6XCJsaXN0XCIsY3VzdG9tOlwiY3VzdG9tXCJ9LHQuQ29udGFpbmVyVGVtcGxhdGVGcmFnbWVudE5hbWVzPXtjb250YWluZXI6XCJjb250YWluZXJcIn0sdC5QcmVzZW50YXRpb25UZW1wbGF0ZUZyYWdtZW50TmFtZXM9e3RleHQ6XCJ0ZXh0XCIsaW1hZ2U6XCJpbWFnZVwiLGxpc3Q6XCJsaXN0XCIsYWN0aW9uYWJsZVRleHQ6XCJhY3Rpb25hYmxlVGV4dFwifSx0LlRlbXBsYXRlRnJhZ21lbnROYW1lcz1PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sdC5Db250YWluZXJUZW1wbGF0ZUZyYWdtZW50TmFtZXMpLHQuUHJlc2VudGF0aW9uVGVtcGxhdGVGcmFnbWVudE5hbWVzKX0sMTU5MTU6KGUsdCk9PntcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sMjgxNzM6KGUsdCk9PntcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUsdCl7bGV0IG47dHJ5e249SlNPTi5zdHJpbmdpZnkoZSl9Y2F0Y2goZSl7bj10fXJldHVybiBufU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuc2FmZVN0cmluZ2lmeT10LnZhbGlkYXRlRW52aXJvbm1lbnQ9dC5zYW5pdGl6ZUV2ZW50VHlwZT10LnNhbml0aXplRnVuY3Rpb249dm9pZCAwLHQuc2FuaXRpemVGdW5jdGlvbj1mdW5jdGlvbihlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBFcnJvcihgSW52YWxpZCBhcmd1bWVudCBwYXNzZWQ6ICR7bihlLFwiVGhlIHByb3ZpZGVkIHZhbHVlXCIpfSBpcyBub3QgYSB2YWxpZCBmdW5jdGlvbmApO3JldHVybiBlfSx0LnNhbml0aXplRXZlbnRUeXBlPWZ1bmN0aW9uKGUpe2lmKFwibm90aWZpY2F0aW9uLWFjdGlvblwiPT09ZXx8XCJub3RpZmljYXRpb24tY3JlYXRlZFwiPT09ZXx8XCJub3RpZmljYXRpb24tdG9hc3QtZGlzbWlzc2VkXCI9PT1lfHxcIm5vdGlmaWNhdGlvbi1jbG9zZWRcIj09PWV8fFwibm90aWZpY2F0aW9ucy1jb3VudC1jaGFuZ2VkXCI9PT1lfHxcIm5vdGlmaWNhdGlvbi1mb3JtLXN1Ym1pdHRlZFwiPT09ZXx8XCJub3RpZmljYXRpb24tcmVtaW5kZXItY3JlYXRlZFwiPT09ZXx8XCJub3RpZmljYXRpb24tcmVtaW5kZXItcmVtb3ZlZFwiPT09ZXx8XCJub3RpZmljYXRpb24tZm9ybS12YWx1ZXMtY2hhbmdlZFwiPT09ZXx8XCJub3RpZmljYXRpb24tc291bmQtdG9nZ2xlZFwiPT09ZSlyZXR1cm4gZTt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgYXJndW1lbnQgcGFzc2VkOiAke24oZSxcIlRoZSBwcm92aWRlZCBldmVudCB0eXBlXCIpfSBpcyBub3QgYSB2YWxpZCBOb3RpZmljYXRpb25zIGV2ZW50IHR5cGVgKX0sdC52YWxpZGF0ZUVudmlyb25tZW50PWZ1bmN0aW9uKCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIGZpbil0aHJvdyBuZXcgRXJyb3IoXCJmaW4gaXMgbm90IGRlZmluZWQuIFRoZSBvcGVuZmluLW5vdGlmaWNhdGlvbnMgbW9kdWxlIGlzIG9ubHkgaW50ZW5kZWQgZm9yIHVzZSBpbiBhbiBPcGVuRmluIGFwcGxpY2F0aW9uLlwiKX0sdC5zYWZlU3RyaW5naWZ5PW59LDgwNjY0OmZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10aGlzJiZ0aGlzLl9fY3JlYXRlQmluZGluZ3x8KE9iamVjdC5jcmVhdGU/ZnVuY3Rpb24oZSx0LG4saSl7dm9pZCAwPT09aSYmKGk9bik7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LG4pO3ImJiEoXCJnZXRcImluIHI/IXQuX19lc01vZHVsZTpyLndyaXRhYmxlfHxyLmNvbmZpZ3VyYWJsZSl8fChyPXtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0W25dfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLGkscil9OmZ1bmN0aW9uKGUsdCxuLGkpe3ZvaWQgMD09PWkmJihpPW4pLGVbaV09dFtuXX0pLHI9dGhpcyYmdGhpcy5fX2V4cG9ydFN0YXJ8fGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuIGluIGUpXCJkZWZhdWx0XCI9PT1ufHxPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxuKXx8aSh0LGUsbil9O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuTm90aWZpY2F0aW9uc1JlZ2lzdHJhdGlvbj10LnJlZ2lzdGVyPXZvaWQgMCxyKG4oNDA3MDcpLHQpO3ZhciBvPW4oNTg3OSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJyZWdpc3RlclwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBvLnJlZ2lzdGVyfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiTm90aWZpY2F0aW9uc1JlZ2lzdHJhdGlvblwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBvLk5vdGlmaWNhdGlvbnNSZWdpc3RyYXRpb259fSl9fSx0PXt9LGZ1bmN0aW9uIG4oaSl7dmFyIHI9dFtpXTtpZih2b2lkIDAhPT1yKXJldHVybiByLmV4cG9ydHM7dmFyIG89dFtpXT17ZXhwb3J0czp7fX07cmV0dXJuIGVbaV0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsbiksby5leHBvcnRzfSg4MDY2NCk7dmFyIGUsdH0pKTsiLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiByZWFjdC5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgTWV0YSBQbGF0Zm9ybXMsIEluYy4gYW5kIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiZcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcobWV0aG9kTmFtZSwgaW5mbykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgXCIlcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlc1wiLFxuICAgICAgICAgICAgaW5mb1swXSxcbiAgICAgICAgICAgIGluZm9bMV1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgICBpZiAobnVsbCA9PT0gbWF5YmVJdGVyYWJsZSB8fCBcIm9iamVjdFwiICE9PSB0eXBlb2YgbWF5YmVJdGVyYWJsZSlcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICBtYXliZUl0ZXJhYmxlID1cbiAgICAgICAgKE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0pIHx8XG4gICAgICAgIG1heWJlSXRlcmFibGVbXCJAQGl0ZXJhdG9yXCJdO1xuICAgICAgcmV0dXJuIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIG1heWJlSXRlcmFibGUgPyBtYXliZUl0ZXJhYmxlIDogbnVsbDtcbiAgICB9XG4gICAgZnVuY3Rpb24gd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIGNhbGxlck5hbWUpIHtcbiAgICAgIHB1YmxpY0luc3RhbmNlID1cbiAgICAgICAgKChwdWJsaWNJbnN0YW5jZSA9IHB1YmxpY0luc3RhbmNlLmNvbnN0cnVjdG9yKSAmJlxuICAgICAgICAgIChwdWJsaWNJbnN0YW5jZS5kaXNwbGF5TmFtZSB8fCBwdWJsaWNJbnN0YW5jZS5uYW1lKSkgfHxcbiAgICAgICAgXCJSZWFjdENsYXNzXCI7XG4gICAgICB2YXIgd2FybmluZ0tleSA9IHB1YmxpY0luc3RhbmNlICsgXCIuXCIgKyBjYWxsZXJOYW1lO1xuICAgICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldIHx8XG4gICAgICAgIChjb25zb2xlLmVycm9yKFxuICAgICAgICAgIFwiQ2FuJ3QgY2FsbCAlcyBvbiBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB5ZXQgbW91bnRlZC4gVGhpcyBpcyBhIG5vLW9wLCBidXQgaXQgbWlnaHQgaW5kaWNhdGUgYSBidWcgaW4geW91ciBhcHBsaWNhdGlvbi4gSW5zdGVhZCwgYXNzaWduIHRvIGB0aGlzLnN0YXRlYCBkaXJlY3RseSBvciBkZWZpbmUgYSBgc3RhdGUgPSB7fTtgIGNsYXNzIHByb3BlcnR5IHdpdGggdGhlIGRlc2lyZWQgc3RhdGUgaW4gdGhlICVzIGNvbXBvbmVudC5cIixcbiAgICAgICAgICBjYWxsZXJOYW1lLFxuICAgICAgICAgIHB1YmxpY0luc3RhbmNlXG4gICAgICAgICksXG4gICAgICAgIChkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gPSAhMCkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgICAgIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIENvbXBvbmVudER1bW15KCkge31cbiAgICBmdW5jdGlvbiBQdXJlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gICAgICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiBcIlwiICsgdmFsdWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24odmFsdWUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7XG4gICAgICAgIHZhciBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQgPSAhMTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0ID0gITA7XG4gICAgICB9XG4gICAgICBpZiAoSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0KSB7XG4gICAgICAgIEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdCA9IGNvbnNvbGU7XG4gICAgICAgIHZhciBKU0NvbXBpbGVyX3RlbXBfY29uc3QgPSBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQuZXJyb3I7XG4gICAgICAgIHZhciBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQkanNjb21wJDAgPVxuICAgICAgICAgIChcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBTeW1ib2wgJiZcbiAgICAgICAgICAgIFN5bWJvbC50b1N0cmluZ1RhZyAmJlxuICAgICAgICAgICAgdmFsdWVbU3ltYm9sLnRvU3RyaW5nVGFnXSkgfHxcbiAgICAgICAgICB2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lIHx8XG4gICAgICAgICAgXCJPYmplY3RcIjtcbiAgICAgICAgSlNDb21waWxlcl90ZW1wX2NvbnN0LmNhbGwoXG4gICAgICAgICAgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0LFxuICAgICAgICAgIFwiVGhlIHByb3ZpZGVkIGtleSBpcyBhbiB1bnN1cHBvcnRlZCB0eXBlICVzLiBUaGlzIHZhbHVlIG11c3QgYmUgY29lcmNlZCB0byBhIHN0cmluZyBiZWZvcmUgdXNpbmcgaXQgaGVyZS5cIixcbiAgICAgICAgICBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQkanNjb21wJDBcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKSB7XG4gICAgICBpZiAobnVsbCA9PSB0eXBlKSByZXR1cm4gbnVsbDtcbiAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiB0eXBlKVxuICAgICAgICByZXR1cm4gdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ0xJRU5UX1JFRkVSRU5DRVxuICAgICAgICAgID8gbnVsbFxuICAgICAgICAgIDogdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgICAgIGlmIChcInN0cmluZ1wiID09PSB0eXBlb2YgdHlwZSkgcmV0dXJuIHR5cGU7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIHJldHVybiBcIkZyYWdtZW50XCI7XG4gICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICByZXR1cm4gXCJQcm9maWxlclwiO1xuICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgcmV0dXJuIFwiU3RyaWN0TW9kZVwiO1xuICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgcmV0dXJuIFwiU3VzcGVuc2VcIjtcbiAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICAgICAgcmV0dXJuIFwiU3VzcGVuc2VMaXN0XCI7XG4gICAgICAgIGNhc2UgUkVBQ1RfQUNUSVZJVFlfVFlQRTpcbiAgICAgICAgICByZXR1cm4gXCJBY3Rpdml0eVwiO1xuICAgICAgfVxuICAgICAgaWYgKFwib2JqZWN0XCIgPT09IHR5cGVvZiB0eXBlKVxuICAgICAgICBzd2l0Y2ggKFxuICAgICAgICAgIChcIm51bWJlclwiID09PSB0eXBlb2YgdHlwZS50YWcgJiZcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgIFwiUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKCkuIFRoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS5cIlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICB0eXBlLiQkdHlwZW9mKVxuICAgICAgICApIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIFwiUG9ydGFsXCI7XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gKHR5cGUuZGlzcGxheU5hbWUgfHwgXCJDb250ZXh0XCIpICsgXCIuUHJvdmlkZXJcIjtcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTlNVTUVSX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gKHR5cGUuX2NvbnRleHQuZGlzcGxheU5hbWUgfHwgXCJDb250ZXh0XCIpICsgXCIuQ29uc3VtZXJcIjtcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICB2YXIgaW5uZXJUeXBlID0gdHlwZS5yZW5kZXI7XG4gICAgICAgICAgICB0eXBlID0gdHlwZS5kaXNwbGF5TmFtZTtcbiAgICAgICAgICAgIHR5cGUgfHxcbiAgICAgICAgICAgICAgKCh0eXBlID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8IFwiXCIpLFxuICAgICAgICAgICAgICAodHlwZSA9IFwiXCIgIT09IHR5cGUgPyBcIkZvcndhcmRSZWYoXCIgKyB0eXBlICsgXCIpXCIgOiBcIkZvcndhcmRSZWZcIikpO1xuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAoaW5uZXJUeXBlID0gdHlwZS5kaXNwbGF5TmFtZSB8fCBudWxsKSxcbiAgICAgICAgICAgICAgbnVsbCAhPT0gaW5uZXJUeXBlXG4gICAgICAgICAgICAgICAgPyBpbm5lclR5cGVcbiAgICAgICAgICAgICAgICA6IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8IFwiTWVtb1wiXG4gICAgICAgICAgICApO1xuICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgaW5uZXJUeXBlID0gdHlwZS5fcGF5bG9hZDtcbiAgICAgICAgICAgIHR5cGUgPSB0eXBlLl9pbml0O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKGlubmVyVHlwZSkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFRhc2tOYW1lKHR5cGUpIHtcbiAgICAgIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFKSByZXR1cm4gXCI8PlwiO1xuICAgICAgaWYgKFxuICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgdHlwZSAmJlxuICAgICAgICBudWxsICE9PSB0eXBlICYmXG4gICAgICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRVxuICAgICAgKVxuICAgICAgICByZXR1cm4gXCI8Li4uPlwiO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG4gICAgICAgIHJldHVybiBuYW1lID8gXCI8XCIgKyBuYW1lICsgXCI+XCIgOiBcIjwuLi4+XCI7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHJldHVybiBcIjwuLi4+XCI7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldE93bmVyKCkge1xuICAgICAgdmFyIGRpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5BO1xuICAgICAgcmV0dXJuIG51bGwgPT09IGRpc3BhdGNoZXIgPyBudWxsIDogZGlzcGF0Y2hlci5nZXRPd25lcigpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBVbmtub3duT3duZXIoKSB7XG4gICAgICByZXR1cm4gRXJyb3IoXCJyZWFjdC1zdGFjay10b3AtZnJhbWVcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBcImtleVwiKSkge1xuICAgICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsIFwia2V5XCIpLmdldDtcbiAgICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHJldHVybiAhMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2b2lkIDAgIT09IGNvbmZpZy5rZXk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICAgICAgZnVuY3Rpb24gd2FybkFib3V0QWNjZXNzaW5nS2V5KCkge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biB8fFxuICAgICAgICAgICgoc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSAhMCksXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIFwiJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSB2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50IHByb3AuIChodHRwczovL3JlYWN0LmRldi9saW5rL3NwZWNpYWwtcHJvcHMpXCIsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZVxuICAgICAgICAgICkpO1xuICAgICAgfVxuICAgICAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gITA7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsIFwia2V5XCIsIHtcbiAgICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBlbGVtZW50UmVmR2V0dGVyV2l0aERlcHJlY2F0aW9uV2FybmluZygpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHRoaXMudHlwZSk7XG4gICAgICBkaWRXYXJuQWJvdXRFbGVtZW50UmVmW2NvbXBvbmVudE5hbWVdIHx8XG4gICAgICAgICgoZGlkV2FybkFib3V0RWxlbWVudFJlZltjb21wb25lbnROYW1lXSA9ICEwKSxcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBcIkFjY2Vzc2luZyBlbGVtZW50LnJlZiB3YXMgcmVtb3ZlZCBpbiBSZWFjdCAxOS4gcmVmIGlzIG5vdyBhIHJlZ3VsYXIgcHJvcC4gSXQgd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIEpTWCBFbGVtZW50IHR5cGUgaW4gYSBmdXR1cmUgcmVsZWFzZS5cIlxuICAgICAgICApKTtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSB0aGlzLnByb3BzLnJlZjtcbiAgICAgIHJldHVybiB2b2lkIDAgIT09IGNvbXBvbmVudE5hbWUgPyBjb21wb25lbnROYW1lIDogbnVsbDtcbiAgICB9XG4gICAgZnVuY3Rpb24gUmVhY3RFbGVtZW50KFxuICAgICAgdHlwZSxcbiAgICAgIGtleSxcbiAgICAgIHNlbGYsXG4gICAgICBzb3VyY2UsXG4gICAgICBvd25lcixcbiAgICAgIHByb3BzLFxuICAgICAgZGVidWdTdGFjayxcbiAgICAgIGRlYnVnVGFza1xuICAgICkge1xuICAgICAgc2VsZiA9IHByb3BzLnJlZjtcbiAgICAgIHR5cGUgPSB7XG4gICAgICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgIF9vd25lcjogb3duZXJcbiAgICAgIH07XG4gICAgICBudWxsICE9PSAodm9pZCAwICE9PSBzZWxmID8gc2VsZiA6IG51bGwpXG4gICAgICAgID8gT2JqZWN0LmRlZmluZVByb3BlcnR5KHR5cGUsIFwicmVmXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6ICExLFxuICAgICAgICAgICAgZ2V0OiBlbGVtZW50UmVmR2V0dGVyV2l0aERlcHJlY2F0aW9uV2FybmluZ1xuICAgICAgICAgIH0pXG4gICAgICAgIDogT2JqZWN0LmRlZmluZVByb3BlcnR5KHR5cGUsIFwicmVmXCIsIHsgZW51bWVyYWJsZTogITEsIHZhbHVlOiBudWxsIH0pO1xuICAgICAgdHlwZS5fc3RvcmUgPSB7fTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0eXBlLl9zdG9yZSwgXCJ2YWxpZGF0ZWRcIiwge1xuICAgICAgICBjb25maWd1cmFibGU6ICExLFxuICAgICAgICBlbnVtZXJhYmxlOiAhMSxcbiAgICAgICAgd3JpdGFibGU6ICEwLFxuICAgICAgICB2YWx1ZTogMFxuICAgICAgfSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodHlwZSwgXCJfZGVidWdJbmZvXCIsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMSxcbiAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgIHdyaXRhYmxlOiAhMCxcbiAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgIH0pO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHR5cGUsIFwiX2RlYnVnU3RhY2tcIiwge1xuICAgICAgICBjb25maWd1cmFibGU6ICExLFxuICAgICAgICBlbnVtZXJhYmxlOiAhMSxcbiAgICAgICAgd3JpdGFibGU6ICEwLFxuICAgICAgICB2YWx1ZTogZGVidWdTdGFja1xuICAgICAgfSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodHlwZSwgXCJfZGVidWdUYXNrXCIsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMSxcbiAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgIHdyaXRhYmxlOiAhMCxcbiAgICAgICAgdmFsdWU6IGRlYnVnVGFza1xuICAgICAgfSk7XG4gICAgICBPYmplY3QuZnJlZXplICYmIChPYmplY3QuZnJlZXplKHR5cGUucHJvcHMpLCBPYmplY3QuZnJlZXplKHR5cGUpKTtcbiAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbG9uZUFuZFJlcGxhY2VLZXkob2xkRWxlbWVudCwgbmV3S2V5KSB7XG4gICAgICBuZXdLZXkgPSBSZWFjdEVsZW1lbnQoXG4gICAgICAgIG9sZEVsZW1lbnQudHlwZSxcbiAgICAgICAgbmV3S2V5LFxuICAgICAgICB2b2lkIDAsXG4gICAgICAgIHZvaWQgMCxcbiAgICAgICAgb2xkRWxlbWVudC5fb3duZXIsXG4gICAgICAgIG9sZEVsZW1lbnQucHJvcHMsXG4gICAgICAgIG9sZEVsZW1lbnQuX2RlYnVnU3RhY2ssXG4gICAgICAgIG9sZEVsZW1lbnQuX2RlYnVnVGFza1xuICAgICAgKTtcbiAgICAgIG9sZEVsZW1lbnQuX3N0b3JlICYmXG4gICAgICAgIChuZXdLZXkuX3N0b3JlLnZhbGlkYXRlZCA9IG9sZEVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCk7XG4gICAgICByZXR1cm4gbmV3S2V5O1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiBvYmplY3QgJiZcbiAgICAgICAgbnVsbCAhPT0gb2JqZWN0ICYmXG4gICAgICAgIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFXG4gICAgICApO1xuICAgIH1cbiAgICBmdW5jdGlvbiBlc2NhcGUoa2V5KSB7XG4gICAgICB2YXIgZXNjYXBlckxvb2t1cCA9IHsgXCI9XCI6IFwiPTBcIiwgXCI6XCI6IFwiPTJcIiB9O1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgXCIkXCIgK1xuICAgICAgICBrZXkucmVwbGFjZSgvWz06XS9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRFbGVtZW50S2V5KGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICByZXR1cm4gXCJvYmplY3RcIiA9PT0gdHlwZW9mIGVsZW1lbnQgJiZcbiAgICAgICAgbnVsbCAhPT0gZWxlbWVudCAmJlxuICAgICAgICBudWxsICE9IGVsZW1lbnQua2V5XG4gICAgICAgID8gKGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oZWxlbWVudC5rZXkpLCBlc2NhcGUoXCJcIiArIGVsZW1lbnQua2V5KSlcbiAgICAgICAgOiBpbmRleC50b1N0cmluZygzNik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG5vb3AkMSgpIHt9XG4gICAgZnVuY3Rpb24gcmVzb2x2ZVRoZW5hYmxlKHRoZW5hYmxlKSB7XG4gICAgICBzd2l0Y2ggKHRoZW5hYmxlLnN0YXR1cykge1xuICAgICAgICBjYXNlIFwiZnVsZmlsbGVkXCI6XG4gICAgICAgICAgcmV0dXJuIHRoZW5hYmxlLnZhbHVlO1xuICAgICAgICBjYXNlIFwicmVqZWN0ZWRcIjpcbiAgICAgICAgICB0aHJvdyB0aGVuYWJsZS5yZWFzb247XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgc3dpdGNoIChcbiAgICAgICAgICAgIChcInN0cmluZ1wiID09PSB0eXBlb2YgdGhlbmFibGUuc3RhdHVzXG4gICAgICAgICAgICAgID8gdGhlbmFibGUudGhlbihub29wJDEsIG5vb3AkMSlcbiAgICAgICAgICAgICAgOiAoKHRoZW5hYmxlLnN0YXR1cyA9IFwicGVuZGluZ1wiKSxcbiAgICAgICAgICAgICAgICB0aGVuYWJsZS50aGVuKFxuICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGZ1bGZpbGxlZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIFwicGVuZGluZ1wiID09PSB0aGVuYWJsZS5zdGF0dXMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAoKHRoZW5hYmxlLnN0YXR1cyA9IFwiZnVsZmlsbGVkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICh0aGVuYWJsZS52YWx1ZSA9IGZ1bGZpbGxlZFZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIFwicGVuZGluZ1wiID09PSB0aGVuYWJsZS5zdGF0dXMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAoKHRoZW5hYmxlLnN0YXR1cyA9IFwicmVqZWN0ZWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgKHRoZW5hYmxlLnJlYXNvbiA9IGVycm9yKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKSksXG4gICAgICAgICAgICB0aGVuYWJsZS5zdGF0dXMpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjYXNlIFwiZnVsZmlsbGVkXCI6XG4gICAgICAgICAgICAgIHJldHVybiB0aGVuYWJsZS52YWx1ZTtcbiAgICAgICAgICAgIGNhc2UgXCJyZWplY3RlZFwiOlxuICAgICAgICAgICAgICB0aHJvdyB0aGVuYWJsZS5yZWFzb247XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhyb3cgdGhlbmFibGU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1hcEludG9BcnJheShjaGlsZHJlbiwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5hbWVTb0ZhciwgY2FsbGJhY2spIHtcbiAgICAgIHZhciB0eXBlID0gdHlwZW9mIGNoaWxkcmVuO1xuICAgICAgaWYgKFwidW5kZWZpbmVkXCIgPT09IHR5cGUgfHwgXCJib29sZWFuXCIgPT09IHR5cGUpIGNoaWxkcmVuID0gbnVsbDtcbiAgICAgIHZhciBpbnZva2VDYWxsYmFjayA9ICExO1xuICAgICAgaWYgKG51bGwgPT09IGNoaWxkcmVuKSBpbnZva2VDYWxsYmFjayA9ICEwO1xuICAgICAgZWxzZVxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFwiYmlnaW50XCI6XG4gICAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gITA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICAgICAgICBzd2l0Y2ggKGNoaWxkcmVuLiQkdHlwZW9mKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gITA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAoaW52b2tlQ2FsbGJhY2sgPSBjaGlsZHJlbi5faW5pdCksXG4gICAgICAgICAgICAgICAgICBtYXBJbnRvQXJyYXkoXG4gICAgICAgICAgICAgICAgICAgIGludm9rZUNhbGxiYWNrKGNoaWxkcmVuLl9wYXlsb2FkKSxcbiAgICAgICAgICAgICAgICAgICAgYXJyYXksXG4gICAgICAgICAgICAgICAgICAgIGVzY2FwZWRQcmVmaXgsXG4gICAgICAgICAgICAgICAgICAgIG5hbWVTb0ZhcixcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSBjaGlsZHJlbjtcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayhpbnZva2VDYWxsYmFjayk7XG4gICAgICAgIHZhciBjaGlsZEtleSA9XG4gICAgICAgICAgXCJcIiA9PT0gbmFtZVNvRmFyID8gXCIuXCIgKyBnZXRFbGVtZW50S2V5KGludm9rZUNhbGxiYWNrLCAwKSA6IG5hbWVTb0ZhcjtcbiAgICAgICAgaXNBcnJheUltcGwoY2FsbGJhY2spXG4gICAgICAgICAgPyAoKGVzY2FwZWRQcmVmaXggPSBcIlwiKSxcbiAgICAgICAgICAgIG51bGwgIT0gY2hpbGRLZXkgJiZcbiAgICAgICAgICAgICAgKGVzY2FwZWRQcmVmaXggPVxuICAgICAgICAgICAgICAgIGNoaWxkS2V5LnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsIFwiJCYvXCIpICsgXCIvXCIpLFxuICAgICAgICAgICAgbWFwSW50b0FycmF5KGNhbGxiYWNrLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgXCJcIiwgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGM7XG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICA6IG51bGwgIT0gY2FsbGJhY2sgJiZcbiAgICAgICAgICAgIChpc1ZhbGlkRWxlbWVudChjYWxsYmFjaykgJiZcbiAgICAgICAgICAgICAgKG51bGwgIT0gY2FsbGJhY2sua2V5ICYmXG4gICAgICAgICAgICAgICAgKChpbnZva2VDYWxsYmFjayAmJiBpbnZva2VDYWxsYmFjay5rZXkgPT09IGNhbGxiYWNrLmtleSkgfHxcbiAgICAgICAgICAgICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oY2FsbGJhY2sua2V5KSksXG4gICAgICAgICAgICAgIChlc2NhcGVkUHJlZml4ID0gY2xvbmVBbmRSZXBsYWNlS2V5KFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrLFxuICAgICAgICAgICAgICAgIGVzY2FwZWRQcmVmaXggK1xuICAgICAgICAgICAgICAgICAgKG51bGwgPT0gY2FsbGJhY2sua2V5IHx8XG4gICAgICAgICAgICAgICAgICAoaW52b2tlQ2FsbGJhY2sgJiYgaW52b2tlQ2FsbGJhY2sua2V5ID09PSBjYWxsYmFjay5rZXkpXG4gICAgICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgICAgICA6IChcIlwiICsgY2FsbGJhY2sua2V5KS5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiQmL1wiXG4gICAgICAgICAgICAgICAgICAgICAgKSArIFwiL1wiKSArXG4gICAgICAgICAgICAgICAgICBjaGlsZEtleVxuICAgICAgICAgICAgICApKSxcbiAgICAgICAgICAgICAgXCJcIiAhPT0gbmFtZVNvRmFyICYmXG4gICAgICAgICAgICAgICAgbnVsbCAhPSBpbnZva2VDYWxsYmFjayAmJlxuICAgICAgICAgICAgICAgIGlzVmFsaWRFbGVtZW50KGludm9rZUNhbGxiYWNrKSAmJlxuICAgICAgICAgICAgICAgIG51bGwgPT0gaW52b2tlQ2FsbGJhY2sua2V5ICYmXG4gICAgICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2suX3N0b3JlICYmXG4gICAgICAgICAgICAgICAgIWludm9rZUNhbGxiYWNrLl9zdG9yZS52YWxpZGF0ZWQgJiZcbiAgICAgICAgICAgICAgICAoZXNjYXBlZFByZWZpeC5fc3RvcmUudmFsaWRhdGVkID0gMiksXG4gICAgICAgICAgICAgIChjYWxsYmFjayA9IGVzY2FwZWRQcmVmaXgpKSxcbiAgICAgICAgICAgIGFycmF5LnB1c2goY2FsbGJhY2spKTtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICBpbnZva2VDYWxsYmFjayA9IDA7XG4gICAgICBjaGlsZEtleSA9IFwiXCIgPT09IG5hbWVTb0ZhciA/IFwiLlwiIDogbmFtZVNvRmFyICsgXCI6XCI7XG4gICAgICBpZiAoaXNBcnJheUltcGwoY2hpbGRyZW4pKVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKVxuICAgICAgICAgIChuYW1lU29GYXIgPSBjaGlsZHJlbltpXSksXG4gICAgICAgICAgICAodHlwZSA9IGNoaWxkS2V5ICsgZ2V0RWxlbWVudEtleShuYW1lU29GYXIsIGkpKSxcbiAgICAgICAgICAgIChpbnZva2VDYWxsYmFjayArPSBtYXBJbnRvQXJyYXkoXG4gICAgICAgICAgICAgIG5hbWVTb0ZhcixcbiAgICAgICAgICAgICAgYXJyYXksXG4gICAgICAgICAgICAgIGVzY2FwZWRQcmVmaXgsXG4gICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrXG4gICAgICAgICAgICApKTtcbiAgICAgIGVsc2UgaWYgKCgoaSA9IGdldEl0ZXJhdG9yRm4oY2hpbGRyZW4pKSwgXCJmdW5jdGlvblwiID09PSB0eXBlb2YgaSkpXG4gICAgICAgIGZvciAoXG4gICAgICAgICAgaSA9PT0gY2hpbGRyZW4uZW50cmllcyAmJlxuICAgICAgICAgICAgKGRpZFdhcm5BYm91dE1hcHMgfHxcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIFwiVXNpbmcgTWFwcyBhcyBjaGlsZHJlbiBpcyBub3Qgc3VwcG9ydGVkLiBVc2UgYW4gYXJyYXkgb2Yga2V5ZWQgUmVhY3RFbGVtZW50cyBpbnN0ZWFkLlwiXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAoZGlkV2FybkFib3V0TWFwcyA9ICEwKSksXG4gICAgICAgICAgICBjaGlsZHJlbiA9IGkuY2FsbChjaGlsZHJlbiksXG4gICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAhKG5hbWVTb0ZhciA9IGNoaWxkcmVuLm5leHQoKSkuZG9uZTtcblxuICAgICAgICApXG4gICAgICAgICAgKG5hbWVTb0ZhciA9IG5hbWVTb0Zhci52YWx1ZSksXG4gICAgICAgICAgICAodHlwZSA9IGNoaWxkS2V5ICsgZ2V0RWxlbWVudEtleShuYW1lU29GYXIsIGkrKykpLFxuICAgICAgICAgICAgKGludm9rZUNhbGxiYWNrICs9IG1hcEludG9BcnJheShcbiAgICAgICAgICAgICAgbmFtZVNvRmFyLFxuICAgICAgICAgICAgICBhcnJheSxcbiAgICAgICAgICAgICAgZXNjYXBlZFByZWZpeCxcbiAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgY2FsbGJhY2tcbiAgICAgICAgICAgICkpO1xuICAgICAgZWxzZSBpZiAoXCJvYmplY3RcIiA9PT0gdHlwZSkge1xuICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2YgY2hpbGRyZW4udGhlbilcbiAgICAgICAgICByZXR1cm4gbWFwSW50b0FycmF5KFxuICAgICAgICAgICAgcmVzb2x2ZVRoZW5hYmxlKGNoaWxkcmVuKSxcbiAgICAgICAgICAgIGFycmF5LFxuICAgICAgICAgICAgZXNjYXBlZFByZWZpeCxcbiAgICAgICAgICAgIG5hbWVTb0ZhcixcbiAgICAgICAgICAgIGNhbGxiYWNrXG4gICAgICAgICAgKTtcbiAgICAgICAgYXJyYXkgPSBTdHJpbmcoY2hpbGRyZW4pO1xuICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICBcIk9iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogXCIgK1xuICAgICAgICAgICAgKFwiW29iamVjdCBPYmplY3RdXCIgPT09IGFycmF5XG4gICAgICAgICAgICAgID8gXCJvYmplY3Qgd2l0aCBrZXlzIHtcIiArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKFwiLCBcIikgKyBcIn1cIlxuICAgICAgICAgICAgICA6IGFycmF5KSArXG4gICAgICAgICAgICBcIikuIElmIHlvdSBtZWFudCB0byByZW5kZXIgYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCB1c2UgYW4gYXJyYXkgaW5zdGVhZC5cIlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGludm9rZUNhbGxiYWNrO1xuICAgIH1cbiAgICBmdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICAgICAgaWYgKG51bGwgPT0gY2hpbGRyZW4pIHJldHVybiBjaGlsZHJlbjtcbiAgICAgIHZhciByZXN1bHQgPSBbXSxcbiAgICAgICAgY291bnQgPSAwO1xuICAgICAgbWFwSW50b0FycmF5KGNoaWxkcmVuLCByZXN1bHQsIFwiXCIsIFwiXCIsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBjb3VudCsrKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gbGF6eUluaXRpYWxpemVyKHBheWxvYWQpIHtcbiAgICAgIGlmICgtMSA9PT0gcGF5bG9hZC5fc3RhdHVzKSB7XG4gICAgICAgIHZhciBjdG9yID0gcGF5bG9hZC5fcmVzdWx0O1xuICAgICAgICBjdG9yID0gY3RvcigpO1xuICAgICAgICBjdG9yLnRoZW4oXG4gICAgICAgICAgZnVuY3Rpb24gKG1vZHVsZU9iamVjdCkge1xuICAgICAgICAgICAgaWYgKDAgPT09IHBheWxvYWQuX3N0YXR1cyB8fCAtMSA9PT0gcGF5bG9hZC5fc3RhdHVzKVxuICAgICAgICAgICAgICAocGF5bG9hZC5fc3RhdHVzID0gMSksIChwYXlsb2FkLl9yZXN1bHQgPSBtb2R1bGVPYmplY3QpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoMCA9PT0gcGF5bG9hZC5fc3RhdHVzIHx8IC0xID09PSBwYXlsb2FkLl9zdGF0dXMpXG4gICAgICAgICAgICAgIChwYXlsb2FkLl9zdGF0dXMgPSAyKSwgKHBheWxvYWQuX3Jlc3VsdCA9IGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIC0xID09PSBwYXlsb2FkLl9zdGF0dXMgJiZcbiAgICAgICAgICAoKHBheWxvYWQuX3N0YXR1cyA9IDApLCAocGF5bG9hZC5fcmVzdWx0ID0gY3RvcikpO1xuICAgICAgfVxuICAgICAgaWYgKDEgPT09IHBheWxvYWQuX3N0YXR1cylcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAoY3RvciA9IHBheWxvYWQuX3Jlc3VsdCksXG4gICAgICAgICAgdm9pZCAwID09PSBjdG9yICYmXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICBcImxhenk6IEV4cGVjdGVkIHRoZSByZXN1bHQgb2YgYSBkeW5hbWljIGltcG9ydCgpIGNhbGwuIEluc3RlYWQgcmVjZWl2ZWQ6ICVzXFxuXFxuWW91ciBjb2RlIHNob3VsZCBsb29rIGxpa2U6IFxcbiAgY29uc3QgTXlDb21wb25lbnQgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9NeUNvbXBvbmVudCcpKVxcblxcbkRpZCB5b3UgYWNjaWRlbnRhbGx5IHB1dCBjdXJseSBicmFjZXMgYXJvdW5kIHRoZSBpbXBvcnQ/XCIsXG4gICAgICAgICAgICAgIGN0b3JcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXCJkZWZhdWx0XCIgaW4gY3RvciB8fFxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgXCJsYXp5OiBFeHBlY3RlZCB0aGUgcmVzdWx0IG9mIGEgZHluYW1pYyBpbXBvcnQoKSBjYWxsLiBJbnN0ZWFkIHJlY2VpdmVkOiAlc1xcblxcbllvdXIgY29kZSBzaG91bGQgbG9vayBsaWtlOiBcXG4gIGNvbnN0IE15Q29tcG9uZW50ID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vTXlDb21wb25lbnQnKSlcIixcbiAgICAgICAgICAgICAgY3RvclxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBjdG9yLmRlZmF1bHRcbiAgICAgICAgKTtcbiAgICAgIHRocm93IHBheWxvYWQuX3Jlc3VsdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVzb2x2ZURpc3BhdGNoZXIoKSB7XG4gICAgICB2YXIgZGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLkg7XG4gICAgICBudWxsID09PSBkaXNwYXRjaGVyICYmXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgXCJJbnZhbGlkIGhvb2sgY2FsbC4gSG9va3MgY2FuIG9ubHkgYmUgY2FsbGVkIGluc2lkZSBvZiB0aGUgYm9keSBvZiBhIGZ1bmN0aW9uIGNvbXBvbmVudC4gVGhpcyBjb3VsZCBoYXBwZW4gZm9yIG9uZSBvZiB0aGUgZm9sbG93aW5nIHJlYXNvbnM6XFxuMS4gWW91IG1pZ2h0IGhhdmUgbWlzbWF0Y2hpbmcgdmVyc2lvbnMgb2YgUmVhY3QgYW5kIHRoZSByZW5kZXJlciAoc3VjaCBhcyBSZWFjdCBET00pXFxuMi4gWW91IG1pZ2h0IGJlIGJyZWFraW5nIHRoZSBSdWxlcyBvZiBIb29rc1xcbjMuIFlvdSBtaWdodCBoYXZlIG1vcmUgdGhhbiBvbmUgY29weSBvZiBSZWFjdCBpbiB0aGUgc2FtZSBhcHBcXG5TZWUgaHR0cHM6Ly9yZWFjdC5kZXYvbGluay9pbnZhbGlkLWhvb2stY2FsbCBmb3IgdGlwcyBhYm91dCBob3cgdG8gZGVidWcgYW5kIGZpeCB0aGlzIHByb2JsZW0uXCJcbiAgICAgICAgKTtcbiAgICAgIHJldHVybiBkaXNwYXRjaGVyO1xuICAgIH1cbiAgICBmdW5jdGlvbiBub29wKCkge31cbiAgICBmdW5jdGlvbiBlbnF1ZXVlVGFzayh0YXNrKSB7XG4gICAgICBpZiAobnVsbCA9PT0gZW5xdWV1ZVRhc2tJbXBsKVxuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciByZXF1aXJlU3RyaW5nID0gKFwicmVxdWlyZVwiICsgTWF0aC5yYW5kb20oKSkuc2xpY2UoMCwgNyk7XG4gICAgICAgICAgZW5xdWV1ZVRhc2tJbXBsID0gKG1vZHVsZSAmJiBtb2R1bGVbcmVxdWlyZVN0cmluZ10pLmNhbGwoXG4gICAgICAgICAgICBtb2R1bGUsXG4gICAgICAgICAgICBcInRpbWVyc1wiXG4gICAgICAgICAgKS5zZXRJbW1lZGlhdGU7XG4gICAgICAgIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICAgICAgICBlbnF1ZXVlVGFza0ltcGwgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICExID09PSBkaWRXYXJuQWJvdXRNZXNzYWdlQ2hhbm5lbCAmJlxuICAgICAgICAgICAgICAoKGRpZFdhcm5BYm91dE1lc3NhZ2VDaGFubmVsID0gITApLFxuICAgICAgICAgICAgICBcInVuZGVmaW5lZFwiID09PSB0eXBlb2YgTWVzc2FnZUNoYW5uZWwgJiZcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgXCJUaGlzIGJyb3dzZXIgZG9lcyBub3QgaGF2ZSBhIE1lc3NhZ2VDaGFubmVsIGltcGxlbWVudGF0aW9uLCBzbyBlbnF1ZXVpbmcgdGFza3MgdmlhIGF3YWl0IGFjdChhc3luYyAoKSA9PiAuLi4pIHdpbGwgZmFpbC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUgYXQgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3VlcyBpZiB5b3UgZW5jb3VudGVyIHRoaXMgd2FybmluZy5cIlxuICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gY2FsbGJhY2s7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKHZvaWQgMCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgcmV0dXJuIGVucXVldWVUYXNrSW1wbCh0YXNrKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWdncmVnYXRlRXJyb3JzKGVycm9ycykge1xuICAgICAgcmV0dXJuIDEgPCBlcnJvcnMubGVuZ3RoICYmIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIEFnZ3JlZ2F0ZUVycm9yXG4gICAgICAgID8gbmV3IEFnZ3JlZ2F0ZUVycm9yKGVycm9ycylcbiAgICAgICAgOiBlcnJvcnNbMF07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBvcEFjdFNjb3BlKHByZXZBY3RRdWV1ZSwgcHJldkFjdFNjb3BlRGVwdGgpIHtcbiAgICAgIHByZXZBY3RTY29wZURlcHRoICE9PSBhY3RTY29wZURlcHRoIC0gMSAmJlxuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIFwiWW91IHNlZW0gdG8gaGF2ZSBvdmVybGFwcGluZyBhY3QoKSBjYWxscywgdGhpcyBpcyBub3Qgc3VwcG9ydGVkLiBCZSBzdXJlIHRvIGF3YWl0IHByZXZpb3VzIGFjdCgpIGNhbGxzIGJlZm9yZSBtYWtpbmcgYSBuZXcgb25lLiBcIlxuICAgICAgICApO1xuICAgICAgYWN0U2NvcGVEZXB0aCA9IHByZXZBY3RTY29wZURlcHRoO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKHJldHVyblZhbHVlLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBxdWV1ZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLmFjdFF1ZXVlO1xuICAgICAgaWYgKG51bGwgIT09IHF1ZXVlKVxuICAgICAgICBpZiAoMCAhPT0gcXVldWUubGVuZ3RoKVxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmbHVzaEFjdFF1ZXVlKHF1ZXVlKTtcbiAgICAgICAgICAgIGVucXVldWVUYXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsocmV0dXJuVmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLnB1c2goZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgZWxzZSBSZWFjdFNoYXJlZEludGVybmFscy5hY3RRdWV1ZSA9IG51bGw7XG4gICAgICAwIDwgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLmxlbmd0aFxuICAgICAgICA/ICgocXVldWUgPSBhZ2dyZWdhdGVFcnJvcnMoUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzKSksXG4gICAgICAgICAgKFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5sZW5ndGggPSAwKSxcbiAgICAgICAgICByZWplY3QocXVldWUpKVxuICAgICAgICA6IHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmbHVzaEFjdFF1ZXVlKHF1ZXVlKSB7XG4gICAgICBpZiAoIWlzRmx1c2hpbmcpIHtcbiAgICAgICAgaXNGbHVzaGluZyA9ICEwO1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yICg7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gcXVldWVbaV07XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIFJlYWN0U2hhcmVkSW50ZXJuYWxzLmRpZFVzZVByb21pc2UgPSAhMTtcbiAgICAgICAgICAgICAgdmFyIGNvbnRpbnVhdGlvbiA9IGNhbGxiYWNrKCExKTtcbiAgICAgICAgICAgICAgaWYgKG51bGwgIT09IGNvbnRpbnVhdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChSZWFjdFNoYXJlZEludGVybmFscy5kaWRVc2VQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICBxdWV1ZVtpXSA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgICAgICAgcXVldWUuc3BsaWNlKDAsIGkpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYWxsYmFjayA9IGNvbnRpbnVhdGlvbjtcbiAgICAgICAgICAgICAgfSBlbHNlIGJyZWFrO1xuICAgICAgICAgICAgfSB3aGlsZSAoMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcXVldWUuc3BsaWNlKDAsIGkgKyAxKSwgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLnB1c2goZXJyb3IpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlzRmx1c2hpbmcgPSAhMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICYmXG4gICAgICBcImZ1bmN0aW9uXCIgPT09XG4gICAgICAgIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0ICYmXG4gICAgICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0KEVycm9yKCkpO1xuICAgIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QudHJhbnNpdGlvbmFsLmVsZW1lbnRcIiksXG4gICAgICBSRUFDVF9QT1JUQUxfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIiksXG4gICAgICBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpLFxuICAgICAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKSxcbiAgICAgIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIik7XG4gICAgU3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpO1xuICAgIHZhciBSRUFDVF9DT05TVU1FUl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmNvbnN1bWVyXCIpLFxuICAgICAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIiksXG4gICAgICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLFxuICAgICAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKSxcbiAgICAgIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZV9saXN0XCIpLFxuICAgICAgUkVBQ1RfTUVNT19UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIiksXG4gICAgICBSRUFDVF9MQVpZX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKSxcbiAgICAgIFJFQUNUX0FDVElWSVRZX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QuYWN0aXZpdHlcIiksXG4gICAgICBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSBTeW1ib2wuaXRlcmF0b3IsXG4gICAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQgPSB7fSxcbiAgICAgIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xuICAgICAgICBpc01vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgIH0sXG4gICAgICAgIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgICAgICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIFwiZm9yY2VVcGRhdGVcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgICAgICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBcInJlcGxhY2VTdGF0ZVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICAgICAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgXCJzZXRTdGF0ZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFzc2lnbiA9IE9iamVjdC5hc3NpZ24sXG4gICAgICBlbXB0eU9iamVjdCA9IHt9O1xuICAgIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xuICAgIENvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IHt9O1xuICAgIENvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbFN0YXRlLCBjYWxsYmFjaykge1xuICAgICAgaWYgKFxuICAgICAgICBcIm9iamVjdFwiICE9PSB0eXBlb2YgcGFydGlhbFN0YXRlICYmXG4gICAgICAgIFwiZnVuY3Rpb25cIiAhPT0gdHlwZW9mIHBhcnRpYWxTdGF0ZSAmJlxuICAgICAgICBudWxsICE9IHBhcnRpYWxTdGF0ZVxuICAgICAgKVxuICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICBcInRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLlwiXG4gICAgICAgICk7XG4gICAgICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssIFwic2V0U3RhdGVcIik7XG4gICAgfTtcbiAgICBDb21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsIGNhbGxiYWNrLCBcImZvcmNlVXBkYXRlXCIpO1xuICAgIH07XG4gICAgdmFyIGRlcHJlY2F0ZWRBUElzID0ge1xuICAgICAgICBpc01vdW50ZWQ6IFtcbiAgICAgICAgICBcImlzTW91bnRlZFwiLFxuICAgICAgICAgIFwiSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gY29tcG9uZW50V2lsbFVubW91bnQgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuXCJcbiAgICAgICAgXSxcbiAgICAgICAgcmVwbGFjZVN0YXRlOiBbXG4gICAgICAgICAgXCJyZXBsYWNlU3RhdGVcIixcbiAgICAgICAgICBcIlJlZmFjdG9yIHlvdXIgY29kZSB0byB1c2Ugc2V0U3RhdGUgaW5zdGVhZCAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMzIzNikuXCJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGZuTmFtZTtcbiAgICBmb3IgKGZuTmFtZSBpbiBkZXByZWNhdGVkQVBJcylcbiAgICAgIGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkgJiZcbiAgICAgICAgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nKGZuTmFtZSwgZGVwcmVjYXRlZEFQSXNbZm5OYW1lXSk7XG4gICAgQ29tcG9uZW50RHVtbXkucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgICBkZXByZWNhdGVkQVBJcyA9IFB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudER1bW15KCk7XG4gICAgZGVwcmVjYXRlZEFQSXMuY29uc3RydWN0b3IgPSBQdXJlQ29tcG9uZW50O1xuICAgIGFzc2lnbihkZXByZWNhdGVkQVBJcywgQ29tcG9uZW50LnByb3RvdHlwZSk7XG4gICAgZGVwcmVjYXRlZEFQSXMuaXNQdXJlUmVhY3RDb21wb25lbnQgPSAhMDtcbiAgICB2YXIgaXNBcnJheUltcGwgPSBBcnJheS5pc0FycmF5LFxuICAgICAgUkVBQ1RfQ0xJRU5UX1JFRkVSRU5DRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5jbGllbnQucmVmZXJlbmNlXCIpLFxuICAgICAgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSB7XG4gICAgICAgIEg6IG51bGwsXG4gICAgICAgIEE6IG51bGwsXG4gICAgICAgIFQ6IG51bGwsXG4gICAgICAgIFM6IG51bGwsXG4gICAgICAgIFY6IG51bGwsXG4gICAgICAgIGFjdFF1ZXVlOiBudWxsLFxuICAgICAgICBpc0JhdGNoaW5nTGVnYWN5OiAhMSxcbiAgICAgICAgZGlkU2NoZWR1bGVMZWdhY3lVcGRhdGU6ICExLFxuICAgICAgICBkaWRVc2VQcm9taXNlOiAhMSxcbiAgICAgICAgdGhyb3duRXJyb3JzOiBbXSxcbiAgICAgICAgZ2V0Q3VycmVudFN0YWNrOiBudWxsLFxuICAgICAgICByZWNlbnRseUNyZWF0ZWRPd25lclN0YWNrczogMFxuICAgICAgfSxcbiAgICAgIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxcbiAgICAgIGNyZWF0ZVRhc2sgPSBjb25zb2xlLmNyZWF0ZVRhc2tcbiAgICAgICAgPyBjb25zb2xlLmNyZWF0ZVRhc2tcbiAgICAgICAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9O1xuICAgIGRlcHJlY2F0ZWRBUElzID0ge1xuICAgICAgcmVhY3Rfc3RhY2tfYm90dG9tX2ZyYW1lOiBmdW5jdGlvbiAoY2FsbFN0YWNrRm9yRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxTdGFja0ZvckVycm9yKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB2YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24sIGRpZFdhcm5BYm91dE9sZEpTWFJ1bnRpbWU7XG4gICAgdmFyIGRpZFdhcm5BYm91dEVsZW1lbnRSZWYgPSB7fTtcbiAgICB2YXIgdW5rbm93bk93bmVyRGVidWdTdGFjayA9IGRlcHJlY2F0ZWRBUElzLnJlYWN0X3N0YWNrX2JvdHRvbV9mcmFtZS5iaW5kKFxuICAgICAgZGVwcmVjYXRlZEFQSXMsXG4gICAgICBVbmtub3duT3duZXJcbiAgICApKCk7XG4gICAgdmFyIHVua25vd25Pd25lckRlYnVnVGFzayA9IGNyZWF0ZVRhc2soZ2V0VGFza05hbWUoVW5rbm93bk93bmVyKSk7XG4gICAgdmFyIGRpZFdhcm5BYm91dE1hcHMgPSAhMSxcbiAgICAgIHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4ID0gL1xcLysvZyxcbiAgICAgIHJlcG9ydEdsb2JhbEVycm9yID1cbiAgICAgICAgXCJmdW5jdGlvblwiID09PSB0eXBlb2YgcmVwb3J0RXJyb3JcbiAgICAgICAgICA/IHJlcG9ydEVycm9yXG4gICAgICAgICAgOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiB3aW5kb3cgJiZcbiAgICAgICAgICAgICAgICBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiB3aW5kb3cuRXJyb3JFdmVudFxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgd2luZG93LkVycm9yRXZlbnQoXCJlcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICBidWJibGVzOiAhMCxcbiAgICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6ICEwLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICAgICAgICAgICAgXCJvYmplY3RcIiA9PT0gdHlwZW9mIGVycm9yICYmXG4gICAgICAgICAgICAgICAgICAgIG51bGwgIT09IGVycm9yICYmXG4gICAgICAgICAgICAgICAgICAgIFwic3RyaW5nXCIgPT09IHR5cGVvZiBlcnJvci5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgPyBTdHJpbmcoZXJyb3IubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgICA6IFN0cmluZyhlcnJvciksXG4gICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIXdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KSkgcmV0dXJuO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiBwcm9jZXNzICYmXG4gICAgICAgICAgICAgICAgXCJmdW5jdGlvblwiID09PSB0eXBlb2YgcHJvY2Vzcy5lbWl0XG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHByb2Nlc3MuZW1pdChcInVuY2F1Z2h0RXhjZXB0aW9uXCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9LFxuICAgICAgZGlkV2FybkFib3V0TWVzc2FnZUNoYW5uZWwgPSAhMSxcbiAgICAgIGVucXVldWVUYXNrSW1wbCA9IG51bGwsXG4gICAgICBhY3RTY29wZURlcHRoID0gMCxcbiAgICAgIGRpZFdhcm5Ob0F3YWl0QWN0ID0gITEsXG4gICAgICBpc0ZsdXNoaW5nID0gITEsXG4gICAgICBxdWV1ZVNldmVyYWxNaWNyb3Rhc2tzID1cbiAgICAgICAgXCJmdW5jdGlvblwiID09PSB0eXBlb2YgcXVldWVNaWNyb3Rhc2tcbiAgICAgICAgICA/IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICBxdWV1ZU1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXVlTWljcm90YXNrKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiBlbnF1ZXVlVGFzaztcbiAgICBkZXByZWNhdGVkQVBJcyA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgX19wcm90b19fOiBudWxsLFxuICAgICAgYzogZnVuY3Rpb24gKHNpemUpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlTWVtb0NhY2hlKHNpemUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGV4cG9ydHMuQ2hpbGRyZW4gPSB7XG4gICAgICBtYXA6IG1hcENoaWxkcmVuLFxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgICAgICAgbWFwQ2hpbGRyZW4oXG4gICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yRWFjaEZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZvckVhY2hDb250ZXh0XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgY291bnQ6IGZ1bmN0aW9uIChjaGlsZHJlbikge1xuICAgICAgICB2YXIgbiA9IDA7XG4gICAgICAgIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbisrO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG47XG4gICAgICB9LFxuICAgICAgdG9BcnJheTogZnVuY3Rpb24gKGNoaWxkcmVuKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICAgIH0pIHx8IFtdXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgb25seTogZnVuY3Rpb24gKGNoaWxkcmVuKSB7XG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKVxuICAgICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgICAgXCJSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC5cIlxuICAgICAgICAgICk7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgIH1cbiAgICB9O1xuICAgIGV4cG9ydHMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuICAgIGV4cG9ydHMuRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xuICAgIGV4cG9ydHMuUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xuICAgIGV4cG9ydHMuUHVyZUNvbXBvbmVudCA9IFB1cmVDb21wb25lbnQ7XG4gICAgZXhwb3J0cy5TdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbiAgICBleHBvcnRzLlN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbiAgICBleHBvcnRzLl9fQ0xJRU5UX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1dBUk5fVVNFUlNfVEhFWV9DQU5OT1RfVVBHUkFERSA9XG4gICAgICBSZWFjdFNoYXJlZEludGVybmFscztcbiAgICBleHBvcnRzLl9fQ09NUElMRVJfUlVOVElNRSA9IGRlcHJlY2F0ZWRBUElzO1xuICAgIGV4cG9ydHMuYWN0ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgcHJldkFjdFF1ZXVlID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuYWN0UXVldWUsXG4gICAgICAgIHByZXZBY3RTY29wZURlcHRoID0gYWN0U2NvcGVEZXB0aDtcbiAgICAgIGFjdFNjb3BlRGVwdGgrKztcbiAgICAgIHZhciBxdWV1ZSA9IChSZWFjdFNoYXJlZEludGVybmFscy5hY3RRdWV1ZSA9XG4gICAgICAgICAgbnVsbCAhPT0gcHJldkFjdFF1ZXVlID8gcHJldkFjdFF1ZXVlIDogW10pLFxuICAgICAgICBkaWRBd2FpdEFjdENhbGwgPSAhMTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBjYWxsYmFjaygpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLnB1c2goZXJyb3IpO1xuICAgICAgfVxuICAgICAgaWYgKDAgPCBSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMubGVuZ3RoKVxuICAgICAgICB0aHJvdyAoXG4gICAgICAgICAgKHBvcEFjdFNjb3BlKHByZXZBY3RRdWV1ZSwgcHJldkFjdFNjb3BlRGVwdGgpLFxuICAgICAgICAgIChjYWxsYmFjayA9IGFnZ3JlZ2F0ZUVycm9ycyhSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMpKSxcbiAgICAgICAgICAoUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLmxlbmd0aCA9IDApLFxuICAgICAgICAgIGNhbGxiYWNrKVxuICAgICAgICApO1xuICAgICAgaWYgKFxuICAgICAgICBudWxsICE9PSByZXN1bHQgJiZcbiAgICAgICAgXCJvYmplY3RcIiA9PT0gdHlwZW9mIHJlc3VsdCAmJlxuICAgICAgICBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiByZXN1bHQudGhlblxuICAgICAgKSB7XG4gICAgICAgIHZhciB0aGVuYWJsZSA9IHJlc3VsdDtcbiAgICAgICAgcXVldWVTZXZlcmFsTWljcm90YXNrcyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZGlkQXdhaXRBY3RDYWxsIHx8XG4gICAgICAgICAgICBkaWRXYXJuTm9Bd2FpdEFjdCB8fFxuICAgICAgICAgICAgKChkaWRXYXJuTm9Bd2FpdEFjdCA9ICEwKSxcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgIFwiWW91IGNhbGxlZCBhY3QoYXN5bmMgKCkgPT4gLi4uKSB3aXRob3V0IGF3YWl0LiBUaGlzIGNvdWxkIGxlYWQgdG8gdW5leHBlY3RlZCB0ZXN0aW5nIGJlaGF2aW91ciwgaW50ZXJsZWF2aW5nIG11bHRpcGxlIGFjdCBjYWxscyBhbmQgbWl4aW5nIHRoZWlyIHNjb3Blcy4gWW91IHNob3VsZCAtIGF3YWl0IGFjdChhc3luYyAoKSA9PiAuLi4pO1wiXG4gICAgICAgICAgICApKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGhlbjogZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgZGlkQXdhaXRBY3RDYWxsID0gITA7XG4gICAgICAgICAgICB0aGVuYWJsZS50aGVuKFxuICAgICAgICAgICAgICBmdW5jdGlvbiAocmV0dXJuVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBwb3BBY3RTY29wZShwcmV2QWN0UXVldWUsIHByZXZBY3RTY29wZURlcHRoKTtcbiAgICAgICAgICAgICAgICBpZiAoMCA9PT0gcHJldkFjdFNjb3BlRGVwdGgpIHtcbiAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZsdXNoQWN0UXVldWUocXVldWUpLFxuICAgICAgICAgICAgICAgICAgICAgIGVucXVldWVUYXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IkMCkge1xuICAgICAgICAgICAgICAgICAgICBSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMucHVzaChlcnJvciQwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmICgwIDwgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX3Rocm93bkVycm9yID0gYWdncmVnYXRlRXJyb3JzKFxuICAgICAgICAgICAgICAgICAgICAgIFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9yc1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KF90aHJvd25FcnJvcik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBwb3BBY3RTY29wZShwcmV2QWN0UXVldWUsIHByZXZBY3RTY29wZURlcHRoKTtcbiAgICAgICAgICAgICAgICAwIDwgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgPyAoKGVycm9yID0gYWdncmVnYXRlRXJyb3JzKFxuICAgICAgICAgICAgICAgICAgICAgIFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9yc1xuICAgICAgICAgICAgICAgICAgICApKSxcbiAgICAgICAgICAgICAgICAgICAgKFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5sZW5ndGggPSAwKSxcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKSlcbiAgICAgICAgICAgICAgICAgIDogcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB2YXIgcmV0dXJuVmFsdWUkanNjb21wJDAgPSByZXN1bHQ7XG4gICAgICBwb3BBY3RTY29wZShwcmV2QWN0UXVldWUsIHByZXZBY3RTY29wZURlcHRoKTtcbiAgICAgIDAgPT09IHByZXZBY3RTY29wZURlcHRoICYmXG4gICAgICAgIChmbHVzaEFjdFF1ZXVlKHF1ZXVlKSxcbiAgICAgICAgMCAhPT0gcXVldWUubGVuZ3RoICYmXG4gICAgICAgICAgcXVldWVTZXZlcmFsTWljcm90YXNrcyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkaWRBd2FpdEFjdENhbGwgfHxcbiAgICAgICAgICAgICAgZGlkV2Fybk5vQXdhaXRBY3QgfHxcbiAgICAgICAgICAgICAgKChkaWRXYXJuTm9Bd2FpdEFjdCA9ICEwKSxcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICBcIkEgY29tcG9uZW50IHN1c3BlbmRlZCBpbnNpZGUgYW4gYGFjdGAgc2NvcGUsIGJ1dCB0aGUgYGFjdGAgY2FsbCB3YXMgbm90IGF3YWl0ZWQuIFdoZW4gdGVzdGluZyBSZWFjdCBjb21wb25lbnRzIHRoYXQgZGVwZW5kIG9uIGFzeW5jaHJvbm91cyBkYXRhLCB5b3UgbXVzdCBhd2FpdCB0aGUgcmVzdWx0OlxcblxcbmF3YWl0IGFjdCgoKSA9PiAuLi4pXCJcbiAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgfSksXG4gICAgICAgIChSZWFjdFNoYXJlZEludGVybmFscy5hY3RRdWV1ZSA9IG51bGwpKTtcbiAgICAgIGlmICgwIDwgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLmxlbmd0aClcbiAgICAgICAgdGhyb3cgKFxuICAgICAgICAgICgoY2FsbGJhY2sgPSBhZ2dyZWdhdGVFcnJvcnMoUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzKSksXG4gICAgICAgICAgKFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5sZW5ndGggPSAwKSxcbiAgICAgICAgICBjYWxsYmFjaylcbiAgICAgICAgKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRoZW46IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBkaWRBd2FpdEFjdENhbGwgPSAhMDtcbiAgICAgICAgICAwID09PSBwcmV2QWN0U2NvcGVEZXB0aFxuICAgICAgICAgICAgPyAoKFJlYWN0U2hhcmVkSW50ZXJuYWxzLmFjdFF1ZXVlID0gcXVldWUpLFxuICAgICAgICAgICAgICBlbnF1ZXVlVGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsoXG4gICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSRqc2NvbXAkMCxcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIDogcmVzb2x2ZShyZXR1cm5WYWx1ZSRqc2NvbXAkMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgICBleHBvcnRzLmNhY2hlID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfTtcbiAgICBleHBvcnRzLmNhcHR1cmVPd25lclN0YWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGdldEN1cnJlbnRTdGFjayA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLmdldEN1cnJlbnRTdGFjaztcbiAgICAgIHJldHVybiBudWxsID09PSBnZXRDdXJyZW50U3RhY2sgPyBudWxsIDogZ2V0Q3VycmVudFN0YWNrKCk7XG4gICAgfTtcbiAgICBleHBvcnRzLmNsb25lRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gICAgICBpZiAobnVsbCA9PT0gZWxlbWVudCB8fCB2b2lkIDAgPT09IGVsZW1lbnQpXG4gICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgIFwiVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBSZWFjdCBlbGVtZW50LCBidXQgeW91IHBhc3NlZCBcIiArXG4gICAgICAgICAgICBlbGVtZW50ICtcbiAgICAgICAgICAgIFwiLlwiXG4gICAgICAgICk7XG4gICAgICB2YXIgcHJvcHMgPSBhc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpLFxuICAgICAgICBrZXkgPSBlbGVtZW50LmtleSxcbiAgICAgICAgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIGlmIChudWxsICE9IGNvbmZpZykge1xuICAgICAgICB2YXIgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0O1xuICAgICAgICBhOiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIFwicmVmXCIpICYmXG4gICAgICAgICAgICAoSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihcbiAgICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgICAgICBcInJlZlwiXG4gICAgICAgICAgICApLmdldCkgJiZcbiAgICAgICAgICAgIEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdC5pc1JlYWN0V2FybmluZ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0ID0gITE7XG4gICAgICAgICAgICBicmVhayBhO1xuICAgICAgICAgIH1cbiAgICAgICAgICBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQgPSB2b2lkIDAgIT09IGNvbmZpZy5yZWY7XG4gICAgICAgIH1cbiAgICAgICAgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0ICYmIChvd25lciA9IGdldE93bmVyKCkpO1xuICAgICAgICBoYXNWYWxpZEtleShjb25maWcpICYmXG4gICAgICAgICAgKGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oY29uZmlnLmtleSksIChrZXkgPSBcIlwiICsgY29uZmlnLmtleSkpO1xuICAgICAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZylcbiAgICAgICAgICAhaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSB8fFxuICAgICAgICAgICAgXCJrZXlcIiA9PT0gcHJvcE5hbWUgfHxcbiAgICAgICAgICAgIFwiX19zZWxmXCIgPT09IHByb3BOYW1lIHx8XG4gICAgICAgICAgICBcIl9fc291cmNlXCIgPT09IHByb3BOYW1lIHx8XG4gICAgICAgICAgICAoXCJyZWZcIiA9PT0gcHJvcE5hbWUgJiYgdm9pZCAwID09PSBjb25maWcucmVmKSB8fFxuICAgICAgICAgICAgKHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV0pO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BOYW1lID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG4gICAgICBpZiAoMSA9PT0gcHJvcE5hbWUpIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICBlbHNlIGlmICgxIDwgcHJvcE5hbWUpIHtcbiAgICAgICAgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0ID0gQXJyYXkocHJvcE5hbWUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BOYW1lOyBpKyspXG4gICAgICAgICAgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICAgICAgcHJvcHMuY2hpbGRyZW4gPSBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQ7XG4gICAgICB9XG4gICAgICBwcm9wcyA9IFJlYWN0RWxlbWVudChcbiAgICAgICAgZWxlbWVudC50eXBlLFxuICAgICAgICBrZXksXG4gICAgICAgIHZvaWQgMCxcbiAgICAgICAgdm9pZCAwLFxuICAgICAgICBvd25lcixcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIGVsZW1lbnQuX2RlYnVnU3RhY2ssXG4gICAgICAgIGVsZW1lbnQuX2RlYnVnVGFza1xuICAgICAgKTtcbiAgICAgIGZvciAoa2V5ID0gMjsga2V5IDwgYXJndW1lbnRzLmxlbmd0aDsga2V5KyspXG4gICAgICAgIChvd25lciA9IGFyZ3VtZW50c1trZXldKSxcbiAgICAgICAgICBpc1ZhbGlkRWxlbWVudChvd25lcikgJiYgb3duZXIuX3N0b3JlICYmIChvd25lci5fc3RvcmUudmFsaWRhdGVkID0gMSk7XG4gICAgICByZXR1cm4gcHJvcHM7XG4gICAgfTtcbiAgICBleHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBmdW5jdGlvbiAoZGVmYXVsdFZhbHVlKSB7XG4gICAgICBkZWZhdWx0VmFsdWUgPSB7XG4gICAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgICAgIF9jdXJyZW50VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICAgICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcbiAgICAgICAgX3RocmVhZENvdW50OiAwLFxuICAgICAgICBQcm92aWRlcjogbnVsbCxcbiAgICAgICAgQ29uc3VtZXI6IG51bGxcbiAgICAgIH07XG4gICAgICBkZWZhdWx0VmFsdWUuUHJvdmlkZXIgPSBkZWZhdWx0VmFsdWU7XG4gICAgICBkZWZhdWx0VmFsdWUuQ29uc3VtZXIgPSB7XG4gICAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05TVU1FUl9UWVBFLFxuICAgICAgICBfY29udGV4dDogZGVmYXVsdFZhbHVlXG4gICAgICB9O1xuICAgICAgZGVmYXVsdFZhbHVlLl9jdXJyZW50UmVuZGVyZXIgPSBudWxsO1xuICAgICAgZGVmYXVsdFZhbHVlLl9jdXJyZW50UmVuZGVyZXIyID0gbnVsbDtcbiAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfTtcbiAgICBleHBvcnRzLmNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICAgICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG5vZGUgPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGlzVmFsaWRFbGVtZW50KG5vZGUpICYmIG5vZGUuX3N0b3JlICYmIChub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSAxKTtcbiAgICAgIH1cbiAgICAgIGkgPSB7fTtcbiAgICAgIG5vZGUgPSBudWxsO1xuICAgICAgaWYgKG51bGwgIT0gY29uZmlnKVxuICAgICAgICBmb3IgKHByb3BOYW1lIGluIChkaWRXYXJuQWJvdXRPbGRKU1hSdW50aW1lIHx8XG4gICAgICAgICAgIShcIl9fc2VsZlwiIGluIGNvbmZpZykgfHxcbiAgICAgICAgICBcImtleVwiIGluIGNvbmZpZyB8fFxuICAgICAgICAgICgoZGlkV2FybkFib3V0T2xkSlNYUnVudGltZSA9ICEwKSxcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBcIllvdXIgYXBwIChvciBvbmUgb2YgaXRzIGRlcGVuZGVuY2llcykgaXMgdXNpbmcgYW4gb3V0ZGF0ZWQgSlNYIHRyYW5zZm9ybS4gVXBkYXRlIHRvIHRoZSBtb2Rlcm4gSlNYIHRyYW5zZm9ybSBmb3IgZmFzdGVyIHBlcmZvcm1hbmNlOiBodHRwczovL3JlYWN0LmRldi9saW5rL25ldy1qc3gtdHJhbnNmb3JtXCJcbiAgICAgICAgICApKSxcbiAgICAgICAgaGFzVmFsaWRLZXkoY29uZmlnKSAmJlxuICAgICAgICAgIChjaGVja0tleVN0cmluZ0NvZXJjaW9uKGNvbmZpZy5rZXkpLCAobm9kZSA9IFwiXCIgKyBjb25maWcua2V5KSksXG4gICAgICAgIGNvbmZpZykpXG4gICAgICAgICAgaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJlxuICAgICAgICAgICAgXCJrZXlcIiAhPT0gcHJvcE5hbWUgJiZcbiAgICAgICAgICAgIFwiX19zZWxmXCIgIT09IHByb3BOYW1lICYmXG4gICAgICAgICAgICBcIl9fc291cmNlXCIgIT09IHByb3BOYW1lICYmXG4gICAgICAgICAgICAoaVtwcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdKTtcbiAgICAgIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuICAgICAgaWYgKDEgPT09IGNoaWxkcmVuTGVuZ3RoKSBpLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICBlbHNlIGlmICgxIDwgY2hpbGRyZW5MZW5ndGgpIHtcbiAgICAgICAgZm9yIChcbiAgICAgICAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKSwgX2kgPSAwO1xuICAgICAgICAgIF9pIDwgY2hpbGRyZW5MZW5ndGg7XG4gICAgICAgICAgX2krK1xuICAgICAgICApXG4gICAgICAgICAgY2hpbGRBcnJheVtfaV0gPSBhcmd1bWVudHNbX2kgKyAyXTtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSAmJiBPYmplY3QuZnJlZXplKGNoaWxkQXJyYXkpO1xuICAgICAgICBpLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKVxuICAgICAgICBmb3IgKHByb3BOYW1lIGluICgoY2hpbGRyZW5MZW5ndGggPSB0eXBlLmRlZmF1bHRQcm9wcyksIGNoaWxkcmVuTGVuZ3RoKSlcbiAgICAgICAgICB2b2lkIDAgPT09IGlbcHJvcE5hbWVdICYmIChpW3Byb3BOYW1lXSA9IGNoaWxkcmVuTGVuZ3RoW3Byb3BOYW1lXSk7XG4gICAgICBub2RlICYmXG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKFxuICAgICAgICAgIGksXG4gICAgICAgICAgXCJmdW5jdGlvblwiID09PSB0eXBlb2YgdHlwZVxuICAgICAgICAgICAgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBcIlVua25vd25cIlxuICAgICAgICAgICAgOiB0eXBlXG4gICAgICAgICk7XG4gICAgICB2YXIgcHJvcE5hbWUgPSAxZTQgPiBSZWFjdFNoYXJlZEludGVybmFscy5yZWNlbnRseUNyZWF0ZWRPd25lclN0YWNrcysrO1xuICAgICAgcmV0dXJuIFJlYWN0RWxlbWVudChcbiAgICAgICAgdHlwZSxcbiAgICAgICAgbm9kZSxcbiAgICAgICAgdm9pZCAwLFxuICAgICAgICB2b2lkIDAsXG4gICAgICAgIGdldE93bmVyKCksXG4gICAgICAgIGksXG4gICAgICAgIHByb3BOYW1lID8gRXJyb3IoXCJyZWFjdC1zdGFjay10b3AtZnJhbWVcIikgOiB1bmtub3duT3duZXJEZWJ1Z1N0YWNrLFxuICAgICAgICBwcm9wTmFtZSA/IGNyZWF0ZVRhc2soZ2V0VGFza05hbWUodHlwZSkpIDogdW5rbm93bk93bmVyRGVidWdUYXNrXG4gICAgICApO1xuICAgIH07XG4gICAgZXhwb3J0cy5jcmVhdGVSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcmVmT2JqZWN0ID0geyBjdXJyZW50OiBudWxsIH07XG4gICAgICBPYmplY3Quc2VhbChyZWZPYmplY3QpO1xuICAgICAgcmV0dXJuIHJlZk9iamVjdDtcbiAgICB9O1xuICAgIGV4cG9ydHMuZm9yd2FyZFJlZiA9IGZ1bmN0aW9uIChyZW5kZXIpIHtcbiAgICAgIG51bGwgIT0gcmVuZGVyICYmIHJlbmRlci4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFXG4gICAgICAgID8gY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIFwiZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgY29tcG9uZW50LiBJbnN0ZWFkIG9mIGZvcndhcmRSZWYobWVtbyguLi4pKSwgdXNlIG1lbW8oZm9yd2FyZFJlZiguLi4pKS5cIlxuICAgICAgICAgIClcbiAgICAgICAgOiBcImZ1bmN0aW9uXCIgIT09IHR5cGVvZiByZW5kZXJcbiAgICAgICAgICA/IGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgIFwiZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLlwiLFxuICAgICAgICAgICAgICBudWxsID09PSByZW5kZXIgPyBcIm51bGxcIiA6IHR5cGVvZiByZW5kZXJcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IDAgIT09IHJlbmRlci5sZW5ndGggJiZcbiAgICAgICAgICAgIDIgIT09IHJlbmRlci5sZW5ndGggJiZcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgIFwiZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGFjY2VwdCBleGFjdGx5IHR3byBwYXJhbWV0ZXJzOiBwcm9wcyBhbmQgcmVmLiAlc1wiLFxuICAgICAgICAgICAgICAxID09PSByZW5kZXIubGVuZ3RoXG4gICAgICAgICAgICAgICAgPyBcIkRpZCB5b3UgZm9yZ2V0IHRvIHVzZSB0aGUgcmVmIHBhcmFtZXRlcj9cIlxuICAgICAgICAgICAgICAgIDogXCJBbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuXCJcbiAgICAgICAgICAgICk7XG4gICAgICBudWxsICE9IHJlbmRlciAmJlxuICAgICAgICBudWxsICE9IHJlbmRlci5kZWZhdWx0UHJvcHMgJiZcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBcImZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBkbyBub3Qgc3VwcG9ydCBkZWZhdWx0UHJvcHMuIERpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgYSBSZWFjdCBjb21wb25lbnQ/XCJcbiAgICAgICAgKTtcbiAgICAgIHZhciBlbGVtZW50VHlwZSA9IHsgJCR0eXBlb2Y6IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUsIHJlbmRlcjogcmVuZGVyIH0sXG4gICAgICAgIG93bk5hbWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsIFwiZGlzcGxheU5hbWVcIiwge1xuICAgICAgICBlbnVtZXJhYmxlOiAhMSxcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICBvd25OYW1lID0gbmFtZTtcbiAgICAgICAgICByZW5kZXIubmFtZSB8fFxuICAgICAgICAgICAgcmVuZGVyLmRpc3BsYXlOYW1lIHx8XG4gICAgICAgICAgICAoT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlbmRlciwgXCJuYW1lXCIsIHsgdmFsdWU6IG5hbWUgfSksXG4gICAgICAgICAgICAocmVuZGVyLmRpc3BsYXlOYW1lID0gbmFtZSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBlbGVtZW50VHlwZTtcbiAgICB9O1xuICAgIGV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSBpc1ZhbGlkRWxlbWVudDtcbiAgICBleHBvcnRzLmxhenkgPSBmdW5jdGlvbiAoY3Rvcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICAgICAgX3BheWxvYWQ6IHsgX3N0YXR1czogLTEsIF9yZXN1bHQ6IGN0b3IgfSxcbiAgICAgICAgX2luaXQ6IGxhenlJbml0aWFsaXplclxuICAgICAgfTtcbiAgICB9O1xuICAgIGV4cG9ydHMubWVtbyA9IGZ1bmN0aW9uICh0eXBlLCBjb21wYXJlKSB7XG4gICAgICBudWxsID09IHR5cGUgJiZcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBcIm1lbW86IFRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgY29tcG9uZW50LiBJbnN0ZWFkIHJlY2VpdmVkOiAlc1wiLFxuICAgICAgICAgIG51bGwgPT09IHR5cGUgPyBcIm51bGxcIiA6IHR5cGVvZiB0eXBlXG4gICAgICAgICk7XG4gICAgICBjb21wYXJlID0ge1xuICAgICAgICAkJHR5cGVvZjogUkVBQ1RfTUVNT19UWVBFLFxuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBjb21wYXJlOiB2b2lkIDAgPT09IGNvbXBhcmUgPyBudWxsIDogY29tcGFyZVxuICAgICAgfTtcbiAgICAgIHZhciBvd25OYW1lO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbXBhcmUsIFwiZGlzcGxheU5hbWVcIiwge1xuICAgICAgICBlbnVtZXJhYmxlOiAhMSxcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICBvd25OYW1lID0gbmFtZTtcbiAgICAgICAgICB0eXBlLm5hbWUgfHxcbiAgICAgICAgICAgIHR5cGUuZGlzcGxheU5hbWUgfHxcbiAgICAgICAgICAgIChPYmplY3QuZGVmaW5lUHJvcGVydHkodHlwZSwgXCJuYW1lXCIsIHsgdmFsdWU6IG5hbWUgfSksXG4gICAgICAgICAgICAodHlwZS5kaXNwbGF5TmFtZSA9IG5hbWUpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gY29tcGFyZTtcbiAgICB9O1xuICAgIGV4cG9ydHMuc3RhcnRUcmFuc2l0aW9uID0gZnVuY3Rpb24gKHNjb3BlKSB7XG4gICAgICB2YXIgcHJldlRyYW5zaXRpb24gPSBSZWFjdFNoYXJlZEludGVybmFscy5ULFxuICAgICAgICBjdXJyZW50VHJhbnNpdGlvbiA9IHt9O1xuICAgICAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuVCA9IGN1cnJlbnRUcmFuc2l0aW9uO1xuICAgICAgY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMgPSBuZXcgU2V0KCk7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcmV0dXJuVmFsdWUgPSBzY29wZSgpLFxuICAgICAgICAgIG9uU3RhcnRUcmFuc2l0aW9uRmluaXNoID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUztcbiAgICAgICAgbnVsbCAhPT0gb25TdGFydFRyYW5zaXRpb25GaW5pc2ggJiZcbiAgICAgICAgICBvblN0YXJ0VHJhbnNpdGlvbkZpbmlzaChjdXJyZW50VHJhbnNpdGlvbiwgcmV0dXJuVmFsdWUpO1xuICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgcmV0dXJuVmFsdWUgJiZcbiAgICAgICAgICBudWxsICE9PSByZXR1cm5WYWx1ZSAmJlxuICAgICAgICAgIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIHJldHVyblZhbHVlLnRoZW4gJiZcbiAgICAgICAgICByZXR1cm5WYWx1ZS50aGVuKG5vb3AsIHJlcG9ydEdsb2JhbEVycm9yKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlcG9ydEdsb2JhbEVycm9yKGVycm9yKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIG51bGwgPT09IHByZXZUcmFuc2l0aW9uICYmXG4gICAgICAgICAgY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMgJiZcbiAgICAgICAgICAoKHNjb3BlID0gY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMuc2l6ZSksXG4gICAgICAgICAgY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMuY2xlYXIoKSxcbiAgICAgICAgICAxMCA8IHNjb3BlICYmXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIFwiRGV0ZWN0ZWQgYSBsYXJnZSBudW1iZXIgb2YgdXBkYXRlcyBpbnNpZGUgc3RhcnRUcmFuc2l0aW9uLiBJZiB0aGlzIGlzIGR1ZSB0byBhIHN1YnNjcmlwdGlvbiBwbGVhc2UgcmUtd3JpdGUgaXQgdG8gdXNlIFJlYWN0IHByb3ZpZGVkIGhvb2tzLiBPdGhlcndpc2UgY29uY3VycmVudCBtb2RlIGd1YXJhbnRlZXMgYXJlIG9mZiB0aGUgdGFibGUuXCJcbiAgICAgICAgICAgICkpLFxuICAgICAgICAgIChSZWFjdFNoYXJlZEludGVybmFscy5UID0gcHJldlRyYW5zaXRpb24pO1xuICAgICAgfVxuICAgIH07XG4gICAgZXhwb3J0cy51bnN0YWJsZV91c2VDYWNoZVJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VDYWNoZVJlZnJlc2goKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlID0gZnVuY3Rpb24gKHVzYWJsZSkge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlKHVzYWJsZSk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZUFjdGlvblN0YXRlID0gZnVuY3Rpb24gKGFjdGlvbiwgaW5pdGlhbFN0YXRlLCBwZXJtYWxpbmspIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZUFjdGlvblN0YXRlKFxuICAgICAgICBhY3Rpb24sXG4gICAgICAgIGluaXRpYWxTdGF0ZSxcbiAgICAgICAgcGVybWFsaW5rXG4gICAgICApO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VDYWxsYmFjayA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZGVwcykge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VDb250ZXh0ID0gZnVuY3Rpb24gKENvbnRleHQpIHtcbiAgICAgIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgICAgIENvbnRleHQuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlNVTUVSX1RZUEUgJiZcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBcIkNhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LkNvbnN1bWVyKSBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGNhdXNlIGJ1Z3MuIERpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD9cIlxuICAgICAgICApO1xuICAgICAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0KTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlRGVidWdWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgZm9ybWF0dGVyRm4pIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlRGVmZXJyZWRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgaW5pdGlhbFZhbHVlKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VEZWZlcnJlZFZhbHVlKHZhbHVlLCBpbml0aWFsVmFsdWUpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VFZmZlY3QgPSBmdW5jdGlvbiAoY3JlYXRlLCBjcmVhdGVEZXBzLCB1cGRhdGUpIHtcbiAgICAgIG51bGwgPT0gY3JlYXRlICYmXG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBcIlJlYWN0IEhvb2sgdXNlRWZmZWN0IHJlcXVpcmVzIGFuIGVmZmVjdCBjYWxsYmFjay4gRGlkIHlvdSBmb3JnZXQgdG8gcGFzcyBhIGNhbGxiYWNrIHRvIHRoZSBob29rP1wiXG4gICAgICAgICk7XG4gICAgICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gICAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2YgdXBkYXRlKVxuICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICBcInVzZUVmZmVjdCBDUlVEIG92ZXJsb2FkIGlzIG5vdCBlbmFibGVkIGluIHRoaXMgYnVpbGQgb2YgUmVhY3QuXCJcbiAgICAgICAgKTtcbiAgICAgIHJldHVybiBkaXNwYXRjaGVyLnVzZUVmZmVjdChjcmVhdGUsIGNyZWF0ZURlcHMpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VJZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZUlkKCk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZUltcGVyYXRpdmVIYW5kbGUgPSBmdW5jdGlvbiAocmVmLCBjcmVhdGUsIGRlcHMpIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VJbnNlcnRpb25FZmZlY3QgPSBmdW5jdGlvbiAoY3JlYXRlLCBkZXBzKSB7XG4gICAgICBudWxsID09IGNyZWF0ZSAmJlxuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgXCJSZWFjdCBIb29rIHVzZUluc2VydGlvbkVmZmVjdCByZXF1aXJlcyBhbiBlZmZlY3QgY2FsbGJhY2suIERpZCB5b3UgZm9yZ2V0IHRvIHBhc3MgYSBjYWxsYmFjayB0byB0aGUgaG9vaz9cIlxuICAgICAgICApO1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlSW5zZXJ0aW9uRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZUxheW91dEVmZmVjdCA9IGZ1bmN0aW9uIChjcmVhdGUsIGRlcHMpIHtcbiAgICAgIG51bGwgPT0gY3JlYXRlICYmXG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBcIlJlYWN0IEhvb2sgdXNlTGF5b3V0RWZmZWN0IHJlcXVpcmVzIGFuIGVmZmVjdCBjYWxsYmFjay4gRGlkIHlvdSBmb3JnZXQgdG8gcGFzcyBhIGNhbGxiYWNrIHRvIHRoZSBob29rP1wiXG4gICAgICAgICk7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlTWVtbyA9IGZ1bmN0aW9uIChjcmVhdGUsIGRlcHMpIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZU1lbW8oY3JlYXRlLCBkZXBzKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlT3B0aW1pc3RpYyA9IGZ1bmN0aW9uIChwYXNzdGhyb3VnaCwgcmVkdWNlcikge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlT3B0aW1pc3RpYyhwYXNzdGhyb3VnaCwgcmVkdWNlcik7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZVJlZHVjZXIgPSBmdW5jdGlvbiAocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlUmVmID0gZnVuY3Rpb24gKGluaXRpYWxWYWx1ZSkge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZVN0YXRlID0gZnVuY3Rpb24gKGluaXRpYWxTdGF0ZSkge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlU3luY0V4dGVybmFsU3RvcmUgPSBmdW5jdGlvbiAoXG4gICAgICBzdWJzY3JpYmUsXG4gICAgICBnZXRTbmFwc2hvdCxcbiAgICAgIGdldFNlcnZlclNuYXBzaG90XG4gICAgKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VTeW5jRXh0ZXJuYWxTdG9yZShcbiAgICAgICAgc3Vic2NyaWJlLFxuICAgICAgICBnZXRTbmFwc2hvdCxcbiAgICAgICAgZ2V0U2VydmVyU25hcHNob3RcbiAgICAgICk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZVRyYW5zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VUcmFuc2l0aW9uKCk7XG4gICAgfTtcbiAgICBleHBvcnRzLnZlcnNpb24gPSBcIjE5LjEuMVwiO1xuICAgIFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gJiZcbiAgICAgIFwiZnVuY3Rpb25cIiA9PT1cbiAgICAgICAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcCAmJlxuICAgICAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wKEVycm9yKCkpO1xuICB9KSgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LnByb2R1Y3Rpb24uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKlxuICogVGhpcyBmaWxlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGZyb20gYHByZS1wdWJsaXNoLmpzYC5cbiAqIERvIG5vdCBtYW51YWxseSBlZGl0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBcImFyZWFcIjogdHJ1ZSxcbiAgXCJiYXNlXCI6IHRydWUsXG4gIFwiYnJcIjogdHJ1ZSxcbiAgXCJjb2xcIjogdHJ1ZSxcbiAgXCJlbWJlZFwiOiB0cnVlLFxuICBcImhyXCI6IHRydWUsXG4gIFwiaW1nXCI6IHRydWUsXG4gIFwiaW5wdXRcIjogdHJ1ZSxcbiAgXCJsaW5rXCI6IHRydWUsXG4gIFwibWV0YVwiOiB0cnVlLFxuICBcInBhcmFtXCI6IHRydWUsXG4gIFwic291cmNlXCI6IHRydWUsXG4gIFwidHJhY2tcIjogdHJ1ZSxcbiAgXCJ3YnJcIjogdHJ1ZVxufTtcbiIsImZ1bmN0aW9uIHByb21pc2lmeVJlcXVlc3QocmVxdWVzdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgLSBmaWxlIHNpemUgaGFja3NcbiAgICAgICAgcmVxdWVzdC5vbmNvbXBsZXRlID0gcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiByZXNvbHZlKHJlcXVlc3QucmVzdWx0KTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZSAtIGZpbGUgc2l6ZSBoYWNrc1xuICAgICAgICByZXF1ZXN0Lm9uYWJvcnQgPSByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxdWVzdC5lcnJvcik7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVTdG9yZShkYk5hbWUsIHN0b3JlTmFtZSkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihkYk5hbWUpO1xuICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKCkgPT4gcmVxdWVzdC5yZXN1bHQuY3JlYXRlT2JqZWN0U3RvcmUoc3RvcmVOYW1lKTtcbiAgICBjb25zdCBkYnAgPSBwcm9taXNpZnlSZXF1ZXN0KHJlcXVlc3QpO1xuICAgIHJldHVybiAodHhNb2RlLCBjYWxsYmFjaykgPT4gZGJwLnRoZW4oKGRiKSA9PiBjYWxsYmFjayhkYi50cmFuc2FjdGlvbihzdG9yZU5hbWUsIHR4TW9kZSkub2JqZWN0U3RvcmUoc3RvcmVOYW1lKSkpO1xufVxubGV0IGRlZmF1bHRHZXRTdG9yZUZ1bmM7XG5mdW5jdGlvbiBkZWZhdWx0R2V0U3RvcmUoKSB7XG4gICAgaWYgKCFkZWZhdWx0R2V0U3RvcmVGdW5jKSB7XG4gICAgICAgIGRlZmF1bHRHZXRTdG9yZUZ1bmMgPSBjcmVhdGVTdG9yZSgna2V5dmFsLXN0b3JlJywgJ2tleXZhbCcpO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdEdldFN0b3JlRnVuYztcbn1cbi8qKlxuICogR2V0IGEgdmFsdWUgYnkgaXRzIGtleS5cbiAqXG4gKiBAcGFyYW0ga2V5XG4gKiBAcGFyYW0gY3VzdG9tU3RvcmUgTWV0aG9kIHRvIGdldCBhIGN1c3RvbSBzdG9yZS4gVXNlIHdpdGggY2F1dGlvbiAoc2VlIHRoZSBkb2NzKS5cbiAqL1xuZnVuY3Rpb24gZ2V0KGtleSwgY3VzdG9tU3RvcmUgPSBkZWZhdWx0R2V0U3RvcmUoKSkge1xuICAgIHJldHVybiBjdXN0b21TdG9yZSgncmVhZG9ubHknLCAoc3RvcmUpID0+IHByb21pc2lmeVJlcXVlc3Qoc3RvcmUuZ2V0KGtleSkpKTtcbn1cbi8qKlxuICogU2V0IGEgdmFsdWUgd2l0aCBhIGtleS5cbiAqXG4gKiBAcGFyYW0ga2V5XG4gKiBAcGFyYW0gdmFsdWVcbiAqIEBwYXJhbSBjdXN0b21TdG9yZSBNZXRob2QgdG8gZ2V0IGEgY3VzdG9tIHN0b3JlLiBVc2Ugd2l0aCBjYXV0aW9uIChzZWUgdGhlIGRvY3MpLlxuICovXG5mdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSwgY3VzdG9tU3RvcmUgPSBkZWZhdWx0R2V0U3RvcmUoKSkge1xuICAgIHJldHVybiBjdXN0b21TdG9yZSgncmVhZHdyaXRlJywgKHN0b3JlKSA9PiB7XG4gICAgICAgIHN0b3JlLnB1dCh2YWx1ZSwga2V5KTtcbiAgICAgICAgcmV0dXJuIHByb21pc2lmeVJlcXVlc3Qoc3RvcmUudHJhbnNhY3Rpb24pO1xuICAgIH0pO1xufVxuLyoqXG4gKiBTZXQgbXVsdGlwbGUgdmFsdWVzIGF0IG9uY2UuIFRoaXMgaXMgZmFzdGVyIHRoYW4gY2FsbGluZyBzZXQoKSBtdWx0aXBsZSB0aW1lcy5cbiAqIEl0J3MgYWxzbyBhdG9taWMg4oCTIGlmIG9uZSBvZiB0aGUgcGFpcnMgY2FuJ3QgYmUgYWRkZWQsIG5vbmUgd2lsbCBiZSBhZGRlZC5cbiAqXG4gKiBAcGFyYW0gZW50cmllcyBBcnJheSBvZiBlbnRyaWVzLCB3aGVyZSBlYWNoIGVudHJ5IGlzIGFuIGFycmF5IG9mIGBba2V5LCB2YWx1ZV1gLlxuICogQHBhcmFtIGN1c3RvbVN0b3JlIE1ldGhvZCB0byBnZXQgYSBjdXN0b20gc3RvcmUuIFVzZSB3aXRoIGNhdXRpb24gKHNlZSB0aGUgZG9jcykuXG4gKi9cbmZ1bmN0aW9uIHNldE1hbnkoZW50cmllcywgY3VzdG9tU3RvcmUgPSBkZWZhdWx0R2V0U3RvcmUoKSkge1xuICAgIHJldHVybiBjdXN0b21TdG9yZSgncmVhZHdyaXRlJywgKHN0b3JlKSA9PiB7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHN0b3JlLnB1dChlbnRyeVsxXSwgZW50cnlbMF0pKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2lmeVJlcXVlc3Qoc3RvcmUudHJhbnNhY3Rpb24pO1xuICAgIH0pO1xufVxuLyoqXG4gKiBHZXQgbXVsdGlwbGUgdmFsdWVzIGJ5IHRoZWlyIGtleXNcbiAqXG4gKiBAcGFyYW0ga2V5c1xuICogQHBhcmFtIGN1c3RvbVN0b3JlIE1ldGhvZCB0byBnZXQgYSBjdXN0b20gc3RvcmUuIFVzZSB3aXRoIGNhdXRpb24gKHNlZSB0aGUgZG9jcykuXG4gKi9cbmZ1bmN0aW9uIGdldE1hbnkoa2V5cywgY3VzdG9tU3RvcmUgPSBkZWZhdWx0R2V0U3RvcmUoKSkge1xuICAgIHJldHVybiBjdXN0b21TdG9yZSgncmVhZG9ubHknLCAoc3RvcmUpID0+IFByb21pc2UuYWxsKGtleXMubWFwKChrZXkpID0+IHByb21pc2lmeVJlcXVlc3Qoc3RvcmUuZ2V0KGtleSkpKSkpO1xufVxuLyoqXG4gKiBVcGRhdGUgYSB2YWx1ZS4gVGhpcyBsZXRzIHlvdSBzZWUgdGhlIG9sZCB2YWx1ZSBhbmQgdXBkYXRlIGl0IGFzIGFuIGF0b21pYyBvcGVyYXRpb24uXG4gKlxuICogQHBhcmFtIGtleVxuICogQHBhcmFtIHVwZGF0ZXIgQSBjYWxsYmFjayB0aGF0IHRha2VzIHRoZSBvbGQgdmFsdWUgYW5kIHJldHVybnMgYSBuZXcgdmFsdWUuXG4gKiBAcGFyYW0gY3VzdG9tU3RvcmUgTWV0aG9kIHRvIGdldCBhIGN1c3RvbSBzdG9yZS4gVXNlIHdpdGggY2F1dGlvbiAoc2VlIHRoZSBkb2NzKS5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlKGtleSwgdXBkYXRlciwgY3VzdG9tU3RvcmUgPSBkZWZhdWx0R2V0U3RvcmUoKSkge1xuICAgIHJldHVybiBjdXN0b21TdG9yZSgncmVhZHdyaXRlJywgKHN0b3JlKSA9PiBcbiAgICAvLyBOZWVkIHRvIGNyZWF0ZSB0aGUgcHJvbWlzZSBtYW51YWxseS5cbiAgICAvLyBJZiBJIHRyeSB0byBjaGFpbiBwcm9taXNlcywgdGhlIHRyYW5zYWN0aW9uIGNsb3NlcyBpbiBicm93c2Vyc1xuICAgIC8vIHRoYXQgdXNlIGEgcHJvbWlzZSBwb2x5ZmlsbCAoSUUxMC8xMSkuXG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBzdG9yZS5nZXQoa2V5KS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHN0b3JlLnB1dCh1cGRhdGVyKHRoaXMucmVzdWx0KSwga2V5KTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHByb21pc2lmeVJlcXVlc3Qoc3RvcmUudHJhbnNhY3Rpb24pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9KSk7XG59XG4vKipcbiAqIERlbGV0ZSBhIHBhcnRpY3VsYXIga2V5IGZyb20gdGhlIHN0b3JlLlxuICpcbiAqIEBwYXJhbSBrZXlcbiAqIEBwYXJhbSBjdXN0b21TdG9yZSBNZXRob2QgdG8gZ2V0IGEgY3VzdG9tIHN0b3JlLiBVc2Ugd2l0aCBjYXV0aW9uIChzZWUgdGhlIGRvY3MpLlxuICovXG5mdW5jdGlvbiBkZWwoa2V5LCBjdXN0b21TdG9yZSA9IGRlZmF1bHRHZXRTdG9yZSgpKSB7XG4gICAgcmV0dXJuIGN1c3RvbVN0b3JlKCdyZWFkd3JpdGUnLCAoc3RvcmUpID0+IHtcbiAgICAgICAgc3RvcmUuZGVsZXRlKGtleSk7XG4gICAgICAgIHJldHVybiBwcm9taXNpZnlSZXF1ZXN0KHN0b3JlLnRyYW5zYWN0aW9uKTtcbiAgICB9KTtcbn1cbi8qKlxuICogRGVsZXRlIG11bHRpcGxlIGtleXMgYXQgb25jZS5cbiAqXG4gKiBAcGFyYW0ga2V5cyBMaXN0IG9mIGtleXMgdG8gZGVsZXRlLlxuICogQHBhcmFtIGN1c3RvbVN0b3JlIE1ldGhvZCB0byBnZXQgYSBjdXN0b20gc3RvcmUuIFVzZSB3aXRoIGNhdXRpb24gKHNlZSB0aGUgZG9jcykuXG4gKi9cbmZ1bmN0aW9uIGRlbE1hbnkoa2V5cywgY3VzdG9tU3RvcmUgPSBkZWZhdWx0R2V0U3RvcmUoKSkge1xuICAgIHJldHVybiBjdXN0b21TdG9yZSgncmVhZHdyaXRlJywgKHN0b3JlKSA9PiB7XG4gICAgICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiBzdG9yZS5kZWxldGUoa2V5KSk7XG4gICAgICAgIHJldHVybiBwcm9taXNpZnlSZXF1ZXN0KHN0b3JlLnRyYW5zYWN0aW9uKTtcbiAgICB9KTtcbn1cbi8qKlxuICogQ2xlYXIgYWxsIHZhbHVlcyBpbiB0aGUgc3RvcmUuXG4gKlxuICogQHBhcmFtIGN1c3RvbVN0b3JlIE1ldGhvZCB0byBnZXQgYSBjdXN0b20gc3RvcmUuIFVzZSB3aXRoIGNhdXRpb24gKHNlZSB0aGUgZG9jcykuXG4gKi9cbmZ1bmN0aW9uIGNsZWFyKGN1c3RvbVN0b3JlID0gZGVmYXVsdEdldFN0b3JlKCkpIHtcbiAgICByZXR1cm4gY3VzdG9tU3RvcmUoJ3JlYWR3cml0ZScsIChzdG9yZSkgPT4ge1xuICAgICAgICBzdG9yZS5jbGVhcigpO1xuICAgICAgICByZXR1cm4gcHJvbWlzaWZ5UmVxdWVzdChzdG9yZS50cmFuc2FjdGlvbik7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBlYWNoQ3Vyc29yKHN0b3JlLCBjYWxsYmFjaykge1xuICAgIHN0b3JlLm9wZW5DdXJzb3IoKS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5yZXN1bHQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNhbGxiYWNrKHRoaXMucmVzdWx0KTtcbiAgICAgICAgdGhpcy5yZXN1bHQuY29udGludWUoKTtcbiAgICB9O1xuICAgIHJldHVybiBwcm9taXNpZnlSZXF1ZXN0KHN0b3JlLnRyYW5zYWN0aW9uKTtcbn1cbi8qKlxuICogR2V0IGFsbCBrZXlzIGluIHRoZSBzdG9yZS5cbiAqXG4gKiBAcGFyYW0gY3VzdG9tU3RvcmUgTWV0aG9kIHRvIGdldCBhIGN1c3RvbSBzdG9yZS4gVXNlIHdpdGggY2F1dGlvbiAoc2VlIHRoZSBkb2NzKS5cbiAqL1xuZnVuY3Rpb24ga2V5cyhjdXN0b21TdG9yZSA9IGRlZmF1bHRHZXRTdG9yZSgpKSB7XG4gICAgcmV0dXJuIGN1c3RvbVN0b3JlKCdyZWFkb25seScsIChzdG9yZSkgPT4ge1xuICAgICAgICAvLyBGYXN0IHBhdGggZm9yIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpZiAoc3RvcmUuZ2V0QWxsS2V5cykge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2lmeVJlcXVlc3Qoc3RvcmUuZ2V0QWxsS2V5cygpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xuICAgICAgICByZXR1cm4gZWFjaEN1cnNvcihzdG9yZSwgKGN1cnNvcikgPT4gaXRlbXMucHVzaChjdXJzb3Iua2V5KSkudGhlbigoKSA9PiBpdGVtcyk7XG4gICAgfSk7XG59XG4vKipcbiAqIEdldCBhbGwgdmFsdWVzIGluIHRoZSBzdG9yZS5cbiAqXG4gKiBAcGFyYW0gY3VzdG9tU3RvcmUgTWV0aG9kIHRvIGdldCBhIGN1c3RvbSBzdG9yZS4gVXNlIHdpdGggY2F1dGlvbiAoc2VlIHRoZSBkb2NzKS5cbiAqL1xuZnVuY3Rpb24gdmFsdWVzKGN1c3RvbVN0b3JlID0gZGVmYXVsdEdldFN0b3JlKCkpIHtcbiAgICByZXR1cm4gY3VzdG9tU3RvcmUoJ3JlYWRvbmx5JywgKHN0b3JlKSA9PiB7XG4gICAgICAgIC8vIEZhc3QgcGF0aCBmb3IgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGlmIChzdG9yZS5nZXRBbGwpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNpZnlSZXF1ZXN0KHN0b3JlLmdldEFsbCgpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xuICAgICAgICByZXR1cm4gZWFjaEN1cnNvcihzdG9yZSwgKGN1cnNvcikgPT4gaXRlbXMucHVzaChjdXJzb3IudmFsdWUpKS50aGVuKCgpID0+IGl0ZW1zKTtcbiAgICB9KTtcbn1cbi8qKlxuICogR2V0IGFsbCBlbnRyaWVzIGluIHRoZSBzdG9yZS4gRWFjaCBlbnRyeSBpcyBhbiBhcnJheSBvZiBgW2tleSwgdmFsdWVdYC5cbiAqXG4gKiBAcGFyYW0gY3VzdG9tU3RvcmUgTWV0aG9kIHRvIGdldCBhIGN1c3RvbSBzdG9yZS4gVXNlIHdpdGggY2F1dGlvbiAoc2VlIHRoZSBkb2NzKS5cbiAqL1xuZnVuY3Rpb24gZW50cmllcyhjdXN0b21TdG9yZSA9IGRlZmF1bHRHZXRTdG9yZSgpKSB7XG4gICAgcmV0dXJuIGN1c3RvbVN0b3JlKCdyZWFkb25seScsIChzdG9yZSkgPT4ge1xuICAgICAgICAvLyBGYXN0IHBhdGggZm9yIG1vZGVybiBicm93c2Vyc1xuICAgICAgICAvLyAoYWx0aG91Z2gsIGhvcGVmdWxseSB3ZSdsbCBnZXQgYSBzaW1wbGVyIHBhdGggc29tZSBkYXkpXG4gICAgICAgIGlmIChzdG9yZS5nZXRBbGwgJiYgc3RvcmUuZ2V0QWxsS2V5cykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICBwcm9taXNpZnlSZXF1ZXN0KHN0b3JlLmdldEFsbEtleXMoKSksXG4gICAgICAgICAgICAgICAgcHJvbWlzaWZ5UmVxdWVzdChzdG9yZS5nZXRBbGwoKSksXG4gICAgICAgICAgICBdKS50aGVuKChba2V5cywgdmFsdWVzXSkgPT4ga2V5cy5tYXAoKGtleSwgaSkgPT4gW2tleSwgdmFsdWVzW2ldXSkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW107XG4gICAgICAgIHJldHVybiBjdXN0b21TdG9yZSgncmVhZG9ubHknLCAoc3RvcmUpID0+IGVhY2hDdXJzb3Ioc3RvcmUsIChjdXJzb3IpID0+IGl0ZW1zLnB1c2goW2N1cnNvci5rZXksIGN1cnNvci52YWx1ZV0pKS50aGVuKCgpID0+IGl0ZW1zKSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7IGNsZWFyLCBjcmVhdGVTdG9yZSwgZGVsLCBkZWxNYW55LCBlbnRyaWVzLCBnZXQsIGdldE1hbnksIGtleXMsIHByb21pc2lmeVJlcXVlc3QsIHNldCwgc2V0TWFueSwgdXBkYXRlLCB2YWx1ZXMgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJMThuQ29udGV4dCB9IGZyb20gJy4vY29udGV4dC5qcyc7XG5leHBvcnQgZnVuY3Rpb24gSTE4bmV4dFByb3ZpZGVyKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBpMThuLFxuICAgIGRlZmF1bHROUyxcbiAgICBjaGlsZHJlblxuICB9ID0gX3JlZjtcbiAgY29uc3QgdmFsdWUgPSB1c2VNZW1vKCgpID0+ICh7XG4gICAgaTE4bixcbiAgICBkZWZhdWx0TlNcbiAgfSksIFtpMThuLCBkZWZhdWx0TlNdKTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoSTE4bkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZVxuICB9LCBjaGlsZHJlbik7XG59IiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG5vZGVzVG9TdHJpbmcsIFRyYW5zIGFzIFRyYW5zV2l0aG91dENvbnRleHQgfSBmcm9tICcuL1RyYW5zV2l0aG91dENvbnRleHQuanMnO1xuaW1wb3J0IHsgZ2V0STE4biwgSTE4bkNvbnRleHQgfSBmcm9tICcuL2NvbnRleHQuanMnO1xuZXhwb3J0IHsgbm9kZXNUb1N0cmluZyB9O1xuZXhwb3J0IGZ1bmN0aW9uIFRyYW5zKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBjaGlsZHJlbixcbiAgICBjb3VudCxcbiAgICBwYXJlbnQsXG4gICAgaTE4bktleSxcbiAgICBjb250ZXh0LFxuICAgIHRPcHRpb25zID0ge30sXG4gICAgdmFsdWVzLFxuICAgIGRlZmF1bHRzLFxuICAgIGNvbXBvbmVudHMsXG4gICAgbnMsXG4gICAgaTE4bjogaTE4bkZyb21Qcm9wcyxcbiAgICB0OiB0RnJvbVByb3BzLFxuICAgIHNob3VsZFVuZXNjYXBlLFxuICAgIC4uLmFkZGl0aW9uYWxQcm9wc1xuICB9ID0gX3JlZjtcbiAgY29uc3Qge1xuICAgIGkxOG46IGkxOG5Gcm9tQ29udGV4dCxcbiAgICBkZWZhdWx0TlM6IGRlZmF1bHROU0Zyb21Db250ZXh0XG4gIH0gPSB1c2VDb250ZXh0KEkxOG5Db250ZXh0KSB8fCB7fTtcbiAgY29uc3QgaTE4biA9IGkxOG5Gcm9tUHJvcHMgfHwgaTE4bkZyb21Db250ZXh0IHx8IGdldEkxOG4oKTtcbiAgY29uc3QgdCA9IHRGcm9tUHJvcHMgfHwgaTE4biAmJiBpMThuLnQuYmluZChpMThuKTtcbiAgcmV0dXJuIFRyYW5zV2l0aG91dENvbnRleHQoe1xuICAgIGNoaWxkcmVuLFxuICAgIGNvdW50LFxuICAgIHBhcmVudCxcbiAgICBpMThuS2V5LFxuICAgIGNvbnRleHQsXG4gICAgdE9wdGlvbnMsXG4gICAgdmFsdWVzLFxuICAgIGRlZmF1bHRzLFxuICAgIGNvbXBvbmVudHMsXG4gICAgbnM6IG5zIHx8IHQgJiYgdC5ucyB8fCBkZWZhdWx0TlNGcm9tQ29udGV4dCB8fCBpMThuICYmIGkxOG4ub3B0aW9ucyAmJiBpMThuLm9wdGlvbnMuZGVmYXVsdE5TLFxuICAgIGkxOG4sXG4gICAgdDogdEZyb21Qcm9wcyxcbiAgICBzaG91bGRVbmVzY2FwZSxcbiAgICAuLi5hZGRpdGlvbmFsUHJvcHNcbiAgfSk7XG59IiwiaW1wb3J0IHsgRnJhZ21lbnQsIGlzVmFsaWRFbGVtZW50LCBjbG9uZUVsZW1lbnQsIGNyZWF0ZUVsZW1lbnQsIENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhUTUwgZnJvbSAnaHRtbC1wYXJzZS1zdHJpbmdpZnknO1xuaW1wb3J0IHsgaXNPYmplY3QsIGlzU3RyaW5nLCB3YXJuLCB3YXJuT25jZSB9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdHMgfSBmcm9tICcuL2RlZmF1bHRzLmpzJztcbmltcG9ydCB7IGdldEkxOG4gfSBmcm9tICcuL2kxOG5JbnN0YW5jZS5qcyc7XG5jb25zdCBoYXNDaGlsZHJlbiA9IChub2RlLCBjaGVja0xlbmd0aCkgPT4ge1xuICBpZiAoIW5vZGUpIHJldHVybiBmYWxzZTtcbiAgY29uc3QgYmFzZSA9IG5vZGUucHJvcHMgPyBub2RlLnByb3BzLmNoaWxkcmVuIDogbm9kZS5jaGlsZHJlbjtcbiAgaWYgKGNoZWNrTGVuZ3RoKSByZXR1cm4gYmFzZS5sZW5ndGggPiAwO1xuICByZXR1cm4gISFiYXNlO1xufTtcbmNvbnN0IGdldENoaWxkcmVuID0gbm9kZSA9PiB7XG4gIGlmICghbm9kZSkgcmV0dXJuIFtdO1xuICBjb25zdCBjaGlsZHJlbiA9IG5vZGUucHJvcHMgPyBub2RlLnByb3BzLmNoaWxkcmVuIDogbm9kZS5jaGlsZHJlbjtcbiAgcmV0dXJuIG5vZGUucHJvcHMgJiYgbm9kZS5wcm9wcy5pMThuSXNEeW5hbWljTGlzdCA/IGdldEFzQXJyYXkoY2hpbGRyZW4pIDogY2hpbGRyZW47XG59O1xuY29uc3QgaGFzVmFsaWRSZWFjdENoaWxkcmVuID0gY2hpbGRyZW4gPT4gQXJyYXkuaXNBcnJheShjaGlsZHJlbikgJiYgY2hpbGRyZW4uZXZlcnkoaXNWYWxpZEVsZW1lbnQpO1xuY29uc3QgZ2V0QXNBcnJheSA9IGRhdGEgPT4gQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEgOiBbZGF0YV07XG5jb25zdCBtZXJnZVByb3BzID0gKHNvdXJjZSwgdGFyZ2V0KSA9PiB7XG4gIGNvbnN0IG5ld1RhcmdldCA9IHtcbiAgICAuLi50YXJnZXRcbiAgfTtcbiAgbmV3VGFyZ2V0LnByb3BzID0gT2JqZWN0LmFzc2lnbihzb3VyY2UucHJvcHMsIHRhcmdldC5wcm9wcyk7XG4gIHJldHVybiBuZXdUYXJnZXQ7XG59O1xuZXhwb3J0IGNvbnN0IG5vZGVzVG9TdHJpbmcgPSAoY2hpbGRyZW4sIGkxOG5PcHRpb25zKSA9PiB7XG4gIGlmICghY2hpbGRyZW4pIHJldHVybiAnJztcbiAgbGV0IHN0cmluZ05vZGUgPSAnJztcbiAgY29uc3QgY2hpbGRyZW5BcnJheSA9IGdldEFzQXJyYXkoY2hpbGRyZW4pO1xuICBjb25zdCBrZWVwQXJyYXkgPSBpMThuT3B0aW9ucy50cmFuc1N1cHBvcnRCYXNpY0h0bWxOb2RlcyAmJiBpMThuT3B0aW9ucy50cmFuc0tlZXBCYXNpY0h0bWxOb2Rlc0ZvciA/IGkxOG5PcHRpb25zLnRyYW5zS2VlcEJhc2ljSHRtbE5vZGVzRm9yIDogW107XG4gIGNoaWxkcmVuQXJyYXkuZm9yRWFjaCgoY2hpbGQsIGNoaWxkSW5kZXgpID0+IHtcbiAgICBpZiAoaXNTdHJpbmcoY2hpbGQpKSB7XG4gICAgICBzdHJpbmdOb2RlICs9IGAke2NoaWxkfWA7XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIHR5cGVcbiAgICAgIH0gPSBjaGlsZDtcbiAgICAgIGNvbnN0IGNoaWxkUHJvcHNDb3VudCA9IE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGg7XG4gICAgICBjb25zdCBzaG91bGRLZWVwQ2hpbGQgPSBrZWVwQXJyYXkuaW5kZXhPZih0eXBlKSA+IC0xO1xuICAgICAgY29uc3QgY2hpbGRDaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuICAgICAgaWYgKCFjaGlsZENoaWxkcmVuICYmIHNob3VsZEtlZXBDaGlsZCAmJiAhY2hpbGRQcm9wc0NvdW50KSB7XG4gICAgICAgIHN0cmluZ05vZGUgKz0gYDwke3R5cGV9Lz5gO1xuICAgICAgfSBlbHNlIGlmICghY2hpbGRDaGlsZHJlbiAmJiAoIXNob3VsZEtlZXBDaGlsZCB8fCBjaGlsZFByb3BzQ291bnQpIHx8IHByb3BzLmkxOG5Jc0R5bmFtaWNMaXN0KSB7XG4gICAgICAgIHN0cmluZ05vZGUgKz0gYDwke2NoaWxkSW5kZXh9PjwvJHtjaGlsZEluZGV4fT5gO1xuICAgICAgfSBlbHNlIGlmIChzaG91bGRLZWVwQ2hpbGQgJiYgY2hpbGRQcm9wc0NvdW50ID09PSAxICYmIGlzU3RyaW5nKGNoaWxkQ2hpbGRyZW4pKSB7XG4gICAgICAgIHN0cmluZ05vZGUgKz0gYDwke3R5cGV9PiR7Y2hpbGRDaGlsZHJlbn08LyR7dHlwZX0+YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBub2Rlc1RvU3RyaW5nKGNoaWxkQ2hpbGRyZW4sIGkxOG5PcHRpb25zKTtcbiAgICAgICAgc3RyaW5nTm9kZSArPSBgPCR7Y2hpbGRJbmRleH0+JHtjb250ZW50fTwvJHtjaGlsZEluZGV4fT5gO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY2hpbGQgPT09IG51bGwpIHtcbiAgICAgIHdhcm4oYFRyYW5zOiB0aGUgcGFzc2VkIGluIHZhbHVlIGlzIGludmFsaWQgLSBzZWVtcyB5b3UgcGFzc2VkIGluIGEgbnVsbCBjaGlsZC5gKTtcbiAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KGNoaWxkKSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBmb3JtYXQsXG4gICAgICAgIC4uLmNsb25lXG4gICAgICB9ID0gY2hpbGQ7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY2xvbmUpO1xuICAgICAgaWYgKGtleXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZm9ybWF0ID8gYCR7a2V5c1swXX0sICR7Zm9ybWF0fWAgOiBrZXlzWzBdO1xuICAgICAgICBzdHJpbmdOb2RlICs9IGB7eyR7dmFsdWV9fX1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FybihgcmVhY3QtaTE4bmV4dDogdGhlIHBhc3NlZCBpbiBvYmplY3QgY29udGFpbmVkIG1vcmUgdGhhbiBvbmUgdmFyaWFibGUgLSB0aGUgb2JqZWN0IHNob3VsZCBsb29rIGxpa2Uge3sgdmFsdWUsIGZvcm1hdCB9fSB3aGVyZSBmb3JtYXQgaXMgb3B0aW9uYWwuYCwgY2hpbGQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB3YXJuKGBUcmFuczogdGhlIHBhc3NlZCBpbiB2YWx1ZSBpcyBpbnZhbGlkIC0gc2VlbXMgeW91IHBhc3NlZCBpbiBhIHZhcmlhYmxlIGxpa2Uge251bWJlcn0gLSBwbGVhc2UgcGFzcyBpbiB2YXJpYWJsZXMgZm9yIGludGVycG9sYXRpb24gYXMgZnVsbCBvYmplY3RzIGxpa2Uge3tudW1iZXJ9fS5gLCBjaGlsZCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHN0cmluZ05vZGU7XG59O1xuY29uc3QgcmVuZGVyTm9kZXMgPSAoY2hpbGRyZW4sIHRhcmdldFN0cmluZywgaTE4biwgaTE4bk9wdGlvbnMsIGNvbWJpbmVkVE9wdHMsIHNob3VsZFVuZXNjYXBlKSA9PiB7XG4gIGlmICh0YXJnZXRTdHJpbmcgPT09ICcnKSByZXR1cm4gW107XG4gIGNvbnN0IGtlZXBBcnJheSA9IGkxOG5PcHRpb25zLnRyYW5zS2VlcEJhc2ljSHRtbE5vZGVzRm9yIHx8IFtdO1xuICBjb25zdCBlbXB0eUNoaWxkcmVuQnV0TmVlZHNIYW5kbGluZyA9IHRhcmdldFN0cmluZyAmJiBuZXcgUmVnRXhwKGtlZXBBcnJheS5tYXAoa2VlcCA9PiBgPCR7a2VlcH1gKS5qb2luKCd8JykpLnRlc3QodGFyZ2V0U3RyaW5nKTtcbiAgaWYgKCFjaGlsZHJlbiAmJiAhZW1wdHlDaGlsZHJlbkJ1dE5lZWRzSGFuZGxpbmcgJiYgIXNob3VsZFVuZXNjYXBlKSByZXR1cm4gW3RhcmdldFN0cmluZ107XG4gIGNvbnN0IGRhdGEgPSB7fTtcbiAgY29uc3QgZ2V0RGF0YSA9IGNoaWxkcyA9PiB7XG4gICAgY29uc3QgY2hpbGRyZW5BcnJheSA9IGdldEFzQXJyYXkoY2hpbGRzKTtcbiAgICBjaGlsZHJlbkFycmF5LmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgaWYgKGlzU3RyaW5nKGNoaWxkKSkgcmV0dXJuO1xuICAgICAgaWYgKGhhc0NoaWxkcmVuKGNoaWxkKSkgZ2V0RGF0YShnZXRDaGlsZHJlbihjaGlsZCkpO2Vsc2UgaWYgKGlzT2JqZWN0KGNoaWxkKSAmJiAhaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSBPYmplY3QuYXNzaWduKGRhdGEsIGNoaWxkKTtcbiAgICB9KTtcbiAgfTtcbiAgZ2V0RGF0YShjaGlsZHJlbik7XG4gIGNvbnN0IGFzdCA9IEhUTUwucGFyc2UoYDwwPiR7dGFyZ2V0U3RyaW5nfTwvMD5gKTtcbiAgY29uc3Qgb3B0cyA9IHtcbiAgICAuLi5kYXRhLFxuICAgIC4uLmNvbWJpbmVkVE9wdHNcbiAgfTtcbiAgY29uc3QgcmVuZGVySW5uZXIgPSAoY2hpbGQsIG5vZGUsIHJvb3RSZWFjdE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZHMgPSBnZXRDaGlsZHJlbihjaGlsZCk7XG4gICAgY29uc3QgbWFwcGVkQ2hpbGRyZW4gPSBtYXBBU1QoY2hpbGRzLCBub2RlLmNoaWxkcmVuLCByb290UmVhY3ROb2RlKTtcbiAgICByZXR1cm4gaGFzVmFsaWRSZWFjdENoaWxkcmVuKGNoaWxkcykgJiYgbWFwcGVkQ2hpbGRyZW4ubGVuZ3RoID09PSAwIHx8IGNoaWxkLnByb3BzICYmIGNoaWxkLnByb3BzLmkxOG5Jc0R5bmFtaWNMaXN0ID8gY2hpbGRzIDogbWFwcGVkQ2hpbGRyZW47XG4gIH07XG4gIGNvbnN0IHB1c2hUcmFuc2xhdGVkSlNYID0gKGNoaWxkLCBpbm5lciwgbWVtLCBpLCBpc1ZvaWQpID0+IHtcbiAgICBpZiAoY2hpbGQuZHVtbXkpIHtcbiAgICAgIGNoaWxkLmNoaWxkcmVuID0gaW5uZXI7XG4gICAgICBtZW0ucHVzaChjbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAga2V5OiBpXG4gICAgICB9LCBpc1ZvaWQgPyB1bmRlZmluZWQgOiBpbm5lcikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZW0ucHVzaCguLi5DaGlsZHJlbi5tYXAoW2NoaWxkXSwgYyA9PiB7XG4gICAgICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgICAgIC4uLmMucHJvcHNcbiAgICAgICAgfTtcbiAgICAgICAgZGVsZXRlIHByb3BzLmkxOG5Jc0R5bmFtaWNMaXN0O1xuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChjLnR5cGUsIHtcbiAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgcmVmOiBjLnJlZlxuICAgICAgICB9LCBpc1ZvaWQgPyBudWxsIDogaW5uZXIpO1xuICAgICAgfSkpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgbWFwQVNUID0gKHJlYWN0Tm9kZSwgYXN0Tm9kZSwgcm9vdFJlYWN0Tm9kZSkgPT4ge1xuICAgIGNvbnN0IHJlYWN0Tm9kZXMgPSBnZXRBc0FycmF5KHJlYWN0Tm9kZSk7XG4gICAgY29uc3QgYXN0Tm9kZXMgPSBnZXRBc0FycmF5KGFzdE5vZGUpO1xuICAgIHJldHVybiBhc3ROb2Rlcy5yZWR1Y2UoKG1lbSwgbm9kZSwgaSkgPT4ge1xuICAgICAgY29uc3QgdHJhbnNsYXRpb25Db250ZW50ID0gbm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuWzBdICYmIG5vZGUuY2hpbGRyZW5bMF0uY29udGVudCAmJiBpMThuLnNlcnZpY2VzLmludGVycG9sYXRvci5pbnRlcnBvbGF0ZShub2RlLmNoaWxkcmVuWzBdLmNvbnRlbnQsIG9wdHMsIGkxOG4ubGFuZ3VhZ2UpO1xuICAgICAgaWYgKG5vZGUudHlwZSA9PT0gJ3RhZycpIHtcbiAgICAgICAgbGV0IHRtcCA9IHJlYWN0Tm9kZXNbcGFyc2VJbnQobm9kZS5uYW1lLCAxMCldO1xuICAgICAgICBpZiAocm9vdFJlYWN0Tm9kZS5sZW5ndGggPT09IDEgJiYgIXRtcCkgdG1wID0gcm9vdFJlYWN0Tm9kZVswXVtub2RlLm5hbWVdO1xuICAgICAgICBpZiAoIXRtcCkgdG1wID0ge307XG4gICAgICAgIGNvbnN0IGNoaWxkID0gT2JqZWN0LmtleXMobm9kZS5hdHRycykubGVuZ3RoICE9PSAwID8gbWVyZ2VQcm9wcyh7XG4gICAgICAgICAgcHJvcHM6IG5vZGUuYXR0cnNcbiAgICAgICAgfSwgdG1wKSA6IHRtcDtcbiAgICAgICAgY29uc3QgaXNFbGVtZW50ID0gaXNWYWxpZEVsZW1lbnQoY2hpbGQpO1xuICAgICAgICBjb25zdCBpc1ZhbGlkVHJhbnNsYXRpb25XaXRoQ2hpbGRyZW4gPSBpc0VsZW1lbnQgJiYgaGFzQ2hpbGRyZW4obm9kZSwgdHJ1ZSkgJiYgIW5vZGUudm9pZEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGlzRW1wdHlUcmFuc1dpdGhIVE1MID0gZW1wdHlDaGlsZHJlbkJ1dE5lZWRzSGFuZGxpbmcgJiYgaXNPYmplY3QoY2hpbGQpICYmIGNoaWxkLmR1bW15ICYmICFpc0VsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGlzS25vd25Db21wb25lbnQgPSBpc09iamVjdChjaGlsZHJlbikgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoY2hpbGRyZW4sIG5vZGUubmFtZSk7XG4gICAgICAgIGlmIChpc1N0cmluZyhjaGlsZCkpIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IGkxOG4uc2VydmljZXMuaW50ZXJwb2xhdG9yLmludGVycG9sYXRlKGNoaWxkLCBvcHRzLCBpMThuLmxhbmd1YWdlKTtcbiAgICAgICAgICBtZW0ucHVzaCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFzQ2hpbGRyZW4oY2hpbGQpIHx8IGlzVmFsaWRUcmFuc2xhdGlvbldpdGhDaGlsZHJlbikge1xuICAgICAgICAgIGNvbnN0IGlubmVyID0gcmVuZGVySW5uZXIoY2hpbGQsIG5vZGUsIHJvb3RSZWFjdE5vZGUpO1xuICAgICAgICAgIHB1c2hUcmFuc2xhdGVkSlNYKGNoaWxkLCBpbm5lciwgbWVtLCBpKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0VtcHR5VHJhbnNXaXRoSFRNTCkge1xuICAgICAgICAgIGNvbnN0IGlubmVyID0gbWFwQVNUKHJlYWN0Tm9kZXMsIG5vZGUuY2hpbGRyZW4sIHJvb3RSZWFjdE5vZGUpO1xuICAgICAgICAgIHB1c2hUcmFuc2xhdGVkSlNYKGNoaWxkLCBpbm5lciwgbWVtLCBpKTtcbiAgICAgICAgfSBlbHNlIGlmIChOdW1iZXIuaXNOYU4ocGFyc2VGbG9hdChub2RlLm5hbWUpKSkge1xuICAgICAgICAgIGlmIChpc0tub3duQ29tcG9uZW50KSB7XG4gICAgICAgICAgICBjb25zdCBpbm5lciA9IHJlbmRlcklubmVyKGNoaWxkLCBub2RlLCByb290UmVhY3ROb2RlKTtcbiAgICAgICAgICAgIHB1c2hUcmFuc2xhdGVkSlNYKGNoaWxkLCBpbm5lciwgbWVtLCBpLCBub2RlLnZvaWRFbGVtZW50KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGkxOG5PcHRpb25zLnRyYW5zU3VwcG9ydEJhc2ljSHRtbE5vZGVzICYmIGtlZXBBcnJheS5pbmRleE9mKG5vZGUubmFtZSkgPiAtMSkge1xuICAgICAgICAgICAgaWYgKG5vZGUudm9pZEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgbWVtLnB1c2goY3JlYXRlRWxlbWVudChub2RlLm5hbWUsIHtcbiAgICAgICAgICAgICAgICBrZXk6IGAke25vZGUubmFtZX0tJHtpfWBcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgaW5uZXIgPSBtYXBBU1QocmVhY3ROb2Rlcywgbm9kZS5jaGlsZHJlbiwgcm9vdFJlYWN0Tm9kZSk7XG4gICAgICAgICAgICAgIG1lbS5wdXNoKGNyZWF0ZUVsZW1lbnQobm9kZS5uYW1lLCB7XG4gICAgICAgICAgICAgICAga2V5OiBgJHtub2RlLm5hbWV9LSR7aX1gXG4gICAgICAgICAgICAgIH0sIGlubmVyKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChub2RlLnZvaWRFbGVtZW50KSB7XG4gICAgICAgICAgICBtZW0ucHVzaChgPCR7bm9kZS5uYW1lfSAvPmApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpbm5lciA9IG1hcEFTVChyZWFjdE5vZGVzLCBub2RlLmNoaWxkcmVuLCByb290UmVhY3ROb2RlKTtcbiAgICAgICAgICAgIG1lbS5wdXNoKGA8JHtub2RlLm5hbWV9PiR7aW5uZXJ9PC8ke25vZGUubmFtZX0+YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KGNoaWxkKSAmJiAhaXNFbGVtZW50KSB7XG4gICAgICAgICAgY29uc3QgY29udGVudCA9IG5vZGUuY2hpbGRyZW5bMF0gPyB0cmFuc2xhdGlvbkNvbnRlbnQgOiBudWxsO1xuICAgICAgICAgIGlmIChjb250ZW50KSBtZW0ucHVzaChjb250ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwdXNoVHJhbnNsYXRlZEpTWChjaGlsZCwgdHJhbnNsYXRpb25Db250ZW50LCBtZW0sIGksIG5vZGUuY2hpbGRyZW4ubGVuZ3RoICE9PSAxIHx8ICF0cmFuc2xhdGlvbkNvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5vZGUudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgIGNvbnN0IHdyYXBUZXh0Tm9kZXMgPSBpMThuT3B0aW9ucy50cmFuc1dyYXBUZXh0Tm9kZXM7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBzaG91bGRVbmVzY2FwZSA/IGkxOG5PcHRpb25zLnVuZXNjYXBlKGkxOG4uc2VydmljZXMuaW50ZXJwb2xhdG9yLmludGVycG9sYXRlKG5vZGUuY29udGVudCwgb3B0cywgaTE4bi5sYW5ndWFnZSkpIDogaTE4bi5zZXJ2aWNlcy5pbnRlcnBvbGF0b3IuaW50ZXJwb2xhdGUobm9kZS5jb250ZW50LCBvcHRzLCBpMThuLmxhbmd1YWdlKTtcbiAgICAgICAgaWYgKHdyYXBUZXh0Tm9kZXMpIHtcbiAgICAgICAgICBtZW0ucHVzaChjcmVhdGVFbGVtZW50KHdyYXBUZXh0Tm9kZXMsIHtcbiAgICAgICAgICAgIGtleTogYCR7bm9kZS5uYW1lfS0ke2l9YFxuICAgICAgICAgIH0sIGNvbnRlbnQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZW0ucHVzaChjb250ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG1lbTtcbiAgICB9LCBbXSk7XG4gIH07XG4gIGNvbnN0IHJlc3VsdCA9IG1hcEFTVChbe1xuICAgIGR1bW15OiB0cnVlLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlbiB8fCBbXVxuICB9XSwgYXN0LCBnZXRBc0FycmF5KGNoaWxkcmVuIHx8IFtdKSk7XG4gIHJldHVybiBnZXRDaGlsZHJlbihyZXN1bHRbMF0pO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBUcmFucyhfcmVmKSB7XG4gIGxldCB7XG4gICAgY2hpbGRyZW4sXG4gICAgY291bnQsXG4gICAgcGFyZW50LFxuICAgIGkxOG5LZXksXG4gICAgY29udGV4dCxcbiAgICB0T3B0aW9ucyA9IHt9LFxuICAgIHZhbHVlcyxcbiAgICBkZWZhdWx0cyxcbiAgICBjb21wb25lbnRzLFxuICAgIG5zLFxuICAgIGkxOG46IGkxOG5Gcm9tUHJvcHMsXG4gICAgdDogdEZyb21Qcm9wcyxcbiAgICBzaG91bGRVbmVzY2FwZSxcbiAgICAuLi5hZGRpdGlvbmFsUHJvcHNcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IGkxOG4gPSBpMThuRnJvbVByb3BzIHx8IGdldEkxOG4oKTtcbiAgaWYgKCFpMThuKSB7XG4gICAgd2Fybk9uY2UoJ1lvdSB3aWxsIG5lZWQgdG8gcGFzcyBpbiBhbiBpMThuZXh0IGluc3RhbmNlIGJ5IHVzaW5nIGkxOG5leHRSZWFjdE1vZHVsZScpO1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuICBjb25zdCB0ID0gdEZyb21Qcm9wcyB8fCBpMThuLnQuYmluZChpMThuKSB8fCAoayA9PiBrKTtcbiAgY29uc3QgcmVhY3RJMThuZXh0T3B0aW9ucyA9IHtcbiAgICAuLi5nZXREZWZhdWx0cygpLFxuICAgIC4uLihpMThuLm9wdGlvbnMgJiYgaTE4bi5vcHRpb25zLnJlYWN0KVxuICB9O1xuICBsZXQgbmFtZXNwYWNlcyA9IG5zIHx8IHQubnMgfHwgaTE4bi5vcHRpb25zICYmIGkxOG4ub3B0aW9ucy5kZWZhdWx0TlM7XG4gIG5hbWVzcGFjZXMgPSBpc1N0cmluZyhuYW1lc3BhY2VzKSA/IFtuYW1lc3BhY2VzXSA6IG5hbWVzcGFjZXMgfHwgWyd0cmFuc2xhdGlvbiddO1xuICBjb25zdCBub2RlQXNTdHJpbmcgPSBub2Rlc1RvU3RyaW5nKGNoaWxkcmVuLCByZWFjdEkxOG5leHRPcHRpb25zKTtcbiAgY29uc3QgZGVmYXVsdFZhbHVlID0gZGVmYXVsdHMgfHwgbm9kZUFzU3RyaW5nIHx8IHJlYWN0STE4bmV4dE9wdGlvbnMudHJhbnNFbXB0eU5vZGVWYWx1ZSB8fCBpMThuS2V5O1xuICBjb25zdCB7XG4gICAgaGFzaFRyYW5zS2V5XG4gIH0gPSByZWFjdEkxOG5leHRPcHRpb25zO1xuICBjb25zdCBrZXkgPSBpMThuS2V5IHx8IChoYXNoVHJhbnNLZXkgPyBoYXNoVHJhbnNLZXkobm9kZUFzU3RyaW5nIHx8IGRlZmF1bHRWYWx1ZSkgOiBub2RlQXNTdHJpbmcgfHwgZGVmYXVsdFZhbHVlKTtcbiAgaWYgKGkxOG4ub3B0aW9ucyAmJiBpMThuLm9wdGlvbnMuaW50ZXJwb2xhdGlvbiAmJiBpMThuLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5kZWZhdWx0VmFyaWFibGVzKSB7XG4gICAgdmFsdWVzID0gdmFsdWVzICYmIE9iamVjdC5rZXlzKHZhbHVlcykubGVuZ3RoID4gMCA/IHtcbiAgICAgIC4uLnZhbHVlcyxcbiAgICAgIC4uLmkxOG4ub3B0aW9ucy5pbnRlcnBvbGF0aW9uLmRlZmF1bHRWYXJpYWJsZXNcbiAgICB9IDoge1xuICAgICAgLi4uaTE4bi5vcHRpb25zLmludGVycG9sYXRpb24uZGVmYXVsdFZhcmlhYmxlc1xuICAgIH07XG4gIH1cbiAgY29uc3QgaW50ZXJwb2xhdGlvbk92ZXJyaWRlID0gdmFsdWVzIHx8IGNvdW50ICE9PSB1bmRlZmluZWQgfHwgIWNoaWxkcmVuID8gdE9wdGlvbnMuaW50ZXJwb2xhdGlvbiA6IHtcbiAgICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgICAuLi50T3B0aW9ucy5pbnRlcnBvbGF0aW9uLFxuICAgICAgcHJlZml4OiAnIyQ/JyxcbiAgICAgIHN1ZmZpeDogJz8kIydcbiAgICB9XG4gIH07XG4gIGNvbnN0IGNvbWJpbmVkVE9wdHMgPSB7XG4gICAgLi4udE9wdGlvbnMsXG4gICAgY29udGV4dDogY29udGV4dCB8fCB0T3B0aW9ucy5jb250ZXh0LFxuICAgIGNvdW50LFxuICAgIC4uLnZhbHVlcyxcbiAgICAuLi5pbnRlcnBvbGF0aW9uT3ZlcnJpZGUsXG4gICAgZGVmYXVsdFZhbHVlLFxuICAgIG5zOiBuYW1lc3BhY2VzXG4gIH07XG4gIGNvbnN0IHRyYW5zbGF0aW9uID0ga2V5ID8gdChrZXksIGNvbWJpbmVkVE9wdHMpIDogZGVmYXVsdFZhbHVlO1xuICBpZiAoY29tcG9uZW50cykge1xuICAgIE9iamVjdC5rZXlzKGNvbXBvbmVudHMpLmZvckVhY2goYyA9PiB7XG4gICAgICBjb25zdCBjb21wID0gY29tcG9uZW50c1tjXTtcbiAgICAgIGlmICh0eXBlb2YgY29tcC50eXBlID09PSAnZnVuY3Rpb24nIHx8ICFjb21wLnByb3BzIHx8ICFjb21wLnByb3BzLmNoaWxkcmVuIHx8IHRyYW5zbGF0aW9uLmluZGV4T2YoYCR7Y30vPmApIDwgMCAmJiB0cmFuc2xhdGlvbi5pbmRleE9mKGAke2N9IC8+YCkgPCAwKSByZXR1cm47XG4gICAgICBmdW5jdGlvbiBDb21wb25lbnRpemVkKCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgY29tcCk7XG4gICAgICB9XG4gICAgICBjb21wb25lbnRzW2NdID0gY3JlYXRlRWxlbWVudChDb21wb25lbnRpemVkKTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCBjb250ZW50ID0gcmVuZGVyTm9kZXMoY29tcG9uZW50cyB8fCBjaGlsZHJlbiwgdHJhbnNsYXRpb24sIGkxOG4sIHJlYWN0STE4bmV4dE9wdGlvbnMsIGNvbWJpbmVkVE9wdHMsIHNob3VsZFVuZXNjYXBlKTtcbiAgY29uc3QgdXNlQXNQYXJlbnQgPSBwYXJlbnQgIT09IHVuZGVmaW5lZCA/IHBhcmVudCA6IHJlYWN0STE4bmV4dE9wdGlvbnMuZGVmYXVsdFRyYW5zUGFyZW50O1xuICByZXR1cm4gdXNlQXNQYXJlbnQgPyBjcmVhdGVFbGVtZW50KHVzZUFzUGFyZW50LCBhZGRpdGlvbmFsUHJvcHMsIGNvbnRlbnQpIDogY29udGVudDtcbn0iLCJpbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4vdXNlVHJhbnNsYXRpb24uanMnO1xuZXhwb3J0IGZ1bmN0aW9uIFRyYW5zbGF0aW9uKHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBucyxcbiAgICBjaGlsZHJlbixcbiAgICAuLi5vcHRpb25zXG4gIH0gPSBwcm9wcztcbiAgY29uc3QgW3QsIGkxOG4sIHJlYWR5XSA9IHVzZVRyYW5zbGF0aW9uKG5zLCBvcHRpb25zKTtcbiAgcmV0dXJuIGNoaWxkcmVuKHQsIHtcbiAgICBpMThuLFxuICAgIGxuZzogaTE4bi5sYW5ndWFnZVxuICB9LCByZWFkeSk7XG59IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldERlZmF1bHRzLCBzZXREZWZhdWx0cyB9IGZyb20gJy4vZGVmYXVsdHMuanMnO1xuaW1wb3J0IHsgZ2V0STE4biwgc2V0STE4biB9IGZyb20gJy4vaTE4bkluc3RhbmNlLmpzJztcbmltcG9ydCB7IGluaXRSZWFjdEkxOG5leHQgfSBmcm9tICcuL2luaXRSZWFjdEkxOG5leHQuanMnO1xuZXhwb3J0IHsgZ2V0RGVmYXVsdHMsIHNldERlZmF1bHRzLCBnZXRJMThuLCBzZXRJMThuLCBpbml0UmVhY3RJMThuZXh0IH07XG5leHBvcnQgY29uc3QgSTE4bkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5leHBvcnQgY2xhc3MgUmVwb3J0TmFtZXNwYWNlcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudXNlZE5hbWVzcGFjZXMgPSB7fTtcbiAgfVxuICBhZGRVc2VkTmFtZXNwYWNlcyhuYW1lc3BhY2VzKSB7XG4gICAgbmFtZXNwYWNlcy5mb3JFYWNoKG5zID0+IHtcbiAgICAgIGlmICghdGhpcy51c2VkTmFtZXNwYWNlc1tuc10pIHRoaXMudXNlZE5hbWVzcGFjZXNbbnNdID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuICBnZXRVc2VkTmFtZXNwYWNlcyA9ICgpID0+IE9iamVjdC5rZXlzKHRoaXMudXNlZE5hbWVzcGFjZXMpO1xufVxuZXhwb3J0IGNvbnN0IGNvbXBvc2VJbml0aWFsUHJvcHMgPSBGb3JDb21wb25lbnQgPT4gYXN5bmMgY3R4ID0+IHtcbiAgY29uc3QgY29tcG9uZW50c0luaXRpYWxQcm9wcyA9IEZvckNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgPyBhd2FpdCBGb3JDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCkgOiB7fTtcbiAgY29uc3QgaTE4bkluaXRpYWxQcm9wcyA9IGdldEluaXRpYWxQcm9wcygpO1xuICByZXR1cm4ge1xuICAgIC4uLmNvbXBvbmVudHNJbml0aWFsUHJvcHMsXG4gICAgLi4uaTE4bkluaXRpYWxQcm9wc1xuICB9O1xufTtcbmV4cG9ydCBjb25zdCBnZXRJbml0aWFsUHJvcHMgPSAoKSA9PiB7XG4gIGNvbnN0IGkxOG4gPSBnZXRJMThuKCk7XG4gIGNvbnN0IG5hbWVzcGFjZXMgPSBpMThuLnJlcG9ydE5hbWVzcGFjZXMgPyBpMThuLnJlcG9ydE5hbWVzcGFjZXMuZ2V0VXNlZE5hbWVzcGFjZXMoKSA6IFtdO1xuICBjb25zdCByZXQgPSB7fTtcbiAgY29uc3QgaW5pdGlhbEkxOG5TdG9yZSA9IHt9O1xuICBpMThuLmxhbmd1YWdlcy5mb3JFYWNoKGwgPT4ge1xuICAgIGluaXRpYWxJMThuU3RvcmVbbF0gPSB7fTtcbiAgICBuYW1lc3BhY2VzLmZvckVhY2gobnMgPT4ge1xuICAgICAgaW5pdGlhbEkxOG5TdG9yZVtsXVtuc10gPSBpMThuLmdldFJlc291cmNlQnVuZGxlKGwsIG5zKSB8fCB7fTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldC5pbml0aWFsSTE4blN0b3JlID0gaW5pdGlhbEkxOG5TdG9yZTtcbiAgcmV0LmluaXRpYWxMYW5ndWFnZSA9IGkxOG4ubGFuZ3VhZ2U7XG4gIHJldHVybiByZXQ7XG59OyIsImltcG9ydCB7IHVuZXNjYXBlIH0gZnJvbSAnLi91bmVzY2FwZS5qcyc7XG5sZXQgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGJpbmRJMThuOiAnbGFuZ3VhZ2VDaGFuZ2VkJyxcbiAgYmluZEkxOG5TdG9yZTogJycsXG4gIHRyYW5zRW1wdHlOb2RlVmFsdWU6ICcnLFxuICB0cmFuc1N1cHBvcnRCYXNpY0h0bWxOb2RlczogdHJ1ZSxcbiAgdHJhbnNXcmFwVGV4dE5vZGVzOiAnJyxcbiAgdHJhbnNLZWVwQmFzaWNIdG1sTm9kZXNGb3I6IFsnYnInLCAnc3Ryb25nJywgJ2knLCAncCddLFxuICB1c2VTdXNwZW5zZTogdHJ1ZSxcbiAgdW5lc2NhcGVcbn07XG5leHBvcnQgY29uc3Qgc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgLi4uZGVmYXVsdE9wdGlvbnMsXG4gICAgLi4ub3B0aW9uc1xuICB9O1xufTtcbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0cyA9ICgpID0+IGRlZmF1bHRPcHRpb25zOyIsImxldCBpMThuSW5zdGFuY2U7XG5leHBvcnQgY29uc3Qgc2V0STE4biA9IGluc3RhbmNlID0+IHtcbiAgaTE4bkluc3RhbmNlID0gaW5zdGFuY2U7XG59O1xuZXhwb3J0IGNvbnN0IGdldEkxOG4gPSAoKSA9PiBpMThuSW5zdGFuY2U7IiwiZXhwb3J0IHsgVHJhbnMgfSBmcm9tICcuL1RyYW5zLmpzJztcbmV4cG9ydCB7IFRyYW5zIGFzIFRyYW5zV2l0aG91dENvbnRleHQgfSBmcm9tICcuL1RyYW5zV2l0aG91dENvbnRleHQuanMnO1xuZXhwb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuL3VzZVRyYW5zbGF0aW9uLmpzJztcbmV4cG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4vd2l0aFRyYW5zbGF0aW9uLmpzJztcbmV4cG9ydCB7IFRyYW5zbGF0aW9uIH0gZnJvbSAnLi9UcmFuc2xhdGlvbi5qcyc7XG5leHBvcnQgeyBJMThuZXh0UHJvdmlkZXIgfSBmcm9tICcuL0kxOG5leHRQcm92aWRlci5qcyc7XG5leHBvcnQgeyB3aXRoU1NSIH0gZnJvbSAnLi93aXRoU1NSLmpzJztcbmV4cG9ydCB7IHVzZVNTUiB9IGZyb20gJy4vdXNlU1NSLmpzJztcbmV4cG9ydCB7IGluaXRSZWFjdEkxOG5leHQgfSBmcm9tICcuL2luaXRSZWFjdEkxOG5leHQuanMnO1xuZXhwb3J0IHsgc2V0RGVmYXVsdHMsIGdldERlZmF1bHRzIH0gZnJvbSAnLi9kZWZhdWx0cy5qcyc7XG5leHBvcnQgeyBzZXRJMThuLCBnZXRJMThuIH0gZnJvbSAnLi9pMThuSW5zdGFuY2UuanMnO1xuZXhwb3J0IHsgSTE4bkNvbnRleHQsIGNvbXBvc2VJbml0aWFsUHJvcHMsIGdldEluaXRpYWxQcm9wcyB9IGZyb20gJy4vY29udGV4dC5qcyc7XG5leHBvcnQgY29uc3QgZGF0ZSA9ICgpID0+ICcnO1xuZXhwb3J0IGNvbnN0IHRpbWUgPSAoKSA9PiAnJztcbmV4cG9ydCBjb25zdCBudW1iZXIgPSAoKSA9PiAnJztcbmV4cG9ydCBjb25zdCBzZWxlY3QgPSAoKSA9PiAnJztcbmV4cG9ydCBjb25zdCBwbHVyYWwgPSAoKSA9PiAnJztcbmV4cG9ydCBjb25zdCBzZWxlY3RPcmRpbmFsID0gKCkgPT4gJyc7IiwiaW1wb3J0IHsgc2V0RGVmYXVsdHMgfSBmcm9tICcuL2RlZmF1bHRzLmpzJztcbmltcG9ydCB7IHNldEkxOG4gfSBmcm9tICcuL2kxOG5JbnN0YW5jZS5qcyc7XG5leHBvcnQgY29uc3QgaW5pdFJlYWN0STE4bmV4dCA9IHtcbiAgdHlwZTogJzNyZFBhcnR5JyxcbiAgaW5pdChpbnN0YW5jZSkge1xuICAgIHNldERlZmF1bHRzKGluc3RhbmNlLm9wdGlvbnMucmVhY3QpO1xuICAgIHNldEkxOG4oaW5zdGFuY2UpO1xuICB9XG59OyIsImNvbnN0IG1hdGNoSHRtbEVudGl0eSA9IC8mKD86YW1wfCMzOHxsdHwjNjB8Z3R8IzYyfGFwb3N8IzM5fHF1b3R8IzM0fG5ic3B8IzE2MHxjb3B5fCMxNjl8cmVnfCMxNzR8aGVsbGlwfCM4MjMwfCN4MkZ8IzQ3KTsvZztcbmNvbnN0IGh0bWxFbnRpdGllcyA9IHtcbiAgJyZhbXA7JzogJyYnLFxuICAnJiMzODsnOiAnJicsXG4gICcmbHQ7JzogJzwnLFxuICAnJiM2MDsnOiAnPCcsXG4gICcmZ3Q7JzogJz4nLFxuICAnJiM2MjsnOiAnPicsXG4gICcmYXBvczsnOiBcIidcIixcbiAgJyYjMzk7JzogXCInXCIsXG4gICcmcXVvdDsnOiAnXCInLFxuICAnJiMzNDsnOiAnXCInLFxuICAnJm5ic3A7JzogJyAnLFxuICAnJiMxNjA7JzogJyAnLFxuICAnJmNvcHk7JzogJ8KpJyxcbiAgJyYjMTY5Oyc6ICfCqScsXG4gICcmcmVnOyc6ICfCricsXG4gICcmIzE3NDsnOiAnwq4nLFxuICAnJmhlbGxpcDsnOiAn4oCmJyxcbiAgJyYjODIzMDsnOiAn4oCmJyxcbiAgJyYjeDJGOyc6ICcvJyxcbiAgJyYjNDc7JzogJy8nXG59O1xuY29uc3QgdW5lc2NhcGVIdG1sRW50aXR5ID0gbSA9PiBodG1sRW50aXRpZXNbbV07XG5leHBvcnQgY29uc3QgdW5lc2NhcGUgPSB0ZXh0ID0+IHRleHQucmVwbGFjZShtYXRjaEh0bWxFbnRpdHksIHVuZXNjYXBlSHRtbEVudGl0eSk7IiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldEkxOG4sIEkxOG5Db250ZXh0IH0gZnJvbSAnLi9jb250ZXh0LmpzJztcbmV4cG9ydCBjb25zdCB1c2VTU1IgPSBmdW5jdGlvbiAoaW5pdGlhbEkxOG5TdG9yZSwgaW5pdGlhbExhbmd1YWdlKSB7XG4gIGxldCBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gIGNvbnN0IHtcbiAgICBpMThuOiBpMThuRnJvbVByb3BzXG4gIH0gPSBwcm9wcztcbiAgY29uc3Qge1xuICAgIGkxOG46IGkxOG5Gcm9tQ29udGV4dFxuICB9ID0gdXNlQ29udGV4dChJMThuQ29udGV4dCkgfHwge307XG4gIGNvbnN0IGkxOG4gPSBpMThuRnJvbVByb3BzIHx8IGkxOG5Gcm9tQ29udGV4dCB8fCBnZXRJMThuKCk7XG4gIGlmIChpMThuLm9wdGlvbnMgJiYgaTE4bi5vcHRpb25zLmlzQ2xvbmUpIHJldHVybjtcbiAgaWYgKGluaXRpYWxJMThuU3RvcmUgJiYgIWkxOG4uaW5pdGlhbGl6ZWRTdG9yZU9uY2UpIHtcbiAgICBpMThuLnNlcnZpY2VzLnJlc291cmNlU3RvcmUuZGF0YSA9IGluaXRpYWxJMThuU3RvcmU7XG4gICAgaTE4bi5vcHRpb25zLm5zID0gT2JqZWN0LnZhbHVlcyhpbml0aWFsSTE4blN0b3JlKS5yZWR1Y2UoKG1lbSwgbG5nUmVzb3VyY2VzKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhsbmdSZXNvdXJjZXMpLmZvckVhY2gobnMgPT4ge1xuICAgICAgICBpZiAobWVtLmluZGV4T2YobnMpIDwgMCkgbWVtLnB1c2gobnMpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbWVtO1xuICAgIH0sIGkxOG4ub3B0aW9ucy5ucyk7XG4gICAgaTE4bi5pbml0aWFsaXplZFN0b3JlT25jZSA9IHRydWU7XG4gICAgaTE4bi5pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxuICBpZiAoaW5pdGlhbExhbmd1YWdlICYmICFpMThuLmluaXRpYWxpemVkTGFuZ3VhZ2VPbmNlKSB7XG4gICAgaTE4bi5jaGFuZ2VMYW5ndWFnZShpbml0aWFsTGFuZ3VhZ2UpO1xuICAgIGkxOG4uaW5pdGlhbGl6ZWRMYW5ndWFnZU9uY2UgPSB0cnVlO1xuICB9XG59OyIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRJMThuLCBnZXREZWZhdWx0cywgUmVwb3J0TmFtZXNwYWNlcywgSTE4bkNvbnRleHQgfSBmcm9tICcuL2NvbnRleHQuanMnO1xuaW1wb3J0IHsgd2Fybk9uY2UsIGxvYWROYW1lc3BhY2VzLCBsb2FkTGFuZ3VhZ2VzLCBoYXNMb2FkZWROYW1lc3BhY2UsIGlzU3RyaW5nLCBpc09iamVjdCB9IGZyb20gJy4vdXRpbHMuanMnO1xuY29uc3QgdXNlUHJldmlvdXMgPSAodmFsdWUsIGlnbm9yZSkgPT4ge1xuICBjb25zdCByZWYgPSB1c2VSZWYoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZWYuY3VycmVudCA9IGlnbm9yZSA/IHJlZi5jdXJyZW50IDogdmFsdWU7XG4gIH0sIFt2YWx1ZSwgaWdub3JlXSk7XG4gIHJldHVybiByZWYuY3VycmVudDtcbn07XG5jb25zdCBhbHdheXNOZXdUID0gKGkxOG4sIGxhbmd1YWdlLCBuYW1lc3BhY2UsIGtleVByZWZpeCkgPT4gaTE4bi5nZXRGaXhlZFQobGFuZ3VhZ2UsIG5hbWVzcGFjZSwga2V5UHJlZml4KTtcbmNvbnN0IHVzZU1lbW9pemVkVCA9IChpMThuLCBsYW5ndWFnZSwgbmFtZXNwYWNlLCBrZXlQcmVmaXgpID0+IHVzZUNhbGxiYWNrKGFsd2F5c05ld1QoaTE4biwgbGFuZ3VhZ2UsIG5hbWVzcGFjZSwga2V5UHJlZml4KSwgW2kxOG4sIGxhbmd1YWdlLCBuYW1lc3BhY2UsIGtleVByZWZpeF0pO1xuZXhwb3J0IGNvbnN0IHVzZVRyYW5zbGF0aW9uID0gZnVuY3Rpb24gKG5zKSB7XG4gIGxldCBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIGNvbnN0IHtcbiAgICBpMThuOiBpMThuRnJvbVByb3BzXG4gIH0gPSBwcm9wcztcbiAgY29uc3Qge1xuICAgIGkxOG46IGkxOG5Gcm9tQ29udGV4dCxcbiAgICBkZWZhdWx0TlM6IGRlZmF1bHROU0Zyb21Db250ZXh0XG4gIH0gPSB1c2VDb250ZXh0KEkxOG5Db250ZXh0KSB8fCB7fTtcbiAgY29uc3QgaTE4biA9IGkxOG5Gcm9tUHJvcHMgfHwgaTE4bkZyb21Db250ZXh0IHx8IGdldEkxOG4oKTtcbiAgaWYgKGkxOG4gJiYgIWkxOG4ucmVwb3J0TmFtZXNwYWNlcykgaTE4bi5yZXBvcnROYW1lc3BhY2VzID0gbmV3IFJlcG9ydE5hbWVzcGFjZXMoKTtcbiAgaWYgKCFpMThuKSB7XG4gICAgd2Fybk9uY2UoJ1lvdSB3aWxsIG5lZWQgdG8gcGFzcyBpbiBhbiBpMThuZXh0IGluc3RhbmNlIGJ5IHVzaW5nIGluaXRSZWFjdEkxOG5leHQnKTtcbiAgICBjb25zdCBub3RSZWFkeVQgPSAoaywgb3B0c09yRGVmYXVsdFZhbHVlKSA9PiB7XG4gICAgICBpZiAoaXNTdHJpbmcob3B0c09yRGVmYXVsdFZhbHVlKSkgcmV0dXJuIG9wdHNPckRlZmF1bHRWYWx1ZTtcbiAgICAgIGlmIChpc09iamVjdChvcHRzT3JEZWZhdWx0VmFsdWUpICYmIGlzU3RyaW5nKG9wdHNPckRlZmF1bHRWYWx1ZS5kZWZhdWx0VmFsdWUpKSByZXR1cm4gb3B0c09yRGVmYXVsdFZhbHVlLmRlZmF1bHRWYWx1ZTtcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGspID8ga1trLmxlbmd0aCAtIDFdIDogaztcbiAgICB9O1xuICAgIGNvbnN0IHJldE5vdFJlYWR5ID0gW25vdFJlYWR5VCwge30sIGZhbHNlXTtcbiAgICByZXROb3RSZWFkeS50ID0gbm90UmVhZHlUO1xuICAgIHJldE5vdFJlYWR5LmkxOG4gPSB7fTtcbiAgICByZXROb3RSZWFkeS5yZWFkeSA9IGZhbHNlO1xuICAgIHJldHVybiByZXROb3RSZWFkeTtcbiAgfVxuICBpZiAoaTE4bi5vcHRpb25zLnJlYWN0ICYmIGkxOG4ub3B0aW9ucy5yZWFjdC53YWl0ICE9PSB1bmRlZmluZWQpIHdhcm5PbmNlKCdJdCBzZWVtcyB5b3UgYXJlIHN0aWxsIHVzaW5nIHRoZSBvbGQgd2FpdCBvcHRpb24sIHlvdSBtYXkgbWlncmF0ZSB0byB0aGUgbmV3IHVzZVN1c3BlbnNlIGJlaGF2aW91ci4nKTtcbiAgY29uc3QgaTE4bk9wdGlvbnMgPSB7XG4gICAgLi4uZ2V0RGVmYXVsdHMoKSxcbiAgICAuLi5pMThuLm9wdGlvbnMucmVhY3QsXG4gICAgLi4ucHJvcHNcbiAgfTtcbiAgY29uc3Qge1xuICAgIHVzZVN1c3BlbnNlLFxuICAgIGtleVByZWZpeFxuICB9ID0gaTE4bk9wdGlvbnM7XG4gIGxldCBuYW1lc3BhY2VzID0gbnMgfHwgZGVmYXVsdE5TRnJvbUNvbnRleHQgfHwgaTE4bi5vcHRpb25zICYmIGkxOG4ub3B0aW9ucy5kZWZhdWx0TlM7XG4gIG5hbWVzcGFjZXMgPSBpc1N0cmluZyhuYW1lc3BhY2VzKSA/IFtuYW1lc3BhY2VzXSA6IG5hbWVzcGFjZXMgfHwgWyd0cmFuc2xhdGlvbiddO1xuICBpZiAoaTE4bi5yZXBvcnROYW1lc3BhY2VzLmFkZFVzZWROYW1lc3BhY2VzKSBpMThuLnJlcG9ydE5hbWVzcGFjZXMuYWRkVXNlZE5hbWVzcGFjZXMobmFtZXNwYWNlcyk7XG4gIGNvbnN0IHJlYWR5ID0gKGkxOG4uaXNJbml0aWFsaXplZCB8fCBpMThuLmluaXRpYWxpemVkU3RvcmVPbmNlKSAmJiBuYW1lc3BhY2VzLmV2ZXJ5KG4gPT4gaGFzTG9hZGVkTmFtZXNwYWNlKG4sIGkxOG4sIGkxOG5PcHRpb25zKSk7XG4gIGNvbnN0IG1lbW9HZXRUID0gdXNlTWVtb2l6ZWRUKGkxOG4sIHByb3BzLmxuZyB8fCBudWxsLCBpMThuT3B0aW9ucy5uc01vZGUgPT09ICdmYWxsYmFjaycgPyBuYW1lc3BhY2VzIDogbmFtZXNwYWNlc1swXSwga2V5UHJlZml4KTtcbiAgY29uc3QgZ2V0VCA9ICgpID0+IG1lbW9HZXRUO1xuICBjb25zdCBnZXROZXdUID0gKCkgPT4gYWx3YXlzTmV3VChpMThuLCBwcm9wcy5sbmcgfHwgbnVsbCwgaTE4bk9wdGlvbnMubnNNb2RlID09PSAnZmFsbGJhY2snID8gbmFtZXNwYWNlcyA6IG5hbWVzcGFjZXNbMF0sIGtleVByZWZpeCk7XG4gIGNvbnN0IFt0LCBzZXRUXSA9IHVzZVN0YXRlKGdldFQpO1xuICBsZXQgam9pbmVkTlMgPSBuYW1lc3BhY2VzLmpvaW4oKTtcbiAgaWYgKHByb3BzLmxuZykgam9pbmVkTlMgPSBgJHtwcm9wcy5sbmd9JHtqb2luZWROU31gO1xuICBjb25zdCBwcmV2aW91c0pvaW5lZE5TID0gdXNlUHJldmlvdXMoam9pbmVkTlMpO1xuICBjb25zdCBpc01vdW50ZWQgPSB1c2VSZWYodHJ1ZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgYmluZEkxOG4sXG4gICAgICBiaW5kSTE4blN0b3JlXG4gICAgfSA9IGkxOG5PcHRpb25zO1xuICAgIGlzTW91bnRlZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICBpZiAoIXJlYWR5ICYmICF1c2VTdXNwZW5zZSkge1xuICAgICAgaWYgKHByb3BzLmxuZykge1xuICAgICAgICBsb2FkTGFuZ3VhZ2VzKGkxOG4sIHByb3BzLmxuZywgbmFtZXNwYWNlcywgKCkgPT4ge1xuICAgICAgICAgIGlmIChpc01vdW50ZWQuY3VycmVudCkgc2V0VChnZXROZXdUKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2FkTmFtZXNwYWNlcyhpMThuLCBuYW1lc3BhY2VzLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKGlzTW91bnRlZC5jdXJyZW50KSBzZXRUKGdldE5ld1QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJlYWR5ICYmIHByZXZpb3VzSm9pbmVkTlMgJiYgcHJldmlvdXNKb2luZWROUyAhPT0gam9pbmVkTlMgJiYgaXNNb3VudGVkLmN1cnJlbnQpIHtcbiAgICAgIHNldFQoZ2V0TmV3VCk7XG4gICAgfVxuICAgIGNvbnN0IGJvdW5kUmVzZXQgPSAoKSA9PiB7XG4gICAgICBpZiAoaXNNb3VudGVkLmN1cnJlbnQpIHNldFQoZ2V0TmV3VCk7XG4gICAgfTtcbiAgICBpZiAoYmluZEkxOG4gJiYgaTE4bikgaTE4bi5vbihiaW5kSTE4biwgYm91bmRSZXNldCk7XG4gICAgaWYgKGJpbmRJMThuU3RvcmUgJiYgaTE4bikgaTE4bi5zdG9yZS5vbihiaW5kSTE4blN0b3JlLCBib3VuZFJlc2V0KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaXNNb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIGlmIChiaW5kSTE4biAmJiBpMThuKSBiaW5kSTE4bi5zcGxpdCgnICcpLmZvckVhY2goZSA9PiBpMThuLm9mZihlLCBib3VuZFJlc2V0KSk7XG4gICAgICBpZiAoYmluZEkxOG5TdG9yZSAmJiBpMThuKSBiaW5kSTE4blN0b3JlLnNwbGl0KCcgJykuZm9yRWFjaChlID0+IGkxOG4uc3RvcmUub2ZmKGUsIGJvdW5kUmVzZXQpKTtcbiAgICB9O1xuICB9LCBbaTE4biwgam9pbmVkTlNdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNNb3VudGVkLmN1cnJlbnQgJiYgcmVhZHkpIHtcbiAgICAgIHNldFQoZ2V0VCk7XG4gICAgfVxuICB9LCBbaTE4biwga2V5UHJlZml4LCByZWFkeV0pO1xuICBjb25zdCByZXQgPSBbdCwgaTE4biwgcmVhZHldO1xuICByZXQudCA9IHQ7XG4gIHJldC5pMThuID0gaTE4bjtcbiAgcmV0LnJlYWR5ID0gcmVhZHk7XG4gIGlmIChyZWFkeSkgcmV0dXJuIHJldDtcbiAgaWYgKCFyZWFkeSAmJiAhdXNlU3VzcGVuc2UpIHJldHVybiByZXQ7XG4gIHRocm93IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIGlmIChwcm9wcy5sbmcpIHtcbiAgICAgIGxvYWRMYW5ndWFnZXMoaTE4biwgcHJvcHMubG5nLCBuYW1lc3BhY2VzLCAoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2FkTmFtZXNwYWNlcyhpMThuLCBuYW1lc3BhY2VzLCAoKSA9PiByZXNvbHZlKCkpO1xuICAgIH1cbiAgfSk7XG59OyIsImV4cG9ydCBmdW5jdGlvbiB3YXJuKCkge1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuICAgIGlmIChpc1N0cmluZyhhcmdzWzBdKSkgYXJnc1swXSA9IGByZWFjdC1pMThuZXh0OjogJHthcmdzWzBdfWA7XG4gICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICB9XG59XG5jb25zdCBhbHJlYWR5V2FybmVkID0ge307XG5leHBvcnQgZnVuY3Rpb24gd2Fybk9uY2UoKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuICBpZiAoaXNTdHJpbmcoYXJnc1swXSkgJiYgYWxyZWFkeVdhcm5lZFthcmdzWzBdXSkgcmV0dXJuO1xuICBpZiAoaXNTdHJpbmcoYXJnc1swXSkpIGFscmVhZHlXYXJuZWRbYXJnc1swXV0gPSBuZXcgRGF0ZSgpO1xuICB3YXJuKC4uLmFyZ3MpO1xufVxuY29uc3QgbG9hZGVkQ2xiID0gKGkxOG4sIGNiKSA9PiAoKSA9PiB7XG4gIGlmIChpMThuLmlzSW5pdGlhbGl6ZWQpIHtcbiAgICBjYigpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGluaXRpYWxpemVkID0gKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGkxOG4ub2ZmKCdpbml0aWFsaXplZCcsIGluaXRpYWxpemVkKTtcbiAgICAgIH0sIDApO1xuICAgICAgY2IoKTtcbiAgICB9O1xuICAgIGkxOG4ub24oJ2luaXRpYWxpemVkJywgaW5pdGlhbGl6ZWQpO1xuICB9XG59O1xuZXhwb3J0IGNvbnN0IGxvYWROYW1lc3BhY2VzID0gKGkxOG4sIG5zLCBjYikgPT4ge1xuICBpMThuLmxvYWROYW1lc3BhY2VzKG5zLCBsb2FkZWRDbGIoaTE4biwgY2IpKTtcbn07XG5leHBvcnQgY29uc3QgbG9hZExhbmd1YWdlcyA9IChpMThuLCBsbmcsIG5zLCBjYikgPT4ge1xuICBpZiAoaXNTdHJpbmcobnMpKSBucyA9IFtuc107XG4gIG5zLmZvckVhY2gobiA9PiB7XG4gICAgaWYgKGkxOG4ub3B0aW9ucy5ucy5pbmRleE9mKG4pIDwgMCkgaTE4bi5vcHRpb25zLm5zLnB1c2gobik7XG4gIH0pO1xuICBpMThuLmxvYWRMYW5ndWFnZXMobG5nLCBsb2FkZWRDbGIoaTE4biwgY2IpKTtcbn07XG5jb25zdCBvbGRJMThuZXh0SGFzTG9hZGVkTmFtZXNwYWNlID0gZnVuY3Rpb24gKG5zLCBpMThuKSB7XG4gIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgY29uc3QgbG5nID0gaTE4bi5sYW5ndWFnZXNbMF07XG4gIGNvbnN0IGZhbGxiYWNrTG5nID0gaTE4bi5vcHRpb25zID8gaTE4bi5vcHRpb25zLmZhbGxiYWNrTG5nIDogZmFsc2U7XG4gIGNvbnN0IGxhc3RMbmcgPSBpMThuLmxhbmd1YWdlc1tpMThuLmxhbmd1YWdlcy5sZW5ndGggLSAxXTtcbiAgaWYgKGxuZy50b0xvd2VyQ2FzZSgpID09PSAnY2ltb2RlJykgcmV0dXJuIHRydWU7XG4gIGNvbnN0IGxvYWROb3RQZW5kaW5nID0gKGwsIG4pID0+IHtcbiAgICBjb25zdCBsb2FkU3RhdGUgPSBpMThuLnNlcnZpY2VzLmJhY2tlbmRDb25uZWN0b3Iuc3RhdGVbYCR7bH18JHtufWBdO1xuICAgIHJldHVybiBsb2FkU3RhdGUgPT09IC0xIHx8IGxvYWRTdGF0ZSA9PT0gMjtcbiAgfTtcbiAgaWYgKG9wdGlvbnMuYmluZEkxOG4gJiYgb3B0aW9ucy5iaW5kSTE4bi5pbmRleE9mKCdsYW5ndWFnZUNoYW5naW5nJykgPiAtMSAmJiBpMThuLnNlcnZpY2VzLmJhY2tlbmRDb25uZWN0b3IuYmFja2VuZCAmJiBpMThuLmlzTGFuZ3VhZ2VDaGFuZ2luZ1RvICYmICFsb2FkTm90UGVuZGluZyhpMThuLmlzTGFuZ3VhZ2VDaGFuZ2luZ1RvLCBucykpIHJldHVybiBmYWxzZTtcbiAgaWYgKGkxOG4uaGFzUmVzb3VyY2VCdW5kbGUobG5nLCBucykpIHJldHVybiB0cnVlO1xuICBpZiAoIWkxOG4uc2VydmljZXMuYmFja2VuZENvbm5lY3Rvci5iYWNrZW5kIHx8IGkxOG4ub3B0aW9ucy5yZXNvdXJjZXMgJiYgIWkxOG4ub3B0aW9ucy5wYXJ0aWFsQnVuZGxlZExhbmd1YWdlcykgcmV0dXJuIHRydWU7XG4gIGlmIChsb2FkTm90UGVuZGluZyhsbmcsIG5zKSAmJiAoIWZhbGxiYWNrTG5nIHx8IGxvYWROb3RQZW5kaW5nKGxhc3RMbmcsIG5zKSkpIHJldHVybiB0cnVlO1xuICByZXR1cm4gZmFsc2U7XG59O1xuZXhwb3J0IGNvbnN0IGhhc0xvYWRlZE5hbWVzcGFjZSA9IGZ1bmN0aW9uIChucywgaTE4bikge1xuICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gIGlmICghaTE4bi5sYW5ndWFnZXMgfHwgIWkxOG4ubGFuZ3VhZ2VzLmxlbmd0aCkge1xuICAgIHdhcm5PbmNlKCdpMThuLmxhbmd1YWdlcyB3ZXJlIHVuZGVmaW5lZCBvciBlbXB0eScsIGkxOG4ubGFuZ3VhZ2VzKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCBpc05ld2VySTE4bmV4dCA9IGkxOG4ub3B0aW9ucy5pZ25vcmVKU09OU3RydWN0dXJlICE9PSB1bmRlZmluZWQ7XG4gIGlmICghaXNOZXdlckkxOG5leHQpIHtcbiAgICByZXR1cm4gb2xkSTE4bmV4dEhhc0xvYWRlZE5hbWVzcGFjZShucywgaTE4biwgb3B0aW9ucyk7XG4gIH1cbiAgcmV0dXJuIGkxOG4uaGFzTG9hZGVkTmFtZXNwYWNlKG5zLCB7XG4gICAgbG5nOiBvcHRpb25zLmxuZyxcbiAgICBwcmVjaGVjazogKGkxOG5JbnN0YW5jZSwgbG9hZE5vdFBlbmRpbmcpID0+IHtcbiAgICAgIGlmIChvcHRpb25zLmJpbmRJMThuICYmIG9wdGlvbnMuYmluZEkxOG4uaW5kZXhPZignbGFuZ3VhZ2VDaGFuZ2luZycpID4gLTEgJiYgaTE4bkluc3RhbmNlLnNlcnZpY2VzLmJhY2tlbmRDb25uZWN0b3IuYmFja2VuZCAmJiBpMThuSW5zdGFuY2UuaXNMYW5ndWFnZUNoYW5naW5nVG8gJiYgIWxvYWROb3RQZW5kaW5nKGkxOG5JbnN0YW5jZS5pc0xhbmd1YWdlQ2hhbmdpbmdUbywgbnMpKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KTtcbn07XG5leHBvcnQgY29uc3QgZ2V0RGlzcGxheU5hbWUgPSBDb21wb25lbnQgPT4gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8IChpc1N0cmluZyhDb21wb25lbnQpICYmIENvbXBvbmVudC5sZW5ndGggPiAwID8gQ29tcG9uZW50IDogJ1Vua25vd24nKTtcbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9IG9iaiA9PiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJztcbmV4cG9ydCBjb25zdCBpc09iamVjdCA9IG9iaiA9PiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGw7IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNTUiB9IGZyb20gJy4vdXNlU1NSLmpzJztcbmltcG9ydCB7IGNvbXBvc2VJbml0aWFsUHJvcHMgfSBmcm9tICcuL2NvbnRleHQuanMnO1xuaW1wb3J0IHsgZ2V0RGlzcGxheU5hbWUgfSBmcm9tICcuL3V0aWxzLmpzJztcbmV4cG9ydCBjb25zdCB3aXRoU1NSID0gKCkgPT4gZnVuY3Rpb24gRXh0ZW5kKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgZnVuY3Rpb24gSTE4bmV4dFdpdGhTU1IoX3JlZikge1xuICAgIGxldCB7XG4gICAgICBpbml0aWFsSTE4blN0b3JlLFxuICAgICAgaW5pdGlhbExhbmd1YWdlLFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSBfcmVmO1xuICAgIHVzZVNTUihpbml0aWFsSTE4blN0b3JlLCBpbml0aWFsTGFuZ3VhZ2UpO1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIHtcbiAgICAgIC4uLnJlc3RcbiAgICB9KTtcbiAgfVxuICBJMThuZXh0V2l0aFNTUi5nZXRJbml0aWFsUHJvcHMgPSBjb21wb3NlSW5pdGlhbFByb3BzKFdyYXBwZWRDb21wb25lbnQpO1xuICBJMThuZXh0V2l0aFNTUi5kaXNwbGF5TmFtZSA9IGB3aXRoSTE4bmV4dFNTUigke2dldERpc3BsYXlOYW1lKFdyYXBwZWRDb21wb25lbnQpfSlgO1xuICBJMThuZXh0V2l0aFNTUi5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcbiAgcmV0dXJuIEkxOG5leHRXaXRoU1NSO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBmb3J3YXJkUmVmIGFzIGZvcndhcmRSZWZSZWFjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi91c2VUcmFuc2xhdGlvbi5qcyc7XG5pbXBvcnQgeyBnZXREaXNwbGF5TmFtZSB9IGZyb20gJy4vdXRpbHMuanMnO1xuZXhwb3J0IGNvbnN0IHdpdGhUcmFuc2xhdGlvbiA9IGZ1bmN0aW9uIChucykge1xuICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHJldHVybiBmdW5jdGlvbiBFeHRlbmQoV3JhcHBlZENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIEkxOG5leHRXaXRoVHJhbnNsYXRpb24oX3JlZikge1xuICAgICAgbGV0IHtcbiAgICAgICAgZm9yd2FyZGVkUmVmLFxuICAgICAgICAuLi5yZXN0XG4gICAgICB9ID0gX3JlZjtcbiAgICAgIGNvbnN0IFt0LCBpMThuLCByZWFkeV0gPSB1c2VUcmFuc2xhdGlvbihucywge1xuICAgICAgICAuLi5yZXN0LFxuICAgICAgICBrZXlQcmVmaXg6IG9wdGlvbnMua2V5UHJlZml4XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHBhc3NEb3duUHJvcHMgPSB7XG4gICAgICAgIC4uLnJlc3QsXG4gICAgICAgIHQsXG4gICAgICAgIGkxOG4sXG4gICAgICAgIHRSZWFkeTogcmVhZHlcbiAgICAgIH07XG4gICAgICBpZiAob3B0aW9ucy53aXRoUmVmICYmIGZvcndhcmRlZFJlZikge1xuICAgICAgICBwYXNzRG93blByb3BzLnJlZiA9IGZvcndhcmRlZFJlZjtcbiAgICAgIH0gZWxzZSBpZiAoIW9wdGlvbnMud2l0aFJlZiAmJiBmb3J3YXJkZWRSZWYpIHtcbiAgICAgICAgcGFzc0Rvd25Qcm9wcy5mb3J3YXJkZWRSZWYgPSBmb3J3YXJkZWRSZWY7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCBwYXNzRG93blByb3BzKTtcbiAgICB9XG4gICAgSTE4bmV4dFdpdGhUcmFuc2xhdGlvbi5kaXNwbGF5TmFtZSA9IGB3aXRoSTE4bmV4dFRyYW5zbGF0aW9uKCR7Z2V0RGlzcGxheU5hbWUoV3JhcHBlZENvbXBvbmVudCl9KWA7XG4gICAgSTE4bmV4dFdpdGhUcmFuc2xhdGlvbi5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcbiAgICBjb25zdCBmb3J3YXJkUmVmID0gKHByb3BzLCByZWYpID0+IGNyZWF0ZUVsZW1lbnQoSTE4bmV4dFdpdGhUcmFuc2xhdGlvbiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgIGZvcndhcmRlZFJlZjogcmVmXG4gICAgfSkpO1xuICAgIHJldHVybiBvcHRpb25zLndpdGhSZWYgPyBmb3J3YXJkUmVmUmVhY3QoZm9yd2FyZFJlZikgOiBJMThuZXh0V2l0aFRyYW5zbGF0aW9uO1xuICB9O1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJpbXBvcnQgdHlwZSBPcGVuRmluIGZyb20gXCJAb3BlbmZpbi9jb3JlXCI7XG5pbXBvcnQge1xuXHRBY3Rpb25Cb2R5Q2xpY2tUeXBlLFxuXHRWRVJTSU9OLFxuXHRhZGRFdmVudExpc3RlbmVyIGFzIGFkZE5vdGlmaWNhdGlvbkV2ZW50TGlzdGVuZXIsXG5cdGNyZWF0ZSxcblx0Z2V0Tm90aWZpY2F0aW9uc0NvdW50LFxuXHRoaWRlIGFzIGhpZGVOb3RpZmljYXRpb25DZW50ZXIsXG5cdHByb3ZpZGVyLFxuXHRyZWdpc3Rlcixcblx0c2hvdyBhcyBzaG93Tm90aWZpY2F0aW9uQ2VudGVyLFxuXHR1cGRhdGUsXG5cdHR5cGUgTm90aWZpY2F0aW9uT3B0aW9ucyxcblx0dHlwZSBUZW1wbGF0ZU1hcmtkb3duLFxuXHR0eXBlIFVwZGF0YWJsZU5vdGlmaWNhdGlvbk9wdGlvbnMsXG5cdEluZGljYXRvckNvbG9yXG59IGZyb20gXCJAb3BlbmZpbi93b3Jrc3BhY2Uvbm90aWZpY2F0aW9uc1wiO1xuXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuXG5jb25zdCBQTEFURk9STV9JRCA9IFwibm9kZWpzLW5vdGlmaWNhdGlvbnNcIjtcbmNvbnN0IFBMQVRGT1JNX0lDT04gPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9pbWFnZXMvaWNvbi1kb3QucG5nXCI7XG5jb25zdCBQTEFURk9STV9USVRMRSA9IFwiTm90aWZpY2F0aW9ucyBQcm94eVwiO1xuXG5jb25zdCBOT1RJRklDQVRJT05fU09VTkRfVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXNzZXRzL25vdGlmaWNhdGlvbi5tcDNcIjtcblxuLy8gS2VlcCB0cmFjayBvZiBub3RpZmljYXRpb25zIHdlIGFyZSB1cGRhdGluZ1xuY29uc3QgdXBkYXRhYmxlTm90aWZpY2F0aW9uczogeyBbaWQ6IHN0cmluZ106IFRlbXBsYXRlTWFya2Rvd24gJiB7IGN1c3RvbURhdGE6IHsgY291bnQ6IG51bWJlciB9IH0gfSA9IHt9O1xubGV0IHVwZGF0YWJsZU5vdGlmaWNhdGlvblRpbWVyOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbmxldCBsb2dnaW5nRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xubGV0IGNsZWFyTG9nc0VsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcblxubGV0IGFjdGl2ZVBsYXRmb3JtOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5sZXQgY29ubmVjdGVkOiBib29sZWFuID0gZmFsc2U7XG5sZXQgY29ubmVjdGVkVmVyc2lvbjogc3RyaW5nIHwgbnVsbDtcbmxldCBzdGF0dXNJbnRlcnZhbElkOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5sZXQgbGFzdENvbm5lY3Rpb25TdGF0dXM6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5sZXQgY2hhbm5lbCA6IE9wZW5GaW4uQ2hhbm5lbFByb3ZpZGVyO1xuXG4vKipcbiAqIFdhaXQgZm9yIHRoZSBET00gdG8gaGF2ZSBiZWVuIGxvYWRlZCBiZWZvcmUgd2UgY29ubmVjdCB0aGUgVUkgZWxlbWVudHMgYW5kIGxpc3RlbmVycy5cbiAqL1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0YXdhaXQgaW5pdGlhbGl6ZURvbSgpO1xuXHRhd2FpdCBpbml0aWFsaXplTGlzdGVuZXJzKCk7XG5cdGF3YWl0IGNyZWF0ZUNoYW5uZWxBbmRSZWdpc3Rlckxpc3RlbmVycygpO1xuXHRcblx0Ly8gRGVsYXkgcGxhdGZvcm0gaW5pdGlhbGl6YXRpb24gdG8gYWxsb3cgbm90aWZpY2F0aW9ucyBzZXJ2aWNlIHRvIGZ1bGx5IHN0YXJ0XG5cdHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuXHRcdGF3YWl0IGluaXRpYWxpemVQbGF0Zm9ybSgpO1xuXHR9LCAyMDAwKTtcbn0pO1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIERPTSBlbGVtZW50cy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZURvbSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0bG9nZ2luZ0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvZ2dpbmdcIik7XG5cdGNvbnN0IGxvZ2dpbmdDb250YWluZXI6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9nZ2luZy1jb250YWluZXJcIik7XG5cblx0aWYgKCFsb2dnaW5nRWxlbWVudCB8fCAhbG9nZ2luZ0NvbnRhaW5lcikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxvZ2dpbmdBZGRFbnRyeShgTGlicmFyeSBWZXJzaW9uOiAke1ZFUlNJT059YCk7XG5cdGxvZ2dpbmdDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXG5cdGNsZWFyTG9nc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bkNsZWFyXCIpO1xuXHRjbGVhckxvZ3NFbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbG9nZ2luZ0VsZW1lbnQgPyBsb2dnaW5nRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCIgOiBudWxsKTtcbn1cblxuXG5hc3luYyBmdW5jdGlvbiBpbml0aWFsaXplUGxhdGZvcm0oKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgcmVnaXN0ZXIoe1xuXHRcdFx0bm90aWZpY2F0aW9uc1BsYXRmb3JtT3B0aW9uczoge1xuXHRcdFx0XHRpZDogUExBVEZPUk1fSUQsXG5cdFx0XHRcdGljb246IFBMQVRGT1JNX0lDT04sXG5cdFx0XHRcdHRpdGxlOiBQTEFURk9STV9USVRMRVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0bG9nZ2luZ0FkZEVudHJ5KFwiUGxhdGZvcm0gcmVnaXN0ZXJlZFwiKTtcblx0XHRhY3RpdmVQbGF0Zm9ybSA9IFBMQVRGT1JNX0lEO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGxvZ2dpbmdBZGRFbnRyeShgUGxhdGZvcm0gcmVnaXN0cmF0aW9uIGZhaWxlZDogJHtlcnJvcn1gKTtcblx0XHQvLyBDb250aW51ZSB3aXRob3V0IHBsYXRmb3JtIHJlZ2lzdHJhdGlvbiAtIG5vdGlmaWNhdGlvbnMgbWF5IHN0aWxsIHdvcmtcblx0XHRhY3RpdmVQbGF0Zm9ybSA9IFBMQVRGT1JNX0lEO1xuXHR9XG5cdFxuXHQvLyBHZXQgaW5pdGlhbCBub3RpZmljYXRpb24gY291bnRcblx0dHJ5IHtcblx0XHRjb25zdCBub3RpZmljYXRpb25zQ291bnQgPSBhd2FpdCBnZXROb3RpZmljYXRpb25zQ291bnQoKTtcblx0XHRsb2dnaW5nQWRkRW50cnkoYE51bWJlciBvZiBub3RpZmljYXRpb25zIGluIHRoZSBOb3RpZmljYXRpb24gQ2VudGVyIGlzICR7bm90aWZpY2F0aW9uc0NvdW50fWApO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGxvZ2dpbmdBZGRFbnRyeShgRXJyb3IgZ2V0dGluZyBub3RpZmljYXRpb25zIGNvdW50OiAke2Vycm9yfWApO1xuXHR9XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgbGlzdGVuZXJzIGZvciB0aGUgZXZlbnRzIGZyb20gdGhlIG5vdGlmaWNhdGlvbiBjZW50ZXIuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVMaXN0ZW5lcnMoKTogUHJvbWlzZTx2b2lkPiB7XG5cdC8vIExpc3RlbiBmb3IgbmV3IG5vdGlmaWNhdGlvbnMgYmVpbmcgY3JlYXRlZFxuXHRhZGROb3RpZmljYXRpb25FdmVudExpc3RlbmVyKFwibm90aWZpY2F0aW9uLWNyZWF0ZWRcIiwgKGV2ZW50KSA9PiB7XG5cdFx0bG9nZ2luZ0FkZEVudHJ5KGBDcmVhdGVkOiAke2V2ZW50Lm5vdGlmaWNhdGlvbi5pZH1gKTtcblx0fSk7XG5cblx0YWRkTm90aWZpY2F0aW9uRXZlbnRMaXN0ZW5lcihcIm5vdGlmaWNhdGlvbi1jbG9zZWRcIiwgKGV2ZW50KSA9PiB7XG5cdFx0bG9nZ2luZ0FkZEVudHJ5KGBDbG9zZWQ6ICR7ZXZlbnQubm90aWZpY2F0aW9uLmlkfWApO1xuXG5cdFx0aWYgKHVwZGF0YWJsZU5vdGlmaWNhdGlvbnNbZXZlbnQubm90aWZpY2F0aW9uLmlkXSkge1xuXHRcdFx0ZGVsZXRlIHVwZGF0YWJsZU5vdGlmaWNhdGlvbnNbZXZlbnQubm90aWZpY2F0aW9uLmlkXTtcblx0XHRcdGlmIChPYmplY3Qua2V5cyh1cGRhdGFibGVOb3RpZmljYXRpb25zKS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0d2luZG93LmNsZWFySW50ZXJ2YWwodXBkYXRhYmxlTm90aWZpY2F0aW9uVGltZXIpO1xuXHRcdFx0XHR1cGRhdGFibGVOb3RpZmljYXRpb25UaW1lciA9IHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdGFkZE5vdGlmaWNhdGlvbkV2ZW50TGlzdGVuZXIoXCJub3RpZmljYXRpb24tYWN0aW9uXCIsIChldmVudCkgPT4ge1xuXHRcdGlmIChldmVudD8ucmVzdWx0Py5CT0RZX0NMSUNLID09PSBcImRpc21pc3NfZXZlbnRcIikge1xuXHRcdFx0aWYgKGV2ZW50Lm5vdGlmaWNhdGlvbj8uY3VzdG9tRGF0YT8uYWN0aW9uKSB7XG5cdFx0XHRcdGxvZ2dpbmdBZGRFbnRyeShcblx0XHRcdFx0XHRgXFx0RGF0YTogJHtcblx0XHRcdFx0XHRcdGV2ZW50Py5ub3RpZmljYXRpb24/LmN1c3RvbURhdGEgPyBKU09OLnN0cmluZ2lmeShldmVudC5ub3RpZmljYXRpb24uY3VzdG9tRGF0YSkgOiBcIk5vbmVcIlxuXHRcdFx0XHRcdH1gXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsb2dnaW5nQWRkRW50cnkoXCJcXHRObyBhY3Rpb25cIik7XG5cdFx0XHR9XG5cdFx0XHRsb2dnaW5nQWRkRW50cnkoXCJcXHRCb2R5IGNsaWNrIGRpc21pc3NcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxvZ2dpbmdBZGRFbnRyeShcblx0XHRcdFx0YFxcdERhdGE6ICR7ZXZlbnQ/LnJlc3VsdD8uY3VzdG9tRGF0YSA/IEpTT04uc3RyaW5naWZ5KGV2ZW50LnJlc3VsdC5jdXN0b21EYXRhKSA6IFwiTm9uZVwifWBcblx0XHRcdCk7XG5cdFx0XHRsb2dnaW5nQWRkRW50cnkoYFxcdFRhc2s6ICR7ZXZlbnQ/LnJlc3VsdD8udGFzayA/PyBcIk5vbmVcIn1gKTtcblx0XHRcdGxvZ2dpbmdBZGRFbnRyeShgQWN0aW9uOiAke2V2ZW50Lm5vdGlmaWNhdGlvbi5pZH1gKTtcblx0XHR9XG5cblx0XHRjb25zb2xlLmxvZyhldmVudCk7XG5cdH0pO1xuXG5cdGFkZE5vdGlmaWNhdGlvbkV2ZW50TGlzdGVuZXIoXCJub3RpZmljYXRpb24tdG9hc3QtZGlzbWlzc2VkXCIsIChldmVudCkgPT4ge1xuXHRcdGxvZ2dpbmdBZGRFbnRyeShgVG9hc3QgRGlzbWlzc2VkOiAke2V2ZW50Lm5vdGlmaWNhdGlvbi5pZH1gKTtcblx0fSk7XG5cblx0Ly8gRXZlbnQgbGlzdGVuZXIgdGhhdCB0cmFja3Mgd2hlbiBpbnB1dCBmb3JtIG5vdGlmaWNhdGlvbiBpcyBzdWJtaXR0ZWRcblx0YWRkTm90aWZpY2F0aW9uRXZlbnRMaXN0ZW5lcihcIm5vdGlmaWNhdGlvbi1mb3JtLXN1Ym1pdHRlZFwiLCAoZXZlbnQpID0+IHtcblx0XHRsb2dnaW5nQWRkRW50cnkoYFxcdERhdGE6ICR7ZXZlbnQ/LmZvcm0gPyBKU09OLnN0cmluZ2lmeShldmVudC5mb3JtKSA6IFwiTm9uZVwifWApO1xuXHRcdGxvZ2dpbmdBZGRFbnRyeShgRm9ybSBzdWJtaXR0ZWQ6ICR7ZXZlbnQubm90aWZpY2F0aW9uLmlkfWApO1xuXHRcdGNvbnNvbGUubG9nKGV2ZW50KTtcblx0XHQvLyBTZW5kIGRhdGEgYmFjayB0byB0aGUgY2xpZW50XG5cdFx0Y2hhbm5lbC5wdWJsaXNoKCdmb3JtLW5vdGlmaWNhdGlvbi1yZXNwb25zZScsIEpTT04uc3RyaW5naWZ5KGV2ZW50Py5mb3JtKSk7XG5cdH0pO1xuXG5cdGFkZE5vdGlmaWNhdGlvbkV2ZW50TGlzdGVuZXIoXCJub3RpZmljYXRpb25zLWNvdW50LWNoYW5nZWRcIiwgKGV2ZW50KSA9PiB7XG5cdFx0bG9nZ2luZ0FkZEVudHJ5KGBOdW1iZXIgb2Ygbm90aWZpY2F0aW9ucyBpbiB0aGUgTm90aWZpY2F0aW9uIENlbnRlciBpcyAke2V2ZW50LmNvdW50fWApO1xuXHR9KTtcblxuXHRhZGRDb25uZWN0aW9uQ2hhbmdlZEV2ZW50TGlzdGVuZXIoKHN0YXR1cykgPT4ge1xuXHRcdGlmIChzdGF0dXMuY29ubmVjdGVkICE9PSBjb25uZWN0ZWQpIHtcblx0XHRcdGNvbm5lY3RlZCA9IHN0YXR1cy5jb25uZWN0ZWQ7XG5cdFx0XHRjb25uZWN0ZWRWZXJzaW9uID0gc3RhdHVzLnZlcnNpb247XG5cdFx0XHR1cGRhdGVDb25uZWN0ZWRTdGF0ZSgpO1xuXHRcdH1cblx0fSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNoYW5uZWxBbmRSZWdpc3Rlckxpc3RlbmVycygpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y2hhbm5lbCA9IGF3YWl0IGNyZWF0ZUNoYW5uZWwoKTtcblxuXHRpZihjaGFubmVsICE9PSBudWxsKSB7XG5cdFx0Y2hhbm5lbC5vbkNvbm5lY3Rpb24oKGlkZW50aXR5LCBwYXlsb2FkKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnb25Db25uZWN0aW9uIGlkZW50aXR5OiAnLCBKU09OLnN0cmluZ2lmeShpZGVudGl0eSkpO1xuXHRcdFx0Y29uc29sZS5sb2coJ29uQ29ubmVjdGlvbiBwYXlsb2FkOiAnLCBKU09OLnN0cmluZ2lmeShwYXlsb2FkKSk7XG5cdFx0XHRsb2dnaW5nQWRkRW50cnkoJ29uQ29ubmVjdGlvbiBpZGVudGl0eTogJyArIEpTT04uc3RyaW5naWZ5KGlkZW50aXR5KSk7XG5cdFx0fSk7XG5cdFx0Y2hhbm5lbC5vbkRpc2Nvbm5lY3Rpb24oKGlkZW50aXR5KSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnb25EaXNjb25uZWN0aW9uIGlkZW50aXR5OiAnLCBKU09OLnN0cmluZ2lmeShpZGVudGl0eSkpO1xuXHRcdFx0bG9nZ2luZ0FkZEVudHJ5KCdvbkRpc2Nvbm5lY3Rpb24gaWRlbnRpdHk6ICcgKyBKU09OLnN0cmluZ2lmeShpZGVudGl0eSkpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gcmVjZWl2ZWQgcmVxdWVzdCBvdmVyIGNoYW5uZWwgdG8gZGlzcGxheSBzaW1wbGUgbm90aWZpY2F0aW9uXG5cdFx0Y2hhbm5lbC5yZWdpc3Rlcignc2VuZC1zaW1wbGUtbm90aWZpY2F0aW9uJywgYXN5bmMgKHBheWxvYWQpID0+IHtcblx0XHRcdGlmKHBheWxvYWQpIHtcblx0XHRcdFx0Y3JlYXRlTm90aWZpY2F0aW9uKHBheWxvYWQgYXMgTm90aWZpY2F0aW9uT3B0aW9ucyk7XHRcdFx0XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsb2dnaW5nQWRkRW50cnkoYEVycm9yIDogTm8gcGF5bG9hZCByZWNlaXZlZCB3aXRoIE5vdGlmaWNhdGlvbiByZXF1ZXN0XFxuXFxuYCk7XG5cdFx0XHR9XHRcdFx0XG5cdFx0fSk7XG5cblx0XHQvLyByZWNlaXZlZCByZXF1ZXN0IG92ZXIgY2hhbm5lbCB0byBkaXNwbGF5IGlucHV0IGZvcm0gbm90aWZpY2F0aW9uXG5cdFx0Y2hhbm5lbC5yZWdpc3Rlcignc2hvdy1mb3JtLW5vdGlmaWNhdGlvbicsIGFzeW5jKHBheWxvYWQpID0+IHtcblx0XHRcdGlmKHBheWxvYWQpIHtcdFxuXHRcdFx0XHRjcmVhdGVOb3RpZmljYXRpb24ocGF5bG9hZCBhcyBOb3RpZmljYXRpb25PcHRpb25zKTtcdFx0XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZihsb2dnaW5nRWxlbWVudClcblx0XHRcdFx0bG9nZ2luZ0FkZEVudHJ5KGBFcnJvciA6IE5vIHBheWxvYWQgcmVjZWl2ZWQgd2l0aCBOb3RpZmljYXRpb24gcmVxdWVzdGApO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdFxuXHRcdGNoYW5uZWwucmVnaXN0ZXIoJ3Rocm93RXJyb3InLCAoZXJyKSA9PiB7XG5cdFx0XHRsb2dnaW5nQWRkRW50cnkoYEVycm9yIGluIGNoYW5uZWxQcm92aWRlciAtICR7ZXJyfWApO1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBFcnJvciBpbiBjaGFubmVsUHJvdmlkZXIgLSAke2Vycn1gKTtcblx0XHR9KTtcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVOb3RpZmljYXRpb24ocGF5bG9hZDogTm90aWZpY2F0aW9uT3B0aW9ucykge1xuXHR0cnkge1xuXHRcdGxvZ2dpbmdBZGRFbnRyeShgUmVjZWl2ZWQgbm90aWZpY2F0aW9uIHBheWxvYWQgZnJvbSBjbGllbnQ6IFxcblxcblxcdCR7SlNPTi5zdHJpbmdpZnkocGF5bG9hZCwgbnVsbCwgMil9YCk7XG5cdFx0Y29uc3Qgbm90aWZpY2F0aW9uT3B0aW9ucyA9IHBheWxvYWQgYXMgTm90aWZpY2F0aW9uT3B0aW9ucztcblx0XHRhd2FpdCBjcmVhdGUobm90aWZpY2F0aW9uT3B0aW9ucyk7XHRcdFx0XHRcblx0fSBjYXRjaCAoZXJyb3IpIHtcdFx0XG5cdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdGxvZ2dpbmdBZGRFbnRyeShgRXJyb3IgcGFyc2luZyBwYXlsb2FkOiAgXFxuXFxuXFx0JHtlcnJvcn1gKTtcblx0fVx0XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNoYW5uZWwoKTogUHJvbWlzZTxPcGVuRmluLkNoYW5uZWxQcm92aWRlcj4ge1xuXHRjb25zdCBjaGFubmVsTmFtZSA9ICdub3RpZmljYXRpb24tY2hhbm5lbCc7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCBmaW4uSW50ZXJBcHBsaWNhdGlvbkJ1cy5DaGFubmVsLmNyZWF0ZShjaGFubmVsTmFtZSk7XG5cdGxvZ2dpbmdBZGRFbnRyeShgTmV3IGNoYW5uZWwgcHJvdmlkZXIgY3JlYXRlZDogJHtjaGFubmVsTmFtZX1gKTtcblx0cmV0dXJuIHByb3ZpZGVyO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBlbnRyeSBpbiB0byB0aGUgbG9nZ2luZyB3aW5kb3cuXG4gKiBAcGFyYW0gZW50cnkgVGhlIGVudHJ5IHRvIGFkZC5cbiAqL1xuZnVuY3Rpb24gbG9nZ2luZ0FkZEVudHJ5KGVudHJ5OiBzdHJpbmcpOiB2b2lkIHtcblx0aWYgKGxvZ2dpbmdFbGVtZW50KSB7XG5cdFx0bG9nZ2luZ0VsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtlbnRyeX1cXG5cXG4ke2xvZ2dpbmdFbGVtZW50LnRleHRDb250ZW50fWA7XG5cdH1cbn1cblxuLyoqXG4gKiBVcGRhdGUgdGhlIGNvbm5lY3RlZCBzdGF0ZSBvbiB0aGUgdmlldy5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlQ29ubmVjdGVkU3RhdGUoKTogdm9pZCB7XG5cdGxvZ2dpbmdBZGRFbnRyeShgSXMgQ29ubmVjdGVkOiAke2Nvbm5lY3RlZH1gKTtcblx0aWYgKGNvbm5lY3RlZCkge1xuXHRcdGxvZ2dpbmdBZGRFbnRyeShgQ29ubmVjdGVkIFZlcnNpb246ICR7Y29ubmVjdGVkVmVyc2lvbn1gKTtcblx0fVxuXG5cdGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xuXHRmb3IgKGNvbnN0IGJ1dHRvbiBvZiBidXR0b25zKSB7XG5cdFx0YnV0dG9uLmRpc2FibGVkID0gIWNvbm5lY3RlZDtcblx0fVxufVxuXG4vKipcbiAqIFVwZGF0ZSB0aGUgbm90aWZpY2F0aW9uIGNvdW50IG9uIHRoZSB2aWV3LlxuICogQHBhcmFtIGNvdW50IFRoZSBuZXcgY291bnQgdG8gZGlzcGxheS5cbiAqL1xuZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbkNvdW50KGNvdW50OiBudW1iZXIpOiB2b2lkIHtcblx0Y29uc3QgYnRuTm90aWZpY2F0aW9uc0NlbnRlclNob3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bk5vdGlmaWNhdGlvbnNDZW50ZXJTaG93XCIpO1xuXHRpZiAoYnRuTm90aWZpY2F0aW9uc0NlbnRlclNob3cpIHtcblx0XHRidG5Ob3RpZmljYXRpb25zQ2VudGVyU2hvdy50ZXh0Q29udGVudCA9IGBTaG93IFske2NvdW50fV1gO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb24ocGF5bG9hZDogTm90aWZpY2F0aW9uT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbk9wdGlvbnMgPSBwYXlsb2FkO1xuXHRhd2FpdCBjcmVhdGUobm90aWZpY2F0aW9uKTtcbn1cblxuLyoqXG4gKiBBZGQgYSBsaXN0ZW5lciB3aGljaCBjaGVja3MgZm9yIHRoZSBjb25uZWN0aW9uIGNoYW5nZWQgZXZlbnQuXG4gKiBAcGFyYW0gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIHRvIGNhbGwgd2hlbiB0aGUgY29ubmVjdGlvbiBzdGF0ZSBjaGFuZ2VzLlxuICovXG5mdW5jdGlvbiBhZGRDb25uZWN0aW9uQ2hhbmdlZEV2ZW50TGlzdGVuZXIoY2FsbGJhY2s6IChzdGF0dXM6IHByb3ZpZGVyLlByb3ZpZGVyU3RhdHVzKSA9PiB2b2lkKTogdm9pZCB7XG5cdGlmIChzdGF0dXNJbnRlcnZhbElkID09PSB1bmRlZmluZWQpIHtcblx0XHRzdGF0dXNJbnRlcnZhbElkID0gd2luZG93LnNldEludGVydmFsKGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHN0YXR1cyA9IGF3YWl0IHByb3ZpZGVyLmdldFN0YXR1cygpO1xuXHRcdFx0aWYgKHN0YXR1cy5jb25uZWN0ZWQgIT09IGxhc3RDb25uZWN0aW9uU3RhdHVzKSB7XG5cdFx0XHRcdGxhc3RDb25uZWN0aW9uU3RhdHVzID0gc3RhdHVzLmNvbm5lY3RlZDtcblx0XHRcdFx0Y2FsbGJhY2soc3RhdHVzKTtcblx0XHRcdH1cblx0XHR9LCAxMDAwKTtcblx0fVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==