class CacheService {
    static cachedData = {};

    constructor() {
        this.invalidCacheWindowInSeconds = 30;
    }

    get(cacheKey) {
        if (CacheService.cachedData.hasOwnProperty(cacheKey) && this.isCachedValueValid(cacheKey)) {
            return CacheService.cachedData[cacheKey];
        }
        return null;
    }

    addOrUpdate(cacheKey, value) {
        let expirationTime = new Date().getTime() + (value.expires_in - this.invalidCacheWindowInSeconds) * 1000;

        CacheService.cachedData[cacheKey] = {
            expirationTime: expirationTime,
            tokenResponse: value
        }
    }

    isCachedValueValid(cacheKey) {
        return new Date().getTime() < CacheService.cachedData[cacheKey].expirationTime;
    }
}

module.exports = CacheService;