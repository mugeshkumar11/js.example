var bike={
    model:"fzsv-3",
    fueltype:"petrol",
    fuelcapacity:"13",
    mileage:"45",
    vehiclecc:"149",


    avg:function(){
     var avg=(this.model+this.fueltype+this.fuelcapacity+this.mileage+this.vehiclecc);
     
     return avg;
    }
    
}
var a=bike.avg();
console.log(bike.avg());


// car //
var car={
    model:"swift-dzire",
    fueltype:"disel",
    fuelcapacity:"45",
    mileage:"18kmpl",
    colour:"brown",

    avg:function(){
        var avg=(this.model+this.fueltype+this.fuelcapacity+this.mileage+this.colour);
        
        return avg;
       }

}
var a=car.avg();
console.log(car.avg());

// laptop//

var laptop={
    model:"avita pura",
    Ram:"4gp",
    harddisk:"128gp",
    price:"23000",
    colour:"ashgrey",

    avg:function(){
        var avg=(this.model+this.Ram+this.harddisk+this.price+this.colour);
        
        return avg;
       }

}
var a=laptop.avg();
console.log(laptop.avg());

//swiggy//

var swiggy={
    names:"swiggy",
    delivery:"30min",
    service:"fooddelivery",
    employeescount:"100000",
    feedback:"quickdelivery",

    avg:function(){
        var avg=(this.names+this.delivery+this.service+this.employeescount+this.feedback);
        
        return avg;
       }

}
var a=swiggy.avg();
console.log(swiggy.avg());

// pet shop//

var petshop={
    fish:"500",
    bird:"100",
    dog:"450",
    food:"100",
    colour:"multiple",

    avg:function(){
        var avg=(this.fish+this.bird+this.dog+this.food+this.colour);
        
        return avg;
       }

}
var a=petshop.avg();
console.log(petshop.avg());

// school friends //

var names={
    name1:"venky",
    name2:"magesh",
    name3:"pradeep",
    name4:"ishwaran",
    name5:"sabaree",


    avg:function(){
        var avg=(this.name1+this.name2+this.name3+this.name4+this.name5);
        
        return avg;
       }

}
var a=names.avg();
console.log(names.avg());

// marks //

var marks={
    mark1:100,
    mark2:98,
    mark3:99,
    mark4:91,
    mark5:89,


    avg:function(){
        var avg=(this.mark1+this.mark2+this.mark3+this.mark4+this.mark5)/5;
        
        return avg;
       }

}
var a=marks.avg();
console.log(marks.avg());

// train //
var train={
    propertyowner:"government",
    fueltype:"electric",
    goingmethod:"track",
    seattype:"multible",
    stop:"station to station",


    avg:function(){
        var avg=(this.propertyowner+this.fueltype+this.goingmethod+this.seattype+this.stop);
        
        return avg;
       }

}
var a=train.avg();
console.log(train.avg());

// fish //

var fish={
    fishname:"shark",
    weight:"300kg",
    colour:"ash",
    feeding:"small fish",
    rate:"lakhs",


    avg:function(){
        var avg=(this.fishname+this.weight+this.colour+this.feeding+this.rate);
        
        return avg;
       }

}
var a=fish.avg();
console.log(fish.avg());

// royal enfield //

var royalenfield={
    model:"royalenfield",
    cc:"500cc",
    weight:"300 to 400kg",
    rate:"2.5lakh",
    colour:"black",


    avg:function(){
        var avg=(this.model+this.cc+this.weight+this.rate+this.colour);
        
        return avg;
       }

}
var a=royalenfield.avg();
console.log(royalenfield.avg());

// phone//

var phone={
    model:"vivo y11",
    network:"4G LTE",
    camera:"dual camera",
    battery:"5000mah",
	simslot:"dual",
    colour:"sky blue",
    
    avg:function(){
        var avg=(this.model+this.network+this.camera+this.battery+this.simslot+this.colour);
        
        return avg;
       }

}
var a=phone.avg();
console.log(phone.avg());