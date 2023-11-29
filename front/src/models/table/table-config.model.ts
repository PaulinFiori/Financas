import { TableColumnConfig } from "./table-column-config.model";

export class TableConfig {
  constructor(
    public serviceName: string,
    public entityName: string,
    public columns: TableColumnConfig[],
    public sort: string,
    public paginator?: boolean,
    public lazy?: boolean,
    public globalSearch?: any,
    public clickable?: boolean,
    public dataKey?: string,
    public rowExpand?: any,
    public listType?: string,
    public size?: number,
  ) {
    if (!size) this.size = 10;
  }
}
