import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';
import Firebase from 'firebase';
import _ from 'lodash';

var {Card, List} = mui;

class MessageList extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            messages: {}
        };
        
        
        this.firebaseRef = new Firebase('https://hefesoft-react-stack.firebaseio.com/messages');
        this.firebaseRef.on("child_added", (msg)=>{
            
            if(this.state.messages[msg.key()]){
                return;
            }
            
            let msgVal = msg.val();
            msgVal.key = msg.key();
            
            this.state.messages[msgVal.key] = msgVal;
            this.setState({messages : this.state.messages});

        });
        
        this.firebaseRef.on("child_removed", (msg)=>{
           var key = msg.key();
           delete this.state.messages[key];
           this.setState({messages : this.state.messages});
        });
    }
    
    
    render(){
        
        var _messages = _.values(this.state.messages);
        
        if(_messages){
            var messageNodes = _messages.map((item, i)=>{
                return(
                    <Message message={item.message}  />
                );
            });
        }
        
        return(
            <Card style={{
               flexGrow: 2,
               marginLeft: 30
            }}>
                <List>
                  {messageNodes}
                </List>
            </Card>
        );
    }
}

export default MessageList;