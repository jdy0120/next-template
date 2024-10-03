import {
  CheckboxBox,
  CheckboxContainer,
  CheckboxInput,
} from "./Checkbox.styles";

const Checkbox = () => {
  return (
    <CheckboxContainer>
      <CheckboxInput type="checkbox" />
      <CheckboxBox />
    </CheckboxContainer>
  );
};

export default Checkbox;
