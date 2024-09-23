import React from 'react';
import './App.scss';



function App() {
  return (
      <div className='App'>

    
          <div className='BorderTop'>
          <img className='border-left'src={require ('./assets/border-top-left.png')} alt='border-top-left'/>
          <img className='border-right' src={require ('./assets/border-top-right.png')} alt='border-top-right' />
        </div> 



        <section id="Introduction">
          
            <h2 className='intro1'>It is with great pleasure that we,</h2>
            <div className='RoyAndShawn'>
        
            <img src={require('./assets/roy-and-shawn-main.png')} alt='Roy & Shawn'/>
          
            </div>
            
            <div className='intro2'>
              <h2>invite you to our wedding</h2>
              <h2>celebration on</h2>
            </div>

            <div className='date'>
            
            <img src={require ('./assets/wedding-date.png')} alt='wedding-date'/>

          </div>



          <div className='location'>
            <h2>Leticia’s Garden</h2>
            <h2>333 Calumpit-Pulilan Road,</h2>
            <h2>Calumpit, Bulacan</h2>
          </div>

          
        </section>

        <section id='Entourage'>

          <img src={require ('./assets/villarosa-uy.png')} alt='Villarosa-Uy'/>

          <div className='Parents'>
            <div className='column'>
            <h2 className='parentsList'>PARENTS OF THE BRIDE</h2>
            <h2>Allan Eric R. Uy</h2>
            <h2>Lasheel H. Paril</h2>
          </div>

          <div className='column'>
            <h2 className='parentsList'>PARENTS OF THE GROOM</h2>
            <h2>Roy A. Villarosa </h2>
            <h2>Ma. Carmela M. Benipayo </h2>
            </div>
          </div>

          <div className='PrincipalSponsors' >
            <h2>PRINCIPAL SPONSORS</h2>

            <div className='column'>
              <h2>Anjanette Juan</h2>
              <h2>Ronald Juan</h2>
              <h2>Carmeliza Imson</h2>
              <h2>Severino Imson</h2>
              <h2>Aurora Cruz</h2>
              <h2>Mylene Talens</h2>
            </div>

            <div className='column'>
              <h2>Emmanuel Peña Jr.</h2>
              <h2>Joycelyn Peña</h2>
              <h2>Maria Patricia Sison</h2>
              <h2>Kristine Co</h2>
              <h2>Annette Ty</h2>
              <h2>Laarnie Burias</h2>
            </div>

          </div>


          <div className='BestMen-MaidofHonors'>
            

            <div className='column'>
              <h2>MAID & MAN OF HONOR</h2>
                <div className='BestMen-MaidofHonors-names'>
                  <h2>Raphael Lim</h2>
                  <h2>Arianne Justine Co</h2>
                  <h2>Jana Marie Feranz Tabuzo</h2>
                </div>
              </div>
              

            <div className='column'>
              <h2>BEST MEN</h2>
                <div className='BestMen-MaidofHonors-names'>
                  <h2>Emmanuel Joshua Peña IV</h2>
                  <h2>Miguel Enrico Baliña</h2>
                </div>
            </div>



          </div>


          <div className='BridesMaids-GroomsMen'>
            <div className='column'>
              <h2>BRIDEMAIDS</h2>
                <div className='BridesMaids-GroomsMen-names'>
                  <h2>Deona Rae Obispo</h2>
                  <h2>Micah Lyne Palencia</h2>
                  <h2>Ma. Ysabel Celina Ann Lico</h2>
                </div>
              </div>
            

            <div className='column'>
              <h2>GROOMSMEN/WOMAN</h2>
                    <div className='BridesMaids-GroomsMen-names'>
                      <h2>Antonio Miguel Benipayo</h2>
                      <h2>Jose Gerardo Mercado</h2>
                      <h2>Wilfred Isaac Cheng</h2>
                      <h2>Mikaela Mendieta-Salvacion</h2>
                    </div>
                  </div>
            </div>

          <div className='flower-boy-girl'>
            
              <div className='column'>
                <h2>FLOWER GIRLS</h2>
                  <div className='flower-boy-girl-name'>
                    <h2>Rassha Co</h2>
                    <h2>Stella Cruz</h2>
                    <h2>Reese Benipayo</h2>
                  </div>
                </div>

                <div className='column'>
                  <h2>FLOWER BOYS</h2>
                    <div className='flower-boy-girl-name'>
                      <h2>Alonzo Co </h2>
                      <h2>Mason Cruz</h2>
                    </div>
                </div>
            </div>

          
          <div className='Cord'>
            <h2>CORD</h2>
              <div className='Cord-names'>
                <h2>Raphael Lim</h2>
                <h2>Mikaela Mendieta-Salvacion</h2>
              </div>
          </div>


          <div className='Wedding-Roles'>
           <div className='column'>
              <h2 className='Roles'>VEIL</h2>
              <h2>Emmanuel Joshua Peña IV</h2>
              <h2>Jana Marie Feranz Tabuzo</h2>
            </div>

            <div className='column'>
              <h2 className='Roles'>CANDLE</h2>
              <h2>Wilfred Isaac Cheng</h2>
              <h2>Micah Lyne Palencia</h2>
            </div>

            <div className='column'>
              <h2 className='Roles'>RING & COIN BEARER</h2>
              <h2>Antonio Miguel Benipayo</h2>
            </div>

            <div className='column'>
              <h2 className='Roles'>BIBLE BEARER</h2>
              <h2>Jose Gerardo Mercado</h2>
            </div>
          </div>

        </section>

        <section>
          <div className='Attire'> 
            <img className='Attire-Text' src={require ('./assets/attire-text.png')} alt='Attire-Text'/>
              <h1>FORMAL</h1>
              <h2>Suit and Tie for the Gentlemen</h2>
              <h2>Long garden gown for the Ladies</h2>
            <img src={require ('./assets/attire.png')} alt='Attire-IMG'/>
          </div>
        </section>

        <section>
          <div className='Theme'> 
            <img className='Theme-Text' src={require ('./assets/theme.png')} alt='Attire-Text'/>
              <h2>Guests are encouraged to incorporate</h2>
              <h2><b>summer palette </b> colors in their attires</h2>
            <img src={require ('./assets/color-palette.png')} alt='Attire-IMG'/>
          </div>
        </section>


        <section>
          <div className='Gifts'> 
            <img className='Gifts-Text' src={require ('./assets/gifts.png')} alt='how-to-get-there-Text'/>
              <h2>Your presence at our wedding is the greatest gift</h2>
              <h2>we could ask for. Should you wish to honor us</h2>
              <h2>with a gift, cash contribution towards our</h2>
              <h2>future together would be sincerely appreciated</h2>
          </div>
        </section>


        <section>
          <div className='Directions'> 
            <img className='how-to-get-there-Text'  src={require ('./assets/how-to-get-there.png')} alt='Attire-Text'/>
              <h2>Leticia’s Garden</h2>
              <img className='QR-img' src={require ('./assets/qr-code.png')} alt='QR-code'/>
              <a href='https://maps.app.goo.gl/sSr5yqunSAH8jvo77' target="_blank" rel="noopener noreferrer">Google Maps Link</a>
              <a href='https://waze.com/ul/hwdtuu3nr2' target="_blank" rel="noopener noreferrer">Waze Link</a>
          </div>
        </section>

    
 

        <div className='BorderBottom'>
          <img className='border-left' src={require ('./assets/border-bottom-left.png')} alt='border-bottom-left'/>
          <img className='border-right' src={require ('./assets/border-bottom-right.png')} alt='border-bottom-right' />
        </div> 

        


      </div>

  );
}

export default App;
