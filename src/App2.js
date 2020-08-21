import React, {useEffect, useState ,us, Component} from 'react';
import NewsCards from './components/NewsCards/NewsCards'
import {Helmet} from "react-helmet";

import alanBtn from '@alan-ai/alan-sdk-web'
import wordsToNumbers from 'words-to-numbers';
import { Tooltip } from '@material-ui/core';
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
firebase.initializeApp({
  apiKey:" AIzaSyDc7H2s-VmXMl7o7LP71AQTZf2PFVSfkOA",
  authDomain:"auth-174cf.firebaseapp.com"
})
const alanKey = '51d8d6def90950abf8af6814c5507add2e956eca572e1d8b807a3e2338fdd0dc/stage'
class  App extends Component {
    
    
    state ={
        newsArticles : [],
        activeArticle : -1,
        isSignIn : false
    }
    

//   const [newsArticles, setNewsArticles] = useState([]);
//   const [activeArticle,setActiveArticle] = useState(-1)
//   const [isSignIn,setSignIn] = useState(false);
   uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidCatch=()=>{
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  
     
      alanBtn({
      
        key:alanKey,
        onCommand: ({ command, articles, number }) => {
          if (command === 'newHeadlines') {
            this.setState({newsArticles : articles});
           this.setState({activeArticle :-1});
         
          } 
          else if (command === 'highlight') {
            // setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
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
  }
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }
 
render(){
  return (

    <div className="App">
      <Helmet>
        <title>NewsApp</title>
      </Helmet>
      {!this.stateisSignIn ? (
          <span>
          <div> SignIn</div>
          <button onClick={()=> firebase.auth().signOut()} >SignOut</button>
      <h1 style={{color:'green'}}>News App</h1>
     <NewsCards articles={this.statenewsArticles}  activeArticle={this.state.activeArticle}/>
     </span>
      )
      :(
        <StyledFirebaseAuth
        uiConfig={this.uiConfig}
        firebaseAuth={firebase.auth()}
      />
      )
      }
    </div>
      );


    }
}

export default App;
