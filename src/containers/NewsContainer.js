import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setNews } from '../reducers/news';
import News from '../components/pages/news';
import Spinner from '../components/spinner';
import { basetUrl } from '../services/sourcesUrl';

class NewsContainers extends Component {

  componentDidMount() {
    const { setNews } = this.props;

    const getNewsUrl = `${basetUrl}/news`;

    setNews(getNewsUrl);
  }

  render() {
    const { news, loading, error } = this.props;

    return (
      <>
        {
          loading
            ? < Spinner />
            : <News news={news} />
        }
        {error && <p className="error">{error}</p>}
      </>
    )
  }
}

const mapStateToProps = ({ news: { news, loading, error } }) => {
  return { news, loading, error }
}

const mapDispatchToProps = { setNews }

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainers);