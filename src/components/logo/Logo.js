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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={classes.svgHover}>
  <path d="M42.6 20.6c.9 1.2 1.3 2.7 1.3 4.4c0 1.8-.4 3.2-1.3 4.3c-.5.6-1.2 1.2-2.2 1.7c1.5.5 2.6 1.4 3.4 2.6c.8 1.2 1.1 2.6 1.1 4.3c0 1.7-.4 3.3-1.3 4.6c-.5.9-1.2 1.7-2.1 2.3c-.9.7-2 1.2-3.3 1.5s-2.6.4-4.1.4h-13v-29h14c3.6-.2 6.1.9 7.5 2.9m-15.7 1.9v6.4H34c1.3 0 2.3-.2 3.1-.7s1.2-1.3 1.2-2.5c0-1.4-.5-2.2-1.6-2.7c-.9-.3-2-.5-3.4-.5h-6.4m0 11.2v7.7h7c1.3 0 2.2-.2 2.9-.5c1.3-.6 1.9-1.8 1.9-3.6c0-1.5-.6-2.5-1.8-3.1c-.7-.3-1.7-.5-2.9-.5h-7.1" fill="#ffffff"></path>
</svg>
    );
};
