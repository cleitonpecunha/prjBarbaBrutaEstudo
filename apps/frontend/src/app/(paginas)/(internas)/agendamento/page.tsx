'use client'

import FormularioAgendamento from "@/components/agendamento/FormularioAgendamento"
import CabecalhoComTitulo from "@/components/shared/CabecalhoComTitulo"

//import useAPI from "@/data/hooks/useAPI";
//import Link from "next/link";

export default function Page() {
    
    /* const { httpGet } = useAPI()
    
    async function executar() {
        const resp = await httpGet('/agendamento')
        console.log(resp)
    } */

    //* justify-center items-center h-screen */
    // container p-10

    return (
        <div className="flex flex-col gap-5">
            <CabecalhoComTitulo 
                titulo="Agendamento de Serviços" 
                descricao="Seja atendido exatamento no horário marcado."
            />
            <div className="container y-10">
               {/*  <span className="text-5xl">Formulário Agendamento</span>  */}               
                {/* <div className="flex gap-5">
                    <button className="button" onClick={executar}>Executar</button>
                    <Link href="/" className="button">Voltar</Link>
                </div> */}
                <FormularioAgendamento/>
            </div>
        </div>
    )
}