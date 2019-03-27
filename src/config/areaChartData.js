function handleGetDate(minusDate) {
  var d = new Date();
  d = d.setDate(d.getDate() - minusDate);
  return d;
}
function handleGetDateLastYear(minusDate) {
  var d = new Date();
  d = d.setDate(d.getDate() - minusDate);
  // d = d.setFullYear(d.getFullYear() - 1);

  return d;
}
const areaChartData = {
  rightAlignYAxis: false,
  showControls: false,
  clipEdge: false,
  data: [{
    'key': 'Année courante',
    'color': '#5AC8FA',
    'values': [{
      x: handleGetDate(77),
      y: 13
    }, {
      x: handleGetDate(76),
      y: 13
    }, {
      x: handleGetDate(75),
      y: 6
    },
    {
      x: handleGetDate(73),
      y: 6
    }, {
      x: handleGetDate(72),
      y: 6
    }, {
      x: handleGetDate(71),
      y: 5
    }, {
      x: handleGetDate(70),
      y: 5
    },
    {
      x: handleGetDate(69),
      y: 5
    }, {
      x: handleGetDate(68),
      y: 6
    }, {
      x: handleGetDate(67),
      y: 7
    }, {
      x: handleGetDate(66),
      y: 6
    },
    {
      x: handleGetDate(65),
      y: 9
    }, {
      x: handleGetDate(64),
      y: 9
    }, {
      x: handleGetDate(63),
      y: 8
    }, {
      x: handleGetDate(62),
      y: 10
    },
    {
      x: handleGetDate(61),
      y: 10
    }, {
      x: handleGetDate(60),
      y: 10
    }, {
      x: handleGetDate(59),
      y: 10
    }, {
      x: handleGetDate(58),
      y: 9
    },
    {
      x: handleGetDate(57),
      y: 9
    }, {
      x: handleGetDate(56),
      y: 10
    }, {
      x: handleGetDate(55),
      y: 9
    }, {
      x: handleGetDate(54),
      y: 9
    },
    {
      x: handleGetDate(53),
      y: 8
    }, {
      x: handleGetDate(52),
      y: 8
    }, {
      x: handleGetDate(51),
      y: 8
    }, {
      x: handleGetDate(50),
      y: 8
    },
    {
      x: handleGetDate(49),
      y: 8
    }, {
      x: handleGetDate(48),
      y: 7
    }, {
      x: handleGetDate(47),
      y: 7
    }, {
      x: handleGetDate(46),
      y: 6
    },
    {
      x: handleGetDate(45),
      y: 6
    }, {
      x: handleGetDate(44),
      y: 6
    }, {
      x: handleGetDate(43),
      y: 6
    }, {
      x: handleGetDate(42),
      y: 5
    },
    {
      x: handleGetDate(41),
      y: 5
    }, {
      x: handleGetDate(40),
      y: 4
    }, {
      x: handleGetDate(39),
      y: 4
    }, {
      x: handleGetDate(38),
      y: 5
    },
    {
      x: handleGetDate(37),
      y: 5
    }, {
      x: handleGetDate(36),
      y: 5
    }, {
      x: handleGetDate(35),
      y: 7
    }, {
      x: handleGetDate(34),
      y: 7
    },
    {
      x: handleGetDate(33),
      y: 7
    }, {
      x: handleGetDate(32),
      y: 10
    }, {
      x: handleGetDate(31),
      y: 9
    }, {
      x: handleGetDate(30),
      y: 9
    },
    {
      x: handleGetDate(29),
      y: 10
    }, {
      x: handleGetDate(28),
      y: 11
    }, {
      x: handleGetDate(27),
      y: 11
    }, {
      x: handleGetDate(26),
      y: 8
    },
    {
      x: handleGetDate(25),
      y: 8
    }, {
      x: handleGetDate(24),
      y: 7
    }, {
      x: handleGetDate(23),
      y: 8
    }, {
      x: handleGetDate(22),
      y: 9
    },
    {
      x: handleGetDate(21),
      y: 8
    }, {
      x: handleGetDate(20),
      y: 9
    }, {
      x: handleGetDate(19),
      y: 10
    }, {
      x: handleGetDate(18),
      y: 9
    },
    {
      x: handleGetDate(17),
      y: 10
    }, {
      x: handleGetDate(16),
      y: 16
    }, {
      x: handleGetDate(15),
      y: 17
    }, {
      x: handleGetDate(14),
      y: 16
    },
    {
      x: handleGetDate(13),
      y: 17
    }, {
      x: handleGetDate(12),
      y: 16
    }, {
      x: handleGetDate(11),
      y: 15
    }, {
      x: handleGetDate(10),
      y: 14
    },
    {
      x: handleGetDate(9),
      y: 24
    }, {
      x: handleGetDate(8),
      y: 18
    }, {
      x: handleGetDate(7),
      y: 15
    }, {
      x: handleGetDate(6),
      y: 14
    },
    {
      x: handleGetDate(5),
      y: 16
    }, {
      x: handleGetDate(4),
      y: 16
    }, {
      x: handleGetDate(3),
      y: 17
    }, {
      x: handleGetDate(2),
      y: 7
    },
    {
      x: handleGetDate(1),
      y: 7
    }, {
      x: handleGetDate(0),
      y: 7
    }
    ]
  }, {
    'key': 'Année précédente',
    'color': '#348fe2',
    'values': [{
      x: handleGetDateLastYear(77),
      y: 14
    }, {
      x: handleGetDateLastYear(76),
      y: 13
    }, {
      x: handleGetDateLastYear(75),
      y: 15
    },
    {
      x: handleGetDateLastYear(73),
      y: 14
    }, {
      x: handleGetDateLastYear(72),
      y: 13
    }, {
      x: handleGetDateLastYear(71),
      y: 15
    }, {
      x: handleGetDateLastYear(70),
      y: 16
    },
    {
      x: handleGetDateLastYear(69),
      y: 16
    }, {
      x: handleGetDateLastYear(68),
      y: 14
    }, {
      x: handleGetDateLastYear(67),
      y: 14
    }, {
      x: handleGetDateLastYear(66),
      y: 13
    },
    {
      x: handleGetDateLastYear(65),
      y: 12
    }, {
      x: handleGetDateLastYear(64),
      y: 13
    }, {
      x: handleGetDateLastYear(63),
      y: 13
    }, {
      x: handleGetDateLastYear(62),
      y: 15
    },
    {
      x: handleGetDateLastYear(61),
      y: 16
    }, {
      x: handleGetDateLastYear(60),
      y: 16
    }, {
      x: handleGetDateLastYear(59),
      y: 17
    }, {
      x: handleGetDateLastYear(58),
      y: 17
    },
    {
      x: handleGetDateLastYear(57),
      y: 18
    }, {
      x: handleGetDateLastYear(56),
      y: 15
    }, {
      x: handleGetDateLastYear(55),
      y: 15
    }, {
      x: handleGetDateLastYear(54),
      y: 15
    },
    {
      x: handleGetDateLastYear(53),
      y: 19
    }, {
      x: handleGetDateLastYear(52),
      y: 19
    }, {
      x: handleGetDateLastYear(51),
      y: 18
    }, {
      x: handleGetDateLastYear(50),
      y: 18
    },
    {
      x: handleGetDateLastYear(49),
      y: 17
    }, {
      x: handleGetDateLastYear(48),
      y: 16
    }, {
      x: handleGetDateLastYear(47),
      y: 18
    }, {
      x: handleGetDateLastYear(46),
      y: 18
    },
    {
      x: handleGetDateLastYear(45),
      y: 18
    }, {
      x: handleGetDateLastYear(44),
      y: 16
    }, {
      x: handleGetDateLastYear(43),
      y: 14
    }, {
      x: handleGetDateLastYear(42),
      y: 14
    },
    {
      x: handleGetDateLastYear(41),
      y: 13
    }, {
      x: handleGetDateLastYear(40),
      y: 14
    }, {
      x: handleGetDateLastYear(39),
      y: 13
    }, {
      x: handleGetDateLastYear(38),
      y: 10
    },
    {
      x: handleGetDateLastYear(37),
      y: 9
    }, {
      x: handleGetDateLastYear(36),
      y: 10
    }, {
      x: handleGetDateLastYear(35),
      y: 11
    }, {
      x: handleGetDateLastYear(34),
      y: 11
    },
    {
      x: handleGetDateLastYear(33),
      y: 11
    }, {
      x: handleGetDateLastYear(32),
      y: 10
    }, {
      x: handleGetDateLastYear(31),
      y: 9
    }, {
      x: handleGetDateLastYear(30),
      y: 10
    },
    {
      x: handleGetDateLastYear(29),
      y: 13
    }, {
      x: handleGetDateLastYear(28),
      y: 14
    }, {
      x: handleGetDateLastYear(27),
      y: 14
    }, {
      x: handleGetDateLastYear(26),
      y: 13
    },
    {
      x: handleGetDateLastYear(25),
      y: 12
    }, {
      x: handleGetDateLastYear(24),
      y: 11
    }, {
      x: handleGetDateLastYear(23),
      y: 13
    }, {
      x: handleGetDateLastYear(22),
      y: 13
    },
    {
      x: handleGetDateLastYear(21),
      y: 13
    }, {
      x: handleGetDateLastYear(20),
      y: 13
    }, {
      x: handleGetDateLastYear(19),
      y: 14
    }, {
      x: handleGetDateLastYear(18),
      y: 13
    },
    {
      x: handleGetDateLastYear(17),
      y: 13
    }, {
      x: handleGetDateLastYear(16),
      y: 19
    }, {
      x: handleGetDateLastYear(15),
      y: 21
    }, {
      x: handleGetDateLastYear(14),
      y: 22
    },
    {
      x: handleGetDateLastYear(13),
      y: 25
    }, {
      x: handleGetDateLastYear(12),
      y: 24
    }, {
      x: handleGetDateLastYear(11),
      y: 24
    }, {
      x: handleGetDateLastYear(10),
      y: 22
    },
    {
      x: handleGetDateLastYear(9),
      y: 16
    }, {
      x: handleGetDateLastYear(8),
      y: 15
    }, {
      x: handleGetDateLastYear(7),
      y: 12
    }, {
      x: handleGetDateLastYear(6),
      y: 12
    },
    {
      x: handleGetDateLastYear(5),
      y: 15
    }, {
      x: handleGetDateLastYear(4),
      y: 15
    }, {
      x: handleGetDateLastYear(3),
      y: 15
    }, {
      x: handleGetDateLastYear(2),
      y: 18
    },
    {
      x: handleGetDateLastYear(2),
      y: 18
    }, {
      x: handleGetDateLastYear(0),
      y: 17
    }
    ]
  }]
};
export default areaChartData;
export {
  areaChartData
};
