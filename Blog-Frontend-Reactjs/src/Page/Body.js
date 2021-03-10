import React from "react";
import axios from "axios";
import Comment from "../Components/Comments/Comment";
import NumberComment from "../Components/Comments/NumberComment";
import InfiniteScroll from "react-infinite-scroll-component";

class Body extends React.Component{
  constructor(){
    super()
    this.state = {
      posts : [],
      items: Array.from({ length: 7 }),
      hasMore: true
    }
    this.show = this.show.bind(this);
  }

  componentDidMount(){
    let url = 'http://localhost:3001/posts';
    axios.get(url) 
      .then((res) => {
        this.setState({
          posts : res.data
        })
      })
  }

  show(event){
    this.state.posts[event.target.dataset.id].showMore = true
    this.setState({
      posts : this.state.posts
    })
  }

  fetchMoreData = () => {
    if (this.state.items.length >= this.state.posts.length) {
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 7 }))
      });
    }, 500);
  };

  render(){
    const {posts} = this.state;
    return (
      <React.Fragment>
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
        {posts.map((item, index) => (
          <div className="post">
            <h4>Post title {index + 1}</h4>
            <p className="author">Author: {item.Author}</p>
            <p>Create at: {item.DayCreate.slice(0, 10)}</p>
            <br/>

            {item.Status.length >= 100  && !item.showMore &&
              <p>
                {item.Status.substring(0, 100)} <button data-id={index} onClick={this.show}>...More</button>
              </p>}
            {item.Status.length >= 100  && item.showMore == true && 
              <p>
                {item.Status}
              </p>}

            <NumberComment number={item.Reply.length} >
              {item.Reply.map((itemComment, index) => (
                <Comment 
                  key = {index}
                  name = {itemComment.Name}
                  avatar = {itemComment.Avatar}
                  comment = {itemComment.Comment}
                  daycomment = {itemComment.DayComment.slice(0, 10)}/>
              ))}
            </NumberComment>
          </div>
          
        ))} 
        
        </InfiniteScroll>
      </React.Fragment>
    )
  }
}

export default Body;
