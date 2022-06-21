import { useParams } from 'react-router-dom';

function Home() {
  const { slug } = useParams();

  if (!slug) {
    return (<div>home page without slug</div>);
  }

  return <div>this is the slug read from url: {slug}</div>;
}

export default Home;
