
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";

function Home(props){
    return(
<>
<Header />
<Tours data={props.data} />
<Footer/>

</>

    )
}
export default Home;