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
    {name: 'Bitsight', img: './img/bs.svg', size: '110px', sizeMax:'240px',id:'bsModal',
      links:['https://www.bitsight.com/security-ratings'],
      content:
      `Bitsight是全球第一 No.1 資安評級服務平台業者，也是 Cyber Security Risk Rating / Security Scoring 資安評級的標準 - 《公平和準確安全評級原則指南》(Guidelines for Principals of Fair and Accurate Security Rating)。\r\n
      Bitsight自2013年發佈全球首家 Security Rating / Security Scoring Service 資安評級服務以來，全球最大的10家網路保險公司中的7家、Fortune 500 中超過25%跨國大型企業中，以及前5大投資銀行中的3家都依賴 Bitsight Security Rating Service 資安評級服務來改善並增強企業本身的資安管理績效，以及其第三方/供應鏈資安風險管理。\r\n`,
      info:['Bitsight'],
      tel:'02-8786-9221'
    },
    {name: 'Vectra', img: './img/vectra.svg', size: '110px', sizeMax:'200px', id:'vModal',
      links:['https://www.vectra.ai/'],
      content:
      `Vectra AI Threat Detection & Response (TDR) 是全球領先且最先進的智能網路資安威脅偵測及回應分析產品及解決方案，提供基於 AI/Machine Learning、 跨網路架構、不受端點(Endpoint)限制。提供全地端，虛擬機器及雲端建置環境。可快速偵測網路環境內的資安攻擊事件，具高度可視性及事件回應修補建議。同時提供標準接口並已經與各式資安管理系統如 SIEM、SOC、EDR 系統完成整合，針對真實資安攻擊事件可第一時間進行通報，大幅降低誤報率。並且即時進行封鎖阻擋作業，有效防堵資安攻擊的南北東西向移動擴散。Vectra AI Threat Detection & Response 能力：
      <li>針對攻擊者的行為快速提供優先處理建議並顯示相關的高風險事件</li>
      <li>最大限度地減少誤報並減少SOC工作量並加速調查速度</li>
      <li>通過與現有資安管理系統的緊密整合，快速嚮應並啟動資安威脅攻擊的防堵機制</li>Vectra AI Threat Detection & Response 是目前市場上符合 MITRE資安威脅攻擊行為偵測規範高達90%的解決方案，並且也是唯一一家AI專利被 MITRE D3FEND採用的企業(12項AI專利)。是企業進行內部資安探索、觀察、分析並智能化處理本地端與雲端中的所有資安攻擊威脅事件的最佳解決方案。\r\n`,
      info:['Vectra AI'],
      tel:'02-8786-9221'
    },
    {name: 'Comforte', img: './img/comforte.svg', size: '110px', sizeMax:'200px', id:'cfModal',
      links:['https://www.comforte.com/'],
      content:
      `Comforte – 資安橫行年代保護個人機敏資料的最後一道防線！
      Comforte作為以數據為中心的資安解決方案領導者，我們確保企業寶貴的客戶機敏資料數據隨時隨地都是安全的。
      <li>人工智能輔助數據發現，可查找所有客戶的機敏數據，包括您不知道存在系統中的個資數據。</li>
      <li>提供多種假名和匿名保護方法，同時保留個資數據處理和分析的實用性。</li>
      <li>與 Kubernetes 和 VMware 深度整合，並結合數據安全即代碼以實現 DevOps 和自動化。</li>
      <li>與數據流和應用系統透明整合，以實現Comforte在個資保護的價值及擺脫傳統加密機制個資保護的困境。</li>Gartner 2022年數據安全平台融合戰略路線圖，Joerg Fritsch、Brian Lowans、David Mahdi 對於 Comforte Data Centric Security Platform 的評語：\r\n
      “成功的資安與風險管理領導者可以通過從孤立的數據安全產品過渡到數據安全平台，顯著提高數據的業務利用率和價值，從而實現更簡單、一致的端到端安全性。 數據安全平台產品提供並保護這種未來狀態。”\r\n
      Comforte Data Centric Security Service
      符合 PCI-DSS, HIPAA，PDPA及GDPR等個資保護法規要求及ANSI X9 代碼化技術標準。\r\n
      Comforte 客戶覆蓋
      全球前25大銀行中的15家
      全球前15大零售商中的3家
      全球最大的3家信用卡處理商 VISA，MASTERCARD及DISCOVER
      各產業龍頭企業均已使用 Comforte 服務多年，作為保護其客戶及消費者機敏資料的最後一道資安防線。
      `,
      info:['Comforte'],
      tel:'02-8786-9221'
    },
    {name: 'Recorded Future', img: './img/rf.svg', size:'110px', sizeMax:'200px', id:'rfModal',
      links:['https://www.recordedfuture.com/'],
      content:`Recorded Future 的起源可以追溯到 2007 年，當時聯合創始人 Christopher Ahlberg 申請了公司的第一項專利，為由機器學習提供支持的實時威脅情報奠定了基礎。 如今，Recorded Future 擁有全球數千家大型機構客戶、800 多名資安專業人員、數億美元以上的營收，以及全球最大的相互關聯的暗網資安攻擊威脅大數據。 隨著資安威脅攻擊在我們周圍的世界加速和匯聚，未來的攻擊手法將是AI驅動攻擊行為。因此對於企業機構即時獲取攻擊威脅情報，因應超前部署資安防禦機制的急迫要求，Recorded Future機器學習實時威脅情報，將比以往任何時候都更加重要!\r\n
      Recorded Future 暗網資安攻擊威脅情報覆蓋以下9大風險構面：
      <li>Brand Intelligence 品牌情報</li>
      <li>SecOps Intelligence 安全運營情報</li>
      <li>Threat Intelligence 威脅情報</li>
      <li>Vulnerability Intelligence 漏洞情報</li>
      <li>Third-Party Intelligence 第三方情報</li>
      <li>Geopolitical Intelligence 地緣政治情報</li>
      <li>Payment Fraud Intelligence 支付欺詐情報</li>
      <li>Identity Intelligence 身份情報</li>
      <li>Attack Surface Intelligence 攻擊面情報</li>`,
      info:['Recorded Future'],
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