import { FaPlus } from "react-icons/fa";

import { useFormInput } from "./hooks";
import { TFormInput } from "./index.type";
import "./styles.scss";

const FormInput = ({ label, onAdd, id }: TFormInput) => {
  const {
    inputRef,
    onChange,
    onSubmit,
    preparingAddItem,
    showFormInput,
    content,
  } = useFormInput({ onAdd, id });

  return (
    <div className={`add-card ${showFormInput ? "open" : ""}`}>
      <div className="add-text" onClick={preparingAddItem}>
        <FaPlus />
        <label>{label}</label>
      </div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Typing ..."
          value={content}
          onChange={onChange}
          ref={inputRef}
        />
        <button type="submit">
          <label>Create</label>
        </button>
      </form>
    </div>
  );
};

export default FormInput;
