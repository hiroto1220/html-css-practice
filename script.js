document.addEventListener("DOMContentLoaded", function() {
    // 画像の src を格納した配列
    const imageSources = [
        "./img/item1.jpg",
        "./img/item2.jpg",
        "./img/item3.jpg",
        "./img/item4.jpg",
        "./img/item5.jpg",
        "./img/item6.jpg",
    ];

    const container = document.getElementById("image-container");

    imageSources.forEach(src => {
        const div = document.createElement("div");
        div.className = "image-wrapper"; 

        const img = document.createElement("img");
        img.src = src;
        img.className = "image"; 

        div.appendChild(img);

        container.appendChild(div);
    });
});
