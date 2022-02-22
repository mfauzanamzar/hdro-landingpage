import React from "react";
import "./Category.css";
import Image1 from "../images/SizeTeam.png";
import Image2 from "../images/SizePhoto1.png";
import Image3 from "../images/SizeTeam3.jpg";

const Category = () => {
  const CategoryItems = [
    {
      id: 1,
      name: "Greenconomics Hidro Project",
      text: "Project yang sudah ada prototypenya di bali yang sudah bisa membangkitkan listrik secara yang saat ini sudah mencukupi kebutuhan listrik untuk sekitar 60 kepala keluarga…",
      image: Image1,
    },
    {
      id: 2,
      name: "HMN Energy Digital Blockchain Platform",
      text: "Lorem iProject hydro ini dibuat dengan kekuatan komunitas dari dan untuk rakyat dimana dibutuhkan penggalang dana dan sebuah bentuk charity...",
      image: Image2,
    },
    {
      id: 3,
      name: "Rakyat Mini Support Project",
      text: "Project yang sudah dipilihkan yang akan dibangun di 10 titik wilayah terpencil yang sampai saat ini belom adanya sumber daya listrik di daerah tersebut",
      image: Image3,
    },
  ];
  return (
    <div className="category-container">
      <div className="category">
        <div className="category-heading">
          <h1 className="category-heading__text"> HMN business</h1>
          <h1 className="category-heading__text"> focus on 3 categories</h1>
        </div>
      </div>
      <div className="category-item-wrapper">
        <div className="category-item">
          <img
            width={180}
            className="category-item__image"
            src={Image1}
            alt="categorypic"
          />
          <p className="category-item__name">Greenconomics Hidro Project</p>
          <p className="category-item__text">
            Project yang sudah ada prototypenya di bali yang sudah bisa
            membangkitkan listrik secara yang saat ini sudah mencukupi kebutuhan
            listrik untuk sekitar 60 kepala keluarga…
          </p>
          <a href="#" className="category-item__text">
            Read more
          </a>
          <div className="splash1">
            <img src="/splash/Splash6.png" alt="splash" />
          </div>
        </div>
        <div className="category-item">
          <img
            width={180}
            className="category-item__image"
            src={Image2}
            alt="categorypic"
          />
          <p className="category-item__name">
            HMN Energy Digital Blockchain Platform
          </p>
          <p className="category-item__text">
            Project hydro ini dibuat dengan kekuatan komunitas dari dan untuk
            rakyat dimana dibutuhkan penggalang dana dan sebuah bentuk
            charity...
          </p>
          <a href="#" className="category-item__text">
            Read more
          </a>
        </div>
        <div className="category-item">
          <img
            width={180}
            className="category-item__image"
            src={Image3}
            alt="categorypic"
          />
          <p className="category-item__name">Rakyat Mini Support Project</p>
          <p className="category-item__text">
            Project yang sudah dipilihkan yang akan dibangun di 10 titik wilayah
            terpencil yang sampai saat ini belom adanya sumber daya listrik di
            daerah tersebut
          </p>
          <a href="#" className="category-item__text">
            Read more
          </a>
          <div className="splash2">
            <img src="/splash/Splash5.png" alt="splash" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
