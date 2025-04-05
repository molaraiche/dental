import Link from "next/link";
import BookNow from "./BookNow";
import DocOnline from "./DocOnline";
import Select from "./Select";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations("Nav");

  return (
    <div className='bg-[#E6F6FE] flex items-center justify-between container mx-auto px-4 py-2 rounded-[10px] my-10 font-general'>
      <h1 className='font-bold uppercase text-dark-blue-design text-2xl'>
        Dental
      </h1>
      <nav className='flex items-center gap-4'>
        <Link href='/' className='font-semibold text-dark-blue-design'>
          {t("1")}
        </Link>
        <Link href='/#' className='font-semibold text-dark-blue-design'>
          {t("2")}
        </Link>
        <Link href='/#' className='font-semibold text-dark-blue-design'>
          {t("3")}
        </Link>
        <Link href='/#' className='font-semibold text-dark-blue-design'>
          {t("4")}
        </Link>
        <Link href='/#' className='font-semibold text-dark-blue-design'>
          {t("5")}
        </Link>
      </nav>
      <div className='flex items-center gap-4'>
        <DocOnline />
        <BookNow />
        <Select />
      </div>
    </div>
  );
};

export default Navbar;
