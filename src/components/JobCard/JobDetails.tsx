import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

type Props = {
	companyName: string;
	jobRole: string;
	location: string;
	logoUrl: string;
};

const JobDetails = ({ companyName, jobRole, location, logoUrl }: Props) => {
	return (
		<Box
			sx={{
				display: "flex",
				width: "100%",
				gap: "10px",
				alignItems: "center",
			}}>
			<Avatar
				src={logoUrl}
				variant="rounded"
				sx={{
					objectFit: "cover",
					width: 60,
					height: 60,
				}}
			/>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "3px",
					flexGrow: 1,
				}}>
				<Typography
					fontWeight="bold"
					color="GrayText"
					fontSize="0.8rem">
					{companyName}
				</Typography>
				<Typography fontSize="0.9rem" color="black">
					{jobRole}
				</Typography>
				<Typography fontSize="0.8rem" color="GrayText">
					{location}
				</Typography>
			</Box>
		</Box>
	);
};

export default JobDetails;
