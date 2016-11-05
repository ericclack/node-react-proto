
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
    constructor() {
        super();
        this.state = {
            newsItems: [],
        };
    }

    componentWillMount() {
        //this.getNewsItemsFromPrismic();
    }

    render() {
        const panels = this.state.newsItems.map( (item) =>               
            <NewsPanel title={item} img="http://placehold.it/350x150" 
            description="hahahahaha!!" /> );
        return (
            <div>{panels}</div>
        );
    }
}

ReactDOM.render(<NewsPage />, document.getElementById('container'));
