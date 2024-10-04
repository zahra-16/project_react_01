
export default function NegaraDetailView({ data }) {
  try {
    return (
      <div className="Negara-detail-image">
      <div className="">
        <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div className="max-w-lg lg:mx-12 lg:order-2">
              <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                {data.name}
              </h1>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                {data.currency}
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"
                >
                  ${data.population}
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img
              className="object-contain w-[600px] h-[400px] max-w-2xl rounded-md "
              src={data.flag}
              alt="apple watch photo"
            />
          </div>
        </div>
      </div>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}
