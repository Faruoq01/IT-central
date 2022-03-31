import React, { useState } from 'react';
import '../styles/Home.scss';
import Header from '../components/Home/Header';
import MainContent from '../components/Home/MainContent';
import Management from '../components/Home/Management';
import cancel_ from '../assets/cancel_.png';
import _search from '../assets/_search.png';
import bar from '../assets/bar.png';

const Home = ({history}) => {
    const [management, setManagement] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [openBarCode, setOpenBarCode] = useState(false);
    const [profileModal, setProfileModal] = useState(false);
    const [pictureModal, setPictureModal] = useState(false);

    const closeModal = () => {
        setOpenSearch(false);
    }

    const barModal = () => {
        setOpenBarCode(false);
    }

    const profile = () => {
        setProfileModal(false);
    }

    const picture = () => {
        setPictureModal(false);
    }

    const SearchModal = () => {
        return(
            <div className="overlay">
                <div className="pop-up">
                    <div className="inner-pop">
                        <div className="close">
                            <div></div>
                            <div onClick={closeModal} className="main-close">
                                <img style={{width:'15px', height:'15px'}} src={cancel_} alt="not found" />
                            </div>
                        </div>
                        <div className="main-bod">
                            <div className="inputs-container">
                                <div className="input-texts">
                                    <input type="text" placeholder={'Enter Invoice Number'} />
                                </div>
                                <div className="input-texts2">
                                    <img style={{width:'16px', height:'16px', marginRight:'5px'}} src={_search} alt="search icon" />
                                    <div style={{fontSize:'15px', color:'#fff'}}>Search</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const BarCodeModal = () => {
        return(
            <div className="overlay">
                <div className="pop-up">
                    <div className="inner-pop">
                        <div className="close">
                            <div></div>
                            <div onClick={barModal} className="main-close">
                                <img style={{width:'15px', height:'15px'}} src={cancel_} alt="not found" />
                            </div>
                        </div>
                        <div className="main-bod">
                            <img style={{width:'150px', height:'150px'}} src={bar} alt="barcode" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const ProfileModal = () => {
        return(
            <div className="overlay">
                <div className="pop-up">
                    <div className="inner-pop">
                        <div className="close">
                            <div className="change-password">Change password</div>
                            <div onClick={profile} className="main-close">
                                <img style={{width:'15px', height:'15px'}} src={cancel_} alt="not found" />
                            </div>
                        </div>
                        <div className="main-bodx">
                            <div className="picture-cont">
                                <div className="pic-text">Picture</div>
                                <div className="input-pic-cont">
                                    <div className="first">
                                        <button className="botoons">Browse</button>
                                        <div className="snap">Snapchat20222022</div>
                                    </div>
                                    <div className="second">Update</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const PictureModal = () => {
        return(
            <div className="overlay">
                <div className="pop-up">
                    <div className="inner-pop">
                        <div className="close">
                            <div className="change-password">Change profile picture</div>
                            <div onClick={picture} className="main-close">
                                <img style={{width:'15px', height:'15px'}} src={cancel_} alt="not found" />
                            </div>
                        </div>
                        <div className="main-bods">
                            <div className="input-box">
                                <input type="text" placeholder={'Old password'} />
                            </div>
                            <div className="input-box">
                                <input type="text" placeholder={'New password'} />
                            </div>
                            <div className="input-box">
                                <input type="text" placeholder={'Confirm new password'} />
                            </div>
                            <button className="picture-button">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="home">
            {openSearch && <SearchModal />}
            {openBarCode && <BarCodeModal />}
            {profileModal && <ProfileModal />}
            {pictureModal && <PictureModal />}
            <Header 
                history={history}
                profile={setProfileModal}
                picture={setPictureModal}
            />
            {management || 
                <MainContent 
                    switchScreen={setManagement} 
                    search={setOpenSearch} 
                    barcode={setOpenBarCode} 
                />
            }
            {management && 
                <Management switchScreen={setManagement} />
            }
        </div>
    )
}

export default Home;