import React from "react";
import "./ImageConceptsScene.css";

const ImageConceptsScene = ({ onClose }) => {
  const concepts = [
    {
      title: "Mutant Scavenger Leader",
      text: "Kırık metal taçlı dev bir mutant, yanındaki çete üyeleriyle köhne bir pazarın ortasında yükseliyor, beyaz sis içinde neon ışıkları titriyor."
    },
    {
      title: "Underground Redoubt – Secret Laboratory",
      text: "Karanlık bir yeraltı laboratuvarı, kaynayan siyah sıvı dolu kaplar, kan lekeli hazmat tulumu içinde bilim insanı bir ışıklı flakon inceliyor."
    },
    {
      title: "Refugee Convoy Escape",
      text: "Zorlu bir tünelde zırhlı kamyonlar, sis içinde kaçan siviller; uzakta korkutucu bir kapı silueti."
    },
    {
      title: "Surface Ruins – Dawn of the Fog",
      text: "Çürümüş gökdelen kalıntıları, altın tonlu şafak ışığı içinde beyaz sis; gaz maskeli bir keşiş yıkık bir yolda yalnızca mavi üçgen amblemi dalgalandırıyor."
    }
  ];

  return (
    <section className="scene-wrapper">
      <h1 className="scene-title">Orbital Nadir – Görsel Tasvirleri</h1>
      <div className="concept-grid">
        {concepts.map((c, i) => (
          <div key={i} className="concept-card">
            <h2 className="concept-title">{c.title}</h2>
            <p className="concept-text">{c.text}</p>
          </div>
        ))}
      </div>
      <button className="btn-primary" onClick={onClose}>DEVAM</button>
    </section>
  );
};

export default ImageConceptsScene;
