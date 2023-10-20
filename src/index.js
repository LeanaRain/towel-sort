
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0) { //если матрица не существует или ее длина = 0
  return []; //возвращаем пустой массив
  }

let towels = []; //cозлаем пустой массив для хранения полотенец

for (let i = 0; i < matrix.length; i++) { //цикл перебирает строки матрицы по индексу
  if (i % 2 === 0) { //проверяется четное ли значение индекса
    towels = towels.concat(matrix[i]); //если чет - строки добавляются без измненений
  } else {
    towels = towels.concat(matrix[i].reverse()); //иначе переворачиваются в обратном порядке
  }
}
return towels; //возврат отсортированного массива
}
