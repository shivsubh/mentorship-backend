(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{101:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},o=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),o=d(a),u=n,p=o["".concat(i,".").concat(u)]||o[u]||m[u]||l;return a?r.a.createElement(p,b(b({ref:t},c),{},{components:a})):r.a.createElement(p,b({ref:t},c))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var b={};for(var s in t)hasOwnProperty.call(t,s)&&(b[s]=t[s]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var c=2;c<l;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},67:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),l=(a(0),a(101)),i={id:"Quality-Assurance",title:"Quality Assurance"},b={unversionedId:"Quality-Assurance",id:"Quality-Assurance",isDocsHomePage:!1,title:"Quality Assurance",description:"This document contains some examples of test cases for each feature implemented on the backend.",source:"@site/docs/Quality-Assurance.md",slug:"/Quality-Assurance",permalink:"/mentorship-backend/docs/Quality-Assurance",editUrl:"https://github.com/anitab-org/mentorship-backend/tree/develop/docs/docs/Quality-Assurance.md",version:"current",sidebar:"docs",previous:{title:"Commit Message Style Guide",permalink:"/mentorship-backend/docs/Commit-Message-Style-Guide"},next:{title:"Maintainer Guidelines",permalink:"/mentorship-backend/docs/Maintainer-Guidelines"}},s=[{value:"Access to restricted APIs",id:"access-to-restricted-apis",children:[]},{value:"Users",id:"users",children:[{value:"Login",id:"login",children:[]},{value:"Register",id:"register",children:[]},{value:"Change Password",id:"change-password",children:[]},{value:"Update User",id:"update-user",children:[]},{value:"Resend verification email",id:"resend-verification-email",children:[]}]},{value:"Mentorship Relation",id:"mentorship-relation",children:[{value:"Send request",id:"send-request",children:[]},{value:"Delete Relation",id:"delete-relation",children:[]},{value:"Accept Relation",id:"accept-relation",children:[]},{value:"Reject Relation",id:"reject-relation",children:[]},{value:"Cancel Relation",id:"cancel-relation",children:[]}]},{value:"Admins",id:"admins",children:[{value:"Assign a new admin",id:"assign-a-new-admin",children:[]},{value:"Revoke an admin role",id:"revoke-an-admin-role",children:[]}]}],c={toc:s};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This document contains some examples of test cases for each feature implemented on the backend."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Live development server:")," ",Object(l.b)("a",{parentName:"p",href:"http://systers-mentorship-dev.eu-central-1.elasticbeanstalk.com/"},"http://systers-mentorship-dev.eu-central-1.elasticbeanstalk.com/")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Tools:")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Create disposable emails to create accounts and verify them. You can use ",Object(l.b)("a",{parentName:"li",href:"https://temp-mail.org/"},"https://temp-mail.org/")," to generate the emails and verify them;"),Object(l.b)("li",{parentName:"ul"},"Test the REST API with Swagger UI provided in the link of the deployed server;"),Object(l.b)("li",{parentName:"ul"},"Test the REST API using ",Object(l.b)("a",{parentName:"li",href:"https://www.getpostman.com"},"Postman")," (if you feel comfortable with this).")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Notes:")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Outcome ",Object(l.b)("em",{parentName:"li"},"Fail")," means the test case as no effect in the database, so no changes are done in the data. An error message should be returned;"),Object(l.b)("li",{parentName:"ul"},"Outcome ",Object(l.b)("em",{parentName:"li"},"Success")," means e that the test case was successful and had an effect in the database, so this changes/effect should be visible on the database. E.g.: If a user is registered successfully, you should be able to login, and be seen using the GET /users API;"),Object(l.b)("li",{parentName:"ul"},"When testing something make sure only one aspect of the test is failing the requirements;"),Object(l.b)("li",{parentName:"ul"},"\u201cLogged in\u201d means that a valid access token is being sent in the Authorization header;"),Object(l.b)("li",{parentName:"ul"},"Nonrestricted API will have a marker -> (not restricted);"),Object(l.b)("li",{parentName:"ul"},"A user can login successfully only if the email is verified.")),Object(l.b)("h2",{id:"access-to-restricted-apis"},"Access to restricted APIs"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"This is the possible test cases when accessing a restricted API;"),Object(l.b)("li",{parentName:"ul"},"The only unrestricted APIs are: POST /login, POST /register, GET /user/confirm_email/{token}, POST/user/resend_email;"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"Fail")," cases mean that you cannot access the app data and you\u2019ll receive an error message regarding the authentication token;"),Object(l.b)("li",{parentName:"ul"},"_",Object(l.b)("em",{parentName:"li"},"This cases should override any potential success outcome from a restricted API"),"._")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Test Case"),Object(l.b)("th",{parentName:"tr",align:null},"Outcome"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Send an Authorization header field containing: Bearer <access_token>. This token is valid, not expired, from a verified user"),Object(l.b)("td",{parentName:"tr",align:null},"Success")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Not send the access token"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Access token is expired"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},'Invalid token (e.g.: "asdf", "gnvindgins", something not returned from POST /login)'),Object(l.b)("td",{parentName:"tr",align:null},"Fail")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"(weird case) Valid token, but the user was deleted"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")))),Object(l.b)("h2",{id:"users"},"Users"),Object(l.b)("h3",{id:"login"},"Login"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Service:")," POST /login"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Test Case"),Object(l.b)("th",{parentName:"tr",align:null},"Outcome"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Login an already registered and verified User with the correct username and password"),Object(l.b)("td",{parentName:"tr",align:null},"Success")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Login an already registered and verified User with correct email and password"),Object(l.b)("td",{parentName:"tr",align:null},"Success")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Login an already registered User with correct email and password, with email unverified"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Login an already registered and verified User with correct email/username and wrong password"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Login a User with non-existing email"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Login a User with non-existing username"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")))),Object(l.b)("h3",{id:"register"},"Register"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Service:")," POST /register"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Test Case"),Object(l.b)("th",{parentName:"tr",align:null},"Outcome"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Register a User with all fields present in the request body and valid (not empty, username and email are unique, email is a valid one) ones"),Object(l.b)("td",{parentName:"tr",align:null},"Success")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Register a User with terms and conditions checked (=True)"),Object(l.b)("td",{parentName:"tr",align:null},"Success")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Register User without sending Authorization Header with token"),Object(l.b)("td",{parentName:"tr",align:null},"Success")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Register a User with terms and conditions unchecked (=False)"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Register a User with username and email from an already existing User"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Register a User with one of the these fields missing from the request body: name, username, email, terms_and_conditions, password"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Register a User with one of the these fields empty from the request body: name, username, email, terms_and_conditions, password"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Register a User with invalid email (invalid does not respect e.g.: {A-Z, a-z, 0-9, _,-}@{A-Z, a-z, 0-9}.{A-Z, a-z, 0-9})"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")))),Object(l.b)("h3",{id:"change-password"},"Change Password"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Service:")," PUT /user/change_password"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Test Case"),Object(l.b)("th",{parentName:"tr",align:null},"Outcome"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Change password to a different password from the current one"),Object(l.b)("td",{parentName:"tr",align:null},"Success")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Change password to a password equal to the current one"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Change password to an empty password"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Change password to a password with white spaces"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")))),Object(l.b)("h3",{id:"update-user"},"Update User"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Service:")," PUT /user"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Test Case"),Object(l.b)("th",{parentName:"tr",align:null},"Outcome"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"TBD"),Object(l.b)("td",{parentName:"tr",align:null},"Success")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Change username to a username already being used by another User"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")))),Object(l.b)("h3",{id:"resend-verification-email"},"Resend verification email"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Service:")," POST /user/resend_email"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Test Case"),Object(l.b)("th",{parentName:"tr",align:null},"Outcome"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Email in request body is an email from an existing user which is unverified"),Object(l.b)("td",{parentName:"tr",align:null},"Success")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Email in request body does not belong to a registered User"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Email in request body is from a Verified User"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")))),Object(l.b)("h2",{id:"mentorship-relation"},"Mentorship Relation"),Object(l.b)("h3",{id:"send-request"},"Send request"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Service:")," POST /mentorship_relation/send_request"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Test Case"),Object(l.b)("th",{parentName:"tr",align:null},"Outcome"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"A User1 sends a request to a User2 which is not currently involved in a mentorship relation and has the email verified"),Object(l.b)("td",{parentName:"tr",align:null},"Success")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"A User1 sends a request to a User2 which is in involved in a mentorship relation and has the email verified"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"A User1 sends a request to a non existing User2 (user_id does not match any user in database)"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"A User1 sends a request to a User2 which is not involved in a mentorship relation and has the email verified. But the User1 is involved in a current mentorship relation"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"A User1 sends a request to itself User1"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"A User1 sends a request to a User2, which does not have its email verified"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")))),Object(l.b)("h3",{id:"delete-relation"},"Delete Relation"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Service:")," DELETE /mentorship_relation/{request_id}"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Test Case"),Object(l.b)("th",{parentName:"tr",align:null},"Outcome"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"A user that creates a mentorship request X deletes this mentorship request X"),Object(l.b)("td",{parentName:"tr",align:null},"Success")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"A user that creates a mentorship request X deletes this mentorship request X (without token being sent in Authorization Header)"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"A user that did not create mentorship request X tries to deletes mentorship request X"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"A user that tries to delete mentorship request X that does not exist (i.e., request_id does not exist in the system)"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")))),Object(l.b)("h3",{id:"accept-relation"},"Accept Relation"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Service:")," PUT /mentorship_relation/{request_id}/accept"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Test Case"),Object(l.b)("th",{parentName:"tr",align:null},"Outcome"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Assuming User1 sent request X to User2, User2 accepts this request, while User2 is NOT involved in a current mentorship relation"),Object(l.b)("td",{parentName:"tr",align:null},"Success")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Assuming User1 sent request X to User2, User2 accepts this request, while User2 is involved in a current mentorship relation"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Assuming User1 sent request X to User2, User1 accepts this request"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"User1 accepts a mentorship relation which the User1 is not involved with"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")))),Object(l.b)("h3",{id:"reject-relation"},"Reject Relation"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Service:"),"  PUT /mentorship_relation/{request_id}/reject"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Test Case"),Object(l.b)("th",{parentName:"tr",align:null},"Outcome"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Having User1 sending a request to User2, User2 rejects this request"),Object(l.b)("td",{parentName:"tr",align:null},"Success")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Having User1 sending a request to User2, User1 rejects this request"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"User1 rejects a mentorship relation which the User1 is not involved with"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")))),Object(l.b)("h3",{id:"cancel-relation"},"Cancel Relation"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Service:")," PUT /mentorship_relation/{request_id}/cancel"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Test Case"),Object(l.b)("th",{parentName:"tr",align:null},"Outcome"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"User1 (sent the request) cancels a mentorship relation that it is currently involved with User2 (the relation is in an ACCEPTED state)"),Object(l.b)("td",{parentName:"tr",align:null},"Success")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"User2 (received the request) cancels a mentorship relation that it is currently involved with User1 (the relation is in an ACCEPTED state)"),Object(l.b)("td",{parentName:"tr",align:null},"Success")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"User1 cancel a mentorship relation which the User1 is not involved with"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")))),Object(l.b)("h2",{id:"admins"},"Admins"),Object(l.b)("p",null,"Only admin users have access to this."),Object(l.b)("h3",{id:"assign-a-new-admin"},"Assign a new admin"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Service:")," POST /admin/new"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Test Case"),Object(l.b)("th",{parentName:"tr",align:null},"Outcome"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"An Admin User assigns admin role to a non-admin user ( both users should have email verified)"),Object(l.b)("td",{parentName:"tr",align:null},"Success")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"A User which is not an Admin assigns admin role to any user (does not matter if the user being assigned is admin or not)"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"A User which is not an Admin assigns admin role to itself"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"An Admin User assigns admin role to a non-existent User"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")))),Object(l.b)("h3",{id:"revoke-an-admin-role"},"Revoke an admin role"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Service:")," POST /admin/remove"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Test Case"),Object(l.b)("th",{parentName:"tr",align:null},"Outcome"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Revoking an admin user which is an admin, when the current user is an admin"),Object(l.b)("td",{parentName:"tr",align:null},"Success")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Revoking a non-admin user, when the current user is an admin"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Revoking a non-existent user"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Revoke self the admin role when self is the only admin"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Revoke self the admin role when self is not the only admin"),Object(l.b)("td",{parentName:"tr",align:null},"Success")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Revoking an admin user, when the current user is not an admin"),Object(l.b)("td",{parentName:"tr",align:null},"Fail")))))}d.isMDXComponent=!0}}]);