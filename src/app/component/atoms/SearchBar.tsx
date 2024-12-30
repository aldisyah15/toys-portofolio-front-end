export default function SearchBar({label, placeHolder}: {label: string, placeHolder: string}) {
  return (
    <div className="font-normal text-xl text-white relative flex  w-[24rem] items-center justify-center">
      <form action="" method="post">
        <input
          type="text"
          id="Search"
          placeholder={placeHolder}
          className=" font-normal text-xl placeholder:font-normal placeholder:text-white py-3 px-3 md:min-w-[25rem] min-w-[18.5rem] placeholder:text-sm outline-none skew-x-12 rounded-md bg-[#c084fc]"
        />
      </form>
      <button className="py-1 px-4 bg-[#7e22ce] skew-x-12 rounded-md absolute right-0 -translate-x-16 md:-translate-x-0 md:mr-0">
        {label}
      </button>
    </div>
  );
}
