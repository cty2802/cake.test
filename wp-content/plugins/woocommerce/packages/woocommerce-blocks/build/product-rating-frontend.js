(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[73],{116:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n(51);var r=n(36);const s=()=>r.m>1},117:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(24),s=n(19);const o=t=>Object(r.a)(t)?JSON.parse(t)||{}:Object(s.a)(t)?t:{}},19:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s}));const r=t=>!(t=>null===t)(t)&&t instanceof Object&&t.constructor===Object;function s(t,e){return r(t)&&e in t}},288:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(63),s=n(116),o=n(19),c=n(117);const a=t=>{if(!Object(s.a)())return{className:"",style:{}};const e=Object(o.a)(t)?t:{},n=Object(c.a)(e.style);return Object(r.__experimentalUseColorProps)({...e,style:n})}},294:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(19),s=n(117);const o=t=>{const e=Object(r.a)(t)?t:{},n=Object(s.a)(e.style),o=Object(r.a)(n.typography)?n.typography:{};return{style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:o.fontSize,lineHeight:o.lineHeight,fontWeight:o.fontWeight,fontStyle:o.fontStyle,textTransform:o.textTransform,fontFamily:e.fontFamily}}}},323:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(63),s=n(116),o=n(19),c=n(117);const a=t=>{if(!Object(s.a)()||"function"!=typeof r.__experimentalGetSpacingClassesAndStyles)return{style:{}};const e=Object(o.a)(t)?t:{},n=Object(c.a)(e.style);return Object(r.__experimentalGetSpacingClassesAndStyles)({...e,style:n})}},340:function(t,e){},360:function(t,e,n){"use strict";n.r(e),n.d(e,"Block",(function(){return b}));var r=n(0),s=n(1),o=n(5),c=n.n(o),a=n(50),i=n(288),u=n(294),l=n(323),f=n(140),p=n(90);n(340);const b=t=>{const{textAlign:e}=t,{parentClassName:n}=Object(a.useInnerBlockLayoutContext)(),{product:o}=Object(a.useProductDataContext)(),f=(t=>{const e=parseFloat(t.average_rating);return Number.isFinite(e)&&e>0?e:0})(o),b=Object(i.a)(t),d=Object(u.a)(t),g=Object(l.a)(t);if(!f)return null;const j={width:f/5*100+"%"},O=Object(s.sprintf)(
/* translators: %f is referring to the average rating value */
Object(s.__)("Rated %f out of 5","woocommerce"),f),y=(t=>{const e=Object(p.a)(t.review_count)?t.review_count:parseInt(t.review_count,10);return Number.isFinite(e)&&e>0?e:0})(o),m={__html:Object(s.sprintf)(
/* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */
Object(s._n)("Rated %1$s out of 5 based on %2$s customer rating","Rated %1$s out of 5 based on %2$s customer ratings",y,"woocommerce"),Object(s.sprintf)('<strong class="rating">%f</strong>',f),Object(s.sprintf)('<span class="rating">%d</span>',y))};return Object(r.createElement)("div",{className:c()(b.className,"wc-block-components-product-rating",{[n+"__product-rating"]:n},{["has-text-align-"+e]:e}),style:{...b.style,...d.style,...g.style}},Object(r.createElement)("div",{className:c()("wc-block-components-product-rating__stars",n+"__product-rating__stars"),role:"img","aria-label":O},Object(r.createElement)("span",{style:j,dangerouslySetInnerHTML:m})))};e.default=Object(f.withProductDataContext)(b)},5:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r)){if(r.length){var c=s.apply(null,r);c&&t.push(c)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var a in r)n.call(r,a)&&r[a]&&t.push(a);else t.push(r.toString())}}return t.join(" ")}t.exports?(s.default=s,t.exports=s):void 0===(r=function(){return s}.apply(e,[]))||(t.exports=r)}()}}]);