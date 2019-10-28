$(document).ready(function(){
    var employeeData = [
        { firstName: "Rob", lastName: "Mathews", age: 27 },
        { firstName: "Richie", lastName: "Richards", age: 26 },
        { firstName: "Shawn", lastName: "Clarke", age: 26 }
    ];

    $("#myTemplate").tmpl(employeeData).appendTo("tbody");
});
