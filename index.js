function roman(input){
    let romanNumeral=['M','MC','D','DC','C','CX','L','LX','X','XI','V','VI','I']
    let arabicNumeral = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    if(input<=0){
        return ""
    }else{
        for (let [index,value] of arabicNumeral.entries()){
            if(input>=value){
                return romanNumeral[index] + roman(input-value) 
            }
        }
    }
}
console.log(roman(24))