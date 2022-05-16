import { Layout } from "components/Layout";
import { Search, Table } from "./styles";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { Link } from "react-router-dom";
import { Spinner } from "components/Spinner";
import { toast } from "react-toastify";
import { api } from "services/api";
import { useState } from "react";
import { TableSkeleton } from "components/Skeleton";
import { Input } from "components/Form/Input";
import { LayoutButton } from "components/Button/styles";
import { AlbumData } from "types/discography";
import { CustomToast } from "components/CustomTostfy";
import { ItemTable } from "components/ItemTable";
import { InputError } from "components/InputError";

export function Discography() {
  const [isLoading, setIsLoading] = useState(false);
  const [albums, setAlbums] = useState<AlbumData[]>([]);
  const [search, setSearch] = useState("");

  async function handleSearch() {
    try {
      setIsLoading(true);

      const { data: response } = await api.get(`/album`, {
        params: {
          keyword: search,
          limit: 10,
          page: 1,
        },
      });
      if (response.data.length === 0) {
        toast(
          <CustomToast
            status="error"
            title="Ops..."
            message="Não foi encontrado nenhum álbum com este nome."
          />
        );
        setAlbums([]);
        return;
      }
      setAlbums(response.data);
    } catch (err) {
      toast(
        <CustomToast
          status="error"
          title="Ops..."
          message="Não foi possível buscar os álbuns."
        />
      );
    } finally {
      setIsLoading(false);
    }
  }

  async function handleRefetchAlbum({
    isFilter = false,
  }: {
    isFilter?: boolean;
  }) {
    try {
      const { data: response } = await api.get(`/album`, {
        params: {
          keyword: isFilter ? search : "",
          limit: 10,
          page: 1,
        },
      });
      setAlbums(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteAlbum(id: number) {
    try {
      await api.delete(`/album/${id}`);
      handleRefetchAlbum({ isFilter: true });
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
            <Input
              name="search"
              placeholder="Min"
              onChange={(e) => {
                setSearch(e.target?.value!);
                e.target.value === "" &&
                  (async () => await handleRefetchAlbum({ isFilter: false }))();
              }}
              value={search}
            />
          </div>
          <button
            type="button"
            onClick={() => handleSearch()}
            disabled={isLoading || search === "" || search.length < 3}
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
      {isLoading ? (
        Array(2)
          .fill(0)
          .map((_, index) => <TableSkeleton key={index} />)
      ) : albums.length > 0 ? (
        albums.map((album) => (
          <Table key={album.id}>
            <thead>
              <tr>
                <th>
                  Álbum: {album.name}, {album.year}
                </th>
                <LayoutButton
                  type="button"
                  onClick={() => handleDeleteAlbum(album.id)}
                >
                  Excluir álbum
                </LayoutButton>
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
                <ItemTable
                  track={track}
                  refetch={() => handleRefetchAlbum({ isFilter: true })}
                />
              ))}
            </tbody>
          </Table>
        ))
      ) : (
        <div>
          <InputError>Pesquise por algum álbum</InputError>
        </div>
      )}
    </Layout>
  );
}
