import React, { useEffect } from 'react';
import StarDisplay from '../shared-components/StarDisplay.jsx';

const ReviewBreakdown = (props) => {
  let biggest = 0;
  for (let f = 1; f <= 5; f++) {
    biggest = Number(props.ratings[f]) > biggest ? Number(props.ratings[f]) : biggest;
  }
  useEffect(() => {
    let canvas = document.getElementById('breakdown-ratings-chart');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 250, 250);

    ctx.fillStyle = 'black';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;

    for (let f = 1; f <= 5; f++) {
      ctx.fillStyle = 'black';
      ctx.fillText(f + ': ' + props.ratings[f], 10, (f * 50) - 25);
      ctx.fillStyle = 'gold';
      if (props.ratings[f] !== '0') {
        ctx.fillRect(50, (f * 50) - 30, (Number(props.ratings[f]) / biggest) * 200, 10);
      }
    }
    ctx.beginPath();
    ctx.moveTo(50, 0);
    ctx.lineTo(50, 250);
    ctx.stroke();
  }, []);

  return (<>
  <h4>Review Breakdown</h4>
  <div><StarDisplay name='breakdown-star-display' size={50} rating={props.avg}/></div>
  <div>{props.avg}</div>
  <div>
    <canvas id='breakdown-ratings-chart' width='250' height='250'></canvas>
  </div>
  <div>{Math.round(100 * props.rec[1] / (props.rec[0] + props.rec[1]))}% of customers recommend this product.</div>
  </>);
}

export default ReviewBreakdown;