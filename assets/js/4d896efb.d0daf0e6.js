(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(101)),i={id:"Future-ideas",title:"Future ideas"},c={unversionedId:"Future-ideas",id:"Future-ideas",isDocsHomePage:!1,title:"Future ideas",description:"Here are some brainstormed ideas for the app, that may need more discussion with the community.",source:"@site/docs/Future-ideas.md",slug:"/Future-ideas",permalink:"/docs/Future-ideas",editUrl:"https://github.com/anitab-org/mentorship-backend/tree/develop/docs/docs/Future-ideas.md",version:"current",sidebar:"docs",previous:{title:"Mentorship Relation Documentation",permalink:"/docs/Mentorship-Relation-Documentation"},next:{title:"GSoC 2018 Isabel Costa",permalink:"/docs/GSoC-2018-Isabel-Costa"}},l=[],s={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Here are some brainstormed ideas for the app, that may need more discussion with the community.\nIf you want to implement one of this ideas feel free to start a discussion about this on ",Object(o.b)("a",{parentName:"p",href:"http://systers.io/slack-systers-opensource/"},"Systers Open Source Slack"),"!"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Idea"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Build an App with a hybrid framework"),Object(o.b)("td",{parentName:"tr",align:null},"Use a framework like flutter to build a version of this app, to embrace both Android and iOS platforms")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Web platform"),Object(o.b)("td",{parentName:"tr",align:null},"Build a web version of the app. Or integrate this with an existing one, e.g.: VMS")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Report violations"),Object(o.b)("td",{parentName:"tr",align:null},"Report Member violations of Code of Conduct")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Third party apps authentication"),Object(o.b)("td",{parentName:"tr",align:null},"Authenticate using Slack, Facebook, Twitter, Google+, etc")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Meetings scheduling"),Object(o.b)("td",{parentName:"tr",align:null},"Create Meetings between members or two users in a relation. Possibly integration with Google Calendar")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Messaging chat"),Object(o.b)("td",{parentName:"tr",align:null},"Instant Messaging for Mentor and Mentee to talk to each other, during or before the mentorship relation starts")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Gamification feedback"),Object(o.b)("td",{parentName:"tr",align:null},"When a mentor or mentee reach an achievement together, being an item from a checklist, they can receive feedback in the form of points, or just congratulation messages")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Notifications"),Object(o.b)("td",{parentName:"tr",align:null},"Push Notifications; Email and in-app notifications; Notifications about new mentorship requests or acceptances, new items added to the list of resources, new achievements")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Shared resources"),Object(o.b)("td",{parentName:"tr",align:null},"A mentor can share resources such as links to websites, pdfs, google docs. There can be a screen dedicated to these items")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Tutorial"),Object(o.b)("td",{parentName:"tr",align:null},"A tutorial screen, explaining what a user can do in the app, in its first login in the app would be helpful")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Mentor and Mentee recommendation"),Object(o.b)("td",{parentName:"tr",align:null},"Users can be recommended to each other according to their interests, skills, availability to mentor and be mentored")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Mentorship Agreements from One Mentor to Many Mentees"),Object(o.b)("td",{parentName:"tr",align:null},"A mentor can mentor many mentee\u2019s on one topic, at the same time\u2026 Group Mentoring (to be discussed: the initial idea is for the mentor to focus on one mentee only instead of sharing attention with many mentees)")))))}b.isMDXComponent=!0}}]);