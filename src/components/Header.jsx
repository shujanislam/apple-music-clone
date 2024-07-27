import '../App.css';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="navbar-logo">
                <img src="/logo.png" alt="Apple Music Logo" />
            </div>
            <div className="music-controls">
                <button className="music-control-button small" type="button">
                    <span className="material-symbols-outlined">playlist_add</span>
                </button>
                <button className="music-control-button medium" type="button">
                    <span className="material-symbols-outlined">fast_rewind</span>
                </button>
                <button className="music-control-button large" type="button">
                    <span className="material-symbols-outlined">play_arrow</span>
                </button>
                <button className="music-control-button medium" type="button">
                    <span className="material-symbols-outlined">fast_forward</span>
                </button>
                <button className="music-control-button small" type="button">
                    <span className="material-symbols-outlined">repeat</span>
                </button>
            </div>
            <div className="nav-center-container">
                <div className="grey-div"></div>
                <div className="logo-container">
                    <img src="/apple-logo.svg" alt="Logo" className="logo" />
                </div>
            </div>
            
            <div className="nav-right-container">
                <button className="btn btn-danger text-light extra-button mx-3" type="button">Sign In</button>
            </div>
        </nav>
    );
}

export default Header;
