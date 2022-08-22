import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules } from "./editorToolbar";
import "react-quill/dist/quill.snow.css";

export const Editor = ({...rest}) => {
    const {value,handleChange,placeholder} =rest;

  return (
    <div className="text-editor">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        modules={modules}
      />
      <EditorToolbar />
    </div>
  );
};

export default Editor;
