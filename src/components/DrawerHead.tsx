import { styled } from "@mui/material";

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const DrawerHead = () => {
	return <DrawerHeader />;
};

export default DrawerHead;
