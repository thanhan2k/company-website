let addButton = document.querySelector('.js-addBtn');

addButton.addEventListener('click', showModal)
function showModal() {
    let modal = document.querySelector('.js-modal');
    modal.classList.add('open');
}

let closeButton = document.querySelector('.js-modal-closeBtn');
closeButton.addEventListener('click', hideModal);
function hideModal() {
    let modal = document.querySelector('.js-modal');
    modal.classList.remove('open');
}