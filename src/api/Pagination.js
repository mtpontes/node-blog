class Pagination {
  constructor(page = 1, limit = 10) {
    this.page = Number(page);
    this.limit = Number(limit);
    this.offset = (this.page - 1) * this.limit;
  }

  paginatedReturn(result) {
    return {
      data: result.rows,
      total: result.count,
      page: this.page,
      totalPages: Math.ceil(result.count / this.limit)
    };
  }
}

module.exports = Pagination;