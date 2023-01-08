# Paul Graham Blog Reader

This short JS one-liner adjusts styles in Paul Graham's articles for better legibility (for me).

His articles are great, but I just wanted to center-align the content and have bigger text. That's all.

## How to use it

1. Open any Paul Graham's article in Chrome.

    Like this: http://paulgraham.com/startupideas.html

2. Get JavaScript one-liner with next command.

```bash
# If you're using mac, use pbcopy to copy the one-liner into the clipboard.
./get-one-liner.sh | pbcopy
```

3. Paste it into Chrome's address bar with `javascript:` prefix.

    Note: Even if I append the prefix, Chrome will automatically remove it on paste. So you have to type it by yourself.

    e.g. `javascript:let a = ...`

