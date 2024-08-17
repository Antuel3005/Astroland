document.getElementById('hamburgerMenu').onclick = function() {
    document.getElementById('sidebar').style.width = '250px';  // Open the sidebar
}

document.getElementById('closeBtn').onclick = function() {
    document.getElementById('sidebar').style.width = '0';  // Close the sidebar
}