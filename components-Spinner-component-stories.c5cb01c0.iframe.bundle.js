"use strict";(self.webpackChunk_mconf_bbb_ui_components_react=self.webpackChunk_mconf_bbb_ui_components_react||[]).push([[957],{"./src/components/Spinner/component.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"BBBSpinner",component:__webpack_require__("./src/components/Spinner/component.tsx").A,tags:["autodocs"],argTypes:{size:{control:"text",description:"Width/height of the spinner (number in px or CSS string, e.g. '2rem')."},strokeWidth:{control:"number",description:"Thickness of the spinner stroke."},animate:{control:"boolean",description:"When false, disables the rotation animation.",table:{defaultValue:{summary:"true"}}}}},Default={},Small={args:{size:24}},__namedExportsOrder=["Default","Small"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 24\n  }\n}",...Small.parameters?.docs?.source}}}},"./src/components/Spinner/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>component});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),pallete=__webpack_require__("./src/stylesheets/pallete.ts");const rotate=styled_components_browser_esm.i7`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,dash=styled_components_browser_esm.i7`
  0%   { stroke-dasharray: 1, 200; stroke-dashoffset: 0; }
  50%  { stroke-dasharray: 100, 200; stroke-dashoffset: -15; }
  100% { stroke-dasharray: 100, 200; stroke-dashoffset: -125; }
`,Wrapper=styled_components_browser_esm.Ay.div`
  width: ${({$size})=>"number"==typeof $size?`${$size}px`:$size};
  height: ${({$size})=>"number"==typeof $size?`${$size}px`:$size};
  display: inline-grid;
  place-items: center;
`,StyledSvg=styled_components_browser_esm.Ay.svg`
  width: 100%;
  height: 100%;
  transform-origin: center;
  overflow: visible;
  ${({$animate})=>$animate&&styled_components_browser_esm.AH`
      animation: ${rotate} 1.4s linear infinite;
    `}
`,Path=styled_components_browser_esm.Ay.circle`
  fill: none;
  stroke: ${pallete._q};
  stroke-width: ${({$strokeWidth})=>$strokeWidth}px;
  stroke-linecap: round;
  ${({$animate})=>$animate&&styled_components_browser_esm.AH`
      animation: ${dash} 1.4s ease-in-out infinite;
    `}

  ${({$animate})=>!$animate&&styled_components_browser_esm.AH`
      stroke-dasharray: 94.2 31.4;
      stroke-dashoffset: 0;
    `}
`,Spinner=({size=48,strokeWidth=4,animate=!0})=>(0,jsx_runtime.jsx)(Wrapper,{$size:size,role:"progressbar","aria-label":"Loading","aria-busy":animate,children:(0,jsx_runtime.jsx)(StyledSvg,{viewBox:"0 0 50 50",$animate:animate,focusable:"false","aria-hidden":"true",children:(0,jsx_runtime.jsx)(Path,{className:"path",cx:"25",cy:"25",r:"20",$animate:animate,$strokeWidth:strokeWidth})})}),component=Spinner;Spinner.__docgenInfo={description:"A customizable spinner component.\n\nThis component provides a small, configurable loading indicator for background activity or loading states.",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"48",computed:!1}},strokeWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},animate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}}},"./src/stylesheets/pallete.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BP:()=>colorDarkGray,Ee:()=>colorErrorDark,GJ:()=>colorHoverDark,GW:()=>colorBackgroundLight,K5:()=>colorHoverLight,XN:()=>colorTextLight,Xg:()=>colorGray,_q:()=>colorBrand1,_r:()=>colorError,bD:()=>colorWhite,bh:()=>colorBackgroundWhite,d5:()=>colorLightGray,eg:()=>colorTextDefault,f$:()=>colorBrand2,hN:()=>colorBorderDefault,kE:()=>colorIconDefault,od:()=>colorBackgroundBlue,qO:()=>colorBorderError,qg:()=>colorNeutral3,xM:()=>colorBrandAux,z2:()=>colorBorderSelected});const colorNeutral3="var(--color-neutral-3, #B0BDC9)",colorWhite="var(--color-neutral-white, #FFFFFF)",colorLightGray="var(--color-light-gray, #F4F6FA)",colorGray="var(--color-gray, #4E5A66)",colorDarkGray="var(--color-dark-gray, #393C48)",colorBrand1_base="var(--color-brand-1, #1D65D4)",colorBrand1=`var(--color-primary, ${colorBrand1_base})`,colorBrand2=`var(--color-brand-2, ${colorBrand1_base})`,colorBrandAux="var(--color-brand-aux, var(--color-brand-light, #E5EFFB))",colorError="var(--color-danger, var(--color-error, #D6232D))",colorErrorDark="var(--color-danger-dark, var(--color-error-dark, #B91C25))",colorBackgroundWhite=`var(--color-background-white, ${colorWhite})`,colorBackgroundLight=`var(--color-background-light, ${colorLightGray})`,colorBackgroundBlue="var(--color-background-blue, var(--color-brand-light, #E5EFFB))",colorBorderSelected=`var(--color-border-selected, ${colorBrand1_base})`,colorBorderError="var(--color-border-error, var(--color-error, #D6232D))",colorBorderDefault=`var(--default-border, ${`var(--color-border-default, ${colorNeutral3})`})`,colorTextDefault=`var(--color-text-default, ${colorDarkGray})`,colorTextLight="var(--color-text-light, var(--color-neutral-2, #717C91))",colorIconDefault="var(--color-icon-default, var(--color-neutral-2, #717C91))",colorHoverDark="var(--color-hover-dark, #1E53AF)",colorHoverLight="var(--color-hover-light, #D4E5FA)"}}]);
//# sourceMappingURL=components-Spinner-component-stories.c5cb01c0.iframe.bundle.js.map