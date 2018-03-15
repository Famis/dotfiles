exports.decorateBrowserOptions = defaults => Object.assign({}, defaults, {
  frame: true
})

module.exports.onWindow = function(win) {
    win.setAutoHideMenuBar(true);
}
