import { Link } from "react-router-dom";

export default function BlogArticle({
  title,
  desc,
  articleImg,
  souceUrl,
  date,
  author,
}) {
  return (
    <Link to={souceUrl} target="_blank">
      <div className="article">
        <img src={articleImg} alt={title} />
        <h4>{title.slice(0, 45)}...</h4>
        <p>{desc.slice(0, 55)}...</p>
        <p className="source">
          <span>{author.slice(0, 30)}</span> |{" "}
          <span>{new Date(date).toLocaleDateString()}</span>
        </p>
      </div>
    </Link>
  );
}
