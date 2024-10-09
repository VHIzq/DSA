/* 
? Selection sort
* For i from 0 to n-1:
    *find smallets number between numbers[i] and numbers[n-1]
    *swap smallest numbers with numbers[i]
*/

/* 
? Bubble sort
* Repeat n-1 times
  *For i from 0 to n-2:
    *If number[i] and numbers[i+1] out of order:
      *Swap them
  *If no swaps:
    *Quit

*/

/* 
?Recursion

*If no doors left:
  *Return false
*If number behind middle door:
  *Return true
*Else if number < middle door:
  *Search left half
*Else if number > middle door:
  *Search right half
*/

//! not recursion
const draw = (rows) => {
  for (let index = 0; index < rows; index++) {
    let line = ''; 
    for (let j = 0; j < index + 1; j++) {
      line += '#';
    }
    console.log(line);
  }
}
draw(20)