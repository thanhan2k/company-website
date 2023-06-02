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