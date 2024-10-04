export const Button = ({ text, link }) => {
  try {
    return (
      <div className="flex justify-center font-bold">
        <a href={link}>{text}</a>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
};
