export default interface Card {
  id: string;
  value: string;
  type: string;
  shortType: string;
  selected: boolean;
  closed: boolean;
  editable: boolean;
  onClick?: (e: Event) => void;
}
