"use strict";(self.webpackChunk_mconf_bbb_ui_components_react=self.webpackChunk_mconf_bbb_ui_components_react||[]).push([[129],{"./src/components/Hint/component.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"BBBHint",component:__webpack_require__("./src/components/Hint/component.tsx").A,tags:["autodocs"],argTypes:{label:{control:"text",description:"Main text content of the hint."},title:{control:"text",description:"Optional title; if provided, shows a close button."},icon:{control:!1,description:"Optional icon node displayed next to the title or label."},onRequestClose:{control:!1,description:"Callback fired when the close button is clicked."},children:{control:!1,description:"Optional additional content rendered under the label."}}},Default={args:{label:"Helpful hint"}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Helpful hint'\n  }\n}",...Default.parameters?.docs?.source}}}},"./src/components/Hint/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>component});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),pallete=__webpack_require__("./src/stylesheets/pallete.ts"),typography=__webpack_require__("./src/stylesheets/typography.ts"),sizing=__webpack_require__("./src/stylesheets/sizing.ts");const Container=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  gap: ${sizing.Pf};
  padding: ${sizing.he};
  background-color: ${pallete.GW};
`,IconTextWrapper=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: row;
  gap: ${sizing.Od};
`,Header=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,IconWrapper=styled_components_browser_esm.Ay.div`
  color: ${pallete._q};
  display: flex;
  align-items: center;
`,Title=styled_components_browser_esm.Ay.label`
  color: ${pallete.eg};
  font-size: ${typography.G5}
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`,CloseButton=styled_components_browser_esm.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${pallete.kE};
  background: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  aspect-ratio: 1;

  &&:hover,
  &&:active {
    background-color: ${pallete.K5};
  }
      
  &&:focus {
    outline: 2px solid ${pallete._q};
  }
`,Label=styled_components_browser_esm.Ay.label`
  color: ${pallete.eg};
  font-size: ${typography.G5};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: ${sizing.aU};
`;var md=__webpack_require__("./node_modules/react-icons/md/index.mjs");function Hint({title,label,icon=(0,jsx_runtime.jsx)(md.MJW,{fontSize:"1rem"}),onRequestClose,children,...rest}){const renderedLabel=(0,jsx_runtime.jsxs)(Label,{children:[label,children]});return(0,jsx_runtime.jsxs)(Container,{role:"status","aria-live":"polite","aria-atomic":"true","aria-label":title||label,...rest,children:[(0,jsx_runtime.jsxs)(Header,{children:[(0,jsx_runtime.jsxs)(IconTextWrapper,{children:[(0,jsx_runtime.jsx)(IconWrapper,{"aria-hidden":"true",children:icon}),title&&(0,jsx_runtime.jsx)(Title,{children:title}),!title&&renderedLabel]}),title&&(0,jsx_runtime.jsx)(CloseButton,{type:"button","aria-label":"Close",onClick:onRequestClose,children:(0,jsx_runtime.jsx)(md.m6K,{fontSize:"1rem"})})]}),title&&renderedLabel]})}const component=Hint;Hint.__docgenInfo={description:"A customizable hint component for displaying informational messages.\n\nThis component provides a small contextual hint used to surface tips, short help text or dismissible messages.\nIt can be displayed with a title, an icon, and a close button.",methods:[],displayName:"Hint",props:{label:{required:!0,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'<MdInfo fontSize="1rem" />',computed:!1}},onRequestClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}}},"./src/stylesheets/pallete.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BP:()=>colorDarkGray,Ee:()=>colorErrorDark,GJ:()=>colorHoverDark,GW:()=>colorBackgroundLight,K5:()=>colorHoverLight,XN:()=>colorTextLight,Xg:()=>colorGray,_q:()=>colorBrand1,_r:()=>colorError,bD:()=>colorWhite,bh:()=>colorBackgroundWhite,d5:()=>colorLightGray,eg:()=>colorTextDefault,f$:()=>colorBrand2,hN:()=>colorBorderDefault,kE:()=>colorIconDefault,od:()=>colorBackgroundBlue,qO:()=>colorBorderError,qg:()=>colorNeutral3,xM:()=>colorBrandAux,z2:()=>colorBorderSelected});const colorNeutral3="var(--color-neutral-3, #B0BDC9)",colorWhite="var(--color-neutral-white, #FFFFFF)",colorLightGray="var(--color-light-gray, #F4F6FA)",colorGray="var(--color-gray, #4E5A66)",colorDarkGray="var(--color-dark-gray, #393C48)",colorBrand1_base="var(--color-brand-1, #1D65D4)",colorBrand1=`var(--color-primary, ${colorBrand1_base})`,colorBrand2=`var(--color-brand-2, ${colorBrand1_base})`,colorBrandAux="var(--color-brand-aux, var(--color-brand-light, #E5EFFB))",colorError="var(--color-danger, var(--color-error, #D6232D))",colorErrorDark="var(--color-danger-dark, var(--color-error-dark, #B91C25))",colorBackgroundWhite=`var(--color-background-white, ${colorWhite})`,colorBackgroundLight=`var(--color-background-light, ${colorLightGray})`,colorBackgroundBlue="var(--color-background-blue, var(--color-brand-light, #E5EFFB))",colorBorderSelected=`var(--color-border-selected, ${colorBrand1_base})`,colorBorderError="var(--color-border-error, var(--color-error, #D6232D))",colorBorderDefault=`var(--default-border, ${`var(--color-border-default, ${colorNeutral3})`})`,colorTextDefault=`var(--color-text-default, ${colorDarkGray})`,colorTextLight="var(--color-text-light, var(--color-neutral-2, #717C91))",colorIconDefault="var(--color-icon-default, var(--color-neutral-2, #717C91))",colorHoverDark="var(--color-hover-dark, #1E53AF)",colorHoverLight="var(--color-hover-light, #D4E5FA)"},"./src/stylesheets/sizing.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{IS:()=>borderRadiusDefault,Od:()=>spacingSmallMedium,Pf:()=>spacingSmall,aU:()=>borderRadiusSmall,f5:()=>spacingLarge,he:()=>spacingMedium});const spacingSmall="0.5rem",spacingSmallMedium="0.75rem",spacingMedium="1rem",spacingLarge="1.5rem",borderRadiusDefault="1rem",borderRadiusSmall="0.5rem"},"./src/stylesheets/typography.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G5:()=>fontSizeDefault,WY:()=>fontWeightLight,cQ:()=>fontSizeXSmall,f3:()=>fontSizeBig,hW:()=>fontWeightHard,ms:()=>fontSizeSmall,n3:()=>fontWeightDefault});const fontSizeXSmall="0.75rem",fontSizeSmall="0.875rem",fontSizeDefault="1rem",fontSizeBig="1.125rem",fontWeightHard="700",fontWeightDefault="600",fontWeightLight="400"}}]);
//# sourceMappingURL=components-Hint-component-stories.1fccd231.iframe.bundle.js.map