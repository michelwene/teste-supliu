export interface ItemTableProps {
  track: {
    id?: number;
    duration: number;
    number: number;
    title: string;
  };
  refetch: () => void;
}
