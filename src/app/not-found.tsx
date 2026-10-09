import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-4 text-center">
      <p className="text-8xl font-extrabold text-red-500">৪০৪</p>
      <h1 className="mt-4 text-2xl font-bold text-gray-800 md:text-3xl">
        দুঃখিত! পেজ পাওয়া যায় নি
      </h1>
      <div className="mt-6">
        <Link href="/">
          <span className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition duration-300 hover:bg-blue-700">
            হোমপেজে ফিরে যান
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;