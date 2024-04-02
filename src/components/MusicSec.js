import ListItems from './ListItems';
import './MusicSec.css';

const MusicSec = props =>{
    return (
        <>
            <div className="musicbar">MUSIC</div>
            <div className='listdiv'>
                <ListItems />
                <ListItems />
                <ListItems />
                <ListItems />
            </div>
            <div className="merchbar">MERCH</div>
            <div className='listdiv'>
                <ListItems />
                <ListItems />
            </div>
            <div className='seeCart'>
                <button> See the Cart</button>
            </div>
            <div className='footer'>
                <h7>The Generics</h7>
                <div></div>
            </div>
        </>
    );
};
export default MusicSec;