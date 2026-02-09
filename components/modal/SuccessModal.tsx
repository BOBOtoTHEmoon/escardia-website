"use client";
import { useStateContext } from "@/contexts/contextprovider";
import Image from "next/image";

export default function SuccessModal() {
  const { successModal, setSuccessModal } = useStateContext();

  return (
    <main
      className={`fixed z-[10000] left-0 top-0 w-full h-full transition-all duration-500 ease-in-out ${
        successModal ? "translate-y-0 scale-100" : "-translate-y-full scale-0"
      }`}
    >
      <div
        className="fixed z-[10000] left-0 top-0 cursor-pointer bg-black/30 backdrop-blur-sm w-full h-full"
        onClick={() => setSuccessModal(false)}
      />

      <section className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background p-8 max-md:p-6 max-sm:p-4 rounded-[20px] z-[100000] transition-all duration-300 opacity-100 visible w-[61%] max-md:w-[80%] max-sm:w-[95%]">
        <aside className="flex flex-col items-center mb-[140px] max-md:mb-[100px] max-sm:mb-[60px] text-center">
          <Image
            src="/svgs/success.svg"
            alt="success"
            width={1000}
            height={1000}
            className="w-[300px] max-md:w-[240px] max-sm:w-[180px] my-[80px] max-md:my-[60px] max-sm:my-[30px]"
          />
          <p className="text-[#7A8399] font-medium text-[26px] max-md:text-xl max-sm:text-lg max-[25rem]:text-base">
            All done.....You will be notified when the app is up and running
          </p>
        </aside>
      </section>
    </main>
  );
}
