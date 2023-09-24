
// Определяем класс Яблоко
export default class Apple {

    createAppel() {
        return {
            id: Math.random().toString(36).substr(2, 9),
            age: Math.floor(Math.random() * 25), 
            typeAge: Math.floor(Math.random() * 2),
            color: 'Зеленое', 
            size: 'Маленький', 
            isSpoiled: 0,
            isFallen: 0,
            status: 'Растет',
            rebirth: 0,
        };
    };
    
    checkApples(apple) {

        if(apple.age >= 9) {
            apple.color = "Желтый"
            apple.size = "Средней"
        } 

        if (apple.age >= 18) {
            apple.color = "Красный"
            apple.size = "Большой"
        }

        if((apple.age >= 28 && !apple.typeAge) || (apple.age >= 32 && apple.typeAge))
            this.fallFromTree(apple);

        if((apple.age > 28 && !apple.typeAge) || (apple.age > 32 && apple.typeAge))
            this.spoil(apple);
    };

    addAge(apple) {
        apple.age = +1;
    };

    fallFromTree(apple) {
        apple.isFallen = 1;
        apple.status = 'Упал с дерева'
    };

    spoil(apple) {
        apple.isSpoiled = 1;
        apple.status = 'Сгнил'
    };

    rebirth(apple) {
        apple.rebirth = 1;
    };

    

}





