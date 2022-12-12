import React from "react";
import "./productEvulate.scss";
import { Like1, Star1, Warning2 } from "iconsax-react";

const ProductEvulate = ({ id }) => {
    return (
        <div className="productEvulate">
            <div className="productEvulate-container">
                <h1>Đánh giá sản phẩm</h1>
                <div className="productEvulate-rating">
                    <div className="rating-sum">
                        <span>5,0</span>
                        <div className="rating-star">
                            <Star1 variant="Bold" size={19} />
                            <Star1 variant="Bold" size={19} />
                            <Star1 variant="Bold" size={19} />
                            <Star1 variant="Bold" size={19} />
                            <Star1 variant="Bold" size={19} />
                        </div>
                        <span>18 người đánh giá</span>
                    </div>
                    <div className="rating-count">
                        <div className="count-detail">
                            <Star1 variant="Bold" />
                            <span>5</span>
                            <span className="rating-process"></span>
                            <span>10</span>
                        </div>
                        <div className="count-detail">
                            <Star1 variant="Bold" />
                            <span>4</span>
                            <span className="rating-process"></span>
                            <span>4</span>
                        </div>
                        <div className="count-detail">
                            <Star1 variant="Bold" />
                            <span>3</span>
                            <span className="rating-process"></span>
                            <span>4</span>
                        </div>
                        <div className="count-detail">
                            <Star1 variant="Bold" />
                            <span>2</span>
                            <span className="rating-process"></span>
                            <span>0</span>
                        </div>
                        <div className="count-detail">
                            <Star1 variant="Bold" />
                            <span>1</span>
                            <span className="rating-process"></span>
                            <span>0</span>
                        </div>
                    </div>
                </div>
                <div className="productEvulate-comment">
                    <div className="comment-user">
                        <img src="../Img/1-tgdd.jpg" alt="" />
                        <div className="user-info">
                            <span>Nguyễn Văn A</span>
                            <div className="user-rate">
                                <Star1 variant="Bold" />
                                <Star1 variant="Bold" />
                                <Star1 variant="Bold" />
                                <Star1 variant="Bold" />
                                <Star1 variant="Bold" />
                            </div>
                            <span>12 - 02 - 2022</span>
                            <div className="comment-btn">
                                <button>
                                    <Like1 />
                                    7.9k
                                </button>
                                <Warning2 className="comment-warn" />
                            </div>
                        </div>
                    </div>
                    <div className="comment-detail">
                        <span>
                            Có vinh dự đc khui máy tại sự kiện ra mắt 14pm của
                            shopdunk ờ nhà thi đấu nguyễn du máy xài cực ổn r k
                            có gì phải chê, còn đc bảo hành 900 ngày nữa 10 điểm
                            luôn.
                        </span>
                        <div className="comment-img">
                            <img src="../Img/iphone14.png" alt="" />
                            <img src="../Img/iphone14.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="productEvulate-comment">
                    <div className="comment-user">
                        <img src="../Img/1-tgdd.jpg" alt="" />
                        <div className="user-info">
                            <span>Nguyễn Văn A</span>
                            <div className="user-rate">
                                <Star1 variant="Bold" />
                                <Star1 variant="Bold" />
                                <Star1 variant="Bold" />
                                <Star1 variant="Bold" />
                                <Star1 variant="Bold" />
                            </div>
                            <span>12 - 02 - 2022</span>
                            <div className="comment-btn">
                                <button>
                                    <Like1 />
                                    7.9k
                                </button>
                                <Warning2 className="comment-warn" />
                            </div>
                        </div>
                    </div>
                    <div className="comment-detail">
                        <span>
                            Có vinh dự đc khui máy tại sự kiện ra mắt 14pm của
                            shopdunk ờ nhà thi đấu nguyễn du máy xài cực ổn r k
                            có gì phải chê, còn đc bảo hành 900 ngày nữa 10 điểm
                            luôn.
                        </span>
                        <div className="comment-img">
                            <img src="../Img/iphone14.png" alt="" />
                            <img src="../Img/iphone14.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="productEvulate-comment">
                    <div className="comment-user">
                        <img src="../Img/1-tgdd.jpg" alt="" />
                        <div className="user-info">
                            <span>Nguyễn Văn A</span>
                            <div className="user-rate">
                                <Star1 variant="Bold" />
                                <Star1 variant="Bold" />
                                <Star1 variant="Bold" />
                                <Star1 variant="Bold" />
                                <Star1 variant="Bold" />
                            </div>
                            <span>12 - 02 - 2022</span>
                            <div className="comment-btn">
                                <button>
                                    <Like1 />
                                    7.9k
                                </button>
                                <Warning2 className="comment-warn" />
                            </div>
                        </div>
                    </div>
                    <div className="comment-detail">
                        <span>
                            Có vinh dự đc khui máy tại sự kiện ra mắt 14pm của
                            shopdunk ờ nhà thi đấu nguyễn du máy xài cực ổn r k
                            có gì phải chê, còn đc bảo hành 900 ngày nữa 10 điểm
                            luôn.
                        </span>
                        <div className="comment-img">
                            <img src="../Img/iphone14.png" alt="" />
                            <img src="../Img/iphone14.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="productEvulate-comment">
                    <div className="comment-user">
                        <img src="../Img/1-tgdd.jpg" alt="" />
                        <div className="user-info">
                            <span>Nguyễn Văn A</span>
                            <div className="user-rate">
                                <Star1 variant="Bold" />
                                <Star1 variant="Bold" />
                                <Star1 variant="Bold" />
                                <Star1 variant="Bold" />
                                <Star1 variant="Bold" />
                            </div>
                            <span>12 - 02 - 2022</span>
                            <div className="comment-btn">
                                <button>
                                    <Like1 />
                                    7.9k
                                </button>
                                <Warning2 className="comment-warn" />
                            </div>
                        </div>
                    </div>
                    <div className="comment-detail">
                        <span>
                            Có vinh dự đc khui máy tại sự kiện ra mắt 14pm của
                            shopdunk ờ nhà thi đấu nguyễn du máy xài cực ổn r k
                            có gì phải chê, còn đc bảo hành 900 ngày nữa 10 điểm
                            luôn.
                        </span>
                        <div className="comment-img">
                            <img src="../Img/iphone14.png" alt="" />
                            <img src="../Img/iphone14.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="productEvulate-comment">
                    <div className="comment-user">
                        <img src="../Img/1-tgdd.jpg" alt="" />
                        <div className="user-info">
                            <span>Nguyễn Văn A</span>
                            <div className="user-rate">
                                <Star1 variant="Bold" />
                                <Star1 variant="Bold" />
                                <Star1 variant="Bold" />
                                <Star1 variant="Bold" />
                                <Star1 variant="Bold" />
                            </div>
                            <span>12 - 02 - 2022</span>
                            <div className="comment-btn">
                                <button>
                                    <Like1 />
                                    7.9k
                                </button>
                                <Warning2 className="comment-warn" />
                            </div>
                        </div>
                    </div>
                    <div className="comment-detail">
                        <span>
                            Có vinh dự đc khui máy tại sự kiện ra mắt 14pm của
                            shopdunk ờ nhà thi đấu nguyễn du máy xài cực ổn r k
                            có gì phải chê, còn đc bảo hành 900 ngày nữa 10 điểm
                            luôn.
                        </span>
                        <div className="comment-img">
                            <img src="../Img/iphone14.png" alt="" />
                            <img src="../Img/iphone14.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductEvulate;
