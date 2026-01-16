import AI from '../assets/images/icons/ai-icon.png';
import cssIcon from '../assets/images/icons/css-icon.jpg';
import JS from '../assets/images/icons/javascript-logo.svg';
import reactIcon from '../assets/images/icons/react-icon.png';
import HTMLIcon from '../assets/images/icons/html-icon.png';
import PS from '../assets/images/icons/photoshop-icon.svg';
import EJ from '../assets/images/icons/express-icon.png';
import NJ from '../assets/images/icons/nextjs-icon.webp';
import MDB from '../assets/images/icons/mongodb-icon.svg';
import { Rating } from '@mui/material';
import { skills } from '../data/data';

function Skill() {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-5 gap-3 xl:gap-4 w-full">
      {skills.map((skill) => (<div key={skill.title} className="p-3 xl:p-3 border border-gray-300 rounded-lg flex flex-col gap-2 sm:gap-4 items-center justify-between">
          <div className="flex flex-col items-center gap-3">
            <img
              alt={skill.title}
              style={{width:"auto", height:"40px"}}
              src={skill.icon}
            />
            <p className="text-black font-normal">{skill.title}</p>
          </div>
          
          <Rating name="half-rating" defaultValue={skill.rating} precision={0.5} size='small' readOnly />
        </div>))}
                
      </div>
  )
}

export default Skill