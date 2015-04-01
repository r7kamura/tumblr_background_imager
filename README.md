# Tumblr Background Imager
Change background-image periodically using Tumblr's API

## Example
[Demo](http://r7kamura.github.io/tumblr_background_imager/)

```html
<!DOCTYPE HTML>
<html>
<head>
  <meta charset="UTF-8">
  <title>Demo - Tumblr Background Imager</title>
  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
  <script type="text/javascript" src="http://r7kamura.tumblr.com/api/read/json?num=50&type=photo"></script>
  <script type="text/javascript" src="js/tumblr_background_imager.js"></script>
  <style type="text/css">
  body {
    width: 100%;
    height: 100%;
    background-attachment: fixed;
    background-size: cover;
  }
  </style>
</head>
<body>
</body>
</html>
```
