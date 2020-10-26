var plugins = [{
      plugin: require('/Users/kaitlynbreuil/Desktop/Projects/pizza_pizza/gatsby/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/kaitlynbreuil/Desktop/Projects/pizza_pizza/gatsby/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"05hux260","dataset":"production","watchMode":true,"token":"skeJ0jyiZO5s00EBsKG95Ofbt8eYhUtYO98KOy6eTPq2Aev43P1WCHcp59etPGsM7Al5wE7I8rzkEm7av4SooaQvZejzOUiw150KFWeuvsxMxah9DYQn605f2LSP9rAFyCVkyIMblVxV0lxtDdhwurIu1EBOt6oVJW2rmUrH5jqyt6gs2iqA"},
    },{
      plugin: require('/Users/kaitlynbreuil/Desktop/Projects/pizza_pizza/gatsby/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}