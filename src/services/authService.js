export const postData = async (url, data) => {
	try {
		const response = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		return await response.json();
	} catch (error) {
		console.error('Ошибка:', error);
		return ('Сервер не доступен');
	}
}

export const getUserData = async url => {
	try {
		const response = await fetch(url);
		return await response.json();
	} catch (error) {
		console.error('Ошибка:', error);
		return ('Ошибка при загрузке');
	}
}

export const getNews = async url => {
	try {
		const response = await fetch(url);
		return await response.json();
	} catch (error) {
		console.error('Ошибка:', error);
		return ('Ошибка при загрузке');
	}
}