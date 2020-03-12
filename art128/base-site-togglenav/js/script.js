document.addEventListener('DOMContentLoaded', function() {
    console.log("hey!")

    //Toggle Nav
    var mymenubutton = document.querySelector('.menu-button');
    var mytogglemenu = document.querySelector('.toggle-nav');

    mymenubutton.addEventListener('click', function(){
        mytogglemenu.classList.toggle('expanded');
    });

});