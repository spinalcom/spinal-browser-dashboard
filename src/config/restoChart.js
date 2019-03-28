function handleGetDate(minusDate) {
  var d = new Date();
  d = d.setDate(d.getDate() - minusDate);
  return d;
}

const idx = [77, 77];

function gendata(x) {
  const date = handleGetDate(idx[x]--);
  return {
    x: date,
    y: genRand(date)
  };
}

function genRand(date) {
  var d = new Date(date);
  let nb;
  switch (d.getDay()) {
    case 0:
      return 0;
    case 1:
      nb = Math.floor(Math.random() * (60 * .10));
      break;
    case 2:
      nb = Math.floor(Math.random() * (60 * .5));
      break;
    case 3:
      nb = Math.floor(Math.random() * (60 * .40));
      return 60 - nb;
    case 4:
      nb = Math.floor(Math.random() * (60 * .5));
      break;
    case 5:
      nb = Math.floor(Math.random() * (60 * .20));
      break;
    case 6:
      return 0;

    default:
      nb = Math.floor(Math.random() * (60 * .20));

      break;
  }

  return 60 - nb;
}


const restoChart = {
  rightAlignYAxis: false,
  showControls: false,
  clipEdge: false,
  data: [{
    'key': 'Année courante',
    'color': '#f59c1a',
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
    'key': 'Année précédente',
    'color': '#348fe2',
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
  }]
};

// let it = 0;
// console.log(JSON.stringify(restoChart.data.map((e) => {
//   const data = e.values.map(
//     v => `gendata(${v.y}, ${it})`
//   );
//   it++;
//   return data;
// })));
// console.log(JSON.stringify(restoChart,null,2));

export default restoChart;
export {
  restoChart
};
