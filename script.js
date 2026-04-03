const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

const segments = ["25rb","50rb","100rb","200rb","500rb","1jt","2jt","5jt"];
const colors = ["#FFDDC1","#FFABAB","#FFC3A0","#D5AAFF","#85E3FF","#FFFD82","#B9FBC0","#FAF3DD"];
let startAngle = 0;
let spinAngleStart = 0;
let spinTime = 0;
let spinTimeTotal = 0;

// Draw wheel
function drawWheel(){
  const numSegments = segments.length;
  const arc = 2*Math.PI/numSegments;
  ctx.clearRect(0,0,500,500);
  for(let i=0;i<numSegments;i++){
    const angle = startAngle + i*arc;
    ctx.fillStyle = colors[i%colors.length];
    ctx.beginPath();
    ctx.moveTo(250,250);
    ctx.arc(250,250,250,angle,angle+arc);
    ctx.lineTo(250,250);
    ctx.fill();

    ctx.save();
    ctx.translate(250 + Math.cos(angle+arc/2)*150, 250 + Math.sin(angle+arc/2)*150);
    ctx.rotate(angle+arc/2 + Math.PI/2);
    ctx.fillStyle = "#000";
    ctx.font = "bold 20px Arial";
    ctx.fillText(segments[i], -ctx.measureText(segments[i]).width/2,0);
    ctx.restore();
  }
}
drawWheel();

// Spin
document.getElementById("spin").addEventListener("click", ()=>{
  spinAngleStart = Math.random()*10+10;
  spinTime = 0;
  spinTimeTotal = Math.random()*3000+4000;
  rotateWheel();
});

function rotateWheel(){
  spinTime += 30;
  if(spinTime >= spinTimeTotal){
    stopRotateWheel();
    return;
  }
  const spinAngle = spinAngleStart*(1 - spinTime/spinTimeTotal);
  startAngle += spinAngle*Math.PI/180;
  drawWheel();
  requestAnimationFrame(rotateWheel);
}

function stopRotateWheel(){
  const degrees = startAngle*180/Math.PI + 90;
  const arcd = 360/segments.length;
  const index = Math.floor((360-(degrees%360))/arcd);
  alert("Kamu menang: "+segments[index]);
}