(function(){
  document.getElementById('year')?.innerText = new Date().getFullYear();
  document.getElementById('year2')?.innerText = new Date().getFullYear();
  document.getElementById('year3')?.innerText = new Date().getFullYear();
  document.getElementById('year4')?.innerText = new Date().getFullYear();
  document.getElementById('year5')?.innerText = new Date().getFullYear();
  document.getElementById('year6')?.innerText = new Date().getFullYear();

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.gap = '12px';
    });
  }
})();
