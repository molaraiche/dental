import { Button } from "./ui/button";
import { useTranslations } from "next-intl";
import { CiBookmark } from "react-icons/ci";

const BookNow = () => {
  const t = useTranslations();

  return (
    <div>
      <Button className='bg-mid-blue-design text-secondary'>
        <CiBookmark />
        <span className='hidden md:flex'>{t("book")}</span>
      </Button>
    </div>
  );
};

export default BookNow;
