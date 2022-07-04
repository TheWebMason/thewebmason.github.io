/*! For license information please see main.9c519d02.chunk.js.LICENSE.txt */
(this["webpackJsonp@thewebmason/react-app"]=this["webpackJsonp@thewebmason/react-app"]||[]).push([[0],{108:function(e,t,c){},116:function(e,t,c){},117:function(e,t,c){},118:function(e,t,c){},119:function(e,t,c){},120:function(e,t,c){},121:function(e,t,c){},122:function(e,t,c){},123:function(e,t,c){},126:function(e,t,c){"use strict";c.r(t);var a=c(15),s=c.n(a),i=(c(81),c(82),c(83),c(84),c(85),c(86),c(87),c(1)),r=c(62),n=c.n(r),l=c(76),o=c(130),d=c(29),j=c(63),m=c(53),h=c(24),b=c(64),O={en:{translation:c(65)}};m.a.use(b.a).use(h.e).init({detection:{order:["querystring","localStorage","navigator"],lookupQuerystring:"lng",lookupLocalStorage:"lng",lookupCookie:"lng",caches:["localStorage","cookie"],excludeCacheFor:["cimode"]},supportedLngs:["en"],ns:["translation"],fallbackLng:"en",fallbackNS:"translation",resources:O,debug:!1,react:{useSuspense:!0},keySeparator:!1,interpolation:{escapeValue:!1}});var x=m.a,p=c(0),v=[];function g(e){var t=e.children;return Object(i.useEffect)((function(){n.a.init({})}),[]),Object(p.jsx)(i.Suspense,{fallback:null,children:Object(p.jsxs)("div",{id:"app",children:[Object(p.jsx)("div",{className:"line"}),Object(p.jsx)(o.a,{i18n:x,children:Object(p.jsx)(d.a,{children:Object(p.jsx)(j.ModalProvider,{value:v,children:t})})}),Object(p.jsx)(l.a,{position:"top-right",autoClose:2500,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,style:{zIndex:1e4,width:"350px"},theme:"dark"})]})})}function f(){return null}var u=c(6),N="/",_="/contact",w="/sitemap",k="/legal",y="/legal/terms",C="/legal/privacy",T="/legal/privacy/cookies",F=c(8),M=c(9),S=c(18),W=c(40),L=c(132);c(108);function I(){var e=Object(L.a)().t;return Object(p.jsxs)("div",{className:"error-component",children:[Object(p.jsx)("h1",{children:e("Something went wrong")}),Object(p.jsx)("h2",{children:e("We are working to resolve the problem")})]})}var B=function(e){Object(S.a)(c,e);var t=Object(W.a)(c);function c(e){var a;return Object(F.a)(this,c),(a=t.call(this,e)).state={error:null},a}return Object(M.a)(c,[{key:"componentDidCatch",value:function(e){this.setState({error:e})}},{key:"render",value:function(){return this.state.error?Object(p.jsx)(I,{}):this.props.children}}]),c}(i.Component),P=c(16),E=c(131),A=c(70);function D(){return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[]),null}var H="TheWebMasonOrg",J="https://twitter.com/".concat(H);function Z(e){var t=e.title,c=e.description,a=e.meta,s=e.children,i=Object(L.a)(),r=i.i18n,n=c,l=(0,i.t)("projectName");return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(D,{}),Object(p.jsx)(A.a,{htmlAttributes:{lang:r.language},title:t,defaultTitle:l,titleTemplate:l?"%s | ".concat(l):void 0,meta:[{name:"description",content:n},{property:"og:title",content:t},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:H},{name:"twitter:title",content:t},{name:"twitter:description",content:n}].concat(a)}),s]})}var R=c(23),U=c(3),q=c(20);var V=["external","href","to"],X=function(e){var t=e.external,c=e.href,a=e.to,s=Object(q.a)(e,V),i=t?{target:"_blank",rel:"noreferrer noopener"}:{};return t?Object(p.jsx)("a",Object(U.a)(Object(U.a)({href:c},i),s)):Object(p.jsx)(d.b,Object(U.a)(Object(U.a)({to:a},i),s))};X.defaultProps={};var z=X,Q=["children"],Y=function(e){var t=e.children,c=Object(q.a)(e,Q);return Object(p.jsx)(z,Object(U.a)(Object(U.a)({external:!0},c),{},{children:t}))},K=c.p+"static/media/logo.860fdf85.svg",G=c.p+"static/media/menu.65b629e8.svg",$=c.p+"static/media/menu-close.48acb32e.svg";c(116);function ee(e){e.fixed;var t=Object(i.useState)(!1),c=Object(P.a)(t,2),a=c[0],s=c[1];return Object(i.useEffect)((function(){return R.Events.scrollEvent.register("begin",(function(e,t){s(!1)})),function(){R.Events.scrollEvent.remove("begin")}}),[]),Object(p.jsxs)("header",{className:"header",children:[a&&Object(p.jsx)("div",{className:"header-mobile",children:Object(p.jsx)("div",{className:"mobile-menu",children:Object(p.jsxs)("nav",{className:"nav",children:[Object(p.jsx)(R.Link,{to:"about",children:"About us"}),Object(p.jsx)(R.Link,{to:"vision",children:"Our vision"}),Object(p.jsx)(R.Link,{to:"projects",children:"Projects"}),Object(p.jsx)(R.Link,{to:"roadmap",children:"Roadmap"}),Object(p.jsx)(R.Link,{to:"team",children:"Team"}),Object(p.jsx)("a",{href:"#",className:"active",children:"Whitepaper"})]})})}),Object(p.jsx)("div",{className:"header-desctop",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"row justify-content-between align-items-center",children:[Object(p.jsx)("div",{className:"col-auto col-lg-auto order-1 order-lg-1",children:Object(p.jsxs)("div",{className:"logo",children:[Object(p.jsxs)("span",{className:"open-menu d-lg-none",onClick:function(){s(!a)},children:[!a&&Object(p.jsx)("img",{src:G,alt:"",title:""}),a&&Object(p.jsx)("img",{src:$,alt:"",title:""})]}),Object(p.jsx)("img",{src:K,alt:"",title:"",width:"70",height:"32"})]})}),Object(p.jsx)("div",{className:"col-auto col-lg-auto header-offset-1 order-3 order-lg-3",children:Object(p.jsxs)("div",{className:"lang-switcher",children:[Object(p.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.1808 16.293C13.055 15.0447 13.9642 13.2088 14.1458 10.833H16.6083C16.2892 13.3763 14.5342 15.4747 12.1808 16.293ZM3.39082 10.833H5.88416C6.05582 13.218 6.95332 15.0463 7.83916 16.3005C5.47499 15.4863 3.71166 13.3838 3.39082 10.833ZM7.86499 3.69043C6.98832 4.93876 6.07082 6.78043 5.88749 9.16627H3.39082C3.71249 6.60626 5.48832 4.4971 7.86499 3.69043ZM7.56582 9.16651C7.82082 6.43984 9.21582 4.5415 10.0217 3.664C10.855 4.5565 12.2283 6.43734 12.4658 9.16651H7.56582ZM7.56666 10.833H12.4683C12.2133 13.5638 10.815 15.4622 10.01 16.3397C9.13749 15.4147 7.79916 13.5597 7.56666 10.833ZM16.6083 9.16651H14.1483C13.9775 6.79234 13.09 4.96984 12.2083 3.71734C14.5483 4.54234 16.2908 6.63317 16.6083 9.16651ZM18.3333 9.99984C18.3333 5.41317 14.6075 1.6815 10.0233 1.66817C10.02 1.66817 10.0167 1.66734 10.0125 1.66734C10.0092 1.66734 10.0042 1.6665 9.99999 1.6665C5.40499 1.6665 1.66666 5.40567 1.66666 9.99984C1.66666 14.5948 5.40499 18.3332 9.99999 18.3332C10.005 18.3332 10.0092 18.3323 10.0125 18.3323C10.0142 18.3323 10.015 18.3332 10.0167 18.3332C10.0192 18.3332 10.0217 18.3315 10.0233 18.3315C14.6075 18.319 18.3333 14.5865 18.3333 9.99984Z",fill:"white"})}),Object(p.jsx)("span",{className:"current",children:"EN"})]})}),Object(p.jsx)("div",{className:"col-auto col-lg-auto header-offset-2 order-2 order-lg-4",children:Object(p.jsx)("a",{href:"#",className:"link",children:"Sign in"})}),Object(p.jsx)("div",{className:"col order-lg-2 d-none d-lg-block",children:Object(p.jsxs)("nav",{className:"nav",children:[Object(p.jsx)("a",{href:"#about",children:"About us"}),Object(p.jsx)("a",{href:"#vision",children:"Our vision"}),Object(p.jsx)("a",{href:"#projects",children:"Projects"}),Object(p.jsx)("a",{href:"#roadmap",children:"Roadmap"}),Object(p.jsx)("a",{href:"#team",children:"Team"}),Object(p.jsx)("a",{href:"#",className:"active",children:"Whitepaper"})]})})]})})})]})}var te=c.p+"static/media/telegramm.27e10dc5.svg",ce=c.p+"static/media/twitter.5604398b.svg",ae=c.p+"static/media/facebook.a6a91fee.svg",se=c.p+"static/media/instagram.f265fb21.svg",ie=c.p+"static/media/linkedin.3f0d7060.svg";c.p,c(117);function re(){return Object(p.jsxs)("footer",{className:"footer",children:[Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-12 col-lg-3",children:[Object(p.jsx)("div",{className:"footer-logo",children:Object(p.jsx)("img",{src:K,alt:"TWM Logo",title:"TheWebMason Logo",width:"70",height:"32"})}),Object(p.jsxs)("div",{className:"footer-soc",children:[Object(p.jsx)("div",{className:"footer-soc__title",children:"Follow Us"}),Object(p.jsxs)("div",{className:"footer-soc__soc soc",children:[Object(p.jsx)(Y,{href:J,children:Object(p.jsx)("img",{src:ce,alt:"Twitter Icon",title:"Twitter",width:"24",height:""})}),Object(p.jsx)(Y,{href:"https://t.me/TheWebMason",children:Object(p.jsx)("img",{src:te,alt:"Telegram Icon",title:"Telegram",width:"24",height:""})}),Object(p.jsx)(Y,{href:"https://www.linkedin.com/company/thewebmason",children:Object(p.jsx)("img",{src:ie,alt:"LinkedIn Icon",title:"LinkedIn",width:"24",height:""})}),Object(p.jsx)(Y,{href:"https://www.facebook.com/TheWebMason",children:Object(p.jsx)("img",{src:ae,alt:"Facebook Icon",title:"Facebook",width:"24",height:""})}),Object(p.jsx)(Y,{href:"https://www.instagram.com/thewebmasonorg/",children:Object(p.jsx)("img",{src:se,alt:"Instagram Icon",title:"Instagram",width:"24",height:""})})]})]})]}),Object(p.jsx)("div",{className:"col-6 col-lg-3",children:Object(p.jsxs)("div",{className:"footer-menu",children:[Object(p.jsx)("div",{className:"footer-menu__title",children:"TheWebMason"}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(z,Object(U.a)(Object(U.a)({to:""},{target:"_blank",rel:"noreferrer noopener"}),{},{children:"Blockchain"}))}),Object(p.jsx)("li",{children:Object(p.jsx)(z,Object(U.a)(Object(U.a)({to:""},{target:"_blank",rel:"noreferrer noopener"}),{},{children:"NFT Collections"}))}),Object(p.jsx)("li",{children:Object(p.jsx)(z,Object(U.a)(Object(U.a)({to:""},{target:"_blank",rel:"noreferrer noopener"}),{},{children:"NFT Marketplace"}))}),Object(p.jsx)("li",{children:Object(p.jsx)(z,Object(U.a)(Object(U.a)({to:""},{target:"_blank",rel:"noreferrer noopener"}),{},{children:"Freelance Platform"}))})]})]})}),Object(p.jsx)("div",{className:"col-6 col-lg-3",children:Object(p.jsxs)("div",{className:"footer-menu",children:[Object(p.jsx)("div",{className:"footer-menu__title",children:"Services"}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(z,Object(U.a)(Object(U.a)({to:""},{target:"_blank",rel:"noreferrer noopener"}),{},{children:"NFT"}))}),Object(p.jsx)("li",{children:Object(p.jsx)(z,Object(U.a)(Object(U.a)({to:""},{target:"_blank",rel:"noreferrer noopener"}),{},{children:"DeFi"}))}),Object(p.jsx)("li",{children:Object(p.jsx)(z,Object(U.a)(Object(U.a)({to:""},{target:"_blank",rel:"noreferrer noopener"}),{},{children:"Blockchain"}))})]})]})})]})}),Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"footer-line"})}),Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"row align-items-lg-center justify-content-between",children:[Object(p.jsx)("div",{className:"col-6 col-lg-auto order-2 order-lg-1",children:Object(p.jsxs)("div",{className:"footer-copy",children:["All right reserved \xa9 Copyright 2021-",(new Date).getFullYear()]})}),Object(p.jsx)("div",{className:"col-12 col-lg-auto order-1 order-lg-2",children:Object(p.jsxs)("div",{className:"fmenu",children:[Object(p.jsx)(z,Object(U.a)(Object(U.a)({to:y},{target:"_blank",rel:"noreferrer noopener"}),{},{children:"Terms of Use"})),Object(p.jsx)(z,Object(U.a)(Object(U.a)({to:C},{target:"_blank",rel:"noreferrer noopener"}),{},{children:"Privacy Policy"})),Object(p.jsx)(z,Object(U.a)(Object(U.a)({to:T},{target:"_blank",rel:"noreferrer noopener"}),{},{children:"Use of Cookies"})),Object(p.jsx)(z,Object(U.a)(Object(U.a)({to:k},{target:"_blank",rel:"noreferrer noopener"}),{},{children:"Legal"})),Object(p.jsx)(z,Object(U.a)(Object(U.a)({to:_},{target:"_blank",rel:"noreferrer noopener"}),{},{children:"Contact Us"})),Object(p.jsx)(z,Object(U.a)(Object(U.a)({to:w},{target:"_blank",rel:"noreferrer noopener"}),{},{children:"Site Map"}))]})}),Object(p.jsx)("div",{className:"col-6 col-lg-auto order-3 order-lg-3",children:Object(p.jsx)("div",{className:"author",children:" "})})]})})]})}c(118);function ne(){return Object(p.jsx)("section",{id:"about",className:"section-about","data-aos":"fade-in",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-12 col-lg-6",children:[Object(p.jsx)("h2",{className:"title","data-aos":"fade-right","data-delay":"100",children:"About Us"}),Object(p.jsx)("p",{className:"desc","data-aos":"fade-right","data-delay":"400",children:"TheWebMason, Inc. is a company that grew out of its founder, who went from an engineer to a professional blockchain developer growing his company."}),Object(p.jsx)("p",{className:"desc","data-aos":"fade-right","data-delay":"700",children:"The company strives to expand the IT market and increase the implementation of blockchain technologies in everyday life."}),Object(p.jsx)("p",{className:"desc","data-aos":"fade-right","data-delay":"1000",children:"We will help you develop and implement the NFT, DeFi and Blockchain."})]})}),Object(p.jsx)("div",{className:"section-about__mobile-img"}),Object(p.jsx)("div",{id:"vision",className:"row justify-content-center",children:Object(p.jsx)("div",{className:"col-12 col-lg-10 col-xl-9",children:Object(p.jsxs)("div",{className:"about",children:[Object(p.jsx)("div",{className:"about__img","data-aos":"fade-right"}),Object(p.jsxs)("div",{className:"about__content","data-aos":"fade-left",children:[Object(p.jsx)("div",{className:"about__title",children:"Our Vision"}),Object(p.jsx)("div",{className:"about__desc",children:'We aim to expand the use of modern technologies such as Blockchain in everyday life. As part of the development of our vision, we have laid a roadmap for the creation of "WebMasons Metaverse".'})]})]})})})]})})}var le=c.p+"static/media/project1.0d50ffe6.png",oe=c.p+"static/media/project1@2x.81796060.png",de=c.p+"static/media/project2.5a7d8736.png",je=c.p+"static/media/project2@2x.094ba216.png",me=c.p+"static/media/project3.c9e97216.png",he=c.p+"static/media/project3@2x.8465a38f.png",be=c.p+"static/media/project4.3c078e73.png",Oe=c.p+"static/media/project4@2x.7ee42315.png";c(119);function xe(){return Object(p.jsx)("section",{id:"projects",className:"section-projects","data-aos":"fade-in",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{className:"row justify-content-center",children:Object(p.jsxs)("div",{className:"col-12 col-lg-10 col-xl-8",children:[Object(p.jsx)("h2",{className:"title",children:"Our Projects"}),Object(p.jsx)("p",{className:"desc"})]})}),Object(p.jsxs)("div",{className:"row projects",children:[Object(p.jsx)("div",{className:"col-12 col-lg-3",children:Object(p.jsx)("div",{className:"project","data-aos":"fade-right",children:Object(p.jsxs)("div",{className:"project-item",children:[Object(p.jsx)("img",{src:le,srcSet:"".concat(oe," 2x"),alt:"",title:"",width:"276",height:"296"}),Object(p.jsx)("span",{className:"project-item__marker",children:"Coming soon"}),Object(p.jsx)("div",{className:"project-item__title",children:"NFT"}),Object(p.jsx)("div",{className:"project-item__desc",children:" "})]})})}),Object(p.jsx)("div",{className:"col-12 col-lg-3",children:Object(p.jsx)("div",{className:"project","data-aos":"fade-right",children:Object(p.jsxs)("div",{className:"project-item",children:[Object(p.jsx)("img",{src:de,srcSet:"".concat(je," 2x"),alt:"",title:"",width:"276",height:"296"}),Object(p.jsx)("span",{className:"project-item__marker",children:"Coming soon"}),Object(p.jsx)("div",{className:"project-item__title",children:"DeFi"}),Object(p.jsx)("div",{className:"project-item__desc",children:" "})]})})}),Object(p.jsx)("div",{className:"col-12 col-lg-3",children:Object(p.jsx)("div",{className:"project","data-aos":"fade-left",children:Object(p.jsxs)("div",{className:"project-item",children:[Object(p.jsx)("img",{src:me,srcSet:"".concat(he," 2x"),alt:"",title:"",width:"276",height:"296"}),Object(p.jsx)("span",{className:"project-item__marker",children:"Coming soon"}),Object(p.jsx)("div",{className:"project-item__title",children:"Blockchain"}),Object(p.jsx)("div",{className:"project-item__desc",children:" "})]})})}),Object(p.jsx)("div",{className:"col-12 col-lg-3",children:Object(p.jsx)("div",{className:"project","data-aos":"fade-left",children:Object(p.jsxs)("div",{className:"project-item",children:[Object(p.jsx)("img",{src:be,srcSet:"".concat(Oe," 2x"),alt:"",title:"",width:"276",height:"296"}),Object(p.jsx)("span",{className:"project-item__marker",children:"Coming soon"}),Object(p.jsx)("div",{className:"project-item__title",children:"Metaverse"}),Object(p.jsx)("div",{className:"project-item__desc",children:" "})]})})})]}),Object(p.jsx)("div",{className:"row justify-content-center",children:Object(p.jsx)("div",{className:"col-12 col-lg-auto",children:Object(p.jsx)("button",{type:"button",className:"btn btn-base btn-lg",children:Object(p.jsx)("span",{children:"more projects"})})})})]})})}c(120);function pe(){return Object(p.jsx)("section",{id:"roadmap",className:"section-roadmap",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h2",{className:"title",children:"Roadmap"}),Object(p.jsxs)("div",{className:"roadmaps-box",children:[Object(p.jsx)("div",{className:"roadmap-center",children:Object(p.jsx)("span",{style:{height:"20%"}})}),Object(p.jsxs)("div",{className:"roadmaps",children:[Object(p.jsx)("div",{className:"roadmap-line roadmap-line__right","data-aos":"fade-left","data-delay":"300",children:Object(p.jsx)("div",{className:"roadmap active",children:Object(p.jsxs)("div",{className:"roadmap-item",children:[Object(p.jsxs)("div",{className:"roadmap-item__header",children:[Object(p.jsx)("span",{className:"roadmap-item__header-date color-pink",children:"1 quarter 2022"}),Object(p.jsx)("div",{className:"roadmap-item__header-status color-pink",children:"done"})]}),Object(p.jsx)("div",{className:"roadmap-item__desc",children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"Project launch"}),Object(p.jsx)("li",{children:"Team Building"})]})})]})})}),Object(p.jsx)("div",{className:"roadmap-line roadmap-line__left","data-aos":"fade-right","data-delay":"300",children:Object(p.jsx)("div",{className:"roadmap active",children:Object(p.jsxs)("div",{className:"roadmap-item",children:[Object(p.jsxs)("div",{className:"roadmap-item__header",children:[Object(p.jsx)("span",{className:"roadmap-item__header-date color-pink",children:"2 quarter 2022"}),Object(p.jsx)("div",{className:"roadmap-item__header-status color-pink",children:"done"})]}),Object(p.jsx)("div",{className:"roadmap-item__desc",children:Object(p.jsx)("ul",{children:Object(p.jsx)("li",{children:"Creation of the NFT collection concept"})})})]})})}),Object(p.jsx)("div",{className:"roadmap-line roadmap-line__right","data-aos":"fade-left","data-delay":"300",children:Object(p.jsx)("div",{className:"roadmap",children:Object(p.jsxs)("div",{className:"roadmap-item",children:[Object(p.jsxs)("div",{className:"roadmap-item__header",children:[Object(p.jsx)("span",{className:"roadmap-item__header-date color-blue",children:"3 quarter 2022"}),Object(p.jsx)("div",{className:"roadmap-item__header-status color-blue",children:"In progress"})]}),Object(p.jsx)("div",{className:"roadmap-item__desc",children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"Creation of art for the NFT collection"}),Object(p.jsx)("li",{children:"Community Building"}),Object(p.jsx)("li",{children:"Establishment of an operating company in Dubai, UAE"})]})})]})})}),Object(p.jsx)("div",{className:"roadmap-line roadmap-line__left","data-aos":"fade-right","data-delay":"300",children:Object(p.jsx)("div",{className:"roadmap",children:Object(p.jsxs)("div",{className:"roadmap-item",children:[Object(p.jsxs)("div",{className:"roadmap-item__header",children:[Object(p.jsx)("span",{className:"roadmap-item__header-date",children:"4 quarter 2022"}),Object(p.jsx)("div",{className:"roadmap-item__header-status",children:"Waiting for the start"})]}),Object(p.jsx)("div",{className:"roadmap-item__desc",children:Object(p.jsx)("ul",{children:Object(p.jsx)("li",{children:"Launch of NFT collection #1 (WebMason Stalker Clan)"})})})]})})}),Object(p.jsx)("div",{className:"roadmap-line roadmap-line__right","data-aos":"fade-left","data-delay":"300",children:Object(p.jsx)("div",{className:"roadmap",children:Object(p.jsxs)("div",{className:"roadmap-item",children:[Object(p.jsxs)("div",{className:"roadmap-item__header",children:[Object(p.jsx)("span",{className:"roadmap-item__header-date",children:"2023"}),Object(p.jsx)("div",{className:"roadmap-item__header-status",children:"Waiting for the start"})]}),Object(p.jsx)("div",{className:"roadmap-item__desc",children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"Development and launch of a Freelance platform"}),Object(p.jsx)("li",{children:"Development and launch of an IT training platform"})]})})]})})}),Object(p.jsx)("div",{className:"roadmap-line roadmap-line__left","data-aos":"fade-right","data-delay":"300",children:Object(p.jsx)("div",{className:"roadmap",children:Object(p.jsxs)("div",{className:"roadmap-item",children:[Object(p.jsxs)("div",{className:"roadmap-item__header",children:[Object(p.jsx)("span",{className:"roadmap-item__header-date",children:"2024"}),Object(p.jsx)("div",{className:"roadmap-item__header-status",children:"Waiting for the start"})]}),Object(p.jsx)("div",{className:"roadmap-item__desc",children:Object(p.jsx)("ul",{children:Object(p.jsx)("li",{children:"Development and launch of a WebMason Metaverse"})})})]})})}),Object(p.jsx)("div",{className:"roadmap-line roadmap-line__right","data-aos":"fade-left","data-delay":"300",children:Object(p.jsx)("div",{className:"roadmap",children:Object(p.jsxs)("div",{className:"roadmap-item",children:[Object(p.jsxs)("div",{className:"roadmap-item__header",children:[Object(p.jsx)("span",{className:"roadmap-item__header-date",children:"2025 \u2014 2030"}),Object(p.jsx)("div",{className:"roadmap-item__header-status",children:"Waiting for the start"})]}),Object(p.jsx)("div",{className:"roadmap-item__desc",children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"Increased scaling"}),Object(p.jsx)("li",{children:"Launch of a crypto-friendly Bank"})]})})]})})})]})]})]})})}var ve=c(52),ge=c.p+"static/media/team1.43edf31c.png",fe=c.p+"static/media/team1@2x.d07d28dd.png",ue=c.p+"static/media/team2.ab1f6166.png",Ne=c.p+"static/media/team2@2x.582ac982.png",_e=(c(121),{breakpoints:{320:{slidesPerView:"auto",spaceBetween:12},991:{slidesPerView:4,spaceBetween:32}}}),we=[{fullName:"Aleksandr Ivannikov",position:"Founder & CEO",image:ge,imageX2:fe,contacts:{twitter:"https://twitter.com/ivannikov_pro",facebook:"https://www.facebook.com/an.ivannikoff/",instagram:"https://www.instagram.com/ivannikov_pro/",linkedin:"https://www.linkedin.com/in/an-ivannikov/"}},{fullName:"Anna Fokina",position:"Art team",image:ue,imageX2:Ne,contacts:{}}];function ke(){return Object(p.jsx)("section",{id:"team",className:"section-team","data-aos":"flip-up",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-12 col-xl-8",children:[Object(p.jsx)("h2",{className:"title",children:"Our Team"}),Object(p.jsx)("p",{className:"desc"})]})}),Object(p.jsx)(ve.a,{className:"teams",slidesPerView:1,spaceBetween:"32",breakpoints:_e.breakpoints,children:we.map((function(e,t){return Object(p.jsx)(ve.b,{children:Object(p.jsx)("div",{className:"team","data-aos":"fade-down-right",children:Object(p.jsxs)("div",{className:"team-item",children:[Object(p.jsx)("span",{className:"team-item__img",children:Object(p.jsx)("img",{width:"120",height:"120",src:e.image,srcSet:"".concat(e.imageX2," 2x"),alt:"",title:""})}),Object(p.jsx)("div",{className:"team-item__desc",children:e.position}),Object(p.jsx)("div",{className:"team-item__title",children:e.fullName}),e.contacts&&Object(p.jsxs)("div",{className:"team-item__soc soc",children:[e.contacts.twitter&&Object(p.jsx)(Y,{href:e.contacts.twitter,children:Object(p.jsx)("img",{src:ce,alt:"",title:"24",width:"24",height:""})}),e.contacts.facebook&&Object(p.jsx)(Y,{href:e.contacts.facebook,children:Object(p.jsx)("img",{src:ae,alt:"",title:"24",width:"24",height:""})}),e.contacts.instagram&&Object(p.jsx)(Y,{href:e.contacts.instagram,children:Object(p.jsx)("img",{src:se,alt:"",title:"24",width:"24",height:""})}),e.contacts.linkedin&&Object(p.jsx)(Y,{href:e.contacts.linkedin,children:Object(p.jsx)("img",{src:ie,alt:"",title:"24",width:"24",height:""})})]})]})},t)},t)}))})]})})}c(122);function ye(){return Object(p.jsx)("section",{className:"section-join","data-aos":"zoom-in-down",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row justify-content-center",children:Object(p.jsxs)("div",{className:"col-12 col-xl-8",children:[Object(p.jsxs)("h2",{className:"title",children:["Join WebMasons "," "]}),Object(p.jsx)("div",{className:"btns",children:Object(p.jsx)(Y,{href:"https://discord.gg/x9jKQYChfT",children:Object(p.jsx)("button",{type:"button",className:"btn btn-lg btn-pink",children:Object(p.jsx)("span",{children:"Join"})})})})]})})})})}var Ce=c.p+"static/media/logo.57c6a8bb.png",Te=c.p+"static/media/logo@2x.4948cc85.png";c(123);function Fe(e){var t=Object(i.useState)({fixed:!1}),c=Object(P.a)(t,2),a=c[0],s=c[1];return Object(p.jsx)(Z,{meta:[],children:Object(p.jsxs)("div",{id:"front",children:[Object(p.jsxs)("main",{className:"main",children:[Object(p.jsxs)(E.a,{once:!1,onBottomPassed:function(){return s({fixed:!0})},onBottomPassedReverse:function(){return s({fixed:!1})},children:[Object(p.jsx)(ee,{fixed:a.fixed}),Object(p.jsx)("section",{className:"section-top",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row justify-content-center",children:Object(p.jsxs)("div",{className:"col-auto",children:[Object(p.jsx)("div",{className:"front-img","data-aos":"fade-in",children:Object(p.jsx)("img",{width:"500",height:"",src:Ce,srcSet:"".concat(Te," 2x"),alt:"Logo",title:"Logo"})}),Object(p.jsxs)("h1",{"data-aos":"fade-in","data-duration":"400",children:["Find",Object(p.jsx)("br",{})," a partner"]}),Object(p.jsx)("p",{className:"desc",children:"Join to grow together"}),Object(p.jsx)("div",{className:"front-btns",children:Object(p.jsx)(Y,{className:"btn btn-lg btn-base",href:J,children:Object(p.jsx)("span",{children:"Join now"})})})]})})})})]}),Object(p.jsx)(ne,{}),Object(p.jsx)(xe,{}),Object(p.jsx)(pe,{}),Object(p.jsx)(ke,{}),Object(p.jsx)(ye,{})]}),Object(p.jsx)(re,{})]})})}function Me(){return Object(p.jsx)(B,{children:Object(p.jsxs)(u.d,{children:[Object(p.jsx)(u.b,{exact:!0,path:N,component:Fe}),Object(p.jsx)(u.b,{path:"*",children:Object(p.jsx)(u.a,{to:N})})]})})}var Se,We=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,133)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),i(e),r(e)}))};Se=function(){return Object(p.jsxs)(g,{children:[Object(p.jsx)(f,{}),Object(p.jsx)(Me,{})]})},s.a.render(Object(p.jsx)(Se,{}),document.getElementById("root")),We(),window},65:function(e){e.exports=JSON.parse('{"projectName":"TheWebMason"}')},86:function(e,t,c){},87:function(e,t,c){}},[[126,1,2]]]);
//# sourceMappingURL=main.9c519d02.chunk.js.map