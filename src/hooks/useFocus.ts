import { useEffect, useRef } from "react";

export const useFocus = (shouldFocus = false) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (shouldFocus) ref.current?.focus();
  }, [shouldFocus]);

  return ref;
};
