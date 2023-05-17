function card({name,decription}){
    return(
        <div className='card bg-[#ffffff1a] w-64 h-96 m-16 shadow-[16px_16px_40px_rgba(0,0,0,0.5)] rounded-xl	overflow-hidden	flex justify-center	items-center border-l	border-t border-solid border-[#ffffff80]'>
          <div className='content p-5 text-center	delay-[50ms] translate-y-[100px] opacity-0'>
            <h2 className="absolute top-[-80px] right-7 text-9xl text-[#ffffff0d] pointer-events-none	">01</h2>
            <h3 className="text-3xl text-[#fff] z-[1]">{name}</h3>
            <p className="text-base text-[#fff] font-light	">{decription}
            </p>
            <a href='#' className="px-5 py-2 mt-4 bg-white text-black rounded-2xl font-medium	hover:bg-white hover:text-black">Read more</a>
          </div>
        </div>
    );
}
export default card;