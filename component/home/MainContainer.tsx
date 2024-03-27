import { buttonVariants } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const MainContainer = () => {
  return (
    <div className="container -mt-20 pt-[188px] md:pt-[300px] pb-[215px] sm:pb-[290px] px-[22px] sm:px-0 mx-auto text-center">
      
      <div className='mx-auto mb-4 -mt-20 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
      <p className='text-sm font-semibold text-gray-700'>
        
        Talk with PDF
      </p>
      </div>

      <a
        // href="https://dub.sh/together-ai"
        target="_blank"
        rel="noreferrer"
        className="border rounded-2xl py-1 px-4 text-slate-600 transition duration-300 ease-in-out sm:text-base text-sm cursor-pointer hover:text-slate-700"
      >
        Powered by <span className="font-bold">Together.ai </span>and{' '}
        <span className="font-bold">Mixtral</span>
      </a>
      <h2 className="text-center max-w-[867px] pb-5 sm:pb-7 text-[52px] sm:text-[100px] leading-[39.5px] tracking-[-1.04px] sm:leading-[75px] sm:tracking-[-2.74px] mx-auto sm:mt-12 mt-10">
        Chat with your PDFs in seconds
      </h2>
      <p className="text-xl sm:text-2xl pb-10 sm:pb-8 leading-[19px] sm:leading-[34.5px] w-[232px] sm:w-full tracking-[-0.4px] sm:tracking-[-0.6px] text-center mx-auto">
        Have a conversation with your papers, textbooks, and contracts for free
      </p>
      <Link className={buttonVariants()} href={'/dashboard'} target='blank'>
        Get Started <ArrowRight className='ml-2 h-5 w-5'/>
      </Link>
    </div>
  );
};

export default MainContainer;