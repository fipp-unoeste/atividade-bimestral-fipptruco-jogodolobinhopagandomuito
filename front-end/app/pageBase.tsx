'use client'

import React from 'react';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';

interface PaginaBaseProps {
  children: React.ReactNode
}

export default function PaginaBase({ children }: PaginaBaseProps): JSX.Element{
  return (
    <>
      <Cabecalho
        titulo='FIPPTruco'
      />

      {children}

      <Rodape 
        texto='© 2024 FIPPTruco. Todos os direitos reservados.'
      />
    </>
  )
}