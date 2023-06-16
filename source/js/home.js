// lấy dữ liệu đăng nhập từ login page
let account = JSON.parse(sessionStorage.getItem('account'));
// lấy dữ liệu của các nhân viên trên local storage
let employees = JSON.parse(localStorage.getItem('employees'));
function showContent() {
    // Lấy ra nhân viên có user-name trùng user-name với tài khoản đã nhập liệu ở login page
    let employee = getEmployee(account.userName, account.password);
    // hiển thị nội dung với tên nhân viên (everday hoặc brithday)
    let user = document.querySelectorAll('.user-name')
    let contentEveryday = document.querySelector('.section--user .content-everyday')
    let contentBirthday = document.querySelector('.section--user .content-birthDay')

    if (checkBirthday(employee.birthdate)) {
        user[1].innerHTML = employee.fullName;
        contentBirthday.setAttribute('style', 'display: flex');
    } else {
        user[0].innerHTML = employee.fullName;
        contentEveryday.setAttribute('style', 'display: block');
    }
}

function getEmployee (userName, password) {
    let employee;
    for (let i = 0; i < employees.length; ++i) {
        if (account.userName === employees[i].userName && account.password === employees[i].password)
            employee = employees[i];
    }
    return employee;
}


function checkBirthday(birthdate) {
    let toDay = new Date();
    let birthday = new Date(birthdate);
    let ngaySinh = birthday.getDate();
    let thangSinh = birthday.getMonth();

    if (toDay.getDate() === ngaySinh && toDay.getMonth() === thangSinh) {
        return true;
    }
    return false;
};