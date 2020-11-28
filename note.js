function order(words){
  let arr = []
     words.split(' ').map(function(w){
     w.split('').map((a,ind) => isNaN(a) == false? arr[+a - 1] = w : a)
    }).join(' ')
    return arr.join(' ')
}

console.log(order("is2 Thi1s T4est 3a"))

//===============

//This function check a string that has one digit in each of words in random order.

//For instance:
//is2 Thi1s T4est 3a -- string

//You have to from this string make Thi1s is2 3a T4est
//That mean that you have to sort the words over the digits in these string














// function duplicateEncode(word){
// 	let arr = []
// 	let str = ''
// 	word = word.toLowerCase()
// 		for(let i = 0, k = 0; i < word.length; i++){
// 			if(word.includes(word[i], i+1) && !arr.includes(word[i]))
// 			{
// 				arr.push(word[i])
// 			}
// 			if(word[i])
// 			{
// 				str += ')'
// 			}
// 			else
// 			{
// 				str += '('
// 			}
// 		}
// 		return str
// }










// function findOutlier(integers){
// let odd = []
// let even = []
//   for (let i = 0; i < integers.length; i++) {
//     if (Math.abs(integers[i] % 2) == 1) {
//       odd.push(integers[i])
//     }
//     else if(Math.abs(integers[i]) % 2 == 0){
//       even.push(integers[i])
//     }
//   }
//   return even.length > odd.length? odd[0] : even[0]
// }


















// let func = function f(n){
//   return (n == 1)? n : n * f(n - 1)
// }
//
//
// function decorator(func, funcName){
//   return function(){
//     console.log(`Result of ${funcName}: ` + result)
//     let result = func.apply(this, arguments)
//     return result
//   }
// }
//
// func = decorator(func, decorator.name)
//
// func(5)


//  Глобальная переменная для демонстрации
        // var avgScore = "global avgScore";
        //
        // // Функция
        // function avg (arrayOfScores) {
        //     //  Складываем все показатели
        //     var sumOfScores = arrayOfScores.reduce (function (prev, cur) {
        //         return prev + cur;
        //     });
        //
        //     //  В этом случае this будет привязан к глобальному объекту, пока мы не выставим его с call() или apply()
        //     this.avgScore = sumOfScores / arrayOfScores.length;
        // }
        // var gameController = {
        //     scores: [20, 34, 55, 46, 77],
        //     avgScore:null
        // }
        //
        // // Если мы выполним функцию avg, то this внутри функции будет привязана к глобальному объекту:
        // avg (gameController.scores);
        // // Вот, что получаем:
        // console.log (window.avgScore); // 46.4
        // console.log (gameController.avgScore); // null
        //
        // //  Сбрасываем avgScore
        // avgScore = "global avgScore";
        //
        // // Чтобы указать, что значение this привязано к gameController,
        // // Мы вызываем call() метод:
        // avg.call (gameController, gameController.scores);
        //
        // console.log (window.avgScore); //global avgScore
        // console.log (gameController.avgScore); // 46.4



        //  Создаём объект со свойствами и методами
            //  Далее мы передадим метод, как колбэк другой функции
        //     var clientData = {
        //       id: 094545,
        //       fullName: "Not Set",
        //     //  Метод на объекте clientData
        //     setUserName: function (firstName, lastName)  {
        //     //  тут мы выставляем fullName свойство в данном объекте
        //     this.fullName = firstName + " " + lastName;
        //     }
        //     }
        //
        //
        //     function getUserInput (firstName, lastName, callback, callbackObj) {
        //     //  Использование метода apply ниже, выставит this для callbackObj
        //     callback.apply (callbackObj, [firstName, lastName]);
        // }
        //
        //
        //     getUserInput ("Barack", "Obama", clientData.setUserName, clientData);
        //     // Получаем в консоль
        //     console.log (clientData.fullName); // Barack Obama



        // function transitionTo (name) {
        //                     //  Так как объект arguments это массивоподобный объект
        //                     //  Мы можем использовать на нём slice ()
        //                     //  Число один в параметре говорит о том, нужно отдать копию массива от параметра
        //                     //с индексом 1 и до конца. Или простым языком, просто пропустить первый элемент.
        //
        //                     var args = Array.prototype.slice.call (arguments, 1);
        //
        //                     //  Я добавил этот кусочек кода, чтобы мы могли видеть то, что получится в args.
        //
        //                     //  Я закомментировал последнюю строку, потому что она не в тему этого примера.
        //                     //doTransition(this, name, this.updateURL, args);
        //                     return args
        //                 }
        //
        //                 //  Так как метод slice() скопировал все элементы начиная от индекса 1 до конечного, первый элемент “contact” не был отдан.
        //                 console.log(transitionTo ("contact", "Today", "20")); // ["Today", "20"]


  //       var gameController = {
  //     scores  :[20, 34, 55, 46, 77],
  //     avgScore:null,
  //     players: [
  //         {name:"Tommy", playerID:987, age:23},
  //         {name:"Pau", playerID:87, age:33}
  //     ]
  // }
  //
  // var appController = {
  //     scores: [900, 845, 809, 950],
  //     avgScore:null,
  //     avg     :function () {
  //
  //         var sumOfScores = this.scores.reduce (function (prev, cur) {
  //             return prev + cur;
  //         });
  //         this.avgScore = sumOfScores / this.scores.length;
  //     }
  // }
  //
  // //  Обратите внимание, что тут мы используем apply(), так что вторым аргументом должен быть массив
  // appController.avg.apply (gameController);
  // console.log (gameController.avgScore); // 46.4
  //
  // //  appController.avgScore до сих пор null; он не изменился, только gameController.avgScore
  // console.log (appController.avgScore); // null
  //






