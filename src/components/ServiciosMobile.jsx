import SanMobile from "./servicios/SanMobile";
import SemtMobile from "./servicios/SemtMobile";
import SpipMobile from "./servicios/SpipMobile";

function ServiciosMobile ({tms, settings, nav}) {

    return(
        <>
            {nav === "emt" ?
                <SemtMobile tms={tms} settings={settings}/>
                : nav === "pip" ?
                <SpipMobile tms={tms}/>
                : nav === "an" ?
                <SanMobile tms={tms}/>
                :
                <SemtMobile tms={tms} settings={settings}/>
            }
        </>
    )
}

export default ServiciosMobile;