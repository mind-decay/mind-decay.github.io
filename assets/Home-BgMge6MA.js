import{x as w,r,v as i,s as a,w as m,y as E,j as e,z as C,L,u as v,S}from"./index-DXgOL8FD.js";import{T as o,m as I}from"./routes-DY6Er6wK.js";const M=()=>{const t=w(),s=r.useRef("");r.useEffect(()=>{t.hash&&(s.current=t.hash.slice(1)),s.current&&document.getElementById(s.current)&&setTimeout(()=>{var l;(l=document.getElementById(s.current))==null||l.scrollIntoView({behavior:"smooth",block:"start"}),s.current=""},100)},[t])},B=i.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 9rem;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: ${a.tablet}px) {
    row-gap: 4rem;
  }
`,Q=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5.4rem;
  width: 100%;

  @media screen and (max-width: ${a.tablet}px) {
    row-gap: 2rem;
  }
`,b=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 4rem;
  width: 100%;
  text-align: center;

  @media screen and (max-width: ${a.mobile}px) {
    row-gap: 2rem;
  }
`,R=i.div`
  display: flex;
  align-items: center;
  column-gap: 1.8rem;

  @media screen and (max-width: ${a.mobile}px) {
    flex-direction: column;
    row-gap: 2rem;
  }
`,A=m`
  width: 250px;
  height: 250px;
`,U=i.div`
  position: relative;
  display: flex;
  ${A}
`,F=E`
  100% {
        transform: translateX(100%);
      }
`,D=i.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  ${A}
  display: flex;
  overflow: hidden;
  background-color: ${({theme:t})=>t.colors.greyBG};
  border-radius: 50%;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    ${A}
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      hsla(0, 0%, 100%, 0) 0,
      hsla(0, 0%, 100%, 0.2) 20%,
      hsla(0, 0%, 100%, 0.5) 60%,
      hsla(0, 0%, 100%, 0)
    );
    animation: ${F} 3s infinite;
    content: '';
  }
`,j="/assets/Avatar-a5XW2jSW.png",Z="/assets/Avatar-Bvo0b_Cv.webp",H="/assets/Avatar2x-DRYoIK7-.png",T="/assets/Avatar2x-BVRbqmLw.webp",k=()=>{const[t,s]=r.useState(!1);return e.jsxs(U,{children:[!t&&e.jsx(D,{"aria-label":"Avatar is loading, please wait..."}),e.jsxs("picture",{children:[e.jsx("source",{srcSet:`${Z} 250w, ${T} 375w`,type:"image/webp",sizes:`(max-width: ${a.tablet}px) 250px, 375px`}),e.jsx("img",{srcSet:`${j} 250w, ${H} 375w`,sizes:`(max-width: ${a.tablet}px) 250px, 375px`,src:j,alt:"My simple avatar",width:250,height:250,onLoad:()=>s(!0)})]})]})},y=m`
  padding: 1.5rem 3rem;
  ${C.button}
  border-radius: 5rem;
  transition: 0.2s ease-in-out;
  border: solid 0.2rem ${({theme:t})=>t.colors.primary};
`,g=m`
  ${y}
  color: ${({theme:t})=>t.colors.secondary};
  background-color: ${({theme:t})=>t.colors.primary};

  &:hover {
    color: ${({theme:t})=>t.colors.primary};
    background-color: transparent;
  }
`,f=m`
  ${y}
  color: ${({theme:t})=>t.colors.primary};
  background-color: transparent;

  &:hover {
    color: ${({theme:t})=>t.colors.secondary};
    background-color: ${({theme:t})=>t.colors.primary};
  }
`,X=i.button`
  ${({$variant:t})=>t==="primary"?g:f}
`,V=i.a`
  ${({$variant:t})=>t==="primary"?g:f}
`,q=i(L)`
  ${({$variant:t})=>t==="primary"?g:f}
`,u=({variant:t,onClick:s,href:l,target:c,to:h,children:x})=>h?e.jsx(q,{to:h,$variant:t,children:x}):l?e.jsx(V,{href:l,target:c,$variant:t,children:x}):e.jsx(X,{onClick:s,$variant:t,children:x}),J=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 4.8rem;

  @media screen and (max-width: ${a.tablet}px) {
    row-gap: 2rem;
  }
`,K=i.div`
  h2 {
    letter-spacing: 0.24rem;
    text-transform: uppercase;
    color: ${({theme:t})=>t.colors.text};
  }
`,G=i.ul`
  display: grid;
  grid-template-columns: repeat(${({$itemsCount:t})=>t||"auto-fit"}, max-content);
  column-gap: 6rem;
  list-style: none;

  @media screen and (max-width: ${a.mobile}px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 3rem;
    row-gap: 1rem;
  }
`,O=i.li`
  transform: scale(1);
  transition: 0.3s ease-in-out;

  svg {
    path {
      fill: ${({$gradientId:t,$currentTheme:s})=>s==="dark"?`url(#${t}_dark)`:`url(#${t}_light)`};
    }
  }

  &:hover {
    transform: scale(1.1);
  }
