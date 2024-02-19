import SanDesktop from "./servicios/SanDesktop";
import SemtDesktop from "./servicios/SemtDesktop";
import SpipDesktop from "./servicios/SpipDesktop";

function ServiciosDesktop ({tms, nav}) {

    return(
        <>
            {nav === "emt" ?
                <SemtDesktop tms={tms} />
                : nav === "pip" ?
                <SpipDesktop tms={tms} />
                : nav === "an" ?
                <SanDesktop tms={tms}/>
                :
                <></>
            }
        </> 
    )
}

export default ServiciosDesktop;