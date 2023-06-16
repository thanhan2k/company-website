// lấy dữ liệu đăng nhập từ login page
let account = JSON.parse(sessionStorage.getItem('account'));
// lấy dữ liệu của các nhân viên trên local storage
let employees = JSON.parse(localStorage.getItem('employees'));

// modal "chi tiết công việc"
let jobDetails = document.querySelectorAll('.table-body tr');
let modalJobDetail = document.querySelector('.js-modal-job-details');
let closeBtnForModalJobDetail = document.querySelector('.js-modal-job-details .js-modal-closeBtn');

for (let i = 0; i < jobDetails.length; ++i) {
    jobDetails[i].addEventListener('dblclick', () => {
        modalJobDetail.classList.add('open');
    })
}

closeBtnForModalJobDetail.addEventListener('click', () => {
    modalJobDetail.classList.remove('open');
})
// modal "trả lời công việc"
let replyBtn = document.querySelector('.js-modal-job-details .js-reply-btn');
let modaljobAnswer = document.querySelector('.js-modal-job-answer');
let closeBtnForModalJobAnswer = document.querySelector('.js-modal-job-answer .js-modal-closeBtn');

replyBtn.addEventListener('click', () => {
    modalJobDetail.classList.remove('open');
    modaljobAnswer.classList.add('open');
})

closeBtnForModalJobAnswer.addEventListener('click', () => {
    modaljobAnswer.classList.remove('open');
})
// modal "thêm công việc"
let addJobBtn = document.querySelector('.js-add-btn');
let modalAddJob = document.querySelector('.js-modal-add-job');
let closeBtnModalAddJob = document.querySelector('.js-modal-add-job .js-modal-closeBtn');

closeBtnModalAddJob.addEventListener('click', () => { // edit với add dùng chung
    modalAddJob.classList.remove('open');
})

addJobBtn.addEventListener('click', () => {
    modalHeader.innerHTML = 'Công việc';
    modalAddJob.classList.add('open');
})

// modal "chỉnh sửa công việc"
let editJobBtns = document.querySelectorAll('.table-body .js-edit-btn.edit-job');
let modalEditJob = document.querySelector('.js-modal-edit-job');
let modalHeader = document.querySelector('.js-modal-edit-job.js-modal-add-job .modal-header');

for (let i = 0; i < editJobBtns.length; ++i) {
    editJobBtns[i].addEventListener('click', () => {
        modalHeader.innerHTML = 'Chỉnh sửa công việc';
        modalEditJob.classList.add('open');
    })
}



