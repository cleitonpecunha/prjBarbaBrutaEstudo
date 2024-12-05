//import ForcarAutenticacao from "@/components/shared/formulario/ForcarAutenticacao";
//import Pagina from "@/components/shared/Pagina";

import { ProvedorAgendamento } from "@/data/contexts/ContextoAgendamento";

/* return (
    <ForcarAutenticacao>
        <Pagina>{props.children}</Pagina>
    </ForcarAutenticacao>
) */

export default function Layout(props: any) {
    return (
        <ProvedorAgendamento>
            {props.children}
        </ProvedorAgendamento>        
    )
}