let logoutBtn = document.querySelector('.logout-icon');
let modalMessage = document.querySelector('.js-message-modal');
let closeBtn = document.querySelector('.message-container .modal-closeBtn');
let cancelBtn = document.querySelector('.js-message-modal .cancel-btn');
let confirmBtn = document.querySelector('.js-message-modal .confirm-btn')

logoutBtn.addEventListener('click', () => {
    modalMessage.classList.add('open');
});
closeBtn.addEventListener('click', HideModalMessage);
cancelBtn.addEventListener('click', HideModalMessage);
confirmBtn.addEventListener('click', () => {
    window.location.href = "login.html";
})

function HideModalMessage() {
    modalMessage.classList.remove('open');
}

// Start: redirect profile page


function redirectProfilePage() {
    let employee = getEmployee(account.userName, account.password);
    if(employee.typeAccount === "admin")
        window.location.href = "profileAdmin.html";
    else
    window.location.href = "profile.html";
}

function getEmployee (userName, password) {
    let employee;
    for (let i = 0; i < employees.length; ++i) {
        if (account.userName === employees[i].userName && account.password === employees[i].password)
            employee = employees[i];
    }
    return employee;
}





