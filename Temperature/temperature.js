Number.prototype.numberFormat = function(decimals, dec_point, thousands_sep) {
    dec_point = typeof dec_point !== 'undefined' ? dec_point : '.';
    thousands_sep = typeof thousands_sep !== 'undefined' ? thousands_sep : ',';

    var parts = this.toFixed(decimals).split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousands_sep);

    return parts.join(dec_point);
}

function Conversion(input, selA, selB){
    this.num1 = input;
    this.optA = selA;
    this.optB = selB;
    this.convert = function(){
        var F, C, K;
        if (this.optA == "fahrenheit") {
            //////////////////////////////////////////
            F = this.num1;
            C = 5.0/9.0 * (F - 32.0);
            K = C + 273.15;
            //////////////////////////////////////////
            if (this.optB == "fahrenheit") {
                return F.numberFormat(4) + " F&deg;";
            }
            else if (this.optB == "celsius") {
                return C.numberFormat(4) + " C&deg;";
            }
            else if (this.optB == "kelvin"){
                return K.numberFormat(4) + " K";
            }
            else {
                return "Error optB";
            }
            
        }
        else if (this.optA == "celsius") {
            //////////////////////////////////////////
            C = this.num1;
            K = C + 273.15;
            F = (C * 1.8) + 32.0;
            //alert("F = " + F);
            //////////////////////////////////////////
            if (this.optB == "fahrenheit") {
                //alert("F.numberFormat(4) = " + F.numberFormat(4));
                return F.numberFormat(4) + " F&deg;";
            }
            else if (this.optB == "celsius") {
                return C.numberFormat(4) + " C&deg;";
            }
            else if (this.optB == "kelvin"){
                return K.numberFormat(4) + " K";
            }
            else {
                return "Error optB";
            }
        }
        else if (this.optA == "kelvin") {
            /////////////////////////////////////////////
            K = this.num1;
            F = 1.8 * (K - 273.15) + 32.0;
            C = 5/9 * (F - 32.0);
            ////////////////////////////////////////////
            if (this.optB == "fahrenheit") {
                return F.numberFormat(4) + " F&deg;";
            }
            else if (this.optB == "celsius") {
                return C.numberFormat(4) + " C&deg;";
            }
            else if (this.optB == "kelvin"){
                return K.numberFormat(4) + " K";
            }
            else {
                return "Error optB";
            }
        }
        else {
            return "Error optA";    
        }
    }
}