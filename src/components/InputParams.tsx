
import "../style/NestingPage/InputParams.css"

export interface IInputParamsProps {
  placeholder: string;
  changeHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export function InputParams(props: IInputParamsProps) {
  const { placeholder, changeHandler } = props;
  return (
    <>
      <input
        className="inputParams"
        type="number"
        placeholder={placeholder}
        onChange={changeHandler}
      />
    </>
  );
}
