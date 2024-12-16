import React, { useEffect } from "react";
import style from "./customerReport.module.scss";
import img from "../../assets/img/customerReport.png";
import CustomerReportIcon from "../../sharedComponents/svg/customerReportIcon";
import { useSelector } from "react-redux";
import usePaginate from "../../hooks/usePaginate";
const CustomerReport = () => {
  const reports = useSelector((state) => state.customerReports.reports);

  const { currentIndex, goToPage, goToNextPage, currentData, totalPages } =
    usePaginate(reports);

  const handleDotClick = (index) => {
    goToPage(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextPage();
    }, 3000);

    return () => clearInterval(interval);
  }, [goToNextPage]);

  return (
    <section className={style.customerReport}>
      <div className={style.customerReport_container}>
        <div className={style.imageBox}>
          <img src={img} alt="" />
        </div>
        <div className={style.content}>
          <div className={style.title}>
            <h2>
              <span>WHAT OUR CUSTOMERS SAYS ABOUT US</span>
              <span className={style.styled}>Testimonials</span>
            </h2>
          </div>
          <div className={style.reportBox}>
            {reports.map((el, index) => {
              return (
                <div
                  key={el.id}
                  className={style.item}
                  style={{
                    opacity: index === currentIndex ? 1 : 0,
                    transition: "opacity 500ms ease",
                  }}
                >
                  <span>{el.report}</span>
                  <p>{el.name}</p>
                </div>
              );
            })}
            <div className={style.iconbox}>
              <CustomerReportIcon />
              <CustomerReportIcon />
            </div>
            <div className={style.pagination}>
              <div className={style.dot_container}>
                {Array.from({ length: totalPages }).map((_, index) => {
                  return (
                    <span
                      className={
                        currentIndex === index
                          ? style.dot + " " + style.active
                          : style.dot
                      }
                      key={index}
                      onClick={() => handleDotClick(index)}
                    >
                      <div className={style.round}></div>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReport;
