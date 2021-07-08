import '../Homepage.css';

const Homepage = () =>{
    return (
        <div>
            <div className="hero image-fluid">
                <p className=" text-center text-white display-5 fw-bold hero-text display-5"> Become A Wealth Builder</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col text-white fw-bold mt-4 mb-4 text-center">
                        <h1 className="display-5">Build Wealth by finding stock companies that meet your Standards!</h1>
                    </div>
                </div>
                <div className="row mt-5 ">
                    <div className="col-4 card bg-white  py-5 fw-bold mr-5">
                        <div className="card-body ">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, hic architecto. Laborum cumque illum dolore, aperiam illo omnis eos nam aut nobis dicta similique facere hic fugit placeat explicabo totam. Inventore magni itaque quis at soluta, iste sequi aliquid dicta similique commodi illum dolore eos praesentium repellendus assumenda est fuga.         
                            </p>  
                        </div>
                    </div>
                    <div className="col">
                      <div className="business"></div>
                    </div>
                </div>
                <div className="row mt-5">
                <div className="col mr-4">
                        <div className="card-body">
                            <div className="computer-stocks"></div>
                        </div>
                    </div>
                    <div className=" col-4 card bg-white mr-5 text-center py-5 fw-bold">
                             <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, hic architecto. Laborum cumque illum dolore, aperiam illo omnis eos nam aut nobis dicta similique facere hic fugit placeat explicabo totam. Inventore magni itaque quis at soluta, iste sequi aliquid dicta similique commodi illum dolore eos praesentium repellendus assumenda est fuga.         
                            </p>  
                    </div>  
                </div>
            </div>
        </div> 
          
    )
}

export default Homepage;