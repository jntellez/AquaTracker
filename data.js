const exampleData = [
  {
    date: 1732339200000, // "2024-11-23" en timestamp
    totalConsumption: 2.5, // en litros
    activities: [
      { id: 1, name: "Ducha", amount: 1.5, time: 1732368000000 }, // "2024-11-23 08:00 AM"
      { id: 2, name: "Lavar platos", amount: 0.5, time: 1732386000000 }, // "2024-11-23 01:00 PM"
      { id: 3, name: "Regar plantas", amount: 0.5, time: 1732404000000 }, // "2024-11-23 06:00 PM"
    ],
  },
  {
    date: 1732425600000, // "2024-11-24"
    totalConsumption: 3.2,
    activities: [
      { id: 1, name: "Ducha", amount: 1.8, time: 1732449000000 }, // "2024-11-24 07:30 AM"
      { id: 2, name: "Lavar ropa", amount: 1.0, time: 1732461600000 }, // "2024-11-24 10:00 AM"
      { id: 3, name: "Lavar manos", amount: 0.4, time: 1732486800000 }, // "2024-11-24 05:00 PM"
    ],
  },
  {
    date: 1732512000000, // "2024-11-25"
    totalConsumption: 2.8,
    activities: [
      { id: 1, name: "Ducha", amount: 1.5, time: 1732535700000 }, // "2024-11-25 08:15 AM"
      { id: 2, name: "Lavar platos", amount: 0.8, time: 1732557600000 }, // "2024-11-25 02:00 PM"
      { id: 3, name: "Beber agua", amount: 0.5, time: 1732582200000 }, // "2024-11-25 07:30 PM"
    ],
  },
  {
    date: 1732598400000, // "2024-11-26"
    totalConsumption: 2.4,
    activities: [
      { id: 1, name: "Ducha", amount: 1.2, time: 1732621500000 }, // "2024-11-26 07:45 AM"
      { id: 2, name: "Beber agua", amount: 0.6, time: 1732636800000 }, // "2024-11-26 12:00 PM"
      { id: 3, name: "Lavar manos", amount: 0.6, time: 1732658400000 }, // "2024-11-26 06:00 PM"
    ],
  },
  {
    date: 1732684800000, // "2024-11-27"
    totalConsumption: 3.0,
    activities: [
      { id: 1, name: "Ducha", amount: 1.5, time: 1732703700000 }, // "2024-11-27 07:15 AM"
      { id: 2, name: "Cocinar", amount: 1.0, time: 1732725600000 }, // "2024-11-27 01:00 PM"
      { id: 3, name: "Lavar manos", amount: 0.5, time: 1732752000000 }, // "2024-11-27 08:00 PM"
    ],
  },
  {
    date: 1732771200000, // "2024-11-28"
    totalConsumption: 3.1,
    activities: [
      { id: 1, name: "Ducha", amount: 1.8, time: 1732790400000 }, // "2024-11-28 08:00 AM"
      { id: 2, name: "Regar plantas", amount: 0.8, time: 1732824000000 }, // "2024-11-28 06:00 PM"
      { id: 3, name: "Beber agua", amount: 0.5, time: 1732842000000 }, // "2024-11-28 09:00 PM"
    ],
  },
  {
    date: 1732857600000, // "2024-11-29"
    totalConsumption: 2.7,
    activities: [
      { id: 1, name: "Ducha", amount: 1.5, time: 1732881000000 }, // "2024-11-29 08:30 AM"
      { id: 2, name: "Lavar platos", amount: 0.8, time: 1732899000000 }, // "2024-11-29 01:30 PM"
      { id: 3, name: "Beber agua", amount: 0.4, time: 1732926000000 }, // "2024-11-29 07:00 PM"
    ],
  },
  {
    date: 1732944000000, // "2024-11-30"
    totalConsumption: 2.9,
    activities: [
      { id: 1, name: "Ducha", amount: 1.7, time: 1732963200000 }, // "2024-11-30 08:00 AM"
      { id: 2, name: "Cocinar", amount: 0.8, time: 1732984800000 }, // "2024-11-30 12:00 PM"
      { id: 3, name: "Lavar manos", amount: 0.4, time: 1733005800000 }, // "2024-11-30 06:30 PM"
    ],
  },
];

export default exampleData;
