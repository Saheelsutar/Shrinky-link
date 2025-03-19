'use client';
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { Link as LinkIcon, Zap, Rocket, ExternalLink } from "lucide-react";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div className="bg-mycolor min-h-screen w-full flex flex-col items-center justify-center px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:justify-around w-full mx-auto ">
          <div className="text-center lg:text-left lg:w-1/2 p-6">
            <div className="inline-block mb-3 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full">
              <span className="text-sm font-medium text-white">Simplify your links, amplify your reach</span>
            </div>

            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-white mb-6">
              Shorten. Share. <br />
              <span className="text-white">Track.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 font-light leading-relaxed">
              Your links, smarter and faster. Create memorable, trackable short URLs in seconds.
            </p>

            <div className="space-y-4 md:space-y-6 ">
              <div className="flex flex-col items-center justify-center space-y-3 md:space-y-4">
                <FeatureItem icon={<LinkIcon size={18} />} text="Shorten long URLs in seconds" />
                <FeatureItem icon={<Zap size={18} />} text="Fast, reliable, and easy to use" />
                <FeatureItem icon={<Rocket size={18} />} text="Start shortening now!" />
                <FeatureItem icon={<ExternalLink size={18} />} text="Get a custom short URL instantly" />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <Image src="/img_1.png" width={100} height={100} unoptimized className="w-72 sm:w-96 lg:w-[450px] max-w-full" alt="" />
          </div>
        </div>

        <div className="flex justify-center items-center mt-6">
          <div className="w-fit [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),#b8860b80_80%,_#daa520_86%,_#ffd700_90%,_#daa520_94%,_#b8860b80)_border-box] rounded-2xl border-2 border-transparent animate-border mb-10">
            <button 
              type="button" 
              onClick={() => router.push('/shorten')} 
              className="text-white bg-slate-800 font-medium rounded-xl text-sm px-2 py-2.5 text-center inline-flex items-center"
            >
              <Image width={50} height={80} unoptimized className="h-7 px-2" src="/img_logo.png" alt="" />
              Get Your Short URL
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

const FeatureItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <div className="flex items-center w-full space-x-3 text-white/90">
    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
      {icon}
    </div>
    <span className="font-medium max-md:text-left">{text}</span>
  </div>
  
);
