window.onload=function(){

    document.getElementById("lvl1").addEventListener("click",level1);
    document.getElementById("lvl2").addEventListener("click",level2);
    document.getElementById("lvl3").addEventListener("click",level3);
    document.getElementById("lvl4").addEventListener("click",level4);
    document.getElementById("lvl5").addEventListener("click",level5);

    function level1(){
        document.getElementById("article").innerHTML="this is article 1";
    }

    function level2(){
        document.getElementById("article").innerHTML="this is article 2";
    }

    function level3(){
        document.getElementById("article").innerHTML="this is article 3";
    }

    function level4(){
        document.getElementById("article").innerHTML="this is article 4";
    }

    function level5(){
        document.getElementById("article").innerHTML="this is article 5";
    }

}