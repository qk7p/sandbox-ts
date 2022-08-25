import * as React from "react";

export interface IBodyTitle {
  pageTitle: string;
  pageDescription: string;
}

export function BodyTitle(props: IBodyTitle) {
  const { pageTitle, pageDescription } = props;
  return (
    <div className="pageHeader">
      <h1 className="pageTitle">{pageTitle}</h1>
      <hr className="horizontalDivider" />
      <p className="pageDescription">{pageDescription}</p>
    </div>
  );
}
