import React from "react";

export function paginate(movies) {
  const itemsPerPage = 6;
  // const numberOfPage = products.length / itemsPerPage;
  const numberOfPage = Math.ceil(movies.length / itemsPerPage);

  // const newProducts = Array.from({ length: numberOfPage }, () => {
  //   return products.slice(0, itemsPerPage);
  // });

  const newMovies = Array.from({ length: numberOfPage }, (_, index) => {
    const start = index * itemsPerPage;
    return movies.slice(start, start + itemsPerPage);
  });

  return newMovies;
}

function Utils(props) {
  const res = props.map((items) => items);
  const a = `https://yts.mx/torrent/download/`;
  return res ? (
    <div style={{ display: "flex" }}>
      {res.map((item, index) => (
        <div key={index}>
          <h3>{item.quality}</h3>
          <div style={{ marginLeft: "0.2rem" }}>
            <a href={`${a}${item.hash}`} className="btn btn-primary">
              download
            </a>
          </div>
        </div>
      ))}
    </div>
  ) : null;
}
export default Utils;
