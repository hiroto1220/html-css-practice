document.addEventListener("DOMContentLoaded", function() {
    const imageSources = [
        {src:"./img/item10.jpg", itemName:"イス", itemNumber:10,link:"./item.html"},
        {src:"./img/item20.jpg", itemName:"パブりん", itemNumber:7},
        {src:"./img/item7.jpg", itemName:"パブりん", itemNumber:7},
        {src:"./img/item8.jpg", itemName:"パブりん", itemNumber:7},
        {src:"./img/item9.jpg", itemName:"パブりん", itemNumber:7},
        {src:"./img/item11.jpg", itemName:"パブりん", itemNumber:7},
        {src:"./img/item12.jpg", itemName:"パブりん", itemNumber:7},
        {src:"./img/item13.jpg", itemName:"パブりん", itemNumber:7},
        {src:"./img/item14.jpg", itemName:"パブりん", itemNumber:7},
        {src:"./img/item15.jpg", itemName:"パブりん", itemNumber:7},
        {src:"./img/item16.jpg", itemName:"パブりん", itemNumber:7},
    ];

    const container = document.getElementById("image-container");

    const currentURL = window.location.href;

    // 表示する要素の数を決定
    let numberOfItemsToShow;
    if (currentURL.includes("index.html")) {
        numberOfItemsToShow = 8; 
    }else {
        numberOfItemsToShow = imageSources.length; 
    }

    // 要素を追加
    for (let i = 0; i < numberOfItemsToShow; i++) {
        const src = imageSources[i];
        const div = document.createElement("div");
        div.className = "image-wrapper"; 

        const img = document.createElement("img");
        img.src = src.src;
        img.className = "image"; 

        const itemName = document.createElement("p");
        itemName.textContent = src.itemName;
        itemName.className = "item-name";

        const itemNumber = document.createElement("p");
        itemNumber.textContent = src.itemNumber; 
        itemNumber.className = "item-number";

        const link = document.createElement("a");
        link.href = `./item${i+1}.html`
        link.className="link"

        link.appendChild(img);
        link.appendChild(itemName);
        link.appendChild(itemNumber);

        div.appendChild(link);
        container.appendChild(div);
    }
});

document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
});