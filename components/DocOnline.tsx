import Link from "next/link";
import { FaRegUser } from "react-icons/fa";

const DocOnline = () => {
  return (
    <Link
      href='/admin'
      className=' flex gap-2 px-2 py-2.5 rounded items-center bg-sky-blue-design text-secondary'>
      <FaRegUser
        className='w-4 h-4  bg-sky-blue-design text-secondary'
        title='Admin dashboard login page'
      />
    </Link>
  );
};

export default DocOnline;
