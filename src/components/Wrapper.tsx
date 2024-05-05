import { useState } from "react";
import styles from "./Wrapper.module.css";
import NavBar from "./NavBar";
import MiniDrawer from "./AppDrawer";
import Filters from "./Filters";
import DrawerHead from "./DrawerHead";
import useFilters from "../hooks/useFilters";
import Feeds from "./Feeds";

type Props = {};

const Wrapper = (props: Props) => {
	const { list, lastElementRef, updateFilters } = useFilters();

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
				<DrawerHead />
				<Filters updateFilters={updateFilters} />
				<NavBar handleDrawerOpen={handleDrawerOpen} open={open} />
				<Feeds jobs={list} lastElementRef={lastElementRef} />
			</div>
		</div>
	);
};

export default Wrapper;
