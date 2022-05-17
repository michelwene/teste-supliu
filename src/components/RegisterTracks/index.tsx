import { Spinner } from "components/Spinner";
import { FormLayout } from "components/FormLayout";
import { InputError } from "components/InputError";
import { Input } from "components/Form/Input";
import { CustomToast } from "components/CustomTostfy";
import { Content } from "./styles";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";

import { AlbumData, IFormTracksData } from "types/registerTracks";
import { formTracksSchema } from "Shared/Validators/schema";
import { discographyService } from "services/useCases/discographyService";
import { manageDiscographyService } from "services/useCases/manageDiscographyService";

export function RegisterTracks() {
  const {
    register,
    setValue,
    reset,
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

      await manageDiscographyService.addNewTrack({ payload });

      toast(
        <CustomToast
          status="success"
          title="Sucesso!"
          message="Música cadastrada com sucesso!"
        />
      );
      reset();
    } catch (err) {
      toast(
        <CustomToast
          status="error"
          title="Ops..."
          message={err.message ?? "Não foi possível cadastrar a música"}
        />
      );
    }
  }

  useEffect(() => {
    (async () => {
      const data = await discographyService.getAlbum({});
      setAlbums(data);
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
          {errors.select && <InputError>{errors.select.message}</InputError>}
          <Input
            type="number"
            placeholder="Digite o número da Faixa"
            {...register("number")}
            error={errors.number}
          />
          <Input
            type="text"
            placeholder="Digite o nome da música"
            {...register("title")}
            error={errors.title}
          />
          <Input
            type="text"
            placeholder="Duração da música em segundos"
            {...register("duration")}
            error={errors.duration}
          />

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
