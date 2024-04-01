import ListItems from './ListItems';
import './MusicSec.css';

const MusicSec = props =>{
    return (
        <>
            <div className="musicbar">Music</div>
            <div className='listdiv'>
                <ListItems />
                <ListItems />
            </div>
        </>
    );
};
export default MusicSec;