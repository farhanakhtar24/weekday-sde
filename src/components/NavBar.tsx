import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Image } from "@mui/icons-material";

const drawerWidth = 300;

type Props = {
	handleDrawerOpen: () => void;
	open: boolean;
};

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

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

export default NavBar;
