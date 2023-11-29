import { FormInput } from "../../models/form/form-input.model";

export const PROFISSIONAL_FORM_CONFIG: FormInput[] = [
  {
    type: "switch",
    name: "ativo",
    description: "Ativo",
    required: false,
    columns: 4
  },
  {
    type: "photo",
    name: "foto",
    description: "Foto",
    required: false,
    columns: 4
  },
  {
    type: "text",
    name: "nome",
    description: "Nome",
    required: true,
    columns: 4,
    disabled: false
  },
  {
    type: "text",
    name: "nomeCartalDigital",
    description: "Nome Cartão",
    required: false,
    columns: 4
  },
  {
    type: "multiselect",
    name: "regionais",
    description: "Regionais",
    required: true,
    columns: 4,
    options: {
      serviceName: "regionais/lista-ativos",
      value: "id",
      label: "nome",
      placeholder: "Selecione ao menos uma regional"
    }
  },
  {
    type: "dropdown",
    name: "tipo",
    description: "Tipo de Pessoa",
    required: true,
    columns: 2,
    options: {
      values: [
        { label: "Física", value: "FISICA" },
        { label: "Jurídica", value: "JURIDICA" }
      ],
      placeholder: "Selecione um tipo de pessoa"
    },
    artigoMasculino: true
  },
  {
    type: "cpf",
    name: "cpfCnpj",
    description: "CPF/CNPJ",
    required: true,
    columns: 2
  },
  {
    type: "text",
    name: "rg",
    description: "RG",
    required: false,
    columns: 2
  },
  {
    type: "date-dm",
    name: "dataNascimento",
    description: "Nascimento",
    required: true,
    columns: 2,
    options: { monthNavigator: true, yearNavigator: true }
  },
  {
    type: "radio",
    name: "sexo",
    description: "Sexo",
    required: true,
    columns: 2,
    options: [
      { value: "MASCULINO", label: "Masculino" },
      { value: "FEMININO", label: "Feminino" }
    ]
  },
  {
    type: "dropdown",
    name: "profissao",
    description: "Profissão",
    required: true,
    columns: 2,
    options: {
      serviceName: "profissoes",
      value: "id",
      label: "nome",
      placeholder: "Selecione uma profissão"
    },
    artigoMasculino: false
  },
  {
    type: "text",
    name: "numeroConselho",
    description: "Número do conselho",
    required: false,
    columns: 2,
    options: {
      placeholder: "Obrigatório apenas para Arquiteto"
    }
  },
  {
    type: "endereco",
    name: "endereco",
    description: "",
    required: true,
    columns: 4
  },
  {
    type: "telefone",
    name: "telefoneResidencial",
    description: "Telefone",
    required: false,
    columns: 2
  },
  {
    type: "telefone",
    name: "telefoneCelular",
    description: "Celular",
    required: true,
    columns: 2
  },
  {
    type: "icon",
    name: "facebook",
    description: "Facebook",
    required: false,
    columns: 2,
    options: { icon: "fab fa-facebook-square", placeholder: "/nomeusuario" }
  },
  {
    type: "icon",
    name: "instagram",
    description: "Instagram",
    required: false,
    columns: 2,
    options: { icon: "fab fa-instagram", placeholder: "@nomeusuario" }
  },
  {
    type: "list",
    name: "socios",
    description: "Sócios",
    required: false,
    columns: 2,
    options: {
      nome: null,
      telefone: null,
      dataNascimento: null
    }
  },
  {
    type: "text",
    name: "site",
    description: "Site",
    required: false,
    columns: 4
  },
  {
    type: "textarea",
    name: "localizacao",
    description: "Link Google Maps",
    required: false,
    columns: 4
  },
  {
    type: "textarea",
    name: "observacao",
    description: "Observação",
    required: false,
    columns: 4
  },
  {
    type: "email",
    name: "email",
    description: "Email",
    required: true,
    columns: 4
  },
  {
    type: "password",
    name: "senha",
    description: "Senha",
    required: true,
    columns: 4,
    options: { isEditing: false, confirmSenha: "confirmacaoSenha" }
  },
  {
    type: "date",
    name: "createdDate",
    description: "Data da criação",
    required: false,
    columns: 4,
    disabled: true
  }
];