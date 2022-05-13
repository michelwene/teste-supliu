import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormLayout } from "components/FormLayout";
import { Spinner } from "components/Spinner";
import { Content } from "./styles";
import { useState } from "react";
import { InputError } from "components/InputError";

interface IFormDeleteAlbumData {
  title: string;
}

const formDeleteAlbumSchema = yup.object({
  title: yup.string().required("Digite o nome do álbum"),
});

export function DeleteAlbum() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormDeleteAlbumData>({
    resolver: yupResolver(formDeleteAlbumSchema),
  });

  const [errorRequest, setErrorRequest] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleFormSubmit(data: IFormDeleteAlbumData) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    try {
      setIsLoading(true);
      console.log(data);
    } catch (err) {
      setErrorRequest(err.message);
      console.log(err);
      setTimeout(() => {
        setErrorRequest(null);
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <FormLayout onSubmit={handleSubmit(handleFormSubmit)}>
      <Content>
        <h1>Excluir um álbum</h1>
        <div>
          <input
            type="text"
            placeholder="Digite o nome do álbum"
            {...register("title")}
          />
          {errors.title && <InputError error={errors.title.message} />}
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <Spinner>
                <div></div>
                <p>Excluindo...</p>
              </Spinner>
            ) : (
              "Excluir"
            )}
          </button>
        </div>
      </Content>
    </FormLayout>
  );
}
