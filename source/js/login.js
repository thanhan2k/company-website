
function nextHomePage() {
    let userName = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    // check username có rỗng hay không
    if (_.isEmpty(userName)) {
        document.getElementById('username-error').innerHTML =
            'Vui lòng nhập ID đăng nhập!';
    } else {
        document.getElementById('username-error').innerHTML = '';
    }

    //check passwork có rỗng hay không
    if (_.isEmpty(userName)) {
        document.getElementById('password-error').innerHTML =
            'Vui lòng nhập mật khẩu!';
    } else {
        document.getElementById('password-error').innerHTML = '';
    }

    let checkAccount = true;
    // //check user name và password ? chuyển sang home : thông báo lỗi
    let accounts = JSON.parse(localStorage.getItem('accounts'));
    accounts.forEach(function(account) {
        if (userName !== account.userName || password !== account.password)
            checkAccount = false;
    });

    console.log(checkAccount);
    if (checkAccount) {
        window.location.href = "home.html";
    } else {
        document.getElementById('login-error').innerHTML = 'Sai thông tin đăng nhập hoặc mật khẩu!';
    }
}






// let employee = {
//     userName: "an123",
//     fullName: "Tô Thành An",
//     birthdate: new Date(2000 - 09 - 12),
//     gender: "Nam",
//     position: "Developer",
//     department: "B6.10",
//     startDate: new Date(2023 - 01 - 01),
// }

// let employees = [];
// employees.push(employee);

// localStorage.setItem('employees', JSON.stringify(employees))

let account = {
    userName: "an123",
    password: "123456",
}

let accounts = [];
accounts.push(account);
localStorage.setItem('accounts', JSON.stringify(accounts))

