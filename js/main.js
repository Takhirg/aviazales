function myFunction() {
    document.getElementById("iinput").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.menu')) {
        var dropdowns = document.getElementsByClassName("content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}