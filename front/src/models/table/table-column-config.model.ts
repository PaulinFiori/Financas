import { TableColumnFilter } from "./table-column-filter.model";

export class TableColumnConfig {
  constructor(
    public name: string,
    public description: string,
    public styleClass?: string,
    public template?: any,
    public sortable?: boolean,
    public filter?: TableColumnFilter
  ) {}
}
