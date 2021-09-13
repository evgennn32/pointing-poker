export const issues = [
  {
    issueName: "test",
    priority: "test",
    selected: true,
  },
  {
    issueName: "test",
    priority: "test",
    selected: true,
  },
  {
    issueName: "test",
    priority: "test",
    selected: true,
  },
  {
    issueName: "test",
    priority: "test",
    selected: false,
  },
];
export const users = [
  {
    id: "1",
    image: "test",
    firstName: "test",
    lastName: "test",
    position: "test",
    currentUser: false,
    ableToDelete: true,
    score: "test",
  },
  {
    id: "2",
    image: "test",
    firstName: "test",
    lastName: "test",
    position: "test",
    currentUser: false,
    ableToDelete: true,
    score: "test",
  },
  {
    id: "3",
    image: "test",
    firstName: "test",
    lastName: "test",
    position: "test",
    currentUser: false,
    ableToDelete: true,
    score: "test",
  },
];

export const initialData = {
  tile: "Spring 23 planning (issues 13, 533, 5623, 3252, 6623, ...)",
  scrumMuster: {
    id: "4",
    image: "test",
    firstName: "Scram",
    lastName: "Master",
    position: "test",
    currentUser: false,
    ableToDelete: true,
    score: "test",
  },
};

export const cards = [
  {
    value: "12",
    type: "cup",
    shortType: "SP",
    selected: false,
    closed: false,
    editable: true,
  },
  {
    value: "12",
    type: "regular",
    shortType: "SP",
    selected: false,
    closed: false,
    editable: true,
  },
  {
    value: "12",
    type: "",
    shortType: "SP",
    selected: false,
    closed: false,
    editable: true,
  },
  {
    value: "12",
    type: "",
    shortType: "SP",
    selected: false,
    closed: false,
    editable: true,
  },
];

export const gameSettings = {
  scrumMasterAsPlayer: false,
  changingCardInRoundEnd: false,
  isTimerNeeded: false,
  scoreType: "Story Point",
  scoreTypeShort: "SP",
  roundTime: "2000",
  cardsArray: cards,
};