// function debounce(f, ms){
// let flag = false
//
//   return function(){
//     if (flag) {
//       return
//     }
//     f.apply(this, arguments)
//     flag = true
//     setTimeout(() => flag = false,ms)
//   }
// }
//
// let f = debounce(alert, 1000);
//
// f(1);
// f(2);
//
// setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout( () => f(4), 1100);
// setTimeout( () => f(5), 1500);










// const actions = {
//   i: (_, x) => [_, x + 1],
//   d: (_, x) => [_, x - 1],
//   s: (_, x) => [_, x * x],
//   o: (a, x) => [[...a, x],x]
// }
//
// function parse(data){
//   let num = 0
//   let arr = []
//
//    data.split('').forEach(action => {
//      if (actions[action]) {
//       [arr, num] = actions[action](arr, num);
//      }
//     })
//     return arr
// }
// console.log(parse('iiisdoso'));
//
// const actions = {
//   i: (x) => x + 1,
//   d: (x) => x - 1,
//   s: (x) => x * x,
// }
//
// function parse(data){
//   let num = 0
//   let arr = []
//
//    data.split('').forEach(action => {
//      if (actions[action]) {
//       num = actions[action](num)
//      }
//      else if (action == 'o') {
//        arr.push(num)
//      }
//     })
//     return arr
// }







// let count = parseInt(array1.join(''))
// let count1 = parseInt(array2.join(''))
// let sum = count + count1
//  return `${sum}`.split('').map(item => isNaN(+item)? item.replace(item, 1): +item)






// let arr = []
//    if (numbers == null) {
//      return []
//    }
//    for(let i = 0; i < numbers.length - 1;i++){
//        if (true) {
//          arr.push((numbers[i] + numbers[i + 1]) / 2)
//        }
//    }
//    return arr









// let str = '.'
//  s = s.toLowerCase()
//  s = s.split('').map(w => w.replace(/[aouiyeAOUIYE]/, '.')).join('')
//   for(let i = 0; i < s.length; i++){
//     if (true) {
//       str += s[i]
//     }
//   }
//   return str







// city = city.toLowerCase();
// let obj = {};
// let str = '';
//
// for (let elem of city) {
//     if (!(elem in obj)) {
//         obj[elem] = '*';
//     } else {
//         obj[elem] += '*';
//     }
// }
//
// for (let key in obj) {
//     if (key !== ' ') {
//         str += key + ':' + obj[key] + ',';
//     }
// }
//// return str.substring(0, str.length - 1);
