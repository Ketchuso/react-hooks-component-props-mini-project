import React from "react";
import blogData from "../data/blog";
import Header from "../Header.js";
import About from "../About.js"
import ArticleList from "../ArticleList"

console.log(blogData);

const nameData = blogData.name;
const aboutData = blogData.about;
const imageData = blogData.image || "https://via.placeholder.com/215";
const postsData = blogData.posts;

function App() {
  return (
    <div className="App">
      <Header name={nameData} />
      <About image={imageData} about={aboutData}/>
      <ArticleList posts={postsData}/>
    </div>
  );
}

export default App;
