$(document).ready(() => {
    let array = [
        { firstName: "Rob", lastName: "Mathews", age: 27 },
        { firstName: "Richie", lastName: "Richards", age: 26 },
        { firstName: "Shawn", lastName: "Clarke", age: 26 }
    ];

    let object = {
        name: "Frank"
    }

    let boolean = true;

    $("#array").tmpl(array).appendTo("tbody");
    $("#object").tmpl(object).appendTo("#object-data");
    $("#boolean").tmpl(boolean).appendTo("#boolean-data");
});
