import React from 'react';
import './App.css';
import HomePage from './Pages/homepage';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './Pages/shop';
import Header from './Components/header/header';
import SignInUp from './Pages/SignInUp';
import CheckoutPage from './Pages/checkout';
import {connect} from 'react-redux';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';



class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);

        (await userRef).onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }
          // , () =>{
          //   console.log(this.state);
          // }
          );
          // console.log(this.state)
        });
      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route excat path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={()=>this.props.currentUser ? <Redirect to='/'/> : <SignInUp /> } />
        </Switch>
      </div>
    );
  }
  
}

// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state)
// })
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
