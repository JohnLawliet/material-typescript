import { ReactChild, ReactChildren } from "react";

export interface AuxProps {
    children: ReactChild | ReactChildren;
}
  
// OverridableComponent<SvgIconTypeMap> in icon gives an error does not have any construct
// or call signatures
export interface IMenu {
    text: string,
    icon: any,
    path: string
}