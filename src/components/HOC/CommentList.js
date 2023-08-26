import React from "react";

import data from '../../data.json'
import Comment from "./Comment";

class CommentList extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            comments: data.comments
        }
    }

    componentDidMount() {

    }

    handleChange() {
        // Сохранить комментарии из внешнего источника в локальном состоянии
        this.setState({
            comments: {...data.comments + {
                    'title': 'comment',
                    "id": 6533
                }
            }
        });
    }

    render() {
        return (
            <div>
                {this.state.comments.map((comment) => (
                    <Comment comment={comment} key={comment.id} />
                ))}
            </div>
        )
    }
}

export default CommentList;