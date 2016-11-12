import getNewsItemsFromPrismic from './prismic-news';

class NewsPanel extends React.Component {
    render() {
        return (
            <div className="news-panel">
            <h2>{this.props.title}</h2>
            <div className="news-img"><img src={this.props.img} /></div>
            <p>{this.props.description}</p>
            </div>
        );
    }
}

class NewsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            newsItems: [ { title: 'Loading...' }, ],
        };
    }

    componentWillMount() {
        getNewsItemsFromPrismic( (items) => this.setState({ 
          newsItems: items }) );
    }

    render() {
        const panels = this.state.newsItems.map( (item) =>               
            <NewsPanel title={item.title} img={item.image}
                       description={item.description} /> );
        return (
            <div>{panels}</div>
        );
    }
}

ReactDOM.render(<NewsPage />, document.getElementById('container'));
