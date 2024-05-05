import JobCard from "./JobCard/JobCard";
import { Box, Grid } from "@mui/material";

type Props = {
	jobs: Job[];
	lastElementRef: (arg: HTMLDivElement | null) => void;
};

const Feeds = ({ jobs, lastElementRef }: Props) => {
	return (
		<Box component="main" sx={{ flexGrow: 1, p: 3, minHeight: "100vh" }}>
			{jobs && (
				<Grid
					container
					spacing={2}
					sx={{
						flexGrow: 1,
					}}
					ref={lastElementRef}>
					{jobs.map((job, index) => {
						return <JobCard key={index} jobData={job} />;
					})}
				</Grid>
			)}
		</Box>
	);
};

export default Feeds;
