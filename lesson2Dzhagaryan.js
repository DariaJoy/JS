/* Задание 1. */
/*var a = 1,
b = 1,
c, d;
c = ++a;
alert(c);  значение с будет равно 2, т.к. преинкремент ++a добавит значению переменной а единицу и сразу выведет ее значение 
d = b++;
alert(d); значение d будет равно 1, т.к. постинкремент b++ добавит значению переменной b единицу но оставит старое значение b до того, как переменную не вызовут снова 
c = (2 + ++a);
alert(c);  значение с будет равно 5, т.к. преинкремент ++a добавил значению переменной а единицу и сразу вывел ее значение в первом примере, теперь это действие повторяется еще раз, с становиться равно 3, к значению 3 мы прибавляем 2, 3+2=5 
d = (2 + b++);
alert(d);  значение d будет равно 4 т.к. во втором примере мы прибавили единицу в переменную b ее значение стало равно 2. Теперь к переменной b прибавляется еще единица и b становится равно 3, но значение переменной всё еще остается прежним т.е. 2, 2+2=4 
alert(a);  значение a будет равно 3, т.к. в примере c = ++a; и c = (2+ ++a); к переменной a добавили по единице 
alert(b);  значение b будет равно 3, т.к. в примере d = b++; и d = (2+ b++); к переменной b добавили по единице*/ 

/* Задание 2. 
var a = 2;
var x = 1 + (a *= 2); /* Данный пример можно также представить как  x = 1 + (a = a * 2 )  или x = 1 + (2*2); x = 5 
alert(x);*/

/* Задание 3. */

/*var a = 6;
var b = 4;

if (a > 0 && b > 0) {
    x = a - b;
    alert(x);
} else if (a < 0 && b < 0) {
    x = a * b;
    alert(x);
} else {
    x = a + b;
    alert(x);
}

/* Задание 4. */

var a1 = +prompt('Введите число от 1 до 15');
switch (a1) {
    case 1:
        alert('1');
        
    case 2:
        alert('2');
        
    case 3:
        alert('3');
        
    case 4:
        alert('4');
        
    case 5:
        alert('5');
        
    case 6:
        alert('6');
        
    case 7:
        alert('7');
        
    case 8:
        alert('8');
        
    case 9:
        alert('9');
        
    case 10:
        alert('10');
        
    case 11:
        alert('11');
        
    case 12:
        alert('12');
        
    case 13:
        alert('13');
        
    case 14:
        alert('14');
        
    case 15:
        alert('15');
        break;

    default:
        alert('Вы ввели не корректное значение');
        break;
}

/* Задание 5. */

let a = Math.floor(Math.random() * 100);
let b = Math.floor(Math.random() * 100);

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function division(a, b) {
    return a / b;
}

function multiplication(a, b) {
    return a + b;
}

/* Задание 6. */

let arg1= +prompt('Ведите первое число ')
let arg2= +prompt('Ведите второе число ')
let operation = prompt('Ведите арифметический символ ')

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return addition;
        case '-':
            return subtraction;
        case '/':
            return division;
        case '*':
            return multiplication;
    }
}
mathOperation()
/* Задание 7. */

null > 0; // false
null == 0; // false
null >= 0; // true

/* Столь протеворечивые результаты сравнения null и 0 объясняется особенностяи языка JS, когда значения провереяются путем абстрактного алгоритма сравнения для отношений. */

/* Задание 8. */
let val = +prompt('Введите число');
let pow = +prompt('Введите степень числа');

function power(val, pow) {
    if (val === 0) {
        return (1);
    }

    if (pow === 0) {
        return (1);
    }

    if (pow < 0) {
        return (val * power(1 / val, -pow));
    } else {
        return (val * power(val, pow - 1));
    }
}

power();
