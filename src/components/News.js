import React, { Component } from "react";
import Newsitem from "./Newsitem";
import { AiOutlineRead } from "react-icons/ai";

export class News extends Component {
  articles = [
    // ... your initial articles
    {
      source: { id: "the-verge", name: "The Verge" },
      author: "Wes Davis",
      title: "Sony shows off the PS5 Pro’s liquid metal updates - The Verge",
      description:
        "Sony highlights updated liquid metal cooling design in the PS5 Pro aimed at better stabilizing the material’s cooling effect.",
      url: "https://www.theverge.com/news/652556/ps5-pro-teardown-liquid-metal-cooling-changes",
      urlToImage:
        "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25717639/247361_PS5_Pro_VPavic_40_2.jpg?quality=90&strip=all&crop=0%2C10.76363770124%2C100%2C78.472724597521&w=1200",
      publishedAt: "2025-04-21T18:06:34Z",
      content:
        "New grooves may address complaints of liquid metal leaking in the standard PS5.\r\nNew grooves may address complaints of liquid metal leaking in the standard PS5.\r\nSony has published a new teardown of … [+1843 chars]",
    },
    {
      source: { id: "news-24", name: "On3.com" },
      author: "Sam Gillenwater",
      title:
        "Report: Tennessee to meet with top transfer quarterback after Nico Iamaleava departure - On3.com",
      description:
        " lorem is presn cis lcohs vjj ooicd coib fjfo kviop ofood lorem is presn cis lcohs vjj ooicd coib fjfo kviop ofood lorem is presn cis lcohs vjj ooicd coib fjfo kviop ofood",
      url: "https://www.on3.com/college/tennessee-volunteers/news/report-tennessee-meeting-with-former-ucla-qb-joey-aguilar-after-nico-iamaleava-transfer/",
      urlToImage:
        "https://on3static.com/uploads/dev/assets/cms/2024/01/30180850/tennessee_logo.jpg",
      publishedAt: "2025-04-21T17:48:45Z",
      content:
        "UCLAofficially adding QB Nico Iamaleava in the portal on Sunday changed things for QB Joey Aguilar, who transferred this offseason, as he intends to transfer again per news on Monday. Now, it could a… [+2340 chars]",
    },
    {
      source: { id: "news-global", name: "CBM (Comic Book Movie)" },
      author: "JoshWilding",
      title:
        "ANDOR Season 2's Rotten Tomatoes Score Revealed As First Reviews Arrive For Latest STAR WARS TV Series - ComicBookMovie.com",
      description:
        "ANDOR Season 2's Rotten Tomatoes Score Revealed As First Reviews Arrive For Latest STAR WARS TV Series",
      url: "https://comicbookmovie.com/tv/star-wars/cassian-andor/andor-season-2s-rotten-tomatoes-score-revealed-as-first-reviews-arrive-for-latest-star-wars-tv-series-a218843",
      urlToImage:
        "https://comicbookmovie.com/images/articles/banners/andor-season-2s-rotten-tomatoes-score-revealed-as-first-reviews-arrive-for-latest-star-wars-tv-series-ab218843.jpg",
      publishedAt: "2025-04-21T17:38:02Z",
      content:
        "As we first reported on SFFGazette.com, the reviews are in for Andor season 2, and they're just as positive as those for the show's first season.\r\nThere are a few familiar complaints, mostly about th… [+3455 chars]",
    },
  ];
  articles1 = [
    // ... your initial articles1
    {
      source: { id: "axios", name: "Axios" },
      author: "Maya Goldman",
      title:
        "Supreme Court seems likely to uphold ACA preventive services mandate - Axios",
      description:
        "The outcome could decide access to no-cost screenings, tests, HIV drugs and counseling for Americans with private health insurance.",
      url: "https://www.axios.com/2025/04/21/aca-supreme-court-preventive-services",
      urlToImage:
        "https://images.axios.com/o8MC_nkoHyyY4VmqYCpcKRdt71o=/0x0:4000x2250/1366x768/2025/04/21/1745242578191.jpg",
      publishedAt: "2025-04-21T17:26:30Z",
      content:
        "Supreme Court justices appeared inclined Monday to keep the Affordable Care Act's requirement that insurers cover certain recommended preventive services at no cost.\r\nWhy it matters: At stake is acce… [+1378 chars]",
    },
    {
      source: { id: null, name: "NPR" },
      author: "",
      title:
        "Exclusive: The White House is looking to replace Pete Hegseth as defense secretary - NPR",
      description:
        "The White House has begun the process of looking for a new secretary of defense, according to a U.S. official who was not authorized to speak publicly.",
      url: "https://www.npr.org/2025/04/21/nx-s1-5371312/trump-white-house-pete-hegseth-defense-department",
      urlToImage:
        "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5180x2914+0+0/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F50%2F9b%2F4c844fd74a9fba31fd301a046258%2Fgettyimages-2211267281.jpg",
      publishedAt: "2025-04-21T17:22:51Z",
      content:
        "The White House has begun the process of looking for a new secretary of defense, according to a U.S. official who was not authorized to speak publicly. \r\nThis comes as Defense Secretary Pete Hegseth … [+1047 chars]",
    },
    {
      source: { id: null, name: "Ftc.gov" },
      author: null,
      title:
        "FTC Takes Action Against Uber for Deceptive Billing and Cancellation Practices - Federal Trade Commission (.gov)",
      description:
        "The Federal Trade Commission filed a lawsuit today against Uber, alleging the rideshare and delivery company charged consumers for its Uber One subscription service without their consent, failed to",
      url: "https://www.ftc.gov/news-events/news/press-releases/2025/04/ftc-takes-action-against-uber-deceptive-billing-cancellation-practices",
      urlToImage:
        "https://www.ftc.gov/themes/custom/ftc_uswds/img/ftc_social_share_default_en.jpg",
      publishedAt: "2025-04-21T17:00:00Z",
      content:
        "The Federal Trade Commission filed a lawsuit today against Uber, alleging the rideshare and delivery company charged consumers for its Uber One subscription service without their consent, failed to d… [+3040 chars]",
    },
  ];
  articles2 = [
    // ... your initial articles2
    {
      source: { id: "ars-technica", name: "Ars Technica" },
      author: "Andrew Cunningham",
      title:
        "In depth with Windows 11 Recall—and what Microsoft has (and hasn’t) fixed - Ars Technica",
      description:
        "Original botched launch still haunts new version of data-scraping AI feature.",
      url: "https://arstechnica.com/gadgets/2025/04/in-depth-with-windows-11-recall-and-what-microsoft-has-and-hasnt-fixed/",
      urlToImage:
        "https://cdn.arstechnica.net/wp-content/uploads/2025/04/recall-feature-1152x648-1745247831.jpg",
      publishedAt: "2025-04-21T16:51:34Z",
      content: null,
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Amanda Silberling",
      title: "Bluesky launches blue check verification - TechCrunch",
      description:
        "Bluesky announced on Monday that it is rolling out blue check verification, confirming previous rumors that this feature was on its way to the platform.",
      url: "https://techcrunch.com/2025/04/21/bluesky-launches-blue-check-verification/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2022/11/twitter-verified.jpg?resize=1200,813",
      publishedAt: "2025-04-21T16:37:04Z",
      content:
        "Bluesky announced on Monday that it is rolling out blue check verification, confirming previous rumors that this feature was on its way to the platform.\r\nLike Twitter’s original blue check (RIP), Blu… [+1505 chars]",
    },
    {
      source: { id: null, name: "Sports Illustrated" },
      author: "Tim Capurso",
      title:
        "Jimmy Butler Had Priceless Reaction to Steph Curry’s Ridiculous Shot vs. Rockets - Sports Illustrated",
      description: "Even Butler was left shaking his head watching Curry.Even Butler was left shaking his head watching Curry.",
      url: "https://www.si.com/nba/jimmy-butler-priceless-reaction-steph-curry-ridiculous-shot-vs-rockets",
      urlToImage:
        "https://images2.minutemediacdn.com/image/upload/c_crop,w_612,h_344,x_0,y_0/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/si/01jscf6ehndssp491tcd.png",
      publishedAt: "2025-04-21T15:50:32Z",
      content:
        "With a barrage of three-pointers and shifty slashes into the paint, Stephen Curry put on a show for the Golden State Warriors, scoring a game-high 31 points in his team's 95-85 Game 1 win over the Ho… [+1544 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      articles1: this.articles1,
      articles2: this.articles2,
      loading: false,
      // Initialize random indices for slicing
      randomIndex: this.getRandomIndex(this.articles),
      randomIndex1: this.getRandomIndex(this.articles1),
      randomIndex2: this.getRandomIndex(this.articles2),
    };
  }

