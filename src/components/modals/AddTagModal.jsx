import { useState } from "react";
import "./tags.css";
import { useTag } from "../../context";
import { ADD_TAG } from "../../shared/variables";
import { toast } from "react-toastify";

const AddTagModal = ({ setOpenTagModal }) => {
  const [tag, setTag] = useState("");
  const { tagDispatch } = useTag();
  const {
    tagState: { tags },
  } = useTag();

  const addNewTagHandler = () => {
    if (!tags.some((tags) => tags.toLowerCase() === tag.trim().toLowerCase())) {
      tagDispatch({ type: ADD_TAG, payload: tag });
      setTag("");
      setOpenTagModal(false);
    } else {
      toast.error("Tag already exists");
    }
  };
  return (
    <div className="tag-editor-wrapper">
      <div className="tag-container">
        <div>
          <button
            className="btn btn-secondary btn-float close-icon"
            onClick={() => setOpenTagModal(false)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <label htmlFor="tag-input" className="input-label fw-600">
          Add Tag name
        </label>
        <input
          id="tag-input"
          name="tag-input"
          className="input-text"
          placeholder="new tag name"
          value={tag}
          onChange={(e) => setTag(() => e.target.value)}
        />
        <button className="btn btn-primary" onClick={addNewTagHandler}>
          Add tag
        </button>
      </div>
    </div>
  );
};

export { AddTagModal };
