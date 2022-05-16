import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Spinner } from "components/Spinner";
import { FormLayout } from "components/FormLayout";
import { Content } from "./styles";
import { InputError } from "components/InputError";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useEffect, useState } from "react";
import { api } from "services/api";

interface IFormTracksData {
  number: string;
  title: string;
  duration: string;
  select: string;
}

const formTracksSchema = yup.object().shape({
  select: yup.string().required("Selecione uma das opções"),
  number: yup
    .number()
    .required("Digite o número da música")
    .typeError("Digite um número válido")
    .integer("Digite um número inteiro")
    .positive("Digite um número positivo")
    .min(1, "Digite um número maior que 0"),
  title: yup.string().required("Digite o nome da música"),
  duration: yup
    .number()
    .typeError("Digite um número válido")
    .required("Digite a duração da música")
    .integer("Digite um número inteiro")
    .positive("Digite um número positivo")
    .min(30, "Digite um número maior que 0"),
});

interface AlbumData {
  id: number;
  name: string;
}

export function RegisterTracks() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormTracksData>({
    mode: "onChange",
    resolver: yupResolver(formTracksSchema),
  });
  const [albums, setAlbums] = useState<AlbumData[]>([]);

  async function handleFormSubmit(data: IFormTracksData) {
    try {
      const payload = {
        album_id: Number(data.select),
        number: Number(data.number),
        title: data.title,
        duration: Number(data.duration),
      };

      await api.post("/track", payload);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/album");
      setAlbums(data.data);
    })();
  }, []);

  return (
    <FormLayout onSubmit={handleSubmit(handleFormSubmit)}>
      <Content>
        <h1>Adicionar nova música em um álbum</h1>
        <div>
          <label htmlFor="SelectAlbum">Escolha um álbum</label>
          <select
            id="SelectAlbum"
            {...register("select")}
            onChange={(e) =>
              setValue("select", e.target.value, { shouldValidate: true })
            }
          >
            <option value="">Selecione um álbum</option>
            {albums.map((album) => (
              <option key={album.id} value={album.id}>
                {album.name}
              </option>
            ))}
          </select>
          {errors.select && <InputError error={errors.select.message} />}

          <input
            type="number"
            placeholder="Digite o número da Faixa"
            {...register("number")}
          />
          {errors.number && <InputError error={errors.number.message} />}

          <input
            type="text"
            placeholder="Digite o nome da música"
            {...register("title")}
          />
          {errors.title && <InputError error={errors.title.message} />}

          <input
            type="text"
            placeholder="Duração da música em segundos"
            {...register("duration")}
          />
          {errors.duration && <InputError error={errors.duration.message} />}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <Spinner>
                <AiOutlineLoading3Quarters size={20} />
                <p>Adicionando...</p>
              </Spinner>
            ) : (
              "Adicionar"
            )}
          </button>
        </div>
      </Content>
    </FormLayout>
  );
}
