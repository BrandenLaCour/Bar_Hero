import React from "react";
import ImageUploader from "react-images-upload";

class Uploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    console.log(picture, "has been added to the database");
    this.setState({
      pictures: this.state.pictures.concat(picture)
    });
  }

  render() {
    return (
      <ImageUploader
        fileContainerStyle={{ height: "14px", width: "100px", all: "inherit" }}
        buttonText="Upload"
        onChange={this.onDrop}
        withLabel={false}
        withIcon={false}
      />
    );
  }
}

export default Uploader;
