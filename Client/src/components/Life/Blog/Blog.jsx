import "./Blog.css";
export const Blog = ({t_img, title, l_img, l_head, m_img, m_head, r_img, r_head}) => {
  return (
    <>
      <div className="blog-card">
        <div className="title">
          <div className="blog-card-title-div">
            <img
              src={t_img}
              alt=""
              className="blog-card-title-img"
            />
          </div>
          <div className="blog-card-img-heading">
            <h2 className="blog-card-title">{title}</h2>
          </div>
        </div>
        <div className="blog-blog-card">
          {/* side blog-card*/}
          <div className="side-blog-card">
            <img
              className="side-blog-card-img"
              src={l_img}
              alt=""
            />
            <h2 className="side-blog-card-heading">
              {l_head}
            </h2>
          </div>
          {/* Middle blog-Card */}
          <div className="middle-blog-card">
            <img
              className="middle-blog-card-img"
              src={m_img}
              alt=""
            />
            <h2 className="middle-blog-card-heading">
              {m_head}
            </h2>
          </div>
          {/* side blog-card*/}
          <div className="side-blog-card">
            <img
              className="side-blog-card-img"
              src={r_img}
              alt=""
            />
            <h2 className="side-blog-card-heading">
              {r_head}
            </h2>
          </div>
        </div>
        <div className="btn-seemore">
          <button className="seemore">
            SEE MORE
          </button>
        </div>
      </div>
    </>
  );
};
