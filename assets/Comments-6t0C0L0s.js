import{r as n,j as e,a as K}from"./index-2q2OBrW7.js";import{e as Z,f as W,g as X,s as J,u as Y,L as ee,h as te,U as se}from"./Markdown-qSeObF0f.js";import{i as z,h as re,e as ne,c as F}from"./owner-3VDxqrBW.js";import{S as ae}from"./StyledButton-EhNGyMmL.js";import{s as _}from"./spring-rk-u5Py4.js";import{c as oe,p as le,e as ie,C as ce,a as me}from"./utils-P3J5k1nk.js";import{a as ue}from"./Divider-k72C6mVS.js";import{c as M,a as b}from"./helper-DD-oFgKI.js";import{F as de,u as xe}from"./FlexText-0zPGkTsP.js";import{T as he,G as fe}from"./SocialSourceLink-z6GudVnb.js";import{a as x,j as v,b as C,u as h,s as A}from"./store-9afvYnvD.js";import{P as ge}from"./PinIconToggle-hj7guU3u.js";import{s as pe}from"./Gallery-zzCHNjwo.js";import{m as Ce}from"./motion-minimal-ZKgXd32B.js";var ve=class extends Z{constructor(t,s){super(t,s)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(t,s){super.setOptions({...t,behavior:z()},s)}getOptimisticResult(t){return t.behavior=z(),super.getOptimisticResult(t)}fetchNextPage(t){return this.fetch({...t,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(t){return this.fetch({...t,meta:{fetchMore:{direction:"backward"}}})}createResult(t,s){var m,u,d,g;const{state:r}=t,a=super.createResult(t,s),{isFetching:o,isRefetching:i}=a,l=o&&((u=(m=r.fetchMeta)==null?void 0:m.fetchMore)==null?void 0:u.direction)==="forward",c=o&&((g=(d=r.fetchMeta)==null?void 0:d.fetchMore)==null?void 0:g.direction)==="backward";return{...a,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:re(s,r.data),hasPreviousPage:ne(s,r.data),isFetchingNextPage:l,isFetchingPreviousPage:c,isRefetching:i&&!l&&!c}}};function je(t,s){return W(t,ve,s)}const ye=n.createContext(null),S={didCatch:!1,error:null};let we=class extends n.Component{constructor(s){super(s),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=S}static getDerivedStateFromError(s){return{didCatch:!0,error:s}}resetErrorBoundary(){const{error:s}=this.state;if(s!==null){for(var r,a,o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];(r=(a=this.props).onReset)===null||r===void 0||r.call(a,{args:i,reason:"imperative-api"}),this.setState(S)}}componentDidCatch(s,r){var a,o;(a=(o=this.props).onError)===null||a===void 0||a.call(o,s,r)}componentDidUpdate(s,r){const{didCatch:a}=this.state,{resetKeys:o}=this.props;if(a&&r.error!==null&&be(s.resetKeys,o)){var i,l;(i=(l=this.props).onReset)===null||i===void 0||i.call(l,{next:o,prev:s.resetKeys,reason:"keys"}),this.setState(S)}}render(){const{children:s,fallbackRender:r,FallbackComponent:a,fallback:o}=this.props,{didCatch:i,error:l}=this.state;let c=s;if(i){const m={error:l,resetErrorBoundary:this.resetErrorBoundary};if(typeof r=="function")c=r(m);else if(a)c=n.createElement(a,m);else if(o===null||n.isValidElement(o))c=o;else throw l}return n.createElement(ye.Provider,{value:{didCatch:i,error:l,resetErrorBoundary:this.resetErrorBoundary}},c)}};function be(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return t.length!==s.length||t.some((r,a)=>!Object.is(r,s[a]))}const Ne=()=>e.jsxs("div",{className:"flex w-full flex-col py-6 center",children:["Something went wrong. Please contract to"," ",e.jsx("a",{href:"mailto:i@innei.ren",className:"shiro-link--underline",children:"i@innei.ren"}),".",e.jsx(ae,{onClick:()=>{window.location.reload()},children:"Reload Page"})]}),ke=({children:t})=>e.jsx(we,{FallbackComponent:Ne,onError:s=>{console.error(s)},children:t}),Pe=t=>{const{shadow:s=!0,lazy:r=!0,wrapperProps:a={},size:o,imageUrl:i,text:l,url:c,randomColor:m,radius:u,...d}=t,g=n.useRef(null),[N,j]=n.useState(!r),[B,E]=n.useState(!1),{className:y,...k}=a,p=n.useMemo(()=>(l||i)&&m&&X(J(l||i)),[l,i,m]),L=Y()?p==null?void 0:p.dark.background:p==null?void 0:p.light.background;return e.jsx("div",{className:M("box-border backface-hidden",s&&"shadow-sm",y),ref:g,style:{...o?{height:`${o||80}px`,width:`${o||80}px`}:void 0,...L?{backgroundColor:L}:void 0,...u?{borderRadius:u==="full"?"100%":`${u}px`}:void 0},...k,children:n.createElement(c?"a":"div",{className:"relative inline-block h-full w-full",...c?{href:c,target:"_blank",rel:"noreferrer"}:{}},i&&!B?e.jsx("div",{className:M("h-full w-full bg-cover bg-center bg-no-repeat transition-opacity duration-300",y),children:e.jsx("img",{src:i,style:{opacity:N?1:0,...u?{borderRadius:u==="full"?"100%":`${u}px`}:void 0},height:o,width:o,onLoad:()=>j(!0),onError:()=>E(!0),loading:r?"lazy":"eager",...d,className:M("aspect-square duration-200",d.className)})}):l?e.jsx("div",{className:"relative flex h-full w-full flex-grow select-none items-center justify-center",children:e.jsx(de,{scale:.5,text:l})}):null)})},Be=({text:t})=>e.jsx("div",{className:"flex h-[100px] items-center justify-center text-lg font-medium",children:t||"您当前所在地区暂不支持此功能"}),Ee=oe({from:{opacity:1e-5,scale:.96,y:10},to:{y:0,scale:1,opacity:1},preset:_}),Me=({onLoading:t,children:s,className:r})=>{const{ref:a}=ue({rootMargin:"1px",onChange(o){o&&t()}});return e.jsx("div",{className:r,ref:a,children:s??e.jsx(ee,{})})};function Se(t){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",...t,children:e.jsx("path",{className:"fill-black dark:fill-white",d:"M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25z"})})}function Re(t){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 256 256",...t,children:[e.jsx("path",{fill:"#1877F2",d:"M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"}),e.jsx("path",{fill:"#FFF",d:"m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"})]})}function Ie(t){return e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 15 15",xmlns:"http://www.w3.org/2000/svg",...t,children:[e.jsx("path",{d:"M14.3392 7.95965C14.3392 7.49715 14.3017 7.03215 14.2217 6.57715H7.8042V9.19715H11.4792C11.3267 10.0421 10.8367 10.7896 10.1192 11.2646V12.9646H12.3117C13.5992 11.7796 14.3392 10.0296 14.3392 7.95965Z",fill:"#4285F4"}),e.jsx("path",{d:"M7.80412 14.6074C9.63912 14.6074 11.1866 14.0049 12.3141 12.9649L10.1216 11.2649C9.51162 11.6799 8.72412 11.9149 7.80662 11.9149C6.03162 11.9149 4.52662 10.7174 3.98662 9.10742H1.72412V10.8599C2.87912 13.1574 5.23162 14.6074 7.80412 14.6074Z",fill:"#34A853"}),e.jsx("path",{d:"M3.98375 9.1075C3.69875 8.2625 3.69875 7.3475 3.98375 6.5025V4.75H1.72375C0.75875 6.6725 0.75875 8.9375 1.72375 10.86L3.98375 9.1075Z",fill:"#FBBC04"}),e.jsx("path",{d:"M7.80412 3.69296C8.77412 3.67796 9.71162 4.04296 10.4141 4.71296L12.3566 2.77046C11.1266 1.61546 9.49412 0.980458 7.80412 1.00046C5.23162 1.00046 2.87912 2.45046 1.72412 4.75046L3.98412 6.50296C4.52162 4.89046 6.02912 3.69296 7.80412 3.69296Z",fill:"#EA4335"})]})}function Le(t){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 256 256",...t,children:[e.jsx("path",{fill:"#F1511B",d:"M121.666 121.666H0V0h121.666z"}),e.jsx("path",{fill:"#80CC28",d:"M256 121.666H134.335V0H256z"}),e.jsx("path",{fill:"#00ADEF",d:"M121.663 256.002H0V134.336h121.663z"}),e.jsx("path",{fill:"#FBBC09",d:"M256 256.002H134.335V134.336H256z"})]})}const ze=({strategy:t,className:s})=>{const r=T(t);return!t||!r?null:e.jsx(r,{className:s})},T=t=>{switch(t){case"from_oauth_github":return fe;case"from_oauth_google":return Ie;case"from_oauth_apple":return Se;case"from_oauth_microsoft":return Le;case"from_oauth_facebook":return Re;case"from_oauth_twitter":return he;default:return null}},He="_comment__message_1lfmp_1",Ve={comment__message:He},Fe=["在这里说点什么呢。","小可爱，你想说点什么呢？","或许此地可以留下足迹","你的留言是我前进的动力！","说点什么吧，我会好好听的。","来一发评论，送你一个小星星！","你的评论会让我更加努力哦！","留下你的足迹，让我知道你来过。","我在这里等你的留言呢！","你的评论是我最大的动力！","来一发评论，让我知道你的想法吧！"],pt=()=>pe(Fe),_e=500,w="comment-",Ae=()=>({refId:x(""),text:x(""),author:C(`${w}author`,""),mail:C(`${w}mail`,""),url:C(`${w}url`,""),avatar:x(""),source:x(""),isWhisper:C(`${w}is-whisper`,!1),syncToRecently:C(`${w}sync-to-recently`,!0)}),f=n.createContext(null),O=n.createContext(null),Te=t=>{const{refId:s,children:r,afterSubmit:a,initialValue:o}=t,i=n.useMemo(()=>({...Ae(),refId:x(s)}),[s]);return xe(()=>{o&&v.set(i.text,o)}),e.jsx(f.Provider,{value:i,children:e.jsx(O.Provider,{value:n.useMemo(()=>({afterSubmit:a}),[a]),children:r})},s)},D=n.createContext(!1),Q=n.createContext(""),U=n.createContext(null),Oe=t=>{const{isReply:s,originalRefId:r,onCompleted:a,children:o}=t;return e.jsx(Q.Provider,{value:r,children:e.jsx(D.Provider,{value:s,children:e.jsx(U.Provider,{value:a||null,children:o})})})},De=n.memo(t=>{const{children:s}=t;return n.useEffect(()=>(H(s),()=>{H(null)}),[s]),null}),Qe=n.memo(()=>Ue());Qe.displayName="CommentBoxSlotProvider";De.displayName="CommentBoxSlotPortal";const Ct=()=>n.useContext(D),vt=()=>{const t=h(n.useContext(f).refId);return n.useContext(Q)||t},jt=()=>n.useContext(U),yt=()=>h(n.useContext(f).text),$=()=>h(n.useContext(f).refId),wt=()=>n.useContext(f),bt=()=>n.useContext(O),G=x(null),Ue=()=>h(G),H=t=>v.set(G,t),Nt=()=>h(A(n.useContext(f).text,n.useCallback(t=>t.length>0,[]))),kt=()=>h(A(n.useContext(f).text,n.useCallback(t=>t.length>_e,[]))),Pt=()=>{const t=n.useContext(f);return n.useCallback((s,r)=>{const a=t[s];if(!a)throw new Error(`atom ${s} not found`);v.set(a,r)},[t])};var $e=(t=>(t[t.legacy=0]="legacy",t[t["with-auth"]=1]="with-auth",t))($e||{});const q=C("comment-mode",1),Bt=()=>h(q),Et=t=>v.set(q,t),Ge=({comment:t})=>{const s=te(),r=$();return e.jsx(ge,{pin:!!t.pin,onPinChange:async a=>{s.setQueryData(I(r),o=>le(o,i=>{if(!i)return i;let l=null;return i.pages.forEach(c=>c.data.forEach(m=>{t.id===m.id&&(l=m)})),l&&(l.pin=a),i})),await F.comment.proxy(t.id).patch({data:{pin:a}})}})};function qe(t){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.88em",height:"1em",viewBox:"0 0 14 16",...t,children:e.jsx("path",{fillRule:"evenodd",d:"M8 10.5L9 14H5l1-3.5L5.25 9h3.5L8 10.5zM10 6H4L2 7h10l-2-1zM9 2L7 3L5 2L4 5h6L9 2zm4.03 7.75L10 9l1 2l-2 3h3.22c.45 0 .86-.31.97-.75l.56-2.28c.14-.53-.19-1.08-.72-1.22zM4 9l-3.03.75c-.53.14-.86.69-.72 1.22l.56 2.28c.11.44.52.75.97.75H5l-2-3l1-2z",fill:"currentColor"})})}const Ke=({commentId:t})=>{const[s,r]=n.useState(!1),a=$(),o=n.useCallback(()=>{r(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{"aria-label":"回复",className:b("absolute bottom-0 right-0 translate-x-2/3 translate-y-1/4 text-xs opacity-90","aspect-square rounded-full","box-content flex h-6 w-6 p-[2px] center","border border-slate-200 bg-zinc-100 dark:border-neutral-700 dark:bg-gray-800","invisible cursor-pointer opacity-0","group-[:hover]:visible group-[:hover]:opacity-70"),onClick:()=>{r(i=>!i)},children:e.jsx("i",{className:"icon-[mingcute--comment-line]"})}),e.jsx(Xe,{children:e.jsx(Oe,{isReply:!0,originalRefId:a,onCompleted:o,children:e.jsx(ie,{duration:.2,children:s&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"h-6"}),e.jsx(ce,{refId:t}),e.jsx("div",{className:"h-6"})]})})})})]})},Ze=n.memo(function t(s){var y;const{comment:r,className:a}=s,o=n.useMemo(()=>x(null),[]);if(typeof r=="string")return null;const{id:i,avatar:l,author:c,text:m,key:u,location:d,isWhispers:g,url:N,source:j}=r,B=typeof r.parent=="string"?r.parent:(y=r.parent)==null?void 0:y.id,E=N?e.jsx("a",{href:N,className:"ml-2 max-w-full flex-shrink-0 break-all",target:"_blank",rel:"noreferrer",children:c}):e.jsx("span",{className:"ml-2 max-w-full flex-shrink-0 break-all",children:c});return e.jsxs(e.Fragment,{children:[e.jsxs(R.Provider,{value:o,children:[e.jsx(Ce.li,{initial:r.new?{opacity:0,scale:.93,y:20}:!0,transition:_,animate:r.new?{opacity:1,y:0,scale:1}:void 0,"data-comment-id":i,"data-parent-id":B,className:b("relative my-2",a),children:e.jsxs("div",{className:"group flex w-full items-stretch gap-4",children:[e.jsxs("div",{className:"relative flex w-9 shrink-0 self-end",children:[e.jsx(Pe,{shadow:!1,imageUrl:l,alt:`${c}'s avatar`,className:"h-9 w-9 select-none rounded-full bg-zinc-200 ring-2 ring-zinc-200 dark:bg-zinc-800 dark:ring-zinc-800",width:24,height:24}),j&&!!T(j)&&e.jsx("div",{className:"absolute -right-1.5 bottom-1 flex h-3.5 w-3.5 rounded-full bg-white ring-[1.5px] ring-zinc-200 center dark:bg-zinc-800 dark:ring-black",children:e.jsx(ze,{strategy:j,className:"h-3 w-3"})})]}),e.jsxs("div",{className:b("flex flex-1 flex-col","w-full min-w-0 items-start"),children:[e.jsxs("span",{className:b("flex items-center gap-2 font-semibold text-zinc-800 dark:text-zinc-200","relative mb-2 w-full min-w-0 justify-center"),children:[e.jsxs("span",{className:"flex flex-grow flex-wrap items-center gap-2",children:[E,e.jsxs("span",{className:"flex min-w-0 flex-shrink select-none flex-wrap items-center space-x-2 self-end",children:[e.jsx("span",{className:"inline-flex flex-shrink-0 text-[0.71rem] font-medium opacity-40",children:e.jsx(me,{date:r.created})}),e.jsx("span",{className:"break-all text-[0.71rem] opacity-30",children:u}),!!d&&e.jsxs("span",{className:"min-w-0 max-w-full truncate break-all text-[0.71rem] opacity-[0.35]",children:["来自：",d]}),!!g&&e.jsx(qe,{})]})]}),e.jsx("span",{className:"flex-shrink-0",children:e.jsx(Ge,{comment:r})})]}),e.jsxs("div",{className:b(Ve.comment__message,"relative inline-block rounded-xl px-2 py-1 text-zinc-800 dark:text-zinc-200","rounded-bl-sm bg-zinc-600/5 dark:bg-zinc-500/20","max-w-[calc(100%-3rem)]"),children:[e.jsx(se,{options:{disabledTypes:Je,disableParsingRawHTML:!0,forceBlock:!0},children:m}),e.jsx(Ke,{commentId:r.id})]})]})]})}),e.jsx(We,{})]}),r.children&&r.children.length>0&&e.jsx("ul",{className:"my-2 space-y-2",children:r.children.map(k=>e.jsx(t,{comment:k,className:"ml-9"},k.id))})]})}),R=n.createContext(x(null)),We=()=>{const t=n.useRef(null),s=n.useContext(R);return n.useLayoutEffect(()=>(v.set(s,t.current),()=>{v.set(s,null)}),[s]),e.jsx("div",{ref:t})},Xe=t=>{const s=h(n.useContext(R));return s?K.createPortal(t.children,s):null},Je=["footnote","footnoteReference","image","htmlComment","htmlSelfClosing","htmlBlock"],P=()=>e.jsxs("li",{className:"relative animate-pulse list-none",children:[e.jsxs("div",{className:"group flex w-full items-stretch gap-2",children:[e.jsx("div",{className:"flex w-9 shrink-0 items-end",children:e.jsx("div",{className:"h-9 w-9 rounded-full bg-gray-300 dark:bg-neutral-600"})}),e.jsxs("div",{className:"flex w-full min-w-0 flex-1 flex-col items-start",children:[e.jsx("span",{className:"relative mb-2 flex w-full min-w-0 items-center justify-center gap-2",children:e.jsxs("span",{className:"flex flex-grow items-center gap-2",children:[e.jsx("span",{className:"ml-2 h-4 w-20 bg-gray-300 dark:bg-neutral-600"}),e.jsxs("span",{className:"flex select-none items-center space-x-2",children:[e.jsx("span",{className:"inline-flex h-4 w-20 bg-gray-300 text-[0.71rem] font-medium opacity-40 dark:bg-neutral-600"}),e.jsx("span",{className:"h-4 w-20 bg-gray-300 text-[0.71rem] opacity-30 dark:bg-neutral-600"})]})]})}),e.jsxs("div",{className:"relative flex w-full flex-col gap-2",children:[e.jsx("div",{className:"relative ml-2 inline-block h-4 w-[calc(100%-3rem)] rounded-xl bg-gray-300 px-2 py-1 dark:bg-neutral-600"}),e.jsx("div",{className:"relative ml-2 inline-block h-4 w-[120px] rounded-xl bg-gray-300 px-2 py-1 dark:bg-neutral-600"})]})]})]}),e.jsx("span",{className:"sr-only",children:"Loading..."})]}),V=()=>e.jsxs("div",{className:"flex min-h-[400px] flex-col space-y-4",children:[e.jsx(P,{}),e.jsx(P,{}),e.jsx(P,{}),e.jsx(P,{})]}),I=t=>["comments",t],Ye=({refId:t})=>{const s=n.useMemo(()=>I(t),[t]),{data:r,isLoading:a,fetchNextPage:o,hasNextPage:i}=je({queryKey:s,queryFn:async({queryKey:l,pageParam:c})=>{const m=c,[,u]=l;return(await F.comment.getByRefId(u,{page:m})).$serialized},meta:{persist:!1},getNextPageParam:l=>l.pagination.hasNextPage?l.pagination.currentPage+1:void 0,getPreviousPageParam:l=>l.pagination.currentPage-1,initialPageParam:1});return a?e.jsx(V,{}):!r||!r.pages.length||!r.pages[0].data.length?e.jsx("div",{className:"flex min-h-[400px] center",children:e.jsx(Be,{text:"这里还没有评论呢"})}):e.jsxs(ke,{children:[e.jsx("ul",{className:"min-h-[400px] list-none space-y-4",children:r==null?void 0:r.pages.map((l,c)=>e.jsx(Ee,{children:l.data.map(m=>e.jsx(et,{comment:m,refId:t},m.id))},c))}),i&&e.jsx(Me,{onLoading:o,children:e.jsx(V,{})})]})},et=n.memo(function({comment:s,refId:r}){return e.jsx(Te,{refId:r,children:e.jsx(Ze,{comment:s})})}),Mt=Object.freeze(Object.defineProperty({__proto__:null,Comments:Ye,buildQueryKey:I},Symbol.toStringTag,{value:"Module"}));export{Ye as C,ke as E,_e as M,Qe as a,$ as b,wt as c,bt as d,Ct as e,vt as f,jt as g,kt as h,yt as i,Pt as j,I as k,pt as l,De as m,$e as n,Bt as o,Te as p,Mt as q,Et as s,Nt as u};
