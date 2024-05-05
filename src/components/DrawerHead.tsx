import { styled } from "@mui/material";
import React from "react";

type Props = {};

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const DrawerHead = (props: Props) => {
	return <DrawerHeader />;
};

export default DrawerHead;
