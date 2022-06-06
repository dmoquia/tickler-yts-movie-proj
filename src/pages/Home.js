import React from "react";
import SearchMovie from "../components/SearchMovie";
import PageMovie from "../components/PageMovie";
// import Filter from "../components/Filter";
export default function Home() {
  return (
    <main>
      {/* <Filter /> */}
      <SearchMovie />
      <PageMovie />
    </main>
  );
}
