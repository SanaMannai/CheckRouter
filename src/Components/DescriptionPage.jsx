import { Link } from "react-router-dom";

function DescriptionPage({ cardDesc }) {
  const { description } = cardDesc;
  return (
    <section className="desc-page">
      <button>
        <Link to={-1}>Click Here Back To Home Page</Link>
      </button>
      <iframe
        title="sa"
        src="https://www.youtube.com/embed/T9aaI8rUbT4?si=VblaCqBK1lOi6nSQ"
        frameBorder="0"></iframe>
      <p
        style={{
          color: "#0075ff",
          fontSize: "25px",
        }}>
        Card Description: {description}
      </p>
    </section>
  );
}

export default DescriptionPage;