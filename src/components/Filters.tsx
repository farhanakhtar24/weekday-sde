// Importing necessary components and hooks from Material UI and React
import {
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";
import { Fragment } from "react";

// Importing the constants for the filters
import { FilterConstants } from "../constants/FilterConstants";

// Defining the type for the props of the Filters component
type Props = {
	// updateFilters is a function that takes an object that is a subset of FiltersInterface
	updateFilters: (arg: Partial<FiltersInterface>) => void;
};

// Defining the Filters component
const Filters = ({ updateFilters }: Props) => {
	// Defining a function to update a specific filter
	const updateFilter = (value: unknown, itemKey: string) => {
		// Creating an object with the key being the itemKey and the value being the value
		const data = {
			[itemKey]: value,
		};

		// Calling the updateFilters function with the data object
		updateFilters(data);
	};

	// Rendering the Filters component
	return (
		<div>
			<Grid container spacing={1}>
				<Grid item xs={12} sm={4}>
					<FormControl fullWidth>
						<TextField
							label="Search Company Name"
							// When the text field changes, update the filter for the company name
							onChange={(e) => {
								updateFilter(
									e.target.value,
									"searchCompanyName"
								);
							}}
						/>
					</FormControl>
				</Grid>
				{/* Mapping over the FilterConstants to create a form control for each one */}
				{FilterConstants.map((item, index) => (
					<Grid item sm={2} xs={6}>
						<FormControl fullWidth>
							<Fragment key={index}>
								<InputLabel id={item.id}>
									{item.label}
								</InputLabel>
								<Select
									id={item.id}
									label={item.label}
									// When the select changes, update the filter for this item
									onChange={(e) => {
										updateFilter(e.target.value, item.id);
									}}>
									<MenuItem value={undefined}>
										{"Any"}
									</MenuItem>
									{/* Mapping over the options for this item to create a menu item for each one */}
									{item.options.map((item) => {
										return (
											<MenuItem value={item.value}>
												{item.label}
											</MenuItem>
										);
									})}
								</Select>
							</Fragment>
						</FormControl>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

// Exporting the Filters component as the default export of this module
export default Filters;
