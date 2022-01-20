const f = React.createElement;
class Footer extends React.Component {
    render() {
        let toTop = f('span', {key: 'toTop'}, '回頂部');
        let span = f('span', {key: 'span', className: 'glyphicon glyphicon-chevron-up'}, toTop);
        return f('a', {key:'a', href: '#myPage', title: 'To Top'}, span);
    }
}
// render your app
ReactDOM.render(f(Footer), document.getElementById('footer'));