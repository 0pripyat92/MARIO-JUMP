const mario =document.querySelector('.mario');

const jump = () => {
mario.classList.add('jump');

setTimeout(() => {
    mario.classList.remove('jump');
},500);
}
const loop =setInterval(() => {
    const pipePosition = pipe.offsetLeft;
 console.log(pipePosition);
 if(pipePosition </=120)
}, 10);
document.addEventListener('keydown', jump);
