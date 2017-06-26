function main() {
    var input = "";
    var total = null;
    $(".number_button, .operator_button").on("click", function () {
        input += $(this).text();
        $("#input_field").val(input);
    });
    $("#equal").on("click", function () {
        total = eval($("#input_field").val());
        if (total === Infinity || total === NaN) {
            total = "Err";
        }
        $("#input_field").val(total);
    });
    $("#clear_all").on("click", function () {
        input = "";
        $("#input_field").val(input);
    });
    $("#clear").on("click", function () {
        input = $("#input_field").val();
        input = input.slice(0, -1);
        $("#input_field").val(input);
    });

};

$(document).ready(main);