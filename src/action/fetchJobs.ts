export const fetchJobs = async ({
	limit,
	offset,
}: {
	limit: number;
	offset: number;
}) => {
	const res = await fetch(
		"https://api.weekday.technology/adhoc/getSampleJdJSON",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				limit: limit,
				offset: offset,
			}),
		}
	);
	const data = await res.json();
	return data;
};
