module.exports = function toReadable (number) {
  if(number === 0) return 'zero';
  let words = {0:'',
    1:'one', 2:'two', 3:'three',  4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine',
    10:'ten', 11:'eleven', 12:'twelve', 13:'thirteen', 14:'fourteen', 15:'fifteen', 16:'sixteen', 17:'seventeen', 18:'eighteen', 19:'nineteen',
    20:'twenty', 30:'thirty', 40:'forty', 50:'fifty', 60:'sixty', 70:'seventy', 80:'eighty', 90:'ninety'
  }
  let result = '';
    function litleHundred(num){
	  let dozens = Math.floor(num / 10);
      return (num in words) ? words[num] : words[dozens * 10] + ' ' + words[num % 10]; 
  }
  if(number < 100){return litleHundred(number)}
  //number = number.toString().split('')
 
 if(number >= 100){
   let hundred = Math.floor(number/100);
   let balance = number % 100;
   result = words[hundred] +' hundred';
   return (balance == 0) ? result : result + ' ' + litleHundred(balance)
 }
}
