// 1. Bikin function
// 2. Bikin array nomor
// 3. Bikin array nomor roman
// 4. Bikin base case kalo arguement sama denga nol return string kosong
// 4. Bikin recursive case return roman [x] + call function(arguement minus array nomor[x])

function to_roman(num){

var normal= [1000,900,500,400,100,90,50,40,10,9,5,4,1];
var roman = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
// var word='';
if(num ===0){
  return '' ;
} else {
  for(var x=0; x<normal.length; x++){
  // console.log(normal[x]);
  while(normal[x] <=num){
    return roman[x]+to_roman(num-normal[x]);
  }
}

}
return word;
}
console.log('My totally sweet testing script\n');
console.log('input | expected | actual');
console.log('______|__________|_______');
console.log('4     |IV        |', to_roman(4));
console.log('9     |IX        |', to_roman(9));
console.log('23    |XXIII     |', to_roman(23));
console.log('1453  |MCDLIII   |', to_roman(1453));
console.log('1646  |MCDXLVI   |', to_roman(1646));
