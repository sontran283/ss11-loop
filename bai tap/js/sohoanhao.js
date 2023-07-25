// so hoan hao : la so co tong cac uoc nho hon no, or bang chinh no
// uoc cua so 6 : 1,2,3,6  =>1+2+3=6  =>6 la so hoan hao

// kiem tra 1 so nhap vao co phai la so hoan hao hay ko
// b1 nhap vao 1 so
// b2 kiem tra tu 1 => chinh no, neu la uoc cua so do thi thuc hien tinh tong
// b3 ket thuc vong lap, tien hanh so sanh tong thu duoc voi chinh no, va dua ra ket luan
let number = +prompt("nhap vao mot so");
let sum = 0;
for (let i = 1; i < number; i++) {
    if (number % i == 0) {
        sum = sum + i;
    }
}
if (sum == number) {
    alert("la so hoan hao");
} else {
    alert("khong la so hoan hao");
}
