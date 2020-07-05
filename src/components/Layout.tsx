import React, { ReactChild, ReactChildren } from 'react'
import { Navbar } from "./index";

interface LayoutPropsType {
  children: ReactChild | ReactChildren
}

export default (props: LayoutPropsType) => {
  return (
    <div className="layout">
      <Navbar />
      {props.children}
    </div>
  );
};