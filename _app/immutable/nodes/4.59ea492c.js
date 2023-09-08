import{s as W,h as E,n as M}from"../chunks/scheduler.e9b79cf6.js";import{S as G,i as O,g as a,s as r,h as o,j as J,f as t,c as d,x as g,l as K,k as i,a as s}from"../chunks/index.b14fdf6f.js";const N=""+new URL("../assets/turtlescode.b59b52da.png",import.meta.url).href,R=""+new URL("../assets/gold.8638e1c4.png",import.meta.url).href,U=""+new URL("../assets/silver.5ea86830.png",import.meta.url).href,j=""+new URL("../assets/bronze.aa72f42b.png",import.meta.url).href;function Q(z){let m,b,w,A,_,c,k="TurtleCodes",C,x,I="9/29 to 10/6",T,v,S=`<h1 class="text-5xl font-bold m-5">What is TurtleCodes</h1> <p class="sm:px-10 m-5 text-lg font-semibold">TurtleCodes is a competitive programming competition hosted by Tino Competitive Programming
		where contestants solve a series of challenging problems, relying on their skills and knowledge
		of programming. The competition will be split into 2 divisions, Beginner and Advanced.</p>`,q,p,D='<h1 class="text-4xl font-bold m-5">Where and when?</h1> <p class="sm:px-10 m-5 text-xl font-semibold">TurtleCodes will be held on Codeforces. Participants can take the contest on any two hours between Friday, September 29, and Friday, October 6.</p>',L,h,P=`<h1 class="text-center text-white drop-shadow-lg text-7xl font-bold mt-3">Prizes</h1> <div class="easeAni lg:ml-[12%] mt-12 rounded-md bg-purple-200 shadow-lg lg:float-left text-center w-auto mx-6 p-4 lg:w-[35%] svelte-xf7oq3"><h1 class="text-5xl m-5 font-bold">Beginner</h1> <div class="inner-div svelte-xf7oq3"><div class="flex list-none text-center text-3xl items-center align-middle font-semibold"><img src="${R}" class="w-10 m-3"/> <h1>First: $15</h1></div></div> <br/> <div class="inner-div svelte-xf7oq3"><div class="flex list-none text-center text-3xl items-center align-middle font-semibold"><img src="${U}" class="w-10 m-3"/> <h1>Second: $10</h1></div></div> <br/> <div class="inner-div svelte-xf7oq3"><div class="flex list-none text-center text-3xl items-center align-middle font-semibold"><img src="${j}" class="w-10 m-3"/> <h1>Third: $5</h1></div></div></div> <div class="easeAni lg:mr-[12%] mt-12 rounded-md bg-purple-200 shadow-lg lg:float-right text-center w-auto mx-6 p-4 lg:w-[35%] svelte-xf7oq3"><h1 class="text-5xl m-5 font-bold">Advanced</h1> <div class="inner-div svelte-xf7oq3"><div class="flex list-none text-center text-3xl items-center align-middle font-semibold"><img src="${R}" class="w-10 m-3"/> <h1>First: $20</h1></div></div> <br/> <div class="inner-div svelte-xf7oq3"><div class="flex list-none text-center text-3xl items-center align-middle font-semibold"><img src="${U}" class="w-10 m-3"/> <h1>Second: $15</h1></div></div> <br/> <div class="inner-div svelte-xf7oq3"><div class="flex list-none text-center text-3xl items-center align-middle font-semibold"><img src="${j}" class="w-10 m-3"/> <h1>Third: $10</h1></div></div></div>`,H,f,V='<h1 class="m-2">All participants: you get to experience competitive programming!</h1>',$,u,B="Sponsers",y,n,F='<div class="easeAni m-10 mx-auto w-[80%] sm:w-[50%] sm:mx[25%] p-3 rounded-md bg-purple-200 shadow-lg text-center items-center svelte-xf7oq3"><img src="https://media.discordapp.net/attachments/930578418859397123/1118402967947722864/c1logo_color.png?width=1923&amp;height=170" alt="correlation-one" class="w-[100%] p-5"/></div>';return{c(){m=a("div"),b=r(),w=a("img"),_=r(),c=a("h1"),c.textContent=k,C=r(),x=a("p"),x.textContent=I,T=r(),v=a("div"),v.innerHTML=S,q=r(),p=a("div"),p.innerHTML=D,L=r(),h=a("div"),h.innerHTML=P,H=r(),f=a("div"),f.innerHTML=V,$=r(),u=a("h1"),u.textContent=B,y=r(),n=a("a"),n.innerHTML=F,this.h()},l(e){m=o(e,"DIV",{style:!0}),J(m).forEach(t),b=d(e),w=o(e,"IMG",{src:!0,class:!0}),_=d(e),c=o(e,"H1",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-rneu3a"&&(c.textContent=k),C=d(e),x=o(e,"P",{class:!0,"data-svelte-h":!0}),g(x)!=="svelte-2edjnp"&&(x.textContent=I),T=d(e),v=o(e,"DIV",{class:!0,"data-svelte-h":!0}),g(v)!=="svelte-192td8t"&&(v.innerHTML=S),q=d(e),p=o(e,"DIV",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-128ttt5"&&(p.innerHTML=D),L=d(e),h=o(e,"DIV",{class:!0,"data-svelte-h":!0}),g(h)!=="svelte-umrb8d"&&(h.innerHTML=P),H=d(e),f=o(e,"DIV",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-1jrhl9x"&&(f.innerHTML=V),$=d(e),u=o(e,"H1",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-qabarp"&&(u.textContent=B),y=d(e),n=o(e,"A",{class:!0,href:!0,target:!0,"data-svelte-h":!0}),g(n)!=="svelte-1weg15k"&&(n.innerHTML=F),this.h()},h(){K(m,"margin-top","120px"),E(w.src,A=N)||i(w,"src",A),i(w,"class","easeAni w-[90%] mx-[5%] sm:w-[80%] sm:mx-[10%] md:w-[70%] md:mx-[15%] lg:w-[50%] lg:mx-[25%] xl:w-[30%] xl:mx-[35%] svelte-xf7oq3"),i(c,"class","text-center text-6xl sm:text-8xl font-bold m-10 text-white drop-shadow-lg"),i(x,"class","text-center text-4xl font-semibold m-3 text-white drop-shadow-lg"),i(v,"class","infoBlock bg-purple-200 shadow-lg svelte-xf7oq3"),i(p,"class","infoBlock svelte-xf7oq3"),i(h,"class","outer svelte-xf7oq3"),i(f,"class","easeAni mr-[10%] ml-[10%] w-[80%] rounded-md bg-purple-200 shadow-lg text-center m-10 font-semibold text-xl p-3 svelte-xf7oq3"),i(u,"class","text-center text-white text-6xl font-bold mb-7 mt-3 drop-shadow-lg"),i(n,"class","text-center align-middle"),i(n,"href","https://www.correlation-one.com/"),i(n,"target","_blank")},m(e,l){s(e,m,l),s(e,b,l),s(e,w,l),s(e,_,l),s(e,c,l),s(e,C,l),s(e,x,l),s(e,T,l),s(e,v,l),s(e,q,l),s(e,p,l),s(e,L,l),s(e,h,l),s(e,H,l),s(e,f,l),s(e,$,l),s(e,u,l),s(e,y,l),s(e,n,l)},p:M,i:M,o:M,d(e){e&&(t(m),t(b),t(w),t(_),t(c),t(C),t(x),t(T),t(v),t(q),t(p),t(L),t(h),t(H),t(f),t($),t(u),t(y),t(n))}}}class Z extends G{constructor(m){super(),O(this,m,null,Q,W,{})}}export{Z as component};
