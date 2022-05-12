import "./InvestMenu.css";

const InvestMenu = function (){
    return (
        <div className="InvestList">
            <button className="InvestList_btn_apt">아파트</button>
            <button className="InvestList_btn_bun">분양권</button>
            <button className="InvestList_btn_rent">전월세</button>

        </div>
    )
};

export default InvestMenu;