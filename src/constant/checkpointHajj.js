export const checkpointHajj = {
  1: {
    recent: "Wukuf di Arafah",
    next: "Tawaf",
    color: "red",
    activityPercent: 20,
  },
  2: {
    recent: "Tawaf",
    next: "Sa'i",
    color: "yellow",
    activityPercent: 40,
  },
  3: {
    recent: "Sa'i",
    next: "Tahalul",
    color: "green",
    activityPercent: 60,
  },
  4: {
    recent: "Lempar Jumrah",
    next: "Tahallul",
    color: "blue",
    activityPercent: 80,
  },
  5: {
    recent: "Tahallul",
    next: "-",
    color: "blue",
    activityPercent: 100,
  },
};

export const checkpointLonLat = {
  1: {
    latitude: -6.2714636596703865,
    longitude: 106.81692836752656,
  },
  2: {
    latitude: 0,
    longitude: 0,
  },
};

export const checkpointTimeline = [
  { step: 1, label: "Wukuf" },
  { step: 2, label: "Tawaf" },
  { step: 3, label: "Sa'i" },
  { step: 4, label: "Lempar Jumrah" },
  { step: 5, label: "Tahallul" },
];
