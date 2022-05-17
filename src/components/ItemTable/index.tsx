import { IconButton } from "components/Button/styles";
import { CustomToast } from "components/CustomTostfy";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { discographyService } from "services/useCases/discographyService";
import { ItemTableProps } from "types/discography";

export const ItemTable = ({ track, refetch }: ItemTableProps) => {
  const [isLoading, setIsLoading] = useState(false);

  async function handleDeleteTrack(id: number) {
    try {
      setIsLoading(true);
      await discographyService.deleteTrack(id);

      await refetch();
      toast(
        <CustomToast
          status="success"
          title="Sucesso!"
          message="Música deletada com sucesso!"
        />
      );
    } catch (err) {
      toast(
        <CustomToast
          status="error"
          title="Ops..."
          message="Não foi possível deletar a música."
        />
      );
    } finally {
      setIsLoading(false);
    }
  }

  function converterSecondsToMinutes(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes}:${secondsLeft}`;
  }

  return (
    <tr>
      <div>
        <td>{track.number}</td>
        <td>{track.title}</td>
        <IconButton
          type="button"
          onClick={() => handleDeleteTrack(track.id)}
          disabled={isLoading}
        >
          Deletar
        </IconButton>
      </div>
      <td>{converterSecondsToMinutes(track.duration)}</td>
    </tr>
  );
};
