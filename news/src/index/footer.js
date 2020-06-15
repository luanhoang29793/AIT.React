import React from 'react';

class Footer extends React.Component{

    
    render(){
        return(
            <div className="footer-main footer-bg" id ="about">
            <div className="footer-area footer-padding">
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-xl-3 col-lg-3 col-md-5 col-sm-8">
                            <div className="single-footer-caption mb-50">
                                <div className="single-footer-caption mb-30">
                                    <div className="footer-logo">
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-5 col-sm-7">
                            <div className="single-footer-caption mb-50">
                                <div className="footer-tittle">
                                    <h4>THE NEWS</h4>
                                </div>
                                <div className="whats-right-single mb-20">
                                    <div className="whats-right-img">
                                    </div>
                                    <div className="whats-right-cap">
                                        <h4 style={{color:"white"}}>CẬP NHẬT NHANH CHÓNG</h4>
                                    </div>
                                </div>
                                <div className="whats-right-single mb-20">
                               
                                    <div className="whats-right-cap">
                                        <h4 style={{color:"white"}}>TIN TỨC CHÍNH XÁC</h4>
                                    </div>
                                </div>
                                <div className="whats-right-single mb-20">
                                 
                                    <div className="whats-right-cap">
                                        <h4 style={{color:"white"}}>MỌI CHI TIẾT LIÊN HỆ</h4>
                                        <p style={{marginBottom:"1rem"}}>Email: thenews@news.com</p> 
                                        <p>Điện thoại: 19001780</p> 
                                        <p></p> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-5 col-sm-7">
                            <div className="single-footer-caption mb-50">
                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="footer-bottom-area footer-bg">
                <div className="container">
                    <div className="footer-border">
                        <div className="row d-flex align-items-center">
                            <div className="col-xl-12 ">
                                <div className="footer-copy-right text-center">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        )
    }
}
export default Footer;