(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{228:function(t,n,e){t.exports=e(229)},229:function(t,n,e){e(65),e(230),t.exports=e(13).Array.from},230:function(t,n,e){"use strict";var r=e(146),o=e(45),i=e(98),a=e(231),s=e(232),l=e(147),u=e(233),c=e(148);o(o.S+o.F*!e(234)((function(t){Array.from(t)})),"Array",{from:function(t){var n,e,o,f,h=i(t),d="function"==typeof this?this:Array,g=arguments.length,p=g>1?arguments[1]:void 0,v=void 0!==p,m=0,y=c(h);if(v&&(p=r(p,g>2?arguments[2]:void 0,2)),null==y||d==Array&&s(y))for(e=new d(n=l(h.length));n>m;m++)u(e,m,v?p(h[m],m):h[m]);else for(f=y.call(h),e=new d;!(o=f.next()).done;m++)u(e,m,v?a(f,p,[o.value,m],!0):o.value);return e.length=m,e}})},231:function(t,n,e){var r=e(36);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},232:function(t,n,e){var r=e(37),o=e(12)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},233:function(t,n,e){"use strict";var r=e(22),o=e(46);t.exports=function(t,n,e){n in t?r.f(t,n,o(0,e)):t[n]=e}},234:function(t,n,e){var r=e(12)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],a=i[r]();a.next=function(){return{done:e=!0}},i[r]=function(){return a},t(i)}catch(t){}return e}},235:function(t,n,e){},239:function(t,n,e){"use strict";var r=e(99),o=e.n(r);var i=e(228),a=e.n(i),s=e(100),l=e.n(s);function u(t){return function(t){if(o()(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(l()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return a()(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e.d(n,"a",(function(){return u}))},240:function(t,n,e){"use strict";var r=e(235);e.n(r).a},244:function(t,n,e){"use strict";e.r(n);var r=e(239),o=(e(47),{metaInfo:function(){return{title:"about"}},components:{Menu:e(34).a},methods:{log:function(t){console.log(t)}},computed:{links:function(){return Object(r.a)(this.$page.post.links.matchAll(/\[(.+?)\]\((.+?)\)/g)).filter((function(t){return"#"!==t[2]}))}}}),i=(e(240),e(10)),a=Object(i.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("a",{staticClass:"hidden lg:block absolute inset-0 home",attrs:{href:"/"}}),e("Menu",{ref:"menu",staticClass:"hidden lg:block",attrs:{sel:"about"},on:{imgChange:function(n){t.selectedElem=n}}}),e("div",{ref:"cont",staticClass:"\n    pt-8 pr-8\n    h-full sm:w-2/3\n    lg:absolute lg:h-auto lg:bg-secondary lg:pb-12 lg:w-3/4 lg:top-0\n    lg:ml-20 lg:mt-20\n    lg:z-10\n    "},[t._m(0),e("a",{staticClass:"text-4xl underline uppercase font-bold lg:hidden",attrs:{href:"/"}},[t._v("Close")])])],1)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"lg:ml-16 lg:-mr-24"},[n("p",{staticClass:"text-lg underline"},[this._v("Well, hello there.")]),n("p",[this._v("My name is Ignasi Granell. I make things, all kinds of things, but mainly web stuff (fronted & node backend), cool things in Unity 3D, and attempt to do some design every now and then.")]),n("p",[this._v("These days I'm busy learning about shaders, computer graphics and Go, and working on my bachelor's thesis.")]),n("p",[this._v("If you've got anything to tell me feel free to send an email to "),n("span",{staticClass:"code"},[this._v("ignasi.gv (at) outlook (dot) com")])])])}],!1,null,null,null);n.default=a.exports}}]);