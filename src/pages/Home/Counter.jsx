import CountUp from 'react-countup';



const Counter = () => {
    return (
        <div className='mt-18'>
            <h1 className='text-center font-bold text-3xl p-6'>We Provide World Best Future-Ready Learning</h1>
            <p className='text-center text-lg'>Upgrade your skills, unlock your potential </p>
            <div className='grid grid-cols-2 lg:grid-cols-4 py-8 gap-12'>
        
                <div className="bg-white p-10 rounded-2xl">
                     {/* <img src={review} alt="" /> */}
                     <h1 className='text-4xl text-gray-500 font-bold py-4'>
                       <CountUp start={0} end={99} enableScrollSpy={true} scrollSpyDelay={500}>
                        {({ countUpRef }) => (
                            <div>
                            <span ref={countUpRef} />
                            K+</div>
                        )}
                        </CountUp>
                        </h1>
                    <p className='text-[#527695] text-lg'>Total Student</p>
                </div>
                        <div className="bg-white p-10 rounded-2xl">
                    {/* <img src={total} alt="" /> */}
                    <h1 className='text-4xl text-gray-500 font-bold py-4'>
                       <CountUp start={0} end={24} enableScrollSpy={true} scrollSpyDelay={500}>
                        {({ countUpRef }) => (
                            <div>
                            <span ref={countUpRef} />
                            K+</div>
                        )}
                        </CountUp>
                        </h1>
                   
                      <p className='text-[#527695] text-lg'>Active Student</p>
                </div>
                <div className="bg-white p-10 rounded-2xl">
                     {/* <img src={caseFace} alt="" /> */}
                     <h1 className='text-4xl text-gray-500 font-bold py-4'>
                       <CountUp start={0} end={92} enableScrollSpy={true} scrollSpyDelay={500}>
                        {({ countUpRef }) => (
                            <div>
                            <span ref={countUpRef} />
                            K+</div>
                        )}
                        </CountUp>
                        </h1>
                   <p className='text-[#527695] text-lg'>Positive Review</p>
                </div>
                <div className="bg-white p-10 rounded-2xl">
                   {/* <img src={stuff} alt="" /> */}
                   <h1 className='text-4xl text-gray-500 font-bold py-4'>
                       <CountUp start={0} end={15} enableScrollSpy={true} scrollSpyDelay={500}>
                        {({ countUpRef }) => (
                            <div>
                            <span ref={countUpRef} />
                            K+</div>
                        )}
                        </CountUp>
                        </h1>
                   <p className='text-[#527695] text-lg'>Found Jobs</p>
                </div>
            </div>
        </div>
    );
};

export default Counter;