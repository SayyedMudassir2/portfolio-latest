"use client";

import { useEffect, useMemo, useState } from "react";
import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import {
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siNodedotjs,
  siGit,
  siTailwindcss,
  siMongodb,
  siExpress,
  siPython,
  siPostman,
  siFigma,
  siVercel,
  siGithub,
  siFirebase,
  siNpm,
  siShadcnui,
  SimpleIcon,
} from "simple-icons";

const useIcons = () => {
  return useMemo(() => {
    const importedIcons: SimpleIcon[] = [
      siHtml5,
      siCss,
      siJavascript,
      siTypescript,
      siReact,
      siNextdotjs,
      siNodedotjs,
      siGit,
      siTailwindcss,
      siMongodb,
      siExpress,
      siPython,
      siPostman,
      siFigma,
      siVercel,
      siGithub,
      siFirebase,
      siNpm,
      siShadcnui,
    ];
    return importedIcons.map((icon) =>
      renderSimpleIcon({
        icon,
        size: 42,
        aProps: {
          onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
            e.preventDefault(),
        },
      })
    );
  }, []);
};

const IconCloud: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const icons = useIcons();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const cloudProps = {
    options: {
      wheelZoom: false,
    },
  };

  return <Cloud {...cloudProps}>{icons}</Cloud>;
};

export default IconCloud;