import { Layout } from "components/Layout";
import { Search, Table } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { InputError } from "components/InputError";
import { Spinner } from "components/Spinner";

const formInputSchema = yup.object({
  search: yup
    .string()
    .required("Digite uma palavra chave")
    .min(3, "Digite pelo menos 3 caracteres"),
});

interface IFormSearchData {
  search: string;
}

export function Discography() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormSearchData>({
    resolver: yupResolver(formInputSchema),
  });

  async function handleFormSubmit(data: IFormSearchData) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    try {
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Layout>
      <Search>
        <p>Digite uma palavra chave</p>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div>
            <input type="text" placeholder="Min" {...register("search")} />
            {errors.search && <InputError error={errors.search.message} />}
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <Spinner>
                <div></div>
                <p>Pesquisando...</p>
              </Spinner>
            ) : (
              "Pesquisar"
            )}
          </button>
          <Link to="/gerenciar-discografia">
            <button>Editar discografia</button>
          </Link>
        </form>
      </Search>
      <Table>
        <thead>
          <tr>
            <th>Álbum: Rei do Gado, 1961</th>
          </tr>
          <tr>
            <div>
              <td>Nº</td>
              <td>Faixa</td>
            </div>
            <td>Duração</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <div>
              <td>11</td>
              <td>Minas Gerais</td>
            </div>
            <td>3:47</td>
          </tr>
        </tbody>
      </Table>
      <Table>
        <thead>
          <tr>
            <th>Álbum: Linha de Frente, 1964</th>
          </tr>
          <tr>
            <div>
              <td>Nº</td>
              <td>Faixa</td>
            </div>
            <td>Duração</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <div>
              <td>1</td>
              <td>O mineiro e o italiano</td>
            </div>
            <td>3:21</td>
          </tr>
          <tr>
            <div>
              <td>8</td>
              <td>Minha prece</td>
            </div>
            <td>2:42</td>
          </tr>
        </tbody>
      </Table>
    </Layout>
  );
}
