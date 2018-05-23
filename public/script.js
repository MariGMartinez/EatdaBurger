
$(document).ready(function () {
    $(document).on("click", "#Devour", function () {
        console.log("clicked", $(this).attr("name"))
        $.ajax({
            method: "PUT",
            url: "/burgers/" + $ (this).attr("name"),
        }).then(function (responseFromBackEnd) {
            console.log('response in the home.js!!', responseFromBackEnd)
        });
    })
    console.log("Work")
})
