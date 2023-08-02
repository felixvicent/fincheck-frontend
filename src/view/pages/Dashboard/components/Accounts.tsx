import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { EyeIcon } from "../../../components/icons/EyeIcon";
import { AccountCard } from "./AccountCard";
import { AccountsSliderNavigation } from "./AccountsSliderNavigation";

export function Accounts() {
  return (
    <div className="bg-teal-900 rounded-2xl h-full w-full px-4 py-8 md:p-10 flex flex-col">
      <div>
        <span className="tracking-[-0.5px] text-white block">Saldo total</span>
        <div className="flex items-center gap-2">
          <strong className="text-2xl tracking-[-1px] text-white">
            R$ 1000,00
          </strong>
          <button className="h-8 w-8 flex items-center justify-center">
            <EyeIcon open />
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-end">
        <div>
          <Swiper spaceBetween={16} slidesPerView={2.1}>
            <div
              slot="container-start"
              className="flex items-center justify-between mb-4"
            >
              <strong className="text-white tracking-[-1px] text-lg">
                Minhas contas
              </strong>

              <AccountsSliderNavigation />
            </div>
            <SwiperSlide>
              <AccountCard
                type="CHECKING"
                color="#7950f2"
                name="Nubank"
                balance={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AccountCard
                type="CASH"
                color="#f0f"
                name="Carteira"
                balance={2000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AccountCard
                type="INVESTMENT"
                color="#0f0"
                name="Picpay"
                balance={3000}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
