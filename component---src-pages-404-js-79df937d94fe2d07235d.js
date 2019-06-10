(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{189:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),o=e(194),i=e(209),c=e(4),u=e.n(c),l=e(210),s=e.n(l),d=function(n){var t=n.description,e=n.lang,r=n.meta,o=n.title,c=i.data.site,u=t||c.siteMetadata.description;return a.a.createElement(s.a,{htmlAttributes:{lang:e},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:u}].concat(r)})};d.defaultProps={lang:"en",meta:[],description:""},d.propTypes={description:u.a.string,lang:u.a.string,meta:u.a.arrayOf(u.a.object),title:u.a.string.isRequired};t.default=function(){return a.a.createElement(o.a,null,a.a.createElement(d,{title:"404: Not found"}),a.a.createElement("h1",null,"NOT FOUND"),a.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},192:function(n,t,e){"use strict";e.d(t,"b",function(){return s});var r=e(0),a=e.n(r),o=e(4),i=e.n(o),c=e(33),u=e.n(c);e.d(t,"a",function(){return u.a}),e.d(t,"c",function(){return c.navigate});e(193);var l=a.a.createContext({}),s=function(n){return a.a.createElement(l.Consumer,null,function(t){return n.data||t[n.query]&&t[n.query].data?(n.render||n.children)(n.data?n.data.data:t[n.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},193:function(n,t,e){var r;n.exports=(r=e(197))&&r.default||r},194:function(n,t,e){"use strict";var r=e(190),a=e.n(r),o=e(196),i=e(0),c=e.n(i),u=e(4),l=e.n(u),s=e(191),d=e(192);function m(){var n=a()(["\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n"]);return m=function(){return n},n}function f(){var n=a()(["\n    height: 5rem;\n    padding: 1rem;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    background-color: #333;\n    color: var(--color-white);\n    box-shadow 0 0 6px 3px rgba(0, 0, 0, 0.2);\n    z-index: 1;\n"]);return f=function(){return n},n}function p(){var n=a()(["\n    padding: ",";\n    line-height: ",";\n    transition: padding 250ms;\n    flex: 1;\n    filter: ",";\n    transition: filter 250ms, padding 250ms;\n    max-width: ","px;\n    a {\n        color: var(--color-primary);\n        border-bottom: 1px solid var(--color-primary);\n        transition: filter 250ms;\n        &:hover {\n            filter: brightness(50%);\n        }\n    }\n"]);return p=function(){return n},n}function v(){var n=a()(["\n    flex: 1;\n    display: flex;\n    flex-direction: row;\n    background-color: #f0f0f0;\n"]);return v=function(){return n},n}function h(){var n=a()(["\n    background-color: var(--color-black);\n    display: flex;\n    flex-direction: row;\n    align-items: stretch;\n    padding: 0;\n    margin: 0;\n    min-height: ",";\n    padding-right: ",";\n    transition: min-height 250ms, padding-right 250ms;\n    justify-content: space-between;\n    box-shadow 0 0 6px 3px rgba(0, 0, 0, 0.2);\n    z-index: 2;\n"]);return h=function(){return n},n}var g=s.a.header(h(),function(n){return n.compact?"3rem":"5rem"},function(n){return n.compact?0:"1rem"}),b=s.a.main(v()),w=s.a.div(p(),function(n){return n.compact?"2rem":"3rem"},function(n){return n.compact?2:1.75},function(n){return n.dimmed?"opacity(0.25)":""},function(n){return n.maxWidth}),y=s.a.footer(f()),x=s.a.div(m());function E(){var n=a()(["\n    background-color: ",";\n    color: ",";\n    & svg {\n        fill: ",";\n    }\n    border-radius: ",";\n    outline: none;\n    border: 0;\n    background-color: transparent;\n    text-transform: uppercase;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: filter 250ms;\n    &:hover {\n        filter: brightness(0.7);\n    }\n"]);return E=function(){return n},n}var k=s.a.button(E(),function(n){return n.primary?"var(--color-primary)":"var(--color-white)"},function(n){return n.primary?"var(--color-white)":"var(--color-primary)"},function(n){return n.primary?"var(--color-white)":"var(--color-primary)"},function(n){return n.round?"3px":0});function j(){var n=a()(["\n    display: flex;\n    flex-direction: column;\n    border-right: 1px solid var(--color-grey);\n    background-color: var(--color-white);\n    transition: padding-top 250ms;\n    padding-top: ",";\n    width: ","px;\n    position: absolute;\n    top: 0;\n    left: -","px;\n    height: 100%;\n"]);return j=function(){return n},n}k.propTypes={round:l.a.bool.isRequired,primary:l.a.bool.isRequired,secondary:l.a.bool.isRequired},k.defaultProps={round:!1,primary:!1,secondary:!1};var O=s.a.div(j(),function(n){return n.compact?"1rem":"3rem"},function(n){return n.width},function(n){return n.width});function z(){var n=a()(['\n    border: 0;\n    cursor: pointer;\n    padding: 0.75rem 3rem;\n    transition: color 250ms;\n    color: var(--color-black);\n    transition: background-color 500ms;\n    background-color: transparent;\n    letter-spacing: 1px;\n    position: relative;\n    &::before {\n        position: absolute;\n        content: "";\n        top: 50%;\n        transform: translate(50%, -50%);\n        border-radius: 20%;\n        left: 0.75rem;\n        height: 0.75rem;\n        width: 0.75rem;\n        bottom: 0;\n        background-color: transparent;\n        transition: background-color 500ms;\n    }\n    &:hover {\n        &::before {\n            background-color: var(--color-grey);\n        }\n    }\n    &.active {\n        &::before {\n            background-color: var(--color-primary);\n        }\n    }\n']);return z=function(){return n},n}var S=Object(s.a)(d.a)(z());function M(){var n=a()(["\n    outline: none;\n    border: 0;\n    padding: 0.5rem 1rem;\n    text-transform: uppercase;\n    cursor: pointer;\n    transition: background-color 250ms;\n    background-color: var(--color-white);\n    &:hover {\n        background-color: var(--color-grey);\n    }\n"]);return M=function(){return n},n}s.a.button(M());function q(){var n=a()(["\n    width: 100%;\n    height: 1px;\n    background-color: var(--color-grey);\n    margin: 1rem 0;\n"]);return q=function(){return n},n}var R=s.a.div(q());function H(){var n=a()(["\n    font-size: ","\n    color: var(--color-white);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: font-size 250ms;\n    padding: 0;\n"]);return H=function(){return n},n}var C=s.a.div(H(),function(n){return n.compact?"100%":"150%"});function I(){var n=a()(["\n    background-color: transparent;\n"]);return I=function(){return n},n}function L(){var n=a()(["\n    position: absolute;\n    right: 1rem;\n    top: 0;\n    transform: translateY(50%);\n    color: var(--color-grey);\n    font-size: 75%;\n    transition: opacity 500ms;\n    opacity: ",";\n"]);return L=function(){return n},n}function N(){var n=a()(["\n    position: absolute;\n    top: -100%;\n    left: 0;\n    right: 0;\n    transform: translateY(",");\n    width: 100%;\n    height: 3rem;\n    border: 0;\n    outline: none;\n    background-color: var(--color-real-black);\n    padding: 0.5rem 1rem;\n    letter-spacing: 1px;\n    color: var(--color-grey);\n    transition: transform 250ms ease-out;\n    &::-webkit-input-placeholder { transition: opacity 250ms; opacity: 0.5; }\n    &::-moz-placeholder { transition: opacity 250ms; opacity: 0.5; }\n    &:hover, &:focus {\n        &::-webkit-input-placeholder { transition: opacity 250ms; opacity: 0.25; }\n        &::-moz-placeholder { transition: opacity 250ms; opacity: 0.25; }\n    }\n"]);return N=function(){return n},n}function T(){var n=a()(["\n    position: relative;\n    z-index: 1;\n"]);return T=function(){return n},n}var V=s.a.div(T()),D=s.a.input(N(),function(n){return n.open?"0%":"-100%"}),P=s.a.div(L(),function(n){return n.visible?.5:0}),U=(Object(s.a)(k)(I()),function(n){var t=n.open,e=n.searchHandler,r=Object(i.useState)(""),a=r[0],o=r[1],u=Object(i.useRef)();Object(i.useEffect)(function(){t&&u.current.focus()},[t]);return c.a.createElement(V,{showInstructions:""!==a},c.a.createElement(D,{ref:u,open:t,placeholder:"Search...",value:a,onChange:function(n){return o(n.target.value)},onKeyDown:function(n){"Enter"===n.key&&e()}}),t&&c.a.createElement(P,{visible:""!==a},"Press Enter"))});function B(){var n=a()(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: transform 500ms;\n    transform-origin: center;\n    transform: ",";\n"]);return B=function(){return n},n}var F=s.a.div(B(),function(n){return n.rotated?"rotate(180deg)":"rotate(0)"});F.propTypes={rotated:l.a.bool.isRequired};var J,W=function(){return c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},c.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),c.a.createElement("path",{d:"M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}))},X=function(){return c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},c.a.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),c.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}))},Y=function(){return c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},c.a.createElement("path",{d:"M0 0h24v24H0z",fill:"transparent"}),c.a.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}))},A=function(){return c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},c.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),c.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))};"undefined"!=typeof window&&(J=window.innerWidth,console.log(J));var G=e(195);e(199),e(200);function Q(){var n=a()(["\n    padding: 0 1rem;\n"]);return Q=function(){return n},n}function K(){var n=a()(["\n    background-color: transparent;\n    & svg {\n        transition: fill 250ms;\n        fill: ",";\n    }\n"]);return K=function(){return n},n}function Z(){var n=a()(["\n    padding: 0 1rem;\n    transition: opacity 250ms, transform 250ms;\n    ","\n"]);return Z=function(){return n},n}var $=Object(s.a)(k)(Z(),function(n){return n.visible?"\n        opacity: 1.0;\n        pointer-events: default;\n        transform: translateX(0%)\n    ":"\n        opacity: 0.0;\n        pointer-events: none;\n        transform: translateX(-100%)\n    "}),_=Object(s.a)(k)(K(),function(n){return n.active?"var(--color-white)":"var(--color-primary)"}),nn=Object(s.a)(k)(Q()),tn=function(n){var t=n.children,e=function(n){void 0===n&&(n=J);var t=Object(i.useState)(n),e=t[0],r=t[1];return Object(i.useEffect)(function(){var n=function(){return r(window.innerWidth)};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),e}(),r=Object(i.useState)(!1),a=r[0],u=r[1],l=function(){return u(!a)},s=Object(i.useState)(!1),m=s[0],f=s[1],p=function(){return e<800},v=Object(i.useState)(p()),h=v[0],E=v[1],k=function(n){f(!m),console.log(m)},j=function(){setTimeout(function(){return f(!1)},500),console.log("Initialize search...")},z=function(n){n.preventDefault(),Object(G.b)()};Object(i.useEffect)(function(){E(p())},[e]);var M=function(){!0===a&&l(),!0===m&&k()};return c.a.createElement(d.b,{query:"4294781144",render:function(n){return c.a.createElement(x,{style:{overflow:"hidden"}},c.a.createElement(g,{compact:h},c.a.createElement($,{visible:e<1080,onClick:l},h?null:"Menu"," ",c.a.createElement(F,{rotated:a},c.a.createElement(X,null))),c.a.createElement(C,{compact:h,style:{flex:1}},c.a.createElement(d.a,{to:"/"},n.site.siteMetadata.title)),c.a.createElement(_,{onClick:k,active:m},c.a.createElement(A,null)),Object(G.a)()?c.a.createElement(nn,{onClick:z},c.a.createElement(W,null),"   ",h?null:"LOGOUT"):c.a.createElement(nn,{as:"a",href:"/"},c.a.createElement(Y,null),"   ",h?null:"LOGIN")),c.a.createElement(U,{open:m,searchHandler:j}),c.a.createElement(b,{style:{position:"relative",transform:a||e>=1080?"translateX(250px)":"translateX(0)",transition:"transform 500ms"}},c.a.createElement(O,{compact:h,width:250},n.site.siteMetadata.menuItems.map(function(n){var t=n.text,e=n.path;return t&&e?c.a.createElement(S,{key:t,to:e,activeClassName:"active"},t):c.a.createElement(R,null)})),c.a.createElement(w,{compact:h,pushedAside:a,dimmed:a||m,maxWidth:830,onClick:M},t)),c.a.createElement(y,null,"© ",(new Date).getFullYear()))},data:o})};x.propTypes={children:l.a.node.isRequired},e.d(t,"a",function(){return tn})},195:function(n,t,e){"use strict";e.d(t,"a",function(){return i}),e.d(t,"b",function(){return c});e(198);var r=e(14),a=function(){return"undefined"!=typeof window&&window.localStorage.getItem("gatsbyUser")?JSON.parse(window.localStorage.getItem("gatsbyUser")):{}},o=function(n){return window.localStorage.setItem("gatsbyUser",JSON.stringify(n))},i=function(){a();return!0},c=function(n){o({}),Object(r.navigate)("/")}},196:function(n){n.exports={data:{site:{siteMetadata:{title:"RENCI Switchboard",menuItems:[{text:"Home",path:"/"},{text:"SOPs",path:"sops"},{text:"FAQs",path:"faqs"},{text:null,path:null},{text:"Documents",path:"docs"}]}}}}},197:function(n,t,e){"use strict";e.r(t);e(34);var r=e(0),a=e.n(r),o=e(4),i=e.n(o),c=e(60),u=e(2),l=function(n){var t=n.location,e=u.default.getResourcesForPathnameSync(t.pathname);return e?a.a.createElement(c.a,Object.assign({location:t,pageResources:e},e.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},209:function(n){n.exports={data:{site:{siteMetadata:{title:"RENCI Switchboard",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus animi harum accusantium!",author:"mw"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-79df937d94fe2d07235d.js.map