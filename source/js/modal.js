// modal js
let editButton = document.querySelector('.js-btn-edit');

editButton.addEventListener('click', showModal)
function showModal() {
    let modal = document.querySelector('.js-edit-modal');
    modal.classList.add('open');
    preFillEditModal();
}

let closeButton = document.querySelector('.js-modal-closeBtn');
closeButton.addEventListener('click', hideModal);
function hideModal() {
    let modal = document.querySelector('.js-edit-modal');
    modal.classList.remove('open');
}
