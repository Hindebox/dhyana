import "./blog.scss";
import axios from "axios";
import Loader from "../../components/loader/Loader";
import Navbar from "../../components/navbar/Navbar";
import BlogArticle from "../../components/blog/BlogArticle";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

export default function Blog() {
  const apiUrl = process.env.API_URL;
  const apiKey = process.env.API_KEY;
  console.log(apiUrl, apiKey);
  //set pagination
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  //handle pagination
  const itemsPerPage = 12;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = articles.slice(startIndex, endIndex);

  //set loader untill fetch
  const [isLoading, setIsLoading] = useState(true);

  //fetch articles
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(apiUrl, {
          params: {
            q: "yoga meditation",
            language: "en",
            apiKey: apiKey,
          },
        });
        console.log(response);

        const fetchedArticles = response.data.articles;
        console.log(fetchedArticles);

        //Set articles and calculate the total pages
        setArticles(fetchedArticles);
        setTotalPages(Math.ceil(fetchedArticles.length / itemsPerPage));

        //when content is fetched set Loading to false to display articles
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNews();
  }, []);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <h1>Nourish your mind</h1>
          {/* display fetched articles */}
          <div className="blogContainer">
            {subset.map(
              ({
                url,
                title,
                description,
                urlToImage,
                author,
                publishedAt,
              }) => (
                <BlogArticle
                  key={url}
                  title={title}
                  desc={description}
                  articleImg={urlToImage}
                  souceUrl={url}
                  author={author}
                  date={publishedAt}
                />
              )
            )}
          </div>
          {/* pagination */}
          <div className="pagination">
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              pageCount={totalPages}
              onPageChange={handlePageChange}
              forcePage={currentPage}
            />
          </div>
        </>
      )}
    </>
  );
}
