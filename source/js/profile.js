/*--------------------------  render profile page javascript  -------------------------------- */
// lấy dữ liệu đăng nhập từ login page
let account = JSON.parse(sessionStorage.getItem('account'));
// lấy dữ liệu của các nhân viên trên local storage
let employees = JSON.parse(localStorage.getItem('employees'));

let renderpage = document.querySelector('body');
renderpage.addEventListener('load', renderProfilePage());

function renderProfilePage() {
    // Lấy ra nhân viên có user-name trùng user-name với tài khoản đã nhập liệu ở login page
    let employee = getEmployee(account.userName, account.password);
    
    fillInfo(employee);
}

function getEmployee (userName, password) {
    let employee;
    for (let i = 0; i < employees.length; ++i) {
        if (account.userName === employees[i].userName && account.password === employees[i].password)
            employee = employees[i];
    }
    return employee;
}

function fillInfo(employee) {
    // lấy data trên localStorage
    let fullName = employee.fullName;
    let birthdate = new Date(employee.birthdate).toLocaleDateString('en-GB');
    let gender = employee.gender;
    let department = employee.department;
    let startDate = new Date(employee.startDate).toLocaleDateString('en-GB');
    let position = employee.position;

    // điền thông tin vào personal-content
    let personalContent = document.querySelector('.js-personal-content');
    personalContent.innerHTML = `<ul>
    <li>Họ và tên: ${fullName} </li>
    <li>Ngày sinh: ${birthdate}</li>
    <li>Giới tính: ${gender}</li>
    <li>Phòng ban: ${department}</li>
    <li>Ngày bắt đầu làm việc: ${startDate}</li>
    <li>Chức vụ: ${position}</li></ul>`;

    // điền thông tin vào socialLinks
    let socialLinks = employee.socialLinks;
    let socialLinkContent = document.querySelector('.js-social-links');
    socialLinkContent.innerHTML = `<h3>Liên kết ngoài</h3><ul>
    <li>Email: ${socialLinks.email} </li>
    <li>Facebook: ${socialLinks.facebook}</li>
    <li>LinkIn: ${socialLinks.linkedin}</li></ul>`

    // điền thông tin vào kinh nghiệm
    let experiences = employee.experiences;
    let experienceList = document.querySelector('.experience-list');
    experienceList.innerHTML = '';
    for (let i = 0; i < experiences.length; ++i) {
        experienceList.innerHTML += `<li>${experiences[i]}</li>`
    }

    // điền thông tin vào thành tích
    let achievements = employee.achievements;
    let achievementList = document.querySelector('.achievement-list');
    achievementList.innerHTML = '';
    for (let i = 0; i < achievements.length; ++i) {
        achievementList.innerHTML += `<li>${achievements[i]}</li>`
    }

    // giữ lại dữ liệu tí qua update có mà làm
    document.getElementById('idEmployee').value = employee.id;
}

function findIndex(idEmployee) {
    let index = -1;
    for (let i = 0; i < employees.length; ++i) {
        if (idEmployee === employees[i].id)
            index = i;
    }
    return index;
}

/*---------------------- edit personal information javascript  --------------------------- */
let saveBtn = document.querySelector('.js-modal-saveBtn')
saveBtn.addEventListener('click', saveInfo);

function saveInfo() {
    // Lấy ra nhân viên có user-name trùng user-name với tài khoản đã nhập liệu ở login page
    let employee = getEmployee(account.userName, account.password);
    let idEmployee = document.getElementById('idEmployee').value;
    updateEmployee(employee);
    employees[findIndex(idEmployee)] = employee;
    localStorage.setItem('employees', JSON.stringify(employees));
    fillInfo(employee);
    hideModal();
}

function updateEmployee(employee) {
    /*CẬP NHẬT LẠI employee SAU KHI NHẬP CÁC TRƯỜNG DỮ LIỆU*/
    employee.fullName = document.getElementById('modal-name').value;

    employee.birthdate = new Date(document.getElementById('modal-brithdate').value);
    // Xử lí chọn ra value của biến gender
    if (document.getElementById('male').checked) {
        employee.gender = document.getElementById('male').value;
    } else if (document.getElementById('female').checked) {
        employee.gender = document.getElementById('female').value;
    } else if (document.getElementById('orther').checked) {
        employee.gender = document.getElementById('orther').value;
    }

    employee.socialLinks.email = document.getElementById('modal-email').value;
    employee.socialLinks.facebook = document.getElementById('modal-fb').value;
    employee.socialLinks.linkedin = document.getElementById('modal-linkedin').value;

    // Xử lí experiences
    let experiencesTextbox = document.querySelector('.modal-textbox.modal-content-experiences');
    content = experiencesTextbox.innerHTML;
    let experiences = content.split('- ');
    for (let i = 0; i < experiences.length; ++i) {
        experiences[i] = experiences[i].replace('<br>', '').replace('.', '').replace('</div>', '').replace('<div>', '');
    }
    employee.experiences = [];
    for (let i = 1; i < experiences.length; ++i) {
        employee.experiences[i - 1] = experiences[i];
    }
}

function preFillEditModal() {
    let employee = getEmployee(account.userName, account.password);

    let fullName = document.getElementById('modal-name');
    fullName.value = employee.fullName;
    // Xử lí định dạng date từ localStorage để gán vào value của thẻ input có type là date
    let date = new Date(employee.birthdate);
    date.setDate(date.getDate());
    document.getElementById('modal-brithdate').value = date.toISOString().slice(0, 10);;
    // console.log(day);
    // Xử lí checked vào giới tính
    if (employee.gender === 'Nam')
        document.getElementById('male').checked = true;
    else if (employee.gender === 'Nữ')
        document.getElementById('female').checked = true;
    else if (employee.gender === 'Khác')
        document.getElementById('orther').checked = true;
    let experiencesContent = document.querySelector('.modal-content-experiences');
    experiencesContent.innerHTML = '';
    for (let i = 0; i < employee.experiences.length; ++i) {
        experiencesContent.innerHTML += `- ${employee.experiences[i]}.<br>`
    }
    let email = document.getElementById('modal-email');
    email.value = employee.socialLinks.email;
    let facebook = document.getElementById('modal-fb');
    facebook.value = employee.socialLinks.facebook;
    let linkedin = document.getElementById('modal-linkedin');
    linkedin.value = employee.socialLinks.linkedin;
}

function findIndex(idEmployee) {
    let index = -1;
    for (let i = 0; i < employees.length; ++i) {
        if (idEmployee === employees[i].id)
            index = i;
    }
    return index;
}