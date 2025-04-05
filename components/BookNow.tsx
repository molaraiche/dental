import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

const BookNow = () => {
  const t = useTranslations();

  return (
    <div>
      <Button className='bg-mid-blue-design text-secondary'>{t("book")}</Button>
    </div>
  );
};

export default BookNow;
