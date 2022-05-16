import { IconButton } from "components/Button/styles";
import React, { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { api } from "services/api";
import { ItemTableProps } from "types/itemTable";

export const ItemTable = ({ track, refetch }: ItemTableProps) => {
  const [isLoading, setIsLoading] = useState(false);

  async function handleDeleteTrack(id: number) {
    try {
      setIsLoading(true);
      await api.delete(`/track/${id}`);
      await refetch();
    } catch (err) {
      console.log(err);
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
          <RiDeleteBin6Fill fontSize={20} color="black" />
        </IconButton>
      </div>
      <td>{converterSecondsToMinutes(track.duration)}</td>
    </tr>
  );
};
