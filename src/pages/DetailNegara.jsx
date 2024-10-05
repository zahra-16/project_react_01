import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [negara, setNegara] = useState();
  const ambilNegara = async () => {
    const response = await axios.get(
      "https://freetestapi.com/api/v1/countries/" + id
    );
    const data = await response.data;
    setNegara(data);
  };

  useEffect(() => {
    // ambilData()
    ambilNegara();
  }, []);

  return (
    // <div>
    //   <img src={resto?.thumbnail} alt="" />
    //   <h1>{resto?.restaurant.name }</h1>
    // </div>
    <div className="hero bg-base-200 min-h-screen  bg-red-50 dark:bg-slate-800">
      <div className="hero-content text-center space-y-8 flex-col">
        <img src={negara?.flag} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold dark:text-white">{negara?.name}</h1>
          <p className="pt-8 max-w-[50rem] text-center dark:text-white">{negara?.currency}</p>
          <p className="pb-5 max-w-[50rem] text-center dark:text-white">{negara?.population}</p>
          <Link to="/negara" className="btn  bg-red-400 text-white dark:bg-slate-800">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
