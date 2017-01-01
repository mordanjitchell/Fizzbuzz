function fizzbuzz(){
  var str = " ";
  for (var i = 1; i < 100; i ++){
    if (i % 3 === 0 && i % 5 === 0){
      str += ("FizzBuzz" + " ");
    }
    else if (i % 3 === 0){
      str += ("Fizz" + " ");
    }
    else if(i % 5 === 0){
      str += ("Buzz" + " ");
    }
    else{
      str += (i + " ");
    }
  }
  return str;
}
console.log(fizzbuzz());
