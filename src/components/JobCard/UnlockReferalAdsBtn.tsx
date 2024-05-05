import {
	Avatar,
	Button,
	ButtonProps,
	Stack,
	Typography,
	styled,
} from "@mui/material";

const UnlockReferralAdsButton = styled(Button)<ButtonProps>(() => ({
	backgroundColor: "#4943da",
	"&:hover": {
		backgroundColor: "#8893F1",
	},
	color: "white",
}));

const UnlockReferalAdsBtn = () => {
	return (
		<UnlockReferralAdsButton
			sx={{
				padding: 2,
			}}>
			<Stack direction={"row"} spacing={-1} alignItems={"center"}>
				<Avatar
					sx={{
						filter: "blur(2px)",
						width: 30,
						height: 30,
					}}
					src={"https://via.placeholder.com/600/771796"}
				/>
				<Avatar
					sx={{
						filter: "blur(2px)",
						width: 30,
						height: 30,
					}}
					src={"https://via.placeholder.com/600/92c952"}
				/>
				<Typography
					sx={{
						textTransform: "none",
						fontWeight: 700,
						pl: 2,
					}}>
					Unlock Referral Asks
				</Typography>
			</Stack>
		</UnlockReferralAdsButton>
	);
};

export default UnlockReferalAdsBtn;
