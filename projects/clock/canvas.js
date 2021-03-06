function clock() {
  var ctx = document.getElementById('canvas').getContext('2d');
  var now = new Date(),
      sec = now.getSeconds(),
      min = now.getMinutes(),
      hr = now.getHours();
  hr = hr > 12 ? hr - 12 : hr;

  //绘制表盘底色
  ctx.save();
  ctx.clearRect(0, 0, 400, 400);
  ctx.translate(200, 200);
  ctx.rotate(-Math.PI/2); //将坐标轴逆时针旋转90度，x轴正方向对准12点方向
  var lingrad = ctx.createLinearGradient(150, 0, -150, 0);
  lingrad.addColorStop(0, '#113f67');
  lingrad.addColorStop(1, '#226597');
  ctx.fillStyle = lingrad;
  ctx.beginPath();
  ctx.arc(0, 0, 150, 0, Math.PI * 2, true);
  ctx.fill();

  //小时刻度
  ctx.save();
  for (var i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 3;
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(140, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();

  //分钟刻度
  ctx.save();
  ctx.beginPath();
  for (i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
      ctx.beginPath();
      ctx.strokeStyle = '#f3f9fb';
      ctx.lineWidth = 2;
      ctx.moveTo(140, 0);
      ctx.lineTo(130, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  //时间文字
  ctx.save();
  ctx.rotate(Math.PI/2);
  ctx.beginPath();
  ctx.fillStyle = '#87c0cd';
  ctx.font = '24px Microsoft yahei';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('3', 106, 0);
  ctx.fillText('6', 0, 106);
  ctx.fillText('9', -106, 0);
  ctx.fillText('12', 0, -106);
  ctx.restore();

  //时针
  ctx.save();
  ctx.rotate(hr * (Math.PI / 6) + min * (Math.PI / 360) + sec * (Math.PI / 21600));
  ctx.lineWidth = 10;
  ctx.strokeStyle = '#fff';
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(100, 0);
  ctx.stroke();
  ctx.fillStyle = '#34434c';
  ctx.arc(90, 0, 3, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  //分针
  ctx.save();
  ctx.rotate(min * (Math.PI / 30) + sec * (Math.PI/1800));
  ctx.lineWidth = 6;
  ctx.strokeStyle = '#f3f9fb';
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(125, 0);
  ctx.stroke();

  ctx.lineWidth = 3;
  ctx.strokeStyle = '#34434c';
  ctx.beginPath();
  ctx.moveTo(120, 0);
  ctx.lineTo(105, 0);
  ctx.stroke();
  ctx.restore();

  //秒针
  ctx.save();
  ctx.rotate(sec * (Math.PI /30));
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.strokeStyle = '#fff';
  ctx.moveTo(0, 0);
  ctx.lineTo(141, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 12;
  ctx.strokeStyle = '#fff';
  ctx.moveTo(0, 0);
  ctx.lineTo(-38, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.fillStyle = '#fff';
  ctx.arc(0, 0, 15, 0, Math.PI * 2, true);
  ctx.fill();

  ctx.beginPath();
  ctx.strokeStyle = '#cdd2d5';
  ctx.lineWidth = 1;
  ctx.arc(0, 0, 8, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.restore();

  //边框
  ctx.beginPath();
  ctx.lineWidth = 7;
  var lingrad2 = ctx.createLinearGradient(150, 0, -150, 0);
  lingrad2.addColorStop(0, '#d9d9d9');
  lingrad2.addColorStop(1, '#d9d9d9');
  ctx.strokeStyle = lingrad2;
  ctx.arc(0,0,152,0,Math.PI*2,true);
  ctx.stroke();
  ctx.restore();

  window.requestAnimationFrame(clock);
}

clock()