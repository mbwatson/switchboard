(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{185:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(195);e.default=function(){return a.a.createElement(o.a,null,a.a.createElement("h2",null,"FAQs"),a.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis laborum consequatur ex aliquid recusandae."),a.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, totam sunt molestiae, incidunt pariatur delectus praesentium nesciunt vitae quos dolore. Soluta reprehenderit laboriosam fugiat eos pariatur repellendus consectetur quidem consequuntur possimus id architecto animi unde cupiditate voluptate natus, doloribus aspernatur, deleniti quia porro. Optio illum voluptate sit. Sapiente ad a at temporibus quaerat tempore earum alias ab, unde repellendus similique asperiores commodi! Earum, vel, assumenda."),a.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore accusantium ex officiis, qui dolore exercitationem inventore quas placeat, dolorum ullam eius autem odit a ducimus ipsa, fugit quod, vitae quae dolorem illo ut impedit."))}},192:function(n,e,t){var r;n.exports=(r=t(194))&&r.default||r},193:function(n){n.exports={data:{site:{siteMetadata:{title:"RENCI Switchboard",menuItems:[{text:"Home",path:"/"},{text:"SOPs",path:"/sops"},{text:"FAQs",path:"/faqs"},{text:null,path:null},{text:"Documents",path:"/docs"}]}}}}},194:function(n,e,t){"use strict";t.r(e);t(34);var r=t(0),a=t.n(r),o=t(4),i=t.n(o),c=t(60),u=t(2),l=function(n){var e=n.location,t=u.default.getResourcesForPathnameSync(e.pathname);return t?a.a.createElement(c.a,Object.assign({location:e,pageResources:t},t.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=l},195:function(n,e,t){"use strict";var r=t(190),a=t.n(r),o=t(193),i=t(0),c=t.n(i),u=t(4),l=t.n(u),s=t(191),d=t(33),m=t.n(d),p=(t(192),c.a.createContext({})),f=function(n){return c.a.createElement(p.Consumer,null,function(e){return n.data||e[n.query]&&e[n.query].data?(n.render||n.children)(n.data?n.data.data:e[n.query].data):c.a.createElement("div",null,"Loading (StaticQuery)")})};function v(){var n=a()(["\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n"]);return v=function(){return n},n}function h(){var n=a()(["\n    height: 5rem;\n    padding: 1rem;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    background-color: #333;\n    color: var(--color-white);\n    box-shadow 0 0 6px 3px rgba(0, 0, 0, 0.2);\n    z-index: 1;\n"]);return h=function(){return n},n}function g(){var n=a()(["\n    padding: ",";\n    line-height: ",";\n    transition: padding 250ms;\n    flex: 1;\n    filter: ",";\n    transition: filter 250ms, padding 250ms;\n    max-width: ","px;\n    a {\n        color: var(--color-primary);\n        border-bottom: 1px solid var(--color-primary);\n        transition: filter 250ms;\n        &:hover {\n            filter: brightness(50%);\n        }\n    }\n"]);return g=function(){return n},n}function b(){var n=a()(["\n    flex: 1;\n    display: flex;\n    flex-direction: row;\n    background-color: #f0f0f0;\n"]);return b=function(){return n},n}function w(){var n=a()(["\n    background-color: var(--color-black);\n    display: flex;\n    flex-direction: row;\n    align-items: stretch;\n    padding: 0;\n    margin: 0;\n    min-height: ",";\n    padding-right: ",";\n    transition: min-height 250ms, padding-right 250ms;\n    justify-content: space-between;\n    box-shadow 0 0 6px 3px rgba(0, 0, 0, 0.2);\n    z-index: 2;\n"]);return w=function(){return n},n}f.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func};var y=s.a.header(w(),function(n){return n.compact?"3rem":"5rem"},function(n){return n.compact?0:"1rem"}),x=s.a.main(b()),E=s.a.div(g(),function(n){return n.compact?"2rem":"3rem"},function(n){return n.compact?2:1.75},function(n){return n.dimmed?"opacity(0.25)":""},function(n){return n.maxWidth}),k=s.a.footer(h()),q=s.a.div(v());function j(){var n=a()(["\n    background-color: ",";\n    color: ",";\n    & svg {\n        fill: ",";\n    }\n    border-radius: ",";\n    outline: none;\n    border: 0;\n    background-color: transparent;\n    text-transform: uppercase;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: filter 250ms;\n    &:hover {\n        filter: brightness(0.7);\n    }\n"]);return j=function(){return n},n}var z=s.a.button(j(),function(n){return n.primary?"var(--color-primary)":"var(--color-white)"},function(n){return n.primary?"var(--color-white)":"var(--color-primary)"},function(n){return n.primary?"var(--color-white)":"var(--color-primary)"},function(n){return n.round?"3px":0});function O(){var n=a()(["\n    display: flex;\n    flex-direction: column;\n    border-right: 1px solid var(--color-grey);\n    background-color: var(--color-white);\n    transition: padding-top 250ms;\n    padding-top: ",";\n    width: ","px;\n    position: absolute;\n    top: 0;\n    left: -","px;\n    height: 100%;\n"]);return O=function(){return n},n}z.propTypes={round:l.a.bool.isRequired,primary:l.a.bool.isRequired,secondary:l.a.bool.isRequired},z.defaultProps={round:!1,primary:!1,secondary:!1};var H=s.a.div(O(),function(n){return n.compact?"1rem":"3rem"},function(n){return n.width},function(n){return n.width});function S(){var n=a()(['\n    border: 0;\n    cursor: pointer;\n    padding: 0.75rem 3rem;\n    transition: color 250ms;\n    color: var(--color-black);\n    transition: background-color 500ms;\n    background-color: transparent;\n    letter-spacing: 1px;\n    position: relative;\n    &::before {\n        position: absolute;\n        content: "";\n        top: 50%;\n        transform: translate(50%, -50%);\n        border-radius: 20%;\n        left: 0.75rem;\n        height: 0.75rem;\n        width: 0.75rem;\n        bottom: 0;\n        background-color: transparent;\n        transition: background-color 500ms;\n    }\n    &:hover {\n        &::before {\n            background-color: var(--color-grey);\n        }\n    }\n    &.active {\n        &::before {\n            background-color: var(--color-primary);\n        }\n    }\n']);return S=function(){return n},n}var L=Object(s.a)(m.a)(S());function M(){var n=a()(["\n    outline: none;\n    border: 0;\n    padding: 0.5rem 1rem;\n    text-transform: uppercase;\n    cursor: pointer;\n    transition: background-color 250ms;\n    background-color: var(--color-white);\n    &:hover {\n        background-color: var(--color-grey);\n    }\n"]);return M=function(){return n},n}s.a.button(M());function C(){var n=a()(["\n    width: 100%;\n    height: 1px;\n    background-color: var(--color-grey);\n    margin: 1rem 0;\n"]);return C=function(){return n},n}var R=s.a.div(C());function T(){var n=a()(["\n    font-size: ","\n    color: var(--color-white);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: font-size 250ms;\n    padding: 0;\n"]);return T=function(){return n},n}var I=s.a.div(T(),function(n){return n.compact?"100%":"150%"});function V(){var n=a()(["\n    background-color: transparent;\n"]);return V=function(){return n},n}function N(){var n=a()(["\n    position: absolute;\n    right: 1rem;\n    top: 0;\n    transform: translateY(50%);\n    color: var(--color-grey);\n    font-size: 75%;\n    transition: opacity 500ms;\n    opacity: ",";\n"]);return N=function(){return n},n}function B(){var n=a()(["\n    position: absolute;\n    top: -100%;\n    left: 0;\n    right: 0;\n    transform: translateY(",");\n    width: 100%;\n    height: 3rem;\n    border: 0;\n    outline: none;\n    background-color: var(--color-real-black);\n    padding: 0.5rem 1rem;\n    letter-spacing: 1px;\n    color: var(--color-grey);\n    transition: transform 250ms ease-out;\n    &::-webkit-input-placeholder { transition: opacity 250ms; opacity: 0.5; }\n    &::-moz-placeholder { transition: opacity 250ms; opacity: 0.5; }\n    &:hover, &:focus {\n        &::-webkit-input-placeholder { transition: opacity 250ms; opacity: 0.25; }\n        &::-moz-placeholder { transition: opacity 250ms; opacity: 0.25; }\n    }\n"]);return B=function(){return n},n}function F(){var n=a()(["\n    position: relative;\n    z-index: 1;\n"]);return F=function(){return n},n}var P=s.a.div(F()),W=s.a.input(B(),function(n){return n.open?"0%":"-100%"}),X=s.a.div(N(),function(n){return n.visible?.5:0}),A=(Object(s.a)(z)(V()),function(n){var e=n.open,t=n.searchHandler,r=Object(i.useState)(""),a=r[0],o=r[1],u=Object(i.useRef)();Object(i.useEffect)(function(){e&&u.current.focus()},[e]);return c.a.createElement(P,{showInstructions:""!==a},c.a.createElement(W,{ref:u,open:e,placeholder:"Search...",value:a,onChange:function(n){return o(n.target.value)},onKeyDown:function(n){"Enter"===n.key&&t()}}),e&&c.a.createElement(X,{visible:""!==a},"Press Enter"))});function D(){var n=a()(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: transform 500ms;\n    transform-origin: center;\n    transform: ",";\n"]);return D=function(){return n},n}var Q=s.a.div(D(),function(n){return n.rotated?"rotate(180deg)":"rotate(0)"});Q.propTypes={rotated:l.a.bool.isRequired};var Y=function(){return c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},c.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),c.a.createElement("path",{d:"M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}))},G=function(){return c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},c.a.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),c.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}))},J=function(){return c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},c.a.createElement("path",{d:"M0 0h24v24H0z",fill:"transparent"}),c.a.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}))},K=function(){return c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},c.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),c.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))},U="undefined"!=typeof window?window.innerWidth:null,Z=t(61);t(196),t(197);function $(){var n=a()(["\n    padding: 0 1rem;\n"]);return $=function(){return n},n}function _(){var n=a()(["\n    background-color: transparent;\n    & svg {\n        transition: fill 250ms;\n        fill: ",";\n    }\n"]);return _=function(){return n},n}function nn(){var n=a()(["\n    padding: 0 1rem;\n    transition: opacity 250ms, transform 250ms;\n    ","\n"]);return nn=function(){return n},n}var en=Object(s.a)(z)(nn(),function(n){return n.visible?"\n        opacity: 1.0;\n        pointer-events: default;\n        transform: translateX(0%)\n    ":"\n        opacity: 0.0;\n        pointer-events: none;\n        transform: translateX(-100%)\n    "}),tn=Object(s.a)(z)(_(),function(n){return n.active?"var(--color-white)":"var(--color-primary)"}),rn=Object(s.a)(z)($()),an=function(n){var e=n.children,t=function(n){void 0===n&&(n=U);var e=Object(i.useState)(n),t=e[0],r=e[1];return Object(i.useEffect)(function(){var n=function(){return r(window.innerWidth)};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),t}(),r=Object(i.useState)(!1),a=r[0],u=r[1],l=function(){return u(!a)},s=Object(i.useState)(!1),d=s[0],p=s[1],v=function(){return t<800},h=Object(i.useState)(v()),g=h[0],b=h[1],w=Object(Z.b)(),j=w.loginHandler,z=void 0===j?function(){}:j,O=w.logoutHandler,S=void 0===O?function(){}:O,M=w.isLoggedIn,C=void 0===M?function(){}:M,T=function(n){p(!d),console.log(d)},V=function(){setTimeout(function(){return p(!1)},500),console.log("Initialize search...")};Object(i.useEffect)(function(){b(v())},[t]);var N=function(){!0===a&&l(),!0===d&&T()};return c.a.createElement(f,{query:"4294781144",render:function(n){return c.a.createElement(q,{style:{overflow:"hidden"}},c.a.createElement(y,{compact:g},c.a.createElement(en,{visible:t<1080,onClick:l},g?null:"Menu"," ",c.a.createElement(Q,{rotated:a},c.a.createElement(G,null))),c.a.createElement(I,{compact:g,style:{flex:1}},c.a.createElement(m.a,{to:"/"},n.site.siteMetadata.title)),c.a.createElement(tn,{onClick:T,active:d},c.a.createElement(K,null)),C()?c.a.createElement(rn,{onClick:S},c.a.createElement(Y,null),"   ",g?null:"LOGOUT"):c.a.createElement(rn,{onClick:z},c.a.createElement(J,null),"   ",g?null:"LOGIN")),c.a.createElement(A,{open:d,searchHandler:V}),c.a.createElement(x,{style:{position:"relative",transform:a||t>=1080?"translateX(250px)":"translateX(0)",transition:"transform 500ms"}},c.a.createElement(H,{compact:g,width:250},n.site.siteMetadata.menuItems.map(function(n){var e=n.text,t=n.path;return e&&t?c.a.createElement(L,{key:e,to:t,activeClassName:"active"},e):c.a.createElement(R,{key:"asd"})})),c.a.createElement(E,{compact:g,pushedAside:a,dimmed:a||d,maxWidth:830,onClick:N},e)),c.a.createElement(k,null,"© ",(new Date).getFullYear()))},data:o})};an.propTypes={children:l.a.node.isRequired},t.d(e,"a",function(){return an})}}]);
//# sourceMappingURL=component---src-pages-faqs-js-579c95ab849ef7b162dc.js.map