const PRISMIC_API_URL = "http://clack.prismic.io/api";

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

    rawNewsItemsFromPrismic() {
        Prismic.api(PRISMIC_API_URL, function(error, api) {
            var options = {}; 
            api.query(Prismic.Predicates.at('document.type', 'news-panel'), 
                      options, function(error, response) { 
                if (error) {
                    console.log("Something went wrong: ", err);
                }
                else {
                    console.log(response.results);
                    return response.results;
                }
            });
        });
    }

    newsItemsFromPrismic() {
        return this.rawNewsItemsFromPrismic().map( (item) => {
            title: item.getStructuredText('news-panel.title'),
            image: item.getImage('news-panel.image').url,
        } );
    }

    componentWillMount() {
        this.newsItemsFromPrismic();
        this.setState({
            newsItems: [ 'title1', 'title2', 'title3' ],
        });
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
