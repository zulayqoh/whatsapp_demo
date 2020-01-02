const openTab = (tabPage) => {
    const tabContent = document.getElementsByClassName("tabcontent");

    for(const tab of tabContent) {
        tab.style.display = "none";
    }

    document.getElementById(tabPage).style.display = "block";

  
    // Show the current tab, and add an "active" class to the button that opened the ta
    
}
/*function openTab(evt, tabname) {
    tabContent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tabpage = document.getElementsByClassName("tab");
    for (i = 0; i < tabpage.length; i++) {
      tabpage[i].className = tabpage[i].className.replace("active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += "active";
    
  }*/