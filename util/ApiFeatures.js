class APIFeatures {
  constructor(queryHostel, queryString) {
    (this.queryHostel = queryHostel), (this.queryString = queryString);
  }

  //Filter
  filter() {
    const queryObj = { ...this.queryString };

    const excludefields = ["fields", "page", "sort", "limit"]; //Filter and delete
    excludefields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj); //Filter ,find and replace // Remeber to change this to  lower case
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    this.queryHostel.find(JSON.parse(queryStr));

    return this;
  }

  //Sort query
  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.queryHostel = this.queryHostel.sort(sortBy); //sort(Sort A, Sort B and so on)
    } else {
      this.queryHostel = this.queryHostel.sort("-createdAt"); //sort by time it was created
    }
    return this;
  }

  //Limit fields sent to user
  limitPage() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(",").join(" ");
      this.queryHostel = this.queryHostel.select(fields); // show what the user wants
    } else {
      this.queryHostel = this.queryHostel.select("-__v"); // dont show this
    }
    return this;
  }

  //Pagination
  pagination() {
    const page = this.queryString.page * 1 || 1;
    const limitPage = this.queryString.limit * 1 || 100;
    const skipPages = (page - 1) * limitPage; //eg: if page input = 3 do (3-1 = 2) * 10... Skip 2 pages and land me to page 3

    this.queryHostel = this.queryHostel.skip(skipPages).limit(limitPage);
    return this;
  }
}

module.exports = APIFeatures;
