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
        <Header/>
        <Greeting/>
        <section>
          <HowToInfo/>
          <ThirdBlock/>
        </section>
        <Reviews/>
        <Faq/>
        <Details/>
        <Form/>
        <Footer/>
    </div>
  );
}
export default MainPage;
