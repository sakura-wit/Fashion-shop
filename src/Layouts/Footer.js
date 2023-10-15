import { MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBRow } from "mdb-react-ui-kit";
import React from "react";

export function Footer() {
    return <div className="footer-contain">

        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted footer-contain'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="twitter" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="google" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="linkedin" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="github" />
                    </a>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon icon="gem" className="me-3" />
                                D&D
                            </h6>
                            <p>
                                SOME INFORMATION
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Chính sách Mua hàng</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Chính sách đổi hàng
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Chính sách trả hàng
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Chính sách thanh toán
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Laravel
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Địa chỉ cửa hàng - Liên hệ</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Thông tin liên hệ
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Hệ thống cửa hàng
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Giới thiệu
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Tuyển dụng
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                UIT
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                DandD@gmail.com
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                            </p>
                            <p>
                                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © Designer:
                <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                    NguyenVanDat-DangTrongDanh
                </a>
            </div>
        </MDBFooter>

        {/* <div className="footertitle-control">
            <h3> <span> HỖ TRỢ - CHÍNH SÁCH MUA HÀNG </span> </h3>
        </div>


        <div className="footerdetail-contain">

            <div className="footerdetail-control">
                <ul>
                    <li>Hỗ trợ khách hàng</li>
                    <li>Phương thức thanh toán</li>
                    <li>Chính sách giao hàng</li>
                </ul>
            </div>

            <div className="footerdetail-control">
                <ul>
                    <li>Chính sách mua hàng</li>
                    <li></li>
                    <li></li>
                </ul>
            </div>


            <div className="footerdetail-control">
                <ul>
                    <li>Địa chỉ cửa hàng-Liên hệ</li>
                    <li>Chính sách trả hàng</li>
                    <li>Chính sách đổi hàng</li>
                    <li>Chính sách thanh toán</li>
                </ul>
            </div>


            <div className="footerdetail-control">
                <ul>
                    <li>Cộng đồng</li>
                    <li>Thông tin liên hệ</li>
                    <li>Hệ thống cửa hàng</li>
                    <li>Giới thiệu</li>
                    <li>Tuyển dụng</li>
                    <li>Tin tức</li>
                </ul>
            </div>



            <div className="footerdetail-control">
                <ul>
                    <li>D & Đ</li>
                    <li></li>
                    <li></li>
                </ul>
            </div>


        </div> */}


    </div>
}