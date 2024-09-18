import { useState } from "react";

export const useCustomHook = () => {
  const [state] = useState(false);

  return {
    state,
  };
};
