document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
        }
    else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};

AOS.init({
    offset:75,
    duration: 2000
});

mybutton = document.getElementById("myBtn");
creator= document.getElementById("creator");


function topFunction() {
    var timerHandle = setInterval(function() {
    if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0)
    window.scrollBy(0,-50); else clearInterval(timerHandle); },10);
}



wh = window.innerHeight;
one = document.getElementById("one");
two = document.getElementById("two");
three = document.getElementById("three");
four = document.getElementById("four")
wh1 = wh/2 ;
wh2 = wh + wh/2;
wh3 = 2*wh + wh/2;
window.onscroll = function() {
    if(window.scrollY < wh1){
        one.classList.add('active')
        two.classList.remove('active')
        three.classList.remove('active')
        four.classList.remove('active')
        mybutton.style.display = "none";
        creator.style.bottom = "15px";
    }
    else if(window.scrollY > wh1 && window.scrollY < wh2){
        two.classList.add('active')
        one.classList.remove('active')
        three.classList.remove('active')
        four.classList.remove('active')
        mybutton.style.display = "block";
        creator.style.bottom = "100px";
    }
    else if(window.scrollY > wh2 && window.scrollY < wh3){
        three.classList.add('active')
        one.classList.remove('active')
        two.classList.remove('active')
        four.classList.remove('active')
        mybutton.style.display = "block";
        creator.style.bottom = "100px";
    }
    else if(window.scrollY > wh3){
        four.classList.add('active')
        one.classList.remove('active')
        three.classList.remove('active')
        two.classList.remove('active')
        mybutton.style.display = "block";
        creator.style.bottom = "100px";
    }
}


wh = window.innerHeight;
function game() {
    var i = window.scrollY;
    var int = setInterval(function() {
        i += 25;
        window.scrollTo(0, i);
        if (i >= wh) clearInterval(int);
    }, (wh)/25);
}
function web() {
    var i = window.scrollY;
    var int = setInterval(function() {
        i += 25;
        window.scrollTo(0, i);
        if (i >= 2*wh) clearInterval(int);
    }, (wh)/25);
}
function py() {
    var i = window.scrollY;
    var int = setInterval(function() {
        i += 25;
        window.scrollTo(0, i);
        if (i >= 3*wh) clearInterval(int);
    }, wh/25);
}