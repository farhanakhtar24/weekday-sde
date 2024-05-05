import { Card, Chip, Grid, Link, Typography, colors } from "@mui/material";
import React from "react";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import JobDetails from "./JobDetails";
import EasyApplyBtn from "./EasyApplyBtn";
import UnlockReferalAdsBtn from "./UnlockReferalAdsBtn";

type Props = {
	jobData: Job;
};

const JobCard = ({ jobData }: Props) => {
	const {
		companyName,
		jdLink,
		jdUid,
		jobDetailsFromCompany,
		jobRole,
		location,
		logoUrl,
		maxExp,
		maxJdSalary,
		minExp,
		salaryCurrencyCode,
		minJdSalary,
	} = jobData;
	return (
		<Grid item xs={12} sm={6} md={4}>
			<Card
				variant="outlined"
				sx={{
					borderRadius: "12px",
					padding: "20px",
					display: "flex",
					flexDirection: "column",
					gap: "10px",
					height: "100%",
					boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
					":hover": {
						boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.5)",
					},
				}}>
				<Chip
					label="⏳ Posted 10 days ago"
					variant="outlined"
					sx={{
						width: "fit-content",
					}}
				/>
				<JobDetails
					companyName={companyName}
					jobRole={jobRole}
					location={location}
					logoUrl={logoUrl}
				/>
				<Typography
					sx={{
						color: colors.blueGrey[800],
					}}>
					Estimated Salary: ₹{minJdSalary || 0}-{maxJdSalary || 0} LPA
				</Typography>
				<Typography>About Company</Typography>
				<Typography
					sx={{
						fontWeight: 700,
					}}>
					About Us
				</Typography>
				<Typography
					sx={{
						overflow: "hidden",
						maskImage:
							"linear-gradient(180deg, #000 50%, transparent)",
						height: 180,
					}}>
					{jobDetailsFromCompany}
				</Typography>
				<Typography
					sx={{
						color: colors.blueGrey[800],
						textAlign: "center",
					}}>
					<Link sx={{ cursor: "pointer" }}>View More</Link>
				</Typography>
				<Typography color={colors.grey[600]} fontWeight={600}>
					Minimum Experience
				</Typography>
				<Typography>{minExp || "Fresher"}</Typography>
				<EasyApplyBtn />
				<UnlockReferalAdsBtn />
			</Card>
		</Grid>
	);
};

export default JobCard;
