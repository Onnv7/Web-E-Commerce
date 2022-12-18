import { Crown } from 'iconsax-react';
import React from 'react';
import './listBuyer.scss';

const ListBuyer = () => {
    return (
        <div className="listBuyer">
            <div className="listBuyer-header">
                <span>Người bán</span>
                <span>Mức đấu giá</span>
                <span>Đường dẫn tới sản phẩm</span>
                <span>Thời gian ra giá</span>
            </div>
            <div className="listBuyer-Item">
                <span>buyer1</span>
                <span>
                    300 <Crown variant="Bold" />
                </span>
                <span>http://dsdsđs</span>
                <span>14h34, 28/12/2022</span>
            </div>
            <div className="listBuyer-Item">
                <span>buyer1</span>
                <span>
                    300 <Crown variant="Bold" />
                </span>
                <span>http://dsdsđs</span>
                <span>14h34, 28/12/2022</span>
            </div>
            <div className="listBuyer-Item">
                <span>buyer1</span>
                <span>
                    300 <Crown variant="Bold" />
                </span>
                <span>http://dsdsđs</span>
                <span>14h34, 28/12/2022</span>
            </div>
            <div className="listBuyer-Item">
                <span>buyer1</span>
                <span>
                    300 <Crown variant="Bold" />
                </span>
                <span>http://dsdsđs</span>
                <span>14h34, 28/12/2022</span>
            </div>
            <div className="listBuyer-Item">
                <span>buyer1</span>
                <span>
                    300 <Crown variant="Bold" />
                </span>
                <span>http://dsdsđs</span>
                <span>14h34, 28/12/2022</span>
            </div>
        </div>
    );
};

export default ListBuyer;
