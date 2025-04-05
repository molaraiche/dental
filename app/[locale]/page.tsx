import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import LinkedInCard from "@/components/LinkedInCard";
import Image from "next/image";
import { MdPhoneInTalk } from "react-icons/md";

export default function Hero() {
  const t = useTranslations("Home");
  return (
    <section className='h-[70vh] flex items-center justify-center gap-10 container mx-auto font-general'>
      <div className='w-1/2'>
        <h1 className='text-6xl font-semibold text-dark-blue-design'>
          {t("title")}
          <span className='text-sky-blue-design'> {t("marked")} </span>
        </h1>
        <p className='text-body w-[531px] my-10'>{t("paragraph")}</p>
        <div className='flex gap-3 my-10'>
          <Button className='bg-mid-blue-design w-[227px] h-[55px] rounded-[10px] text-secondary'>
            {t("btn1")}
          </Button>
          <Button className='h-[55px] rounded-[10px] text-secondary flex items-center shadow-none'>
            <span className='border border-[#25B4F8] flex items-center justify-center w-[50px] h-[50px] rounded-[10px]'>
              <MdPhoneInTalk className=' bg-[#E6F6FE] text-mid-blue-design w-11 h-11' />
            </span>
            <span className='flex flex-col items-start'>
              <span className='text-mid-blue-design text-sm font-semibold'>
                {t("btn2")}
              </span>
              <span className='text-dark-blue-design'>0900-78601</span>
            </span>
          </Button>
        </div>
        <LinkedInCard />
      </div>
      <div className='w-1/2'>
        <Image
          src='/assets/hero.svg'
          alt='hero img'
          width='735'
          height='676'
          className='w-full h-full'
        />
      </div>
    </section>
  );
}
