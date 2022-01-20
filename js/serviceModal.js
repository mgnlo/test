const m = React.createElement;

let servicePics = [
    {name: 'RSA', img:'./img/rsa.svg', size: '80px', id:'rsaModal',
      links:['https://www.rsa.com/company/', 'https://outseer.com/products/outseer-fraud-action/'],
      content:
      `RSA旗下子公司Outseer的FraudAction Service為全球第一No.1外部偽冒偵
      測關閉服務。服務高達30,000家以上，包含 90%以上Fortune 500 的客戶的釣魚網站 Anti-Phishing、偽冒行動軟體 Anti-Rogue App、外部木馬事件 Anti-Trojan、國際社群媒體偽冒Social Media Fraud的偵測及關閉下架服務。
      另在封閉及需特殊權限的暗網網路，RSA Outseer 30年以上經驗的資安專家亦可依據委託業者需求，進行量身定製的暗網情資偵查搜證服務。\r\n
      目前台灣地區金融企業客戶已大量使用 RSA Outseer FraudAction 服務以全面偵測包含釣魚網站、偽冒行動軟體、暗網機敏資料外洩偵搜及社群媒體偽冒事件，以及執行大量的外部偽冒事件關閉下架作業。`,
      info:['詳細 RSA 公司資訊請詳','詳細Outseer 公司及FraudAction Service 外部偽冒偵測關閉服務資訊請詳'],
      tel:'02-8786-9221'
    },
    {name: 'BitSight', img: './img/bs.svg', size: '110px', id:'bsModal',
      links:['https://www.bitsight.com/security-ratings'],
      content:
      `BitSight是全球第一 No.1 資安評級服務平台業者，也是 Cyber Security Risk Rating / Security Scoring 資安評級的標準 - 《公平和準確安全評級原則指南》(Guidelines for Principals of Fair and Accurate Security Rating)。\r\n
       BitSight自2013年發佈全球首家 Security Rating / Security Scoring Service 資安評級服務以來，全球最⼤的10家網路保險公司中的7家、Fortune 500 中超過25%跨國大型企業中，以及前5⼤投資銀⾏中的3家都依賴 BitSight Security Rating Service 資安評級服務來改善並增強企業本身的資安管理績效，以及其第三方/供應鏈資安風險管理。`,
      info:['詳細 BitSight 公司資訊請詳'],
      tel:'02-8786-9221'
    },
    {name: 'ExtraHop', img: './img/extrahop.svg', size: '130px', id:'ehModal',
      links:['https://www.extrahop.com/'],
      content:
      `ExtraHop Network Detection & Response (NDR) 是全球領先且最先進的智能網路流量偵測及回應資安分析產品及解決方案，
      提供基於 AI/Machine Learning、 跨網路架構、不受端點(Endpoint)限制、解密流量內資訊、透視 L7 應用層協定以及覆蓋雲端企業應用所需的流量分析、快速資安事件偵測與高度可視性及事件回應修補建議。
      目前包括 Sony、Lockheed Martin、Microsoft、Adobe 與 Google 等 Fortune 500 大企業在內的數百家機構都開始大量使用 ExtraHop 進行企業內部的資安探索、觀察、分析並智慧化處理本地端與雲端中的所有流量傳輸中的資安事件資訊。`,
      info:['詳細 ExtraHop 公司資訊請詳'],
      tel:'02-8786-9221'
    },
    {name: 'Sophos', img: './img/sophos.svg', size:'130px', id:'sModal',
      content:null,
      links:['https://www.sophos.com/en-us/company.aspx'],
      info:['詳細 Sophos 公司資訊請詳'],
      tel:'02-8786-9221'
    }
  ]

servicePics.forEach((service, index) => {
    let num = index + 1;
    $('.cell:nth-child('+num+')')
    .css('background-image', 'url('+service.img+')')
    .css('background-position', 'center')
    .css('background-size', service.size)
    .css('background-origin','content-box')
    .css('background-repeat','no-repeat')
    .css('cursor', 'pointer');
})

class ServiceModal extends React.Component {
  render() {
    return servicePics.map((service, index) => {
      let close = m('i', {key:'icon'+index, className: "fa fa-close"},null);
      let span = m('span', {key:'span'+index, "aria-hidden":"true"}, close);
      let btn = m('button', {key: 'btn'+index, type: "button", className:'close', 'data-dismiss':"modal", "aria-label":"Close"}, span)
      let modalTitle = m('h3', {key: service.id+index, id: service.id, className:'modal-title'}, service.name);
      let modalHeader = m('div', {key: 'modalHeader'+index, className:"modal-header"}, [btn, modalTitle]);
      let content = m('p', {key: 'modalContent'+index, className:'modalContent'}, service.content);
      let infos = service.links.map((link, i) =>{
        let linkSpan = m('a', {key: 'link'+i, href:link, target:'_blank'}, link);
        return m('p', {key: 'infos'+i, className:"linkSpan text-left"}, [service.info[i]+" ", linkSpan]);
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