window.addEventListener('DOMContentLoaded', () => {
	const inputVideo = document.querySelector('#video-input');
	const formContainer = document.querySelector('#form-container');
	const sendButton = document.querySelector('#buttonSend');

	sendButton.addEventListener('click', () => {
		inputVideo.click();
	})

	inputVideo.addEventListener('change', () => {
		formContainer.submit();
	})


})