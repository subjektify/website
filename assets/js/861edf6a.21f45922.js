"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8158],{5089:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var a=n(4848),t=n(8453);const i={sidebar_position:1},r="The Subjekt Model",l={id:"reference/subjekt/model",title:"The Subjekt Model",description:"The Subjekt model describes the Subjekt's semantic model and the files used to create it. Subjekt models are used to describe data structures, smart contracts, services, and subjects.",source:"@site/docs/reference/subjekt/model.md",sourceDirName:"reference/subjekt",slug:"/reference/subjekt/model",permalink:"/docs/reference/subjekt/model",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"referenceSidebar",previous:{title:"Subjekt Specification",permalink:"/docs/reference/subjekt/"},next:{title:"Types",permalink:"/docs/reference/subjekt/types/"}},d={},o=[{value:"Subjekt Overview",id:"subjekt-overview",level:2},{value:"Semantic model",id:"semantic-model",level:4},{value:"Model File",id:"model-file",level:4},{value:"Representation",id:"representation",level:4},{value:"Semantic Model",id:"semantic-model-1",level:2},{value:"Metadata",id:"metadata",level:2},{value:"Node Values",id:"node-values",level:2},{value:"Shape ID",id:"shape-id",level:2},{value:"Shapes",id:"shapes",level:2},{value:"Traits",id:"traits",level:2},{value:"Prelude",id:"prelude",level:2}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"the-subjekt-model",children:"The Subjekt Model"}),"\n",(0,a.jsx)(s.p,{children:"The Subjekt model describes the Subjekt's semantic model and the files used to create it. Subjekt models are used to describe data structures, smart contracts, services, and subjects."}),"\n",(0,a.jsx)(s.h2,{id:"subjekt-overview",children:"Subjekt Overview"}),"\n",(0,a.jsx)(s.p,{children:"The Subjekt model can be represented in various forms, including as a semantic model, through the Interface Definition Language (IDL), and as an Abstract Syntax Tree (AST) in JSON format."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Subjekt Overview",src:n(7599).A+"",width:"2160",height:"1340"})}),"\n",(0,a.jsx)(s.h4,{id:"semantic-model",children:"Semantic model"}),"\n",(0,a.jsx)(s.p,{children:"The in-memory model used by tools. The semantic model may be serialized into one or more model file representations."}),"\n",(0,a.jsx)(s.h4,{id:"model-file",children:"Model File"}),"\n",(0,a.jsxs)(s.p,{children:["A file on the file system in a specific format. Model files can be divided across multiple files for better readability or modularity, and these files can use different formats (",(0,a.jsx)(s.code,{children:".subjekt"})," or ",(0,a.jsx)(s.code,{children:".json"}),"). It's the responsibility of the tooling to merge all necessary model files into a valid semantic model, as model files do not explicitly include one another."]}),"\n",(0,a.jsx)(s.h4,{id:"representation",children:"Representation"}),"\n",(0,a.jsxs)(s.p,{children:["A particular model file format such as ",(0,a.jsx)(s.code,{children:".subjekt"})," or ",(0,a.jsx)(s.code,{children:".json"}),". Representations are loaded into the semantic model by mapping the representation to the shape types in the semantic model."]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"./idl",children:(0,a.jsx)(s.strong,{children:"Subjekt IDL"})}),": a human-readable format that aims to streamline authoring, reading, and sharing models."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"./ast",children:(0,a.jsx)(s.strong,{children:"JSON AST"})}),": a machine-readable JSON-based format."]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"semantic-model-1",children:"Semantic Model"}),"\n",(0,a.jsx)(s.p,{children:"The semantic model is an in-memory model used by tools. It is independent of any particular serialized representation. The semantic model contains the metadata and a graph of shapes connected by shape IDs."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Semantic Model",src:n(4901).A+"",width:"841",height:"331"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Metadata"}),": ",(0,a.jsx)(s.a,{href:"#metadata",children:"Metadata"})," is a schema-less extensibility mechanism used to associate metadata to an entire model."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Prelude"}),": The ",(0,a.jsx)(s.a,{href:"#prelude",children:"prelude"})," defines various simple shapes and every trait defined in the core specification."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Shape"}),": ",(0,a.jsx)(s.a,{href:"#shapes",children:"Shapes"})," are named definitions that describe the data structures."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Shape ID"}),": A ",(0,a.jsx)(s.a,{href:"#shape-id",children:"Shape ID"})," is used to identify shapes defined in the model."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Trait"}),": ",(0,a.jsx)(s.a,{href:"#traits",children:"Traits"})," are applied to shapes to associate metadata to a shape."]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"metadata",children:"Metadata"}),"\n",(0,a.jsx)(s.p,{children:"Metadata is a schema-less extensibility mechanism used to associate metadata to an entire model. Metadata is defined using a node value. The following example configures a model validator:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-subjekt",children:'metadata validators = [\n    {\n        name: "EmitEachSelector"\n        id: "OperationInputName"\n        message: "This shape is referenced as input but the name does not end with \'Input\'"\n        configuration: {\n            selector: "operation -[input]-> :not([id|name$=Input i])"\n        }\n    }\n]\n'})}),"\n",(0,a.jsx)(s.p,{children:"When a conflict occurs between top-level metadata key-value pairs, the following conflict resolution logic is used:"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsx)(s.li,{children:"If both values are arrays, the values of both arrays are concatenated into a single array."}),"\n",(0,a.jsx)(s.li,{children:"Otherwise, if both values are exactly equal, the conflict is ignored."}),"\n",(0,a.jsx)(s.li,{children:"Otherwise, the conflict is invalid."}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"node-values",children:"Node Values"}),"\n",(0,a.jsx)(s.p,{children:"Node values are JSON-like values used to define metadata and the value of an applied trait."}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Type"}),(0,a.jsx)(s.th,{children:"Description"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"array"}),(0,a.jsx)(s.td,{children:"A list of heterogeneous node values"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"null"}),(0,a.jsx)(s.td,{children:"The lack of value"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"number"}),(0,a.jsx)(s.td,{children:"A double precision floating point number"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"object"}),(0,a.jsx)(s.td,{children:"A map of string keys to heterogeneous node values"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"string"}),(0,a.jsx)(s.td,{children:"A UTF-8 string"})]})]})]}),"\n",(0,a.jsx)(s.p,{children:"The following example defines a trait using a node value:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-subjekt",children:"@length(min: 1, max: 10)\nstring MyString\n"})}),"\n",(0,a.jsx)(s.h2,{id:"shape-id",children:"Shape ID"}),"\n",(0,a.jsx)(s.p,{children:"A shape ID is used to refer to shapes in the model. All shapes have an assigned shape ID. Shape IDs have the following syntax:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"subjekt.example.foo#ExampleShapeName$memberName\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2514\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2518\n     (Namespace)   (Shape name)  (Member name)\n                  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                         (Relative shape ID)\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n              (Absolute shape ID)\n"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Absolute shape ID"}),': An absolute shape ID starts with a namespace, followed by "#", followed by a relative shape ID.']}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Relative shape ID"}),': A relative shape ID contains a shape name and an optional member name. The shape name and member name are separated by the "$" symbol if a member name is present.']}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Namespace"}),": A namespace is a mechanism for logically grouping shapes in a way that makes them reusable alongside other models without naming conflicts. A semantic model may contain shapes defined across different namespaces."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Shape name"}),": The name of the shape within a namespace. Model authors should utilize a strict form of PascalCase in which only the first letter of acronyms, abbreviations, and initialisms are capitalized. For example, prefer UserId over UserID, and Arn over ARN."]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"shapes",children:"Shapes"}),"\n",(0,a.jsx)(s.p,{children:"Shapes are named definitions of types. Shapes are visualized using the below diagram:"}),"\n",(0,a.jsx)(s.h2,{id:"traits",children:"Traits"}),"\n",(0,a.jsx)(s.h2,{id:"prelude",children:"Prelude"})]})}function c(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},4901:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/SemanticModel-962a380e989a56ad509b38be2aa90ae6.svg"},7599:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/SubjektOverview-891172a87b302157fe4724c2abd1ebe3.svg"},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>l});var a=n(6540);const t={},i=a.createContext(t);function r(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);