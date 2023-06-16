let employees = JSON.parse(localStorage.getItem('employees'));

function redirectPage() {
    let userName = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let account = {
        userName: userName,
        password: password,
    }

    errorMassage(userName, password);

    if (checkLogin(userName, password)) {
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

    if (checkLogin(userName, password))
        document.getElementById('login-error').innerHTML = '';

}


function checkUserName(userName) {
    let checkUserName = false;
    let user = getUser(userName, password);
    employees.forEach(function (employee) {
        if (userName !== employee.userName)
            checkUserName = false;
    });
    return checkUserName;
}

function checkPassword(password) {
    let checkPassword = true;
    employees.forEach(function (employee) {
        if (password !== employee.password)
            checkPassword = false;
    });
    return checkPassword;
}

function checkLogin(userName, password) {
    let checkLogin = false;
    let user = getUser(userName, password);
    for (let i = 0; i < employees.length; ++i) {
        if (userName === user.userName && password === user.password)
            checkLogin = true;
    }
    return checkLogin;
}

function getUser(userName, password) {
    let user;
    for (let i = 0; i < employees.length; ++i) {
        if (userName === employees[i].userName && password === employees[i].password)
            user = employees[i];
    }
    return user;
}







