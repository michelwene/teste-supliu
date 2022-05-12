import { DeleteAlbum } from "components/DeleteAlbum";
import { DeleteTracks } from "components/DeleteTracks";
import { Layout } from "components/Layout";
import * as S from "./styles";
import { RegisterAlbum } from "components/RegisterAlbum";
import { RegisterTracks } from "components/RegisterTracks";
import { useState } from "react";
import { Link } from "react-router-dom";

export function ManageDiscography() {
  const [step, setStep] = useState(0);

  const handleSteps = {
    0: <RegisterAlbum />,
    1: <RegisterTracks />,
    2: <DeleteTracks />,
    3: <DeleteAlbum />,
  };

  const arrOptions = [
    {
      id: 0,
      label: "Registrar Álbum",
      onclick: () => setStep(0),
    },
    {
      id: 1,
      label: "Registrar Músicas",
      onclick: () => setStep(1),
    },
    {
      id: 2,
      label: "Deletar Músicas",
      onclick: () => setStep(2),
    },
    {
      id: 3,
      label: "Deletar Álbum",
      onclick: () => setStep(3),
    },
    {
      id: 4,
      label: "Voltar",
      onclick: () => <Link to={"/"}></Link>,
    },
  ];

  return (
    <Layout>
      <S.Content>
        {arrOptions.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={item.onclick}
            className={step === item.id ? "active" : ""}
          >
            {item.label}
          </button>
        ))}
      </S.Content>
      {handleSteps[step]}
    </Layout>
  );
}
