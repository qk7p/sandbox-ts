import * as React from "react";
import '../style/NestingPage/CardHeader.css'

export interface IInputHeaderProps {
  header: string;
}

export function CardHeader(props: IInputHeaderProps) {
  const { header } = props;
  return <div className="cardHeader">
    <p>{header}</p>
    <hr className="horizontalDivider" />
  </div>;
}
