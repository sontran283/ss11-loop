// kiem tra 1 so co phai la so nguyen to hay ko
// snt co 2 uoc va no phai >1

// cach 1: dem so uoc cua 1 so
let number = 1024;
let count = 0;
for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
        console.log(i);
        count++
    }
}
if (count == 2) {
    console.log("la so ngto");
} else {
    console.log(("khong la so ngto"));
}

// cach 2: tim xem co uoc nao trong khoang tu 2 den < number hay khong
for (let i = 2; i < number; i++) {
    if (number % i == 0) {
        // ton tai uoc
        console.log(("kp la so nguyen to"));
        break;
    }
}