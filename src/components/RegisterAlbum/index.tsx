import { Content } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { Spinner } from "components/Spinner";
import { FormLayout } from "components/FormLayout";
import { api } from "services/api";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { AxiosError } from "axios";
import { Input } from "components/Form/Input";
import { CustomToast } from "components/CustomTostfy";
import { formAlbumSchema } from "Shared/Validators/registerAlbum";
import { IFormAlbumData } from "types/registerAlbum";

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
      await api.post("/album", data);

      toast(
        <CustomToast
          status="success"
          title="Sucesso!"
          message="Álbum cadastrado com sucesso!"
        />
      );
      reset();
    } catch (err) {
      const error = err as AxiosError;
      if (error.response.status === 404) {
        toast(
          <CustomToast
            status="error"
            title="Erro!"
            message="Álbum já cadastrado!"
          />
        );
        return;
      }
      toast(
        <CustomToast
          status="error"
          title="Erro!"
          message="Erro ao cadastrar o álbum!"
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
