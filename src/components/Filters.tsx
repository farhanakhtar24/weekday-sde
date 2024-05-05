import {
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";
import { Fragment } from "react";
import { FilterConstants } from "../constants/FilterConstants";

type Props = {
	updateFilters: (arg: Partial<FiltersInterface>) => void;
};

const Filters = ({ updateFilters }: Props) => {
	const updateFilter = (value: unknown, itemKey: string) => {
		const data = {
			[itemKey]: value,
		};

		updateFilters(data);
	};

	return (
		<div>
			<Grid container spacing={1}>
				<Grid item xs={12} sm={4}>
					<FormControl fullWidth>
						<TextField
							label="Search Company Name"
							onChange={(e) => {
								updateFilter(
									e.target.value,
									"searchCompanyName"
								);
							}}
						/>
					</FormControl>
				</Grid>
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
									onChange={(e) => {
										updateFilter(e.target.value, item.id);
									}}>
									<MenuItem value={undefined}>
										{"Any"}
									</MenuItem>
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

export default Filters;
