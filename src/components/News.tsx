import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

type NewsProps = {
  country: string
  pageSize: number
  category: string
  apiKey: string | undefined
  setProgress: React.Dispatch<React.SetStateAction<number>>
}

type articlesModel = {
  source: {
    id: string
    name: string
  }
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

const News = (props: NewsProps) => {
  const {country = "in", pageSize = 9, category = "general", apiKey, setProgress} = props;
  const [articles, setArticles] = useState<articlesModel[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirst = (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const getNews = async () => {
    setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    setProgress(50);
    let parsedData = await data.json();
    console.log(parsedData);
    setProgress(75);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    document.title = capitalizeFirst(category) + " - NewsApp";
    setProgress(100);
  };
  const getMoreNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      country
    }&category=${category}&apiKey=${apiKey}&page=${
      page + 1
    }&pageSize=${pageSize}`;
    setPage(page + 1); 
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  useEffect(() => {
    getNews();
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="container my-3">
        <h1 className="text-center" style={{marginTop: 75}}>
          News App - Top {capitalizeFirst(category)} Headlines
        </h1>
        {loading && <Loading />}
        <InfiniteScroll
          dataLength={articles.length}
          next={getMoreNews}
          hasMore={articles.length < totalResults}
          loader={<Loading />}
        >
          <div className="row justify-content-center mx-5 px-1">
            {!loading &&
              articles.map((item: articlesModel) => {
                let title = item.title;
                let description = item.description;
                let date = item.publishedAt;
                let dateObj = new Date(date);
                let newDate = dateObj.toLocaleString(undefined, {
                  timeZone: "Asia/Kolkata",
                });
                let source = item.source.name;
                return (
                  <div className="col-md-4" key={item.url}>
                    <NewsItem
                      title={title ? title.slice(0, 50) : ""}
                      description={description ? description.slice(0, 100) : ""}
                      imageUrl={item.urlToImage}
                      newsUrl={item.url}
                      author={
                        item.author
                          ? item.author.toUpperCase().slice(0, 30)
                          : "UNKNOWN"
                      }
                      date={
                        newDate
                          ? (newDate.toUpperCase() + " IST").replace(new RegExp("/", 'g'), "-")
                          : "UNDEFINED"
                      }
                      source={source.toUpperCase().slice(0, 25)}
                    />
                  </div>
                );
              })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default News;
