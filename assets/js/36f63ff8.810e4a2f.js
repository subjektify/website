"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6217],{7413:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var i=t(4848),s=t(8453),r=t(1470),a=t(9365);const l={sidebar_position:2},o="Subjektify CLI",c={id:"reference/subjektify/cli",title:"Subjektify CLI",description:"The Subjektify CLI is a powerful command-line interface designed to streamline the development of decentralized applications (dApps) using Subjektify. This reference guide provides detailed information on all available commands, their usage, and configuration options.",source:"@site/docs/reference/subjektify/cli.md",sourceDirName:"reference/subjektify",slug:"/reference/subjektify/cli",permalink:"/docs/reference/subjektify/cli",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"referenceSidebar",previous:{title:"subjektify.config.(js|ts)",permalink:"/docs/reference/subjektify/config"},next:{title:"Subjektify Runtime Environment",permalink:"/docs/reference/subjektify/runtime"}},u={},d=[{value:"Installation",id:"installation",level:2},{value:"Commands",id:"commands",level:2},{value:"<code>init</code>",id:"init",level:3},{value:"<code>build</code>",id:"build",level:3},{value:"<code>codegen</code>",id:"codegen",level:3},{value:"<code>verify</code>",id:"verify",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"subjektify-cli",children:"Subjektify CLI"}),"\n",(0,i.jsx)(n.p,{children:"The Subjektify CLI is a powerful command-line interface designed to streamline the development of decentralized applications (dApps) using Subjektify. This reference guide provides detailed information on all available commands, their usage, and configuration options."}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.p,{children:"Before using the Subjektify CLI, ensure you have Node.js installed. You can install the Subjektify CLI in your project using:"}),"\n",(0,i.jsxs)(r.A,{children:[(0,i.jsxs)(a.A,{value:"npm",label:"npm",children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install -D subjektify @subjektifylabs/subjektify-toolbox\n"})}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/subjektify/subjektify/tree/main/packages/subjektify-toolbox",children:(0,i.jsx)(n.code,{children:"@subjektifylabs/subjektify-toolbox"})})," contains all the essential plugins you need to get started with dApp development"]})})]}),(0,i.jsx)(a.A,{value:"yarn",label:"Yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn add --dev subjektify @subjektifylabs/subjektify-toolbox\n"})})}),(0,i.jsx)(a.A,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm install -D subjektify @subjektifylabs/subjektify-toolbox\n"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"commands",children:"Commands"}),"\n",(0,i.jsx)(n.h3,{id:"init",children:(0,i.jsx)(n.code,{children:"init"})}),"\n",(0,i.jsx)(n.p,{children:"Initializes a new Subjektify project in the specified directory. This command sets up the initial project structure and configuration files necessary to start developing your dApp."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npx subjektify init [namespace]\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[Optional]"})," ",(0,i.jsx)(n.code,{children:"namespace"}),": The name of the namespace that will encapsulate your application."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npx subjektify init\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Output:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"subjektify.config.(js|ts)"}),": Subjektify's configuration file"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"package.json"}),": NPM's configuration file"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"subjects"}),": The subjects directory will contain a sample subjekt file"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"build",children:(0,i.jsx)(n.code,{children:"build"})}),"\n",(0,i.jsx)(n.p,{children:"Builds the Subjekt model and adds the artifacts to the runtime environment. This command parses, validates, and compiles Subjekt model files (.subjekt or JSON)."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npx subjektify build\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Configuration:"})," ",(0,i.jsx)(n.a,{href:"./config#build",children:"BuildConfig"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npx subjektify build\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Output:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Generates build artifacts based on the defined Subjekt models."}),"\n",(0,i.jsxs)(n.li,{children:["Outputs files to the specified ",(0,i.jsx)(n.code,{children:"outputDirectory"})," in the configuration if defined."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"codegen",children:(0,i.jsx)(n.code,{children:"codegen"})}),"\n",(0,i.jsx)(n.p,{children:"Generates code based on the Subjekt model configuration. This command uses the built Subjekt models to produce executable code in various target languages."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npx subjektify codegen\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Configuration:"})," ",(0,i.jsx)(n.a,{href:"./config#codegen",children:"CodeGenConfig"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npx subjektify codegen\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Output:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Generates code in the specified target language (e.g., TypeScript, Solidity) based on the Subjekt models."}),"\n",(0,i.jsxs)(n.li,{children:["Outputs generated code to the specified ",(0,i.jsx)(n.code,{children:"outputDirectory"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"verify",children:(0,i.jsx)(n.code,{children:"verify"})}),"\n",(0,i.jsxs)(n.p,{children:["Verifies the configuration and setup of your Subjektify project. This command checks the ",(0,i.jsx)(n.code,{children:"subjektify.config.(js|ts)"})," file and ensures that all required fields and settings are correctly defined."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npx subjektify verify\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npx subjektify verify\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Output:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Displays verification results, indicating any errors or missing configurations in the ",(0,i.jsx)(n.code,{children:"subjektify.config.(js|ts)"})," file."]}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);var i=t(4164);const s={tabItem:"tabItem_Ymn6"};var r=t(4848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(s.tabItem,a),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>k});var i=t(6540),s=t(4164),r=t(3104),a=t(6347),l=t(205),o=t(7485),c=t(1682),u=t(9466);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:s}}=e;return{value:n,label:t,attributes:i,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=h(e),[a,o]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[c,d]=p({queryString:t,groupId:s}),[j,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,u.Dv)(t);return[s,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),m=(()=>{const e=c??j;return f({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{m&&o(m)}),[m]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!f({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=t(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function g(e){let{className:n,block:t,selectedValue:i,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),s=l[t].value;s!==i&&(c(n),a(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...r,className:(0,s.A)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=j(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,x.jsx)(g,{...n,...e}),(0,x.jsx)(y,{...n,...e})]})}function k(e){const n=(0,b.A)();return(0,x.jsx)(v,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var i=t(6540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);