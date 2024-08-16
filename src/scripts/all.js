const sidebar = document.getElementById('sidebar');
const openSidebarButton = document.getElementById('open-sidebar')

openSidebarButton.onclick = () => {
    sidebar.classList.toggle('active');
}