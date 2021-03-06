import { Route, Routes } from "react-router-dom";
import { ManageDiscography } from "./ManageDiscography";
import { Discography } from "./Discography";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Discography />} />
      <Route path="/gerenciar-discografia" element={<ManageDiscography />} />
    </Routes>
  );
}
