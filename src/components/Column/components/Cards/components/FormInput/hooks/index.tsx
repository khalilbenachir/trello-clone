import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useFocus } from "../../../../../../../hooks/useFocus";
import { TFormInput } from "../index.type";

export const useFormInput = ({ onAdd, id }: TFormInput) => {
  const [showFormInput, setShowFormInput] = useState(false);
  const [content, setContent] = useState("");
  const inputRef = useFocus(showFormInput);
  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (content && onAdd) onAdd(id ?? "", content);
      setShowFormInput(false);
      setContent("");
    },
    [id, content, onAdd]
  );
  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setContent(event.target.value),
    [setContent]
  );
  const preparingAddItem = useCallback(() => {
    setShowFormInput(true);
  }, [setShowFormInput]);

  return {
    inputRef,
    onSubmit,
    onChange,
    preparingAddItem,
    showFormInput,
    content,
  };
};
