const burger=document.querySelector('.burger');const nav=document.querySelector('.nav');if(burger){burger.onclick=()=>nav.classList.toggle('open')}
const items=document.querySelectorAll('.reveal');const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('show')}),{threshold:.15});items.forEach(i=>io.observe(i));
