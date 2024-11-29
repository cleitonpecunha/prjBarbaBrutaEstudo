'use client'

import useSessao from "@/data/hooks/useSessao"

export default function PaginaTeste() {    
    const { usuario, numero } = useSessao()    
    return (
        <div className="bg-red-300 flex flex-col">
            <span>Teste</span>
            <span>{numero}</span>
            <span>{usuario?.id}</span>
            <span>{usuario?.nome}</span>
            <span>{usuario?.email}</span>
            <span>{usuario?.barbeiro}</span>
            <span>{usuario?.telefone}</span>
        </div>
    );
}