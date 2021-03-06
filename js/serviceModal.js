const m = React.createElement;

let servicePics = [
    {name: 'RSA', img:'./img/rsa.svg', size: '80px', sizeMax: '150px', id:'rsaModal',
      links:['https://www.rsa.com/company/', 'https://outseer.com/products/outseer-fraud-action/'],
      content:
      `RSA旗下子公司Outseer的FraudAction Service為全球第一No.1外部偽冒偵測關閉服務。服務高達30,000家以上，包含 90%以上Fortune 500 的客戶的釣魚網站 Anti-Phishing、偽冒行動軟體 Anti-Rogue App、外部木馬事件 Anti-Trojan、國際社群媒體偽冒Social Media Fraud的偵測及關閉下架服務。另在封閉及需特殊權限的暗網網路，RSA Outseer 30年以上經驗的資安專家亦可依據委託業者需求，進行量身定製的暗網情資偵查搜證服務。\r\n
      目前台灣地區金融企業客戶已大量使用 RSA Outseer FraudAction 服務以全面偵測包含釣魚網站、偽冒行動軟體、暗網機敏資料外洩偵搜及社群媒體偽冒事件，以及執行大量的外部偽冒事件關閉下架作業。\r\n`,
      info:['RSA','詳細Outseer 公司及FraudAction Service 外部偽冒偵測關閉服務資訊請詳'],
      tel:'02-8786-9221'
    },
    {name: 'BitSight', img: './img/bs.svg', size: '110px', sizeMax:'180px',id:'bsModal',
      links:['https://www.bitsight.com/security-ratings'],
      content:
      `BitSight是全球第一 No.1 資安評級服務平台業者，也是 Cyber Security Risk Rating / Security Scoring 資安評級的標準 - 《公平和準確安全評級原則指南》(Guidelines for Principals of Fair and Accurate Security Rating)。\r\n
      BitSight自2013年發佈全球首家 Security Rating / Security Scoring Service 資安評級服務以來，全球最大的10家網路保險公司中的7家、Fortune 500 中超過25%跨國大型企業中，以及前5大投資銀行中的3家都依賴 BitSight Security Rating Service 資安評級服務來改善並增強企業本身的資安管理績效，以及其第三方/供應鏈資安風險管理。\r\n`,
      info:['BitSight'],
      tel:'02-8786-9221'
    },
    {name: 'Jumio', img: './img/jumio.svg', size:'110px', sizeMax:'200px', id:'jModal',
      links:['https://www.jumio.com/'],
      content:[`Jumio AML & KYC全球智能身份識別驗證服務是真正意義上的全球第一 No.1的國際級身份識別驗證服務。\r\n
      Jumio AML & KYC全球智能身份識別驗證服務支援全球200多個國家，4,000多種以上的身份證件(PII)包含身份證，駕照及護照等。\r\n
      Jumio 以符合ISO 30107-32 級認證的活體檢測技術進行反詐欺合規驗證作業。並且其身份識別驗證處理符合各式個資處理作業規範包含PCI, KYC, AML, PSD2，以及最嚴格的歐盟GDPR規範。\r\n
      Jumio AML & KYC全球智能身份識別驗證效能為業界最高的過真率及拒假率。能絕對有效大幅降低企業進行AML(反洗錢)及KYC(Know Your Customer)的獲客及客戶管理作業人工查核作業困擾。\r\n
      FinTech金融科技及Metaverse元宇宙整合的數位時代即將來臨。佈局此前所未有的數位時代，企業的獲客策略一定需要 Jumio AML & KYC全球智能身份識別驗證服務!`],
      info:['Jumio'],
      tel:'02-8786-9221'
    },
    {name: 'Noname', img: './img/noname.svg', size:'110px', sizeMax:'200px', id:'nModal',
      links:['https://nonamesecurity.com/'],
      content:`隨著金管會推動的 Open Banking 即將進入第二階段，不同企業透過 API 串聯金融服務，推出創新形態的FinTech商品的數位服務時代即將來臨。\r\n
      並且隨著元宇宙形態的新型數位環境逐漸成型，各行各業在跨越虛擬與實體世界間的業務模式即將帶來顛覆性的衝擊。此亦意味著串聯虛擬及實體的API數位經濟商業模式已經到來。\r\n
      根據全球知名產業調查研究機構 Gartner 的預估，財星（Fortune）前1,000大企業中將有超過75% 的公司會運用API來開創新業務或推動數位轉型，且在2022年API攻擊將會成為企業機敏資訊洩漏的最主要攻擊方式。\r\n
      也因此專注於API Security資安領域的領導廠商 Noname Security 推出其領先於業界的獨家DART解決方案, 發現分析補救測試客戶環境中的所有API資安威脅，符合OWASP開放網路軟體安全計畫API 10大風險作業規範要求。7x24保護並強化客戶所有API, 有效抵禦來自駭客針對API的侵入及攻擊。`,
      info:['Noname Security'],
      tel:'02-8786-9221'
    },
    {name: 'Vectra', img: './img/vectra.svg', size: '110px', sizeMax:'200px', id:'vModal',
      links:['https://www.vectra.ai/'],
      content:
      `Vectra AI Threat Detection & Response (TDR) 是全球領先且最先進的智能網路資安威脅偵測及回應分析產品及解決方案，提供基於 AI/Machine Learning、 跨網路架構、不受端點(Endpoint)限制。提供全地端，虛擬機器及雲端建置環境。可快速偵測網路環境內的資安攻擊事件，具高度可視性及事件回應修補建議。同時提供標準接口並已經與各式資安管理系統如 SIEM、SOC、EDR 系統完成整合，針對真實資安攻擊事件可第一時間進行通報，大幅降低誤報率。並且即時進行封鎖阻擋作業，有效防堵資安攻擊的南北東西向移動擴散。Vectra AI Threat Detection & Response 能力：
      <li>針對攻擊者的行為快速提供優先處理建議並顯示相關的高風險事件</li>
      <li>最大限度地減少誤報並減少SOC工作量並加速調查速度</li>
      <li>通過與現有資安管理系統的緊密整合，快速嚮應並啟動資安威脅攻擊的防堵機制</li>Vectra AI Threat Detection & Response 是企業進行內部資安探索、觀察、分析並智能化處理本地端與雲端中的所有資安攻擊威脅事件的最佳解決方案。\r\n`,
      info:['Vectra AI'],
      tel:'02-8786-9221'
    },
    {name: 'Sophos', img: './img/sophos.svg', size:'130px', sizeMax:'200px', id:'sModal',
      content:null,
      links:['https://www.sophos.com/en-us/company.aspx'],
      info:['Sophos'],
      tel:'02-8786-9221'
    },
    
  ]

