$(document).ready(() => {
    // $.ajax({
    //     url: "http://localhost:8080/all-employee-map",
    //     type: "GET",
    //     dataType: "JSON",
    //     success: (data) => {
    //         console.log(data);
    //     },
    //     error: (error) => {
    //         console.log(error);
    //     }
    // });

    $.ajax({
        url: "http://localhost:8080/all-employee-list",
        type: "GET",
        dateType: "html"
    })
    .done((data) => {
        console.log(data);
    })
    .fail((error) => {
        console.log(error);
    });

    // $.ajax({
    //     url: "http://localhost:8080/all-employee-error",
    //     type: "GET",
    //     dateType: "JSON"
    // })
    // .done((data) => {
    //     console.log(data);
    // })
    // .fail((error) => {
    //     console.log(error);
    // });
});
