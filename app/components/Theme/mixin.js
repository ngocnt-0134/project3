export const positionMixin = () => `
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`;
export const positionMixinFix = () => `
position: fixed;
top: 50%;
left: 50%;
`;
export const positionMixinAb = () => `
position: absolute;
top: 50%;
left: 50%;
`;
export const positionFix = () => `
position: fixed;
top: 0;
right: 0;
width: 100%;
height: 100%;
z-index: 6;
`;
export const positionAbso = () => `
position: absolute;
top: 0;
right: 0;
width: 100%;
z-index: 6;
`;
export const positionAbsoMax = () => `
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
`;

export const styleCommonLink = () => `
display: inline-block;
text-decoration: none;
text-align: center;
`;

export const hide = () => `
opacity: 0;
visibility: hidden;
`;

export const show = () => `
opacity: 1;
visibility: visible;
`;
export const flexStartMixin = () => `
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
`;
