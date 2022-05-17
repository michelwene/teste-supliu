import { api } from "services/api";

interface GetAlbumProps {
  search?: string;
}

class DiscographyService {
  async getAlbum({ search }: GetAlbumProps) {
    try {
      const { data } = await api.get("/album", {
        params: {
          keyword: search ?? "",
          limit: 10,
          page: 1,
        },
      });

      return data.data;
    } catch (err) {
      throw new Error("Error ao carregar dados dos albums");
    }
  }

  async deleteAlbum(id: number) {
    try {
      await api.delete(`/album/${id}`);
    } catch (err) {
      throw new Error("Error ao deletar o album");
    }
  }

  async deleteTrack(id: number) {
    try {
      await api.delete(`/track/${id}`);
    } catch (err) {
      throw new Error("Error ao deletar a faixa");
    }
  }
}

const discographyService = new DiscographyService();

export { discographyService };
