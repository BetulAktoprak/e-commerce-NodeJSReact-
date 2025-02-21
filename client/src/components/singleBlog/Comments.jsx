import CommentItem from "./CommentItem"

function Comments() {
    return (
        <>
            <div className="comments">
                <ol className="comment-list">
                    <CommentItem />
                    <CommentItem />
                </ol>
            </div>
        </>
    )
}

export default Comments