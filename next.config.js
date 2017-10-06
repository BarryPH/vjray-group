// For static exports
// https://github.com/zeit/next.js#static-html-export

module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/strata-management': { page: '/strata-management' },
      '/rental-property-management': { page: '/rental-property-management' },
      '/contact': { page: '/contact' }
    }
  }
}