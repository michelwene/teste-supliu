import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Spinner } from "components/Spinner";
import { FormLayout } from "components/FormLayout";
import { Content } from "./styles";

interface IFormTracksData {
  number: string;
  title: string;
  duration: string;
  name: string;
}

const formTracksSchema = yup.object({
  name: yup.string().required("O campo é obrigatório"),
  number: yup.number().required("O campo é obrigatório"),
  title: yup.string().required("O campo é obrigatório"),
  duration: yup.number().required("O campo é obrigatório"),
});

export function RegisterTracks() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormTracksData>({
    resolver: yupResolver(formTracksSchema),
  });

  async function handleFormSubmit(data: IFormTracksData) {
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
        <h1>Adicionar nova música em um álbum</h1>
        <div>
          <input
            type="text"
            placeholder="Digite o nome do álbum"
            {...register("name")}
          />
          <input
            type="text"
            placeholder="Digite o número da Faixa"
            {...register("number")}
          />
          <input
            type="text"
            placeholder="Digite o nome da música"
            {...register("title")}
          />
          <input
            type="text"
            placeholder="Digite a duração da música"
            {...register("duration")}
          />
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
