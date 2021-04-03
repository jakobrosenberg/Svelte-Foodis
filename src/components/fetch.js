async function postData(url = "", data = "", token = "") {
	if (url) url = "?" + url
	const response = await fetch(`http://foodis.dataline.fi/pw/${url}`, {
		method: data ? 'POST' : 'GET',
		mode: 'cors',
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/json',
			...(token ? { Authorization: `Bearer ${token}` } : undefined),
		},
		body: data ? JSON.stringify(data) : null,
	});
	let item = await response.json();
	if (item) {
		return item;
	} else throw new Error(item);
}
export default postData;