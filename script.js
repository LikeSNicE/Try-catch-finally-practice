
// 1 - example

// try{
//   document.querySelector('.active-btn').addEventListener('click', () => console.log('Clicked'))
// }catch(e){
//   console.log(e.message)
// }finally{
//   console.log('finally')
// }


// 2 

// let a = 2; 
// a = a * 5;

// try{
//   document.querySelector('.text').innerHTML = a;
// }catch(e){
//   console.log(e.message + ' 1')
// }finally{
//   console.log('5');
// }


// const t1 = () => {
//   console.log('20')
// }

// console.log(a)
// t1();
// Output :  5, 10 , 20 

// 3 call back of inside try 

// try{
//   try{
//     throw new Error('упс')
//   }catch(e){
//     console.log('Внутренний блок catch', e.message)
//   }finally{
//     console.log('Внутренний finally');
//   }
// }catch(e){
//   console.log('Внешний блок catch' + e.message)
// }

// 4 

// try{
//   try{
//     throw new Error('O sorry')
//   }catch(e){
//      console.log('Внутренний блок catch', e.message)
//      throw e
//   }finally{
//     console.log('Внутренний finally')
//   }
// }catch(e){
//   console.log('Внешний блок catch ' + e.message)
// }

// output:
// "внутренний блок catch" "O sorry"
// "Внутренний finally"
// "Внешний блок catch O sorry"

// 5 

// try {
//   try {
//     throw new Error('упс');
//   }
//   catch (e) {
//     console.error('внутренний блок catch', e.message);
//     throw e;
//   }
//   finally {
//     console.log('finally');
//     return;
//   }
// }
// catch (e) {
//   console.error('внешний блок catch', e.message);
// }

// Output:
// "внутренний блок catch" "упс"
// "finally"
