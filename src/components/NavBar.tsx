// Importing necessary components and hooks from Material UI and React
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// Defining the width of the drawer
const drawerWidth = 300;

// Defining the type for the props of the NavBar component
type Props = {
	// handleDrawerOpen is a function that opens the drawer
	handleDrawerOpen: () => void;
	// open is a boolean that represents whether the drawer is open or not
	open: boolean;
};

// Defining the type for the props of the AppBar component
interface AppBarProps extends MuiAppBarProps {
	// open is a boolean that represents whether the AppBar is open or not
	open?: boolean;
}

// Defining a styled AppBar component
// This component has some styles applied to it based on whether it is open or not
const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

// Defining the NavBar component
// This component renders an AppBar with a Toolbar
// The Toolbar contains an IconButton and a Typography component
const NavBar = ({ handleDrawerOpen, open }: Props) => {
	return (
		<AppBar
			position="fixed"
			open={open}
			sx={{
				backgroundColor: "white",
				color: "black",
			}}>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={handleDrawerOpen}
					edge="start"
					sx={{
						marginRight: 5,
						...(open && { display: "none" }),
					}}>
					<ChevronRightIcon />
				</IconButton>
				<Typography
					variant="h6"
					noWrap
					component="div"
					sx={{
						fontWeight: "medium",
					}}>
					👋 Mohd Farhan
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

// Exporting the NavBar component as the default export of this module
export default NavBar;
