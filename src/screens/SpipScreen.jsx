import { useMediaQuery } from "@react-hook/media-query";
import SpipDesktop from "../components/servicios/SpipDesktop"
import   SpipMobile from "../components/servicios/SpipMobile"

export const SpipScreen = () => {
    const isDesktop = useMediaQuery("(min-width: 768px)");


    return (
        <div>
      {isDesktop ? (
        <SpipDesktop
        />
      ) : (
        <SpipMobile
        />
      )}
    </div>
    )
}