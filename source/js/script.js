let nhanVien = {
    ten: "Nguyen Van A",
    ngaySinh: new Date("2023-05-22"),
    gioiTinh: "Nam"
};

// hiển thị nội dung hằng ngày với tên user
document.querySelector('.content-everyday .user-name').innerHTML = nhanVien.ten;

//home page Javascript
function checkBirthDay(nhanVien) {
    let toDay = new Date();
    let ngaySinh = nhanVien.ngaySinh.getDate();
    let thangSinh = nhanVien.ngaySinh.getMonth();

    if (toDay.getDate() === ngaySinh && toDay.getMonth() === thangSinh) {
        return true;
    }
    return false;
};

function showContent() {
    let contentEveryday = document.querySelector('.section--staff .content-everyday')
    let contentBirthday = document.querySelector('.section--staff .content-birthDay')
    let user = document.querySelector('.content-birthDay .user-name')
    if (checkBirthDay(nhanVien)) {
        user.innerHTML = nhanVien.ten;
        contentBirthday.setAttribute('style', 'display: flex');
        contentEveryday.setAttribute('style', 'display: none');
    }
}



