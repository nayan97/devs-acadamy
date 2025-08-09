import CountUp from 'react-countup';



const Counter = () => {
    return (
        <div className='mt-18'>
            <h1 className='text-center font-bold text-3xl p-6'>We Provide World Best Apps Store</h1>
            <p className='text-center text-lg'>Our platform connects you with verified, experienced tatents across various specialities — all at your convenience. </p>
            <div className='grid grid-cols-2 lg:grid-cols-4 py-8 gap-12'>
        
                <div className="bg-[#f3f3f3] p-10 rounded-2xl">
                     {/* <img src={review} alt="" /> */}
                     <h1 className='text-4xl font-bold py-4'>
                       <CountUp start={0} end={400} enableScrollSpy={true} scrollSpyDelay={500}>
                        {({ countUpRef }) => (
                            <div>
                            <span ref={countUpRef} />
                            M+</div>
                        )}
                        </CountUp>
                        </h1>
                    <p className='text-[#527695] text-lg'>All Download</p>
                </div>
                        <div className="bg-[#f3f3f3] p-10 rounded-2xl">
                    {/* <img src={total} alt="" /> */}
                    <h1 className='text-4xl font-bold py-4'>
                       <CountUp start={0} end={330} enableScrollSpy={true} scrollSpyDelay={500}>
                        {({ countUpRef }) => (
                            <div>
                            <span ref={countUpRef} />
                            M+</div>
                        )}
                        </CountUp>
                        </h1>
                    <p className='text-[#527695] text-lg'>Positive Review</p>
                </div>
                <div className="bg-[#f3f3f3] p-10 rounded-2xl">
                     {/* <img src={caseFace} alt="" /> */}
                     <h1 className='text-4xl font-bold py-4'>
                       <CountUp start={0} end={349} enableScrollSpy={true} scrollSpyDelay={500}>
                        {({ countUpRef }) => (
                            <div>
                            <span ref={countUpRef} />
                            M+</div>
                        )}
                        </CountUp>
                        </h1>
                    <p className='text-[#527695] text-lg'>Active Users</p>
                </div>
                <div className="bg-[#f3f3f3] p-10 rounded-2xl">
                   {/* <img src={stuff} alt="" /> */}
                   <h1 className='text-4xl font-bold py-4'>
                       <CountUp start={0} end={28} enableScrollSpy={true} scrollSpyDelay={500}>
                        {({ countUpRef }) => (
                            <div>
                            <span ref={countUpRef} />
                            K+</div>
                        )}
                        </CountUp>
                        </h1>
                   <p className='text-[#527695] text-lg'>Apps Developer</p>
                </div>
            </div>
        </div>
    );
};

export default Counter;