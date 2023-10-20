// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const myArr = ['Lee', 'Sergey', 'Nikita', 5, 'Alex', 2, 1, 'Dan', 'Peter', 4, 3];
let count = 0;
console.log(myArr.reduce((a, b) => {
  if (typeof b == "number" && !isNaN(b)) {
    ++count;
    return a += b;
  } else return a
}, 0) / count || 0);

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
const x = prompt('Введіть число x');
const y = prompt('Введіть число y');
const znak = prompt('Введіть знак');

function doMath(x, znak, y) {
  if (~znak.search(/[^+\-*/%^]/) || znak.length !== 1) return 'Помилка';
  return eval(x + znak.replace('^', '**') + y)
}
alert(doMath(x, znak, y))

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

function arrayAdd() {
  let userArray = [];
  let mainArray = prompt('Введіть довжину головного масиву');

  for(let i = 0; i < mainArray; i++) {
    userArray.push([]);

      let subArray = prompt('Введите довжину внутрішнього масиву' + (i + 1));

      for(let j = 0; j < subArray; j++) {
          let elem = prompt("Введіть данні" + (j + 1));
          userArray[i].push([elem]);
      }
  }

  console.log(userArray);
}

let functionResult = arrayAdd();

// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
const stringUser = prompt('Введіть довільне слово');
const firstSymb = prompt('Введіть перший символ який потрібно видалити');
const secondSymbol = prompt('Введіть другий символ який потрібно видалити');

function newString(string, pattern){

  let pt = pattern.join(' ');
  return string.replace(new RegExp(`[${pt}]`, 'gi'), '')
 }
 
 alert (newString(stringUser, [firstSymb, secondSymbol]))
