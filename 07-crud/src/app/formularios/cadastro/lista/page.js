
'use client'
import Pagina from '@/components/Pagina'
import React from 'react'
import { Table } from 'react-bootstrap'

export default function page() {

    const alunos = JSON.parse(localStorage.getItem('alunos')) || []

    console.log(alunos)

  return (
    <Pagina titulo="Lista de Alunos">

<Table striped bordered hover>
      <thead>
        <tr>

        <th>Matricula</th>
          <th>Nome</th>
          <th>foto</th>
        </tr>
      </thead>
      <tbody>

        {alunos.map(item => (
<tr>
        <td>{item.matricula}</td>
          <td>{item.nome}</td>
          <td>
            <img src={item.foto} width={500}  />
            </td>

</tr>

        ))}

        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>



    </Pagina>
  )
}
