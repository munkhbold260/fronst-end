import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    async function getArticle() {
      const response = await fetch("http://localhost:4000/api/users");
      const article = await response.json();
      setData(article);
    }

    getArticle();
  }, []);

  return (
    <div className="flex flex-col">
      <p>{data?.title}</p>
      <p>{data?.tag_list}</p>
      <p> test</p>
    </div>
  );
}
