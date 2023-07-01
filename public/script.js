let header = document.querySelector('header');
let menu = document.querySelector('header');
let navbar = document.querySelector('header');
menu.onclick = ()=>{
    navbar.classList.toggle('active');
}

// dark mode
let darkmode = document.querySelector('#darkmode');
darkmode.onckick = () =>{
    if(darkmode.classlist.contains('bx-moon')){
        darkmode.classlist.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');

    }
    else{
        darkmode.classList.replace('bx-sun','bx-moon');
        darkmode.body.classList.remove('active');
    }
}