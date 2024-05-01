import tnLogo from '../assets/TN_logo.png'
import tpgitLogo from '../assets/tpgit_logo.png'

export const Banner = () => {
  return (
    <>
        <div className='h-auto  flex justify-between bg-primary'>
            <div className='text-center lg:text-left mb-2 lg:mb-0'>
                <img src={tnLogo} alt="" className='w-20 ml-2' />
            </div>
            <div className='text-center' >
              <h1 className="font-bold lg:text-4xl text-lg text-white mb-1 tracking-widest " >Thanthai Periar Government Institute of Technology - Vellore 632513</h1>
              <p className='text-white text-md lg:text-2xl mb-2'>(Affiliated to Anna University - Chennai 600001)</p>
              <p className='font-bold text-white tracking-widest text-md'>HOSTEL BILL MANAGEMENT SYSTEM</p>
            </div>
            <div className='text-center lg:text-right'>
                <img src={tpgitLogo} alt="" className='w-24 '/>
            </div>
        </div>
    </>
  )
}

