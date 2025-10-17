"use strict";(self.webpackChunk_mconf_bbb_ui_components_react=self.webpackChunk_mconf_bbb_ui_components_react||[]).push([[484],{"./src/components/Navigation/component.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"BBBNavigation",component:__webpack_require__("./src/components/Navigation/component.tsx").A,tags:["autodocs"],argTypes:{label:{control:"text",description:"Text label displayed inside the navigation button."},onClick:{control:!1,description:"Click handler fired when the navigation button is activated."},onKeyDown:{control:!1,description:"Keyboard keydown handler for the navigation button."},icon:{control:!1,description:"Optional custom icon node. If omitted a default icon is displayed."},children:{control:!1,description:"Optional children (e.g., sub-menus) rendered within the button."},ariaLabel:{control:"text",description:"Accessible name for the navigation button."},ariaLabelledBy:{control:"text",description:"ID of the element that labels the navigation button."},ariaDescribedBy:{control:"text",description:"ID of the element that describes the navigation button."},dataTest:{control:"text",description:"Test id used for automated tests."}}},Default={args:{label:"Navigate",onClick:()=>{}}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Navigate',\n    onClick: () => {}\n  }\n}",...Default.parameters?.docs?.source}}}},"./src/components/Navigation/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>component});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),sizing=__webpack_require__("./src/stylesheets/sizing.ts"),pallete=__webpack_require__("./src/stylesheets/pallete.ts");const NavigationButton=styled_components_browser_esm.Ay.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  border: none;
  cursor: pointer;
  margin: 1px; /* Adds margin to prevent outline from being cropped */
  border-radius: ${sizing.aU};

  &:focus {
    outline: 1px solid ${pallete._q};
  }
`,IconTextWrapper=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${sizing.he};
`,IconWrapper=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${pallete._q};

  ${({$isCustomIcon})=>!$isCustomIcon&&styled_components_browser_esm.AH`
    transform: rotate(90deg);
    [dir="rtl"] & {
      transform: rotate(-90deg);
    }
  `}
