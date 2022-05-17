import { Spinner } from "components/Spinner";
import { FormLayout } from "components/FormLayout";
import { Input } from "components/Form/Input";
import { CustomToast } from "components/CustomTostfy";
import { Content } from "./styles";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { IFormAlbumData } from "types/registerAlbum";
import { formAlbumSchema } from "Shared/Validators/schema";
import { manageDiscographyService } from "services/useCases/manageDiscographyService";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { AxiosError } from "axios";

export function RegisterAlbum() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IFormAlbumData>({
    resolver: yupResolver(formAlbumSchema),
  });

  async function handleFormSubmit(data: IFormAlbumData) {
    try {
      await manageDiscographyService.createAlbum(data);

      toast(
        <CustomToast
          status="success"
          title="Sucesso!"
          message="Álbum cadastrado com sucesso!"
        />
      );

      reset();
    } catch (err) {
      toast(
        <CustomToast
          status="error"
          title="Erro!"
          message={err.message ?? "Não foi possível cadastrar o álbum"}
        />
      );
    }
  }

  return (
    <FormLayout onSubmit={handleSubmit(handleFormSubmit)}>
      <Content>
        <h1>Adicionar Álbum</h1>
        <div>
          <Input
            type="text"
            {...register("name")}
            placeholder="Nome do Álbum"
            error={errors.name}
          />
          <Input
            type="number"
            placeholder="Ano do Álbum"
            {...register("year")}
            error={errors.year}
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
