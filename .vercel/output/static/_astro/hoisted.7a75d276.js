const a=document.querySelectorAll(".animation"),s=new IntersectionObserver(e=>{e.forEach(t=>{if(t.isIntersecting){const n=t.target.getAttribute("data-delay"),o=t.target.getAttribute("data-animation"),i=parseInt(n)||0;setTimeout(()=>{t.target.classList.add(o||"fade-down")},i)}})},{threshold:0});for(let e=0;e<a.length;e++){const t=a[e];s.observe(t)}
