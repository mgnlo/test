const c = React.createElement;
class Card extends React.Component {
    cards = [
        {title: '代理產品', des: '我們長期與全球先進的資安領導廠商\r\nRSA Security、BitSight、ExtraHop、Noname、Jumio、Sophos 等公司合作。代理銷售其頂尖解決方案、系統及服務，並提供完整優質的售後服務及維運作業。'},
        {title: '解決方案', des: '喬昱科技深耕特定市場，並投入相關技術研發以精進對客戶的品質承諾，提供完整的電子金融解決方案，確保客戶在全球化的趨勢裡，於同業中取得領先地位。'},
        {title: '專業服務', des: '喬昱是專為客戶提供資訊系統建置服務相關資訊的廠商。為金融機構的系統開發與整合、Portal及相關應用系統建置、網路安全規劃、J2EE專案規劃與專業人力服務等。'}
    ];
    render() {
        return this.cards.map((card, index) => {
            let serviceIcon = c('i', {key: 'service-icon'+index, className: 'service-icon fa fa-globe'}, null)
            let title = c('p', {key: 'title'+index, className: 'title'}, card.title)
            let des = c('p', {key: 'description'+index, className: 'description'}, card.des)
            let serviceBox = c('div', {key: 'serviceBox'+index, className: 'serviceBox'}, [serviceIcon, title, des]);
            return c('div', {key:'div'+index, className: 'col-lg-4 col-md-4 col-sm-12'}, serviceBox)
        })
    }
}
// render your app
ReactDOM.render(c(Card), document.getElementById('cards'));