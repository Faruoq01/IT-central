import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import profile from '../../assets/profile.png';
import drop from '../../assets/drop.png';
import lock from '../../assets/lock.png';
import user from '../../assets/user.png';
import switchs from '../../assets/switch.png';
import '../../styles/Home.scss';

const Header = (props) => {

    const [menus, setMenus] = useState(false);

    const profileMenu = () => {
        setMenus(!menus);
    }

    const logout = () => {
        props.history.push('/');
    }

    const profiles = () => {
        props.picture(true);
    }

    const picture = () => {
        props.profile(true);
    }

    const Menus = () => {
        return(
            <div className="menus">
                <div className="menu-item-container">
                    <div onClick={profiles} className="item">
                        <div style={icon}>
                            <img style={{width:'18px', height:'18px'}} src={lock} alt="password icon" />
                        </div>
                        <div style={itemText}>
                            Change password
                        </div>
                    </div>
                    <div onClick={picture} className="item">
                        <div style={icon}>
                            <img style={{width:'18px', height:'18px'}} src={user} alt="password icon" />
                        </div>
                        <div style={itemText}>
                            Change picture
                        </div>
                    </div>
                    <div onClick={logout} className="item">
                        <div style={icon}>
                            <img style={{width:'18px', height:'18px'}} src={switchs} alt="password icon" />
                        </div>
                        <div style={itemText}>
                            Log out
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="header">
                <div className="inner-container">
                    <div className="logo-container">
                        <img className="image" src={logo} alt="logo icon" />
                        <div style={text}>
                            <div className="hi">Hi!</div>
                            <div className="hi">Welcome to Klaus</div>
                        </div>
                    </div>
                    <div className="main-date-container">
                        <div className="date-container">
                            <div className="days">
                                <div className="day">31</div>
                                <img className="image-drop" src={drop} alt="logo icon" />
                            </div>
                            <div className="months">
                                <div className="mon">August</div>
                                <img className="image-drop" src={drop} alt="logo icon" />
                            </div>
                            <div className="year">
                                <div className="yea">2020</div>
                                <img className="image-drop" src={drop} alt="logo icon" />
                            </div>
                        </div>
                    </div>
                    <div onClick={profileMenu} className="user-picture">
                        <img className="image" src={profile} alt="profile icon" />
                    </div>
                    { menus && <Menus />}
                </div>
            </div>
    )
}

const text = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft:'10px',
}

const icon = {
    width:'20%', 
    height:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}

const itemText = {
    width:'80%', 
    height:'100%', 
    fontSize:'11px',
    display:'flex',
    alignItems:'center',
    textDecoration:'none'
}

export default Header;