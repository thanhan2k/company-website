// modal js
let editButton = document.querySelector('.js-btn-edit');

editButton.addEventListener('click', showModal)
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

//profile js
// lấy dữ liệu đăng nhập từ login page
let account = JSON.parse(sessionStorage.getItem('account'));
// lấy dữ liệu của các nhân viên trên local storage
let employees = JSON.parse(localStorage.getItem('employees'));
// Lấy ra nhân viên có user-name trùng user-name với tài khoản đã nhập liệu ở login page
let employee;
for (let i = 0; i < employees.length; ++i) {
    if (account.user === employees[i].user)
        employee = employees[i];
}

console.log(employee.socialLink.facebook);

let renderpage = document.querySelector('body');

renderpage.addEventListener('load', renderProfilePage());

function renderProfilePage() {
    console.log(renderpage);
}