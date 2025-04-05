"use client";

import { usePathname, useRouter } from "next/navigation";

const Select = () => {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split("/")[1];

  const handleChange = (lang: string) => {
    const segments = pathname.split("/");
    segments[1] = lang;
    router.push(segments.join("/"));
  };

  return (
    <div className='flex items-center justify-center'>
      <select
        onChange={(e) => handleChange(e.target.value)}
        className='border-2 border-gray-300 rounded-md p-2'
        defaultValue={currentLocale}>
        <option value='en'>EN</option>
        <option value='fr'>FR</option>
        <option value='ar'>AR</option>
      </select>
    </div>
  );
};

export default Select;
