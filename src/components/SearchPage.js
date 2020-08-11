import React from 'react';
import '../styles/css/site.css'
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { searchProjectsByString } from '../repository';
import ReactPaginate from 'react-paginate';

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: '',
            query: '',
            searchTriggered: false,
        }
    }

    fetchData(userParams) {
        this.props.searchTriggered();
        searchProjectsByString(userParams)
            .then((data) => {
                this.setState({
                    loading: false,
                    results: data
                })
            }).catch(() => {
                this.setState({
                    loading: true,
                    error: 'Data not available'
                })
            });
    }

    handleSearch = (value) => {
        this.setState({
            query: value,
            searchTriggered: true,
        });
        let userParams = {
            'query': value,
            'page': 1
        };
        this.fetchData(userParams)
    }

    handlePagination = (data) => {
        const page = data.selected + 1;
        let userParams = {
            'query': this.state.query,
            'page': page
        };
        this.fetchData(userParams)


    }

    render() {
        return (
            <React.Fragment>
                <SearchBar handleSearch={this.handleSearch} />
                {
                    this.state.searchTriggered &&
                    (
                        this.state.loading ? <p>loading</p> :
                            <div id="react-paginate">
                                <SearchResults {...this.state} />
                                <ReactPaginate
                                    onPageChange={this.handlePagination}
                                    marginPagesDisplayed={2}
                                    pageCount={this.state.results.data.total_pages}
                                    pageRangeDisplayed={2}
                                    containerClassName={'pagination justify-content-center'}
                                    pageClassName={'page-item'}
                                    pageLinkClassName={'page-link'}
                                    nextClassName={'page-link'}
                                    previousClassName={'page-link'}
                                    breakClassName={'page-link'}
                                    breakLabel={'...'}
                                    />

                            </div>
                    )
                }
            </React.Fragment>

        )
    }

}
export default SearchPage;
