"use client";
import { useStateContext } from "@/contexts/contextprovider";
import Icon from "@/public/svgicons";
import Image from "next/image";
import Waitlist from "../ui/waitlist";

export default function WaitlistModal() {
  const { waitlistModal, setWaitlistModal } = useStateContext();
  return (
    <main
      className={`fixed z-[10000] left-0 top-0 w-full h-full transition-all duration-500 ease-in-out ${
        waitlistModal ? "translate-y-0 scale-100" : "-translate-y-full scale-0"
      }`}
    >
      <div
        className="fixed z-[10000] left-0 top-0 cursor-pointer bg-black/30 backdrop-blur-sm w-full h-full"
        onClick={() => setWaitlistModal(false)}
      />

      <section className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background p-8 max-md:p-6 max-sm:p-4 rounded-[20px] z-[100000] transition-all duration-300 opacity-100 visible w-[76%] max-sm:w-[95%]">
        <div
          onClick={() => setWaitlistModal(false)}
          className="bg-[#E0E8FF] hover:bg-[#bacbfb] p-[17px] max-md:p-[13px] max-sm:p-[10px] max-[25rem]:p-[8px] rounded-full max-w-fit cursor-pointer smooth-transition"
        >
          <Icon name="close" />
        </div>

        <article className="flex items-center max-xl:flex-col gap-[10px] max-xl:gap-0 h-[50vh] max-xl:h-auto max-xl:mb-[15px] max-md:mb-[30px] max-sm:mb-[60px]">
          <aside className="relative flex-1 max-xl:flex-[0.4] group">
            <Image
              src="/images/twophones.png"
              alt="car"
              width={2000}
              height={2000}
              className="w-[90%] max-xl:w-[55%] max-sm:w-[85%] mx-auto group-hover:scale-90 smooth-transition"
            />

            <Image
              src="/images/world.png"
              alt="world"
              width={2000}
              height={2000}
              className="absolute overflow-y-clip top-6 max-[25rem]:top-8 -z-10 w-full max-xl:w-[70%] max-sm:w-full max-xl:left-1/2 max-xl:-translate-x-1/2 group-hover:scale-110 smooth-transition"
            />
          </aside>

          <aside className="w-[48%] max-xl:w-full">
            <p className="mb-[50px] max-xl:mb-[30px] max-md:mb-[50px] max-sm:mb-[30px] font-bold text-[44px] max-2xl:text-4xl max-md:text-3xl max-sm:text-2xl max-[25rem]:text-xl max-xl:text-center">
              Be among the first to access priority{" "}
              <span className="text-secondary">bookings</span> and early offers
            </p>

            <div className="w-[90%] max-xl:w-[80%] max-[25rem]:w-full max-xl:mx-auto">
              <Waitlist />
            </div>
          </aside>
        </article>
      </section>
    </main>
  );
}

{
  /* <aside className="flex flex-col items-center mb-[140px] max-md:mb-[100px] max-sm:mb-[60px] text-center">
  <Image
    src="/images/success.png"
    alt="success"
    width={1000}
    height={1000}
    className="w-[300px] max-md:w-[240px] max-sm:w-[180px] my-[80px] max-md:my-[60px] max-sm:my-[30px]"
  />
  <p className="text-[#7A8399] font-medium text-[26px] max-md:text-xl max-sm:text-lg max-[25rem]:text-base">
    All done.....You will be notified when the app is up and running
  </p>
</aside> */
}
