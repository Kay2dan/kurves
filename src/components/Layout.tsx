import React, { ReactChild, ReactChildren } from 'react'
import { Navbar } from "./index";

interface LayoutPropsType {
  children: ReactChildren | ReactChild
}

export default (props: LayoutPropsType) => {
  return (
    <div className="layout">
      <Navbar />
      {props.children}
    </div>
  );
};