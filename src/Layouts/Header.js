
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { ScrollToTop } from "../components/common/useScrollToTop";




export function Header() {


    return (



        <div className="header-contain header-font">



            <div className="header-name">
                <div style={{ justifyContent: "space-between", alignItems: "center", width: 200 }} className="itemfavour-control">

                    <img style={{ marginTop: -10 }} src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.15752-9/382628914_1364892494099796_5679409985926550937_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Lg_T6h9iJBAAX9ItHWv&_nc_ht=scontent.fsgn3-1.fna&oh=03_AdSoIA6Hbh4AHL-YPeNK6lNe7eHxgMcZDEWY_bNwhpeeLw&oe=653DF495" />
                    <h1> D & Đ  </h1>

                </div>

                <p style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>Tất cả các sản phẩm</p>

                <div className="header-search">


                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search" />
                    </div>

                    <FontAwesomeIcon style={{ padding: 10 }} icon={faUser} />

                    <Link to='/cart' onClick={ScrollToTop}>
                        <FontAwesomeIcon style={{ padding: 10, }} color="#000" cursor="pointer" icon={faStore} />
                    </Link>

                </div>


            </div>



            <div className="header-option-contain header-dropdown-shirt">
                <ul className="header-option  ">
                    {/* <Link style={{ textDecoration: 'none' }} to={"/"}><li>  Trang chủ</li></Link> */}
                    <Link to={"/"}
                        color="#000"
                        // style={{ textDecoration: "none", }}
                        onClick={ScrollToTop} >
                        <li color="#000" >Trang chủ</li>
                    </Link>

                    <li>Giới thiệu</li>
                    <li>Sản phẩm</li>

                    <li className="dropdown-select">Áo
                        <ul className="he-dropdown-list-shirt">
                            <li>ÁO THUN</li>
                            <li>ÁO SƠ MI</li>
                            <li>ÁO POLOS</li>
                            <li>HOODIE-SWEATER</li>
                            <li>ÁO KHOÁC</li>
                        </ul>

                    </li>

                    <li className="dropdown-select">Quẩn
                        <ul className="he-dropdown-list-shirt">
                            <li>JEANS</li>
                            <li>KAKI</li>
                            <li>QUẦN LỬNG</li>
                            <li>JOGGERS</li>
                            <li>QUẦN NGỦ</li>
                            <li>QUẦN TÂY</li>
                            <li>UNDERWEAR</li>

                        </ul>
                    </li>

                    <li className="dropdown-select">Phụ kiện
                        <ul className="he-dropdown-list-shirt">
                            <li>TẤT-VỚ</li>
                            <li>BALO</li>
                            <li>NÓN</li>
                            <li>TÚI</li>
                            <li>THẮT LƯNG</li>
                            <li>VÍ</li>
                            <li>GIÀY</li>
                            <li>DÉP</li>

                        </ul>
                    </li>

                    <li className="dropdown-select">Bộ sưu tập
                        <ul className="he-dropdown-list-shirt">
                            <li>SUMMER COLLECTIONS</li>
                            <li>TẾT COLLECTIONS</li>
                            <li>WINTER COLLECTIONS</li>
                            <li>PRE-FALL COLLECTION</li>

                        </ul>
                    </li>

                    <li className="dropdown-select">Dòng sản phẩm
                        <ul className="he-dropdown-list-shirt">
                            <li>JEANS</li>
                            <li>KAKI</li>
                            <li>QUẦN LỬNG</li>
                            <li>JOGGERS</li>
                            <li>QUẦN NGỦ</li>
                            <li>QUẦN TÂY</li>
                            <li>UNDERWEAR</li>

                        </ul>
                    </li>
                </ul>


            </div>




        </div >
    )
}