import { useMediaQuery } from "@react-hook/media-query";
import SemtDesktop from "../components/servicios/SemtDesktop"
import SemtMobile from "../components/servicios/SemtMobile"

export const SemtScreen = () => {
    const isDesktop = useMediaQuery("(min-width: 768px)");


    return (
        <div>
      {isDesktop ? (
        <SemtDesktop
        />
      ) : (
        <SemtMobile
        />
      )}
    </div>
    )
}