async function postData(url = "", data = "", token = "") {
	console.log(data)
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
	return await response.json()
}
export default postData;