export const fetchJobs = async ({ limit, offset }) => {
	const res = await fetch(
		"https://api.weekday.technology/adhoc/getSampleJdJSON",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				limit: 10,
				offset: 0,
			}),
		}
	);
	const data = await res.json();
	return data;
};
