import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useSwiper } from "swiper/react";

export function AccountsSliderNavigation() {
  const swiper = useSwiper();

  return (
    <div>
      <button
        className="p-3 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40"
        onClick={() => swiper.slidePrev()}
      >
        <ChevronLeftIcon className="text-white w-6 h-6" />
      </button>
      <button
        className="p-3 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40"
        onClick={() => swiper.slideNext()}
      >
        <ChevronRightIcon className="text-white w-6 h-6" />
      </button>
    </div>
  );
}
