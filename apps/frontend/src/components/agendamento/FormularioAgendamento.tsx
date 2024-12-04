import { useState } from "react";
import { Profissional, Servico } from "@barbabrutal/core";
import CampoProfissional from "../profissional/CampoProfissional";
import CampoServicos from "../servico/CampoServicos";
import CampoDataHora from "../shared/formulario/CampoDataHora";


export default function FormularioAgendamento() {

    const [ profissional, setProfissional ] = useState<Profissional | null>(null)
    const [ servicos, setServicos ] = useState<Servico[]>([])
    const [ data, setData ] = useState<Date>(new Date)

    return (
        <div className="flex flex-col gap-5">

            <CampoProfissional 
                label="Profissional" 
                value={profissional} 
                onChange={setProfissional}
                className="input"
            />
            <CampoServicos 
                label="Serviços" 
                value={servicos} 
                onChange={setServicos}
                className="input"
            /> 
            <CampoDataHora
                label="Data e Hora" 
                value={data} 
                onChange={setData}
                className="input"
                apenasNoFuturo={true}
            /> 

        </div>
    )
}