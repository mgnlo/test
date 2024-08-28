const tl = React.createElement;
let timeLines = [
    {year:2024, toNow: false, description:'導入領先業界的Cyble - AI Powered GEN 3人工智慧驅動暗網威脅情資解決方案。以洞察力和直覺式的原生性AI機制，能快速偵測發現入侵前、入侵中和入侵各階段的全生命週期暗網威脅情資。'},
    {year:2024, toNow: false, description:'導入ZTA零信任解決方案領導品牌Illumio。符合ZTA 2.0最嚴格要求的微分隔規範。提供可視化管理機制，有效阻擋資安攻擊威脅入侵後的橫向移動，並對企業重要數位資產提供全面資安防護。'},
    {year:2024, toNow: false, description:'導入Sumsub KYC & AML全球智能身份識別驗證服務。符合最嚴格的歐盟GDPR規範並支援全球200多個國家4,000種以上證件, 及通過iBeta深偽(Deepfake)防護智能活體身份驗證。'},
    {year:2023, toNow: false, description:'導入全球第一個資防護comforte Data Centric Security Service 假名化代碼化服務。符合PCI-DSS, HIPAA, PDPA, GDPR及ANSI X9代碼化技術標準。'},
    {year:2023, toNow: false, description:'導入領導品牌 Recorded Future 暗網威脅攻擊情資偵蒐服務。服務範圍覆蓋全球地緣政治，產業及企業。機器學習暗網情資分析威脅攻擊並即時預警。'},
    {year:2022, toNow: false, description:'導入Vectra AI Threat Detection & Response全球領先智能資安威脅偵測及回應服務。並與各式資安管理系統整合即時阻擋封鎖資安威脅攻擊事件。'},
    {year:2021, toNow: false, description:'導入Bitsight Security Rating Service－全球 No.1 及業界標準的資安風險評級 (Security Rating / Security Scoring) 服務。'},
    {year:2015, toNow: true, description:'國內30家以上大型金融機構及金控持續並大量採用RSA外部偽冒偵測關閉服務 (FraudAction Service)'},
    {year:2014, toNow: false, description:'喬昱科技與凱擘大電視、亞太電信、國喬石化、怡德視訊等企業簽署設備供應合約。'},
    {year:2013, toNow: false, description:'第一銀行採用RSA反釣魚網站及反木馬監測服務'},
    {year:2012, toNow: false, description:'華南銀行採用RSA反釣魚網站及反木馬監測服務。2018增購反偽冒行動軟體監測服務。'},
    {year:2011, toNow: false, description:'喬昱科技代理之Utimaco HSM\r\n獲得關稅總局 及 財政部採用'},
    {year:2009, toNow: false, description:'喬昱科技取得德國Utimaco公司產品的代理權，代理HSM(Hardware Security Module)台灣目前已有彰化銀行、安泰銀行、台灣票據交換所、金雅拓(Gemalto)等單位在使用，可做RSA或DES的加解密'},
    {year:2004, toNow: false, description:'喬昱獲得中國信託商銀青睞，並簽訂「法金平台重建專案」合約'}
]

class Timeline extends React.Component {
  render() {
    return timeLines.map((timeline, i) => {
        let des = tl('p', {key:'des'+i, className: "description"},timeline.description);
        let inner = tl('div', {key:'inner-content'+i, className: "inner-content"}, des);
        let yearText = (timeline.toNow) ? timeline.year+"~現在" : timeline.year;
        let yearClass = (timeline.toNow) ? "year now": "year";
        let year = tl('div', {key:'year'+i, className: yearClass}, yearText);
        let a = tl('a', {key:"href"+i, href:'./portfolio.html#', className: "timeline-content"}, [year, inner]);
        return tl('div', {key:"timeline"+i, className: "timeline"}, a);
    });
  }
}
    
// render your app
ReactDOM.render(tl(Timeline), document.getElementById('main-timeline'));