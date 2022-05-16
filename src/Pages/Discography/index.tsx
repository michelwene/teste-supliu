import { Layout } from "components/Layout";
import { Search, Table } from "./styles";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { InputError } from "components/InputError";
import { Spinner } from "components/Spinner";
import { api } from "services/api";
import { useState } from "react";
import { TableSkeleton } from "components/Skeleton";

const formInputSchema = yup.object({
  search: yup
    .string()
    .required("Digite uma palavra chave")
    .min(3, "Digite pelo menos 3 caracteres"),
});

type AlbumData = {
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
interface IFormSearchData {
  search: string;
}

export function Discography() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<IFormSearchData>({
    resolver: yupResolver(formInputSchema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [albums, setAlbums] = useState<AlbumData[]>([]);

  async function handleFormSubmit(data: IFormSearchData) {
    try {
      setIsLoading(true);

      const { data: response } = await api.get(`/album`, {
        params: {
          keyword: data.search,
          limit: 10,
          page: 1,
        },
      });
      if (response.data.length === 0) {
        setError("search", {
          type: "text",
          message: "Nenhum álbum encontrado",
        });
      }

      setAlbums(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDeleteAlbum(id: number) {
    try {
      await api.delete(`/album/${id}`);
      setAlbums(albums.filter((album) => album.id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteTrack(id: number) {
    try {
      await api.delete(`/track/${id}`);
      setAlbums(
        albums.filter(
          (album) => album.tracks.findIndex((track) => track.id === id) === -1
        )
      );
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Layout>
      <Search>
        <p>Digite uma palavra chave</p>
        <div>
          <div>
            <input type="text" placeholder="Min" {...register("search")} />
            {errors.search && <InputError error={errors.search.message} />}
          </div>
          <button
            type="button"
            onClick={handleSubmit(handleFormSubmit)}
            disabled={isLoading}
          >
            {isLoading ? (
              <Spinner>
                <AiOutlineLoading3Quarters size={20} />
                <p>Pesquisando...</p>
              </Spinner>
            ) : (
              "Pesquisar"
            )}
          </button>
          <Link to="/gerenciar-discografia">
            <button>Editar discografia</button>
          </Link>
        </div>
      </Search>
      {isLoading
        ? Array(2)
            .fill(0)
            .map((_, index) => <TableSkeleton key={index} />)
        : albums.map((album) => (
            <Table key={album.id}>
              <thead>
                <tr>
                  <th>
                    Álbum: {album.name}, {album.year}
                  </th>
                  <button
                    type="button"
                    onClick={() => handleDeleteAlbum(album.id)}
                  >
                    Excluir álbum
                  </button>
                </tr>
                <tr>
                  <div>
                    <td>Nº</td>
                    <td>Faixa</td>
                  </div>
                  <td>Duração</td>
                </tr>
              </thead>
              <tbody>
                {album.tracks.map((track) => (
                  <tr key={track.id}>
                    <div>
                      <td>{track.number}</td>
                      <td>{track.title}</td>
                    </div>
                    <td>{track.duration}</td>
                    <button
                      type="button"
                      onClick={() => handleDeleteTrack(track.id)}
                    >
                      Excluir álbum
                    </button>
                  </tr>
                ))}
              </tbody>
            </Table>
          ))}
    </Layout>
  );
}
