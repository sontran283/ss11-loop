// Hiển thị các số nguyên tố đầu tiên
let numbers = +prompt("hay nhap mot so nguyen");
let count = 0;
let N = 2;
let check = true;
while (count < numbers) {
    for (let i = 2; i <= (N / 2); i++) {
        if (N % i == 0) {
            check = false;
            break;
        }
    }
    if (check == true) {
        console.log(N);
        count++
    }
    N++
    check = true
}



// Bài 3: Hiển thị ra 20 số trong dãy fibonacci đầu tiên.
// Trông dãy số như thế này: 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610…

// let a = 0;
// let b = 1;
// let x;
// for (let i = 1; i <= 20; i++) {
//     x = a + b
//     a = b
//     b = x
//     document.write(`${x}`)
// }

