const allLiItem = document.querySelectorAll("li.item");
console.log(`Number of categories: ${allLiItem.length}`);


allLiItem.forEach(element => {
    
    console.log(`Category: ${element.children[0].textContent}`);
    console.log(`Elements: ${element.children[1].children.length}`);
});







