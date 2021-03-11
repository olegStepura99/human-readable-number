module.exports = function toReadable (number) {
    let zero_nine = ['zero', 'one', 'two', 'three', 'four', 'five' , 'six', 'seven', 'eight', 'nine'];
  let ten_nineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let twenty_ninety = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let hundred = 'hundred';
  let num100 = number%100;
  
  
  if(number < 10){
      return zero_nine[number];
  }else if(number >= 10 && number < 20){
    return ten_nineteen[number%10];
  }else if(number >= 20 && number < 100 && number% 10 ===0){
    return twenty_ninety[Math.trunc(number/10)-2];
  }else if(number >= 20 && number < 100){
    return twenty_ninety[Math.trunc(number/10)-2] + ' ' + zero_nine[number % 10];
  }else if(number >= 100 && number < 1000 && num100 === 0){
    return zero_nine[Math.trunc(number/100)] + ' ' + hundred;
  }else if(number >= 100 && number < 1000 && num100 < 10){
    return zero_nine[Math.trunc(number/100)] + ' ' + hundred + " " +zero_nine[num100];
  }else if(number >= 100 && number < 1000 && num100 >= 10 && num100 < 20){
    return zero_nine[Math.trunc(number/100)] + ' ' + hundred + " " + ten_nineteen[num100 % 10];
  }else if(number >= 100 && number < 1000 && num100 % 10 === 0){
    return zero_nine[Math.trunc(number/100)] + ' ' + hundred + " " + twenty_ninety[Math.trunc(num100 / 10) - 2];
  }else if(number >= 100 && number < 1000){
    return zero_nine[Math.trunc(number/100)] + ' ' + hundred + " "+ twenty_ninety[Math.trunc(num100/10)-2] + " " + zero_nine[num100 % 10];
  }
}
