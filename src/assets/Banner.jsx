import './Banner.css'

function Banner() {
    return (
        <>
        <div className="container my-8">
                <div id="carouselCabanas" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <center>
                                <img src="/public/casalago.png" className="carousel-img d-block rounded" alt="Casa no Lago" />
                            </center>
                        </div>
                        <div class="carousel-item">
                            <center>
                                <img src="/public/domossp.jpg" className="d-block w-40 rounded" alt="Vista da cabana" />
                            </center>
                        </div>
                        <div class="carousel-item">
                            <center>
                                <img src="/public/casamontanha.jpg" className="carousel-img d-block rounded" alt="Cabana Aconchegante" />
                            </center>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselCabanas" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Anterior</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselCabanas" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Próximo</span>
                    </button>
                </div>
            </div>    
        </>
    )
}
   

 export default Banner