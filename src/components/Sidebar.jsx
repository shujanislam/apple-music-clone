
import '../App.css'

function Sidebar(){
    return(
        <div className="container sidebar pt-3">
            <a href=""><img src="/logo.png" alt="Apple Music" style={{ height: '22px' }} /></a>
            <div className="search-div">
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
            </div>
            <div className="channels">
                <div className="container">
                    <ul>
                        <li><a href="/" className="active"><span className="material-symbols-outlined">home</span>Home</a></li>
                        <li><a href="/"><span className="material-symbols-outlined">apps</span>Browse</a></li>
                        <li><a href="/"><span className="material-symbols-outlined">radio</span>Radio</a></li>
                    </ul>
                </div>
                <div className="library">
                    <p className="text-secondary">Library</p>
                    <div className="container">
                        <ul>
                            <li><a href="/"><span className="material-symbols-outlined">schedule</span>Recently Added</a></li>
                            <li><a href="/"><span className="material-symbols-outlined">mic</span>Artists</a></li>
                            <li><a href="/"><span className="material-symbols-outlined">library_music</span>Albums</a></li>
                            <li><a href="/"><span className="material-symbols-outlined">genres</span>Songs</a></li>
                            <li><a href="/"><span className="material-symbols-outlined">account_box</span>Made for You</a></li>
                        </ul>
                    </div>
                </div>
                <div className="playlist">
                    <p className="text-secondary">Playlists</p>
                    <div className="container">
                        <ul>
                            <li><a href="/"><span className="material-symbols-outlined">apps</span>All Playlists</a></li>
                            <li><a href="/"><span className="material-symbols-outlined">stack_star</span>Favourite Songs</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar