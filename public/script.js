const SideMenu = document.querySelector('#SideMenu');

function openMenu(){
    SideMenu.style.transform = 'translateX(-16rem)'; 
}
function closeMenu(){
    SideMenu.style.transform = 'translateX(16rem)'; 
}


//---------------dark---------------///

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  function toggleTheme(){
    document.documentElement.classList.toggle('dark');

    if(document.documentElement.classList.contains('dark')){
      localStorage.theme ='dark';
    }else{
      localStorage.theme ='light';
    }
  }