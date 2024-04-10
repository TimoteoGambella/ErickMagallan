import { useMediaQuery } from "@react-hook/media-query";
import SanDesktop from "../components/servicios/SanDesktop"
import SanMobile from "../components/servicios/SanMobile"

export const SanScreen = () => {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <div>
      {isDesktop ? (
        <SanDesktop
        />
      ) : (
        <SanMobile
        />
      )}
    </div>
    )
}