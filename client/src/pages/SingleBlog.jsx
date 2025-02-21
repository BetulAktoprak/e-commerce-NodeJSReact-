import BlogContent from "../components/singleBlog/BlogContent"
import CommentForm from "../components/singleBlog/CommentForm"
import Comments from "../components/singleBlog/Comments"

function SingleBlog() {
    return (
        <>
            <section className="single-blog">
                <div className="container">
                    <BlogContent />
                    <div className="tab-panel-reviews">
                        <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
                        <Comments />
                        <CommentForm />
                    </div>
                </div>
            </section>
        </>
    )
}
export default SingleBlog