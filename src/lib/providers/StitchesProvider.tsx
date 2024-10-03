"use client";
import { useServerInsertedHTML } from "next/navigation";
import React, { useState } from "react";
import { globalStyles } from "../../styles/themes";
import { getCssText } from "../../styles/themes/stitches.config";

const StitchesProvider = ({ children }: { children: React.ReactNode }) => {
  const [isRendered, setIsRendered] = useState(false);

  useServerInsertedHTML(() => {
    if (!isRendered) {
      setIsRendered(true);
      globalStyles();
      return (
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      );
    }
  });

  return <>{children}</>;
};

export default StitchesProvider;
