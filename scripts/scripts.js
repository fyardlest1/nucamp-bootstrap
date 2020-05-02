$(function () {
    // Adding jQuery for the Reserve a Campsite button
    $("#reserveButton").click(function () {
        $("#reserveModal").modal("show");
        $("#reserveModal").modal("hide");
    });

    // Adding jQuery for the login
    $("#loginButton").click(function () {
        $("#loginModal").modal("show");
        $("#loginModal").modal("hide");
    });

    // Pause and play Carousel Button
    $(".carousel").carousel({ interval: 3000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
});