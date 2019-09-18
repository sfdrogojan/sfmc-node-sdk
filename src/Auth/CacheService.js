class CacheService {
    constructor(dateTimeProvider) {
        this.dateTimeProvider = dateTimeProvider;
        this.cachedData = {};
        this.invalidCacheWindowInSeconds = 5 * 60;
    }

    get(cacheKey) {
        if (this.cachedData.hasOwnProperty(cacheKey) && this.isCachedValueValid(cacheKey)) {
            return this.cachedData[cacheKey];
        }
        return null;
    }

    addOrUpdate(cacheKey, value) {
        let expirationTime = new Date().getTime() + (value.expires_in - this.invalidCacheWindowInSeconds) * 1000;

        this.cachedData[cacheKey] = {
            expirationTime: expirationTime,
            tokenResponse: value
        }
    }

    isCachedValueValid(cacheKey) {
        return new Date().getTime() < this.cachedData[cacheKey].expirationTime;
    }
}

module.exports = CacheService;