export const remote = [
	{
		label: "True",
		value: true,
	},
	{
		label: "False",
		value: false,
	},
];

export const roles = [
	{
		label: "Android",
		value: "android",
	},
	{
		label: "Backend",
		value: "backend",
	},
	{
		label: "Data Analyst",
		value: "data analyst",
	},
	{
		label: "Data Science",
		value: "data science",
	},
	{
		label: "Deep Learning",
		value: "deep learning",
	},
	{
		label: "DevOps",
		value: "devops",
	},
	{
		label: "Flutter",
		value: "flutter",
	},
	{
		label: "Frontend",
		value: "frontend",
	},
	{
		label: "Full Stack",
		value: "full stack",
	},
	{
		label: "IOS",
		value: "ios",
	},
	{
		label: "Machine Learning",
		value: "machine learning",
	},
	{
		label: "Tech Lead",
		value: "tech lead",
	},
];

export const minimumExperience = [
	{
		label: "1",
		value: 1,
	},
	{
		label: "2",
		value: 2,
	},
	{
		label: "3",
		value: 3,
	},
	{
		label: "4",
		value: 4,
	},
	{
		label: "5",
		value: 5,
	},
	{
		label: "6",
		value: 6,
	},
	{
		label: "7",
		value: 7,
	},
	{
		label: "8",
		value: 8,
	},
	{
		label: "9",
		value: 9,
	},
	{
		label: "10",
		value: 10,
	},
	{
		label: "11",
		value: 11,
	},
	{
		label: "12",
		value: 12,
	},
	{
		label: "13",
		value: 13,
	},
	{
		label: "14",
		value: 14,
	},
	{
		label: "15",
		value: 15,
	},
];

export const minBasePay = [
	{
		label: ">5",
		value: 5,
	},
	{
		label: "10",
		value: 10,
	},
	{
		label: "20",
		value: 20,
	},
	{
		label: "30",
		value: 30,
	},
	{
		label: "30",
		value: 30,
	},
	{
		label: "40",
		value: 40,
	},
	{
		label: "> 50",
		value: 50,
	},
];

export const locations = [
	{
		label: "Delhi NCR",
		value: "delhi ncr",
	},
	{
		label: "Mumbai",
		value: "mumbai",
	},
	{
		label: "Chennai",
		value: "chennai",
	},
	{
		label: "Bangalore",
		value: "bangalore",
	},
	{
		label: "Hyderabad",
		value: "hyderabad",
	},
	{
		label: "Kolkata",
		value: "kolkata",
	},
	{
		label: "Pune",
		value: "pune",
	},
];

export const FilterConstants = [
	{
		label: "Roles",
		id: "role",
		options: roles,
	},
	{
		label: "Minimum Experience",
		id: "experience",
		options: minimumExperience,
	},
	{
		label: "Remote",
		id: "remote",
		options: remote,
	},
	{
		label: "Minimum Base Pay Salary",
		id: "minimumBasePay",
		options: minBasePay,
	},
] as FormObjectInterface[];
