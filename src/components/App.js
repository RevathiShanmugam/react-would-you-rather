import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions';
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';
import Login from './Login';
import Nav from './Nav';
import NewQuestion from './NewQuestion';
import QuestionDetails from './QuestionDetails';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
       <Fragment>
         <div className='container'>
           <Nav />
           {this.props.loggedOut === true
             ? <Route component={Login} />
             : <div>
                 <Route path='/' exact component={Dashboard} />
                 <Route path='/login' exact component={Login} />
                 <Route path='/leaderboard' exact component={Leaderboard} />
                 <Route path='/questions/:id' exact component={QuestionDetails} />
                 <Route path='/add' exact component={NewQuestion} />
               </div>}
         </div>
       </Fragment>
     </Router>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    loggedOut: authedUser === null,
  };
}
export default connect(mapStateToProps)(App)
