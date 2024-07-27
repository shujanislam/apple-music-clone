
import '../App.css'

function Home(){
    return(
        <div className="container home">
            <div className="header mx-3">
                <h1 className="bold" style={{ fontWeight: 'bold'}}>Home</h1>
                <div className="line"></div>
                <div className="mt-2">
                    <p style={{ fontSize: '18px', fontWeight: 'bold'}}>Top Picks for You</p>
                </div>
                <div className="cards-container">
                    <div className="card">
                        <img className="card-img" src="https://preview.redd.it/yn81w7k64vh41.jpg?width=1080&crop=smart&auto=webp&s=86eb7af0663416adb8d62ad7024fd21907c85fda" alt="Card image cap" />
                        <div className="card-body" style={{ backgroundColor: '#880808'}}>
                            <div className="card-content text-center justify-content-center">
                                <p className="album-name">After Hours (Deluxe)</p>
                                <p className="artist-name">The Weeknd</p>
                                <p className="album-year">2020</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img" src="https://external-preview.redd.it/2Y93uibGEeWFmh4pvvRv4JxukgqefrPrStZah17xqeA.jpg?width=1080&crop=smart&auto=webp&s=454045bf3b571b510aab063b558913c8efa1b399" alt="Card image cap" />
                        <div className="card-body" style={{ backgroundColor: '#333'}}>
                            <div className="card-content text-center justify-content-center">
                                <p className="album-name">At.Long.Last.A$AP</p>
                                <p className="artist-name">A$AP ROCKY</p>
                                <p className="album-year">2015</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img" src="https://media.pitchfork.com/photos/658d8c80f3c653a4dd7f73df/master/pass/Kendrick-Lamar-Mr-Morale-and-the-Big-Steppers.jpg" alt="Card image cap" />
                        <div className="card-body" style={{ backgroundColor: '#6E260E'}}>
                            <div className="card-content text-center justify-content-center">
                                <p className="album-name">Mr. Morale and the Big Steppers</p>
                                <p className="artist-name">Kendrick Lamar</p>
                                <p className="album-year">2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img" src="https://preview.redd.it/p6uyg1p585q51.png?width=1148&format=png&auto=webp&s=423f17c6f2b1a139820444ab2127691b9804d8fb" alt="Card image cap" />
                        <div className="card-body" style={{ backgroundColor: '#B35500'}}>
                            <div className="card-content text-center justify-content-center">
                                <p className="album-name">Savage Mode II</p>
                                <p className="artist-name">21 Savage</p>
                                <p className="album-year">2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img" src="https://media.pitchfork.com/photos/613f99e92e9a9fe248a5ee85/master/pass/100000x100000-999.jpeg" alt="Card image cap" />
                        <div className="card-body" style={{ backgroundColor: '#333'}}>
                            <div className="card-content text-center justify-content-center">
                                <p className="album-name">My Melodic Blue</p>
                                <p className="artist-name">Baby Keem</p>
                                <p className="album-year">2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img" src="https://cdns-images.dzcdn.net/images/cover/7df7ac6028591a5622f24cf32a555510/1900x1900-000000-80-0-0.jpg" alt="Card image cap" />
                        <div className="card-body" style={{ backgroundColor: '#808080'}}>
                        <div className="card-content text-center justify-content-center">
                                <p className="album-name">ASTROWORLD</p>
                                <p className="artist-name">Travis Scott</p>
                                <p className="album-year">2018</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-4">
                    <p style={{fontSize: '18px', fontWeight: 'bold'}}>Recently Played </p>
                </div>
                <div className="cards-container">
                    <div className="card">
                        <img className="card-img" src="https://preview.redd.it/yn81w7k64vh41.jpg?width=1080&crop=smart&auto=webp&s=86eb7af0663416adb8d62ad7024fd21907c85fda" alt="Card image cap" />
                        <div className="card-body" style={{ backgroundColor: '#880808'}}>
                            <div className="card-content text-center justify-content-center">
                                <p className="album-name">After Hours (Deluxe)</p>
                                <p className="artist-name">The Weeknd</p>
                                <p className="album-year">2020</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img" src="https://external-preview.redd.it/2Y93uibGEeWFmh4pvvRv4JxukgqefrPrStZah17xqeA.jpg?width=1080&crop=smart&auto=webp&s=454045bf3b571b510aab063b558913c8efa1b399" alt="Card image cap" />
                        <div className="card-body" style={{ backgroundColor: '#333'}}>
                            <div className="card-content text-center justify-content-center">
                                <p className="album-name">At.Long.Last.A$AP</p>
                                <p className="artist-name">A$AP ROCKY</p>
                                <p className="album-year">2015</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img" src="https://media.pitchfork.com/photos/658d8c80f3c653a4dd7f73df/master/pass/Kendrick-Lamar-Mr-Morale-and-the-Big-Steppers.jpg" alt="Card image cap" />
                        <div className="card-body" style={{ backgroundColor: '#6E260E'}}>
                            <div className="card-content text-center justify-content-center">
                                <p className="album-name">Mr. Morale and the Big Steppers</p>
                                <p className="artist-name">Kendrick Lamar</p>
                                <p className="album-year">2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img" src="https://preview.redd.it/p6uyg1p585q51.png?width=1148&format=png&auto=webp&s=423f17c6f2b1a139820444ab2127691b9804d8fb" alt="Card image cap" />
                        <div className="card-body" style={{ backgroundColor: '#B35500'}}>
                            <div className="card-content text-center justify-content-center">
                                <p className="album-name">Savage Mode II</p>
                                <p className="artist-name">21 Savage</p>
                                <p className="album-year">2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img" src="https://media.pitchfork.com/photos/613f99e92e9a9fe248a5ee85/master/pass/100000x100000-999.jpeg" alt="Card image cap" />
                        <div className="card-body" style={{ backgroundColor: '#333'}}>
                            <div className="card-content text-center justify-content-center">
                                <p className="album-name">My Melodic Blue</p>
                                <p className="artist-name">Baby Keem</p>
                                <p className="album-year">2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img" src="https://cdns-images.dzcdn.net/images/cover/7df7ac6028591a5622f24cf32a555510/1900x1900-000000-80-0-0.jpg" alt="Card image cap" />
                        <div className="card-body" style={{ backgroundColor: '#808080'}}>
                        <div className="card-content text-center justify-content-center">
                                <p className="album-name">ASTROWORLD</p>
                                <p className="artist-name">Travis Scott</p>
                                <p className="album-year">2018</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Home