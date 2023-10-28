export class ItemMenu{
  id: number | undefined
  parentId: number | undefined;
  label: string | undefined;
  route: string | undefined;
  icon: string | undefined;
  permissionName: string | undefined;
  isActive?: boolean;
  isCollapsed?: boolean;
  children: ItemMenu[] | null;

  constructor(
    label: string | undefined,
    route: string | undefined,
    icon: string | undefined,
    children: ItemMenu[] = []
  )
  {
    this.label = label,
    this.route = route,
    this.icon = icon,
    this.children = children
  }

}
