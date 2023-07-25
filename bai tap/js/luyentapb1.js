// nhap vao 1 so nguyen bat ky va hien thi ra man hinh console
// khi nhap mot so am va dung lại

// cách 1: su dung while
// let n = 0;
// while (n >= 0) {
//     n = +prompt("nhap vao so nguyen")
//     console.log("ban vua nhap vao so :" + n);
// }

// cach 2 su dung do while
let n = 0;
do {
    n = +prompt("nhap vao so nguyen")
    console.log("ban vua nhap vao so :" + n);
} while (n >= 0);