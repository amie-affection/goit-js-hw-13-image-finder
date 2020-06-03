import axios from 'axios';

const api = {
  apiKey: '16769549-77e013c4c462af3357f93945e',
  searchQuery: '',
  page: 1,

  async getImage() {
    const res = await axios.get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${this.apiKey}`,
    );
    this.page += 1;
    return res.data.hits;
  },
  reset() {
    this.page = 1;
  },
};

export default api;
