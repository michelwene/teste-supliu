import * as yup from "yup";

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
      "Digite um nome válido"
    ),
  duration: yup
    .number()
    .typeError("Digite um número válido")
    .required("Digite a duração da música")
    .integer("Digite um número inteiro")
    .positive("Digite um número positivo")
    .min(60, "Digite um número maior que 0")
    .max(600, "Digite um número menor que 600"),
});
