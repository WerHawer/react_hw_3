import React, { Component } from "react";
import pixabayApi from "../utils/pixabayApi";
import Header from "./Header";
import SearchForm from "./SearchForm";
import ImageGalery from "./ImageGalery";
import Loader from "react-loader-spinner";
import BigPhotoModal from "./BigPhotoModal";
import NoResults from "../NoResults";
import Button from "./UI/Button";

class App extends Component {
  state = {
    query: "",
    photos: [],
    fullSize: false,
    isLoading: false,
    bigUrl: "",
  };

  componentDidMount() {
    this.handleFetch(this.state.query);
  }

  handleNewQueryFetch = async () => {
    this.setState({ isLoading: true });
    try {
      const photosApi = await pixabayApi.getPhoto(this.state.query);
      this.setState({ photos: photosApi });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleFetch = async () => {
    this.setState({ isLoading: true });
    try {
      const photosApi = await pixabayApi.getPhoto(this.state.query);
      this.setState(({ photos }) => ({ photos: [...photos, ...photosApi] }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleChangeQuery = (e) => {
    this.setState({ query: e.target.value });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    pixabayApi.pageResset();
    this.handleNewQueryFetch();
  };

  onClickBtn = async () => {
    await this.handleFetch();
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  onClickPhoto = (e) => {
    const { photos } = this.state;

    const targetPhoto = photos.find(({ id }) => id === +e.target.id);
    this.setState({ fullSize: true, bigUrl: targetPhoto.largeImageURL });
  };

  onClickOverlay = (e) => {
    if (e.target.nodeName === "IMG") return;

    this.setState({ fullSize: false });
  };

  onPressEsc = (e) => {
    const hideModal = (e) => {
      if (e.code === "Escape") {
        this.setState({ fullSize: false });
        window.removeEventListener("keydown", hideModal);
      }
    };
    window.addEventListener("keydown", hideModal);
  };

  render() {
    const { query, photos, fullSize, bigUrl, isLoading } = this.state;

    return (
      <div>
        <Header>
          <SearchForm
            onSubmit={this.onSubmitForm}
            onChange={this.handleChangeQuery}
            value={query}
          />
        </Header>

        <ImageGalery onClick={this.onClickPhoto} photos={photos} />

        {isLoading && (
          <div className="Loader">
            <Loader type="ThreeDots" color="#3f51b5" height={80} width={80} />
          </div>
        )}

        {photos.length > 0 && !isLoading ? (
          <Button
            type="button"
            name="loadMore"
            onClick={this.onClickBtn}
            customClass="Button"
          >
            Load more
          </Button>
        ) : null}

        {fullSize && (
          <BigPhotoModal
            onClick={this.onClickOverlay}
            bigUrl={bigUrl}
            onKeyPress={this.onPressEsc()}
          />
        )}

        {!photos.length && !isLoading ? <NoResults /> : null}
      </div>
    );
  }
}

export default App;
