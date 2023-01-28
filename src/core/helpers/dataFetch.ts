const camelToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

const addPaginationToUrl = (url: string, page: number, pageSize: number) => {
    return `${url}?page=${page + 1}&pageSize=${pageSize}`;
};

const addSortingToUrl = (url: string, sortModel: any) => {
    if (sortModel.length === 0) {
        return url;
    }

    const sort = sortModel.map((item: any) => {
        return `${camelToSnakeCase(item.colId)}&sortOrder=${item.sort.toUpperCase()}`;
    });

    return `${url}&sort=${sort.join('|')}`;
};

const addFilteringToUrl = (url: string, filterModel: any) => {
    if (Object.keys(filterModel).length === 0) {
        return url;
    }

    const filter = Object.keys(filterModel).map((key: string) => {
        const filter = filterModel[key];
        return `${key},${filter.filter},${filter.filterType}`;
    });

    return `${url}&filter=${filter.join('|')}`;
};

class ServerSideDataUrlBuilder {
    constructor(private url: string, private initUrl = url) {}

    addPagination(page: number, pageSize: number) {
        this.url = addPaginationToUrl(this.url, page, pageSize);
        return this;
    }

    addSorting(sortModel: any) {
        this.url = addSortingToUrl(this.url, sortModel);
        return this;
    }

    addFiltering(filterModel: any) {
        this.url = addFilteringToUrl(this.url, filterModel);
        return this;
    }

    build() {
        return this.url;
    }

    clear() {
        this.url = this.initUrl;
    }
}

export const buildServerSideDataUrl = (url: string) => {
    return new ServerSideDataUrlBuilder(url);
};

// PATTERN BUILDER
