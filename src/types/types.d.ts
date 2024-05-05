interface Job {
	jdUid: string;
	jdLink: string;
	jobDetailsFromCompany: string;
	maxJdSalary: number;
	minJdSalary?: number;
	salaryCurrencyCode: string;
	location: string;
	minExp: number;
	maxExp: number;
	jobRole: string;
	companyName: string;
	logoUrl: string;
}

interface FormObjectInterface {
	label: string;
	id: string;
	options: any[];
}

interface FiltersInterface {
	searchCompanyName: string;
	minimumBasePay: number;
	remote: boolean;
	role: string;
	numberOfEmployees: {
		min: string;
		max: string;
	};
	experience: number;
}
