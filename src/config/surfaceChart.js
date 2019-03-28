function handleGetDate(minusDate) {
  var d = new Date();
  d = d.setDate(d.getDate() - minusDate);
  return d;
}

const idx = [77, 77, 77];

function gendata(x) {
  const date = handleGetDate(idx[x]--);
  return {
    x: date,
    y: genRand(date, x)
  };
}

function genRand(date, x) {
  var d = new Date(date);
  let init = 100;
  if (x === 1) init = 70;
  if (x === 2) init = 60;
  let nb;
  switch (d.getDay()) {
    case 0:
      nb = Math.floor(Math.random() * (init * .8));
      return init - nb;
    case 1:
      nb = Math.floor(Math.random() * (init * .10));
      break;
    case 2:
      nb = Math.floor(Math.random() * (init * .15));
      break;
    case 3:
      nb = Math.floor(Math.random() * (init * .40));
      return init - nb;
    case 4:
      nb = Math.floor(Math.random() * (init * .5));
      break;
    case 5:
      nb = Math.floor(Math.random() * (init * .3));
      break;
    case 6:
      nb = Math.floor(Math.random() * (init * .60));
      return init - nb;

    default:
      nb = Math.floor(Math.random() * (init * .20));

      break;
  }

  return (nb % 2 === 0) ? init + nb : init - nb;
}


const areaChartData = {
  rightAlignYAxis: false,
  showControls: false,
  clipEdge: false,
  data: [{
    'key': 'RDC',
    // 'color': '#5AC8FA',
    'values': [
      gendata(0), gendata(0), gendata(0), gendata(0),
      gendata(0), gendata(0), gendata(0), gendata(0),
      gendata(0), gendata(0), gendata(0), gendata(0),
      gendata(0), gendata(0), gendata(0), gendata(0),
      gendata(0), gendata(0), gendata(0), gendata(0),
      gendata(0), gendata(0), gendata(0), gendata(0),
      gendata(0), gendata(0), gendata(0), gendata(0),
      gendata(0), gendata(0), gendata(0), gendata(0),
      gendata(0), gendata(0), gendata(0), gendata(0),
      gendata(0), gendata(0), gendata(0), gendata(0),
      gendata(0), gendata(0), gendata(0), gendata(0),
      gendata(0), gendata(0), gendata(0), gendata(0),
      gendata(0), gendata(0), gendata(0), gendata(0),
      gendata(0), gendata(0), gendata(0), gendata(0),
      gendata(0), gendata(0), gendata(0), gendata(0),
      gendata(0), gendata(0), gendata(0), gendata(0),
      gendata(0), gendata(0), gendata(0), gendata(0),
      gendata(0), gendata(0), gendata(0), gendata(0),
      gendata(0), gendata(0), gendata(0), gendata(0),
      gendata(0)
    ]
  }, {
    'key': 'Etage 1',
    // 'color': '#348fe2',
    'values': [
      gendata(1), gendata(1), gendata(1), gendata(1),
      gendata(1), gendata(1), gendata(1), gendata(1),
      gendata(1), gendata(1), gendata(1), gendata(1),
      gendata(1), gendata(1), gendata(1), gendata(1),
      gendata(1), gendata(1), gendata(1), gendata(1),
      gendata(1), gendata(1), gendata(1), gendata(1),
      gendata(1), gendata(1), gendata(1), gendata(1),
      gendata(1), gendata(1), gendata(1), gendata(1),
      gendata(1), gendata(1), gendata(1), gendata(1),
      gendata(1), gendata(1), gendata(1), gendata(1),
      gendata(1), gendata(1), gendata(1), gendata(1),
      gendata(1), gendata(1), gendata(1), gendata(1),
      gendata(1), gendata(1), gendata(1), gendata(1),
      gendata(1), gendata(1), gendata(1), gendata(1),
      gendata(1), gendata(1), gendata(1), gendata(1),
      gendata(1), gendata(1), gendata(1), gendata(1),
      gendata(1), gendata(1), gendata(1), gendata(1),
      gendata(1), gendata(1), gendata(1), gendata(1),
      gendata(1), gendata(1), gendata(1), gendata(1),
      gendata(1)
    ]
  }, {
    'key': 'Mezzanine',
    // 'color': '#348fe2',
    'values': [
      gendata(2), gendata(2), gendata(2), gendata(2),
      gendata(2), gendata(2), gendata(2), gendata(2),
      gendata(2), gendata(2), gendata(2), gendata(2),
      gendata(2), gendata(2), gendata(2), gendata(2),
      gendata(2), gendata(2), gendata(2), gendata(2),
      gendata(2), gendata(2), gendata(2), gendata(2),
      gendata(2), gendata(2), gendata(2), gendata(2),
      gendata(2), gendata(2), gendata(2), gendata(2),
      gendata(2), gendata(2), gendata(2), gendata(2),
      gendata(2), gendata(2), gendata(2), gendata(2),
      gendata(2), gendata(2), gendata(2), gendata(2),
      gendata(2), gendata(2), gendata(2), gendata(2),
      gendata(2), gendata(2), gendata(2), gendata(2),
      gendata(2), gendata(2), gendata(2), gendata(2),
      gendata(2), gendata(2), gendata(2), gendata(2),
      gendata(2), gendata(2), gendata(2), gendata(2),
      gendata(2), gendata(2), gendata(2), gendata(2),
      gendata(2), gendata(2), gendata(2), gendata(2),
      gendata(2), gendata(2), gendata(2), gendata(2),
      gendata(2)
    ]
  }]
};

// let it = 0;
// console.log(JSON.stringify(areaChartData.data.map((e) => {
//   const data = e.values.map(
//     v => `gendata(${v.y}, ${it})`
//   );
//   it++;
//   return data;
// })));
// console.log(JSON.stringify(areaChartData,null,2));

export default areaChartData;
export {
  areaChartData
};
