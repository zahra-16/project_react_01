export const Makan = ({ name, description, price, image }) => {
  try {
    return (
      <div className="shadow-lg p-4 rounded-xl border-[1px] border-gray-600">
        <img src={image} alt={name} className="card-img" />
        <div className="card-content">
          <h2 className="card-title">{name}</h2>
          <p className="card-description">{description}</p>
          <p className="card-price">{price}</p>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
};
