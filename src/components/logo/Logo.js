import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    svgHover: {
        fill: theme.palette.foreground.default,
        "&:hover": {
            fill: theme.palette.primary.main,
        },
        transition: "all 0.5s ease",
    },
}));

export const Logo = () => {
    const classes = useStyles();

    return (
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="1080" height="1080" viewBox="0 0 1080 1080" xml:space="preserve">
<defs>
</defs>
<rect x="0" y="0" width="100%" height="100%" fill="transparent"></rect>
<g transform="matrix(1 0 0 1 540 540)" id="685b5e02-9374-4bbb-9afb-c21c7d78927f"  >
</g>
<g transform="matrix(1 0 0 1 540 540)" id="60aa28cd-1699-4a95-b428-5446e7fcde33"  >
<rect style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1; visibility: hidden;" vector-effect="non-scaling-stroke"  x="-540" y="-540" rx="0" ry="0" width="1080" height="1080" />
</g>
<g transform="matrix(0 0 0 0 0 0)"  >
<g style=""   >
</g>
</g>
<g transform="matrix(11.84 0 0 11.84 540 540)"  >
<path style="stroke: rgb(0,191,191); stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,191,191); fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke"  transform=" translate(-50, -50)" d="M 50 92.875 C 26.358 92.875 7.125 73.642 7.125 50 C 7.125 26.358000000000004 26.358 7.125 50 7.125 C 73.642 7.125 92.875 26.358 92.875 50 C 92.875 73.642 73.642 92.875 50 92.875 z M 50 9.125 C 27.461 9.125 9.125 27.461 9.125 50 C 9.125 72.538 27.461 90.875 50 90.875 C 72.538 90.875 90.875 72.538 90.875 50 C 90.875 27.461 72.538 9.125 50 9.125 z" stroke-linecap="round" />
</g>
<g transform="matrix(NaN NaN NaN NaN 0 0)"  >
<g style=""   >
</g>
</g>
<g transform="matrix(NaN NaN NaN NaN 0 0)"  >
<g style=""   >
</g>
</g>
<g transform="matrix(NaN NaN NaN NaN 0 0)"  >
<g style=""   >
</g>
</g>
<g transform="matrix(NaN NaN NaN NaN 0 0)"  >
<g style=""   >
</g>
</g>
<g transform="matrix(8.39 0 0 8.39 571.89 587.19)" style="" id="047e58c2-a7c2-498c-a005-4fc0555c84c7"  >
<text xml:space="preserve" font-family="Raleway" font-size="117" font-style="normal" font-weight="300" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,191,191); fill-rule: nonzero; opacity: 1; white-space: pre;" ><tspan x="-39.02" y="36.75" >B</tspan></text>
</g>
<g transform="matrix(NaN NaN NaN NaN 0 0)"  >
<g style=""   >
</g>
</g>
<g transform="matrix(NaN NaN NaN NaN 0 0)"  >
<g style=""   >
</g>
</g>
</svg>
    );
};
