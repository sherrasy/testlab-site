import HowToInfo from "@components/how-to-info/how-to-info";
import ThirdBlock from "@components/third-block/third-block";
import Greeting from "@components/greeting/greeting";
import Header from "@components/header/header";
import Reviews from "@components/reviews/reviews";
import Footer from "@components/footer/footer";
import Faq from "@components/faq/faq";
import Details from "@components/details/details";
import Form from "@components/form/form";

function MainPage(): JSX.Element {

  return (
    <div className='main-page'>
      <section className="main-page__heading-wrapper">
        <Header/>
        <Greeting/>        
      </section>
        <section className="main-page__general-info-wrapper">
          <HowToInfo/>
          <ThirdBlock/>
        </section>
        <section className="main-page__reviews-wrapper"><Reviews/></section>
        <section className="main-page__faq-wrapper"><Faq/></section>
        <section className="main-page__details-wrapper"><Details/></section>
        <section className="main-page__form-wrapper"><Form/></section>
        <Footer/>
    </div>
  );
}
export default MainPage;
