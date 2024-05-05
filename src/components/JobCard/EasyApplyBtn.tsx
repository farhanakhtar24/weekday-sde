import { Button, ButtonProps, Typography, styled } from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import { amber } from "@mui/material/colors";

type Props = {};

const EasyApplyButton = styled(Button)<ButtonProps>(() => ({
	backgroundColor: "#54efc3",
	"&:hover": {
		backgroundColor: "#CEFDEA",
	},
}));

const EasyApplyBtn = (props: Props) => {
	return (
		<EasyApplyButton
			sx={{
				display: "flex",
				gap: 1,
				padding: 2,
			}}>
			<ElectricBoltIcon
				sx={{
					color: amber[500],
				}}
			/>
			<Typography
				sx={{
					alignSelf: "center",
					fontWeight: 700,
					textTransform: "none",
					color: "black",
				}}>
				Easy Apply
			</Typography>
		</EasyApplyButton>
	);
};

export default EasyApplyBtn;
