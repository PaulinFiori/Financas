import { ItemMenu } from "../models/menu/item-menu.model";

export const MENU_USUARIO: ItemMenu[] = [
  {
    nome: "Início",
    url: "/index",
    icone: "fa fa-home"
  },
  {
    nome: "Meu perfil",
    url: "/perfil",
    icone: "fa fa-user"
  },
  {
    nome: "Minhas finanças",
    url: "/financas",
    icone: "fa fa-money"
  }
];
