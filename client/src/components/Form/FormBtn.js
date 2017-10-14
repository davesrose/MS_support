import React from "react";

export const FormBtn = props =>
  <button {...props} style={{ float: "left", "backgroundColor": "#20315A", "color": "white"}} className="btn btn-success">
    <i className="fa fa-floppy-o"></i> {props.children}
  </button>;
