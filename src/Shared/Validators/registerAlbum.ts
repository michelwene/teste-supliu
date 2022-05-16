import * as yup from "yup";

export const formAlbumSchema = yup.object({
  name: yup
    .string()
    .required("Digite o nome do álbum")
    .matches(
      /^[A-z-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]*$/,
      "Digite apenas letras e espaços"
    ),
  year: yup
    .number()
    .required("Digite o ano de lançamento")
    .typeError("Digite um ano válido")
    .integer("Digite um ano válido")
    .positive("Digite um ano válido")
    .min(1950, "Digite um ano válido")
    .max(2030, "Ano de lançamento inválido"),
});
