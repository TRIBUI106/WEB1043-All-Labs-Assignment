// Tạo mảng chính (main array/inventory array) lưu trữ các mặt hàng
let inventory = [];

// Tạo 3 đối tượng mặt hàng (items)
let item1 = {
    name: "iPhone",
    model: "15 Pro Max",
    cost: 4999,
    quantity: 100
};

let item2 = {
    name: "Samsung",
    model: "S24 Ultra",
    cost: 3700,
    quantity: 99
};

let item3 = {
    name: "Xiaomi",
    model: "14 Pro Lite",
    cost: 3999,
    quantity: 99
};

// Đưa các đối tượng vào mảng chính
inventory.push(item1);
inventory.push(item2);
inventory.push(item3);

// Xuất mảng inventory ra console
console.log(inventory);

// Truy xuất thuộc tính quantity của item thứ 3, show số 2 vì trong mảng đếm từ 0, vd mảng inventory = [0, 1, 2]
console.log("Quantity của item 3:", inventory[2].quantity);

// Thêm một phần tử mới vào mảng
let item4 = {
    name: "Asus ROG",
    model: "Gaming",
    cost: 9999,
    quantity: 20
};
inventory.push(item4);

// Xuất mảng inventory ra console sau khi thêm phần tử mới
console.log(inventory);

// Truy xuất thuộc tính của item thứ 4
console.log("Item mới đã thêm:", inventory[3]);

// Đề thầy ra riêng : 
// In ra tên của tất cả SP tồn kho
console.log("Tên của các Sản Phẩm tồn kho");
for (let i = 0; i < inventory.length; i++) {
    console.dir(inventory[i].name);
}

console.log("Tổng số lượng các sản phầm tồn kho");
let countQuantity = 0;
for ( let i = 0; i < inventory.length; i++ ) {
    countQuantity += inventory[i].quantity;
    console.log("Sản Phẩm " + inventory[i].name + " " + inventory[i].model 
    + "\t| Tồn kho : " + inventory[i].quantity);
}

console.log("Tổng số lượng các sẩn phẩm \t| Tồn kho : " + countQuantity);