servicePics.forEach((service, index) => {
    let num = index + 1;
    $('.cell:nth-child('+num+')')
    .css('background-image', 'url('+service.img+')')
    .css('background-position', 'center')
    .css('background-origin','content-box')
    .css('background-repeat','no-repeat')
    .css('cursor', 'pointer')
    .css('background-size', $(window).width()<567 ? service.size : service.sizeMax);
})

window.addEventListener('resize', function(event) {
  servicePics.forEach((service, index) => {
    let num = index + 1;
    // console.log($(window).width())
    if ($(window).width() < 567) {
      $('.cell:nth-child('+num+')').css('background-size', service.size);
    }
    else {
      $('.cell:nth-child('+num+')').css('background-size', service.sizeMax);
    }
  })
}, true);

class ServiceModal extends React.Component {
  render() {
    return servicePics.map((service, index) => {
      let close = m('i', {key:'icon'+index, className: "fa fa-close"},null);
      let span = m('span', {key:'span'+index, "aria-hidden":"true"}, close);
      let btn = m('button', {key: 'btn'+index, type: "button", className:'close', 'data-dismiss':"modal", "aria-label":"Close"}, span)
      let modalTitle = m('h3', {key: service.id+index, id: service.id, className:'modal-title'}, service.name);
      let modalHeader = m('div', {key: 'modalHeader'+index, className:"modal-header"}, [btn, modalTitle]);
      let content = null;
      if (service.content && service.content.indexOf('<li>') != -1) {
        let firstP = m('p', {key: 'modalContentFirst', className:'modalContent'}, service.content.split('<li>')[0]) ;
        let lastP = m('p', {key: 'modalContentLast', className:'modalContent'}, service.content.split('</li>')[service.content.split('</li>').length -1]);
        let liItems = service.content.split('<li>').map((ser, index)=> {
          if(index > 0){
            return m('li', {key: 'liContent'+index, className:'content-li'}, ser.substring(0, ser.indexOf('</li>')));
          }
        });
        content = m('div', {key: 'modalContent'+index, className:'modContent'}, [firstP, liItems, lastP]);
      } else {
        content = m('p', {key: 'modalContent'+index, className:'modalContent'}, [service.content]);
      }
      let infos = service.links.map((link, i) =>{
        let linkSpan = m('a', {key: 'link'+i, href:link, target:'_blank'}, link);
        if(i == 0){
          return m('p', {key: 'infos'+i, className:"linkSpan text-left"}, ["有關 "+service.info[i]+" 公司資訊請詳 ", linkSpan]);
        } else {
          return m('p', {key: 'infos'+i, className:"linkSpan text-left"}, [service.info[i], linkSpan]);
        }
      })
      let telLink = m('a', {key:'telLink'+index, href:'tel:'+service.tel},service.tel);
      let tel = m('p', {key: 'tel'+index, className:"modal-tel text-left"}, ["如需進一步產品說明，請聯繫本公司服務電話：",telLink]);
      let modalInfos = m('div', {key: 'modalInfo'+index, className: "modal-info text-left"}, [infos, tel]);
      let modalBody = m('div', {key: 'modalBody'+index, className:"modal-body"}, [content, modalInfos]);
      let modalContent = m('div', {key: 'modalContent'+index, className: "modal-content"}, [modalHeader, modalBody]);
      let modalDialog = m('div', {key: 'modalDialog'+index, className: "modal-dialog", role: "document"}, modalContent);
      return m('div', {key: 'finalModal'+index, className: "modal fade", id: service.id, role:"dialog", "aria-labelledby": service.id}, modalDialog);
    })
  }
}
    
// render your app
ReactDOM.render(m(ServiceModal), document.getElementById('service-modal'));