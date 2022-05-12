import { Layout } from "components/Layout";
import { Search, Table } from "./styles";

export function Discography() {
  return (
    <Layout>
      <Search>
        <p>Digite uma palavra chave</p>
        <div>
          <input type="text" placeholder="Min" />
          <button>Procurar</button>
        </div>
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
