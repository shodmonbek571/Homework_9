// ----- 1-MASALA
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
// function qiymatTekshirish(arr, value) {
//     if (arr.includes(value)) {
//         console.log(value + "qiymati" + arr + "massivida mavjud");
//     } else { 
//         console.log(value + "qiymat" + arr + "massivida mavjud emas");
//     }
// }
// qiymatTekshirish(arr1, 12); 
// qiymatTekshirish(arr1, 8);

// ----- 2-MASALA
// function filterProducts(arr, key, value) {
// return arr.filter(arr => arr[key] === value);
// }
// const products = [
//     { id: 1, name: 'Laptop', brand: 'Dell', price: 999.99 },
//     { id: 2, name: 'Smartphone', brand: 'Samsung', price: 699.99 },
//     { id: 3, name: 'Tablet', brand: 'Apple', price: 499.99 },
//     { id: 4, name: 'Desktop', brand: 'HP', price: 1199.99 },
//   ];

// ----- 3-MASALA
// function totalAge(students) {
//     let totalAge2 = 0;
//     for (let i = 0; i < students.length; i++) {
//         totalAge2 += students[i].age;
//     }   
//     return totalAge2 / students.length;
// }
// const students = [
//     { name: 'Alice', age: 22, grades: [85, 90, 92, 88] },
//     { name: 'Bob', age: 20, grades: [78, 85, 80, 88] },
//   { name: 'Charlie', age: 21, grades: [90, 92, 89, 94] },
//  ];
// console.log(totalAge(students));

// ---- 4-MASALA
// function sortTasksByDeadline(tasks) {
//     tasks.sort((a, b) => {
//       return new Date(a.deadline) - new Date(b.deadline);
//     });
//   }
  
//   const tasks = [
//     { taskName: 'Task A', priority: 'High', deadline: '2023-03-15' },
//     { taskName: 'Task B', priority: 'Medium', deadline: '2023-04-10' },
//     { taskName: 'Task C', priority: 'Low', deadline: '2023-03-01' },
//     { taskName: 'Task D', priority: 'High', deadline: '2023-03-20' },
//   ];
  
//   sortTasksByDeadline(tasks);
  
//   console.log(tasks);
// -----  5-MASALA
function filterValue(arr, min, max) {
    return arr.filter(value => value >= min && value <= max);
}
const numbers = [ 1, 3, 4, 6, 8, 10, 15, 19, 25];

console.log(filterValue(numbers,10, 25));
