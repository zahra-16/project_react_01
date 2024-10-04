export default function Card({ text, link }) {
  try {
    return (
      <div>
        <a href={link}>
          <img src={link} alt="" />
          <h1>{text}</h1>
        </a>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}
