const e = React.createElement;
class NavBar extends React.Component {
    linkEnum = [
        {key: 'index', name: '首頁'},
        {key: 'about', name: '關於我們'},
        {key: 'service', name: '服務內容'},
        {key: 'portfolio', name: '產品經歷'},
        {key: 'contact', name: '聯絡我們'},
    ];
    render() {
        let links = this.linkEnum.map((link, index) => (
            e('li', {key: index}, e('a', {key: index, href: "./"+link.key+".html"}, link.name))
        ));
        let ul = e('ul', {key: 'ul', className: 'nav navbar-nav navbar-right'}, links);
        let nav = e('div', {key: 'nav', className: 'collapse navbar-collapse', id: 'myNavbar'}, ul);
        let burgerLine = [];
        for(let i = 0; i < 3; i++) {
            burgerLine.push(e('span', {key: 'burgerLine'+i, className: 'icon-bar'}, null));
        }
        let btns = e('button',{key: 'btns', type: 'button', className: 'navbar-toggle', 'data-toggle':'collapse', 'data-target':'#myNavbar'}, burgerLine);
        let img = e('div', {key: 'icon', className:'iconLogo d-inline-block align-top', width: 'auto', height: '30'}, null);
        let brand = e('a', {key: 'brand', href: './index.html', className: 'navbar-brand'}, [img,'喬昱科技']);
        let navBurger = e('div', {key: 'navBurger', className: 'navbar-header'}, [btns, brand]);
        let container = e('div', {key: 'container', className: 'container'}, [navBurger, nav]);
        return e('nav', {key: 'finalNav', className: 'navbar navbar-default navbar-fixed-top'}, container);
    }
}
  
// render your app
ReactDOM.render(e(NavBar), document.getElementById('nav-bar'));