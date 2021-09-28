export default interface User {
  id: string;
  image: string | null;
  firstName: string;
  lastName: string;
  position: string;
  currentUser: boolean;
  ableToDelete: boolean;
  score: string;
  scramMaster: boolean;
  observer?: boolean;
  error?: string;
  isLoading?: boolean;
}
