import { Container, InputContainer } from "./styles";

export const Input = ({
  label,
  icon: Icon,
  name,
  register,
  error,
  ...rest
}) => {
  return (
    <Container error={error}>
      <div className="label">
        {label} {!!error && <span> - {error}</span>}
      </div>
      <InputContainer error={error}>
        {Icon && <Icon size={20} />} 
        <input {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  );
};
