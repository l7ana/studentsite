document.addEventListener('DOMContentLoaded', function() {
    console.log("hey!")

    //Toggle Nav
    var myMenuButton = document.querySelector('.menubutton');
    var myToggleMenu = document.querySelector('.toggle-nav');

    myMenuButton.addEventListener('click', function(){
        myToggleMenu.classList.toggle('expanded');
    });

});