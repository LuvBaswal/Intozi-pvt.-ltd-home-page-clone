import { useState } from "react"
import "../Style/Home.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Home() {

  const [Analys1, SetAnalys1] = useState("Wrong Way Driving");
  const [Analys2, SetAnalys2] = useState("ANPR & Vehicle Class");
  const [Analys3, SetAnalys3] = useState("No Seat Belt");
  const [Analys4, SetAnalys4] = useState("Triple Riding");
  const [Analys5, SetAnalys5] = useState("No Hemet");
  const [Analys6, SetAnalys6] = useState("Overspeed Detection");
  const [Analys7, SetAnalys7] = useState("Driver on Call");
  const [Analys8, SetAnalys8] = useState("Red Light Violation");



  function AnalysesButton(Button) {
    if (Button === 'Button1') {
      SetAnalys1('Wrong Way Driving')
      SetAnalys2('ANPR & Vehicle Class')
      SetAnalys3('No Seat Belt')
      SetAnalys4('Triple Riding')
      SetAnalys5('No Hemet')
      SetAnalys6('Overspeed Detection')
      SetAnalys7('Driver on Call')
      SetAnalys8('Red Light Violation')
    }
    else if (Button === 'Button2') {
      SetAnalys1('Stray Animal Detection')
      SetAnalys2('Incident Detection')
      SetAnalys3('Crowd Analysis')
      SetAnalys4('Crowd Heat Map')
      SetAnalys5('Missing Object')
      SetAnalys6('Unattended Object')
      SetAnalys7('Garbage Detection')
      SetAnalys8('Pothhole Detection')
    }
    else if (Button === 'Button3') {
      SetAnalys1('Fire and Smoke')
      SetAnalys2('PPE Detection')
      SetAnalys3('Intrusion Detection')
      SetAnalys4('Object Detection')
      SetAnalys5('People Count')
      SetAnalys6('Material Loading')
      SetAnalys7('Colour Based Detection')
      SetAnalys8('Material Detection')
    }
    else {
      SetAnalys1('Object Count')
      SetAnalys2('Intrusion Detection')
      SetAnalys3('Inventory Management')
      SetAnalys4('Vehicle TAT Calculation')
      SetAnalys5('Material Loading')
      SetAnalys6('Vehicle Management')
      SetAnalys7('Time calculation')
      SetAnalys8('Safety Detection')
    }
  }

  var Clients = {
    autoplay: true,
    infinite: true,
    speed: 400,
    slidesToShow: 8,
    slidesToScroll: 1
  };


  return (
    <>
      <div className="Home">
        <h1>See Beyond, Analyse Within</h1>
      </div>

      <div className="CustumersLogo">
        <img src="https://intozi.io/wp-content/uploads/2023/09/1397x43.png" srcset="https://intozi.io/wp-content/uploads/2023/09/1397x43.png , https://intozi.io/wp-content/uploads/2023/09/1397x43-300x9.png , https://intozi.io/wp-content/uploads/2023/09/1397x43-1024x32.png , https://intozi.io/wp-content/uploads/2023/09/1397x43-768x24.png " alt="" />

      </div>

      <div className="Ikshana">
        <hr />
        <h2>IKSHANA</h2>

      </div>
      <hr className="Hr1" />

      <div className="intoziAISuitthenextGenVideoAnalyticsplatform">
        <h3>Intozi AI Suit-the next Gen Video Analytics platform</h3>
      </div>

      <div className="spaciality">
        <div>
          <img decoding="async" src="https://intozi.io/wp-content/uploads/elementor/thumbs/data-collection-22-qd1lq8xt9rb1d0hdopohm8t93ydzewobktmbcjlths.png" title="data-collection-22.png" alt="data-collection-22.png" loading="lazy" /><br />
          <h5>Collect Data</h5>
        </div>
        <div>
          <img decoding="async" src="https://intozi.io/wp-content/uploads/elementor/thumbs/annotate-qd1lqbrbu9ewbuda88wdbq3mw4031zzil7krsdhmz4.png" title="annotate.png" alt="annotate.png" loading="lazy" /><br />
          <h5>Annotate</h5>
        </div>
        <div>
          <img decoding="async" src="https://intozi.io/wp-content/uploads/elementor/thumbs/artificial-intelligence-222-qd1lqdn07xhgz2ajx9pmgpmk2vqthe6z9gvqqxeumo.png" title="artificial-intelligence-222.png" alt="artificial-intelligence-222.png" loading="lazy" /><br />
          <h5>Train</h5>
        </div>
        <div>
          <img decoding="async" src="https://intozi.io/wp-content/uploads/elementor/thumbs/file-upload-qd1lqekuerirao96rs4917e0o9m6p3apllj887dggg.png" title="file-upload.png" alt="file-upload.png" loading="lazy" /><br />
          <h5>Deploye</h5>
        </div>
        <div>
          <img decoding="async" src="https://intozi.io/wp-content/uploads/elementor/thumbs/local-area-qd1lqggisflbxw6ggsxi66wxv1cx4hi69uu76rao40.png" title="local-area.png" alt="local-area.png" loading="lazy" /><br />
          <h5>Connect</h5>
        </div>
        <div>
          <img decoding="async" src="https://intozi.io/wp-content/uploads/elementor/thumbs/monitor-1-qd1lqja1cxp6wq2d0c5dvo7bn6z0rktda8snml6hlc.png" title="monitor-1.png" alt="monitor-1.png" loading="lazy" /><br />
          <h5>Moniter</h5>
        </div>
        <div>
          <img decoding="async" src="https://intozi.io/wp-content/uploads/elementor/thumbs/data-analysis-qd1lql5pqlrrjxzmpcyn0nq8typr6z0tyi3ml53p8w.png" title="data-analysis.png" alt="data-analysis.png" loading="lazy" /><br />
          <h5>Event Analysis</h5>
        </div>
        <div>
          <img decoding="async" src="https://intozi.io/wp-content/uploads/elementor/thumbs/brain-qd1lqm3jxft1vjy9jvd9l5hpfcl4eo4kamr42f2b2o.png" title="brain.png" alt="brain.png" loading="lazy" /><br />
          <h5>Retrain</h5>
        </div>
        <div>
          <img decoding="async" src="https://intozi.io/wp-content/uploads/elementor/thumbs/decision-making-1-qd1lqnz8b3vmirvj8w6iq50mm4buu2c0yw230yziq8.png" title="decision-making-1.png" alt="decision-making-1.png" loading="lazy" /><br />
          <h5>Action</h5>

        </div>
      </div>

      <div className="oursolutions">
        <h2>OUR SOLUTIONS - ACROSS INDUSTRIES</h2>
      </div>

      <div className="AnalysAndSolutions">
        <div>
          <img src="https://intozi.io/wp-content/uploads/2023/10/VA.jpg" alt="" />

          <h3>AI Video Analytics</h3>
          <p>Offers a comprehensive solutions for enhancing safety and security, monitoring activities, &amp; providing advanced detection &amp; recognition capabilities.</p>
        </div>
        <div>
          <img src="https://intozi.io/wp-content/uploads/2023/10/Garbage-Detection-290-x-313-px.png" alt="" />
          <h3 style={{ marginTop: "230px" }}>ITMS (Intelligent Traffic Management System)</h3>
          <p style={{ marginTop: "290px" }}>AI-powered engine uses a camera stream across all the junctions &amp; generates valuable results to provide a holistic view of traffic </p>
        </div>
        <div>
          <img src="https://intozi.io/wp-content/uploads/2023/10/Garbage-Detection-290-x-313-px-1.png" alt="" />

          <h3 style={{ marginTop: "230px" }}> HTMS (Highway Traffic Management System)</h3>
          <p style={{ marginTop: "290px" }}>Incorporate various subsystems and technologies to efficiently manage and control traffic flow including integration of ATCC, VSDS &amp; VIDS</p>
        </div>
        <div>
          <img src="https://intozi.io/wp-content/uploads/2023/10/FRS-1.png" alt="" />
          <h3 style={{ marginTop: "230px" }}> FRS (Face Recognition System)</h3>
          <p style={{ marginTop: "290px" }}>Identifies people by capturing &amp; storing facial data. It also authenticate identities, &amp; even detect suspicious behavior in public areas. </p>
        </div>
      </div>

      <div className="singleplatformmultipleanalyses">
        <h2>SINGLE PLATFORM-MULTIPLE ANALYSES</h2>
      </div>

      <div className="analys1">
        <div>
          <div></div>
          <p>{Analys1}</p>
        </div>
        <div>
          <div></div>
          <p>{Analys2}</p>
        </div>
        <div>
          <div></div>
          <p>{Analys3}</p>
        </div>
        <div>
          <div></div>
          <p>{Analys4}</p>
        </div>
        <div>
          <div></div>
          <p>{Analys5}</p>
        </div>
        <div>
          <div></div>
          <p>{Analys6}</p>
        </div>
        <div>
          <div></div>
          <p>{Analys7}</p>
        </div>
        <div>
          <div></div>
          <p>{Analys8}</p>
        </div>
      </div>

      <div className="analysesbuttons">
        <button onClick={() => AnalysesButton("Button1")}><p>TRAFFIC MANAGEMENT</p></button><br />
        <button onClick={() => AnalysesButton("Button2")}><p>SAFE & SMART CITY</p></button><br />
        <button onClick={() => AnalysesButton("Button3")}><p>MANUFACTURING</p></button><br />
        <button onClick={() => AnalysesButton("Button4")}><p>WARE HOUSE</p></button>
      </div>

      <div className="ourclients">
        <h2>OUR CLIENTS</h2>
        <p> Intozi has an array of clients across multiple verticals starting from traffic enforcement to safety and security. Our strength is not only providing the standard solutions but we are capable to make taylor made solutions as per our client’s requirement and use cases.</p>

        <Slider {...Clients} className="slider">
          <div className="sliderimg">
            <img src="https://intozi.io/wp-content/uploads/elementor/thumbs/upl_6-removebg-preview-qd36l57ep2mkua5awccw4v53820vlnn273fcggxtrc.png" alt="upl_6-removebg-preview" />
          </div >
          <div className="sliderimg">
            <img src="https://intozi.io/wp-content/uploads/elementor/thumbs/upl-3-qd36l658vwnv5w3xquripcwjtfw8tcqsj82txqwfl4.png" alt="upl-3" />
          </div>
          <div className="sliderimg">
            <img src="https://intozi.io/wp-content/uploads/elementor/thumbs/sp-qd36l1g1xqhfjuariaqduw38uijeqv84uktejd3eg8.png" alt="sp" />
          </div>
          <div className="sliderimg">
            <img src="https://intozi.io/wp-content/uploads/elementor/thumbs/pc-qd36l1g1xqhfjuariaqduw38uijeqv84uktejd3eg8.png" alt="pc" />
          </div>
          <div className="sliderimg">
            <img src="https://intozi.io/wp-content/uploads/elementor/thumbs/mantec-qd36l2dw4kipvg9ect50fdupfwerykbv6pgw0n20a0.png" alt="mantec" />
          </div>
          <div className="sliderimg">
            <img src="https://intozi.io/wp-content/uploads/elementor/thumbs/LT-qd36l2dw4kipvg9ect50fdupfwerykbv6pgw0n20a0.png" alt="LT" />
          </div>
          <div className="sliderimg">
            <img src="https://intozi.io/wp-content/uploads/elementor/thumbs/upl-11-qd36l3bqbek072817bjmzvm61aa569fliu4dhx0m3s.png" alt="upl-11" />
          </div>
          <div className="sliderimg">
            <img src="https://intozi.io/wp-content/uploads/elementor/thumbs/upl-1-1-qd36l3bqbek072817bjmzvm61aa569fliu4dhx0m3s.png" alt="upl-1-1" />
          </div>
          <div className="sliderimg">
            <img src="https://intozi.io/wp-content/uploads/elementor/thumbs/upl-9-qd36l49ki8laio6o1ty9kddmmo5idyjbuyruz6z7xk.png" alt="upl-9" />
          </div>
          <div className="sliderimg">
            <img src="https://intozi.io/wp-content/uploads/elementor/thumbs/upl-8-qd36l49ki8laio6o1ty9kddmmo5idyjbuyruz6z7xk.png" alt="upl-8" />
          </div>
          <div className="sliderimg">
            <img src="https://intozi.io/wp-content/uploads/elementor/thumbs/upl_7-removebg-preview-qd36l57ep2mkua5awccw4v53820vlnn273fcggxtrc.png" alt="upl_7-removebg-preview" />
          </div>
        </Slider>

        <Slider {...Clients} className="sliderr">
          <div className="sliderimg">
            <img src="https://intozi.io/wp-content/uploads/elementor/thumbs/birla-qd36p6we4e60tu9o9lc2dcdjas2rqqpgf4jlucxsyw.png" alt="birla" />
          </div>
          <div className="sliderimg">
            <img src="https://intozi.io/wp-content/uploads/elementor/thumbs/pamp-qd36p7u8b87b5g8b43qoxu4zw5y4yft6r973bmweso.png" alt="pamp" />
          </div>
          <div className="sliderimg">
            <img src="https://intozi.io/wp-content/uploads/elementor/thumbs/birla-1-qd36qkpu6m27x69b6ovajhsys7982p789z4ca0vxt4.png" alt="birla" />
          </div>
          <div className="sliderimg">
            <img src="https://intozi.io/wp-content/uploads/elementor/thumbs/park-smart-1-qd36p27767zl7sgi11axivk8bupxo96sqha6fz4ru0.png" alt="park-smart-1" />
          </div>
          <div className="sliderimg">
            <img src="https://intozi.io/wp-content/uploads/elementor/thumbs/vigil-qd36p351d20vjef4vjpk3dbox8lavyaj2lxnx93dns.png" alt="vigil" />
          </div>
          <div className="sliderimg">
            <img src="https://intozi.io/wp-content/uploads/elementor/thumbs/dicam-qd36p351d20vjef4vjpk3dbox8lavyaj2lxnx93dns.png" alt="dicam" />
          </div >
          <div className="sliderimg">
            <img src="https://intozi.io/wp-content/uploads/elementor/thumbs/Vt-qd36p42vjw25v0drq246nv35imgo3ne9eql5ej1zhk.png" alt="Vt" />
          </div>
          <div className="sliderimg">
            <img src="https://intozi.io/wp-content/uploads/elementor/thumbs/upl-1-1-150x150-removebg-preview-qd36p42vjw25v0drq246nv35imgo3ne9eql5ej1zhk.png" alt="upl-1-1-150x150-removebg-preview" />
          </div>
          <div className="sliderimg">
            <img src="https://intozi.io/wp-content/uploads/elementor/thumbs/tata-removebg-preview-qd36p50pqq3g6mcekkit8cum40c1bchzqv8mvt0lbc.png" alt="tata-removebg-preview" />
          </div>
          <div className="sliderimg">
            <img src="https://intozi.io/wp-content/uploads/elementor/thumbs/ministery-qd36p5yjxk4qi8b1f2xfsum2pe7ej1lq2zw4d2z754.png" alt="ministery" />
          </div>

        </Slider>

      </div>

      <div className="whatourclientssay">
        <h2>WHAT OUR CLIENTS SAY</h2>
      </div>

      <div className="clientsfeedback">
        <div >
          <h2>Mr. Avnish Kumar</h2>
          <p>Add.DCP,Delhi Police</p>
          
          <h3>"Intozi young and dynamic team remain open to listen to their client's requirements in details and provides the best possible solution accordingly. Centralized command and control room set up by intozi has helped tp keep a check on stolen and suspects vehicles by giving instant alerts."Avinash kumarr Add. DCP,Delhi police</h3>
        </div>
        
        <div>
          <h2>Mr. SHIKHAWAT</h2>
          <p>SSP Bhiwani City</p>
          
          <h3>"Bhiwani's City Survelliance system delivered by intozi has been very helpful for police and traffic departments to keep a check on the crime and traffic situation in the city.It has helped to increase the efficiency & effectiveness byautomating the processes."</h3>
        </div>
        
        <div>
          <h2>Mr. Pankaj</h2>
          <p>ADDL. DCP</p>
          
          <h3>"Intozi's team was very professional througjout the implementation of delhi Police's ANPR project for new Delhi District. System performance has beed satisfactory and up to the mark always."Mr. Pankaj Addl.DCP</h3>
        </div>


       </div>

       <div className="contectandprofile">
           <div>
           
           <div className="aboutus">
            <h2>About Us</h2>
            <h4>Intozi offers a comprehensive Video Analytics Platform. With Intozi AI suit – IKSHANA, you can effortlessly develop, expand & oversee real-time computer vision & deep learning applications.</h4>
            <div>
              <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeu63M0r8ledxziCQbPkwlD3Uf6_lG175tjg&usqp=CAU" alt=""/>
              </div>
              <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR683vM96GBsb41c2lPgIALq04PVkDeIDIN-Q&usqp=CAU" alt=""/>
              </div>
              <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8bZqa3rsaKBIiQjl5_z5VmgSppAyhWCVSfQ&usqp=CAU" alt=""/>
              </div>
              <div>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEUAAAD////u7u7t7e3y8vL8/Pz4+Pjz8/P39/ecnJza2trq6upOTk7m5uatra3Ozs60tLQ4ODijo6PU1NQWFhbBwcFhYWGPj499fX3KysqVlZUsLCwODg5ubm5zc3M/Pz+IiIhISEhbW1sjIyMyMjI7OzsoKChTU1O6urplZWWCgoITExMcHBxcXFwwIUqtAAAKcklEQVR4nO1d22KiMBAlEEgAQYXitd5ad7V2+/+/tyjYaoWQywRBOU/FWZI5GyCTw2Qw0Am2ZZ6QHeHT35bzECajY9h6U8ew/aYnYGif4FgZsiOcHdCHMBlXVpod4OzoMUxGNsCWfRpUmo03ycbbeghTx7D9po5h+01nhvQEnP2OsyPrIUzfM36G7CifUpyHMD1BTNMxbL3pWRla5ee3zmTgHOSIqwPyGKaiGd8qn09baHqemKYxDnUMO4a3DM+r/fwfnXD+Rw9hMpwTcquVHeXBK3kI07PGNM30tWPYMWyIQ/AMO1W/9aYniGk6hq03dQzbb+pU/fabGhjTYIwzE8UYoMFmMUSYOkE/GYTubOaG+6QfOBTbj8QwiBbzV+MCr/OPyHsMhulAxWujBIcYnR+ObVX1MQ3cbRm/I/66AcEVDWIU7wtMjVD1bW/JopdhESPKaJDa8cLok2aq+vRQze+ICWY0GKT/ST1cYKqMabCpNwShKOTjd0R0viKvGkyv3PjraB6Qgr6qGOJ9jHQyJF6Pn6BhrDx64yENwuHJuC3sq3IMX4ZEI0MqMID5MJLLBjH1k8XZFJKivioYEtcw3vQxJBNRgoaxTG+c7waTyc8j+M/N8JrVqr5pHk8dFZkYZ/GasPkmTtAwNj5O716EyH75efl7Hxf2xVb1UXQ694OYGkR421zJEDSMd4t60eTl168TKqXqZ7ewscTwMQ12NnIEU4qft79tfamoLT6fvyTwUdtOlmAhpliK4c+DYEGBGTofoAQjKhV5O/OfJkawDOkYlODBKe2LxdD2Lhv5sgEZkgSU4MIp74ul6tuzq2Z2JoJS2s3gLyhBbH73hZzgui+Gqo/w6LqhuUeAlHYkMdOXY2mjvK80hIsnIeJW9f1/v9uaUpiYxityVBbrvHUHO364Mja/+mIxDG5bi2wQhkNAggMn78uPjvPPSyDAcFrQ3gGAIQJ8zGxiepTmcDzL1yiJI8CwMO7vmeoMJaO1AsyoHfQH67dv+Sq6uY9YDN3CRl+nigxx0bUhhc9ZtFi9X/6ypCKq/q/J4gdjJ5/t5JR2OippVx1vREjVJ2UMjT9x+VnVSruvjeCuyA1GTFPOMF1Ol55VHdMIL+t5saFFbkgyNN4CaYa6LtItLXSDxbD4SXOGK8mQaiI4D4rdYDDEFZfT3EOmBMO+HoIrH4swzJTSSl+WubZ3eValqs++MmSx83GJGyxVvyBq+42x6Qiq+nRR3ao4loTK5OrfRt63mA8EVX0Mum7K4Rb3VRnTYC6hYZ7Y+PKsipgGayCYlPRVyZBwKg3bgVn0wqC4V/j5fsh+78AcQ+4Achj5twFhYa84rm5NDEsfS+fTmMG8uoMc72OPa+kIF3ZneA2JSq4+5Xhx+YNF9sKd1aBlYVgJythTUyVX3xacnd/dIJ0OmKq+aJNVSGzFXP0/oj1+DCxmg7ASTfYYVcrFkFgH/Fsm+Ps+uO0VeLbYqzJEUt2+fA2CdPVb3Cssw4Eyw0i26/fDwE+DJ90MQ2WGiCNyK8V2ks6Tx0bIRYOwr5w4xpCh6h+FcWXl7+XrEHpeetGmwbCD0gbXALx+sEfKufq/pX05zDcf63Ca9L3AgRUxBpjlPFeuPoZ9vH/+U7nsb5HgKlGzOgsa+EUYMPoADC3EUqTuDRCGNoJ9IQ2KGIYhEsrMqhMvHjfDIhE+y+hMTQ6Ge5cCi61f5jyPqo9n1tmE/YaOYq/MeS5Vn74bEy8fb2xqkciUMWIHZBVRGz1emr2Bn12tFQr4nXBQY5jn1W3cKXUoQf1Xdm/3QKjG8CJh4s/ETTy/ebNGX5bh6Yj57qkhCMqc51L1xfN3a8cLx74AlqoPLKlowB+n1HmumMZv4KPlGhNaHZCpv7e4J7LcdQWGjZwCL9HHagxN8HcM0KDlzvOp+lg6E7se7CjzDQKHqi+vJdaDGU/5ILaaiJv9NE14tpdW6KWgma7g8AH2kOrL0ALACEPskm3yILoEgiG5Nw0GPL4xrFL1m/s4XcFU4DFlt1/pxwzBVOCpzv26Fzyo2iZNXSYOERRDC3Futa4ZMziGNvBLTSAEkAztBj5tVkiQIVMYd0zITS4wCG3QCjzYb9w6yjct0Ao82GyYorEkvzwsdZ67ekvDVP0+d/khgfo0TVL1e7jIQ1WGyG7OQmNAFBlaJef3G/LAWbF2PvCr+gVZ9xSHwtmKOhBRbXX1TQcl9x/HF1+g2o9MVUFvfednjksqPJRjaF6akvHm7/1oYj2VIWP/mJ6R77L1vf6koPxGPXCJFob2fNsbLQ9jd7Zejnr8Sfzw+GuJ1b5kqfqXJhu2kIUCQqKnrr6GzS5y6Nna6uo3JKLpl3tY6LwAQ47NejVgwfBQlWEzBtHUyVDHxjpRzJgeqjLUt8+cG8OC7Q2Kqv6VCbCghSSmmO2hTK7+pQk4q10cYyRe7Ucs8ib3vU6Htv6K5cAlugThqVQs5y43KrTpEhYRl4fq68OvexHs8XqoyvBeFF+xGkP+WjqOfZ+U78Sura6+ybtPHxQu5ffwyiRVsZwOaie4kKqjIhy1fZtIUPMrxaFktR9phukNXO/cb9bOMDXRGhdTnmzFJmFV/9oU1DX7F2y65/NQXNW/NlHHG8PuCC1G5Mh6KKHq/zIh5CTaB3J2m65e99dyk7XOdePYUfMQgqFNHNzfR+vl4r3aYVGsVSuJQn3vKb3gtWT5rZVrpcJ90Yp6GqKAsbAb8qo+25TGuzr2gbmCbhSZYL6Wa6NYx7uaiIq5oarqM0ymlvhmQAXdKDQBMCS+q+Nl6WfsiP5H62FIcKRhjjCMuQVU/12NoUlM9/d3JmAwkrlZ4BkiT9dq3xW/WUBU/UtTenasKyR9TZCgdM8wyX0tF2Eaz7TlnO4CwueGxq/lmq7GWNtFjkJopRi1YWwjuz/TUYL0jK2UdA/B0MaU+t5+rK/c+AlrORqCDM9Pyny1fPyTBP3wMNKe7b2KJWkIMgyWq4/J2A2jMIrc8WQ52gy1TOo3cHNRVwvDK2GcJnqmcTY+AmLW9rVcTNw6JKZL9OJbN/IlQ5GH/KaymIYG4zpzD7f7YjdMgJimhOGR47oufvPQ59mzDM0wPainfstnmAbwijTkGGbVPXU/RVcDh6jTEGZ4OS3udZb5WsQOY+eEBWGqVPUJpfFBz4N1O/Zsqv3LvHyqPt3DB2uLxCK4hi/zcsellgu50+JtbwtV468j8naI40UbiDny38eeQtOAYJia0nvS20/UVoabQ5J/LaWJDI+gyA7CCfMr4aXYHfYepro/Eg2k6geDsdBbiu0h9Gx0LE8o3peiSVLVp3baKp6G692cuQz5nPcmYRI4p1KhIN/YrVfVT9fI1DG9aT8Jx5PF167X6202vd3u7WMxWbuDZBr7Yg3eI2rjMOH8M0R2tjDLDlA259ZFQy/Dhps6hu03Sav6rTHJqfptMsFlKjTV1DFsv6lj2H6TeK5+20wSufotMz1BTNMxbL3pWRla5ee3zqSSq98Ok1qufhtMzxPTNMahjmHHUFeufoNNMLn6TTY9a0zTTF87hh3DhjgEz7BT9VtvevyY5j+z0JURllfspwAAAABJRU5ErkJggg==" alt=""/>
              </div>
              <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSodKDnPljZoLMuytHJefxzY1fWQxpHl9PFlw&usqp=CAU" alt=""/>
              </div>
            </div>
           </div>

           <div className="quicklinks">
            <h2>Quick links</h2>
            <h3>Case Studies</h3>
            <h3>Services</h3>
            <h3>Contect Us</h3>
            <h3>Privacy Policy</h3>
           </div>

           <div className="enquiry">
            <h2>For Sales Related Enquiry :</h2>
            <h4>AI Edge Devices: +91 8448829818</h4>
            <h4>Software: +91 9619399719</h4>
            <h4>Email: info@intozi.io</h4>
            <h3>GURUGRAM</h3>
            <hr/>
            <h3>BANGLORE</h3>
            <hr/>
            <h3>PUNE</h3>
            <hr/>
           </div>
           </div>
       </div>

       <div className="bottum">
        <h4>Copyright © 2023 Intozi  | All Right Reserved</h4>
       </div>


    </>
  )
}

export default Home