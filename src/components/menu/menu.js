import Menu from '../../templates/menu.html';

const loadMenu=()=>{
    const header=document.getElementById('header');
    header.innerHTML=Menu;
}
export default loadMenu;