(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7pzU":function(e,t,n){e.exports=n.p+"static/profile-a3797e645e79b21302dc98c81ba92b2c.png"},Dtc0:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),r=n.n(i),o=n("vOnD"),a=n("ntAx"),l=n("DGZL"),c=n("bSql"),s=n("PZY4"),u=n("XUsr"),m=n("C4nX"),f=o.d.div.withConfig({displayName:"pages__Space",componentId:"sc-1aj0tip-0"})(["height:3rem;"]);t.default=function(e){var t=e.data,n=(e.location,t.allMarkdownRemark.nodes);return 0===n.length?r.a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).'):r.a.createElement(a.a,null,r.a.createElement(l.a,{title:m.title,description:m.description,url:m.siteUrl}),r.a.createElement(f,null),r.a.createElement(c.a,null),r.a.createElement(u.a,null),r.a.createElement(s.a,{postList:n}))}},DzJC:function(e,t,n){var i=n("sEfC"),r=n("GoyQ");e.exports=function(e,t,n){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return r(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),i(e,t,{leading:o,maxWait:t,trailing:a})}},GoyQ:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},PZY4:function(e,t,n){"use strict";var i=n("DzJC"),r=n.n(i),o=n("q1tI"),a=n.n(o),l=n("vOnD"),c=n("Wbzz"),s=n("PyCY"),u=n("XUsr"),m=n("GxtF"),f=l.d.div.withConfig({displayName:"PostList__PostListWrapper",componentId:"sc-1oqnm6-0"})(["@media (max-width:768px){padding:0 10px;}"]),d=l.d.div.withConfig({displayName:"PostList__PostWrapper",componentId:"sc-1oqnm6-1"})(["position:relative;top:0;transition:all 0.5s;@media (max-width:768px){padding:0 5px;}"]),p=l.d.p.withConfig({displayName:"PostList__Date",componentId:"sc-1oqnm6-2"})(["margin-bottom:1rem;font-size:0.9rem;color:",";"],(function(e){return e.theme.colors.tertiaryText})),g=l.d.p.withConfig({displayName:"PostList__Excerpt",componentId:"sc-1oqnm6-3"})(["margin-bottom:2rem;line-height:1.7;font-size:1rem;color:",";"],(function(e){return e.theme.colors.secondaryText}));t.a=function(e){var t=e.postList,n=Object(o.useState)(10),i=n[0],l=n[1],h=r()((function(){var e,t,n,r;e="innerHeight"in window?window.innerHeight:document.documentElement.offsetHeight,t=document.body,n=document.documentElement,r=Math.max(t.scrollHeight,t.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight),e+window.pageYOffset>=r&&l(i+10)}),250);return Object(o.useEffect)((function(){return window.addEventListener("scroll",h),function(){window.removeEventListener("scroll",h)}}),[i]),Object(o.useEffect)((function(){l(10)}),[t]),a.a.createElement(f,null,t.slice(0,i).map((function(e,n){var i=e.frontmatter,r=i.title,o=i.date,l=i.tags,f=e.excerpt,h=e.fields.slug;return a.a.createElement(a.a.Fragment,null,a.a.createElement(d,null,a.a.createElement(s.a,{size:"bg"},a.a.createElement(c.Link,{to:h},r)),a.a.createElement(p,null,o),a.a.createElement(g,null,f),a.a.createElement(m.a,{tagList:l})),t.length-1!==n&&a.a.createElement(u.a,{mt:"3rem",mb:"2rem"}))})))}},PyCY:function(e,t,n){"use strict";var i=n("q1tI"),r=n.n(i),o=n("vOnD").d.h1.withConfig({displayName:"Title__Wrapper",componentId:"sc-1ttlsnf-0"})(["margin-bottom:1.5rem;font-size:",";font-weight:700;line-height:1.3;color:",";& > a{text-decoration:none;color:inherit;transition:all 0.2s;}& > a:hover{color:",";}"],(function(e){return e.size}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.secondaryText}));t.a=function(e){var t=e.size,n=e.children;return r.a.createElement(o,{size:{sm:"1.2rem",md:"1.6rem",bg:"2.1rem"}[t]}," ",n," ")}},QIyF:function(e,t,n){var i=n("Kz5y");e.exports=function(){return i.Date.now()}},TO8r:function(e,t){var n=/\s/;e.exports=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},bSql:function(e,t,n){"use strict";var i=n("q1tI"),r=n.n(i),o=n("vOnD"),a=n("7pzU"),l=n.n(a),c=n("ma3e"),s=n("C4nX"),u=o.d.div.withConfig({displayName:"Bio__BioWrapper",componentId:"sc-5v8ml6-0"})(["display:flex;align-items:center;@media (max-width:768px){padding:0 15px;}"]),m=o.d.div.withConfig({displayName:"Bio__Profile",componentId:"sc-5v8ml6-1"})(["flex:0 0 auto;margin-right:1rem;width:8rem;height:8rem;border-radius:999px;background-image:url(",");background-size:cover;background-position:center;"],l.a),f=o.d.div.withConfig({displayName:"Bio__Author",componentId:"sc-5v8ml6-2"})(["margin-bottom:0.3rem;font-size:1.5rem;font-weight:700;color:",";"],(function(e){return e.theme.colors.text})),d=o.d.div.withConfig({displayName:"Bio__Description",componentId:"sc-5v8ml6-3"})(["margin-bottom:0.7rem;line-height:1.5;font-size:1rem;color:",";"],(function(e){return e.theme.colors.secondaryText})),p=o.d.div.withConfig({displayName:"Bio__LinksWrapper",componentId:"sc-5v8ml6-4"})(["& a{margin-right:0.6rem;}& svg{width:1.6rem;height:1.6rem;cursor:pointer;}& svg path{fill:",";transition:fill 0.3s;}& a:hover svg path{fill:",";}"],(function(e){return e.theme.colors.icon}),(function(e){return e.theme.colors.text})),g=function(e){var t=e.link,n=e.children;return t?r.a.createElement("a",{href:t,target:"_blank"},n):null};t.a=function(){var e=s.links.github,t=s.links.instagram,n=s.links.facebook,i=s.links.linkedIn,o=s.links.etc;return r.a.createElement(u,{id:"bio"},r.a.createElement(m,null),r.a.createElement("div",null,r.a.createElement(f,null,"@",s.author),r.a.createElement(d,null,s.description),r.a.createElement(p,null,r.a.createElement(g,{link:e},r.a.createElement(c.b,null)),r.a.createElement(g,{link:t},r.a.createElement(c.c,null)),r.a.createElement(g,{link:n},r.a.createElement(c.a,null)),r.a.createElement(g,{link:i},r.a.createElement(c.e,null)),r.a.createElement(g,{link:o},r.a.createElement(c.d,null)))))}},jXQH:function(e,t,n){var i=n("TO8r"),r=/^\s+/;e.exports=function(e){return e?e.slice(0,i(e)+1).replace(r,""):e}},sEfC:function(e,t,n){var i=n("GoyQ"),r=n("QIyF"),o=n("tLB3"),a=Math.max,l=Math.min;e.exports=function(e,t,n){var c,s,u,m,f,d,p=0,g=!1,h=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function E(t){var n=c,i=s;return c=s=void 0,p=t,m=e.apply(i,n)}function w(e){return p=e,f=setTimeout(y,t),g?E(e):m}function x(e){var n=e-d;return void 0===d||n>=t||n<0||h&&e-p>=u}function y(){var e=r();if(x(e))return b(e);f=setTimeout(y,function(e){var n=t-(e-d);return h?l(n,u-(e-p)):n}(e))}function b(e){return f=void 0,v&&c?E(e):(c=s=void 0,m)}function k(){var e=r(),n=x(e);if(c=arguments,s=this,d=e,n){if(void 0===f)return w(d);if(h)return clearTimeout(f),f=setTimeout(y,t),E(d)}return void 0===f&&(f=setTimeout(y,t)),m}return t=o(t)||0,i(n)&&(g=!!n.leading,u=(h="maxWait"in n)?a(o(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),k.cancel=function(){void 0!==f&&clearTimeout(f),p=0,c=d=s=f=void 0},k.flush=function(){return void 0===f?m:b(r())},k}},tLB3:function(e,t,n){var i=n("jXQH"),r=n("GoyQ"),o=n("/9aa"),a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=i(e);var n=l.test(e);return n||c.test(e)?s(e.slice(2),n?2:8):a.test(e)?NaN:+e}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-a254ec10ac773f1274fd.js.map