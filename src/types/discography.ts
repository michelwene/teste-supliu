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