`;var md=__webpack_require__("./node_modules/react-icons/md/index.mjs"),Typography=__webpack_require__("./src/components/Typography/index.ts");function Navigation({label,onClick,onKeyDown,icon,children,ariaLabel,ariaLabelledBy,ariaDescribedBy,dataTest}){const isCustomIcon=!!icon,iconToRender=icon||(0,jsx_runtime.jsx)(md.onE,{size:"1.5rem"});return(0,jsx_runtime.jsxs)(NavigationButton,{onClick,onKeyDown,"aria-label":ariaLabel,"aria-labelledby":ariaLabelledBy,"aria-describedby":ariaDescribedBy,"data-test":dataTest,children:[(0,jsx_runtime.jsxs)(IconTextWrapper,{children:[(0,jsx_runtime.jsx)(IconWrapper,{$isCustomIcon:isCustomIcon,children:iconToRender}),(0,jsx_runtime.jsx)(Typography.O,{variant:"default",children:label})]}),children]})}const component=Navigation;Navigation.__docgenInfo={description:"A customizable Navigation component that acts as a button with an icon and a label.\nIt can be used for navigation actions within an application.",methods:[],displayName:"Navigation",props:{label:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!0,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""},onKeyDown:{required:!1,tsType:{name:"ReactKeyboardEventHandler",raw:"React.KeyboardEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},ariaDescribedBy:{required:!1,tsType:{name:"string"},description:""},dataTest:{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/Typography/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>component});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),pallete=__webpack_require__("./src/stylesheets/pallete.ts"),typography=__webpack_require__("./src/stylesheets/typography.ts");const variants={default:styled_components_browser_esm.AH`
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
`,Typography=({children,variant="default",as,...props})=>(0,jsx_runtime.jsx)(TypographyStyled,{as,$variant:variant,...props,children}),component=Typography;Typography.__docgenInfo={description:"A typography component that standardizes text styles across the app.\n\nThis component provides multiple semantic variants (header, default, label, helper)\nand allows overriding the rendered HTML element via the `as` prop.",methods:[],displayName:"Typography",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof TYPOGRAPHY_VARIANTS)[number]"},description:"",defaultValue:{value:"'default'",computed:!1}},as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:""}}}},"./src/components/Typography/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>_component__WEBPACK_IMPORTED_MODULE_0__.A});var _component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Typography/component.tsx")},"./src/stylesheets/pallete.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BP:()=>colorDarkGray,Ee:()=>colorErrorDark,GJ:()=>colorHoverDark,GW:()=>colorBackgroundLight,K5:()=>colorHoverLight,XN:()=>colorTextLight,Xg:()=>colorGray,_q:()=>colorBrand1,_r:()=>colorError,bD:()=>colorWhite,bh:()=>colorBackgroundWhite,d5:()=>colorLightGray,eg:()=>colorTextDefault,f$:()=>colorBrand2,hN:()=>colorBorderDefault,kE:()=>colorIconDefault,od:()=>colorBackgroundBlue,qO:()=>colorBorderError,qg:()=>colorNeutral3,xM:()=>colorBrandAux,z2:()=>colorBorderSelected});const colorNeutral3="var(--color-neutral-3, #B0BDC9)",colorWhite="var(--color-neutral-white, #FFFFFF)",colorLightGray="var(--color-light-gray, #F4F6FA)",colorGray="var(--color-gray, #4E5A66)",colorDarkGray="var(--color-dark-gray, #393C48)",colorBrand1_base="var(--color-brand-1, #1D65D4)",colorBrand1=`var(--color-primary, ${colorBrand1_base})`,colorBrand2=`var(--color-brand-2, ${colorBrand1_base})`,colorBrandAux="var(--color-brand-aux, var(--color-brand-light, #E5EFFB))",colorError="var(--color-danger, var(--color-error, #D6232D))",colorErrorDark="var(--color-danger-dark, var(--color-error-dark, #B91C25))",colorBackgroundWhite=`var(--color-background-white, ${colorWhite})`,colorBackgroundLight=`var(--color-background-light, ${colorLightGray})`,colorBackgroundBlue="var(--color-background-blue, var(--color-brand-light, #E5EFFB))",colorBorderSelected=`var(--color-border-selected, ${colorBrand1_base})`,colorBorderError="var(--color-border-error, var(--color-error, #D6232D))",colorBorderDefault=`var(--default-border, ${`var(--color-border-default, ${colorNeutral3})`})`,colorTextDefault=`var(--color-text-default, ${colorDarkGray})`,colorTextLight="var(--color-text-light, var(--color-neutral-2, #717C91))",colorIconDefault="var(--color-icon-default, var(--color-neutral-2, #717C91))",colorHoverDark="var(--color-hover-dark, #1E53AF)",colorHoverLight="var(--color-hover-light, #D4E5FA)"},"./src/stylesheets/sizing.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{IS:()=>borderRadiusDefault,Od:()=>spacingSmallMedium,Pf:()=>spacingSmall,aU:()=>borderRadiusSmall,f5:()=>spacingLarge,he:()=>spacingMedium});const spacingSmall="0.5rem",spacingSmallMedium="0.75rem",spacingMedium="1rem",spacingLarge="1.5rem",borderRadiusDefault="1rem",borderRadiusSmall="0.5rem"},"./src/stylesheets/typography.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G5:()=>fontSizeDefault,WY:()=>fontWeightLight,cQ:()=>fontSizeXSmall,f3:()=>fontSizeBig,hW:()=>fontWeightHard,ms:()=>fontSizeSmall,n3:()=>fontWeightDefault});const fontSizeXSmall="0.75rem",fontSizeSmall="0.875rem",fontSizeDefault="1rem",fontSizeBig="1.125rem",fontWeightHard="700",fontWeightDefault="600",fontWeightLight="400"}}]);
//# sourceMappingURL=components-Navigation-component-stories.3ed324ad.iframe.bundle.js.map