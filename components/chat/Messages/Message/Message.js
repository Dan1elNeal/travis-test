import React from 'react';
import MessageBox from './MessageBox/MessageBox';

import Metadata from './Metadata/Metadata.js';

export default class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: props.currentUser,
            text: props.text,
            type: props.type,
            imageUrl: props.imageUrl,
            author: props.author,
            date: props.date,
            metadata: props.metadata,
            onMessageTitleClick: props.onMessageTitleClick,
            saveElementForScroll: props.saveElementForScroll
        };
    }

    render() {
        const side = this.state.author === this.state.currentUser ? 'self' : 'other';

        return <div ref={this.state.saveElementForScroll}>
            <MessageBox
                position={side}
                avatar={`/api/avatar/${this.state.author}`}
                title={this.state.author}
                onTitleClick={() => this.state.onMessageTitleClick(this.state.author)}
                type={this.state.type}
                image={this.state.imageUrl}
                text={this.state.text}
                date={new Date(this.state.date)}
                renderAddCmp={() => {
                    return this.state.metadata
                        ? <Metadata metadata={this.state.metadata}/>
                        : undefined;
                }}
            />
        </div>;
    }
}
