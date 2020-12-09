import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getBlogPage } from '@/services';


const Card = () => {  
  const [text, setText] = useState(''),
        [title, setTitle] = useState('');
  let { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBlogPage(slug);

      setText(data.body);
      setTitle(data.title);
    };
  
    fetchData();
  });
  

  return (
    <article>
      <h1>{title}</h1>
      <p>{text}</p>
    </article>
  );
}

export default Card;