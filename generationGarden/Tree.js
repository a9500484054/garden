import Apple from "./Apple.js";

const appleClass = new Apple();

// Определяем класс Дерево
export default class Tree {

    constructor(wrapper) {
        this.id = Date.now().toString() + this.getRandomNumber() + this.getRandomNumber(); 
        this.apples = [];
        this.agsTree = 0;
        this.addAll = 0;
        this.treePlant(wrapper);
    }

    treePlant(wrapper) {
        this.fillTreeApples();
        wrapper.appendChild(this.createTreeElement());
    };

    fillTreeApples() {
        for (let index = 0; index < this.getRandomNumber(); index++) {
            this.addApple();
        }
    }

    createTreeElement() {
        
        const colDiv = document.createElement("div");
        colDiv.className = "col-md-1";

        const treeDiv = document.createElement("div");
        treeDiv.id = this.id;
        treeDiv.className = "tree";

        const img = document.createElement("img");
        img.className = "img-tree";
        img.src = "./tree.svg";
        img.alt = "";

        const badgeDiv = document.createElement("div");
        badgeDiv.className = "my-badge";
        badgeDiv.textContent = 'i';

 
        treeDiv.appendChild(img);
        treeDiv.appendChild(badgeDiv);

        colDiv.appendChild(treeDiv);

        return colDiv;
    };

    addApple() {
        const apple = appleClass.createAppel();
        this.apples.push(apple); 
    };


    getRandomNumber() {
        return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    };


    
}

