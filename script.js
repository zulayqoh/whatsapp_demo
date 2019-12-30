const openTab = (event, tabNumber) => {
    const tabContent = document.getElementsByClassName("tabcontent");

    for(const tab of tabContent) {
        tab.style.display = "none";
    }

    document.getElementById(tabNumber).style.display = "block";
}
