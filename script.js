const menuBtn=document.querySelector('.menu-btn');
    const navList=document.querySelector('nav ul');
    menuBtn.onclick=()=>navList.style.display=navList.style.display==='flex'?'none':'flex';

    /* ===== PARTICLES ===== */
    const canvas=document.getElementById("particles");
    const ctx=canvas.getContext("2d");
    let particles=[];
    function resize(){canvas.width=innerWidth;canvas.height=innerHeight;}
    addEventListener("resize",resize);resize();
    for(let i=0;i<90;i++){
      particles.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*2+0.5,
        sx:(Math.random()-0.5)*0.4,
        sy:(Math.random()-0.5)*0.4,
      });
    }
    function draw(){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle="rgba(79,163,255,0.8)";
      for(let p of particles){
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fill();
        p.x+=p.sx;p.y+=p.sy;
        if(p.x<0)p.x=canvas.width;if(p.x>canvas.width)p.x=0;
        if(p.y<0)p.y=canvas.height;if(p.y>canvas.height)p.y=0;
      }
      for(let i=0;i<particles.length;i++){
        for(let j=i+1;j<particles.length;j++){
          const dx=particles[i].x-particles[j].x;
          const dy=particles[i].y-particles[j].y;
          const dist=Math.sqrt(dx*dx+dy*dy);
          if(dist<120){
            const op=1-dist/120;
            ctx.strokeStyle=`rgba(79,163,255,${op*0.3})`;
            ctx.lineWidth=0.7;
            ctx.beginPath();
            ctx.moveTo(particles[i].x,particles[i].y);
            ctx.lineTo(particles[j].x,particles[j].y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    }
    draw();