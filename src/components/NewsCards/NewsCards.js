// import React from 'react'
// import NewCard from '../NewsCard/NewCard';
// import {Grid,Grow,Typography} from '@material-ui/core'

// import useStyle from './styles'

// const infoCards = [
//     { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
//     { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
//     { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
//     { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
//   ];
// const NewsCards = ({articles,activeArticle}) => {
//     const classes= useStyle();
//     if (!articles.length) {
//         return (
//           <Grow in>
//             <Grid className={classes.container} container alignItems="stretch" spacing={10}>
//               {infoCards.map((infoCard) => (
//                 <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
//                   <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
//                     <Typography variant="h5" component="h5">{infoCard.title}</Typography>
//                     {infoCard.info ? <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
//                     <Typography variant="h6" component="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
//                   </div>
//                 </Grid>
//               ))}
//             </Grid>
//           </Grow>
//         );
//       }
//     return (
//         <Grow in>
//             <Grid  className={classes.container} container alignItem="stretch" spacing={3} >
//            {articles.map((article,i)=>(
//                <Grid item xs={12} sm={6} md={4} lg={3} style={{display:'flex'}} >
//                 <NewCard  article={article} i={i} activeArticle={activeArticle} />
//                 </Grid>

//            ))}

//             </Grid>

//         </Grow>
//     )
// }



// export default NewsCards;




import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';

import NewsCard from '../NewsCard/NewCard'
import useStyles from './styles.js';

const infoCards = [
  { color: '#1565c0', title: 'Latest News', text: 'Give me the latest news' , text1:'Open Article 3 Or Something' },
  { color: '#4527a0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news', text1:'Open Article 3 Or Something' },
  { color: '#00838f', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Narendra Modi...', text: 'What\'s up with PlayStation 5', text1:'Open Article 3 Or Something' },
  { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' ,  text1:'Open Article 3 Or Something'},
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={10}>
          {infoCards.map((infoCard) => (
            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
              <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                <Typography variant="h5" component="h5">{infoCard.title}</Typography>
                {infoCard.info ? <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
          <Typography variant="h6" component="h6">Try saying: <br /> <i>{infoCard.text}<br></br>{infoCard.text1}</i></Typography>
 
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <NewsCard activeArticle={activeArticle} i={i} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
