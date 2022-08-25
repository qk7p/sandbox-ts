import "../style/Components/PrimaryButton.css";

export interface IPrimaryButtonProps {
  buttonText: string;
  onClick: () => void;
}

export function PrimaryButton(props: IPrimaryButtonProps) {
  const { buttonText, onClick } = props;
  return (
    <>
      <button onClick={onClick} className="primaryButton">
        {buttonText}
      </button>
    </>
  );
}
