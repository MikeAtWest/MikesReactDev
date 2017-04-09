import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackProcessingPlugin from 'html-webpack-processing-plugin';

function sortChunks(chunkOrder, chunk1, chunk2) {
  var order1 = chunkOrder.indexOf(chunk1.names[0]);
  var order2 = chunkOrder.indexOf(chunk2.names[0]);
  return order1 - order2;
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'gi'), replace);
}

function transformLinksToJSON(originalHTML) {
  //Remove <head> tags.
  let newHTML = replaceAll(originalHTML, "<head>", "");
  newHTML = replaceAll(newHTML, "</head>", "");

  //Add comma after each link.
  newHTML = replaceAll(newHTML, "rel=\"stylesheet\">", "rel=\"stylesheet\">,");
  newHTML = replaceAll(newHTML, "</script>", "</script>,");

  //Insert (RESOURCE_PATH) into each link.
  newHTML = replaceAll(newHTML, "href=\"", "href=\"(RESOURCE_PATH)");
  newHTML = replaceAll(newHTML, "src=\"", "src=\"(RESOURCE_PATH)");

  //Convert to JSON notation.
  var resources = newHTML.split(",");
  resources.pop(); //Remove last item.
  var resourcesString = JSON.stringify(resources, null, 2);

  return resourcesString;
}

var htmlMinificationSettings = {
  removeComments: true,
  collapseWhitespace: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  removeStyleLinkTypeAttributes: true,
  keepClosingSlash: true,
  minifyJS: true,
  minifyCSS: true,
  minifyURLs: true
}

export default {
  devtool: 'source-map',
  entry: {
    index: path.resolve(__dirname, 'src/index'),
    hello: path.resolve(__dirname, 'src/components/helloWorld/helloPage'),
    news: path.resolve(__dirname, 'src/components/news/newsPage'),
    staffDirectorySearch: path.resolve(__dirname, 'src/components/staffDirectorySearch/demoPage/staffDirectorySearchPage'),
    vendor: ['jquery', 'react', 'react-dom', 'toastr']
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
    library: 'myLibrary'
    //filename: '[name].[chunkhash].js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
  },
  plugins: [
    // Use minified production build of React.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    //Set to debug mode.
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    // Generate an external css file with a hash in the filename
    new ExtractTextPlugin('[name].css'),
    //new ExtractTextPlugin('[name].[contenthash].css'),
    // Hash the files using Md5 so that their names change when their content changes.
    new WebpackMd5Hash(),
    // Use CommonsChunkPlugin to create a sepaerate bundle of vendor libraries so that they will be cached seperately.
    new webpack.optimize.CommonsChunkPlugin({
      //names: ['index', 'hello', 'news', 'vendor']
      names: ['vendor']
    }),

    //Create 'home pages' for each of the React component types (plus the non-React 'index' example).

    // Create HTML file that includes reference to bundled JS. For index.html.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      minify: htmlMinificationSettings,
      chunksSortMode: function (chunk1, chunk2) {
        return sortChunks(['vendor', 'index'], chunk1, chunk2);
      },
      chunks: ['vendor', 'index'],
      inject: true
      // Properties you define here are available in index.html using htmlWebpackPlugin.options.varname
      //trackJSToken: 'f761fe0028f6444b860f401015de3d0c'
    }),

    // Create HTML file that includes reference to bundled JS. For hello.html.
    new HtmlWebpackPlugin({
      template: 'src/components/helloWorld/helloPage.html',
      filename: 'helloPage.html',
      minify: htmlMinificationSettings,
      chunksSortMode: function (chunk1, chunk2) {
        return sortChunks(['vendor', 'hello'], chunk1, chunk2);
      },
      chunks: ['vendor', 'hello'],
      inject: true
    }),

    // Create HTML file that includes reference to bundled JS. For news.html.
    new HtmlWebpackPlugin({
      template: 'src/components/news/newsPage.html',
      filename: 'newsPage.html',
      minify: htmlMinificationSettings,
      chunksSortMode: function (chunk1, chunk2) {
        return sortChunks(['vendor', 'news'], chunk1, chunk2);
      },
      chunks: ['vendor', 'news'],
      inject: true
    }),

    // Create HTML file that includes reference to bundled JS. For staffDirectorySearch.html.
    new HtmlWebpackPlugin({
      template: 'src/components/staffDirectorySearch/demoPage/staffDirectorySearchPage.html',
      filename: 'staffDirectorySearchPage.html',
      minify: htmlMinificationSettings,
      chunksSortMode: function (chunk1, chunk2) {
        return sortChunks(['vendor', 'staffDirectorySearch'], chunk1, chunk2);
      },
      chunks: ['vendor', 'staffDirectorySearch'],
      inject: true
    }),

    // Create HTML file that includes reference to bundled JS. For multiple.html.
    new HtmlWebpackPlugin({
      template: 'src/components/multiple/multiplePage.html',
      filename: 'multiplePage.html',
      minify: htmlMinificationSettings,
      chunksSortMode: function (chunk1, chunk2) {
        return sortChunks(['vendor', 'news', 'hello', 'staffDirectorySearch'], chunk1, chunk2);
      },
      chunks: ['vendor', 'news', 'hello', 'staffDirectorySearch'],
      inject: true
    }),

    // Minify js
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),

    // Create JSON files that ONLY includes references to the resources requried by each component. Used by CMS when requesting reources for the portlet.

    new HtmlWebpackProcessingPlugin(),

    new HtmlWebpackPlugin({
      template: 'src/blank_template.html',
      filename: 'news_resources.json',
      chunksSortMode: function (chunk1, chunk2) {
        return sortChunks(['vendor', 'news'], chunk1, chunk2);
      },
      chunks: ['vendor', 'news'],
      inject: 'head',
      postProcessing: originalHTML => {
        return transformLinksToJSON(originalHTML);
      }
    }),

    new HtmlWebpackPlugin({
      template: 'src/blank_template.html',
      filename: 'hello_resources.json',
      chunksSortMode: function (chunk1, chunk2) {
        return sortChunks(['vendor', 'hello'], chunk1, chunk2);
      },
      chunks: ['vendor', 'hello'],
      inject: 'head',
      postProcessing: originalHTML => {
        return transformLinksToJSON(originalHTML);
      }
    }),

    new HtmlWebpackPlugin({
      template: 'src/blank_template.html',
      filename: 'staffDirectorySearch_resources.json',
      chunksSortMode: function (chunk1, chunk2) {
        return sortChunks(['vendor', 'staffDirectorySearch'], chunk1, chunk2);
      },
      chunks: ['vendor', 'staffDirectorySearch'],
      inject: 'head',
      postProcessing: originalHTML => {
        return transformLinksToJSON(originalHTML);
      }
    })

  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [{ loader: 'awesome-typescript-loader', options: { sourceMap: true, minimize: true } }]
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: [{ loader: 'awesome-typescript-loader', options: { sourceMap: true, minimize: true } }]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ fallback: "style-loader", use: [{ loader: 'css-loader', options: { sourceMap: true, minimize: true } }] })
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        exclude: path.resolve(__dirname, 'src/app')
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  }
}
