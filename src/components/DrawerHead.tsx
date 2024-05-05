// Importing the styled function from Material UI
import { styled } from "@mui/material";

// Defining a styled component called DrawerHeader
// This component is a div with some styles applied to it
// The styles make the div display its content in a flex layout, align items in the center, and justify content at the end
// The component also includes some toolbar styles from the theme
const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

// Defining a React component called DrawerHead
// This component renders the DrawerHeader component
const DrawerHead = () => {
	return <DrawerHeader />;
};

// Exporting the DrawerHead component as the default export of this module
export default DrawerHead;
