import BlogItem from "../components/home/blogs/BlogItem"

function Blog() {
    return (
        <>
            <section className="blogs blog-page">
                <div className="container">
                    <div className="section-title">
                        <h2>From Our Blog</h2>
                        <p>Summer Collection New Morden Design</p>
                    </div>
                    <ul className="blog-list">
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                    </ul>
                </div>
            </section>

        </>
    )
}

export default Blog