import { useTranslations } from "next-intl";
import { CiBookmark } from "react-icons/ci";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "./ui/animated-modal";
import BookFrom from "./BookFrom";
const BookNow = () => {
  const t = useTranslations();

  return (
    <Modal>
      <ModalTrigger className='bg-mid-blue-design text-secondary flex items-center justify-center gap-2 md:w-[150px] bookBtn'>
        <CiBookmark />
        <span className='hidden md:flex'>{t("book")}</span>
      </ModalTrigger>

      <ModalBody className='w-[80%] mx-10 rounded'>
        <ModalContent>
          <BookFrom />
        </ModalContent>
      </ModalBody>
    </Modal>
  );
};

export default BookNow;
