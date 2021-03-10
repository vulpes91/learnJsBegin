// 1 Переменные

//старый вариант
// var name = 'Alexander'

// //новый вариант
// const sex = 'Male'
// const myName = 'Alexandr' //string
// //let age = 29 //number
// const isCoder = true // boolean
// const monkeyCode = 'Monkey is coding.'

//использовать const преимущественно, если не подразумевается изменение переменной 
// JS позволяет писать без ; однако в некоторых моментах она обязательна 



// 2 JS и типы данных  (мутирование)
// console.log('Hi! My name is ' + myName + ' and my age is ' + age + '. What is happening? ' + monkeyCode)
// //alert('Работает только в браузере')
// //свойтсво alert будет работать только в браузере

// const insertAge = prompt('Введите ваш возраст')
// alert('Ваш возраст равен ' + insertAge)
// alert('Спасибо за ответ')
//данный код попросит ввести (prompt) возраст и выдаст сообщение с тем значением, которое ввёл пользователь


// 3 Операторы 
// let currentYear = 2020
// const birthYear = 1991
// const age = currentYear - birthYear
// //console.log('Ваш возраст: ' + age + ' лет')

// const a = 10
// const b = 5
// let c = 32
// //c = c + a
// c += a
// c += a аналогично записи c = c + a

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(currentYear)
// console.log(--currentYear)
//console.log(c)


//4 Типы данных 
// const isProgrammer = true
// const myName = 'Alexander'
// const age = 29
// let x
// console.log(typeof isProgrammer)
// console.log(typeof myName)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)
// typeof оператор показывает тип данных


//5 приоритет операций 
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence 
// const fullAge = 29
// const birthYear = 1991
// const currentYear = 2021

// const isFullAge = (currentYear - birthYear) >= fullAge
// console.log(isFullAge)
// > < >= <= операторы: строго больше, строго меньше, больше или равно, меньше или равно


//6 Условные операторы 

const coderSkill = 'codeMonkey'

if (coderSkill === 'codeMonkey') {
    console.log('Вам нужно ещё многому научиться')
} //если переменная coderSkill строго равна codeMonkey то выводится сообщение в консоль

if (coderSkill === 'codePro') {
    console.log('Вы уже крутой кодер')
}

const age = '27'

if (age >= 27) {
    console.log('Вам 27 или более лет') //вывод сообщения если переменная age больше или равна 27
} else if (age < 27) {
    console.log('Вам меньше 27 лет') // вывод сообщения если переменная age меньше 27
} else {
    console.log('Что-то сломалось')
}