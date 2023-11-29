import { secureCopy } from "../app.helpers";
export class Usuario {
  constructor(
    public id?: number,
    public cpfCnpj?: string,
    public nome?: string,
    public senha?: string,
    public email?: string,
    public telefoneCelular?: string,
    public telefoneResidencial?: string,
    public telefoneComercial?: string,
    public foto?: any,
    public ativo?: boolean,
    public dataNascimento?: Date
  ) {}

  formatUser(user: any) {
    let newUser = secureCopy(user);

    if (newUser.dataNascimento)
      newUser.dataNascimento = new Date(newUser.dataNascimento);

    newUser.senhaAlterada = false;

    return newUser;
  }
}
