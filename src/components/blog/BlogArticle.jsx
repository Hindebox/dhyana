import { useState } from "react";
import { Link } from "react-router-dom";

export default function BlogArticle({
  title,
  desc,
  articleImg,
  souceUrl,
  date,
  author,
}) {
  //don't display images with non-valid or inaccessible images
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  if (imageError || !title || !desc || !souceUrl || !date || !author) {
    return null;
  }

  return (
    <Link to={souceUrl} target="_blank">
      <div className="article">
        <img src={articleImg} alt={title} onError={handleImageError} />
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
