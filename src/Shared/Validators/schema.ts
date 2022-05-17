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
    .min(1950, "O ano de lançamento deve ser maior que 1950")
    .max(2030, "O ano de lançamento deve ser menor que 2030"),
});

export const formTracksSchema = yup.object().shape({
  select: yup.string().required("Selecione uma das opções"),
  number: yup
    .number()
    .required("Digite o número da música")
    .typeError("Digite um número válido")
    .integer("Digite um número inteiro")
    .positive("Digite um número positivo")
    .min(1, "Digite um número maior que 0")
    .max(100, "Digite um número menor que 100"),
  title: yup
    .string()
    .required("Digite o nome da música")
    .matches(
      /^[A-z-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]*$/,
      "Digite apenas letras e espaços"
    ),
  duration: yup
    .number()
    .typeError("Digite um número válido")
    .required("Digite a duração da música")
    .integer("Digite um número inteiro")
    .positive("Digite um número positivo")
    .min(60, "Digite um número maior que 60s")
    .max(600, "Digite um número menor que 600s"),
});
