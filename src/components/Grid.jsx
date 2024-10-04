// import { Makan } from "./Makan"

export default function Grid({ resto }) {
  try {
    return (
      <>
        <div className="grid grid-cols-4 gap-6 shadow-2xl ">
          {resto?.restaurants?.map((dataResto) => {
            return (
              <>
                {/* <Makan name={dataResto.name} description={dataResto.description} image={'https://restaurant-api.dicoding.dev/images/medium/' + dataResto.pictureId} price={dataResto.price} /> */}

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src={
                        "https://restaurant-api.dicoding.dev/images/medium/" +
                        dataResto.pictureId
                      }
                      alt={dataResto.name}
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {dataResto.name}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400  truncate max-w-72">
                      {dataResto.description}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* <div>{dataResto.name}</div> 
                                    <img src={'https://restaurant-api.dicoding.dev/images/medium/' + dataResto.pictureId} /> */}
              </>
            );
          })}
        </div>
      </>
    );
  } catch (error) {
    console.log(error);
  }
}
