const menuBtn = document.getElementById("menuBtn")
        const sideNav = document.getElementById("sideNav")
        const menu = document.getElementById("menu")

        sideNav.style.right = "-25rem";

        menuBtn.onclick = function(){
            if (sideNav.style.right == "-25rem"){
                sideNav.style.right = "0";
            }
            else {
                sideNav.style.right = "-25rem";
            }
        }