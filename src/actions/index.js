import alt from '../alt';
import Firebase from 'firebase';

class Actions{
    
    constructor(){
        this.generateActions(
            'channelsReceived',
            'channelsFailed',
            'messagesReceived',
            'messagesFailed',
            'channelOpened',
            'messagesLoading',
            'sendMessage',
            'messageSendSuccess',
            'messageSendError',
            'messageReceived'
        );
    }
    
    login(args){
    return (dispatch) => {
      var firebaseRef = new Firebase('https://hefesoft-react-stack.firebaseio.com');
      firebaseRef.authWithOAuthPopup("google", (error, user)=> {
        if(error){
          return;
        }
        
        dispatch(user);
      });
    }
  }
}

export default alt.createActions(Actions);