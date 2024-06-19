import{A as N,S as M,N as $,K as B,i as _}from"./assets/vendor-42199723.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const g of i.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&o(g)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const P="/js_104_Vlad22523/assets/wallet-1x-061250e0.jpg",A="/js_104_Vlad22523/assets/green-1x-a959fdb8.jpg",C="/js_104_Vlad22523/assets/english-1x-38fc4818.jpg",I="/js_104_Vlad22523/assets/power-1x-05a42d66.jpg",H="/js_104_Vlad22523/assets/mimino-1x-f1affdd1.jpg",R="/js_104_Vlad22523/assets/vyshyvanka-1x-64a37946.jpg",O="/js_104_Vlad22523/assets/chego-1x-d2bbb936.jpg",G="/js_104_Vlad22523/assets/energy-1x-f2d7b54f.jpg",D="/js_104_Vlad22523/assets/fruitbox-1x-14676b6a.jpg",W="/js_104_Vlad22523/assets/starligth-1x-8585b3fd.jpg",z="/js_104_Vlad22523/assets/wallet-2x-158cf844.jpg",F="/js_104_Vlad22523/assets/green-2x-5c413587.jpg",K="/js_104_Vlad22523/assets/english-2x-34fafec2.jpg",Z="/js_104_Vlad22523/assets/power-2x-c9d1ecc4.jpg",U="/js_104_Vlad22523/assets/mimino-2x-4acb2002.jpg",Q="/js_104_Vlad22523/assets/vyshyvanka-2x-aff37560.jpg",X="/js_104_Vlad22523/assets/chego-2x-72392c33.jpg",Y="/js_104_Vlad22523/assets/energy-2x-fa715548.jpg",ee="/js_104_Vlad22523/assets/fruitbox-2x-4ae4ee3e.jpg",te="/js_104_Vlad22523/assets/starligth-2x-73d6d9f4.jpg",f=[{id:1,img:P,img2x:z,description:"React, JavaScript, Node JS, Git",title:"Wallet webservice"},{id:2,img:A,img2x:F,description:"React, JavaScript, Node JS, Git",title:"Green harvest online store"},{id:3,img:C,img2x:K,description:"React, JavaScript, Node JS, Git",title:"English excellence webservice"},{id:4,img:I,img2x:Z,description:"React, JavaScript, Node JS, Git",title:"Power pulse webservice"},{id:5,img:H,img2x:U,description:"React, JavaScript, Node JS, Git",title:"Mimino website"},{id:6,img:R,img2x:Q,description:"React, JavaScript, Node JS, Git",title:"Vyshyvanka vibes Landing Page"},{id:7,img:O,img2x:X,description:"React, JavaScript, Node JS, Git",title:"Chego jewelry website"},{id:8,img:G,img2x:Y,description:"React, JavaScript, Node JS, Git",title:"Energy flow webservice "},{id:9,img:D,img2x:ee,description:"React, JavaScript, Node JS, Git",title:"Fruitbox online store"},{id:10,img:W,img2x:te,description:"React, JavaScript, Node JS, Git",title:"Starlight studio landing page"}],se="/js_104_Vlad22523/assets/icons-b726cf5d.svg",l=document.querySelector(".list-projects"),y=document.querySelector(".button-projects"),d=document.querySelector(".button-hide-projects");d.style.display="none";let a=0;const b=3,T=f.slice(a,a+b);l.insertAdjacentHTML("beforeend",w(T));function w(e){return e.map(({id:t,title:s,description:o,img:r,img2x:i})=>`
    <li class='list-projects-li' data-id='${t}'>
      <picture>
       <source srcset='${r} 1x, ${i} 2x'/>
       <img class='list-projects-img' src='${r}' alt='${s}' />
      </picture>
      <p class='list-projects-subtitle'>${o}</p>
      <h3 class='list-projects-title'>${s}</h3>
      <a href='https://github.com/Vlad22523/wildCoders' target="_blank" class='button-projects-visit'>visit
        <svg class="projects-svg" width="24" height="24">
                  <use href="${se}#icon-gitbrowsre"></use>
                </svg>
      </a>
    </li>
    `).join("")}y.addEventListener("click",()=>{a+=b;const e=f.slice(a,a+b);e.some(s=>s.id===f.length)&&(y.style.display="none",d.style.display="block"),l.insertAdjacentHTML("beforeend",w(e))});d.addEventListener("click",()=>{l.innerHTML="",a=0,l.insertAdjacentHTML("beforeend",w(T)),y.style.display="block",d.style.display="none"});new N(".accordion-container",{openOnInit:[0]});const J=document.querySelector("body"),re=document.querySelector(".mob-menu-btn"),m=document.querySelector(".header-burger"),u=document.querySelector(".mob-menu"),oe=document.querySelector(".mob-menu-list");function ie(){J.classList.add("noscroll")}function x(){J.classList.remove("noscroll")}oe.addEventListener("click",()=>{u.classList.remove("mob-menu-active"),m.classList.toggle("active"),x()});re.addEventListener("click",()=>{m.classList.toggle("active"),m.classList.contains("active")?(u.classList.add("mob-menu-active"),ie()):(u.classList.remove("mob-menu-active"),x())});const E=document.querySelector(".switcher-wrapper"),q=document.querySelector(".switcher-menu");let v=!1;const V=`<span class="span-themes"
        ><span class="span-circkle"></span><span class="span-moon"></span
      ></span>`;document.addEventListener("DOMContentLoaded",S);window.addEventListener("resize",S);function S(){window.innerWidth<=768?(E.innerHTML="",q.innerHTML=V):(q.innerHTML="",E.innerHTML=V,u.classList.remove("mob-menu-active"),m.classList.remove("active"),x()),ne()}function ne(){const e=document.querySelector(".span-themes"),t=document.querySelector(".span-circkle"),s=document.querySelector(".span-moon");e&&t&&s&&(e.addEventListener("click",()=>{e.classList.toggle("span-active"),t.classList.toggle("transform"),s.classList.toggle("transform-moon"),e.classList.contains("span-active")?(document.body.setAttribute("dark",""),v=!0):(document.body.removeAttribute("dark",""),v=!1),localStorage.setItem("blackThemes",v)}),ae(e,t,s))}function ae(e,t,s){localStorage.getItem("blackThemes")==="true"?(document.body.setAttribute("dark",""),e&&t&&s&&(e.classList.add("span-active"),t.classList.add("transform"),s.classList.add("transform-moon"))):document.body.removeAttribute("dark","")}document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("blackThemes")==="true"?document.body.setAttribute("dark",""):document.body.removeAttribute("dark",""),S()});const c=new M(".swiper-container",{modules:[$,B],initialSlide:0,slidesPerView:1,spaceBetween:10,loop:!1,speed:400,autoplay:{delay:3e3},breakpoints:{768:{slidesPerView:1,spaceBetween:20},1024:{slidesPerView:2,spaceBetween:30}},navigation:{nextEl:".swiper-button-next-new",prevEl:".swiper-button-prev-new"},keyboard:{enabled:!0,onlyInViewport:!1}});c.on("update",function(){const e=document.querySelector(".swiper-button-prev-new"),t=e.querySelector(".icon-left");t.style.stroke="rgb(var(--var-gray-reviews))",e.style.border="1px solid rgb(var(--var-more-light-gray-reviews))";const o=document.querySelector(".swiper-button-next-new").querySelector(".icon-right");o.style.stroke="rgb(var(--var-text))"});c.on("slideChange",function(){const e=document.querySelector(".swiper-button-next-new"),t=e.querySelector(".icon-right"),s=document.querySelector(".swiper-button-prev-new"),o=s.querySelector(".icon-left");c.isEnd?(t.style.stroke="rgb(var(--var-gray-reviews))",e.style.border="1px solid rgb(var(--var-more-light-gray-reviews))"):c.isBeginning?(o.style.stroke="rgb(var(--var-gray-reviews))",s.style.border="1px solid rgb(var(--var-more-light-gray-reviews))"):(t.style.stroke="rgb(var(--var-text))",o.style.stroke="rgb(var(--var-text))",e.style.border="1px solid rgb(var(--var-light-gray-reviews))",s.style.border="1px solid rgb(var(--var-light-gray-reviews))")});fetch("https://portfolio-js.b.goit.study/api/reviews").then(e=>e.json()).then(e=>{const t=document.querySelector(".swiper-wrapper");e.forEach(s=>{const o=document.createElement("li");o.className="swiper-slide",o.innerHTML=`
      <div class="review">${s.review}</div>
      <div class="review-img-name">
        <div> <img src="${s.avatar_url}" alt="${s.author}" width="40px" height="40px" class="review-img"> </div>
        <div class="review-name">${s.author}</div>
      </div>
      `,t.appendChild(o)}),c.update()}).catch(e=>{const t=document.querySelector(".swiper-wrapper"),s=document.createElement("div");s.className="swiper-slide",s.innerHTML="<p>Not found</p>",t.appendChild(s),c.update()});const L=document.querySelector(".worktog-form"),h=document.querySelector(".worktog-form-icon"),n=document.querySelector(".backdrop"),ce=document.querySelector(".worktog-modal-btn"),le=/^\w+(\.\w+)?@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/,p={email:"",comment:""},de="https://portfolio-js.b.goit.study/api/requests",me=document.querySelector(".worktog-modal-wrapper");L.addEventListener("input",ue);function ue(e){e.target.name==="email"&&e.target.value&&(le.test(`${e.target.value}`)?h.classList.add("valid"):h.classList.remove("valid"),p.email=e.target.value),e.target.name==="message"&&e.target.value&&e.target.value.trim().length!==0&&(p.comment=e.target.value.trim())}L.addEventListener("submit",pe);function pe(e){if(e.preventDefault(),e.target.default=!0,!p.comment){_.error({title:"Warning",message:"Please fill message area!"});return}fetch(de,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}).then(t=>{if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return t.json()}).then(t=>{me.innerHTML=`
      <h3 class="worktog-modal-title">${t.title}</h3> 
      <p class="wortog-modal-text">${t.message}</p>`,n.classList.add("is-open"),ge()}).catch(t=>{_.error({title:"Warning",message:`Data status is ${t.message} unsuccessful!`}),console.log(t)}).finally(()=>{e.target.default=!1}),h.classList.remove("valid"),L.reset()}function ge(){n.classList.add("is-open"),document.addEventListener("keydown",j),n.addEventListener("click",k)}function j(e){e.code=="Escape"&&(n.classList.remove("is-open"),document.removeEventListener("keydup",j),n.removeEventListener("click",k))}function k(e){const t=n===e.target,s=e.target.closest(".worktog-modal-btn")===ce;(t||s)&&(n.classList.remove("is-open"),document.removeEventListener("keydup",j),n.removeEventListener("click",k))}
//# sourceMappingURL=commonHelpers.js.map
