import Link from "next/link";

const NotFoundCategoryDetail = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-2xl font-bold text-red-500 md:text-3xl">
        ক্যাটাগরি পাওয়া যায়নি
      </h1>
      <p className="mt-2 text-base text-gray-500">
        দুঃখিত এই ক্যাটাগরি নেই
      </p>
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

export default NotFoundCategoryDetail;