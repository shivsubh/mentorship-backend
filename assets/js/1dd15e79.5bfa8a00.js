(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),b=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=b(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=b(n),h=a,m=l["".concat(i,".").concat(h)]||l[h]||p[h]||o;return n?r.a.createElement(m,s(s({ref:t},u),{},{components:n})):r.a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(101)),i={id:"How-to-Contribute",title:"How to Contribute"},s={unversionedId:"How-to-Contribute",id:"How-to-Contribute",isDocsHomePage:!1,title:"How to Contribute",description:"First of all, thank you for the interest in contributing to the Mentorship System!",source:"@site/docs/How-to-Contribute.md",slug:"/How-to-Contribute",permalink:"/docs/How-to-Contribute",editUrl:"https://github.com/anitab-org/mentorship-backend/tree/develop/docs/docs/How-to-Contribute.md",version:"current",sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/Getting-Started"},next:{title:"Commit Message Style Guide",permalink:"/docs/Commit-Message-Style-Guide"}},c=[{value:"Code",id:"code",children:[]},{value:"Quality Assurance",id:"quality-assurance",children:[]},{value:"Documentation",id:"documentation",children:[]},{value:"Outreach/Training/Research",id:"outreachtrainingresearch",children:[]},{value:"User Interface",id:"user-interface",children:[]}],u={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"First of all, thank you for the interest in contributing to the Mentorship System!"),Object(o.b)("p",null,"Any issue labeled as ",Object(o.b)("a",{parentName:"p",href:"https://github.com/anitab-org/mentorship-backend/issues?q=is%3Aissue+is%3Aopen+label%3A%22Status%3A+Available%22"},"Status: Available")," or ",Object(o.b)("a",{parentName:"p",href:"https://github.com/anitab-org/mentorship-backend/issues?q=is%3Aissue+is%3Aopen+label%3A%22First+Timers+Only%22"},"First Timers Only")," can be worked by any contributor."),Object(o.b)("p",null,"Issues labeled as ",Object(o.b)("inlineCode",{parentName:"p"},"First Timers Only")," are more oriented towards newcomers, with the exception of Quality Assurance issues that can be worked by any contributor because there can always be some bug and these issues are always available."),Object(o.b)("p",null,"There are many ways you can contribute to this project."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Test the backend for Quality Assurance")," purposes and ",Object(o.b)("strong",{parentName:"li"},"report bugs")," (if any);"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Give feedback")," on what is shared with the community (UI prototype, suggesting new features); "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Participate in discussions")," on Slack; "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Solving the available issues"),", implement features, fix bugs, develop tests, etc...;"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Helping others")," understand the project ",Object(o.b)("strong",{parentName:"li"},"on Slack"),";"),Object(o.b)("li",{parentName:"ul"},"Review pull requests (PRs), even if you're a newcomer.")),Object(o.b)("h2",{id:"code"},"Code"),Object(o.b)("p",null,"You can help on the development. You can check the contribution guidelines for this, ",Object(o.b)("inlineCode",{parentName:"p"},"CONTRIBUTING.md")," file inside ",Object(o.b)("inlineCode",{parentName:"p"},".github")," folder."),Object(o.b)("p",null,"Before starting to contribute make sure to check our ",Object(o.b)("a",{parentName:"p",href:"Commit-Message-Style-Guide"},"Commit Message Style Guide"),"."),Object(o.b)("p",null,"You can check existing issues that are available and not assigned to anyone. You can filter also issues with labels such as ",Object(o.b)("a",{parentName:"p",href:"https://github.com/anitab-org/mentorship-backend/issues?q=is%3Aissue+is%3Aopen+label%3A%22Category%3A+Coding%22"},"Category: Coding")," which are available ",Object(o.b)("a",{parentName:"p",href:"https://github.com/anitab-org/mentorship-backend/issues?q=is%3Aissue+is%3Aopen+label%3A%22Status%3A+Available%22"},"Status: Available"),"."),Object(o.b)("p",null,"You can find a bugs while testing and submit an issue to solve them."),Object(o.b)("p",null,"You can find more about ",Object(o.b)("a",{parentName:"p",href:"Tech-Stack"},"Tech Stack here"),"."),Object(o.b)("h2",{id:"quality-assurance"},"Quality Assurance"),Object(o.b)("p",null,"You can test the backend for bugs. We have a set of ",Object(o.b)("a",{parentName:"p",href:"Quality-Assurance"},"Quality Assurance Test Cases")," to help you with test the backend to lookup these bugs."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"If you find any bug you can report")," by creating an issue, using the ",Object(o.b)("strong",{parentName:"p"},"Bug report template"),". Here's a nice ",Object(o.b)("a",{parentName:"p",href:"https://github.com/anitab-org/mentorship-backend/issues/83"},"example of a Bug Report issue"),".\nThese types of reports are very important because we can detect bugs in the backend and then create issues that fix these bugs. Also if you're not comfortable with the code you can just report a bugs you find, without having to suggest a solution on it, and thats a valuable contribution to the project."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Tools")," you can use to do this:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create disposable emails with ",Object(o.b)("a",{parentName:"li",href:"https://temp-mail.org/"},"https://temp-mail.org/")," to create accounts and verify them, throught this temporary emails; "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Swagger UI")," provided in root of the deployed server. You can check the deployed server link in the the README.md file of the project. You can learn more about ",Object(o.b)("a",{parentName:"li",href:"Using-Backend-Swagger-UI"},"how to use Swagger here"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.getpostman.com/"},"Postman")," to make your HTTP requests to the backend without being limited by Swagger API. E.g.: With this you can see the results of not sending an autorization token, which with the Swagger UI you're not allowed to do it.")),Object(o.b)("h2",{id:"documentation"},"Documentation"),Object(o.b)("p",null,"Documnetation is a very important part of Open Source. These is what new contributors use to learn about the project before starting to contribute. You can always suggest improvements on the existing documentation and even help developing it."),Object(o.b)("p",null,"You may check issues labeled with ",Object(o.b)("a",{parentName:"p",href:"https://github.com/anitab-org/mentorship-backend/issues?q=is%3Aissue+is%3Aopen+label%3A%22Category%3A+Documentation%2FTraining%22"},"Category: Documentation/Training"),"\nThis documentation can be related with code, quality assurance test cases, the application features, anything related with this project. Here're some examples of documentation:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.google.com/document/d/1qDTJK-ItAaek5ZBSLd4i8ShxLDcU5D2b4ZdIBTNxEJM/edit?usp=sharing"},"Backend Documentation")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.google.com/document/d/1RhYMjyd1yhAWarO7spRWOYm-KNgFsO9rNgO6ssnEC-o/edit?usp=sharing"},"App Documentation")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"Quality-Assurance"},"Quality Assurance Documentation")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/"},"This Docs")),Object(o.b)("li",{parentName:"ul"},"Coding the documentation of the deployed server ",Object(o.b)("a",{parentName:"li",href:"http://systers-mentorship-dev.eu-central-1.elasticbeanstalk.com/"},"Swagger UI"))),Object(o.b)("h2",{id:"outreachtrainingresearch"},"Outreach/Training/Research"),Object(o.b)("p",null,"For this you can promote the project in whatever way you feel comfortable with.\nHere's some examples:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You can write blog posts about the project, something you learned from it, or you want to share with others;"),Object(o.b)("li",{parentName:"ul"},"Research about ways to improve the project and discuss it with the Community on the Slack;"),Object(o.b)("li",{parentName:"ul"},"Participate on the project's discussion on the ",Object(o.b)("a",{parentName:"li",href:"https://systers-opensource.slack.com/messages/CAE8QK41L"},"#mentorship-system")," channel;"),Object(o.b)("li",{parentName:"ul"},"Help other contributors or newcomers learn and understand the project;"),Object(o.b)("li",{parentName:"ul"},"etc ...")),Object(o.b)("p",null,"Here's a post written about the project idea and mission, ",Object(o.b)("a",{parentName:"p",href:"https://medium.com/systers-opensource/mentorship-system-by-systers-52dbe1275d9f"},'"Mentorship System by Systers"')," on Medium."),Object(o.b)("h2",{id:"user-interface"},"User Interface"),Object(o.b)("p",null,"In this backend we don't have a User interface but we have a mobile application, you can suggestion improvements for the UI and present UI/UX designs for the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/anitab-org/mentorship-android"},"Mentorship System Android application"),"."),Object(o.b)("h1",{id:"one-last-thing"},"One last thing..."),Object(o.b)("p",null,"If you have any doubts about the project or how to contribute do not hesitate to ask questions on GitHub or on ",Object(o.b)("a",{parentName:"p",href:"https://anitab-org.zulipchat.com/"},"Zulip"),". The community will do their best to help you out :)"))}b.isMDXComponent=!0}}]);