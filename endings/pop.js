window.onload = function() {
    //-------------------------------------------plugins-------------------------------------------------//
    // Night Mode
    $("body").nightMode({autoEnable: true, keepNormal: "img, input, a, li, progress, #navbar"});
    // navbar
    window.onscroll = function () {
        stick()
    };
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function stick() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
}