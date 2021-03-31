// via: https://news.ycombinator.com/item?id=7222129
// found: http://davidwalsh.name/disable-console

(function () {
  try {
    var $_console$$ = console;
    Object.defineProperty(window, "console", {
      get: function () {
        if ($_console$$._commandLineAPI)
          throw "Sorry, for security reasons, the script console is deactivated on netflix.com";
        return $_console$$;
      },
      set: function ($val$$) {
        $_console$$ = $val$$;
      },
    });
  } catch ($ignore$$) {}
})();
