const surface = 477*2.4;

var barChartData = [
  {
    key: "Cumulative Return",
    values: [
      { label: "RH", value: surface * 0.1, color: "#ff5b57" },
      { label: "Locaux Technique", value: surface * 0.05, color: "#f59c1a" },
      { label: "Achat", value: surface * 0.15, color: "#00ACAC" },
      { label: "IT", value: surface * 0.45, color: "#5AC8FA" },
      { label: "Direction Finance", value: surface * 0.2, color: "#348fe2" },
      { label: "Commerce", value: surface * 0.05, color: "#727cb6" }
    ]
  }
];

export default barChartData;
export {barChartData};
