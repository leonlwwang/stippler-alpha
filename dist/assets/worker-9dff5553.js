(function(){"use strict";const E=11102230246251565e-32,C=134217729,lt=(3+8*E)*E;function O(f,t,n,i,e){let s,l,h,o,a=t[0],_=i[0],c=0,r=0;_>a==_>-a?(s=a,a=t[++c]):(s=_,_=i[++r]);let u=0;if(c<f&&r<n)for(_>a==_>-a?(l=a+s,h=s-(l-a),a=t[++c]):(l=_+s,h=s-(l-_),_=i[++r]),s=l,h!==0&&(e[u++]=h);c<f&&r<n;)_>a==_>-a?(l=s+a,o=l-s,h=s-(l-o)+(a-o),a=t[++c]):(l=s+_,o=l-s,h=s-(l-o)+(_-o),_=i[++r]),s=l,h!==0&&(e[u++]=h);for(;c<f;)l=s+a,o=l-s,h=s-(l-o)+(a-o),a=t[++c],s=l,h!==0&&(e[u++]=h);for(;r<n;)l=s+_,o=l-s,h=s-(l-o)+(_-o),_=i[++r],s=l,h!==0&&(e[u++]=h);return(s!==0||u===0)&&(e[u++]=s),u}function ht(f,t){let n=t[0];for(let i=1;i<f;i++)n+=t[i];return n}function Y(f){return new Float64Array(f)}const ot=(3+16*E)*E,rt=(2+12*E)*E,ct=(9+64*E)*E*E,G=Y(4),tt=Y(8),nt=Y(12),et=Y(16),K=Y(4);function at(f,t,n,i,e,s,l){let h,o,a,_,c,r,u,g,d,b,y,p,M,v,$,I,S,k;const z=f-e,m=n-e,w=t-s,x=i-s;v=z*x,r=C*z,u=r-(r-z),g=z-u,r=C*x,d=r-(r-x),b=x-d,$=g*b-(v-u*d-g*d-u*b),I=w*m,r=C*w,u=r-(r-w),g=w-u,r=C*m,d=r-(r-m),b=m-d,S=g*b-(I-u*d-g*d-u*b),y=$-S,c=$-y,G[0]=$-(y+c)+(c-S),p=v+y,c=p-v,M=v-(p-c)+(y-c),y=M-I,c=M-y,G[1]=M-(y+c)+(c-I),k=p+y,c=k-p,G[2]=p-(k-c)+(y-c),G[3]=k;let A=ht(4,G),j=rt*l;if(A>=j||-A>=j||(c=f-z,h=f-(z+c)+(c-e),c=n-m,a=n-(m+c)+(c-e),c=t-w,o=t-(w+c)+(c-s),c=i-x,_=i-(x+c)+(c-s),h===0&&o===0&&a===0&&_===0)||(j=ct*l+lt*Math.abs(A),A+=z*_+x*h-(w*a+m*o),A>=j||-A>=j))return A;v=h*x,r=C*h,u=r-(r-h),g=h-u,r=C*x,d=r-(r-x),b=x-d,$=g*b-(v-u*d-g*d-u*b),I=o*m,r=C*o,u=r-(r-o),g=o-u,r=C*m,d=r-(r-m),b=m-d,S=g*b-(I-u*d-g*d-u*b),y=$-S,c=$-y,K[0]=$-(y+c)+(c-S),p=v+y,c=p-v,M=v-(p-c)+(y-c),y=M-I,c=M-y,K[1]=M-(y+c)+(c-I),k=p+y,c=k-p,K[2]=p-(k-c)+(y-c),K[3]=k;const D=O(4,G,4,K,tt);v=z*_,r=C*z,u=r-(r-z),g=z-u,r=C*_,d=r-(r-_),b=_-d,$=g*b-(v-u*d-g*d-u*b),I=w*a,r=C*w,u=r-(r-w),g=w-u,r=C*a,d=r-(r-a),b=a-d,S=g*b-(I-u*d-g*d-u*b),y=$-S,c=$-y,K[0]=$-(y+c)+(c-S),p=v+y,c=p-v,M=v-(p-c)+(y-c),y=M-I,c=M-y,K[1]=M-(y+c)+(c-I),k=p+y,c=k-p,K[2]=p-(k-c)+(y-c),K[3]=k;const U=O(D,tt,4,K,nt);v=h*_,r=C*h,u=r-(r-h),g=h-u,r=C*_,d=r-(r-_),b=_-d,$=g*b-(v-u*d-g*d-u*b),I=o*a,r=C*o,u=r-(r-o),g=o-u,r=C*a,d=r-(r-a),b=a-d,S=g*b-(I-u*d-g*d-u*b),y=$-S,c=$-y,K[0]=$-(y+c)+(c-S),p=v+y,c=p-v,M=v-(p-c)+(y-c),y=M-I,c=M-y,K[1]=M-(y+c)+(c-I),k=p+y,c=k-p,K[2]=p-(k-c)+(y-c),K[3]=k;const T=O(U,nt,4,K,et);return et[T-1]}function B(f,t,n,i,e,s){const l=(t-s)*(n-e),h=(f-e)*(i-s),o=l-h,a=Math.abs(l+h);return Math.abs(o)>=ot*a?o:-at(f,t,n,i,e,s,a)}const it=Math.pow(2,-52),Q=new Uint32Array(512);class V{static from(t,n=gt,i=mt){const e=t.length,s=new Float64Array(e*2);for(let l=0;l<e;l++){const h=t[l];s[2*l]=n(h),s[2*l+1]=i(h)}return new V(s)}constructor(t){const n=t.length>>1;if(n>0&&typeof t[0]!="number")throw new Error("Expected coords to contain numbers.");this.coords=t;const i=Math.max(2*n-5,0);this._triangles=new Uint32Array(i*3),this._halfedges=new Int32Array(i*3),this._hashSize=Math.ceil(Math.sqrt(n)),this._hullPrev=new Uint32Array(n),this._hullNext=new Uint32Array(n),this._hullTri=new Uint32Array(n),this._hullHash=new Int32Array(this._hashSize).fill(-1),this._ids=new Uint32Array(n),this._dists=new Float64Array(n),this.update()}update(){const{coords:t,_hullPrev:n,_hullNext:i,_hullTri:e,_hullHash:s}=this,l=t.length>>1;let h=1/0,o=1/0,a=-1/0,_=-1/0;for(let m=0;m<l;m++){const w=t[2*m],x=t[2*m+1];w<h&&(h=w),x<o&&(o=x),w>a&&(a=w),x>_&&(_=x),this._ids[m]=m}const c=(h+a)/2,r=(o+_)/2;let u=1/0,g,d,b;for(let m=0;m<l;m++){const w=R(c,r,t[2*m],t[2*m+1]);w<u&&(g=m,u=w)}const y=t[2*g],p=t[2*g+1];u=1/0;for(let m=0;m<l;m++){if(m===g)continue;const w=R(y,p,t[2*m],t[2*m+1]);w<u&&w>0&&(d=m,u=w)}let M=t[2*d],v=t[2*d+1],$=1/0;for(let m=0;m<l;m++){if(m===g||m===d)continue;const w=_t(y,p,M,v,t[2*m],t[2*m+1]);w<$&&(b=m,$=w)}let I=t[2*b],S=t[2*b+1];if($===1/0){for(let x=0;x<l;x++)this._dists[x]=t[2*x]-t[0]||t[2*x+1]-t[1];N(this._ids,this._dists,0,l-1);const m=new Uint32Array(l);let w=0;for(let x=0,A=-1/0;x<l;x++){const j=this._ids[x];this._dists[j]>A&&(m[w++]=j,A=this._dists[j])}this.hull=m.subarray(0,w),this.triangles=new Uint32Array(0),this.halfedges=new Uint32Array(0);return}if(B(y,p,M,v,I,S)<0){const m=d,w=M,x=v;d=b,M=I,v=S,b=m,I=w,S=x}const k=dt(y,p,M,v,I,S);this._cx=k.x,this._cy=k.y;for(let m=0;m<l;m++)this._dists[m]=R(t[2*m],t[2*m+1],k.x,k.y);N(this._ids,this._dists,0,l-1),this._hullStart=g;let z=3;i[g]=n[b]=d,i[d]=n[g]=b,i[b]=n[d]=g,e[g]=0,e[d]=1,e[b]=2,s.fill(-1),s[this._hashKey(y,p)]=g,s[this._hashKey(M,v)]=d,s[this._hashKey(I,S)]=b,this.trianglesLen=0,this._addTriangle(g,d,b,-1,-1,-1);for(let m=0,w,x;m<this._ids.length;m++){const A=this._ids[m],j=t[2*A],D=t[2*A+1];if(m>0&&Math.abs(j-w)<=it&&Math.abs(D-x)<=it||(w=j,x=D,A===g||A===d||A===b))continue;let U=0;for(let W=0,$t=this._hashKey(j,D);W<this._hashSize&&(U=s[($t+W)%this._hashSize],!(U!==-1&&U!==i[U]));W++);U=n[U];let T=U,F;for(;F=i[T],B(j,D,t[2*T],t[2*T+1],t[2*F],t[2*F+1])>=0;)if(T=F,T===U){T=-1;break}if(T===-1)continue;let L=this._addTriangle(T,A,i[T],-1,-1,e[T]);e[A]=this._legalize(L+2),e[T]=L,z++;let P=i[T];for(;F=i[P],B(j,D,t[2*P],t[2*P+1],t[2*F],t[2*F+1])<0;)L=this._addTriangle(P,A,F,e[A],-1,e[P]),e[A]=this._legalize(L+2),i[P]=P,z--,P=F;if(T===U)for(;F=n[T],B(j,D,t[2*F],t[2*F+1],t[2*T],t[2*T+1])<0;)L=this._addTriangle(F,A,T,-1,e[T],e[F]),this._legalize(L+2),e[F]=L,i[T]=T,z--,T=F;this._hullStart=n[A]=T,i[T]=n[P]=A,i[A]=P,s[this._hashKey(j,D)]=A,s[this._hashKey(t[2*T],t[2*T+1])]=T}this.hull=new Uint32Array(z);for(let m=0,w=this._hullStart;m<z;m++)this.hull[m]=w,w=i[w];this.triangles=this._triangles.subarray(0,this.trianglesLen),this.halfedges=this._halfedges.subarray(0,this.trianglesLen)}_hashKey(t,n){return Math.floor(ut(t-this._cx,n-this._cy)*this._hashSize)%this._hashSize}_legalize(t){const{_triangles:n,_halfedges:i,coords:e}=this;let s=0,l=0;for(;;){const h=i[t],o=t-t%3;if(l=o+(t+2)%3,h===-1){if(s===0)break;t=Q[--s];continue}const a=h-h%3,_=o+(t+1)%3,c=a+(h+2)%3,r=n[l],u=n[t],g=n[_],d=n[c];if(ft(e[2*r],e[2*r+1],e[2*u],e[2*u+1],e[2*g],e[2*g+1],e[2*d],e[2*d+1])){n[t]=d,n[h]=r;const y=i[c];if(y===-1){let M=this._hullStart;do{if(this._hullTri[M]===c){this._hullTri[M]=t;break}M=this._hullPrev[M]}while(M!==this._hullStart)}this._link(t,y),this._link(h,i[l]),this._link(l,c);const p=a+(h+1)%3;s<Q.length&&(Q[s++]=p)}else{if(s===0)break;t=Q[--s]}}return l}_link(t,n){this._halfedges[t]=n,n!==-1&&(this._halfedges[n]=t)}_addTriangle(t,n,i,e,s,l){const h=this.trianglesLen;return this._triangles[h]=t,this._triangles[h+1]=n,this._triangles[h+2]=i,this._link(h,e),this._link(h+1,s),this._link(h+2,l),this.trianglesLen+=3,h}}function ut(f,t){const n=f/(Math.abs(f)+Math.abs(t));return(t>0?3-n:1+n)/4}function R(f,t,n,i){const e=f-n,s=t-i;return e*e+s*s}function ft(f,t,n,i,e,s,l,h){const o=f-l,a=t-h,_=n-l,c=i-h,r=e-l,u=s-h,g=o*o+a*a,d=_*_+c*c,b=r*r+u*u;return o*(c*b-d*u)-a*(_*b-d*r)+g*(_*u-c*r)<0}function _t(f,t,n,i,e,s){const l=n-f,h=i-t,o=e-f,a=s-t,_=l*l+h*h,c=o*o+a*a,r=.5/(l*a-h*o),u=(a*_-h*c)*r,g=(l*c-o*_)*r;return u*u+g*g}function dt(f,t,n,i,e,s){const l=n-f,h=i-t,o=e-f,a=s-t,_=l*l+h*h,c=o*o+a*a,r=.5/(l*a-h*o),u=f+(a*_-h*c)*r,g=t+(l*c-o*_)*r;return{x:u,y:g}}function N(f,t,n,i){if(i-n<=20)for(let e=n+1;e<=i;e++){const s=f[e],l=t[s];let h=e-1;for(;h>=n&&t[f[h]]>l;)f[h+1]=f[h--];f[h+1]=s}else{const e=n+i>>1;let s=n+1,l=i;q(f,e,s),t[f[n]]>t[f[i]]&&q(f,n,i),t[f[s]]>t[f[i]]&&q(f,s,i),t[f[n]]>t[f[s]]&&q(f,n,s);const h=f[s],o=t[h];for(;;){do s++;while(t[f[s]]<o);do l--;while(t[f[l]]>o);if(l<s)break;q(f,s,l)}f[n+1]=f[l],f[l]=h,i-s+1>=l-n?(N(f,t,s,i),N(f,t,n,l-1)):(N(f,t,n,l-1),N(f,t,s,i))}}function q(f,t,n){const i=f[t];f[t]=f[n],f[n]=i}function gt(f){return f[0]}function mt(f){return f[1]}const st=1e-6;class H{constructor(){this._x0=this._y0=this._x1=this._y1=null,this._=""}moveTo(t,n){this._+=`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")}lineTo(t,n){this._+=`L${this._x1=+t},${this._y1=+n}`}arc(t,n,i){t=+t,n=+n,i=+i;const e=t+i,s=n;if(i<0)throw new Error("negative radius");this._x1===null?this._+=`M${e},${s}`:(Math.abs(this._x1-e)>st||Math.abs(this._y1-s)>st)&&(this._+="L"+e+","+s),i&&(this._+=`A${i},${i},0,1,1,${t-i},${n}A${i},${i},0,1,1,${this._x1=e},${this._y1=s}`)}rect(t,n,i,e){this._+=`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${+i}v${+e}h${-i}Z`}value(){return this._||null}}class Z{constructor(){this._=[]}moveTo(t,n){this._.push([t,n])}closePath(){this._.push(this._[0].slice())}lineTo(t,n){this._.push([t,n])}value(){return this._.length?this._:null}}class yt{constructor(t,[n,i,e,s]=[0,0,960,500]){if(!((e=+e)>=(n=+n))||!((s=+s)>=(i=+i)))throw new Error("invalid bounds");this.delaunay=t,this._circumcenters=new Float64Array(t.points.length*2),this.vectors=new Float64Array(t.points.length*2),this.xmax=e,this.xmin=n,this.ymax=s,this.ymin=i,this._init()}update(){return this.delaunay.update(),this._init(),this}_init(){const{delaunay:{points:t,hull:n,triangles:i},vectors:e}=this;let s,l;const h=this.circumcenters=this._circumcenters.subarray(0,i.length/3*2);for(let d=0,b=0,y=i.length,p,M;d<y;d+=3,b+=2){const v=i[d]*2,$=i[d+1]*2,I=i[d+2]*2,S=t[v],k=t[v+1],z=t[$],m=t[$+1],w=t[I],x=t[I+1],A=z-S,j=m-k,D=w-S,U=x-k,T=(A*U-j*D)*2;if(Math.abs(T)<1e-9){if(s===void 0){s=l=0;for(const L of n)s+=t[L*2],l+=t[L*2+1];s/=n.length,l/=n.length}const F=1e9*Math.sign((s-S)*U-(l-k)*D);p=(S+w)/2-F*U,M=(k+x)/2+F*D}else{const F=1/T,L=A*A+j*j,P=D*D+U*U;p=S+(U*L-j*P)*F,M=k+(A*P-D*L)*F}h[b]=p,h[b+1]=M}let o=n[n.length-1],a,_=o*4,c,r=t[2*o],u,g=t[2*o+1];e.fill(0);for(let d=0;d<n.length;++d)o=n[d],a=_,c=r,u=g,_=o*4,r=t[2*o],g=t[2*o+1],e[a+2]=e[_]=u-g,e[a+3]=e[_+1]=r-c}render(t){const n=t==null?t=new H:void 0,{delaunay:{halfedges:i,inedges:e,hull:s},circumcenters:l,vectors:h}=this;if(s.length<=1)return null;for(let _=0,c=i.length;_<c;++_){const r=i[_];if(r<_)continue;const u=Math.floor(_/3)*2,g=Math.floor(r/3)*2,d=l[u],b=l[u+1],y=l[g],p=l[g+1];this._renderSegment(d,b,y,p,t)}let o,a=s[s.length-1];for(let _=0;_<s.length;++_){o=a,a=s[_];const c=Math.floor(e[a]/3)*2,r=l[c],u=l[c+1],g=o*4,d=this._project(r,u,h[g+2],h[g+3]);d&&this._renderSegment(r,u,d[0],d[1],t)}return n&&n.value()}renderBounds(t){const n=t==null?t=new H:void 0;return t.rect(this.xmin,this.ymin,this.xmax-this.xmin,this.ymax-this.ymin),n&&n.value()}renderCell(t,n){const i=n==null?n=new H:void 0,e=this._clip(t);if(e===null||!e.length)return;n.moveTo(e[0],e[1]);let s=e.length;for(;e[0]===e[s-2]&&e[1]===e[s-1]&&s>1;)s-=2;for(let l=2;l<s;l+=2)(e[l]!==e[l-2]||e[l+1]!==e[l-1])&&n.lineTo(e[l],e[l+1]);return n.closePath(),i&&i.value()}*cellPolygons(){const{delaunay:{points:t}}=this;for(let n=0,i=t.length/2;n<i;++n){const e=this.cellPolygon(n);e&&(e.index=n,yield e)}}cellPolygon(t){const n=new Z;return this.renderCell(t,n),n.value()}_renderSegment(t,n,i,e,s){let l;const h=this._regioncode(t,n),o=this._regioncode(i,e);h===0&&o===0?(s.moveTo(t,n),s.lineTo(i,e)):(l=this._clipSegment(t,n,i,e,h,o))&&(s.moveTo(l[0],l[1]),s.lineTo(l[2],l[3]))}contains(t,n,i){return n=+n,n!==n||(i=+i,i!==i)?!1:this.delaunay._step(t,n,i)===t}*neighbors(t){const n=this._clip(t);if(n)for(const i of this.delaunay.neighbors(t)){const e=this._clip(i);if(e){t:for(let s=0,l=n.length;s<l;s+=2)for(let h=0,o=e.length;h<o;h+=2)if(n[s]===e[h]&&n[s+1]===e[h+1]&&n[(s+2)%l]===e[(h+o-2)%o]&&n[(s+3)%l]===e[(h+o-1)%o]){yield i;break t}}}}_cell(t){const{circumcenters:n,delaunay:{inedges:i,halfedges:e,triangles:s}}=this,l=i[t];if(l===-1)return null;const h=[];let o=l;do{const a=Math.floor(o/3);if(h.push(n[a*2],n[a*2+1]),o=o%3===2?o-2:o+1,s[o]!==t)break;o=e[o]}while(o!==l&&o!==-1);return h}_clip(t){if(t===0&&this.delaunay.hull.length===1)return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin];const n=this._cell(t);if(n===null)return null;const{vectors:i}=this,e=t*4;return this._simplify(i[e]||i[e+1]?this._clipInfinite(t,n,i[e],i[e+1],i[e+2],i[e+3]):this._clipFinite(t,n))}_clipFinite(t,n){const i=n.length;let e=null,s,l,h=n[i-2],o=n[i-1],a,_=this._regioncode(h,o),c,r=0;for(let u=0;u<i;u+=2)if(s=h,l=o,h=n[u],o=n[u+1],a=_,_=this._regioncode(h,o),a===0&&_===0)c=r,r=0,e?e.push(h,o):e=[h,o];else{let g,d,b,y,p;if(a===0){if((g=this._clipSegment(s,l,h,o,a,_))===null)continue;[d,b,y,p]=g}else{if((g=this._clipSegment(h,o,s,l,_,a))===null)continue;[y,p,d,b]=g,c=r,r=this._edgecode(d,b),c&&r&&this._edge(t,c,r,e,e.length),e?e.push(d,b):e=[d,b]}c=r,r=this._edgecode(y,p),c&&r&&this._edge(t,c,r,e,e.length),e?e.push(y,p):e=[y,p]}if(e)c=r,r=this._edgecode(e[0],e[1]),c&&r&&this._edge(t,c,r,e,e.length);else if(this.contains(t,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2))return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin];return e}_clipSegment(t,n,i,e,s,l){const h=s<l;for(h&&([t,n,i,e,s,l]=[i,e,t,n,l,s]);;){if(s===0&&l===0)return h?[i,e,t,n]:[t,n,i,e];if(s&l)return null;let o,a,_=s||l;_&8?(o=t+(i-t)*(this.ymax-n)/(e-n),a=this.ymax):_&4?(o=t+(i-t)*(this.ymin-n)/(e-n),a=this.ymin):_&2?(a=n+(e-n)*(this.xmax-t)/(i-t),o=this.xmax):(a=n+(e-n)*(this.xmin-t)/(i-t),o=this.xmin),s?(t=o,n=a,s=this._regioncode(t,n)):(i=o,e=a,l=this._regioncode(i,e))}}_clipInfinite(t,n,i,e,s,l){let h=Array.from(n),o;if((o=this._project(h[0],h[1],i,e))&&h.unshift(o[0],o[1]),(o=this._project(h[h.length-2],h[h.length-1],s,l))&&h.push(o[0],o[1]),h=this._clipFinite(t,h))for(let a=0,_=h.length,c,r=this._edgecode(h[_-2],h[_-1]);a<_;a+=2)c=r,r=this._edgecode(h[a],h[a+1]),c&&r&&(a=this._edge(t,c,r,h,a),_=h.length);else this.contains(t,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2)&&(h=[this.xmin,this.ymin,this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax]);return h}_edge(t,n,i,e,s){for(;n!==i;){let l,h;switch(n){case 5:n=4;continue;case 4:n=6,l=this.xmax,h=this.ymin;break;case 6:n=2;continue;case 2:n=10,l=this.xmax,h=this.ymax;break;case 10:n=8;continue;case 8:n=9,l=this.xmin,h=this.ymax;break;case 9:n=1;continue;case 1:n=5,l=this.xmin,h=this.ymin;break}(e[s]!==l||e[s+1]!==h)&&this.contains(t,l,h)&&(e.splice(s,0,l,h),s+=2)}return s}_project(t,n,i,e){let s=1/0,l,h,o;if(e<0){if(n<=this.ymin)return null;(l=(this.ymin-n)/e)<s&&(o=this.ymin,h=t+(s=l)*i)}else if(e>0){if(n>=this.ymax)return null;(l=(this.ymax-n)/e)<s&&(o=this.ymax,h=t+(s=l)*i)}if(i>0){if(t>=this.xmax)return null;(l=(this.xmax-t)/i)<s&&(h=this.xmax,o=n+(s=l)*e)}else if(i<0){if(t<=this.xmin)return null;(l=(this.xmin-t)/i)<s&&(h=this.xmin,o=n+(s=l)*e)}return[h,o]}_edgecode(t,n){return(t===this.xmin?1:t===this.xmax?2:0)|(n===this.ymin?4:n===this.ymax?8:0)}_regioncode(t,n){return(t<this.xmin?1:t>this.xmax?2:0)|(n<this.ymin?4:n>this.ymax?8:0)}_simplify(t){if(t&&t.length>4){for(let n=0;n<t.length;n+=2){const i=(n+2)%t.length,e=(n+4)%t.length;(t[n]===t[i]&&t[i]===t[e]||t[n+1]===t[i+1]&&t[i+1]===t[e+1])&&(t.splice(i,2),n-=2)}t.length||(t=null)}return t}}const bt=2*Math.PI,X=Math.pow;function pt(f){return f[0]}function wt(f){return f[1]}function xt(f){const{triangles:t,coords:n}=f;for(let i=0;i<t.length;i+=3){const e=2*t[i],s=2*t[i+1],l=2*t[i+2];if((n[l]-n[e])*(n[s+1]-n[e+1])-(n[s]-n[e])*(n[l+1]-n[e+1])>1e-10)return!1}return!0}function Mt(f,t,n){return[f+Math.sin(f+t)*n,t+Math.cos(f-t)*n]}class J{static from(t,n=pt,i=wt,e){return new J("length"in t?At(t,n,i,e):Float64Array.from(Tt(t,n,i,e)))}constructor(t){this._delaunator=new V(t),this.inedges=new Int32Array(t.length/2),this._hullIndex=new Int32Array(t.length/2),this.points=this._delaunator.coords,this._init()}update(){return this._delaunator.update(),this._init(),this}_init(){const t=this._delaunator,n=this.points;if(t.hull&&t.hull.length>2&&xt(t)){this.collinear=Int32Array.from({length:n.length/2},(r,u)=>u).sort((r,u)=>n[2*r]-n[2*u]||n[2*r+1]-n[2*u+1]);const o=this.collinear[0],a=this.collinear[this.collinear.length-1],_=[n[2*o],n[2*o+1],n[2*a],n[2*a+1]],c=1e-8*Math.hypot(_[3]-_[1],_[2]-_[0]);for(let r=0,u=n.length/2;r<u;++r){const g=Mt(n[2*r],n[2*r+1],c);n[2*r]=g[0],n[2*r+1]=g[1]}this._delaunator=new V(n)}else delete this.collinear;const i=this.halfedges=this._delaunator.halfedges,e=this.hull=this._delaunator.hull,s=this.triangles=this._delaunator.triangles,l=this.inedges.fill(-1),h=this._hullIndex.fill(-1);for(let o=0,a=i.length;o<a;++o){const _=s[o%3===2?o-2:o+1];(i[o]===-1||l[_]===-1)&&(l[_]=o)}for(let o=0,a=e.length;o<a;++o)h[e[o]]=o;e.length<=2&&e.length>0&&(this.triangles=new Int32Array(3).fill(-1),this.halfedges=new Int32Array(3).fill(-1),this.triangles[0]=e[0],l[e[0]]=1,e.length===2&&(l[e[1]]=0,this.triangles[1]=e[1],this.triangles[2]=e[1]))}voronoi(t){return new yt(this,t)}*neighbors(t){const{inedges:n,hull:i,_hullIndex:e,halfedges:s,triangles:l,collinear:h}=this;if(h){const c=h.indexOf(t);c>0&&(yield h[c-1]),c<h.length-1&&(yield h[c+1]);return}const o=n[t];if(o===-1)return;let a=o,_=-1;do{if(yield _=l[a],a=a%3===2?a-2:a+1,l[a]!==t)return;if(a=s[a],a===-1){const c=i[(e[t]+1)%i.length];c!==_&&(yield c);return}}while(a!==o)}find(t,n,i=0){if(t=+t,t!==t||(n=+n,n!==n))return-1;const e=i;let s;for(;(s=this._step(i,t,n))>=0&&s!==i&&s!==e;)i=s;return s}_step(t,n,i){const{inedges:e,hull:s,_hullIndex:l,halfedges:h,triangles:o,points:a}=this;if(e[t]===-1||!a.length)return(t+1)%(a.length>>1);let _=t,c=X(n-a[t*2],2)+X(i-a[t*2+1],2);const r=e[t];let u=r;do{let g=o[u];const d=X(n-a[g*2],2)+X(i-a[g*2+1],2);if(d<c&&(c=d,_=g),u=u%3===2?u-2:u+1,o[u]!==t)break;if(u=h[u],u===-1){if(u=s[(l[t]+1)%s.length],u!==g&&X(n-a[u*2],2)+X(i-a[u*2+1],2)<c)return u;break}}while(u!==r);return _}render(t){const n=t==null?t=new H:void 0,{points:i,halfedges:e,triangles:s}=this;for(let l=0,h=e.length;l<h;++l){const o=e[l];if(o<l)continue;const a=s[l]*2,_=s[o]*2;t.moveTo(i[a],i[a+1]),t.lineTo(i[_],i[_+1])}return this.renderHull(t),n&&n.value()}renderPoints(t,n){n===void 0&&(!t||typeof t.moveTo!="function")&&(n=t,t=null),n=n==null?2:+n;const i=t==null?t=new H:void 0,{points:e}=this;for(let s=0,l=e.length;s<l;s+=2){const h=e[s],o=e[s+1];t.moveTo(h+n,o),t.arc(h,o,n,0,bt)}return i&&i.value()}renderHull(t){const n=t==null?t=new H:void 0,{hull:i,points:e}=this,s=i[0]*2,l=i.length;t.moveTo(e[s],e[s+1]);for(let h=1;h<l;++h){const o=2*i[h];t.lineTo(e[o],e[o+1])}return t.closePath(),n&&n.value()}hullPolygon(){const t=new Z;return this.renderHull(t),t.value()}renderTriangle(t,n){const i=n==null?n=new H:void 0,{points:e,triangles:s}=this,l=s[t*=3]*2,h=s[t+1]*2,o=s[t+2]*2;return n.moveTo(e[l],e[l+1]),n.lineTo(e[h],e[h+1]),n.lineTo(e[o],e[o+1]),n.closePath(),i&&i.value()}*trianglePolygons(){const{triangles:t}=this;for(let n=0,i=t.length/3;n<i;++n)yield this.trianglePolygon(n)}trianglePolygon(t){const n=new Z;return this.renderTriangle(t,n),n.value()}}function At(f,t,n,i){const e=f.length,s=new Float64Array(e*2);for(let l=0;l<e;++l){const h=f[l];s[l*2]=t.call(i,h,l,f),s[l*2+1]=n.call(i,h,l,f)}return s}function*Tt(f,t,n,i){let e=0;for(const s of f)yield t.call(i,s,e,f),yield n.call(i,s,e,f),++e}self.onmessage=async f=>{const t=new Date;console.log("worker started");const{imageData:n,density:i,sharpness:e}=f.data,s=await vt(n,i,e);console.log("worker finished in "+(new Date-t)/1e3+" sec"),self.postMessage(s)};const vt=async(f,t,n)=>{const{width:i,height:e,data:s}=f,l=kt(s,i,e),h=It(i,e,t,l),o=new J(h),a=o.voronoi([0,0,i,e]);return St(h,l,i,e,n,o,a),h},kt=(f,t,n)=>{const i=new Float64Array(t*n);for(let e=0,s=f.length/4;e<s;++e)i[e]=Math.max(0,1-f[e*4]/254);return i},It=(f,t,n,i)=>{const e=Math.round(f*t/n),s=new Float64Array(e*2);for(let l=0;l<e;++l)for(let h=0;h<50;++h){const o=s[l*2]=Math.floor(Math.random()*f),a=s[l*2+1]=Math.floor(Math.random()*t);if(Math.random()<i[a*f+o])break}return s},St=(f,t,n,i,e,s,l)=>{const h=f.length/2,o=new Float64Array(h*2),a=new Float64Array(h);for(let _=0;_<e;++_){o.fill(0),a.fill(0);for(let r=0,u=0;r<i;++r)for(let g=0;g<n;++g){const d=t[r*n+g];u=s.find(g+.5,r+.5,u),a[u]+=d,o[u*2]+=d*(g+.5),o[u*2+1]+=d*(r+.5)}const c=Math.pow(_+1,-.8)*10;for(let r=0;r<h;++r){const u=f[r*2],g=f[r*2+1],d=a[r]?o[r*2]/a[r]:u,b=a[r]?o[r*2+1]/a[r]:g;f[r*2]=u+(d-u)*1.8+(Math.random()-.5)*c,f[r*2+1]=g+(b-g)*1.8+(Math.random()-.5)*c}l.update()}}})();
