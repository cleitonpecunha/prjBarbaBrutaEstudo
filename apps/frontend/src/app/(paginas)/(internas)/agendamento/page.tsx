'use client'

import useAPI from "@/data/hooks/useAPI";
import Link from "next/link";

export default function Page() {
    
    const { httpGet } = useAPI()
    
    async function executar() {
        const resp = await httpGet('/agendamento')
        console.log(resp)
    }

    return (
        <div className="flex flex-col gap-5 justify-center items-center h-screen">
            <span className="text-5xl">Agendamento</span>
            <div className="flex gap-5">
                <button className="button" onClick={executar}>Executar</button>
                <Link href="/" className="button">Voltar</Link>
            </div>
        </div>
    )
}