"use strict";(self.webpackChunk_mconf_bbb_ui_components_react=self.webpackChunk_mconf_bbb_ui_components_react||[]).push([[485],{"./src/components/TextInput/component.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithError:()=>WithError,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"BBBTextInput",component:__webpack_require__("./src/components/TextInput/component.tsx").A,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label displayed above the input."},placeholder:{control:"text",description:"Placeholder text for the input."},disabled:{control:"boolean",description:"Disable the input when true."},helperText:{control:"text",description:"Helper text shown below the input."},error:{control:"boolean",description:"When true, renders the input in an error state."}}},Default={args:{label:"Name",placeholder:"Your name"}},WithError={args:{label:"Email",placeholder:"you@example.com",error:!0,helperText:"Invalid email"}},__namedExportsOrder=["Default","WithError"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Name',\n    placeholder: 'Your name'\n  }\n}",...Default.parameters?.docs?.source}}},WithError.parameters={...WithError.parameters,docs:{...WithError.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Email',\n    placeholder: 'you@example.com',\n    error: true,\n    helperText: 'Invalid email'\n  }\n}",...WithError.parameters?.docs?.source}}}},"./src/components/TextInput/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>component});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),TextField=__webpack_require__("./node_modules/@mui/material/esm/TextField/TextField.js"),pallete=__webpack_require__("./src/stylesheets/pallete.ts"),typography=__webpack_require__("./src/stylesheets/typography.ts"),sizing=__webpack_require__("./src/stylesheets/sizing.ts");const StyledTextField=(0,styled_components_browser_esm.Ay)(TextField.A)`
  .MuiInputBase-root {
    display: flex;
    padding: ${sizing.he};
    align-items: center;
    gap: ${sizing.Pf};
    align-self: stretch;
    border-radius: ${sizing.IS};
    border: 1px solid ${pallete.hN};
    color: ${pallete.XN};

    &.Mui-focused {
      border-color: ${pallete.z2};
      color: ${pallete.eg};
    }
    
    ${({$error})=>$error&&styled_components_browser_esm.AH`
        border-color: ${pallete.qO};
    `}
  }

  .MuiInputBase-input {
    padding: 0;
    height: auto;
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`,Label=styled_components_browser_esm.Ay.div`
  color: ${pallete.eg};
  font-size: ${typography.ms};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,HelperText=styled_components_browser_esm.Ay.div`
  color: ${pallete.eg};
  font-size: ${typography.ms};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0 ${sizing.he}; 

  ${({$error})=>$error&&styled_components_browser_esm.AH`
      color: ${pallete._r};
  `}
`,Container=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${sizing.Pf};
`;function TextInput({label,helperText,error,placeholder,...props}){return(0,jsx_runtime.jsxs)(Container,{children:[label&&(0,jsx_runtime.jsx)(Label,{children:label}),(0,jsx_runtime.jsx)(StyledTextField,{...props,$error:error,placeholder}),helperText&&(0,jsx_runtime.jsx)(HelperText,{$error:error,children:helperText})]})}const component=TextInput;TextInput.__docgenInfo={description:"A customizable text input component.\n\nThis component provides a styled, single-line text input field that supports\nicons, custom validation, and all standard input attributes.",methods:[],displayName:"TextInput",props:{label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]}},"./src/stylesheets/pallete.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BP:()=>colorDarkGray,Ee:()=>colorErrorDark,GJ:()=>colorHoverDark,GW:()=>colorBackgroundLight,K5:()=>colorHoverLight,XN:()=>colorTextLight,Xg:()=>colorGray,_q:()=>colorBrand1,_r:()=>colorError,bD:()=>colorWhite,bh:()=>colorBackgroundWhite,d5:()=>colorLightGray,eg:()=>colorTextDefault,f$:()=>colorBrand2,hN:()=>colorBorderDefault,kE:()=>colorIconDefault,od:()=>colorBackgroundBlue,qO:()=>colorBorderError,qg:()=>colorNeutral3,xM:()=>colorBrandAux,z2:()=>colorBorderSelected});const colorNeutral3="var(--color-neutral-3, #B0BDC9)",colorWhite="var(--color-neutral-white, #FFFFFF)",colorLightGray="var(--color-light-gray, #F4F6FA)",colorGray="var(--color-gray, #4E5A66)",colorDarkGray="var(--color-dark-gray, #393C48)",colorBrand1_base="var(--color-brand-1, #1D65D4)",colorBrand1=`var(--color-primary, ${colorBrand1_base})`,colorBrand2=`var(--color-brand-2, ${colorBrand1_base})`,colorBrandAux="var(--color-brand-aux, var(--color-brand-light, #E5EFFB))",colorError="var(--color-danger, var(--color-error, #D6232D))",colorErrorDark="var(--color-danger-dark, var(--color-error-dark, #B91C25))",colorBackgroundWhite=`var(--color-background-white, ${colorWhite})`,colorBackgroundLight=`var(--color-background-light, ${colorLightGray})`,colorBackgroundBlue="var(--color-background-blue, var(--color-brand-light, #E5EFFB))",colorBorderSelected=`var(--color-border-selected, ${colorBrand1_base})`,colorBorderError="var(--color-border-error, var(--color-error, #D6232D))",colorBorderDefault=`var(--default-border, ${`var(--color-border-default, ${colorNeutral3})`})`,colorTextDefault=`var(--color-text-default, ${colorDarkGray})`,colorTextLight="var(--color-text-light, var(--color-neutral-2, #717C91))",colorIconDefault="var(--color-icon-default, var(--color-neutral-2, #717C91))",colorHoverDark="var(--color-hover-dark, #1E53AF)",colorHoverLight="var(--color-hover-light, #D4E5FA)"},"./src/stylesheets/sizing.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{IS:()=>borderRadiusDefault,Od:()=>spacingSmallMedium,Pf:()=>spacingSmall,aU:()=>borderRadiusSmall,f5:()=>spacingLarge,he:()=>spacingMedium});const spacingSmall="0.5rem",spacingSmallMedium="0.75rem",spacingMedium="1rem",spacingLarge="1.5rem",borderRadiusDefault="1rem",borderRadiusSmall="0.5rem"},"./src/stylesheets/typography.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G5:()=>fontSizeDefault,WY:()=>fontWeightLight,cQ:()=>fontSizeXSmall,f3:()=>fontSizeBig,hW:()=>fontWeightHard,ms:()=>fontSizeSmall,n3:()=>fontWeightDefault});const fontSizeXSmall="0.75rem",fontSizeSmall="0.875rem",fontSizeDefault="1rem",fontSizeBig="1.125rem",fontWeightHard="700",fontWeightDefault="600",fontWeightLight="400"}}]);
//# sourceMappingURL=components-TextInput-component-stories.c9ca50ea.iframe.bundle.js.map