import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormLayout } from "components/FormLayout";
import { Spinner } from "components/Spinner";
import { Content } from "./styles";

interface IFormDeleteAlbumData {
  title: string;
}

const formDeleteAlbumSchema = yup.object({
  title: yup.string().required("O campo é obrigatório"),
});

export function DeleteAlbum() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormDeleteAlbumData>({
    resolver: yupResolver(formDeleteAlbumSchema),
  });

  async function handleFormSubmit(data: IFormDeleteAlbumData) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    try {
      console.log(data);
    } catch (err) {
      console.log(err);
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
