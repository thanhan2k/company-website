// lấy dữ liệu đăng nhập từ login page
let account = JSON.parse(sessionStorage.getItem('account'));
// lấy dữ liệu của các nhân viên trên local storage
let employees = JSON.parse(localStorage.getItem('employees'));

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
document.getElementById('date').valueAsDate = new Date()
