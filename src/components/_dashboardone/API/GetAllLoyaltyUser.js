import { host } from '../../../static';

export const GetAllLoyalityUser = ({ setUserData }) => {
	var myHeaders = new Headers();
	myHeaders.append('Content-type', 'application/json');

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
	};

	fetch(`${host}loyalty/get-all-loyalty-user`, requestOptions)
		.then((response) => response.json())
		.then((result) => {
			setUserData(result.data);
		})
		.catch((error) => console.log('error', error));
};
