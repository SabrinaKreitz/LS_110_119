let p = console.log;
/*
Write a function that computes the nth Fibonacci number, where nth is an argument passed to the function.

P: 
Create a function that outputs the Fibonacci number indicated by the input argument. The list of Fibonacci numbers starts with the index 1 and we want the number indexed by the input argument. 

D: 
Input: Number > Index, with list starting at 1
Output: Number > target Fibonacci number

A: Create a list of Fibonacci number and output the nth number, with nth being provided as argument to the function. 

CREATE a variable called `fibonacci` and set it to 1
CREATE a variable called `fibonacciLast` and set it to 1
CREATE a variable called `fibonacciBeforeLast` and set it to 0
CREATE called `count` and set it to 1
WHILE count is smaller than inpub variable 
  -SET `fibonacciBeforeLast` to `fibonacciLast`
  -SET `fibonacciLast` to `fibonacci`
  -SET `fibonacci` to `fibonacciBeforeLast` + `fibonacciLast`
  -Increment `count` by 1
RETURN fibonacci
*/

function fibonacci (index) {
  let fibonacci = 1; 
  let fibonacciLast = 0; 
  let fibonacciBeforeLast = 0;
  let count = 1;
  
  while (count < index) {
    fibonacciBeforeLast = fibonacciLast;
    fibonacciLast = fibonacci;
    fibonacci = fibonacciBeforeLast + fibonacciLast;
  
    count ++;
  }
  return fibonacci;
}

p(fibonacci(1));       // 1
p(fibonacci(2));       // 1
p(fibonacci(3));       // 2
p(fibonacci(4));       // 3
p(fibonacci(20));       // 6765
p(fibonacci(50));       // 12586269025