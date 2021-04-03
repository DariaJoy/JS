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

let a1 = +prompt('Введите число от 1 до 15');
switch (a1) {
    case 1:
        console.log('1');
        
    case 2:
        console.log('2');
        
    case 3:
        console.log('3');
        
    case 4:
        console.log('4');
        
    case 5:
        console.log('5');
        
    case 6:
        console.log('6');
        
    case 7:
        console.log('7');
        
    case 8:
        console.log('8');
        
    case 9:
        console.log('9');
        
    case 10:
        console.log('10');
        
    case 11:
        console.log('11');
        
    case 12:
        console.log('12');
        
    case 13:
        console.log('13');
        
    case 14:
        console.log('14');
        
    case 15:
        console.log('15');
        break;

    default:
        alert('Вы ввели не корректное значение');
        break;
}


/* Задание 5. */

let a = +prompt('Ведите первое число ');
let b = +prompt('Ведите второе число ');

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
    return a * b;
}

/* Задание 6. */

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case addition:
            return arg1 + arg2;
        case subtraction:
            return arg1 - arg2;
        case division:
            return arg1 / arg2;
        case multiplication:
            return arg1 * arg2;
    }
}

alert(mathOperation(a, b, addition));
alert(mathOperation(a, b, subtraction));
alert(mathOperation(a, b, division));
alert(mathOperation(a, b, multiplication));

/* Задание 7. */

null > 0; // false
null == 0; // false
null >= 0; // true

/* Столь протеворечивые результаты сравнения null и 0 объясняется особенностяи языка JS, когда значения провереяются путем абстрактного алгоритма сравнения для отношений. */

/* Задание 8. */

let c = +prompt('Введите число');
let d = +prompt('Введите степень числа');

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

alert(power(c,d));
