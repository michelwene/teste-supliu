export type AlbumData = {
  id: number;
  name: string;
  tracks: [
    {
      id?: number;
      duration: number;
      number: number;
      title: string;
    }
  ];
  year: number;
};

export interface ItemTableProps {
  track: {
    id?: number;
    duration: number;
    number: number;
    title: string;
  };
  refetch: () => Promise<void>;
}

export interface AddNewTackProps {
  payload: {
    album_id: number;
    number: number;
    title: string;
    duration: number;
  };
}
