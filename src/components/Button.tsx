import "../style/Components/Button.css";

export interface IButtonProps {
  buttonText: string;
  onClick: () => void;
  className: string;
}

export function Button(props: IButtonProps) {
  const { buttonText, onClick, className } = props;
  return (
    <>
      <button onClick={onClick} className={className}>
        {buttonText}
      </button>
    </>
  );
}
