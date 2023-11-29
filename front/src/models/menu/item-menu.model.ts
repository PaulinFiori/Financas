export class ItemMenu {
  constructor(
    public nome: string,
    public url: string,
    public icone?: string,
    public filhos?: ItemMenu[],
    public role?: string
  ) {}
}
