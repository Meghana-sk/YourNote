import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./noteseditor.css";

const formats = ["bold", "italic", "underline", "strike", "image", "list"];

const modules = {
  toolbar: [
    ["bold", "italic", "strike"],
    [],
    [{ list: "ordered" }, { list: "bulle" }],
    [],
    ["image"],
  ],
};

const NotesEditor = () => {
  return (
    <ReactQuill
      theme="snow"
      formats={formats}
      modules={modules}
      className="react-quill-container"
      placeholder="Add your note here..."
    />
  );
};

export { NotesEditor };
