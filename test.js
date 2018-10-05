//create function that add together 15 random nubers and console log the sum

var randomAdder = () => {
  tenNumbers = [];
  let number = 0;
  let add = 0;
  total = 0;
  for (let i = 0; i < 15; i++) {
    //get ten numbers
    min = Math.ceil(10);
    max = Math.floor(100);
    number = Math.floor(Math.random() * (max - min)) + min;
    //console.log(number);
    //push numbers to array
    let add = tenNumbers.push(number);
    total += number;
    //sum numbers in array
  }
  //console.log(tenNumbers);
  console.log(total);
};

randomAdder();
