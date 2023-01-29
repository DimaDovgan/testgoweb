import { useState } from "react";
import { ReactImageCarouselViewer } from "react-image-carousel-viewer";
import Container from "../container/Container";
import s from './Cases.module.css'
import CaseImg1 from "../../images/Cases1.png"
import CaseImg2 from "../../images/Cases2.png"
import CaseImg3 from "../../images/Cases3.png"
import CaseImg4 from "../../images/Cases4.png"
import CaseImg5 from "../../images/Cases5.png"
import CaseImg6 from "../../images/Cases6.png"

function Cases() {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const images = [
    {src: CaseImg1},
    { src: CaseImg2 },
    { src: CaseImg3 },
    { src: CaseImg4 },
    { src: CaseImg5 },
    { src: CaseImg6 },
  ];

  return (
    <>
      <div className={s.cases} id="Cases">
      <Container>
      <p className={s.higthCasesText}>This is what we do</p>
      <p className={s.titleCase}>Business Cases</p>
      <p className={s.caseText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
      <div className={s.grid}>
      {images.map((image, index) => (
          <img
            className={s.image}
            src={image.src}
            alt=""
            key={index}
            onClick={() => {
              setIndex(index);
              setIsOpen(true);
            }}
          />
        ))}
        </div>

      </Container>
        

        <ReactImageCarouselViewer
          open={isOpen}
          onClose={() => setIsOpen(false)}
          images={images}
          startIndex={index}
        />
      </div>
    </>
  );
}


export default Cases;