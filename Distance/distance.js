
Number.prototype.numberFormat = function(decimals, dec_point, thousands_sep) {
    dec_point = typeof dec_point !== 'undefined' ? dec_point : '.';
    thousands_sep = typeof thousands_sep !== 'undefined' ? thousands_sep : ',';

    var parts = this.toFixed(decimals).split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousands_sep);

    return parts.join(dec_point);
}

function Conversion(input, selA, selB) {
       this.num1 = input;
       this.optA = selA;
       this.optB = selB;
       this.convert = function(){
            //alert("in convert function");
            //alert("num1 = " + this.num1 +
            //      "optA = " + this.optA +
            //      "optB = " + this.optB);
            var inches;
            var ft;
            var yd;
            var mi;
            var mm;
            var cm;
            var dcim;
            var m;
            var dcam;
            var hm;
            var km;
            //alert("variables declared");
            if(this.optA == "inches"){
                //alert("in if statement optA == inches");
                //////////////////////////////////////////////////
                inches = this.num1;
                ft = inches / 12.0;
                yd = ft / 3.0;
                mi = ft / 5280.0;
                /////////////////////////////////////////////////
                cm = inches * 2.540;
                mm = cm * 10.0;
                dcim = cm / 10.0;
                m = cm / 100.0;
                dcam = m / 10.0;
                hm = m / 100.0;
                km = m / 1000.0;
                ////////////////////////////////////////////////
                //alert("calculations performed");
                if(this.optB == "inches"){
                    return inches.numberFormat(4) + " in";
                }
                else if(this.optB == "feet"){
                    //alert("in if statement this.optB == feet");
                    return ft.numberFormat(4) + " ft";
                }
                else if(this.optB == "yards"){
                    return yd.numberFormat(4) + " yd";
                }
                else if(this.optB == "miles"){
                    return mi.numberFormat(4) + " mi";
                }
                else if(this.optB == "millimeters"){
                    return mm.numberFormat(4) + " mm";
                }
                else if(this.optB == "centimeters"){
                    return cm.numberFormat(4) + " cm";
                }
                else if(this.optB == "decimeters"){
                    return dcim.numberFormat(4) + " dm";
                }
                else if(this.optB == "meters"){
                    return m.numberFormat(4) + " m";
                }
                else if(this.optB == "decameters"){
                    return dcam.numberFormat(4) + " dam";
                }
                else if(this.optB == "hectometers"){
                    return hm.numberFormat(4) + " hm";
                }
                else if(this.optB == "kilometers"){
                    return km.numberFormat(4) + " km";
                }
                else{
                    return "Error optB";
                }
            }
            else if(this.optA == "feet"){
                ///////////////////////////////////////////////
                ft = this.num1;
                inches = ft * 12.0;
                yd = ft / 3.0;
                mi = ft / 5280.0;
                //////////////////////////////////////////////
                m = ft * 0.3048;
                dcim = m * 10.0;
                cm = m * 100.0;
                mm = m * 1000.0;
                dcam = m / 10.0;
                hm = m / 100.0;
                km = m / 1000.0;
                //////////////////////////////////////////////
                if(this.optB == "inches"){
                    return inches.numberFormat(4) + " in";
                }
                else if(this.optB == "feet"){
                    return ft.numberFormat(4) + " ft";
                }
                else if(this.optB == "yards"){
                    return yd.numberFormat(4) + " yd";
                }
                else if(this.optB == "miles"){
                    return mi.numberFormat(4) + " mi";
                }
                else if(this.optB == "millimeters"){
                    return mm.numberFormat(4) + " mm";
                }
                else if(this.optB == "centimeters"){
                    return cm.numberFormat(4) + " cm";
                }
                else if(this.optB == "decimeters"){
                    return dcim.numberFormat(4) + " dm";
                }
                else if(this.optB == "meters"){
                    return m.numberFormat(4) + " m";
                }
                else if(this.optB == "decameters"){
                    return dcam.numberFormat(4) + " dam";
                }
                else if(this.optB == "hectometers"){
                    return hm.numberFormat(4) + " hm";
                }
                else if(this.optB == "kilometers"){
                    return km.numberFormat(4) + " km";
                }
                else{
                    return "Error optB";
                }
            }
            else if(this.optA == "yards"){
                /////////////////////////////////////////////////
                yd = this.num1;
                ft = yd * 3.0;
                inches = ft * 12.0;
                mi = ft / 5280.0;
                ////////////////////////////////////////////////
                m = yd * 0.9144;
                dcim = m * 10.0;
                cm = m * 100.0;
                mm = m * 1000.0;
                dcam = m / 10.0;
                hm = m /100.0;
                km = m / 1000.0;
                //////////////////////////////////////////////////
                if(this.optB == "inches"){
                    return inches.numberFormat(4) + " inches";
                }
                else if(this.optB == "feet"){
                    return ft.numberFormat(4) + " ft";
                }
                else if(this.optB == "yards"){
                    return yd.numberFormat(4) + " yd";
                }
                else if(this.optB == "miles"){
                    return mi.numberFormat(4) + " mi";
                }
                else if(this.optB == "millimeters"){
                    return mm.numberFormat(4) + " mm";
                }
                else if(this.optB == "centimeters"){
                    return cm.numberFormat(4) + " cm";
                }
                else if(this.optB == "decimeters"){
                    return dcim.numberFormat(4) + " dm";
                }
                else if(this.optB == "meters"){
                    return m.numberFormat(4) + " m";
                }
                else if(this.optB == "decameters"){
                    return dcam.numberFormat(4) + " dam";
                }
                else if(this.optB == "hectometers"){
                    return hm.numberFormat(4) + " hm";
                }
                else if(this.optB == "kilometers"){
                    return km.numberFormat(4) + " km";
                }
                else{
                    return "Error optB";
                }
            }
            else if(this.optA == "miles"){
                /////////////////////////////////////////
                mi = this.num1;
                ft = mi * 5280.0;
                yd = ft / 3;
                inches = ft * 12.0;
                /////////////////////////////////////////
                km = mi * 1.60934;
                hm = km * 10.0;
                dcam = km * 100.0;
                m = km * 1000.0;
                dcim = m * 10.0;
                cm = m * 100+0;
                mm = m * 1000.0;
                ////////////////////////////////////////
                if(this.optB == "inches"){
                    return inches.numberFormat(4) + " in";
                }
                else if(this.optB == "feet"){
                    return ft.numberFormat(4) + " ft";
                }
                else if(this.optB == "yards"){
                    return yd.numberFormat(4) + " yd";
                }
                else if(this.optB == "miles"){
                    return mi.numberFormat(4) + " mi";
                }
                else if(this.optB == "millimeters"){
                    return mm.numberFormat(4) + " mm";
                }
                else if(this.optB == "centimeters"){
                    return cm.numberFormat(4) + " cm";
                }
                else if(this.optB == "decimeters"){
                    return dcim.numberFormat(4) + " dm";
                }
                else if(this.optB == "meters"){
                    return m.numberFormat(4) + " m";
                }
                else if(this.optB == "decameters"){
                    return dcam.numberFormat(4) + " dam";
                }
                else if(this.optB == "hectometers"){
                    return hm.numberFormat(4) + " hm";
                }
                else if(this.optB == "kilometers"){
                    return km.numberFormat(4) + " km";
                }
                else{
                    return "Error optB";
                }
            }
            else if(this.optA == "millimeters"){
                /////////////////////////////////////////////
                mm = this.num1;
                cm = mm / 10.0;
                dcim = mm / 100.0;
                m = mm / 1000.0;
                dcam = m / 10.0;
                hm = m / 100.0;
                km = m / 1000.0;
                ////////////////////////////////////////////
                inches = cm * 0.3937;
                ft = m * 3.281;
                yd = ft / 3.0;
                mi = km * 0.62137;
                //////////////////////////////////////////////
                if(this.optB == "inches"){
                    return inches.numberFormat(4) + " in";
                }
                else if(this.optB == "feet"){
                    return ft.numberFormat(4) + " ft";
                }
                else if(this.optB == "yards"){
                    return yd.numberFormat(4) + " yd";
                }
                else if(this.optB == "miles"){
                    return mi.numberFormat(4) + " mi";
                }
                else if(this.optB == "millimeters"){
                    return mm.numberFormat(4) + " mm";
                }
                else if(this.optB == "centimeters"){
                    return cm.numberFormat(4) + " cm";
                }
                else if(this.optB == "decimeters"){
                    return dcim.numberFormat(4) + " dm";
                }
                else if(this.optB == "meters"){
                    return m.numberFormat(4) + " m";
                }
                else if(this.optB == "decameters"){
                    return dcam.numberFormat(4) + " dam";
                }
                else if(this.optB == "hectometers"){
                    return hm.numberFormat(4) + " hm";
                }
                else if(this.optB == "kilometers"){
                    return km.numberFormat(4) + " km";
                }
                else{
                    return "Error optB";
                }
            }
            else if(this.optA == "centimeters"){
                ///////////////////////////////////////
                cm = this.num1;
                mm = cm * 10.0;
                dcim = cm / 10.0;
                m = cm / 100.0;
                dcam = m / 10.0;
                hm = m / 100.0;
                km = m / 1000.0;
                //////////////////////////////////////
                inches = cm * 0.3937;
                ft = m * 3.281;
                yd = ft / 3.0;
                mi = km * 0.62137;
                //////////////////////////////////////////////
                if(this.optB == "inches"){
                    return inches.numberFormat(4) + " in";
                }
                else if(this.optB == "feet"){
                    return ft.numberFormat(4) + " ft";
                }
                else if(this.optB == "yards"){
                    return yd.numberFormat(4) + " yd";
                }
                else if(this.optB == "miles"){
                    return mi.numberFormat(4) + " mi";
                }
                else if(this.optB == "millimeters"){
                    return mm.numberFormat(4) + " mm";
                }
                else if(this.optB == "centimeters"){
                    return cm.numberFormat(4) + " cm";
                }
                else if(this.optB == "decimeters"){
                    return dcim.numberFormat(4) + " dm";
                }
                else if(this.optB == "meters"){
                    return m.numberFormat(4) + " m";
                }
                else if(this.optB == "decameters"){
                    return dcam.numberFormat(4) + " dam";
                }
                else if(this.optB == "hectometers"){
                    return hm.numberFormat(4) + " hm";
                }
                else if(this.optB == "kilometers"){
                    return km.numberFormat(4) + " km";
                }
                else{
                    return "Error optB";
                }
            }
            else if(this.optA == "decimeters"){
                /////////////////////////////////////////////////////////
                dcim = this.num1;
                cm = dcim * 10.0;
                mm = dcim * 100.0;
                m = dcim / 10.0;
                dcam = m / 10.0;
                hm = m / 100.0;
                km = m / 1000.0;
                ////////////////////////////////////////////////////////
                inches = cm * 0.3937;
                ft = m * 3.281;
                yd = ft / 3.0;
                mi = km * 0.62137;
                //////////////////////////////////////////////
                if(this.optB == "inches"){
                    return inches.numberFormat(4) + " inches";
                }
                else if(this.optB == "feet"){
                    return ft.numberFormat(4) + " ft";
                }
                else if(this.optB == "yards"){
                    return yd.numberFormat(4) + " yd";
                }
                else if(this.optB == "miles"){
                    return mi.numberFormat(4) + " mi";
                }
                else if(this.optB == "millimeters"){
                    return mm.numberFormat(4) + " mm";
                }
                else if(this.optB == "centimeters"){
                    return cm.numberFormat(4) + " cm";
                }
                else if(this.optB == "decimeters"){
                    return dcim.numberFormat(4) + " dm";
                }
                else if(this.optB == "meters"){
                    return m.numberFormat(4) + " m";
                }
                else if(this.optB == "decameters"){
                    return dcam.numberFormat(4) + " dam";
                }
                else if(this.optB == "hectometers"){
                    return hm.numberFormat(4) + " hm";
                }
                else if(this.optB == "kilometers"){
                    return km.numberFormat(4) + " km";
                }
                else{
                    return "Error optB";
                }
            }
            else if(this.optA == "meters"){
                //////////////////////////////////////////////////
                m = this.num1;
                dcim = m * 10.0;
                cm = m * 100.0;
                mm = m * 1000.0;
                dcam = m / 10.0;
                hm = m / 100.0;
                km = m / 1000.0;
                /////////////////////////////////////////////////
                inches = cm * 0.3937;
                ft = m * 3.281;
                yd = ft / 3.0;
                mi = km * 0.62137;
                //////////////////////////////////////////////
                if(this.optB == "inches"){
                    return inches.numberFormat(4) + " in";
                }
                else if(this.optB == "feet"){
                    return ft.numberFormat(4) + " ft";
                }
                else if(this.optB == "yards"){
                    return yd.numberFormat(4) + " yd";
                }
                else if(this.optB == "miles"){
                    return mi.numberFormat(4) + " mi";
                }
                else if(this.optB == "millimeters"){
                    return mm.numberFormat(4) + " mm";
                }
                else if(this.optB == "centimeters"){
                    return cm.numberFormat(4) + " cm";
                }
                else if(this.optB == "decimeters"){
                    return dcim.numberFormat(4) + " dm";
                }
                else if(this.optB == "meters"){
                    //alert("value of m = " + m)
                    //alert ("value of m.numberFormat(4)" + m.numberFormat(4))
                    return m.numberFormat(4) + " m";
                }
                else if(this.optB == "decameters"){
                    return dcam.numberFormat(4) + " dam";
                }
                else if(this.optB == "hectometers"){
                    return hm.numberFormat(4) + " hm";
                }
                else if(this.optB == "kilometers"){
                    return km.numberFormat(4) + " km";
                }
                else{
                    return "Error optB";
                }
            }
            else if(this.optA == "decameters"){
                ////////////////////////////////////////////
                dcam = this.num1;
                m = dcam * 10.0;
                dcim = m * 10.0;
                cm = m * 100.0;
                mm = m * 1000.0;
                hm = m / 100.0;
                km = m / 1000.0;
                //////////////////////////////////////////////
                inches = cm * 0.3937;
                ft = m * 3.281;
                yd = ft / 3.0;
                mi = km * 0.62137;
                //////////////////////////////////////////////
                if(this.optB == "inches"){
                    return inches.numberFormat(4) + " inches";
                }
                else if(this.optB == "feet"){
                    return ft.numberFormat(4) + " ft";
                }
                else if(this.optB == "yards"){
                    return yd.numberFormat(4) + " yd";
                }
                else if(this.optB == "miles"){
                    return mi.numberFormat(4) + " mi";
                }
                else if(this.optB == "millimeters"){
                    return mm.numberFormat(4) + " mm";
                }
                else if(this.optB == "centimeters"){
                    return cm.numberFormat(4) + " cm";
                }
                else if(this.optB == "decimeters"){
                    return dcim.numberFormat(4) + " dm";
                }
                else if(this.optB == "meters"){
                    return m.numberFormat(4) + " m";
                }
                else if(this.optB == "decameters"){
                    return dcam.numberFormat(4) + " dam";
                }
                else if(this.optB == "hectometers"){
                    return hm.numberFormat(4) + " hm";
                }
                else if(this.optB == "kilometers"){
                    return km.numberFormat(4) + " km";
                }
                else{
                    return "Error optB";
                }
            }
            else if(this.optA == "hectometers"){
                //////////////////////////////////////////////
                hm = this.num1;
                m = hm * 100.0;
                dcim = m * 10.0;
                cm = m * 100.0;
                mm = m * 1000.0;
                dcam = m / 10.0;
                km = m / 1000.0;
                /////////////////////////////////////////////
                inches = cm * 0.3937;
                ft = m * 3.281;
                yd = ft / 3.0;
                mi = km * 0.62137;
                //////////////////////////////////////////////
                if(this.optB == "inches"){
                    return inches.numberFormat(4) + " inches";
                }
                else if(this.optB == "feet"){
                    return ft.numberFormat(4) + " ft";
                }
                else if(this.optB == "yards"){
                    return yd.numberFormat(4) + " yd";
                }
                else if(this.optB == "miles"){
                    return mi.numberFormat(4) + " mi";
                }
                else if(this.optB == "millimeters"){
                    return mm.numberFormat(4) + " mm";
                }
                else if(this.optB == "centimeters"){
                    return cm.numberFormat(4) + " cm";
                }
                else if(this.optB == "decimeters"){
                    return dcim.numberFormat(4) + " dm";
                }
                else if(this.optB == "meters"){
                    return m.numberFormat(4) + " m";
                }
                else if(this.optB == "decameters"){
                    return dcam.numberFormat(4) + " dam";
                }
                else if(this.optB == "hectometers"){
                    return hm.numberFormat(4) + " hm";
                }
                else if(this.optB == "kilometers"){
                    return km.numberFormat(4) + " km";
                }
                else{
                    return "Error optB";
                }
            }
            else if(this.optA == "kilometers"){
                ////////////////////////////////////
                km = this.num1;
                hm = km * 10.0;
                dcam = km * 100.0;
                m = km * 1000.0;
                dcim = m * 10.0;
                cm = m * 100.0;
                mm = m * 1000.0;
                /////////////////////////////////////
                inches = cm * 0.3937;
                ft = m * 3.281;
                yd = ft / 3.0;
                mi = km * 0.62137;
                //////////////////////////////////////////////
                if(this.optB == "inches"){
                    return inches.numberFormat(4) + " inches";
                }
                else if(this.optB == "feet"){
                    return ft.numberFormat(4) + " ft";
                }
                else if(this.optB == "yards"){
                    return yd.numberFormat(4) + " yd";
                }
                else if(this.optB == "miles"){
                    return mi.numberFormat(4) + " mi";
                }
                else if(this.optB == "millimeters"){
                    return mm.numberFormat(4) + " mm";
                }
                else if(this.optB == "centimeters"){
                    return cm.numberFormat(4) + " cm";
                }
                else if(this.optB == "decimeters"){
                    return dcim.numberFormat(4) + " dm";
                }
                else if(this.optB == "meters"){
                    return m.numberFormat(4) + " m";
                }
                else if(this.optB == "decameters"){
                    return dcam.numberFormat(4) + " dam";
                }
                else if(this.optB == "hectometers"){
                    return hm.numberFormat(4) + " hm";
                }
                else if(this.optB == "kilometers"){
                    return km.numberFormat(4) + " km";
                }
                else{
                    return "Error optB";
                }
            }
            else {
                return "Error optA";
            }
        } 
    
}

