import React, { Component } from "react";
import Newsitem from "./Newsitem";
import { AiOutlineRead } from "react-icons/ai";

export class News extends Component {
  constructor() {
    super();
    // Initialize state
    this.state = {
      articles: [],
      InitialIndex: 0,
      MiddleIndex: 6,
      Pages: 1,
      CurrentPage: 1,
      loading: true, // Loading initially true when component loads
    };
  }

  // Method to handle left pagination (previous page)
  updatepageleft = (number) => {
    if (number === 0) {
      this.setState((prevState) => {
        const newCurrentPage = prevState.CurrentPage - 1;
        const newMiddleIndex = newCurrentPage * 6;
        const newInitialIndex = newMiddleIndex - 6;
        return {
          CurrentPage: newCurrentPage,
          MiddleIndex: newMiddleIndex,
          InitialIndex: newInitialIndex,
        };
      });
    }
  };

  // Method to handle right pagination (next page)
  updatepageright = (number) => {
    if (number === 0) {
      this.setState((prevState) => {
        const newCurrentPage = prevState.CurrentPage + 1;
        const newMiddleIndex = newCurrentPage * 6;
        const newInitialIndex = newMiddleIndex - 6;
        return {
          CurrentPage: newCurrentPage,
          MiddleIndex: newMiddleIndex,
          InitialIndex: newInitialIndex,
        };
      });
    }
  };

  // Function to calculate the last index for pagination
  lastIndex = (articlesArray) => {
    let temp = articlesArray.length % 6;
    let lastIndex = articlesArray.length - temp;
    return lastIndex;
  };

  // Fetch articles when the component first mounts
  async componentDidMount() {
    await this.fetchNews();
  }

  // Fetch articles again if the category prop changes
  async componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      await this.fetchNews();
    }
  }

  // Fetch news articles function
  fetchNews = async () => {
    try {
      // Start loading before fetch
      this.setState({ loading: true });

      const url = `https://gnews.io/api/v4/top-headlines?topic=${this.props.category}&token=7021e859c17c67a766270bd98b0e95a5&lang=en&country=in&max=30`;
      const data = await fetch(url);
      const parsedData = await data.json();
      const articles = parsedData.articles || [];
      const lastIndex = this.lastIndex(articles);

      this.setState({
        articles: articles,
        LastIndex: lastIndex,
        Pages: lastIndex / 6,
        InitialIndex: 0,
        MiddleIndex: 6,
        CurrentPage: 1,
      });

      // After fetch done, hide loading after 3 seconds
      setTimeout(() => {
        this.setState({ loading: false });
      }, 3000);
    } catch (error) {
      console.error("Error fetching articles:", error);
      this.setState({ loading: false }); // Hide loading even if error happens
    }
  };

  render() {
    return (
      <>
        <style>
          {`
            .newssection:hover {
              transform: scale(1.02);
              box-shadow: 4px 4px 30px 4px white;
              transition: transform 0.3s ease;
            }
          `}
        </style>

        {/* Show Loading spinner separately */}
        {this.state.loading && (
          <div className="d-flex justify-content-center align-items-center my-2">
            <strong style={{ color: "white", fontSize: "18px" }}>
              ⏳ Loading News...
            </strong>
          </div>
        )}

        <div
          className="container my-5 newssection"
          style={{
            height: "850px",
            width: "700px",
            backgroundColor: "#102639",
            border: "5px solid white",
            boxShadow: "2px 2px 20px 2px white",
            borderRadius: "15px",
          }}
        >
          <div
            className="border d-flex justify-content-center align-items-center my-4"
            style={{
              height: "60px",
              backgroundColor: "#d3dee9",
              borderRadius: "6px",
            }}
          >
            <strong>
              <h3>
                News Section <AiOutlineRead />
              </h3>
            </strong>
          </div>

          <div
            className="container border my-4"
            style={{ height: "650px", borderRadius: "20px" }}
          >
            <div className="d-flex flex-wrap justify-content-around align-items-center my-4">
              {/* Render news items */}
              {this.state.articles
                .slice(this.state.InitialIndex, this.state.MiddleIndex)
                .map((element) => (
                  <Newsitem
                    key={element.url}
                    title={
                      element.title
                        ? element.title.length < 45
                          ? (
                              element.title +
                              "...................................................................................................."
                            ).slice(0, 45)
                          : element.title.slice(0, 45)
                        : "----------------------NULL-------------------"
                    }
                    description={
                      element.description
                        ? element.description.length < 88
                          ? (
                              element.description +
                              "............................................................................................................................................................................................................................................................................"
                            ).slice(0, 88)
                          : element.description.slice(0, 88)
                        : "------------------------------------------NULL------------------------------------------"
                    }
                    imageurl={
                      element.image
                        ? element.image
                        : "https://th.bing.com/th?q=Local+News&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
                    }
                    newsurl={element.url}
                  />
                ))}
            </div>

            {/* Pagination buttons */}
            <div
              className="d-flex justify-content-between align-items-center"
              style={{
                height: "50px",
                marginTop: "10px",
                width: "180px",
                marginLeft: "230px",
              }}
            >
              <button
                type="button"
                onClick={() => this.updatepageleft(0)}
                className="btn btn-success btn-sm"
                disabled={this.state.InitialIndex === 0}
              >
                {"<"}
              </button>
              <div style={{ color: "white", fontSize: "11px", width: "70px" }}>
                Current Page : {this.state.CurrentPage + " / " + this.state.Pages}
              </div>
              <button
                type="button"
                onClick={() => this.updatepageright(0)}
                className="btn btn-success btn-sm"
                disabled={this.state.MiddleIndex === this.state.LastIndex}
              >
                {">"}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default News;
