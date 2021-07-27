import './App.css';
import Background from '../src/images/background_Plan_de_travail_1.svg';
import Logo from './images/logo_Plan_de_travail_1.svg'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

const [NomUser, setNomUser] = useState();
const [PrenomUser, setPrenomUser] = useState();
const [EmailUser, setEmailUser] = useState();
const [TelUser, setTelUser] = useState();
const [CorporateUser, setCorporateUser] = useState();
const [ActivityUser, setActivityUser] = useState();
const [JobUser, setJobUser] = useState();
const [TypeWebSiteUser, setTypeWebSiteUser] = useState();
const [users, setUsers] = useState([""]);


  const handleUserInfo = async (e) => {
    e.preventDefault();


    try {
    if(NomUser && PrenomUser && EmailUser && TelUser && CorporateUser && ActivityUser && JobUser && TypeWebSiteUser ) {
       const { data } = await axios.post(`http://localhost:2000/user`, {
        NomUser : NomUser,
        PrenomUser : PrenomUser,
        EmailUser :  EmailUser,
        TelUser : TelUser,
        CorporateUser : CorporateUser,
        ActivityUser : ActivityUser,
        JobUser : JobUser,
        TypeWebSiteUser : TypeWebSiteUser
       });
     
       
    setUsers([...users,{
      NomUser : data.data.NomUser,
      PrenomUser : data.data.PrenomUser,
      EmailUser : data.data.EmailUser,

      TelUser : data.data.TelUser,
      CorporateUser : data.data.CorporateUser,
      ActivityUser : data.data.ActivityUser,

      JobUser : data.data.JobUser,
      TypeWebSiteUser : data.data.TypeWebSiteUser,

       }

    ])

/*kjkljlk*/

    console.log(users);
    alert('welcome');
    } 
    else {
      alert('veuillez remplir les champs vides');
    }
 } 
 
 
 
 catch (error) {
     console.log(error);
 }




}
  



  return (
    <div className="App">
      <img src={Background} className="imgBack" />





      <div className="appContent">
        <div className="titleForm">
          <h1> REMPLISSEZ <section className="formulaire">  LE FORMULAIRE </section> <section className="suivant"> SUIVANT POUR  </section> <section className="recevoir">  RECEVOIR </section>  <section className="devis"> UN DEVIS </section>  </h1>
        </div>

        <div className="form">

          <div className="firstForm">

            <div className="form1">
             <b> <p>  Nom   </p></b>
              <div className="inputField">  <input type="text" onChange={(e)=> setNomUser(e.target.value)} value={NomUser}/> </div>
            </div>

            <div className="form1">
            <b>   <p>  Prénom  </p> </b>
              <div className="inputField">  <input type="text" onChange={(e)=> setPrenomUser(e.target.value)} value={PrenomUser} /> </div>
            </div>

            <hr className="line" />
          </div>

          <div className="secondForm">

            <div className="form2">
              <p> Email </p>
              <div className="inputField">  <input type="text" placeholder="entrer adresse mail" onChange={(e)=> setEmailUser(e.target.value)} value={EmailUser} /> </div>
            </div>




            <div className="form2">
              <p> Téléphone </p>
              <div className="inputField">  <input type="text" onChange={(e)=> setTelUser(e.target.value)} value={TelUser}/> </div>
            </div>

            <div className="form2">
              <p> Nom de l'entreprise  </p>
              <div className="inputField">  <input type="text"  onChange={(e)=> setCorporateUser(e.target.value)} value={CorporateUser}/> </div>
            </div>

            <div className="form2">
              <p> Secteur d'activité  </p>
              <div className="inputField">  <input type="text" onChange={(e)=> setActivityUser(e.target.value)} value={ActivityUser} /> </div>
            </div>

            <div className="form2">
              <p> Votre poste  </p>
              <div className="inputField">  <input type="text" onChange={(e)=> setJobUser(e.target.value)} value={JobUser} /> </div>
            </div>

            <div className="form2">
              <p> Genre de site web  souhaité  </p>
              <div className="inputField">  <input type="text"  onChange={(e)=> setTypeWebSiteUser(e.target.value)} value={TypeWebSiteUser}/> </div>
            </div>

            <div className="form2">
              <button type="submit" onClick={(e) => handleUserInfo(e)}> ENVOYER </button>
            </div>
          </div>

        </div>



      </div>

      <div className="footer">
        <div className="logo">
          <img src={Logo} className="logo" />
        </div>

        <div className="signature">
        <p> ©  2021 Agence de publicité digitale</p>
        </div>
      </div>


    </div>
  );
}

export default App;
