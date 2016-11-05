const PRISMIC_API_URL = "http://clack.prismic.io/api";

function getNewsItemsFromPrismic(callback) {
    // Fire off *async* call to get news and then
    // call callback with processed news items
    Prismic.api(PRISMIC_API_URL, function(error, api) {
        var options = {}; 
        api.query(Prismic.Predicates.at('document.type', 'news-panel'), 
                  options, function(error, response) { 
                      if (error) {
                          console.log("Prismic error: ", err);
                      }
                      else {
                          callback(processPrismicNewsItems(response.results));
                      }
                  });
    });
}

function processPrismicNewsItems(items) {
    return items.map( (item) => ({
        title: item.getStructuredText('news-panel.title').asText(),
        image: item.getImage('news-panel.image').url,
        
    }) );
}

//getNewsItemsFromPrismic(console.log);

//--------------------------------------------------------------------------


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
            newsItems: [ { title: 1 }, ],
        };
    }

    componentWillMount() {
        getNewsItemsFromPrismic( (items) => this.setState({ 
          newsItems: items }) );
    }

    render() {
        const panels = this.state.newsItems.map( (item) =>               
            <NewsPanel title={item.title} img={item.image}
                       description="hahahahaha!!" /> );
        return (
            <div>{panels}</div>
        );
    }
}

ReactDOM.render(<NewsPage />, document.getElementById('container'));
