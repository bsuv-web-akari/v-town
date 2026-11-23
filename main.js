const hd=document.getElementById('hd');
addEventListener('scroll',()=>hd.classList.toggle('on',scrollY>60),{passive:true});
document.querySelector('.burger').onclick=()=>document.body.classList.toggle('open');
document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>document.body.classList.remove('open'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
document.getElementById('f').onsubmit=e=>{e.preventDefault();e.target.querySelector('.ok').hidden=false};