`,z=({experiencesIcons:t})=>{const{theme:s}=v();return e.jsx(G,{$itemsCount:t.length,children:t.map(({Icon:l,gradientId:c})=>e.jsx(O,{$gradientId:c,$currentTheme:s,children:e.jsx(l,{})},c))})},N=t=>r.createElement("svg",{width:42,height:42,viewBox:"0 0 42 42",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},r.createElement("path",{d:"M37.5 0H4.5C2.01562 0 0 2.01562 0 4.5V37.5C0 39.9844 2.01562 42 4.5 42H37.5C39.9844 42 42 39.9844 42 37.5V4.5C42 2.01562 39.9844 0 37.5 0ZM22.8562 32.7562C22.8562 36.8438 20.4562 38.7094 16.9594 38.7094C13.8 38.7094 11.9719 37.0781 11.0344 35.1L14.25 33.1594C14.8687 34.2562 15.4312 35.1844 16.7906 35.1844C18.0844 35.1844 18.9094 34.6781 18.9094 32.7V19.2844H22.8562V32.7562ZM32.1937 38.7094C28.5281 38.7094 26.1562 36.9656 25.0031 34.6781L28.2188 32.8219C29.0625 34.2 30.1687 35.2219 32.1094 35.2219C33.7406 35.2219 34.7906 34.4062 34.7906 33.2719C34.7906 31.9219 33.7219 31.4437 31.9125 30.6469L30.9281 30.225C28.0781 29.0156 26.1937 27.4875 26.1937 24.2719C26.1937 21.3094 28.4531 19.0594 31.9687 19.0594C34.4812 19.0594 36.2812 19.9312 37.575 22.2187L34.5 24.1875C33.825 22.9781 33.0938 22.5 31.9594 22.5C30.8062 22.5 30.075 23.2312 30.075 24.1875C30.075 25.3687 30.8062 25.8469 32.5031 26.5875L33.4875 27.0094C36.8438 28.4437 38.7281 29.9156 38.7281 33.2156C38.7281 36.7594 35.9344 38.7094 32.1937 38.7094Z",fill:"url(#paint0_linear_14_58)"}),r.createElement("defs",null,r.createElement("linearGradient",{id:"paint0_linear_14_58_dark",x1:21,y1:0,x2:21,y2:42,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"hsl(0, 0%, 99%)"}),r.createElement("stop",{offset:1,stopColor:"hsl(0, 0%, 99%)",stopOpacity:.18})),r.createElement("linearGradient",{id:"paint0_linear_14_58_light",x1:21,y1:0,x2:21,y2:42,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"hsl(40, 7%, 8%)"}),r.createElement("stop",{offset:1,stopColor:"hsl(40, 7%, 8%)",stopOpacity:.18})))),P=t=>r.createElement("svg",{width:43,height:42,viewBox:"0 0 43 42",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},r.createElement("path",{d:"M31.6149 39.3776C31.4587 39.4603 31.4718 39.4865 31.6215 39.4104C31.6676 39.3916 31.7098 39.3644 31.7461 39.3303C31.7461 39.3028 31.7461 39.3028 31.6149 39.3776ZM31.9299 39.2069C31.8551 39.2686 31.8551 39.2686 31.9443 39.2279C31.9773 39.2125 32.0075 39.1917 32.0336 39.1663C32.0336 39.1308 32.0126 39.1387 31.9299 39.2069ZM32.1346 39.0836C32.0598 39.1453 32.0598 39.1453 32.1491 39.1046C32.1822 39.0888 32.2124 39.0675 32.2383 39.0416C32.2383 39.0088 32.2173 39.0153 32.1346 39.0836ZM32.342 38.9615C32.2672 39.0232 32.2672 39.0232 32.3538 38.9812C32.4024 38.9549 32.4431 38.9274 32.4431 38.9195C32.4431 38.8867 32.4221 38.8933 32.342 38.9615ZM32.6216 38.7764C32.4785 38.8723 32.4286 38.9339 32.5599 38.8657C32.6478 38.8119 32.7974 38.6937 32.7712 38.6937C32.7147 38.7147 32.6675 38.7502 32.6202 38.7764H32.6216ZM20.0705 0.00964711C19.9747 0.0162097 19.6873 0.0424603 19.4353 0.0634607C13.4662 0.604222 7.8817 3.81729 4.342 8.76682C2.38587 11.4815 1.11435 14.6284 0.635619 17.9401C0.466312 19.0951 0.445312 19.4364 0.445312 21.0022C0.445312 22.5667 0.466312 22.9027 0.635619 24.0578C1.77877 31.9474 7.39084 38.5704 14.9979 41.0248C16.3668 41.4619 17.8013 41.7637 19.4353 41.9488C20.0705 42.0171 22.8175 42.0171 23.4527 41.9488C26.2771 41.6338 28.6619 40.9369 31.0217 39.7333C31.3839 39.5495 31.4522 39.5009 31.4036 39.4603C30.2524 37.9385 29.111 36.4094 27.9794 34.873L24.6234 30.3408L20.4196 24.1129C19.0213 22.0276 17.6086 19.952 16.1817 17.8863C16.1673 17.8863 16.1489 20.6544 16.141 24.0302C16.1266 29.9431 16.1266 30.1833 16.0518 30.3198C15.98 30.4847 15.8515 30.6184 15.6895 30.6965C15.5596 30.7582 15.4428 30.7713 14.822 30.7713H14.1119L13.9269 30.6558C13.811 30.5815 13.7168 30.4778 13.6539 30.3553L13.5647 30.1702L13.5712 21.9393L13.5857 13.7085L13.7156 13.5444C13.7986 13.4436 13.9007 13.3601 14.0161 13.299C14.1881 13.2163 14.2563 13.2032 14.9664 13.2032C15.7998 13.2032 15.9376 13.236 16.1568 13.4762C17.8597 16.0092 19.548 18.552 21.2215 21.1046C23.9501 25.2417 27.6749 30.8868 29.5058 33.6563L32.8355 38.6951L32.9995 38.5861C34.5998 37.5227 36.0499 36.2491 37.311 34.7995C39.9563 31.7716 41.6728 28.0453 42.255 24.0669C42.4243 22.9119 42.4453 22.5694 42.4453 21.0048C42.4453 19.439 42.4243 19.1043 42.255 17.9493C41.1119 10.0597 35.4998 3.43665 27.8928 0.980917C26.4711 0.530617 25.0078 0.224137 23.5249 0.0660858C23.1272 0.0253974 20.4131 -0.0231661 20.0718 0.0122722L20.0705 0.00964711ZM28.6632 12.711C28.7608 12.7589 28.8479 12.8259 28.9194 12.9079C28.9908 12.99 29.0451 13.0854 29.0792 13.1887C29.1147 13.299 29.1212 15.5815 29.1147 20.7226L29.1002 28.1043L27.8022 26.1092L26.4963 24.1129V18.7538C26.4963 15.2796 26.5107 13.3318 26.5291 13.236C26.5934 13.0163 26.7407 12.8303 26.9399 12.7175C27.1027 12.6348 27.1657 12.6283 27.8153 12.6283C28.423 12.6283 28.5267 12.6348 28.6632 12.711Z",fill:"url(#paint0_linear_14_59)"}),r.createElement("defs",null,r.createElement("linearGradient",{id:"paint0_linear_14_59_dark",x1:21.4453,y1:0,x2:21.4453,y2:42,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"hsl(0, 0%, 99%)"}),r.createElement("stop",{offset:1,stopColor:"hsl(0, 0%, 99%)",stopOpacity:.18})),r.createElement("linearGradient",{id:"paint0_linear_14_59_light",x1:21.4453,y1:0,x2:21.4453,y2:42,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"hsl(40, 7%, 8%)"}),r.createElement("stop",{offset:1,stopColor:"hsl(40, 7%, 8%)",stopOpacity:.18})))),Y=t=>r.createElement("svg",{width:38,height:42,viewBox:"0 0 38 42",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},r.createElement("path",{d:"M0.890625 0L4.26113 37.8L19.3864 42L34.551 37.7948L37.9268 0H0.89325H0.890625ZM30.5899 12.3638H12.8501L13.2727 17.1124H30.1699L28.8967 31.3451L19.3864 33.9806L9.88912 31.3451L9.24075 24.0634H13.8949L14.2256 27.7646L19.389 29.1559L19.3995 29.1532L24.5655 27.7594L25.101 21.7481H9.03337L7.78387 7.728H31.0072L30.5899 12.3638Z",fill:"url(#paint0_linear_14_60)"}),r.createElement("defs",null,r.createElement("linearGradient",{id:"paint0_linear_14_60_dark",x1:19.4087,y1:0,x2:19.4087,y2:42,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"hsl(0, 0%, 99%)"}),r.createElement("stop",{offset:1,stopColor:"hsl(0, 0%, 99%)",stopOpacity:.18})),r.createElement("linearGradient",{id:"paint0_linear_14_60_light",x1:19.4087,y1:0,x2:19.4087,y2:42,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"hsl(40, 7%, 8%)"}),r.createElement("stop",{offset:1,stopColor:"hsl(40, 7%, 8%)",stopOpacity:.18})))),W=t=>r.createElement("svg",{width:38,height:42,viewBox:"0 0 38 42",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},r.createElement("path",{d:"M0.372192 0L3.73812 37.7874L18.8512 42L34.0042 37.7727L37.3722 0H0.372192ZM30.3777 8.6583L29.2557 21.2457L29.2599 21.315L29.2557 21.4704L28.4573 30.2694L28.3712 31.0527L18.8722 33.6777L18.8638 33.6861L9.38372 31.0443L8.74079 23.7678H13.3884L13.7182 27.468L18.8722 28.8645L24.0429 27.4491L24.5892 21.4242H13.7813L13.6888 20.4057L13.4766 18.0201L13.3674 16.7391H25.0031L25.4276 12.0519H7.69865L7.60621 11.0334L7.3961 8.6457L7.28474 7.3647H30.4891L30.3777 8.6583Z",fill:"url(#paint0_linear_14_61)"}),r.createElement("defs",null,r.createElement("linearGradient",{id:"paint0_linear_14_61_dark",x1:18.8722,y1:0,x2:18.8722,y2:42,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"#FDFDFD"}),r.createElement("stop",{offset:1,stopColor:"white",stopOpacity:.18})),r.createElement("linearGradient",{id:"paint0_linear_14_61_light",x1:18.8722,y1:0,x2:18.8722,y2:42,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"hsl(40, 7%, 8%)"}),r.createElement("stop",{offset:1,stopColor:"hsl(40, 7%, 8%)",stopOpacity:.18})),r.createElement("linearGradient",{id:"paint0_linear_14_61_theme",x1:18.8722,y1:0,x2:18.8722,y2:42,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"hsl(227, 78%, 52%)"}),r.createElement("stop",{offset:1,stopColor:"hsl(227, 78%, 52%)",stopOpacity:.18})))),_=t=>r.createElement("svg",{width:48,height:42,viewBox:"0 0 48 42",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},r.createElement("path",{d:"M24.3175 16.8729C26.5691 16.8729 28.4054 18.7072 28.4054 21C28.4054 23.1836 26.5691 25.0397 24.3175 25.0397C22.0659 25.0397 20.2296 23.1836 20.2296 21C20.2296 18.7072 22.0659 16.8729 24.3175 16.8729ZM14.1961 38.469C15.5733 39.2988 18.5901 38.0323 22.0659 34.7568C20.9291 33.4685 19.8142 32.071 18.7649 30.608C17.0033 30.4396 15.252 30.1771 13.5184 29.8218C12.4036 34.4948 12.8189 37.7047 14.1961 38.469ZM15.7482 25.935L15.1142 24.8213C14.8738 25.4546 14.6333 26.0878 14.4803 26.6993C15.0705 26.8303 15.7263 26.9395 16.404 27.0486L15.7482 25.935ZM30.0449 24.2754L31.8156 21L30.0449 17.7246C29.3891 16.5672 28.6896 15.5409 28.0556 14.5146C26.8752 14.4491 25.6291 14.4491 24.3175 14.4491C23.0059 14.4491 21.7598 14.4491 20.5794 14.5146C19.9454 15.5409 19.2459 16.5672 18.5901 17.7246L16.8194 21L18.5901 24.2754C19.2459 25.4328 19.9454 26.4591 20.5794 27.4854C21.7598 27.5509 23.0059 27.5509 24.3175 27.5509C25.6291 27.5509 26.8752 27.5509 28.0556 27.4854C28.6896 26.4591 29.3891 25.4328 30.0449 24.2754ZM24.3175 9.60147C23.9022 10.0819 23.4649 10.5841 23.0277 11.1737H25.6073C25.1701 10.5841 24.7329 10.0819 24.3175 9.60147ZM24.3175 32.3985C24.7329 31.9181 25.1701 31.4159 25.6073 30.8263H23.0277C23.4649 31.4159 23.9022 31.9181 24.3175 32.3985ZM34.417 3.53099C33.0617 2.70122 30.0449 3.96772 26.5691 7.24316C27.7059 8.5315 28.8208 9.92902 29.8701 11.392C31.6626 11.5667 33.4333 11.8288 35.1166 12.1782C36.2315 7.50519 35.8161 4.29526 34.417 3.53099ZM32.8868 16.065L33.5208 17.1787C33.7612 16.5454 34.0017 15.9122 34.1547 15.3007C33.5645 15.1697 32.9087 15.0605 32.231 14.9514L32.8868 16.065ZM36.0566 0.670445C39.2701 2.50469 39.6198 7.3305 38.2645 12.9643C43.817 14.602 47.8175 17.3097 47.8175 21C47.8175 24.6903 43.817 27.398 38.2645 29.0357C39.6198 34.6695 39.2701 39.4953 36.0566 41.3296C32.8649 43.1638 28.5147 41.0675 24.3175 37.0715C20.1203 41.0675 15.7701 43.1638 12.5566 41.3296C9.36495 39.4953 9.01518 34.6695 10.3705 29.0357C4.81797 27.398 0.817505 24.6903 0.817505 21C0.817505 17.3097 4.81797 14.602 10.3705 12.9643C9.01518 7.3305 9.36495 2.50469 12.5566 0.670445C15.7701 -1.1638 20.1203 0.93248 24.3175 4.92851C28.5147 0.93248 32.8649 -1.1638 36.0566 0.670445ZM35.4226 21C36.1659 22.6377 36.8217 24.2754 37.3682 25.935C41.9589 24.5593 44.5384 22.594 44.5384 21C44.5384 19.406 41.9589 17.4407 37.3682 16.065C36.8217 17.7246 36.1659 19.3623 35.4226 21ZM13.2124 21C12.4691 19.3623 11.8133 17.7246 11.2668 16.065C6.67611 17.4407 4.09657 19.406 4.09657 21C4.09657 22.594 6.67611 24.5593 11.2668 25.935C11.8133 24.2754 12.4691 22.6377 13.2124 21ZM32.8868 25.935L32.231 27.0486C32.9087 26.9395 33.5645 26.8303 34.1547 26.6993C34.0017 26.0878 33.7612 25.4546 33.5208 24.8213L32.8868 25.935ZM26.5691 34.7568C30.0449 38.0323 33.0617 39.2988 34.417 38.469C35.8161 37.7047 36.2315 34.4948 35.1166 29.8218C33.4333 30.1712 31.6626 30.4333 29.8701 30.608C28.8208 32.071 27.7059 33.4685 26.5691 34.7568ZM15.7482 16.065L16.404 14.9514C15.7263 15.0605 15.0705 15.1697 14.4803 15.3007C14.6333 15.9122 14.8738 16.5454 15.1142 17.1787L15.7482 16.065ZM22.0659 7.24316C18.5901 3.96772 15.5733 2.70122 14.1961 3.53099C12.8189 4.29526 12.4036 7.50519 13.5184 12.1782C15.252 11.8229 17.0033 11.5604 18.7649 11.392C19.8142 9.92902 20.9291 8.5315 22.0659 7.24316Z",fill:"url(#paint0_linear_14_62)"}),r.createElement("defs",null,r.createElement("linearGradient",{id:"paint0_linear_14_62_dark",x1:24.3175,y1:0,x2:24.3175,y2:42,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"hsl(0, 0%, 99%)"}),r.createElement("stop",{offset:1,stopColor:"hsl(0, 0%, 99%)",stopOpacity:.18})),r.createElement("linearGradient",{id:"paint0_linear_14_62_light",x1:24.3175,y1:0,x2:24.3175,y2:42,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"hsl(40, 7%, 8%)"}),r.createElement("stop",{offset:1,stopColor:"hsl(40, 7%, 8%)",stopOpacity:.18})))),$=[{gradientId:"paint0_linear_14_58",Icon:N},{gradientId:"paint0_linear_14_59",Icon:P},{gradientId:"paint0_linear_14_60",Icon:Y},{gradientId:"paint0_linear_14_61",Icon:W},{gradientId:"paint0_linear_14_62",Icon:_}],ee=()=>e.jsxs(J,{children:[e.jsx(K,{children:e.jsx(o,{variant:"h4",tag:"h2",children:"работаю с"})}),e.jsx(z,{experiencesIcons:$})]}),te="/assets/CV-Dzc2f0uo.pdf",re=()=>e.jsxs(B,{id:"home",children:[e.jsxs(Q,{children:[e.jsxs(b,{children:[e.jsx(k,{}),e.jsxs(o,{variant:"h1",children:["Занимаюсь фронтенд-разработкой уже более 4 лет, и для меня это не просто работа, ",e.jsx("mark",{children:"а ещё и хобби!"})]})]}),e.jsxs(R,{children:[e.jsx(u,{variant:"primary",to:I.Contact,children:"Связаться"}),e.jsx(u,{variant:"secondary",href:te,target:"_blank",children:"Скачать CV"})]})]}),e.jsx(ee,{})]}),ne=i.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5.5rem;
  width: 100%;
  margin: 10rem 0;

  @media screen and (max-width: ${a.tablet}px) {
    row-gap: 2rem;
    margin: 4rem 0;
  }
`,ie=i.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  width: 100%;
`,se=i.li`
  position: relative;
  z-index: 1;
  display: flex;
  flex-grow: 0;
  padding: 0.8rem;
  ${C.text}
  font-weight: 600;
  color: ${({theme:t})=>t.colors.primary};
  background: ${({theme:t})=>t.colors.greyBG};
  border-radius: 0.4rem;
  overflow: hidden;

  span {
    position: relative;
    z-index: 2;
  }

  &::before {
    position: absolute;
    display: block;
    bottom: -45px;
    right: -60px;
    width: 50px;
    height: 50px;
    border-radius: 4rem;
    content: '';
    background: ${({theme:t})=>t.gradients.mainGradient};
    filter: blur(12px);
    transition: 0.35s ease-in-out;
  }

  &:hover {
    &::before {
      transform: translate(-40px, -20px);
    }
  }
