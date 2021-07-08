import Menu from '../../templates/menu.html';
import '@styles/fuentes/fuentes.css';
import '@styles/header-components/header-components.css';

const loadMenu=()=>{
    const header=document.getElementById('header');
    header.innerHTML=Menu;
}
export default loadMenu;