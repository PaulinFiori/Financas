import { TreeNode } from "primeng/components/common/treenode";

export class ConfigTab {
  constructor(
    public description: string,
    public name: string,
    public values: TreeNode[],
    public selectedValues: TreeNode[]
  ) {}
}
