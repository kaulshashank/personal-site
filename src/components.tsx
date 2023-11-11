import { css } from "@emotion/react";

interface LinkButtonProps {
  text: string;
  icon: JSX.Element;
  link: string;
}

export function LinkButton(props: LinkButtonProps) {
  const { text, icon, link } = props;
  return (
    <a
      href={link}
      target="_blank"
      css={css`
        background-color: var(--white);
        border-radius: var(--border-radius);

        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 0.75rem;

        padding: 0 2.5rem;

        cursor: pointer;
        &:hover {
          background-color: var(--tertiary);
          h4 {
            color: var(--white);
          }
          transform: scale(1.05);
        }
        transition: 100ms transform ease-in-out;

        box-shadow: var(--elevation-2);
      `}
    >
      {icon}
      <h4>{text}</h4>
    </a>
  );
}
