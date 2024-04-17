import React from "react";
import { Icons } from "./icons";

const Loader = () => {
  return (
    <div className="flex-center w-full h-screen">
      <Icons.loading className="w-12 h-12 animate-spin" />
    </div>
  );
};

export default Loader;