`,ae=({skillsData:t})=>e.jsx(ie,{children:t.map(s=>e.jsx(se,{children:e.jsx("span",{children:s})},s))}),le=["HTML","CSS","SCSS","Styled-Components","Tailwindcss","JavaScript","TypeScript","React","Next.js","Solid.js","Redux","Effector","Webpack","Vite","Rollup","Gulp","Jest","React Testing Library","Cypress","Playwright","REST API","Formik","React Hook Form","Axios","AntD","MUI","Chakra UI"],oe=()=>e.jsxs(ne,{id:"skills",children:[e.jsx(o,{variant:"h2",gradient:"mainGradient",children:"Навыки"}),e.jsx(ae,{skillsData:le})]}),ce=i.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5.5rem;
  width: 100%;

  @media screen and (max-width: ${a.tablet}px) {
    row-gap: 2rem;
  }
`,de=i.ul`
  display: flex;
  flex-direction: column;
  row-gap: 7rem;
  width: 100%;

  @media screen and (max-width: ${a.tablet}px) {
    row-gap: 3rem;
  }
`,pe=i.li`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  row-gap: 2.5rem;

  @media screen and (max-width: ${a.tablet}px) {
    row-gap: 1.5rem;
  }
`,xe=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: ${a.tablet}px) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 1rem;
  }

  @media screen and (max-width: ${a.xsMobile}px) {
    align-items: center;
  }
