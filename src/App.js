import React, { useEffect, lazy, Suspense } from 'react';
// import './App.css';
import { GlobalStyle } from './global.styles';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import HomePage from './Pages/homepage';
// import ShopPage from './Pages/shop';
// import SignInUp from './Pages/SignInUp';
// import CheckoutPage from './Pages/checkout';
import Header from './Components/header/header';
import Spinner from './Components/spinner/spinner.component';
import ErrorBoundary from './Components/error-boundary/error-boundary.component';
// import { auth, createUserProfileDocument } from './firebase/firebase.utils';
// import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user.actions';


const HomePage = lazy(()=> import('./Pages/homepage'))
const ShopPage = lazy(()=> import('./Pages/shop'))
const SignInUp = lazy(()=> import('./Pages/SignInUp'))
const CheckoutPage = lazy(()=> import('./Pages/checkout'))

// class App extends React.Component {
const App = ({ checkUserSession1, currentUser }) => {
  // unsubscribeFromAuth = null

  useEffect(()=>{
    console.log('effect app')
    checkUserSession1();
  },[checkUserSession1])
  // componentDidMount() {
  //   const { chechUserSession1 } = this.props;
  //   chechUserSession1();

    // const { setCurrentUser } = this.props;

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = createUserProfileDocument(userAuth);

    //     (await userRef).onSnapshot(snapShot => {
    //       setCurrentUser({
    //         currentUser: {
    //           id: snapShot.id,
    //           ...snapShot.data()
    //         }
    //       }
    //       );
    //     });
    //   }
    //   setCurrentUser(userAuth);
    //   // addCollectionAndDocuments('collections', collectionArray.map(({title, items}) => ({title, items})));
    // })
  // }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  // render() {

    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
              <Route excat path='/checkout' component={CheckoutPage} />
              <Route exact path='/signin' render={()=>currentUser ? <Redirect to='/'/> : <SignInUp /> } />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    );
  // }
  
}

// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state)
// })
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
  // collectionArray: selectCollectionsForPreview
})

// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// })

const mapDispatchToProps = dispatch => ({
  checkUserSession1: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
