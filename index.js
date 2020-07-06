function clickDefault(){
    document.getElementById("default").click();
}

function tabSelect(evt, tabName){
    //init
    var i, content, tabbutt;

    //Hides all content
    content = document.getElementsByClassName("content");

    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }

    //Removes any 'active' elements
    tabbutt = document.getElementsByClassName("tabButt");
    for (i = 0; i < tabbutt.length; i++) {
        tabbutt[i].className = tabbutt[i].className.replace(" active", "");
    }

    //Show selected tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
