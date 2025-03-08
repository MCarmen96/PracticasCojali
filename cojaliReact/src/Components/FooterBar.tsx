import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArtstation} from '@fortawesome/free-brands-svg-icons';

function FooterBar() {
    return (
        <footer className="footer">
           
           <div className='footer-left'>
            <p>I.E.S Gregorio Prieto</p>
            </div>

            <div className="footer-center">
                <a href="https://www.linkedin.com/in/maricarmengarcianavarro19/" target="_blank">
                    
                    <FontAwesomeIcon icon={faLinkedin} style={{color:'#ffff'}}size="2x" />
                </a>
                <a
                    href="https://gist.github.com/MCarmen96"
                    target="_blank"
                    
                >
                    
                    <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#ffff' }} />

                </a>
                <a
                    href="https://www.artstation.com/maryart3d"
                    target="_blank"
                    
                >
                    <FontAwesomeIcon icon={faArtstation} size="2x" style={{ color: '#ffff' }} />
                </a>
            </div>
            <div className='footer-right'>
            <p>M.Carmen Garcia 1ºDAW</p>
            </div>
            

           
        </footer>
    );
}

export default FooterBar;
