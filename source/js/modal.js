// modal js
let editButton = document.querySelector('.js-btn-edit');
let modal = document.querySelector('.js-edit-modal');

editButton.addEventListener('click', showModal)
function showModal() {
    modal.classList.add('open');
    preFillEditModal();
}

let closeButton = document.querySelector('.user-profile-modal .js-modal-closeBtn');
closeButton.addEventListener('click', hideModal);
function hideModal() {
    modal.classList.remove('open');
}
