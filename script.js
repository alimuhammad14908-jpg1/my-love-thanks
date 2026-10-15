const letter=document.getElementById('letter'), memories=document.getElementById('memories');
function sprinkleHearts(amount=12){
  const symbols=['♡','💗','💕','✦','💖','✨'];
  for(let i=0;i<amount;i++){
    const heart=document.createElement('span'); heart.className='float-heart';
    heart.textContent=symbols[Math.floor(Math.random()*symbols.length)];
    heart.style.left=(Math.random()*100)+'vw';
    heart.style.setProperty('--dur',(3+Math.random()*2.8)+'s');
    heart.style.setProperty('--size',(16+Math.random()*20)+'px');
    document.body.appendChild(heart); setTimeout(()=>heart.remove(),6200);
  }
}
document.getElementById('openLetter').addEventListener('click',()=>{letter.classList.remove('hidden');letter.scrollIntoView({behavior:'smooth',block:'start'});sprinkleHearts(16);});
document.getElementById('showMemories').addEventListener('click',()=>{memories.classList.remove('hidden');memories.scrollIntoView({behavior:'smooth',block:'start'});sprinkleHearts(20);});
document.getElementById('heartButton').addEventListener('click',()=>{document.getElementById('hug').classList.remove('hidden');sprinkleHearts(30);});
// A tiny sprinkle of hearts when the page opens.
window.addEventListener('load',()=>setTimeout(()=>sprinkleHearts(8),700));
