// lấy dữ liệu đăng nhập từ login page
let account = JSON.parse(sessionStorage.getItem('account'));
// lấy dữ liệu của các nhân viên trên local storage
let employees = JSON.parse(localStorage.getItem('employees'));

let headerContent = document.querySelector('.header-content');
let formNames = document.querySelectorAll('.form-name');
let formContents = document.querySelectorAll('.form-content');

let machine = document.querySelector('.machine-option');
machine.addEventListener('click', fillContentMachine);
function fillContentMachine() {
    machine.classList.add('select-option');
    department.classList.remove('select-option');
    headerContent.innerHTML = `Danh sách máy móc`;
    for (let i = 0; i < formContents.length/2; ++i) {
        formContents[i].innerHTML = 'Máy xử lí thực phẩm';
        formContents[i + formContents.length/2].innerHTML = 'Máy kỹ thuật số';
    }
    for (let i = 0; i < formNames.length; ++i) {
        formNames[i].innerHTML = `Máy móc ${i+1}`;
    }
};

let department = document.querySelector('.Department-option');
department.addEventListener('click', fillContentDepartment);

function fillContentDepartment() {
    machine.classList.remove('select-option');
    department.classList.add('select-option');
    headerContent.innerHTML = `Danh sách phòng họp`;
    for (let i = 0; i < formContents.length; ++i) {
        formContents[i].innerHTML = `Phòng họp số ${i+1}`;
    }
    for (let i = 0; i < formNames.length; ++i) {
        formNames[i].innerHTML = `PH00${i+1}`;
    }
};

let modal = document.querySelector('.modal.js-modal-img');

function showModal() {
    modal.classList.add('open');
}

function hideModal() {
    modal.classList.remove('open');
}