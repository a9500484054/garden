import Tree from "./Tree.js";
import Apple from "./Apple.js";

export default class Garden {
    apple = new Apple();

    constructor() {
        this.startDay = 0;
        this.timerId = null;
        this.trees = []; 
    };

    generatorsGarden(selector, treesCount = 0, age = 0) {
        this.age = age;
        this.treesCount = treesCount > 0 ? treesCount : 10;
        this.wrapper = document.querySelector(`${selector}`);
        this.wrapper.innerHTML = "";

        for (let index = 0; index < this.treesCount; index++) {
            this.addTree();
        }
        console.log(this.trees)
    };

    addTree() {
        const tree = new Tree(this.wrapper);
        this.trees.push(tree);
        
    };

    startGarden() {
        this.timerId = setInterval(() => {
            this.passDay();
            if (this.age === 0) {
                clearInterval(this.timerId);
            }
        }, 1000)
    };

    pauseGarden() {
        clearInterval(this.timerId);
    };

    resetGarden() {
        this.pauseGarden();
        this.wrapper.innerHTML = "";
        this.timerId = null;
        this.trees = [];
        this.startDay = 0;
        this.age = null;
        this.treesCount = null;
    };

    passDay() {
        if(this.age <= 1 ) return;
        ++this.startDay;
        document.getElementById('start-timer-garden').textContent = this.startDay;
        document.getElementById('end-timer-garden').textContent = this.age;

        console.log(this.trees)

        this.trees.forEach(apples => {
            apples.agsTree = ++apples.agsTree;

            if(apples.agsTree % 30 === 0) {
                apples.apples.push(this.apple.createAppel());
            };

            apples.apples.forEach(apple => {
                apple.age = ++apple.age;
                this.apple.checkApples(apple);
                if(apple.status === 'Сгнил' && !apple.rebirth && this.trees.length < 100) {
                    this.addTree();
                    this.apple.rebirth(apple);
                };
            });
        });

        this.gardenAnalytics();
    };


    gardenAnalytics() {

        const odj = {
            green: 0,
            yellow: 0,
            red: 0,
            decayed: 0,
            rotten: 0,
            revival: 0,
            all: 0,
        }

        this.trees.forEach(trees => {
            odj.green += trees.apples.filter(el => el.status === 'Растет' && el.color === 'Зеленое').length;
            odj.yellow += trees.apples.filter(el => el.status === 'Растет' && el.color === 'Желтый').length;
            odj.red += trees.apples.filter(el => el.status === 'Растет' && el.color === 'Красный').length;
            odj.decayed += trees.apples.filter(el => el.status === 'Упал с дерева').length;
            odj.rotten += trees.apples.filter(el => el.status === 'Сгнил').length;
            odj.revival += trees.apples.filter(el => el.rebirth).length;
            odj.all = this.trees.length;
        })

        document.querySelectorAll('.contror-panel__count-info').forEach(el => {
            el.textContent = odj[el.dataset.type];
        })

    }

    showInfoTree(id) {
        const tree = this.trees.filter(el => el.id === id);
        console.log(tree)
        console.log(tree.apples)

        const odj = {
            green: 0,
            yellow: 0,
            red: 0,
            decayed: 0,
            rotten: 0,
        }

        tree[0].apples.forEach(trees => {
            if(trees.status === 'Растет' && trees.color === 'Зеленое') odj.green += 1;
            if(trees.status === 'Растет' && trees.color === 'Желтый') odj.yellow += 1;
            if(trees.status === 'Растет' && trees.color === 'Красный') odj.red += 1;
            if(trees.status === 'Упал с дерева') odj.decayed += 1;
            if(trees.status === 'Сгнил') odj.rotten += 1;
        });

        
        
        document.querySelector('.tree-info-wrapper').innerHTML = `
            <ul class="d-flex justify-content-between">
                <li>Яблоки(Зеленые)</li>
                <li>${odj.green}</li>
            </ul>
            <ul class="d-flex justify-content-between">
                <li>Яблоки(Желтый)</li>
                <li>${odj.yellow}</li>
            </ul>
            <ul class="d-flex justify-content-between">
                <li>Яблоки(Красный)</li>
                <li>${odj.red}</li>
            </ul>
            <ul class="d-flex justify-content-between">
                <li>Яблоки(Упал)</li>
                <li>${odj.decayed}</li>
            </ul>
            <ul class="d-flex justify-content-between">
                <li>Яблоки(Сгнил)</li>
                <li>${odj.rotten}</li>
            </ul>
            `
    }
}

