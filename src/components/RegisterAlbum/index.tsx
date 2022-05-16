import { Content } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Spinner } from "components/Spinner";
import { FormLayout } from "components/FormLayout";
import { InputError } from "components/InputError";
import { api } from "services/api";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState } from "react";
import { SubmitSuccess } from "components/SubmitSuccessful";
import { AxiosError } from "axios";
import { Input } from "components/Form/Input";

interface IFormAlbumData {
  name: string;
  year: string;
}

const formAlbumSchema = yup.object({
  name: yup.string().required("Digite o nome do álbum"),
  year: yup
    .number()
    .required("Digite o ano de lançamento")
    .typeError("Digite um ano válido")
    .integer("Digite um ano válido")
    .positive("Digite um ano válido")
    .min(1950, "Digite um ano válido")
    .max(2030, "Ano de lançamento inválido"),
});

export function RegisterAlbum() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<IFormAlbumData>({
    resolver: yupResolver(formAlbumSchema),
  });
  const [submitsuccess, setSubmitsuccess] = useState(false);

  async function handleFormSubmit(data: IFormAlbumData) {
    try {
      await api.post("/album", data);
      setSubmitsuccess(true);
    } catch (err) {
      const error = err as AxiosError;
      if (error.response.status === 404) {
        setError("name", {
          type: "text",
          message: "O nome do álbum já está sendo usado",
        });
      }
      console.log(err);
    } finally {
      setTimeout(() => {
        setSubmitsuccess(false);
      }, 3000);
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
          {submitsuccess && (
            <SubmitSuccess>Álbum adicionado com sucesso!</SubmitSuccess>
          )}
        </div>
      </Content>
    </FormLayout>
  );
}
