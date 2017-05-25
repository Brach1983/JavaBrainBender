console.log(22+4)            (1)

var numbers = [2, 3, 4];
var sum =0;
numbers.forEach(function(entry) {sum += entry;     (2)
});
console.log(sum);


function toCelcius(f) {
  return (5/9) * (f-32)
 }
var celcius = toCelcius(90);            (3) java

console.log(celcius)



def toCelsius(f)
  (5/9) * (f-32)      3(Ruby)
end

puts toCelsius(90)



var vowell = ["a", "e", "i", "o", "u"]   (4)?



var arr1 = [1, 2, 3, 4, 5, 6]
var arr2 = [1, 2, 3, 4, 5, 6]

var die1 = Math.floor(Math.random(arr1) * 7)
var die2 = Math.floor(Math.random(arr2) * 7)      (5)

console.log (die1)
console.log (die2)



var arr = [6, 8, 10, 12]
var sum = 0
arr.forEach(function(num) {         (6)
  sum += num;
});
var average = sum/arr.length
console.log(average)





var arr = []
for (var i = 0; i < 101; i++){
  arr.push(i);
}

arr.forEach(function(x){
  if(x % 3 === 0 && x % 5 ===0){        (7)
  console.log('fizBuzz');
}
else if (x%3===0) {
  console.log("Fiz");
}
else if(x % 5 ===0) {
  console.log("Buzz");
}
else{
  console.log(x);
}
});




function frac(number){
var num = []
for (var x = 1; x < (number + 1); x++){         (8)
  num.push(x);
}

console.log(num)
var fractorial = 1
num.forEach(function(i) {
  fractorial *= i;
});

console.log(fractorial);
}

frac(6)





function fib(num){
  var fibArr = [0,1,1,2];
  for (var i = 3; i < 100; i++){
  j = fibArr[(i)] + fibArr[(i - 1)]
  fibArr.push(j);
  }
  var fibNum = fibArr[(num - 1)] + fibArr[(num - 2)]      (9)
  console.log(fibNum);
 }

  fib(6);
  fib(7);
  fib(8);
  fib(23);
