import { AxiosError } from "axios";
import { api } from "services/api";
import { AddNewTackProps } from "types/discography";
import { IFormAlbumData } from "types/registerAlbum";

class ManageDiscographyService {
  async createAlbum(payload: IFormAlbumData) {
    try {
      await api.post("/album", payload);
    } catch (err) {
      throw new Error("Nome do álbum já existente");
    }
  }

  async addNewTrack({ payload }: AddNewTackProps) {
    try {
      await api.post("/track", payload);
    } catch (err) {
      const error = err as AxiosError;
      if (error.response.status === 404) {
        throw new Error("Número da música ou nome já existentes");
      }
      throw new Error("Error ao adicionar uma nova faixa");
    }
  }
}

const manageDiscographyService = new ManageDiscographyService();

export { manageDiscographyService };
