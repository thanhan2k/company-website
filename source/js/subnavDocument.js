// lấy dữ liệu đăng nhập từ login page
let account = JSON.parse(sessionStorage.getItem('account'));
// lấy dữ liệu của các nhân viên trên local storage
let employees = JSON.parse(localStorage.getItem('employees'));

let headerContent = document.querySelector('.header-content');
let formNames = document.querySelectorAll('.form-name');
let formContents = document.querySelectorAll('.form-content');
let form = document.querySelector('.form-option');
form.addEventListener('click', fillContentForm)
function fillContentForm() {
    form.classList.add('select-option');
    report.classList.remove('select-option');
    documentOption.classList.remove('select-option');
    headerContent.innerHTML = `Danh sách biểu mẫu`;
    for (let i = 0; i < formContents.length/2; ++i) {
        formContents[i].innerHTML = 'Biểu mẫu cho nhân viên';
        formContents[i + formContents.length/2].innerHTML = 'Biểu mẫu cho khách hàng';
    }
    for (let i = 0; i < formNames.length; ++i) {
        formNames[i].innerHTML = `Biểu mẫu ${i+1}`;
    }
}

let report = document.querySelector('.report-option');
report.addEventListener('click', fillContentReport)
function fillContentReport() {
    report.classList.add('select-option');
    form.classList.remove('select-option');
    documentOption.classList.remove('select-option');
    headerContent.innerHTML = `Danh sách báo cáo`;
    for (let i = 0; i < formContents.length; ++i) {
        formContents[i].innerHTML = `Báo cáo đợt ${i+1}`;
    }
    for (let i = 0; i < formNames.length; ++i) {
        formNames[i].innerHTML = `Báo cáo ${i+1}`;
    }
}

let documentOption = document.querySelector('.document-option');
documentOption.addEventListener('click', fillContentDocument)
function fillContentDocument() {
    documentOption.classList.add('select-option');
    form.classList.remove('select-option');
    report.classList.remove('select-option');
    headerContent.innerHTML = `Danh sách tư liệu`;
    for (let i = 0; i < formNames.length; ++i) {
        formNames[i].innerHTML = `Tư liệu ${i+1}`;
    }
    for (let i = 0; i < formContents.length/2; ++i) {
        formContents[i].innerHTML = `Tư liệu nội bộ ${i+1}`;
        formContents[i + formContents.length/2].innerHTML = `Tư liệu về sản phẩm ${i+1}`;
    }
}

async function downloadFile() {
    // Tạo một đường dẫn đến tệp
    const fileUrl = 'Bieumau1.pdf';
    
    // Tải xuống tệp với fetch()
    const response = await fetch(fileUrl);
    const blob = await response.blob();
    
    // Tạo một URL đến blob và sử dụng phương thức download để tải xuống tệp
    const url = window.URL.createObjectURL(blob);
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'Bieumau1.pdf';
    downloadLink.click();
  }

  function showFile() {
    // Tạo một đường dẫn đến tệp
    const fileUrl = '../assets/filePDF/bieumau.pdf';
    
    // Mở tệp trong một tab mới
    window.open(fileUrl, '_blank');
  }