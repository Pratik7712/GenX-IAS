import { motion } from "framer-motion";

const AppSection = () => {
  return (
    <section className="section relative py-12 bg-gray-50" id="app">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-x-6 gap-y-8 items-center">
          {/* Text Content */}
          <div className="flex-1 max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Get Started With <span className="text-[#ED344C]">GENX IAS</span> Today!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-gray-600 mb-6"
            >
              Access comprehensive study materials, online tests, and schedules for UPSC, GPSC, and other exams. 
              Download our user-friendly app on Android, or visit our website to start your journey to civil services success!
            </motion.p>
            
            {/* Google Play Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex"
            >
              <a 
                href="https://play.google.com/store/apps/details?id=co.diy18.pimgg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group inline-flex transform transition-all duration-300 hover:scale-105"
              >
                <div className="bg-black hover:bg-[#1E2A36] transition-all duration-300 text-white group-hover:text-[#ED344C] px-8 py-4 rounded-xl flex items-center gap-4">
                  <svg width="32" height="32" viewBox="0 0 512 512" className="fill-current">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                  </svg>
                  <div className="font-sans">
                    <div className="text-sm tracking-wide opacity-90 font-medium">GET IT ON</div>
                    <div className="text-lg font-semibold tracking-wide">Google Play</div>
                  </div>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex-1 flex justify-center relative"
          >
            <div className="flex space-x-[-60px] scale-75 origin-center">
              {/* Phone 1 - Online Tests */}
              <div className="relative w-[240px] transform -rotate-12">
                <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden">
                  {/* Header */}
                  <div className="bg-[#00A3E0] text-white p-3">
                    <div className="flex items-center gap-2">
                      <span>←</span>
                      <span className="text-base">Learning Light</span>
                    </div>
                  </div>
                  {/* Tabs */}
                  <div className="flex gap-3 p-3 border-b text-xs">
                    <span className="text-gray-500">MENTS</span>
                    <span className="text-gray-500">ANNOUNCEMENTS</span>
                    <span className="text-[#00A3E0] border-b-2 border-[#00A3E0]">TESTS</span>
                    <span className="text-gray-500">VIDEOS</span>
                  </div>
                  {/* Content */}
                  <div className="p-3">
                    <div className="text-xs text-gray-500 mb-3">ONGOING (3)</div>
                    {/* Test Cards */}
                    {[
                      {
                        title: "Reshuffling test",
                        author: "by Anurag",
                        time: "Starts at Jul 05, 05:45 PM",
                        type: "Class Test"
                      },
                      {
                        title: "Newton's Second law(contd)",
                        author: "by Anurag",
                        time: "Ends at Jul 06, 10:45 AM",
                        type: "Online Test"
                      },
                      {
                        title: "Conservation of momentum",
                        author: "by Anurag",
                        time: "Ends at Jun 10, 06:00 PM",
                        type: "Online Test"
                      }
                    ].map((test, i) => (
                      <div key={i} className="bg-gray-50 rounded-lg p-3 mb-3">
                        <div className="flex justify-between items-start">
                          <div className="text-sm font-medium">{test.title}</div>
                          <span className="text-[10px] bg-gray-200 rounded-full px-2 py-0.5">{test.type}</span>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{test.author}</div>
                        <div className="text-xs text-gray-500">{test.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Phone 2 - Announcements */}
              <div className="relative w-[240px] z-20">
                <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden">
                  {/* Header */}
                  <div className="bg-[#00A3E0] text-white p-3">
                    <div className="flex items-center gap-2">
                      <span>←</span>
                      <div>
                        <div className="text-base">Physics Batch 12</div>
                        <div className="text-xs opacity-80">Owner</div>
                      </div>
                      <span className="ml-auto">⚙️</span>
                    </div>
                  </div>
                  {/* Tabs */}
                  <div className="flex gap-3 p-3 border-b text-xs">
                    <span className="text-gray-500">ASSIGNMENTS</span>
                    <span className="text-[#00A3E0] border-b-2 border-[#00A3E0]">ANNOUNCEMENTS</span>
                    <span className="text-gray-500">TESTS</span>
                  </div>
                  {/* Content */}
                  <div className="p-3">
                    <div className="text-center p-6">
                      <div className="w-12 h-12 bg-gray-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                        📢
                      </div>
                      <p className="text-xs text-gray-500">These are messages you want to send to the entire batch at once</p>
                      <button className="mt-3 bg-[#00A3E0] text-white px-4 py-1.5 rounded-full text-xs">
                        Make an announcement
                      </button>
                    </div>
                    <div className="mt-3">
                      <div className="text-[10px] text-gray-500">06 JUN 2019</div>
                      <div className="bg-gray-50 rounded-lg p-3 mt-1">
                        <p className="text-xs italic">Hey class! Bring your practical record book tomorrow and get it checked by me. If anyon...</p>
                        <div className="text-[10px] text-gray-500 mt-1">by Anurag at 09:42 AM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Phone 3 - Time-Table */}
              <div className="relative w-[240px] transform rotate-12">
                <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden">
                  {/* Header */}
                  <div className="bg-[#00A3E0] text-white p-3">
                    <div className="flex items-center gap-2">
                      <span>≡</span>
                      <span className="text-base">Learning Light</span>
                      <span className="ml-auto">🔍</span>
                    </div>
                  </div>
                  {/* Calendar */}
                  <div className="p-3">
                    <div className="flex justify-between text-xs mb-3">
                      {['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'].map((day, i) => (
                        <div key={i} className="text-center">
                          <div className="text-gray-500">{day}</div>
                          <div className={`mt-1 w-6 h-6 flex items-center justify-center rounded-full text-xs
                            ${i === 2 ? 'bg-green-500 text-white' : ''}
                            ${i === 3 ? 'bg-[#00A3E0] text-white' : ''}
                          `}>
                            {[4, 5, 6, 7, 8, 9, 10][i]}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 text-center mb-3">Friday, 07 June 2019</div>
                    {/* Schedule */}
                    {[
                      {
                        title: "Physics Batch 12",
                        subtitle: "IIT JEE • Physics",
                        time: "01:00 PM"
                      },
                      {
                        title: "JEE Prep",
                        subtitle: "IIT JEE • Physics",
                        time: "02:00 PM"
                      },
                      {
                        title: "Remedial Class",
                        time: "05:25 PM"
                      }
                    ].map((class_, i) => (
                      <div key={i} className="bg-gray-50 rounded-lg p-3 mb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="text-sm font-medium">{class_.title}</div>
                            {class_.subtitle && (
                              <div className="text-xs text-gray-500">{class_.subtitle}</div>
                            )}
                            {class_.subtitle && (
                              <span className="inline-block mt-1 text-[10px] bg-yellow-100 text-yellow-800 rounded-full px-2 py-0.5">Batch</span>
                            )}
                          </div>
                          <div className="text-xs text-gray-500">{class_.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppSection; 