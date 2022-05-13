import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Spinner } from "components/Spinner";
import { FormLayout } from "components/FormLayout";
import { Content } from "./styles";
import { InputError } from "components/InputError";

interface IFormTracksData {
  number: string;
  title: string;
  duration: string;
  name: string;
}

const formTracksSchema = yup.object({
  name: yup.string().required("O campo nome é obrigatório"),
  number: yup
    .number()
    .required("Digite o número da música")
    .typeError("Digite um número válido")
    .integer("Digite um número inteiro")
    .positive("Digite um número positivo")
    .min(1, "Digite um número maior que 0"),
  title: yup.string().required("Digite o nome da música"),
  duration: yup.string().required("Digite a duração da música"),
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
          {errors.name && <InputError error={errors.name.message} />}

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
            placeholder="Digite a duração da música"
            {...register("duration")}
          />
          {errors.duration && <InputError error={errors.duration.message} />}

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
