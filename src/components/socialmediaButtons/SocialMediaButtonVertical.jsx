

import './SocialMediaButtonVertical.css'
import github_ico from '../../assets/SVG/github.svg';
import linkedin_ico from '../../assets/SVG/linkedin.svg';
import twitter_ico from '../../assets/SVG/twitter.svg';
import instagram_ico from '../../assets/SVG/instagram.svg';


function SocialMediaButtonVertical() {
  return (
    <>
        {/**Cont botones Start */}
            <section className="cont-botones-social-media margen_der">

                {/**Boton start */}
                <a href="https://github.com/memo2898" target="_blank">
                    <div className="boton-item-social-media">
                        <img src={github_ico} className="icono_social_media" />
                    </div>
                </a>
                {/**Boton end */}
                {/**Boton start */}
                <a href="https://www.linkedin.com/in/manuel-maldonado-0886a5216/" target="_blank" >
                    <div className="boton-item-social-media">
                        <img src={linkedin_ico} className="icono_social_media" />
                    </div>
                </a>
                {/**Boton end */}
                {/**Boton start */}
                <a href="https://x.com/" target="_blank" >
                    <div className="boton-item-social-media">
                        <img src={twitter_ico} className="icono_social_media" />
                    </div>
                </a>
                {/**Boton end */}
                {/**Boton start */}
                <a href="https://www.instagram.com/" target="_blank" >
                    <div className="boton-item-social-media">
                        <img src={instagram_ico} className="icono_social_media" />
                    </div>
                </a>
                {/**Boton end */}


            </section>
        {/**Cont botones end */}
    </>
    
  )
}

export default SocialMediaButtonVertical