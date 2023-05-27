
// let employee = {
//     userName: "an123",
//     password: "123456",
//     fullName: "Tô Thành An",
//     birthdate: new Date("2000-09-12"),
//     gender: "Nam",
//     department: "B6.10",
//     startDate: new Date("2023-01-01"),
//     position: "Developer",
//     experience: '',
//     achievement: '',
//     socialLinks: {
//     email: 'to.thanhan2k@gmail.com',
//         facebook: 'fb.com',
//         LinkedIn: 'https://www.linkedin.com/',
//     },
// }

// let employees = [];
// employees.push(employee);

// localStorage.setItem('employees', JSON.stringify(employees))


function redirectPage() {
    let userName = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let account = {
        userName: userName,
        password: password,
    }
    console.log(account)

    errorMassage(userName, password);

    if (checkUserName(userName) && checkPassword(password)) {
        window.location.href = "home.html";
        sessionStorage.setItem('account', JSON.stringify(account));
    }
} 


function errorMassage(userName, password) {

    // check username có rỗng hay không
    if (_.isEmpty(userName)) {
        document.getElementById('username-error').innerHTML =
            'Vui lòng nhập ID đăng nhập!';
        document.getElementById('login-error').innerHTML = '';
    } else if (!checkUserName(userName)) {
        document.getElementById('login-error').innerHTML = 'Sai thông tin đăng nhập hoặc mật khẩu!';
        document.getElementById('username-error').innerHTML = '';
    } else {
        document.getElementById('username-error').innerHTML = '';
    }

    //check passwork có rỗng hay không
    if (_.isEmpty(password)) {
        document.getElementById('password-error').innerHTML =
            'Vui lòng nhập mật khẩu!';
        document.getElementById('login-error').innerHTML = '';
    } else if (!checkPassword(password)) {
        document.getElementById('login-error').innerHTML = 'Sai thông tin đăng nhập hoặc mật khẩu!';
        document.getElementById('password-error').innerHTML = '';
    } else {
        document.getElementById('password-error').innerHTML = '';
    }
}


function checkUserName(userName) {
    let employees = JSON.parse(localStorage.getItem('employees'));
    let checkUserName = true;
    employees.forEach(function (employee) {
        if (userName !== employee.userName)
            checkUserName = false;
    });
    return checkUserName;
}

function checkPassword(password) {
    let employees = JSON.parse(localStorage.getItem('employees'));
    let checkPassword = true;
    employees.forEach(function (employee) {
        if (password !== employee.password)
            checkPassword = false;
    });
    return checkPassword;
}





