'use client'
import Pagina from '@/components/Pagina'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { FaPlusCircle } from 'react-icons/fa'

export default function FaculdadesPage() {

  const [faculdades, setFaculdades] = useState([])

  
  return (
   <Pagina titulo={"Lista de Faculdades"}>

<div className='text-end'>
<Button href='/faculdades/form'><FaPlusCircle></FaPlusCircle>Novo</Button>







</div>



   </Pagina>
  )
}
