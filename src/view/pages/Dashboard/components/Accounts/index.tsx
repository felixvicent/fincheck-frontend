import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EyeIcon } from "../../../../components/icons/EyeIcon";
import { AccountCard } from "./AccountCard";
import { useAccountsController } from "./useAccountsController";
import { SliderNavigation } from "./SliderNavigation";
import { formatCurrency } from "../../../../../app/utils/formatCurrecy";
import { cn } from "../../../../../app/utils/cn";
import { Spinner } from "../../../../components/Spinner";
import { PlusIcon } from "@radix-ui/react-icons";

export function Accounts() {
  const {
    setSliderState,
    sliderState,
    windowWidth,
    toggleValueVisibility,
    areValuesVisible,
    isLoading,
    accounts,
  } = useAccountsController();

  return (
    <div className="bg-teal-900 rounded-2xl h-full w-full px-4 py-8 md:p-10 flex flex-col">
      {isLoading && (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner className="text-teal-950/50 fill-white h-10 w-10" />
        </div>
      )}
      {!isLoading && (
        <>
          <div>
            <span className="tracking-[-0.5px] text-white block">
              Saldo total
            </span>
            <div className="flex items-center gap-2">
              <strong
                className={cn(
                  "text-2xl tracking-[-1px] text-white",
                  !areValuesVisible && "blur-md"
                )}
              >
                {formatCurrency(8000)}
              </strong>
              <button
                className="h-8 w-8 flex items-center justify-center"
                onClick={toggleValueVisibility}
              >
                <EyeIcon open={!areValuesVisible} />
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-end mt-10 md:mt-0">
            {accounts.length === 0 && (
              <>
                <div slot="container-start" className="mb-4">
                  <strong className="text-white tracking-[-1px] text-lg">
                    Minhas contas
                  </strong>
                </div>
                <button className="mt-4 h-52 border-teal-600 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center gap-4 text-white hover:bg-teal-950/5 transition-colors">
                  <div className="w-11 h-11 rounded-full border-2 border-dashed border-white flex items-center justify-center">
                    <PlusIcon className="w-6 h-6" />
                  </div>
                  <span className="font-medium  tracking-[-0.5px] block w-32 text-center">
                    Cadastre uma nova conta
                  </span>
                </button>
              </>
            )}
            {accounts.length > 0 && (
              <div>
                <Swiper
                  spaceBetween={16}
                  slidesPerView={windowWidth >= 500 ? 2.1 : 1.1}
                  onSlideChange={(swiper) =>
                    setSliderState({
                      isBeginning: swiper.isBeginning,
                      isEnd: swiper.isEnd,
                    })
                  }
                >
                  <div
                    slot="container-start"
                    className="flex items-center justify-between mb-4"
                  >
                    <strong className="text-white tracking-[-1px] text-lg">
                      Minhas contas
                    </strong>

                    <SliderNavigation
                      isBeginning={sliderState.isBeginning}
                      isEnd={sliderState.isEnd}
                    />
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
            )}
          </div>
        </>
      )}
    </div>
  );
}