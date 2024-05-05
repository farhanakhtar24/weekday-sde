import { useState } from "react";
import styles from "./Wrapper.module.css";
import NavBar from "./NavBar";
import MiniDrawer from "./AppDrawer";
import Feeds from "./Feeds";
import { styled } from "@mui/material";
import Filters from "./Filters";

type Props = {};

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const Wrapper = (props: Props) => {
	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={styles["main-wrapper"]}>
			<MiniDrawer handleDrawerClose={handleDrawerClose} open={open} />
			<div className={styles["wrapper-container"]}>
				<DrawerHeader />
				<Filters
					updateFilters={(data) => {
						console.log(data);
					}}
				/>
				<NavBar handleDrawerOpen={handleDrawerOpen} open={open} />
				{/* <Feeds /> */}
			</div>
		</div>
	);
};

export default Wrapper;
