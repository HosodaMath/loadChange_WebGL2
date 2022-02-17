var J=Object.defineProperty;var Q=(n,e,o)=>e in n?J(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o;var $=(n,e,o)=>(Q(n,typeof e!="symbol"?e+"":e,o),o);const m=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}};m();const X=(n,e,o)=>{const t=[];return[...Array(o.length).keys()].forEach(r=>{const i=n.getUniformLocation(e,o[r]);if(!i)throw new Error("Error!! uniformLocaiton\u306E\u4F5C\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002");t.push(i)}),t},W=(n,e,o)=>{const t=n.createProgram();if(!t)throw new Error("Error");if(n.attachShader(t,e),n.attachShader(t,o),n.linkProgram(t),!n.getProgramParameter(t,n.LINK_STATUS))throw new Error(`\u30B7\u30A7\u30FC\u30C0\u30FC\u306E\u30EA\u30F3\u30AF\u306B\u5931\u6557\u3057\u307E\u3057\u305F ${n.getProgramInfoLog}`);return n.useProgram(t),t},I=(n,e,o)=>{const t=n.createShader(n[e]);if(!t)throw new Error("WebGLShader\u306E\u4F5C\u6210\u4E2D\u30A8\u30E9\u30FC\u304C\u8D77\u304D\u307E\u3057\u305F\u3002\u5F37\u5236\u7D42\u4E86\u3057\u307E\u3059\u3002");if(n.shaderSource(t,o),n.compileShader(t),!n.getShaderParameter(t,n.COMPILE_STATUS))throw new Error(`${n.getShaderInfoLog(t)} ${o}`);return t},j=(n,e)=>{const o=n.createVertexArray();if(!o)throw new Error("VertexArrayObject\u306E\u4F5C\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002");n.bindVertexArray(o);const t=e.verticesData.length;[...Array(t).keys()].forEach(i=>{const s=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,s),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e.verticesData[i]),n.STATIC_DRAW);const a=e.attributeLocationIndex[i],w=e.attributeSize[i],h=n.FLOAT,p=!1,y=0,A=0;n.enableVertexAttribArray(a),n.vertexAttribPointer(a,w,h,p,y,A)});const r=n.createBuffer();if(!r)throw new Error("Error!! IndexBuffer\u306E\u4F5C\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002");return n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,r),n.bufferData(n.ELEMENT_ARRAY_BUFFER,new Uint16Array(e.indicesData),n.STATIC_DRAW),n.bindVertexArray(null),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,null),o},k=(n,e,o)=>{e.clearColor(o[0],o[1],o[2],1),e.clear(e.COLOR_BUFFER_BIT),e.viewport(0,0,n.width,n.height)},x=(n,e)=>({verticesData:[-n,e,0,-n,-e,0,n,-e,0,n,e,0],normalData:[0,0,1,0,0,1,0,0,1,0,0,1],colorData:[1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1],textureCoord:[1,0,0,0,1,1,0,1],indicesData:[0,1,2,0,2,3]}),O=[{vertexColor:[1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1],verticesData:[-.5,.5,0,-.5,-.5,0,.5,-.5,0,.5,.5,0],attributeSize:[4,3],indicesData:[0,1,2,0,2,3]}];var ee=`#version 300 es\r
precision highp float;\r
precision highp int;\r
\r
in vec4 aColor;\r
in vec3 aPosition;\r
out vec4 vColor;\r
void main(void){\r
\r
  vColor = aColor;\r
\r
  gl_Position = vec4(aPosition, 1.0);\r
}`,te=`#version 300 es\r
precision highp float;\r
precision highp int;\r
\r
in vec4 vColor;\r
\r
out vec4 fragColor;\r
\r
void main(void){\r
\r
  fragColor = vColor;\r
}`;const ne=()=>{const n=document.createElement("canvas");n.width=window.innerWidth,n.height=window.innerHeight,document.body.appendChild(n);const e=n.getContext("webgl2");if(!e)throw new Error("Error!! Does not support WebGL2");const o=()=>{k(n,e,[0,0,0]);const t=I(e,"VERTEX_SHADER",ee),r=I(e,"FRAGMENT_SHADER",te),i=W(e,t,r),s=[e.getAttribLocation(i,"aColor"),e.getAttribLocation(i,"aPosition")],a=O[0].vertexColor,w=O[0].verticesData,h=O[0].attributeSize,p=O[0].indicesData,A=j(e,{attributeLocationIndex:s,attributeSize:h,verticesData:[a,w],indicesData:p});e.bindVertexArray(A);const g=e.TRIANGLES,c=p.length,v=e.UNSIGNED_SHORT,f=0;e.drawElements(g,c,v,f),e.bindVertexArray(null)};window.addEventListener("resize",()=>{n.width=window.innerWidth,n.height=window.innerHeight,e.viewport(0,0,n.width,n.height)}),o()};var oe=`#version 300 es\r
precision highp float;\r
precision highp int;\r
\r
in vec4 aColor;\r
in vec3 aPosition;\r
out vec4 vColor;\r
uniform mat4 modelViewProjectionMatrix;\r
void main(void){\r
\r
  vColor = aColor;\r
\r
  gl_Position = vec4(aPosition, 1.0) * modelViewProjectionMatrix;\r
}`,re=`#version 300 es\r
precision highp float;\r
precision highp int;\r
\r
in vec4 vColor;\r
\r
out vec4 fragColor;\r
\r
void main(void){\r
\r
  fragColor = vColor;\r
}`;class N{static create(){return new Float32Array(3)}static set(e,o,t){const r=this.create();return r[0]=e,r[1]=o,r[2]=t,r}}const z=class{static init(){return new Float32Array(16)}static copy(e,o){let t=o;return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}static identity(e){let o=e;return o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=1,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=1,o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1,o}static multiply(e,o,t){let r=t,i=e[0],s=e[1],a=e[2],w=e[3],h=e[4],p=e[5],y=e[6],A=e[7],g=e[8],c=e[9],v=e[10],f=e[11],d=e[12],E=e[13],b=e[14],L=e[15],C=o[0],S=o[1],D=o[2],u=o[3],R=o[4],P=o[5],V=o[6],q=o[7],T=o[8],M=o[9],_=o[10],F=o[11],B=o[12],H=o[13],G=o[14],U=o[15];return r[0]=C*i+S*h+D*g+u*d,r[1]=C*s+S*p+D*c+u*E,r[2]=C*a+S*y+D*v+u*b,r[3]=C*w+S*A+D*f+u*L,r[4]=R*i+P*h+V*g+q*d,r[5]=R*s+P*p+V*c+q*E,r[6]=R*a+P*y+V*v+q*b,r[7]=R*w+P*A+V*f+q*L,r[8]=T*i+M*h+_*g+F*d,r[9]=T*s+M*p+_*c+F*E,r[10]=T*a+M*y+_*v+F*b,r[11]=T*w+M*A+_*f+F*L,r[12]=B*i+H*h+G*g+U*d,r[13]=B*s+H*p+G*c+U*E,r[14]=B*a+H*y+G*v+U*b,r[15]=B*w+H*A+G*f+U*L,r}static translate(e,o,t){let r=t;return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11],r[12]=e[0]*o[0]+e[4]*o[1]+e[8]*o[2]+e[12],r[13]=e[1]*o[0]+e[5]*o[1]+e[9]*o[2]+e[13],r[14]=e[2]*o[0]+e[6]*o[1]+e[10]*o[2]+e[14],r[15]=e[3]*o[0]+e[7]*o[1]+e[11]*o[2]+e[15],r}static rotate(e,o,t,r){let i=r;i==null&&(i=z.init());let s=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);if(!s)return null;let a=t[0],w=t[1],h=t[2];s!=1&&(s=1/s,a*=s,w*=s,h*=s);const p=Math.sin(o),y=Math.cos(o),A=1-y,g=e[0],c=e[1],v=e[2],f=e[3],d=e[4],E=e[5],b=e[6],L=e[7],C=e[8],S=e[9],D=e[10],u=e[11],R=a*a*A+y,P=w*a*A+h*p,V=h*a*A-w*p,q=a*w*A-h*p,T=w*w*A+y,M=h*w*A+a*p,_=a*h*A+w*p,F=w*h*A-a*p,B=h*h*A+y;return o?e!=i&&(i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]):i=e,i[0]=g*R+d*P+C*V,i[1]=c*R+E*P+S*V,i[2]=v*R+b*P+D*V,i[3]=f*R+L*P+u*V,i[4]=g*q+d*T+C*M,i[5]=c*q+E*T+S*M,i[6]=v*q+b*T+D*M,i[7]=f*q+L*T+u*M,i[8]=g*_+d*F+C*B,i[9]=c*_+E*F+S*B,i[10]=v*_+b*F+D*B,i[11]=f*_+L*F+u*B,i}static perspective(e,o,t,r,i){let s=i,a=t*Math.tan(e*Math.PI/360),h=a*o*2,p=a*2,y=r-t;return s[0]=t*2/h,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=t*2/p,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=-(r+t)/y,s[11]=-1,s[12]=0,s[13]=0,s[14]=-(r*t*2)/y,s[15]=0,s}static transpose(e,o){let t=o;return t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15],t}static invert(e,o){let t=o,r=e[0],i=e[1],s=e[2],a=e[3],w=e[4],h=e[5],p=e[6],y=e[7],A=e[8],g=e[9],c=e[10],v=e[11],f=e[12],d=e[13],E=e[14],b=e[15],L=r*h-i*w,C=r*p-s*w,S=r*y-a*w,D=i*p-s*h,u=i*y-a*h,R=s*y-a*p,P=A*d-g*f,V=A*E-c*f,q=A*b-v*f,T=g*E-c*d,M=g*b-v*d,_=c*b-v*E,F=1/(L*_-C*M+S*T+D*q-u*V+R*P);return t[0]=(h*_-p*M+y*T)*F,t[1]=(-i*_+s*M-a*T)*F,t[2]=(d*R-E*u+b*D)*F,t[3]=(-g*R+c*u-v*D)*F,t[4]=(-w*_+p*q-y*V)*F,t[5]=(r*_-s*q+a*V)*F,t[6]=(-f*R+E*S-b*C)*F,t[7]=(A*R-c*S+v*C)*F,t[8]=(w*M-h*q+y*P)*F,t[9]=(-r*M+i*q-a*P)*F,t[10]=(f*u-d*S+b*L)*F,t[11]=(-A*u+g*S-v*L)*F,t[12]=(-w*T+h*V-p*P)*F,t[13]=(r*T-i*V+s*P)*F,t[14]=(-f*D+d*C-E*L)*F,t[15]=(A*D-g*C+c*L)*F,t}};let l=z;$(l,"lookAt",(e,o,t,r)=>{const i=e[0],s=e[1],a=e[2],w=o[0],h=o[1],p=o[2],y=t[0],A=t[1],g=t[2];if(i==w&&s==h&&a==p)return z.identity(r);let c=r;c==null&&(c=z.init());let v,f,d,E,b,L,C,S,D,u;return C=i-o[0],S=s-o[1],D=a-o[2],u=1/Math.sqrt(C*C+S*S+D*D),C*=u,S*=u,D*=u,v=A*D-g*S,f=g*C-y*D,d=y*S-A*C,u=Math.sqrt(v*v+f*f+d*d),u?(u=1/u,v*=u,f*=u,d*=u):(v=0,f=0,d=0),E=S*d-D*f,b=D*v-C*d,L=C*f-S*v,u=Math.sqrt(E*E+b*b+L*L),u?(u=1/u,E*=u,b*=u,L*=u):(E=0,b=0,L=0),c[0]=v,c[1]=E,c[2]=C,c[3]=0,c[4]=f,c[5]=b,c[6]=S,c[7]=0,c[8]=d,c[9]=L,c[10]=D,c[11]=0,c[12]=-(v*i+f*s+d*a),c[13]=-(E*i+b*s+L*a),c[14]=-(C*i+S*s+D*a),c[15]=1,c});const ie=(n,e)=>Math.random()*(e-n)+n,se=()=>{const n=document.createElement("canvas");n.width=window.innerWidth,n.height=window.innerHeight,document.body.appendChild(n);const e=n.getContext("webgl2");if(!e)throw new Error("Error!! Does not support WebGL2");const o=I(e,"VERTEX_SHADER",oe),t=I(e,"FRAGMENT_SHADER",re),r=W(e,o,t),i=[e.getAttribLocation(r,"aColor"),e.getAttribLocation(r,"aPosition")],s=O[0].vertexColor,a=O[0].verticesData,w=O[0].attributeSize,h=O[0].indicesData,y=j(e,{attributeLocationIndex:i,attributeSize:w,verticesData:[s,a],indicesData:h}),A=X(e,r,["modelViewProjectionMatrix"]),g=()=>{k(n,e,[0,0,0]);const c=l.identity(l.init()),v=l.identity(l.init()),f=l.identity(l.init()),d=l.identity(l.init()),E=N.set(0,0,3),b=N.set(0,0,0),L=N.set(0,1,0);l.lookAt(E,b,L,v),l.perspective(90,n.width/n.height,.1,100,f),l.multiply(f,v,d),l.multiply(d,c,d),e.uniformMatrix4fv(A[0],!1,d),e.bindVertexArray(y);const C=e.TRIANGLES,S=h.length,D=e.UNSIGNED_SHORT,u=0;e.drawElements(C,S,D,u),e.bindVertexArray(null)};window.addEventListener("resize",()=>{n.width=window.innerWidth,n.height=window.innerHeight,e.viewport(0,0,n.width,n.height),requestAnimationFrame(g)}),g()},Y=[{vertexColor:[1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1],verticesData:[-1,.5,0,-1,-.5,0,1,-.5,0,1,.5,0],attributeSize:[4,3],indicesData:[0,1,2,0,2,3]}];var Z=`#version 300 es\r
precision highp float;\r
precision highp int;\r
\r
in vec4 aColor;\r
in vec3 aPosition;\r
out vec4 vColor;\r
uniform mat4 modelViewProjectionMatrix;\r
void main(void){\r
\r
  vColor = aColor;\r
\r
  gl_Position = vec4(aPosition, 1.0) * modelViewProjectionMatrix;\r
}`,K=`#version 300 es\r
precision highp float;\r
precision highp int;\r
\r
in vec4 vColor;\r
\r
out vec4 fragColor;\r
\r
void main(void){\r
\r
  fragColor = vColor;\r
}`;const ce=()=>{const n=document.createElement("canvas");n.width=window.innerWidth,n.height=window.innerHeight,document.body.appendChild(n);const e=n.getContext("webgl2");if(!e)throw new Error("Error!! Does not support WebGL2");const o=I(e,"VERTEX_SHADER",Z),t=I(e,"FRAGMENT_SHADER",K),r=W(e,o,t),i=[e.getAttribLocation(r,"aColor"),e.getAttribLocation(r,"aPosition")],s=Y[0].vertexColor,a=Y[0].verticesData,w=Y[0].attributeSize,h=Y[0].indicesData,y=j(e,{attributeLocationIndex:i,attributeSize:w,verticesData:[s,a],indicesData:h}),A=X(e,r,["modelViewProjectionMatrix"]),g=()=>{k(n,e,[0,0,0]);const c=l.identity(l.init()),v=l.identity(l.init()),f=l.identity(l.init()),d=l.identity(l.init()),E=N.set(0,0,3),b=N.set(0,0,0),L=N.set(0,1,0);l.lookAt(E,b,L,v),l.perspective(90,n.width/n.height,.1,100,f),l.multiply(f,v,d),l.multiply(d,c,d),e.uniformMatrix4fv(A[0],!1,d),e.bindVertexArray(y);const C=e.TRIANGLES,S=h.length,D=e.UNSIGNED_SHORT,u=0;e.drawElements(C,S,D,u),e.bindVertexArray(null)};window.addEventListener("resize",()=>{n.width=window.innerWidth,n.height=window.innerHeight,e.viewport(0,0,n.width,n.height),requestAnimationFrame(g)}),g()},ae=()=>{const n=document.createElement("canvas");n.width=window.innerWidth,n.height=window.innerHeight,document.body.appendChild(n);const e=n.getContext("webgl2");if(!e)throw new Error("Error!! Does not support WebGL2");const o=I(e,"VERTEX_SHADER",Z),t=I(e,"FRAGMENT_SHADER",K),r=W(e,o,t),i=[e.getAttribLocation(r,"aColor"),e.getAttribLocation(r,"aPosition")],s=x(1,1),a=[4,3],w=s.colorData,h=s.verticesData,p=s.indicesData,A=j(e,{attributeLocationIndex:i,attributeSize:a,verticesData:[w,h],indicesData:p}),g=X(e,r,["modelViewProjectionMatrix"]),c=()=>{k(n,e,[0,0,0]);const v=l.identity(l.init()),f=l.identity(l.init()),d=l.identity(l.init()),E=l.identity(l.init()),b=N.set(0,0,3),L=N.set(0,0,0),C=N.set(0,1,0);l.lookAt(b,L,C,f),l.perspective(90,n.width/n.height,.1,100,d),l.multiply(d,f,E),l.multiply(E,v,E),e.uniformMatrix4fv(g[0],!1,E),e.bindVertexArray(A);const S=e.LINE_LOOP,D=p.length,u=e.UNSIGNED_SHORT,R=0;e.drawElements(S,D,u,R),e.bindVertexArray(null)};window.addEventListener("resize",()=>{n.width=window.innerWidth,n.height=window.innerHeight,e.viewport(0,0,n.width,n.height),requestAnimationFrame(c)}),c()},ue=n=>{const e=document.createElement("button");e.className="fullScreenButton",e.textContent="fullScreen",n.appendChild(e),e.addEventListener("click",()=>{n.requestFullscreen()})};const de=document.body;ue(de);window.addEventListener("DOMContentLoaded",()=>{const e=Math.floor(ie(0,[0,1,2,3].length));e===0?ne():e===1?se():e===2?ce():e===3&&ae()});
