import { Link } from "react-router-dom";
 import styles from "./Footer.module.css";
import appStore from "../images/app-store.svg";

 import playStore from "../images/play-store.svg";
 import cult from "../images/cult-logo-white.svg";
 import fb from "../images/facebook_icon_white.svg";
 import twitter from "../images/twitter_icon_white.svg";
 import insta from "../images/instagram_icon_white.svg";
 import youtube from "../images/youtube_icon_white_1.svg";

export const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.top_section}>
          <div className={styles.logo_section}>
            <img src={cult} alt="Cult logo" />
            <p>
              {`cultsport offers top quality, best in class products which 
              provide a hoslistic approch to fitness-combining
              fitness products with best in class fitness content,
              features,coaching & service`}
            </p>
          </div>
          <div className={styles.about_links}>
            <ul>
              <li>
                <Link to="/">Contact us</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy </Link>
              </li>
              <li>
                <Link to="/">refund Policy </Link>
              </li>
              <li>
                <Link to="/">terms & conditions</Link>
              </li>
              <li>
                <Link to="/">download android app</Link>
              </li>
            </ul>
          </div>
          
          {/* <div className={styles.business_links}>
            <ul>
              <li>
                <Link to="/">Cultfit for business</Link>
              </li>
              <li>
                <Link to="/">Cult franchise</Link>
              </li>
              <li>
                <Link to="/">Cult pass network</Link>
              </li>
              <li>
                <Link to="/">Corporate Partnerships</Link>
              </li>
            </ul>
          </div>  */}
          <div className={styles.download_app}>
            <Link to="/">
              <img src={appStore} alt="App store" />
            </Link>
            <Link to="/">
              <img src={playStore} alt="Play store" />
            </Link>
          </div>
        </div>

{/*  
        <div className={styles.related_searches_section}>
          <h4>Related searches</h4>
          <div className={styles.search_list}>
            <Link to="/">Gym Near Me</Link>
            <Link to="/">Online Personal Training</Link>
            <Link to="/">Online Doctor Consultation</Link>
            <Link to="/">Therapist Consultation</Link>
            <Link to="/">Online Fitness classNamees</Link>
            <Link to="/">Consult Cardiologist Online</Link>
            <Link to="/">Consult Nutritionist Online</Link>
            <Link to="/">Consult Gynecologist Online</Link>
            <Link to="/">Diagnostic Tests</Link>
            <Link to="/">Food Near Me</Link>
            <Link to="/">Healthy Recipes</Link>
            <Link to="/">Chest Exercises</Link>
            <Link to="/">Exercise To Reduce Belly Fat</Link>
            <Link to="/">Six Pack Workout</Link>
            <Link to="/">Yoga Postures for Beginners</Link>
            <Link to="/">Surya Namaskar for Beginners</Link>
            <Link to="/">Yoga For Stress Relief</Link>
            <Link to="/">Yoga Asanas</Link>
            <Link to="/">Meditation Music</Link>
            <Link to="/">Pranayama</Link>
            <Link to="/">Bedtime Stories for Kids</Link>
            <Link to="/">Meditation in Hindi</Link>
            <Link to="/">Mindfulness Meditation</Link>
            <Link to="/">Yoga Nidra</Link>
            <Link to="/">Dermatologist online</Link>
            <Link to="/">Orthopedist doctor near me</Link>
            <Link to="/">Gyms in Mumbai</Link>
            <Link to="/">Gyms in Delhi</Link>
            <Link to="/">Gyms in Pune</Link>
            <Link to="/">Gyms in Hyderabad</Link>
            <Link to="/">Gyms in Chennai</Link>
            <Link to="/">Gyms in Jaipur</Link>
            <Link to="/">Gyms in Kolkata</Link>
            <Link to="/">Gyms in Ahmedabad</Link>
            <Link to="/">Gyms in Chandigarh</Link>
            <Link to="/">Gyms in Indore</Link>
            <Link to="/">Gyms in Coimbatore</Link>
            <Link to="/">Gyms in Bangalore</Link>
            <Link to="/">Home Workouts</Link>
            <Link to="/">Belly Fat Loss Exercise</Link>
            <Link to="/">Weight Loss Exercise</Link>
            <Link to="/">Strength Training</Link>
            <Link to="/">Mobility Exercises</Link>
            <Link to="/">Kids Exercise</Link>
            <Link to="/">Dance Exercises</Link>
            <Link to="/">How to Lose Weight</Link>
            <Link to="/">HIIT Workout</Link>
            <Link to="/">Exercises for Toned Body</Link>
            <Link to="/">Core Exercises</Link>
            <Link to="/">Butt Exercises</Link>
            <Link to="/">Arm Workout</Link>
            <Link to="/">Back Exercises</Link>
            <Link to="/">Abs Workout</Link>
            <Link to="/">Thigh Exercises</Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.links}>
            <Link to="/">Contact us</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">{`Terms & conditions`}</Link>
            <Link to="/">Privacy policy</Link>
            <Link to="/">Refund policy</Link>
          </div> */}

           <div className={styles.social_icons}>
            <Link to="/">
              <img src={fb} alt="" />
            </Link>
            <Link to="/">
              <img src={twitter} alt="" />
            </Link>
            <Link to="/">
              <img src={insta} alt="" />
            </Link>
            <Link to="/">
              <img src={youtube} alt="" />
            </Link>
          </div> 


        </div>
      {/* </div> */}
    </footer>
  );
};
