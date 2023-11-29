export const AppMessages = {
  REQUIRED_FIELD: "Este campo é obrigatório",
  EMPTY_TABLE: "Não foram encontrados resultados para esta pesquisa.",
  SERVER_ERROR: "Ocorreu um erro no servidor."
};

export function getSuccessSaveMessage(
  entidade: string,
  artigoMasculino: boolean
) {
  if (artigoMasculino) return `O ${entidade} foi salvo com sucesso!`;
  else return `A ${entidade} foi salva com sucesso!`;
}

export function getSuccessEditMessage(
  entidade: string,
  artigoMasculino: boolean
) {
  if (artigoMasculino) return `O ${entidade} foi alterado com sucesso!`;
  else return `A ${entidade} foi alterada com sucesso!`;
}
