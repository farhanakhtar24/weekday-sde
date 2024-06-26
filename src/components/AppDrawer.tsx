// Importing necessary modules and components from Material UI
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

// Define the width of the drawer
const drawerWidth = 300;

// Define the styles for the opened drawer
const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
});

// Define the styles for the closed drawer
const closedMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up("sm")]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

// Define the styles for the drawer header
const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

// Define the styles for the drawer
const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: "nowrap",
	boxSizing: "border-box",
	...(open && {
		...openedMixin(theme),
		"& .MuiDrawer-paper": openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		"& .MuiDrawer-paper": closedMixin(theme),
	}),
}));

// Main component
export default function MiniDrawer({
	handleDrawerClose,
	open,
}: {
	handleDrawerClose: () => void;
	open: boolean;
}) {
	const theme = useTheme();

	// Define the icons for the job section
	const jobIcons = [
		{
			icon: <PersonOutlineOutlinedIcon />,
			text: "My applied jobs",
		},
		{
			icon: <SearchOutlinedIcon />,
			text: "Search jobs",
		},
		{
			icon: <CurrencyRupeeOutlinedIcon />,
			text: "Search salary",
		},
		{
			icon: <PersonAddAltOutlinedIcon />,
			text: "Ask for referral",
		},
	];

	// Define the icons for the more section
	const moreIcon = [
		{
			icon: <ThumbUpOffAltIcon />,
			text: "Recommend from shortlist",
		},
		{
			icon: <ShareIcon />,
			text: "Share",
		},
	];

	// Render the component
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />

			<Drawer variant="permanent" open={open}>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "rtl" ? (
							<ChevronRightIcon />
						) : (
							<ChevronLeftIcon />
						)}
					</IconButton>
				</DrawerHeader>
				<Divider />
				{open ? (
					<Typography
						variant="body2"
						align="left"
						sx={{ padding: 0.5, pt: 2 }}>
						Looking for a job
					</Typography>
				) : (
					<Typography
						variant="body2"
						align="center"
						sx={{ padding: 0.5, pt: 2 }}>
						Get jobs
					</Typography>
				)}
				<List>
					{jobIcons.map((item, index) => (
						<ListItem
							key={index}
							disablePadding
							sx={{ display: "block" }}>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: open ? "initial" : "center",
									px: 2.5,
								}}>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : "auto",
										justifyContent: "center",
										color: "black",
									}}>
									{item.icon}
								</ListItemIcon>
								<ListItemText
									primary={item.text}
									sx={{
										opacity: open ? 1 : 0,
										color: "grey",
									}}
								/>
							</ListItemButton>
						</ListItem>
					))}
				</List>
				<Divider />
				{open ? (
					<Typography
						variant="body2"
						align="left"
						sx={{ padding: 0.5, pt: 2 }}>
						Recommend and earn
					</Typography>
				) : (
					<Typography
						variant="body2"
						align="center"
						sx={{ padding: 0.5, pt: 2 }}>
						Refer
					</Typography>
				)}
				<List>
					{moreIcon.map((item, index) => (
						<ListItem
							key={index}
							disablePadding
							sx={{ display: "block" }}>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: open ? "initial" : "center",
									px: 2.5,
								}}>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : "auto",
										justifyContent: "center",
										color: "black",
									}}>
									{item.icon}
								</ListItemIcon>
								<ListItemText
									primary={item.text}
									sx={{
										opacity: open ? 1 : 0,
										color: "grey",
										typography: "subtitle2",
									}}
								/>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
		</Box>
	);
}
