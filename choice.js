function drawGraph(ctx, selectedValue) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  
    const equations = [
      (x)=>0,
      (x) => x ** 3 + 4 * x ** 2 + x + 1,
      (x) => x ** 2 - 2,
      (x) => (-1 / 2) * x ** 2 + x + 2,
    ];
  
    const minX = -5;
    const maxX = 5;
    const minY = -10;
    const maxY = 10;
    const step = 0.1;
    const scaleX = ctx.canvas.width / (maxX - minX);
    const scaleY = ctx.canvas.height / (maxY - minY);
  
    ctx.beginPath();
    ctx.moveTo(0, ctx.canvas.height - (equations[selectedValue - 1](minX) - minY) * scaleY);
    for (let x = minX; x <= maxX; x += step) {
      ctx.lineTo((x - minX) * scaleX, ctx.canvas.height - (equations[selectedValue - 1](x) - minY) * scaleY);
    }
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.stroke();

    const backCanvas = document.getElementById("graph1b");
    const backCtx = backCanvas.getContext("2d");
    const backWidth = backCanvas.width;
    const backHeight = backCanvas.height;

    backCtx.beginPath();
    backCtx.moveTo(0, backHeight / 2);
    backCtx.lineTo(backWidth, backHeight / 2);
    backCtx.strokeStyle = "black";
    backCtx.lineWidth = 1;
    backCtx.stroke();

    backCtx.beginPath();
    backCtx.moveTo(backWidth / 2, 0);
    backCtx.lineTo(backWidth / 2, backHeight);
    backCtx.strokeStyle = "black";
    backCtx.lineWidth = 1;
    backCtx.stroke();
  }
