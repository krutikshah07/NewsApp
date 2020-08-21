import React, {useEffect, useState ,us} from 'react';
import NewsCards from './components/NewsCards/NewsCards'
import {Helmet} from "react-helmet";

import alanBtn from '@alan-ai/alan-sdk-web'
import wordsToNumbers from 'words-to-numbers';

import './App.css';

const alanKey = '51d8d6def90950abf8af6814c5507add2e956eca572e1d8b807a3e2338fdd0dc/stage'
const App =()=> {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle,setActiveArticle] = useState(-1)
 
 
  useEffect(() => {
   
  
  
    alanBtn({
      
      key:alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
          setActiveArticle(-1);
       
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > 20) {
            alanBtn().playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');
          } else {
            alanBtn().playText('Please try that again...');
          }
        }
      },
    });
   
    
  }, []);

  return (
    <>
    <div style={{backgroundColor:'black'}} className="App">
      <Helmet>
        <title>NewsApp</title>
      </Helmet>
    
      <h1 style={{color:'white'}}>News App</h1>
     <NewsCards articles={newsArticles}  activeArticle={activeArticle}/>
   
 
    </div>
    <div>

    <p className="p1">Krutik Copyright</p>
    </div>
</>
  );
}

export default App;


