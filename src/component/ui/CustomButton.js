import stylse from "./CustomButton.module.css";

const CustomButton = (props) => {
  const { text, onClick } = props;

  return (
    <button className={stylse.customButton} onClick={() => onClick()}>
      {text}
    </button>
  );
};

export default CustomButton;
