import React from 'react';
import '../../styles/Management.scss';
import close from '../../assets/close.png';
import menu from '../../assets/menu.png';
import nav from '../../assets/nav.png';
import watch from '../../assets/watch.png';
import card from '../../assets/card.png';
import naira from '../../assets/naira.png';
import form from '../../assets/form.png';

const Management = (props) => {

    const goToHome = () => {
        props.switchScreen(current => !current);
    }

    const data = [
        {
            date: '1/1/2022',
            order: '#012345678',
            checked: 'QR-code',
            total: '₦120,000',
            eatIns: 'Eat-ins',
            paymentType: 'Eat-ins'
        },
        {
            date: '1/1/2022',
            order: '#012345678',
            checked: 'QR-code',
            total: '₦120,000',
            eatIns: 'Eat-ins',
            paymentType: 'Eat-ins'
        },
        {
            date: '1/1/2022',
            order: '#012345678',
            checked: 'QR-code',
            total: '₦120,000',
            eatIns: 'Eat-ins',
            paymentType: 'Eat-ins'
        },
        {
            date: '1/1/2022',
            order: '#012345678',
            checked: 'QR-code',
            total: '₦120,000',
            eatIns: 'Eat-ins',
            paymentType: 'Eat-ins'
        },
        {
            date: '1/1/2022',
            order: '#012345678',
            checked: 'QR-code',
            total: '₦120,000',
            eatIns: 'Eat-ins',
            paymentType: 'Eat-ins',
        },
        {
            date: '1/1/2022',
            order: '#012345678',
            checked: 'QR-code',
            total: '₦120,000',
            eatIns: 'Eat-ins',
            paymentType: 'Eat-ins'
        },
        {
            date: '1/1/2022',
            order: '#012345678',
            checked: 'QR-code',
            total: '₦120,000',
            eatIns: 'Eat-ins',
            paymentType: 'Eat-ins'
        },
        {
            date: '1/1/2022',
            order: '#012345678',
            checked: 'QR-code',
            total: '₦120,000',
            eatIns: 'Eat-ins',
            paymentType: 'Eat-ins'
        },
        {
            date: '1/1/2022',
            order: '#012345678',
            checked: 'QR-code',
            total: '₦120,000',
            eatIns: 'Eat-ins',
            paymentType: 'Eat-ins'
        }
    ]

    return(
        <div className="main-body">
            <div className="page-title2">
                <div className="management">
                    <div className="title">History</div>
                    <div className="history">
                        <img style={{width:'13px', height:'13px'}} src={close} alt="close icon" />
                        <div onClick={goToHome} className="close">Close</div>
                    </div>
                </div>
            </div>
            <div className="body-container">
                <div className="history-table">
                    <div className="table-header">
                        <div>Date</div>
                        <div>Order no</div>
                        <div>Checked by</div>
                        <div>Total</div>
                        <div>Order Type</div>
                        <div>Payment type</div>
                        <div></div>
                    </div>
                    <div className="row-container">
                    {
                        data.map((row, index) => {
                            return(
                                <div key={index} className="rows">
                                    <div>{row.date}</div>
                                    <div>{row.order}</div>
                                    <div>{row.checked}</div>
                                    <div>{row.total}</div>
                                    <div>{row.eatIns}</div>
                                    <div>{row.paymentType}</div>
                                    <div>
                                        <img style={{width:'3px', height:'13px'}} src={menu} alt="menu icon" />
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
                <div className="right-panel">
                    <div className="tabs">
                        <div className="main-tab">
                            <div className="text">Payment Summary</div>
                            <div style={{marginTop:'20px'}} className="first">
                                <div className="watcher">
                                    <img style={{width:'32px', height:'32px'}} src={watch} alt="watch icon" />
                                </div>
                                <div className="indicator">
                                    <div className="pending">Pending Payments</div>
                                    <div className="number">03</div>
                                </div>
                            </div>
                            <div style={{width:'220px'}} className="first">
                                <div className="watcher">
                                    <img style={{width:'32px', height:'32px'}} src={card} alt="watch icon" />
                                </div>
                                <div className="indicator">
                                    <div className="pending">Card Payments</div>
                                    <div className="number">05</div>
                                </div>
                            </div>
                            <div style={{width:'250px'}} className="first">
                                <div className="watcher">
                                    <img style={{width:'32px', height:'32px'}} src={naira} alt="watch icon" />
                                </div>
                                <div className="indicator">
                                    <div className="pending">Cash Payments</div>
                                    <div className="number">08</div>
                                </div>
                            </div>
                            <div style={{width:'280px'}} className="first">
                                <div className="watcher">
                                    <img style={{width:'32px', height:'32px'}} src={form} alt="watch icon" />
                                </div>
                                <div className="indicator">
                                    <div className="pending">Validated payments</div>
                                    <div className="number">13</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="footer-container">
                    <img style={{height:'20px'}} src={nav} alt="pagination" />
                </div>
            </div>
        </div>
    )
}

export default Management;