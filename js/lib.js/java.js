const products=[
{
    name: "Chó cỏ",
    price: 1000000,
    description: "Biết giữ nhà, biết sủa, ăn ngày 3 chén cơm, tối ngủ",
    image: "../assets/images/dog.jpg",
    link: "page2.html" // Đã sửa: Thêm giá trị hợp lệ ở đây thay vì để trống
},
 {
    name: "Con mèo cute phô mai que",
    price: 2500000,
    description: "Meo meo tối ngày",
    image: "../assets/images/meo.jfif",
    link: "page2.html" // Đã sửa: Thêm giá trị hợp lệ ở đây thay vì để trống
},
{
    name: "Súc vật capybara",
    price: 10000,
    description: "Capy chỉ biết ngủ rồi ăn",
    image: "../assets/images/capy.jfif",
    link: "page2.html" // Đã sửa: Thêm giá trị hợp lệ ở đây thay vì để trống
},
{
    name: "Bunny cute phô mai queeee",
    price: 150000,
    description: "Nhảy lăng xăng",
    image: "../assets/images/bunny.jfif",
    link: "page2.html" // Đã sửa: Thêm giá trị hợp lệ ở đây thay vì để trống
},
];

function createItem(obj) {
    // 1. Xác định khung chứa 
    const listProducts = document.getElementById("products-list");
    if (!listProducts) return; // Bảo vệ code nếu không tìm thấy thẻ HTML

    // 2. Tạo container cha có class là item
    const item = document.createElement("div");
    item.setAttribute("class", "item");
    item.style.backgroundColor="rgba(147, 226, 100, 0.2)";

    // 3. Tạo khung chứa ảnh (Đã sửa class thành "image-box")
    const containerImage = document.createElement("div");
    containerImage.setAttribute("class", "image-box");

    // Tạo ảnh
    const img = document.createElement("img");
    img.setAttribute("src", obj.image);
    img.setAttribute("alt", "ảnh con chó");
    img.setAttribute("style", "width: 100%; max-width: 150px; border-radius: 50%");
    
    // Đưa ảnh vào khung chứa ảnh
    containerImage.appendChild(img);

    // 4. Tạo container chứa thông tin sản phẩm (class="info")
    const containerInfo = document.createElement("div");
    containerInfo.setAttribute("class", "info");

    // Tạo <p> chứa tên sản phẩm
    const name = document.createElement("p");
    name.innerHTML = obj.name;

    // Tạo <p> chứa giá sản phẩm (Thêm format VNĐ cho đẹp)
    const price = document.createElement("p");
    price.innerHTML = obj.price.toLocaleString('vi-VN') + " đ";

    // Tạo <p> chứa mô tả
    const description = document.createElement("p");
    description.innerHTML = obj.description;

    // Tạo <a> chứa link chi tiết sản phẩm
    const linkProduct = document.createElement("a");
    linkProduct.innerHTML = "Xem chi tiết";
    linkProduct.setAttribute("href", obj.link); // Dùng luôn thuộc tính link từ object
    linkProduct.setAttribute("class", "btn btn-info");

    // Gán các thẻ con vào khung chứa info
    containerInfo.appendChild(name);
    containerInfo.appendChild(price);
    containerInfo.appendChild(description);
    containerInfo.appendChild(linkProduct);

    // 5. Thêm khung ảnh và khung info vào item cha
    item.appendChild(containerImage);
    item.appendChild(containerInfo);

    // 6. Thêm item vào list-product trên giao diện
    listProducts.appendChild(item);
}

// 7. Gọi hàm để hiển thị sản phẩm ra màn hình

function loadAllProducts(objArray)
{
    const listProducts = document.getElementById("products-list");

    listProducts.style.display= "flex";
    listProducts.style.gap= "40px";
    listProducts.style.flexWrap= "wrap";

    let i;
    for(i = 0; i<objArray.length; i++)
    {
        createItem (objArray[i]);
    }

}