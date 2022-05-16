import { DeleteAlbum } from "components/DeleteAlbum";
import { DeleteTracks } from "components/DeleteTracks";
import { Layout } from "components/Layout";
import * as S from "./styles";
import { RegisterAlbum } from "components/RegisterAlbum";
import { RegisterTracks } from "components/RegisterTracks";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createBrowserHistory } from "history";
import {
  RiFolderMusicFill,
  RiMusic2Fill,
  RiDeleteBinLine,
} from "react-icons/ri";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { TiFolderDelete } from "react-icons/ti";

export function ManageDiscography() {
  const [step, setStep] = useState(0);

  const history = createBrowserHistory();
  const handleSteps = {
    0: <RegisterAlbum />,
    1: <RegisterTracks />,
  };

  const arrOptions = [
    {
      id: 0,
      label: "Registrar Álbum",
      onclick: () => setStep(0),
      icon: <RiFolderMusicFill />,
    },
    {
      id: 1,
      label: "Registrar Música",
      onclick: () => setStep(1),
      icon: <RiMusic2Fill />,
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
            {item.icon}
            {item.label}
          </button>
        ))}
        <Link to="/">
          <button type="button">
            <AiOutlineArrowLeft />
            Voltar
          </button>
        </Link>
      </S.Content>
      {handleSteps[step]}
    </Layout>
  );
}