  // Function to generate a random index for slicing
  getRandomIndex = (articlesArray) => {
    const max = articlesArray.length - 3;
    if (max < 0) {
      return 0; // Default to 0 if not enough articles
    }
    return Math.floor(Math.random() * (max + 1));
  };

  async componentDidMount() {
    // Fetch articles and update state
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d2223cddfe224378859af7feae1efc0d";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      randomIndex: this.getRandomIndex(parsedData.articles),
    });

    let url1 = "https://newsapi.org/v2/everything?q=apple&from=2025-04-22&to=2025-04-22&sortBy=popularity&apiKey=d2223cddfe224378859af7feae1efc0d";
    let data1 = await fetch(url1);
    let parsedData1 = await data1.json();
    this.setState({
      articles1: parsedData1.articles,
      randomIndex1: this.getRandomIndex(parsedData1.articles),
    });

    let url2 = "https://newsapi.org/v2/everything?q=sport&from=2025-03-23&sortBy=publishedAt&apiKey=d2223cddfe224378859af7feae1efc0d";
    let data2 = await fetch(url2);
    let parsedData2 = await data2.json();
    this.setState({
      articles2: parsedData2.articles,
      randomIndex2: this.getRandomIndex(parsedData2.articles),
    });
  }

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
        <div
          className="container my-5 newssection"
          style={{
            height: "1050px",
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
            className="container border d-flex justify-content-around align-items-center my-4"
            style={{ height: "280px",borderRadius: "20px"}}
          >
            {this.state.articles
              .slice(this.state.randomIndex, this.state.randomIndex + 3)
              .map((element) => (
                <Newsitem
                  key={element.url}
                  title={
                    element.title
                      ? element.title.slice(0, 45)
                      : "----------------------NULL-------------------"
                  }
                  description={
                    element.description
                      ? element.description.slice(0, 88)
                      : "------------------------------------------NULL------------------------------------------"
                  }
                  imageurl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://th.bing.com/th?q=Local+News&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
                  }
                  newsurl={element.url}
                />
              ))}
          </div>
          <div
            className="container border d-flex justify-content-around align-items-center my-4"
            style={{ height: "280px",borderRadius: "20px"}}
          >
            {this.state.articles1
              .slice(this.state.randomIndex1, this.state.randomIndex1 + 3)
              .map((element) => (
                <Newsitem
                  key={element.url}
                  title={
                    element.title
                      ? element.title.slice(0, 45)
                      : "----------------------NULL-------------------"
                  }
                  description={
                    element.description
                      ? element.description.slice(0, 88)
                      : "------------------------------------------NULL------------------------------------------"
                  }
                  imageurl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://th.bing.com/th?q=Local+News&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
                  }
                  newsurl={element.url}
                />
              ))}
          </div>
          <div
            className="container border d-flex justify-content-around align-items-center my-4"
            style={{ height: "280px",borderRadius: "20px"}}
          >
            {this.state.articles2
              .slice(this.state.randomIndex2, this.state.randomIndex2 + 3)
              .map((element) => (
                <Newsitem
                  key={element.url}
                  title={
                    element.title
                      ? element.title.slice(0, 45)
                      : "----------------------NULL-------------------"
                  }
                  description={
                    element.description
                      ? element.description.slice(0, 88)
                      : "------------------------------------------NULL------------------------------------------"
                  }
                  imageurl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://th.bing.com/th?q=Local+News&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
                  }
                  newsurl={element.url}
                />
              ))}
          </div>
        </div>
      </>
    );
  }
}

export default News;
