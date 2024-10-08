import "./Testimonial.scss";

const Testimonial = () => {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonial" id="testimonial">
      <h1 className="tes-title">testimonial</h1>
      <div className="container">
       {data.map((d) =>(
         <div className={d.featured ? "card featured" : "card"}>
         <div className="top">
           <div className="tes-image">
             <img src="assets/right-arrow.png" className="left" />
           </div>
           <div className="tes-image">
             <img src={d.img} className="user" />
           </div>
           <div className="tes-image">
             <img src={d.icon} className="right" />
           </div>
         </div>
         <div className="center">
           {d.desc}
         </div>
         <div className="bottom">
           <h3 className="tes-text">{d.name}</h3>
           <h4 className="tes-last-text">{d.title}</h4>
         </div>
       </div>
       ))}
      </div>
    </div>
  );
};

export default Testimonial;
