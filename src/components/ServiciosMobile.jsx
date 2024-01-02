import SemtMobile from "./servicios/SemtMobile";
import SpipMobile from "./servicios/SpipMobile";

function ServiciosMobile ({tms, settings}) {

    return(
        <>
            {tms === "emt" ?
                <SemtMobile tms={tms} settings={settings}/>
                : tms === "pip" ?
                <SpipMobile tms={tms}/>
                : <SemtMobile tms={tms} settings={settings}/>
            }
        </>
    )
}

export default ServiciosMobile;