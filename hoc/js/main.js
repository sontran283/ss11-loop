//                for    lap voi so luong lap biet truoc
//                for    lap voi so luong lap biet truoc
//                for    lap voi so luong lap biet truoc
// for (let i = 0; i < 10; i++) {

// }

// vd : hien thi 100 so tu nhien dau tien
// for (let i = 0; i < 100; i++) {
//     console.log(`so tu nhien thu ${i + 1} la ${i}`);
// }


// let count = 1;
// for (let i = 2; i < 100; i = i + 2) {
//     console.log("lan lap thu " + count);
//     count++;
// }


// su dung js de thay doi noi dung cua 1 the html
// lay ra the tbody thong qua id

// vi du 1:  tao bang cuu chuong 5
// let tbody = document.getElementById("table-body");
// console.log(tbody);
// let str = "";
// for (let i = 1; i <= 10; i++) {
//     str = str + `<tr><td>${i}*5=${i * 5}</td></tr>`
// }
// tbody.innerHTML = str;



// vi du 2:  tinh tong cua 100 so tu nhien dau tien,cua n so tu nhien dau tien
// let n = +prompt("nhap so")
// if (n > 0) {
//     let sum = 0
//     for (let a = 0; a <= n; a++) {
//         sum += a;
//     }
//     document.write(sum)
// }





//                  while      do...while
//                  while      do...while
//                  while      do...while
// while
// let sum = 0;
// let n = 1;
// while (n <= 100) {
//     sum = sum + 1;
//     n++
// }


// vi du : cho phep nhap den so 0 thi no dung lai
// let n = 1;
// while (n != 0) {
//     n = +prompt("nhap so")
// }


// do...while
// let n;
// do {
//     // thuc thi khoi lenh
//     n = +prompt("nhap so")
//     console.log(n);
// } while (n % 2 != 0) //n=0 dk while bi sai. ko thuc thi khoi lenh, thoat khoi


//                break   continue
// break___giup dung va thoat khoi vong lap ngay lap tuc
// for (let i = 1; i < 10; i++) {
//     if (i >= 5) {
//         break;
//     }
//     console.log(i);
// }

// while (true) {
//     let n = +prompt("nhap so")
//     if (n == 0) {
//         // thi dung vong lap
//         break;
//     }
// }


// continue___bo qua tao bo khoi lenh ben duoi, de buoc vao cong lap moi
// for (let i = 1; i < 10; i++) {
//     if (i % 2 == 0) {
//         continue;
//     }
//     console.log(i);
// }


// vong lap long nhau
// for (let i = 1; i < 10; i++) {
//     //  i chay tu 0 den 9
//     for (let j = 1; j <= 10; j++)
//         // voi moi gia tri i, thi j chay tu 1-9
// }

//   bang cuu chuong

// function print() {
//     // lay gia tri cua o input
//     let value = document.getElementById("name").value;


//     ths = "";
//     for (let i = 1; i <= 9; i++) {
//         ths += `<th>${i}x</th>`
//     }
//     document.getElementById("table-head").innerHTML = `<tr>${ths}</tr>`;

//     let trs = "";
//     let thead = document.getElementById("table-body");
//     console.log(thead);
//     for (let i = 1; i <= 10; i++) {
//         let str = "";
//         for (let j = 1; j <= 9; j++) {
//             str = str + `<td>${j} x ${i}=${i * j}</td>`
//         }
//         trs = trs + `<tr>${str}</tr>`
//     }
//     thead.innerHTML = trs;
// }


// bien cuc bo, bien toan cuc
// bien cuc bo nam trong 1 pham vi gioi han
// bien toan cuc ko gioi han pham vi, co the truy cap bat ki noi dau sau khi khai bao no
let global = "Son";
for (let i = 0; i < 10; i++) {
    let local = "nam"
    
}
console.log(local);









