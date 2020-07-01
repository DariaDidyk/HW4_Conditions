
// 1. Закончить задачку из классной работы 

let userAge = +prompt('How old are you?');
    if (isNaN(userAge)) {
    alert('Enter the number');
}   else if (userAge >= 18) {
    alert('Welcome');
}   else if (userAge < 12) {
    alert('Use another service!!!');
}   else {
    alert('Access is denied');
}


let ageUser = +prompt('How old are you?');
    console.log('ageUser', ageUser);
    (isNaN(ageUser)) ? alert('Enter the number') :
    (ageUser >= 18) ? alert('Welcome') :
    (ageUser <= 12) ? alert('Use another service!!!') : 
    alert('Access is denied'); 


// 2. Написать опросник для поступления на работу. К примеру, захардкоженные условия требуют, чтобы человек был не младше 30 лет, имел опыт в данной области больше 3-х лет и т.п. Выдать результат: подходит человек на должность, или нет.

let age = +prompt('Сколько Вам лет?');
let workExperience = +prompt('Опыт работы в данном направлении? (Укажите количество лет)');
let hobby = prompt('Ваше хобби?');

switch (hobby) {
    case "книги" :
    case "фильмы"  :
    case "спорт"  :
    case "компьтерные игры" : 
        alert('Ооо неплохо-неплохо');
        break;
    case 'нет' :
        alert('Спасибо за ответ');
}

let education = prompt('Есть ли высшее образование?');

switch (education) {
    case "да" :
        break;     
    case "нет" :
        break;     
}
console.log(age, workExperience, hobby, education);

if ((age > 17 && age < 32) && workExperience >= 2 && hobby !== 'нет' || education === "да") {
    alert('Добро пожаловать на работу');
} else {
    alert("Увы, вы нам не подходите");
}
