"use strict";(self.webpackChunk_mconf_bbb_ui_components_react=self.webpackChunk_mconf_bbb_ui_components_react||[]).push([[429],{"./src/components/Typography/component.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Header:()=>Header,__namedExportsOrder:()=>__namedExportsOrder,default:()=>component_stories});const component_stories={title:"BBBTypography",component:__webpack_require__("./src/components/Typography/component.tsx").A,tags:["autodocs"],argTypes:{children:{control:"text",description:"Text content to render."},variant:{control:"select",options:["default","selected","text2","text3","header","button"],description:"Typography variant (e.g., header, default). Use values from component constants if available."},as:{control:"text",description:"HTML element to render as (e.g., h1, p, span)."}}},Default={args:{children:"Sample text"}},Header={args:{variant:"header",children:"Header text"}},__namedExportsOrder=["Default","Header"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Sample text'\n  }\n}",...Default.parameters?.docs?.source}}},Header.parameters={...Header.parameters,docs:{...Header.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'header',\n    children: 'Header text'\n  }\n}",...Header.parameters?.docs?.source}}}},"./src/components/Typography/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>component});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),pallete=__webpack_require__("./src/stylesheets/pallete.ts"),typography=__webpack_require__("./src/stylesheets/typography.ts");const variants={default:styled_components_browser_esm.AH`
    color: ${pallete.eg};
    font-size: ${typography.G5};
    font-style: normal;
    font-weight: ${typography.WY};
    line-height: normal;
  `,selected:styled_components_browser_esm.AH`
    color: ${pallete.eg};
    font-size: ${typography.G5};
    font-style: normal;
    font-weight: ${typography.hW};
    line-height: normal;
  `,text2:styled_components_browser_esm.AH`
    color: ${pallete.XN};
    font-size: ${typography.ms};
    font-style: normal;
    font-weight: ${typography.WY};
    line-height: normal;
  `,text3:styled_components_browser_esm.AH`
    color: ${pallete.XN};
    font-size: ${typography.cQ};
    font-style: normal;
    font-weight: ${typography.WY};
    line-height: normal;
  `,header:styled_components_browser_esm.AH`
    color: ${pallete.eg};
    font-size: ${typography.G5};
    font-style: normal;
    font-weight: ${typography.hW};
    line-height: normal;
    text-transform: uppercase;
  `,button:styled_components_browser_esm.AH`
    color: ${pallete.eg};
    font-size: ${typography.G5};
    font-style: normal;
    font-weight: ${typography.n3};
    line-height: normal;
  `},TypographyStyled=styled_components_browser_esm.Ay.p`
  margin: 0;
  padding: 0;
  ${({$variant})=>variants[$variant]}
`,Typography=({children,variant="default",as,...props})=>(0,jsx_runtime.jsx)(TypographyStyled,{as,$variant:variant,...props,children}),component=Typography;Typography.__docgenInfo={description:"A typography component that standardizes text styles across the app.\n\nThis component provides multiple semantic variants (header, default, label, helper)\nand allows overriding the rendered HTML element via the `as` prop.",methods:[],displayName:"Typography",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof TYPOGRAPHY_VARIANTS)[number]"},description:"",defaultValue:{value:"'default'",computed:!1}},as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:""}}}},"./src/stylesheets/pallete.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BP:()=>colorDarkGray,Ee:()=>colorErrorDark,GJ:()=>colorHoverDark,GW:()=>colorBackgroundLight,K5:()=>colorHoverLight,XN:()=>colorTextLight,Xg:()=>colorGray,_q:()=>colorBrand1,_r:()=>colorError,bD:()=>colorWhite,bh:()=>colorBackgroundWhite,d5:()=>colorLightGray,eg:()=>colorTextDefault,f$:()=>colorBrand2,hN:()=>colorBorderDefault,kE:()=>colorIconDefault,od:()=>colorBackgroundBlue,qO:()=>colorBorderError,qg:()=>colorNeutral3,xM:()=>colorBrandAux,z2:()=>colorBorderSelected});const colorNeutral3="var(--color-neutral-3, #B0BDC9)",colorWhite="var(--color-neutral-white, #FFFFFF)",colorLightGray="var(--color-light-gray, #F4F6FA)",colorGray="var(--color-gray, #4E5A66)",colorDarkGray="var(--color-dark-gray, #393C48)",colorBrand1_base="var(--color-brand-1, #1D65D4)",colorBrand1=`var(--color-primary, ${colorBrand1_base})`,colorBrand2=`var(--color-brand-2, ${colorBrand1_base})`,colorBrandAux="var(--color-brand-aux, var(--color-brand-light, #E5EFFB))",colorError="var(--color-danger, var(--color-error, #D6232D))",colorErrorDark="var(--color-danger-dark, var(--color-error-dark, #B91C25))",colorBackgroundWhite=`var(--color-background-white, ${colorWhite})`,colorBackgroundLight=`var(--color-background-light, ${colorLightGray})`,colorBackgroundBlue="var(--color-background-blue, var(--color-brand-light, #E5EFFB))",colorBorderSelected=`var(--color-border-selected, ${colorBrand1_base})`,colorBorderError="var(--color-border-error, var(--color-error, #D6232D))",colorBorderDefault=`var(--default-border, ${`var(--color-border-default, ${colorNeutral3})`})`,colorTextDefault=`var(--color-text-default, ${colorDarkGray})`,colorTextLight="var(--color-text-light, var(--color-neutral-2, #717C91))",colorIconDefault="var(--color-icon-default, var(--color-neutral-2, #717C91))",colorHoverDark="var(--color-hover-dark, #1E53AF)",colorHoverLight="var(--color-hover-light, #D4E5FA)"},"./src/stylesheets/typography.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G5:()=>fontSizeDefault,WY:()=>fontWeightLight,cQ:()=>fontSizeXSmall,f3:()=>fontSizeBig,hW:()=>fontWeightHard,ms:()=>fontSizeSmall,n3:()=>fontWeightDefault});const fontSizeXSmall="0.75rem",fontSizeSmall="0.875rem",fontSizeDefault="1rem",fontSizeBig="1.125rem",fontWeightHard="700",fontWeightDefault="600",fontWeightLight="400"}}]);
//# sourceMappingURL=components-Typography-component-stories.f85b9bd5.iframe.bundle.js.map