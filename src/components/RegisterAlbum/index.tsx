import { Content } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Spinner } from "components/Spinner";
import { FormLayout } from "components/FormLayout";
import { InputError } from "components/InputError";

interface IFormAlbumData {
  title: string;
  date: string;
}

const formAlbumSchema = yup.object({
  title: yup.string().required("Digite o nome do álbum"),
  date: yup.string().required("Digite a data de lançamento"),
});

export function RegisterAlbum() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormAlbumData>({
    resolver: yupResolver(formAlbumSchema),
  });
  async function handleFormSubmit(data: IFormAlbumData) {
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
        <h1>Adicionar Álbum</h1>
        <div>
          <input
            type="text"
            placeholder="Nome do Álbum"
            {...register("title")}
          />
          {errors.title && <InputError error={errors.title.message} />}
          <input type="date" placeholder="Ano do Álbum" {...register("date")} />
          {errors.date && <InputError error={errors.date.message} />}
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <Spinner>
                <div></div>
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
