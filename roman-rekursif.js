function to_roman(angka){
	var kamusRoman = ['M','XM','D','CD','C','XC','L','XL','X','IX','V','VI','I'];
	var kamusAngka = [1000,900,500,400,100,90,50,40,10,9,5,1];
		if(angka === 0){
			return ''
			}
		for(var i = 0;i<kamusAngka.length;i++){
			if(kamusAngka[i]<=angka){
			return kamusRoman[i] + to_roman(angka - kamusAngka[i])
			}
		}
}

console.log(to_roman(522));