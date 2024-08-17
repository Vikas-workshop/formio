import React from "react";
type IProps = {
  name: string;
  className: string;
  callBack?: Function;
};
export default function CustomButton(props: IProps) {
  return (
    <div>
      <button
        type="button"
        className={props.className}
        onClick={() => {
          if (!!props.callBack) return props.callBack();
          return;
        }}
      >
        {props.name}
      </button>
    </div>
  );
}
