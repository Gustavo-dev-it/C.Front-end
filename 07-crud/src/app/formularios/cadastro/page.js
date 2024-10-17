'use client'

import Pagina from '@/components/Pagina'
import { Formik } from 'formik'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { FaCheck, FaTrash } from 'react-icons/fa'
import * as Yup from "yup"
import ReactInputMask from 'react-input-mask'

export default function CadastroPage() {

    function cadastrar(aluno) {

      // Recebo os dados do aluno do formulario
        console.log(aluno)
        // Busco no localStorage a lista de alunos, se nao existir crio uma nova vazia
         const alunos = JSON.parse(localStorage.getItem('alunos')) || []
        // Acrescento o novo aluno na lista
         alunos.push(aluno)
        // Gravar a nova lista de alunos no localStorage, Substituindo a antiga
        localStorage.setItem('alunos',JSON.stringify(alunos))

      
      }


  const initialValues = {
    nome: '',
    sobrenome: '',
    email:'',
    dataNascimento:'',
    telefone:'',
    endereco:{

    cep:'',
    logradouro:'',
    numero:'',
    complemento:'',
    bairro:'',
    cidade:'',
    uf:''
    },

    faculdade:'',
    curso:'',
    periodo:'',
    matricula:'',
    foto:''

  }

 const validationSchema = Yup.object().shape({

    nome: Yup.string().min(2).required("O campo é obrigátorio!"),
    sobrenome: Yup.string().required("O campo é obrigátorio!"),
    email: Yup.string().email("Email Inválido").required("O campo é obrigátorio!"),
    dataNascimento: Yup.date("Data inválida").required("O campo é obrigátorio!"),
    telefone: Yup.string().min(14, "Telefone Inválido").required("O campo é obrigátorio!"),
    endereco:Yup.object().shape({

    cep: Yup.string().required("O campo é obrigátorio!"),
    logradouro: Yup.string().required("O campo é obrigátorio!"),
    numero: Yup.string().required("O campo é obrigátorio!"),
    complemento:Yup.string(),
    bairro: Yup.string().required("O campo é obrigátorio!"),
    cidade: Yup.string().required("O campo é obrigátorio!"),
    uf: Yup.string().required("O campo é obrigátorio!"),
    }),
    
    faculdade: Yup.string().required("O campo é obrigátorio!"),
    curso: Yup.string().required("O campo é obrigátorio!"),
    periodo: Yup.string().required("O campo é obrigátorio!"),
    matricula: Yup.string().required("O campo é obrigátorio!"),

    

 })


  return (
    <Pagina titulo={"Cadastro de Aluno"}>

      {/* Formulário de Cadastro de Aluno */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={cadastrar}
      >
        {({ values, errors, touched, handleBlur,handleSubmit, handleReset, handleChange }) => (

          <Form onSubmit={handleSubmit}>
            <div className='text-center'>
                <h3>Dados Pessoais:</h3>
                <hr/>
            </div>

            <Row className='mb-2'>
              <Form.Group as={Col}>
                <Form.Label>Nome:</Form.Label>
                <Form.Control
                  name='nome'
                  type='text'
                  value={values.nome}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.nome && !errors.nome}
                  isInvalid={touched.nome && !!errors.nome}
                />

                <Form.Control.Feedback type='invalid'>{errors.nome}</Form.Control.Feedback>

              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Sobrenome:</Form.Label>
                <Form.Control
                  name='sobrenome'
                  type='text'
                  value={values.sobrenome}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.sobrenome && !errors.sobrenome}
                  isInvalid={touched.sobrenome && !!errors.sobrenome}
                />
                <Form.Control.Feedback type='invalid'>{errors.sobrenome}</Form.Control.Feedback>

              </Form.Group>
              
            </Row>

            <Row className='mb-2'>
              <Form.Group as={Col}>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  name='email'
                  type='email'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.email && !errors.email}
                  isInvalid={touched.email && !!errors.email}
                />

                <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>

              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Data de Nascimento:</Form.Label>
                <Form.Control 
                  name='dataNascimento'
                  type='date'
                  value={values.dataNascimento}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.dataNascimento && !errors.dataNascimento}
                  isInvalid={touched.dataNascimento && !!errors.dataNascimento}
                />
                <Form.Control.Feedback type='invalid'>{errors.dataNascimento}</Form.Control.Feedback>

              </Form.Group>
              
            </Row>

            <Row className='mb-2'>

            <Form.Group as={Col} md={6}>
                <Form.Label>Telefone:</Form.Label>
                <Form.Control as={ReactInputMask}
                  mask={"(99)99999-9999"}
                  name='telefone'
                  type='text'
                  value={values.telefone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.telefone && !errors.telefone}
                  isInvalid={touched.telefone && !!errors.telefone}
                />
                <Form.Control.Feedback type='invalid'>{errors.telefone}</Form.Control.Feedback>

                </Form.Group>

            </Row>

            <div className='text-center'>
                <h3>Endereço:</h3>
                <hr/>
            </div>

            <Row className='mb-2'>
              <Form.Group as={Col} md={2}>
                <Form.Label>Cep:</Form.Label>
                <Form.Control as={ReactInputMask}
                  mask={"99999-999"}
                  placeholder={"99999-999"}
                  name='endereco.cep'
                  type='text'
                  value={values.endereco.cep}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched?.endereco?.cep && !errors.endereco?.cep}
                  isInvalid={touched?.endereco?.cep && !!errors.endereco?.cep}
                />

                <Form.Control.Feedback type='invalid'>{errors?.endereco?.cep}</Form.Control.Feedback>

              </Form.Group>

              <Form.Group as={Col} md={6}>
                <Form.Label>logradouro:</Form.Label>
                <Form.Control
                  name='endereco.logradouro'
                  type='text'
                  value={values.endereco.logradouro}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched?.endereco?.logradouro && !errors.endereco?.logradouro}
                  isInvalid={touched?.endereco?.logradouro && !!errors.endereco?.logradouro}
                />

                <Form.Control.Feedback type='invalid'>{errors?.endereco?.logradouro}</Form.Control.Feedback>

              </Form.Group>

              <Form.Group as={Col} md={3}>
                <Form.Label>Numero:</Form.Label>
                <Form.Control
                  name='endereco.numero'
                  type='text'
                  value={values.endereco.numero}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched?.endereco?.numero && !errors.endereco?.numero}
                  isInvalid={touched?.endereco?.numero && !!errors.endereco?.numero}
                />

                <Form.Control.Feedback type='invalid'>{errors?.endereco?.numero}</Form.Control.Feedback>

                </Form.Group>

                <Form.Group as={Col} md={3}>
                <Form.Label>Complemento:</Form.Label>
                <Form.Control
                  name='endereco.complemento'
                  type='text'
                  value={values.endereco.complemento}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched?.endereco?.complemento && !errors.endereco?.complemento}
                  isInvalid={touched?.endereco?.complemento && !!errors.endereco?.complemento}
                />

                <Form.Control.Feedback type='invalid'>{errors?.endereco?.complemento}</Form.Control.Feedback>

                </Form.Group>
              
            </Row>

            <Row className='mb-2'>

            <Form.Group as={Col} md={6}>
                <Form.Label>Bairro:</Form.Label>
                <Form.Control
                  name='endereco.bairro'
                  type='text'
                  value={values.endereco.bairro}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched?.endereco?.bairro && !errors.endereco?.bairro}
                  isInvalid={touched?.endereco?.bairro && !!errors.endereco?.bairro}
                />

                <Form.Control.Feedback type='invalid'>{errors?.endereco?.bairro}</Form.Control.Feedback>

                </Form.Group>

                <Form.Group as={Col} md={6}>
                <Form.Label>Cidade:</Form.Label>
                <Form.Control
                  name='endereco.cidade'
                  type='text'
                  value={values.endereco.cidade}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched?.endereco?.cidade && !errors.endereco?.cidade}
                  isInvalid={touched?.endereco?.cidade && !!errors.endereco?.cidade}
                />

                <Form.Control.Feedback type='invalid'>{errors?.endereco?.cidade}</Form.Control.Feedback>

                </Form.Group>

                <Form.Group as={Col} md={3}>
                <Form.Label>UF:</Form.Label>
                <Form.Control
                  name='endereco.uf'
                  type='text'
                  value={values.endereco.uf}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched?.endereco?.uf && !errors.endereco?.uf}
                  isInvalid={touched?.endereco?.uf && !!errors.endereco?.uf}
                />

                <Form.Control.Feedback type='invalid'>{errors?.endereco?.uf}</Form.Control.Feedback>

                </Form.Group>

                <div className='text-center'>
                <h3>Dados Acadêmicos:</h3>
                <hr/>
            </div>

            <Row className='mb-2'>
              <Form.Group as={Col}>
                <Form.Label>Faculdade:</Form.Label>
                <Form.Select
                  name='faculdade'
                  value={values.faculdade}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.faculdade && !errors.faculdade}
                  isInvalid={touched.faculdade && !!errors.faculdade}
                >
                  <option value=''>Selecione</option>
                  <option value="IESB SUL">IESB SUL</option>
                  <option value="IESB NORTE">IESB NORTE</option>
                  <option value="IESB OESTE">IESB OESTE</option>
                  </Form.Select>

                <Form.Control.Feedback type='invalid'>{errors.faculdade}</Form.Control.Feedback>

              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Curso:</Form.Label>
                <Form.Select
                  name='curso'
                  value={values.curso}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.curso && !errors.curso}
                  isInvalid={touched.curso && !!errors.curso}
                >
                  <option value=''>Selecione</option>
                  <option value="Análise e Desenvolvimento de Sistemas">Análise e Desenvolvimento de Sistemas</option>
                  <option value="Jogos Digitais">Jogos digitais</option>
                  <option value="Enfermagem">Enfermagem</option>
                  </Form.Select>

                <Form.Control.Feedback type='invalid'>{errors.curso}</Form.Control.Feedback>

              </Form.Group>

              

              
              
            </Row>

            <Row className='mb-2'>
              <Form.Group as={Col}>
                <Form.Label>Período:</Form.Label>
                <Form.Select
                  name='periodo'
                  value={values.periodo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.periodo && !errors.periodo}
                  isInvalid={touched.periodo && !!errors.periodo}
                >
                  <option value=''>Selecione</option>
                  <option value="Matutino">Matutino</option>
                  <option value="Vespertino">Vespertino</option>
                  <option value="Noturno">Noturno</option>
                  </Form.Select>

                <Form.Control.Feedback type='invalid'>{errors.periodo}</Form.Control.Feedback>

              </Form.Group>

              <Form.Group as={Col} md={4}>
                <Form.Label>Matricula:</Form.Label>
                <Form.Control as={ReactInputMask}
                mask={"999999"}
                placeholder='999999'
                  name='matricula'
                  type='text'
                  value={values.matricula}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.matricula && !errors.matricula}
                  isInvalid={touched.matricula && !!errors.matricula}
                />
                  
                <Form.Control.Feedback type='invalid'>{errors.matricula}</Form.Control.Feedback>

              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Link da foto:</Form.Label>
                <Form.Control
                  name='foto'
                  type='text'
                  value={values.foto}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.foto && !errors.foto}
                  isInvalid={touched.foto && !!errors.foto}
                />
                  
                <Form.Control.Feedback type='invalid'>{errors.foto}</Form.Control.Feedback>

              </Form.Group>

              
              


            </Row>

            </Row>
            

            <Form.Group className='text-center'>
              <Button onClick={handleReset} className='me-2'><FaTrash /> Limpar</Button>
              <Button type='submit' variant='success'><FaCheck /> Enviar</Button>
            </Form.Group>


          </Form>
        )}
      </Formik>



    </Pagina>
  )
}