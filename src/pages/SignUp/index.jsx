import { FaUserAlt, FaEnvelope, FaPhoneAlt, FaDigitalTachograph, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { Input } from "../../components/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/Button";
import { Container } from "./styles";
import { Column, ContainerFlex } from "./styles";
import { useState } from "react";
import {useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";

const SignUp = () => {
  const [fullname, setFullname] = useState('');
  const [maskedCpf, setMaskedCpf] = useState('');
  const [maskedCellPhone, setMaskedCellPhone] = useState('');
  const navigate = useNavigate();

  let currentDate = new Date();
  currentDate.setFullYear(currentDate.getFullYear()-120);

  const minDate = currentDate;



  const validCharacters = /^[a-zA-Z-áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇç\'\s]+$/
  const fullNamePattern = /^(?:([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)) (?:([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*))$/g
  
  const schema = yup.object().shape({
    fullname: yup.string().required("Campo Obrigatório")
    .min(3,"Seu nome deve conter pelo menos 3 caracteres")
    .trim()
    .matches(/^[^0-9]+$/, "Seu nome não pode conter números")
    .matches(validCharacters, "Seu nome não pode conter caracteres especias, @#$%*(")
    .matches(fullNamePattern,'Digite seu nome completo'),
    username: yup.string().required("Campo Obrigatório")
    .matches(/^(\S+$)/g, "User name não pode conter espaços em branco")
    .min(6, "Mínimo 6 caracteres"),
    email: yup.string().required("Campo Obrigatório").email('Email inválido'),
    cellphone: yup.string().required("Campo Obrigatório").min(14, "Número de telefone inválido"),
    cpf:yup.string().required("Campo Obrigatório").min(14,'CPF Inválido'),
    country: yup.string().required("Campo Obrigatório"),
    state: yup.string().required("Campo Obrigatório"),
    city: yup.string().required("Campo Obrigatório"),
    birthday: yup.date().required("Campo Obrigatório")
    .max(new Date(), "Data inválida")
    .min(minDate, "Data Inválida")
    .typeError('Data Inválida')

  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur'
  });



  const onSubmitFunction = (data) => {
    navigate('/dashboard')
  };

  const avoidDuplicatedWhiteSpaces = (value) => {
    const fullnameEdited = value.replace(/\s{2,}/, ' ')

    setFullname(fullnameEdited)
  }

  const maskCPF = (value) => {
      value = value.replace(/\D/g,"")
      value = value.replace(/(\d{3})(\d)/,"$1.$2")
      value = value.replace(/(\d{3})(\d)/,"$1.$2")
      value = value.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
      setMaskedCpf(value)
  }

  const maskCellNumber = (value) => {
    value = value.replace(/\D/g,"")
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d{4,5})(\d)/,"$1-$2")
    setMaskedCellPhone(value)
}

 

  return (
    <>
      <Container>
        <div>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h2>Solicitação de Cadastro</h2>
            <ContainerFlex>
              <Column>
                <Input
                  label="Nome Completo"
                  icon={FaUserAlt}
                  name="fullname"
                  type="text"
                  register={register}
                  error={errors.fullname?.message}
                  onChange={(e) => avoidDuplicatedWhiteSpaces(e.currentTarget.value)}
                  value={fullname}
                  placeholder="Nome Completo"
                />
                <Input
                  label="Username"
                  icon={FaUserAlt}
                  name="username"
                  type="text"
                  register={register}
                  error={errors.username?.message}
                  placeholder="Username"
                />
                <Input
                  label="Email"
                  icon={FaEnvelope}
                  name="email"
                  type="email"
                  register={register}
                  error={errors.email?.message}
                  placeholder='exemplo@email.com'
                />
                <Input
                  label="Telefone"
                  icon={FaPhoneAlt}
                  name="cellphone"
                  type="phone"
                  register={register}
                  error={errors.cellphone?.message}
                  placeholder="(99) 9999-9999"
                  onChange={(e) => maskCellNumber(e.currentTarget.value)}
                  value={maskedCellPhone}
                  maxLength='15'
                />
                <Input
                label="Data de Nascimento"
                icon={FaCalendarAlt}
                name="birthday"
                type="date"
                register={register}
                error={errors.birthday?.message}
                placeholder="dd/mm/aaaa"
              />
              </Column>
              <Column>
                <Input
                  label="CPF"
                  icon={FaDigitalTachograph}
                  name="cpf"
                  type="text"
                  register={register}
                  error={errors.cpf?.message}
                  onChange={(e) => maskCPF(e.currentTarget.value)}
                  value={maskedCpf}
                  maxLength={"14"}
                  placeholder='123.456.789.10'
                />
              <Input
                label="País"
                icon={FaMapMarkerAlt}
                name="country"
                type="text"
                register={register}
                error={errors.country?.message}
                placeholder="Ex.: Brasil"
              />
              <Input
                label="Estado"
                icon={FaMapMarkerAlt}
                name="state"
                type="text"
                register={register}
                error={errors.state?.message}
                placeholder="Ex.: São Paulo"
              />
              <Input
                label="Cidade"
                icon={FaMapMarkerAlt}
                name="city"
                type="text"
                register={register}
                error={errors.city?.message}
                placeholder="Ex.: Vitória"
              />
              </Column>

            </ContainerFlex>
            <Button>cadastrar</Button>
          </form>
        </div>
        <Logo/>
      </Container>
    </>
  );
};

export default SignUp;
