
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";

function Home(props){
    return(
<>
<Header />
{
      props.data.map(element=>{
return(
< Tours name  = {element.name}
       image={element.image} />

)

      } 
        )
      }
<Footer/>

</>

    )
}
export default Home;