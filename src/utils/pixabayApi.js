import axios from "axios";

const pixabayApi = {
  BASIC_URL: "https://pixabay.com/api/",

  otherOptions: "&image_type=photo&orientation=horizontal&per_page=12",

  key: "1992005-0c423af9a07f13d941d831108",

  page: 1,

  async getPhoto(query) {
    try {
      const finalURL = `${this.BASIC_URL}?q=${query}&key=${this.key}${this.otherOptions}&page=${this.page}`;
      const request = await axios.get(finalURL);

      this.pageIncrement();
      return request.data.hits;
    } catch (error) {
      alert(error);
    }
  },

  pageIncrement() {
    this.page += 1;
  },

  pageResset() {
    this.page = 1;
  }
};

export default pixabayApi;
