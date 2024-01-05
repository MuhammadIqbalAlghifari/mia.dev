
import Link from "next/link"
export default function ManchesterUnited() {


    return (
      <body style={{backgroundColor: '#1c1c1c', fontFamily: 'Futura Md'}}>
  
      <section className="text-white body-font">
          <div className="container px-5 py-10 mx-auto flex flex-wrap">
            <div className="flex w-full mb-20 flex-wrap">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4 tersembunyi" id="card-2">Manchester <text style={{color: '#00da8e'}}>United</text> (Diffculity: Easy) </h1>
              <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-justify tersembunyi" id="card-2">This website is a Knockout Kings clone about my favourite football club from England, Manchester United. Added some changes in User Interface / UI And this website is already responsive on any other devices!</p>
            </div>
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <img alt="Manchester United" className="w-full object-cover h-full object-center block tersembunyi" id="card-4" src="/manchester united.png" />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img alt="Manchester United Shop" className="w-full h-full object-cover object-center block tersembunyi" id="card-4" src="/Manchester United Shop.jpg" />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <img alt="Manchester United Payment" className="w-full h-full object-cover object-center block tersembunyi" id="card-4" src="/Manchester United Payment.jpg" />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <img alt="Manchester United Night Mode" className="w-full h-full object-cover object-center block tersembunyi" id="card-4" src="/Manchester United Night Mode.jpg" />
                </div>
              </div>
            <div className="flex items-center justify-between container mx-auto my-10">
                <Link href='/'>
                <button className="flex mt-10 text-white tersembunyi group transition-all" id="card-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-6 duration-500 group-hover:-translate-x-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                  <p className="ml-2">Back To <text style={{color: '#00da8e'}}>Portfolio</text></p>
                </button>
                </Link>
            </div>
          </div>
          </div>
      </section>
  </body>
    )
}