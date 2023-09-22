import Image from "next/image";


export default function Thanks(){
    let TitleA = "Thank you! Have a great day!"

    return(
        <main className="main">
        <div className="main-text-holder"> 
          <div onClick={() => window.location.href="/"} className="main-logo">
            <Image src={'/ATOMIC_logo.svg'} alt="THE ATOMIC" height={100} width={200} />
          </div>
          {/* <div className="main-sub-text">
            <p className="c-f">
              {SubText}
            </p>
          </div> */}
        </div>
      
        {/* Boolean */}
          <div className="form-A-wrapper">
            <form className="form-A">
              <div className="form-A-title">
                <p className="inter">
                  {TitleA}
                </p>
              </div>
            </form>
         </div>
        </main>
    )
}