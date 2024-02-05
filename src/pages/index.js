import { useEffect, useState } from "react";

export default function Home() {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    async function getArticle() {
      const response = await fetch(" http:localhost:4000/api/users");
      const article = await response.json();
      setArticle(article);
    }
    getArticle();
  }, []);
  return (
    <>
      <p>{article}</p>
    </>
  );
}
