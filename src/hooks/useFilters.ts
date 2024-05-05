import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useDebounce from "./useDebounce";
import { fetchJobs } from "../action/fetchJobs";

function useFilters() {
	const [listingData, setListingData] = useState<Job[]>([]);
	const [filters, setFilters] = useState<Partial<FiltersInterface>>({});
	const [isFetching, setIsFetching] = useState(false);
	const [offset, setOffset] = useState(0);

	const debouncedFilters = useDebounce(filters, 1000);

	const observer = useRef<IntersectionObserver>();
	const lastElementRef = useCallback(
		(ref: HTMLDivElement | null) => {
			if (isFetching) return;
			if (observer.current) observer.current.disconnect();

			observer.current = new IntersectionObserver((entry) => {
				if (entry[0].isIntersecting) {
					setOffset(offset + 1);
				}
			});

			if (ref) observer.current.observe(ref);
		},
		[isFetching, offset]
	);

	const fetchDatafromAPI = useCallback(async () => {
		try {
			setIsFetching(true);
			const res = await fetchJobs({ limit: 12, offset: offset });
			setListingData([...listingData, ...res.jdList]);
		} catch (error) {
			console.log(error);
		} finally {
			setIsFetching(false);
		}
	}, [listingData, offset]);

	const updateFilters = useCallback(
		async (filterData: Partial<FiltersInterface>) => {
			console.log(filters, filterData);
			setFilters({
				...filters,
				...filterData,
			});
		},
		[filters]
	);

	const list = useMemo(() => {
		console.log("Calling List");
		const data = listingData.filter((item) => {
			if (
				debouncedFilters.experience &&
				(item.minExp < debouncedFilters.experience ||
					item.maxExp > debouncedFilters.experience)
			) {
				return false;
			}

			if (
				debouncedFilters.minimumBasePay &&
				(!item.minJdSalary ||
					item.minJdSalary < debouncedFilters.minimumBasePay)
			)
				return false;

			if (
				debouncedFilters.remote != undefined &&
				(item.location != "remote") == debouncedFilters.remote
			)
				return false;

			if (
				debouncedFilters.role &&
				debouncedFilters.role != "any" &&
				debouncedFilters.role != item.jobRole
			)
				return false;

			if (
				debouncedFilters.searchCompanyName &&
				debouncedFilters.searchCompanyName?.length > 0 &&
				!item.companyName
					.toLowerCase()
					.includes(debouncedFilters.searchCompanyName.toLowerCase())
			)
				return false;

			return true;
		});

		return data;
	}, [debouncedFilters, listingData]);

	useEffect(() => {
		fetchDatafromAPI();
	}, [offset]);

	return {
		filters,
		list,
		lastElementRef,
		updateFilters,
	};
}

export default useFilters;
