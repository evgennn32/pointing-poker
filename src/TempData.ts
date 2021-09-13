export const issues = [
  {
    issueName: "test1",
    priority: "test",
    selected: true,
    id: "1",
    link: "test",
  },
  {
    issueName: "test2",
    priority: "test",
    selected: true,
    id: "2",
    link: "test",
  },
  {
    issueName: "test3",
    priority: "test",
    selected: true,
    id: "3",
    link: "test",
  },
  {
    issueName: "test4",
    priority: "test",
    selected: false,
    id: "4",
    link: "test",
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
    image: "",
    firstName: "test",
    lastName: "test",
    position: "test",
    currentUser: false,
    ableToDelete: true,
    score: "test",
  },
];

export const initialData = {
  title: "Spring 23 planning (issues 13, 533, 5623, 3252, 6623, ...)",
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

export const currentUser = {
  id: "54",
  image: "test",
  firstName: "Scram",
  lastName: "Master",
  position: "test",
  currentUser: false,
  ableToDelete: true,
  score: "test",
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
