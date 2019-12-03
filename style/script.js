$(document).ready(function () {

    $(".reg").on("click", ".tab", function () {
        $(".reg").find(".active").removeClass("active");

        $(this).addClass("active");
        $(".tab__form").eq($(this).index()).addClass("active");
    });
});