"use strict";(self.webpackChunkgnosis=self.webpackChunkgnosis||[]).push([[4530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=l,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const a={},i="Building From Scratch",o={unversionedId:"hpc-tutorials/installing-hpc-software/building-from-scratch",id:"hpc-tutorials/installing-hpc-software/building-from-scratch",title:"Building From Scratch",description:"When spack fails, there aren't many options but to build the code from scratch. This is typically an arduous,",source:"@site/docs/02-hpc-tutorials/02-installing-hpc-software/02-building-from-scratch.md",sourceDirName:"02-hpc-tutorials/02-installing-hpc-software",slug:"/hpc-tutorials/installing-hpc-software/building-from-scratch",permalink:"/docs/hpc-tutorials/installing-hpc-software/building-from-scratch",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Building With Spack",permalink:"/docs/hpc-tutorials/installing-hpc-software/building-with-spack"},next:{title:"Important Environment Variables",permalink:"/docs/category/important-environment-variables"}},s={},c=[{value:"Setup",id:"setup",level:2},{value:"Overview of Build Systems",id:"overview-of-build-systems",level:2},{value:"Example: Zlib",id:"example-zlib",level:2},{value:"Download + Decompress",id:"download--decompress",level:3},{value:"Configure",id:"configure",level:3},{value:"Make",id:"make",level:3},{value:"Install",id:"install",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"building-from-scratch"},"Building From Scratch"),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"spack")," fails, there aren't many options but to build the code from scratch. This is typically an arduous,\npoorly documented, and often times frustrating process. Here will provide some simple examples of how to build\nvarious HPC programs from scratch."),(0,l.kt)("h2",{id:"setup"},"Setup"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ${SCS_TUTORIAL}/2.2.1.scratch\ncd ${SCS_TUTORIAL}/2.2.1.scratch\nmkdir src\nmkdir install\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"src"),": will contain the source code of the programs we're building"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"install"),": will contain the compiled code of the programs")),(0,l.kt)("h2",{id:"overview-of-build-systems"},"Overview of Build Systems"),(0,l.kt)("p",null,"There are many build systems you may encounter when building from source"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Autotools"),(0,l.kt)("li",{parentName:"ol"},"Make"),(0,l.kt)("li",{parentName:"ol"},"CMake"),(0,l.kt)("li",{parentName:"ol"},"Ninja"),(0,l.kt)("li",{parentName:"ol"},"Meson")),(0,l.kt)("h2",{id:"example-zlib"},"Example: Zlib"),(0,l.kt)("p",null,"Zlib is foundational to nearly every package in HPC. Zlib is a compression library. Zlib uses Autotools as its build system."),(0,l.kt)("h3",{id:"download--decompress"},"Download + Decompress"),(0,l.kt)("p",null,"First we will download and decompress the zlib package."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://www.zlib.net/zlib-1.3.tar.gz\ntar -xzf zlib-1.3.tar.gz\n")),(0,l.kt)("h3",{id:"configure"},"Configure"),(0,l.kt)("p",null,"Next we will configure Zlib to the particular machine."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd zlib-1.2.13\n./configure --prefix=${SCS_TUTORIAL}/2.2.1.scratch/install\n")),(0,l.kt)("p",null,"The output of ./configure is a Makefile."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--prefix")," tells the Autotools configurator where to install compiled code after building. If left unset, this will default to ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr"),"."),(0,l.kt)("p",null,"To see a full list of configure options, do"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./configure -h\n")),(0,l.kt)("h3",{id:"make"},"Make"),(0,l.kt)("p",null,"After running configure, we will use the machine-specific Makefile to actually compile the code. This is done as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make -j8\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-j")," indicates the amount of parallelism to use when building the progam. In our case we use 8 threads. Don't use more threads than\nyou have cores on your machine."),(0,l.kt)("h3",{id:"install"},"Install"),(0,l.kt)("p",null,"Lastly, we install using:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make install\n")),(0,l.kt)("p",null,"This will populate the install directory with the compiled data."))}d.isMDXComponent=!0}}]);