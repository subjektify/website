"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4938],{8550:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=n(4848),r=n(8453);const i={sidebar_position:3},a="Subject Types",o={id:"reference/subjekt/types/subject",title:"Subject Types",description:"Subject shapes define the core entities and their interactions within Subjektify models. They encompass the primary components of a subject-oriented application, including state, and behaviors, making them essential for defining the functional aspects of a decentralized application.",source:"@site/docs/reference/subjekt/types/subject.md",sourceDirName:"reference/subjekt/types",slug:"/reference/subjekt/types/subject",permalink:"/docs/reference/subjekt/types/subject",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"referenceSidebar",previous:{title:"Aggregate Types",permalink:"/docs/reference/subjekt/types/aggregate"},next:{title:"Traits",permalink:"/docs/reference/subjekt/traits/"}},c={},d=[{value:"<code>subject</code>",id:"subject",level:2},{value:"<code>behavior</code>",id:"behavior",level:2},{value:"<code>event</code>",id:"event",level:2},{value:"<code>error</code>",id:"error",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"subject-types",children:"Subject Types"}),"\n",(0,s.jsx)(t.p,{children:"Subject shapes define the core entities and their interactions within Subjektify models. They encompass the primary components of a subject-oriented application, including state, and behaviors, making them essential for defining the functional aspects of a decentralized application."}),"\n",(0,s.jsx)(t.h2,{id:"subject",children:(0,s.jsx)(t.code,{children:"subject"})}),"\n",(0,s.jsx)(t.p,{children:"A subject represents a modular unit within a decentralized system, encapsulating all related state, behaviors, and events necessary for a specific functionality."}),"\n",(0,s.jsx)(t.p,{children:"State within a subject hold the data relevant to the subject at any point in time. State is critical for maintaining the subject's integrity and history."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-subjekt",children:"subject User {\n    state: {\n        name: string\n    }\n    behaviors: [Like, Post]\n    events: [OnNewPost]\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"behavior",children:(0,s.jsx)(t.code,{children:"behavior"})}),"\n",(0,s.jsx)(t.p,{children:"Behaviors are functions or methods that encapsulate the logic and actions that a subject can perform, typically triggered by internal or external events."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-subjekt",children:"behavior Post {\n    input: PostData\n    output: PostResponse\n}\n\nstructure PostData {\n    userId: address\n}\n\nstructure PostResponse {\n    statusCode: string\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"event",children:(0,s.jsx)(t.code,{children:"event"})}),"\n",(0,s.jsx)(t.p,{children:"Events define specific conditions or triggers that activate behaviors. They are essential for responsive and interactive subject operations. Each behaviors automatically gets an event generated for it during build and code generation."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-subjekt",children:"event OnNewPost {\n    userId: address\n    content: string\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"error",children:(0,s.jsx)(t.code,{children:"error"})}),"\n",(0,s.jsx)(t.p,{children:"Custom errors are defined using the error statement. It is possible to have errors that take parameters. The following example shows an example declaration of an error:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-subjekt",children:"error PostNotFound {\n    userId: string\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(6540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);