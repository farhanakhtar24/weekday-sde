import { useMemo } from "react";

export const useList = (listingData, offset, fetchDatafromAPI) => {
	useMemo(() => {
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
				!item.companyName.includes(debouncedFilters.searchCompanyName)
			)
				return false;

			return true;
		});

		return data;
	}, [debouncedFilters, listingData]);
};
