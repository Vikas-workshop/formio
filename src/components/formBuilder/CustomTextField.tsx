import React from "react";
// import { Components } from "@formio/react";

const CustomTextField = (props: any) => {
  return (
    <div>
      <label>{props.label}</label>
      <input
        type="text"
        name={props.key}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
      />
    </div>
  );
};

export default CustomTextField;
