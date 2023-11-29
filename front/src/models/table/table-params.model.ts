export class TableParams {
  constructor(
    public filters: any,
    public first: number,
    public globalFilter: string,
    public multiSortMeta: any,
    public rows: number,
    public sortField: any,
    public sortOrder: number
  ) {}
}
