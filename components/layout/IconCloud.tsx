"use client";

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
  SimpleIcon,
} from "simple-icons";

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
];

const icons = importedIcons.map((icon) =>
  renderSimpleIcon({
    icon,
    size: 42,
    aProps: {
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault(),
    },
  })
);

const IconCloud: React.FC = () => {
  return (
    <Cloud>
      {icons}

      <a>hello world</a>

      <a
        href="https://emojipedia.org/globe-showing-americas/"
        target="_blank"
        rel="noopener"
      >
        <img
          height={42}
          width={42}
          alt="A globe"
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/globe-showing-americas_1f30e.png"
        />
      </a>
    </Cloud>
  );
};

export default IconCloud;
