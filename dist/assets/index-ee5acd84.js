(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const B=document.getElementById("file-btn"),C=document.getElementById("image-form");B.addEventListener("change",function(){C.remove();const r=new Image,i=B.files[0],c=new FileReader;c.readAsDataURL(i),c.onload=function(){r.src=c.result};const a=document.getElementById("handle"),e=document.createElement("div");e.className="loader";const t=document.createElement("div");t.className="wrapper",t.appendChild(e),document.body.insertBefore(t,a);const l=document.createElement("canvas");l.id="stippler",l.style.display="none",document.body.insertBefore(l,a);const m=document.getElementById("stippler").getContext("2d",{willReadFrequently:!0});r.onload=function(){const{width:p,height:g}=F(m,r,500),D=m.getImageData(0,0,p,g);m.drawImage(r,0,0,r.width,r.height,0,0,p,g);const L=m.getImageData(0,0,p,g),y=new Worker("src/worker.js",{type:"module"}),w=new Worker("src/worker.js",{type:"module"});let n=null,u=null;const P=new Date;y.postMessage({imageData:D,density:10,sharpness:100}),w.postMessage({imageData:L,density:10,sharpness:100}),y.onmessage=function(o){n=o.data,v()},w.onmessage=function(o){u=o.data,v()};function v(){if(n&&u){const o=new Date;t.remove();const d=document.createElement("p");d.textContent=u.length+n.length+" points generated in "+(o-P)/1e3+" sec",document.body.insertBefore(d,a),l.style.display="block",b(n),E(performance.now())}}function b(o){m.clearRect(0,0,p,g),m.fillStyle="black";for(let d=0,I=o.length;d<I;d+=2){const h=o[d],f=o[d+1];m.fillRect(h,f,1.1,1.1)}}const O=2e4;function E(o,d){const h=performance.now()-o,f=Math.min(h/O,1);for(let s=0,k=n.length;s<k;s+=2)n[s]=n[s]+(u[s]-n[s])*f,n[s+1]=n[s+1]+(u[s+1]-n[s+1])*f;b(n),f<1?requestAnimationFrame(()=>E(o)):console.log("animation complete")}}});function F(r,i,c){const a=Math.round(c*i.height/i.width);return r.canvas.width=c,r.canvas.height=a,{width:c,height:a}}
