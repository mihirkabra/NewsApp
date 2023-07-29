import React from "react";

type NewsItemProps={
  title: string
  description: string 
  imageUrl: string 
  newsUrl: string 
  author: string 
  date: string 
  source: string
}

const NewsItem = (props: NewsItemProps) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3 mx-2">
      <div className="card" style={{ height: "25rem", fontSize: 12 }}>
        <img
          alt=" "
          src={
            imageUrl
              ? imageUrl
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9yJhnoqyhLiFDs78wnl4ci7El_Ytt3eszWs-BHVDA79YySR7EsYU_SmJzqZoaPfhje_A&usqp=CAU"
          }
          className="card-img-top"
          style={{ height: "10rem" }}
        />
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
            <div
              className="badge text-bg-secondary"
              style={{ letterSpacing: 2, marginBottom: 10 }}
            >
              {source}
            </div>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small
              className="text-muted"
              style={{ letterSpacing: 1.5, fontWeight: 500, fontSize: 10 }}
            >
              BY <b>{author}</b>
              <br />
              ON <b>{date}</b>
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            style={{
              width: "100%",
              position: "absolute",
              bottom: 0,
              left: 0,
              letterSpacing: 3,
              fontSize: 11,
              fontWeight: 600,
            }}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            READ MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
