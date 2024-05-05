// Import necessary modules and hooks
import { useState } from "react";
import styles from "./Wrapper.module.css";
import NavBar from "./NavBar";
import MiniDrawer from "./AppDrawer";
import Filters from "./Filters";
import DrawerHead from "./DrawerHead";
import useFilters from "../hooks/useFilters";
import Feeds from "./Feeds";

// Define the Wrapper component
const Wrapper = () => {
	// Use the useFilters hook to get the list of jobs, a reference to the last element, and a function to update the filters
	const { list, lastElementRef, updateFilters } = useFilters();

	// Define a state variable to control whether the drawer is open
	const [open, setOpen] = useState(false);

	// Define a function to open the drawer
	const handleDrawerOpen = () => {
		setOpen(true);
	};

	// Define a function to close the drawer
	const handleDrawerClose = () => {
		setOpen(false);
	};

	// Render the component
	return (
		<div className={styles["main-wrapper"]}>
			{/* Render the drawer, passing the handleDrawerClose function and the open state */}
			<MiniDrawer handleDrawerClose={handleDrawerClose} open={open} />
			<div className={styles["wrapper-container"]}>
				{/* Render the drawer head */}
				<DrawerHead />
				{/* Render the filters, passing the updateFilters function */}
				<Filters updateFilters={updateFilters} />
				{/* Render the navigation bar, passing the handleDrawerOpen function and the open state */}
				<NavBar handleDrawerOpen={handleDrawerOpen} open={open} />
				{/* Render the feeds, passing the list of jobs and the lastElementRef */}
				<Feeds jobs={list} lastElementRef={lastElementRef} />
			</div>
		</div>
	);
};

// Export the Wrapper component
export default Wrapper;
