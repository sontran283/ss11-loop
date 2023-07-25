// game doan so, tu 1=>10
// co 3 lan doan, moi lan doan xong, neu sai thi se goi y
// game dừng khi doan dung
let count = 1;
let number;

let random = Math.round(Math.random() * 9) + 1;
console.log(random);
while (count <= 3) {
    number = +prompt("Nhập số muốn đoán  1-10");
    if (count == 3) {
        // nếu lượt đoán thứ 3
        if (number == random) {
            alert("you win");
            break;
        } else {
            alert("you lose");
        }
    } else {
        // chưa đến lượt thứ 3
        if (number == random) {
            alert("you win");
            break;
        } else if (number < random) {
            alert(`Lơn hơn ${number} , bạn còn ${3 - count} lần`);
        } else {
            alert(`Bé hơn ${number} , bạn còn ${3 - count} lần`);
        }
    }
    count++;
}