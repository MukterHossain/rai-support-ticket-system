

const test = () => {
//     const [isOpen, setIsOpen] = useState(false)
// const [isAccordingOpen, setIsAccordingOpen] = useState(null);

//   const open =() =>{
//     setIsOpen(!isOpen)
//   }
    // const newData = [
    //     {
    //       name: "Ayaan Khan",
    //       className: "Intermediate 1st year",
    //       image: "https://i.ibb.co.com/3c9JHs0/team-1.webp",
    //       bio: "A blockchain enthusiast passionate about decentralized applications and smart contracts.",
    //     },
    //     {
    //       name: "Sophia Rahman",
    //       className: "Intermediate 1st year",
    //       image: "https://i.ibb.co.com/1XKpsRj/team-2.webp",
    //       bio: "A blockchain enthusiast passionate about decentralized applications and smart contracts.",
    //     },
    //     {
    //       name: "Ethan Walker",
    //       className: "Intermediate 1st year",
    //       image: "https://i.ibb.co.com/5WzjYLr/team-2.png",
    //       bio: "A blockchain enthusiast passionate about decentralized applications and smart contracts.",
    //     },
    //     {
    //       name: "Hana Kim",
    //       className: "Intermediate 2nd year",
    //       image: "https://i.ibb.co.com/G7VMBxc/ManRead.png",
    //       bio: "A blockchain enthusiast passionate about decentralized applications and smart contracts.",
    //     },
    //     {
    //       name: "Liam Chen",
    //       className: "Intermediate 1st year",
    //       image: "https://i.ibb.co.com/3c9JHs0/team-1.webp",
    //       bio: "A blockchain enthusiast passionate about decentralized applications and smart contracts.",
    //     },
    //     {
    //       name: "Aisha Patel",
    //       className: "Intermediate 2nd year",
    //       image: "https://i.ibb.co.com/3c9JHs0/team-1.webp",
    //       bio: "A blockchain enthusiast passionate about decentralized applications and smart contracts.",
    //     },
    //     {
    //       name: "Noah Smith",
    //       className: "Intermediate 2nd year",
    //       image: "https://i.ibb.co.com/5WzjYLr/team-2.png",
    //       bio: "A blockchain enthusiast passionate about decentralized applications and smart contracts.",
    //     },
    //     {
    //       name: "Emma Johnson",
    //       className: "Intermediate 1st year",
    //       image: "https://i.ibb.co.com/5WzjYLr/team-2.png",
    //       bio: "A blockchain enthusiast passionate about decentralized applications and smart contracts.",
    //     },
    //   ];
    return (
        <div className="bg-white">
      <div className="px-3 max-w-7xl mx-auto mt-12 md:mt-20 pb-16 p-3">
        <div className="pb-12 md:pb-20">
        {/* <div className="bg-[#FFFFFF] flex w-full flex-row gap-x-2 py-3 xl:py-4 items-center relative overflow-visible pl-[42px] pr-[14px] xl:rounded-none outline-none rounded-lg xl:border-none focus-within:border-violet-400 xl:focus-within:border-none  focus-within:ring-4 xl:focus-within:ring-0 focus-within:ring-violet-100  ">
                Hellow
                <span className="w-full flex justify-between items-center">
                  <input
                    type="text"
                    className="w-full outline-none text-xl"
                    placeholder="Job title or skill"
                  />
                  <button className="btn btn-primary" onClick={open}><GrDown className={`${isOpen === true && 'rotate-180'}`}></GrDown></button>
                </span>
                {isOpen && (<p className="absolute top-12 right-4">Good jobs</p>)}
              </div> */}
          <h2 className="text-4xl sm:text-5xl md:text-[62px] text-center font-bold">
            What do we <span className="text-[#5271ff] ">offer</span>?
          </h2>
          <p className="text-[23px] md:w-3xl mx-auto text-center text-[#5F5981] pt-3">
            Quickly Build, Customize, and Launch Your Own Learning Platform—No
            Coding, No Hassle.
          </p>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-3 justify-between gap-12 ">
          {/* card 1 */}
          <div className="md:col-span-2">
            <div className=" md:h-[400px] h-[220px] w-[350px] sm:w-[450px] mx-auto md:w-full">
              <img
                className=" rounded-4xl   h-full w-full object-cover"
                src="https://i.ibb.co.com/S4VQGVzV/campus9.png"
                alt="pic"
              />
            </div>
            <div className="mt-2">
              <h2 className="text-[30px] md:text-[37px] font-bold">
              Something very <span className="text-[#219C90] ">Awesome</span>
              </h2>
              <p className="text-[18px] md:text-[23px] text-[#8f8c8c] pt-3">
                Quickly Build, Customize, and Launch Your Own Learning
                Platform—No <br className="hidden md:block" /> Coding, No Hassle.
              </p>
            </div>
          </div>
          {/* card 2 */}
          <div className="md:col-span-1">
            <div className=" md:h-[400px] h-[220px] sm:w-[450px] w-[350px]   mx-auto md:w-full">
              <img
                className=" rounded-4xl h-full w-full object-cover "
                src="https://i.ibb.co.com/GQGS19g1/student6.png"
                alt="pic"
              />
            </div>
            <div className="mt-2">
              <h2 className="text-[30px] md:text-[37px] font-bold">
                This is another
              </h2>
              <p className="text-[18px] md:text-[23px] text-[#8f8c8c] pt-3">
                Quickly Build, Customize, and Launch Your Own Learning
                Platform—No Coding, No Hassle.
              </p>
            </div>
          </div>
          {/* card 3 */}
          <div className="md:col-span-1 ">
            <div className="md:h-[180px] h-[220px] sm:w-[450px] w-[350px]  mx-auto md:w-full">
              <img
                className=" rounded-4xl h-full w-full object-cover"
                src="https://i.ibb.co.com/GQGS19g1/student6.png"
                alt="pic"
              />
            </div>
            <div className="mt-2">
              <h2 className="text-[30px] md:text-[37px] font-bold">
                This is another
              </h2>
              <p className="text-[18px] md:text-[23px] text-[#8f8c8c] pt-3">
                Quickly Build, Customize, and Launch Your Own Learning
                Platform—No Coding, No Hassle.
              </p>
            </div>
          </div>
          {/* card 4 */}
          <div className="md:col-span-1">
            <div className="md:h-[180px] h-[220px] sm:w-[450px] w-[350px]   mx-auto md:w-full">
              <img
                className=" rounded-4xl h-full w-full object-cover "
                src="https://i.ibb.co.com/GQGS19g1/student6.png"
                alt="pic"
              />
            </div>
            <div className="mt-2">
              <h2 className="text-[30px] md:text-[37px] font-bold">
                This is another
              </h2>
              <p className="text-[18px] md:text-[23px] text-[#8f8c8c] pt-3">
                Quickly Build, Customize, and Launch Your Own Learning
                Platform—No Coding, No Hassle.
              </p>
            </div>
          </div>
          {/* card 5 */}
          <div className="md:col-span-1">
            <div className="md:h-[180px] h-[220px] sm:w-[450px] w-[350px]   mx-auto md:w-full">
              <img
                className=" rounded-4xl h-full w-full object-cover "
                src="https://i.ibb.co.com/GQGS19g1/student6.png"
                alt="pic"
              />
            </div>
            <div className="mt-2">
              <h2 className="text-[30px] md:text-[37px] font-bold">
                This is another
              </h2>
              <p className="text-[18px] md:text-[23px] text-[#8f8c8c] pt-3">
                Quickly Build, Customize, and Launch Your Own Learning
                Platform—No Coding, No Hassle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default test;