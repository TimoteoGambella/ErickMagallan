import { useMediaQuery } from "@react-hook/media-query";
import SthDesktop from "../components/servicios/SthDesktop"
import SthMobile from "../components/servicios/SthMobile"

export const SthScreen = () => {
    const isDesktop = useMediaQuery("(min-width: 768px)");


    return (
        <div>
      {isDesktop ? (
        <SthDesktop
        />
      ) : (
        <SthMobile
        />
      )}
    </div>
    )
}