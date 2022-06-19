
const headOne = document.getElementById("h1") ;
headOne.addEventListener('click', () => {
	headOne.innerHTML = '<h1>Have a Good Time!</h1>';
});

const btnUpdate = document.querySelector('.button');

btnUpdate.addEventListener('click', () => {
	const listContainer = document.querySelector('.listContainer');
	
	if (listContainer.style.display === 'none') {
		btnUpdate.textContent = 'See Less';
		listContainer.style.display = 'block';
	}	else {
		btnUpdate.textContent = 'See more';
		listContainer.style.display = 'none';
	}
});

