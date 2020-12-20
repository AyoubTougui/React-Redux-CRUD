import React from "react";
import { connect } from "react-redux";
import { newPost, updatePost, clearErrors } from "../actions/postActions";

class Form extends React.Component {
  state = {
    title: "",
    description: "",
    price: 0,
  };

  changeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  changePrice = (event) => {
    this.setState({
      price: event.target.value,
    });
  };

  changeDes = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    var user = {
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
    };

    if (user.title === "") {
      user.title = this.props.info.title;
    }

    if (user.description === "") {
      user.description = this.props.info.description;
    }

    if (user.price === 0) {
      user.price = this.props.info.price;
    }

    console.log(user);

    if (this.props.info.id === undefined) {
      this.props.newPost(user);
    } else {
      this.props.updatePost(user, this.props.info.id);
    }

    this.setState({
      title: "",
      description: "",
      price: 0,
    });
    this.props.new();
    event.target.reset();
  };

  titleERR = () => {
    if (this.props.errors.length !== 0) {
      if (this.props.errors.title !== undefined) {
        return <span className="text-light">{this.props.errors.title[0]}</span>;
      } else {
        return null;
      }
    }
  };
  priceERR = () => {
    if (this.props.errors.length !== 0) {
      if (this.props.errors.price !== undefined) {
        return <span className="text-light">{this.props.errors.price[0]}</span>;
      } else {
        return null;
      }
    }
  };
  descERR = () => {
    if (this.props.errors.length !== 0) {
      if (this.props.errors.description !== undefined) {
        return <span className="text-light">{this.props.errors.description[0]}</span>;
      } else {
        return null;
      }
    }
  };

  handleReset = () => {
    this.props.new();
    this.props.clearErrors();
  };

  render() {
    return (
      <form className="mx-4 mt-2" id="form" onSubmit={this.handleSubmit} onReset={this.handleReset}>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1" className="text-light">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="title"
            autoComplete="off"
            onChange={this.changeTitle}
            defaultValue={this.props.info.title}
          />
          {this.titleERR()}
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlInput1" className="text-light">
            Price
          </label>
          <input
            type="text"
            name="price"
            className="form-control"
            id="price"
            autoComplete="off"
            onChange={this.changePrice}
            defaultValue={this.props.info.price}
          />
          {this.priceERR()}
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1" className="text-light">
            Description
          </label>
          <textarea
            className="form-control"
            name="description"
            id="description"
            rows="3"
            autoComplete="off"
            onChange={this.changeDes}
            defaultValue={this.props.info.id === undefined ? "" : this.props.info.description}
          ></textarea>
          {this.descERR()}
        </div>

        <button type="submit" className="btn bg-light mb-2">
          {this.props.info.id === undefined ? "Add" : "Edit"}
        </button>
        <input type="reset" className="btn bg-light ml-2 mb-2" value="New" />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.posts.errors,
});

export default connect(mapStateToProps, { newPost, updatePost, clearErrors })(Form);
