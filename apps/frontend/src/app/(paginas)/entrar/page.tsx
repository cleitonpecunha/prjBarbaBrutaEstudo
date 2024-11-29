import { Suspense } from "react";
import FormAuth from "@/components/auth/FormAuth";
import Processando from "@/components/shared/formulario/Processando";

export default function Page() {
    return (
        <Suspense fallback={<Processando />}>
            <FormAuth />
        </Suspense>
    )
}