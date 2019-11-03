$(document).ready(() => {
    $('#tooltip').tooltipster({
        position: 'right',
        functionBefore: function() {
            $.ajax({
                type: 'GET',
                url: 'http://localhost:8080/employees',
                success: function(data) {
                    $("tbody").empty();
                    $("#employees").tmpl(data).appendTo("tbody");
                    $('#tooltip').tooltipster('content', $("#tooltip_content"));
                }
            });
        }
    });
});