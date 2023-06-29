import HeaderImage from "../../assets/images/header_bg_3.jpg";
import { galleryImages } from "../../data";
import Header from "../../components/Header";
import "./gallery.css";

const Gallery = () => {
  return (
    <>
      <Header title={"Gallery"} image={HeaderImage}>
        <p>
          Shape City has one of the best tools and trainers from all around the world which makes your fitness journey very easy and comfort.
          Took a look at at our of Shape City gallery.
        </p>
      </Header>
      <section className="gallery">
        <div className=" container gallery__container">
          {galleryImages.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`Gallery Image ${index}`} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
