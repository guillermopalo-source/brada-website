import{j as e,c as Z,S as B,H as ee}from"./index-BlrhO5_B.js";import{p as I}from"./projects-C_oTEh0X.js";import{r as o,c as q,f as te,L as re}from"./vendor-react-B4cOHcOO.js";import{u as oe}from"./usePageEnter-DB9u73fP.js";import{S as w}from"./ScrollReveal-CVOiK75L.js";import{g as i,u as F}from"./vendor-gsap-xpmLH8Qn.js";import"./vendor-lenis-Bu7sAdyK.js";import"./config-D0f8ZL2Z.js";function ae({project:t}){return e.jsxs("div",{"code-path":"src/features/work-detail/components/ProjectHeader.tsx:3:9",className:"flex flex-col md:flex-row justify-between items-start md:items-center mb-1 px-0 gap-6 md:gap-8 text-left",children:[e.jsxs("div",{"code-path":"src/features/work-detail/components/ProjectHeader.tsx:4:13",className:"flex-1 flex flex-col gap-1 md:gap-2",children:[e.jsx("h1",{"code-path":"src/features/work-detail/components/ProjectHeader.tsx:5:17",className:"text-black dark:text-brada-light transition-colors duration-500 font-inter font-extrabold tracking-tighter uppercase",children:e.jsxs("span",{"code-path":"src/features/work-detail/components/ProjectHeader.tsx:6:21",className:"page-enter block leading-none text-[1.6rem] sm:text-[2rem] md:text-[2.4rem] lg:text-[3rem] xl:text-[3.8rem] whitespace-pre-line",children:[t.title,t.accentTitle&&e.jsx("span",{"code-path":"src/features/work-detail/components/ProjectHeader.tsx:9:29",className:"inline-block align-baseline normal-case font-normal ml-2 md:ml-4 font-garamond text-[1.12em] tracking-[-0.01em] leading-[0]",children:t.accentTitle})]})}),e.jsx("p",{"code-path":"src/features/work-detail/components/ProjectHeader.tsx:15:17",className:"page-enter text-black dark:text-brada-light/70 text-base sm:text-lg md:text-lg lg:text-base xl:text-xl max-w-4xl leading-[1.1] tracking-wide transition-colors duration-500 whitespace-pre-line",children:t.description})]}),t.headerLogo&&e.jsx("div",{"code-path":"src/features/work-detail/components/ProjectHeader.tsx:21:17",className:`page-enter hidden md:flex justify-end shrink-0 ${t.headerLogoClassName??"h-[32px] md:h-[48px] lg:h-[60px]"}`,children:t.useMask?e.jsx("div",{"code-path":"src/features/work-detail/components/ProjectHeader.tsx:23:25",className:"h-full w-auto relative bg-black dark:bg-brada-light transition-colors duration-500",style:{WebkitMask:`url("${t.headerLogo}") no-repeat center / contain`,mask:`url("${t.headerLogo}") no-repeat center / contain`},children:e.jsx("img",{"code-path":"src/features/work-detail/components/ProjectHeader.tsx:30:29",src:t.headerLogo,alt:"",className:"h-full w-auto object-contain opacity-0 pointer-events-none select-none","aria-hidden":"true"})}):t.headerLogoLight?e.jsxs(e.Fragment,{children:[e.jsx("img",{"code-path":"src/features/work-detail/components/ProjectHeader.tsx:39:29",src:t.headerLogo,alt:"Client Logo",className:"h-full w-auto object-contain hidden dark:block"}),e.jsx("img",{"code-path":"src/features/work-detail/components/ProjectHeader.tsx:40:29",src:t.headerLogoLight,alt:"Client Logo",className:"h-full w-auto object-contain block dark:hidden"})]}):e.jsx("img",{"code-path":"src/features/work-detail/components/ProjectHeader.tsx:43:25",src:t.headerLogo,alt:"Client Logo",className:"h-full w-auto object-contain"})})]})}function se({containerRef:t,visible:c}){const r=o.useRef(null),m=o.useRef(0),l=o.useRef({x:-999,y:-999}),a=o.useRef({x:-999,y:-999});return o.useEffect(()=>{i.set(r.current,{opacity:0})},[]),o.useEffect(()=>{const s=r.current;s&&(i.killTweensOf(s),c&&(a.current.x=l.current.x,a.current.y=l.current.y,i.set(s,{x:a.current.x,y:a.current.y})),i.to(s,{opacity:c?1:0,duration:.18,ease:c?"power2.out":"power2.in"}))},[c]),o.useEffect(()=>{const s=t.current;if(!s)return;const d=h=>{const x=s.getBoundingClientRect();l.current={x:h.clientX-x.left,y:h.clientY-x.top}},f=()=>{a.current.x+=(l.current.x-a.current.x)*.1,a.current.y+=(l.current.y-a.current.y)*.1,r.current&&i.set(r.current,{x:a.current.x,y:a.current.y}),m.current=requestAnimationFrame(f)};return m.current=requestAnimationFrame(f),s.addEventListener("mousemove",d),()=>{cancelAnimationFrame(m.current),s.removeEventListener("mousemove",d)}},[t]),e.jsx("div",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:53:9",ref:r,className:"absolute top-0 left-0 pointer-events-none",style:{transform:"translate(-50%,-50%)",opacity:0,zIndex:200,mixBlendMode:"difference"},children:e.jsx("span",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:58:13",className:"select-none font-inter-tight block whitespace-nowrap",style:{fontWeight:800,fontSize:"3.4rem",letterSpacing:"-0.03em",lineHeight:1,color:"#ffffff",textTransform:"none"},children:"Watch"})})}function ne({project:t}){const[c,r]=o.useState(!1),[m,l]=o.useState(!1),a=o.useRef(null),s=o.useRef(null),d=o.useRef(null);if(!t.mainVideo&&!t.galleryThumb&&!t.autoPlayHero&&!t.mainImage)return null;const f="absolute inset-0 w-full h-full object-cover",h=()=>{c||(l(!0),!(!t.galleryLoop||!d.current)&&(d.current.play().catch(()=>{}),i.to(d.current,{opacity:1,duration:.4,ease:"power2.out"}),i.to(s.current,{opacity:0,duration:.4,ease:"power2.out"})))},x=()=>{l(!1),!(!t.galleryLoop||!d.current)&&(i.to(d.current,{opacity:0,duration:.35,ease:"power2.in",onComplete:()=>{d.current&&(d.current.pause(),d.current.currentTime=0)}}),i.to(s.current,{opacity:1,duration:.35,ease:"power2.in"}))},v=()=>{c||(r(!0),l(!1))},C=()=>{r(!1)};return o.useEffect(()=>{const j=N=>{N.key==="Escape"&&c&&r(!1)};return window.addEventListener("keydown",j),()=>window.removeEventListener("keydown",j)},[c]),t.autoPlayHero&&t.galleryLoop?e.jsx(w,{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:137:13",delay:300,children:e.jsx("div",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:138:17",className:"relative w-full overflow-hidden bg-black rounded-3xl aspect-video pointer-events-none select-none",children:e.jsxs("video",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:139:21",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"absolute inset-0 w-full h-full object-cover",children:[e.jsx("source",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:146:25",src:`${t.galleryLoop}.webm`,type:"video/webm"}),e.jsx("source",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:147:25",src:`${t.galleryLoop}.mp4`,type:"video/mp4"})]})})}):t.mainImage?e.jsx(w,{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:157:13",delay:300,children:e.jsx("div",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:158:17",className:"relative w-full overflow-hidden bg-black rounded-3xl aspect-[16/9] pointer-events-none select-none",children:e.jsxs("picture",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:159:21",style:{display:"contents"},children:[e.jsx("source",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:160:25",srcSet:`${t.mainImage}.avif`,type:"image/avif"}),e.jsx("source",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:161:25",srcSet:`${t.mainImage}.webp`,type:"image/webp"}),e.jsx("img",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:162:25",src:`${t.mainImage}.avif`,alt:t.title,className:"absolute inset-0 w-full h-full object-cover"})]})})}):t.staticHero&&t.galleryThumb?e.jsx(w,{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:176:13",delay:300,children:e.jsx("div",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:177:17",className:"relative w-full overflow-hidden bg-black rounded-3xl aspect-video pointer-events-none select-none",children:e.jsxs("picture",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:178:21",style:{display:"contents"},children:[e.jsx("source",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:179:25",srcSet:`${t.galleryThumb}.avif`,type:"image/avif"}),e.jsx("source",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:180:25",srcSet:`${t.galleryThumb}.webp`,type:"image/webp"}),e.jsx("img",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:181:25",src:`${t.galleryThumb}.avif`,alt:t.title,className:"absolute inset-0 w-full h-full object-cover"})]})})}):e.jsx(w,{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:194:9",delay:300,children:e.jsxs("div",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:195:13",ref:a,className:"relative w-full overflow-hidden bg-black rounded-3xl aspect-video",children:[!c&&e.jsxs(e.Fragment,{children:[!t.hideWatchCursor&&e.jsx(se,{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:199:29",containerRef:a,visible:m}),e.jsxs("div",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:201:25",onClick:v,onMouseEnter:h,onMouseLeave:x,className:`absolute inset-0 group ${t.hideWatchCursor?"cursor-default":"cursor-none"}`,children:[t.galleryThumb&&e.jsxs("picture",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:208:33",style:{display:"contents"},children:[e.jsx("source",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:209:37",srcSet:`${t.galleryThumb}.avif`,type:"image/avif"}),e.jsx("source",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:210:37",srcSet:`${t.galleryThumb}.webp`,type:"image/webp"}),e.jsx("img",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:211:37",ref:s,src:`${t.galleryThumb}.avif`,alt:t.title,className:f,style:{opacity:1}})]}),t.galleryLoop&&e.jsxs("video",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:221:33",ref:d,muted:!0,loop:!0,playsInline:!0,preload:"metadata",className:f,style:{opacity:0},children:[e.jsx("source",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:228:37",src:`${t.galleryLoop}.webm`,type:"video/webm"}),e.jsx("source",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:229:37",src:`${t.galleryLoop}.mp4`,type:"video/mp4"})]}),e.jsx("div",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:232:29",className:"absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none"})]})]}),c&&t.mainVideo&&e.jsxs(e.Fragment,{children:[e.jsxs("video",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:238:25",autoPlay:!0,controls:!0,playsInline:!0,className:"absolute inset-0 w-full h-full bg-black",children:[e.jsx("source",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:244:29",src:t.mainVideo.replace(/\.mp4$/,".webm"),type:"video/webm"}),e.jsx("source",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:245:29",src:t.mainVideo,type:"video/mp4"})]}),e.jsx("button",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:247:25",onClick:C,"aria-label":"Close video",className:"absolute top-3 right-3 z-10 text-white/70 hover:text-white transition-colors duration-200 cursor-pointer",children:e.jsxs("svg",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:252:29",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:253:33",d:"M18 6 6 18"}),e.jsx("path",{"code-path":"src/features/work-detail/components/ProjectHeroMedia.tsx:253:56",d:"m6 6 12 12"})]})})]})]})})}function ie({project:t}){return t?e.jsxs("div",{"code-path":"src/features/work-detail/components/ProjectSidebar.tsx:6:9",className:"flex flex-col gap-8 bg-transparent text-left py-12 lg:py-0 lg-sidebar-content",children:[e.jsx("style",{"code-path":"src/features/work-detail/components/ProjectSidebar.tsx:7:13",children:`
                @media (min-width: 1024px) and (max-width: 1279px) {
                    .lg-sidebar-content {
                        gap: 22px !important;
                    }
                    .lg-sidebar-content h2 { font-size: 1.05rem !important; }
                    .lg-sidebar-content p, 
                    .lg-sidebar-content span:not(.tag-item) { font-size: 0.85rem !important; }
                    .lg-sidebar-content h3 { font-size: 1.25rem !important; }
                    .lg-sidebar-content .tag-item { 
                        font-size: 10.5px !important; 
                        padding: 5px 9px !important;
                    }
                }

                @media (min-width: 768px) and (max-width: 1023px) {
                    .lg-sidebar-content p,
                    .lg-sidebar-content h2,
                    .lg-sidebar-content h3 {
                        max-width: 80% !important;
                    }
                }
            `}),t.sidebar?.logo&&e.jsx(w,{"code-path":"src/features/work-detail/components/ProjectSidebar.tsx:32:17",children:t.useMask?e.jsx("div",{"code-path":"src/features/work-detail/components/ProjectSidebar.tsx:34:25",className:`${t.sidebar.logoClassName??"w-[80px] md:w-[100px]"} h-auto relative bg-black dark:bg-brada-light transition-colors duration-500`,style:{WebkitMask:`url("${t.sidebar.logo}") no-repeat left center / contain`,mask:`url("${t.sidebar.logo}") no-repeat left center / contain`},children:e.jsx("img",{"code-path":"src/features/work-detail/components/ProjectSidebar.tsx:42:29",src:t.sidebar.logo,alt:"",className:"w-full h-auto object-contain object-left opacity-0 pointer-events-none select-none","aria-hidden":"true"})}):t.sidebar.logoLight?e.jsxs(e.Fragment,{children:[e.jsx("img",{"code-path":"src/features/work-detail/components/ProjectSidebar.tsx:52:29",src:t.sidebar.logo,alt:"Client Logo",className:`${t.sidebar.logoClassName??"w-[80px] md:w-[100px]"} h-auto object-contain object-left hidden dark:block`}),e.jsx("img",{"code-path":"src/features/work-detail/components/ProjectSidebar.tsx:58:29",src:t.sidebar.logoLight,alt:"Client Logo",className:`${t.sidebar.logoClassName??"w-[80px] md:w-[100px]"} h-auto object-contain object-left block dark:hidden`})]}):e.jsx("img",{"code-path":"src/features/work-detail/components/ProjectSidebar.tsx:65:25",src:t.sidebar.logo,alt:"Client Logo",className:`${t.sidebar.logoClassName??"w-[80px] md:w-[100px]"} h-auto object-contain object-left`})}),t.sidebar?.title&&e.jsx(w,{"code-path":"src/features/work-detail/components/ProjectSidebar.tsx:74:17",delay:50,children:e.jsx("h2",{"code-path":"src/features/work-detail/components/ProjectSidebar.tsx:75:21",className:"text-lg -mt-3 md:text-l font-semibold text-foreground",children:t.sidebar.title})}),t.sidebar?.project&&e.jsx(w,{"code-path":"src/features/work-detail/components/ProjectSidebar.tsx:82:17",delay:100,children:e.jsxs("div",{"code-path":"src/features/work-detail/components/ProjectSidebar.tsx:83:21",className:"flex flex-col gap-1.5",children:[e.jsx("span",{"code-path":"src/features/work-detail/components/ProjectSidebar.tsx:84:25",className:"text-foreground font-medium text-sm md:text-base tracking-wide border-b border-foreground/30 pb-1 w-fit mb-1",children:"Claim"}),e.jsx("p",{"code-path":"src/features/work-detail/components/ProjectSidebar.tsx:87:25",className:"text-foreground/80 font-inter text-sm md:text-base font-medium",children:t.sidebar.project})]})}),t.sidebar?.campaign&&e.jsx(w,{"code-path":"src/features/work-detail/components/ProjectSidebar.tsx:96:17",delay:200,children:e.jsxs("div",{"code-path":"src/features/work-detail/components/ProjectSidebar.tsx:97:21",className:"flex flex-col gap-1.5",children:[e.jsx("span",{"code-path":"src/features/work-detail/components/ProjectSidebar.tsx:98:25",className:"text-foreground font-medium text-sm md:text-base tracking-wide border-b border-foreground/30 pb-1 w-fit mb-1",children:"Campaign"}),e.jsx("h3",{"code-path":"src/features/work-detail/components/ProjectSidebar.tsx:101:25",className:"text-foreground font-inter font-bold text-xl md:text-2xl leading-tight",children:t.sidebar.campaign})]})}),t.sidebar?.brief&&e.jsx(w,{"code-path":"src/features/work-detail/components/ProjectSidebar.tsx:110:17",delay:300,children:e.jsxs("div",{"code-path":"src/features/work-detail/components/ProjectSidebar.tsx:111:21",className:"flex flex-col gap-1.5",children:[e.jsx("span",{"code-path":"src/features/work-detail/components/ProjectSidebar.tsx:112:25",className:"text-foreground font-medium text-sm md:text-base tracking-wide border-b border-foreground/30 pb-1 w-fit mb-1",children:"Project brief"}),e.jsx("p",{"code-path":"src/features/work-detail/components/ProjectSidebar.tsx:115:25",className:"text-foreground/70 text-sm md:text-[0.95rem] leading-snug",children:t.sidebar.brief})]})}),t.sidebar?.overview&&e.jsx(w,{"code-path":"src/features/work-detail/components/ProjectSidebar.tsx:124:17",delay:400,children:e.jsxs("div",{"code-path":"src/features/work-detail/components/ProjectSidebar.tsx:125:21",className:"flex flex-col gap-1.5",children:[e.jsx("span",{"code-path":"src/features/work-detail/components/ProjectSidebar.tsx:126:25",className:"text-foreground font-medium text-sm md:text-base tracking-wide border-b border-foreground/30 pb-1 w-fit mb-1",children:"Overview"}),e.jsx("p",{"code-path":"src/features/work-detail/components/ProjectSidebar.tsx:129:25",className:"text-foreground/70 text-sm md:text-[0.95rem] leading-snug",children:t.sidebar.overview})]})}),t.sidebar?.tags&&e.jsx(w,{"code-path":"src/features/work-detail/components/ProjectSidebar.tsx:138:17",delay:500,children:e.jsxs("div",{"code-path":"src/features/work-detail/components/ProjectSidebar.tsx:139:21",className:"flex flex-col gap-2",children:[e.jsx("span",{"code-path":"src/features/work-detail/components/ProjectSidebar.tsx:140:25",className:"text-foreground font-medium text-sm md:text-base tracking-wide border-b border-foreground/30 pb-1 w-fit mb-1",children:"Tags"}),e.jsx("div",{"code-path":"src/features/work-detail/components/ProjectSidebar.tsx:144:25",className:"flex flex-wrap gap-2",children:t.sidebar.tags.map((c,r)=>e.jsx("span",{"code-path":"src/features/work-detail/components/ProjectSidebar.tsx:146:33",className:"px-3 py-1.5 border border-foreground/30 rounded-lg text-[10px] sm:text-xs text-foreground/80 uppercase tracking-widest leading-none tag-item",children:c},r))})]})})]}):null}function H({src:t,alt:c="",className:r="w-full h-full object-cover"}){return t.endsWith(".mp4")||t.endsWith(".webm")?e.jsxs("video",{"code-path":"src/components/custom/MediaRenderer.tsx:21:13",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"none",className:r,children:[e.jsx("source",{"code-path":"src/components/custom/MediaRenderer.tsx:29:17",src:t.replace(/\.mp4$/,".webm").replace(/\.webm$/,".webm"),type:"video/webm"}),e.jsx("source",{"code-path":"src/components/custom/MediaRenderer.tsx:30:17",src:t.replace(/\.webm$/,".mp4").replace(/\.mp4$/,".mp4"),type:"video/mp4"})]}):/\.\w{2,5}$/.test(t)?e.jsx("img",{"code-path":"src/components/custom/MediaRenderer.tsx:55:9",src:t,alt:c,loading:"lazy",decoding:"async",className:r}):e.jsxs("picture",{"code-path":"src/components/custom/MediaRenderer.tsx:39:13",style:{display:"contents"},children:[e.jsx("source",{"code-path":"src/components/custom/MediaRenderer.tsx:40:17",srcSet:`${t}.avif`,type:"image/avif"}),e.jsx("source",{"code-path":"src/components/custom/MediaRenderer.tsx:41:17",srcSet:`${t}.webp`,type:"image/webp"}),e.jsx("img",{"code-path":"src/components/custom/MediaRenderer.tsx:42:17",src:`${t}.avif`,alt:c,loading:"lazy",decoding:"async",className:r})]})}function ce({containerRef:t,visible:c}){const r=o.useRef(null),m=o.useRef(0),l=o.useRef({x:-999,y:-999}),a=o.useRef({x:-999,y:-999});return o.useEffect(()=>{i.set(r.current,{opacity:0})},[]),o.useEffect(()=>{const s=r.current;s&&(i.killTweensOf(s),c&&(a.current.x=l.current.x,a.current.y=l.current.y,i.set(s,{x:a.current.x,y:a.current.y})),i.to(s,{opacity:c?1:0,duration:.18,ease:c?"power2.out":"power2.in"}))},[c]),o.useEffect(()=>{const s=t.current;if(!s)return;const d=h=>{const x=s.getBoundingClientRect();l.current={x:h.clientX-x.left,y:h.clientY-x.top}},f=()=>{a.current.x+=(l.current.x-a.current.x)*.1,a.current.y+=(l.current.y-a.current.y)*.1,r.current&&i.set(r.current,{x:a.current.x,y:a.current.y}),m.current=requestAnimationFrame(f)};return m.current=requestAnimationFrame(f),s.addEventListener("mousemove",d),()=>{cancelAnimationFrame(m.current),s.removeEventListener("mousemove",d)}},[t]),e.jsx("div",{"code-path":"src/components/custom/GalleryInteractiveVideo.tsx:52:9",ref:r,className:"absolute top-0 left-0 pointer-events-none",style:{transform:"translate(-50%,-50%)",opacity:0,zIndex:200,mixBlendMode:"difference"},children:e.jsx("span",{"code-path":"src/components/custom/GalleryInteractiveVideo.tsx:57:13",className:"select-none font-inter-tight block whitespace-nowrap",style:{fontWeight:800,fontSize:"3.4rem",letterSpacing:"-0.03em",lineHeight:1,color:"#ffffff",textTransform:"none"},children:"Watch"})})}function le({src:t,thumb:c,loop:r,aspect:m}){const[l,a]=o.useState(!1),[s,d]=o.useState(!1),f=o.useRef(null),h=o.useRef(null),x=o.useRef(null),v="absolute inset-0 w-full h-full object-cover",C=()=>{l||(d(!0),!(!r||!x.current)&&(x.current.play().catch(()=>{}),i.to(x.current,{opacity:1,duration:.4,ease:"power2.out"}),h.current&&i.to(h.current,{opacity:0,duration:.4,ease:"power2.out"})))},j=()=>{d(!1),!(!r||!x.current)&&(i.to(x.current,{opacity:0,duration:.35,ease:"power2.in",onComplete:()=>{x.current&&(x.current.pause(),x.current.currentTime=0)}}),h.current&&i.to(h.current,{opacity:1,duration:.35,ease:"power2.in"}))},N=()=>{l||(a(!0),d(!1))},G=()=>{a(!1)};return o.useEffect(()=>{const P=g=>{g.key==="Escape"&&l&&a(!1)};return window.addEventListener("keydown",P),()=>window.removeEventListener("keydown",P)},[l]),e.jsxs("div",{"code-path":"src/components/custom/GalleryInteractiveVideo.tsx:136:9",ref:f,className:`relative w-full overflow-hidden bg-black ${m||"aspect-video"}`,children:[!l&&e.jsxs(e.Fragment,{children:[e.jsx(ce,{"code-path":"src/components/custom/GalleryInteractiveVideo.tsx:139:21",containerRef:f,visible:s}),e.jsxs("div",{"code-path":"src/components/custom/GalleryInteractiveVideo.tsx:140:21",onClick:N,onMouseEnter:C,onMouseLeave:j,className:"absolute inset-0 cursor-none group",children:[c?e.jsxs("picture",{"code-path":"src/components/custom/GalleryInteractiveVideo.tsx:148:29",style:{display:"contents"},children:[e.jsx("source",{"code-path":"src/components/custom/GalleryInteractiveVideo.tsx:149:33",srcSet:`${c}.avif`,type:"image/avif"}),e.jsx("source",{"code-path":"src/components/custom/GalleryInteractiveVideo.tsx:150:33",srcSet:`${c}.webp`,type:"image/webp"}),e.jsx("img",{"code-path":"src/components/custom/GalleryInteractiveVideo.tsx:151:33",ref:h,src:`${c}.avif`,alt:"Interactive thumbnail",className:v,style:{opacity:1}})]}):e.jsx("video",{"code-path":"src/components/custom/GalleryInteractiveVideo.tsx:161:29",ref:h,src:t,preload:"metadata",className:v,style:{opacity:1}}),r&&e.jsxs("video",{"code-path":"src/components/custom/GalleryInteractiveVideo.tsx:172:29",ref:x,muted:!0,loop:!0,playsInline:!0,preload:"metadata",className:v,style:{opacity:0},children:[e.jsx("source",{"code-path":"src/components/custom/GalleryInteractiveVideo.tsx:179:33",src:`${r}.webm`,type:"video/webm"}),e.jsx("source",{"code-path":"src/components/custom/GalleryInteractiveVideo.tsx:180:33",src:`${r}.mp4`,type:"video/mp4"})]}),e.jsx("div",{"code-path":"src/components/custom/GalleryInteractiveVideo.tsx:183:25",className:"absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none"})]})]}),l&&e.jsxs(e.Fragment,{children:[e.jsxs("video",{"code-path":"src/components/custom/GalleryInteractiveVideo.tsx:191:21",autoPlay:!0,controls:!0,playsInline:!0,className:"absolute inset-0 w-full h-full bg-black z-10",children:[e.jsx("source",{"code-path":"src/components/custom/GalleryInteractiveVideo.tsx:197:25",src:t.replace(/\.mp4$/,".webm"),type:"video/webm"}),e.jsx("source",{"code-path":"src/components/custom/GalleryInteractiveVideo.tsx:198:25",src:t,type:"video/mp4"})]}),e.jsx("button",{"code-path":"src/components/custom/GalleryInteractiveVideo.tsx:200:21",onClick:G,"aria-label":"Close video",className:"absolute top-3 right-3 z-20 text-white/70 hover:text-white transition-colors duration-200 cursor-pointer",children:e.jsxs("svg",{"code-path":"src/components/custom/GalleryInteractiveVideo.tsx:205:25",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{"code-path":"src/components/custom/GalleryInteractiveVideo.tsx:206:29",d:"M18 6 6 18"}),e.jsx("path",{"code-path":"src/components/custom/GalleryInteractiveVideo.tsx:206:52",d:"m6 6 12 12"})]})})]})]})}function de({project:t}){if(!t.gallery||t.gallery.length===0)return null;const c=r=>typeof r=="string"?{src:r}:{src:r.src,width:r.width,height:r.height,className:r.className||""};return e.jsxs("div",{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:23:9",className:"flex flex-col gap-6 md:gap-8 mb-32 md:mb-48 lg-gallery-container",children:[e.jsx("style",{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:24:13",children:`
                @media (min-width: 1024px) and (max-width: 1279px) {
                    .lg-centered-text-block {
                        margin-left: 2.5rem !important;
                        gap: 3.5rem !important;
                        width: calc(100% - 2rem) !important;
                    }
                    .lg-centered-text-block h3 {
                        font-size: 2.6rem !important;
                        margin-top: 10px !important;
                    }
                    .lg-centered-image-wrapper {
                        margin-left: 0 !important;
                        margin-top: 55px !important;
                        flex: 1 !important;
                    }
                    .lg-centered-image-wrapper > div {
                        max-width: 210px !important;
                    }
                    .lg-custom-img-left {
                        max-width: 520px !important;
                    }
                    .lg-custom-img-right {
                        max-width: 270px !important;
                        margin-top: 10px !important;
                    }
                    .lg-items-center {
                        align-items: center !important;
                    }
                    .lg-custom-img-up {
                        margin-top: 20px !important;
                    }
                    .lg-emy-large {
                        max-width: 380px !important;
                    }
                    .lg-lemy-body {
                        max-width: 240px !important;
                        margin-left: auto !important;
                        margin-right: auto !important;
                    }
                    .lg-lemy-video {
                        max-width: 240px !important;
                        margin-left: auto !important;
                        margin-right: auto !important;
                    }
                    .lg-bottom-section {
                        margin-top: 1rem !important;
                        margin-bottom: 0 !important;
                        gap: 1rem !important;
                    }
                    .lg-scaled-grid-8 {
                        grid-template-columns: 3fr 1fr !important;
                        gap: 3rem !important;
                    }
                    .lg-img-8-1 {
                        max-width: 90px !important;
                        margin-left: auto !important;
                        margin-right: auto !important;
                    }
                    .lg-gallery-text-block {
                        gap: 3rem !important;
                    }
                    .lg-gallery-text-block h3 {
                        font-size: 0.85rem !important;
                        white-space: nowrap !important;
                    }
                    .lg-gallery-text-block p {
                        font-size: 0.9rem !important;
                        line-height: normal !important;
                    }
                    .lg-text-wrapper {
                        max-width: 30rem !important;
                    }
                    .lg-text-row {
                        margin-top: 6rem !important;
                        margin-bottom: 6rem !important;
                        padding-top: 0 !important;
                        padding-bottom: 0 !important;
                    }
                }

                @media (min-width: 768px) and (max-width: 1023px) {
                    .lg-gallery-text-block h3 {
                        white-space: nowrap !important;
                    }
                    .lg-gallery-text-block p {
                        font-size: 0.95rem !important;
                        line-height: 1.3 !important;
                        max-width: 90% !important;
                    }
                    .lg-text-row {
                        margin-top: 6rem !important;
                        margin-bottom: 6rem !important;
                        padding-top: 0 !important;
                        padding-bottom: 0 !important;
                    }
                    .lg-gallery-text-block {
                        margin-top: 0 !important;
                        margin-bottom: 0 !important;
                        padding-top: 2rem !important;
                        padding-bottom: 2rem !important;
                    }
                    .lg-centered-text-block {
                        margin-top: 20px !important;
                        margin-bottom: 20px !important;
                        justify-content: center !important;
                        text-align: center !important;
                    }
                    .lg-centered-text-block h3 {
                        font-size: 3rem !important;
                        text-align: center !important;
                        margin: -80px auto 0 !important;
                        width: 100% !important;
                    }
                    .lg-centered-image-wrapper {
                        margin: 0 auto !important;
                        justify-content: center !important;
                    }
                    .lg-centered-image-wrapper > div {
                        max-width: 220px !important;
                        margin: 0 auto !important;
                    }
                    .lg-img-8-0,
                    .lg-custom-img-left, .lg-custom-img-right,
                    .lg-custom-img-container {
                        margin: 0 auto !important;
                        display: block !important;
                        width: auto !important;
                        max-width: 100% !important;
                    }
                    .lg-img-8-1 {
                        margin: 0 auto !important;
                        display: block !important;
                        width: auto !important;
                        max-width: 80px !important;
                    }
                    .lg-generic-custom-grid {
                        grid-template-columns: 1fr 1fr !important;
                        justify-items: center !important;
                        align-items: center !important;
                        gap: 2rem !important;
                        width: 100% !important;
                    }
                    .lg-generic-custom-grid > div {
                        margin: 0 auto !important;
                        transform: none !important;
                    }
                    .lg-generic-custom-grid .lg-custom-img-container {
                        margin: 0 auto !important;
                        width: 100% !important;
                        max-width: 280px !important;
                    }
                    .lg-generic-custom-grid img, .lg-generic-custom-grid video {
                        margin: 0 !important;
                    }
                    
                    .lg-scaled-grid-8 {
                        grid-template-columns: 2.5fr 1fr !important;
                        justify-items: center !important;
                        align-items: center !important;
                        gap: 2rem !important;
                        width: 100% !important;
                    }
                    .lg-scaled-grid-8 .lg-img-8-0 .lg-custom-img-container {
                        max-width: 100% !important;
                    }
                    .lg-custom-grid-2,
                    .lg-custom-grid-7 {
                        grid-template-columns: 1fr 1fr !important;
                        justify-items: center !important;
                        align-items: center !important;
                        gap: 2rem !important;
                        width: 100% !important;
                    }
                    .lg-custom-grid-7 .lg-custom-img-container {
                        max-width: 280px !important;
                        width: 100% !important;
                    }
                    .lg-custom-grid-2 .lg-custom-img-container {
                        max-width: 280px !important;
                        width: 100% !important;
                        aspect-ratio: 1 / 1 !important;
                    }
                    .lg-custom-grid-2 > div,
                    .lg-custom-grid-7 > div {
                        margin-top: 0 !important;
                        margin-bottom: 0 !important;
                    }
                    .lg-custom-grid-2 img, .lg-custom-grid-2 video {
                        margin-top: 0 !important;
                        margin-bottom: 0 !important;
                        width: 100% !important;
                        height: 100% !important;
                        object-fit: cover !important;
                    }
                    .lg-custom-grid-7 img, .lg-custom-grid-7 video {
                        margin-top: 0 !important;
                        margin-bottom: 0 !important;
                    }
                    .lg-bottom-section {
                        align-items: center !important;
                        justify-items: center !important;
                    }
                    .lg-bottom-section .lg-custom-img-container {
                        max-width: 240px !important;
                        width: 100% !important;
                    }
                    .lg-lemy-body, .lg-lemy-video {
                        margin-left: auto !important;
                        margin-right: auto !important;
                        margin-top: 0 !important;
                    }
                    .converse-overlay-text {
                        left: calc(50% + 1rem) !important;
                        width: calc(50% - 1rem) !important;
                        transform: none !important;
                        display: flex !important;
                        justify-content: center !important;
                        top: auto !important;
                        bottom: -3rem !important;
                    }
                    .converse-grid-bottom {
                        align-items: center !important;
                    }
                    .converse-img-8 .lg-custom-img-container {
                        max-width: 340px !important;
                    }
                    .lg-generic-custom-grid > div.converse-img-2 {
                        transform: translateY(2rem) !important;
                    }
                    .maxibon-overlay-text {
                        left: calc(50% + 1rem) !important;
                        width: calc(50% - 1rem) !important;
                        transform: none !important;
                        display: flex !important;
                        justify-content: center !important;
                    }
                    .maxibon-img-2 .lg-custom-img-container,
                    .maxibon-img-4 .lg-custom-img-container,
                    .maxibon-img-5 .lg-custom-img-container {
                        max-width: 320px !important;
                    }
                    .maxibon-grid-bottom {
                        align-items: center !important;
                    }
                    .ba-img-1 .lg-custom-img-container,
                    .ba-img-5 .lg-custom-img-container {
                        max-width: 320px !important;
                    }
                    .ba-grid-top, .ba-grid-bottom {
                        align-items: center !important;
                    }
                    .cashapp-img-4 .lg-custom-img-container,
                    .cashapp-img-5 .lg-custom-img-container {
                        max-width: 340px !important;
                    }
                    .cashapp-grid {
                        align-items: center !important;
                    }
                    .itau-img-1 .lg-custom-img-container,
                    .itau-img-2 .lg-custom-img-container,
                    .itau-img-4 .lg-custom-img-container,
                    .itau-img-5 .lg-custom-img-container,
                    .itau-img-6 .lg-custom-img-container,
                    .itau-img-7 .lg-custom-img-container {
                        max-width: 330px !important;
                    }
                    .itau-overlay-text {
                        left: calc(50% + 1rem) !important;
                        width: calc(50% - 1rem) !important;
                        transform: none !important;
                        display: flex !important;
                        justify-content: center !important;
                    }
                    .itau-grid-1, .itau-grid-2 {
                        align-items: center !important;
                    }
                    .lg-gallery-container > div,
                    .lg-gallery-container > div > div {
                        margin-bottom: 0 !important;
                    }
                    .lg-gallery-container > div:last-child,
                    .lg-gallery-container > div:last-child > div {
                        margin-bottom: 0 !important;
                        padding-bottom: 0 !important;
                    }
                }
            `}),t.gallery.map((r,m)=>e.jsxs("div",{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:316:21",className:"w-full",children:[r.type==="full"&&typeof r.src=="string"&&e.jsx("div",{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:320:29",className:r.className,children:e.jsx(w,{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:321:33",children:e.jsx("div",{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:322:37",className:`w-full overflow-hidden ${r.bg??"bg-black"} ${r.aspect||"aspect-video"}`,children:e.jsx(H,{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:323:41",src:r.src,alt:`Gallery row ${m}`})})})}),r.type==="interactive-video"&&typeof r.src=="string"&&e.jsx("div",{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:334:29",className:"w-full",children:e.jsx(le,{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:335:33",src:r.src,thumb:r.thumb,loop:r.loop,aspect:r.aspect||"aspect-[16/9]"})}),r.type==="half"&&Array.isArray(r.src)&&e.jsx("div",{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:346:29",className:`grid grid-cols-1 md:grid-cols-2 gap-6 ${r.className||""}`,children:r.src.map((l,a)=>{const s=c(l);return e.jsx(w,{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:352:41",delay:a*200,children:e.jsx("div",{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:353:45",className:`${r.aspect||"aspect-video"} overflow-hidden bg-black`,children:e.jsx(H,{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:354:49",src:s.src,alt:`Gallery ${m}-${a}`})})},a)})}),r.type==="custom"&&Array.isArray(r.src)&&e.jsxs("div",{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:367:29",className:`grid auto-flow-col relative lg-generic-custom-grid ${r.className||""}`,children:[r.src.map((l,a)=>{const s=c(l);return e.jsx(w,{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:373:41",delay:a*200,className:s.className,children:e.jsx("div",{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:374:45",className:"overflow-hidden bg-transparent flex-shrink-0 lg-custom-img-container",style:{maxWidth:s.width?`${s.width}px`:void 0,aspectRatio:s.width&&s.height?`${s.width} / ${s.height}`:void 0},children:e.jsx(H,{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:383:49",src:s.src,alt:`Gallery custom ${m}-${a}`})})},a)}),r.overlayText&&e.jsx("div",{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:392:37",className:r.overlayClassName||"absolute inset-0 flex items-center justify-center z-10",children:e.jsx("h3",{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:393:41",className:`text-foreground whitespace-pre-line ${r.overlayTextClassName||""}`,style:{fontFamily:"'Covered By Your Grace', cursive",fontSize:"clamp(2.5rem, 6vw, 4rem)",lineHeight:"0.9"},children:r.overlayText})}),e.jsx("style",{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:405:33",children:`
                                    .lg-custom-grid-7 img {
                                        height: 100% !important;
                                        object-fit: cover !important;
                                    }
                                    .lg-custom-grid-7 .lg-custom-img-container {
                                        display: flex;
                                        align-items: stretch;
                                    }
                                `})]}),r.type==="text"&&(r.variant==="centered"?e.jsxs("div",{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:422:33",className:`flex flex-col md:flex-row gap-8 md:gap-20 text-left my-4 md:my-8 items-center w-full lg-centered-text-block lg-text-row ${r.className||""}`,children:[e.jsx(w,{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:423:37",children:e.jsx("div",{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:424:41",className:"shrink-0 w-full md:w-auto flex flex-col justify-center",children:e.jsx("h3",{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:425:45",className:`text-foreground text-center md:text-left whitespace-pre-line ${r.titleClassName||""}`,style:{fontFamily:"'Covered By Your Grace', cursive",fontSize:"clamp(2.5rem, 6vw, 4rem)",lineHeight:"0.9"},children:r.title})})}),typeof r.src=="string"&&e.jsx(w,{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:439:41",delay:100,className:"flex-1 w-full lg:w-1/2 ml-auto flex justify-center items-center lg-centered-image-wrapper",children:e.jsx("div",{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:443:45",className:"w-full max-w-[280px]",children:e.jsx(H,{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:444:49",src:r.src,alt:"Inline image",className:`w-full h-auto object-contain ${r.imageClassName||""}`})})})]}):e.jsxs("div",{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:457:33",className:"flex flex-col md:flex-row gap-8 md:gap-24 py-8 md:py-12 items-start w-full lg-gallery-text-block lg-text-row",children:[e.jsx(w,{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:458:37",children:e.jsx("div",{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:459:41",className:"shrink-0",children:e.jsx("h3",{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:460:45",className:"text-foreground font-inter font-bold text-sm md:text-base uppercase tracking-wider",children:r.title})})}),r.text&&e.jsx(w,{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:467:41",delay:100,className:"max-w-2xl lg-text-wrapper",children:e.jsx("p",{"code-path":"src/features/work-detail/components/ProjectGallery.tsx:468:45",className:"text-foreground/80 text-sm md:text-base leading-relaxed text-left",children:r.text})})]}))]},m))]})}const O=8,me=14;function ue({sectionRef:t,visible:c}){const r=o.useRef(null),m=o.useRef(0),l=o.useRef({x:-999,y:-999}),a=o.useRef({x:-999,y:-999});return o.useEffect(()=>{i.set(r.current,{opacity:0})},[]),o.useEffect(()=>{const s=r.current;s&&(i.killTweensOf(s),c&&(a.current.x=l.current.x,a.current.y=l.current.y,i.set(s,{x:a.current.x,y:a.current.y})),i.to(s,{opacity:c?1:0,duration:.18,ease:c?"power2.out":"power2.in"}))},[c]),o.useEffect(()=>{const s=t.current;if(!s)return;const d=h=>{const x=s.getBoundingClientRect();l.current={x:h.clientX-x.left,y:h.clientY-x.top}},f=()=>{a.current.x+=(l.current.x-a.current.x)*.1,a.current.y+=(l.current.y-a.current.y)*.1,r.current&&i.set(r.current,{x:a.current.x,y:a.current.y}),m.current=requestAnimationFrame(f)};return m.current=requestAnimationFrame(f),s.addEventListener("mousemove",d),()=>{cancelAnimationFrame(m.current),s.removeEventListener("mousemove",d)}},[t]),e.jsx("div",{"code-path":"src/features/work-detail/components/MoreWorks.tsx:63:9",ref:r,className:"absolute top-0 left-0 pointer-events-none",style:{transform:"translate(-50%,-50%)",opacity:0,zIndex:200,mixBlendMode:"difference"},children:e.jsx("span",{"code-path":"src/features/work-detail/components/MoreWorks.tsx:65:13",className:"select-none font-inter-tight block whitespace-nowrap",style:{fontWeight:800,fontSize:"3.4rem",letterSpacing:"-0.03em",lineHeight:1,color:"#ffffff",textTransform:"none"},children:"View Case"})})}function pe({lang:t}){const c=o.useRef(null),r=o.useRef(0),m=o.useRef(!1),l=o.useRef(null);o.useEffect(()=>{const d=c.current;d&&(r.current=d.getTotalLength(),i.set(d,{strokeDasharray:r.current,strokeDashoffset:r.current}))},[]);const a=()=>{if(m.current)return;m.current=!0;const d=c.current;!d||!r.current||(l.current?.kill(),i.set(d,{strokeDashoffset:r.current,opacity:1}),l.current=i.to(d,{strokeDashoffset:0,duration:.5,ease:"power1.inOut"}))},s=()=>{if(!m.current)return;m.current=!1;const d=c.current;if(!d)return;l.current?.kill();const f=parseFloat(String(i.getProperty(d,"strokeDashoffset")));i.fromTo(d,{strokeDashoffset:f},{strokeDashoffset:r.current,duration:.38,ease:"power2.inOut",onComplete:()=>{i.set(d,{opacity:0})}})};return e.jsx("div",{"code-path":"src/features/work-detail/components/MoreWorks.tsx:128:9",className:"w-full flex justify-center",style:{paddingTop:"8rem",paddingBottom:"1.5rem"},children:e.jsxs(re,{"code-path":"src/features/work-detail/components/MoreWorks.tsx:132:13",to:`/${t}/work`,className:"relative inline-block font-garamond italic font-normal no-underline",style:{fontSize:"clamp(3.2rem, 6.5vw, 6.8rem)",letterSpacing:"-0.02em",lineHeight:1,textTransform:"none",color:"var(--foreground)"},onMouseEnter:a,onMouseLeave:s,children:["—View all works",e.jsx("svg",{"code-path":"src/features/work-detail/components/MoreWorks.tsx:141:17","aria-hidden":"true",style:{position:"absolute",left:"-1%",bottom:"18%",width:"102%",height:"22px",overflow:"visible",pointerEvents:"none"},viewBox:"0 0 100 22",preserveAspectRatio:"none",children:e.jsx("path",{"code-path":"src/features/work-detail/components/MoreWorks.tsx:155:21",ref:c,strokeDasharray:"9999 9999",strokeDashoffset:"9999",style:{opacity:0},d:`M 0,14
                           C 5,5 18,22 34,10 C 48,0 62,18 76,6 C 86,-2 94,14 100,4
                           C 92,18 74,33 54,26 C 36,20 22,30 18,28
                           C 6,18 22,25 44,20 C 64,15 82,23 100,17`,stroke:"#ef4444",strokeWidth:"2.4",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})})]})})}function fe({currentSlug:t}){const{lang:c}=q(),r=te(),m=o.useRef(null),l=o.useRef([]),a=o.useRef([]),s=o.useRef([]),d=o.useRef(!1),f=o.useRef(0),h=o.useRef(0),x=o.useRef(!1),v=o.useRef(-1),C=["zonaprop","maro"],j=I.findIndex(n=>n.slug===t),N=I.filter(n=>n.slug!==t&&!C.includes(n.slug)),P=(j>=0?[...N.slice(j),...N.slice(0,j)]:N).slice(0,4),g=P.length,[Y,W]=o.useState(!1),[L,X]=o.useState(0),k=o.useCallback((n,p)=>n===0?0:n===1?p+O:(p+O)*(n+1),[]),y=o.useCallback(n=>((n-f.current)%g+g)%g,[g]);o.useEffect(()=>{const n=()=>{const p=Math.min(window.innerWidth*.7,900);X(p),h.current=p};return n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),o.useEffect(()=>{L&&l.current.forEach((n,p)=>{n&&i.set(n,{x:k(p,L),zIndex:g-p})})},[L,g,k]);const E=o.useCallback(n=>{if(d.current||y(n)!==1)return;const u=l.current[n],b=f.current%g,M=a.current[b];if(!u)return;x.current=!0;const S=h.current;i.killTweensOf(u),i.to(u,{x:k(1,S)-me,zIndex:g+2,duration:.55,ease:"power1.out"}),M&&i.to(M,{opacity:1,duration:.55,ease:"power1.out"})},[y,g,k]),D=o.useCallback(n=>{if(d.current||y(n)!==1)return;const u=l.current[n],b=f.current%g,M=a.current[b];if(!u)return;x.current=!1;const S=h.current;i.killTweensOf(u),i.to(u,{x:k(1,S),zIndex:g-1,duration:.55,ease:"power1.inOut"}),M&&i.to(M,{opacity:0,duration:.3,ease:"power2.out"})},[y,g,k]),z=o.useCallback(n=>{if(d.current||y(n)!==1)return;d.current=!0,x.current=!1;const u=h.current,b=l.current[n],M=f.current%g,S=(f.current+2)%g,R=l.current[S],T=a.current[M];if(!b){d.current=!1;return}T&&i.to(T,{opacity:0,duration:.12}),i.killTweensOf(b),i.set(b,{zIndex:g+20});const V=i.timeline({onComplete:()=>{f.current=(f.current+1)%g;for(let $=0;$<g;$++){const Q=(f.current+$)%g,A=l.current[Q];A&&i.set(A,{x:k($,u),zIndex:g-$})}d.current=!1,v.current===n&&W(!0)}});V.to(b,{x:0,duration:.5,ease:"power3.out"},0),R&&(i.killTweensOf(R),i.set(R,{x:k(2,u),zIndex:g-2}),V.to(R,{x:k(1,u),duration:.5,ease:"power3.out"},0))},[y,g,k]),_=o.useCallback(n=>{v.current=n;const p=y(n);p===0&&W(!0),p===1&&E(n);const u=s.current[n];u&&(i.set(u,{opacity:1}),u.play().catch(()=>{}))},[y,E]),K=o.useCallback(n=>{v.current=-1;const p=y(n);p===0&&W(!1),p===1&&D(n);const u=s.current[n];u&&(i.set(u,{opacity:0}),u.pause(),u.currentTime=0)},[y,D]),U=o.useCallback(n=>{if(d.current)return;const p=y(n);p===0?r(`/${c||"es"}/work/${P[n].slug}`):p===1&&z(n)},[y,z,r,c,P]);if(!P.length)return null;const J=L?L*10/16:0;return e.jsxs("section",{"code-path":"src/features/work-detail/components/MoreWorks.tsx:369:9",ref:m,className:"relative pt-12 md:pt-8 lg:pt-32 pb-0 w-full overflow-hidden",children:[e.jsx(ue,{"code-path":"src/features/work-detail/components/MoreWorks.tsx:370:13",sectionRef:m,visible:Y}),e.jsx(w,{"code-path":"src/features/work-detail/components/MoreWorks.tsx:373:13",children:e.jsx("div",{"code-path":"src/features/work-detail/components/MoreWorks.tsx:374:17",className:"mb-4 md:mb-5 text-left",children:e.jsxs("h2",{"code-path":"src/features/work-detail/components/MoreWorks.tsx:375:21",className:"text-foreground font-inter font-extrabold text-[8vw] md:text-[6.5vw] tracking-normal leading-[1.0] uppercase w-full",children:["MORE OF OUR"," ",e.jsx("span",{"code-path":"src/features/work-detail/components/MoreWorks.tsx:377:25",className:"font-garamond italic lowercase font-normal text-[1.35em]",children:"works."})]})})}),e.jsx(w,{"code-path":"src/features/work-detail/components/MoreWorks.tsx:385:13",delay:150,children:e.jsx("div",{"code-path":"src/features/work-detail/components/MoreWorks.tsx:386:17",style:{position:"relative",height:J||"44vw"},children:e.jsx("div",{"code-path":"src/features/work-detail/components/MoreWorks.tsx:388:21",style:{position:"absolute",top:0,left:0,width:"100vw",height:"100%",overflow:"hidden",marginLeft:0},children:P.map((n,p)=>e.jsxs("div",{"code-path":"src/features/work-detail/components/MoreWorks.tsx:396:33",ref:u=>{l.current[p]=u},"data-hide-cursor":!0,className:"absolute top-0 left-0 overflow-hidden bg-neutral-900",style:{width:L||"70vw",height:"100%",cursor:"pointer",willChange:"transform"},onMouseEnter:()=>_(p),onMouseLeave:()=>K(p),onClick:()=>U(p),children:[n.mwImage1x&&e.jsxs("picture",{"code-path":"src/features/work-detail/components/MoreWorks.tsx:408:41",style:{display:"contents"},children:[e.jsx("source",{"code-path":"src/features/work-detail/components/MoreWorks.tsx:409:45",type:"image/avif",srcSet:`${n.mwImage1x}.avif 1x${n.mwImage2x?`, ${n.mwImage2x}.avif 2x`:""}`}),e.jsx("source",{"code-path":"src/features/work-detail/components/MoreWorks.tsx:413:45",type:"image/webp",srcSet:`${n.mwImage1x}.webp 1x${n.mwImage2x?`, ${n.mwImage2x}.webp 2x`:""}`}),e.jsx("img",{"code-path":"src/features/work-detail/components/MoreWorks.tsx:417:45",src:`${n.mwImage1x}.avif`,alt:n.title,draggable:!1,className:"absolute inset-0 w-full h-full object-cover"})]}),n.loopMwWp&&e.jsxs("video",{"code-path":"src/features/work-detail/components/MoreWorks.tsx:428:41",ref:u=>{s.current[p]=u},muted:!0,loop:!0,playsInline:!0,draggable:!1,preload:"none",className:"absolute inset-0 w-full h-full object-cover",style:{opacity:0,transition:"opacity 0.5s ease"},children:[e.jsx("source",{"code-path":"src/features/work-detail/components/MoreWorks.tsx:435:45",src:`${n.loopMwWp}.webm`,type:"video/webm"}),e.jsx("source",{"code-path":"src/features/work-detail/components/MoreWorks.tsx:436:45",src:`${n.loopMwWp}.mp4`,type:"video/mp4"})]}),e.jsx("div",{"code-path":"src/features/work-detail/components/MoreWorks.tsx:441:37",className:"absolute inset-0 pointer-events-none",style:{background:"linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)"}}),e.jsx("div",{"code-path":"src/features/work-detail/components/MoreWorks.tsx:445:37",className:"absolute inset-0 pointer-events-none",ref:u=>{if(!u)return;const b=u.parentElement;b&&(b.addEventListener("mouseenter",()=>i.to(u,{backgroundColor:"rgba(0,0,0,0.35)",duration:.35})),b.addEventListener("mouseleave",()=>i.to(u,{backgroundColor:"rgba(0,0,0,0)",duration:.35})))},style:{background:"rgba(0,0,0,0)"}}),e.jsx("div",{"code-path":"src/features/work-detail/components/MoreWorks.tsx:457:37",ref:u=>{a.current[p]=u},className:"absolute inset-y-0 right-0 pointer-events-none",style:{width:"36px",opacity:0,background:"linear-gradient(to left, rgba(0,0,0,0.18) 0%, transparent 100%)",zIndex:5}}),e.jsxs("div",{"code-path":"src/features/work-detail/components/MoreWorks.tsx:468:37",className:"absolute bottom-0 left-0 right-0 p-6 md:p-8",children:[e.jsx("h3",{"code-path":"src/features/work-detail/components/MoreWorks.tsx:469:41",className:"text-brada-light font-inter font-bold text-xl md:text-2xl uppercase tracking-tight leading-tight",children:n.title}),e.jsx("p",{"code-path":"src/features/work-detail/components/MoreWorks.tsx:472:41",className:"text-brada-light/50 text-xs uppercase tracking-widest mt-1",children:n.category})]})]},n.id))})})}),e.jsx(pe,{"code-path":"src/features/work-detail/components/MoreWorks.tsx:484:13",lang:c||"es"})]})}i.registerPlugin(B);function xe({project:t}){const{setHeaderState:c}=Z(),r=t.animationStyle==="cinematic",m=o.useRef(null),l=o.useRef(null);return oe(m),F(()=>(c("visible"),()=>{c("default"),B.refresh()}),[]),F(()=>{if(!r||!m.current)return;const a=i.utils.toArray(".cinematic-depth");if(a.length===0)return;const s=i.matchMedia();return s.add("(min-width: 1024px)",()=>{i.from(a,{y:70,opacity:0,scale:.96,duration:1,stagger:.18,ease:"expo.out"})}),s.add("(min-width: 768px) and (max-width: 1023px)",()=>{i.from(a,{y:50,opacity:0,scale:.97,duration:.8,stagger:.12,ease:"expo.out"})}),s.add("(max-width: 767px)",()=>{i.from(a,{y:35,opacity:0,scale:.98,duration:.6,stagger:.08,ease:"expo.out"})}),()=>s.revert()},{scope:m,dependencies:[r,t?.gallery?.length]}),e.jsxs(e.Fragment,{children:[e.jsxs(ee,{"code-path":"src/features/work-detail/layouts/DefaultLayout.tsx:91:13",children:[e.jsxs("title",{"code-path":"src/features/work-detail/layouts/DefaultLayout.tsx:92:17",children:[t.title," | Our Work | Brada Agency"]}),e.jsx("meta",{"code-path":"src/features/work-detail/layouts/DefaultLayout.tsx:93:17",name:"description",content:t.description})]}),e.jsx("div",{"code-path":"src/features/work-detail/layouts/DefaultLayout.tsx:96:13",ref:m,className:"min-h-screen bg-transparent pt-[180px] pb-32",children:e.jsxs("main",{"code-path":"src/features/work-detail/layouts/DefaultLayout.tsx:97:17",className:"w-full",id:"work-detail-main",children:[e.jsxs("div",{"code-path":"src/features/work-detail/layouts/DefaultLayout.tsx:100:21",className:"w-full flex flex-col relative z-20 bg-background",children:[e.jsx(ae,{"code-path":"src/features/work-detail/layouts/DefaultLayout.tsx:101:25",project:t}),t.heroWideImage?e.jsx(w,{"code-path":"src/features/work-detail/layouts/DefaultLayout.tsx:104:29",delay:200,children:e.jsx("div",{"code-path":"src/features/work-detail/layouts/DefaultLayout.tsx:105:33",ref:l,className:"relative left-1/2 -translate-x-1/2 w-screen max-w-none outline-none mt-4 md:mt-6 mb-24 md:mb-32 lg-hero-wide-container",children:e.jsxs("picture",{"code-path":"src/features/work-detail/layouts/DefaultLayout.tsx:106:37",style:{display:"contents"},children:[e.jsx("source",{"code-path":"src/features/work-detail/layouts/DefaultLayout.tsx:107:41",srcSet:`${t.heroWideImage}.avif`,type:"image/avif"}),e.jsx("source",{"code-path":"src/features/work-detail/layouts/DefaultLayout.tsx:108:41",srcSet:`${t.heroWideImage}.webp`,type:"image/webp"}),e.jsx("img",{"code-path":"src/features/work-detail/layouts/DefaultLayout.tsx:109:41",src:`${t.heroWideImage}.avif`,alt:"Hero Wide",fetchPriority:"high",className:"w-full h-auto object-cover",loading:"eager",decoding:"async"})]})})}):e.jsx("div",{"code-path":"src/features/work-detail/layouts/DefaultLayout.tsx:121:29",ref:l,className:"h-1 pb-12 w-full"})]}),e.jsx("div",{"code-path":"src/features/work-detail/layouts/DefaultLayout.tsx:126:21",className:"max-w-[2000px] mx-auto",children:e.jsxs("div",{"code-path":"src/features/work-detail/layouts/DefaultLayout.tsx:127:25",className:"grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-6 md:gap-8 lg:gap-10 grid-1024-fix",children:[e.jsxs("div",{"code-path":"src/features/work-detail/layouts/DefaultLayout.tsx:130:29",className:"flex flex-col gap-6 md:gap-8 order-2 lg:order-1",children:[(t.mainVideo||t.mainImage||t.autoPlayHero||t.galleryThumb)&&e.jsx("div",{"code-path":"src/features/work-detail/layouts/DefaultLayout.tsx:133:37",className:r?"cinematic-depth":"",children:e.jsx(ne,{"code-path":"src/features/work-detail/layouts/DefaultLayout.tsx:134:41",project:t})}),t.gallery&&t.gallery.length>0&&e.jsx(de,{"code-path":"src/features/work-detail/layouts/DefaultLayout.tsx:139:37",project:t})]}),e.jsx("aside",{"code-path":"src/features/work-detail/layouts/DefaultLayout.tsx:145:29",className:"lg-sidebar-container order-1 lg:order-2",children:e.jsx("div",{"code-path":"src/features/work-detail/layouts/DefaultLayout.tsx:146:33",className:`lg:sticky lg:top-0 lg:h-screen lg:flex lg:items-center ${r?"cinematic-depth":""}`,children:e.jsx(ie,{"code-path":"src/features/work-detail/layouts/DefaultLayout.tsx:147:37",project:t})})}),e.jsx("style",{"code-path":"src/features/work-detail/layouts/DefaultLayout.tsx:151:29",children:`
                                @media (min-width: 1024px) and (max-width: 1279px) {
                                    .grid-1024-fix {
                                        grid-template-columns: 6.8fr 3.2fr !important;
                                    }
                                    .lg-sidebar-container > div {
                                        align-items: flex-start !important;
                                        height: auto !important;
                                        max-height: 100vh !important;
                                        overflow-y: auto !important;
                                        padding-top: 40px !important;
                                        padding-bottom: 80px !important;
                                    }
                                }
                                @media (min-width: 768px) and (max-width: 1023px) {
                                    .lg-hero-wide-container {
                                        margin-bottom: 1.5rem !important;
                                    }
                                }
                            `})]})}),e.jsx(fe,{"code-path":"src/features/work-detail/layouts/DefaultLayout.tsx:175:21",currentSlug:t.slug})]})})]})}function ge({project:t}){switch(t.layout){default:return e.jsx(xe,{"code-path":"src/features/work-detail/WorkDetailController.tsx:12:20",project:t})}}const Ne=()=>{const{id:t}=q(),c=t||"lemon-cash",r=I.find(m=>m.slug===c)||I[0];return e.jsx(ge,{"code-path":"src/pages/WorkDetailPage.tsx:11:12",project:r})};export{Ne as default};
