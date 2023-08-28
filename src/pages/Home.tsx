import React from 'react';
import styled from 'styled-components';

const Home:React.FC = () => {
    const height = document.querySelector('header')?.clientHeight;
    const mainHeight = `100vh - ${height}px`;
    
    // style
    const Visual = styled.section`
        width: 100%;
        height: calc(${mainHeight});
        background-color: #000;
        position: relative;
        overflow: hidden;

        &::before{content:"";
            position: absolute; left: 50%; bottom: 0;
            width: 80%; height: 100%;
            border-radius: 100%;
            transform: translate(-50%, 50%);
            box-shadow: 0px -10px 70px rgba(255, 255, 255, 0.9);
        }
        
        &::after{content:'';
            position: absolute; left: 0; bottom: 0; z-index: 1;
            width: 100%; height: 100%;
            border-radius: 50%;
            background-color: #000003;
            transform: translate(0, 50%);
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
        }
    `;

    const Profile = styled.article`
        display: flex; padding: 0 0 50px;
        flex-direction: column; justify-content: space-between; align-items: center;
        position: absolute; left: 50%; bottom: 0%; z-index: 10;
        
        transform: translate(-50%, -50%);
    `;

    return (
        <main>
            <h1 className="hidden">메인 페이지</h1>
            <Visual>
                <Profile>
                    <div className="txt-box">
                        <h3 className='uppercase text-white font-bold text-5xl mb-4'>frontend developer</h3>
                        <strong className='text-slate-300 font-medium text-3xl'>Kim Hyeon Soo</strong>
                    </div>
                </Profile>
            </Visual>
        </main>
    )
};

export default Home;