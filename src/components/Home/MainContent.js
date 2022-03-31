import React, {useState} from 'react';
import '../../styles/Home.scss';
import history from '../../assets/history.png';
import barcode from '../../assets/barcode.png';
import search from '../../assets/search.png';
import exCircle from '../../assets/ex-circle.png';
import drop from '../../assets/drop.png';

const MainContent = (props) => {

    const [invoice, setInvoice] = useState(false);

    const goToManagement = () => {
        props.switchScreen(current => !current);
    }

    const openSearchModal = () => {
        props.search(true);
    }

    const openBarCode = () => {
        props.barcode(true);
    }

    const viewInvoice = () => {
        setInvoice(!invoice);
    }
    
    return(
        <div className="main-body">
            <div className="page-title">
                <div className="title">Validate orders</div>
                <div onClick={goToManagement} className="history">
                    <img style={{width:'14px', height:'14px'}} src={history} alt="history icon" />
                    <div style={text}>History</div>
                </div>
            </div>
            <div className="content">
                <div className="icons">
                    <div className="icons-inner">
                        <div onClick={openBarCode} className="item-div">
                            <div className="icono">
                                <img style={{width:'50px', height:'50px'}} src={barcode} alt="barcode icon" />
                            </div>
                            <div style={label}>Scan QR Code</div>
                        </div>
                        <div onClick={openSearchModal} className="item-div">
                            <div className="icono">
                                <img style={{width:'50px', height:'50px'}} src={search} alt="barcode icon" />
                            </div>
                            <div style={label}>Search invoice Number</div>
                        </div>
                    </div>
                </div>
                <div className="list">
                    {!invoice?
                        <div onClick={viewInvoice} className="list-empty">
                            <div className="empty-text">
                                Scan or search invoice number to view an invoice
                            </div>
                        </div>:
                        <div onClick={viewInvoice} className="invoice">
                            <div className="header">
                                <div className="texts">Order No. 012345678</div>
                                <div className="texts">Table 4</div>
                            </div>
                            <div className="items-list">
                                <div className="taken">
                                    <div className="taken-content">
                                        <div>Champagne</div>
                                        <div>x24</div>
                                        <div>
                                            <img style={{width:'16px', height:'16px'}} src={exCircle} alt="close icon" />
                                        </div>
                                    </div>
                                </div>
                                <div className="taken">
                                    <div className="taken-content">
                                        <div>Champagne</div>
                                        <div>x24</div>
                                        <div>
                                            <img style={{width:'16px', height:'16px'}} src={exCircle} alt="close icon" />
                                        </div>
                                    </div>
                                </div>
                                <div className="taken">
                                    <div className="taken-content">
                                        <div>Champagne</div>
                                        <div>x24</div>
                                        <div>
                                            <img style={{width:'16px', height:'16px'}} src={exCircle} alt="close icon" />
                                        </div>
                                    </div>
                                </div>
                                <div className="taken">
                                    <div className="taken-content">
                                        <div>Champagne</div>
                                        <div>x24</div>
                                        <div>
                                            <img style={{width:'16px', height:'16px'}} src={exCircle} alt="close icon" />
                                        </div>
                                    </div>
                                </div>
                                <div className="taken">
                                    <div className="taken-content">
                                        <div>Champagne</div>
                                        <div>x24</div>
                                        <div>
                                            <img style={{width:'16px', height:'16px'}} src={exCircle} alt="close icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cash-details">
                                <div className="tex">Subtotal: ₦ 28,000 </div>
                                <div className="tex">VAT: ₦ 3,000 </div>
                                <div className="tex">Total: ₦ 10,600 </div>
                                <div className="pay">
                                    <div className="tex2">Payment type :</div>
                                    <div className="bott">
                                        <div style={{marginRight:'5px'}}>Cash</div>
                                        <div>
                                            <img style={{width:'7px', height:'5px'}} src={drop} alt="arrow icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="botton">Validate payment</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

const text = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '19px',
    textDecorationLine: 'underline',
    color: '#F0A22D',
    marginLeft:'5px'
}

const label = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '11px',
    lineHeight: '10px',
    color: '#000000',
    marginTop: '15px',
}

export default MainContent;