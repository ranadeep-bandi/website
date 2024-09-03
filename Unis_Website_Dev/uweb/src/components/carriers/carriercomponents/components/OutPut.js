import JobSearch from './JobSearch';
import JobCards from './JobCards';
import Trained from './Trained';
import Unis from './Unis';
import './css/OutPut.css';
import ProfileCard from './ProfileCard';



const OutPutComp = ()=>{
    return(
        <div className='top'>
        
            
            <JobSearch/>
            <Trained/>
            <JobCards/>
            <Unis/>
            {/* <ProfileCard/> */}
          

        </div>
    )
}
export default OutPutComp;