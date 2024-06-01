import Navbar from "./Navbar";
import BlogContent from "./BlogContent";
import BlogPostsGrid from "./BlogPostsGrid";
import FrameComponent from "./FrameComponent";
import InputProcessor from "./InputProcessor";
import FooterIcons from "./FooterIcons";
import "./CSS/Blog.css";
import './CSS/global.css'

const Blog = () => {
  return (
    <div className="blog">
      <Navbar />
      <BlogContent />
      <section className="blog-posts-grid-wrapper">
        <BlogPostsGrid />
      </section>
      <FrameComponent />
      <InputProcessor />
      <FooterIcons />
    </div>
  );
};

export default Blog;