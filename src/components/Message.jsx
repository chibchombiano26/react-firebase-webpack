import React from 'react';
import mui from 'material-ui';

var {ListItem, Avatar} = mui;

class Message extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <ListItem
            leftAvatar={<Avatar src="https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/c12.48.155.155/s50x50/255046_162054817194838_1108526_n.jpg?oh=f6bff65ab9a27ee44dd71d554aebb81b&oe=57432EFD&__gda__=1460359280_7623207fb09833dd3c4a0ed775fb2523"/>}
            >
              {this.props.message}
            </ListItem>
        )
    }
    
}

module.exports = Message;