
/*
buat function to_roman isi parameter dengan 'integers'
set num isi angka yg mewakili roman num
set romawi isi dengan roman num dengan urutan yang sama dengan num
buta base casenya integers<1
looping num
jika integer lebih besar atau sama dengan num i maka masukan nilai romawi i ke hasil
kurangi nilai integer dengan nilai num i 
return hasilnya
*/
function to_roman(integers){
    const num = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    
    const romawi = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
    let hasil ='';
    if(integers>3000){
        return integers;
    }
    else if(integers<1){
        return '';
    }
    else{
        for(let i =0; i<num.length;i++){
            while(integers >= num[i]){
                // hasil += romawi[i];
                // integers -= num[i];
                return romawi[i] + to_roman(integers-num[i]);
            }
        }
    }
    
    // return hasil;
    }
    console.log('1 | I|', to_roman(1));
    console.log('4 | IV|', to_roman(4));
    console.log('9 | IX|', to_roman(9));
    console.log('23 | XXIII|', to_roman(23));
    console.log('1453 | MCDLIII|', to_roman(1453));
    console.log('1646 | MDCXLVI|', to_roman(1646));