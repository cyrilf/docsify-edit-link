function install(hook, vm) {
  var editLinkConfig = vm.config.editLink || {}
  var text = editLinkConfig.text || 'Edit this page'
  var editUrl = editLinkConfig.editUrl

  if (!editUrl) {
    if (!vm.config.repo) {
      throw Error('$docsify.editLink.baseUrl is required. Check your config.')
    }

    // try to create the edit url from the `config.repo`
    editUrl = /\/\//.test(vm.config.repo)
      ? vm.config.repo
      : 'https://github.com/' + vm.config.repo

    editUrl = editUrl.replace(/^git\+/, '')
    editUrl = editUrl + '/edit/master/docs/'
  }

  hook.afterEach(function (html) {
    var editLink = '<p class="edit-link" style="text-align: right;">' +
      '<a href="' + editUrl + vm.route.file + '" target="_blank">' + text + '</a></p>'

    return editLink + html
  });
}

$docsify.plugins = [].concat(install, $docsify.plugins)
