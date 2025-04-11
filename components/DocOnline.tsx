import Link from "next/link";
import { FaRegUser } from "react-icons/fa";

const DocOnline = ({ menu }: { menu: boolean }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 absolute right-0 left-0 md:static z-20 top-[68vh]
         ease-in-out duration-200 ${
           menu ? "translate-x-0" : "-translate-x-[200%]"
         }  `}>
      <Link
        href='/admin'
        className=' flex gap-2 px-2 py-2.5 rounded items-center text-secondary bg-dark-blue-design md:bg-sky-blue-design'>
        <FaRegUser
          className='w-4 h-4text-secondary'
          title='Admin dashboard login page'
        />
      </Link>
    </div>
  );
};

export default DocOnline;
