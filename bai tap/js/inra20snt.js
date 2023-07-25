// in ra 20 so nguyen to dau tien
let count = 0;
let number = 2;
while (true) {
    if (count == 20) {
        break;
    }
}
let flag = true;   //gia su flag bang true la snt
for (let i = 2; i < number; i++) {  //kiem tra xem co ton tai 1 uoc nao tu 2 den number
    if (number % i == 0) {
        // ton tai 1 uoc
        flag = false;
        break;
    }
    if (flag) {
        console.log(number);
        count++;
    }
    number++;
}