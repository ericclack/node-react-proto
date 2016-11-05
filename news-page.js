
class NewsPanel extends React.Component {
    render() {
        return (
            <div className="news-panel">
            <h2>{this.props.title}</h2>
            <img src={this.props.img} />
            <p>{this.props.description}</p>
            </div>
        );
    }
}

class NewsPage extends React.Component {
    getNewsItems() {
        return [ 'title1', 'title2', 'title3' ];
    }

    render() {
        const panels = this.getNewsItems().map( (item) =>               
            <NewsPanel title={item} img="http://placehold.it/350x150" 
            description="hahahahaha!!" /> );
        return (
            <div>{panels}</div>
        )}
}

ReactDOM.render(<NewsPage />, document.getElementById('container'));