`,he=i.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;

  @media screen and (max-width: ${a.xsMobile}px) {
    flex-direction: column;
    row-gap: 1rem;
    text-align: center;
  }
`,me=i.div`
  display: flex;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 0.4rem;
  overflow: hidden;
`,Ae=({experienceData:t})=>e.jsx(de,{children:t.map(({icons:s,title:l,dateFrom:c,dateTo:h,Description:x})=>e.jsxs(pe,{children:[e.jsxs(xe,{children:[e.jsxs(he,{children:[e.jsx(me,{children:e.jsxs("picture",{children:[e.jsx("source",{srcSet:s[0],type:"image/webp"}),e.jsx("img",{loading:"lazy",src:s[1],alt:l,width:32,height:32})]})}),e.jsx(o,{variant:"h3",children:l})]}),e.jsxs(S,{children:[c," - ",h]})]}),e.jsx(x,{})]},l))}),d=i.div`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
`,p=i.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`,n=i.li`
  position: relative;
  padding-left: 1.5rem;
  ${C.text};
  color: ${({theme:t})=>t.colors.text};

  &::before {
    position: absolute;
    left: 0;
    content: '—';
  }
`,Ce=()=>e.jsxs(e.Fragment,{children:[e.jsxs(d,{children:[e.jsx(o,{variant:"h4",children:"Обязанности:"}),e.jsxs(p,{children:[e.jsx(n,{children:"Участвовал в разработке 3-х проектов компании"}),e.jsx(n,{children:"Разрабатывал UI-kit используемый для проектов компании"}),e.jsx(n,{children:"Разрабатывал новый функционал проектов в связке с дизайнером и бэкэнд разработчиками"}),e.jsx(n,{children:"Рефакторил и оптимизировал существующую кодовую базу"}),e.jsx(n,{children:"Код ревью"}),e.jsx(n,{children:"Писал тесты"})]})]}),e.jsxs(d,{children:[e.jsx(o,{variant:"h4",children:"Достижения:"}),e.jsxs(p,{children:[e.jsx(n,{children:"Разработал новый проект в короткие сроки, после чего занимался его поддержкой и развитием"}),e.jsx(n,{children:"Написал новые фронтовые нотификации - уменьшил количество кода, написал новые компоненты, расширил функционал, уменьшил бойлерплейт"}),e.jsx(n,{children:"Обновил модальные окна и многократно упростил работу с ними"}),e.jsx(n,{children:"Сделал более подробную систему сбора аналитики на фронте, работая в сотрудничестве с аналитиком внутри команды"}),e.jsx(n,{children:"Разработал логику и компоненты для работы с multi-step формами"}),e.jsx(n,{children:"Привёл множество компонентов к новому дизайну и отрефакторил старый код"}),e.jsx(n,{children:"Разработал функционал интерактивного туториала, для простого онбординга новых пользователей"})]})]})]}),ge=()=>e.jsxs(e.Fragment,{children:[e.jsxs(d,{children:[e.jsx(o,{variant:"h4",children:"Обязанности:"}),e.jsxs(p,{children:[e.jsx(n,{children:"Проектирование архитектуры проектов"}),e.jsx(n,{children:"Координация работы членов команды frontend разработки"}),e.jsx(n,{children:"Разработка UI-kit для проектов компании"}),e.jsx(n,{children:"Создание новых компонентов и страниц"}),e.jsx(n,{children:"Коммуникация с руководством, с последующим описанием, декомпозицией задач и передачей их в исполнение другим участникам команды frontend разработки"}),e.jsx(n,{children:"Код ревью"}),e.jsx(n,{children:"Рефакторинг и оптимизация проектов клиентов компании"}),e.jsx(n,{children:"Написание тестов для компонентов и страниц"})]})]}),e.jsxs(d,{children:[e.jsx(o,{variant:"h4",children:"Достижения:"}),e.jsxs(p,{children:[e.jsx(n,{children:"Разработал простой и удобный UI-kit совместно с дизайнером внутри команды"}),e.jsx(n,{children:"Написал с нуля 4 проекта"}),e.jsx(n,{children:"Перевёл один из проектов заказчика с Vue2/Nuxt на Next.js"}),e.jsx(n,{children:"Ввёл style guide для команды"}),e.jsx(n,{children:"Лидил команду frontend разработки весь период работы"}),e.jsx(n,{children:"Внедрил код ревью в процесс разработки проектов внутри компании"}),e.jsx(n,{children:"Создал удобный workspace в Notion для хранения интересных и полезных ресурсов связанных с разработкой, для членов команды"})]})]})]}),fe=()=>e.jsxs(e.Fragment,{children:[e.jsxs(d,{children:[e.jsx(o,{variant:"h4",children:"Обязанности:"}),e.jsxs(p,{children:[e.jsx(n,{children:"Переговоры и уточнение требований с заказчиком"}),e.jsx(n,{children:"Анализ макета для последующего создания библиотеки компонентов"}),e.jsx(n,{children:"Разрабатывал многостраничные сайты и лендинги на чистом HTML/CSS/JS, а также веб-приложения на React/TypeScript"}),e.jsx(n,{children:"Занимался рефакторингом и оптимизацией уже существующих проектов"}),e.jsx(n,{children:"Работал с несколькими иностранными студиями, в качестве внештатного работника"}),e.jsx(n,{children:"Переводил старые сайты с jquery на современный HTML/CSS/JavaScript либо же React/Next.js"})]})]}),e.jsxs(d,{children:[e.jsx(o,{variant:"h4",children:"Достижения:"}),e.jsxs(p,{children:[e.jsx(n,{children:"Разработал более 40 проектов на чистом HTML/CSS/JS"}),e.jsx(n,{children:"Разработал более 60 проектов на React/TypeScript"}),e.jsx(n,{children:"Успешно завершил более 100 заказов"}),e.jsx(n,{children:"Активно работал с GSAP и другими библиотеками для создания комплексных анимаций"}),e.jsx(n,{children:"Смог успешно закрепится на международным рынке фриланса, несмотря на конкуренцию"})]})]})]}),je="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABWRJREFUWEfd1n1sVncVB/DPfZ62tLQU2rq2jJeWjg7cZK7gXHSQiVGM68YC0SybDAa6ydDg6gZuxhrFuTiXRQ0ZiS9JN8w0c1OXqSQjGIxTQlYzEZaOhVBYYS3FtnRtoaVvj97ntuOhL7T8hfEkN/clv3vO93fO93x/J/DYYMIVtODKA3j0SmfgG/9rAEJGBBjvHvIlQSwgJ2BawJQY7QO0DQ6Rafj/8DXV19C/yVXh9+Rt6+VlIDNgesD5BO3n0Y1e5DJ7KicHLsScDLcDWyYGMAWFcTIC/t1PRxg4xvKrWDGfG0p48XWePcT0GQQBXQn6J4Eg8MilAYQ77hnAe9FO80vZ9lGWL2JhSRJH0rp72fYrfnAY58jPjBITArmUBR4eH0C4494BFmSx6SauKSY3m74BznRFXLihlPI5UYjOc/x8NzkZfPkl5DEzTlO4gaGajwQTqBofwLw0jjXz2iMsXTR6H+1nef0tenr59EfIyqA2zEBAWozFT0fPH8imZZigI9wEHhoCMMz6oQV5AWe6WV3Kb7YSD+vaTVMrrR20tBOPUZDL20281chjn2NaFjWvsv4zvNPMQzW8fIIZU2gfoxyBr42RgQTlGRw5yv7vcfP1vPJ3OrtJz+Cul9GA9IgXhaWc7uDe69hZxZ5/MH8WpTMjEKXfIS+TjgRhNZI2tOHA5sFE8iXF8mJRjR9YRNUqdtWyooI5xXx3Jz86yAez6RmMSHi8n7I0jtTzywdZvICe8yy+luYzFG+TbIn0GH2psYKwQl8dnYFQXDr72HoT5cXc80mmZrL5GbbvpXQux/suIB7WmvxYJEbPrWRRKRXlHGukrJqiHE4PRhtPtcBXRgMojnOqgy238MR60uI8v5s1O7juGupCHRjDwpbNxel+3qii4lr+eoAf7mLXu2THRrdlYNPFAJKtN8TYpscpzudUG996nl1HopZKVdqROGbHOdnG0Scpm8Vzr0ZlWlvD3CIaRqhT4MGLAZSk8c671GzgvsrI/d436Oph5U5y4xGZxrKsgO5+CrNo+jH7DhCPc76X5dWUlVOfUrrQR2BjCgmDIeFo4fu38c21UY/vqeVDZcx7NOrptgRjtfXcNBoa+Ol67ryVn/2B6rX88TXueIqyEupTM5AIATwwmgNJRyc4vJ1Z/9X7fYf4xBIqtlDXRWE6p9/vp6FcBBTFaB7kxbsiAdvwWQqm86e/cXtYkhDAqAzcPxpAUZzmFqpXsHEV9SdZeiOPP0v1C5hJ+VQa+qJTMVwfEqx+6Lx44k423kFeyEj8fi+rn2ZeCcdGAfji2FKc7IQufns/JcUsWcj+Q+z+J3XHeOHPmE9pBsfDwF1Ufpgtq7h1yQWG7DvIyh209kVzQwj44jbcMDaA3BgdvVyfz5Ofp/LjER9+vZvKW9izn6+/QvMpHv4Uq5dSsZCsKZFMN7XwlwNsrsFVTE3j3JhSvH78w+jqOI0tbFrG9qpoCqqrp7aOdbfTeZY3j9LRHbVaCDC8CvMi2d72O2rbyI+nTEujhOi+S88Dc+KcaOHwT1hQEv194O0o8JrbLnjr7SP0lJlBQ5iVZ3jpCAXZtI5zEkZtuO7SAKbHeK+bylLuXhYdMAvmcbyRfx1l+eJIcIZt/0E+9m2kcfUMGkPSjTMLRADWTjCSJUjyoQenolHMNL50M+L84s3ozFh2I20drNuBAorSaQ57/hLBIwD3TjwThgtDEGEtQ3+dA7SEzA+/5dDWinZkUjibs4nomowF1kwOQKqzMAk5sWSWk7JcECM7Tn+CkyEXJhP5ff36wuUDuAz/Ey4N3PP/DiB11hzjOXD3JDMwTKphVo8YYifM9TgL/gNS8O74TLTU8wAAAABJRU5ErkJggg==",ue="data:image/webp;base64,UklGRqQDAABXRUJQVlA4TJgDAAAvH8AHAAbZtm0bkvRh1baNZNiOqIzIzLZt27Zt27ZtF89DoPUD90i6te3YsiP79XqyXeN+QGO7kW3btuuzbdu2bds2rvr3n4Hbto3Ajtund5T570r8tSL/REBsJVg0LqnKzn29SroALILRjPB6oqJlyb6ocZBhsSm7BARGSS0+cb5FybXs7assHIaHru49tW1KmoivDjS+aUJOgRjf0oMnT3/d1qlH1+AfCFZ9X1hXxMTX+bbxnkqiCuYuffw3jp/ceuXwxX1H1x5Z++Q2CH7/vHF4+ywWD9/RI/o9lyjfk+LKEZDQtw9ndx3fVPUd5ObpW6fvnJdRqDREv+eANojoahVGxdb/Bfnx5ent6yeObzm5/fqpfYuX1P/4DLJrPr56ODJaw9U4hGxCFgXfrlw7CXJs096lh1e5dCdFNzxFYEIyyNk9Lx6AvHqo4GhtExtiYWNhQgixtTyTch7fWDd8/8r3jzPLVQqBnqfnbZl4vl3YveTRtdvnQD68dDCwzEwIsTAImXYK82u2z/n5DWRacXdcDwNEw8jA0uGeRXfOgzy/z2HZG0bhszohy4FhbnXtH5DdSzvjBelEGJaGonD7PMjFQ8PDNCPDNozQIITo5irk/QsQMiXTdNTQjDQiTJcsz+6B7Fq4a3FvLLewQYUQYrp3Y9sCEDy///hmGU2lEqFZSdgK/Lt45MrxcwfaYnmFEQoySHTH3izuBqn6cWzLiwcUqkExVggZbp3YOOvDy8UdIEe2dMTwUiBERiKkuXXk0c3vX07tqvnlBAmoShgho9rjgTUrBz69BTm6tQO6V1ghElLsezCn+e2zi0dAFna2gUX3lSxEFHvNK0tPlvV8fg+CB9a3R/MMn+WJkBwyHFx38yzIlROL2wclNYRF9kjRgb5h5w6CIF4+Jus5BIvwXY4IQUXhBB/fClL1Y+v8D692LFPsuzCt8tKxX99BPr65e3ntRDtoeOvIuyxRglMXxhfU/wO5f23rQpBvny8fP7Xz1O4jm/etPn/w2BYvhIHXRb9HYnjXzjy6CYK3LmxfAoJY/avqB8jLR/3ie8PpYz00Maw6RSls+9ILRz++uX5my9xn90AQL5/oTHd4J4pYD8bkoVW9aUxTOjE8a1RWjsk1h7dsXdSWHKx9noSeBLSK8+A8aUMXukHp2lNBc2iFskmqyZEsZ0ypKF3elLbnvFi3nHFiSpa/luG/SRM7wwQpMA2mSPNbCA==",ye="data:image/png;base64,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",we="data:image/webp;base64,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",Ee="data:image/png;base64,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",Le="data:image/webp;base64,UklGRhwFAABXRUJQVlA4TA8FAAAvH8AHAPVQ0vZPkRRdjZuwdtix5QCs3N3d3d3dLa1dy13yKTKy4Qrukrg7VMuKHYFVMIoH8h/9j7vP5PhM9iLg1tq2tvnktOkyQlrqmKHkZIdskQlyYmbGCZyOmZlJLJltyfwLrB+CbNtpG7H0FWZmZuz+99ENCMLMSf8ZuG3bqLvqvDv7HqGFnRa2asQDaCGrhdzmcjgLYJ+1wVbDzszBxG2Sq2FvEwWlQEQt6rSY45xXAxEpNYqzYIMg7kq1iONq0CkOI5uNZLZn0l9bvJyYIEAIQdzxTaDAFa9Na8lV4ene83EKkOczWz79Pn2SAwVTtME2KMgWk5PehoSrbvx0QEEQLgNKsQ6ATBL4fEi8vXCgnMKbYFMqbDXiBNByS3Fbz98VfVjNLeX7vvc730y7P4y6PY46X0/6vPVnF/MerND7e/nNKqcAglKybakBFy49cX4p1+54PpJsrK3FSjVZgjS/+cZIqtHmcDE7n08SOFJ6KEFvldMyMPx2I2Eiw35avV6HBUgjolxMP0LEL3u9DQd8dKImdkdx2TKwGnZazDmp0aph/604xpgElMBYh5+vDfu/zTCMG3g42er33vvR+3dxOAUDQ/nJF/hs51XMsCRGuESBq/iYZTCOce+3wbRsCXN2tyfLgcBcNpuQcPWBaney+BIzyBKAsFcl/S1eY5jBQgSt9v5KDB0Wr5LZciCw9f35eaX8KKqOjDGWAIwDG4lB9Xgq6BgxxnA0XZ+aL+udr5ZaqUFH4OqvC0932O+jv64exQyyb67hMC45lE+hbiD2DWZwfT3a/XEUI2jR6U522mpKBeXpLUEQXW/GLk0iMmQsSfyaLMpmC7K45+vp/n2TJBBDdGuiw/nMjcH7cZQsllMKwM8EyLPL0D0eh6UKKMWUqx3QASUIdBGnjX0GrD/HLbxqHP0vGvzgf8jedSnQ9WGcr4cC1FnaMRyEKZQieLdU0fjNN+t6v3UcxwGrr74br9FDFJOAkvBDd1s/civqozw9tDEY2Oh0vpm6dIGHw0AX9KHGW7eaoeOwOTJuijSdCTQ6606VEmFFxjUa6TCGXp23P5u7DPB+niSz5QZOTfk0SeABn90Ncjza4ROGWMPtW23bddQULepS0SqPyzQii3m1aIOXfjOhnN0KRRXuRxDTmFSN9XoexoAWne2MKQBgZSW9rn9kKbmaLbpBNt38Thoi7g7EJRpqKp8Ku/wKxBRW1NKdcvlal8Np1bgX6RBSK/iiLKXeNzYSAJD6rAHxFsFi4X+tpB6ONnlU5sEWpEgAgR+B40MQUlQEifm1aP27wdpWyNMILfirXQiIN9lijBEwvmtueqMDyqokljIVPwK/Cj5FB9pw3Akq6m8/0o4TUYS7DZ62XkaXt+mAPia+q7CBctlqPL8XXMXnV/EFJ6RIx9+GIFIF1egfl8udgKqCCFbxRQvf4IQuwAYAUDwuXHwkCWwtZSrF9XBQVX9HVLEul7Oq/97ydAlTWcXnrzx7BUDqjtCl9UwHtG3hX221UMiV4q5m8OnT9KmDP2zDZ5ZVTs26N9KrNzAMMktKLOdKi6nqUrr8777T7+/GN14Z2ax7whey1Xz8na5/MAo8aKhTF/H97z7mQLQFgQXYhK9ki8lK+sLTnfv95CPP3xx5/pdD+Mouy3e2MPnSkc0m7Zh9abKEUCNegE3FJn1tustZALpfDXugD0ycAlB6tox7PHjwgPx3PNhcDg8eAAA=",ve=[{icons:[ue,je],title:"Senior Frontend-разработчик в Agro.Club",dateFrom:"Октябрь 2022",dateTo:"Февраль 2024",Description:Ce},{icons:[we,ye],title:"Lead Frontend-разработчик в Sidewalk Developers Group",dateFrom:"Май 2021",dateTo:"Октябрь 2022",Description:ge},{icons:[Le,Ee],title:"Frontend-разработчик на фрилансе",dateFrom:"Июнь 2019",dateTo:"Май 2021",Description:fe}],Se=()=>e.jsxs(ce,{id:"experience",children:[e.jsx(o,{variant:"h2",gradient:"mainGradient",children:"Опыт Работы"}),e.jsx(Ae,{experienceData:ve})]}),Be=()=>(M(),e.jsxs(e.Fragment,{children:[e.jsx(re,{}),e.jsx(oe,{}),e.jsx(Se,{})]}));export{Be as default};
