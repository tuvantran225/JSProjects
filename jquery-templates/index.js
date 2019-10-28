$(document).ready(function(){
    var employeeData = [
        { FirstName: "Rob", LastName: "Mathews", Age: 26 },
        { FirstName: "Richie", LastName: "Richards", Age: 32 },
        { FirstName: "Shawn", LastName: "Clarke", Age: 53 },
        { FirstName: "Dave", LastName: "Canterburry", Age: 42 }
    ];

    $("#myTemplate").tmpl(employeeData).appendTo("#employeeContainer");
});
