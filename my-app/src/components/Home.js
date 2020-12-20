import React from "react";
import Form from "../components/Form";
import { connect } from "react-redux";
import { fetchPosts, deletePost } from "../actions/postActions";

class Home extends React.Component {
  state = {
    shop: {},
  };
  componentDidMount() {
    this.props.fetchPosts();
  }

  sendData = async (id, title, description, price) => {
    await this.setState({
      shop: {
        id: id,
        title: title,
        description: description,
        price: price,
      },
    });
    console.log(this.state.shop);
  };

  new = () => {
    this.setState({
      shop: {},
    });
  };

  delete = (id) => {
    this.new();
    this.props.deletePost(id);
  };

  render() {
    return (
      <React.Fragment>
        <Form info={this.state.shop} new={this.new} />
        <h3 className="text-light m-4">List of items</h3>
        {this.props.posts.map((item) => (
          <div className="card m-3 float-left" key={item.id}>
            <div className="card-body">
              <button type="button" className="close" aria-label="Close" onClick={() => this.delete(item.id)}>
                <span aria-hidden="true">&times;</span>
              </button>
              <h5
                className="card-title"
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => this.sendData(item.id, item.title, item.description, item.price)}
              >
                {item.title}
              </h5>
              <p className="card-text">{item.description}</p>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.items,
});

export default connect(mapStateToProps, { fetchPosts, deletePost })(Home);
