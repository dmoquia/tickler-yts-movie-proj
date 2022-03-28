import React from "react";
import SearchMovie from "../components/SearchMovie";
import PageMovie from "../components/PageMovie";
export default function Home() {
  return (
    <main>
      <SearchMovie />
      <PageMovie />
    </main>
  );
}
