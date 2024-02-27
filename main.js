import './style.css';

let arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

let diagonalDifferenceValue = diagonalDifference(arr);

document.querySelector('#app').innerHTML = `
  <div>
    The diagonal difference is: ${diagonalDifferenceValue}
  </div>
`;

function diagonalDifference(arr) {
  let sumDiagonal1 = 0;
  let sumDiagonal2 = 0;
  let diferenceDiagonal = 0;
  let arraySize = arr.length;

  for (var i = 0; i < arraySize; i++) {
    for (var j = 0; j < arraySize; j++) {
      if (i === j) {
        sumDiagonal1 += arr[i][j];
      }

      if (i + j === arraySize - 1) {
        sumDiagonal2 += arr[i][j];
      }
    }
  }

  diferenceDiagonal = sumDiagonal1 - sumDiagonal2;

  if (diferenceDiagonal < 0) {
    diferenceDiagonal *= -1;
  }

  return diferenceDiagonal;
}
