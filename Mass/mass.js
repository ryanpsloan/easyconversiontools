
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
        var oz, lb, T, mg, cg, dcg, g, dkg, hg, kg, MT;
        if (this.optA == "ounces") {
            //alert("In optA ounces statement");
            ///////////////////////////////////////////
            oz = this.num1;
            lb = oz / 16.0;
            T = lb / 2000.0;
            /////////////////////////////////////////
            g = oz * 28.3495;
            dkg = g / 10.0;
            hg = g / 100.0;
            kg = g / 1000.0;
            dcg = g * 10.0;
            cg = g * 100.0;
            mg = g * 1000.0;
            MT = g / 1000000.0;
            /////////////////////////////////////////////
            //alert("variables processed");
            if(this.optB == "ounces") {
                return oz.numberFormat(4) + " oz";
            } 
            else if(this.optB == "pounds"){
                //alert("In optB pounds statement");
                return lb.numberFormat(4) + " lb";
            }
            else if(this.optB == "tons"){
                return T.numberFormat(7) + " T";
            }
            else if(this.optB == "milligrams"){
                return mg.numberFormat(4) + " mg";
            }
            else if(this.optB == "centigrams"){
                return cg.numberFormat(4) + " cg";
            }
            else if(this.optB == "decigrams"){
                return dcg.numberFormat(4) + " dg";
            }
            else if(this.optB == "grams"){
                return g.numberFormat(4) + " g";
            }
            else if(this.optB == "dekagrams"){
                return dkg.numberFormat(4) + " dag";
            }
            else if(this.optB == "hectograms"){
                return hg.numberFormat(4) + " hg";
            }
            else if(this.optB == "kilograms"){
                return kg.numberFormat(4) + " kg";
            }
            else if(this.optB == "mtons"){
                return MT.numberFormat(7) + " MT";
            }
            else{
                return "Error optB";
            }
        }
        else if (this.optA == "pounds") {
            //alert("In optA pounds");
            ///////////////////////////////////////////////
            lb = this.num1;
            oz = lb * 16.0;
            T = lb / 2000.0;
            ////////////////////////////////////////////
            kg = lb * 0.454;
            hg = kg * 10.0;
            dkg = kg * 100.0;
            g = kg * 1000.0;
            dcg = g * 10.0;
            cg = g * 100.0;
            mg = g * 1000.0;
            MT = g / 1000000.0;
            //alert("variables processed oz= " + oz);
            if(this.optB == "ounces") {
                //alert("oz.numberFormat(4) = " + oz.numberFormat(4));
                return oz.numberFormat(4) + " oz";
            }
            else if(this.optB == "pounds"){
                return lb.numberFormat(4) + " lb";
            }
            else if(this.optB == "tons"){
                return T.numberFormat(4) + " T";
            }
            else if(this.optB == "milligrams"){
                return mg.numberFormat(4) + " mg";
            }
            else if(this.optB == "centigrams"){
                return cg.numberFormat(4) + " cg";
            }
            else if(this.optB == "decigrams"){
                return dcg.numberFormat(4) + " dg";
            }
            else if(this.optB == "grams"){
                return g.numberFormat(4) + " g";
            }
            else if(this.optB == "dekagrams"){
                return dkg.numberFormat(4) + " dag";
            }
            else if(this.optB == "hectograms"){
                return hg.numberFormat(4) + " hg";
            }
            else if(this.optB == "kilograms"){
                return kg.numberFormat(4) + " kg";
            }
            else if(this.optB == "mtons"){
                return MT.numberFormat(4) + " MT";
            }
            else{
                return "Error optB";
            }
        }
        else if (this.optA == "tons") {
            //////////////////////////////////////////
            T = this.num1;
            lb = T * 2000.0;
            oz = lb * 16.0;
            //////////////////////////////////////////
            kg = lb * 0.453592;
            hg = kg * 10.0;
            dkg = kg * 100.0;
            g = kg * 1000.0;
            dcg = g * 10.0;
            cg = g * 100.0;
            mg = g * 1000.0;
            MT = g / 1000000.0;
            if(this.optB == "ounces") {
                return oz.numberFormat(4) + " oz";
            }
            else if(this.optB == "pounds"){
                return lb.numberFormat(4) + " lb";
            }
            else if(this.optB == "tons"){
                return T.numberFormat(4) + " T";
            }
            else if(this.optB == "milligrams"){
                return mg.numberFormat(4) + " mg";
            }
            else if(this.optB == "centigrams"){
                return cg.numberFormat(4) + " cg";
            }
            else if(this.optB == "decigrams"){
                return dcg.numberFormat(4) + " dg";
            }
            else if(this.optB == "grams"){
                return g.numberFormat(4) + " g";
            }
            else if(this.optB == "dekagrams"){
                return dkg.numberFormat(4) + " dag";
            }
            else if(this.optB == "hectograms"){
                return hg.numberFormat(4) + " hg";
            }
            else if(this.optB == "kilograms"){
                return kg.numberFormat(4) + " kg";
            }
            else if(this.optB == "mtons"){
                return MT.numberFormat(4) + " MT";
            }
            else{
                return "Error optB";
            }
        }
        else if (this.optA == "milligrams") {
            /////////////////////////////////
            mg = this.num1;
            cg = mg / 10.0;
            dcg = mg / 100.0;
            g = mg / 1000.0;
            dkg = g / 10.0;
            hg = g / 100.0;
            kg = g / 1000.0;
            MT = g / 1000000.0;
            ///////////////////////////////////
            oz = g * 0.035;
            lb = oz * 16.0;
            T = lb * 2000.0;
            ///////////////////////////////////
            if(this.optB == "ounces") {
                return oz.numberFormat(4) + " oz";
            }
            else if(this.optB == "pounds"){
                return lb.numberFormat(4) + " lb";
            }
            else if(this.optB == "tons"){
                return T.numberFormat(4) + " T";
            }
            else if(this.optB == "milligrams"){
                return mg.numberFormat(4) + " mg";
            }
            else if(this.optB == "centigrams"){
                return cg.numberFormat(4) + " cg";
            }
            else if(this.optB == "decigrams"){
                return dcg.numberFormat(4) + " dg";
            }
            else if(this.optB == "grams"){
                return g.numberFormat(4) + " g";
            }
            else if(this.optB == "dekagrams"){
                return dkg.numberFormat(4) + " dag";
            }
            else if(this.optB == "hectograms"){
                return hg.numberFormat(4) + " hg";
            }
            else if(this.optB == "kilograms"){
                return kg.numberFormat(4) + " kg";
            }
            else if(this.optB == "mtons"){
                return MT.numberFormat(7) + " MT";
            }
            else{
                return "Error optB";
            }
        }
        else if (this.optA == "centigrams") {
           ////////////////////////////////////
            cg = this.num1;
            mg = cg * 10.0;
            dcg = cg / 10.0;
            g = cg / 100.0;
            dkg = g / 10.0;
            hg = g / 100.0;
            kg = g / 1000.0;
            MT = g / 1000000.0;
            //////////////////////////////
            oz = g * 0.035;
            lb = oz * 16.0;
            T = lb * 2000.0;
            ///////////////////////////////////
            if(this.optB == "ounces") {
                return oz.numberFormat(4) + " oz";
            }
            else if(this.optB == "pounds"){
                return lb.numberFormat(4) + " lb";
            }
            else if(this.optB == "tons"){
                return T.numberFormat(4) + " T";
            }
            else if(this.optB == "milligrams"){
                return mg.numberFormat(4) + " mg";
            }
            else if(this.optB == "centigrams"){
                return cg.numberFormat(4) + " cg";
            }
            else if(this.optB == "decigrams"){
                return dcg.numberFormat(4) + " dg";
            }
            else if(this.optB == "grams"){
                return g.numberFormat(4) + " g";
            }
            else if(this.optB == "dekagrams"){
                return dkg.numberFormat(4) + " dag";
            }
            else if(this.optB == "hectograms"){
                return hg.numberFormat(4) + " hg";
            }
            else if(this.optB == "kilograms"){
                return kg.numberFormat(4) + " kg";
            }
            else if(this.optB == "mtons"){
                return MT.numberFormat(4) + " MT";
            }
            else{
                return "Error optB";
            }
        }
        else if (this.optA == "decigrams") {
            ////////////////////////////////////////
            dcg = this.num1;
            cg = dcg * 10.0;
            mg = dcg * 100.0; 
            g = dcg / 10.0;
            dkg = g / 10.0;
            hg = g / 100.0;
            kg = g / 1000.0;
            MT = g / 1000000.0;
            ///////////////////////////////////////
            oz = g * 0.035;
            lb = oz * 16.0;
            T = lb * 2000.0;
            ///////////////////////////////////
            if(this.optB == "ounces") {
                return oz.numberFormat(4) + " oz";
            }
            else if(this.optB == "pounds"){
                return lb.numberFormat(4) + " lb";
            }
            else if(this.optB == "tons"){
                return T.numberFormat(4) + " T";
            }
            else if(this.optB == "milligrams"){
                return mg.numberFormat(4) + " mg";
            }
            else if(this.optB == "centigrams"){
                return cg.numberFormat(4) + " cg";
            }
            else if(this.optB == "decigrams"){
                return dcg.numberFormat(4) + " dg";
            }
            else if(this.optB == "grams"){
                return g.numberFormat(4) + " g";
            }
            else if(this.optB == "dekagrams"){
                return dkg.numberFormat(4) + " dag";
            }
            else if(this.optB == "hectograms"){
                return hg.numberFormat(4) + " hg";
            }
            else if(this.optB == "kilograms"){
                return kg.numberFormat(4) + " kg";
            }
            else if(this.optB == "mtons"){
                return MT.numberFormat(4) + " MT";
            }
            else{
                return "Error optB";
            }
        }
        else if (this.optA == "grams") {
            /////////////////////////////////////////
            g = this.num1;
            dcg = g * 10.0;
            cg = g * 100.0;
            mg = g * 1000.0;
            dkg = g / 10.0;
            hg = g / 100.0;
            kg = g / 1000.0;
            MT = g / 1000000.0;
            //////////////////////////////////
            oz = g * 0.035;
            lb = oz * 16.0;
            T = lb * 2000.0;
            ///////////////////////////////////
            if(this.optB == "ounces") {
                return oz.numberFormat(4) + " oz";
            }
            else if(this.optB == "pounds"){
                return lb.numberFormat(4) + " lb";
            }
            else if(this.optB == "tons"){
                return T.numberFormat(4) + " T";
            }
            else if(this.optB == "milligrams"){
                return mg.numberFormat(4) + " mg";
            }
            else if(this.optB == "centigrams"){
                return cg.numberFormat(4) + " cg";
            }
            else if(this.optB == "decigrams"){
                return dcg.numberFormat(4) + " dg";
            }
            else if(this.optB == "grams"){
                return g.numberFormat(4) + " g";
            }
            else if(this.optB == "dekagrams"){
                return dkg.numberFormat(4) + " dag";
            }
            else if(this.optB == "hectograms"){
                return hg.numberFormat(4) + " hg";
            }
            else if(this.optB == "kilograms"){
                return kg.numberFormat(4) + " kg";
            }
            else if(this.optB == "mtons"){
                return MT.numberFormat(4) + " MT";
            }
            else{
                return "Error optB";
            }
        }
        else if (this.optA == "dekagrams") {
            ////////////////////////////////////
            dkg = this.num1;
            g = dkg * 10.0;
            dcg = g * 10.0;
            cg = g * 100.0;
            mg = g * 1000.0;
            hg = g / 100.0;
            kg = g / 1000.0;
            MT = g / 1000000.0;
            ////////////////////////////////////
            oz = g * 0.035;
            lb = oz * 16.0;
            T = lb * 2000.0;
            ///////////////////////////////////
            if(this.optB == "ounces") {
                return oz.numberFormat(4) + " oz";
            }
            else if(this.optB == "pounds"){
                return lb.numberFormat(4) + " lb";
            }
            else if(this.optB == "tons"){
                return T.numberFormat(4) + " T";
            }
            else if(this.optB == "milligrams"){
                return mg.numberFormat(4) + " mg";
            }
            else if(this.optB == "centigrams"){
                return cg.numberFormat(4) + " cg";
            }
            else if(this.optB == "decigrams"){
                return dcg.numberFormat(4) + " dg";
            }
            else if(this.optB == "grams"){
                return g.numberFormat(4) + " g";
            }
            else if(this.optB == "dekagrams"){
                return dkg.numberFormat(4) + " dag";
            }
            else if(this.optB == "hectograms"){
                return hg.numberFormat(4) + " hg";
            }
            else if(this.optB == "kilograms"){
                return kg.numberFormat(4) + " kg";
            }
            else if(this.optB == "mtons"){
                return MT.numberFormat(4) + " MT";
            }
            else{
                return "Error optB";
            }
        }
        else if (this.optA == "hectograms") {
            /////////////////////////////////////////////
            hg = this.num1;
            dkg = hg * 10.0;
            g = hg * 100.0;
            dcg = g * 10.0;
            cg = g * 100.0;
            mg = g * 1000.0;
            kg = g / 1000.0;
            MT = g / 1000000.0;
            //////////////////////////////////////////
            oz = g * 0.035;
            lb = oz * 16.0;
            T = lb * 2000.0;
            ///////////////////////////////////
            if(this.optB == "ounces") {
                return oz.numberFormat(4) + " oz";
            }
            else if(this.optB == "pounds"){
                return lb.numberFormat(4) + " lb";
            }
            else if(this.optB == "tons"){
                return T.numberFormat(4) + " T";
            }
            else if(this.optB == "milligrams"){
                return mg.numberFormat(4) + " mg";
            }
            else if(this.optB == "centigrams"){
                return cg.numberFormat(4) + " cg";
            }
            else if(this.optB == "decigrams"){
                return dcg.numberFormat(4) + " dg";
            }
            else if(this.optB == "grams"){
                return g.numberFormat(4) + " g";
            }
            else if(this.optB == "dekagrams"){
                return dkg.numberFormat(4) + " dag";
            }
            else if(this.optB == "hectograms"){
                return hg.numberFormat(4) + " hg";
            }
            else if(this.optB == "kilograms"){
                return kg.numberFormat(4) + " kg";
            }
            else if(this.optB == "mtons"){
                return MT.numberFormat(4) + " MT";
            }
            else{
                return "Error optB";
            }
        }
        else if (this.optA == "kilograms") {
            /////////////////////////////////////////
            kg = this.num1;
            hg = kg * 10.0;
            dkg = kg * 100.0;
            g = kg * 1000.0;
            dcg = g * 10.0;
            cg = g * 100.0;
            mg = g * 1000.0;
            MT = g / 1000000.0;
            ///////////////////////////////////////
            oz = g * 0.035;
            lb = oz * 16.0;
            T = lb * 2000.0;
            ///////////////////////////////////
            if(this.optB == "ounces") {
                return oz.numberFormat(4) + " oz";
            }
            else if(this.optB == "pounds"){
                return lb.numberFormat(4) + " lb";
            }
            else if(this.optB == "tons"){
                return T.numberFormat(4) + " T";
            }
            else if(this.optB == "milligrams"){
                return mg.numberFormat(4) + " mg";
            }
            else if(this.optB == "centigrams"){
                return cg.numberFormat(4) + " cg";
            }
            else if(this.optB == "decigrams"){
                return dcg.numberFormat(4) + " dg";
            }
            else if(this.optB == "grams"){
                return g.numberFormat(4) + " g";
            }
            else if(this.optB == "dekagrams"){
                return dkg.numberFormat(4) + " dag";
            }
            else if(this.optB == "hectograms"){
                return hg.numberFormat(4) + " hg";
            }
            else if(this.optB == "kilograms"){
                return kg.numberFormat(4) + " kg";
            }
            else if(this.optB == "mtons"){
                return MT.numberFormat(4) + " MT";
            }
            else{
                return "Error optB";
            }
        }
        else if (this.optA == "mtons") {
            /////////////////////////////////////
            MT = this.num1;
            g = MT * 1000000.0;
            dcg = g * 10.0;
            cg = g * 100.0;
            mg = g * 1000.0;
            dkg = g / 10.0;
            hg = g / 100.0;
            kg - g / 1000.0;
            ////////////////////////////////////
            oz = g * 0.035;
            lb = oz * 16.0;
            T = lb * 2000.0;
            ///////////////////////////////////
            if(this.optB == "ounces") {
                return oz.numberFormat(4) + " oz";
            }
            else if(this.optB == "pounds"){
                return lb.numberFormat(4) + " lb";
            }
            else if(this.optB == "tons"){
                return T.numberFormat(4) + " T";
            }
            else if(this.optB == "milligrams"){
                return mg.numberFormat(4) + " mg";
            }
            else if(this.optB == "centigrams"){
                return cg.numberFormat(4) + " cg";
            }
            else if(this.optB == "decigrams"){
                return dcg.numberFormat(4) + " dg";
            }
            else if(this.optB == "grams"){
                return g.numberFormat(4) + " g";
            }
            else if(this.optB == "dekagrams"){
                return dkg.numberFormat(4) + " dag";
            }
            else if(this.optB == "hectograms"){
                return hg.numberFormat(4) + " hg";
            }
            else if(this.optB == "kilograms"){
                return kg.numberFormat(4) + " kg";
            }
            else if(this.optB == "mtons"){
                return MT.numberFormat(4) + " MT";
            }
            else{
                return "Error optB";
            }
        }
        else{
            return "Error optA";
        }
        
        
    
    }
    
}