
import img1 from "../assets/images/poert1.png";
import img2 from "../assets/images/port2.png";
import img3 from "../assets/images/port3.png";

export default function Portfolio() {
  return (
    <section className="portfolio py-5">
      <div className="container">

        <h2 className="text-center fw-bold">PORTFOLIO</h2>
        <div className="text-center mb-4">★</div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="portfolio-item">
              <img src={img1} className="w-100" alt="portfolio" />
            </div>
          </div>

          <div className="col-md-4">
            <div className="portfolio-item">
              <img src={img2} className="w-100" alt="portfolio" />
            </div>
          </div>

          <div className="col-md-4">
            <div className="portfolio-item">
              <img src={img3} className="w-100" alt="portfolio" />
            </div>
          </div>

          <div className="col-md-4">
            <div className="portfolio-item">
              <img src={img1} className="w-100" alt="portfolio" />
            </div>
          </div>

          <div className="col-md-4">
            <div className="portfolio-item">
              <img src={img2} className="w-100" alt="portfolio" />
            </div>
          </div>

          <div className="col-md-4">
            <div className="portfolio-item">
              <img src={img3} className="w-100" alt="portfolio" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}