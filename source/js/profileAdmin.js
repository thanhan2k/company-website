/*--------------------------  render profile page javascript  -------------------------------- */
// lấy dữ liệu đăng nhập từ login page
let account = JSON.parse(sessionStorage.getItem('account'));
// lấy dữ liệu của các nhân viên trên local storage
let employees = JSON.parse(localStorage.getItem('employees'));
let modal = document.querySelector('.js-edit-modal.admin-profile-modal');

// Hide modal
let closeButton = document.querySelector('.admin-profile-modal .js-modal-closeBtn');
closeButton.addEventListener('click', hideModal);
function hideModal() {
    modal.classList.remove('open');
}

// show Modal
function showModal(idEmployee) {
    modal.classList.add('open');
    let employee;
    for (let i = 0; i < employees.length; ++i) {
        if (idEmployee === employees[i].id)
            employee = employees[i];
    }
    preFillEditModal(employee);
}
function preFillEditModal(employee) {
    document.getElementById('modal-name').value = employee.fullName;

    // Xử lí định dạng date từ localStorage để gán vào value của thẻ input có type là date
    let date = new Date(employee.birthdate);
    date.setDate(date.getDate());
    document.getElementById('modal-brithdate').value = date.toISOString().slice(0, 10);;
    
    // Xử lí checked vào giới tính
    if (employee.gender === 'Nam')
        document.getElementById('male').checked = true;
    else if (employee.gender === 'Nữ')
        document.getElementById('female').checked = true;
    else if (employee.gender === 'Khác')
        document.getElementById('orther').checked = true;

    document.getElementById('position').value = employee.position;

    document.getElementById('department').value = employee.department;

    // Xử lí startDate
    date = new Date(employee.startDate);
    date.setDate(date.getDate());
    document.getElementById('startDate').value = date.toISOString().slice(0, 10);

    document.getElementById('modal-email').value = employee.socialLinks.email;

    document.getElementById('modal-fb').value = employee.socialLinks.facebook;
    document.getElementById('modal-linkedin').value = employee.socialLinks.linkedin;

    // Xử lí experiences
    let experiencesContent = document.querySelector('.modal-content-experiences');
    experiencesContent.innerHTML = '';
    for (let i = 0; i < employee.experiences.length; ++i) {
        experiencesContent.innerHTML += `- ${employee.experiences[i]}.<br>`
    }

    // Xử lí achievements
    let achievementsContent = document.querySelector('.modal-content-achievements');
    achievementsContent.innerHTML = '';
    for (let i = 0; i < employee.achievements.length; ++i) {
        achievementsContent.innerHTML += `- ${employee.achievements[i]}.<br>`
    }
    // giữ lại dữ liệu tí qua update có mà làm
    document.getElementById('idEmployee').value = employee.id;
}

// Save
let saveBtn = document.querySelector('.js-modal-saveBtn');
saveBtn.addEventListener('click', save);
function save() {
    let idEmployee = document.getElementById('idEmployee').value;
    let employee;
    // tableEmployee.innerHTML = '';
    for (let i = 0; i < employees.length; ++i) {
        if (idEmployee === employees[i].id)
            employee = employees[i];
    }
    // update nhân viên
    updateInfo(employee);
    // update trong danh sách nhân viên ngay vị trí cũ
    employees[findIndex(idEmployee)] = employee;
    localStorage.setItem('employees', JSON.stringify(employees));
    let table = createTable(employees);
    fillTable(table);
    hideModal();
}

// ??? sao hàm save không dùng đc hàm getEmployee
// function getEmployee(idEmployee) {
//     let employee;
//     for (let i = 0; i < employees.length; ++i) {
//         if (idEmployee === employees[i].id)
//             employee = employees[i];
//     }
//     return employee;
// }

function findIndex(idEmployee) {
    let index = -1;
    for (let i = 0; i < employees.length; ++i) {
        if (idEmployee === employees[i].id)
            index = i;
    }
    return index;
}

function updateInfo(employee) {
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
    employee.position =  document.getElementById('position').value;
    employee.department = document.getElementById('department').value;
    employee.startDate = new Date(document.getElementById('startDate').value);

    employee.socialLinks.email = document.getElementById('modal-email').value;
    employee.socialLinks.facebook = document.getElementById('modal-fb').value;
    employee.socialLinks.linkedin = document.getElementById('modal-linkedin').value;

    // Xử lí achievements
    let achievementsTextbox = document.querySelector('.modal-textbox.modal-content-achievements');
    let content = achievementsTextbox.innerHTML;
    let achievements = content.split('- ');
    for (let i = 0; i < achievements.length; ++i) {
        achievements[i] = achievements[i].replace('<br>', '').replace('.', '').replace('</div>', '').replace('<div>', '');
    }
    employee.achievements = [];
    for (let i = 1; i < achievements.length; ++i) {
        employee.achievements[i - 1] = achievements[i];
    }

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

function renderPage() {
    let table = createTable(employees);
    fillTable(table);
}


function createTable(employees) {
    let newTable = employees.map((employee) => {
        return  {
            id: employee.id,
            fullName: employee.fullName,
            birthdate: new Date(employee.birthdate).toLocaleDateString('en-GB'),
            position: employee.position,
            department: employee.department,
        }
    })
    return newTable;
}

function fillTable (table) {
    let tableEmployee = document.querySelector('.table-body');
    tableEmployee.innerHTML = `<colgroup>
    <col span="1" style="width: 176px;">
    <col span="1" style="width: 176px;">
    <col span="1" style="width: 176px;">
    <col span="1" style="width: 176px;">
    <col span="1" style="width: 132px;">
    <col span="1" style="width: 44px;">
</colgroup>`;
    for(let i = 0; i < table.length; ++i) {
        tableEmployee.innerHTML += `<tr>
        <td>${table[i].id}</td>
        <td>${table[i].fullName}</td>
        <td>${table[i].birthdate}</td>
        <td>${table[i].position}</td>
        <td>${table[i].department}</td>
        <td class="js-editBtn--admin btn-edit" onclick="showModal('${table[i].id}')"><i class="fa-solid fa-pen" ></i></td>
        </tr>`
    }
}


