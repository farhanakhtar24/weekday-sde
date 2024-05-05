// Importing necessary components from Material UI and JobCard component
import JobCard from "./JobCard/JobCard";
import { Box, Grid } from "@mui/material";

// Defining the type for the props of the Feeds component
type Props = {
	// jobs is an array of Job objects
	jobs: Job[];
	// lastElementRef is a function that takes a HTMLDivElement or null as an argument
	lastElementRef: (arg: HTMLDivElement | null) => void;
};

// Defining the Feeds component
const Feeds = ({ jobs, lastElementRef }: Props) => {
	return (
		// Box component is used as the main container
		<Box component="main" sx={{ flexGrow: 1, p: 3, minHeight: "100vh" }}>
			{/* If jobs exist, render a Grid container */}
			{jobs && (
				<Grid
					container
					spacing={2}
					sx={{
						flexGrow: 1,
					}}>
					{/* Mapping over the jobs array to create a JobCard for each job */}
					{jobs.map((job, index) => {
						// If this is the last job in the array, pass the lastElementRef to the JobCard
						if (jobs.length === index + 1) {
							return (
								<JobCard
									lastElementRef={lastElementRef}
									key={index}
									jobData={job}
								/>
							);
						}
						// Otherwise, just create a JobCard without the lastElementRef
						return <JobCard key={index} jobData={job} />;
					})}
				</Grid>
			)}
		</Box>
	);
};

// Exporting the Feeds component as the default export of this module
export default Feeds;
