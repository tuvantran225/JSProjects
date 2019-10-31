$(document).ready(() => {
    // $.ajax({
    //     url: "http://localhost:8080/all-employee-map",
    //     type: "GET",
    //     dataType: "JSON",
    //     success: (data) => {
    //         console.log(data);
    //     },
    //     error: (message) => {
    //         console.log(message);
    //     }
    // });

    $.ajax({
        url: "http://localhost:8080/all-employee-list",
        type: "GET",
        dateType: "html"
    })
    .done((response) => {
        if (response.status === 1) {
            console.log(response.data);
        }
    })
    .fail((message) => {
        console.log(message);
    });

    // $.ajax({
    //     url: "http://localhost:8080/all-employee-error",
    //     type: "GET",
    //     dateType: "JSON"
    // })
    // .done((data) => {
    //     console.log(data);
    // })
    // .fail((message) => {
    //     console.log(message);
    // });
});
