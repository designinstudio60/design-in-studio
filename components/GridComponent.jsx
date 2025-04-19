export default function GridCOmponent() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-black py-12">
        {/* Glass Effect Container */}
        <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 shadow-2xl border border-white/20 w-91.75 h-82">
          
          {/* Color Picker Fake Box */}
          <div className="relativew-79.75 h-58.25  rounded-[10px] bg-gradient-to-b from-blue-400 to-blue-900  shadow-xl -4  overflow-hidden">
            {/* Circle */}
            <div className="absolute top-6 left-6 w-6 h-6 rounded-full border-4 border-white"></div>
  
            {/* Rainbow Slider */}
            <div className="absolute bottom-4 left-4 right-4 h-4 bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-blue-500 via-indigo-500 via-pink-500 to-red-500 rounded-full">
              {/* Slider Thumb */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-1 w-5 h-5 bg-white rounded-full shadow"></div>
            </div>
          </div>
  
          {/* Bottom Circles */}
       
        </div>
        <div className="flex gap-6 mt-8 justify-center ">
            <div className="w-10 h-10 rounded-full bg-blue-600"></div>
            <div className="w-10 h-10 rounded-full bg-purple-500"></div>
            <div className="w-10 h-10 rounded-full border-2 border-gray-500 flex items-center justify-center text-white text-xl">?</div>
            <div className="w-10 h-10 rounded-full border-2 border-gray-500 flex items-center justify-center text-white text-xl">?</div>
            <div className="w-10 h-10 rounded-full border-2 border-gray-500 flex items-center justify-center text-white text-xl">?</div>
          </div>
      </section>
    );
  }
  