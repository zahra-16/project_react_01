

const Profil = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen dark:bg-slate-800">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold dark:text-white">Profil Saya</h1>
            <p className="py-6 text-start dark:text-white">
              <h6>Nama: Spiderman</h6>
              <h6>Kelas: Saya Kelas Dua</h6>
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
