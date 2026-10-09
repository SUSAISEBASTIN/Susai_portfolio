// Hero tracker: one looping sequence
const li=[...document.querySelectorAll('#steps li')];let n=0;
function tick(){li.forEach((e,i)=>e.classList.toggle('on',i<=n));n=(n+1)%(li.length+2);if(n===0)li.forEach(e=>e.classList.remove('on'))}
tick();setInterval(tick,1300);
// Tabs
const tb=[...document.querySelectorAll('.tabs button')],ps=[...document.querySelectorAll('.panel')];
tb.forEach(b=>b.onclick=()=>{tb.forEach(x=>x.setAttribute('aria-selected',x===b));ps.forEach((p,i)=>p.hidden=i!=b.dataset.t)});
// Reveal on scroll
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
// Cursor glow
const g=document.getElementById('glow');
addEventListener('pointermove',e=>{g.style.setProperty('--x',e.clientX+'px');g.style.setProperty('--y',e.clientY+'px')});
