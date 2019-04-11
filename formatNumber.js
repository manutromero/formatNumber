var formatNumber = {
			separador: ".", // separador para los miles
			sepDecimal: ',', // separador para los decimales
			formatear:function (num){	
			num +='';
			num.slice(0, -2)
			var splitStr = num.split('.')
			var numeroRecortado = splitStr[0].slice(0, -2)
			var splitLeft = numeroRecortado //splitStr[0];
			var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[2] : '';
			var regx = /(\d+)(\d{3})/;
			while (regx.test(splitLeft)) {
			splitLeft = splitLeft.replace(regx, '$1' + this.separador + '$2');
			}
			return this.simbol + splitLeft +splitRight;
			},
			new:function(num, simbol){
			this.simbol = simbol ||'';
			return this.formatear(num);
			}
		 }