import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormLayout } from "components/FormLayout";
import { Spinner } from "components/Spinner";
import { Content } from "./styles";
import { InputError } from "components/InputError";

interface IFormDeleteTracksData {
  title: string;
}

const formDeleteTracksSchema = yup.object({
  title: yup.string().required("Digite o nome da música"),
});

export function DeleteTracks() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormDeleteTracksData>({
    resolver: yupResolver(formDeleteTracksSchema),
  });

  async function handleFormSubmit(data: IFormDeleteTracksData) {
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
        <h1>Excluir uma música</h1>
        <div>
          <input
            type="text"
            placeholder="Digite o nome da música"
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
